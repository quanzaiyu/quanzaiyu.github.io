(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1195:function(s,e,a){"use strict";a.r(e);var n=a(2),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"搭建-mysql-数据库"}},[s._v("搭建 MySQL 数据库")]),a("h2",{attrs:{id:"配置yum源"}},[s._v("配置YUM源")]),a("p",[s._v("yum MySQL 镜像源")]),a("p",[s._v("https://dev.mysql.com/downloads/repo/yum/")]),a("p",[s._v("下载 MySQL 数据源")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("配置 MySQL 数据库")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum localinstall mysql57-community-release-el7-10.noarch.rpm\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("检测安装是否成功")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[root@localhost temp]# yum repolist enabled | grep "mysql.*-community.*"\n\nmysql-connectors-community/x86_64 MySQL Connectors Community                  45\nmysql-tools-community/x86_64      MySQL Tools Community                       59\nmysql57-community/x86_64          MySQL 5.7 Community Server                 247\n')])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"修改安装源版本-可选"}},[s._v("修改安装源版本 (可选)")]),a("p",[s._v("可以修改 "),a("code",[s._v("vim /etc/yum.repos.d/mysql-community.repo")]),s._v(" 源，改变默认安装的 mysql 版本。比如要安装 5.6 版本，将 5.7 源的 enabled=1 改成 enabled=0。然后再将 5.6源的 enabled=0 改成 enabled=1 即可。")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[mysql56-community]\nname=MySQL 5.6 Community Server\nbaseurl=http://repo.mysql.com/yum/mysql-5.6-community/el/7/$basearch/\nenabled=0\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n\n[mysql57-community]\nname=MySQL 5.7 Community Server\nbaseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/\nenabled=1\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"安装mysql"}},[s._v("安装MySQL")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install mysql-community-server\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"启动mysql服务"}},[s._v("启动MySQL服务")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl start mysqld\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看MySQL的启动状态")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl status mysqld\nnetstat -ntlp | grep 3306\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("开机启动")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl enable mysqld\nsystemctl daemon-reload\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"添加到防火墙设置"}},[s._v("添加到防火墙设置")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("firewall-cmd --add-service=mysql --permanent\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"默认配置文件路径"}},[s._v("默认配置文件路径")]),a("p",[s._v("配置文件：/etc/my.cnf")]),a("p",[s._v("日志文件：/var/log//var/log/mysqld.log")]),a("p",[s._v("服务启动脚本：/usr/lib/systemd/system/mysqld.service")]),a("p",[s._v("socket文件：/var/run/mysqld/mysqld.pid")])])}],!1,null,null,null);e.default=t.exports}}]);