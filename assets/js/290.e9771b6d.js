(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{865:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"scrapy-selector选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-selector选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" Scrapy: Selector选择器")]),t._v(" "),a("p",[t._v("当我们取得了网页的response之后，最关键的就是如何从繁杂的网页中把我们需要的数据提取出来，python从网页中提取数据的包很多，常用的有下面的几个：")]),t._v(" "),a("ul",[a("li",[t._v("BeautifulSoup 它基于HTML代码的结构来构造一个Python对象， 对不良标记的处理也非常合理，但是速度上有所欠缺。")]),t._v(" "),a("li",[t._v("lxml 是一个基于 ElementTree (不是Python标准库的一部分)的python化的XML解析库(也可以解析HTML)。")])]),t._v(" "),a("p",[t._v("你可以在scrapy中使用任意你熟悉的网页数据提取工具，但是，scrapy本身也为我们提供了一套提取数据的机制，我们称之为选择器(seletors)，他们通过特定的 XPath 或者 CSS 表达式来“选择” HTML文件中的某个部分。XPath 是一门用来在XML文件中选择节点的语言，也可以用在HTML上。 CSS 是一门将HTML文档样式化的语言。选择器由它定义，并与特定的HTML元素的样式相关连。")]),t._v(" "),a("p",[t._v("Scrapy选择器构建于 lxml 库之上，这意味着它们在速度和解析准确性上非常相似。")]),t._v(" "),a("p",[t._v("示例: 使用 Selector 的 css 或 xpath 方法提取 www.xiaoyulive.top 的标题")]),t._v(" "),a("p",[t._v("css 提取")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selector "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Selector\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoyu"')]),t._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.xiaoyulive.top/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'head title::text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("xpath 提取")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selector "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Selector\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoyu"')]),t._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.xiaoyulive.top/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//title/text()'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("选择器的使用可以分为下面的三步：")]),t._v(" "),a("ol",[a("li",[t._v("导入选择器 "),a("code",[t._v("from scrapy.selector import Selector")])]),t._v(" "),a("li",[t._v("创建选择器实例 "),a("code",[t._v("selector = Selector(response=response)")])]),t._v(" "),a("li",[t._v("使用选择器 "),a("code",[t._v("selector.xpath()")]),t._v(" 或者 "),a("code",[t._v("selector.css()")])])]),t._v(" "),a("p",[t._v("当然你可以使用xpath或者css中的任意一种或者组合使用，怎么方便怎么来。仔细观察，你会发现每个选择器最后都有一个 "),a("code",[t._v("extract()")]),t._v("，你可以尝试去掉这个看一下，区别在于:")]),t._v(" "),a("ul",[a("li",[t._v("当你没有使用 "),a("code",[t._v("extract()")]),t._v(" 的时候，提取出来的内容依然具有选择器属性，简而言之，你可以继续使用里面的内容进行提取下级内容")]),t._v(" "),a("li",[t._v("当你使用了 "),a("code",[t._v("extract()")]),t._v(" 之后，提取出来的内容就会变成字符串格式了。我们进行多级提取的时候，这会很有用。值得注意的是，选择器提取出来的内容是放在列表里面的，即使没有内容，那也是一个空列表，下面我们运行这个爬虫，你会发现内容已经被提取出来了")])]),t._v(" "),a("h2",{attrs:{id:"css-提取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-提取","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 提取")]),t._v(" "),a("p",[t._v("使用示例:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取整条title标签")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title::text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取title的InnerHTML(内容)")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".content img::attr(src)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取img的src属性值")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".navigator a::attr(href)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取a标签的href属性值")]),t._v("\n")])])]),a("p",[t._v("一些常用的选择器")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选择器")]),t._v(" "),a("th",[t._v("示例")]),t._v(" "),a("th",[t._v("示例说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(".class")]),t._v(" "),a("td",[t._v(".intro")]),t._v(" "),a("td",[t._v('选择所有class="intro"的元素')])]),t._v(" "),a("tr",[a("td",[t._v("#id")]),t._v(" "),a("td",[t._v("#firstname")]),t._v(" "),a("td",[t._v('选择所有id="firstname"的元素')])]),t._v(" "),a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("*")]),t._v(" "),a("td",[t._v("选择所有元素")])]),t._v(" "),a("tr",[a("td",[t._v("element")]),t._v(" "),a("td",[t._v("p")]),t._v(" "),a("td",[t._v("选择所有<p>元素")])]),t._v(" "),a("tr",[a("td",[t._v("element,element")]),t._v(" "),a("td",[t._v("div,p")]),t._v(" "),a("td",[t._v("选择所有<div>元素和<p>元素")])]),t._v(" "),a("tr",[a("td",[t._v("element element")]),t._v(" "),a("td",[t._v("div p")]),t._v(" "),a("td",[t._v("选择<div>元素内的所有<p>元素")])]),t._v(" "),a("tr",[a("td",[t._v("element>element")]),t._v(" "),a("td",[t._v("div>p")]),t._v(" "),a("td",[t._v("选择所有父级是<div>元素的<p>元素")])]),t._v(" "),a("tr",[a("td",[t._v("element+element")]),t._v(" "),a("td",[t._v("div+p")]),t._v(" "),a("td",[t._v("选择所有紧接着<div>元素之后的<p>元素")])]),t._v(" "),a("tr",[a("td",[t._v("element1~element2")]),t._v(" "),a("td",[t._v("p~ul")]),t._v(" "),a("td",[t._v("选择<p>元素之后的每一个<ul>元素")])]),t._v(" "),a("tr",[a("td",[t._v("[attribute]")]),t._v(" "),a("td",[t._v("[target]")]),t._v(" "),a("td",[t._v("选择所有带有target属性元素")])]),t._v(" "),a("tr",[a("td",[t._v('[attribute="value"]')]),t._v(" "),a("td",[t._v("[target=_blank]")]),t._v(" "),a("td",[t._v('选择所有使用target="_blank"的元素')])]),t._v(" "),a("tr",[a("td",[t._v('[attribute~="value"]')]),t._v(" "),a("td",[t._v("[title~=flower]")]),t._v(" "),a("td",[t._v('选择title属性包含单词"flower"的所有元素')])]),t._v(" "),a("tr",[a("td",[t._v('[attribute^="value"]')]),t._v(" "),a("td",[t._v('img[src^="https"]')]),t._v(" "),a("td",[t._v('选择每一个src属性的值以"https"开头的元素')])]),t._v(" "),a("tr",[a("td",[t._v('[attribute$="value"]')]),t._v(" "),a("td",[t._v('img[src$=".pdf"]')]),t._v(" "),a("td",[t._v('选择每一个src属性的值以".pdf"结尾的元素')])]),t._v(" "),a("tr",[a("td",[t._v('[attribute*="value"]')]),t._v(" "),a("td",[t._v('img[src*="runoob"]')]),t._v(" "),a("td",[t._v('选择每一个src属性的值包含子字符串"runoob"的元素')])]),t._v(" "),a("tr",[a("td",[t._v(":link")]),t._v(" "),a("td",[t._v("a:link")]),t._v(" "),a("td",[t._v("选择所有未访问链接")])]),t._v(" "),a("tr",[a("td",[t._v(":visited")]),t._v(" "),a("td",[t._v("a:visited")]),t._v(" "),a("td",[t._v("选择所有访问过的链接")])]),t._v(" "),a("tr",[a("td",[t._v(":active")]),t._v(" "),a("td",[t._v("a:active")]),t._v(" "),a("td",[t._v("选择活动链接")])]),t._v(" "),a("tr",[a("td",[t._v(":hover")]),t._v(" "),a("td",[t._v("a:hover")]),t._v(" "),a("td",[t._v("选择鼠标在链接上面时")])]),t._v(" "),a("tr",[a("td",[t._v(":before")]),t._v(" "),a("td",[t._v("p:before")]),t._v(" "),a("td",[t._v("在每个<p>元素之前的伪元素")])]),t._v(" "),a("tr",[a("td",[t._v(":after")]),t._v(" "),a("td",[t._v("p:after")]),t._v(" "),a("td",[t._v("在每个<p>元素之后的伪元素")])]),t._v(" "),a("tr",[a("td",[t._v(":nth-child(n)")]),t._v(" "),a("td",[t._v("p:nth-child(2)")]),t._v(" "),a("td",[t._v("选择每个p元素是其父级的第二个子元素")])]),t._v(" "),a("tr",[a("td",[t._v(":nth-of-type(n)")]),t._v(" "),a("td",[t._v("p:nth-of-type(2)")]),t._v(" "),a("td",[t._v("选择每个p元素是其父级的第二个p元素")])]),t._v(" "),a("tr",[a("td",[t._v(":nth-last-child(n)")]),t._v(" "),a("td",[t._v("p:nth-last-child(2)")]),t._v(" "),a("td",[t._v("选择每个p元素的是其父级的第二个子元素，从最后一个子项计数")])]),t._v(" "),a("tr",[a("td",[t._v(":nth-last-of-type(n)")]),t._v(" "),a("td",[t._v("p:nth-last-of-type(2)")]),t._v(" "),a("td",[t._v("选择每个p元素的是其父级的第二个p元素，从最后一个子项计数")])]),t._v(" "),a("tr",[a("td",[t._v(":first-child")]),t._v(" "),a("td",[t._v("p:first-child")]),t._v(" "),a("td",[t._v("选择每个p元素是其父级的第一个子级。")])]),t._v(" "),a("tr",[a("td",[t._v(":last-child")]),t._v(" "),a("td",[t._v("p:last-child")]),t._v(" "),a("td",[t._v("选择每个p元素是其父级的最后一个子级。")])]),t._v(" "),a("tr",[a("td",[t._v(":focus")]),t._v(" "),a("td",[t._v("input:focus")]),t._v(" "),a("td",[t._v("选择具有焦点的输入元素")])]),t._v(" "),a("tr",[a("td",[t._v(":checked")]),t._v(" "),a("td",[t._v("input:checked")]),t._v(" "),a("td",[t._v("选择每个选中的输入元素")])]),t._v(" "),a("tr",[a("td",[t._v(":not(selector)")]),t._v(" "),a("td",[t._v(":not(p)")]),t._v(" "),a("td",[t._v("选择每个并非p元素的元素")])]),t._v(" "),a("tr",[a("td",[t._v(":first-letter")]),t._v(" "),a("td",[t._v("p:first-letter")]),t._v(" "),a("td",[t._v("选择每一个<p>元素的第一个字母")])]),t._v(" "),a("tr",[a("td",[t._v(":first-line")]),t._v(" "),a("td",[t._v("p:first-line")]),t._v(" "),a("td",[t._v("选择每一个<p>元素的第一行")])])])]),t._v(" "),a("h2",{attrs:{id:"xpath-提取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xpath-提取","aria-hidden":"true"}},[t._v("#")]),t._v(" XPath 提取")]),t._v(" "),a("p",[t._v("使用示例:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//@href"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//ol//@href"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//ol[@class='page-navigator']//@href\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//title//text()"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"//div[@class='post-content']//text()\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"string(//div[@class='post-content'])\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("XPath 表达式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("表达式")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("nodename")]),t._v(" "),a("td",[t._v("选取此节点的所有子节点")])]),t._v(" "),a("tr",[a("td",[t._v("/")]),t._v(" "),a("td",[t._v("从根节点选取")])]),t._v(" "),a("tr",[a("td",[t._v("//")]),t._v(" "),a("td",[t._v("从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置")])]),t._v(" "),a("tr",[a("td",[t._v(".")]),t._v(" "),a("td",[t._v("选取当前节点")])]),t._v(" "),a("tr",[a("td",[t._v("..")]),t._v(" "),a("td",[t._v("选取当前节点的父节点")])]),t._v(" "),a("tr",[a("td",[t._v("@")]),t._v(" "),a("td",[t._v("选取属性")])])])]),t._v(" "),a("p",[t._v("XPath 通配符可用来选取未知的 HTML元素。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("通配符")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("匹配任何元素节点。")])]),t._v(" "),a("tr",[a("td",[t._v("@*")]),t._v(" "),a("td",[t._v("匹配任何属性节点。")])]),t._v(" "),a("tr",[a("td",[t._v("node()")]),t._v(" "),a("td",[t._v("匹配任何类型的节点。")])])])]),t._v(" "),a("p",[t._v("在下面的表格中，我们列出了一些路径表达式，以及这些表达式的结果：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("路径表达式")]),t._v(" "),a("th",[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("/bookstore/*")]),t._v(" "),a("td",[t._v("选取 bookstore 元素的所有子元素。")])]),t._v(" "),a("tr",[a("td",[t._v("//*")]),t._v(" "),a("td",[t._v("选取文档中的所有元素。")])]),t._v(" "),a("tr",[a("td",[t._v("//title[@*]")]),t._v(" "),a("td",[t._v("选取所有带有属性的 title 元素。")])])])]),t._v(" "),a("h2",{attrs:{id:"正则提取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则提取","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则提取")]),t._v(" "),a("p",[t._v("如果我们想提取的内容不能使用一个选择器表示, 比如获取页脚的备案信息:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selector "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Selector\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#需要继承scrapy.Spider类")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoyu"')]),t._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.xiaoyulive.top/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        selector "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.footers>p:first-child *::text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("r'\\d{8}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);