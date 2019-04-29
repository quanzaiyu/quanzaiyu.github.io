(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{772:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ubuntu-安装时的注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装时的注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" Ubuntu 安装时的注意事项")]),t._v(" "),e("h2",{attrs:{id:"关于-root-用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于-root-用户","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 root 用户")]),t._v(" "),e("p",[t._v("安装ubuntu成功后，都是普通用户权限，并没有最高root权限，如果需要使用root权限的时候，通常都会在命令前面加上 sudo 。有的时候感觉很麻烦…")]),t._v(" "),e("p",[t._v("我们一般使用su命令来直接切换到root用户的，但是如果没有给root设置初始密码，就会抛出 su : Authentication failure 这样的问题。所以，我们只要给root用户设置一个初始密码就好了。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("quanzaiyu@ubuntu:~$ sudo passwd\n[sudo] password for quanzaiyu:\nEnter new UNIX password:\nRetype new UNIX password:\npasswd: password updated successfully\nquanzaiyu@ubuntu:~$ su\npassword:\nroot@ubuntu:/home/quanzaiyu#\n")])])]),e("p",[t._v("输入 sudo passwd 命令，输入一般用户密码并设定root用户密码。")]),t._v(" "),e("p",[t._v("设定root密码成功后，输入 su 命令，并输入刚才设定的root密码，就可以切换成root了。")]),t._v(" "),e("p",[t._v("提示符$代表一般用户，提示符#代表root用户。")]),t._v(" "),e("p",[t._v("输入 exit 命令，退出root并返回一般用户。")]),t._v(" "),e("h2",{attrs:{id:"关于网络设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于网络设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于网络设置")]),t._v(" "),e("p",[t._v("配置网卡IP地址，"),e("code",[t._v("vi /etc/network/interfaces")]),t._v(" ，添加以下代码")]),t._v(" "),e("p",[t._v("静态地址方式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("auto eth0\niface eth0 inet static\naddress 192.168.1.122\nnetmask 255.255.255.0\nnetwork 192.168.1.0\nbroadcast 192.168.1.255\ngateway 192.168.1.1\ndns-nameservers 8.8.8.8\n")])])]),e("p",[t._v("动态地址方式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("auto eth0  \niface eth0 inet dhcp  \n")])])]),e("p",[t._v("重启网络配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/etc/init.d/networking restart  \n")])])]),e("p",[t._v("测试")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ping www.baidu.com\n")])])]),e("h2",{attrs:{id:"常见问题解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题解决方案")]),t._v(" "),e("p",[t._v("无法安装 busybox-initramfs，向目标系统中安装busybox-initramfs软件包时出现一个错误的解决方法: https://shiyousan.com/post/636235330862572222")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/u012301841/article/details/73692426",target:"_blank",rel:"noopener noreferrer"}},[t._v("ubuntu 16.04 设置root用户初始密码"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_38209584/article/details/73295865",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hyper-v虚拟机下Ubuntu Server 14.04 配置网络"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);