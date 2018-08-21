(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{524:function(t,s,e){"use strict";e.r(s);var n=e(1),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"更改文件权限"}},[t._v("更改文件权限")]),t._v(" "),e("h2",{attrs:{id:"chmod"}},[t._v("chmod")]),t._v(" "),t._m(0),t._v(" "),e("h2",{attrs:{id:"权限范围"}},[t._v("权限范围")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("h2",{attrs:{id:"权限设置"}},[t._v("权限设置")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("hr"),t._v(" "),t._m(5),t._v(" "),e("h2",{attrs:{id:"改变权限设置"}},[t._v("改变权限设置")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("比如")]),t._v(" "),t._m(7),e("h2",{attrs:{id:"chown"}},[t._v("chown")]),t._v(" "),e("p",[e("strong",[t._v("chown命令")]),t._v(" 改变某个文件或目录的所有者和所属的组，该命令可以向某个用户授权，使该用户变成指定文件的所有者或者改变文件所属的组。用户可以是用户或者是用户D，用户组可以是组名或组"),e("a",{attrs:{href:"http://man.linuxde.net/id",target:"_blank",rel:"noopener noreferrer"}},[t._v("id"),e("OutboundLink")],1),t._v("。文件名可以使由空格分开的文件列表，在文件名中可以包含通配符。")]),t._v(" "),e("p",[t._v("只有文件主和超级用户才可以便用该命令。")]),t._v(" "),e("h3",{attrs:{id:"示例"}},[t._v("示例")]),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("chmod命令")]),this._v(" 用来变更文件或目录的权限。在UNIX系统家族里，文件或目录权限的控制分别以读取、写入、执行3种一般权限来区分，另有3种特殊权限可供运用。用户可以使用chmod指令去变更文件与目录的权限，设置方式采用文字或数字代号皆可。符号连接的权限无法变更，如果用户对符号连接修改权限，其改变会作用在被连接的原始文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("权限范围")]),this._v("的表示法如下：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("u")]),t._v(" User，即文件或目录的拥有者；")]),t._v(" "),e("li",[e("code",[t._v("g")]),t._v(" Group，即文件或目录的所属群组；")]),t._v(" "),e("li",[e("code",[t._v("o")]),t._v(" Other，除了文件或目录拥有者或所属群组之外，其他用户皆属于这个范围；")]),t._v(" "),e("li",[e("code",[t._v("a")]),t._v(" All，即全部的用户，包含拥有者，所属群组以及其他用户；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("权限设置")]),this._v("的表示法如下：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("r")]),t._v(" 读取权限，数字代号为“4”;")]),t._v(" "),e("li",[e("code",[t._v("w")]),t._v(" 写入权限，数字代号为“2”；")]),t._v(" "),e("li",[e("code",[t._v("x")]),t._v(" 执行或切换权限，数字代号为“1”；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("-")]),this._v(" 不具任何权限，数字代号为“0”；")]),this._v(" "),s("li",[s("code",[this._v("s")]),this._v(" 特殊功能说明：变更文件或目录的权限。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("<权限范围>+<权限设置>")]),t._v(" 开启权限范围的文件或目录的该选项权限设置；")]),t._v(" "),e("li",[e("code",[t._v("<权限范围>-<权限设置>")]),t._v(" 关闭权限范围的文件或目录的该选项权限设置；")]),t._v(" "),e("li",[e("code",[t._v("<权限范围>=<权限设置>")]),t._v(" 指定权限范围的文件或目录的该选项权限设置；")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 777 temp "),e("span",{attrs:{class:"token comment"}},[t._v("# 改变 temp 权限为 777")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+w temp "),e("span",{attrs:{class:"token comment"}},[t._v("# 对u属用户增加写权限")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u-x temp "),e("span",{attrs:{class:"token comment"}},[t._v("# 对u属用户删除执行权限")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x,g+w temp　　"),e("span",{attrs:{class:"token comment"}},[t._v("# 为文件 temp 设置自己可以执行，组员可以写入的权限")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("rwx,g"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("rw,o"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("r temp "),e("span",{attrs:{class:"token comment"}},[t._v("# 对不同的属设置不同的权限")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x temp　　"),e("span",{attrs:{class:"token comment"}},[t._v("# 对文件 temp 的u,g,o都设置可执行属性")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R user /usr/temp "),e("span",{attrs:{class:"token comment"}},[t._v("# 递归处理 temp 下的所有文件，将其所有权赋予 user")]),t._v("\n"),e("span",{attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R user:market /usr/temp "),e("span",{attrs:{class:"token comment"}},[t._v("# 把文件(夹) temp 所有权设置给 uesr，添加到 market 组")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])}],!1,null,null,null);s.default=a.exports}}]);