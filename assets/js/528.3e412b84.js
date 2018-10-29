(window.webpackJsonp=window.webpackJsonp||[]).push([[528],{304:function(s,a,e){"use strict";e.r(a);var t={props:["slot-key"]},r=e(0),n=Object(r.a)(t,function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[e("h1",{attrs:{id:"常用操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用操作")]),s._v(" "),e("h2",{attrs:{id:"添加远程登录用户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加远程登录用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加远程登录用户")]),s._v(" "),e("p",[s._v("默认只允许root帐户在本地登录，如果要在其它机器上连接mysql，必须修改root允许远程连接，或者添加一个允许远程连接的帐户，为了安全起见，我添加一个新的帐户：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> GRANT ALL PRIVILEGES ON *.* TO 'quanzaiyu'@'%' IDENTIFIED BY 'MyNewPass4!' WITH GRANT OPTION;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("控制台登录 :")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost yum.repos.d]# mysql -u quanzaiyu -p\nEnter password:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"配置默认编码为utf8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置默认编码为utf8","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置默认编码为utf8")]),s._v(" "),e("p",[s._v("修改 "),e("code",[s._v("/etc/my.cnf")]),s._v(" 配置文件，在 mysqld 下添加编码配置，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[mysqld]\ncharacter_set_server=utf8\ninit_connect='SET NAMES utf8'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("重新启动 mysql 服务，查看数据库默认编码如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl restart mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看修改后的编码")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> show variables like '%character%';\n+--------------------------+----------------------------+\n| Variable_name            | Value                      |\n+--------------------------+----------------------------+\n| character_set_client     | utf8                       |\n| character_set_connection | utf8                       |\n| character_set_database   | utf8                       |\n| character_set_filesystem | binary                     |\n| character_set_results    | utf8                       |\n| character_set_server     | utf8                       |\n| character_set_system     | utf8                       |\n| character_sets_dir       | /usr/share/mysql/charsets/ |\n+--------------------------+----------------------------+\n8 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])])},[],!1,null,null,null);n.options.__file="control.md";a.default=n.exports}}]);