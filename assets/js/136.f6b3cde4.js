(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{618:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"读取配置"}},[s._v("读取配置")]),s._v(" "),n("p",[s._v("读取配置的几种方法:")]),s._v(" "),n("p",[s._v("方法一: 使用完整命名空间")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("\\"),n("span",{attrs:{class:"token package"}},[s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Config")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'配置名'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("方法二: 使用助手函数")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("config")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'配置名'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("两种方式都可直接获取指定名称的配置项，"),n("strong",[s._v("如果不带配置名参数，则获取所有配置")]),s._v("，读取二级配置需要使用 "),n("code",[s._v(".")]),s._v(" 分割。")]),s._v(" "),n("p",[s._v("ThinkPHP5.1 的配置参数全部采用二级配置的方式（默认一级配置为app），所以当你使用 "),n("code",[s._v("config('name')")]),s._v(" 的时候其实相当于使用 "),n("code",[s._v("config('app.name')")])]),s._v(" "),n("p",[s._v("如")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("\\"),n("span",{attrs:{class:"token package"}},[s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Config")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'default_return_type'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\\"),n("span",{attrs:{class:"token package"}},[s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Config")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'database.type'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 或使用 助手函数")]),s._v("\n\n"),n("span",{attrs:{class:"token function"}},[s._v("config")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'default_return_type'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("config")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'database.type'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"读取某个一级配置的所有配置参数"}},[s._v("读取某个一级配置的所有配置参数")]),s._v(" "),n("p",[s._v("读取某个一级配置的所有配置参数，可以使用以下几种方法:")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("Config"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("pull")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'app'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\n\nConfig"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'app.'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 或者")]),s._v("\n\n"),n("span",{attrs:{class:"token function"}},[s._v("config")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'app.'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"判断某个配置项是否存在"}},[s._v("判断某个配置项是否存在")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("\\"),n("span",{attrs:{class:"token package"}},[s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Config")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("has")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'配置名'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"打印配置列表"}},[s._v("打印配置列表")]),s._v(" "),n("p",[s._v("方法一: 使用完整命名空间")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),n("span",{attrs:{class:"token package"}},[s._v("app"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("controller")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("Index")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" index "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token variable"}},[s._v("$res")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" \\"),n("span",{attrs:{class:"token package"}},[s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Config")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{attrs:{class:"token function"}},[s._v("dump")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token variable"}},[s._v("$res")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("方法二: 使用 use 加载命名空间")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),n("span",{attrs:{class:"token package"}},[s._v("app"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("controller")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),n("span",{attrs:{class:"token package"}},[n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Config")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("Index")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" index "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token variable"}},[s._v("$res")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Config"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{attrs:{class:"token function"}},[s._v("dump")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token variable"}},[s._v("$res")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}],!1,null,null,null);t.default=e.exports}}]);