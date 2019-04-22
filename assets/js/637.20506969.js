(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{819:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"搭建-mysql-数据库服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建-mysql-数据库服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 搭建 MySQL 数据库服务器")]),s._v(" "),t("h2",{attrs:{id:"安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),t("h3",{attrs:{id:"使用rpm安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用rpm安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用rpm安装")]),s._v(" "),t("p",[s._v("yum MySQL 镜像源: "),t("a",{attrs:{href:"https://dev.mysql.com/downloads/repo/yum/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/downloads/repo/yum/"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("下载 "),t("a",{attrs:{href:"https://www.mysql.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL"),t("OutboundLink")],1),s._v(" 数据源")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm\n")])])]),t("p",[s._v("配置 MySQL 数据库")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum localinstall mysql57-community-release-el7-10.noarch.rpm\n")])])]),t("p",[s._v("检测安装是否成功")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum repolist enabled "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql.*-community.*"')]),s._v("\n\nmysql-connectors-community/x86_64 MySQL Connectors Community                  45\nmysql-tools-community/x86_64      MySQL Tools Community                       59\nmysql57-community/x86_64          MySQL 5.7 Community Server                 247\n")])])]),t("h3",{attrs:{id:"修改安装源版本-可选"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改安装源版本-可选","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改安装源版本 (可选)")]),s._v(" "),t("p",[s._v("可以修改 yum 源，改变默认安装的 mysql 版本。比如要安装 5.6 版本，将 5.7 源的 enabled=1 改成 enabled=0。然后再将 5.6源的 enabled=0 改成 enabled=1 即可。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ vim /etc/yum.repos.d/mysql-community.repo\n[mysql56-community]\nname=MySQL 5.6 Community Server\nbaseurl=http://repo.mysql.com/yum/mysql-5.6-community/el/7/$basearch/\nenabled=0\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n\n[mysql57-community]\nname=MySQL 5.7 Community Server\nbaseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/\nenabled=1\ngpgcheck=1\ngpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql\n")])])]),t("h3",{attrs:{id:"使用yum安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用yum安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用yum安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-community-server\n")])])]),t("h2",{attrs:{id:"mysql基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql基本使用","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL基本使用")]),s._v(" "),t("ul",[t("li",[s._v("启动MySQL服务: "),t("code",[s._v("systemctl start mysqld")])]),s._v(" "),t("li",[s._v("关闭MySQL服务: "),t("code",[s._v("systemctl stop mysqld")])]),s._v(" "),t("li",[s._v("重启MySQL服务: "),t("code",[s._v("systemctl restart mysqld")])]),s._v(" "),t("li",[s._v("查看MySQL的启动状态: "),t("code",[s._v("systemctl status mysqld")])]),s._v(" "),t("li",[s._v("查看MySQL端口是否开启: "),t("code",[s._v("netstat -ntlp | grep 3306")])]),s._v(" "),t("li",[s._v("开机启动: "),t("code",[s._v("systemctl enable mysqld")]),s._v(" 然后 "),t("code",[s._v("systemctl daemon-reload")])]),s._v(" "),t("li",[s._v("防火墙开启指定服务: "),t("code",[s._v("firewall-cmd --add-service=mysql --permanent")])])]),s._v(" "),t("p",[s._v("默认配置文件路径")]),s._v(" "),t("ul",[t("li",[s._v("配置文件: "),t("code",[s._v("/etc/my.cnf")])]),s._v(" "),t("li",[s._v("日志文件: "),t("code",[s._v("/var/log/mysqld.log")])]),s._v(" "),t("li",[s._v("服务启动脚本: "),t("code",[s._v("/usr/lib/systemd/system/mysqld.service")])]),s._v(" "),t("li",[s._v("socket文件: "),t("code",[s._v("/var/run/mysqld/mysqld.pid")])])]),s._v(" "),t("h2",{attrs:{id:"修改-mysql-默认密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-mysql-默认密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 MySQL 默认密码")]),s._v(" "),t("p",[s._v("mysql 安装完成之后，在 "),t("code",[s._v("/var/log/mysqld.log")]),s._v(" 文件中给 root 生成了一个默认密码。通过下面的方式找到 root 默认密码，然后登录mysql进行修改：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /var/log/mysqld.log\n2018-04-05T09:34:50.739570Z 1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Note"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" A temporary password is generated "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" root@localhost: E"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##Q!ZqX3>o")]),s._v("\n")])])]),t("p",[s._v("然后通过密码登录 mysql:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ mysql -uroot -p\n")])])]),t("p",[s._v("登录后输入查询语句:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ALTER USER "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyNewPass4!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("或者使用")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'MyNewPass4!'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("这里，MyNewPass4! 便是设置的新密码了。")]),s._v(" "),t("p",[s._v("注意：mysql5.7 默认安装了密码安全检查插件（validate_password），默认密码检查策略要求密码必须包含：大小写字母、数字和特殊符号，并且长度不能少于8位。否则会提示ERROR 1819 (HY000): Your password does not satisfy the current policy requirements 的错误。")]),s._v(" "),t("h2",{attrs:{id:"密码策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#密码策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 密码策略")]),s._v(" "),t("p",[s._v("通过 msyql 环境变量可以查看密码策略的相关信息：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show variables like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%password%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[t("strong",[s._v("validate_password_policy")]),s._v(" 密码策略，默认为MEDIUM策略")]),s._v(" "),t("li",[t("strong",[s._v("validate_password_dictionary_file")]),s._v(" 密码策略文件，策略为STRONG才需要")]),s._v(" "),t("li",[t("strong",[s._v("validate_password_length")]),s._v(" 密码最少长度")]),s._v(" "),t("li",[t("strong",[s._v("validate_password_mixed_case_count")]),s._v(" 大小写字符长度，至少1个")]),s._v(" "),t("li",[t("strong",[s._v("validate_password_number_count")]),s._v(" 数字至少1个")]),s._v(" "),t("li",[t("strong",[s._v("validate_password_special_char_count")]),s._v(" 特殊字符至少1个")])]),s._v(" "),t("p",[s._v("上述参数是默认策略MEDIUM的密码检查规则。")]),s._v(" "),t("p",[s._v("共有以下几种密码策略：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("策略")]),s._v(" "),t("th",[s._v("检查规则")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("0 or LOW")]),s._v(" "),t("td",[s._v("Length")])]),s._v(" "),t("tr",[t("td",[s._v("1 or MEDIUM")]),s._v(" "),t("td",[s._v("Length; numeric, lowercase/uppercase, and special characters")])]),s._v(" "),t("tr",[t("td",[s._v("2 or STRONG")]),s._v(" "),t("td",[s._v("Length; numeric, lowercase/uppercase, and special characters; dictionary file")])])])]),s._v(" "),t("p",[s._v("MySQL官网密码策略详细说明：http://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html#sysvar_validate_password_policy")]),s._v(" "),t("p",[s._v("修改密码策略")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("/etc/my.cnf")]),s._v(" 文件添加 "),t("code",[s._v("validate_password_policy")]),s._v(" 配置，指定密码策略。")]),s._v(" "),t("p",[s._v("选择 "),t("code",[s._v("0（LOW）")]),s._v("，"),t("code",[s._v("1（MEDIUM）")]),s._v("，"),t("code",[s._v("2（STRONG）")]),s._v(" 其中一种，选择 2 需要提供密码字典文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("validate_password_policy=0\n")])])]),t("p",[s._v("如果不需要密码策略，添加my.cnf文件中添加如下配置禁用即可：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("validate_password = off\n")])])]),t("p",[s._v("重新启动mysql服务使配置生效: "),t("code",[s._v("systemctl restart mysqld")])]),s._v(" "),t("h2",{attrs:{id:"添加远程登录用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加远程登录用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加远程登录用户")]),s._v(" "),t("p",[s._v("默认只允许root帐户在本地登录，如果要在其它机器上连接mysql，必须修改root允许远程连接，或者添加一个允许远程连接的帐户，为了安全起见，我添加一个新的帐户:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> GRANT ALL PRIVILEGES ON *.* TO 'quanzaiyu'@'%' IDENTIFIED BY 'MyNewPass4!' WITH GRANT OPTION;\n")])])]),t("p",[s._v("输入后使修改生效还需要下面的语句")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql>FLUSH PRIVILEGES;\n")])])]),t("p",[s._v("控制台登录:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ mysql -u quanzaiyu -p\nEnter password:\n")])])]),t("h2",{attrs:{id:"配置默认编码为utf8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置默认编码为utf8","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置默认编码为utf8")]),s._v(" "),t("p",[s._v("修改 "),t("code",[s._v("/etc/my.cnf")]),s._v(" 配置文件，在 mysqld 下添加编码配置，如下所示:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[mysqld]\ncharacter_set_server=utf8\ninit_connect='SET NAMES utf8'\n")])])]),t("p",[s._v("重新启动 mysql 服务，查看数据库默认编码如下所示:")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> show variables like '%character%';\n+--------------------------+----------------------------+\n| Variable_name            | Value                      |\n+--------------------------+----------------------------+\n| character_set_client     | utf8                       |\n| character_set_connection | utf8                       |\n| character_set_database   | utf8                       |\n| character_set_filesystem | binary                     |\n| character_set_results    | utf8                       |\n| character_set_server     | utf8                       |\n| character_set_system     | utf8                       |\n| character_sets_dir       | /usr/share/mysql/charsets/ |\n+--------------------------+----------------------------+\n8 rows in set (0.00 sec)\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.linuxidc.com/Linux/2016-09/135288.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS7 64位下MySQL5.7安装与配置（YUM）"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/xiaopotian/p/8196464.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Centos7通过yum安装最新MySQL"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);