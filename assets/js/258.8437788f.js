(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{666:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),a("p",[s._v("在 PHP 中，提供了下列循环语句：")]),s._m(1),s._m(2),a("p",[s._v("while 循环将重复执行代码块，直到指定的条件不成立。")]),a("p",[s._v("示例代码")]),s._m(3),s._m(4),a("p",[s._v("do...while 语句会至少执行一次代码，然后检查条件，只要条件成立，就会重复进行循环。")]),a("p",[s._v("示例代码")]),s._m(5),s._m(6),a("p",[s._v("for 循环用于预先知道脚本需要运行的次数的情况。")]),s._m(7),s._m(8),a("p",[s._v("foreach 循环用于遍历数组，它根据数组中每个元素来循环代码块。")]),s._m(9),a("p",[s._v("同时遍历key和value")]),s._m(10),a("p",[s._v("使用引用修改数组值:")]),s._m(11),s._m(12),s._m(13),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),a("p",[s._v("数组最后一个元素的 "),a("em",[s._v("$value")]),s._v(" 引用在 "),a("em",[s._v("foreach")]),s._v(" 循环之后仍会保留。建议使用 "),a("a",{attrs:{href:"http://php.net/manual/zh/function.unset.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("unset()"),a("OutboundLink")],1),s._v(" 来将其销毁。")])]),s._m(14),a("p",[s._v("参考资料: "),a("a",{attrs:{href:"http://www.php.net/manual/zh/control-structures.foreach.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.php.net/manual/zh/control-structures.foreach.php"),a("OutboundLink")],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"php-循环语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#php-循环语句","aria-hidden":"true"}},[this._v("$")]),this._v(" PHP 循环语句")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("strong",[s._v("while")]),s._v(" - 只要指定的条件成立，则循环执行代码块")]),a("li",[a("strong",[s._v("do...while")]),s._v(" - 首先执行一次代码块，然后在指定的条件成立时重复这个循环")]),a("li",[a("strong",[s._v("for")]),s._v(" - 循环执行代码块指定的次数")]),a("li",[a("strong",[s._v("foreach")]),s._v(" - 根据数组中每个元素来循环代码块")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"while-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#while-语句","aria-hidden":"true"}},[this._v("$")]),this._v(" while 语句")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$i")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"The number is "')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("++")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"do-while-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-while-语句","aria-hidden":"true"}},[this._v("$")]),this._v(" do-while 语句")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$i")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"The number is "')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("++")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"for-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-语句","aria-hidden":"true"}},[this._v("$")]),this._v(" for 语句")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),a("span",{attrs:{class:"token operator"}},[s._v("<=")]),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),a("span",{attrs:{class:"token operator"}},[s._v("++")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"The number is "')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"foreach-as-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#foreach-as-语句","aria-hidden":"true"}},[this._v("$")]),this._v(" foreach-as 语句")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"one"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"two"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"three"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'a'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"one"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'b'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"two"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"three"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"one"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"two"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"three"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$key")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$key")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('" => "')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'a'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"one"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'b'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"two"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"three"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$key")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$key")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('" => "')]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("print_r")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// array(1, 2, 3, 4)")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("&")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("print_r")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 8")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("unset")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 最后取消掉引用")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("print_r")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// Notice: Undefined variable: value")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("print_r")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<br>'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// array(2, 4, 6, 8)")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("$value")]),this._v(" 的引用仅在被遍历的数组可以被引用时才可用（例如是个变量）。以下代码运行后数组无法引用：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("foreach")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("&")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 8")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("unset")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("注意：")]),t("p",[this._v("foreach 仅能够应用于数组和对象，如果尝试应用于其他数据类型的变量，或者未初始化的变量，将发出错误信息。")])])}],!1,null,null,null);t.default=e.exports}}]);