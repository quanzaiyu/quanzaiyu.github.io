(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{654:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"参考手册-命令行工具的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考手册-命令行工具的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考手册: 命令行工具的使用")]),t._v(" "),s("p",[t._v("ThinkPHP5.0支持Console应用，使用如下命令输出支持的命令:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think\n")])])]),s("p",[t._v("子命令的调用规则为")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think 指令 参数\n")])])]),s("h2",{attrs:{id:"系统命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 系统命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("指令")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("build")]),t._v(" "),s("td",[t._v("自动生成目录和文件")])]),t._v(" "),s("tr",[s("td",[t._v("help")]),t._v(" "),s("td",[t._v("帮助")])]),t._v(" "),s("tr",[s("td",[t._v("list")]),t._v(" "),s("td",[t._v("指令列表")])]),t._v(" "),s("tr",[s("td",[t._v("clear")]),t._v(" "),s("td",[t._v("清除缓存指令")])]),t._v(" "),s("tr",[s("td",[t._v("make:controller")]),t._v(" "),s("td",[t._v("创建控制器文件")])]),t._v(" "),s("tr",[s("td",[t._v("make:model")]),t._v(" "),s("td",[t._v("创建模型文件")])]),t._v(" "),s("tr",[s("td",[t._v("optimize:autoload")]),t._v(" "),s("td",[t._v("生成类库映射文件")])]),t._v(" "),s("tr",[s("td",[t._v("optimize:config")]),t._v(" "),s("td",[t._v("生成配置缓存文件")])]),t._v(" "),s("tr",[s("td",[t._v("optimize:route")]),t._v(" "),s("td",[t._v("生成路由缓存文件")])]),t._v(" "),s("tr",[s("td",[t._v("optimize:schema")]),t._v(" "),s("td",[t._v("生成数据表字段缓存文件")])])])]),t._v(" "),s("p",[t._v("除此之外，还可以自己扩展指令。")]),t._v(" "),s("h2",{attrs:{id:"生成模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成模块")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("php think build --module 模块")]),t._v(" 即可生成指定的模块")]),t._v(" "),s("p",[t._v("比如")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think build --module test\n")])])]),s("p",[t._v("这样会生成一个 test 模块，并且生成必要的目录结构")]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[t._v("test\n  "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" controller # 控制器目录\n"),s("span",{pre:!0,attrs:{class:"token code keyword"}},[t._v("    - index.php")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" model # 模型目录\n  "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" view # 视图目录\n  "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" common.php # 公共文件\n  "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" config.php # 配置文件\n")])])]),s("h2",{attrs:{id:"生成控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成控制器")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("php think make:controller 控制器")]),t._v(" 默认可生成指定的"),s("strong",[t._v("资源控制器")])]),t._v(" "),s("p",[t._v("可以使用 "),s("code",[t._v("模块/控制器")]),t._v(" 生成:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think make:controller index/Blog\n")])])]),s("p",[t._v("也可以使用完整的 "),s("code",[t._v("命名空间")]),t._v(" 生成:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think make:controller app\\index\\controller\\Blog\n")])])]),s("p",[t._v("生成的控制器包括 index、create、save、read、edit、update、delete 这几个方法。")]),t._v(" "),s("p",[t._v("如果不想生成资源控制器，仅仅生成一个"),s("strong",[t._v("空白控制器")]),t._v("，则可使用:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think make:controller index\\Blog --plain\n")])])]),s("h2",{attrs:{id:"生成模型类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成模型类","aria-hidden":"true"}},[t._v("#")]),t._v(" 生成模型类")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("php think make:model 模型")]),t._v(" 即可生成指定的资源控制器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think make:model index/Blog\n")])])]),s("h2",{attrs:{id:"清除缓存文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除缓存文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 清除缓存文件")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("php think clear")]),t._v(" 即可清除 runtime 目录下的缓存文件。")]),t._v(" "),s("p",[t._v("也可指定要清除的目录:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think clear --path d:\\www\\tp5\\runtime\\log\\\n")])])]),s("h2",{attrs:{id:"创建自定义命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建自定义命令行","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建自定义命令行")]),t._v(" "),s("p",[t._v("第一步，配置command.php文件，目录在application/command.php")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app\\home\\command\\Test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("第二步，建立命令类文件，新建application/home/command/Test.php")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("home"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("think"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Here is the remark '")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Input "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Output "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeln")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"TestCommand:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这个文件定义了一个叫test的命令，备注为Here is the remark，执行命令会输出TestCommand。")]),t._v(" "),s("p",[t._v("第三步，测试-命令帮助-命令行下运行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think\n")])])]),s("p",[t._v("输出")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Think Console version 0.1\n\nUsage:\n  command [options] [arguments]\n\nOptions:\n  -h, --help            Display this help message\n  -V, --version         Display this console version\n  -q, --quiet           Do not output any message\n      --ansi            Force ANSI output\n      --no-ansi         Disable ANSI output\n  -n, --no-interaction  Do not ask any interactive question\n  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug\n\nAvailable commands:\n  build              Build Application Dirs\n  clear              Clear runtime file\n  help               Displays help for a command\n  list               Lists commands\n  test               Here is the remark \nmake\n  make:controller    Create a new resource controller class\n  make:model         Create a new model class\noptimize\n  optimize:autoload  Optimizes PSR0 and PSR4 packages to be loaded with classmaps too, good for production.\n  optimize:config    Build config and common file cache.\n  optimize:route     Build route cache.\n  optimize:schema    Build database schema cache.\n")])])]),s("p",[t._v("第四步，运行test命令")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("php think test\n")])])]),s("p",[t._v("输出")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("TestCommand:\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);