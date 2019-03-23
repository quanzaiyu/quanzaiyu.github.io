(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{374:function(v,a,_){"use strict";_.r(a);var t=_(1),e=Object(t.a)({},function(){var v=this,a=v.$createElement,_=v._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"动画"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动画","aria-hidden":"true"}},[v._v("#")]),v._v(" 动画")]),v._v(" "),_("h2",{attrs:{id:"动画的基本步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#动画的基本步骤","aria-hidden":"true"}},[v._v("#")]),v._v(" 动画的基本步骤")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("清空canvas")])]),v._v(" "),_("p",[v._v("再绘制每一帧动画之前，需要清空所有。清空所有最简单的做法就是"),_("code",[v._v("clearRect()")]),v._v("方法")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("保存canvas状态")])]),v._v(" "),_("p",[v._v("如果在绘制的过程中会更改"),_("code",[v._v("canvas")]),v._v("的状态(颜色、移动了坐标原点等),又在绘制每一帧时都是原始状态的话，则最好保存下"),_("code",[v._v("canvas")]),v._v("的状态")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("绘制动画图形")])]),v._v(" "),_("p",[v._v("这一步才是真正的绘制动画帧")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("恢复canvas状态")])]),v._v(" "),_("p",[v._v("如果你前面保存了"),_("code",[v._v("canvas")]),v._v("状态，则应该在绘制完成一帧之后恢复"),_("code",[v._v("canvas")]),v._v("状态。")])])]),v._v(" "),_("h2",{attrs:{id:"控制动画"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#控制动画","aria-hidden":"true"}},[v._v("#")]),v._v(" 控制动画")]),v._v(" "),_("p",[v._v("我们可用通过"),_("code",[v._v("canvas")]),v._v("的方法或者自定义的方法把图像会知道到"),_("code",[v._v("canvas")]),v._v("上。正常情况，我们能看到绘制的结果是在脚本执行结束之后。例如，我们不可能在一个 "),_("code",[v._v("for")]),v._v(" 循环内部完成动画。")]),v._v(" "),_("p",[v._v("也就是，为了执行动画，我们需要一些可以定时执行重绘的方法。")]),v._v(" "),_("p",[v._v("一般用到下面三个方法：")]),v._v(" "),_("ol",[_("li",[_("code",[v._v("setInterval()")])]),v._v(" "),_("li",[_("code",[v._v("setTimeout()")])]),v._v(" "),_("li",[_("code",[v._v("requestAnimationFrame()")])])])])},[],!1,null,null,null);a.default=e.exports}}]);