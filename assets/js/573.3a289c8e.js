(window.webpackJsonp=window.webpackJsonp||[]).push([[573],{770:function(_,v,t){"use strict";t.r(v);var e=t(1),r=Object(e.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"软链接和硬链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软链接和硬链接","aria-hidden":"true"}},[_._v("#")]),_._v(" 软链接和硬链接")]),_._v(" "),t("p",[_._v("Linux链接分两种，一种被称为硬链接（Hard Link），另一种被称为符号链接（Symbolic Link）。默认情况下，ln命令产生硬链接。")]),_._v(" "),t("h2",{attrs:{id:"硬连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬连接","aria-hidden":"true"}},[_._v("#")]),_._v(" 硬连接")]),_._v(" "),t("p",[_._v("硬连接指通过索引节点来进行连接。在Linux的文件系统中，保存在磁盘分区中的文件不管是什么类型都给它分配一个编号，称为索引节点号(inode Index)，硬连接是不会建立inode的，他只是 "),t("strong",[_._v("在文件原来的inode link count域再增加1")]),_._v(" 而已，也因此硬链接是不可以跨越文件系统的。在Linux中，多个文件名指向同一索引节点是存在的。一般这种连接就是硬连接。硬连接的作用是允许一个文件拥有多个有效路径名，这样用户就可以建立硬连接到重要文件，以防止“误删”的功能。其原因如上所述，因为对应该目录的索引节点有一个以上的连接。只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。也就是说，文件真正删除的条件是与之相关的所有硬连接文件均被删除。")]),_._v(" "),t("p",[_._v("硬链接有以下优点:")]),_._v(" "),t("ul",[t("li",[_._v("防止源文件误删，只要 inode 大于 1，就不会从硬盘中删除。")]),_._v(" "),t("li",[_._v("不占据多余磁盘空间，虽然查看文件夹大小属性的时候会看到体积增加了一倍，但实际并未多余占据空间。")])]),_._v(" "),t("p",[_._v("对硬链接有如下限制：")]),_._v(" "),t("ul",[t("li",[_._v("不能对目录文件做硬链接。")]),_._v(" "),t("li",[_._v("不能在不同的文件系统之间做硬链接。就是说，链接文件和被链接文件必须位于同一个文件系统中。")])]),_._v(" "),t("h2",{attrs:{id:"软连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软连接","aria-hidden":"true"}},[_._v("#")]),_._v(" 软连接")]),_._v(" "),t("p",[_._v("另外一种连接称之为符号连接（Symbolic Link），也叫软连接。软链接文件有类似于Windows的快捷方式。它实际上是一个特殊的文件。在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息。")]),_._v(" "),t("p",[_._v("如果用 C 语言中指针的概念类比，软链接就是一个指向指针的指针。")]),_._v(" "),t("p",[_._v("符号链接保持了链接与源文件或目录之间的区别：")]),_._v(" "),t("ul",[t("li",[_._v("删除源文件或目录，只删除了数据，不会删除链接。")]),_._v(" "),t("li",[_._v("一旦以同样文件名创建了源文件，链接将继续指向该文件的新数据。")]),_._v(" "),t("li",[_._v("在目录长列表中，符号链接作为一种特殊的文件类型显示出来，其第一个字母是 l。")]),_._v(" "),t("li",[_._v("符号链接的大小是其链接文件的路径名中的字节数。")])]),_._v(" "),t("h2",{attrs:{id:"ln命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ln命令","aria-hidden":"true"}},[_._v("#")]),_._v(" ln命令")]),_._v(" "),t("p",[t("strong",[_._v("ln命令")]),_._v('用来为文件创件连接，连接类型分为硬连接和符号连接两种，默认的连接类型是硬连接。如果要创建符号连接必须使用"-s"选项。')]),_._v(" "),t("p",[_._v("注意：符号链接文件不是一个独立的文件，它的许多属性依赖于源文件，所以给符号链接文件设置存取权限是没有意义的。")]),_._v(" "),t("p",[t("strong",[_._v("选项")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("-s")]),_._v(", "),t("code",[_._v("——symbolic")]),_._v(" 对源文件建立符号连接，而非硬连接；")])]),_._v(" "),t("p",[t("strong",[_._v("参数")])]),_._v(" "),t("ul",[t("li",[_._v("源文件：指定连接的源文件。如果使用"),t("code",[_._v("-s")]),_._v("选项创建符号连接，则“源文件”可以是文件或者目录。创建硬连接时，则“源文件”参数只能是文件；")]),_._v(" "),t("li",[_._v("目标文件：指定源文件的目标连接文件。")])]),_._v(" "),t("p",[t("strong",[_._v("示例")])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("ln -s file1 lnk1")]),_._v(" 创建一个指向文件或目录的软链接")]),_._v(" "),t("li",[t("code",[_._v("ln file1 lnk1")]),_._v(" 创建一个指向文件或目录的物理链接")])]),_._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.zhihu.com/question/66578656/answer/245849471",target:"_blank",rel:"noopener noreferrer"}},[_._v("linux创建的硬链接为什么不占用磁盘空间?"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/dde6a01c4094",target:"_blank",rel:"noopener noreferrer"}},[_._v("5分钟让你明白“软链接”和“硬链接”的区别"),t("OutboundLink")],1)])])])},[],!1,null,null,null);v.default=r.exports}}]);