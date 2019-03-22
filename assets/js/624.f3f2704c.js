(window.webpackJsonp=window.webpackJsonp||[]).push([[624],{825:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux-防火墙与系统安全"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-防火墙与系统安全","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 防火墙与系统安全")]),a._v(" "),e("h2",{attrs:{id:"iptables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iptables","aria-hidden":"true"}},[a._v("#")]),a._v(" iptables")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ iptables -F "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 清除已有 iptables 规则")]),a._v("\n$ iptables -L -n -v "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看所有已添加的 iptables 规则")]),a._v("\n$ iptables -L -n "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 21 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看指定端口的 iptables 规则")]),a._v("\n")])])]),e("h2",{attrs:{id:"centos7-防火墙-firewall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7-防火墙-firewall","aria-hidden":"true"}},[a._v("#")]),a._v(" CentOS7 防火墙 - firewall")]),a._v(" "),e("p",[a._v("在CentOS7中默认使用 firewall 代替了 iptables service 。虽然继续保留了 iptables 命令，但已经仅是名称相同而已。除非手动删除 firewall ，再安装 iptables ，否则不能继续使用以前的 iptables 配置方法。")]),a._v(" "),e("p",[a._v("在 "),e("code",[a._v("/usr/lib/firewalld/services")]),a._v(" 目录中存放的是定义好的网络服务和端口参数，只用于参考，不能修改。这里只定义了一部分通用网络服务。在该目录中没有定义的网络服务，也不必再增加相关 xml 定义，后续通过管理命令可以直接增加。")]),a._v(" "),e("p",[a._v("如果要使用到的服务的xml文件，从上面的目录中拷贝到/etc/firewalld/services/目录下，如果端口有变化则可以修改文件中的数值，也可以根据相关定义自己写。")]),a._v(" "),e("h3",{attrs:{id:"启停防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启停防火墙","aria-hidden":"true"}},[a._v("#")]),a._v(" 启停防火墙")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ systemctl start firewalld "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 开启防火墙")]),a._v("\n$ systemctl stop firewalld "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关闭防火墙")]),a._v("\n$ systemctl restart firewalld "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启防火墙")]),a._v("\n$ firewall-cmd --reload "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重载配置文件")]),a._v("\n")])])]),e("p",[a._v("重载配置文件之后不会断掉正在连接的 tcp 会话，而重启服务则会断开 tcp 会话。")]),a._v(" "),e("h3",{attrs:{id:"开放、关闭指定服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开放、关闭指定服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 开放、关闭指定服务")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ firewall-cmd --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ftp "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 暂时开放 ftp 服务")]),a._v("\n$ firewall-cmd --add-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ftp --permanent "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 永久开放 ftp 服务")]),a._v("\n$ firewall-cmd --remove-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ftp "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 暂时关闭 ftp 服务")]),a._v("\n$ firewall-cmd --remove-service"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ftp --permanent "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 永久关闭 ftp 服务")]),a._v("\n$ firewall-cmd --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("8001/tcp "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加自定义的开放端口")]),a._v("\n$ firewall-cmd --list-all "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 显示防火墙应用列表")]),a._v("\n")])])]),e("h3",{attrs:{id:"查看服务的启动状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看服务的启动状态","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看服务的启动状态")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ firewall-cmd --state "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检测防火墙状态")]),a._v("\n$ firewall-cmd --query-service "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ftp")]),a._v("\n$ firewall-cmd --query-service "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v("\n$ firewall-cmd --query-service http\n")])])]),e("h2",{attrs:{id:"selinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selinux","aria-hidden":"true"}},[a._v("#")]),a._v(" SELinux")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ setenforce 0 "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关闭 SELinux 服务")]),a._v("\n")])])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://man.linuxde.net/iptables",target:"_blank",rel:"noopener noreferrer"}},[a._v("iptables 命令"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/adc81513944addf723bf73af.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS 7开启防火墙"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/hdk1993/p/6145283.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("linux怎么关闭iptables linux如何关闭防火墙"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/liyuanhong/articles/7064576.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS系统iptables防火墙的启动、停止以及开启关闭端口的操作"),e("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);