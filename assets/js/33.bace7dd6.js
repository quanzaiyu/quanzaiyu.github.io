(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{110:function(t,s,a){},197:function(t,s,a){"use strict";var n=a(110);a.n(n).a},381:function(t,s,a){"use strict";a.r(s);a(197);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"纯-css3-打造一个switch开关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯-css3-打造一个switch开关","aria-hidden":"true"}},[t._v("#")]),t._v(" 纯 css3 打造一个switch开关")]),t._v(" "),a("label",{staticClass:"iSwitch"},[a("input",{attrs:{type:"checkbox"}}),t._v(" "),a("i")]),t._v(" "),a("p",[t._v("设计思路 :")]),t._v(" "),a("ol",[a("li",[t._v("首先使用 label 将 input 包裹，这样就会自动绑定 input，再将 input 隐藏")]),t._v(" "),a("li",[t._v("使用 :checked 选择器实现开关的动态效果（开关打开时应用：checked的样式，关闭时应用正常的样式），而按钮的变化使用了 css3 的transform来实现的，再结合 transition 实现切换动画效果")]),t._v(" "),a("li",[t._v("使用 "),a("code",[t._v("i:after")]),t._v(" 来模拟按钮，"),a("code",[t._v("i:before")]),t._v(" 来改变开关的背景色。之所以要使用 "),a("code",[t._v("i:after")]),t._v(" 来模拟按钮，是因为 "),a("code",[t._v("i:before")]),t._v(" 在渲染的时候会覆盖 "),a("code",[t._v("i")]),t._v("，且不能通过 z-index 改变覆盖顺序")])]),t._v(" "),a("p",[t._v("简单实现:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("iSwitch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("checkbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("label")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".iSwitch")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#dcdcdc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("px solid "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#dcdcdc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("px "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#dcdcdc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("input")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:checked + i")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token func"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:checked + i::before")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("i")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("s all linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&::after")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#fff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&::before")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#61cafd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("s all linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.css88.com/b-mui/switch.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("switch -适合移动端的switch"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.css88.com/b-mui/checkbox.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("checkbox-适合移动端的checkbox"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/hantian616/article/details/52122120",target:"_blank",rel:"noopener noreferrer"}},[t._v("css3打造一个switch开关"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.css88.com/archives/5693",target:"_blank",rel:"noopener noreferrer"}},[t._v("css3实现的switch开关按钮"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.css88.com/archives/5677",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个适合移动端的checkbox"),a("OutboundLink")],1)])])])},[],!1,null,"73ec9109",null);s.default=r.exports}}]);