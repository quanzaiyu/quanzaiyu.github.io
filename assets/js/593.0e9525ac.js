(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{776:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"给-windows-命令设置别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给-windows-命令设置别名","aria-hidden":"true"}},[a._v("#")]),a._v(" 给 Windows 命令设置别名")]),a._v(" "),t("p",[a._v("Linux的alias命令是个非常实用的工具，任何命令通过alias可以精简到很短，")]),a._v(" "),t("p",[a._v("比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("alias")]),a._v(" ll"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ls -l'")]),a._v("\n")])])]),t("p",[a._v("下次我们用l就可以达到 "),t("code",[a._v("ls -l")]),a._v(" 一样的效果。")]),a._v(" "),t("p",[a._v("Windows也有alias类似的命令，就是：doskey。")]),a._v(" "),t("p",[a._v("开启方法也很简单。")]),a._v(" "),t("p",[a._v("1、编写bat文件，内容：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("@doskey ls=dir $*\n")])])]),t("p",[a._v("其中，")]),a._v(" "),t("ul",[t("li",[a._v("等号左边是右边的别名")]),a._v(" "),t("li",[t("code",[a._v("$*")]),a._v(" 表示这个命令还可能有其他参数")]),a._v(" "),t("li",[t("code",[a._v("@")]),a._v(" 表示执行这条命令时不显示这条命令本身")])]),a._v(" "),t("p",[a._v("2、保存这个文件，比如用户目录下：C:\\Users\\你的用户名\\fastkey.bat")]),a._v(" "),t("p",[a._v("3、编写一个注册表修改文件，名为：fastkey.reg，内容：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('Windows Registry Editor Version 5.00\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Command Processor]\n"AutoRun"="%USERPROFILE%\\\\fastkey.bat"\n')])])]),t("p",[a._v("然后双击执行这个文件。")]),a._v(" "),t("p",[a._v("再打开DOS命令行，输入 "),t("code",[a._v("ls")]),a._v(" 就能看到效果了。")]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.awaimai.com/2445.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Windows alias给cmd命令起别名"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=r.exports}}]);