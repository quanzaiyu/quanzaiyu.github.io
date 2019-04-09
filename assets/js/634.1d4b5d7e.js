(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{820:function(t,r,e){"use strict";e.r(r);var n=e(1),a=Object(n.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"windows-基本特性与操作技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-基本特性与操作技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows 基本特性与操作技巧")]),t._v(" "),e("imgLink",{attrs:{src:"shortcut/059.jpg"}}),t._v(" "),e("p",[t._v("特性与功能:")]),t._v(" "),e("ul",[e("li",[t._v("Cortana")]),t._v(" "),e("li",[t._v("Edge")]),t._v(" "),e("li",[t._v("Microsoft Store")]),t._v(" "),e("li",[t._v("Xbox 游戏平台")]),t._v(" "),e("li",[t._v("多桌面")]),t._v(" "),e("li",[t._v("开始菜单及动态磁贴")]),t._v(" "),e("li",[t._v("资源管理器(explorer.exe)")]),t._v(" "),e("li",[t._v("任务管理器(Taskmgr.exe)")]),t._v(" "),e("li",[t._v("IIS(Internet Information Services)")]),t._v(" "),e("li",[t._v("Hyper-V")]),t._v(" "),e("li",[t._v("...")])]),t._v(" "),e("h2",{attrs:{id:"windows-程序安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-程序安装","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows 程序安装")]),t._v(" "),e("h3",{attrs:{id:"可执行文件-exe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可执行文件-exe","aria-hidden":"true"}},[t._v("#")]),t._v(" 可执行文件 exe")]),t._v(" "),e("p",[t._v("EXE File 英文全名 "),e("code",[t._v("executable file")]),t._v("，译作可执行文件，可移植可执行 (PE) 文件格式的文件，它可以加载到内存中，并由操作系统加载程序执行，是可在操作系统存储空间中浮动定位的可执行程序。很多Windows安装文件都打包为 exe 可执行文件的形式，下一步下一步即可安装使用。")]),t._v(" "),e("h3",{attrs:{id:"windows-安装包-msi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装包-msi","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows 安装包 msi")]),t._v(" "),e("p",[t._v("MSI 文件是 "),e("code",[t._v("Windows Installer")]),t._v(" 的数据包，它实际上是一个数据库，包含安装一种产品所需要的信息和在很多安装情形下安装（和卸载）程序所需的指令和数据。MSI文件将程序的组成文件与功能关联起来。此外，它还包含有关安装过程本身的信息。如目标文件夹路径、系统依赖项、安装选项和控制安装过程的属性。采用MSI安装的优势在于你可以随时彻底删除它们，更改安装选项，即使安装中途出现意想不到的错误，一样可以安全地恢复到以前的状态，正是凭着此强大功能，越来越多的软件开始使用MSI作为发行的方式了。")]),t._v(" "),e("h3",{attrs:{id:"虚拟光驱-ios"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟光驱-ios","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟光驱 ios")]),t._v(" "),e("p",[t._v("这是虚拟光驱格式的文件，使用虚拟光驱（Daemon Tools 或 UltraISO）挂载后一般里面也有一个exe可执行的安装文件。")]),t._v(" "),e("imgLink",{attrs:{src:"shortcut/076.jpg"}}),t._v(" "),e("imgLink",{attrs:{src:"shortcut/078.jpg"}}),t._v(" "),e("p",[t._v("如果是 Win8+ 的系统可以直接打开。")]),t._v(" "),e("h3",{attrs:{id:"windows-镜像-wim"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-镜像-wim","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows 镜像 wim")]),t._v(" "),e("p",[t._v("需要使用 Windows系统安装引导(WinNTSetup)加载，通常是系统镜像，也可当做普通压缩文件使用，用于归档。")]),t._v(" "),e("imgLink",{attrs:{src:"shortcut/075.jpg"}}),t._v(" "),e("h2",{attrs:{id:"windows-实用技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-实用技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" Windows 实用技巧")]),t._v(" "),e("h3",{attrs:{id:"延迟启动修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#延迟启动修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 延迟启动修改")]),t._v(" "),e("p",[t._v("开机启动地址: "),e("code",[t._v("C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp")])]),t._v(" "),e("p",[t._v("设置程序延迟启动")]),t._v(" "),e("p",[e("code",[t._v("start.bat")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("start "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files (x86)\\Tencent\\TIM\\Bin\\QQScLauncher.exe"')]),t._v(" -n 1\nstart "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C:\\Program Files (x86)\\Tencent\\WeChat\\WeChat.exe"')]),t._v(" -n 1\n")])])]),e("p",[t._v("附: start 命令详解")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("start")]),t._v(" 直接运行 start, 开启一个新的 cmd 窗口")]),t._v(" "),e("li",[e("code",[t._v("start <文件夹路径>")]),t._v(" 打开某个文件夹, 如 "),e("code",[t._v("start .")])]),t._v(" "),e("li",[e("code",[t._v("start <文件路径>")]),t._v(" 打开某个文件, 如 "),e("code",[t._v("start ./test.txt")])]),t._v(" "),e("li",[e("code",[t._v("start <程序名称>")]),t._v(" 打开程序, 如 "),e("code",[t._v("start excel")])]),t._v(" "),e("li",[e("code",[t._v("start <命令>")]),t._v(" 执行命令行命令, 如 "),e("code",[t._v("start ping 127.0.0.1")])]),t._v(" "),e("li",[e("code",[t._v("start /min <程序名称>")]),t._v(" 以最小化打开一个程序, 如 "),e("code",[t._v("start /min winword")])])]),t._v(" "),e("p",[t._v("当然, 也可在 "),e("code",[t._v("控制面板 > 计划任务")]),t._v(" 中创建延迟启动")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[t._v("相关资讯")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.aqniu.com/tools-tech/32794.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 10 与 macOS：18个安全特性大比拼"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.xitongzhijia.net/news/20170418/95913.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("难以置信：Win10创意者更新深藏的16个新特性"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.microsoft.com/zh-cn/windows/features",target:"_blank",rel:"noopener noreferrer"}},[t._v("迄今为止最好的 Windows，未来将会越来越好"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("相关站点")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.microsoft.com/zh-cn/windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 开发人员中心"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.microsoft.com/zh-cn/software-download/windows10",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 Windows 10 - Win10 易升"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.microsoft.com/zh-cn/windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Windows 10"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.microsoft.com/zh-cn/download",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft 下载中心"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://msdn.microsoft.com/zh-tw/do-pobrania-msdn.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("MSDN 下載中心"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("下载站点")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://msdn.itellyou.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MSDN I Tell You"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.sdbeta.com/mf/2018/0830/225273.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("一键搞定office2019安装激活 office tool plus 2019 "),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("PowerShell")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.pstips.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PowerShell 中文博客"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://www.pstips.net/powershell-online-tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("PowerShell 在线教程"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("WSL")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://linux.cn/article-7613-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("玩转 Windows 10 中的 Linux 子系统"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/mr_choi/article/details/71211078",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows10 内置 Linux 子系统"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/maoyongf2008/article/details/78928045",target:"_blank",rel:"noopener noreferrer"}},[t._v("启用Win10的Linux子系统"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/bc38ed12da1d",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows10内置Linux子系统初体验"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/JettTang/p/8186315.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL(Windows Subsystem for Linux)的安装与使用"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/lynsyklate/p/7911189.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("windows linux子系统(Windows Subsystem for Linux)的存放目录"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("包管理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://chocolatey.org/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows 下包管理工具 chocolatey"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("效率及工具")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://www.365yg.com/c/user/6431847102/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TopBook"),e("OutboundLink")],1)])])],1)},[],!1,null,null,null);r.default=a.exports}}]);