(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{301:function(t,s,a){"use strict";a.r(s);var n={methods:{arc(t){t.beginPath(),t.arc(50,50,40,0,Math.PI/2,!1),t.stroke()},arcToCanvas(t){t.beginPath(),t.moveTo(50,50),t.arcTo(200,50,200,200,50),t.lineTo(200,200),t.stroke()}},mounted(){var t=document.getElementById("arcCanvas").getContext("2d");this.arc(t);var s=document.getElementById("arcToCanvas").getContext("2d");this.arcToCanvas(s)}},e=a(1),c=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("如:")]),t._v(" "),t._m(4),a("p",[t._v("效果如下：")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("可以看到从x轴正方向顺时针绘制出了半径为40的 1/4 圆弧。")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),t._m(7),a("p",[t._v("根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。")]),t._v(" "),t._m(8),a("p",[t._v("效果如下：")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("原理图：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/001.png/small"}}),t._v(" "),a("p",[t._v("可以理解为: 绘制的弧形是由两条切线所决定。")]),t._v(" "),a("p",[t._v("第 1 条切线：起始点和控制点1决定的直线。")]),t._v(" "),a("p",[t._v("第 2 条切线：控制点1 和控制点2决定的直线。")]),t._v(" "),t._m(10)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"圆弧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#圆弧","aria-hidden":"true"}},[this._v("#")]),this._v(" 圆弧")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"arc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arc","aria-hidden":"true"}},[this._v("#")]),this._v(" arc")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("arc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" startAngle"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" endAngle"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" anticlockwise"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("以 "),a("code",[t._v("(x, y)")]),t._v(" 为圆心，以"),a("code",[t._v("r")]),t._v("为半径，从 "),a("code",[t._v("startAngle")]),t._v(" 弧度开始到 "),a("code",[t._v("endAngle")]),t._v(" 弧度结束，注意: 单位为弧度。")]),t._v(" "),a("li",[a("code",[t._v("anticlosewise")]),t._v(" 是布尔值，"),a("code",[t._v("true")]),t._v(" 表示逆时针，"),a("code",[t._v("false")]),t._v(" 表示顺时针。(默认是顺时针)")]),t._v(" "),a("li",[t._v("0弧度为在一个笛卡尔坐标系中的x轴正方向")]),t._v(" "),a("li",[t._v("通常使用 "),a("code",[t._v("Math.PI")]),t._v(" 进行弧度运算，一个 "),a("code",[t._v("Math.PI")]),t._v(" 就是 "),a("code",[t._v("180deg")])]),t._v(" "),a("li",[a("code",[t._v("radians=(Math.PI/180)*degrees")]),t._v("   // 角度转换成弧度1")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("arc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("40")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stroke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("canvas",{attrs:{id:"arcCanvas"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"arcto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arcto","aria-hidden":"true"}},[this._v("#")]),this._v(" arcTo")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("arcTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" radius"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数5：圆弧半径")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("arcTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stroke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("canvas",{attrs:{id:"arcToCanvas"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("圆弧半径可以回想一下css中"),s("code",[this._v("border-radius")]),this._v("的实现。")])}],!1,null,null,null);c.options.__file="arc.md";s.default=c.exports}}]);