(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{349:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],methods:{arc(){let t=document.getElementById("canvas1").getContext("2d");t.beginPath(),t.arc(50,50,40,0,Math.PI/2,!1),t.stroke()},arcTo(){let t=document.getElementById("canvas2").getContext("2d");t.beginPath(),t.moveTo(50,50),t.arcTo(200,50,200,200,50),t.lineTo(200,200),t.stroke()}},mounted(){this.arc(),this.arcTo()}},e=a(0),p=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"绘制曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制曲线","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制曲线")]),t._v(" "),a("h2",{attrs:{id:"圆弧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#圆弧","aria-hidden":"true"}},[t._v("#")]),t._v(" 圆弧")]),t._v(" "),a("h3",{attrs:{id:"arc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arc","aria-hidden":"true"}},[t._v("#")]),t._v(" arc")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("arc(x, y, r, startAngle, endAngle, anticlockwise)")])]),t._v(" "),a("ul",[a("li",[t._v("以 "),a("code",[t._v("(x, y)")]),t._v(" 为圆心，以"),a("code",[t._v("r")]),t._v("为半径，从 "),a("code",[t._v("startAngle")]),t._v(" 弧度开始到 "),a("code",[t._v("endAngle")]),t._v(" 弧度结束，注意: 单位为弧度。")]),t._v(" "),a("li",[a("code",[t._v("anticlosewise")]),t._v(" 是布尔值，"),a("code",[t._v("true")]),t._v(" 表示逆时针，"),a("code",[t._v("false")]),t._v(" 表示顺时针。(默认是顺时针)")]),t._v(" "),a("li",[t._v("0弧度为在一个笛卡尔坐标系中的x轴正方向")]),t._v(" "),a("li",[t._v("通常使用 "),a("code",[t._v("Math.PI")]),t._v(" 进行弧度运算，一个 "),a("code",[t._v("Math.PI")]),t._v(" 就是 "),a("code",[t._v("180deg")])]),t._v(" "),a("li",[a("code",[t._v("radians=(Math.PI/180)*degrees")]),t._v("   // 角度转换成弧度1")])]),t._v(" "),a("p",[t._v("如:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("canvas",{attrs:{id:"canvas1"}})]),t._v(" "),a("p",[t._v("可以看到从x轴正方向顺时针绘制出了半径为40的 1/4 圆弧。")]),t._v(" "),a("h3",{attrs:{id:"arcto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arcto","aria-hidden":"true"}},[t._v("#")]),t._v(" arcTo")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("arcTo(x1, y1, x2, y2, radius)")])]),t._v(" "),a("p",[t._v("根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数5：圆弧半径")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arcTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("canvas",{attrs:{id:"canvas2"}})]),t._v(" "),a("p",[t._v("原理图：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/001.png/small"}}),t._v(" "),a("p",[t._v("可以理解为: 绘制的弧形是由两条切线所决定。")]),t._v(" "),a("p",[t._v("第 1 条切线：起始点和控制点1决定的直线。")]),t._v(" "),a("p",[t._v("第 2 条切线：控制点1 和控制点2决定的直线。")]),t._v(" "),a("p",[t._v("圆弧半径可以回想一下css中"),a("code",[t._v("border-radius")]),t._v("的实现。")]),t._v(" "),a("h2",{attrs:{id:"贝塞尔曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#贝塞尔曲线","aria-hidden":"true"}},[t._v("#")]),t._v(" 贝塞尔曲线")]),t._v(" "),a("p",[a("strong",[t._v("贝塞尔曲线")]),t._v("(Bézier curve)，又称"),a("strong",[t._v("贝兹曲线")]),t._v("或"),a("strong",[t._v("贝济埃曲线")]),t._v("，是应用于二维图形应用程序的数学曲线。")]),t._v(" "),a("p",[t._v("一般的矢量图形软件通过它来精确画出曲线，贝兹曲线由线段与节点组成，节点是可拖动的支点，线段像可伸缩的皮筋，我们在绘图工具上看到的钢笔工具就是来做这种矢量曲线的。")]),t._v(" "),a("h3",{attrs:{id:"原理动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 原理动画")]),t._v(" "),a("p",[t._v("一次贝塞尔曲线:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/002.gif"}}),t._v(" "),a("p",[t._v("二次贝塞尔曲线:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/003.gif"}}),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/004.png/small"}}),t._v(" "),a("p",[t._v("三次贝塞尔曲线:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/005.gif"}}),t._v(" "),a("imgLink",{attrs:{src:"date/20180912/006.png/small"}}),t._v(" "),a("h3",{attrs:{id:"绘制二次贝塞尔曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制二次贝塞尔曲线","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制二次贝塞尔曲线")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("quadraticCurveTo(cp1x, cp1y, x, y);")])]),t._v(" "),a("p",[t._v("参数说明：")]),t._v(" "),a("ul",[a("li",[t._v("参数1和2：控制点坐标")]),t._v(" "),a("li",[t._v("参数3和4：结束点坐标")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 起始点")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" toX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制二次贝塞尔曲线")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quadraticCurveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("imgLink",{attrs:{src:"date/20180912/007.png/small"}}),t._v(" "),a("p",[t._v("为了方便理解，将起始点、控制点、结束点都用实心矩形标出。")]),t._v(" "),a("h3",{attrs:{id:"绘制三次贝塞尔曲线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制三次贝塞尔曲线","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制三次贝塞尔曲线")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);")])]),t._v(" "),a("p",[t._v("参数说明：")]),t._v(" "),a("ul",[a("li",[t._v("参数1和2：控制点1的坐标")]),t._v(" "),a("li",[t._v("参数3和4：控制点2的坐标")]),t._v(" "),a("li",[t._v("参数5和6：结束点的坐标")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" bX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("160")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 起始点")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cX1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制点1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cX2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 控制点2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" toX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制二次贝塞尔曲线")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bezierCurveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cX1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cX2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cX1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cX2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cY2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" toY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("imgLink",{attrs:{src:"date/20180912/008.png/small"}})],1)},[],!1,null,null,null);p.options.__file="DrawArc.md";s.default=p.exports}}]);