(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{833:function(s,t,n){"use strict";n.r(t);var e=n(1),i=Object(e.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"解决-centos7-不能联网且-ifconfig-出现-command-not-found"}},[s._v("解决 Centos7 不能联网且 ifconfig 出现 command not found")]),s._m(0),s._m(1),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),n("p",[s._v("使用 ping 测试一下是否可以联网。")]),n("p",[s._v("这样 yum，wget 等都可以用了。")]),n("h2",{attrs:{id:"配置网络详解"}},[s._v("配置网络详解")]),n("p",[s._v("开启网络的具体配置步骤为:")]),s._m(7),s._m(8),n("h2",{attrs:{id:"安装-ifconfig-命令"}},[s._v("安装 ifconfig 命令")]),n("p",[s._v("不推荐再在 centOS 中安装 ifconfig 命令，因为系统已默认使用 ip 命令替代 ifconfig 命令，不过仍然可以安装。")]),n("p",[s._v("首先查找包括 ifconfig 的包")]),s._m(9),n("p",[s._v("通过yum search 这个命令发现 ifconfig 这个命令是在 net-tools.x86_64 这个包里，运行")]),s._m(10),n("h2",{attrs:{id:"参考资料"}},[s._v("参考资料")]),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/qq_31382921/article/details/52174626",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决 Centos7 不能联网且 ifconfig 出现 command not found"),n("OutboundLink")],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在虚拟机中以最小化方式安装 centos7 后无法上网，因为 "),t("code",[this._v("centos7")]),this._v(" 默认网卡未激活，网络服务默认是关闭的状态。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("而且在 "),t("code",[this._v("sbin")]),this._v(" 目录中没有 "),t("code",[this._v("ifconfig")]),this._v(" 文件，这是因为 centos7 已经不使用 ifconfig 命令了，已经用 "),t("code",[this._v("ip")]),this._v(" 命令代替。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("并且网卡名称也不是 "),t("code",[this._v("eth0")]),this._v(" 了，而是改成 "),t("code",[this._v("ifcfg-eth0")]),this._v(" 了。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("解决ifconfig不可用："),t("code",[this._v("ip addr")]),this._v(" 即查看分配网卡情况。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("激活网卡：在文件 "),t("code",[this._v("/etc/sysconfig/network-scripts/ifcfg-eth0")]),this._v(" 中。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用 vi 进入编辑模式，将 "),t("code",[this._v("ONBOOT=no")]),this._v(" 改为 "),t("code",[this._v("ONBOOT=yes")]),this._v(" 就 OK 了。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("保存后重启网卡："),t("code",[this._v("service network restart")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ol",[t("li",[this._v("打开终端，切换到root账户（普通账户通常没有修改网络配置文件的权限，所以要切换到root账户）")]),t("li",[this._v("切换到网卡配置文件的目录 "),t("code",[this._v("cd /etc/sysconfig/network-scripts/")])]),t("li",[this._v("找到网卡的配置文件（centos7修改了网卡的命名规则，不再是我们熟悉的eth0了，而是ifcfg-eno+一串数字）")]),t("li",[this._v("用 vi 打开这个文件")]),t("li",[this._v("最后一行的onboot选项，把默认的no改成yes")]),t("li",[this._v("用命令 :wq! 保存退出")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost network-scripts]# cat ifcfg-ens33 \nTYPE=Ethernet\nBOOTPROTO=dhcp\nDEFROUTE=yes\nPEERDNS=yes\nPEERROUTES=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_PEERDNS=yes\nIPV6_PEERROUTES=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=ens33\nUUID=12509981-530b-403b-bbc0-493447de2d1f\nDEVICE=ens33\nONBOOT=yes\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yum search "),t("span",{attrs:{class:"token function"}},[this._v("ifconfig")]),this._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yum "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" net-tools\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);t.default=i.exports}}]);