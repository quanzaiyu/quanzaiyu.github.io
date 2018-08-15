(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1164:function(t,s,n){"use strict";n.r(s);var a=n(1),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"php-错误处理"}},[t._v("PHP 错误处理")]),t._v(" "),n("p",[t._v("在 PHP 中，默认的错误处理很简单。一条错误消息会被发送到浏览器，这条消息带有文件名、行号以及描述错误的消息。")]),t._v(" "),n("p",[t._v("官方文档: "),n("a",{attrs:{href:"http://php.net/manual/zh/book.errorfunc.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("错误处理和日志记录"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"错误是什么"}},[t._v("错误是什么?")]),t._v(" "),n("p",[t._v("在创建脚本和 Web 应用程序时，错误处理是一个重要的部分。如果您的代码缺少错误检测编码，那么程序看上去很不专业，也为安全风险敞开了大门。")]),t._v(" "),n("p",[t._v("本教程介绍了 PHP 中一些最为重要的错误检测方法。")]),t._v(" "),n("p",[t._v("我们将为您讲解不同的错误处理方法：")]),t._v(" "),n("p",[t._v('简单的 "die()" 语句\n自定义错误和错误触发器\n错误报告')]),t._v(" "),n("h2",{attrs:{id:"结束脚本"}},[t._v("结束脚本")]),t._v(" "),n("p",[t._v("可以在程序中直接使用 die 或 exit 函数，这是一个基本的错误处理函数，用于直接结束脚本的执行。比如打开文件失败时的处理:")]),t._v(" "),t._m(0),n("p",[t._v("or")]),t._v(" "),t._m(1),n("h2",{attrs:{id:"自定义错误处理器"}},[t._v("自定义错误处理器")]),t._v(" "),n("p",[t._v("创建一个自定义的错误处理器非常简单。我们很简单地创建了一个专用函数，可以在 PHP 中发生错误时调用该函数。\n该函数必须有能力处理至少两个参数 (error level 和 error message)，但是可以接受最多五个参数（可选的：file, line-number 和 error context）：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),n("h3",{attrs:{id:"错误报告级别"}},[t._v("错误报告级别")]),t._v(" "),n("p",[t._v("这些错误报告级别是用户自定义的错误处理程序处理的不同类型的错误：")]),t._v(" "),t._m(5),t._v(" "),n("h3",{attrs:{id:"设置错误处理程序"}},[t._v("设置错误处理程序")]),t._v(" "),n("p",[t._v("PHP 的默认有内建的错误处理程序，我们也可以自定义错误处理函数 :")]),t._v(" "),t._m(6),n("h3",{attrs:{id:"触发错误"}},[t._v("触发错误")]),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("可能的错误类型：")]),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("比如 :")]),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),n("h2",{attrs:{id:"通过-e-mail-发送错误消息"}},[t._v("通过 E-Mail 发送错误消息")]),t._v(" "),t._m(12)])},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("fopen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"welcome.txt"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"r"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("die")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"File not found"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'next'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果打开文件失败，此句话不打印")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token function"}},[t._v("file_exists")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"welcome.txt"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("die")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"File not found"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token variable"}},[t._v("$file")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token function"}},[t._v("fopen")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"welcome.txt"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"r"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'next'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("语法")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("error_function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error_level"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_message"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_file"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_line"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error_context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("error_level")]),t._v("\t必需。为用户定义的错误规定错误报告级别。必须是一个数字。参见下面的表格：错误报告级别。")]),t._v(" "),n("li",[n("strong",[t._v("error_message")]),t._v("\t必需。为用户定义的错误规定错误消息。")]),t._v(" "),n("li",[n("strong",[t._v("error_file")]),t._v("\t可选。规定错误发生的文件名。")]),t._v(" "),n("li",[n("strong",[t._v("error_line")]),t._v("\t可选。规定错误发生的行号。")]),t._v(" "),n("li",[n("strong",[t._v("error_context")]),t._v("\t可选。规定一个数组，包含了当错误发生时在用的每个变量以及它们的值。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("值")]),t._v(" "),n("th",[t._v("常量")]),t._v(" "),n("th",[t._v("描述")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("E_WARNING")]),t._v(" "),n("td",[t._v("非致命的 run-time 错误。不暂停脚本执行。")])]),t._v(" "),n("tr",[n("td",[t._v("8")]),t._v(" "),n("td",[t._v("E_NOTICE")]),t._v(" "),n("td",[t._v("run-time 通知。在脚本发现可能有错误时发生，但也可能在脚本正常运行时发生。")])]),t._v(" "),n("tr",[n("td",[t._v("256")]),t._v(" "),n("td",[t._v("E_USER_ERROR")]),t._v(" "),n("td",[t._v("致命的用户生成的错误。这类似于程序员使用 PHP 函数 trigger_error() 设置的 E_ERROR。")])]),t._v(" "),n("tr",[n("td",[t._v("512")]),t._v(" "),n("td",[t._v("E_USER_WARNING")]),t._v(" "),n("td",[t._v("非致命的用户生成的警告。这类似于程序员使用 PHP 函数 trigger_error() 设置的 E_WARNING。")])]),t._v(" "),n("tr",[n("td",[t._v("1024")]),t._v(" "),n("td",[t._v("E_USER_NOTICE")]),t._v(" "),n("td",[t._v("用户生成的通知。这类似于程序员使用 PHP 函数 trigger_error() 设置的 E_NOTICE。")])]),t._v(" "),n("tr",[n("td",[t._v("4096")]),t._v(" "),n("td",[t._v("E_RECOVERABLE_ERROR")]),t._v(" "),n("td",[t._v("可捕获的致命错误。类似 E_ERROR，但可被用户定义的处理程序捕获。（参见 set_error_handler()）")])]),t._v(" "),n("tr",[n("td",[t._v("8191")]),t._v(" "),n("td",[t._v("E_ALL")]),t._v(" "),n("td",[t._v("所有错误和警告。（在 PHP 5.4 中，E_STRICT 成为 E_ALL 的一部分）")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("customError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$errno")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$errstr")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"<b>Error:</b> ['),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token variable"}},[t._v("$errno")])]),t._v("] "),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token variable"}},[t._v("$errstr")])]),t._v('<br>"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Ending Script"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("die")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("set_error_handler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"customError"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("//trigger error")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$test")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在脚本中用户输入数据的位置，当用户的输入无效时触发错误是很有用的。在 PHP 中，这个任务由 "),s("code",[this._v("trigger_error()")]),this._v(" 函数完成，此函数包括两个参数，第一个参数为输出的错误提示，第二个参数可选，规定所触发的错误级别。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("strong",[t._v("E_USER_ERROR")]),t._v(" - 致命的用户生成的 run-time 错误。错误无法恢复。脚本执行被中断。")]),t._v(" "),n("li",[n("strong",[t._v("E_USER_WARNING")]),t._v(" - 非致命的用户生成的 run-time 警告。脚本执行不被中断。")]),t._v(" "),n("li",[n("strong",[t._v("E_USER_NOTICE")]),t._v(" - 默认。用户生成的 run-time 通知。在脚本发现可能有错误时发生，但也可能在脚本正常运行时发生。")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[t._v("$test")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$test")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("trigger_error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Value must be 1 or below"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("E_USER_WARNING")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("同样的 "),s("code",[this._v("set_error_handler()")]),this._v(" 也能设置错误类型 :")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("set_error_handler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"customError"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token constant"}},[t._v("E_USER_WARNING")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// error handler function")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("customError")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$errno")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$errstr")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"<b>Error:</b> ['),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token variable"}},[t._v("$errno")])]),t._v("] "),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token variable"}},[t._v("$errstr")])]),t._v('<br>"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Webmaster has been notified"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("error_log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Error: ['),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token variable"}},[t._v("$errno")])]),t._v("] "),n("span",{attrs:{class:"token interpolation"}},[n("span",{attrs:{class:"token variable"}},[t._v("$errstr")])]),t._v('"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"example@qq.com"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"From: webmaster@example.com"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// set error handler")]),t._v("\n"),n("span",{attrs:{class:"token function"}},[t._v("set_error_handler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"customError"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("E_USER_WARNING")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// trigger error")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("$test")]),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$test")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("trigger_error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"Value must be 1 or below"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("E_USER_WARNING")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br")])])}],!1,null,null,null);s.default=r.exports}}]);