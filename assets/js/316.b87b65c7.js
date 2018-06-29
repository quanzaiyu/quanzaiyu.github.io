(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{839:function(s,n,a){"use strict";a.r(n);var e=a(1),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"软链接和硬链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软链接和硬链接","aria-hidden":"true"}},[s._v("$")]),s._v(" 软链接和硬链接")]),a("p",[s._v("Linux链接分两种，一种被称为硬链接（Hard Link），另一种被称为符号链接（Symbolic Link）。默认情况下，ln命令产生硬链接。")]),a("h2",{attrs:{id:"硬连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬连接","aria-hidden":"true"}},[s._v("$")]),s._v(" 硬连接")]),a("p",[s._v("硬连接指通过索引节点来进行连接。在Linux的文件系统中，保存在磁盘分区中的文件不管是什么类型都给它分配一个编号，称为索引节点号(inode Index)，硬连接是不会建立inode的，他只是 "),a("strong",[s._v("在文件原来的inode link count域再增加1")]),s._v(" 而已，也因此硬链接是不可以跨越文件系统的。在Linux中，多个文件名指向同一索引节点是存在的。一般这种连接就是硬连接。硬连接的作用是允许一个文件拥有多个有效路径名，这样用户就可以建立硬连接到重要文件，以防止“误删”的功能。其原因如上所述，因为对应该目录的索引节点有一个以上的连接。只删除一个连接并不影响索引节点本身和其它的连接，只有当最后一个连接被删除后，文件的数据块及目录的连接才会被释放。也就是说，文件真正删除的条件是与之相关的所有硬连接文件均被删除。")]),a("p",[s._v("硬链接有以下优点:")]),a("ul",[a("li",[s._v("防止源文件误删，只要 inode 大于 1，就不会从硬盘中删除。")]),a("li",[s._v("不占据多余磁盘空间，虽然查看文件夹大小属性的时候会看到体积增加了一倍，但实际并未多余占据空间。")])]),a("p",[s._v("对硬链接有如下限制：")]),a("ul",[a("li",[s._v("不能对目录文件做硬链接。")]),a("li",[s._v("不能在不同的文件系统之间做硬链接。就是说，链接文件和被链接文件必须位于同一个文件系统中。")])]),a("h2",{attrs:{id:"软连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软连接","aria-hidden":"true"}},[s._v("$")]),s._v(" 软连接")]),a("p",[s._v("另外一种连接称之为符号连接（Symbolic Link），也叫软连接。软链接文件有类似于Windows的快捷方式。它实际上是一个特殊的文件。在符号连接中，文件实际上是一个文本文件，其中包含的有另一文件的位置信息。")]),a("p",[s._v("如果用 C 语言中指针的概念类比，软链接就是一个指向指针的指针。")]),a("p",[s._v("符号链接保持了链接与源文件或目录之间的区别：")]),a("ul",[a("li",[s._v("删除源文件或目录，只删除了数据，不会删除链接。")]),a("li",[s._v("一旦以同样文件名创建了源文件，链接将继续指向该文件的新数据。")]),a("li",[s._v("在目录长列表中，符号链接作为一种特殊的文件类型显示出来，其第一个字母是 l。")]),a("li",[s._v("符号链接的大小是其链接文件的路径名中的字节数。")])]),a("h2",{attrs:{id:"ln"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ln","aria-hidden":"true"}},[s._v("$")]),s._v(" ln")]),a("p",[a("strong",[s._v("ln命令")]),s._v('用来为文件创件连接，连接类型分为硬连接和符号连接两种，默认的连接类型是硬连接。如果要创建符号连接必须使用"-s"选项。')]),a("p",[s._v("注意：符号链接文件不是一个独立的文件，它的许多属性依赖于源文件，所以给符号链接文件设置存取权限是没有意义的。")]),a("h3",{attrs:{id:"选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[s._v("$")]),s._v(" 选项")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('-s或——symbolic：对源文件建立符号连接，而非硬连接；\n\n-b或--backup：删除，覆盖目标文件之前的备份；\n\n-d或-F或——directory：建立目录的硬连接；\n\n-f或——force：强行建立文件或目录的连接，不论文件或目录是否存在；\n\n-i或——interactive：覆盖既有文件之前先询问用户；\n\n-n或--no-dereference：把符号连接的目的目录视为一般文件；\n\n-S<字尾备份字符串>或--suffix=<字尾备份字符串>：用"-b"参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，预设的备份字符串是符号“~”，用户可通过“-S”参数来改变它；\n\n-v或——verbose：显示指令执行过程；\n\n-V<备份方式>或--version-control=<备份方式>：用“-b”参数备份目标文件后，备份文件的字尾会被加上一个备份字符串，这个字符串不仅可用“-S”参数变更，当使用“-V”参数<备份方式>指定不同备份方式时，也会产生不同字尾的备份字符串；\n\n--help：在线帮助；\n--version：显示版本信息。\n')])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[s._v("$")]),s._v(" 参数")]),a("ul",[a("li",[s._v("源文件：指定连接的源文件。如果使用"),a("code",[s._v("-s")]),s._v("选项创建符号连接，则“源文件”可以是文件或者目录。创建硬连接时，则“源文件”参数只能是文件；")]),a("li",[s._v("目标文件：指定源文件的目标连接文件。")])]),a("h3",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[s._v("$")]),s._v(" 实例")]),a("ul",[a("li",[a("code",[s._v("ln -s file1 lnk1")]),s._v(" 创建一个指向文件或目录的软链接")]),a("li",[a("code",[s._v("ln file1 lnk1")]),s._v(" 创建一个指向文件或目录的物理链接")])])])}],!1,null,null,null);n.default=t.exports}}]);