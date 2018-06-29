(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{629:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"模型定义与设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型定义与设置","aria-hidden":"true"}},[s._v("$")]),s._v(" 模型定义与设置")]),a("h2",{attrs:{id:"模型定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型定义","aria-hidden":"true"}},[s._v("$")]),s._v(" 模型定义")]),a("p",[s._v("在 TP 中，模型文件放置于 "),a("code",[s._v("模块/model")]),s._v(" 目录下，一个模型对应一张数据表。")]),a("p",[s._v("比如 数据库中有一个表名叫 "),a("code",[s._v("user")]),s._v("，那么只需要建立一张"),a("strong",[s._v("与此表名同名的模型")]),s._v("即可:")]),a("p",[s._v("基本结构:")]),a("p",[a("code",[s._v("application/index/model/User.php")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Model")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"模型参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型参数","aria-hidden":"true"}},[s._v("$")]),s._v(" 模型参数")]),a("p",[s._v("在模型中，可以自定义模型的各项参数。")]),a("table",[a("thead",[a("tr",[a("th",[s._v("属性")]),a("th",[s._v("描述")])])]),a("tbody",[a("tr",[a("td",[s._v("name")]),a("td",[s._v("模型名（默认为当前不含后缀的模型类名）")])]),a("tr",[a("td",[s._v("table")]),a("td",[s._v("数据表名（默认自动获取）")])]),a("tr",[a("td",[s._v("pk")]),a("td",[s._v("主键名（默认为"),a("code",[s._v("id")]),s._v("）")])]),a("tr",[a("td",[s._v("connection")]),a("td",[s._v("数据库连接（默认读取数据库配置）")])]),a("tr",[a("td",[s._v("query")]),a("td",[s._v("模型使用的查询类名称")])]),a("tr",[a("td",[s._v("field")]),a("td",[s._v("模型对应数据表的字段列表（数组）")])])])]),a("h3",{attrs:{id:"模型名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型名","aria-hidden":"true"}},[s._v("$")]),s._v(" 模型名")]),a("p",[s._v("模型名默认自动获取，为模型类名。")]),a("p",[s._v("如果指定，则连接到数据库中同名的 "),a("code",[s._v("数据库表名前缀+指定的模型名")]),s._v(" 数据表，比如:")]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Model")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("model")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("虽然模型类名为 User，但指定了模型名为 test，则连接到数据库中 "),a("code",[s._v("数据库表名前缀+test")]),s._v("，比如配置文件中指定数据库前缀: "),a("code",[s._v("'prefix' => 'api_'")]),s._v("，则连接到数据库中 "),a("code",[s._v("api_test")]),s._v(" 表。")]),a("h3",{attrs:{id:"数据表名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据表名","aria-hidden":"true"}},[s._v("$")]),s._v(" 数据表名")]),a("p",[s._v("数据表名默认自动获取，为 "),a("code",[s._v("数据库表名前缀+模型类名")]),s._v(" 数据表名可以指定为跟模型名不同。")]),a("p",[s._v("若同时指定了模型名跟数据表名，则使用数据表名指定的数据表，需要指定不带前缀的数据表名，比如:")]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Model")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("User")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("model")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$name")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$table")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'api_user'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("上述例子，同时指定了 name 和 table，则连接到数据表 "),a("code",[s._v("api_user")]),s._v("。")]),a("h3",{attrs:{id:"主键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主键","aria-hidden":"true"}},[s._v("$")]),s._v(" 主键")]),a("p",[s._v("默认主键为 id，如果表中没有使用 id 作为主键名，需要在模型中设置属性")]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),a("p",[s._v("5.1中模型不会自动获取主键名称，必须设置pk属性。")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$pk")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'uid'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"数据库连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库连接","aria-hidden":"true"}},[s._v("$")]),s._v(" 数据库连接")]),a("p",[s._v("甚至可以改变数据库连接，配置一个数组，更改整个数据库的连接")]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$connection")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'type'")]),s._v("        "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'mysql'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'hostname'")]),s._v("    "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'127.0.0.1'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'database'")]),s._v("    "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'username'")]),s._v("    "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'root'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'password'")]),s._v("    "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("''")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'charset'")]),s._v("     "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'utf8'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'prefix'")]),s._v("      "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'api_'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"模型操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模型操作","aria-hidden":"true"}},[s._v("$")]),s._v(" 模型操作")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),a("p",[s._v("在模型中除了可以调用数据库类的方法之外，也可以定义自己的方法，所以也可以把模型看成是数据库的增强版。")])]),a("p",[a("strong",[s._v("使用数据库操作")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 注意: 使用 name 指定的数据表不需要带表前缀，使用 table 指定的数据表需要使用完整的表名")]),s._v("\n\\"),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Db")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("name")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("where")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("select")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\\"),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Db")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("table")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'api_user'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("where")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("select")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("使用模型的静态操作")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 假设模型的命名空间为 \\app\\index\\model，模型类名为 User")]),s._v("\n\\"),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("index"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("model"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("where")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("select")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("创建模型的实例进行操作")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$db")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("test"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("model"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("User")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$db")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("where")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("select")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("使用 Loader 类实例化（单例）")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 会查找同一模块下的同名模型")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Loader"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{attrs:{class:"token function"}},[s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'User'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$user")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("where")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("select")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("使用助手函数")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 会查找同一模块下的同名模型")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'User'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("where")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'id'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'<'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("10")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("select")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("助手函数同样可以实例化模型对象:")]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("model")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("'User"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);