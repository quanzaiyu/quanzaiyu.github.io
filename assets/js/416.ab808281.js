(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{653:function(a,e,n){"use strict";n.r(e);var t=n(1),s=Object(t.a)({},function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"uni-app-框架基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uni-app-框架基础","aria-hidden":"true"}},[a._v("#")]),a._v(" uni-app 框架基础")]),a._v(" "),n("h2",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("┌─components            uni-app公共组件目录\n│  └─comp-a.vue         可复用的a组件\n├─wxcomponents          小程序私有组件，遵循小程序的开发方式，也可使用Vue的写法\n│   └──miniprogram-slide-view\n│        ├─index.js\n│        ├─index.vue\n│        ├─index.json\n│        └─index.wxss\n├─pages                 业务页面文件存放目录\n│  ├─index\n│  │  └─index.vue       index页面\n│  └─list\n│     └─list.vue        list页面\n├─static                存放应用引用静态资源（如图片、视频等）的地方，注意：静态资源只能存放于此\n├─main.js               Vue初始化入口文件\n├─App.vue               应用配置，用来配置App全局样式以及监听 详见\n├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见\n└─pages.json            配置页面路由、导航条、选项卡等页面类信息，应用的生命周期\n")])])]),n("h2",{attrs:{id:"条件编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#条件编译","aria-hidden":"true"}},[a._v("#")]),a._v(" 条件编译")]),a._v(" "),n("p",[a._v("由于各个平台有起独特性，可以使用类似于C语言的条件编译语句，指定一段代码只在特定的环境中被编译。")]),a._v(" "),n("p",[a._v("格式：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("//#ifdef %PLATFORM%\n平台特有的API实现\n//#endif\n")])])]),n("p",[a._v("%PLATFORM% 可取值如下：")]),a._v(" "),n("ul",[n("li",[a._v("APP-PLUS："),n("a",{attrs:{href:"http://www.html5plus.org/doc/",target:"_blank",rel:"noopener noreferrer"}},[a._v("HTML5+ App 规范"),n("OutboundLink")],1)]),a._v(" "),n("li",[a._v("MP-WEIXIN："),n("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/",target:"_blank",rel:"noopener noreferrer"}},[a._v("微信小程序"),n("OutboundLink")],1)])]),a._v(" "),n("p",[a._v("例如：")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("//#ifdef APP-PLUS\nplus.push.addEventListener('click', function (msg) {\n    var payload = null;\n    var action = '';\n    if (msg.payload) {\n        if (typeof msg.payload === 'string') {\n            payload = JSON.parse(msg.payload);\n        }\n        action = payload.action;\n        if (action === 'open') {\n            plus.webview.open(payload.url);\n        }\n    }\n});\n//#endif\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('\x3c!-- #ifdef MP-WEIXIN --\x3e\n<ad unit-id="test"></ad>\n\x3c!-- #endif --\x3e\n')])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("/* #ifdef %PLATFORM% */\n平台特有样式\n/* #endif */\n")])])])])},[],!1,null,null,null);e.default=s.exports}}]);