(window.webpackJsonp=window.webpackJsonp||[]).push([[578],{779:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"shell-脚本编程基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本编程基础","aria-hidden":"true"}},[a._v("#")]),a._v(" shell 脚本编程基础")]),a._v(" "),t("p",[a._v("查看系统中所有的 shell 解释器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/shells\n/bin/sh\n/bin/bash\n/sbin/nologin\n/usr/bin/sh\n/usr/bin/bash\n/usr/sbin/nologin\n/bin/tcsh\n/bin/csh\n")])])]),t("h2",{attrs:{id:"shell-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-基础","aria-hidden":"true"}},[a._v("#")]),a._v(" shell 基础")]),a._v(" "),t("h3",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 变量")]),a._v(" "),t("p",[a._v("声明变量直接赋值即可，通过 $var 引用一个变量，比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("quanzaiyu\n$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\nquanzaiyu\n")])])]),t("h3",{attrs:{id:"命令结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令结果","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令结果")]),a._v(" "),t("p",[a._v("使用 $(command) 引用命令执行的结果，比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n/home\n")])])]),t("p",[a._v("使用 `command` 也是引用命令执行的结果，比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\n/home\n")])])]),t("h3",{attrs:{id:"逻辑连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑连接","aria-hidden":"true"}},[a._v("#")]),a._v(" 逻辑连接")]),a._v(" "),t("p",[a._v("使用一些逻辑运算符执行多条命令，比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" 123 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" 456\n123\n456\n$ lll "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" ok\nbash: lll: 未找到命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n$ lll "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" ok\nbash: lll: 未找到命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nok\n")])])]),t("h3",{attrs:{id:"分支结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 分支结构")]),a._v(" "),t("p",[a._v("if 条件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" if.sh\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("read")]),a._v(" -p "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Please enter a:'")]),a._v(" a\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" 5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" 5\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("5\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n\n$ sh for.sh\nPlease enter a:5\n5\n$ sh for.sh\nPlease enter a:1\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("5\n")])])]),t("h3",{attrs:{id:"循环结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环结构","aria-hidden":"true"}},[a._v("#")]),a._v(" 循环结构")]),a._v(" "),t("p",[a._v("for 循环：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" for.sh\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" hello "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$i")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n$ sh for.sh\nhello 1\nhello 2\nhello 3\n")])])]),t("p",[a._v("while 循环：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" while.sh\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" -eq 1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" hello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n  a+"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n$ sh while.sh\nhello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" while.sh\na"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" -le 5 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" hello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n  a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$((")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("))")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("done")]),a._v("\n\n$ sh while.sh\nhello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nhello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nhello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nhello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\nhello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),t("h2",{attrs:{id:"shell-脚本编写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell-脚本编写","aria-hidden":"true"}},[a._v("#")]),a._v(" shell 脚本编写")]),a._v(" "),t("p",[a._v("一个简单的 shell 脚本格式如下：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" hello world"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);