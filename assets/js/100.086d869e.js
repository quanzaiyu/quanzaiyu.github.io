(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{695:function(t,s,a){"use strict";a.r(s);var n={mounted(){var t=document.getElementById("line").getContext("2d");t.moveTo(50,50),t.lineTo(50,100),t.stroke();var s=document.getElementById("graph").getContext("2d");s.beginPath(),s.moveTo(50,50),s.lineTo(50,100),s.lineTo(100,100),s.lineTo(100,50),s.closePath(),s.fill();var a=document.getElementById("dash").getContext("2d");a.save(),a.setLineDash([40,30,20]),a.lineWidth=4,a.strokeStyle="#0f0",a.beginPath(),a.moveTo(10,100),a.lineTo(400,100),a.stroke(),a.restore()}},e=a(0),c=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"绘制路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制路径")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。")])]),t._v(" "),a("p",[t._v("使用路径绘制图形一般需要以下步骤：")]),t._v(" "),a("ol",[a("li",[t._v("创建路径起始点")]),t._v(" "),a("li",[t._v("调用绘制方法去绘制出路径")]),t._v(" "),a("li",[t._v("把路径封闭")]),t._v(" "),a("li",[t._v("一旦路径生成，通过描边或填充路径区域来渲染图形。")])]),t._v(" "),a("p",[t._v("canvas 绘制路径相关的 API")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("beginPath()")]),t._v(" 新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径")]),t._v(" "),a("li",[a("code",[t._v("moveTo(x, y)")]),t._v(" 把画笔移动到指定的坐标"),a("code",[t._v("(x, y)")]),t._v("。相当于设置路径的起始点坐标。(可以理解为将画笔悬空移动)")]),t._v(" "),a("li",[a("code",[t._v("lineTo(x, y)")]),t._v(" 将画笔以画线的形式移动到另一点坐标"),a("code",[t._v("(x, y)")]),t._v("。(可以理解为让画笔在画纸上移动)")]),t._v(" "),a("li",[a("code",[t._v("closePath()")]),t._v(" 闭合路径之后，图形绘制命令又重新指向到上下文中")]),t._v(" "),a("li",[a("code",[t._v("stroke()")]),t._v(" 通过线条来绘制图形轮廓")]),t._v(" "),a("li",[a("code",[t._v("fill()")]),t._v(" 通过填充路径的内容区域生成实心的图形")])]),t._v(" "),a("h2",{attrs:{id:"绘制线段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制线段","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制线段")]),t._v(" "),a("p",[t._v("只需要使用其 "),a("code",[t._v("moveTo")]),t._v(" 与 "),a("code",[t._v("lineTo")]),t._v(" 即可创建线段，使用 "),a("code",[t._v("stroke")]),t._v(" 绘制线条。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stroke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("canvas",{attrs:{id:"line"}})]),t._v(" "),a("h2",{attrs:{id:"绘制图形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制图形","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制图形")]),t._v(" "),a("p",[t._v("结合着 "),a("code",[t._v("beginPath")]),t._v(" 和 "),a("code",[t._v("closePath")]),t._v(" 可以创建一个封闭路径，使用 "),a("code",[t._v("stroke")]),t._v(" 进行描边，使用 "),a("code",[t._v("fill")]),t._v(" 进行填充。")]),t._v(" "),a("p",[t._v("如: 通过路径绘制一个矩形")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("closePath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fill")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("canvas",{attrs:{id:"graph"}})]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("在绘制图形路径时，一定要先调用beginPath()。beginPath()方法将会清空内存中之前的绘制路径信息。如果不这样做，对于绘制单个图形可能没什么影响，但是在绘制多个图形时，将会导致路径绘制或者颜色填充等操作出现任何意料之外的结果。")])]),t._v(" "),a("h2",{attrs:{id:"绘制虚线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制虚线","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制虚线")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setLineDash")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("segments"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("setLineDash")]),t._v(" 接收一个数组，按照数组元素组成 "),a("code",[t._v("(线长，间距)")]),t._v(" 的形式，循环调用数组中的所有元素作为线长与间距")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("save")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setLineDash")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("40")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lineWidth "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strokeStyle "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'#0f0'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("400")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stroke")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("restore")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("效果如下：")]),t._v(" "),a("p",[a("canvas",{attrs:{id:"dash"}})]),t._v(" "),a("p",[t._v("原理如下：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180910/001.png"}})],1)},[],!1,null,null,null);c.options.__file="path.md";s.default=c.exports}}]);