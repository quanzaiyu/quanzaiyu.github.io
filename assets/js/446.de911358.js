(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{680:function(e,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue-常见问题汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-常见问题汇总","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue 常见问题汇总")]),e._v(" "),a("h2",{attrs:{id:"runtime-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runtime-only","aria-hidden":"true"}},[e._v("#")]),e._v(" runtime-only")]),e._v(" "),a("p",[e._v("控制台提示 "),a("code",[e._v("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.")])]),e._v(" "),a("p",[e._v("解决方案: 在 webpack 中添加如下配置就可以解决：")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("export"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue$'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'vue/dist/vue.js'")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"操作-ref-的时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作-ref-的时机","aria-hidden":"true"}},[e._v("#")]),e._v(" 操作 ref 的时机")]),e._v(" "),a("p",[e._v("ref 可以让我们便捷地操作 DOM，必须在 mounted 生命周期之后使用 "),a("code",[e._v("vm.$refs")]),e._v(" 才有效，因为 mounted 才是所有 DOM 加载完成的时机。")]),e._v(" "),a("h2",{attrs:{id:"报错：do-not-use-built-in-or-reserved-html-elements-as-component-id-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错：do-not-use-built-in-or-reserved-html-elements-as-component-id-header","aria-hidden":"true"}},[e._v("#")]),e._v(" 报错：Do not use built-in or reserved HTML elements as component id:header")]),e._v(" "),a("p",[e._v("组件，不能和html标签重复，由于 HTML 标签中本身就有 Header 标签，所以注册此组件会报错")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Do not use built-in or reserved HTML elements as component id:header\n")])])]),a("p",[e._v("由于在模板需要插入到 DOM 中，所以模板中的标签名必须能够被 DOM 正确地解析。主要有三种情况：")]),e._v(" "),a("ul",[a("li",[e._v("一是完全不合法的标签名，例如 </>；")]),e._v(" "),a("li",[e._v("二是与 HTML 元素重名会产生不确定的行为，例如使用 input 做组件名不会解析到自定义组件，使用 button 在 Chrome 上正常但在 IE 上不正常；")]),e._v(" "),a("li",[e._v("三是与 Vue 保留的 slot、partial、component 重名，因为会优先以本身的意义解析，从而产生非预期的结果。")])]),e._v(" "),a("p",[e._v("参考：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/qingqingzou-143/p/7068514.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue报错 Do not use built-in or reserved HTML elements as component id:header"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cnodejs.org/topic/5816aabdcf18d0333412d323",target:"_blank",rel:"noopener noreferrer"}},[e._v("聊聊 Vue 组件命名那些事"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"关于vue组件间样式的交叉污染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于vue组件间样式的交叉污染","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于Vue组件间样式的交叉污染")]),e._v(" "),a("p",[e._v("参考：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jb51.net/article/122535.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 组件间的样式冲突污染"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);