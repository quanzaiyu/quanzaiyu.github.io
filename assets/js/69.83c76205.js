(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{519:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"python-开发"}},[s._v("Python 开发")]),s._v(" "),a("p",[s._v("在部分系统中，已经集成 2.7，我们不动 2.7，可能有的脚本是基于 2.7 开发的，我们在此基础上安装 3.7")]),s._v(" "),a("h2",{attrs:{id:"安装-python-3-7"}},[s._v("安装 Python 3.7")]),s._v(" "),a("p",[s._v("安装环境依赖")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum -y "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("下载并解压")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://www.python.org/ftp/python/3.7.0/Python-3.7.0b3.tar.xz\nxz -d Python-3.7.0b3.tar.xz\n"),a("span",{attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xvf Python-3.7.0b3.tar\n"),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" Python-3.7.0b3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("配置与安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /root/software/python3 -p\n./configure --prefix"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/software/python3\n./configure --enable-optimizations\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("建立 python3 的连接")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("ln")]),s._v(" /root/software/python3/bin/python3.7 /usr/bin/python3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("测试")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("python3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}],!1,null,null,null);n.default=e.exports}}]);