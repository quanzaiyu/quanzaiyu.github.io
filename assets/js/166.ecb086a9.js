(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{527:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"关于-weixinjsbridge-is-not-defined-的深究及处理方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-weixinjsbridge-is-not-defined-的深究及处理方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 WeixinJSBridge is not defined 的深究及处理方案")]),t._v(" "),a("h2",{attrs:{id:"问题现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题现象","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题现象")]),t._v(" "),a("p",[t._v("最近做了一个前端JS脚本监控，会搜集用户在客户端使用滇医通时的一些报错信息，这些错误信息会提交到数据库，综合归纳最近的报错信息，报错量最多的是 "),a("code",[t._v("Uncaught ReferenceError: WeixinJSBridge is not defined")]),t._v("。")]),t._v(" "),a("imgLink",{attrs:{src:"error/WeixinJSBridge_01.png/small"}}),t._v(" "),a("imgLink",{attrs:{src:"error/WeixinJSBridge_02.png/small"}}),t._v(" "),a("p",[t._v("截图是 2018-05-31 的，统计了两天一来的错误数量，惊人的 16138，接下来分析一下此错误出现的原因。")]),t._v(" "),a("h2",{attrs:{id:"问题原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),a("p",[t._v("在网上一搜，有很多类似的文章，发现很多开发者都遇到类似的问题，归根究底，总结有以下的原因:")]),t._v(" "),a("p",[t._v("a) 没有用到微信JS-SDK, 为什么会报这个错呢？\n答: 微信内置浏览器会有WeixinJSBridge，但是需要一定的加载时间。")]),t._v(" "),a("p",[t._v("b) 使用了微信JS-SDK, 但是为什么会出错呢？\n答: 微信 webview 注入钩子有时序问题：在 WeixinJSBridge 还未注入之前，就已经成功注入其它依赖于 WeixinJSBridge 的其它XX模块。在XX模块中调用WeixinJSBridge就会失败。")]),t._v(" "),a("p",[t._v("关于这个问题的帖子从2014年开始就有了，然而到现在依然存在，可见微信一直没有修复好！")]),t._v(" "),a("h2",{attrs:{id:"问题影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题影响","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题影响")]),t._v(" "),a("p",[t._v("a) 可能会出现页面不能正常显示一片空白")]),t._v(" "),a("p",[t._v("b) 可能会出现某些基于微信 JSSDK 的 API 不能正常执行")]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[t._v("a) 程序中改善 (试行)")]),t._v(" "),a("p",[t._v("网上有相关的程序解决方案，使用事件监听的方式确保微信 WeixinJSBridge 已加载完成，程序代码使用 jq 类似于:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WeixinJSBridge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WeixinJSBridgeReady'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#weiXinPay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#weiXinPay'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("click")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此方案不确定有效，但可以一试，观察之后此错误出现的频次是否有所下降。")]),t._v(" "),a("p",[t._v("b) 督促微信修复相关问题，向微信发 issue 报告使用中出现的此类问题")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://segmentfault.com/q/1010000008000754",target:"_blank",rel:"noopener noreferrer"}},[t._v("“WeixinJSBridge is not defined” 的对用户是否造成影响以及产生的原因"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000008408110",target:"_blank",rel:"noopener noreferrer"}},[t._v("深究WeixinJSBridge未定义之因"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/ottoman/p/7614419.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信支付 WeixinJSBridge is not defined 报错"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.options.__file="WeixinJSBridge_is_not_defined.md";n.default=e.exports}}]);