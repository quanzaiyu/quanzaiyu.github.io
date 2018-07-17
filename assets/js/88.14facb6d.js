(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1066:function(s,t,a){"use strict";a.r(t);var n=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"新增属性值"}},[s._v("新增属性值")]),n("h2",{attrs:{id:"弹性长度-fr"}},[s._v("弹性长度 fr")]),n("p",[s._v("可以使用单位 fr 自动按照比例计算宽高。")]),n("p",[s._v("比如设置")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1fr 1fr 2fr\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在这个示例中，将网格容器分成了4等份（1 + 1 + 2 = 4），每一份（1fr）是网格容器宽度的四分之一。所以 item1 和 item2 的宽度是网格容器的四分之一宽，item3 是网格容器宽度的四分之二（2fr）")]),n("p",[s._v("当fr和其它长度单位的值结合在一起的时候，fr 是基于网格容器可用空间来计算。")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 3rem 25% 1fr 2fr\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在这个示例中，将网格容器可用空间是网格宽度减去 3rem 和 25% 剩下的宽度，而 fr 就是基于这个尺寸计算：")]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1fr = (网格宽度 - 3rem - 网格宽度 * 25%) / 3\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"minmax"}},[s._v("minmax")]),n("p",[s._v("minmax() 函数能够让我们用最简单的 CSS 控制网格轨道的大小。这个函数包括一个最小值和最大值。")]),n("p",[s._v("如果定义的最大值小于最小值，它将会被忽略，函数会被视为只设置了一个最小值。")]),n("p",[s._v("minmax()函数接受六种类型的值：")]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("- 长度值 `<length>`\n- 百分比值\n- 弹性值\n- max-content\n- min-content\n- auto\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("示例代码")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[s._v(".grid")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("display")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("minmax")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("100px, 200px"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 1fr 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("figure",[n("img",{attrs:{src:a(528),alt:""}})]),n("h2",{attrs:{id:"repeat"}},[s._v("repeat")]),n("p",[s._v("使用repeat()可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。repeat()接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。")]),n("p",[s._v("比如:")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 30px "),n("span",{attrs:{class:"token function"}},[s._v("repeat")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("3, 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 30px"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在这个示例中，第一列和最后一列的宽度都是 30px，并且它们之间有另列三列，这三列是通过 repeat() 来创建的，而且每列的列宽是 1fr（1fr = (网格宽度 - 30px - 30px) / 3）")]),n("p",[s._v("甚至，在 repeat() 中，也可嵌套 minmax()，控制每一个网格项目的最大最小值。")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[s._v(".grid")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("display")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("repeat")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("3, "),n("span",{attrs:{class:"token function"}},[s._v("minmax")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("200px, 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这个例子中，每一行分为三列，每一列最小宽度为 200px，最大时平分网格宽度。")]),n("h2",{attrs:{id:"auto-fit"}},[s._v("auto-fit")]),n("p",[s._v("在 repeat() 函数中使用 auto-fit 这个关键词，来替代重复次数。这可以根据每列的宽度灵活的改变网格的列数，灵活的控制网格的列数。")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[s._v(".grid")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("display")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("repeat")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("auto-fit, "),n("span",{attrs:{class:"token function"}},[s._v("minmax")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("200px, 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这个例子中，网格中的每个列的最小宽度为200px。根据浏览器视窗大小，网格数量会根据共最合理的宽度进行变化。做到了不使用媒体查询即可实现响应式布局。")]),n("figure",[n("img",{attrs:{src:a(527),alt:""}})]),n("h2",{attrs:{id:"max-content-和-min-content"}},[s._v("max-content 和 min-content")]),n("p",[s._v("max-content关键词是一个特殊的值，它代表了单元格“最理想的大小”。网格单元格最小的宽度围绕它的内容。例如，如果单元格的的内容是一个句子，理想的单元格的宽度将是整个句子的长度，无论是什么长度，单元格内容的句子都不会换行。")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[s._v(".grid")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("display")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("minmax")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max-content, max-content"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 1fr 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("figure",[n("img",{attrs:{src:a(526),alt:""}})]),n("p",[s._v("min-content 代表单元格最小宽度，可以不让内容溢出单元格，除非是不可避免的。")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[s._v(".grid")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("display")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("minmax")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("min-content, min-content"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 1fr 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("figure",[n("img",{attrs:{src:a(525),alt:""}})]),n("h2",{attrs:{id:"auto"}},[s._v("auto")]),n("p",[s._v("auto，minmax() 函数的最小值和最大值使用 auto，将会有不同的含义，其含义也取决于 minmax() 函数的最小值和最大值。")]),n("p",[s._v("如果用于最大值，那么 auto 值相当于 max-content 值；如果用于最小值，那么 auto 值相当于 min-content。最大的最小尺寸不同于 min-content，它通过 min-width 或 min-height 来指定。")]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[s._v(".grid")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("display")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grid"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token property"}},[s._v("grid-template-columns")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("minmax")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("auto, auto"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 1fr 1fr"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("figure",[n("img",{attrs:{src:a(524),alt:""}})])])}],e=a(2),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);t.default=r.exports},524:function(s,t,a){s.exports=a.p+"assets/img/auto.a741151c.gif"},525:function(s,t,a){s.exports=a.p+"assets/img/min-content.06f31723.gif"},526:function(s,t,a){s.exports=a.p+"assets/img/max-content.1b568137.gif"},527:function(s,t,a){s.exports=a.p+"assets/img/responsive.79a34efc.gif"},528:function(s,t,a){s.exports=a.p+"assets/img/length-1.d0ee1470.gif"}}]);