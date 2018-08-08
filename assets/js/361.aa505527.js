(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{1085:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"移动端滚动条适配"}},[t._v("移动端滚动条适配")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("结果，在电脑上的浏览器测试一点问题都没有，而在手机上，仍然是滑动的时候显示滚动条，停止滑动的时候隐藏。")]),t._v(" "),a("h2",{attrs:{id:"问题解决"}},[t._v("问题解决")]),t._v(" "),a("p",[t._v("查了下资料，需要添加移动端的适配：")]),t._v(" "),t._m(1),a("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/tanmuxue/article/details/53155918",target:"_blank",rel:"noopener noreferrer"}},[t._v("移动端默认显示滚动条"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("今天产品提出一个需求，在某个页面显示滚动条。开始觉得很简单，那就加个 "),s("code",[this._v("overflow: scroll")]),this._v(" 就行啦。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".list")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("overflow")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("overflow-y")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v("&::-webkit-scrollbar-track-piece")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border-left")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v("&::-webkit-scrollbar")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 13px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-moz-border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v("&::-webkit-scrollbar-thumb")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background-clip")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" padding"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-moz-border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("min-height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 28px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token selector"}},[t._v("&::-webkit-scrollbar-thumb:hover")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("background-color")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("rgba")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-webkit-border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("-moz-border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br")])])}],!1,null,null,null);s.default=r.exports}}]);