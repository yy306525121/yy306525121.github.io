"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5342],{1021:(e,i)=>{i.A=(e,i)=>{const s=e.__vccOpts||e;for(const[e,a]of i)s[e]=a;return s}},5003:(e,i,s)=>{s.r(i),s.d(i,{comp:()=>n,data:()=>l});var a=s(6254);const t={},n=(0,s(1021).A)(t,[["render",function(e,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<p>我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。</p><h2 id="本地-mysql-使用" tabindex="-1"><a class="header-anchor" href="#本地-mysql-使用"><span>本地 MySQL 使用</span></a></h2><p>在 Windows 平台上，你需要首先安装 <a href="https://downloads.mysql.com/archives/installer/" target="_blank" rel="noopener noreferrer">MySQL Server</a>，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：右键点击菜单栏最左侧，依次选择「计算机管理」&gt;「服务和应用程序」&gt;「服务」&gt;「MYSQL57」，然后双击以启动。</p><h2 id="数据库恢复" tabindex="-1"><a class="header-anchor" href="#数据库恢复"><span>数据库恢复</span></a></h2><p>数据库备份是至关重要的工作，一旦数据丢失，恢复起来会非常困难。如果你只想恢复特定的数据库，可以复制数据库的字段内容。在 phpMyAdmin 中，选择你需要的数据库，点击 &quot;SQL&quot;，然后将你的 SQL 代码粘贴到执行窗口，最后点击 &quot;Go&quot; 按钮以运行代码。字段的分隔通常以 <code>-- Table structure for table xxx</code> 开始。</p><p>如果出现错误 <code>#1217 - Cannot delete or update a parent row: a foreign key constraint fails</code>，这意味着你尝试删除或更新表中的记录，但是这个记录在另一个表中作为外键被引用。如果确实需要进行恢复，可以使用以下命令暂时关闭 MySQL 的外键约束检查：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 禁用外键约束检查</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> FOREIGN_KEY_CHECKS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 执行您的操作...</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 启用外键约束检查</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> FOREIGN_KEY_CHECKS</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库启动失败或损坏" tabindex="-1"><a class="header-anchor" href="#数据库启动失败或损坏"><span>数据库启动失败或损坏</span></a></h2><ol><li>在 MySQL 配置文件中，找到 <code>mysqld</code> 行并添加 <code>innodb_force_recovery=4</code>。这个值可以在 0-6 之间调整，数值越大对数据库的损害就越大。在成功启动 MySQL 后，备份所有数据库和管理密码，并将它们下载到本地。</li><li>在宝塔面板的「数据库」选项中删除所有数据库，然后卸载并重新安装 MySQL。</li><li>重新导入数据库。</li></ol>',9)]))}]]),l=JSON.parse('{"path":"/deploy/MySQL.html","title":"数据库管理","lang":"zh-CN","frontmatter":{"article":false,"title":"数据库管理","icon":"fa6-solid:database","order":3,"description":"我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。 本地 MySQL 使用 在 Windows 平台上，你需要首先安装 MySQL Server，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：...","head":[["meta",{"property":"og:url","content":"https://newzone.top/deploy/MySQL.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"数据库管理"}],["meta",{"property":"og:description","content":"我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。 本地 MySQL 使用 在 Windows 平台上，你需要首先安装 MySQL Server，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-20T08:04:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-20T08:04:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"数据库管理\\",\\"description\\":\\"我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。 本地 MySQL 使用 在 Windows 平台上，你需要首先安装 MySQL Server，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：...\\"}"]]},"headers":[{"level":2,"title":"本地 MySQL 使用","slug":"本地-mysql-使用","link":"#本地-mysql-使用","children":[]},{"level":2,"title":"数据库恢复","slug":"数据库恢复","link":"#数据库恢复","children":[]},{"level":2,"title":"数据库启动失败或损坏","slug":"数据库启动失败或损坏","link":"#数据库启动失败或损坏","children":[]}],"git":{"createdTime":1737360290000,"updatedTime":1737360290000,"contributors":[{"name":"yang zhong yang","username":"yang zhong yang","email":"306525121@qq.com","commits":1,"url":"https://github.com/yang zhong yang"}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"deploy/MySQL.md","localizedDate":"2025年1月20日","excerpt":"<p>我的数据库是通过 MySQL 和 phpMyAdmin 进行管理的。本页面将记录遇到的日常问题及其解决办法。</p>\\n<h2>本地 MySQL 使用</h2>\\n<p>在 Windows 平台上，你需要首先安装 <a href=\\"https://downloads.mysql.com/archives/installer/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MySQL Server</a>，然后使用数据库软件进行连接。如果你正在使用本地数据库并且没有将 MySQL Server 设为自动启动，那么每次开机后都需要手动启动它。启动步骤如下：右键点击菜单栏最左侧，依次选择「计算机管理」&gt;「服务和应用程序」&gt;「服务」&gt;「MYSQL57」，然后双击以启动。</p>","autoDesc":true}')}}]);