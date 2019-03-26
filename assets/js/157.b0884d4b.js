(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{422:function(a,s,t){"use strict";t.r(s);var r=t(1),e=Object(r.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"短路求值简写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路求值简写","aria-hidden":"true"}},[a._v("#")]),a._v(" 短路求值简写")]),a._v(" "),t("h2",{attrs:{id:"短路或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路或","aria-hidden":"true"}},[a._v("#")]),a._v(" 短路或")]),a._v(" "),t("h3",{attrs:{id:"短路或判断非空值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路或判断非空值","aria-hidden":"true"}},[a._v("#")]),a._v(" 短路或判断非空值")]),a._v(" "),t("p",[a._v("将变量值分配给另一个变量时，你可能需要确保源变量不为 null、undefined 或者不为空。此时可以使用多个条件写一个很长的 if 语句，也可以使用短路求值的简写办法。")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("variable1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" variable1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!==")]),a._v(" undefined "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" variable1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n     "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" variable2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" variable1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("简写为")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" variable2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" variable1  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'new'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h3",{attrs:{id:"短路或求值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路或求值","aria-hidden":"true"}},[a._v("#")]),a._v(" 短路或求值")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1")]),a._v("\n")])])]),t("p",[a._v("简写为")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" d "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1")]),a._v("\n")])])]),t("h2",{attrs:{id:"短路与"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路与","aria-hidden":"true"}},[a._v("#")]),a._v(" 短路与")]),a._v(" "),t("h3",{attrs:{id:"短路与求值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#短路与求值","aria-hidden":"true"}},[a._v("#")]),a._v(" 短路与求值")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// c is 2")]),a._v("\n")])])]),t("p",[a._v("简写为")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("let")]),a._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// c is 2")]),a._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);