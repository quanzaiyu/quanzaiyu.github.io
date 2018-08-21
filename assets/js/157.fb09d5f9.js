(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{650:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"url-传值"}},[s._v("URL 传值")]),s._v(" "),t("p",[s._v("在上述方法中，可以看到 "),t("code",[s._v("getName")]),s._v(" 方法接受一个 "),t("code",[s._v("$name")]),s._v(" 参数，如果要传入参数，则在 URL 中指定，格式为:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://host/index.php/模块/控制器/操作/key/value\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("比如上面的例子可以这样传值:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/index.php/index/Demo/getName/name/Quan\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以看到输出 "),t("code",[s._v("Hello Quan")]),s._v("。")]),s._v(" "),t("p",[s._v("对应关系如下:")]),s._v(" "),t("figure",[t("img",{attrs:{src:"http://img.xiaoyulive.top/img/shortcut/012.png",alt:""}})]),s._v(" "),t("p",[s._v("不过，URL 传值只能传递字符串、数值，使用 GET 方式来传值到类中方法。")]),s._v(" "),t("p",[s._v("PATH_INFO 也支持查询字符串传值:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/index.php/index/Demo/getName?name=5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("传统 MVC 兼容模式传参格式为:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/?s=index/Demo/getName&name=5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"多个参数传递"}},[s._v("多个参数传递")]),s._v(" "),t("p",[s._v("比如刚才控制器中方法包含多个参数:")]),s._v(" "),t("p",[t("code",[s._v("application/index/controller/Demo.php")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token php language-php"}},[t("span",{attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),t("span",{attrs:{class:"token package"}},[s._v("app"),t("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),t("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("controller")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{attrs:{class:"token class-name"}},[s._v("Demo")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" say "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$name")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'My name is  '")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("', I am '")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token variable"}},[s._v("$age")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'years old.'")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("此时，传递的格式为:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://host/index.php/模块/控制器/操作/key1/value1/key2/value2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("比如:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/index.php/index/Demo/say/name/Quan/age/18\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("也可以颠倒顺序，但必须是 key-value 配对")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/index.php/index/Demo/say/age/18/name/Quan\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("PATH_INFO 查询字符串传值的写法:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/index.php/index/Demo/say?name=5&age=18\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("传统 MVC 兼容模式传参格式为:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("http://www.my-tp5.com/?s=index/Demo/say&name=5&age=18\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"配置传参规则"}},[s._v("配置传参规则")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("config/app.php")]),s._v(" 配置文件中，可以看到那么一个配置:")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("// URL参数方式 0 按名称成对解析 1 按顺序解析")]),s._v("\n"),t("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'url_param_type'")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("0")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里，默认为 0，按照 key-value 的方式解析路由，如果是 1，则按照顺序解析，如上面的路径必须写为:")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[s._v("http"),t("span",{attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{attrs:{class:"token comment"}},[s._v("//www.my-tp5.com/index.php/index/Demo/say/Quan/18")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}],!1,null,null,null);a.default=n.exports}}]);