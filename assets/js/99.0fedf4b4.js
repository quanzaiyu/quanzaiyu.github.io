(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{427:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"macos-一些常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos-一些常用操作","aria-hidden":"true"}},[a._v("#")]),a._v(" MacOS 一些常用操作")]),a._v(" "),e("h2",{attrs:{id:"sudo-spctl-master-disable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sudo-spctl-master-disable","aria-hidden":"true"}},[a._v("#")]),a._v(" sudo spctl --master-disable")]),a._v(" "),e("p",[a._v("Mac升级到macOS Sierra 10.12后，发现SVN管理软件Conerstone 2.7破解版已经无法使用，需要更新版本。")]),a._v(" "),e("p",[a._v("安装Cornerstone_3.0.1破解版后，发现提示“cornerstone 已损坏，打不开。”")]),a._v(" "),e("p",[e("strong",[a._v("导致问题原因")])]),a._v(" "),e("p",[a._v("软件有经过了汉化或者破解，所以可能被Mac认为「已损坏」")]),a._v(" "),e("p",[e("strong",[a._v("解决问题办法")])]),a._v(" "),e("p",[a._v("系统偏好设置 -> 安全性与隐私 -> 通用 -> 选择“任何来源”")]),a._v(" "),e("p",[e("strong",[a._v("“通用”里有时没有“任何来源”这个选项")])]),a._v(" "),e("p",[a._v('显示"任何来源"选项在控制台中执行：'),e("code",[a._v("sudo spctl --master-disable")])]),a._v(" "),e("p",[a._v('不显示"任何来源"选项（macOS 10.12默认为不显示）在控制台中执行：'),e("code",[a._v("sudo spctl --master-enable")])]),a._v(" "),e("p",[a._v("参考：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_31251767/article/details/53141786",target:"_blank",rel:"noopener noreferrer"}},[a._v("sudo spctl --master-disable"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"用户环境变量设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户环境变量设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户环境变量设置")]),a._v(" "),e("p",[a._v("在 "),e("code",[a._v("~/.bash_profile")]),a._v(" 文件下可以设置别名、环境变量等等，如：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("alias php70.start=launchctl\\ load\\ -w\\ /usr/local/opt/php70/homebrew.mxcl.php@7.0.plist\nalias php70.stop=launchctl\\ unload\\ -w\\ /usr/local/opt/php70/homebrew.mxcl.php@7.0.plist\nalias ll=ls\\ -l\nPATH=$PATH:/usr/local/mysql/bin\n")])])]),e("p",[a._v("使用 "),e("code",[a._v("source ~/.bash_profile")]),a._v(" 使配置生效。")]),a._v(" "),e("p",[a._v("注意，PATH 环境变量不同路径之间使用冒号"),e("code",[a._v(":")]),a._v("分隔：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("PATH=$PATH:<PATH 1>:<PATH 2>:<PATH 3>:------:<PATH N>\n")])])]),e("p",[a._v("参考：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/shineqiujuan/p/4693404.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("MAC 设置环境变量path的几种方法"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"批量重命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批量重命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 批量重命名")]),a._v(" "),e("p",[a._v("在OS X 10.10前， 我们需要借助 Automator 或者改名软件进行重命名操作。现在，升级了优胜美地，就可以自动批量更改名字了。")]),a._v(" "),e("imgLink",{attrs:{src:"shortcut/077.png/small"}}),a._v(" "),e("p",[a._v("参考：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/870c6fc32acc90b03ee4be42.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("你所不知道的 Mac OS Yosemite 文件批量重命名"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"活动监视器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#活动监视器","aria-hidden":"true"}},[a._v("#")]),a._v(" 活动监视器")]),a._v(" "),e("p",[a._v("类似于 Windows 的任务管理器，监控进程的 CPU、内存、网络的占用。")]),a._v(" "),e("imgLink",{attrs:{src:"shortcut/080.png/small"}}),a._v(" "),e("p",[a._v("参考：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/acf728fd45ee83f8e510a3c2.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("苹果电脑任务管理器 / Mac进程管理器"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"分屏操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分屏操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 分屏操作")]),a._v(" "),e("p",[a._v("使用 Mac 的小伙伴都知道，应用程序的操作按钮与 Windows 相反，是在窗口的左上角。此时我们用鼠标按下这个第三个绿色的全屏按钮"),e("strong",[a._v("2秒以上")]),a._v("再放手，这样就可以触发分屏。")]),a._v(" "),e("imgLink",{attrs:{src:"shortcut/081.png/small"}}),a._v(" "),e("p",[a._v("参考：")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/a3a3f811eb712d8da2eb8a95.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mac Split View屏幕分割，Mac分屏怎么用？"),e("OutboundLink")],1)])],1)},[],!1,null,null,null);s.options.__file="MacOS.md";t.default=s.exports}}]);