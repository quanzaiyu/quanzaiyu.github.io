(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{927:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"验证规则"}},[s._v("验证规则")]),s._v(" "),a("p",[s._v("ThinkPHP 系统内置多种验证规则，常见的有以下几种 :")]),s._v(" "),a("p",[s._v("必填")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("require")]),s._v("，验证某个字段必须")])]),s._v(" "),a("p",[s._v("基础格式")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("number")]),s._v("，验证某个字段必须为数值")]),s._v(" "),a("li",[a("strong",[s._v("alpha")]),s._v("，验证某个字段的值是否为字母")]),s._v(" "),a("li",[a("strong",[s._v("alphaNum")]),s._v("，验证某个字段的值是否为字母和数字")]),s._v(" "),a("li",[a("strong",[s._v("alphaDash")]),s._v("，验证某个字段的值是否为字母和数字，下划线 "),a("code",[s._v("_")]),s._v(" 及破折号 "),a("code",[s._v("-")])]),s._v(" "),a("li",[a("strong",[s._v("chs")]),s._v("，验证某个字段的值只能是汉字")]),s._v(" "),a("li",[a("strong",[s._v("chsAlpha")]),s._v("，验证某个字段的值只能是汉字、字母")]),s._v(" "),a("li",[a("strong",[s._v("chsAlphaNum")]),s._v("，验证某个字段的值只能是汉字、字母和数字")])]),s._v(" "),a("p",[s._v("复合格式")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("email")]),s._v("，验证某个字段必须为邮箱")]),s._v(" "),a("li",[a("strong",[s._v("url")]),s._v("，验证某个字段的值是否为有效的URL地址")]),s._v(" "),a("li",[a("strong",[s._v("ip")]),s._v("，验证某个字段的值是否为有效的IP地址")]),s._v(" "),a("li",[a("strong",[s._v("mobile")]),s._v("，验证某个字段的值是否为有效的手机")]),s._v(" "),a("li",[a("strong",[s._v("idCard")]),s._v("，验证某个字段的值是否为有效的身份证格式")]),s._v(" "),a("li",[a("strong",[s._v("zip")]),s._v("，验证某个字段的值是否为有效的邮政编码")])]),s._v(" "),a("p",[s._v("长度和区间")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("between: a,b")]),s._v("，验证某个字段的值是否在某个区间")]),s._v(" "),a("li",[a("strong",[s._v("notBetween: a, b")]),s._v("，验证某个字段的值不在某个范围")]),s._v(" "),a("li",[a("strong",[s._v("length: a, b")]),s._v("，验证某个字段的值的长度是否在某个范围")]),s._v(" "),a("li",[a("strong",[s._v("in: a, b, c, ...")]),s._v("，验证某个字段的值是否在某个范围")]),s._v(" "),a("li",[a("strong",[s._v("notIn: a, b, c, ...")]),s._v("，验证某个字段的值不在某个范围")]),s._v(" "),a("li",[a("strong",[s._v("max:number")]),s._v("，验证某个字段的值的最大长度")]),s._v(" "),a("li",[a("strong",[s._v("min:number")]),s._v("，验证某个字段的值的最小长度")])]),s._v(" "),a("p",[s._v("字段比较")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("confirm")]),s._v(" 验证某个字段是否和另外一个字段的值一致")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'password|密码' => 'confirm'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("自动与 "),a("code",[s._v("password_confirm")]),s._v(" 字段进行自动校验。")]),s._v(" "),a("p",[s._v("也可以指定要比较的字段 :")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'repassword'=>'confirm:password'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("different")]),s._v(" 验证某个字段是否和另外一个字段的值不一致")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'name'=>'different:account'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("eq")]),s._v(" 或者 "),a("strong",[s._v("=")]),s._v(" 或者 "),a("strong",[s._v("same")]),s._v("，验证是否等于某个值")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'score'=>'eq:100'\n'num'=>'=:100'\n'num'=>'same:100'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("egt")]),s._v(" 或者 "),a("strong",[s._v(">=")]),s._v("，验证是否大于等于某个值")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'score'=>'egt:60'\n'num'=>'>=:100'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("gt")]),s._v(" 或者 "),a("strong",[s._v(">")]),s._v("，验证是否大于某个值")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'score'=>'gt:60'\n'num'=>'>:100'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("elt")]),s._v(" 或者 "),a("strong",[s._v("<=")]),s._v("，验证是否小于等于某个值")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'score'=>'elt:100'\n'num'=>'<=:100'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("lt")]),s._v(" 或者 "),a("strong",[s._v("<")]),s._v("，验证是否小于某个值")])]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'score'=>'lt:100'\n'num'=>'<:100'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("字段比较")])]),s._v(" "),a("p",[s._v("可以验证对比其他字段大小（数值大小对比），例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'price'=>'lt:market_price'\n'price'=>'<:market_price'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"正则验证"}},[s._v("正则验证")]),s._v(" "),a("p",[s._v("支持直接使用正则验证，例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'zip'=>'\\d{6}',\n// 或者\n'zip'=>'regex:\\d{6}',\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果正则表达式中包含有 "),a("code",[s._v("|")]),s._v(" 符号的话，必须使用数组方式定义。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("'accepted'=>['regex'=>'/^(yes|on|1)$/i'],\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以实现预定义正则表达式后直接调用，例如在验证器类中定义regex属性")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Validate")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Validate")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$regex")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'zip'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'\\d{6}'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$rule")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'zip'")]),s._v("\t"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'regex:zip'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"静态调用"}},[s._v("静态调用")]),s._v(" "),a("p",[s._v("如果需要使用内置的规则验证单个数据，可以使用静态调用的方式。")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 日期格式验证")]),s._v("\nValidate"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("dateFormat")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'2016-03-09'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Y-m-d'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 验证是否有效的日期")]),s._v("\nValidate"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("is")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'2016-06-03'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'date'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 验证是否有效邮箱地址")]),s._v("\nValidate"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("is")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'thinkphp@qq.com'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'email'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 验证是否在某个范围")]),s._v("\nValidate"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("in")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'b'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'c'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 验证是否大于某个值")]),s._v("\nValidate"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("gt")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("8")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 正则验证")]),s._v("\nValidate"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("regex")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("100")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'\\d+'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);