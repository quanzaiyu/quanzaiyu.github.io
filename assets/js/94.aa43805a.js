(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{356:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"图像合成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图像合成","aria-hidden":"true"}},[t._v("#")]),t._v(" 图像合成")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("合成是指如何精细控制画布上对象的透明度和分层效果。在默认情况之下，如果在Canvas之中将某个物体（源）绘制在另一个物体（目标）之上，那么浏览器就会简单地把源特体的图像叠放在目标物体图像上面。")])]),t._v(" "),s("h2",{attrs:{id:"控制图像合成操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制图像合成操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制图像合成操作")]),t._v(" "),s("p",[t._v("在 Canvas 中有两个属性 globalAlpha 和 globalCompositeOperation 来控制图像合成操作：")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("globalAlpha")]),t._v("：设置图像的透明度。globalAlpha属性默认值为1，表示完全不透明，并且可以设置从0（完全透明）到1（完全不透明）。这个值必须设置在图形绘制之前")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("globalCompositeOperation")]),t._v("：该属性的值在globalAlpha以及所有变换都生效后控制在当前Canvas位图中绘制图形")])])]),t._v(" "),s("p",[t._v("例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalCompositeOperation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source-over"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局合成操作")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"图像合成类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图像合成类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 图像合成类型")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globalCompositeOperation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" type\n")])])]),s("p",[t._v("在 Canvas 中 globalCompositeOperation 属性的值总共有26种类型")]),t._v(" "),s("p",[t._v("常见的有以下几种")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("source-over")]),t._v(" (default) 这是默认设置，新图像会覆盖在原有图像。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("source-in")]),t._v(" 仅仅会出现新图像与原来图像重叠的部分，其他区域都变成透明的。(包括其他的老图像区域也会透明)")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("source-out")]),t._v(" 仅仅显示新图像与老图像没有重叠的部分，其余部分全部透明。(老图像也不显示)")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("source-atop")]),t._v(" 新图像仅仅显示与老图像重叠区域。老图像仍然可以显示。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("destination-over")]),t._v(" 新图像会在老图像的下面。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("destination-in")]),t._v(" 仅仅新老图像重叠部分的老图像被显示，其他区域全部透明。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("destination-out")]),t._v(" 仅仅老图像与新图像没有重叠的部分。 注意显示的是老图像的部分区域。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("destination-atop")]),t._v(" 老图像仅仅仅仅显示重叠部分，新图像会显示在老图像的下面。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("lighter")]),t._v(" 新老图像都显示，但是重叠区域的颜色做加处理。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("darken")]),t._v(" 保留重叠部分最黑的像素。(每个颜色位进行比较，得到最小的)。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("lighten")]),t._v(" 保证重叠部分最量的像素。(每个颜色位进行比较，得到最大的)。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("xor")]),t._v(" 重叠部分会变成透明。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("copy")]),t._v(" 只有新图像会被保留，其余的全部被清除(边透明)。")])])]),t._v(" "),s("h3",{attrs:{id:"示例一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例一","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[t._v("示例一")])]),t._v(" "),s("iframe",{attrs:{src:"https://img.xiaoyulive.top/html/001.html"}}),t._v(" "),s("p",[t._v("详见CodePen: "),s("a",{attrs:{href:"https://codepen.io/airen/pen/GmvweK",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas: Compositing List"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"示例二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例二","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("strong",[t._v("示例二")])]),t._v(" "),s("iframe",{attrs:{src:"https://img.xiaoyulive.top/html/002.html"}}),t._v(" "),s("p",[t._v("详见CodePen: "),s("a",{attrs:{href:"https://codepen.io/airen/pen/qmXdMX",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas: Compositing"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);