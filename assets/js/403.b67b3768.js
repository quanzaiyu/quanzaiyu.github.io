(window.webpackJsonp=window.webpackJsonp||[]).push([[403],{645:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"静态代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 静态代理")]),t._v(" "),s("p",[t._v("在 tp5.1，引入了 Facade 类，又叫门面类，如果想静态访问一个类中的动态方法，可以给这个类套一层静态马甲，实现静态访问，核心文件位于 "),s("code",[t._v("thinkphp/library/think/Facade.php")]),t._v(" 。")]),t._v(" "),s("p",[t._v("系统的 "),s("code",[t._v("facade")]),t._v(" 类位于 "),s("code",[t._v("thinkphp/library/think/facade")]),t._v(" 中，系统封装的 facade 位于 "),s("code",[t._v("thinkphp/base.php")]),t._v(" 文件中。")]),t._v(" "),s("p",[t._v("如果想静态调用一个动态方法，需要给当前的类绑定一个静态代理类。")]),t._v(" "),s("p",[t._v("例子同依赖注入中的Demo类，修改 Demo 类  :")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("common")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" sayHello "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'qzy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("创建一个 facade 管理目录 "),s("code",[t._v("application/facade")]),t._v(" ，新建一个文件 "),s("code",[t._v("Demo.php")]),t._v(" :")]),t._v(" "),s("p",[s("code",[t._v("application/facade/Demo.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("facade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facade")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFacadeClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app\\common\\Demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这个文件中，继承了 Facade 类，通过重写父类方法 getFacadeClass() 进行代理，返回的是需要代理的类名。")]),t._v(" "),s("p",[t._v("在 index 控制器中加入方法 :")]),t._v(" "),s("p",[s("code",[t._v("application/index/Index.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" getMethodAsStatic "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("facade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'xiaoyu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此时，访问 "),s("code",[t._v("http://www.my-tp5.com/index.php/index/index/getMethodAsStatic")]),t._v(" 可以看到结果。")]),t._v(" "),s("h2",{attrs:{id:"动态绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态绑定","aria-hidden":"true"}},[t._v("#")]),t._v(" 动态绑定")]),t._v(" "),s("p",[t._v("如果没有在静态代理类中显式指定要绑定的类名，就需要动态绑定。")]),t._v(" "),s("p",[t._v("首先，将 Facade 封装代码留空")]),t._v(" "),s("p",[s("code",[t._v("application/facade/Demo.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("facade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facade")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("而在需要使用的时候动态绑定:")]),t._v(" "),s("p",[t._v("在 index 控制器中加入方法:")]),t._v(" "),s("p",[s("code",[t._v("application/index/Index.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" getMethodAsStatic "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Facade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app\\facade\\Demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app\\common\\Demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("facade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Demo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'xiaoyu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"核心facade类库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心facade类库","aria-hidden":"true"}},[t._v("#")]),t._v(" 核心Facade类库")]),t._v(" "),s("p",[t._v("ThinkPHP5.1 系统给内置的常用类库定义了"),s("code",[t._v("Facade")]),t._v("类库，包括：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("（动态）类库")]),t._v(" "),s("th",[t._v("Facade类")]),t._v(" "),s("th",[t._v("别名类")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("think\\App")]),t._v(" "),s("td",[t._v("think\\facade\\App")]),t._v(" "),s("td",[t._v("App")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Build")]),t._v(" "),s("td",[t._v("think\\facade\\Build")]),t._v(" "),s("td",[t._v("Build")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Cache")]),t._v(" "),s("td",[t._v("think\\facade\\Cache")]),t._v(" "),s("td",[t._v("Cache")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Config")]),t._v(" "),s("td",[t._v("think\\facade\\Config")]),t._v(" "),s("td",[t._v("Config")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Cookie")]),t._v(" "),s("td",[t._v("think\\facade\\Cookie")]),t._v(" "),s("td",[t._v("Cookie")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Db")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Db")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Debug")]),t._v(" "),s("td",[t._v("think\\facade\\Debug")]),t._v(" "),s("td",[t._v("Debug")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Env")]),t._v(" "),s("td",[t._v("think\\facade\\Env")]),t._v(" "),s("td",[t._v("Env")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Hook")]),t._v(" "),s("td",[t._v("think\\facade\\Hook")]),t._v(" "),s("td",[t._v("Hook")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Lang")]),t._v(" "),s("td",[t._v("think\\facade\\Lang")]),t._v(" "),s("td",[t._v("Lang")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Log")]),t._v(" "),s("td",[t._v("think\\facade\\Log")]),t._v(" "),s("td",[t._v("Log")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Request")]),t._v(" "),s("td",[t._v("think\\facade\\Request")]),t._v(" "),s("td",[t._v("Request")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Response")]),t._v(" "),s("td",[t._v("think\\facade\\Response")]),t._v(" "),s("td",[t._v("Response")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Route")]),t._v(" "),s("td",[t._v("think\\facade\\Route")]),t._v(" "),s("td",[t._v("Route")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Session")]),t._v(" "),s("td",[t._v("think\\facade\\Session")]),t._v(" "),s("td",[t._v("Session")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Url")]),t._v(" "),s("td",[t._v("think\\facade\\Url")]),t._v(" "),s("td",[t._v("Url")])]),t._v(" "),s("tr",[s("td",[t._v("think\\Validate")]),t._v(" "),s("td",[t._v("think\\facade\\Validate")]),t._v(" "),s("td",[t._v("Validate")])]),t._v(" "),s("tr",[s("td",[t._v("think\\View")]),t._v(" "),s("td",[t._v("think\\facade\\View")]),t._v(" "),s("td",[t._v("View")])])])]),t._v(" "),s("p",[t._v("比如:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("facade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" Cache"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("为了简化操作，系统提供这些类库的简化调用, 比如:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);