(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{313:function(t,s,a){},314:function(t,s,a){},315:function(t,s,a){},316:function(t,s,a){},361:function(t,s,a){"use strict";var n=a(313);a.n(n).a},362:function(t,s,a){"use strict";var n=a(314);a.n(n).a},363:function(t,s,a){"use strict";var n=a(315);a.n(n).a},364:function(t,s,a){"use strict";var n=a(316);a.n(n).a},574:function(t,s,a){"use strict";a.r(s);a(361),a(362),a(363),a(364);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"网格线（grid-lines）"}},[t._v("网格线（Grid Lines）")]),t._v(" "),a("p",[t._v("网格线实际上是代表线的开始、结束，两者之间就是网格列或行。")]),t._v(" "),a("p",[t._v("每条线是从网格轨道开始，网格的网格线从1开始，每条网格线逐步增加1。")]),t._v(" "),a("p",[t._v("网格线包括:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),a("p",[t._v("如上，创建了个两列三行的网格，包括三条列网格线和四条行网格线。item1 就是由行和列的号码重新定位。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("h2",{attrs:{id:"grid-row-和-grid-column"}},[t._v("grid-row 和 grid-column")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("如上面 item1 的属性可以设置为:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("如上面 item1 的属性可以设置为:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),a("h2",{attrs:{id:"跨行跨列"}},[t._v("跨行跨列")]),t._v(" "),a("p",[t._v("默认情况下网格项目跨度只有一个列和行，但可以跨越多个行和列。著作权归作者所有。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("比如")]),t._v(" "),t._m(11),a("p",[t._v("设置了一个跨越三行两列的网格项目")]),t._v(" "),a("div",{staticClass:"demo demo1"},[a("div",{staticClass:"container"},[a("div",{staticClass:"items"},t._l(7,function(s){return a("div",{staticClass:"item"},[t._v(t._s(s))])}))])]),t._v(" "),t._m(12),t._v(" "),t._m(13),a("p",[t._v("上面的示例，表示从第二行开始，合并之后的3行，从第一列来时，合并之后的2列。")]),t._v(" "),a("div",{staticClass:"demo demo2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"items"},t._l(7,function(s){return a("div",{staticClass:"item"},[t._v(t._s(s))])}))])]),t._v(" "),a("h2",{attrs:{id:"网格线命名"}},[t._v("网格线命名")]),t._v(" "),a("p",[t._v("通过 grid-template-rows 和 grid-template-columns 定义网格时，网格线可以被命名。网格线名称也可以设置网格项目位置，并用来定位网格项目的位置。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),a("p",[t._v("可以在方括号中添加多个名称来命名网格线名称，使用多外名称命名网格线名称时，名称间要用空格隔开。")]),t._v(" "),t._m(17),t._m(18),t._v(" "),a("h2",{attrs:{id:"通过网格线名称设置网格项目位置"}},[t._v("通过网格线名称设置网格项目位置")]),t._v(" "),a("p",[t._v("使用网格线名称设置网格项目位置和使用网格线号码设置网格项目位置类似。")]),t._v(" "),t._m(19),a("p",[t._v("或")]),t._v(" "),t._m(20),a("p",[t._v("引用网格线名称的时候不应该带方括号。")]),t._v(" "),t._m(21),t._v(" "),a("h2",{attrs:{id:"使用相同的名称命名网格线和设置网格项目位置"}},[t._v("使用相同的名称命名网格线和设置网格项目位置")]),t._v(" "),a("p",[t._v("使用repeat()函数可以给网格线分配相同的名称。这可以节省一定的时间。")]),t._v(" "),t._m(22),a("p",[t._v("使用repeat()函数可以给网格线命名，这也导致多个网格线具有相同的网格线名称。")]),t._v(" "),a("p",[t._v("相同网格线名称指定网格线的位置和名称，也且会自动在网格线名称后面添加对应的数字，使其网格线名称也是唯一的标识符。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),a("p",[t._v("使用相同的网格线名称可以设置网格项目的位置。网格线的名称和数字之间需要用空格分开。")]),t._v(" "),a("p",[t._v("在这个示例中，item1放置位置是row-start第2条开始，至row-end的第3条结束，这用来设置item1在行的起始和结束位置；col-start的第1条开始，至col-start的第3条结束（col-start的第3条也对应的是col-end的第2条），用来设置item1在列的起始位置和结束位置。")]),t._v(" "),t._m(25),t._v(" "),a("h2",{attrs:{id:"网格线负值"}},[t._v("网格线负值")]),t._v(" "),a("p",[t._v("网格线可以使用负值，表示从右向左的顺序。")]),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("比如:")]),t._v(" "),t._m(27),a("div",{staticClass:"demo demo3"},[a("div",{staticClass:"container"},[a("div",{staticClass:"items"},t._l(7,function(s){return a("div",{staticClass:"item"},[t._v(t._s(s))])}))])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("grid-row-start")]),this._v(" "),s("li",[this._v("grid-row-end")]),this._v(" "),s("li",[this._v("grid-column-start")]),this._v(" "),s("li",[this._v("grid-column-end")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v(".item1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("grid-row-start")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("grid-row-end")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("grid-column-start")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("grid-column-end")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/css-grid-13.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果一个网格项目跨度只有一行或一列，那么 "),s("code",[this._v("grid-row-end")]),this._v(" 和 "),s("code",[this._v("grid-column-end")]),this._v(" 不是必需的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("grid-row")]),this._v(" 是 "),s("code",[this._v("grid-row-start")]),this._v(" 和 "),s("code",[this._v("grid-row-end")]),this._v(" 的组合属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v("grid-row")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" 2 / 3"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("grid-column")]),this._v(" 是 "),s("code",[this._v("grid-column-start")]),this._v(" 和 "),s("code",[this._v("grid-column-end")]),this._v(" 的组合属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v("grid-column")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" 2 / 3"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("grid-row")]),this._v(" 和 "),s("code",[this._v("grid-column")]),this._v(" 的设置规则:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("如果只提供一个值，他指定了grid-row-start和grid-column-start的值。")]),this._v(" "),s("li",[this._v("如果提供两个值，第一个值是grid-row-start、grid-column-start的值，第二个值是grid-row-end、grid-column-end的值，两者之间必须要用/隔开。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("可以通过设置 "),a("code",[t._v("grid-column-end")]),t._v(" 和 "),a("code",[t._v("grid-column-start")]),t._v(" 距离多个网络线号实现多个列跨越，通过 "),a("code",[t._v("grid-row-end")]),t._v(" 和 "),a("code",[t._v("grid-row-start")]),t._v(" 距离多个网格号实现多个行跨越。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token property"}},[this._v("grid-area")]),s("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" 2 / 2 / 5 / 4"),s("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用关键词 "),s("code",[this._v("span")]),this._v(" 后面紧随数字，表示合并多少个列或行:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2 / span 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" span 2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("分配网格线名称必须用方括号 "),s("code",[this._v("[网格线名称]")]),this._v("，然后后面紧跟网格轨道的尺寸值。定义网格线名称时需要避免使用规范中出现的关键词，以免导致混乱。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [row-1-start] 1fr [row-2-start] 1fr [row-2-end]"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [col-1-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-3-end]"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/css-grid-20.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [row-start row-1-start] 1fr [row-1-end row-2-start] 1fr [row-2-end row-end]"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [col-start] 1fr [col-2-start] 1fr [col-3-start] 1fr [col-end]"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/css-grid-21.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-row-start")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    row-2-start"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-row-end")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("      row-end"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-column-start")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" col-2-start"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-column-end")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   col-end"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row-2-start / row-end"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" col-2-start / col-end"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/css-grid-22.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("repeat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3, [row-start] 1fr [row-end]"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("repeat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3, [col-start] 1fr [col-end]"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/css-grid-24.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row-start 2 / row-end 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" col-start / col-start 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/css-grid-25.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"https://img.xiaoyulive.top/img/css/example-grid-lines-3.png",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-less line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1 "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])}],!1,null,"6be50bf0",null);s.default=r.exports}}]);