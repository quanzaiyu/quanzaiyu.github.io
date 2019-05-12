(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{896:function(t,a,e){"use strict";e.r(a);var n=e(1),s=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-native-基础接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-native-基础接口","aria-hidden":"true"}},[t._v("#")]),t._v(" react-native 基础接口")]),t._v(" "),e("h2",{attrs:{id:"全局方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局方法")]),t._v(" "),e("h3",{attrs:{id:"弹出对话框"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弹出对话框","aria-hidden":"true"}},[t._v("#")]),t._v(" 弹出对话框")]),t._v(" "),e("p",[t._v("使用 "),e("code",[t._v("alert()")]),t._v(" 可直接弹出一个对话框")]),t._v(" "),e("h3",{attrs:{id:"定时器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时器","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/timers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("定时器"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("setTimeout, clearTimeout")]),t._v(" "),e("li",[t._v("setInterval, clearInterval")]),t._v(" "),e("li",[t._v("setImmediate, clearImmediate")]),t._v(" "),e("li",[t._v("requestAnimationFrame, cancelAnimationFrame")])]),t._v(" "),e("p",[t._v("用法跟web一致, 不过需要注意的是, "),e("strong",[t._v("在卸载组件前一定要清除定时器, 否则可能发生致命错误（闪退）")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"把一个定时器的引用挂在this上"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果存在this.timer，则使用clearTimeout清空。")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"interactionmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interactionmanager","aria-hidden":"true"}},[t._v("#")]),t._v(" InteractionManager")]),t._v(" "),e("p",[t._v("原生应用感觉如此流畅的一个重要原因就是在互动和动画的过程中避免繁重的操作。在 React Native 里，我们目前受到限制，因为我们只有一个 JavaScript 执行线程。不过你可以用"),e("code",[t._v("InteractionManager")]),t._v("来确保在执行繁重工作之前所有的交互和动画都已经处理完毕。")]),t._v(" "),e("p",[t._v("应用可以通过以下代码来安排一个任务，使其在交互结束之后执行：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("InteractionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAfterInteractions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...需要长时间同步执行的任务...")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("我们来把它和之前的几个任务安排方法对比一下：")]),t._v(" "),e("ul",[e("li",[t._v("requestAnimationFrame(): 用来执行在一段时间内控制视图动画的代码")]),t._v(" "),e("li",[t._v("setImmediate/setTimeout/setInterval(): 在稍后执行代码。注意这有可能会延迟当前正在进行的动画。")]),t._v(" "),e("li",[t._v("runAfterInteractions(): 在稍后执行代码，不会延迟当前进行的动画。")])]),t._v(" "),e("p",[t._v("触摸处理系统会把一个或多个进行中的触摸操作认定为'交互'，并且会将"),e("code",[t._v("runAfterInteractions()")]),t._v("的回调函数延迟执行，直到所有的触摸操作都结束或取消了。")]),t._v(" "),e("p",[t._v("InteractionManager 还允许应用注册动画，在动画开始时创建一个交互“句柄”，然后在结束的时候清除它。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" handle "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" InteractionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInteractionHandle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行动画... (`runAfterInteractions`中的任务现在开始排队等候)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在动画完成之后")]),t._v("\nInteractionManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInteractionHandle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在所有句柄都清除之后，现在开始依序执行队列中的任务")]),t._v("\n")])])]),e("h3",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),e("p",[t._v("浏览器")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.chrome.com/devtools/docs/console-api",target:"_blank",rel:"noopener noreferrer"}},[t._v("console.{log, warn, error, info, trace, table, group, groupEnd}"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nodejs.org/docs/latest/api/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonJS require"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactnative.cn/docs/network#content",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest, fetch"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactnative.cn/docs/timers#content",target:"_blank",rel:"noopener noreferrer"}},[t._v("{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://reactnative.cn/docs/geolocation#content",target:"_blank",rel:"noopener noreferrer"}},[t._v("navigator.geolocation"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("ES6")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.assign"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("String.prototype.{"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith",target:"_blank",rel:"noopener noreferrer"}},[t._v("startsWith"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",target:"_blank",rel:"noopener noreferrer"}},[t._v("endsWith"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",target:"_blank",rel:"noopener noreferrer"}},[t._v("repeat"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",target:"_blank",rel:"noopener noreferrer"}},[t._v("includes"),e("OutboundLink")],1),t._v("}")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array.from"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Array.prototype.{"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",target:"_blank",rel:"noopener noreferrer"}},[t._v("find"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",target:"_blank",rel:"noopener noreferrer"}},[t._v("findIndex"),e("OutboundLink")],1),t._v("}")])]),t._v(" "),e("p",[t._v("ES7")]),t._v(" "),e("ul",[e("li",[t._v("Array.prototype.{"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",target:"_blank",rel:"noopener noreferrer"}},[t._v("includes"),e("OutboundLink")],1),t._v("}")])]),t._v(" "),e("p",[t._v("ES8")]),t._v(" "),e("ul",[e("li",[t._v("Object.{"),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",target:"_blank",rel:"noopener noreferrer"}},[t._v("entries"),e("OutboundLink")],1),t._v(", "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values",target:"_blank",rel:"noopener noreferrer"}},[t._v("values"),e("OutboundLink")],1),t._v("}")])]),t._v(" "),e("p",[t._v("其他特性")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("__DEV__")]),t._v(" 用于判断当前是否开发环境的全局变量")])]),t._v(" "),e("h2",{attrs:{id:"animated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#animated","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/animated.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Animated"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"alert"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alert","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/alert.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alert"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Button")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Click me'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onPress")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Alert"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alert Title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My Alert Msg'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ask me later'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ask me later pressed'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cancel'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Cancel Pressed'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cancel'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("text"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OK'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onPress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OK Pressed'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" cancelable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),e("p",[t._v("方法:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("static alert(title, message?, buttons?, options?, type?)")])])]),t._v(" "),e("p",[t._v("Android 上的效果")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190222/001.gif"}}),t._v(" "),e("p",[t._v("iOS 上的效果")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190222/001.gif"}}),t._v(" "),e("h2",{attrs:{id:"增强型接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#增强型接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 增强型接口")]),t._v(" "),e("h3",{attrs:{id:"accessibilityinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessibilityinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/accessibilityinfo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AccessibilityInfo"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("有时候我们希望知道用户的设备是否正在运行读屏应用。AccessibilityInfo正是用于此目的。你可以用它来查询读屏应用的当前状态，并且可以监听其状态变化。")]),t._v(" "),e("h3",{attrs:{id:"cameraroll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cameraroll","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/cameraroll.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CameraRoll"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("CameraRoll")]),t._v("模块提供了访问本地相册的功能。在 iOS 上使用这个模块之前，你需要先链接"),e("code",[t._v("RCTCameraRoll")]),t._v("库，具体做法请参考"),e("a",{attrs:{href:"https://reactnative.cn/docs/linking-libraries-ios",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接原生库"),e("OutboundLink")],1),t._v("文档。")]),t._v(" "),e("p",[t._v("本模块只提供了基本的访问图片的功能，并没有提供相册界面。对于多数开发者来说，可能第三方的"),e("a",{attrs:{href:"https://github.com/ivpusic/react-native-image-crop-picker",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-image-crop-picker"),e("OutboundLink")],1),t._v("的功能更为完整易用（可多选、压缩、裁剪等）。")]),t._v(" "),e("p",[t._v("从 iOS 10 开始，访问相册需要用户授权。你需要在"),e("code",[t._v("Info.plist")]),t._v("中添加一条名为"),e("code",[t._v("NSPhotoLibraryUsageDescription")]),t._v("的键，然后在其值中填写向用户请求权限的具体描述。编辑完成后这个键在 Xcode 中实际会显示为"),e("code",[t._v("Privacy - Photo Library Usage Description")]),t._v("。")]),t._v(" "),e("p",[t._v("从 iOS 11 开始，如果需要保存图片，则需要额外申请用户授权。你需要在"),e("code",[t._v("Info.plist")]),t._v("中添加一条名为"),e("code",[t._v("NSPhotoLibraryAddUsageDescription")]),t._v("的键，然后在其值中填写向用户请求权限的具体描述。编辑完成后这个键在 Xcode 中实际会显示为"),e("code",[t._v("Privacy - Photo Library Additions Usage Description")]),t._v("。而名为"),e("code",[t._v("NSPhotoLibraryUsageDescription")]),t._v("的键此时仅控制相册的读取。具体说明请翻阅"),e("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("搜索相关键值。")]),t._v(" "),e("h3",{attrs:{id:"clipboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clipboard","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/clipboard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clipboard"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Clipboard组件可以在 iOS 和 Android 的剪贴板中读写内容。")]),t._v(" "),e("h3",{attrs:{id:"keyboardavoidingview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyboardavoidingview","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/keyboardavoidingview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("KeyboardAvoidingView"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("本组件用于解决一个常见的尴尬问题：手机上弹出的键盘常常会挡住当前的视图。本组件可以自动根据键盘的位置，调整自身的 position 或底部的 padding，以避免被遮挡。")]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyboardAvoidingView")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("behavior")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("padding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ... 在这里放置需要根据键盘调整位置的组件 ...\n")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyboardAvoidingView")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("imgLink",{attrs:{src:"date/20190221/001.gif"}}),t._v(" "),e("h3",{attrs:{id:"linking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linking","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/linking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linking"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("提供了一个通用的接口来调起其他应用或被其他应用调起。")]),t._v(" "),e("h2",{attrs:{id:"android特有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android特有","aria-hidden":"true"}},[t._v("#")]),t._v(" Android特有")]),t._v(" "),e("h3",{attrs:{id:"backhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backhandler","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/backhandler.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("BackHandler"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("监听设备上的后退按钮事件。")]),t._v(" "),e("h3",{attrs:{id:"datepickerandroid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datepickerandroid","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/datepickerandroid.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DatePickerAndroid"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("本组件会打开一个标准的 Android 日期选择器的对话框。")]),t._v(" "),e("h3",{attrs:{id:"timepickerandroid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timepickerandroid","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/timepickerandroid.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TimePickerAndroid"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("本组件会打开一个标准的 Android 时间选择器的对话框。")]),t._v(" "),e("h3",{attrs:{id:"permissionsandroid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permissionsandroid","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/permissionsandroid.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PermissionsAndroid"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("对Android 6.0引入的权限模型的封装。")]),t._v(" "),e("h2",{attrs:{id:"ios特有"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ios特有","aria-hidden":"true"}},[t._v("#")]),t._v(" iOS特有")]),t._v(" "),e("h3",{attrs:{id:"actionsheetios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actionsheetios","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/actionsheetios.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ActionSheetIOS"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("方法:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("static showActionSheetWithOptions(options, callback)")]),t._v(" 在 iOS 设备上显示一个 ActionSheet 弹出框，其中"),e("code",[t._v("options")]),t._v("参数为一个对象，其属性必须包含以下一项或多项：\n"),e("ul",[e("li",[e("code",[t._v("options")]),t._v(" "),e("Badge",{attrs:{text:"array of string"}}),t._v("\n一组按钮的文字（必选）")],1),t._v(" "),e("li",[e("code",[t._v("cancelButtonIndex")]),t._v(" "),e("Badge",{attrs:{text:"int"}}),t._v("\n取消性质的按钮在"),e("code",[t._v("options")]),t._v("中的位置（索引）")],1),t._v(" "),e("li",[e("code",[t._v("destructiveButtonIndex")]),t._v(" "),e("Badge",{attrs:{text:"int"}}),t._v("\n删除性质的按钮在"),e("code",[t._v("options")]),t._v("中的位置（索引）")],1),t._v(" "),e("li",[e("code",[t._v("title")]),t._v(" "),e("Badge",{attrs:{text:"string"}}),t._v("\n弹出框顶部的标题")],1),t._v(" "),e("li",[e("code",[t._v("message")]),t._v(" "),e("Badge",{attrs:{text:"string"}}),t._v("\n弹出框顶部标题下方的信息")],1),t._v(" "),e("li",[e("code",[t._v("tintColor")]),t._v(" "),e("Badge",{attrs:{text:"string"}}),t._v("\n指定删除性质的按钮的文字的"),e("a",{attrs:{href:"https://reactnative.cn/docs/colors",target:"_blank",rel:"noopener noreferrer"}},[t._v("颜色"),e("OutboundLink")],1)],1)])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("ActionSheetIOS"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("showActionSheetWithOptions")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'取消'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'删除'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  destructiveButtonIndex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cancelButtonIndex"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"imagepickerios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#imagepickerios","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/imagepickerios.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ImagePickerIOS"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("插入图片。")]),t._v(" "),e("h3",{attrs:{id:"navigatorios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigatorios","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/navigatorios.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NavigatorIOS"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("UINavigationController的封装，用于实现页面的导航跳转。")]),t._v(" "),e("h3",{attrs:{id:"pushnotificationios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pushnotificationios","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/pushnotificationios.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PushNotificationIOS"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("管理推送通知，包括权限处理和应用角标数字。")]),t._v(" "),e("h3",{attrs:{id:"tabbarios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tabbarios","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/tabbarios.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TabBarIOS"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("渲染一个UITabViewController底部选项卡布局。需要和TabBarIOS.Item搭配使用。")])],1)},[],!1,null,null,null);a.default=s.exports}}]);