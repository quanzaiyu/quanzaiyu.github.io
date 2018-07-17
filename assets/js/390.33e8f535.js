(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1126:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"文件属性"}},[s._v("文件属性")]),t("h2",{attrs:{id:"stat"}},[s._v("stat")]),t("p",[t("strong",[s._v("stat命令")]),s._v(" 用于显示文件的状态信息。stat命令的输出信息比 ls 命令的输出信息要更详细。")]),t("p",[t("strong",[s._v("参数")])]),t("ul",[t("li",[t("code",[s._v("-L")]),s._v(" 支持符号连接")]),t("li",[t("code",[s._v("-f")]),s._v(" 显示文件系统状态而非文件状态")]),t("li",[t("code",[s._v("-t")]),s._v(" 以简洁方式输出信息")])]),t("h2",{attrs:{id:"file"}},[s._v("file")]),t("p",[t("strong",[s._v("file命令")]),s._v(" 用来探测给定文件的 mime type 类型。file命令对文件的检查分为文件系统、魔法幻数检查和语言检查3个过程。")]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" install.log    "),t("span",{attrs:{class:"token comment"}},[s._v("# 显示文件类型")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" -b install.log "),t("span",{attrs:{class:"token comment"}},[s._v("# 不显示文件名称")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" -i install.log "),t("span",{attrs:{class:"token comment"}},[s._v("# 显示 MIME 类别")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"chattr"}},[s._v("chattr")]),t("p",[t("code",[s._v("chattr")]),s._v(" 命令用来改变文件属性。这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下8种模式：")]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("a：让文件或目录仅供附加用途；\nb：不更新文件或目录的最后存取时间；\nc：将文件或目录压缩后存放；\nd：将文件或目录排除在倾倒操作之外；\ni：不得任意更动文件或目录；\ns：保密性删除文件或目录；\nS：即时更新文件或目录；\nu：预防意外删除。\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"选项"}},[s._v("选项")]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("-R：递归处理，将指令目录下的所有文件及子目录一并处理；\n-v<版本编号>：设置文件或目录版本；\n-V：显示指令执行过程；\n+<属性>：开启文件或目录的该项属性；\n-<属性>：关闭文件或目录的该项属性；\n=<属性>：指定文件或目录的该项属性。\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"实例"}},[s._v("实例")]),t("p",[s._v("用chattr命令防止系统中某个关键文件被修改：")]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("chattr +i /etc/fstab\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后试一下rm、mv、rename等命令操作于该文件，都是得到Operation not permitted的结果。")]),t("p",[s._v("让某个文件只能往里面追加内容，不能删除，一些日志文件适用于这种操作：")]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("chattr +a /data1/user_act.log\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}],!1,null,null,null);a.default=e.exports}}]);