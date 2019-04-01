(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{436:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"大数处理-bigdecimal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大数处理-bigdecimal","aria-hidden":"true"}},[t._v("#")]),t._v(" 大数处理: bigDecimal")]),t._v(" "),a("h2",{attrs:{id:"问题现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题现象","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题现象")]),t._v(" "),a("p",[t._v("最近在开发过程中，遇到很多关于数值的问题。第一类是浮点数运算不精确，第二类是大数运算不精确。")]),t._v(" "),a("p",[t._v("浮点数不精确:")]),t._v(" "),a("imgLink",{attrs:{src:"articles/001.png"}}),t._v(" "),a("p",[t._v("大数不精确:")]),t._v(" "),a("imgLink",{attrs:{src:"articles/003.png"}}),t._v(" "),a("p",[t._v("总的来说，此类问题的产生都是由于计算机对于大数运算不精确造成的，跟语言无关。像 JAVA 这门语言，有 BigDecimal 的解决方案，而 JS，在查阅众多资料后，发现也有相关的解决方案。")]),t._v(" "),a("h2",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("ol",[a("li",[t._v("关于浮点数，可以使用乘以倍数的解决方案")])]),t._v(" "),a("imgLink",{attrs:{src:"articles/002.png"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("关于大数，可以使用第三方库解决")])]),t._v(" "),a("p",[t._v("decimal.js: "),a("a",{attrs:{href:"https://github.com/MikeMcl/decimal.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"http://mikemcl.github.io/decimal.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Doc"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5032485723458348569331745.33434346346912144534543'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.321e+4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '43210'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-0b10110100.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '-180.5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0xff.8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '255.5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'Infinity'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'NaN'")]),t._v("\n")])])]),a("p",[t._v("原理就是将一个数值类型转化为一个字符串数组，重写其 toString() 将之转化为字符串。")]),t._v(" "),a("p",[t._v("当然，对于第一类问题，浮点数不精确的问题实际上也是属于大数不精确的问题，如法炮制即可。")])],1)},[],!1,null,null,null);s.default=e.exports}}]);