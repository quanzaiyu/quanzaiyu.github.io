(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{507:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("在了解矩阵变换之前，需要知道什么是矩阵。在大学线性代数中我们可以得到答案，详细请参考 "),a("router-link",{attrs:{to:t.$ensureExt("./Matrix")}},[t._v("矩阵基础知识")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("使用transform()和setTransform()有两个好处：")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("使用transform()和setTransform()方法的主要缺点：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("transforms 直接对变形矩阵作修改。")]),t._v(" "),t._m(9),a("p",[t._v("这个方法必须将当前的变形矩阵乘上下面的矩阵：")]),t._v(" "),t._m(10),a("p",[t._v("这个方法必须重置当前的变形矩阵为单位矩阵，然后以相同的参数调用 transform 方法。如果任意一个参数是无限大，那么变形矩阵也必须被标记为无限大，否则会抛出异常。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("这两个方法都接受六个参数：")]),t._v(" "),t._m(20),a("p",[t._v("其中这六个参数可以使用一个变换矩阵来描述：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/018.png/small"}}),t._v(" "),a("p",[t._v("其具体代表的是：")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("了解矩阵运算的原理之后，就可以很容易的实现坐标的平移。")]),t._v(" "),a("p",[t._v("比如要从一个点 (x0, y0) 移动到 (x, y) ， 可以算出位移量:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/019.png/small"}}),t._v(" "),a("p",[t._v("在坐标轴上表示为:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/020.png/small"}}),t._v(" "),a("p",[t._v("反之，知道位移量可以算出目标点坐标:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/021.png/small"}}),t._v(" "),a("p",[t._v("按照矩阵的运算，可以知道:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/022.png/small"}}),t._v(" "),a("p",[t._v("所以，可以写为:")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("比如要将一个点 (x, y) 放大 (k1, k2) 倍，变为 (x', y') ， 使用公式可知:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/023.png/small"}}),t._v(" "),a("p",[t._v("使用矩阵表示为:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/024.png/small"}}),t._v(" "),a("p",[t._v("所以，可以写为:")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("假定有一个点P(x0,y0)相对坐标原点顺时针旋转θ到达点P(x,y)，同时假定P点离坐标原点的距离为r，如下图所示：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/025.png/small"}}),t._v(" "),a("p",[t._v("先看看两角和差的公式:")]),t._v(" "),t._m(34),a("p",[t._v("根据两角和差的公式，可以推导出")]),t._v(" "),t._m(35),a("p",[t._v("用矩阵表示为")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/026.png/small"}}),t._v(" "),a("p",[t._v("如果是旋转90度，由于 cos(90)=0,sin(90)=1，所以矩阵应该写成:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/027.png/small"}}),t._v(" "),a("p",[t._v("即")]),t._v(" "),t._m(36),a("p",[t._v("就是旋转90度")]),t._v(" "),a("p",[t._v("如果就这样旋转是看不到任何图像的，因为旋转之后坐标点全部移到画布之外，因此通常加一个偏移实现")]),t._v(" "),t._m(37),t._m(38),t._v(" "),a("p",[t._v("先用一组图说明什么是斜切")]),t._v(" "),a("p",[t._v("各点的y坐标保持不变，但其x坐标则按比例发生了平移。这种情况将发生水平斜切：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/028.png/small"}}),t._v(" "),a("p",[t._v("各点的x坐标保持不变，但其y坐标则按比例发生了平移。这种情况将发生垂直斜切：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/029.png/small"}}),t._v(" "),a("p",[t._v("与旋转变换相比，旋转变换是旋转坐标系中的点，而斜切内里是转坐标轴，坐标轴旋转之后，要保持各点的坐标值不变，所有各点的位置就变了:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/030.png/small"}}),t._v(" "),a("p",[t._v("变换后，点在新坐标系中的位置不变，在原坐标系中的位置是：")]),t._v(" "),t._m(39),a("imgLink",{attrs:{src:"date/20180913/031.png/small"}}),t._v(" "),a("p",[t._v("回到Canvas当中来，假定有一个点P0(x0,y0)经过斜切变换后得到P(x,y)，对于水平斜切，它们之关的关系是：")]),t._v(" "),t._m(40),a("p",[t._v("用矩阵表示就是：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/032.png/small"}}),t._v(" "),a("p",[t._v("同理，对于垂直斜切，有：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/033.png/small"}}),t._v(" "),a("p",[t._v("同时进行水平、垂直斜切，那么矩阵就变成：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/034.png/small"}}),t._v(" "),t._m(41),t._v(" "),t._m(42),a("p",[t._v("可以看出，其实旋转只是斜切的一种特殊形式。")]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),a("p",[t._v("用矩阵表示为：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/035.png/small"}}),t._v(" "),t._m(46),t._v(" "),t._m(47),a("p",[t._v("用矩阵表示为：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/036.png/small"}}),t._v(" "),t._m(48),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/037.png/small"}}),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/038.png/small"}}),t._v(" "),a("p",[t._v("解得:")]),t._v(" "),t._m(49),a("p",[t._v("用矩阵表示为:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/039.png/small"}}),t._v(" "),t._m(50),t._v(" "),a("imgLink",{attrs:{src:"date/20180913/040.png/small"}}),t._v(" "),a("p",[t._v("如果是关于 "),a("code",[t._v("y = kx")]),t._v(" 或者 "),a("code",[t._v("y = kx + b")]),t._v(" 对称请参考 "),a("a",{attrs:{href:"https://www.w3cplus.com/canvas/custom-of-coordinate-transformation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Canvas学习：自定义的坐标变换"),a("OutboundLink")],1),t._v("，自行演算，本文不多做讨论。")])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"canvas-坐标变换2-矩阵变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas-坐标变换2-矩阵变换","aria-hidden":"true"}},[this._v("#")]),this._v(" Canvas 坐标变换2: 矩阵变换")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("scale()")]),t._v("、"),a("code",[t._v("rotate()")]),t._v(" 和 "),a("code",[t._v("translate()")]),t._v(" 这三个方法提供了一种简便的手段，用于操作绘图环境对象的"),a("code",[t._v("变换矩阵")]),t._v("（Transformation Matrix）。默认情况下，这个变换矩阵就是"),a("code",[t._v("单位矩阵")]),t._v("（Identity Matrix），它并不会影响所要绘制的物体。当调用了scale()、rotate()或translate()方法之后，变换矩阵就会被修改，从而也会影响到所有后续的绘图操作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"transform-和-settransform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform-和-settransform","aria-hidden":"true"}},[this._v("#")]),this._v(" transform 和 setTransform")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在Canvas中，可以使用"),s("code",[this._v("transforms")]),this._v("或"),s("code",[this._v("setTransform")]),this._v("对Canvas坐标系进行矩阵变换。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("transform：在当前的变换矩阵之上叠加运用另外的变换效果")])]),this._v(" "),s("li",[s("p",[this._v("setTransform：将当前的变换矩阵设置为默认的单位矩阵，然后在单位矩阵之上运用用户指定的变换效果")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("多次调用transform()方法所造成的变换效果是累积的，而每次只要调用setTransform()方法，它就会将上一次的变换矩阵彻底清除。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("可以实现scale()、rotate()和translate()方法所达到的效果，比如错切效果")])]),this._v(" "),s("li",[s("p",[this._v("只需调用一次transform()或setTransform()方法，就可以做出结合了缩放、旋转、平移及错切等诸多操作的效果")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("这两个方法不像scale()、rotate()和translate()方法那样直观。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"transforms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms","aria-hidden":"true"}},[this._v("#")]),this._v(" transforms")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m11"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m12"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m21"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m22"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("m11 m21 dx\nm12 m22 dy\n0   0   1\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("a (m11)")]),this._v(" Horizontal scaling.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("b (m12)")]),this._v(" Horizontal skewing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("c (m21)")]),this._v(" Vertical skewing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("d (m22)")]),this._v(" Vertical scaling.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("e (dx)")]),this._v(" Horizontal moving.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("f (dy)")]),this._v(" Vertical moving.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("fillRect")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"理解-canvas-中的-transform、settransform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理解-canvas-中的-transform、settransform","aria-hidden":"true"}},[this._v("#")]),this._v(" 理解 Canvas 中的 transform、setTransform")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("transform() 是 Canvas 2D API 使用矩阵多次叠加当前变换的方法，矩阵由方法的参数进行描述。可以实现缩放、旋转、移动和倾斜等效果。")]),this._v(" "),s("li",[this._v("setTransform() 是 Canvas 2D API 使用单位矩阵重新设置（覆盖）当前的变换并调用变换的方法，此变换由方法的变量进行描述。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setTransform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("a: 表示水平缩放scaleX")]),t._v(" "),a("li",[t._v("b: 表示水平倾斜skewX")]),t._v(" "),a("li",[t._v("c: 表示垂直倾斜skewY")]),t._v(" "),a("li",[t._v("d: 表示垂直缩放scaleY")]),t._v(" "),a("li",[t._v("e: 表示水平移动translateX")]),t._v(" "),a("li",[t._v("f: 表示垂直移动translateY")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用transform实现平移、缩放、旋转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用transform实现平移、缩放、旋转","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用transform实现平移、缩放、旋转")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"平移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#平移","aria-hidden":"true"}},[this._v("#")]),this._v(" 平移")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这跟使用 "),s("code",[this._v("translate")]),this._v(" 是等效的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("translate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dx"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("setTransform()")]),this._v(" 的使用原理也一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"缩放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缩放","aria-hidden":"true"}},[this._v("#")]),this._v(" 缩放")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这跟使用 "),s("code",[this._v("scale")]),this._v(" 是等效的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("scale")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("setTransform()")]),this._v(" 的使用原理也一样。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"旋转"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旋转","aria-hidden":"true"}},[this._v("#")]),this._v(" 旋转")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("sin(α + θ) = sin(α)*cos(θ) + cos(α)*sin(θ) \ncos(α + θ) = cos(α)*cos(θ) - sin(α)*sin(θ)\n\nsin(α - θ) = sin(α)*cos(θ) - cos(α)*sin(θ) \ncos(α - θ) = cos(α)*cos(θ) + sin(α)*sin(θ)\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br"),s("span",{staticClass:"line-number"},[this._v("3")]),s("br"),s("span",{staticClass:"line-number"},[this._v("4")]),s("br"),s("span",{staticClass:"line-number"},[this._v("5")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("x = r * cos(α + θ) = r*cos(α)*cos(θ) - r*sin(α)*sin(θ) \ny = r * sin(α + θ) = r*sin(α)*cos(θ) + r*cos(α)*sin(θ) \n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"斜切"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#斜切","aria-hidden":"true"}},[this._v("#")]),this._v(" 斜切")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("f(x) = x * tan(α)\nf(y) = y * tan(α)\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("x = x0 + k*y0\ny = y0\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("用 "),s("code",[this._v("transform")]),this._v(" 表示为")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 水平斜切")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setTransform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// 垂直斜切 ")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setTransform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),a("span",{attrs:{class:"token comment"}},[t._v("// 水平和垂直方向斜切 ")]),t._v("\nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("transform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setTransform")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"对称变换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对称变换","aria-hidden":"true"}},[this._v("#")]),this._v(" 对称变换")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("比如，某点P0(x0,y0)结过对称变换后得到P(x,y)。如果对称轴是 "),s("code",[this._v("x")]),this._v(" 轴，那么：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("x = x0\ny = -y0\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果对称轴是 "),s("code",[this._v("y")]),this._v(" 轴,那么：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("x = -x0\ny = y0\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果对称轴是 "),s("code",[this._v("y = x")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("x = x0\ny = y0\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("同理，如果关于 "),s("code",[this._v("y = -x")]),this._v(" 对称，则")])}],!1,null,null,null);e.options.__file="Transform2.md";s.default=e.exports}}]);