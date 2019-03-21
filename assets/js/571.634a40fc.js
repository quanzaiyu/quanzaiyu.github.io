(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{982:function(v,_,t){"use strict";t.r(_);var e=t(1),a=Object(e.a)({},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"linux-基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础命令","aria-hidden":"true"}},[v._v("#")]),v._v(" Linux 基础命令")]),v._v(" "),t("h2",{attrs:{id:"系统相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统相关命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 系统相关命令")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("login")]),v._v(" 登录")]),v._v(" "),t("li",[t("code",[v._v("logout")]),v._v(" 注销")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("poweroff")]),v._v(" 普通关机")]),v._v(" "),t("li",[t("code",[v._v("halt")]),v._v(" 立刻关机")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("reboot")]),v._v(" 普通重启")]),v._v(" "),t("li",[t("code",[v._v("shutdown -r now")]),v._v(" 立刻重启")]),v._v(" "),t("li",[t("code",[v._v("shutdown -r 10")]),v._v(" 过10分钟自动重启")]),v._v(" "),t("li",[t("code",[v._v("shutdown -r 20:35")]),v._v(" 在时间为20:35时候重启")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("shutdown -h now")]),v._v(" 关闭系统(root用户使用)")]),v._v(" "),t("li",[t("code",[v._v("shutdown -h 10")]),v._v(" 10分钟后关闭系统")]),v._v(" "),t("li",[t("code",[v._v("shutdown -c")]),v._v(" 取消按预定时间关闭系统")]),v._v(" "),t("li",[t("code",[v._v("init 0")]),v._v(" 关闭系统")]),v._v(" "),t("li",[t("code",[v._v("telinit 0")]),v._v(" 关闭系统")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("arch")]),v._v(" 显示机器的处理器架构")]),v._v(" "),t("li",[t("code",[v._v("uname -m")]),v._v(" 显示机器的处理器架构")]),v._v(" "),t("li",[t("code",[v._v("uname -r")]),v._v(" 显示正在使用的内核版本")]),v._v(" "),t("li",[t("code",[v._v("iconv -l")]),v._v(" 列出已知的编码")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("cat /proc/cpuinfo")]),v._v(" 显示CPU info的信息")]),v._v(" "),t("li",[t("code",[v._v("cat /proc/interrupts")]),v._v(" 显示中断")]),v._v(" "),t("li",[t("code",[v._v("cat /proc/meminfo")]),v._v(" 校验内存使用")]),v._v(" "),t("li",[t("code",[v._v("cat /proc/swaps")]),v._v(" 显示哪些swap被使用")]),v._v(" "),t("li",[t("code",[v._v("cat /proc/version")]),v._v(" 显示内核的版本")]),v._v(" "),t("li",[t("code",[v._v("cat /proc/net/dev")]),v._v(" 显示网络适配器及统计")]),v._v(" "),t("li",[t("code",[v._v("cat /proc/mounts")]),v._v(" 显示已加载的文件系统")])]),v._v(" "),t("h2",{attrs:{id:"帮助相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#帮助相关命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 帮助相关命令")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("help [command]")]),v._v(" 查看某个命令的帮助")]),v._v(" "),t("li",[t("code",[v._v("man [command]")]),v._v(" 查看某个命令的详细文档")]),v._v(" "),t("li",[t("code",[v._v("man -f [command]")]),v._v(" 查看某个命令的参考资料，同 whatis")]),v._v(" "),t("li",[t("code",[v._v("man -k man")]),v._v(" 查看所有命令的参考资料")]),v._v(" "),t("li",[t("code",[v._v("man 1 cd")]),v._v(" 在第一章节查看cd命令的资料")]),v._v(" "),t("li",[t("code",[v._v("whatis [command]")]),v._v(" 查看某个命令的参考资料")]),v._v(" "),t("li",[t("code",[v._v("info [command]")]),v._v(" 查看某个命令的信息")]),v._v(" "),t("li",[t("code",[v._v("[command] --help")]),v._v(" 或 "),t("code",[v._v("[command] -h")])])]),v._v(" "),t("p",[v._v("man命令中常用按键以及用途:")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("按键")]),v._v(" "),t("th",[v._v("用处")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("空格键")]),v._v(" "),t("td",[v._v("向下翻一页")])]),v._v(" "),t("tr",[t("td",[v._v("PaGe down")]),v._v(" "),t("td",[v._v("向下翻一页")])]),v._v(" "),t("tr",[t("td",[v._v("PaGe up")]),v._v(" "),t("td",[v._v("向上翻一页")])]),v._v(" "),t("tr",[t("td",[v._v("home")]),v._v(" "),t("td",[v._v("直接前往首页")])]),v._v(" "),t("tr",[t("td",[v._v("end")]),v._v(" "),t("td",[v._v("直接前往尾页")])]),v._v(" "),t("tr",[t("td",[v._v("/")]),v._v(" "),t("td",[v._v("从上至下搜索某个关键词，如“/linux”")])]),v._v(" "),t("tr",[t("td",[v._v("?")]),v._v(" "),t("td",[v._v("从下至上搜索某个关键词，如“?linux”")])]),v._v(" "),t("tr",[t("td",[v._v("n")]),v._v(" "),t("td",[v._v("定位到下一个搜索到的关键词")])]),v._v(" "),t("tr",[t("td",[v._v("N")]),v._v(" "),t("td",[v._v("定位到上一个搜索到的关键词")])]),v._v(" "),t("tr",[t("td",[v._v("q")]),v._v(" "),t("td",[v._v("退出帮助文档")])])])]),v._v(" "),t("p",[v._v("man命令帮助信息的结构以及意义")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("结构名称")]),v._v(" "),t("th",[v._v("代表意义")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("NAME")]),v._v(" "),t("td",[v._v("命令的名称")])]),v._v(" "),t("tr",[t("td",[v._v("SYNOPSIS")]),v._v(" "),t("td",[v._v("参数的大致使用方法")])]),v._v(" "),t("tr",[t("td",[v._v("DESCRIPTION")]),v._v(" "),t("td",[v._v("介绍说明")])]),v._v(" "),t("tr",[t("td",[v._v("EXAMPLES")]),v._v(" "),t("td",[v._v("演示（附带简单说明）")])]),v._v(" "),t("tr",[t("td",[v._v("OVERVIEW")]),v._v(" "),t("td",[v._v("概述")])]),v._v(" "),t("tr",[t("td",[v._v("DEFAULTS")]),v._v(" "),t("td",[v._v("默认的功能")])]),v._v(" "),t("tr",[t("td",[v._v("OPTIONS")]),v._v(" "),t("td",[v._v("具体的可用选项（带介绍）")])]),v._v(" "),t("tr",[t("td",[v._v("ENVIRONMENT")]),v._v(" "),t("td",[v._v("环境变量")])]),v._v(" "),t("tr",[t("td",[v._v("FILES")]),v._v(" "),t("td",[v._v("用到的文件")])]),v._v(" "),t("tr",[t("td",[v._v("SEE ALSO")]),v._v(" "),t("td",[v._v("相关的资料")])]),v._v(" "),t("tr",[t("td",[v._v("HISTORY")]),v._v(" "),t("td",[v._v("维护历史与联系方式")])])])]),v._v(" "),t("h2",{attrs:{id:"目录相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录相关命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 目录相关命令")]),v._v(" "),t("p",[v._v("目录标识：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("/")]),v._v(" 代表根目录")]),v._v(" "),t("li",[t("code",[v._v("~")]),v._v(" 表示为 home directory (root用户为 "),t("code",[v._v("/root")]),v._v("，普通用户为 "),t("code",[v._v("/home/username")]),v._v(")")]),v._v(" "),t("li",[t("code",[v._v(".")]),v._v(" 则是表示目前所在的目录")]),v._v(" "),t("li",[t("code",[v._v("..")]),v._v(" 则表示目前目录位置的上一层目录")])]),v._v(" "),t("p",[v._v("常用命令：")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("cd dir")]),v._v(" 改变目录")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("ls")]),v._v(" 列出当前目录文件及子目录")]),v._v(" "),t("li",[t("code",[v._v("ls -l")]),v._v(" 显示文件和目录的详细资料，简写 "),t("code",[v._v("ll")])]),v._v(" "),t("li",[t("code",[v._v("ls -a")]),v._v(" 显示当前目录下包括影藏文件在内的所有文件列表")]),v._v(" "),t("li",[t("code",[v._v("ls -lSr")]),v._v(" 以尺寸大小排列文件和目录")]),v._v(" "),t("li",[t("code",[v._v("ls -ltr")]),v._v(" 按修改时间列出文件和文件夹详细信息")]),v._v(" "),t("li",[t("code",[v._v("ls -li")]),v._v(" 显示文件的 inode 信息")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("mkdir dir1 dir2")]),v._v(" 同时创建两个目录")]),v._v(" "),t("li",[t("code",[v._v("mkdir -p path/to/dir")]),v._v(" 递归创建一个目录树")]),v._v(" "),t("li",[t("code",[v._v("mkdir -m 700 dir")]),v._v(" 创建目录并指定目录权限")]),v._v(" "),t("li",[t("code",[v._v("mkdir -p -m 750 path/to/dir")]),v._v(" 递归创建目录并指定目录权限")]),v._v(" "),t("li",[t("code",[v._v("rmdir -p path/to/dir")]),v._v(" 递归删除"),t("strong",[v._v("空目录")])])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("pwd")]),v._v(" 显示工作路径")]),v._v(" "),t("li",[t("code",[v._v("tree")]),v._v(" 显示文件和目录由根目录开始的树形结构")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("stat file")]),v._v(" 用于显示文件的状态信息。stat命令的输出信息比 ls 命令的输出信息要更详细。")]),v._v(" "),t("li",[t("code",[v._v("file file")]),v._v(" 用来探测给定文件的 mime type 类型")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("du -sh dir1")]),v._v(" 估算目录 'dir1' 已经使用的磁盘空间'")]),v._v(" "),t("li",[t("code",[v._v("du -sk * | sort -rn")]),v._v(" 以容量大小为依据依次显示文件和目录的大小")])]),v._v(" "),t("h2",{attrs:{id:"文件相关命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件相关命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 文件相关命令")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("rm file1 file2")]),v._v(" 删除一个文件")]),v._v(" "),t("li",[t("code",[v._v("rm -rf dir")]),v._v(" 删除一个目录并同时删除其内容，不经确认")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("cp origin path/to/target")]),v._v(" 复制一个文件")]),v._v(" "),t("li",[t("code",[v._v("cp dir/* .")]),v._v(" 复制一个目录下的所有文件到当前工作目录")]),v._v(" "),t("li",[t("code",[v._v("cp -r origin target")]),v._v(" 复制一个目录及其所有文件")]),v._v(" "),t("li",[t("code",[v._v("mv origin target")]),v._v(" 移动/重命名文件")])]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[v._v("提示")]),v._v(" "),t("p",[v._v("所有目标文件指定的目录必须是己经存在的，cp命令不能创建目录。")])]),v._v(" "),t("p",[v._v("在 Linux 下使用 cp 命令复制文件时候，有时候会需要覆盖一些同名文件，覆盖文件的时候都会有提示：需要不停的按Y来确定执行覆盖。文件数量不多还好，但是要是几百个估计按Y都要吐血了，于是折腾来半天总结了一个方法：")]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 没有提示按Y、传递了目录属性、没有略过目录。")]),v._v("\n$ \\cp -r -a aaa/* /bbb\n")])])]),t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[v._v("警告")]),v._v(" "),t("p",[v._v("如果把一个文件复制到一个目标文件中，而目标文件已经存在，覆盖文件的时候会有提示，如果选择 Y，那么，该目标文件的内容将被破坏。")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("touch file")]),v._v(" 创建文件")]),v._v(" "),t("li",[t("code",[v._v("touch -t 0712250000 file")]),v._v(" 修改一个文件或目录的时间戳 - (YYMMDDhhmm)")])]),v._v(" "),t("h2",{attrs:{id:"查看及编辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看及编辑","aria-hidden":"true"}},[v._v("#")]),v._v(" 查看及编辑")]),v._v(" "),t("h3",{attrs:{id:"cat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cat","aria-hidden":"true"}},[v._v("#")]),v._v(" cat")]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("当文件较大时，文本在屏幕上迅速闪过（滚屏），用户往往看不清所显示的内容。\n因此，一般用more等命令分屏显示。\n为了控制滚屏，可以按 Ctrl+S 键，停止滚屏；按 Ctrl+Q 键可以恢复滚屏。按 Ctrl+C（中断）键可以终止该命令的执行，并且返回Shell提示符状态。")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("cat file1 file2")]),v._v(" 在屏幕上显示文件的内容")]),v._v(" "),t("li",[t("code",[v._v("cat file1 file2 > file")]),v._v(" 将文件 file1 和 file2 合并后放入文件 file 中")]),v._v(" "),t("li",[t("code",[v._v("cat file | more")]),v._v(" 分屏显示 file 文件的内容")]),v._v(" "),t("li",[t("code",[v._v("cat -n file")]),v._v(" 显示 file 内容并显示行号")]),v._v(" "),t("li",[t("code",[v._v("nl file")]),v._v(" 类似于 "),t("code",[v._v("cat -n")]),v._v(" ，显示时输出行号")])]),v._v(" "),t("h3",{attrs:{id:"more-和-less"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-和-less","aria-hidden":"true"}},[v._v("#")]),v._v(" more 和 less")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("more命令")]),v._v(" 是一个基于 vi 编辑器文本过滤器，它以全屏幕的方式按页显示文本文件的内容，支持vi中的关键字定位操作。more名单中内置了若干快捷键，常用的有H（获得帮助信息），Enter（向下翻滚一行），空格（向下滚动一屏），Q（退出命令）。")]),v._v(" "),t("li",[t("strong",[v._v("less命令")]),v._v(" 的作用与 more 十分相似，都可以用来浏览文字档案的内容，不同的是 less 命令允许用户向前或向后浏览文件，而 more 命令只能向前浏览。用 less 命令显示文件时，用 PageUp 键向上翻页，用 PageDown 键向下翻页。要退出 less 程序，应按 Q 键。")])]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("more")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 类似于 `cat file | more`，分屏显示文件的内容")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("more")]),v._v(" -dc "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 显示文件 file 的内容，但在显示之前先清屏，并且在屏幕的最下方显示完核的百分比")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("more")]),v._v(" -c -10 "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 显示文件file的内容，每10行显示一次，而且在显示之前先清屏")]),v._v("\n")])])]),t("h3",{attrs:{id:"head-和-tail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head-和-tail","aria-hidden":"true"}},[v._v("#")]),v._v(" head 和 tail")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("head命令")]),v._v(" 用于显示文件的开头的内容。在默认情况下，head命令显示文件的头10行内容。")]),v._v(" "),t("li",[t("strong",[v._v("tail命令")]),v._v(" 用于输入文件中的尾部内容。tail 命令默认在屏幕上显示指定文件的末尾10行。如果给定的文件不止一个，则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。")])]),v._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v('如果表示字节或行数的N值之前有一个 "+" 号，则从文件开头的第N项开始显示，而不是显示文件的最后N项。\nN值后面可以有后缀：b表示512，k表示1024，m表示1 048576(1M)。')])]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("head")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 只显示头10行")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("head")]),v._v(" -1 "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 显示头一行")]),v._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tail")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 只显示最后10行")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tail")]),v._v(" -1 "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 显示最后一行")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tail")]),v._v(" +20 "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 显示文件file的内容，从第20行至文件末尾")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("tail")]),v._v(" -c 10 "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("file")]),v._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# 显示文件file的最后10个字符")]),v._v("\n")])])]),t("h2",{attrs:{id:"其他命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 其他命令")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("clear")]),v._v(" 清屏")]),v._v(" "),t("li",[t("code",[v._v("echo")]),v._v(" 在终端输出")])]),v._v(" "),t("hr"),v._v(" "),t("ul",[t("li",[t("code",[v._v("cal")]),v._v(" 显示本月日历")]),v._v(" "),t("li",[t("code",[v._v("cal 2008")]),v._v(" 显示2008年的日历表")]),v._v(" "),t("li",[t("code",[v._v("clock -w")]),v._v(" 将时间修改保存到 BIOS")])]),v._v(" "),t("h3",{attrs:{id:"date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date","aria-hidden":"true"}},[v._v("#")]),v._v(" date")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("date")]),v._v(" 显示系统日期")]),v._v(" "),t("li",[t("code",[v._v("date 041217002007.00")]),v._v(" 设置日期和时间 - 月日时分年.秒")]),v._v(" "),t("li",[t("code",[v._v('date -s "20170901 8:30:00"')]),v._v(" 设置时间 - 年月日 时分秒")]),v._v(" "),t("li",[t("code",[v._v('date "+%Y-%m-%d %H:%M:%S"')]),v._v(" 以特定格式输出系统时间")])]),v._v(" "),t("p",[v._v("date命令中的参数以及作用")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("%t")]),v._v(" "),t("td",[v._v("跳格[Tab键]")])]),v._v(" "),t("tr",[t("td",[v._v("%Y")]),v._v(" "),t("td",[v._v("年")])]),v._v(" "),t("tr",[t("td",[v._v("%m")]),v._v(" "),t("td",[v._v("月（01～12）")])]),v._v(" "),t("tr",[t("td",[v._v("%d")]),v._v(" "),t("td",[v._v("日（01～31）")])]),v._v(" "),t("tr",[t("td",[v._v("%H")]),v._v(" "),t("td",[v._v("时（00～23）")])]),v._v(" "),t("tr",[t("td",[v._v("%I")]),v._v(" "),t("td",[v._v("时（00～12）")])]),v._v(" "),t("tr",[t("td",[v._v("%M")]),v._v(" "),t("td",[v._v("分（00～59）")])]),v._v(" "),t("tr",[t("td",[v._v("%S")]),v._v(" "),t("td",[v._v("秒（00～59）")])]),v._v(" "),t("tr",[t("td",[v._v("%j")]),v._v(" "),t("td",[v._v("今年中的第几天")])])])])])},[],!1,null,null,null);_.default=a.exports}}]);