(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{388:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"状态保存与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态保存与恢复","aria-hidden":"true"}},[t._v("#")]),t._v(" 状态保存与恢复")]),t._v(" "),a("p",[a("code",[t._v("save")]),t._v(" 和 "),a("code",[t._v("restore")]),t._v(" 方法是用来保存和恢复 "),a("code",[t._v("canvas")]),t._v(" 状态的，都没有参数。")]),t._v(" "),a("p",[a("code",[t._v("Canvas")]),t._v(" 的状态就是当前画面应用的所有样式和变形的一个快照。")]),t._v(" "),a("h2",{attrs:{id:"save"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save","aria-hidden":"true"}},[t._v("#")]),t._v(" save()")]),t._v(" "),a("p",[t._v("Canvas状态存储在栈中，每当"),a("code",[t._v("save()")]),t._v("方法被调用后，当前的状态就被推送到栈中保存(类似数组的"),a("code",[t._v("push()")]),t._v(")。")]),t._v(" "),a("p",[t._v("一个绘画状态包括：")]),t._v(" "),a("ul",[a("li",[t._v("当前应用的变形（即移动，旋转和缩放）")]),t._v(" "),a("li",[a("code",[t._v("strokeStyle")]),t._v(", "),a("code",[t._v("fillStyle")]),t._v(", "),a("code",[t._v("globalAlpha")]),t._v(", "),a("code",[t._v("lineWidth")]),t._v(", "),a("code",[t._v("lineCap")]),t._v(", "),a("code",[t._v("lineJoin")]),t._v(", "),a("code",[t._v("miterLimit")]),t._v(", "),a("code",[t._v("shadowOffsetX")]),t._v(", "),a("code",[t._v("shadowOffsetY")]),t._v(", "),a("code",[t._v("shadowBlur")]),t._v(", "),a("code",[t._v("shadowColor")]),t._v(", "),a("code",[t._v("globalCompositeOperation")]),t._v(" 的值")]),t._v(" "),a("li",[t._v("当前的裁切路径（"),a("code",[t._v("clipping path")]),t._v("）")])]),t._v(" "),a("h2",{attrs:{id:"restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restore","aria-hidden":"true"}},[t._v("#")]),t._v(" restore()")]),t._v(" "),a("p",[t._v("每一次调用 "),a("code",[t._v("restore")]),t._v(" 方法，上一个保存的状态就从栈中弹出，所有设定都恢复。(类似数组的"),a("code",[t._v("pop()")]),t._v(")")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f00'")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#0f0'")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("restore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" # 恢复 ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f00'")]),t._v(" 的状态\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);