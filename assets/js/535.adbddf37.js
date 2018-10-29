(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{300:function(s,n,e){"use strict";e.r(n);var t={props:["slot-key"]},a=e(0),i=Object(a.a)(t,function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[e("h1",{attrs:{id:"解决-centos7-不能联网且-ifconfig-出现-command-not-found"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决-centos7-不能联网且-ifconfig-出现-command-not-found","aria-hidden":"true"}},[s._v("#")]),s._v(" 解决 Centos7 不能联网且 ifconfig 出现 command not found")]),s._v(" "),e("p",[s._v("在虚拟机中以最小化方式安装 centos7 后无法上网，因为 "),e("code",[s._v("centos7")]),s._v(" 默认网卡未激活，网络服务默认是关闭的状态。")]),s._v(" "),e("p",[s._v("而且在 "),e("code",[s._v("sbin")]),s._v(" 目录中没有 "),e("code",[s._v("ifconfig")]),s._v(" 文件，这是因为 centos7 已经不使用 ifconfig 命令了，已经用 "),e("code",[s._v("ip")]),s._v(" 命令代替。")]),s._v(" "),e("p",[s._v("并且网卡名称也不是 "),e("code",[s._v("eth0")]),s._v(" 了，而是改成 "),e("code",[s._v("ifcfg-eth0")]),s._v(" 了。")]),s._v(" "),e("p",[s._v("解决ifconfig不可用："),e("code",[s._v("ip addr")]),s._v(" 即查看分配网卡情况。")]),s._v(" "),e("p",[s._v("激活网卡：在文件 "),e("code",[s._v("/etc/sysconfig/network-scripts/ifcfg-eth0")]),s._v(" 中。")]),s._v(" "),e("p",[s._v("使用 vi 进入编辑模式，将 "),e("code",[s._v("ONBOOT=no")]),s._v(" 改为 "),e("code",[s._v("ONBOOT=yes")]),s._v(" 就 OK 了。")]),s._v(" "),e("p",[s._v("保存后重启网卡："),e("code",[s._v("service network restart")])]),s._v(" "),e("p",[s._v("使用 ping 测试一下是否可以联网。")]),s._v(" "),e("p",[s._v("这样 yum，wget 等都可以用了。")]),s._v(" "),e("h2",{attrs:{id:"配置网络详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置网络详解","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置网络详解")]),s._v(" "),e("p",[s._v("开启网络的具体配置步骤为:")]),s._v(" "),e("ol",[e("li",[s._v("打开终端，切换到root账户（普通账户通常没有修改网络配置文件的权限，所以要切换到root账户）")]),s._v(" "),e("li",[s._v("切换到网卡配置文件的目录 "),e("code",[s._v("cd /etc/sysconfig/network-scripts/")])]),s._v(" "),e("li",[s._v("找到网卡的配置文件（centos7修改了网卡的命名规则，不再是我们熟悉的eth0了，而是ifcfg-eno+一串数字）")]),s._v(" "),e("li",[s._v("用 vi 打开这个文件")]),s._v(" "),e("li",[s._v("最后一行的onboot选项，把默认的no改成yes")]),s._v(" "),e("li",[s._v("用命令 :wq! 保存退出")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost network-scripts]# cat ifcfg-ens33 \nTYPE=Ethernet\nBOOTPROTO=dhcp\nDEFROUTE=yes\nPEERDNS=yes\nPEERROUTES=yes\nIPV4_FAILURE_FATAL=no\nIPV6INIT=yes\nIPV6_AUTOCONF=yes\nIPV6_DEFROUTE=yes\nIPV6_PEERDNS=yes\nIPV6_PEERROUTES=yes\nIPV6_FAILURE_FATAL=no\nIPV6_ADDR_GEN_MODE=stable-privacy\nNAME=ens33\nUUID=12509981-530b-403b-bbc0-493447de2d1f\nDEVICE=ens33\nONBOOT=yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"安装-ifconfig-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-ifconfig-命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 ifconfig 命令")]),s._v(" "),e("p",[s._v("不推荐再在 centOS 中安装 ifconfig 命令，因为系统已默认使用 ip 命令替代 ifconfig 命令，不过仍然可以安装。")]),s._v(" "),e("p",[s._v("首先查找包括 ifconfig 的包")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum search "),e("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过yum search 这个命令发现 ifconfig 这个命令是在 net-tools.x86_64 这个包里，运行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("yum "),e("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_31382921/article/details/52174626",target:"_blank",rel:"noopener noreferrer"}},[s._v("解决 Centos7 不能联网且 ifconfig 出现 command not found"),e("OutboundLink")],1)])])},[],!1,null,null,null);i.options.__file="no_ipconfig.md";n.default=i.exports}}]);