(window.webpackJsonp=window.webpackJsonp||[]).push([[617],{793:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"adb-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adb-的使用","aria-hidden":"true"}},[a._v("#")]),a._v(" adb 的使用")]),a._v(" "),t("h2",{attrs:{id:"下载安装及使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载安装及使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载安装及使用")]),a._v(" "),t("p",[a._v("很多工具都自带 adb, 比如 Android Studio, 微信调试工具, 各种模拟器, 但是很多时候各种工具会抢占端口, 而开发者并不太容易找到其 "),t("code",[a._v("adb.exe")]),a._v(", 我更愿意从 "),t("a",{attrs:{href:"http://adbshell.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[a._v("adbshell 官网"),t("OutboundLink")],1),a._v(" 下载 adb 并自行配置使用")]),a._v(" "),t("imgLink",{attrs:{src:"date/20190518/002.png"}}),a._v(" "),t("h2",{attrs:{id:"adb-运行原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adb-运行原理","aria-hidden":"true"}},[a._v("#")]),a._v(" adb 运行原理")]),a._v(" "),t("p",[a._v("Android 调试系统是一个面对客户服务系统，包括三个组成部分:")]),a._v(" "),t("p",[a._v("一个在你用于开发程序的电脑上运行的客户端。你可以通过shell端使用adb命令启动客户端。 其他Android工具比如说ADT插件和DDMS同样可以产生adb客户端.\n在你用于开发的机器上作为后台进程运行的服务器。该服务器负责管理客户端与运行于模拟器或设备上的adb守护程序(daemon)之间的通信。.")]),a._v(" "),t("p",[a._v("一个以后台进程的形式运行于模拟器或设备上的守护程序(daemon)。.\n当你启动一个adb客户端，客户端首先确认是否已有一个adb服务进程在运行。如果没有，则启动服务进程。当服务器运行， adb服务器就会绑定本地的TCP端口5037并监听adb客户端发来的命令，—所有的adb客户端都是用端口 5037与adb服务器对话的.")]),a._v(" "),t("h2",{attrs:{id:"adb-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adb-常用命令","aria-hidden":"true"}},[a._v("#")]),a._v(" adb 常用命令")]),a._v(" "),t("p",[t("strong",[a._v("列出所有连接的Android设备")]),a._v(", 返回序列号和状态")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb devices\n")])])]),t("p",[t("strong",[a._v("连接到某设备")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb connect "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[t("strong",[a._v("进入 shell 模式")]),a._v(" (由于Android是基于Linux的, 可以使用各种Linux命令)")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb shell\nroot@MI 6 Plus:/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ls")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),t("p",[a._v("进入 shell 模式后可通过 exit 退出")]),a._v(" "),t("p",[t("strong",[a._v("安装应用")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("比如 "),t("code",[a._v("adb install test.apk")])]),a._v(" "),t("p",[a._v("在指定设别上安装应用, -s 指定的是设备ID, 通过 adb devices 获取到")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb -s 35c7b1bf0804 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -r weex-app.apk\n")])])]),t("p",[t("strong",[a._v("卸载应用")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb uninstall "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("PACKAGE"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("比如 "),t("code",[a._v("adb uninstall com.test.app")])]),a._v(" "),t("p",[t("strong",[a._v("从设备下载指定的文件到电脑上")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb pull "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("比如 "),t("code",[a._v("adb pull /sdcard/demo.mp4 e:\\")]),a._v(", 若不指定 local, 默认使用当前路径")]),a._v(" "),t("p",[t("strong",[a._v("从电脑上传指定文件到设备")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb push "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("local"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("比如 "),t("code",[a._v("adb push d:\\test.apk /sdcard")])]),a._v(" "),t("p",[t("strong",[a._v("打印日志")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb logcat "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("filter-specs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[t("strong",[a._v("打印系统信息")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb shell dumpsys "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("比如 "),t("code",[a._v("adb shell dumpsys battery")])]),a._v(" "),t("p",[t("strong",[a._v("获取设备的屏幕截图")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb shell screencap "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("比如 "),t("code",[a._v("adb shell screencap /storage/emulated/0/screen.png")])]),a._v(" "),t("p",[t("strong",[a._v("以root身份重新进入adb")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ adb root\n")])])]),t("p",[t("strong",[a._v("查看端口占用")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('quanzaiyu@DESKTOP-VEB85IN MINGW64 /d/Software/adb\n$ ./adb nodaemon server\ncannot bind \'tcp:5037\'\n\nquanzaiyu@DESKTOP-VEB85IN MINGW64 /d/Software/adb\n$ netstat -ano | findstr "5037"\n\nquanzaiyu@DESKTOP-VEB85IN MINGW64 /d/Software/adb\n$ tasklist | findstr "adb"\n映像名称                       PID 会话名              会话#       内存使用\n========================= ======== ================ =========== ============\nadb.exe                      19752 Console                    1      9,800 K\nadb.exe                      14020 Console                    1      6,492 K\nadb.exe                      20452 Console                    1      6,508 K\n')])])]),t("h2",{attrs:{id:"连接-mumu-模拟器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接-mumu-模拟器","aria-hidden":"true"}},[a._v("#")]),a._v(" 连接 MuMu 模拟器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("quanzaiyu@DESKTOP-VEB85IN MINGW64 /d/Software/adb\n$ ./adb connect 127.0.0.1:7555\nconnected to 127.0.0.1:7555\n\nquanzaiyu@DESKTOP-VEB85IN MINGW64 /d/Software/adb\n$ ./adb devices\nList of devices attached\n127.0.0.1:7555  device\n")])])]),t("h3",{attrs:{id:"在-hbuilder-中使用-mumu-模拟器进行调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-hbuilder-中使用-mumu-模拟器进行调试","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 HBuilder 中使用 MuMu 模拟器进行调试")]),a._v(" "),t("p",[a._v("工具 -> 设置 中 配置 adb 的路径和 MuMu模拟器 的端口 7555")]),a._v(" "),t("imgLink",{attrs:{src:"date/20190518/001.png"}}),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/guotianqing/article/details/79173270",target:"_blank",rel:"noopener noreferrer"}},[a._v("adb工具使用简介"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/billy_chen_2013/article/details/80882644",target:"_blank",rel:"noopener noreferrer"}},[a._v("Android 使用 MuMu模拟器 进行程序调试"),t("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=n.exports}}]);