(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{686:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"thinkphp-命令行工具的使用"}},[s._v("ThinkPHP 命令行工具的使用")]),s._v(" "),a("p",[s._v("ThinkPHP5.0支持Console应用，使用如下命令输出支持的命令:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("子命令的调用规则为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think 指令 参数\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"系统命令"}},[s._v("系统命令")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("指令")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("build")]),s._v(" "),a("td",[s._v("自动生成目录和文件")])]),s._v(" "),a("tr",[a("td",[s._v("help")]),s._v(" "),a("td",[s._v("帮助")])]),s._v(" "),a("tr",[a("td",[s._v("list")]),s._v(" "),a("td",[s._v("指令列表")])]),s._v(" "),a("tr",[a("td",[s._v("clear")]),s._v(" "),a("td",[s._v("清除缓存指令")])]),s._v(" "),a("tr",[a("td",[s._v("make:controller")]),s._v(" "),a("td",[s._v("创建控制器文件")])]),s._v(" "),a("tr",[a("td",[s._v("make:model")]),s._v(" "),a("td",[s._v("创建模型文件")])]),s._v(" "),a("tr",[a("td",[s._v("optimize:autoload")]),s._v(" "),a("td",[s._v("生成类库映射文件")])]),s._v(" "),a("tr",[a("td",[s._v("optimize:config")]),s._v(" "),a("td",[s._v("生成配置缓存文件")])]),s._v(" "),a("tr",[a("td",[s._v("optimize:route")]),s._v(" "),a("td",[s._v("生成路由缓存文件")])]),s._v(" "),a("tr",[a("td",[s._v("optimize:schema")]),s._v(" "),a("td",[s._v("生成数据表字段缓存文件")])])])]),s._v(" "),a("p",[s._v("除此之外，还可以自己扩展指令。")]),s._v(" "),a("h2",{attrs:{id:"生成模块"}},[s._v("生成模块")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("php think build --module 模块")]),s._v(" 即可生成指定的模块")]),s._v(" "),a("p",[s._v("比如")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think build --module test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样会生成一个 test 模块，并且生成必要的目录结构")]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("test\n  "),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" controller # 控制器目录\n"),a("span",{attrs:{class:"token code keyword"}},[s._v("    - index.php")]),s._v("\n  "),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" model # 模型目录\n  "),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" view # 视图目录\n  "),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" common.php # 公共文件\n  "),a("span",{attrs:{class:"token list punctuation"}},[s._v("-")]),s._v(" config.php # 配置文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"生成控制器"}},[s._v("生成控制器")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("php think make:controller 控制器")]),s._v(" 默认可生成指定的"),a("strong",[s._v("资源控制器")])]),s._v(" "),a("p",[s._v("可以使用 "),a("code",[s._v("模块/控制器")]),s._v(" 生成:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think make:controller index/Blog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以使用完整的 "),a("code",[s._v("命名空间")]),s._v(" 生成:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think make:controller app\\index\\controller\\Blog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("生成的控制器包括 index、create、save、read、edit、update、delete 这几个方法。")]),s._v(" "),a("p",[s._v("如果不想生成资源控制器，仅仅生成一个"),a("strong",[s._v("空白控制器")]),s._v("，则可使用:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think make:controller index\\Blog --plain\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"生成模型类"}},[s._v("生成模型类")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("php think make:model 模型")]),s._v(" 即可生成指定的资源控制器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think make:model index/Blog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"清除缓存文件"}},[s._v("清除缓存文件")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("php think clear")]),s._v(" 即可清除 runtime 目录下的缓存文件。")]),s._v(" "),a("p",[s._v("也可指定要清除的目录:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think clear --path d:\\www\\tp5\\runtime\\log\\\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"创建自定义命令行"}},[s._v("创建自定义命令行")]),s._v(" "),a("p",[s._v("第一步，配置command.php文件，目录在application/command.php")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'app\\home\\command\\Test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("第二步，建立命令类文件，新建application/home/command/Test.php")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("app"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("home"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("command")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("console"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Command")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("console"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Input")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{attrs:{class:"token package"}},[s._v("think"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("console"),a("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Output")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Test")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("Command")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("configure")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$this")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("setName")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'test'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("setDescription")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Here is the remark '")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("execute")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Input "),a("span",{attrs:{class:"token variable"}},[s._v("$input")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Output "),a("span",{attrs:{class:"token variable"}},[s._v("$output")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token variable"}},[s._v("$output")]),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token function"}},[s._v("writeln")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"TestCommand:"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("这个文件定义了一个叫test的命令，备注为Here is the remark，执行命令会输出TestCommand。")]),s._v(" "),a("p",[s._v("第三步，测试-命令帮助-命令行下运行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Think Console version 0.1\n\nUsage:\n  command [options] [arguments]\n\nOptions:\n  -h, --help            Display this help message\n  -V, --version         Display this console version\n  -q, --quiet           Do not output any message\n      --ansi            Force ANSI output\n      --no-ansi         Disable ANSI output\n  -n, --no-interaction  Do not ask any interactive question\n  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug\n\nAvailable commands:\n  build              Build Application Dirs\n  clear              Clear runtime file\n  help               Displays help for a command\n  list               Lists commands\n  test               Here is the remark \nmake\n  make:controller    Create a new resource controller class\n  make:model         Create a new model class\noptimize\n  optimize:autoload  Optimizes PSR0 and PSR4 packages to be loaded with classmaps too, good for production.\n  optimize:config    Build config and common file cache.\n  optimize:route     Build route cache.\n  optimize:schema    Build database schema cache.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("第四步，运行test命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("php think test\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("TestCommand:\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}],!1,null,null,null);t.default=e.exports}}]);