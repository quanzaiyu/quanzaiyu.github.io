(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{1009:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"过滤器"}},[s._v("过滤器")]),s._v(" "),a("p",[s._v("Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("\x3c!-- 在双花括号中 --\x3e")]),s._v("\n{{ message | capitalize }}\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("\x3c!-- 在 `v-bind` 中 --\x3e")]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[s._v("v-bind:")]),s._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("rawId | formatId"),a("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"全局过滤器"}},[s._v("全局过滤器")]),s._v(" "),a("p",[s._v("定义一个全局过滤器很简单，只需要导出一个方法即可。")]),s._v(" "),a("p",[s._v("使用的时候很简单，只需要在入口文件全局引入此过滤器即可，使用 "),a("code",[s._v("Vue.filter(key, value)")]),s._v(" 引入。")]),s._v(" "),a("p",[s._v("比如，PHP后端返回的时间戳精确到秒，而JS中的时间戳是用毫秒表示，则可以定义一个转换时间戳的全局过滤器:")]),s._v(" "),a("p",[a("code",[s._v("main.js")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Vue "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'vue'")]),s._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'millisecond'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("value"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("''")]),s._v("\n  value "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" value"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("toUpperCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v(" value"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("在需要使用的组件使用:")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  {{1516101106 | millisecond}}\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"组件过滤器"}},[s._v("组件过滤器")]),s._v(" "),a("p",[s._v("组件过滤器更简单，只需在对应组件中定义 "),a("code",[s._v("filters")]),s._v(" 即可，不过只针对本组件有效。")]),s._v(" "),a("p",[s._v("比如定义一个首字母大写的过滤器:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  filters"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    capitalize"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("value"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("''")]),s._v("\n      value "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" value"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" value"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("toUpperCase")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("+")]),s._v(" value"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("同样，使用方法一致:")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  {{'hello' | capitalize}}\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);