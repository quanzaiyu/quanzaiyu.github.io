(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{474:function(e,t,r){"use strict";r.r(t);var s=r(1),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("为了在没网的情况下或体验更快的速度及更好的体验。毕竟自带yum源在国外。(本例用的是阿里yum源,其他的也可以)")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("引用百度百科的介绍")]),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("yum的关键之处是要有可靠的repository，顾名思义，这是软件的仓库，它可以是http或ftp站点，也可以是本地软件池，但必须包含rpm的header，header包括了rpm包的各种信息，包括描述，功能，提供的文件，依赖性等.正是收集了这些 header并加以分析，才能自动化地完成余下的任务。")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),r("p",[e._v("目的: 其他yum源(这里是阿里yum源)出错时,可以恢复系统自带yum源")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[e._v("下载阿里yum源到/etc/yum.repos.d")]),e._v(" "),r("ul",[e._m(14),e._v(" "),e._m(15),e._v(" "),r("li",[e._v("备注:\n"),r("ul",[r("li",[e._v("阿里yum源:"),r("a",{attrs:{href:"http://mirrors.aliyun.com/repo/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://mirrors.aliyun.com/repo/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("163(网易)yum源: "),r("a",{attrs:{href:"http://mirrors.163.com/.help/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://mirrors.163.com/.help/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("中科大的Linux安装镜像源："),r("a",{attrs:{href:"http://centos.ustc.edu.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://centos.ustc.edu.cn/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("搜狐的Linux安装镜像源："),r("a",{attrs:{href:"http://mirrors.sohu.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://mirrors.sohu.com/"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("北京首都在线科技："),r("a",{attrs:{href:"http://mirrors.yun-idc.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://mirrors.yun-idc.com/"),r("OutboundLink")],1)])])])])]),e._v(" "),e._m(16),e._v(" "),e._m(17)]),e._v(" "),r("p",[e._v("目的: 避免更换源后出现HTTP ERORR 404-Not Found Trying othermirror的bao报错")]),e._v(" "),e._m(18),e._v(" "),r("p",[e._v("目的: 将服务器上的软件包信息在本地缓存,以提高搜索安装软件的速度。")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"跟换-yum-安装源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟换-yum-安装源","aria-hidden":"true"}},[this._v("#")]),this._v(" 跟换 yum 安装源")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目的","aria-hidden":"true"}},[this._v("#")]),this._v(" 目的")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"yum-机制简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-机制简介","aria-hidden":"true"}},[this._v("#")]),this._v(" yum 机制简介")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[t("strong",[this._v("Yum")]),this._v("（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"搭建本地源（利用iso镜像）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建本地源（利用iso镜像）","aria-hidden":"true"}},[this._v("#")]),this._v(" 搭建本地源（利用ISO镜像）")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("拷贝iso镜像文件解压指/media/cdrom文件夹，如果是虚拟机可选择挂载")])]),this._v(" "),t("li",[t("p",[this._v("配置/etc/yum.repos.d/CentOS-Media.repo")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[c7-media]\nname=CentOS-$releasever - Media\nbaseurl=file:///media/CentOS/   #镜像文件路径\n       file:///media/cdrom/\n       file:///media/cdrecorder/\ngpgcheck=1    #标志开启key验证，开启必须要有gpgkey文件，也可以选择关闭\nenabled=1       #标志开启此yum源\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("重命名默认的网络源CentOS-Base.repo,避免冲突。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"4"}},[t("li",[this._v("重置yum")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ yum clean all   #清理yum缓存\n$ yum list    #显示yum列表\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"更换网络源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更换网络源","aria-hidden":"true"}},[this._v("#")]),this._v(" 更换网络源")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("备份系统自带yum源")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("$ sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bk\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("切换路径 "),t("code",[this._v("$ cd /etc/yum.repos.d")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("下载 "),t("code",[this._v("$ sudo wget -nc http://mirrors.aliyun.com/repo/Centos-7.repo")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("更改阿里yum源为系统默认yum源")]),this._v(" "),t("ul",[t("li",[t("code",[this._v("$ sudo mv Centos-7.repo CentOS-Base.repo")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("清除yum机制的本地缓存")]),this._v(" "),t("ul",[t("li",[t("code",[this._v("$ sudo yum clean all #一股脑全部清除")])]),this._v(" "),t("li",[t("code",[this._v("$ sudo yum list")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"5"}},[t("li",[t("p",[this._v("生成yum机制的本地缓存")]),this._v(" "),t("ul",[t("li",[t("code",[this._v("$ sudo yum makecache")])])])])])}],!1,null,null,null);i.options.__file="yum_origin.md";t.default=i.exports}}]);