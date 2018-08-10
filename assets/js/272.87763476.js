(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1111:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"动态路由"}},[s._v("动态路由")]),s._v(" "),a("p",[s._v("我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 "),a("code",[s._v("User")]),s._v(" 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 "),a("code",[s._v("vue-router")]),s._v(" 的路由路径中使用『动态路径参数』（dynamic segment）来达到这个效果：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" User "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'<div>User {{ $route.params.id }}</div>'")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" router "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("// 动态路径参数 以冒号开头")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" path"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'/user/:id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" User "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("现在呢，像 "),a("code",[s._v("/user/foo")]),s._v(" 和 "),a("code",[s._v("/user/bar")]),s._v(" 都将映射到相同的路由。")]),s._v(" "),a("p",[s._v("一个『路径参数』使用冒号 "),a("code",[s._v(":")]),s._v(" 标记。当匹配到一个路由时，参数值会被设置到 "),a("code",[s._v("this.$route.params")]),s._v("，可以在每个组件内使用。")]),s._v(" "),a("p",[s._v("甚至可以在一个路由中设置多段『路径参数』，对应的值都会设置到 "),a("code",[s._v("$route.params")]),s._v(" 中。例如：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("模式")]),s._v(" "),a("th",[s._v("匹配路径")]),s._v(" "),a("th",[s._v("$route.params")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("/user/:username")]),s._v(" "),a("td",[s._v("/user/evan")]),s._v(" "),a("td",[a("code",[s._v("{ username: 'evan' }")])])]),s._v(" "),a("tr",[a("td",[s._v("/user/:username/post/:post_id")]),s._v(" "),a("td",[s._v("/user/evan/post/123")]),s._v(" "),a("td",[a("code",[s._v("{ username: 'evan', post_id: 123 }")])])])])]),s._v(" "),a("p",[s._v("除了 "),a("code",[s._v("$route.params")]),s._v(" 外，"),a("code",[s._v("$route")]),s._v(" 对象还提供了其它有用的信息，例如，"),a("code",[s._v("$route.query")]),s._v("（如果 URL 中有查询参数）、"),a("code",[s._v("$route.hash")]),s._v(" 等等。")])])}],!1,null,null,null);t.default=e.exports}}]);