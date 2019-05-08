(window.webpackJsonp=window.webpackJsonp||[]).push([[285],{540:function(a,t,s){"use strict";s.r(t);var r=s(1),e=Object(r.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"爬虫框架-scrapy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#爬虫框架-scrapy","aria-hidden":"true"}},[a._v("#")]),a._v(" 爬虫框架 - "),s("a",{attrs:{href:"https://scrapy.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Scrapy"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Scrapy 是用 Python 实现的一个为了爬取网站数据、提取结构性数据而编写的应用框架。")]),a._v(" "),s("p",[a._v("Scrapy 常应用在包括数据挖掘，信息处理或存储历史数据等一系列的程序中。")]),a._v(" "),s("h2",{attrs:{id:"scrapy-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" Scrapy 安装")]),a._v(" "),s("p",[a._v("不出意外的话, 直接通过 "),s("code",[a._v("pip install scrapy")]),a._v(" 安装绝对报错, 通常采用下载 "),s("code",[a._v(".whl")]),a._v(" 文件的方式进行安装: "),s("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Unofficial Windows Binaries for Python Extension Packages"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("在安装 Scrapy 之前, 需要先下载并安装一下依赖(Twisted和pywin32), 比如:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" Twisted-18.9.0-cp37-cp37m-win_amd64.whl\n$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" pywin32-224-cp37-cp37m-win_amd64.whl\n$ pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" Scrapy-1.5.1-py2.py3-none-any.whl\n")])])]),s("p",[a._v("安装成功, 控制台输入 "),s("code",[a._v("scrapy")]),a._v(" 能看到输出就说明安装成功了")]),a._v(" "),s("h2",{attrs:{id:"创建-scrapy-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-scrapy-项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建 Scrapy 项目")]),a._v(" "),s("p",[a._v("使用过 scrapy 创建一个名为 "),s("code",[a._v("spiderTest")]),a._v(" 的项目")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ scrapy startproject spiderTest\n")])])]),s("h2",{attrs:{id:"scrapy-项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-项目结构","aria-hidden":"true"}},[a._v("#")]),a._v(" Scrapy 项目结构")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("tutorial/\n    scrapy.cfg            # 项目的配置文件\n    tutorial/             # 用来放你py代码的地方\n        __init__.py\n        items.py          # 用来定义你抓取内容的字段\n        middlewares.py    # 中间器\n        pipelines.py      # 管道文件\n        settings.py       # 设置\n        spiders/          # 放爬虫文件的文件夹\n            __init__.py\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);