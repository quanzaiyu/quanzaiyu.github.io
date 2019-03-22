(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{500:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-基础","aria-hidden":"true"}},[t._v("#")]),t._v(" Node 基础")]),t._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),a("p",[t._v("使用var(ES5)、let(ES6)进行声明的为变量，使用const(ES6)进行声明的为常量。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v("、"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),a("h3",{attrs:{id:"全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局变量")]),t._v(" "),a("p",[t._v("global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条件的变量是全局变量：")]),t._v(" "),a("p",[t._v("在最外层定义的变量")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("全局对象的属性")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("globel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("隐式定义的变量（未定义直接赋值的变量）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),a("p",[t._v("当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\nglobal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("永远使用 var、let 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("也不要在定义变量之前使用变量。")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])]),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 运算符")]),t._v(" "),a("h3",{attrs:{id:"算术运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 算术运算符")]),t._v(" "),a("p",[t._v("ECMAScript中包含以下算数运算符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("+")]),t._v(" "),a("code",[t._v("-")]),t._v(" "),a("code",[t._v("*")]),t._v(" "),a("code",[t._v("/")]),t._v(" "),a("code",[t._v("%")]),t._v("(取模) "),a("code",[t._v("++")]),t._v(" "),a("code",[t._v("--")])])]),t._v(" "),a("p",[t._v("同其他语言一样，注意自增自减配合赋值运算时，"),a("code",[t._v("++/--")]),t._v("放于变量前表示先自增自减后赋值，"),a("code",[t._v("++/--")]),t._v("放于变量后表示先赋值后自增自减。")]),t._v(" "),a("p",[t._v("在字符串操作中，"),a("code",[t._v("+")]),t._v(" 运算符用于字符连接。")]),t._v(" "),a("h2",{attrs:{id:"赋值运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 赋值运算符")]),t._v(" "),a("p",[t._v("ECMAScript中包含以下赋值运算符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("=")]),t._v("\tx=y\t赋值")]),t._v(" "),a("li",[a("code",[t._v("+=")]),t._v("\tx+=y 加赋值")]),t._v(" "),a("li",[a("code",[t._v("-=")]),t._v("\tx-=y 减赋值")]),t._v(" "),a("li",[a("code",[t._v("*=")]),t._v("\tx*=y 乘赋值")]),t._v(" "),a("li",[a("code",[t._v("/=")]),t._v("\tx/=y 除赋值")]),t._v(" "),a("li",[a("code",[t._v("%=")]),t._v("\tx%=y 取余赋值")])]),t._v(" "),a("h2",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 比较运算符")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(">")]),t._v(" "),a("code",[t._v("<")]),t._v(" "),a("code",[t._v(">=")]),t._v(" "),a("code",[t._v("<=")])]),t._v(" "),a("li",[t._v("不判断类型: "),a("code",[t._v("==")]),t._v(" "),a("code",[t._v("!=")])]),t._v(" "),a("li",[t._v("判断类型:  "),a("code",[t._v("===")]),t._v(" "),a("code",[t._v("!==")])])]),t._v(" "),a("p",[t._v("注意，在 等于/不等于 运算符中，若不判断类型则包含类型的隐私转换。")]),t._v(" "),a("h2",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),a("ul",[a("li",[t._v("短路 "),a("code",[t._v("&&")]),t._v(" "),a("code",[t._v("||")])]),t._v(" "),a("li",[t._v("不短路 "),a("code",[t._v("&")]),t._v(" "),a("code",[t._v("|")])]),t._v(" "),a("li",[t._v("非 "),a("code",[t._v("!")])])]),t._v(" "),a("p",[t._v("所谓短路就是若前一个条件不满足条件则不进入下一个条件进行判断。")]),t._v(" "),a("h3",{attrs:{id:"位运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#位运算符","aria-hidden":"true"}},[t._v("#")]),t._v(" 位运算符")]),t._v(" "),a("ul",[a("li",[t._v("按位非 "),a("code",[t._v("~")]),t._v(", 可简单理解为改变运算数的符号并减去1")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0-1=-1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -1-1=-2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 10-1=9")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("undefined "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("undefined "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("&")]),t._v(" 按位与")]),t._v(" "),a("li",[a("code",[t._v("|")]),t._v(" 按位或")]),t._v(" "),a("li",[a("code",[t._v("^")]),t._v(" 按位异或")]),t._v(" "),a("li",[a("code",[t._v("~")]),t._v(" 按位非")]),t._v(" "),a("li",[a("code",[t._v(">>")]),t._v(" 右移")]),t._v(" "),a("li",[a("code",[t._v("<<")]),t._v(" 左移")]),t._v(" "),a("li",[a("code",[t._v(">>>")]),t._v(" 运算符忽略了符号位扩展，0补最高位，但是只是对32位和64位的值有意义。")])]),t._v(" "),a("p",[t._v("参考:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/happy1992/p/7064114.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("js按位运算符及其妙用"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);