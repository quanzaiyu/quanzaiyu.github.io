(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{889:function(t,a,r){"use strict";r.r(a);var v=r(1),_=Object(v.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"附录：矩阵基础知识"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附录：矩阵基础知识","aria-hidden":"true"}},[t._v("#")]),t._v(" 附录：矩阵基础知识")]),t._v(" "),r("p",[t._v("数学上，一个m×n的矩阵是一个由m行n列元素排列成的矩形阵列。矩阵里的元素可以是数字、符号或数学式。")]),t._v(" "),r("p",[t._v("矩阵的一个重要用途是解线性方程组。线性方程组中未知量的系数可以排成一个矩阵，加上常数项，则称为增广矩阵。另一个重要用途是表示线性变换，即是诸如f(x) {\\displaystyle =}  = 4x之类的线性函数的推广。设定基底后，某个向量v可以表示为m×1的矩阵，而线性变换f可以表示为列数为m的矩阵A，使得经过变换后得到的向量f(v)可以表示成Av的形式。矩阵的特征值和特征向量可以揭示线性变换的深层特性。参考: "),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%9F%A9%E9%98%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki百科 - 矩阵"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"向量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量","aria-hidden":"true"}},[t._v("#")]),t._v(" 向量")]),t._v(" "),r("p",[t._v("向量最基本的定义就是一个方向。或者更正式的说，向量有一个方向（Direction）和大小（Magnitude，也称之为长度）。")]),t._v(" "),r("p",[t._v("下图展示了三个向量，每个向量在2D图像中都用一个箭头(x,y)表示。我们在2D图片中展示这些向量，因为这样子会更直观一点。由于向量表示的是方向，起始于何处并不会改变它的值。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/045.png"}}),t._v(" "),r("p",[t._v("数学家喜欢在字母上面加一横表示向量，比如说在v的上面加-。当用在公式中时它们通常是这样的：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/046.png"}}),t._v(" "),r("p",[t._v("把2D向量当做z坐标轴为0的3D向量。")]),t._v(" "),r("p",[t._v("由于向量是一个方向，所以有些时候会很难形象地将它们用位置表示出来。为了让其更为直观，通常设定这个方向的原点为(0,0,0)（在2D世界中，这个原点就是(0,0)），然后指向一个方向，对应一个点，使其变为位置向量（Position Vector）。比如上图中位置向量(3,2)在图像中的起点会是(0,0)，并会指向(3,2)。")]),t._v(" "),r("h2",{attrs:{id:"向量运算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 向量运算")]),t._v(" "),r("h3",{attrs:{id:"向量与标量运算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量与标量运算","aria-hidden":"true"}},[t._v("#")]),t._v(" 向量与标量运算")]),t._v(" "),r("p",[t._v("标量(Scalar)只是一个数字（或者说是仅有一个分量的向量）。当把一个向量加、减、乘或除一个标量，我们可以简单的把向量的每个分量分别进行该运算。对于加法来说会像这样：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/047.png"}}),t._v(" "),r("p",[t._v("其中的+可以是+，-，·或÷，其中·是乘号。注意，-和÷运算时不能颠倒（标量 -/÷向量），它为颠倒的运算是没有定义的。")]),t._v(" "),r("h3",{attrs:{id:"向量取反"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量取反","aria-hidden":"true"}},[t._v("#")]),t._v(" 向量取反")]),t._v(" "),r("p",[t._v("对一个向量取反（Negate）会将其方向逆转。一个向东北的向量取反后就指向西南方向了。我们在一个向量的每个分量前加负号就可以实现取反了（或者说用-1数乘该向量）：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/048.png"}}),t._v(" "),r("h3",{attrs:{id:"向量加减"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量加减","aria-hidden":"true"}},[t._v("#")]),t._v(" 向量加减")]),t._v(" "),r("p",[t._v("向量的加法可以被定义为是分量的(Component-wise)相加，即将一个向量中的每一个分量加上另一个向量的对应分量：著作权归作者所有。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/049.png"}}),t._v(" "),r("p",[t._v("向量v = (4, 2)和k = (1, 2)可以直观地表示为：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/050.png"}}),t._v(" "),r("p",[t._v("就像普通数字的加减一样，向量的减法等于加上第二个向量的相反向量：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/051.png"}}),t._v(" "),r("p",[t._v("两个向量的相减会得到这两个向量指向位置的差。这在我们想要获取两点的差会非常有用。")]),t._v(" "),r("h3",{attrs:{id:"长度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#长度","aria-hidden":"true"}},[t._v("#")]),t._v(" 长度")]),t._v(" "),r("p",[t._v("我们使用勾股定理(Pythagoras Theorem)来获取向量的长度(Length)/大小(Magnitude)。如果你把向量的x与y分量画出来，该向量会和x与y分量为边形成一个三角形:")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/052.png"}}),t._v(" "),r("p",[t._v("因为两条边（x和y）是已知的，如果希望知道斜边v¯的长度，我们可以直接通过勾股定理来计算：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/053.png"}}),t._v(" "),r("h3",{attrs:{id:"向量相乘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#向量相乘","aria-hidden":"true"}},[t._v("#")]),t._v(" 向量相乘")]),t._v(" "),r("p",[t._v("两个向量相乘是一种很奇怪的情况。普通的乘法在向量上是没有定义的，因为它在视觉上是没有意义的。但是在相乘的时候我们有两种特定情况可以选择：一个是点乘(Dot Product)，记作v¯⋅k¯，另一个是叉乘(Cross Product)，记作v¯×k¯。")]),t._v(" "),r("h3",{attrs:{id:"点乘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#点乘","aria-hidden":"true"}},[t._v("#")]),t._v(" 点乘")]),t._v(" "),r("p",[t._v("两个向量的点乘等于它们的数乘结果乘以两个向量之间夹角的余弦值。可能听起来有点费解，我们来看一下公式：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/054.png"}}),t._v(" "),r("p",[t._v("它们之间的夹角记作θ。为什么这很有用？想象如果v¯和k¯都是单位向量，它们的长度会等于1。这样公式会有效简化成：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/055.png"}}),t._v(" "),r("p",[t._v("现在点积只定义了两个向量的夹角。你也许记得90度的余弦值是0，0度的余弦值是1。使用点乘可以很容易测试两个向量是否正交(Orthogonal)或平行（正交意味着两个向量互为直角）。")]),t._v(" "),r("p",[t._v("所以，我们该如何计算点乘呢？点乘是通过将对应分量逐个相乘，然后再把所得积相加来计算的。两个单位向量的（你可以验证它们的长度都为1）点乘会像是这样：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/056.png"}}),t._v(" "),r("h3",{attrs:{id:"叉乘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#叉乘","aria-hidden":"true"}},[t._v("#")]),t._v(" 叉乘")]),t._v(" "),r("p",[t._v("叉乘只在3D空间中有定义，它需要两个不平行向量作为输入，生成一个正交于两个输入向量的第三个向量。如果输入的两个向量也是正交的，那么叉乘之后将会产生3个互相正交的向量。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/057.png"}}),t._v(" "),r("p",[t._v("两个正交向量A和B叉积表示为:")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/058.png"}}),t._v(" "),r("h2",{attrs:{id:"矩阵"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#矩阵","aria-hidden":"true"}},[t._v("#")]),t._v(" 矩阵")]),t._v(" "),r("p",[t._v("简单来说矩阵就是一个矩形的数字、符号或表达式数组。矩阵中每一项叫做矩阵的元素(Element)。看一个2×3矩阵的例子：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/059.png"}}),t._v(" "),r("p",[t._v("矩阵可以通过(i, j)进行索引，i是行，j是列，这就是上面的矩阵叫做2×3矩阵的原因（3列2行，也叫做矩阵的维度(Dimension)）。这与你在索引2D图像时的(x, y)相反，获取4的索引是(2, 1)（第二行，第一列）。")]),t._v(" "),r("p",[t._v("矩阵就是一个矩形的数学表达式阵列。和向量一样，矩阵也有非常漂亮的数学属性。矩阵有几个运算，分别是：矩阵加法、减法和乘法。")]),t._v(" "),r("h3",{attrs:{id:"矩阵的加减"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#矩阵的加减","aria-hidden":"true"}},[t._v("#")]),t._v(" 矩阵的加减")]),t._v(" "),r("p",[t._v("矩阵与标量之间的加减定义如下：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/060.png"}}),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/061.png"}}),t._v(" "),r("p",[t._v("矩阵与矩阵之间的加减就是两个矩阵对应元素的加减运算，所以总体的规则和与标量运算是差不多的，只不过在相同索引下的元素才能进行运算。这也就是说加法和减法只对同维度的矩阵才是有定义的。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/062.png"}}),t._v(" "),r("h3",{attrs:{id:"矩阵的数乘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#矩阵的数乘","aria-hidden":"true"}},[t._v("#")]),t._v(" 矩阵的数乘")]),t._v(" "),r("p",[t._v("和矩阵与标量的加减一样，矩阵与标量之间的乘法也是矩阵的每一个元素分别乘以该标量。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/063.png"}}),t._v(" "),r("p",[t._v("现在我们也就能明白为什么这些单独的数字要叫做标量(Scalar)了。简单来说，标量就是用它的值缩放(Scale)矩阵的所有元素。")]),t._v(" "),r("h3",{attrs:{id:"矩阵相乘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#矩阵相乘","aria-hidden":"true"}},[t._v("#")]),t._v(" 矩阵相乘")]),t._v(" "),r("p",[t._v("矩阵相乘有一些限制：")]),t._v(" "),r("ul",[r("li",[t._v("只有当左侧矩阵的列数与右侧矩阵的行数相等，两个矩阵才能相乘。")]),t._v(" "),r("li",[t._v("矩阵相乘不遵守交换律(Commutative)，也就是说A⋅B≠B⋅A。")])]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/064.png"}}),t._v(" "),r("p",[t._v("矩阵的乘法是一系列乘法和加法组合的结果，它使用到了左侧矩阵的行和右侧矩阵的列。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/065.png"}}),t._v(" "),r("p",[t._v("我们首先把左侧矩阵的行和右侧矩阵的列拿出来。这些挑出来行和列将决定我们该计算结果2x2矩阵的哪个输出值。如果取的是左矩阵的第一行，输出值就会出现在结果矩阵的第一行。接下来再取一列，如果我们取的是右矩阵的第一列，最终值则会出现在结果矩阵的第一列。这正是红框里的情况。如果想计算结果矩阵右下角的值，我们要用第一个矩阵的第二行和第二个矩阵的第二列。")]),t._v(" "),r("p",[t._v("计算一项的结果值的方式是先计算左侧矩阵对应行和右侧矩阵对应列的第一个元素之积，然后是第二个，第三个，第四个等等，然后把所有的乘积相加，这就是结果了。现在我们就能解释为什么左侧矩阵的列数必须和右侧矩阵的行数相等了，如果不相等这一步的运算就无法完成了！")]),t._v(" "),r("p",[t._v("结果矩阵的维度是(n, m)，n等于左侧矩阵的行数，m等于右侧矩阵的列数。")]),t._v(" "),r("p",[t._v("看一个更复杂的例子，最好用手算一遍，会更好掌握")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/066.png"}}),t._v(" "),r("h3",{attrs:{id:"矩阵与向量相乘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#矩阵与向量相乘","aria-hidden":"true"}},[t._v("#")]),t._v(" 矩阵与向量相乘")]),t._v(" "),r("p",[t._v("我们用向量来表示位置，表示颜色，甚至是纹理坐标。让我们更深入了解一下向量，它其实就是一个N×1矩阵，N表示向量分量的个数（也叫N维(N-dimensional)向量）。如果你仔细思考一下就会明白。向量和矩阵一样都是一个数字序列，但它只有1列。那么，这个新的定义对我们有什么帮助呢？如果我们有一个M×N矩阵，我们可以用这个矩阵乘以我们的N×1向量，因为这个矩阵的列数等于向量的行数，所以它们就能相乘。")]),t._v(" "),r("h3",{attrs:{id:"单位矩阵"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单位矩阵","aria-hidden":"true"}},[t._v("#")]),t._v(" 单位矩阵")]),t._v(" "),r("p",[t._v("最简单的变换矩阵就是单位矩阵(Identity Matrix)。单位矩阵是一个除了对角线以外都是0的N×N矩阵。在下式中可以看到，这种变换矩阵使一个向量完全不变：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180914/067.png"}}),t._v(" "),r("p",[t._v("向量看起来完全没变。从乘法法则来看就很容易理解来：第一个结果元素是矩阵的第一行的每个元素乘以向量的每个对应元素。因为每行的元素除了第一个都是0，可得：1⋅1+0⋅2+0⋅3+0⋅4=1，向量的其他3个元素同理。")])],1)},[],!1,null,null,null);a.default=_.exports}}]);