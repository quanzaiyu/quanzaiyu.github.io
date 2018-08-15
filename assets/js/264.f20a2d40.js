(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{961:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue-常见问题汇总"}},[t._v("Vue 常见问题汇总")]),t._v(" "),n("h2",{attrs:{id:"runtime-only"}},[t._v("runtime-only")]),t._v(" "),n("p",[t._v("控制台提示 "),n("code",[t._v("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.")])]),t._v(" "),n("p",[t._v("解决方案: 在 webpack 中添加如下配置就可以解决：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  resolve"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    alias"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token string"}},[t._v("'vue$'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token string"}},[t._v("'vue/dist/vue.js'")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h2",{attrs:{id:"操作-ref-的时机"}},[t._v("操作 ref 的时机")]),t._v(" "),n("p",[t._v("ref 可以让我们便捷地操作 DOM，必须在 mounted 生命周期之后使用 "),n("code",[t._v("vm.$refs")]),t._v(" 才有效，因为 mounted 才是所有 DOM 加载完成的时机。")])])}],!1,null,null,null);s.default=e.exports}}]);