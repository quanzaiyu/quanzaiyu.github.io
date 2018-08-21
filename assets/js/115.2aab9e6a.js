(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{587:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"访问控制"}},[s._v("访问控制")]),s._v(" "),a("p",[s._v("PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("public（公有）：")]),s._v(" 公有的类成员可以在任何地方被访问。")]),s._v(" "),a("li",[a("strong",[s._v("protected（受保护）：")]),s._v(" 受保护的类成员则可以被其自身以及其子类和父类访问。")]),s._v(" "),a("li",[a("strong",[s._v("private（私有）：")]),s._v(" 私有的类成员则只能被其定义所在的类访问。")])]),s._v(" "),a("h3",{attrs:{id:"属性的访问控制"}},[s._v("属性的访问控制")]),s._v(" "),a("p",[s._v("类属性必须定义为公有，受保护，私有之一。如果用 var 定义，则被视为公有。")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$var")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'var'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$var1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'public var'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$var2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'protected var'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$var3")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'private var'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var1")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var2")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var3")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$foo")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// var")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$foo")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var1")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// public var")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// print $foo->var2 . PHP_EOL; // Fatal error")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// print $foo->var3 . PHP_EOL; // Fatal error")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$foo")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// public var protected var private var")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Bar")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var1")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// public var")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var2")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// protected var")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("var3")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// Notice: Undefined property")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$bar")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Bar")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$bar")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h3",{attrs:{id:"方法的访问控制"}},[s._v("方法的访问控制")]),s._v(" "),a("p",[s._v("类中的方法可以被定义为公有，私有或受保护。如果没有设置这些关键字，则该方法默认为公有。")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token comment"}},[s._v("// 声明一个公有的方法")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("MyPublic")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'MyPublic'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[s._v("// 声明一个受保护的方法")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("MyProtected")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'MyProtected'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[s._v("// 声明一个私有的方法")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("MyPrivate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'MyPrivate'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$foo")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("MyPublic")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// MyPublic")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// $foo->MyProtected(); // Fatal error: Uncaught Error")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// $foo->MyPrivate(); // Fatal error: Uncaught Error")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Bar")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("MyTest")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("MyPublic")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// MyPublic")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("MyProtected")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// MyProtected")]),s._v("\n    "),a("span",{attrs:{class:"token comment"}},[s._v("// $this->MyPrivate(); // Fatal error: Uncaught Error")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$bar")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Bar")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$bar")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("MyTest")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])])}],!1,null,null,null);t.default=r.exports}}]);