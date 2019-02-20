(window.webpackJsonp=window.webpackJsonp||[]).push([[495],{988:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"scrapy-存取为图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-存取为图片","aria-hidden":"true"}},[t._v("#")]),t._v(" Scrapy: 存取为图片")]),t._v(" "),a("h2",{attrs:{id:"单页图片下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单页图片下载","aria-hidden":"true"}},[t._v("#")]),t._v(" 单页图片下载")]),t._v(" "),a("h3",{attrs:{id:"定义-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-items","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义 items")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImagespiderItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    imgurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"爬取图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬取图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 爬取图片")]),t._v(" "),a("p",[a("code",[t._v("ImgSpider.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" ImageSpider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImagespiderItem\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImgspiderSpider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ImgSpider'")]),t._v("\n    allowed_domains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lab.scrapyd.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://lab.scrapyd.cn/archives/55.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ImagespiderItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实例化item")]),t._v("\n        imgurls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".post img::attr(src)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意这里是一个集合也就是多张图片的地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" imgUrl "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" imgurls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imgurl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imgUrl\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" item\n")])])]),a("h3",{attrs:{id:"定义管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义管道","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义管道")]),t._v(" "),a("p",[a("code",[t._v("pipelines.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pipelines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("images "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImagesPipeline\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Request\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImagespiderPipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImagesPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_media_requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 请求传过来的图片地址")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imgurl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里的话主要继承了scrapy的：ImagesPipeline这个类，我们需要在里面实现： "),a("code",[t._v("get_media_requests(self, item, info)")]),t._v(" 这个方法，这个方法主要是把蜘蛛 yield 过来的图片链接执行下载。")]),t._v(" "),a("h3",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),a("p",[a("code",[t._v("settings.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#图片存储位置")]),t._v("\nIMAGES_STORE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动图片下载中间件")]),t._v("\nITEM_PIPELINES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ImageSpider.pipelines.ImagespiderPipeline'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("scrapy 给我们提供了一个常量："),a("code",[t._v("IMAGES_STORE")]),t._v("，用于定义存储图片的路径, 可以是绝对路径也可以是相对路径, 相对路径相对于项目根目录。")]),t._v(" "),a("h2",{attrs:{id:"多页图片下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多页图片下载","aria-hidden":"true"}},[t._v("#")]),t._v(" 多页图片下载")]),t._v(" "),a("p",[t._v("本示例, 从起始页开始, 抓取多页图片, 并按照页面标题按文件夹分类存放。")]),t._v(" "),a("h3",{attrs:{id:"定义-items-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-items-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义 items")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImagesrenameItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    imgurl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    imgname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"爬取图片-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#爬取图片-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 爬取图片")]),t._v(" "),a("p",[a("code",[t._v("ImgsRename.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" ImagesRename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImagesrenameItem\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImgsrenameSpider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ImgsRename'")]),t._v("\n    allowed_domains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lab.scrapyd.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://lab.scrapyd.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        quotes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.quote'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" quotes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'span>a::attr(href)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实例化item")]),t._v("\n        item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ImagesrenameItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意imgurls是一个集合也就是多张图片")]),t._v("\n        item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imgurl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".post img::attr(src)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 抓取文章标题作为图集名称")]),t._v("\n        item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imgname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".post-title a::text"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" item\n")])])]),a("p",[t._v("这里, 获取到所有包含图片的页面地址, 循环出单个地址并请求, 交给 content 进行处理, 再 yield 出每一项给管道进行处理。")]),t._v(" "),a("h3",{attrs:{id:"定义管道-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义管道-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义管道")]),t._v(" "),a("p",[a("code",[t._v("pipelines.py")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" re\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pipelines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("images "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ImagesPipeline\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" scrapy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Request\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImagesrenamePipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ImagesPipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_media_requests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 循环每一张图片地址下载，若传过来的不是集合则无需循环直接yield")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" image_url "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imgurl'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# meta里面的数据是从spider获取，然后通过meta传递给下面方法：file_path")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imgname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重命名，若不重写这函数，图片名为哈希，就是一串乱七八糟的名字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" info"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取url前面名称作为图片名。")]),t._v("\n        image_guid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收上面meta传递过来的图片名称")]),t._v("\n        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 过滤windows字符串，不经过这么一个步骤，你会发现有乱码或无法下载")]),t._v("\n        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" re"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[？\\\\*|“<>:/]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分文件夹存储的关键：{0}对应着name；{1}对应着image_guid")]),t._v("\n        filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" u"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{0}/{1}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image_guid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" filename\n")])])]),a("p",[t._v("这里, yield 请求每一张图片, 并传递给 file_path 进行路径处理, 传递了一些 meta 给下一个函数, 并进行路径(即文件名)处理。")]),t._v(" "),a("h3",{attrs:{id:"修改配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置图片存储目录(此处使用绝对路径)")]),t._v("\nIMAGES_STORE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D:\\images'")]),t._v("\nITEM_PIPELINES "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ImagesRename.pipelines.ImagesrenamePipeline'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);