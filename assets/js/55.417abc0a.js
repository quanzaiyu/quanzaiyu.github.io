(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{340:function(a,t,s){"use strict";s.r(t);var r=s(1),e=Object(r.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kotlin-空值检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kotlin-空值检测","aria-hidden":"true"}},[a._v("#")]),a._v(" Kotlin 空值检测")]),a._v(" "),s("p",[a._v("Kotlin对比于Java的一个最大的区别就是它致力于消除空引用所带来的危险。在Java中，如果我们尝试访问一个空引用的成员可能就会导致空指针异常NullPointerException(NPE)的出现。在Kotlin语言中就解决了这个问题，下面来看看它是如何做到的。")]),a._v(" "),s("p",[a._v("在Kotlin中，类型系统将可空类型和不可空类型进行了区分，例如，String为不可空类型，String?为可空类型，如果将不可空类型赋值为null将会编译不通过。")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// compilation error")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ok")]),a._v("\n")])])]),s("h2",{attrs:{id:"可空类型的属性调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可空类型的属性调用","aria-hidden":"true"}},[a._v("#")]),a._v(" 可空类型的属性调用")]),a._v(" "),s("p",[a._v("对于不可空类型，可以直接调用它的成员变量或者函数，但是对应可空类型，直接调用成员变量或者函数将会编译不通过，相当于直接在语法层面解决做出了限制。")]),a._v(" "),s("p",[a._v("那么问题来了，因为可空类型调用成员变量或者函数会编译不通过，但是可空类型可以是空引用，也可以不是空引用，编译器直接全部进行了否则，假如一个可空类型它本身是不为空的，我们希望调用它的成员变量或者函数，但是编译却不通过，这貌似就不符合逻辑了。")]),a._v(" "),s("p",[a._v("例如：")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//compilation error")]),a._v("\n")])])]),s("p",[a._v("上面的代码按理说没什么问题，但是编译不通过，就是因为String为可空类型，编译器不让它直接调用成员变量或者函数，对于可空类型，如果希望调用它的成员变量或者函数就必须进行判断才行，否则编译器是不会通过的，这就是Kotlin解决空指针异常的方法之道，它会最大限度的要求程序员去避免空指针异常。")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("上面这个代码就没有问题，因为我们做了检查，所以编译器就允许调用可空引用b的的成员变量。")]),a._v(" "),s("p",[a._v("以上代码可以使用一个简便写法 ("),s("code",[a._v("?.")]),a._v("):")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length\n")])])]),s("p",[a._v("这样就不需要你手动进行检查了，如果b为空引用，直接返回null，否则，就返回b.length。")]),a._v(" "),s("h2",{attrs:{id:"elvis-操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elvis-操作符","aria-hidden":"true"}},[a._v("#")]),a._v(" Elvis 操作符")]),a._v(" "),s("p",[a._v("Kotlin语言的特定就是简洁，大家应该注意点，上面的语句都没有分号，这个在Java里面是绝对不可能的，但是在Kotlin里面，你就是这样这么任性。大家是否记得在Java中的三元运算符 ("),s("code",[a._v("?:")]),a._v(")，在Kotlin里面也有类似的 Elvis 操作符。")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" l"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等价于")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?:")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n")])])]),s("p",[a._v("如果b为null返回-1，否则返回b.length。")]),a._v(" "),s("h2",{attrs:{id:"抛出异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抛出异常","aria-hidden":"true"}},[a._v("#")]),a._v(" 抛出异常")]),a._v(" "),s("p",[a._v("可空引用的调用，下面还有方式来调用它的成员函数和变量, 使用 "),s("code",[a._v("!!.")]),a._v(" 进行处理。")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("length")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("它的返回值有两种可能，如果b不为null，返回b.length()，否则，抛出一个空指针异常，如果b为null，你不想返回null，而是抛出一个空指针异常，你就可以使用它。")]),a._v(" "),s("h2",{attrs:{id:"安全的类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安全的类型转换","aria-hidden":"true"}},[a._v("#")]),a._v(" 安全的类型转换")]),a._v(" "),s("p",[a._v("我们知道类型转换可能产生ClassCastException异常，例如:")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Long "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" aInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" Int  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// java.lang.ClassCastException")]),a._v("\n")])])]),s("p",[a._v("那么如何避免这个异常呢？改成下面形式就可以了。")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Long "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" aInt"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" Int\n")])])]),s("p",[a._v("上面这种方法就是安全类型转换，如果类型转换不成功，就会返回null，而不是抛出ClassCastException异常。")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("ol",[s("li",[a._v("Kotlin有两种类型：一个是非空引用类型，一个是可空引用类型。")]),a._v(" "),s("li",[a._v("对于可空引用，如果希望调用它的成员变量或者成员函数，直接调用会出现编译错误，有三种方法可以调用：")])]),a._v(" "),s("ul",[s("li",[a._v("（1）在调用前，需要先检查，因为可能为null")]),a._v(" "),s("li",[a._v("（2）使用 "),s("code",[a._v("b?.length")]),a._v(" 的形式调用，如果b为null，返回null，否则返回b.length")]),a._v(" "),s("li",[a._v("（3）使用 "),s("code",[a._v("b!!.length")]),a._v(" 的形式调用，如果b为null，抛出空指针异常，否则返回b.length")])])])},[],!1,null,null,null);t.default=e.exports}}]);