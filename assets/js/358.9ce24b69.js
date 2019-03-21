(window.webpackJsonp=window.webpackJsonp||[]).push([[358],{657:function(e,r,s){"use strict";s.r(r);var i=s(1),t=Object(i.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"scrapy-基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-基础概念","aria-hidden":"true"}},[e._v("#")]),e._v(" Scrapy: 基础概念")]),e._v(" "),s("imgLink",{attrs:{src:"date/20190115/001.png"}}),e._v(" "),s("h2",{attrs:{id:"引擎（engine）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引擎（engine）","aria-hidden":"true"}},[e._v("#")]),e._v(" 引擎（Engine）")]),e._v(" "),s("p",[e._v("引擎负责控制数据流在系统中所有组件中流动，并在相应动作发生时触发事件。 详细内容查看下面的数据流(Data Flow)部分。")]),e._v(" "),s("h2",{attrs:{id:"爬虫（spiders）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#爬虫（spiders）","aria-hidden":"true"}},[e._v("#")]),e._v(" 爬虫（Spiders）")]),e._v(" "),s("p",[e._v("Spider是Scrapy用户编写用于分析response并提取item(即获取到的item)或额外跟进的URL的类。 每个spider负责处理一个特定(或一些)网站。")]),e._v(" "),s("p",[s("strong",[e._v("name")])]),e._v(" "),s("p",[e._v("定义spider名字的字符串(string)。spider的名字定义了Scrapy如何定位(并初始化)spider，所以其必须是唯一的。 不过您可以生成多个相同的spider实例(instance)，这没有任何限制。 name是spider最重要的属性，而且是必须的。")]),e._v(" "),s("p",[e._v("如果该spider爬取单个网站(single domain)，一个常见的做法是以该网站(domain)(加或不加 后缀 )来命名spider。 例如，如果spider爬取 mywebsite.com ，该spider通常会被命名为 mywebsite 。")]),e._v(" "),s("p",[s("strong",[e._v("allowed_domains")])]),e._v(" "),s("p",[e._v("可选。包含了spider允许爬取的域名(domain)列表(list)。 当 OffsiteMiddleware 启用时， 域名不在列表中的URL不会被跟进。")]),e._v(" "),s("p",[s("strong",[e._v("start_urls")])]),e._v(" "),s("p",[e._v("URL列表。当没有制定特定的URL时，spider将从该列表中开始进行爬取。 因此，第一个被获取到的页面的URL将是该列表之一。 后续的URL将会从获取到的数据中提取。")]),e._v(" "),s("p",[s("strong",[e._v("start_requests()")])]),e._v(" "),s("p",[e._v("该方法必须返回一个可迭代对象(iterable)。该对象包含了spider用于爬取的第一个Request。当spider启动爬取并且未制定URL时，该方法被调用。")]),e._v(" "),s("p",[s("strong",[e._v("parse(response)")])]),e._v(" "),s("p",[e._v("当response没有指定回调函数时，该方法是Scrapy处理下载的response的默认方法。")]),e._v(" "),s("p",[e._v("parse 负责处理response并返回处理的数据以及(/或)跟进的URL。 Spider 对其他的Request的回调函数也有相同的要求。")]),e._v(" "),s("p",[e._v("该方法及其他的Request回调函数必须返回一个包含 Request 及(或) Item 的可迭代的对象。")]),e._v(" "),s("p",[e._v("参数:")]),e._v(" "),s("ul",[s("li",[e._v("response(Response) – 用于分析的response")])]),e._v(" "),s("p",[s("strong",[e._v("closed(reason)")])]),e._v(" "),s("p",[e._v("当spider关闭时，该函数被调用。")]),e._v(" "),s("h2",{attrs:{id:"管道（item-pipeline）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道（item-pipeline）","aria-hidden":"true"}},[e._v("#")]),e._v(" 管道（Item Pipeline）")]),e._v(" "),s("p",[s("code",[e._v("Item Pipeline")]),e._v(" 负责处理被spider提取出来的item。典型的处理有清理、验证及持久化(例如存取到数据库中)。")]),e._v(" "),s("p",[e._v("如果我们要编写一个pipeline组件，如：MySQLPipline（命名随意，根据这个类的具体功能来即可），我们必须实现这个方法：")]),e._v(" "),s("p",[s("strong",[e._v("process_item(item, spider)")]),e._v("(必须)")]),e._v(" "),s("p",[e._v("每个item pipeline组件都需要调用该方法，这个方法必须返回一个 Item (或任何继承类)对象， 或是抛出 DropItem 异常，被丢弃的item将不会被之后的pipeline组件所处理。")]),e._v(" "),s("p",[e._v("参数:")]),e._v(" "),s("ul",[s("li",[e._v("item (Item 对象) – 被爬取的item")]),e._v(" "),s("li",[e._v("spider (Spider 对象) – 爬取该item的spider")])]),e._v(" "),s("p",[s("strong",[e._v("open_spider(spider)")]),e._v("(非必须)")]),e._v(" "),s("p",[e._v("当spider被开启时，这个方法被调用。")]),e._v(" "),s("p",[s("strong",[e._v("close_spider(spider)")]),e._v("(非必须)")]),e._v(" "),s("p",[e._v("当spider被关闭时，这个方法被调用。")]),e._v(" "),s("h2",{attrs:{id:"调度器（scheduler）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调度器（scheduler）","aria-hidden":"true"}},[e._v("#")]),e._v(" 调度器（Scheduler）")]),e._v(" "),s("p",[e._v("调度器从引擎接受request并将他们入队，以便之后引擎请求他们时提供给引擎。")]),e._v(" "),s("h2",{attrs:{id:"下载器（downloader）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载器（downloader）","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载器（Downloader）")]),e._v(" "),s("p",[e._v("下载器负责获取页面数据并提供给引擎，而后提供给spider。")]),e._v(" "),s("h2",{attrs:{id:"下载器中间件（downloader-middlewares）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载器中间件（downloader-middlewares）","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载器中间件（Downloader middlewares）")]),e._v(" "),s("p",[e._v("下载器中间件是在引擎及下载器之间的特定钩子(specific hook)，处理Downloader传递给引擎的response。 其提供了一个简便的机制，通过插入自定义代码来扩展Scrapy功能。")]),e._v(" "),s("h2",{attrs:{id:"spider中间件（spider-middlewares）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spider中间件（spider-middlewares）","aria-hidden":"true"}},[e._v("#")]),e._v(" Spider中间件（Spider middlewares）")]),e._v(" "),s("p",[e._v("Spider中间件是在引擎及Spider之间的特定钩子(specific hook)，处理spider的输入(response)和输出(items及requests)。 其提供了一个简便的机制，通过插入自定义代码来扩展Scrapy功能。")])],1)},[],!1,null,null,null);r.default=t.exports}}]);