(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{248:function(s,a,t){"use strict";t.r(a);var n={props:["slot-key"]},e=t(0),r=Object(e.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("h1",{attrs:{id:"docker-跨主机连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-跨主机连接","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker 跨主机连接")]),s._v(" "),t("h2",{attrs:{id:"使用网桥连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用网桥连接","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用网桥连接")]),s._v(" "),t("imgLink",{attrs:{src:"date/20181026/007.png/small"}}),s._v(" "),t("p",[s._v("原理：在两台主机上，配置可相互通讯的网桥，将不同主机中 Docker 的网桥连接到此网桥。")]),s._v(" "),t("h2",{attrs:{id:"使用-open-vswitch-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-open-vswitch-连接","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 Open vSwitch 连接")]),s._v(" "),t("p",[s._v("实验环境：两台虚拟机 (centOS)")]),s._v(" "),t("p",[s._v("A主机:")]),s._v(" "),t("ul",[t("li",[s._v("宿主机IP ：192.168.42.130")]),s._v(" "),t("li",[s._v("Docker 容器中 IP : 192.168.1.2")]),s._v(" "),t("li",[s._v("Docker 容器连接的网桥地址（br0） : 192.168.1.1")])]),s._v(" "),t("p",[s._v("B主机:")]),s._v(" "),t("ul",[t("li",[s._v("宿主机IP ：192.168.42.131")]),s._v(" "),t("li",[s._v("Docker 容器中 IP : 192.168.2.2")]),s._v(" "),t("li",[s._v("Docker 容器连接的网桥地址（br0） : 192.168.2.1")])]),s._v(" "),t("p",[s._v("使两部虚拟机中的 docker 能互通。")]),s._v(" "),t("h3",{attrs:{id:"什么是-open-vswitch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-open-vswitch","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是 Open VSwitch")]),s._v(" "),t("p",[s._v("ovs （Open VSwitch） 是一个高质量、多层虚拟交换机，使用开源Apache2.0许可协议，由 Nicira Networks 开发，主要实现代码为可移植的 C 代码。它的目的是让大规模网络自动化可以通过编程扩展，同时仍然支持标准的管理接口和协议（例如 NetFlow，SFlow，SPAN，RSPAN，CLI，LACP，802.lag）")]),s._v(" "),t("imgLink",{attrs:{src:"date/20181026/008.png/small"}}),s._v(" "),t("h3",{attrs:{id:"什么是-gre-隧道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-gre-隧道","aria-hidden":"true"}},[s._v("#")]),s._v(" 什么是 GRE 隧道")]),s._v(" "),t("p",[s._v("GRE：通用路由协议封装。")]),s._v(" "),t("p",[s._v("隧道技术（Tunneling）是一种通过使用互联网络的基础设施在网络之间传递数据的方式。使用隧道传递的数据(或负载)可以是不同协议的数据帧或包。隧道协议将其它协议的数据帧或包重新封裝然后通过隧道发送。新的帧头提供路由信息,以便通过互联网传递被封装的负载数据。")]),s._v(" "),t("h3",{attrs:{id:"使用-ovs-实现跨主机通讯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-ovs-实现跨主机通讯","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 ovs 实现跨主机通讯")]),s._v(" "),t("p",[s._v("安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" openvswitch-switch\n// or\n$ yum "),t("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" openvswitch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("检测安装")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ovs-vsctl show\nfdbecc9f-193a-45c0-b1b7-599d53e22df9\n    ovs_version: "),t("span",{attrs:{class:"token string"}},[s._v('"2.10.1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("hr"),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("A主机中的配置：")]),s._v(" "),t("p",[s._v("添加 ovs 网桥 obr0")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ovs-vsctl add-br obr0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("为 obr0 添加接口 gre0")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ovs-vsctl add-port obr0 gre0\novs-vsctl: Error detected "),t("span",{attrs:{class:"token keyword"}},[s._v("while")]),s._v(" setting up "),t("span",{attrs:{class:"token string"}},[s._v("'gre0'")]),t("span",{attrs:{class:"token keyword"}},[s._v(":")]),s._v(" could not add network device gre0 to ofproto "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Invalid argument"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".  See ovs-vswitchd log "),t("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\novs-vsctl: The default log directory is "),t("span",{attrs:{class:"token string"}},[s._v('"/usr/local/var/log/openvswitch"')]),t("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v("\n\n$ ovs-vsctl show\nfdbecc9f-193a-45c0-b1b7-599d53e22df9\n    Bridge "),t("span",{attrs:{class:"token string"}},[s._v('"obr0"')]),s._v("\n        Port "),t("span",{attrs:{class:"token string"}},[s._v('"gre0"')]),s._v("\n            Interface "),t("span",{attrs:{class:"token string"}},[s._v('"gre0"')]),s._v("\n                error: "),t("span",{attrs:{class:"token string"}},[s._v('"could not add network device gre0 to ofproto (Invalid argument)"')]),s._v("\n        Port "),t("span",{attrs:{class:"token string"}},[s._v('"obr0"')]),s._v("\n            Interface "),t("span",{attrs:{class:"token string"}},[s._v('"obr0"')]),s._v("\n                type: internal\n    ovs_version: "),t("span",{attrs:{class:"token string"}},[s._v('"2.10.1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("设置接口类型")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ovs-vsctl "),t("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" interface gre0 type"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("gre options:remote_ip"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.42.131\n\n$ ovs-vsctl show\nfdbecc9f-193a-45c0-b1b7-599d53e22df9\n    Bridge "),t("span",{attrs:{class:"token string"}},[s._v('"obr0"')]),s._v("\n        Port "),t("span",{attrs:{class:"token string"}},[s._v('"gre0"')]),s._v("\n            Interface "),t("span",{attrs:{class:"token string"}},[s._v('"gre0"')]),s._v("\n                type: gre\n                options: "),t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("remote_ip"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token string"}},[s._v('"192.168.42.131"')]),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        Port "),t("span",{attrs:{class:"token string"}},[s._v('"obr0"')]),s._v("\n            Interface "),t("span",{attrs:{class:"token string"}},[s._v('"obr0"')]),s._v("\n                type: internal\n    ovs_version: "),t("span",{attrs:{class:"token string"}},[s._v('"2.10.1"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("使用网桥管理工具在物理机新建一个 br0 的网桥，并设置其 ip")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ brctl addbr br0\n$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" br0 192.168.1.1 netmask 255.255.255.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("为 br0 网桥添加 ovs 网桥的连接")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ brctl addif br0 obr0\n$ brctl show\nbridge name\tbridge "),t("span",{attrs:{class:"token function"}},[s._v("id")]),s._v("\t\tSTP enabled\tinterfaces\nbr0\t\t8000.aed32285704b\tno\t\tobr0\ndocker0\t\t8000.0242a6aa2d07\tno\t\t\nvirbr0\t\t8000.525400e0956a\t"),t("span",{attrs:{class:"token function"}},[s._v("yes")]),s._v("\t\tvirbr0-nic\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("在 docker 配置文件 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中添加：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{attrs:{class:"token property"}},[s._v('"bridge"')]),t("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{attrs:{class:"token string"}},[s._v('"br0"')]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("重启 docker 服务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ systemctl restart docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动容器，进行连通性测试：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker start -i centos\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ab6398eaa692 /"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{attrs:{class:"token comment"}},[s._v("# ifconfig")]),s._v("\neth0: flags"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("4163"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("UP,BROADCAST,RUNNING,MULTICAST"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu 1500\n        inet 192.168.1.2  netmask 255.255.255.0  broadcast 0.0.0.0\n        inet6 fe80::42:c0ff:fea8:102  prefixlen 64  scopeid 0x20"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("link"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        ether 02:42:c0:a8:01:02  txqueuelen 0  "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ethernet"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets 17  bytes 1947 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.9 KiB"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 6  bytes 508 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("508.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nlo: flags"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("73"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("UP,LOOPBACK,RUNNING"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  mtu 65536\n        inet 127.0.0.1  netmask 255.0.0.0\n        inet6 ::1  prefixlen 128  scopeid 0x10"),t("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("host"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        loop  txqueuelen 1000  "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Local Loopback"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX packets 0  bytes 0 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.0 B"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ab6398eaa692 /"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{attrs:{class:"token comment"}},[s._v("# ping 192.168.42.131")]),s._v("\nPING 192.168.42.131 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("192.168.42.131"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 56"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("84"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n64 bytes from 192.168.42.131: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("63 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.298 ms\n64 bytes from 192.168.42.131: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("2 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("63 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.310 ms\n64 bytes from 192.168.42.131: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("3 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("63 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.331 ms\n^C\n--- 192.168.42.131 "),t("span",{attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n3 packets transmitted, 3 received, 0% packet loss, "),t("span",{attrs:{class:"token function"}},[s._v("time")]),s._v(" 2000ms\nrtt min/avg/max/mdev "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0.298/0.313/0.331/0.013 ms\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("p",[s._v("可以看到，进入容器使用 ping 命令连接另一台虚拟主机成功。")]),s._v(" "),t("hr"),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("同样的步骤，在另一台虚拟机（B主机）中进行相同的配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" br0 192.168.2.1 netmask 255.255.255.0\n$ ovs-vsctl "),t("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" interface gre0 type"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("gre options:remote_ip"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("192.168.42.130\n$ brctl addif br0 obr0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("除此之外，还需要在两部虚拟机的路由表中相互配置对方的docker网段：")]),s._v(" "),t("p",[s._v("先查看路由表：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 docker"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{attrs:{class:"token comment"}},[s._v("# route")]),s._v("\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         gateway         0.0.0.0         UG    100    0        0 ens33\n192.168.1.0     0.0.0.0         255.255.255.0   U     425    0        0 br0\n192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens33\n192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("# A 主机")]),s._v("\n$ ip route add 192.168.2.0/24 via 192.168.42.131 dev ens33\n\n"),t("span",{attrs:{class:"token comment"}},[s._v("# B 主机")]),s._v("\n$ ip route add 192.168.1.0/24 via 192.168.42.130 dev ens33\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("route")]),s._v(" 命令查看路由表，可以看到相关配置已经在路由表中了。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ route\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         gateway         0.0.0.0         UG    100    0        0 ens33\n192.168.1.0     0.0.0.0         255.255.255.0   U     425    0        0 br0\n192.168.2.0     192.168.42.131  255.255.255.0   UG    0      0        0 ens33\n192.168.42.0    0.0.0.0         255.255.255.0   U     100    0        0 ens33\n192.168.122.0   0.0.0.0         255.255.255.0   U     0      0        0 virbr0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这时，即可实现两台虚拟主机中的 docker 互通。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token comment"}},[s._v("# A主机中的 docker")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ab6398eaa692 /"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{attrs:{class:"token comment"}},[s._v("# ping 192.168.2.2")]),s._v("\nPING 192.168.2.2 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("192.168.2.2"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 56"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("84"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n64 bytes from 192.168.2.2: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("62 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.400 ms\n64 bytes from 192.168.2.2: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("2 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("62 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1.15 ms\n^C\n--- 192.168.2.2 "),t("span",{attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n2 packets transmitted, 2 received, 0% packet loss, "),t("span",{attrs:{class:"token function"}},[s._v("time")]),s._v(" 1000ms\nrtt min/avg/max/mdev "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0.400/0.775/1.150/0.375 ms\n\n\n"),t("span",{attrs:{class:"token comment"}},[s._v("# B主机中的 docker")]),s._v("\n"),t("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@ab6398eaa692 /"),t("span",{attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{attrs:{class:"token comment"}},[s._v("# ping 192.168.1.2")]),s._v("\nPING 192.168.1.2 "),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("192.168.1.2"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 56"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("84"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" bytes of data.\n64 bytes from 192.168.1.2: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("62 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.299 ms\n64 bytes from 192.168.1.2: icmp_seq"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("2 ttl"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("62 time"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.338 ms\n^C\n--- 192.168.1.2 "),t("span",{attrs:{class:"token function"}},[s._v("ping")]),s._v(" statistics ---\n2 packets transmitted, 2 received, 0% packet loss, "),t("span",{attrs:{class:"token function"}},[s._v("time")]),s._v(" 1000ms\nrtt min/avg/max/mdev "),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0.299/0.318/0.338/0.026 ms\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"错误解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误解决","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误解决")]),s._v(" "),t("p",[t("code",[s._v("ovs-vsctl: unix:/usr/local/var/run/openvswitch/db.sock: database connection failed")]),s._v(" 解决方案")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ovsdb-server  --remote"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("punix:/usr/local/var/run/openvswitch/db.sock \\\n                --remote"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("db:Open_vSwitch,Open_vSwitch,manager_options \\\n                --private-key"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("db:Open_vSwitch,SSL,private_key \\\n                --certificate"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("db:Open_vSwitch,SSL,certificate \\\n                --bootstrap-ca-cert"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("db:Open_vSwitch,SSL,ca_cert \\\n                --pidfile --detach\n$ ovs-vsctl --no-wait init\n$ ovs-vswitchd --pidfile --detach\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("编写脚本，使其开机自启：")]),s._v(" "),t("p",[t("code",[s._v("/root/autorun.sh")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\novsdb-server --remote"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("punix:/usr/local/var/run/openvswitch/db.sock --remote"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("db:Open_vSwitch,Open_vSwitch,manager_options --pidfile --detach\novs-vsctl --no-wait init\novs-vswitchd --pidfile --detach --log-file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("修改其权限")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 777 autorun.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将其添加到开机自启列表，把路径添加到 "),t("code",[s._v("/etc/rc.d/rc.local")]),s._v(" 中")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[s._v("source")]),s._v(" /root/autorun.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参考：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/tantexian/article/details/46707175",target:"_blank",rel:"noopener noreferrer"}},[s._v("OpenvSwitch完全使用手册"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/xyq54/article/details/51371819",target:"_blank",rel:"noopener noreferrer"}},[s._v("ovs-vsctl: unix:/usr/local/var/run/openvswitch/db.sock: database connection failed"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"使用-weave-连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-weave-连接","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 weave 连接")])],1)},[],!1,null,null,null);r.options.__file="Link.md";a.default=r.exports}}]);