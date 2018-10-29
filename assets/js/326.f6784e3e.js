(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{543:function(s,t,a){"use strict";a.r(t);var n={props:["slot-key"]},e=a(0),r=Object(e.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[a("h1",{attrs:{id:"验证器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证器","aria-hidden":"true"}},[s._v("#")]),s._v(" 验证器")]),s._v(" "),a("p",[s._v("ThinkPHP 中自带验证器模块，只需要在自定义验证器中继承即可，核心文件位于 "),a("code",[s._v("thinkphp/library/think/Validate.php")]),s._v(" 中。")]),s._v(" "),a("p",[s._v("一般，我们会在 "),a("code",[s._v("application")]),s._v(" 下新建一个 "),a("code",[s._v("validate")]),s._v(" 文件夹，用于存放自定义验证文件。")]),s._v(" "),a("p",[s._v("比如创建一个验证个人信息的验证器 :")]),s._v(" "),a("p",[a("code",[s._v("application/validate/User.php")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Validate")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$rule")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name|姓名'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'require'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'min'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'max'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("20")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'email|邮箱'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'require'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'email'")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'password|密码'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'require'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'min'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'max'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("12")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'alphaNum'")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'mobile|电话'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'require'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'mobile'")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("p",[s._v("可以看到，这里只需要继承 "),a("code",[s._v("think\\Validate")]),s._v(" 即可轻松实现验证器，通过重写 "),a("code",[s._v("$rule")]),s._v(" 属性创建自定义验证规则。")]),s._v(" "),a("p",[a("code",[s._v("$rule")]),s._v(" 中指定要验证的字段名，通过 "),a("code",[s._v("|")]),s._v(" 对字段进行命名，如果不命名默认为字段名，在输出提示中会显示。")]),s._v(" "),a("p",[s._v("要使用这个验证器，在控制器中指定 :")]),s._v(" "),a("p",[a("code",[s._v("application/index/controller/Index.php")])]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("controller")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Controller")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("validate"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Index")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Controller")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("index")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$validate")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'xiaoyu'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'email'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'xiaoyu@xiaoyulive.top'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'password'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("123456")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'mobile'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("18388019780")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),a("span",{attrs:{class:"token variable"}},[s._v("$validate")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("check")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$validate")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("getError")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'验证成功'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("可以看到，首先需要 new 一个自定义验证器，通过验证器的 "),a("code",[s._v("check")]),s._v(" 方法验证数据，如果验证失败使用 "),a("code",[s._v("getError")]),s._v(" 获取错误信息。")]),s._v(" "),a("p",[s._v("也可使用助手函数 validate()，比如")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("if")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token operator"}},[s._v("!")]),a("span",{attrs:{class:"token function"}},[s._v("validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'User'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("check")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$_GET")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'User'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("getError")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("或者 Loader:")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$validate")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Loader"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'User'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"验证格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证格式","aria-hidden":"true"}},[s._v("#")]),s._v(" 验证格式")]),s._v(" "),a("p",[s._v("验证器可以是一个数组，也可以使用字符串，比如:")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$rule")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'require'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'min'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'max'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("20")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'age'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'between'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'0, 120'")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("使用字符串可以写为 :")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$rule")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'require|min:5|max:20'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'age'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'between:0,120'")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("每个验证规则之间使用 "),a("code",[s._v("|")]),s._v(" 分割。")])])},[],!1,null,null,null);r.options.__file="README.md";t.default=r.exports}}]);