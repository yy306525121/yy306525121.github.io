---
# 文章标题
title: MacOS自动更换桌面壁纸
# 设置写作时间
date: 2025-04-16
# 一个页面可以有多个分类
category:
  - 使用指南
  - MacOS
# 一个页面可以有多个标签
tag:
  - 壁纸
  - MacOS
  - 桌面
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 侧边栏的顺序
# 数字越小越靠前，支持非整数和负数，比如 -10 < -9.5 < 3.2, order 为 -10 的文章会最靠上。
# 个人偏好将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。
order: -1
---

本次文章通过一个脚本搭配MacOS（Sequoia 15.2）系统的自动化脚本实现一个定期自动更换桌面壁纸的功能，桌面壁纸来源于https://bing.ee123.net，思路来源于Grok AI整理并收集。

## 注意事项
* 确保 Python 3 已安装
* 确保 Python 3 已经安装 requests 库
* 如果壁纸没有正确更换，检查日志文件（/Users/your_username/wallpaper_change.log）以排查问题。
* 确保壁纸文件夹和脚本文件有适当的读写权限。

## 提供几个壁纸API，可自行替换脚本中的WALLPAPER_URL
* [Bing壁纸](https://bing.ee123.net)
* [美女壁纸](https://api.liuzhuai.com/img/)
* [随机美女壁纸2](https://api.btstu.cn/sjbz/api.php?lx=meizi&format=images)
* [随机二次元壁纸](https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images)

## Python脚本

* 需要将脚本中WALLPAPER_DIR修改为你存放壁纸的实际文件夹路径（例如/Users/your_username/Pictures/Wallpapers）
* 确保壁纸文件夹中包含支持的图片格式（.jpg, .jpeg, .png, .gif）
* 将日志路径中的 your_username 替换为你的 macOS 用户名。

Python脚本保存后存放到/Users/your_username/Scripts/change_wallpaper.py

```python
import os
import requests
import subprocess
from datetime import datetime
import logging
import glob

# 设置保存壁纸的文件夹路径，请修改为你的路径
WALLPAPER_DIR = "/Users/your_username/Pictures/Wallpapers"
# 必应随机壁纸 API
WALLPAPER_URL = "https://bing.ee123.net/img/rand?size=UHD"

# 设置日志
logging.basicConfig(
    filename=f"/Users/your_username/wallpaper_change_{datetime.now().strftime('%Y%m')}.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

def clear_old_wallpapers():
    """删除壁纸文件夹中的旧壁纸文件"""
    try:
        wallpaper_files = glob.glob(os.path.join(WALLPAPER_DIR, "wallpaper_*.jpg"))
        for file in wallpaper_files:
            os.remove(file)
            logging.info(f"已删除旧壁纸: {file}")
    except Exception as e:
        logging.error(f"删除旧壁纸失败: {str(e)}")

def download_wallpaper():
    """从必应下载随机壁纸并保存到本地"""
    try:
        # 创建壁纸文件夹（如果不存在）
        os.makedirs(WALLPAPER_DIR, exist_ok=True)

        # 获取当前时间作为文件名
        time_str = datetime.now().strftime("%Y%m%d_%H%M%S")
        wallpaper_path = os.path.join(WALLPAPER_DIR, f"wallpaper_{time_str}.jpg")

        # 下载图片
        response = requests.get(WALLPAPER_URL, stream=True)
        if response.status_code == 200:
            with open(wallpaper_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            logging.info(f"壁纸下载成功: {wallpaper_path}")
            return wallpaper_path
        else:
            logging.error(f"下载壁纸失败，状态码: {response.status_code}")
            return None
    except Exception as e:
        logging.error(f"下载壁纸时出错: {str(e)}")
        return None

def change_wallpaper():
    """更改桌面壁纸"""
    # 先清理旧壁纸
    clear_old_wallpapers()

    # 下载新壁纸
    wallpaper_path = download_wallpaper()

    if not wallpaper_path or not os.path.exists(wallpaper_path):
        logging.error("没有可用的壁纸文件")
        return

    try:
        # 修正后的 AppleScript，兼容多显示器和最新 macOS
        script = f"""
          tell application "System Events"
            tell every desktop
              set picture to "{wallpaper_path}"
            end tell
          end tell
        """
        result = subprocess.run(['osascript', '-e', script], capture_output=True, text=True, check=True)
        logging.info(f"壁纸已更改为: {wallpaper_path}")
        logging.debug(f"AppleScript 输出: {result.stdout}")
    except subprocess.CalledProcessError as e:
        logging.error(f"更改壁纸失败: {str(e)}")
        logging.error(f"AppleScript 错误输出: {e.stderr}")
    except Exception as e:
        logging.error(f"更改壁纸时发生未知错误: {str(e)}")

if __name__ == "__main__":
    change_wallpaper()
```

## 设置定时任务

使用 macOS 的 launchd 来定时运行脚本。创建一个 plist 文件来配置定时任务。

脚本说明：
  * 脚本会每隔1800s(半小时)运行一次（可自行修改来调整间隔）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.user.change_wallpaper</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/bin/python3</string>
        <string>/Users/your_username/Scripts/change_wallpaper.py</string>
    </array>
    <key>StartInterval</key>
    <integer>1800</integer>
    <key>StandardOutPath</key>
    <string>/Users/your_username/wallpaper_change.log</string>
    <key>StandardErrorPath</key>
    <string>/Users/your_username/wallpaper_change.log</string>
</dict>
</plist>
```


## 配置launchd

* 将上述 plist 文件保存到 ~/Library/LaunchAgents/com.user.change_wallpaper.plist。
* 将 your_username 替换为你的 macOS 用户名，并确保脚本路径正确。
* 加载定时任务:

``bash
  launchctl load ~/Library/LaunchAgents/com.user.change_wallpaper.plist
``

* 启动定时任务：

```bash
launchctl start com.user.change_wallpaper
```
