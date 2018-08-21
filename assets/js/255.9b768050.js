(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{803:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"数据与方法"}},[t._v("数据与方法")]),t._v(" "),a("h2",{attrs:{id:"data-和-methods"}},[t._v("data 和 methods")]),t._v(" "),a("p",[t._v("当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。")]),t._v(" "),a("p",[t._v("在模板中绑定一个属性值使用 "),a("code",[t._v(t._s())])]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("举例说明:")]),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),a("h2",{attrs:{id:"内置实例属性"}},[t._v("内置实例属性")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("比如:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("控制台先后打印出:")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("详细的内置实例属性将在后面的文章详细列出讲述。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 Vue 中，使用方法需要将之定义到 methods 选项中，在模板中使用的时候可以用 "),s("code",[this._v("@")]),this._v(" 进行事件绑定。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`<h1 @click='func'>{{text}}</h1>`")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'welcome'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现象是模板首先渲染出一个 "),s("code",[this._v("Hello")]),this._v("，点击之后时候渲染出 "),s("code",[this._v("welcome")]),this._v("，这也能看出数据是响应式的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在实例内部，使用 "),s("code",[this._v("data")]),this._v(" 和 "),s("code",[this._v("methods")]),this._v(" 中的属性与方法都可以直接使用 "),s("code",[this._v("this")]),this._v(" 进行调用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("除了数据属性，Vue 实例还暴露了一些有用的实例属性与方法。它们都有前缀 "),s("code",[this._v("$")]),this._v("，以便与用户定义的属性区分开来。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" template "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`<h1>{{text}}</h1>`")])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vm "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  el"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("created")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("可以看出，"),a("code",[t._v("$data")]),t._v(" 和 "),a("code",[t._v("$el")]),t._v(" 分别获取了实例属性中的 "),a("code",[t._v("data")]),t._v(" 和 "),a("code",[t._v("el")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"http://img.xiaoyulive.top/img/articles/023.png",alt:""}})])}],!1,null,null,null);s.default=e.exports}}]);