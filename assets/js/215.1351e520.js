(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{469:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"全局对象-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局对象-process","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局对象 process")]),t._v(" "),a("p",[t._v("::: success\nprocess 是一个全局对象，即 global 对象的下的一个属性。用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。通常在你写本地命令行程序的时候，少不了要 和它打交道。\n:::")]),t._v(" "),a("h2",{attrs:{id:"常用属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用属性和方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用属性和方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前Node版本")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("platform "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 系统平台")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 系统架构")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前目录")]),t._v("\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chdir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/tmp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 切换目录")]),t._v("\n")])])]),a("h2",{attrs:{id:"process-nexttick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-nexttick","aria-hidden":"true"}},[t._v("#")]),t._v(" process.nextTick()")]),t._v(" "),a("p",[t._v("process.nextTick()将在下一轮事件循环中调用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick callback!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nextTick was set!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("运行结果为:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nextTick was set!\nnextTick callback!\n")])])]),a("h2",{attrs:{id:"process-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-事件","aria-hidden":"true"}},[t._v("#")]),t._v(" Process 事件")]),t._v(" "),a("p",[t._v("process 对象是EventEmitter的实例.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("事件")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("exit")]),t._v(" "),a("td",[t._v("当进程准备退出时触发。")])]),t._v(" "),a("tr",[a("td",[t._v("beforeExit")]),t._v(" "),a("td",[t._v("当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。")])]),t._v(" "),a("tr",[a("td",[t._v("uncaughtException")]),t._v(" "),a("td",[t._v("当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。")])]),t._v(" "),a("tr",[a("td",[t._v("Signal")]),t._v(" "),a("td",[t._v("当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。")])])])]),t._v(" "),a("h3",{attrs:{id:"event-exit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-exit","aria-hidden":"true"}},[t._v("#")]),t._v(" Event: exit")]),t._v(" "),a("p",[t._v("两种情况下 "),a("code",[t._v("exit")]),t._v(" 事件会被触发：")]),t._v(" "),a("ul",[a("li",[t._v("显式调用process.exit()方法，使得Node.js进程即将结束；")]),t._v(" "),a("li",[t._v("Node.js事件循环数组中不再有额外的工作，使得Node.js进程即将结束。")])]),t._v(" "),a("p",[t._v("在上述两种情况下，没有任何方法可以阻止事件循环的结束，一旦所有与"),a("code",[t._v("exit")]),t._v("事件绑定的监听器执行完成，Node.js的进程会终止。")]),t._v(" "),a("p",[t._v("::: tip\n"),a("code",[t._v("exit")]),t._v("事件监听器的回调函数，只有一个入参，这个参数的值可以是process.exitCode的属性值，或者是调用process.exit()方法时传入的exitCode值。\n:::")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'退出码为:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"程序执行结束"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("运行结果为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("程序执行结束\n退出码为: 0\n")])])]),a("p",[t._v("::: tip\n"),a("code",[t._v("exit")]),t._v("事件监听器的回调函数，只允许包含同步操作。所有监听器的回调函数被调用后，任何在事件循环数组中排队的工作都会被强制丢弃，然后Nodje.js进程会立即结束。 例如在下例中，timeout操作永远不会被执行(因为不是同步操作)。\n:::")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以下代码永远不会执行")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"该代码不会执行"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"手动指定退出码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动指定退出码","aria-hidden":"true"}},[t._v("#")]),t._v(" 手动指定退出码")]),t._v(" "),a("p",[t._v("可以使用 "),a("code",[t._v("process.exit(code)")]),t._v(" 手动结束进程，并指定退出码。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'退出码为:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"程序执行结束1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行")]),t._v("\n\nprocess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 手动指定退出码")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"程序执行结束2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不执行")]),t._v("\n")])])]),a("p",[t._v("执行结果为")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("程序执行结束1\n退出码为: 100\n")])])]),a("p",[t._v("可以看到，手动指定进程结束后，后面的代码将不执行。")]),t._v(" "),a("h3",{attrs:{id:"退出状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出状态码","aria-hidden":"true"}},[t._v("#")]),t._v(" 退出状态码")]),t._v(" "),a("p",[t._v("退出状态码如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",[t._v("名称 & 描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("0")]),t._v(" "),a("td",[t._v("默认退出码，正常退出")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[a("strong",[t._v("Uncaught Fatal Exception")]),t._v("有未捕获异常，并且没有被域或 uncaughtException 处理函数处理。")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[a("strong",[t._v("Unused")]),t._v("保留")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[a("strong",[t._v("Internal JavaScript Parse Error")]),t._v("JavaScript的源码启动 Node 进程时引起解析错误。非常罕见，仅会在开发 Node 时才会有。")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[a("strong",[t._v("Internal JavaScript Evaluation Failure")]),t._v("JavaScript 的源码启动 Node 进程，评估时返回函数失败。非常罕见，仅会在开发 Node 时才会有。")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[a("strong",[t._v("Fatal Error")]),t._v("V8 里致命的不可恢复的错误。通常会打印到 stderr ，内容为： FATAL ERROR")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[a("strong",[t._v("Non-function Internal Exception Handler")]),t._v("未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用。")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[a("strong",[t._v("Internal Exception Handler Run-Time Failure")]),t._v("未捕获的异常， 并且异常处理函数处理时自己抛出了异常。例如，如果 process.on('uncaughtException') 或 domain.on('error') 抛出了异常。")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[a("strong",[t._v("Unused")]),t._v("保留")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[a("strong",[t._v("Invalid Argument")]),t._v("可能是给了未知的参数，或者给的参数没有值。")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[a("strong",[t._v("Internal JavaScript Run-Time Failure")]),t._v("JavaScript的源码启动 Node 进程时抛出错误，非常罕见，仅会在开发 Node 时才会有。")])]),t._v(" "),a("tr",[a("td",[t._v("12")]),t._v(" "),a("td",[a("strong",[t._v("Invalid Debug Argument")]),t._v(" 设置了参数--debug 和/或 --debug-brk，但是选择了错误端口。")])]),t._v(" "),a("tr",[a("td",[t._v("128")]),t._v(" "),a("td",[a("strong",[t._v("Signal Exits")]),t._v("如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。")])])])]),t._v(" "),a("h2",{attrs:{id:"接收命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收命令行参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 接收命令行参数")]),t._v(" "),a("p",[a("code",[t._v("process.argv")]),t._v(" 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数。第一个元素为process.execPath。如果需要获取argv[0]的值请参见 process.argv0。第二个元素为当前执行的JavaScript文件路径。剩余的元素为其他命令行参数。")]),t._v(" "),a("p",[t._v("如")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(": ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用自定义参数运行脚本:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ node test name qzy\n0: C:\\Program Files\\nodejs\\node.exe\n1: D:\\projects\\node-test\\test\n2: name\n3: qzy\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);