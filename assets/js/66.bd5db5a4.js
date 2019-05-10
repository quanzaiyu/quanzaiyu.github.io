(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{342:function(t,a,v){"use strict";v.r(a);var r=v(1),e=Object(r.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),v("h2",{attrs:{id:"动画的基本步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#动画的基本步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画的基本步骤")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("清空canvas")])])]),t._v(" "),v("p",[t._v("在绘制每一帧动画之前，需要清空所有。清空所有最简单的做法就是"),v("code",[t._v("clearRect()")]),t._v("方法")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("strong",[t._v("保存canvas状态")])])]),t._v(" "),v("p",[t._v("如果在绘制的过程中会更改"),v("code",[t._v("canvas")]),t._v("的状态(颜色、移动了坐标原点等),又在绘制每一帧时都是原始状态的话，则最好保存下"),v("code",[t._v("canvas")]),t._v("的状态")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("strong",[t._v("绘制动画图形")])])]),t._v(" "),v("p",[t._v("这一步才是真正的绘制动画帧")]),t._v(" "),v("ol",{attrs:{start:"4"}},[v("li",[v("strong",[t._v("恢复canvas状态")])])]),t._v(" "),v("p",[t._v("如果你前面保存了"),v("code",[t._v("canvas")]),t._v("状态，则应该在绘制完成一帧之后恢复"),v("code",[t._v("canvas")]),t._v("状态。")]),t._v(" "),v("h2",{attrs:{id:"控制动画"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#控制动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制动画")]),t._v(" "),v("p",[t._v("我们可用通过"),v("code",[t._v("canvas")]),t._v("的方法或者自定义的方法把图像会知道到"),v("code",[t._v("canvas")]),t._v("上。正常情况，我们能看到绘制的结果是在脚本执行结束之后。例如，我们不可能在一个 "),v("code",[t._v("for")]),t._v(" 循环内部完成动画。")]),t._v(" "),v("p",[t._v("也就是，为了执行动画，我们需要一些可以定时执行重绘的方法。")]),t._v(" "),v("p",[t._v("一般用到下面三个方法：")]),t._v(" "),v("ol",[v("li",[v("code",[t._v("setInterval()")])]),t._v(" "),v("li",[v("code",[t._v("setTimeout()")])]),t._v(" "),v("li",[v("code",[t._v("requestAnimationFrame()")])])]),t._v(" "),v("h2",{attrs:{id:"案例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),v("h3",{attrs:{id:"太阳系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#太阳系","aria-hidden":"true"}},[t._v("#")]),t._v(" 太阳系")]),t._v(" "),v("iframe",{staticStyle:{width:"400px",height:"350px"},attrs:{src:"http://img.xiaoyulive.top/html/003.html"}}),t._v(" "),v("h3",{attrs:{id:"时钟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#时钟","aria-hidden":"true"}},[t._v("#")]),t._v(" 时钟")]),t._v(" "),v("iframe",{staticStyle:{width:"400px",height:"350px"},attrs:{src:"http://img.xiaoyulive.top/html/004.html"}})])},[],!1,null,null,null);a.default=e.exports}}]);