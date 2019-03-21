(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{360:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],methods:{getPosition(){var t=!1,s=document.getElementById("canvas1");s.getContext("2d");function a(t,s){var a=s.getBoundingClientRect(),n=t.clientX||t.touches[0].clientX,e=t.clientY||t.touches[0].clientY;console.log(n-a.left,e-a.top)}function n(n){n.preventDefault(),!0===t&&a(n,s)}function e(n){n.preventDefault(),t=!0,a(n,s)}function r(s){s.preventDefault(),t=!1}s.addEventListener("mousedown",e,!1),s.addEventListener("touchstart",e,!1),s.addEventListener("mousemove",n,!1),s.addEventListener("touchmove",n,!1),s.addEventListener("mouseup",r,!1),s.addEventListener("onmouseout",r,!1),s.addEventListener("touchend",r,!1)}},mounted(){this.getPosition()}},e=a(1),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 交互")]),t._v(" "),a("h2",{attrs:{id:"获取鼠标位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取鼠标位置","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取鼠标位置")]),t._v(" "),a("p",[t._v("交互的第一步，就是获取鼠标的位置，或者是手指点击的位置。")]),t._v(" "),a("p",[t._v("可以通过重写以下事件完成:")]),t._v(" "),a("p",[t._v("鼠标相关")]),t._v(" "),a("ul",[a("li",[t._v("mousedown")]),t._v(" "),a("li",[t._v("mousemove")]),t._v(" "),a("li",[t._v("mouseup")]),t._v(" "),a("li",[t._v("mouseout")])]),t._v(" "),a("p",[t._v("触摸相关")]),t._v(" "),a("ul",[a("li",[t._v("touchstart")]),t._v(" "),a("li",[t._v("touchmove")]),t._v(" "),a("li",[t._v("touchend")])]),t._v(" "),a("p",[t._v("然后通过事件监听的方式与canvas进行交互")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousedown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseDown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseDown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseMove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseMove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onmouseout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"获取鼠标位置的几种思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取鼠标位置的几种思路","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取鼠标位置的几种思路")]),t._v(" "),a("ol",[a("li",[t._v("通过 "),a("code",[t._v("offset")]),t._v(" 计算")])]),t._v(" "),a("p",[t._v("只需要获取点击位置相对于页面的 (x, y) 和 点击元素(即canvas盒子)的 (offsetLeft, offsetTop) 即可，相减得出 点击位置 相对于 点击元素(canvas)的偏移。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clickX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clickY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pageY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("offsetTop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("通过 "),a("code",[t._v("getBoundingClientRect")]),t._v(" 计算")])]),t._v(" "),a("p",[t._v("通过getBoundingClientRect获取元素盒子基本参数，通过其 left 和 top 计算出 点击位置 相对于 点击元素(canvas)的偏移。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clickX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" clickY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"具体实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" isMouseDown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" canvas "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" context "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousedown'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseDown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标按下")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseDown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手指按下")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mousemove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseMove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标移动")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchmove'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseMove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手指移动")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mouseup'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标抬起")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onmouseout'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标移出")]),t._v("\n  canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchend'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mouseUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手指抬起")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获得box对象，该对象中包含了当前canvas相对浏览器左上角的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x 和 y 是相对于浏览器左上角的坐标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// x - box.left 和 y - box.top：表示当前鼠标点击位置相对于canvas左上角的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("touches"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mouseMove")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止浏览器默认处理onmousemove的事件")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isMouseDown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mouseDown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示当前鼠标被按下")]),t._v("\n    isMouseDown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPosition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mouseUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表示当前鼠标抬起")]),t._v("\n    isMouseDown "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("canvas",{staticStyle:{border:"black solid 1px"},attrs:{id:"canvas1"}})]),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[t._v("打开控制台，点击上面线框内区域")]),t._v(" "),a("h2",{attrs:{id:"与鼠标进行交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与鼠标进行交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 与鼠标进行交互")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Canvas是一种非保留性的绘图界面，即不会记录过去执行的绘图操作，而是保持最终结果（构成图像的彩色像素）。\n如果想让Canvas变得具有交互性，比如用户可以选择、拖动画布上的图形。那么我们必须记录绘制的每一个对象，才能在将来灵活的修改并重绘它们，实现交互。")])]),t._v(" "),a("p",[t._v("需求:")]),t._v(" "),a("ol",[a("li",[t._v("点击“添加圆圈”按钮可以在画布上增加位置、大小、颜色都是随机的圆圈。")]),t._v(" "),a("li",[t._v("点击“清空画布”按钮可以清除画布上所有圆圈。")]),t._v(" "),a("li",[t._v("鼠标点击任意圆圈，该圆圈会出现黑色边框，表示选中。")]),t._v(" "),a("li",[t._v("如果鼠标点击不在任何圆圈中，则以当前点击位置为圆心绘制随机圆圈。")]),t._v(" "),a("li",[t._v("鼠标选择圆圈可以进行拖动，拖动的时候显示其颜色的提示框。")])]),t._v(" "),a("iframe",{staticStyle:{height:"350px"},attrs:{src:"https://img.xiaoyulive.top/html/005.html"}}),t._v(" "),a("h2",{attrs:{id:"添加物理元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加物理元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加物理元素")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("可以根据一些物理现象进行交互演示，比如小球的弹跳，下落过程中受到重力的影响速度增加，碰撞到边缘区域速度反向，用鼠标点击小球获取一定速度，拖动鼠标抛出小球等。")])]),t._v(" "),a("p",[t._v("需求:")]),t._v(" "),a("ol",[a("li",[t._v("点击“添加小球”按钮，会在画布上添加一个小球。")]),t._v(" "),a("li",[t._v("添加的小球会向右下做自由落体运动，碰到地板、墙壁后会反弹。同时每次反弹会受到阻力的影响，稍稍减少速度。")]),t._v(" "),a("li",[t._v("鼠标点击任意小球，会让该小球突然加速，让它向某个方向弹开。")]),t._v(" "),a("li",[t._v("在画布空白区域拖动鼠标可以添加一定速度的小球")]),t._v(" "),a("li",[t._v("点击“清空画布”按钮，会清除页面上的所有小球。")])]),t._v(" "),a("iframe",{staticStyle:{height:"350px"},attrs:{src:"https://img.xiaoyulive.top/html/006.html"}}),t._v(" "),a("h2",{attrs:{id:"与键盘进行交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与键盘进行交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 与键盘进行交互")]),t._v(" "),a("h3",{attrs:{id:"通过onkeydown获取键盘事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过onkeydown获取键盘事件","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过onkeydown获取键盘事件")]),t._v(" "),a("p",[a("code",[t._v("onkeydown")]),t._v(" 的事件对象 event")]),t._v(" "),a("p",[a("strong",[t._v("event.keyCode/event.which")]),t._v(" 得到的是一个按键对应的数字值（Unicode 编码）")]),t._v(" "),a("p",[t._v("常用键值对应如下:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数字值")]),t._v(" "),a("th",[t._v("实际键值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("48到57")]),t._v(" "),a("td",[t._v("0到9")])]),t._v(" "),a("tr",[a("td",[t._v("65到90")]),t._v(" "),a("td",[t._v("a到z（A到Z）")])]),t._v(" "),a("tr",[a("td",[t._v("112到135")]),t._v(" "),a("td",[t._v("F1到F24")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("BackSpace（退格）")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("Tab")])]),t._v(" "),a("tr",[a("td",[t._v("13")]),t._v(" "),a("td",[t._v("Enter（回车）")])]),t._v(" "),a("tr",[a("td",[t._v("20")]),t._v(" "),a("td",[t._v("Caps_Lock（大写锁定）")])]),t._v(" "),a("tr",[a("td",[t._v("32")]),t._v(" "),a("td",[t._v("Space（空格键）")])]),t._v(" "),a("tr",[a("td",[t._v("37")]),t._v(" "),a("td",[t._v("Left（左箭头）")])]),t._v(" "),a("tr",[a("td",[t._v("38")]),t._v(" "),a("td",[t._v("Up（上箭头）")])]),t._v(" "),a("tr",[a("td",[t._v("39")]),t._v(" "),a("td",[t._v("Right（右箭头）")])]),t._v(" "),a("tr",[a("td",[t._v("40")]),t._v(" "),a("td",[t._v("Down（下箭头）")])])])]),t._v(" "),a("h3",{attrs:{id:"键盘操作案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键盘操作案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 键盘操作案例")]),t._v(" "),a("p",[t._v("说明:")]),t._v(" "),a("ul",[a("li",[t._v("通过 上/下/左/右 控制小点的移动")]),t._v(" "),a("li",[t._v("小点碰撞到墙壁会从相对的方向出现")])]),t._v(" "),a("iframe",{staticStyle:{height:"200px"},attrs:{src:"https://img.xiaoyulive.top/html/007.html"}}),t._v(" "),a("h2",{attrs:{id:"其他交互案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他交互案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他交互案例")]),t._v(" "),a("h3",{attrs:{id:"使用组合绘制探照灯效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用组合绘制探照灯效果","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用组合绘制探照灯效果")]),t._v(" "),a("iframe",{attrs:{src:"https://img.xiaoyulive.top/html/008.html"}}),t._v(" "),a("p",[t._v("详见CodePen: "),a("a",{attrs:{href:"https://codepen.io/airen/pen/qmVwML",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas: Spotlight Effect"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"使用剪裁制作探照灯特效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用剪裁制作探照灯特效","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用剪裁制作探照灯特效")]),t._v(" "),a("iframe",{attrs:{src:"https://img.xiaoyulive.top/html/010.html"}}),t._v(" "),a("p",[t._v("详见CodePen: "),a("a",{attrs:{href:"https://codepen.io/airen/pen/WjXqgq",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas: Spotlight Effect"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"使用组合实现刮刮卡特效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用组合实现刮刮卡特效","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用组合实现刮刮卡特效")]),t._v(" "),a("iframe",{staticStyle:{height:"300px"},attrs:{src:"https://img.xiaoyulive.top/html/009.html"}}),t._v(" "),a("p",[t._v("详见CodePen: "),a("a",{attrs:{href:"https://codepen.io/airen/pen/OmjaYV",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas: 刮刮卡"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"谷歌弹跳小球"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#谷歌弹跳小球","aria-hidden":"true"}},[t._v("#")]),t._v(" 谷歌弹跳小球")]),t._v(" "),a("iframe",{staticStyle:{height:"300px"},attrs:{src:"https://img.xiaoyulive.top/html/011.html"}}),t._v(" "),a("p",[t._v("说明:")]),t._v(" "),a("ol",[a("li",[t._v("在没有鼠标介入的情况下，这些球就像有磁性一样拼成“Google”字样。")]),t._v(" "),a("li",[t._v("在鼠标移动到其中后，小球像是受到了排斥，向画布的四周扩散，然后不规则地反弹回来。")])]),t._v(" "),a("p",[t._v("详见: "),a("a",{attrs:{href:"http://www.hangge.com/blog/cache/detail_1059.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML5 - Canvas动画样例（谷歌弹跳球）"),a("OutboundLink")],1)])])},[],!1,null,null,null);s.default=r.exports}}]);