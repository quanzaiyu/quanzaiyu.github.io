(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{937:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux-软件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-软件安装","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 软件安装")]),a._v(" "),s("h2",{attrs:{id:"linux-软件安装的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-软件安装的几种方式","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 软件安装的几种方式")]),a._v(" "),s("ul",[s("li",[a._v("源码安装")]),a._v(" "),s("li",[a._v("可执行程序（rpm）安装")]),a._v(" "),s("li",[a._v("包管理工具（yum, apt-get）安装")])]),a._v(" "),s("h2",{attrs:{id:"源码安装的基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码安装的基本流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 源码安装的基本流程")]),a._v(" "),s("ol",[s("li",[a._v("首先使用 wget 下载源码包（压缩文件）")]),a._v(" "),s("li",[a._v("然后 tar 解压源码包")]),a._v(" "),s("li",[a._v("安装")])]),a._v(" "),s("p",[a._v("如果使用 wget 下载的文件是 shell 脚本，通常会使用 sh 进行脚本执行安装：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" xxx.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sh\n")])])]),s("p",[a._v("大部分源码程序的安装流程为:")]),a._v(" "),s("ol",[s("li",[a._v("如果是configure文件,就执行:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ./configure\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("如果是Makefile文件,就执行:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("如果是Imake文件,就执行:")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ xmkmf\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v("\n")])])]),s("h2",{attrs:{id:"可执行程序-rpm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可执行程序-rpm","aria-hidden":"true"}},[a._v("#")]),a._v(" 可执行程序 (rpm)")]),a._v(" "),s("p",[s("strong",[a._v("rpm命令")]),a._v(" 是RPM软件包的管理工具。rpm原本是 "),s("code",[a._v("Red Hat Linux")]),a._v(" 发行版专门用来管理Linux各项套件的程序，由于它遵循GPL规则且功能强大方便，因而广受欢迎。逐渐受到其他发行版的采用。RPM套件管理方式的出现，让Linux易于安装，升级，间接提升了Linux的适用度。")]),a._v(" "),s("p",[a._v("这种软件安装包通常被是一个RPM包（Redhat Linux Packet Manager，就是Redhat的包管理器），后缀是 .rpm。")]),a._v(" "),s("ol",[s("li",[s("strong",[a._v("安装软件")]),a._v(": 执行 "),s("code",[a._v("rpm -ivh rpm 包名")]),a._v("，如："),s("code",[a._v("rpm -ivh gcc*")]),a._v("、"),s("code",[a._v("rpm -ivh make*")]),a._v("、"),s("code",[a._v("rpm -ivh autoconf*")]),a._v("、"),s("code",[a._v("rpm -ivh apache-1.3.6.i386.rpm")])]),a._v(" "),s("li",[s("strong",[a._v("升级软件")]),a._v(": 执行 "),s("code",[a._v("rpm -Uvh rpm 包名")]),a._v("。")]),a._v(" "),s("li",[s("strong",[a._v("反安装")]),a._v(": 执行 "),s("code",[a._v("rpm -e rpm 包名")]),a._v("。")]),a._v(" "),s("li",[s("strong",[a._v("查询软件包的详细信息")]),a._v(": 执行 "),s("code",[a._v("rpm -qpi rpm 包名")])]),a._v(" "),s("li",[s("strong",[a._v("查询某个文件是属于那个rpm包的")]),a._v(": 执行 "),s("code",[a._v("rpm -qf rpm 包名")])]),a._v(" "),s("li",[s("strong",[a._v("查该软件包会向系统里面写入哪些文件")]),a._v(": 执行 "),s("code",[a._v("rpm -qpl rpm 包名")])]),a._v(" "),s("li",[s("strong",[a._v("查看已安装的软件包位置")]),a._v(": "),s("code",[a._v("rpm -ql rpm 包名")])]),a._v(" "),s("li",[s("strong",[a._v("查看指定软件已安装的版本")]),a._v(": "),s("code",[a._v("rpm -qa | grep docker")])])]),a._v(" "),s("h3",{attrs:{id:"安装-rpm-软件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-rpm-软件包","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 rpm 软件包")]),a._v(" "),s("p",[a._v("rpm 软件包的安装可以使用程序 rpm 来完成。执行下面的命令：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ivh your-package.rpm\n")])])]),s("p",[a._v("其中 your-package.rpm 是你要安装的 rpm 包的文件名，一般置于当前目录下。")]),a._v(" "),s("h3",{attrs:{id:"卸载-rpm-软件包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载-rpm-软件包","aria-hidden":"true"}},[a._v("#")]),a._v(" 卸载 rpm 软件包")]),a._v(" "),s("p",[a._v("使用命令 "),s("code",[a._v("rpm -e")]),a._v(" 包名，包名可以包含版本号等信息，但是不可以有后缀 .rpm，比如卸载软件包proftpd-1.2.8-1，可以使用下列格式：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-1.2.8-1\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-1.2.8\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd\n")])])]),s("p",[a._v("不可以是下列格式：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-1.2.8-1.i386.rpm\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-1.2.8-1.i386\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-1.2\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -e proftpd-1\n")])])]),s("p",[a._v("有时会出现一些错误或者警告：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("... is needed by ...\n")])])]),s("p",[a._v("这说明这个软件被其他软件需要，不能随便卸载，可以用 rpm -e --nodeps 强制卸载。")]),a._v(" "),s("h3",{attrs:{id:"rpm-软件包查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpm-软件包查找","aria-hidden":"true"}},[a._v("#")]),a._v(" rpm 软件包查找")]),a._v(" "),s("p",[a._v("查看与 rpm 包相关的文件和其他信息")]),a._v(" "),s("p",[a._v("下面所有的例子都假设使用软件包 mysql-3.23.54a-11")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出所有安装过的包")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" sql "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果要查找所有安装过的包含某个字符串sql的软件包")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -q mysql "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 获得某个软件包的文件全名")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -ql mysql "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出软件包的安装路径, 注意这里的是不包括 .rpm 后缀的软件包的名称, 也就是说只能用 mysql 或者 mysql-3.23.54a-11, 而不是 mysql-3.23.54a-11.rpm。如果只是想知道可执行程序放到那里去了，也可以用which")]),a._v("\n")])])]),s("p",[s("strong",[a._v("一个rpm包中包含哪些文件")])]),a._v(" "),s("ul",[s("li",[a._v("一个没有安装过的软件包，使用"),s("code",[a._v("rpm -qlp ****.rpm")])]),a._v(" "),s("li",[a._v("一个已经安装过的软件包，还可以使用"),s("code",[a._v("rpm -ql ****.rpm")])])]),a._v(" "),s("p",[s("strong",[a._v("获取关于一个软件包的版本，用途等相关信息")])]),a._v(" "),s("ul",[s("li",[a._v("一个没有安装过的软件包，使用"),s("code",[a._v("rpm -qip ****.rpm")])]),a._v(" "),s("li",[a._v("一个已经安装过的软件包，还可以使用"),s("code",[a._v("rpm -qi ****.rpm")])])]),a._v(" "),s("p",[s("strong",[a._v("某个程序是哪个软件包安装的，或者哪个软件包包含这个程序")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qf "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" 程序名"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 返回软件包的全名")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qif "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" 程序名"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 返回软件包的有关信息")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qlf "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" 程序名"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 返回软件包的文件列表")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qilf 程序名          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 返回软件包的全名")]),a._v("\n")])])]),s("p",[a._v("注意，这里不是引号，而是反撇号，就是键盘左上角的那个键。也可以使用"),s("code",[a._v("rpm -qilf")]),a._v("，同时输出软件包信息和文件列表。")]),a._v(" "),s("p",[s("strong",[a._v("某个文件是哪个软件包安装的，或者哪个软件包包含这个文件")])]),a._v(" "),s("p",[a._v("注意，前一个问题中的方法，只适用与可执行的程序，而下面的方法，不仅可以用于可执行程序，也可以用于普通的任何文件。前提是知道这个文件名。首先获得这个程序的完整路径，可以用 whereis 或者 which，然后使用 "),s("code",[a._v("rpm -qf")]),a._v(" 例如：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("whereis")]),a._v(" ftptop\nftptop: /usr/bin/ftptop /usr/share/man/man1/ftptop.1.gz\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qf /usr/bin/ftptop\nproftpd-1.2.8-1\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qf /usr/share/doc/proftpd-1.2.8/rfc/rfc0959.txt\nproftpd-1.2.8-1\n")])])]),s("h3",{attrs:{id:"conflict-冲突解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conflict-冲突解决","aria-hidden":"true"}},[a._v("#")]),a._v(" conflict 冲突解决")]),a._v(" "),s("p",[a._v("安装过程中可能出现下面的警告或者提示：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("... conflict with ...\n")])])]),s("p",[a._v("可能是要安装的包里有一些文件可能会覆盖现有的文件，缺省时这样的情况下是无法正确安装的可以用 "),s("code",[a._v("rpm --force -i")]),a._v(" 强制安装即可")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("... is needed by ...\n... is not installed ...\n")])])]),s("p",[a._v("此包需要的一些软件你没有安装可以用 "),s("code",[a._v("rpm --nodeps -i")]),a._v(" 来忽略此信息，也就是说 "),s("code",[a._v("rpm -i --force --nodeps")]),a._v(" 可以忽略所有依赖关系和文件问题，什么包都能安装上，但这种强制安装的软件包不能保证完全发挥功能。")]),a._v(" "),s("h2",{attrs:{id:"yum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum","aria-hidden":"true"}},[a._v("#")]),a._v(" yum")]),a._v(" "),s("p",[a._v("yum 命令是在 Fedora 和 RedHat 以及 SUSE 中基于 rpm 的软件包管理器，它可以使系统管理人员交互和自动化地更细与管理 RPM 软件包，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。")]),a._v(" "),s("p",[a._v("yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。")]),a._v(" "),s("p",[s("strong",[a._v("常用选项")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("-h")]),a._v(" 显示帮助信息")]),a._v(" "),s("li",[s("strong",[a._v("-y")]),a._v(" 对所有的提问都回答“yes”")])]),a._v(" "),s("p",[s("strong",[a._v("常用参数")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("install")]),a._v("：安装 rpm 软件包")]),a._v(" "),s("li",[s("strong",[a._v("update")]),a._v("：更新 rpm 软件包")]),a._v(" "),s("li",[s("strong",[a._v("check-update")]),a._v("：检查是否有可用的更新 rpm 软件包")]),a._v(" "),s("li",[s("strong",[a._v("remove")]),a._v(" 或 "),s("strong",[a._v("erase")]),a._v("：删除指定的 rpm 软件包")]),a._v(" "),s("li",[s("strong",[a._v("search")]),a._v("：检查软件包的信息")]),a._v(" "),s("li",[s("strong",[a._v("list")]),a._v("：显示软件包的信息")]),a._v(" "),s("li",[s("strong",[a._v("info")]),a._v("：显示指定的 rpm 软件包的描述信息和概要信息")]),a._v(" "),s("li",[s("strong",[a._v("makecache")]),a._v(": 创建缓存")]),a._v(" "),s("li",[s("strong",[a._v("clean")]),a._v("：清理yum过期的缓存")]),a._v(" "),s("li",[s("strong",[a._v("shell")]),a._v("：进入yum的shell提示符")])]),a._v(" "),s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("p",[s("strong",[a._v("安装")])]),a._v(" "),s("p",[a._v("若一个软件包在官方源内，则应通过官方源安装:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装指定包")]),a._v("\n$ yum reinstall PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 覆盖安装软件包")]),a._v("\n")])])]),s("p",[s("strong",[a._v("更新")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum update "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 全部更新")]),a._v("\n$ yum update PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新系统中的一个或多个软件包")]),a._v("\n$ yum check-update "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查可更新的程序")]),a._v("\n$ yum upgrade PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 更新软件包同时考虑软件包取代关系")]),a._v("\n")])])]),s("p",[s("strong",[a._v("查找和显示")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum list "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示所有已经安装和可以安装的程序包")]),a._v("\n$ yum list PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示指定程序包安装情况")]),a._v("\n$ yum info PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示安装包信息")]),a._v("\n$ yum deplist PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看程序依赖情况")]),a._v("\n")])])]),s("p",[s("strong",[a._v("删除程序")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum remove "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" erase PackageName "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除程序包")]),a._v("\n")])])]),s("p",[s("strong",[a._v("缓存")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum clean packages "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清除缓存目录下的软件包")]),a._v("\n$ yum clean headers "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清除缓存目录下的 headers")]),a._v("\n$ yum clean oldheaders "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清除缓存目录下旧的 headers")]),a._v("\n$ yum makecache "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 生成缓存")]),a._v("\n")])])]),s("h3",{attrs:{id:"yum-换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-换源","aria-hidden":"true"}},[a._v("#")]),a._v(" yum 换源")]),a._v(" "),s("p",[a._v("目的：为了在没网的情况下或体验更快的速度及更好的体验。毕竟自带yum源在国外。(本例用的是阿里yum源,其他的也可以)")]),a._v(" "),s("p",[a._v("yum 机制简介：")]),a._v(" "),s("p",[a._v("::: tip 引用百度百科的介绍\n"),s("strong",[a._v("Yum")]),a._v("（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。\n:::")]),a._v(" "),s("p",[a._v("yum 的关键之处是要有可靠的 repository，顾名思义，这是软件的仓库，它可以是 http 或 ftp 站点，也可以是本地软件池，但必须包含 rpm 的 header，header 包括了 rpm 包的各种信息，包括描述，功能，提供的文件，依赖性等.正是收集了这些 header 并加以分析，才能自动化地完成余下的任务。")]),a._v(" "),s("h4",{attrs:{id:"搭建本地源（利用iso镜像）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建本地源（利用iso镜像）","aria-hidden":"true"}},[a._v("#")]),a._v(" 搭建本地源（利用ISO镜像）")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("拷贝iso镜像文件解压指/media/cdrom文件夹，如果是虚拟机可选择挂载")])]),a._v(" "),s("li",[s("p",[a._v("配置/etc/yum.repos.d/CentOS-Media.repo")])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[c7-media]\nname=CentOS-$releasever - Media\nbaseurl=file:///media/CentOS/   #镜像文件路径\n       file:///media/cdrom/\n       file:///media/cdrecorder/\ngpgcheck=1    #标志开启key验证，开启必须要有gpgkey文件，也可以选择关闭\nenabled=1       #标志开启此yum源\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("重命名默认的网络源CentOS-Base.repo,避免冲突。")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("重置yum")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum clean all   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#清理yum缓存")]),a._v("\n$ yum list    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示yum列表")]),a._v("\n")])])]),s("h4",{attrs:{id:"更换网络源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换网络源","aria-hidden":"true"}},[a._v("#")]),a._v(" 更换网络源")]),a._v(" "),s("ol",[s("li",[a._v("备份系统自带yum源")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bk\n")])])]),s("p",[a._v("目的: 其他 yum 源 (这里是阿里yum源) 出错时,可以恢复系统自带yum源")]),a._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[a._v("下载阿里 yum 源到 "),s("code",[a._v("/etc/yum.repos.d")])])]),a._v(" "),s("ul",[s("li",[a._v("切换路径 "),s("code",[a._v("$ cd /etc/yum.repos.d")])]),a._v(" "),s("li",[a._v("下载 "),s("code",[a._v("$ sudo wget -nc http://mirrors.aliyun.com/repo/Centos-7.repo")])])]),a._v(" "),s("p",[a._v("优质的中国yum镜像源：")]),a._v(" "),s("ul",[s("li",[a._v("阿里yum源:"),s("a",{attrs:{href:"http://mirrors.aliyun.com/repo/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://mirrors.aliyun.com/repo/"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("163(网易)yum源: "),s("a",{attrs:{href:"http://mirrors.163.com/.help/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://mirrors.163.com/.help/"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("中科大的Linux安装镜像源："),s("a",{attrs:{href:"http://centos.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://centos.ustc.edu.cn/"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("搜狐的Linux安装镜像源："),s("a",{attrs:{href:"http://mirrors.sohu.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://mirrors.sohu.com/"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("北京首都在线科技："),s("a",{attrs:{href:"http://mirrors.yun-idc.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://mirrors.yun-idc.com/"),s("OutboundLink")],1)])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[a._v("更改阿里yum源为系统默认yum源")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("$ sudo mv Centos-7.repo CentOS-Base.repo")])])]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("清除yum机制的本地缓存")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("$ sudo yum clean all #一股脑全部清除")])]),a._v(" "),s("li",[s("code",[a._v("$ sudo yum list")])])]),a._v(" "),s("p",[a._v("目的: 避免更换源后出现HTTP ERORR 404-Not Found Trying othermirror的bao报错")]),a._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[a._v("生成yum机制的本地缓存")])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("$ sudo yum makecache")])])]),a._v(" "),s("p",[a._v("目的: 将服务器上的软件包信息在本地缓存,以提高搜索安装软件的速度。")]),a._v(" "),s("h3",{attrs:{id:"yum-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-插件","aria-hidden":"true"}},[a._v("#")]),a._v(" yum 插件")]),a._v(" "),s("h4",{attrs:{id:"yum-fastestmirror"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-fastestmirror","aria-hidden":"true"}},[a._v("#")]),a._v(" yum-fastestmirror")]),a._v(" "),s("p",[a._v("自动搜索最快镜像插件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" yum-fastestmirror\n")])])]),s("h4",{attrs:{id:"yum-plugin-priorities"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-plugin-priorities","aria-hidden":"true"}},[a._v("#")]),a._v(" yum-plugin-priorities")]),a._v(" "),s("p",[a._v("用于设置 yum 源的优先级")]),a._v(" "),s("p",[a._v("当既有本地 yum 源又有阿里源的时候，我们在装软件包的时候当然希望先用本地的yum源去安装，本地找不到可用的包时再使用阿里源去安装软件,这里就涉及到了优先级的问题，yum提供的插件 "),s("code",[a._v("yum-plugin-priorities.noarch")]),a._v(" 可以解决这个问题。")]),a._v(" "),s("p",[s("strong",[a._v("查看系统是否安装了优先级的插件")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" yum-plugin-\n$ yum search yum-plugin-priorities\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 用search查看是否有此插件可用")]),a._v("\n")])])]),s("p",[s("strong",[a._v("安装yum-plugin-priorities.noarch插件")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" yum-plugin-priorities.noarch\n")])])]),s("p",[s("strong",[a._v("看插件是否启用")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/yum/pluginconf.d/priorities.conf\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nenabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1为启用；0为禁用")]),a._v("\n")])])]),s("p",[s("strong",[a._v("修改本地yum源优先使用")])]),a._v(" "),s("p",[a._v("比如本地有两个 yum 源配置文件，需要将 local.repo 设置为优先，需要在对应的文件中加入 "),s("code",[a._v("priority=1")]),a._v("，数字越小优先级越高 :")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ ll /etc/yum.repos.d/\ntotal 8\n-rw-r--r--. 1 root root 2573 May 15  2015 CentOS-Base.repo\n-rw-r--r--. 1 root root   67 Jun 20 06:04 local.repo\n")])])]),s("p",[a._v("改写对应文件:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/yum.repos.d/local.repo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("local"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nname"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("local\nbaseurl"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("file:///opt/centos\nenabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\ngpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("0\npriority"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n")])])]),s("p",[a._v("在原基础上加入 priority=1 ；数字越小优先级越高\n可以继续修改其他源的 priority 值，经测试仅配置本地源的优先级为 priority=1 就会优先使用本地源了")]),a._v(" "),s("p",[s("strong",[a._v("重置yum")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum clean all   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#清理yum缓存")]),a._v("\n$ yum list    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#显示yum列表")]),a._v("\n$ yum makecache\n")])])]),s("h3",{attrs:{id:"错误解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误解决","aria-hidden":"true"}},[a._v("#")]),a._v(" 错误解决")]),a._v(" "),s("p",[s("code",[a._v("/var/run/yum.pid 已被锁定，PID 为 xxxx 的另一个程序正在运行的问题解决")])]),a._v(" "),s("p",[a._v("解决方案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -f /var/run/yum.pid\n")])])]),s("h2",{attrs:{id:"apt-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-get","aria-hidden":"true"}},[a._v("#")]),a._v(" apt-get")]),a._v(" "),s("p",[s("strong",[a._v("apt-get 命令")]),a._v(" 是Debian Linux发行版中的APT软件包管理工具。所有基于Debian的发行都使用这个包管理系统。deb包可以把一个应用的文件包在一起，大体就如同Windows上的安装文件。")]),a._v(" "),s("p",[s("strong",[a._v("选项")])]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("-c")]),a._v(" 指定配置文件。")])]),a._v(" "),s("p",[s("strong",[a._v("参数")])]),a._v(" "),s("ul",[s("li",[a._v("管理指令：对APT软件包的管理操作；")]),a._v(" "),s("li",[a._v("软件包：指定要操纵的软件包。")])]),a._v(" "),s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[a._v("#")]),a._v(" 实例")]),a._v(" "),s("p",[a._v("使用 apt-get 命令的第一步就是引入必需的软件库，Debian的软件库也就是所有Debian软件包的集合，它们存在互联网上的一些公共站点上。把它们的地址加入，apt-get 就能搜索到我们想要的软件。/etc/apt/sources.list是存放这些地址列表的配置文件，其格式如下：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ deb "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("web或ftp地址"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("发行版名字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main/contrib/non-free"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("我们常用的Ubuntu就是一个基于Debian的发行，我们使用apt-get命令获取这个列表，以下是我整理的常用命令：")]),a._v(" "),s("p",[a._v("在修改"),s("code",[a._v("/etc/apt/sources.list")]),a._v("或者"),s("code",[a._v("/etc/apt/preferences")]),a._v("之后运行该命令。此外您需要定期运行这一命令以确保您的软件包列表是最新的：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" update\n")])])]),s("p",[a._v("安装一个新软件包：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" packagename\n")])])]),s("p",[a._v("卸载一个已安装的软件包（保留配置文件）：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" remove packagename\n")])])]),s("p",[a._v("卸载一个已安装的软件包（删除配置文件）：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" –purge remove packagename\n")])])]),s("p",[a._v("会把已装或已卸的软件都备份在硬盘上，所以如果需要空间的话，可以让这个命令来删除你已经删掉的软件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoclean "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v("\n")])])]),s("p",[a._v("这个命令会把安装的软件的备份也删除，不过这样不会影响软件的使用的：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" clean\n")])])]),s("p",[a._v("更新所有已安装的软件包：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" upgrade\n")])])]),s("p",[a._v("将系统升级到新版本：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" dist-upgrade\n")])])]),s("p",[a._v("定期运行这个命令来清除那些已经卸载的软件包的.deb文件。通过这种方式，您可以释放大量的磁盘空间。如果您的需求十分迫切，可以使用"),s("code",[a._v("apt-get clean")]),a._v("以释放更多空间。这个命令会将已安装软件包裹的.deb文件一并删除。大多数情况下您不会再用到这些.debs文件，因此如果您为磁盘空间不足 而感到焦头烂额，这个办法也许值得一试：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" autoclean\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/wukai_std/article/details/54909314",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS 7下的软件安装方法及策略"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/kangvcar/article/details/73477730",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS配置本地yum源/阿里云yum源/163yuan源，并配置yum源的优先级"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/tankblog/p/6096681.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux应用之gcc环境的安装"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.linuxidc.com/Linux/2017-03/142319.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS7环境下在/离线安装GCC与GCC-C++"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/kimyeee/p/7250560.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux安装python3.6"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);