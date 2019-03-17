(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{877:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vconsole-进行移动端调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vconsole-进行移动端调试","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 vConsole 进行移动端调试")]),t._v(" "),a("p",[t._v("在移动端开发有一个很麻烦的问题：调试。")]),t._v(" "),a("p",[t._v("在 Android 还好，但是在 iOS 进行调试还是异常痛苦，虽然可以使用 Fiddler 设置代理进行抓包调试，但是，很多程序上的问题并不能进行有效的调试，不像 PC 控制台那样，直接看得到输出。")]),t._v(" "),a("p",[t._v("Android 在应用程序上可以嵌入厂商自己研制的浏览器，比如微信使用的就是 X5 内核的浏览器，而 iOS 就比较撮了，强制使用系统本身的 safari，导致很多问题不但程序起来兼容困难，而且调试也困难。")]),t._v(" "),a("p",[t._v("以前的测试，很多时候我会 alert 出来进行测试，不过对于一些比较大的对象（比如 File、Blob）就既不好观察也不好调试。")]),t._v(" "),a("p",[t._v("如果是 Android 微信端，可以直接使用 "),a("a",{attrs:{href:"http://debugx5.qq.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://debugx5.qq.com"),a("OutboundLink")],1),t._v(" 进行配置调试。而 iOS，其实也可以安装 vConsole 进行调试。")]),t._v(" "),a("h2",{attrs:{id:"安装-vconsole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-vconsole","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 vConsole")]),t._v(" "),a("p",[t._v("此项目的 GitHub 地址为："),a("a",{attrs:{href:"https://github.com/Tencent/vConsole",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Tencent/vConsole"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("安装：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn add vconsole\n")])])]),a("p",[t._v("我是在 Vue 中使用 vConsole 的，直接在 main.js 中初始化 vConsole 就好了：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vconsole "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vconsole'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-unused-vars */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(testapp|localhost|192\\.168)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vConsole "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vconsole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面之所以加了一个条件，意思是只需要在开发环境和测试环境添加即可。")]),t._v(" "),a("imgLink",{attrs:{src:"shortcut/104.png/small"}}),t._v(" "),a("h2",{attrs:{id:"直接使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 直接使用")]),t._v(" "),a("p",[t._v("虽然我没在 HTML 中直接引用，但是还是将官网中的相关代码引入，以供参考：")]),t._v(" "),a("div",{staticClass:"language-HTML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("path/to/vconsole.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" vConsole "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VConsole")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])],1)},[],!1,null,null,null);s.default=e.exports}}]);