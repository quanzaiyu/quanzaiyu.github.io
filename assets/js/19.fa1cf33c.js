(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{114:function(t,s,a){},115:function(t,s,a){},228:function(t,s,a){"use strict";var n=a(114);a.n(n).a},229:function(t,s,a){"use strict";var n=a(115);a.n(n).a},476:function(t,s,a){"use strict";a.r(s);a(228),a(229);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"网格区域（grid-areas）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格区域（grid-areas）","aria-hidden":"true"}},[t._v("#")]),t._v(" 网格区域（Grid Areas）")]),t._v(" "),a("p",[t._v("网格区域是一个逻辑空间，主要用来放置一个或多个网格项目。他有四条网格线，网格区域每边一条，四边相交组织的网格轨道可以调整网格区域大小。")]),t._v(" "),a("p",[a("code",[t._v("grid-area")]),t._v(" 是 "),a("code",[t._v("grid-row")]),t._v(" 和 "),a("code",[t._v("grid-column")]),t._v(" 的组合属性")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2 / 2 / 3 / 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("grid-area")]),t._v(" 的设置规则:")]),t._v(" "),a("p",[t._v("指定四个值，第一个值对应 "),a("code",[t._v("grid-row-start")]),t._v("，第二个值对应 "),a("code",[t._v("grid-column-start")]),t._v("，第三个值对应 "),a("code",[t._v("grid-row-end")]),t._v(" 和第四个值对应 "),a("code",[t._v("grid-column-end")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"网格区域命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格区域命名","aria-hidden":"true"}},[t._v("#")]),t._v(" 网格区域命名")]),t._v(" "),a("p",[t._v("像网格线名称一样，网格区域的名称也可以使用grid-template-areas属性来命名。引用网格区域名称也可以设置网格项目位置。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"header header"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content sidebar"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer footer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px 1fr 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("设置网格区域的名称应该放置在单引号或双引号内，每个名称由一个空格符分开。")]),t._v(" "),a("p",[t._v("网格区域的名称，每组（单引号或双引号内的网格区域名称）定义了网格的一行，每个网格区域名称定义网格的一列。")]),t._v(" "),a("imgLink",{attrs:{src:"css/css-grid-26.png/small"}}),t._v(" "),a("h2",{attrs:{id:"通过网格区域命名来定位网格项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过网格区域命名来定位网格项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过网格区域命名来定位网格项目")]),t._v(" "),a("p",[t._v("也可直接通过命名的网格区域指定网格项目所在的位置。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("grid-row-start")]),t._v("、"),a("code",[t._v("grid-row-end")]),t._v("、"),a("code",[t._v("grid-column-start")]),t._v(" 和 "),a("code",[t._v("grid-column-end")]),t._v(" 可以引用网格区域名称，用来设置网格项目位置。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可以使用简写:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" footer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" footer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("grid-area简写属性也可以引用网格区域的名称来设置网格项目的位置。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("如果使用 "),a("code",[t._v("grid-template")]),t._v(" 属性为网格容器设置的网格区域，此时设置 "),a("code",[t._v("grid-template-rows")]),t._v(" 和 "),a("code",[t._v("grid-template-columns")]),t._v(" 将无效。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("demo1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("items1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("header"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("sidebar"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("footer"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-stylus extra-class"},[a("pre",{pre:!0,attrs:{class:"language-stylus"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".items")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"header header"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content sidebar"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer footer"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:nth-child(1)")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),t._v(" header")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:nth-child(2)")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),t._v(" content")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:nth-child(3)")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),t._v(" sidebar")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("&:nth-child(4)")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property-declaration"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),t._v(" footer")]),t._v("\n")])])]),t._v(" "),a("div",{staticClass:"demo demo1"},[a("div",{staticClass:"container"},[a("div",{ref:"items1",staticClass:"items"},[a("div",{staticClass:"item"},[t._v("header")]),t._v(" "),a("div",{staticClass:"item"},[t._v("content")]),t._v(" "),a("div",{staticClass:"item"},[t._v("sidebar")]),t._v(" "),a("div",{staticClass:"item"},[t._v("footer")])])])]),t._v(" "),a("h2",{attrs:{id:"隐式地命名网格区域名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式地命名网格区域名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐式地命名网格区域名称")]),t._v(" "),a("p",[t._v("通常可以将网格线命名成任何你想命名的名称，如果网格线名称添加-start和-end的后缀，其实也隐式的创建一个网格区域，可以用来设置网格项目的位置。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [outer-start] 1fr [inner-start] 1fr [inner-end] 1fr [outer-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [outer-start] 1fr [inner-start] 1fr [inner-end] 1fr [inner-end]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这个示例中，行和列都具有 "),a("code",[t._v("inner-start")]),t._v(" 和 "),a("code",[t._v("inner-end")]),t._v(" 网格线名称，同时也对应的创建一个隐式网格区域名称 "),a("code",[t._v("inner")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("网格项目定位可以通过网格区域名称来设置，而不需要使用网格线名称。")]),t._v(" "),a("imgLink",{attrs:{src:"css/css-grid-34.png/small"}}),t._v(" "),a("h2",{attrs:{id:"隐式命名网格线名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式命名网格线名称","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐式命名网格线名称")]),t._v(" "),a("p",[t._v("隐式的指定网格线反向指定了隐式的网格区域名称，命名的网格区域隐式的命名了网格线名称。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"header header"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"content sidebar"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer footer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px 1fr 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("指定网格区域会给网格区域边线添加隐式的网格线名称。这些网格线的命名是基于网格区域来命名，只是在网格区域名称的后面添加后缀 "),a("code",[t._v("-start")]),t._v("或 "),a("code",[t._v("-end")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" header-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" footer-start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sidebar-end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这个示例中,header通过隐式的网格线名称设置其位置。")]),t._v(" "),a("imgLink",{attrs:{src:"css/css-grid-36.png/small"}})],1)},[],!1,null,"7471772e",null);s.default=r.exports}}]);