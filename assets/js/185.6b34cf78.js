(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{692:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"注入"}},[s._v("注入")]),s._v(" "),a("h2",{attrs:{id:"方法注入"}},[s._v("方法注入")]),s._v(" "),a("p",[s._v("可以在 Request 请求对象中添加自己的方法，使用 Request 对象的方法注入功能即可：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 通过hook方法注入动态方法")]),s._v("\n\\"),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Request")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("hook")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Request "),a("span",{attrs:{class:"token variable"}},[s._v("$request")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$userId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$userId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("随后，直接在控制器中使用即可：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("index")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token variable"}},[s._v("$info")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("request")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("user")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$userId")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"属性注入"}},[s._v("属性注入")]),s._v(" "),a("p",[s._v("可以动态注入当前Request对象的属性，方法：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 动态绑定属性")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("request")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("bind")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 或者使用")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("request")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("user")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("获取绑定的属性使用下面的方式：")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("request")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("user")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"依赖注入"}},[s._v("依赖注入")]),s._v(" "),a("p",[s._v("ThinkPHP的依赖注入（也称之为控制反转）是一种较为轻量的实现，无需任何的配置，并且主要针对访问控制器进行依赖注入。可以在控制器的构造函数或者操作方法（指访问请求的方法）中类型声明任何（对象类型）依赖，这些依赖会被自动解析并注入到控制器实例或方法中。")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("model"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("hello")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Request "),a("span",{attrs:{class:"token variable"}},[s._v("$request")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" User "),a("span",{attrs:{class:"token variable"}},[s._v("$user")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("user")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$user")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Hello,'")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$request")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("param")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'！'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);