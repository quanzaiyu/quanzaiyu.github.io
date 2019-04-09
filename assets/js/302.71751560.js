(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{554:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网页解析模块-beautifulsoup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页解析模块-beautifulsoup","aria-hidden":"true"}},[t._v("#")]),t._v(" 网页解析模块 - "),a("a",{attrs:{href:"https://www.crummy.com/software/BeautifulSoup/bs4/doc/index.zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BeautifulSoup"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("BeautifulSoup 是一个可以从HTML或XML文件中提取数据的Python库。它能够通过你喜欢的转换器实现惯用的文档导航，查找，修改文档的方式。Beautiful Soup会帮你节省数小时甚至数天的工作时间。")])]),t._v(" "),a("p",[t._v("安装: "),a("code",[t._v("pip install bs4")])]),t._v(" "),a("p",[t._v("以下示例, 爬取一个简单的静态网页:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -*- coding: utf-8 -*-")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bs4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BeautifulSoup\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n\nurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.dbmeinv.com/'")]),t._v("\nheaders "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User-Agent'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nresponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncontent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html.parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注释1")]),t._v("\nimg_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" class_"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height_min'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注释2")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" img_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注释3")]),t._v("\n    src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attrs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注释4")]),t._v("\n    response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/%s.jpg'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注释5")]),t._v("\n        f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v('注释1：这里新建了一个Beautifulsoup对象，它有两个必要的参数，第一个参数是HTML代码对象，比如这里content存储了URL为"https://www.dbmeinv.com/"的这张网页的HTML代码，它是个字符串或者是一个文件句柄第二个参数是HTML解析器，这个解析器可以使用内置标准的"html.parser"，也可以安装第三方的解析器，比如lxml和html5lib。')])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("解析器")]),t._v(" "),a("th",[t._v("使用方法")]),t._v(" "),a("th",[t._v("优势")]),t._v(" "),a("th",[t._v("劣势")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Python标准库")]),t._v(" "),a("td",[t._v('BeautifulSoup(markup, "html.parser")')]),t._v(" "),a("td",[t._v("Python的内置标准库执行速度适中文档容错能力强")]),t._v(" "),a("td",[t._v("Python 2.7.3 or 3.2.2)前 的版本中文档容错能力差")])]),t._v(" "),a("tr",[a("td",[t._v("lxml HTML 解析器")]),t._v(" "),a("td",[t._v('BeautifulSoup(markup, "lxml")')]),t._v(" "),a("td",[t._v("速度快文档容错能力强")]),t._v(" "),a("td",[t._v("需要安装C语言库")])]),t._v(" "),a("tr",[a("td",[t._v("lxml XML 解析器")]),t._v(" "),a("td",[t._v('BeautifulSoup(markup, ["lxml", "xml"]) BeautifulSoup(markup, "xml")')]),t._v(" "),a("td",[t._v("速度快唯一支持XML的解析器")]),t._v(" "),a("td",[t._v("需要安装C语言库")])]),t._v(" "),a("tr",[a("td",[t._v("html5lib")]),t._v(" "),a("td",[t._v('BeautifulSoup(markup, "html5lib")')]),t._v(" "),a("td",[t._v("最好的容错性以浏览器的方式解析文档生成HTML5格式的文档")]),t._v(" "),a("td",[t._v("速度慢不依赖外部扩展")])])])]),t._v(" "),a("p",[t._v("比如安装 lxml HTML 解析器: "),a("code",[t._v("pip install lxml")])]),t._v(" "),a("p",[t._v("如果安装不成功, 可以到 "),a("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unofficial Windows Binaries for Python Extension Packages"),a("OutboundLink")],1),t._v(" 下载 lxml 模块, 比如 "),a("code",[t._v("lxml-4.1.1-cp35-cp35m-win32.whl")]),t._v(", 下载完成后到下载目录执行 "),a("code",[t._v("pip install lxml-4.1.1-cp35-cp35m-win32.whl")]),t._v(" 即可安装。")]),t._v(" "),a("ul",[a("li",[t._v('注释2：这里使用了soup对象的一个方法"find_all()"，字面理解就是"找出所有的"，那么找出什么，如何定位这个所谓的"什么"？这里就要传入两个参数，第一个是HTML文档的节点名，也可以理解为HTML的标签名；第二个则是该节点的class类名，比如上面代码中，我要找出该网页上所有的img节点，且我需要的img节点的类名为"height_min", 因为calss和关键字冲突，所以改名class_。但是对于一些没有class类名的HTML元素我们该如何寻找？')])]),t._v(" "),a("p",[t._v("我们还可以用到另一个属性：attrs，比如这里可以写成：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("img_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" soup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'class'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'height_min'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v('attrs是字典类型，冒号左边为关键字，右边为关键字的值。不一定要通过class来查找某一个元素，也可以通过比如"id"，"name"，"type"等各种HTML的属性，如果想要的元素实在没有其他属性，可以先定位到该元素的父属性，再使用".children"定位到该元素。')]),t._v(" "),a("ul",[a("li",[t._v("注释3：注释2返回的是一个列表对象，包含了整张网页上的图片，因此这里用一个循环，分别处理每一张图片。")]),t._v(" "),a("li",[t._v("注释4：取出了图片的路径和标题。")]),t._v(" "),a("li",[t._v('注释5：这里需要重新请求图片的地址，获得图片二进制的返回值，因为是图片，所以不能用decode()解码，必须以二进制的方式写入，后面的写入模式"wb"，加了个"b"就是表示以二进制的形式。')])]),t._v(" "),a("p",[t._v("也可以将解码的工作放到 bs4 中:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsoup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html.parser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from_encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果本身是 "),a("code",[t._v("utf-8")]),t._v(" 编码, 可省略 "),a("code",[t._v("from_encoding")]),t._v(" 参数")])])},[],!1,null,null,null);s.default=e.exports}}]);