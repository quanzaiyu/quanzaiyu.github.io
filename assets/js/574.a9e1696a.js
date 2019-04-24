(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{767:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-网络配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-网络配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux 网络配置")]),t._v(" "),s("h2",{attrs:{id:"设置网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置网络","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置网络")]),t._v(" "),s("p",[t._v("开启网络的具体配置步骤为:")]),t._v(" "),s("ol",[s("li",[t._v("打开终端，切换到root账户（普通账户通常没有修改网络配置文件的权限，所以要切换到root账户）")]),t._v(" "),s("li",[t._v("切换到网卡配置文件的目录 "),s("code",[t._v("cd /etc/sysconfig/network-scripts/")])]),t._v(" "),s("li",[t._v("找到网卡的配置文件（centos7修改了网卡的命名规则，不再是我们熟悉的eth0了，而是ifcfg-eno+一串数字）")]),t._v(" "),s("li",[t._v("用 vi 打开这个文件")]),t._v(" "),s("li",[t._v("最后一行的onboot选项，把默认的no改成yes")]),t._v(" "),s("li",[t._v("用命令 :wq! 保存退出")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ifcfg-ens33\nTYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Ethernet\nBOOTPROTO"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dhcp\nDEFROUTE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nPEERDNS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nPEERROUTES"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV4_FAILURE_FATAL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no\nIPV6INIT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV6_AUTOCONF"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV6_DEFROUTE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV6_PEERDNS"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV6_PEERROUTES"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\nIPV6_FAILURE_FATAL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("no\nIPV6_ADDR_GEN_MODE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stable-privacy\nNAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ens33\nUUID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("12509981-530b-403b-bbc0-493447de2d1f\nDEVICE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ens33\nONBOOT"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("yes\n")])])]),s("h2",{attrs:{id:"查看端口映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看端口映射","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看端口映射")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://man.linuxde.net/netstat",target:"_blank",rel:"noopener noreferrer"}},[t._v("netstat命令"),s("OutboundLink")],1),t._v(" 用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况。")]),t._v(" "),s("p",[t._v("netstat命令各个参数说明如下：")]),t._v(" "),s("ul",[s("li",[t._v("-a : 显示所有连线中的 Socket")]),t._v(" "),s("li",[t._v("-t : 指明显示TCP端口")]),t._v(" "),s("li",[t._v("-u : 指明显示UDP端口")]),t._v(" "),s("li",[t._v("-x : 指明显示Unix端口")]),t._v(" "),s("li",[t._v("-l : 仅显示监听套接字(所谓套接字就是使应用程序能够读写与收发通讯协议(protocol)与资料的程序)")]),t._v(" "),s("li",[t._v("-p : 显示进程标识符和程序名称，每一个套接字/端口都属于一个程序。")]),t._v(" "),s("li",[t._v("-n : 不显示主机，端口和用户名(host, port or user), 不进行DNS轮询(可以加速操作)")])]),t._v(" "),s("h3",{attrs:{id:"查看所有监听-tcp-端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有监听-tcp-端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看所有监听 TCP 端口")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ntlp\nActive Internet connections "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("only servers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 0.0.0.0:5000            0.0.0.0:*               LISTEN      13696/java\ntcp        0      0 127.0.0.1:10249         0.0.0.0:*               LISTEN      20073/kube-proxy\ntcp        0      0 0.0.0.0:5002            0.0.0.0:*               LISTEN      14246/java\ntcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN      4048/redis-server\ntcp        0      0 0.0.0.0:8812            0.0.0.0:*               LISTEN      13983/java\ntcp        0      0 0.0.0.0:111             0.0.0.0:*               LISTEN      1/systemd\ntcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      4095/nginx: master\ntcp        0      0 0.0.0.0:8082            0.0.0.0:*               LISTEN      13111/java\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      6071/sshd\ntcp        0      0 0.0.0.0:443             0.0.0.0:*               LISTEN      13983/java\ntcp        0      0 0.0.0.0:8001            0.0.0.0:*               LISTEN      12865/java\ntcp        0      0 0.0.0.0:8002            0.0.0.0:*               LISTEN      11491/java\ntcp        0      0 0.0.0.0:8003            0.0.0.0:*               LISTEN      11878/java\ntcp6       0      0 :::3306                 :::*                    LISTEN      5794/mysqld\ntcp6       0      0 :::111                  :::*                    LISTEN      3298/rpcbind\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ntlp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" 80  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用端口号过滤")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ntlp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" java "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用程序名过滤")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ntlp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" 6071 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用PID过滤")]),t._v("\n")])])]),s("ul",[s("li",[t._v("Local Address: 访问端口的方式，0.0.0.0 是对外开放端口，说明80端口外面可以访问；127.0.0.1 说明只能对本机访问，外面访问不了此端口")]),t._v(" "),s("li",[t._v("Foregin Address：对外开放，一般都为0.0.0.0：*")]),t._v(" "),s("li",[t._v("Program name：此端口是那个程序在用，程序挂载此端口, 注意非root用户还是得加 sudo, 否则看不到 "),s("code",[t._v("PID/Program name")]),t._v(" 列")])]),t._v(" "),s("p",[t._v("::: tip 重点说明\n0.0.0.0 是对外开放，通过服务域名、ip可以访问的端口\n127.0.0.1 只能对本机 localhost访问，也是保护此端口安全性\n:::")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(":::")]),t._v(" 这三个: 的前两个 "),s("code",[t._v("::")]),t._v("，是 "),s("code",[t._v("0:0:0:0:0:0:0:0")]),t._v(" 的缩写，相当于IPv6的 "),s("code",[t._v("0.0.0.0")]),t._v("，就是本机的所有IPv6地址，第三个:是IP和端口的分隔符")])]),t._v(" "),s("h3",{attrs:{id:"统计信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 统计信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -s   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示所有端口的统计信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -st   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示TCP端口的统计信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -su   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示UDP端口的统计信息")]),t._v("\n")])])]),s("h3",{attrs:{id:"查看当前系统下运行的所有端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看当前系统下运行的所有端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看当前系统下运行的所有端口")]),t._v(" "),s("p",[t._v("使用命令来查看当前系统下所运行的所有端口情况: "),s("code",[t._v("sudo netstat -antup")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -antup\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("sudo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" admin\nActive Internet connections "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("servers and established"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nProto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name\ntcp        0      0 127.0.0.1:10251         0.0.0.0:*               LISTEN      10812/\ntcp        0      0 172.18.50.199:2379      0.0.0.0:*               LISTEN      10717/etcd\ntcp        0      0 127.0.0.1:2379          0.0.0.0:*               LISTEN      10717/etcd\ntcp        0      0 127.0.0.1:6379          0.0.0.0:*               LISTEN      12661/redis-server\ntcp        0      0 172.18.50.199:2380      0.0.0.0:*               LISTEN      10717/etcd\ntcp        0      0 0.0.0.0:8812            0.0.0.0:*               LISTEN      19954/java\ntcp        0      0 0.0.0.0:4369            0.0.0.0:*               LISTEN      17827/epmd\ntcp        0      0 0.0.0.0:8082            0.0.0.0:*               LISTEN      19846/java\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      32542/sshd\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("::: warning 注意\n请在sudo的权限下查看，不然有部分的pid是查看不到的，我曾经就是因为没用使用root权限而绕了很多。\n:::")]),t._v(" "),s("h2",{attrs:{id:"测试端口通畅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试端口通畅","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试端口通畅")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("telnet")]),t._v(" 测试端口是否通畅")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ telnet 127.0.0.1 80\n")])])]),s("p",[t._v("如果测试通畅, 通过 "),s("kbd",[t._v("Ctrl")]),t._v(" + "),s("kbd"),t._v("] 退出测试, 再输入 "),s("code",[t._v("q")]),t._v(" 退出 telnet 终端")]),t._v(" "),s("h2",{attrs:{id:"问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题解决")]),t._v(" "),s("h3",{attrs:{id:"centos7-不能联网且-ifconfig-出现-command-not-found"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7-不能联网且-ifconfig-出现-command-not-found","aria-hidden":"true"}},[t._v("#")]),t._v(" Centos7 不能联网且 ifconfig 出现 command not found")]),t._v(" "),s("p",[t._v("在虚拟机中以最小化方式安装 centos7 后无法上网，因为 "),s("code",[t._v("centos7")]),t._v(" 默认网卡未激活，网络服务默认是关闭的状态。")]),t._v(" "),s("p",[t._v("而且在 "),s("code",[t._v("sbin")]),t._v(" 目录中没有 "),s("code",[t._v("ifconfig")]),t._v(" 文件，这是因为 centos7 已经不使用 ifconfig 命令了，已经用 "),s("code",[t._v("ip")]),t._v(" 命令代替。")]),t._v(" "),s("p",[t._v("并且网卡名称也不是 "),s("code",[t._v("eth0")]),t._v(" 了，而是改成 "),s("code",[t._v("ifcfg-eth0")]),t._v(" 了。")]),t._v(" "),s("p",[t._v("解决ifconfig不可用："),s("code",[t._v("ip addr")]),t._v(" 即查看分配网卡情况。")]),t._v(" "),s("p",[t._v("激活网卡：在文件 "),s("code",[t._v("/etc/sysconfig/network-scripts/ifcfg-eth0")]),t._v(" 中。")]),t._v(" "),s("p",[t._v("使用 vi 进入编辑模式，将 "),s("code",[t._v("ONBOOT=no")]),t._v(" 改为 "),s("code",[t._v("ONBOOT=yes")]),t._v(" 就 OK 了。")]),t._v(" "),s("p",[t._v("保存后重启网卡："),s("code",[t._v("service network restart")])]),t._v(" "),s("p",[t._v("使用 ping 测试一下是否可以联网。")]),t._v(" "),s("p",[t._v("这样 yum，wget 等都可以用了。")]),t._v(" "),s("h3",{attrs:{id:"centos7-中安装-ifconfig-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7-中安装-ifconfig-命令","aria-hidden":"true"}},[t._v("#")]),t._v(" Centos7 中安装 ifconfig 命令")]),t._v(" "),s("p",[t._v("不推荐再在 centOS7 中安装 ifconfig 命令，因为系统已默认使用 ip 命令替代 ifconfig 命令，不过仍然可以安装。")]),t._v(" "),s("p",[t._v("首先查找包括 ifconfig 的包")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum search "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ifconfig")]),t._v("\n")])])]),s("p",[t._v("通过yum search 这个命令发现 ifconfig 这个命令是在 net-tools.x86_64 这个包里，运行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y net-tools\n")])])]),s("p",[t._v("同样地, netstat 命令也在 net-tools 包内")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://man.linuxde.net/sub/%e7%bd%91%e7%bb%9c%e5%ba%94%e7%94%a8",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 命令大全 - 网络应用"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/understander/p/5546458.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux端口号与PID的互相查询"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_31382921/article/details/52174626",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决 Centos7 不能联网且 ifconfig 出现 command not found"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);