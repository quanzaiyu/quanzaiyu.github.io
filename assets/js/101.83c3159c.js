(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{698:function(s,a,e){"use strict";e.r(a);var n=e(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"rpm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm","aria-hidden":"true"}},[s._v("#")]),s._v(" rpm")]),s._v(" "),e("p",[e("strong",[s._v("rpm命令")]),s._v(" 是RPM软件包的管理工具。rpm原本是 "),e("code",[s._v("Red Hat Linux")]),s._v(" 发行版专门用来管理Linux各项套件的程序，由于它遵循GPL规则且功能强大方便，因而广受欢迎。逐渐受到其他发行版的采用。RPM套件管理方式的出现，让Linux易于安装，升级，间接提升了Linux的适用度。")]),s._v(" "),e("h2",{attrs:{id:"常用选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用选项","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用选项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('-i<套件档>或--install<套件档>：安装指定的套件档\n-e<套件档>或--erase<套件档>：删除指定的套件\n-U<套件档>或--upgrade<套件档>：升级指定的套件档\n\n-v：显示指令执行过程\n-vv：详细显示指令执行过程，便于排错\n-h 或 --hash：套件安装时列出标记\n\n-q：使用询问模式，当遇到任何问题时，rpm指令会先询问用户\n-a：查询所有套件\n-i：显示套件的相关信息\n-l：显示套件的文件列表\n\n-f<文件>+：查询拥有指定文件的套件\n-p<套件档>+：查询指定的RPM套件档\n\n-c：只列出组态配置文件，本参数需配合"-l"参数使用\n-d：只列出文本文件，本参数需配合"-l"参数使用\n-s：显示文件状态，本参数需配合"-l"参数使用\n\n--help 显示帮助\n\n-b<完成阶段><套件档>+或-t <完成阶段><套件档>+：设置包装套件的完成阶段，并指定套件档的文件名称\n\n-R：显示套件的关联性信息\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("h3",{attrs:{id:"安装-rpm-软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-rpm-软件包","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 rpm 软件包")]),s._v(" "),e("p",[s._v("rpm 软件包的安装可以使用程序 rpm 来完成。执行下面的命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -ivh your-package.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("其中 your-package.rpm 是你要安装的 rpm 包的文件名，一般置于当前目录下。")]),s._v(" "),e("h3",{attrs:{id:"conflict-冲突解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conflict-冲突解决","aria-hidden":"true"}},[s._v("#")]),s._v(" conflict 冲突解决")]),s._v(" "),e("p",[s._v("安装过程中可能出现下面的警告或者提示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("... conflict with ...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可能是要安装的包里有一些文件可能会覆盖现有的文件，缺省时这样的情况下是无法正确安装的可以用 "),e("code",[s._v("rpm --force -i")]),s._v(" 强制安装即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("... is needed by ...\n... is not installed ...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("此包需要的一些软件你没有安装可以用 "),e("code",[s._v("rpm --nodeps -i")]),s._v(" 来忽略此信息，也就是说 "),e("code",[s._v("rpm -i --force --nodeps")]),s._v(" 可以忽略所有依赖关系和文件问题，什么包都能安装上，但这种强制安装的软件包不能保证完全发挥功能。")]),s._v(" "),e("h3",{attrs:{id:"卸载-rpm-软件包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载-rpm-软件包","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载 rpm 软件包")]),s._v(" "),e("p",[s._v("使用命令 "),e("code",[s._v("rpm -e")]),s._v(" 包名，包名可以包含版本号等信息，但是不可以有后缀 .rpm，比如卸载软件包proftpd-1.2.8-1，可以使用下列格式：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -e proftpd-1.2.8-1\nrpm -e proftpd-1.2.8\nrpm -e proftpd-\nrpm -e proftpd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("不可以是下列格式：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -e proftpd-1.2.8-1.i386.rpm\nrpm -e proftpd-1.2.8-1.i386\nrpm -e proftpd-1.2\nrpm -e proftpd-1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("有时会出现一些错误或者警告：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("... is needed by ...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这说明这个软件被其他软件需要，不能随便卸载，可以用 rpm -e --nodeps 强制卸载。")]),s._v(" "),e("h2",{attrs:{id:"rpm-查找"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpm-查找","aria-hidden":"true"}},[s._v("#")]),s._v(" rpm 查找")]),s._v(" "),e("p",[s._v("查看与 rpm 包相关的文件和其他信息")]),s._v(" "),e("p",[s._v("下面所有的例子都假设使用软件包 mysql-3.23.54a-11")]),s._v(" "),e("p",[s._v("1、系统中安装的所有 rpm 软件包")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -qa 讲列出所有安装过的包\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果要查找所有安装过的包含某个字符串sql的软件包")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -qa "),e("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" sql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、获得某个软件包的文件全名")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -q mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以获得系统中安装的mysql软件包全名，从中可以获得当前软件包的版本等信息。这个例子中可以得到信息mysql-3.23.54a-11")]),s._v(" "),e("p",[s._v("3、一个rpm包中的文件安装到那里去了？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -ql 包名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("注意这里的是不包括 .rpm 后缀的软件包的名称，也就是说只能用 mysql 或者 mysql-3.23.54a-11 而不是 mysql-3.23.54a-11.rpm。如果只是想知道可执行程序放到那里去了，也可以用which，比如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、一个rpm包中包含那些文件。")]),s._v(" "),e("ul",[e("li",[s._v("一个没有安装过的软件包，使用"),e("code",[s._v("rpm -qlp ****.rpm")])]),s._v(" "),e("li",[s._v("一个已经安装过的软件包，还可以使用"),e("code",[s._v("rpm -ql ****.rpm")])])]),s._v(" "),e("p",[s._v("5、如何获取关于一个软件包的版本，用途等相关信息？")]),s._v(" "),e("ul",[e("li",[s._v("一个没有安装过的软件包，使用"),e("code",[s._v("rpm -qip ****.rpm")])]),s._v(" "),e("li",[s._v("一个已经安装过的软件包，还可以使用"),e("code",[s._v("rpm -qi ****.rpm")])])]),s._v(" "),e("p",[s._v("6、某个程序是哪个软件包安装的，或者哪个软件包包含这个程序。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -qf "),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[s._v("`")]),e("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" 程序名"),e("span",{attrs:{class:"token variable"}},[s._v("`")])]),s._v("    "),e("span",{attrs:{class:"token comment"}},[s._v("# 返回软件包的全名")]),s._v("\nrpm -qif "),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[s._v("`")]),e("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" 程序名"),e("span",{attrs:{class:"token variable"}},[s._v("`")])]),s._v("   "),e("span",{attrs:{class:"token comment"}},[s._v("# 返回软件包的有关信息")]),s._v("\nrpm -qlf "),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[s._v("`")]),e("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" 程序名"),e("span",{attrs:{class:"token variable"}},[s._v("`")])]),s._v("   "),e("span",{attrs:{class:"token comment"}},[s._v("# 返回软件包的文件列表")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("注意，这里不是引号，而是"),e("code",[s._v("，就是键盘左上角的那个键。也可以使用")]),s._v("rpm -qilf`，同时输出软件包信息和文件列表。")]),s._v(" "),e("p",[s._v("7、某个文件是哪个软件包安装的，或者哪个软件包包含这个文件。")]),s._v(" "),e("p",[s._v("注意，前一个问题中的方法，只适用与可执行的程序，而下面的方法，不仅可以用于可执行程序，也可以用于普通的任何文件。前提是知道这个文件名。首先获得这个程序的完整路径，可以用 whereis 或者 which，然后使用 "),e("code",[s._v("rpm -qf")]),s._v(" 例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("whereis")]),s._v(" ftptop\nftptop: /usr/bin/ftptop /usr/share/man/man1/ftptop.1.gz\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -qf /usr/bin/ftptop\nproftpd-1.2.8-1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("rpm -qf /usr/share/doc/proftpd-1.2.8/rfc/rfc0959.txt\nproftpd-1.2.8-1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}],!1,null,null,null);r.options.__file="rpm.md";a.default=r.exports}}]);