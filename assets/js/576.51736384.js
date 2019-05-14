(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{752:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用linux进行python开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用linux进行python开发","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Linux进行Python开发")]),t._v(" "),s("p",[t._v("在部分系统中，已经集成 2.7，我们不动 2.7，可能有的脚本是基于 2.7 开发的，我们在此基础上安装 3.7")]),t._v(" "),s("h2",{attrs:{id:"安装-python-3-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-python-3-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 Python 3.7")]),t._v(" "),s("p",[t._v("安装环境依赖")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel\n")])])]),s("p",[t._v("下载并解压")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://www.python.org/ftp/python/3.7.0/Python-3.7.0b3.tar.xz\n$ xz -d Python-3.7.0b3.tar.xz\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf Python-3.7.0b3.tar\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" Python-3.7.0b3\n")])])]),s("p",[t._v("配置与安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /root/software/python3 -p\n$ ./configure --prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/software/python3\n$ ./configure --enable-optimizations\n")])])]),s("p",[t._v("建立 python3 的连接")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" /root/software/python3/bin/python3.7 /usr/bin/python3\n")])])]),s("p",[t._v("测试")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python3\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);