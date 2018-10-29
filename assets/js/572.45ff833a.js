(window.webpackJsonp=window.webpackJsonp||[]).push([[572],{263:function(s,t,a){"use strict";a.r(t);var n={props:["slot-key"]},e=a(0),r=Object(e.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[a("h1",{attrs:{id:"前端问题汇总及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端问题汇总及解决方案","aria-hidden":"true"}},[s._v("#")]),s._v(" 前端问题汇总及解决方案")]),s._v(" "),a("h2",{attrs:{id:"less-设置-时的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less-设置-时的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" Less 设置 '/' 时的问题")]),s._v(" "),a("p",[s._v("在使用 Less 的时候，如果设置的值里面包含 "),a("code",[s._v("/")]),s._v("，是不会进行转义的，Less 解析器会将之当成除法运算，比如:")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token property"}},[s._v("grid-area")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 "),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v(" 2 "),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v(" 5 "),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v(" 4"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这输出的结果为:")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[s._v("grid-area")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.05"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解决方案为: 使用 "),a("code",[s._v("e('/)")]),s._v(" 进行转义")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token property"}},[s._v("grid-area")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 "),a("span",{attrs:{class:"token function"}},[s._v("e")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 2 "),a("span",{attrs:{class:"token function"}},[s._v("e")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 5 "),a("span",{attrs:{class:"token function"}},[s._v("e")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 4"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出为:")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[s._v("grid-area")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 2 / 2 / 5 / 4"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("参考: "),a("a",{attrs:{href:"http://www.it1352.com/564006.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("使用Less时，CSS值中的斜杠（/）"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"ios-系统时间解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-系统时间解析","aria-hidden":"true"}},[s._v("#")]),s._v(" iOS 系统时间解析")]),s._v(" "),a("p",[s._v("iOS 系统在使用时间对象的时候一定得注意了，如果使用:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" date "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'2018-06-08 06:30:00'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这种形式创建一个事件对象，iOS是不成功的，需要将 "),a("code",[s._v("-")]),s._v(" 转换为 "),a("code",[s._v("/")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("let")]),s._v(" date "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'2018-06-08 06:30:00'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token regex"}},[s._v("/-/g")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("同样的，在iOS中，将Date对象转化为 "),a("code",[s._v("-")]),s._v(" 格式的字符串也有问题：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("toLocaleDateString")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token regex"}},[s._v("/\\//g")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'-'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我在iOS手机上打印出来为 "),a("code",[s._v("2018年1月1日")]),s._v(" 这种格式。")]),s._v(" "),a("p",[s._v("懒得折腾了，最后引用了 moment 库解决：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("moment")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("format")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'YYYY-MM-DD'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个坑不大，但很容易掉沟里，我着过好几次。")]),s._v(" "),a("h2",{attrs:{id:"ios-系统滑动的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-系统滑动的问题","aria-hidden":"true"}},[s._v("#")]),s._v(" iOS 系统滑动的问题")]),s._v(" "),a("p",[s._v("如果内容溢出容器，在iOS系统的手机上滑动会非常吃力，一顿一顿的，还不时连同绝对定位的元素一起开始飘，这时，只需要在容器中加入以下代码即可解决：")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("-webkit-overflow-scrolling")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("touch"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("注意是加在有宽高的容器元素中，而不是内容元素中：")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("width")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("overflow-x")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" scroll"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("-webkit-overflow-scrolling")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("touch"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token selector"}},[s._v(".content")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  \t"),a("span",{attrs:{class:"token property"}},[s._v("width")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \t"),a("span",{attrs:{class:"token property"}},[s._v("height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500px"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("或者最终渲染出来仍然具有宽高但是却不是显式生命的容器中：")]),s._v(" "),a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("top")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("bottom")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("left")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("bottom")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("overflow-x")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hidden"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("overflow-y")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" scroll"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token property"}},[s._v("-webkit-overflow-scrolling")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("touch"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token selector"}},[s._v(".content")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[s._v("width")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),a("span",{attrs:{class:"token property"}},[s._v("height")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 500%"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("简单说说 "),a("code",[s._v("-webkit-overflow-scrolling")]),s._v(" 属性，MDN 是这样说的：")]),s._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{attrs:{class:"token code keyword"}},[s._v("`-webkit-overflow-scrolling`")]),s._v(" 属性控制元素在移动设备上是否使用滚动回弹效果.\n\n"),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" auto: 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。\n"),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" touch: 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。同时也会创建一个新的堆栈上下文。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("参考："),a("a",{attrs:{href:"https://www.cnblogs.com/xiahj/p/8036419.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入研究-webkit-overflow-scrolling:touch及ios滚动"),a("OutboundLink")],1)])])},[],!1,null,null,null);r.options.__file="Frontend_Solution.md";t.default=r.exports}}]);