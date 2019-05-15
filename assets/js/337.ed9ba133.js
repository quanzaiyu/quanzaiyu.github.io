(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{611:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"验证器-验证规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证器-验证规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证器: 验证规则")]),t._v(" "),a("p",[t._v("ThinkPHP 系统内置多种验证规则，常见的有以下几种:")]),t._v(" "),a("p",[t._v("必填")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("require")]),t._v("，验证某个字段必须")])]),t._v(" "),a("p",[t._v("基础格式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("number")]),t._v("，验证某个字段必须为数值")]),t._v(" "),a("li",[a("strong",[t._v("alpha")]),t._v("，验证某个字段的值是否为字母")]),t._v(" "),a("li",[a("strong",[t._v("alphaNum")]),t._v("，验证某个字段的值是否为字母和数字")]),t._v(" "),a("li",[a("strong",[t._v("alphaDash")]),t._v("，验证某个字段的值是否为字母和数字，下划线 "),a("code",[t._v("_")]),t._v(" 及破折号 "),a("code",[t._v("-")])]),t._v(" "),a("li",[a("strong",[t._v("chs")]),t._v("，验证某个字段的值只能是汉字")]),t._v(" "),a("li",[a("strong",[t._v("chsAlpha")]),t._v("，验证某个字段的值只能是汉字、字母")]),t._v(" "),a("li",[a("strong",[t._v("chsAlphaNum")]),t._v("，验证某个字段的值只能是汉字、字母和数字")])]),t._v(" "),a("p",[t._v("复合格式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("email")]),t._v("，验证某个字段必须为邮箱")]),t._v(" "),a("li",[a("strong",[t._v("url")]),t._v("，验证某个字段的值是否为有效的URL地址")]),t._v(" "),a("li",[a("strong",[t._v("ip")]),t._v("，验证某个字段的值是否为有效的IP地址")]),t._v(" "),a("li",[a("strong",[t._v("mobile")]),t._v("，验证某个字段的值是否为有效的手机")]),t._v(" "),a("li",[a("strong",[t._v("idCard")]),t._v("，验证某个字段的值是否为有效的身份证格式")]),t._v(" "),a("li",[a("strong",[t._v("zip")]),t._v("，验证某个字段的值是否为有效的邮政编码")])]),t._v(" "),a("p",[t._v("长度和区间")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("between: a,b")]),t._v("，验证某个字段的值是否在某个区间")]),t._v(" "),a("li",[a("strong",[t._v("notBetween: a, b")]),t._v("，验证某个字段的值不在某个范围")]),t._v(" "),a("li",[a("strong",[t._v("length: a, b")]),t._v("，验证某个字段的值的长度是否在某个范围")]),t._v(" "),a("li",[a("strong",[t._v("in: a, b, c, ...")]),t._v("，验证某个字段的值是否在某个范围")]),t._v(" "),a("li",[a("strong",[t._v("notIn: a, b, c, ...")]),t._v("，验证某个字段的值不在某个范围")]),t._v(" "),a("li",[a("strong",[t._v("max:number")]),t._v("，验证某个字段的值的最大长度")]),t._v(" "),a("li",[a("strong",[t._v("min:number")]),t._v("，验证某个字段的值的最小长度")])]),t._v(" "),a("p",[t._v("字段比较")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("confirm")]),t._v(" 验证某个字段是否和另外一个字段的值一致")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'password|密码' => 'confirm'\n")])])]),a("p",[t._v("自动与 "),a("code",[t._v("password_confirm")]),t._v(" 字段进行自动校验。")]),t._v(" "),a("p",[t._v("也可以指定要比较的字段 :")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'repassword'=>'confirm:password'\n")])])]),a("ul",[a("li",[a("strong",[t._v("different")]),t._v(" 验证某个字段是否和另外一个字段的值不一致")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'name'=>'different:account'\n")])])]),a("ul",[a("li",[a("strong",[t._v("eq")]),t._v(" 或者 "),a("strong",[t._v("=")]),t._v(" 或者 "),a("strong",[t._v("same")]),t._v("，验证是否等于某个值")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'score'=>'eq:100'\n'num'=>'=:100'\n'num'=>'same:100'\n")])])]),a("ul",[a("li",[a("strong",[t._v("egt")]),t._v(" 或者 "),a("strong",[t._v(">=")]),t._v("，验证是否大于等于某个值")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'score'=>'egt:60'\n'num'=>'>=:100'\n")])])]),a("ul",[a("li",[a("strong",[t._v("gt")]),t._v(" 或者 "),a("strong",[t._v(">")]),t._v("，验证是否大于某个值")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'score'=>'gt:60'\n'num'=>'>:100'\n")])])]),a("ul",[a("li",[a("strong",[t._v("elt")]),t._v(" 或者 "),a("strong",[t._v("<=")]),t._v("，验证是否小于等于某个值")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'score'=>'elt:100'\n'num'=>'<=:100'\n")])])]),a("ul",[a("li",[a("strong",[t._v("lt")]),t._v(" 或者 "),a("strong",[t._v("<")]),t._v("，验证是否小于某个值")])]),t._v(" "),a("p",[t._v("比如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'score'=>'lt:100'\n'num'=>'<:100'\n")])])]),a("ul",[a("li",[t._v("字段比较")])]),t._v(" "),a("p",[t._v("可以验证对比其他字段大小（数值大小对比），例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'price'=>'lt:market_price'\n'price'=>'<:market_price'\n")])])]),a("h2",{attrs:{id:"正则验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则验证")]),t._v(" "),a("p",[t._v("支持直接使用正则验证，例如：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'zip'=>'\\d{6}',\n// 或者\n'zip'=>'regex:\\d{6}',\n")])])]),a("p",[t._v("如果正则表达式中包含有 "),a("code",[t._v("|")]),t._v(" 符号的话，必须使用数组方式定义。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("'accepted'=>['regex'=>'/^(yes|on|1)$/i'],\n")])])]),a("p",[t._v("也可以实现预定义正则表达式后直接调用，例如在验证器类中定义regex属性")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("think"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Validate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Validate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$regex")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'zip'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'\\d{6}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$rule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'zip'")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'regex:zip'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"静态调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态调用")]),t._v(" "),a("p",[t._v("如果需要使用内置的规则验证单个数据，可以使用静态调用的方式。")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 日期格式验证")]),t._v("\nValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2016-03-09'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Y-m-d'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证是否有效的日期")]),t._v("\nValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2016-06-03'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证是否有效邮箱地址")]),t._v("\nValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'thinkphp@qq.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证是否在某个范围")]),t._v("\nValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("in")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 验证是否大于某个值")]),t._v("\nValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正则验证")]),t._v("\nValidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("regex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'\\d+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);