"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[5865],{1021:(i,s)=>{s.A=(i,s)=>{const t=i.__vccOpts||i;for(const[i,a]of s)t[i]=a;return t}},622:(i,s,t)=>{t.r(s),t.d(s,{comp:()=>n,data:()=>h});var a=t(6254);const e={},n=(0,t(1021).A)(e,[["render",function(i,s){return(0,a.uX)(),(0,a.CE)("div",null,s[0]||(s[0]=[(0,a.Fv)('<p>正则表达式，又称规则表达式，是使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。</p><p>正则入门：<a href="https://deerchao.cn/tutorials/regex/regex.htm" target="_blank" rel="noopener noreferrer">正则 30 分钟入门</a>，<a href="https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md" target="_blank" rel="noopener noreferrer">LEARN REGEX 中文版</a></p><h2 id="实用表达式" tabindex="-1"><a class="header-anchor" href="#实用表达式"><span>实用表达式</span></a></h2><p><code>{}</code> 限定符 (表示固定位数)。比如：<code>\\\\d{5}</code> 匹配长度有 5 个的数字，<code>\\\\d{1,5}</code> 最少匹配 1 个，最长匹配 5 个数字。</p><p><code>.{30,}</code> 指匹配长度 30 以上的任意字符串。</p><p><code>[aeiou]</code> 匹配中括号中任意字符。 <code>[^aeiou]</code> 匹配除了 aeiou 这几个字母以外的任意字符。</p><p>HTTP 链接匹配：<code>https?://[^\\s&quot;。？,，?)#]+</code>，句尾不含空格、中英文逗号、中文句号、问号，仅包含 http 和 https 链接</p><p>万能链接匹配：<code>[a-zA-Z]+://[^\\s&quot;。？,，?)#]+</code> 匹配万能前缀，如 ftp、tencent、lark。</p><p>匹配行：</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//匹配含某个字符的行</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ZZMactch</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> inputMatch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//匹配不含指定字符的行</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ZZMactch</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;^((?!&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">inputMatch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;).)*$&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//匹配所有不包括 CSDN 的行</span></span>\n<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">^</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">CSDN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">$</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配不同文本组，<code>id=</code> 或 <code>contentId=</code> 后的多个数字符号</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)\\</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">](</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">|</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">contentId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)\\</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>^((?!abc).)*admin((?!abc).)*$</code> 匹配 不包含 abc 但包含 admin 的字符串，匹配整行。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p><code>((?!social.tmall.com)(?!ugc/detail.html).)*$</code> 匹配不包含 <code>social.tmall.com</code> 和 <code>ugc/detail.html</code> 的字符串，匹配整行。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p><code>[₳$¢₴€₤￥＄《]([a-zA-Z0-9]{11})[₳$¢₴€₤￥＄《]</code> 匹配淘口令，<code>[]</code> 指中内容任意匹配一项皆可。</p><h3 id="前后匹配" tabindex="-1"><a class="header-anchor" href="#前后匹配"><span>前后匹配</span></a></h3><p>前后匹配，前后元素只能出现一次，否则容易覆盖过多。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//匹配任意以 a 开头并以 b 结尾的字符，匹配内容不含 a、b</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//如果 a 有 n 个，则同一行也会匹配 n 次</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//如果 b 有 n 个，则匹配最后一个 b；</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//如果需要匹配第一个 b，则匹配区加懒惰限定符？，代表重复 1 次或更多次，但尽可能少重复</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//匹配任意以 a 开头并以 b 结尾的字符，匹配内容包含 a、b</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">b</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">//匹配字符串中 a 和词组 abc 间的字符，如果 abc 不存在则去尾部</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">abc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则替换" tabindex="-1"><a class="header-anchor" href="#正则替换"><span>正则替换</span></a></h3><p>正则全局替换不能带 <code>\\\\</code>，此时用分割替换更方便。</p><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> str</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;dogdogdog&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> str2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;">/dog/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">g</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);   #全局替换</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> str2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">split</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;dog&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;cat&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">); #分割替换</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表达式修饰符" tabindex="-1"><a class="header-anchor" href="#表达式修饰符"><span>表达式修饰符</span></a></h2><p>元字符：区分大小写</p><table><thead><tr><th>常用正则代码</th><th>说明</th></tr></thead><tbody><tr><td>.</td><td>匹配除换行符以外的任意字符</td></tr><tr><td>*</td><td>匹配 0 个或多个.(有多少匹配多少，贪婪模式)</td></tr><tr><td>?</td><td>匹配 0 个或 1 个 (至少匹配一个)</td></tr><tr><td>$</td><td>以什么结尾的，如<code>\\\\d+0$</code> (以 0 结尾)</td></tr><tr><td>^</td><td>以什么开头的，如<code>^http</code>匹配以 http 开头的字符串</td></tr><tr><td>\\w</td><td>匹配字母或数字或下划线或汉字</td></tr><tr><td>\\W</td><td>匹配任意不是字母，数字，下划线，汉字的字符</td></tr><tr><td>\\d</td><td>匹配数字</td></tr><tr><td>\\D</td><td>匹配任意非数字的字符</td></tr><tr><td>\\s</td><td>匹配任意的空白符（空格 ,制表符 )</td></tr><tr><td>\\S</td><td>匹配任意不是空白符的字符</td></tr><tr><td>\\r</td><td>回车符</td></tr><tr><td>\\n</td><td>换行符 (一般情况下使用\\r\\n 匹配回车换行)</td></tr><tr><td>\\t</td><td>制表符，Tab</td></tr><tr><td>\\u4e00-\\u9fa5</td><td>非中文</td></tr></tbody></table><p>常用分组语法</p><table><thead><tr><th>分类</th><th>代码/语法</th><th>说明</th></tr></thead><tbody><tr><td>捕获</td><td>(exp)</td><td>匹配 exp，并捕获文本到自动命名的组里</td></tr><tr><td></td><td><code>(?&lt;name&gt;exp)</code></td><td>匹配 exp，并捕获文本到名称为 name 的组里，也可以写成 (?&#39;name&#39;exp)</td></tr><tr><td></td><td>(?:exp)</td><td>匹配 exp，不捕获匹配的文本，也不给此分组分配组号</td></tr><tr><td>零宽断言</td><td>(?=exp)</td><td>匹配 exp 前面的位置</td></tr><tr><td></td><td>(?&lt;=exp)</td><td>匹配 exp 后面的位置</td></tr><tr><td></td><td>(?!exp)</td><td>匹配后面跟的不是 exp 的位置</td></tr><tr><td></td><td>(?&lt;!exp)</td><td>匹配前面不是 exp 的位置</td></tr><tr><td>注释</td><td>(?#comment)</td><td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</td></tr></tbody></table><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://blog.csdn.net/thewindkee/article/details/52785763" target="_blank" rel="noopener noreferrer">正则表达式匹配：包含且不包含</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p><a href="https://blog.csdn.net/xiiii/article/details/89450341" target="_blank" rel="noopener noreferrer">正则表达式匹配不包含某些字符串的技巧</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>',28)]))}]]),h=JSON.parse('{"path":"/code/Regex.html","title":"正则表达式","lang":"zh-CN","frontmatter":{"article":false,"title":"正则表达式","icon":"fa6-solid:repeat","order":6,"description":"正则表达式，又称规则表达式，是使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。 正则入门：正则 30 分钟入门，LEARN REGEX 中文版 实用表达式 {} 限定符 (表示固定位数)。比如：\\\\\\\\d{5} 匹配长度有 5 个的数字，\\\\\\\\d{1,5} 最少匹配 1 个，最长匹配 5 个数字。...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Regex.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"正则表达式"}],["meta",{"property":"og:description","content":"正则表达式，又称规则表达式，是使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。 正则入门：正则 30 分钟入门，LEARN REGEX 中文版 实用表达式 {} 限定符 (表示固定位数)。比如：\\\\\\\\d{5} 匹配长度有 5 个的数字，\\\\\\\\d{1,5} 最少匹配 1 个，最长匹配 5 个数字。..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-20T08:04:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-20T08:04:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"正则表达式\\",\\"description\\":\\"正则表达式，又称规则表达式，是使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。 正则入门：正则 30 分钟入门，LEARN REGEX 中文版 实用表达式 {} 限定符 (表示固定位数)。比如：\\\\\\\\\\\\\\\\d{5} 匹配长度有 5 个的数字，\\\\\\\\\\\\\\\\d{1,5} 最少匹配 1 个，最长匹配 5 个数字。...\\"}"]]},"headers":[{"level":2,"title":"实用表达式","slug":"实用表达式","link":"#实用表达式","children":[{"level":3,"title":"前后匹配","slug":"前后匹配","link":"#前后匹配","children":[]},{"level":3,"title":"正则替换","slug":"正则替换","link":"#正则替换","children":[]}]},{"level":2,"title":"表达式修饰符","slug":"表达式修饰符","link":"#表达式修饰符","children":[]}],"git":{"createdTime":1737360290000,"updatedTime":1737360290000,"contributors":[{"name":"yang zhong yang","username":"yang zhong yang","email":"306525121@qq.com","commits":1,"url":"https://github.com/yang zhong yang"}]},"readingTime":{"minutes":3.4,"words":1019},"filePathRelative":"code/Regex.md","localizedDate":"2025年1月20日","excerpt":"<p>正则表达式，又称规则表达式，是使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。</p>\\n<p>正则入门：<a href=\\"https://deerchao.cn/tutorials/regex/regex.htm\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">正则 30 分钟入门</a>，<a href=\\"https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">LEARN REGEX 中文版</a></p>","autoDesc":true}')}}]);