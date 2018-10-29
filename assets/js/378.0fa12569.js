(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{479:function(s,t,a){"use strict";a.r(t);var n={props:["slot-key"]},e=a(0),o=Object(e.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[a("h1",{attrs:{id:"滚动行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动行为","aria-hidden":"true"}},[s._v("#")]),s._v(" 滚动行为")]),s._v(" "),a("p",[s._v("使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 "),a("code",[s._v("vue-router")]),s._v(" 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。")]),s._v(" "),a("p",[a("strong",[s._v("注意: 这个功能只在支持 history.pushState 的浏览器中可用。")])]),s._v(" "),a("p",[s._v("当创建一个 Router 实例，你可以提供一个 "),a("code",[s._v("scrollBehavior")]),s._v(" 方法：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token operator"}},[s._v("...")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token function"}},[s._v("scrollBehavior")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" savedPosition"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("// return 期望滚动到哪个的位置")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("code",[s._v("scrollBehavior")]),s._v(" 方法接收 "),a("code",[s._v("to")]),s._v(" 和 "),a("code",[s._v("from")]),s._v(" 路由对象。第三个参数 "),a("code",[s._v("savedPosition")]),s._v(" 当且仅当 "),a("code",[s._v("popstate")]),s._v(" 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。")]),s._v(" "),a("p",[s._v("这个方法返回滚动位置的对象信息，长这样：")]),s._v(" "),a("p",[a("code",[s._v("{ x: number, y: number }")])]),s._v(" "),a("p",[a("code",[s._v("{ selector: string, offset? : { x: number, y: number }}")]),s._v(" (offset 只在 2.6.0+ 支持)")]),s._v(" "),a("p",[s._v("如果返回一个 falsy (译者注：falsy 不是 "),a("code",[s._v("false")]),s._v("，"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这里"),a("OutboundLink")],1),s._v(")的值，或者是一个空对象，那么不会发生滚动。")]),s._v(" "),a("p",[s._v("举例：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("scrollBehavior")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" savedPosition"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("对于所有路由导航，简单地让页面滚动到顶部。")]),s._v(" "),a("p",[s._v("返回 "),a("code",[s._v("savedPosition")]),s._v("，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("scrollBehavior")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" savedPosition"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("savedPosition"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" savedPosition\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果你要模拟『滚动到锚点』的行为：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("scrollBehavior")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" savedPosition"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      selector"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" to"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hash\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("我们还可以利用"),a("a",{attrs:{href:"https://router.vuejs.org/zh-cn/advanced/meta.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("路由元信息"),a("OutboundLink")],1),s._v("更细颗粒度地控制滚动。查看完整例子请"),a("a",{attrs:{href:"https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("移步这里"),a("OutboundLink")],1),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"异步滚动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步滚动","aria-hidden":"true"}},[s._v("#")]),s._v(" 异步滚动")]),s._v(" "),a("p",[s._v("2.8.0+ , 也可以返回一个 Promise 来得出预期的位置描述：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("scrollBehavior")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("to"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" savedPosition"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reject"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{attrs:{class:"token function"}},[s._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("500")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("将其挂载到从页面级别的过渡组件的事件上，令其滚动行为和页面过渡一起良好运行是可能的。但是考虑到用例的多样性和复杂性，我们仅提供这个原始的接口，以支持不同用户场景的具体实现。")])])},[],!1,null,null,null);o.options.__file="Scroll.md";t.default=o.exports}}]);