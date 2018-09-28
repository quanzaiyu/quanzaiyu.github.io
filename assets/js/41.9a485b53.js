(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{298:function(t,s,a){"use strict";a.r(s);var n={methods:{linearGradient(){let t=document.getElementById("canvas1").getContext("2d"),s=t.createLinearGradient(0,0,200,200);s.addColorStop(0,"rgb(255, 0, 0)"),s.addColorStop(.5,"rgb(0, 0, 255"),s.addColorStop(1,"rgb(0, 0, 0)"),t.fillStyle=s,t.fillRect(10,10,200,200)},radialGradient(){let t=document.getElementById("canvas2").getContext("2d"),s=t.createRadialGradient(100,100,30,100,100,100);s.addColorStop(0,"rgb(0, 0, 255)"),s.addColorStop(1,"rgb(0, 255, 0)"),t.fillStyle=s,t.fillRect(10,10,200,200)},radialGradient2(){let t=document.getElementById("canvas3").getContext("2d"),s=t.createRadialGradient(100,100,30,150,120,100);s.addColorStop(0,"rgb(0, 0, 255)"),s.addColorStop(1,"rgb(0, 255, 0)"),t.fillStyle=s,t.fillRect(10,10,200,200)}},mounted(){this.linearGradient(),this.radialGradient(),this.radialGradient2()}},e=a(1),r=Object(e.a)(n,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"绘制渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绘制渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" 绘制渐变")]),t._v(" "),a("h2",{attrs:{id:"线性渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" 线性渐变")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("createLinearGradient(x1, y1, x2, y2);")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("createLinearGradient(x1, y1, x2, y2)")]),t._v(" 可以创建一个线性渐变，线性渐变会从第一个点(x1, y1)扩展到第二个点(x2, y2)，即定义了渐变的线长与方向。")]),t._v(" "),a("p",[t._v("如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" linearGradient1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createLinearGradient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlinearGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(255, 0, 0)'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlinearGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0.5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(0, 0, 255'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlinearGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(0, 0, 0)'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" linearGradient1\n\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("canvas",{attrs:{id:"canvas1"}})]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("addColorStop(startColor, endColor);")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("addColorStop")]),t._v("可以添加一个颜色节点")]),t._v(" "),a("ul",[a("li",[t._v("第一个参数是0-1之间的一个数值，这个数值指定该颜色进入渐变多长的距离")]),t._v(" "),a("li",[t._v("第二个参数是颜色值")])]),t._v(" "),a("h2",{attrs:{id:"径向渐变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#径向渐变","aria-hidden":"true"}},[t._v("#")]),t._v(" 径向渐变")]),t._v(" "),a("p",[t._v("径向渐变是一种圆形的颜色扩展模式，颜色从圆心位置开始向外辐射。")]),t._v(" "),a("p",[t._v("一个径向渐变于两个圆形来定义。每一个圆都有一个圆心和一条半径。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("语法")]),t._v(" "),a("p",[t._v("ctx.createRadialGradient(x1, y1, r1, x2, y2, r2)")])]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("createRadialGradient")]),t._v("可以创建一个径向渐变，(x1, y1, r1)和(x2, y2, r2)分别为两个圆的圆心坐标和半径。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第一个圆圆心的X坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第一个圆圆心的Y坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 第一个圆的半径")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第二个圆圆心的X坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第二个圆圆心的Y坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第二个圆的半径")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" radialGradient1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createRadialGradient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nradialGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(0, 0, 255)'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nradialGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(0, 255, 0)'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" radialGradient1\n\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("canvas",{attrs:{id:"canvas2"}})]),t._v(" "),a("p",[a("code",[t._v("addColorStop")]),t._v("的用法同线性渐变。")]),t._v(" "),a("p",[t._v("如果两个圆形的圆心位置相同，那么径向渐变将是一个完整的圆形。如果两个圆的圆心位置不相同，那么径向渐变看起来就像是一个探照灯发出的光线。如:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第一个圆圆心的X坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第一个圆圆心的Y坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("30")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 第一个圆的半径")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("150")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第二个圆圆心的X坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("120")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第二个圆圆心的Y坐标")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 第二个圆的半径")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" radialGradient1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("createRadialGradient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nradialGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(0, 0, 255)'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nradialGradient1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addColorStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rgb(0, 255, 0)'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillStyle "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" radialGradient1\n\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("canvas",{attrs:{id:"canvas3"}})])])}],!1,null,null,null);r.options.__file="DrawGradient.md";s.default=r.exports}}]);