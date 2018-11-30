(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{400:function(s,t,a){"use strict";a.r(t);var e={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=a(0),r=Object(n.a)(e,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[a("h1",{attrs:{id:"搭建-ftp-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建-ftp-服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建 FTP 服务器")]),s._v(" "),a("h2",{attrs:{id:"vsftpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vsftpd","aria-hidden":"true"}},[s._v("#")]),s._v(" vsftpd")]),s._v(" "),a("p",[s._v("vsftpd 是 "),a("code",[s._v("very secure FTP daemon")]),s._v(" 的缩写，安全性是它的一个最大的特点。拥有非常高的安全性需求、带宽限制、良好的可伸缩性、可创建虚拟用户、支持IPv6、速率高等特性。")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum -y "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" vsftpd\n")])])]),a("p",[s._v("查看安装位置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("whereis")]),s._v(" vsftpd\nvsftpd: /usr/sbin/vsftpd /etc/vsftpd /usr/share/man/man8/vsftpd.8.gz\n")])])]),a("h2",{attrs:{id:"启动与停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动与停止","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动与停止")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd start\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 停止")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd stop\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd restart\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 设置开机启动")]),s._v("\n$ systemctl "),a("span",{attrs:{class:"token function"}},[s._v("enable")]),s._v(" vsftpd.service \n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 重启 vsftpd 服务")]),s._v("\n$ systemctl restart vsftpd.service\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 查看 vsftpd 服务的状态")]),s._v("\n$ systemctl status vsftpd.service\n")])])]),a("p",[s._v("启动后，可以看到系统已经监听了 21 端口：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -nltp "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" 21\n")])])]),a("p",[s._v("配置好之后，默认可以使用匿名登录。")]),s._v(" "),a("h2",{attrs:{id:"添加防火墙设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加防火墙设置","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加防火墙设置")]),s._v(" "),a("p",[s._v("为 21 端口放行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ firewall-cmd --add-port"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("21/tcp\n")])])])])},[],!1,null,null,null);r.options.__file="index.md";t.default=r.exports}}]);