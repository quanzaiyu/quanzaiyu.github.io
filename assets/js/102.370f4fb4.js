(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{569:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"php-数据类型"}},[s._v("PHP 数据类型")]),s._v(" "),a("p",[s._v("虽然 PHP 是一门弱类型语言，在声明和使用变量的时候，并不需要指明其数据类型，但是也应该了解它的数据类型！")]),s._v(" "),a("p",[s._v("以下是 PHP5 数据类型:")]),s._v(" "),s._m(0),s._v(" "),a("h2",{attrs:{id:"数据类型之间的转化"}},[s._v("数据类型之间的转化")]),s._v(" "),a("h3",{attrs:{id:"方式一"}},[s._v("方式一")]),s._v(" "),a("p",[s._v("方式一：在要转换的变量之前加上用括号括起来的目标类型。")]),s._v(" "),a("p",[s._v("可以使用以下转化类型：")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),s._m(2),a("h3",{attrs:{id:"方式二"}},[s._v("方式二")]),s._v(" "),a("p",[s._v("方式二：使用3个具体类型的转换函数，intval()、floatval()、strval()")]),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),s._m(3),a("h3",{attrs:{id:"方式三"}},[s._v("方式三")]),s._v(" "),a("p",[s._v("第三种转换方式：settype()")]),s._v(" "),s._m(4),a("h2",{attrs:{id:"检测数据类型"}},[s._v("检测数据类型")]),s._v(" "),a("h3",{attrs:{id:"方式一-2"}},[s._v("方式一")]),s._v(" "),a("p",[s._v("方式一：输出变量的数据类型（gettype）")]),s._v(" "),s._m(5),a("p",[s._v("gettype 会根据 参数类型返回下列值")]),s._v(" "),s._m(6),s._v(" "),a("h3",{attrs:{id:"方式二-2"}},[s._v("方式二")]),s._v(" "),a("p",[s._v("方式二：输出变量的数据类型、包含的数量以及具体内容，var_dump 返回变量的数据类型和值")]),s._v(" "),s._m(7),a("h3",{attrs:{id:"方式三-2"}},[s._v("方式三")]),s._v(" "),a("p",[s._v("方式三：检测某个变量是否是指定的数据类型（is_array、is_string、is_int、is_double等），如果为真返回1，如果为假返回空")]),s._v(" "),s._m(8),a("p",[s._v("常用的类型判断函数有：")]),s._v(" "),s._m(9),a("h3",{attrs:{id:"function-exists"}},[s._v("function_exists")]),s._v(" "),a("p",[s._v("用于判断一个函数是否存在，比如：")]),s._v(" "),s._m(10),a("h2",{attrs:{id:"empty、isset、isnull-的区别"}},[s._v("empty、isset、isnull 的区别")]),s._v(" "),a("h3",{attrs:{id:"empty"}},[s._v("empty")]),s._v(" "),a("p",[s._v('如果变量是非空或非零的值，则 empty() 返回 FALSE。换句话说，”"、0、”0″、NULL、FALSE、array()、var $var、未定义;以及没有任何属性的对象都将被认为是空的，如果 var 为空，则返回 TRUE。')]),s._v(" "),a("h3",{attrs:{id:"isset"}},[s._v("isset")]),s._v(" "),a("p",[s._v("如果变量存在(非NULL)则返回 TRUE，否则返回 FALSE(包括未定义）。变量值设置为：null，返回也是false;")]),s._v(" "),a("p",[s._v("unset 一个变量后，变量被取消了。注意，isset 对于 NULL 值变量，特殊处理。")]),s._v(" "),a("h3",{attrs:{id:"is-null"}},[s._v("is_null")]),s._v(" "),a("p",[s._v("检测传入值【值，变量，表达式】是否是 null，只有一个变量定义了，且它的值是 null，它才返回 TRUE。其它都返回 FALSE 【未定义变量传入后会出错！】")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[s._v("参考资料")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/yyxayz/p/5475244.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP数据类型转换"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jb51.net/article/107390.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP检测数据类型的几种方法(总结)"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/mood-butterfly/p/6439119.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("PHP中变量类型的判断"),a("OutboundLink")],1)])])},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("String（字符串）")]),s._v(" "),a("li",[s._v("Integer（整型）")]),s._v(" "),a("li",[s._v("Float（浮点型）")]),s._v(" "),a("li",[s._v("Boolean（布尔型）")]),s._v(" "),a("li",[s._v("Array（数组）")]),s._v(" "),a("li",[s._v("Object（对象）")]),s._v(" "),a("li",[s._v("NULL（空值）")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("（int）、（integer）：转换成整形")]),s._v(" "),a("li",[s._v("（float）、（double）、（real）：转换成浮点型")]),s._v(" "),a("li",[s._v("（string）：转换成字符串")]),s._v(" "),a("li",[s._v("（bool）、（boolean）：转换成布尔类型")]),s._v(" "),a("li",[s._v("（array）：转换成数组")]),s._v(" "),a("li",[s._v("（object）：转换成对象")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$num1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3.14")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$num2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("int"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token variable"}},[s._v("$num1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 输出float(3.14)")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 输出int(3)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"123.9abc"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$int")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("intval")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{attrs:{class:"token comment"}},[s._v("// 转换后数值：123")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$float")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("floatval")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 转换后数值：123.9")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("strval")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$float")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{attrs:{class:"token comment"}},[s._v('// 转换后字符串："123.9"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$num4")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("12.8")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$flg")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("settype")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"int"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$flg")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("// 输出bool(true)")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 输出int(12)")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'b'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("gettype")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// array")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("“boolean”（从 PHP 4 起）")]),s._v(" "),a("li",[s._v("“integer”")]),s._v(" "),a("li",[s._v("“double”（如果是 float 则返回 “double”，而不是 “float”）")]),s._v(" "),a("li",[s._v("“string”")]),s._v(" "),a("li",[s._v("“array”")]),s._v(" "),a("li",[s._v("“object”")]),s._v(" "),a("li",[s._v("“resource”（从 PHP 4 起）")]),s._v(" "),a("li",[s._v("“NULL”（从 PHP 4 起）")]),s._v(" "),a("li",[s._v("“unknown type”")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$txt1")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Hello World!"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$cars")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Volvo"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"BMW"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Toyota"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("11")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$y")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("22.22")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$z")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("null")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$b")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("true")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$txt1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// string(12) "Hello World!"')]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$cars")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// array(3) { [0]=> string(5) "Volvo" [1]=> string(3) "BMW" [2]=> string(6) "Toyota" }')]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$x")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// int(11)")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$y")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// float(22.22)")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$b")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// bool(true)")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Car")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("__construct")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$color")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"green"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("color")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("what_color")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token property"}},[s._v("color")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$car1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Car")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'blue'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$car2")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Car")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$car1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// object(Car)#1 (1) { ["color"]=> string(4) "blue" }')]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("var_dump")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$car2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"<br>"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v('// object(Car)#2 (1) { ["color"]=> string(5) "green" }')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$num")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("123")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token function"}},[s._v("is_array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'这是一个数组'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token function"}},[s._v("is_string")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'这是一个字符串'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token function"}},[s._v("is_int")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'这是一个整数'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token function"}},[s._v("is_double")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$num")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'这是一个浮点数'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("isset")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 变量是否已经声明")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("empty")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 变量是否为空")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("defined")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 常量是否已经定义 define()")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("array_key_exists")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mixed key"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),s._v(" search"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检查给定的键名或索引是否存在于数组中")]),s._v("\nis_numeric "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mixed "),a("span",{attrs:{class:"token keyword"}},[s._v("var")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否为数字或数字字符串")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_bool")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否是布尔型")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_float")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否是浮点型 和 is_double() ， is_real() 都一样的用法")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_int")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否是整数 is_integer() 一样的用法")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_string")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否是字符串")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_object")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否是一个对象")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否是数组")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("is_null")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 检测变量是否为 NULL 值是否是 NULL 大小写敏感")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),a("span",{attrs:{class:"token function"}},[s._v("function_exists")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" test "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$idcard")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])}],!1,null,null,null);t.default=e.exports}}]);