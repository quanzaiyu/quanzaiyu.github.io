(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{909:function(a,t,r){"use strict";r.r(t);var e=r(1),s=Object(e.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"一文读懂-虚拟机的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一文读懂-虚拟机的使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 一文读懂 虚拟机的使用")]),a._v(" "),r("h2",{attrs:{id:"虚拟机概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机概述","aria-hidden":"true"}},[a._v("#")]),a._v(" 虚拟机概述")]),a._v(" "),r("p",[a._v("虚拟机技术是虚拟化技术的一种，所谓虚拟化技术就是将事物从一种形式转变成另一种形式，最常用的虚拟化技术有操作系统中内存的虚拟化，实际运行时用户需要的内存空间可能远远大于物理机器的内存大小，利用内存的虚拟化技术，用户可以将一部分硬盘虚拟化为内存，而这对用户是透明的。又如，可以利用虚拟专用网技术（VPN）在公共网络中虚拟化一条安全，稳定的“隧道”，用户感觉像是使用私有网络一样。")]),a._v(" "),r("p",[a._v("虚拟机技术最早由 IBM 于上世纪六七十年代提出，被定义为硬件设备的软件模拟实现，通常的使用模式是分时共享昂贵的大型机。 虚拟机监视器（Virtual Machine Monitor，VMM）是虚拟机技术的核心，它是一层位于操作系统和计算机硬件之间的代码，用来将硬件平台分割成多个虚拟机。VMM 运行在特权模式，主要作用是隔离并且管理上层运行的多个虚拟机，仲裁它们对底层硬件的访问，并为每个客户操作系统虚拟一套独立于实际硬件的虚拟硬件环境（包括处理器，内存，I/O 设备）。VMM 采用某种调度算法在各个虚拟机之间共享 CPU，如采用时间片轮转调度算法。")]),a._v(" "),r("h2",{attrs:{id:"常见的虚拟机软件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见的虚拟机软件","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见的虚拟机软件")]),a._v(" "),r("h3",{attrs:{id:"vmware-workstation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vmware-workstation","aria-hidden":"true"}},[a._v("#")]),a._v(" VMware Workstation")]),a._v(" "),r("p",[a._v("VMwareWorkstation是VMware公司销售的商业软件产品之一。该工作站软件包含一个用于英特尔x86相容电脑的虚拟机套装，其允许用户同时创建和运行多个x86虚拟机。每个虚拟机实例可以运行其自己的客户机操作系统，如（但不限于）Windows、Linux、BSD变生版本。用简单术语来描述就是，VMware工作站允许一台真实的电脑在一个操作系统中同时开启并运行数个操作系统。其它VMware产品帮助在多个宿主电脑之间管理或移植VMware虚拟机。\n将工作站和服务器转移到虚拟机环境，可使系统管理简单化、缩减实际的底板面积、并减少对硬件的需求。")]),a._v(" "),r("h3",{attrs:{id:"virtualbox"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox","aria-hidden":"true"}},[a._v("#")]),a._v(" VirtualBox")]),a._v(" "),r("p",[a._v("VirtualBox 是一款开源虚拟机软件。VirtualBox 是由德国 Innotek 公司开发，由Sun Microsystems公司出品的软件，使用Qt编写，在 Sun 被 Oracle 收购后正式更名成 Oracle VM VirtualBox。Innotek 以 GNU General Public License (GPL) 释出 VirtualBox，并提供二进制版本及 OSE 版本的代码。使用者可以在VirtualBox上安装并且执行Solaris、Windows、DOS、Linux、OS/2 Warp、BSD等系统作为客户端操作系统。现在则由甲骨文公司进行开发，是甲骨文公司xVM虚拟化平台技术的一部份。")]),a._v(" "),r("h3",{attrs:{id:"hyper-v"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyper-v","aria-hidden":"true"}},[a._v("#")]),a._v(" Hyper-V")]),a._v(" "),r("p",[a._v("Hyper-V是微软的一款虚拟化产品，是微软第一个采用类似Vmware和Citrix开源Xen一样的基于hypervisor的技术。")]),a._v(" "),r("p",[a._v("Hyper-V设计的目的是为广泛的用户提供更为熟悉以及成本效益更高的虚拟化基础设施软件，这样可以降低运作成本、提高硬件利用率、优化基础设施并提高服务器的可用性。")]),a._v(" "),r("h3",{attrs:{id:"parallels-desktop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parallels-desktop","aria-hidden":"true"}},[a._v("#")]),a._v(" Parallels Desktop")]),a._v(" "),r("p",[a._v("Parallels Desktop是一款运行在 Mac 电脑上的极为优秀的虚拟机软件。用户可以在 Mac OS X 下非常方便运行 Windows、Linux 等操作系统及应用。用户不必繁琐重复地重启电脑即可在 Win 与 Mac 之间切换甚至同时使用它们。")]),a._v(" "),r("h2",{attrs:{id:"vmware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vmware","aria-hidden":"true"}},[a._v("#")]),a._v(" VMWare")]),a._v(" "),r("h3",{attrs:{id:"网络配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络配置")]),a._v(" "),r("h4",{attrs:{id:"网络地址转换-nat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网络地址转换-nat","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络地址转换(NAT)")]),a._v(" "),r("p",[a._v("网络地址转换(NAT)：默认使用VMnet8 （强烈推荐）")]),a._v(" "),r("p",[a._v("这种访问模式指的是虚拟机不占用主机所在局域网的ip，通过使用主机的NAT功能访问局域网和互联网，意味着虚拟机可以访问局域网中的其他电脑，但是其他电脑不知道虚拟机的存在。")]),a._v(" "),r("p",[a._v("使用这种模式时，虚拟机不需要设置静态IP，只需要使用DHCP功能自动获取ip即可。")]),a._v(" "),r("p",[a._v("这种模式的好处是可以利用主机的网卡上网，而且不占用更多的ip地址。在ipv4紧张的年代，发明了NAT，因此绝大多数上网都是这种方式。")]),a._v(" "),r("imgLink",{attrs:{src:"date/20181013/010.png"}}),a._v(" "),r("h4",{attrs:{id:"桥接（bridged）网卡"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#桥接（bridged）网卡","aria-hidden":"true"}},[a._v("#")]),a._v(" 桥接（Bridged）网卡")]),a._v(" "),r("p",[a._v('"Bridge" 就是一个主机，这个机器拥有两块网卡，分别处于两个局域网中，同时在”桥”上，运行着程序，让局域网A中的所有数据包原封不动的流入B，反之亦然。这样，局域网A和B就无缝的在链路层连接起来了，在桥接时，VMWare网卡和物理网卡应该处于同一IP网段 当然要保证两个局域网没有冲突的IP.')]),a._v(" "),r("p",[a._v("VMWare 的桥也是同样的道理，只不过，本来作为硬件的一块网卡，现在由VMWare软件虚拟了！当采用桥接时，VMWare会虚拟一块网卡和真正的物理网卡就行桥接，这样，发到物理网卡的所有数据包就到了VMWare虚拟机，而由VMWare发出的数据包也会通过桥从物理网卡的那端发出。")]),a._v(" "),r("p",[a._v("所以，如果物理网卡可以上网，那么桥接的软网卡也没有问题了，这就是桥接上网的原理了。")]),a._v(" "),r("p",[a._v("这种模式的好处是虚拟机可以方便地访问局域网中的其他电脑，方便访问互联网。")]),a._v(" "),r("h4",{attrs:{id:"私有网络共享主机-host-only"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#私有网络共享主机-host-only","aria-hidden":"true"}},[a._v("#")]),a._v(" 私有网络共享主机(Host-Only)")]),a._v(" "),r("p",[a._v("Host-Only——私有网络共享主机：默认使用VMnet1 （不推荐）")]),a._v(" "),r("p",[a._v("提供的是主机和虚拟机之间的网络互访。只想让虚拟机和主机之间有数据交换，而不想让虚拟机访问Internet，就要采用这个设置了。")]),a._v(" "),r("p",[a._v("Host-only的条件下，VMWare在真正的Windows系统中，建立一块软网卡。这块网卡可以在网络连接中看到，一般是VMNET1，这块网卡的作用就是使Windows看到虚拟机的IP。")]),a._v(" "),r("p",[a._v("这种模式的好处是虚拟机网络可以与主机所在的网络物理隔离，缺点是不能方便的上互联网。")]),a._v(" "),r("h3",{attrs:{id:"安装macosx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装macosx","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装MacOSX")]),a._v(" "),r("p",[a._v("在 VMWare 中安装 MacOSX，需要使用 Unlocker 工具进行解锁。")]),a._v(" "),r("p",[a._v("下载地址："),r("a",{attrs:{href:"https://github.com/DrDonk/unlocker",target:"_blank",rel:"noopener noreferrer"}},[a._v("GitHub：unlocker"),r("OutboundLink")],1)]),a._v(" "),r("p",[a._v("将下载的 unlocker 解压到 VMWare 安装目录，运行 win-install.exe 即可：")]),a._v(" "),r("imgLink",{attrs:{src:"date/20181015/009.png"}}),a._v(" "),r("p",[a._v("再次运行 VMWare，安装虚拟机，可以看到已经有 MacOSX 选项：")]),a._v(" "),r("imgLink",{attrs:{src:"date/20181015/010.png"}}),a._v(" "),r("p",[a._v("注意：安装MacOSX的镜像为cdr格式，可自行搜索下载。")]),a._v(" "),r("h3",{attrs:{id:"自动启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 自动启动")]),a._v(" "),r("p",[a._v("比如，在 VMWare 虚拟机中安装了一个 CentOS 系统，想要在 Windows 开机时自动启动VMWare，并启动 CentOS 虚拟机系统，只需要写一个简单的脚本即可。")]),a._v(" "),r("p",[a._v("创建一个 "),r("code",[a._v("centos_start.bat")]),a._v("，用于自动开启虚拟机")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe" start "D:\\User\\quanzaiyu\\Documents\\Virtual Machines\\CentOS7 64 λ\\CentOS7 64 λ.vmx" nogui\n')])])]),r("p",[a._v("创建一个 "),r("code",[a._v("centos_stop.bat")]),a._v("，用于结束虚拟机")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe" stop "D:\\User\\quanzaiyu\\Documents\\Virtual Machines\\CentOS7 64 λ\\CentOS7 64 λ.vmx" soft\n')])])]),r("p",[a._v("运行这两个脚本，可以测试是否正常。")]),a._v(" "),r("h4",{attrs:{id:"加入开机启动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加入开机启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 加入开机启动")]),a._v(" "),r("p",[a._v("往Windows的“脚本(登录/注销)”添加，运行 > gpedit.msc > 用户配置 > windows设置 > 脚本(登录/注销) > 添加")]),a._v(" "),r("imgLink",{attrs:{src:"articles/027.jpg"}}),a._v(" "),r("p",[a._v("将创建的两个脚本分别添加进 登录、注销 脚本中即可。")]),a._v(" "),r("h3",{attrs:{id:"常见问题解决"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常见问题解决","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见问题解决")]),a._v(" "),r("h4",{attrs:{id:"vt-x-未开启"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vt-x-未开启","aria-hidden":"true"}},[a._v("#")]),a._v(" VT-x 未开启")]),a._v(" "),r("p",[a._v("如果开启虚拟机时提示以下错误：")]),a._v(" "),r("imgLink",{attrs:{src:"date/20181013/004.png"}}),a._v(" "),r("p",[a._v("则说明在BIOS设置中需要修改以下两个部分：")]),a._v(" "),r("ol",[r("li",[a._v("配置北桥的vt-x，设置其为 enabled")])]),a._v(" "),r("imgLink",{attrs:{src:"date/20181013/005.jpg"}}),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[a._v("配置CPU的 “Intel Virtualization Technology”，设置其为 enabled")])]),a._v(" "),r("imgLink",{attrs:{src:"date/20181013/006.jpg"}}),a._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[a._v("重启电脑即可")])]),a._v(" "),r("h4",{attrs:{id:"客户机操作系统已禁用cpu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户机操作系统已禁用cpu","aria-hidden":"true"}},[a._v("#")]),a._v(" 客户机操作系统已禁用CPU")]),a._v(" "),r("p",[a._v("如果开启虚拟机的时候，提示客户机操作系统已禁用CPU")]),a._v(" "),r("imgLink",{attrs:{src:"date/20181013/007.png"}}),a._v(" "),r("p",[a._v("解决方案：")]),a._v(" "),r("p",[a._v("打开 虚拟机>设置>选项>常规")]),a._v(" "),r("p",[a._v("在客户机操作系统这个选项中选择 VMware ESX(X)，此时下面的版本应该有三个选项，依次尝试，直到能够正常启动。")]),a._v(" "),r("imgLink",{attrs:{src:"date/20181013/009.png"}}),a._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/u014726937/article/details/52768463",target:"_blank",rel:"noopener noreferrer"}},[a._v("VMware配置网络的3种方式：NAT、Host-Only、Bridged"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://my.oschina.net/u/2519051/blog/902211",target:"_blank",rel:"noopener noreferrer"}},[a._v("虚拟机启动ubuntu系统是提示客户机操作系统已禁用CPU，请关闭或重置虚拟机。解决方法讲解"),r("OutboundLink")],1)]),a._v(" "),r("li",[r("a",{attrs:{href:"https://www.landiannews.com/archives/50945.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("苹果虚拟机专用：Unlocker 3.0版发布适配VMware 15版"),r("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=s.exports}}]);