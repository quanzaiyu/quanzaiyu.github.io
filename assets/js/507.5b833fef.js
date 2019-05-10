(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{707:function(e,a,n){"use strict";n.r(a);var t=n(1),r=Object(t.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"uni-app-概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app-概述","aria-hidden":"true"}},[e._v("#")]),e._v(" uni-app 概述")]),e._v(" "),n("ul",[n("li",[e._v("官方文档："),n("a",{attrs:{href:"http://uniapp.dcloud.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://uniapp.dcloud.io"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("小程序文档："),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://developers.weixin.qq.com/miniprogram/dev/index.html"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("vue 文档："),n("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://cn.vuejs.org/"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("mpvue 文档："),n("a",{attrs:{href:"http://mpvue.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://mpvue.com/"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"uni-app-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app-简介","aria-hidden":"true"}},[e._v("#")]),e._v(" uni-app 简介")]),e._v(" "),n("p",[e._v("uni-app 是 DClude 推出的一款跨平台开发解决方案，目前可以使用此框架开发 微信小程序、H5+应用。")]),e._v(" "),n("p",[e._v("此框架结合了 Vue 与微信小程序的开发风格，使开发变得更加简单。")]),e._v(" "),n("p",[e._v("组件标签靠近微信小程序规范，数据绑定及事件处理靠近 Vue.js 规范，同时补充了App及页面的生命周期。")]),e._v(" "),n("h2",{attrs:{id:"uni-app-框架基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app-框架基础","aria-hidden":"true"}},[e._v("#")]),e._v(" uni-app 框架基础")]),e._v(" "),n("h3",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 目录结构")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("┌─components            uni-app公共组件目录\n│  └─comp-a.vue         可复用的a组件\n├─wxcomponents          小程序私有组件，遵循小程序的开发方式，也可使用Vue的写法\n│   └──miniprogram-slide-view\n│        ├─index.js\n│        ├─index.vue\n│        ├─index.json\n│        └─index.wxss\n├─pages                 业务页面文件存放目录\n│  ├─index\n│  │  └─index.vue       index页面\n│  └─list\n│     └─list.vue        list页面\n├─static                存放应用引用静态资源（如图片、视频等）的地方，注意：静态资源只能存放于此\n├─main.js               Vue初始化入口文件\n├─App.vue               应用配置，用来配置App全局样式以及监听 详见\n├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见\n└─pages.json            配置页面路由、导航条、选项卡等页面类信息，应用的生命周期\n")])])]),n("h3",{attrs:{id:"条件编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件编译","aria-hidden":"true"}},[e._v("#")]),e._v(" 条件编译")]),e._v(" "),n("p",[e._v("由于各个平台有起独特性，可以使用类似于C语言的条件编译语句，指定一段代码只在特定的环境中被编译。")]),e._v(" "),n("p",[e._v("格式：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//#ifdef %PLATFORM%\n平台特有的API实现\n//#endif\n")])])]),n("p",[e._v("%PLATFORM% 可取值如下：")]),e._v(" "),n("ul",[n("li",[e._v("APP-PLUS："),n("a",{attrs:{href:"http://www.html5plus.org/doc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTML5+ App 规范"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("MP-WEIXIN："),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("微信小程序"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("例如：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//#ifdef APP-PLUS\nplus.push.addEventListener('click', function (msg) {\n    var payload = null;\n    var action = '';\n    if (msg.payload) {\n        if (typeof msg.payload === 'string') {\n            payload = JSON.parse(msg.payload);\n        }\n        action = payload.action;\n        if (action === 'open') {\n            plus.webview.open(payload.url);\n        }\n    }\n});\n//#endif\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\x3c!-- #ifdef MP-WEIXIN --\x3e\n<ad unit-id="test"></ad>\n\x3c!-- #endif --\x3e\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/* #ifdef %PLATFORM% */\n平台特有样式\n/* #endif */\n")])])]),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://ask.dcloud.net.cn/article/34945",target:"_blank",rel:"noopener noreferrer"}},[e._v("mpvue项目（组件）迁移指南、示例及资源汇总"),n("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);