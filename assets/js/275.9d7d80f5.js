(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{522:function(s,e,a){s.exports=a.p+"assets/img/009.5ba31244.jpg"},716:function(s,e,a){"use strict";a.r(e);var t=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"使用-ssh-登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-ssh-登录","aria-hidden":"true"}},[s._v("$")]),s._v(" 使用 SSH 登录")]),t("h3",{attrs:{id:"客户端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置","aria-hidden":"true"}},[s._v("$")]),s._v(" 客户端配置")]),t("p",[s._v("在客户端使用 "),t("code",[s._v("ssh-keygen -t rsa")]),s._v(" 生成秘钥")]),t("p",[s._v("或使用命令 "),t("code",[s._v('ssh-keygen -t rsa -C "你的email地址"')]),s._v(" ，会在 "),t("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" 生成SSH公钥。")]),t("h3",{attrs:{id:"服务器端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器端配置","aria-hidden":"true"}},[s._v("$")]),s._v(" 服务器端配置")]),t("p",[s._v("将 "),t("code",[s._v("id_rsa.pub")]),s._v(" 文件里面的内容复制，保存到服务器端需要登录的用户根目录下 "),t("code",[s._v(".ssh/authorized_keys")]),s._v(" 文件中，比如 "),t("code",[s._v("/root/.ssh/authorized_keys")]),s._v("、"),t("code",[s._v("/home/user/.ssh/authorized_keys")]),s._v(" 即可。")]),t("p",[s._v("修改 "),t("code",[s._v("/etc/ssh/sshd_config")]),s._v("，开启 RSA 和 公钥认证")]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("RSAAuthentication yes\nPubkeyAuthentication yes\nAuthorizedKeysFile      .ssh/authorized_keys\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("为了安全起见，关闭密码认证")]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("PasswordAuthentication no\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("重启 ssh 服务即可")]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl restart sshd\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此时，就可以在客户端使用私钥进行 SSH 登录")]),t("figure",[t("img",{attrs:{src:a(522),alt:""}})])])}],r=a(1),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},t,!1,null,null,null);e.default=n.exports}}]);