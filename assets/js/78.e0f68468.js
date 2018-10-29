(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{585:function(s,a,t){"use strict";t.r(a);var n={props:["slot-key"]},e=t(0),r=Object(e.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("h1",{attrs:{id:"docker-网络基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-网络基础","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 网络基础")]),s._v(" "),t("p",[s._v("在宿主机上执行 ifconfig，可以看到一个 docker0 的虚拟网桥。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\ndocker0: flags"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("4163"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 0.0.0.0\n        inet6 fe80::42:52ff:fe31:9057  prefixlen 64  scopeid 0x20"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("link"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        ether 02:42:52:31:90:57  txqueuelen 0  "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets 8  bytes 536 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("536.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 30  bytes 3054 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("2.9 KiB"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("如果没有 ifconfig 命令，使用以下命令安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools.x86_64 -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"安装网桥管理程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装网桥管理程序","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装网桥管理程序")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" bridge-utils\n"),t("span",{attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n$ "),t("span",{attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" bridge-utils\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("先运行一个容器，查看网桥设备状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ brctl show\nbridge name\tbridge "),t("span",{attrs:{class:"token function"}},[s._v("id")]),s._v("\t\tSTP enabled\tinterfaces\ndocker0\t\t8000.024252319057\tno\t\tveth7bfa1b9\nvirbr0\t\t8000.525400e0956a\t"),t("span",{attrs:{class:"token function"}},[s._v("yes")]),s._v("\t\tvirbr0-nic\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("可以看到在 docker0 的网桥设备上连接了一个 interface，使用 ifconfig 可以看到：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\nveth7bfa1b9: flags"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("4163"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu 1500\n        inet6 fe80::80bd:9fff:feb7:e5  prefixlen 64  scopeid 0x20"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("link"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        ether 82:bd:9f:b7:00:e5  txqueuelen 0  "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets 8  bytes 648 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("648.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 38  bytes 3702 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("3.6 KiB"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"网桥配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网桥配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 网桥配置")]),s._v(" "),t("h3",{attrs:{id:"修改-docker-网桥配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-docker-网桥配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 docker 网桥配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" docker0 192.168.40.100 netmask 255.255.255.0\n$ systemctl reload docker "),t("span",{attrs:{class:"token comment"}},[s._v("# 重启docker服务生效")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"添加-docker-虚拟网桥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-docker-虚拟网桥","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加 docker 虚拟网桥")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ brctl addbr br0\n$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" br0 192.168.100.1 netmask 255.255.255.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("然后编辑 docker 配置文件，添加如下信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ vim /etc/docker/daemon.json\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token string"}},[s._v('"bridge"')]),t("span",{attrs:{class:"token keyword"}},[s._v(":")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"br0"')]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("然后重启 docker，启动一个容器并进入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ systemctl restart docker\n$ docker start -i server2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("进入容器，可以看到已经分配了新的网桥给 docker：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("root@c096b413dc42:/"),t("span",{attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\neth0: flags"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("4163"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu 1500\n        inet 192.168.100.2  netmask 255.255.255.0  broadcast 0.0.0.0\n        inet6 fe80::42:c0ff:fea8:6402  prefixlen 64  scopeid 0x20"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("link"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        ether 02:42:c0:a8:64:02  txqueuelen 0  "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets 8  bytes 648 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("648.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8  bytes 648 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("648.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("::: warn 注意\n使用网桥管理工具创建的网桥会在下次物理机重启时失效。可以通过直接修改网桥配置文件达到重启不失效的目的。\n:::")]),s._v(" "),t("p",[s._v("解决方案如下，创建一个网络配置文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ vim /etc/sysconfig/network-scripts/ifcfg-br0\nIPADDR"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.1.1\nTYPE"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("Bridge\nBOOTPROTO"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("static\nDEFROUTE"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\nPEERDNS"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\nPEERROUTES"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\nIPV4_FAILURE_FATAL"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),t("span",{attrs:{class:"token comment"}},[s._v("#IPV6INIT=yes")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#IPV6_AUTOCONF=yes")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#IPV6_DEFROUTE=yes")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#IPV6_PEERDNS=yes")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#IPV6_PEERROUTES=yes")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#IPV6_FAILURE_FATAL=no")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#NAME=eno16777736")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("#UUID=d0d3289e-9c2c-45f7-a569-c55aca9f0e8a")]),s._v("\nDEVICE"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("br0\nONBOOT"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("重启网络服务，并配置网桥ip及子网掩码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\nRestarting network "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("via systemctl"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":                        "),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  确定  "),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" br0 192.168.1.1 netmask 255.255.255.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("参考："),t("a",{attrs:{href:"http://www.cnblogs.com/doscho/p/6225807.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("centos 7.2 网卡配置文件 及 linux bridge的静态配置"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"容器互联"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器互联","aria-hidden":"true"}},[s._v("#")]),s._v(" 容器互联")]),s._v(" "),t("p",[s._v("默认情况下，docker并不会阻止容器之间的通讯，容器之间可以通过ip相互进行访问。")]),s._v(" "),t("p",[s._v("但是，如果重启docker服务，ip会发生改变，如果是提供服务的容器，使用之前的ip就不能进行访问了，因此使用ip进行通讯的方式并不可靠。")]),s._v(" "),t("p",[s._v("因此，在运行容器时，可以使用 "),t("code",[s._v("--link")]),s._v(" 参数来指定连接的容器，而不必担心ip地址的变化。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run --link"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CONTAINER_NAME"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ALIAS"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IMAGE"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMOND"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("首先创建一个 Dockerfile：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("FROM ubuntu:latest\nRUN apt-get update -y\nRUN apt-get upgrade -y\nRUN apt-get install -y ping\nRUN apt-get install -y nginx\nRUN apt-get install -y curl\nEXPOSE 80\nCMD /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("执行此 Dockerfile 进行镜像构建：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker build -t test/ubuntu:1.0 "),t("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后通过这个镜像创建一个容器：cct1。")]),s._v(" "),t("p",[s._v("使用 link 选项关联两个容器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -it --name cct2 --link"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("cct1:webtest test/ubuntu:1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入 cct2，使用 ping 命令检查两个容器的互通性：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("root@1d8c06b3dc25:$ "),t("span",{attrs:{class:"token function"}},[s._v("ping")]),s._v(" webtest\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注意到使用的是cct1容器的别名，发现网络是通畅的。")]),s._v(" "),t("p",[s._v("查看 "),t("code",[s._v("/etc/hosts")]),s._v(" 文件，会发现虚拟主机 "),t("code",[s._v("webtest")]),s._v(" 已经自动加上了。使用 "),t("code",[s._v("env")]),s._v(" 命令也可看到很多关于 "),t("code",[s._v("WEBTEST")]),s._v(" 的环境变量。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("docker restart cct1 cct2")]),s._v(" 重新启动容器，会发现 "),t("code",[s._v("ping webtest")]),s._v(" 依然生效，而检查 "),t("code",[s._v("/etc/hosts")]),s._v(" 文件会发现ip已经发生了改变，说明容器间通信不是基于 ip 的。")])])},[],!1,null,null,null);r.options.__file="Network.md";a.default=r.exports}}]);