(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{411:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kotlin-基础语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kotlin-基础语法","aria-hidden":"true"}},[a._v("#")]),a._v(" Kotlin 基础语法")]),a._v(" "),s("h2",{attrs:{id:"常量与变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量与变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 常量与变量")]),a._v(" "),s("ul",[s("li",[a._v("可变变量, 使用 "),s("code",[a._v("var")]),a._v(" 关键字定义, 即可读且可写。相当于Java中普通变量")]),a._v(" "),s("li",[a._v("不可变变量, 使用 "),s("code",[a._v("val")]),a._v(" 关键字定义, 即可读且不可写。相当于Java中用final修饰的变量")]),a._v(" "),s("li",[a._v("常量, 使用 "),s("code",[a._v("const val")]),a._v(" 进行定义, "),s("code",[a._v("const")]),a._v(" 只能修饰val，不能修饰var")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var/val <标识符> : <类型> = <初始化值>\n")])])]),s("p",[a._v("示例:")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 可变变量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 系统自动推断变量类型为Int")]),a._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 变量可修改")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 不可变变量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 系统自动推断变量类型为Int")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" c"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int      "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 如果不在声明时初始化则必须提供变量类型")]),a._v("\nc "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 明确赋值")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 常量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" NUM_A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n")])])]),s("p",[a._v("常量与变量都可以没有初始化值,但是在引用前必须初始化,编译器支持自动类型判断,即声明时可以不指定类型,由编译器判断。")]),a._v(" "),s("h3",{attrs:{id:"可空变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可空变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 可空变量")]),a._v(" "),s("p",[a._v("在Java中，当我们声明一个变量不必关心这个变量是否为空，在使用这个变量的时候几乎上都会判断其是否为空增加程序的安全性。这样的习惯是极好的。但是无形中也增加了一定的代码量。有时候这样的代码还极有可能是无用的废代码。然而在Kotlin中当我们可以确定这个属性或变量一定不为空时，我们就用上面讲解到的去定义变量。否则就把它声明为"),s("code",[a._v("可空变量")]),a._v("。")]),a._v(" "),s("p",[a._v("可空变量的特点：")]),a._v(" "),s("ul",[s("li",[a._v("在声明的时候一定用标准的声明格式定义。不能用可推断类型的简写。")]),a._v(" "),s("li",[a._v("变量类型后面的?符号不能省略。不然就和普通的变量没区别了。")]),a._v(" "),s("li",[a._v("其初始化的值可以为null或确定的变量值。")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("var/val 变量名 ： 类型? = null/确定的值\n")])])]),s("p",[a._v("示例:")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" var_a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("val")]),a._v(" val_a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Int"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("null")]),a._v("\n")])])]),s("h2",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[a._v("#")]),a._v(" 注释")]),a._v(" "),s("p",[a._v("Kotlin 支持单行和多行注释，实例如下：")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 这是一个单行注释")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 这是一个多行的\n   块注释。 */")]),a._v("\n")])])]),s("p",[a._v("与 Java 不同, Kotlin 中的块注释允许嵌套。")]),a._v(" "),s("div",{staticClass:"language-kotlin extra-class"},[s("pre",{pre:!0,attrs:{class:"language-kotlin"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/*\n  第一层块注释\n  /*\n    第二层块注释\n  */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);