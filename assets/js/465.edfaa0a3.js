(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{701:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"uni-app-样式与模板规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uni-app-样式与模板规范","aria-hidden":"true"}},[t._v("#")]),t._v(" uni-app 样式与模板规范")]),t._v(" "),s("h2",{attrs:{id:"支持的单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的单位","aria-hidden":"true"}},[t._v("#")]),t._v(" 支持的单位")]),t._v(" "),s("p",[t._v("经测试，uni-app支持以下CSS单位：")]),t._v(" "),s("ul",[s("li",[t._v("px")]),t._v(" "),s("li",[t._v("upx")]),t._v(" "),s("li",[t._v("rem")]),t._v(" "),s("li",[t._v("em")]),t._v(" "),s("li",[t._v("vw、vh")]),t._v(" "),s("li",[t._v("%")])]),t._v(" "),s("h2",{attrs:{id:"upx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upx","aria-hidden":"true"}},[t._v("#")]),t._v(" upx")]),t._v(" "),s("p",[t._v("uni-app样式采用upx为单位，无论什么机型的手机，将屏幕宽度切分为 750 份（即屏幕宽度都为750upx，iPhone6屏幕宽度375的两倍）。")]),t._v(" "),s("p",[t._v("计算公式为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("页面元素宽度在 uni-app 中的宽度计算公式 = 750 * 元素在设计稿中的宽度 / 设计稿基准宽度\n")])])]),s("p",[t._v("比如：")]),t._v(" "),s("ul",[s("li",[t._v("若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 640，结果为：117upx。")]),t._v(" "),s("li",[t._v("若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在 uni-app 里面的宽度应该设为：750 * 200 / 375，结果为：400upx。")])]),t._v(" "),s("h2",{attrs:{id:"upx与px转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upx与px转换","aria-hidden":"true"}},[t._v("#")]),t._v(" upx与px转换")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("uni.upx2px(Number)")]),t._v(" 将upx转换为px")]),t._v(" "),s("p",[t._v("注意：动态绑定的 style 不支持直接使用 upx。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- - 静态upx赋值生效 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200upx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- - 动态绑定不生效 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("winWidth + "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'upx;'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("需要先换算为px再进行赋值：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" halfWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      半屏宽度\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    computed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("halfWidth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" uni"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("upx2px")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"样式导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式导入","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式导入")]),t._v(" "),s("p",[t._v("可以直接通过 @import 导入样式。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style language-css"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../../common/uni.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".uni-card")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"选择器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择器","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),s("p",[t._v("uni-app 仅支持有限的选择器：")]),t._v(" "),s("ul",[s("li",[t._v(".class")]),t._v(" "),s("li",[t._v("#id")]),t._v(" "),s("li",[t._v("element")]),t._v(" "),s("li",[t._v("element,element")]),t._v(" "),s("li",[t._v("::after")]),t._v(" "),s("li",[t._v("::before")])]),t._v(" "),s("h2",{attrs:{id:"固定值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#固定值","aria-hidden":"true"}},[t._v("#")]),t._v(" 固定值")]),t._v(" "),s("p",[t._v("uni-app 中以下组件的高度是固定的，不可修改：")]),t._v(" "),s("ul",[s("li",[t._v("导航栏高度固定为 44px")]),t._v(" "),s("li",[t._v("tabBar 高度固定为 56px")])]),t._v(" "),s("h2",{attrs:{id:"自定义组件命名限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义组件命名限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义组件命名限制")]),t._v(" "),s("p",[t._v("自定义组件不能使用以下名称作为组件名：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a、canvas、cell、content、countdown、datepicker、div、element、embed、header、image、img、indicator、input、link、list、loading-indicator、loading、marquee、meta、refresh、richtext、script、scrollable、scroller、select、slider-neighbor、slider、slot、span、spinner、style、svg、switch、tabbar、tabheader、template、text、textarea、timepicker、trisition-group、trisition、video、view、web\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);