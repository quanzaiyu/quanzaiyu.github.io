(window.webpackJsonp=window.webpackJsonp||[]).push([[501],{784:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"在-uni-app-中使用-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-uni-app-中使用-vue","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 uni-app 中使用 Vue")]),t._v(" "),a("h2",{attrs:{id:"兼容支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容支持","aria-hidden":"true"}},[t._v("#")]),t._v(" 兼容支持")]),t._v(" "),a("p",[t._v("由于需要兼容多端，许多浏览器特性、Vue特性是不能使用的，支持情况如下：")]),t._v(" "),a("p",[t._v("支持：")]),t._v(" "),a("ul",[a("li",[t._v("条件渲染（v-if、v-show）")]),t._v(" "),a("li",[t._v("列表渲染（v-for）")]),t._v(" "),a("li",[t._v("计算属性（computed）")]),t._v(" "),a("li",[t._v("事件处理（v-on，@）、事件修饰符")])]),t._v(" "),a("p",[t._v("不支持：")]),t._v(" "),a("ul",[a("li",[t._v("所有的 BOM／DOM 都不能用")]),t._v(" "),a("li",[t._v("v-html 指令不能用，可以使用 rich-text组件 代替")]),t._v(" "),a("li",[t._v("Vue 过滤器（filter）")]),t._v(" "),a("li",[t._v("data 必须声明为返回一个初始数据对象的函数")]),t._v(" "),a("li",[t._v("按键修饰符")]),t._v(" "),a("li",[t._v("模板中不支持复杂的JavaScript表达式")])]),t._v(" "),a("h2",{attrs:{id:"事件处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件处理")]),t._v(" "),a("p",[t._v("uni-app 支持大部分 Vue 中的事件，对部分事件进行了改写：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件映射表，左侧为 WEB 事件，右侧为 ``uni-app`` 对应事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  click"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  touchstart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  touchmove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  touchcancel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchcancel'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  touchend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  longtap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'longtap'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  change"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'submit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  blur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  reset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'confirm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  columnchange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'columnchange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  linechange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linechange'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scrolltoupper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrolltoupper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scrolltolower"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scrolltolower'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  scroll"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scroll'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 input 和 textarea 中 change 事件会被转为 blur 事件。")]),t._v(" "),a("h3",{attrs:{id:"事件修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件修饰符")]),t._v(" "),a("ul",[a("li",[t._v("stop 的使用会阻止冒泡，但是同时绑定了一个非冒泡事件，会导致该元素上的 catchEventName 失效！")]),t._v(" "),a("li",[t._v("prevent 可以直接干掉，因为uni-app里没有什么默认事件，比如 submit 并不会跳转页面")]),t._v(" "),a("li",[t._v("self 没有可以判断的标识")]),t._v(" "),a("li",[t._v("once 也不能做，因为uni-app没有 removeEventListener, 虽然可以直接在 handleProxy 中处理，但非常的不优雅，违背了原意，暂不考虑")])]),t._v(" "),a("h2",{attrs:{id:"模板中不支持复杂的javascript表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板中不支持复杂的javascript表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 模板中不支持复杂的JavaScript表达式")]),t._v(" "),a("p",[t._v("目前可以使用的有 "),a("code",[t._v("+ - * % ?: ! == === > < [] .")]),t._v(" 。")]),t._v(" "),a("p",[t._v("比如以下模板语法就不支持：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ message.split('').reverse().join('') }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("通常这种情况使用计算属性即可。")])])},[],!1,null,null,null);s.default=r.exports}}]);