(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{455:function(t,v,e){"use strict";e.r(v);var a={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},_=e(0),s=Object(_.a)(a,function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),e("h2",{attrs:{id:"动画的基本步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动画的基本步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 动画的基本步骤")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("清空canvas")])]),t._v(" "),e("p",[t._v("再绘制每一帧动画之前，需要清空所有。清空所有最简单的做法就是"),e("code",[t._v("clearRect()")]),t._v("方法")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("保存canvas状态")])]),t._v(" "),e("p",[t._v("如果在绘制的过程中会更改"),e("code",[t._v("canvas")]),t._v("的状态(颜色、移动了坐标原点等),又在绘制每一帧时都是原始状态的话，则最好保存下"),e("code",[t._v("canvas")]),t._v("的状态")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("绘制动画图形")])]),t._v(" "),e("p",[t._v("这一步才是真正的绘制动画帧")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("恢复canvas状态")])]),t._v(" "),e("p",[t._v("如果你前面保存了"),e("code",[t._v("canvas")]),t._v("状态，则应该在绘制完成一帧之后恢复"),e("code",[t._v("canvas")]),t._v("状态。")])])]),t._v(" "),e("h2",{attrs:{id:"控制动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制动画","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制动画")]),t._v(" "),e("p",[t._v("我们可用通过"),e("code",[t._v("canvas")]),t._v("的方法或者自定义的方法把图像会知道到"),e("code",[t._v("canvas")]),t._v("上。正常情况，我们能看到绘制的结果是在脚本执行结束之后。例如，我们不可能在一个 "),e("code",[t._v("for")]),t._v(" 循环内部完成动画。")]),t._v(" "),e("p",[t._v("也就是，为了执行动画，我们需要一些可以定时执行重绘的方法。")]),t._v(" "),e("p",[t._v("一般用到下面三个方法：")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("setInterval()")])]),t._v(" "),e("li",[e("code",[t._v("setTimeout()")])]),t._v(" "),e("li",[e("code",[t._v("requestAnimationFrame()")])])])])},[],!1,null,null,null);s.options.__file="index.md";v.default=s.exports}}]);