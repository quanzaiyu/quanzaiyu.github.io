(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{564:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"全局方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局方法")]),t._v(" "),s("h2",{attrs:{id:"弹出对话框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#弹出对话框","aria-hidden":"true"}},[t._v("#")]),t._v(" 弹出对话框")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("alert()")]),t._v(" 可直接弹出一个对话框")]),t._v(" "),s("h2",{attrs:{id:"定时器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时器","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://reactnative.cn/docs/timers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("定时器"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("setTimeout, clearTimeout")]),t._v(" "),s("li",[t._v("setInterval, clearInterval")]),t._v(" "),s("li",[t._v("setImmediate, clearImmediate")]),t._v(" "),s("li",[t._v("requestAnimationFrame, cancelAnimationFrame")])]),t._v(" "),s("p",[t._v("用法跟web一致, 不过需要注意的是, "),s("strong",[t._v("在卸载组件前一定要清除定时器, 否则可能发生致命错误（闪退）")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"把一个定时器的引用挂在this上"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果存在this.timer，则使用clearTimeout清空。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"interactionmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interactionmanager","aria-hidden":"true"}},[t._v("#")]),t._v(" InteractionManager")]),t._v(" "),s("p",[t._v("原生应用感觉如此流畅的一个重要原因就是在互动和动画的过程中避免繁重的操作。在 React Native 里，我们目前受到限制，因为我们只有一个 JavaScript 执行线程。不过你可以用"),s("code",[t._v("InteractionManager")]),t._v("来确保在执行繁重工作之前所有的交互和动画都已经处理完毕。")]),t._v(" "),s("p",[t._v("应用可以通过以下代码来安排一个任务，使其在交互结束之后执行：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("InteractionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAfterInteractions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...需要长时间同步执行的任务...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("我们来把它和之前的几个任务安排方法对比一下：")]),t._v(" "),s("ul",[s("li",[t._v("requestAnimationFrame(): 用来执行在一段时间内控制视图动画的代码")]),t._v(" "),s("li",[t._v("setImmediate/setTimeout/setInterval(): 在稍后执行代码。注意这有可能会延迟当前正在进行的动画。")]),t._v(" "),s("li",[t._v("runAfterInteractions(): 在稍后执行代码，不会延迟当前进行的动画。")])]),t._v(" "),s("p",[t._v("触摸处理系统会把一个或多个进行中的触摸操作认定为'交互'，并且会将"),s("code",[t._v("runAfterInteractions()")]),t._v("的回调函数延迟执行，直到所有的触摸操作都结束或取消了。")]),t._v(" "),s("p",[t._v("InteractionManager 还允许应用注册动画，在动画开始时创建一个交互“句柄”，然后在结束的时候清除它。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" handle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" InteractionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createInteractionHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行动画... (`runAfterInteractions`中的任务现在开始排队等候)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在动画完成之后")]),t._v("\nInteractionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInteractionHandle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在所有句柄都清除之后，现在开始依序执行队列中的任务")]),t._v("\n")])])]),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("p",[t._v("更多兼容性方法详见: "),s("a",{attrs:{href:"https://reactnative.cn/docs/javascript-environment/#%E6%8E%A5%E5%8F%A3%E5%85%BC%E5%AE%B9-polyfills",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口兼容（Polyfills）"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);