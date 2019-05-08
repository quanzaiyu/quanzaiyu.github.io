(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{541:function(e,s,r){"use strict";r.r(s);var t=r(1),a=Object(t.a)({},function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"scrapy-命令行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-命令行","aria-hidden":"true"}},[e._v("#")]),e._v(" Scrapy: 命令行")]),e._v(" "),r("p",[e._v("全局命令有如下几个: startproject、genspider、settings、runspider、shell、fetch、view、version")]),e._v(" "),r("p",[e._v("全局命令就是不依托项目存在的，也就是不关你有木有项目都能运行")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("scrapy startproject XX")]),e._v(" 创建项目")]),e._v(" "),r("li",[r("code",[e._v("scrapy runspider XX.py")]),e._v(" 运行XX蜘蛛(基于文件)")]),e._v(" "),r("li",[r("code",[e._v("scrapy shell XX")]),e._v(" 调试网址XX")]),e._v(" "),r("li",[r("code",[e._v("scrapy genspider XX")]),e._v(" 根据蜘蛛模板创建蜘蛛")]),e._v(" "),r("li",[r("code",[e._v("scrapy settings --get BOT_NAME")]),e._v(" 获取蜘蛛的名字")]),e._v(" "),r("li",[r("code",[e._v("scrapy settings --get DOWNLOAD_DELAY")]),e._v(" 获取蜘蛛的下载延迟")]),e._v(" "),r("li",[r("code",[e._v("scrapy fetch http://www.scrapyd.cn >d:/scrapyd.html")]),e._v(" 模拟蜘蛛进行下载, 并保存到文件")]),e._v(" "),r("li",[r("code",[e._v("scrapy view http://www.scrapyd.cn >d:/scrapyd.html")]),e._v(" 直接在浏览器中进行查看下载的内容")]),e._v(" "),r("li",[r("code",[e._v("scrapy version")]),e._v(" 查看scrapy版本")])]),e._v(" "),r("p",[e._v("项目命令有如下几个: crawl、check、list")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("scrapy crawl XX")]),e._v(" 运行XX蜘蛛(基于项目)")]),e._v(" "),r("li",[r("code",[e._v("scrapy check XX")]),e._v(" 检查XX蜘蛛")]),e._v(" "),r("li",[r("code",[e._v("scrapy list")]),e._v(" 显示有多少个蜘蛛")])]),e._v(" "),r("h2",{attrs:{id:"scrapy-调试工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-调试工具","aria-hidden":"true"}},[e._v("#")]),e._v(" Scrapy 调试工具")]),e._v(" "),r("p",[e._v("使用 "),r("code",[e._v("scrapy shell")]),e._v(" 可以进行爬虫调试, 比如:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Quanzaiyu@DESKTOP-J8A6OEL MINGW64 /d/Workplace/_Python/spider/spiderTest\n$ scrapy shell http://lab.scrapyd.cn\n2019-01-12 13:52:25 [scrapy.core.engine] INFO: Spider opened\n2019-01-12 13:52:26 [scrapy.core.engine] DEBUG: Crawled (404) <GET http://lab.scrapyd.cn/robots.txt> (referer: None)\n2019-01-12 13:52:26 [scrapy.core.engine] DEBUG: Crawled (200) <GET http://lab.scrapyd.cn> (referer: None)\n[s] Available Scrapy objects:\n[s]   scrapy     scrapy module (contains scrapy.Request, scrapy.Selector, etc)\n[s]   crawler    <scrapy.crawler.Crawler object at 0x000001F5CB69FB70>\n[s]   item       {}\n[s]   request    <GET http://lab.scrapyd.cn>\n[s]   response   <200 http://lab.scrapyd.cn>\n[s]   settings   <scrapy.settings.Settings object at 0x000001F5CB69FA90>\n[s]   spider     <DefaultSpider 'default' at 0x1f5cb94d4a8>\n[s] Useful shortcuts:\n[s]   fetch(url[, redirect=True]) Fetch URL and update local objects (by default, redirects are followed)\n[s]   fetch(req)                  Fetch a scrapy.Request and update local objects\n[s]   shelp()           Shell help (print this help)\n[s]   view(response)    View response in a browser\n>>> view(response)\nTrue\n>>> response.css('title')\n[<Selector xpath='descendant-or-self::title' data='<title>SCRAPY爬虫实验室 - SCRAPY中文网提供</title>'>]\n")])])])])},[],!1,null,null,null);s.default=a.exports}}]);