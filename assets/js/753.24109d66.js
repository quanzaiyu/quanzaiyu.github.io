(window.webpackJsonp=window.webpackJsonp||[]).push([[753],{634:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"修改-mysql-默认密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-mysql-默认密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 MySQL 默认密码")]),s._v(" "),t("p",[s._v("mysql 安装完成之后，在 "),t("code",[s._v("/var/log/mysqld.log")]),s._v(" 文件中给 root 生成了一个默认密码。通过下面的方式找到 root 默认密码，然后登录mysql进行修改：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@localhost yum.repos.d]# grep 'temporary password' /var/log/mysqld.log\n2018-04-05T09:34:50.739570Z 1 [Note] A temporary password is generated for root@localhost: E&##Q!ZqX3>o\n")])])]),t("p",[s._v("然后通过密码登录 mysql :")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql -uroot -p\n")])])]),t("p",[s._v("登录后输入查询语句 :")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';\n")])])]),t("p",[s._v("或者使用")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql> set password for 'root'@'localhost'=password('MyNewPass4!'); \n")])])]),t("p",[s._v("这里，MyNewPass4! 便是设置的新密码了。")]),s._v(" "),t("p",[s._v("注意：mysql5.7 默认安装了密码安全检查插件（validate_password），默认密码检查策略要求密码必须包含：大小写字母、数字和特殊符号，并且长度不能少于8位。否则会提示ERROR 1819 (HY000): Your password does not satisfy the current policy requirements 的错误。")])])},[],!1,null,null,null);a.default=r.exports}}]);