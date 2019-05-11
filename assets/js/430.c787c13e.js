(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{902:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"容器技术-docker-网络基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器技术-docker-网络基础","aria-hidden":"true"}},[t._v("#")]),t._v(" 容器技术 Docker 网络基础")]),t._v(" "),a("p",[t._v("在宿主机上执行 ifconfig，可以看到一个 docker0 的虚拟网桥。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\ndocker0: flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4163"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 0.0.0.0\n        inet6 fe80::42:52ff:fe31:9057  prefixlen 64  scopeid 0x20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        ether 02:42:52:31:90:57  txqueuelen 0  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX packets 8  bytes 536 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("536.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 30  bytes 3054 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2.9 KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),a("p",[t._v("如果没有 ifconfig 命令，使用以下命令安装：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" net-tools.x86_64 -y\n")])])]),a("h2",{attrs:{id:"安装网桥管理程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装网桥管理程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装网桥管理程序")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bridge-utils\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bridge-utils\n")])])]),a("p",[t._v("先运行一个容器，查看网桥设备状态")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brctl show\nbridge name\tbridge "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\t\tSTP enabled\tinterfaces\ndocker0\t\t8000.024252319057\tno\t\tveth7bfa1b9\nvirbr0\t\t8000.525400e0956a\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\t\tvirbr0-nic\n")])])]),a("p",[t._v("可以看到在 docker0 的网桥设备上连接了一个 interface，使用 ifconfig 可以看到：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\nveth7bfa1b9: flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4163"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  mtu 1500\n        inet6 fe80::80bd:9fff:feb7:e5  prefixlen 64  scopeid 0x20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        ether 82:bd:9f:b7:00:e5  txqueuelen 0  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX packets 8  bytes 648 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("648.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 38  bytes 3702 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3.6 KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),a("h2",{attrs:{id:"网桥配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网桥配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 网桥配置")]),t._v(" "),a("h3",{attrs:{id:"修改-docker-网桥配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-docker-网桥配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 docker 网桥配置")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" docker0 192.168.40.100 netmask 255.255.255.0\n$ systemctl reload docker "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启docker服务生效")]),t._v("\n")])])]),a("h3",{attrs:{id:"添加-docker-虚拟网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加-docker-虚拟网桥","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加 docker 虚拟网桥")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brctl addbr br0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" br0 192.168.100.1 netmask 255.255.255.0\n")])])]),a("p",[t._v("然后编辑 docker 配置文件，添加如下信息：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/docker/daemon.json\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后重启 docker，启动一个容器并进入：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ systemctl restart docker\n$ docker start -i server2\n")])])]),a("p",[t._v("进入容器，可以看到已经分配了新的网桥给 docker：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@c096b413dc42:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ifconfig")]),t._v("\neth0: flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4163"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  mtu 1500\n        inet 192.168.100.2  netmask 255.255.255.0  broadcast 0.0.0.0\n        inet6 fe80::42:c0ff:fea8:6402  prefixlen 64  scopeid 0x20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        ether 02:42:c0:a8:64:02  txqueuelen 0  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX packets 8  bytes 648 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("648.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 8  bytes 648 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("648.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])])]),a("p",[t._v("::: warn 注意\n使用网桥管理工具创建的网桥会在下次物理机重启时失效。可以通过直接修改网桥配置文件达到重启不失效的目的。\n:::")]),t._v(" "),a("p",[t._v("解决方案如下，创建一个网络配置文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/sysconfig/network-scripts/ifcfg-br0\nIPADDR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("192.168.1.1\nTYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Bridge\nBOOTPROTO"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("static\nDEFROUTE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nPEERDNS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nPEERROUTES"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV4_FAILURE_FATAL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#IPV6INIT=yes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#IPV6_AUTOCONF=yes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#IPV6_DEFROUTE=yes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#IPV6_PEERDNS=yes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#IPV6_PEERROUTES=yes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#IPV6_FAILURE_FATAL=no")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#NAME=eno16777736")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#UUID=d0d3289e-9c2c-45f7-a569-c55aca9f0e8a")]),t._v("\nDEVICE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("br0\nONBOOT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\n")])])]),a("p",[t._v("重启网络服务，并配置网桥ip及子网掩码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" network restart\nRestarting network "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("via systemctl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  确定  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" br0 192.168.1.1 netmask 255.255.255.0\n")])])]),a("p",[t._v("参考："),a("a",{attrs:{href:"http://www.cnblogs.com/doscho/p/6225807.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos 7.2 网卡配置文件 及 linux bridge的静态配置"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"容器互联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器互联","aria-hidden":"true"}},[t._v("#")]),t._v(" 容器互联")]),t._v(" "),a("p",[t._v("默认情况下，docker并不会阻止容器之间的通讯，容器之间可以通过ip相互进行访问。")]),t._v(" "),a("p",[t._v("但是，如果重启docker服务，ip会发生改变，如果是提供服务的容器，使用之前的ip就不能进行访问了，因此使用ip进行通讯的方式并不可靠。")]),t._v(" "),a("p",[t._v("因此，在运行容器时，可以使用 "),a("code",[t._v("--link")]),t._v(" 参数来指定连接的容器，而不必担心ip地址的变化。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run --link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CONTAINER_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ALIAS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("IMAGE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("COMMOND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("首先创建一个 Dockerfile：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("FROM ubuntu:latest\nRUN apt-get update -y\nRUN apt-get upgrade -y\nRUN apt-get install -y ping\nRUN apt-get install -y nginx\nRUN apt-get install -y curl\nEXPOSE 80\nCMD /bin/bash\n")])])]),a("p",[t._v("执行此 Dockerfile 进行镜像构建：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker build -t test/ubuntu:1.0 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("然后通过这个镜像创建一个容器：cct1。")]),t._v(" "),a("p",[t._v("使用 link 选项关联两个容器：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run -it --name cct2 --link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cct1:webtest test/ubuntu:1.0\n")])])]),a("p",[t._v("进入 cct2，使用 ping 命令检查两个容器的互通性：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("root@1d8c06b3dc25:$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" webtest\n")])])]),a("p",[t._v("注意到使用的是cct1容器的别名，发现网络是通畅的。")]),t._v(" "),a("p",[t._v("查看 "),a("code",[t._v("/etc/hosts")]),t._v(" 文件，会发现虚拟主机 "),a("code",[t._v("webtest")]),t._v(" 已经自动加上了。使用 "),a("code",[t._v("env")]),t._v(" 命令也可看到很多关于 "),a("code",[t._v("WEBTEST")]),t._v(" 的环境变量。")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("docker restart cct1 cct2")]),t._v(" 重新启动容器，会发现 "),a("code",[t._v("ping webtest")]),t._v(" 依然生效，而检查 "),a("code",[t._v("/etc/hosts")]),t._v(" 文件会发现ip已经发生了改变，说明容器间通信不是基于 ip 的。")]),t._v(" "),a("h2",{attrs:{id:"docker-跨主机连接-使用网桥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-跨主机连接-使用网桥","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 跨主机连接: 使用网桥")]),t._v(" "),a("imgLink",{attrs:{src:"date/20181026/007.png"}}),t._v(" "),a("p",[t._v("原理：在两台主机上，配置可相互通讯的网桥，将不同主机中 Docker 的网桥连接到此网桥。")]),t._v(" "),a("h2",{attrs:{id:"docker-跨主机连接-使用-open-vswitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-跨主机连接-使用-open-vswitch","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 跨主机连接: 使用 Open vSwitch")]),t._v(" "),a("p",[t._v("实验环境：两台虚拟机 (centOS)")]),t._v(" "),a("p",[t._v("A主机:")]),t._v(" "),a("ul",[a("li",[t._v("宿主机IP ：192.168.42.130")]),t._v(" "),a("li",[t._v("Docker 容器中 IP : 192.168.1.2")]),t._v(" "),a("li",[t._v("Docker 容器连接的网桥地址（br0） : 192.168.1.1")])]),t._v(" "),a("p",[t._v("B主机:")]),t._v(" "),a("ul",[a("li",[t._v("宿主机IP ：192.168.42.131")]),t._v(" "),a("li",[t._v("Docker 容器中 IP : 192.168.2.2")]),t._v(" "),a("li",[t._v("Docker 容器连接的网桥地址（br0） : 192.168.2.1")])]),t._v(" "),a("p",[t._v("使两部虚拟机中的 docker 能互通。")]),t._v(" "),a("h3",{attrs:{id:"什么是-open-vswitch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-open-vswitch","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 Open VSwitch")]),t._v(" "),a("p",[t._v("ovs （Open VSwitch） 是一个高质量、多层虚拟交换机，使用开源Apache2.0许可协议，由 Nicira Networks 开发，主要实现代码为可移植的 C 代码。它的目的是让大规模网络自动化可以通过编程扩展，同时仍然支持标准的管理接口和协议（例如 NetFlow，SFlow，SPAN，RSPAN，CLI，LACP，802.lag）")]),t._v(" "),a("imgLink",{attrs:{src:"date/20181026/008.png"}}),t._v(" "),a("h3",{attrs:{id:"什么是-gre-隧道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-gre-隧道","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 GRE 隧道")]),t._v(" "),a("p",[t._v("GRE：通用路由协议封装。")]),t._v(" "),a("p",[t._v("隧道技术（Tunneling）是一种通过使用互联网络的基础设施在网络之间传递数据的方式。使用隧道传递的数据(或负载)可以是不同协议的数据帧或包。隧道协议将其它协议的数据帧或包重新封裝然后通过隧道发送。新的帧头提供路由信息,以便通过互联网传递被封装的负载数据。")]),t._v(" "),a("h3",{attrs:{id:"使用-ovs-实现跨主机通讯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ovs-实现跨主机通讯","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 ovs 实现跨主机通讯")]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openvswitch-switch\n// or\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" openvswitch\n")])])]),a("p",[t._v("检测安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ovs-vsctl show\nfdbecc9f-193a-45c0-b1b7-599d53e22df9\n    ovs_version: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.10.1"')]),t._v("\n")])])]),a("p",[t._v("A主机中的配置：")]),t._v(" "),a("p",[t._v("添加 ovs 网桥 obr0")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ovs-vsctl add-br obr0\n")])])]),a("p",[t._v("为 obr0 添加接口 gre0")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ovs-vsctl add-port obr0 gre0\novs-vsctl: Error detected "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" setting up "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gre0'")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" could not "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" network device gre0 to ofproto "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Invalid argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".  See ovs-vswitchd log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details.\novs-vsctl: The default log directory is "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/var/log/openvswitch"')]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n\n$ ovs-vsctl show\nfdbecc9f-193a-45c0-b1b7-599d53e22df9\n    Bridge "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obr0"')]),t._v("\n        Port "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gre0"')]),t._v("\n            Interface "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gre0"')]),t._v("\n                error: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"could not add network device gre0 to ofproto (Invalid argument)"')]),t._v("\n        Port "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obr0"')]),t._v("\n            Interface "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obr0"')]),t._v("\n                type: internal\n    ovs_version: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.10.1"')]),t._v("\n")])])]),a("p",[t._v("设置接口类型")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ovs-vsctl "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" interface gre0 type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gre options:remote_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("192.168.42.131\n\n$ ovs-vsctl show\nfdbecc9f-193a-45c0-b1b7-599d53e22df9\n    Bridge "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obr0"')]),t._v("\n        Port "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gre0"')]),t._v("\n            Interface "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gre0"')]),t._v("\n                type: gre\n                options: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("remote_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.42.131"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        Port "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obr0"')]),t._v("\n            Interface "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"obr0"')]),t._v("\n                type: internal\n    ovs_version: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.10.1"')]),t._v("\n")])])]),a("p",[t._v("使用网桥管理工具在物理机新建一个 br0 的网桥，并设置其 ip")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brctl addbr br0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" br0 192.168.1.1 netmask 255.255.255.0\n")])])]),a("p",[t._v("为 br0 网桥添加 ovs 网桥的连接")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ brctl addif br0 obr0\n$ brctl show\nbridge name\tbridge "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\t\tSTP enabled\tinterfaces\nbr0\t\t8000.aed32285704b\tno\t\tobr0\ndocker0\t\t8000.0242a6aa2d07\tno\nvirbr0\t\t8000.525400e0956a\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\t\tvirbr0-nic\n")])])]),a("p",[t._v("在 docker 配置文件 "),a("code",[t._v("/etc/docker/daemon.json")]),t._v(" 中添加：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bridge"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"br0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("重启 docker 服务：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ systemctl restart docker\n")])])]),a("p",[t._v("启动容器，进行连通性测试：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker start -i centos\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@ab6398eaa692 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ifconfig")]),t._v("\neth0: flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4163"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UP,BROADCAST,RUNNING,MULTICAST"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  mtu 1500\n        inet 192.168.1.2  netmask 255.255.255.0  broadcast 0.0.0.0\n        inet6 fe80::42:c0ff:fea8:102  prefixlen 64  scopeid 0x20"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        ether 02:42:c0:a8:01:02  txqueuelen 0  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ethernet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX packets 17  bytes 1947 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.9 KiB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 6  bytes 508 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("508.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("73"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UP,LOOPBACK,RUNNING"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        loop  txqueuelen 1000  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Local Loopback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX packets 0  bytes 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.0 B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@ab6398eaa692 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping 192.168.42.131")]),t._v("\nPING 192.168.42.131 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("192.168.42.131"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 56"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("84"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bytes of data.\n64 bytes from 192.168.42.131: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("63 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0.298 ms\n64 bytes from 192.168.42.131: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("63 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0.310 ms\n64 bytes from 192.168.42.131: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("3 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("63 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0.331 ms\n^C\n--- 192.168.42.131 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" statistics ---\n3 packets transmitted, 3 received, 0% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" 2000ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0.298/0.313/0.331/0.013 ms\n")])])]),a("p",[t._v("可以看到，进入容器使用 ping 命令连接另一台虚拟主机成功。")]),t._v(" "),a("p",[t._v("同样的步骤，在另一台虚拟机（B主机）中进行相同的配置：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v(" br0 192.168.2.1 netmask 255.255.255.0\n$ ovs-vsctl "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" interface gre0 type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gre options:remote_ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("192.168.42.130\n$ brctl addif br0 obr0\n")])])]),a("p",[t._v("除此之外，还需要在两部虚拟机的路由表中相互配置对方的docker网段：")]),t._v(" "),a("p",[t._v("先查看路由表：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@node1 docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# route")]),t._v("\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         gateway         0.0.0.0         UG    100    0        0 ens33\n192.168.1.0     0.0.0.0         255.255.255.0   U     425    0        0 br0\n192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens33\n192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A 主机")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 192.168.2.0/24 via 192.168.42.131 dev ens33\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# B 主机")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 192.168.1.0/24 via 192.168.42.130 dev ens33\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("route")]),t._v(" 命令查看路由表，可以看到相关配置已经在路由表中了。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ route\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         gateway         0.0.0.0         UG    100    0        0 ens33\n192.168.1.0     0.0.0.0         255.255.255.0   U     425    0        0 br0\n192.168.2.0     192.168.42.131  255.255.255.0   UG    0      0        0 ens33\n192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens33\n192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0\n")])])]),a("p",[t._v("这时，即可实现两台虚拟主机中的 docker 互通。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A主机中的 docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@ab6398eaa692 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping 192.168.2.2")]),t._v("\nPING 192.168.2.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("192.168.2.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 56"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("84"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bytes of data.\n64 bytes from 192.168.2.2: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("62 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0.400 ms\n64 bytes from 192.168.2.2: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("62 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1.15 ms\n^C\n--- 192.168.2.2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" statistics ---\n2 packets transmitted, 2 received, 0% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" 1000ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0.400/0.775/1.150/0.375 ms\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# B主机中的 docker")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@ab6398eaa692 /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ping 192.168.1.2")]),t._v("\nPING 192.168.1.2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("192.168.1.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 56"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("84"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" bytes of data.\n64 bytes from 192.168.1.2: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("62 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0.299 ms\n64 bytes from 192.168.1.2: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("62 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0.338 ms\n^C\n--- 192.168.1.2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" statistics ---\n2 packets transmitted, 2 received, 0% packet loss, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" 1000ms\nrtt min/avg/max/mdev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0.299/0.318/0.338/0.026 ms\n")])])]),a("h3",{attrs:{id:"错误解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误解决")]),t._v(" "),a("p",[a("code",[t._v("ovs-vsctl: unix:/usr/local/var/run/openvswitch/db.sock: database connection failed")]),t._v(" 解决方案")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ovsdb-server  --remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("punix:/usr/local/var/run/openvswitch/db.sock \\\n                --remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db:Open_vSwitch,Open_vSwitch,manager_options \\\n                --private-key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db:Open_vSwitch,SSL,private_key \\\n                --certificate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db:Open_vSwitch,SSL,certificate \\\n                --bootstrap-ca-cert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db:Open_vSwitch,SSL,ca_cert \\\n                --pidfile --detach\n$ ovs-vsctl --no-wait init\n$ ovs-vswitchd --pidfile --detach\n")])])]),a("p",[t._v("编写脚本，使其开机自启：")]),t._v(" "),a("p",[a("code",[t._v("/root/autorun.sh")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\novsdb-server --remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("punix:/usr/local/var/run/openvswitch/db.sock --remote"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db:Open_vSwitch,Open_vSwitch,manager_options --pidfile --detach\novs-vsctl --no-wait init\novs-vswitchd --pidfile --detach --log-file\n")])])]),a("p",[t._v("修改其权限")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 777 autorun.sh\n")])])]),a("p",[t._v("将其添加到开机自启列表，把路径添加到 "),a("code",[t._v("/etc/rc.d/rc.local")]),t._v(" 中")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" /root/autorun.sh\n")])])]),a("h2",{attrs:{id:"docker-跨主机连接-使用-weave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-跨主机连接-使用-weave","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 跨主机连接: 使用 weave")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/knight_zhen/article/details/51733255",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 网络不通的解决方法"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/tantexian/article/details/46707175",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenvSwitch完全使用手册"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/xyq54/article/details/51371819",target:"_blank",rel:"noopener noreferrer"}},[t._v("ovs-vsctl: unix:/usr/local/var/run/openvswitch/db.sock: database connection failed"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=n.exports}}]);