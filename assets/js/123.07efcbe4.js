(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{513:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"短路求值简写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路求值简写","aria-hidden":"true"}},[s._v("#")]),s._v(" 短路求值简写")]),s._v(" "),t("h2",{attrs:{id:"短路或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路或","aria-hidden":"true"}},[s._v("#")]),s._v(" 短路或")]),s._v(" "),t("h3",{attrs:{id:"短路或判断非空值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路或判断非空值","aria-hidden":"true"}},[s._v("#")]),s._v(" 短路或判断非空值")]),s._v(" "),t("p",[s._v("将变量值分配给另一个变量时，你可能需要确保源变量不为 null、undefined 或者不为空。此时可以使用多个条件写一个很长的 if 语句，也可以使用短路求值的简写办法。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("variable1 "),t("span",{attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("null")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" variable1 "),t("span",{attrs:{class:"token operator"}},[s._v("!==")]),s._v(" undefined "),t("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" variable1 "),t("span",{attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("''")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" variable2 "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" variable1"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("简写为")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("const")]),s._v(" variable2 "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" variable1  "),t("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v("'new'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"短路或求值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路或求值","aria-hidden":"true"}},[s._v("#")]),s._v(" 短路或求值")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  d "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" a\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  d "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" b\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("简写为")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" d "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" a "),t("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" b "),t("span",{attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"短路与"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路与","aria-hidden":"true"}},[s._v("#")]),s._v(" 短路与")]),s._v(" "),t("h3",{attrs:{id:"短路与求值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路与求值","aria-hidden":"true"}},[s._v("#")]),s._v(" 短路与求值")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  c "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" b\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  c "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" a\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// c is 2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("简写为")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" c "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" a "),t("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" b "),t("span",{attrs:{class:"token comment"}},[s._v("// c is 2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}],!1,null,null,null);e.options.__file="short.md";a.default=e.exports}}]);