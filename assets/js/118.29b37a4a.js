(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1180:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"继承"}},[s._v("继承")]),s._v(" "),t("p",[s._v("PHP 使用关键字 "),t("strong",[s._v("extends")]),s._v(" 来继承一个类，PHP 不支持多继承。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("Parent")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("Child")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("Parent")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"方法重写-覆盖"}},[s._v("方法重写/覆盖")]),s._v(" "),t("p",[s._v("如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ParentClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Parent'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ChildClass")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ParentClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Child'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{attrs:{class:"token variable"}},[s._v("$p")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ParentClass")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$p")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// Parent")]),s._v("\n\n"),t("span",{attrs:{class:"token variable"}},[s._v("$c")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ChildClass")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$c")]),t("span",{attrs:{class:"token operator"}},[s._v("-")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// Child")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"final-关键字"}},[s._v("Final 关键字")]),s._v(" "),t("p",[s._v("PHP 5 新增了一个 final 关键字。如果父类中的方法被声明为 final，则子类无法覆盖该方法。如果一个类被声明为 final，则不能被继承。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("moreTesting")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"BaseClass::moreTesting() called"')]),s._v("  "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ChildClass")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("moreTesting")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"ChildClass::moreTesting() called"')]),s._v("  "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{attrs:{class:"token comment"}},[s._v("// Fatal error: Cannot override final method")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("ChildClass")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("// Fatal error: Class ChildClass may not inherit from final class (BaseClass)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"调用父类构造方法"}},[s._v("调用父类构造方法")]),s._v(" "),t("p",[s._v("PHP 不会在子类的构造方法中自动的调用父类的构造方法。要执行父类的构造方法，需要在子类的构造方法中调用 "),t("strong",[s._v("parent::__construct()")]),s._v(" 。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("__construct")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"BaseClass 类中构造方法"')]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("SubClass")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("__construct")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("parent")]),t("span",{attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{attrs:{class:"token function"}},[s._v("__construct")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{attrs:{class:"token comment"}},[s._v("// 子类构造方法不能自动调用父类的构造方法")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"SubClass 类中构造方法"')]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token constant"}},[s._v("PHP_EOL")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{attrs:{class:"token comment"}},[s._v("// 调用 BaseClass 构造方法")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$obj")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("BaseClass")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{attrs:{class:"token comment"}},[s._v("// 调用 BaseClass、SubClass 构造方法")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$obj")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("SubClass")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])}],!1,null,null,null);a.default=e.exports}}]);