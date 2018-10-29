(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{338:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"]},e=a(0),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"javascript-判断对象是否为空的几种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-判断对象是否为空的几种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript 判断对象是否为空的几种方法")]),t._v(" "),a("h2",{attrs:{id:"方式一：json-转化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一：json-转化","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式一：Json 转化")]),t._v(" "),a("p",[t._v("使用 JSON.stringify 将一个对象转化为字符串然后进行比较，也是最简单的一种方式：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"{}"')]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"方式二：第三方库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二：第三方库","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式二：第三方库")]),t._v(" "),a("p",[t._v("可以借助第三方库进行判断，比如 jQuery 中的 isEmptyObject 方法：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n$"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("isEmptyObject")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"方式三：object-getownpropertynames"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三：object-getownpropertynames","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式三：Object.getOwnPropertyNames()")]),t._v(" "),a("p",[t._v("此方法是使用 Object 对象的getOwnPropertyNames方法，获取到对象中的属性名，存到一个数组中，返回数组对象，我们可以通过判断数组的length来判断此对象是否为空。")]),t._v(" "),a("p",[t._v("注意：此方法不兼容 IE8")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getOwnPropertyNames")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"方式三：object-keys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三：object-keys","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式三：Object.keys()")]),t._v(" "),a("p",[t._v("这是ES6的新方法, 返回值也是对象中属性名组成的数组：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keys")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\narr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_38627581/article/details/77353015",target:"_blank",rel:"noopener noreferrer"}},[t._v("js判断对象是否为空对象的几种方法"),a("OutboundLink")],1)])])},[],!1,null,null,null);r.options.__file="JS_Object.md";s.default=r.exports}}]);