(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{710:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"变量规则"}},[t._v("变量规则")]),t._v(" "),n("p",[t._v("支持在规则路由中为变量用正则的方式指定变量规则，弥补了动态变量无法限制具体的类型问题，并且支持全局规则设置。")]),t._v(" "),n("blockquote",[n("p",[t._v("不需要开头添加"),n("code",[t._v("^")]),t._v("或者在最后添加"),n("code",[t._v("$")]),t._v("，也不支持模式修饰符，系统会自动添加。")])]),t._v(" "),n("h2",{attrs:{id:"局部变量规则"}},[t._v("局部变量规则")]),t._v(" "),n("p",[t._v("比如定义如下路由:")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("Route"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'hello/:name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'index/index/test'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("pattern")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\w+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("访问以下路由将能正常访问")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("http://www.my-tp5.com/hello/xiaoyu\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("而以下路由将发生错误")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("http://www.my-tp5.com/hello/全在昱\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h2",{attrs:{id:"配合动态路由使用-组合变量"}},[t._v("配合动态路由使用 (组合变量)")]),t._v(" "),n("p",[t._v("组合变量的优势是路由规则中没有固定的分隔符，可以随意组合需要的变量规则和分割符，配合变量规则使用非常适用。")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v("Route"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item<name><id>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'product/detail'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("pattern")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'[a-zA-Z]+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\d+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nRoute"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'item@<name>-<id>'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'product/detail'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token function"}},[t._v("pattern")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\w+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\d+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("h2",{attrs:{id:"全局变量规则"}},[t._v("全局变量规则")]),t._v(" "),n("p",[t._v("设置全局变量规则，全部路由有效 :")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 设置name变量规则（采用正则定义）")]),t._v("\nRoute"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("pattern")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\w+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 支持批量添加")]),t._v("\nRoute"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("pattern")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\w+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'id'")]),t._v("   "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\d+'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])])}],!1,null,null,null);s.default=e.exports}}]);