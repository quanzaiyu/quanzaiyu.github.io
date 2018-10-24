(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{368:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("p",[t._v("如果使用 wget 下载的文件是 shell 脚本，通常会使用 sh 进行脚本执行安装：")]),t._v(" "),t._m(5),e("p",[t._v("大部分源码程序的安装流程为：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("这种软件安装包通常被是一个RPM包（Redhat Linux Packet Manager，就是Redhat的包管理器），后缀是 .rpm。")]),t._v(" "),t._m(13),t._v(" "),e("p",[t._v("详见："),e("router-link",{attrs:{to:t.$ensureExt("./Install/rpm")}},[t._v("rpm 详细使用方法")])],1),t._v(" "),t._m(14),t._v(" "),e("p",[t._v("yum 命令是在 Fedora 和 RedHat 以及 SUSE 中基于 rpm 的软件包管理器，它可以使系统管理人员交互和自动化地更细与管理 RPM 软件包，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。")]),t._v(" "),e("p",[t._v("yum 提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("若一个软件包在官方源内，则应通过官方源安装:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),e("p",[t._v("目的：为了在没网的情况下或体验更快的速度及更好的体验。毕竟自带yum源在国外。(本例用的是阿里yum源,其他的也可以)")]),t._v(" "),e("p",[t._v("yum 机制简介：")]),t._v(" "),t._m(31),t._v(" "),e("p",[t._v("yum 的关键之处是要有可靠的 repository，顾名思义，这是软件的仓库，它可以是 http 或 ftp 站点，也可以是本地软件池，但必须包含 rpm 的 header，header 包括了 rpm 包的各种信息，包括描述，功能，提供的文件，依赖性等.正是收集了这些 header 并加以分析，才能自动化地完成余下的任务。")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),e("p",[t._v("目的: 其他 yum 源 (这里是阿里yum源) 出错时,可以恢复系统自带yum源")]),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),e("p",[t._v("优质的中国yum镜像源：")]),t._v(" "),e("ul",[e("li",[t._v("阿里yum源:"),e("a",{attrs:{href:"http://mirrors.aliyun.com/repo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mirrors.aliyun.com/repo/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("163(网易)yum源: "),e("a",{attrs:{href:"http://mirrors.163.com/.help/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mirrors.163.com/.help/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("中科大的Linux安装镜像源："),e("a",{attrs:{href:"http://centos.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://centos.ustc.edu.cn/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("搜狐的Linux安装镜像源："),e("a",{attrs:{href:"http://mirrors.sohu.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mirrors.sohu.com/"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("北京首都在线科技："),e("a",{attrs:{href:"http://mirrors.yun-idc.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://mirrors.yun-idc.com/"),e("OutboundLink")],1)])]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),e("p",[t._v("目的: 避免更换源后出现HTTP ERORR 404-Not Found Trying othermirror的bao报错")]),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),e("p",[t._v("目的: 将服务器上的软件包信息在本地缓存,以提高搜索安装软件的速度。")]),t._v(" "),t._m(50),t._v(" "),e("p",[t._v("yum 可以使用插件，详见："),e("router-link",{attrs:{to:t.$ensureExt("./Install/yum_plugins")}},[t._v("rpm 插件")])],1),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),t._m(57),t._v(" "),e("p",[t._v("使用 apt-get 命令的第一步就是引入必需的软件库，Debian的软件库也就是所有Debian软件包的集合，它们存在互联网上的一些公共站点上。把它们的地址加入，apt-get 就能搜索到我们想要的软件。/etc/apt/sources.list是存放这些地址列表的配置文件，其格式如下：")]),t._v(" "),t._m(58),e("p",[t._v("我们常用的Ubuntu就是一个基于Debian的发行，我们使用apt-get命令获取这个列表，以下是我整理的常用命令：")]),t._v(" "),t._m(59),t._v(" "),t._m(60),e("p",[t._v("安装一个新软件包：")]),t._v(" "),t._m(61),e("p",[t._v("卸载一个已安装的软件包（保留配置文件）：")]),t._v(" "),t._m(62),e("p",[t._v("卸载一个已安装的软件包（删除配置文件）：")]),t._v(" "),t._m(63),e("p",[t._v("会把已装或已卸的软件都备份在硬盘上，所以如果需要空间的话，可以让这个命令来删除你已经删掉的软件：")]),t._v(" "),t._m(64),e("p",[t._v("这个命令会把安装的软件的备份也删除，不过这样不会影响软件的使用的：")]),t._v(" "),t._m(65),e("p",[t._v("更新所有已安装的软件包：")]),t._v(" "),t._m(66),e("p",[t._v("将系统升级到新版本：")]),t._v(" "),t._m(67),t._m(68),t._v(" "),t._m(69)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"linux-软件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-软件安装","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 软件安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"linux-软件安装的几种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-软件安装的几种方式","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux 软件安装的几种方式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("源码安装")]),this._v(" "),s("li",[this._v("可执行程序（rpm）安装")]),this._v(" "),s("li",[this._v("包管理工具（yum，apt-get）安装")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"源码安装的基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码安装的基本流程","aria-hidden":"true"}},[this._v("#")]),this._v(" 源码安装的基本流程")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("首先使用 wget 下载源码包（压缩文件）")]),this._v(" "),s("li",[this._v("然后 tar 解压源码包")]),this._v(" "),s("li",[this._v("安装")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("wget")]),this._v(" xxx.sh "),s("span",{attrs:{class:"token operator"}},[this._v("|")]),this._v(" sh\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("如果是configure文件,就执行:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ ./configure\n$ "),e("span",{attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),e("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("如果是Makefile文件,就执行:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("make")]),t._v("\n$ "),e("span",{attrs:{class:"token function"}},[t._v("make")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("如果是Imake文件,就执行:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ xmkmf\n$ "),s("span",{attrs:{class:"token function"}},[this._v("make")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"可执行程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可执行程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 可执行程序")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[e("strong",[t._v("安装软件")]),t._v(": 执行 "),e("code",[t._v("rpm -ivh rpm 包名")]),t._v("，如："),e("code",[t._v("rpm -ivh gcc*")]),t._v("、"),e("code",[t._v("rpm -ivh make*")]),t._v("、"),e("code",[t._v("rpm -ivh autoconf*")]),t._v("、"),e("code",[t._v("rpm -ivh apache-1.3.6.i386.rpm")])]),t._v(" "),e("li",[e("strong",[t._v("升级软件")]),t._v(": 执行 "),e("code",[t._v("rpm -Uvh rpm 包名")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("反安装")]),t._v(": 执行 "),e("code",[t._v("rpm -e rpm 包名")]),t._v("。")]),t._v(" "),e("li",[e("strong",[t._v("查询软件包的详细信息")]),t._v(": 执行 "),e("code",[t._v("rpm -qpi rpm 包名")])]),t._v(" "),e("li",[e("strong",[t._v("查询某个文件是属于那个rpm包的")]),t._v(": 执行 "),e("code",[t._v("rpm -qf rpm 包名")])]),t._v(" "),e("li",[e("strong",[t._v("查该软件包会向系统里面写入哪些文件")]),t._v(": 执行 "),e("code",[t._v("rpm -qpl rpm 包名")])]),t._v(" "),e("li",[e("strong",[t._v("查看已安装的软件包位置")]),t._v(": "),e("code",[t._v("rpm -ql rpm 包名")])]),t._v(" "),e("li",[e("strong",[t._v("查看指定软件已安装的版本")]),t._v(": "),e("code",[t._v("rpm -qa | grep docker")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"yum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum","aria-hidden":"true"}},[this._v("#")]),this._v(" yum")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("常用选项")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("-h")]),this._v(" 显示帮助信息")]),this._v(" "),s("li",[s("strong",[this._v("-y")]),this._v(" 对所有的提问都回答“yes”")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("常用参数")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("strong",[t._v("install")]),t._v("：安装 rpm 软件包")]),t._v(" "),e("li",[e("strong",[t._v("update")]),t._v("：更新 rpm 软件包")]),t._v(" "),e("li",[e("strong",[t._v("check-update")]),t._v("：检查是否有可用的更新 rpm 软件包")]),t._v(" "),e("li",[e("strong",[t._v("remove")]),t._v(" 或 "),e("strong",[t._v("erase")]),t._v("：删除指定的 rpm 软件包")]),t._v(" "),e("li",[e("strong",[t._v("search")]),t._v("：检查软件包的信息")]),t._v(" "),e("li",[e("strong",[t._v("list")]),t._v("：显示软件包的信息")]),t._v(" "),e("li",[e("strong",[t._v("info")]),t._v("：显示指定的 rpm 软件包的描述信息和概要信息")]),t._v(" "),e("li",[e("strong",[t._v("makecache")]),t._v(": 创建缓存")]),t._v(" "),e("li",[e("strong",[t._v("clean")]),t._v("：清理yum过期的缓存")]),t._v(" "),e("li",[e("strong",[t._v("shell")]),t._v("：进入yum的shell提示符")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("安装")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ yum "),e("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 安装指定包")]),t._v("\n$ yum reinstall PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 覆盖安装软件包")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("更新")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ yum update "),e("span",{attrs:{class:"token comment"}},[t._v("# 全部更新")]),t._v("\n$ yum update PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 更新系统中的一个或多个软件包")]),t._v("\n$ yum check-update "),e("span",{attrs:{class:"token comment"}},[t._v("# 检查可更新的程序")]),t._v("\n$ yum upgrade PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 更新软件包同时考虑软件包取代关系")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("查找和显示")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ yum list "),e("span",{attrs:{class:"token comment"}},[t._v("# 显示所有已经安装和可以安装的程序包")]),t._v("\n$ yum list PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 显示指定程序包安装情况")]),t._v("\n$ yum info PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 显示安装包信息")]),t._v("\n$ yum deplist PackageName "),e("span",{attrs:{class:"token comment"}},[t._v("# 查看程序依赖情况")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("删除程序")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ yum remove "),s("span",{attrs:{class:"token operator"}},[this._v("&")]),this._v(" erase PackageName "),s("span",{attrs:{class:"token comment"}},[this._v("# 删除程序包")]),this._v("\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("缓存")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ yum clean packages "),e("span",{attrs:{class:"token comment"}},[t._v("# 清除缓存目录下的软件包")]),t._v("\n$ yum clean headers "),e("span",{attrs:{class:"token comment"}},[t._v("# 清除缓存目录下的 headers")]),t._v("\n$ yum clean oldheaders "),e("span",{attrs:{class:"token comment"}},[t._v("# 清除缓存目录下旧的 headers")]),t._v("\n$ yum makecache "),e("span",{attrs:{class:"token comment"}},[t._v("# 生成缓存")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"yum-换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-换源","aria-hidden":"true"}},[this._v("#")]),this._v(" yum 换源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("引用百度百科的介绍")]),this._v(" "),s("p",[s("strong",[this._v("Yum")]),this._v("（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"搭建本地源（利用iso镜像）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建本地源（利用iso镜像）","aria-hidden":"true"}},[this._v("#")]),this._v(" 搭建本地源（利用ISO镜像）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("拷贝iso镜像文件解压指/media/cdrom文件夹，如果是虚拟机可选择挂载")])]),this._v(" "),s("li",[s("p",[this._v("配置/etc/yum.repos.d/CentOS-Media.repo")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[c7-media]\nname=CentOS-$releasever - Media\nbaseurl=file:///media/CentOS/   #镜像文件路径\n       file:///media/cdrom/\n       file:///media/cdrecorder/\ngpgcheck=1    #标志开启key验证，开启必须要有gpgkey文件，也可以选择关闭\nenabled=1       #标志开启此yum源\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("重命名默认的网络源CentOS-Base.repo,避免冲突。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("mv")]),this._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("重置yum")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ yum clean all   "),e("span",{attrs:{class:"token comment"}},[t._v("#清理yum缓存")]),t._v("\n$ yum list    "),e("span",{attrs:{class:"token comment"}},[t._v("#显示yum列表")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"更换网络源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换网络源","aria-hidden":"true"}},[this._v("#")]),this._v(" 更换网络源")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("备份系统自带yum源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("mv")]),this._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bk\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("下载阿里 yum 源到 "),s("code",[this._v("/etc/yum.repos.d")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("切换路径 "),s("code",[this._v("$ cd /etc/yum.repos.d")])]),this._v(" "),s("li",[this._v("下载 "),s("code",[this._v("$ sudo wget -nc http://mirrors.aliyun.com/repo/Centos-7.repo")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("更改阿里yum源为系统默认yum源")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("$ sudo mv Centos-7.repo CentOS-Base.repo")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("清除yum机制的本地缓存")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("$ sudo yum clean all #一股脑全部清除")])]),this._v(" "),s("li",[s("code",[this._v("$ sudo yum list")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("生成yum机制的本地缓存")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("$ sudo yum makecache")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"yum-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yum-插件","aria-hidden":"true"}},[this._v("#")]),this._v(" yum 插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"apt-get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-get","aria-hidden":"true"}},[this._v("#")]),this._v(" apt-get")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("apt-get 命令")]),this._v(" 是Debian Linux发行版中的APT软件包管理工具。所有基于Debian的发行都使用这个包管理系统。deb包可以把一个应用的文件包在一起，大体就如同Windows上的安装文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("选项")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("-c")]),this._v(" 指定配置文件。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("参数")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("管理指令：对APT软件包的管理操作；")]),this._v(" "),s("li",[this._v("软件包：指定要操纵的软件包。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ deb "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("web或ftp地址"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("发行版名字"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("main/contrib/non-free"),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在修改"),s("code",[this._v("/etc/apt/sources.list")]),this._v("或者"),s("code",[this._v("/etc/apt/preferences")]),this._v("之后运行该命令。此外您需要定期运行这一命令以确保您的软件包列表是最新的：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" update\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" packagename\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" remove packagename\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" –purge remove packagename\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" autoclean apt\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" clean\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" upgrade\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" dist-upgrade\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("定期运行这个命令来清除那些已经卸载的软件包的.deb文件。通过这种方式，您可以释放大量的磁盘空间。如果您的需求十分迫切，可以使用"),s("code",[this._v("apt-get clean")]),this._v("以释放更多空间。这个命令会将已安装软件包裹的.deb文件一并删除。大多数情况下您不会再用到这些.debs文件，因此如果您为磁盘空间不足 而感到焦头烂额，这个办法也许值得一试：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("$ "),s("span",{attrs:{class:"token function"}},[this._v("apt-get")]),this._v(" autoclean\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])}],!1,null,null,null);n.options.__file="Install.md";s.default=n.exports}}]);