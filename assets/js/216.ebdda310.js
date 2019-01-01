(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{620:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"搭建-git-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-git-服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建 Git 服务器")]),t._v(" "),s("h2",{attrs:{id:"服务器端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器端","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端")]),t._v(" "),s("ol",[s("li",[t._v("先从 yum 安装 git")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum –y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建一个 git 用户并赋予密码")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在需要的位置创建一个裸仓库（最后以 .git 结尾）")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /home/git "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" git-server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" git-server\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare learngit.git\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("赋予 git 用户权限")])]),t._v(" "),s("p",[t._v("需要给新建的 git 仓库赋予 git 用户的完全控制权，使用 -R 参数将仓库的子文件/目录全部赋予 git 用户所有")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git learngit.git\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("禁用 git 用户 shell 登录（一定要禁用）")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ vim /etc/passwd\n")])])]),s("p",[t._v("将 git 用户修改如下（一般在最后一行）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git:x:1001:1001:,,,:/home/git:/bin/bash\n")])])]),s("p",[t._v("改为")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git:x:1000:1000:,,,:/home/git:/usr/bin/git-shell\n")])])]),s("p",[t._v("其他的不用改。服务端配置完成。")]),t._v(" "),s("h2",{attrs:{id:"客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),s("p",[t._v("使用 clone 命令克隆仓库，格式如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@172.23.29.183:/home/git/git-server/learngit.git\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone root@172.23.29.183:/home/git/git-server/learngit.git\n")])])]),s("p",[t._v("可以将客户端公钥保存到服务器，以便下次操作不需输入密码。")])])},[],!1,null,null,null);r.options.__file="Service.md";a.default=r.exports}}]);