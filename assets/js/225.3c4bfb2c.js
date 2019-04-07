(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{481:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"多版本管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多版本管理","aria-hidden":"true"}},[a._v("#")]),a._v(" 多版本管理")]),a._v(" "),t("p",[a._v("如果想对node版本进行管理，可以使用 n 或 nvm (Node Version Manager) 进行管理(支持Linux、OSX操作系统)，Windows下可以使用 gnvm进行管理。")]),a._v(" "),t("h2",{attrs:{id:"n"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#n","aria-hidden":"true"}},[a._v("#")]),a._v(" n")]),a._v(" "),t("p",[a._v('n是Node的一个模块，作者是TJ Holowaychuk（鼎鼎大名的Express框架作者），就像它的名字一样，它的理念就是简单：\n"no subshells, no profile setup, no convoluted api, just simple"')]),a._v(" "),t("h3",{attrs:{id:"n模块的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#n模块的安装","aria-hidden":"true"}},[a._v("#")]),a._v(" n模块的安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g n\n")])])]),t("p",[a._v("直接运行 n 命令查看所有已安装的版本。")]),a._v(" "),t("h3",{attrs:{id:"n的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#n的使用","aria-hidden":"true"}},[a._v("#")]),a._v(" n的使用")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ n\n")])])]),t("p",[a._v("直接使用 "),t("code",[a._v("n")]),a._v(" 命令可列举出所有已安装的 node 版本")]),a._v(" "),t("p",[a._v("运行命令 "),t("code",[a._v("n version")]),a._v(" 进行安装指定版本的 node。 version 可以是 stable(最新稳定版)、latest(最新版)或者具体的版本数字。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ n stable\n$ n latest\n")])])]),t("p",[a._v("指定的版本将会安装在 "),t("code",[a._v("/usr/local/n/versions")]),a._v(" 目录下。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("n rm")]),a._v(" 删除已安装指定版本的 node")]),a._v(" "),t("li",[t("code",[a._v("n use")]),a._v(" 选择使用指定版本的 node")]),a._v(" "),t("li",[t("code",[a._v("n list")]),a._v(" 列出所有 node 版本")])]),a._v(" "),t("h2",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm","aria-hidden":"true"}},[a._v("#")]),a._v(" nvm")]),a._v(" "),t("p",[a._v("nvm 全称 "),t("code",[a._v("Node Version Manager")]),a._v("，它与n的实现方式不同，其是通过shell脚本实现的。")]),a._v(" "),t("h3",{attrs:{id:"nvm的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm的安装","aria-hidden":"true"}},[a._v("#")]),a._v(" nvm的安装")]),a._v(" "),t("p",[a._v("安装方式有以下几种:")]),a._v(" "),t("p",[t("strong",[a._v("方式一")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/creationix/nvm.git ~/.nvm\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/.nvm/nvm.sh\n")])])]),t("p",[t("strong",[a._v("方式二")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://raw.github.com/creationix/nvm/v0.4.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sh\n")])])]),t("p",[t("strong",[a._v("方式三")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -qO- https://raw.github.com/creationix/nvm/v0.4.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" sh\n")])])]),t("h3",{attrs:{id:"nvm的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm的使用","aria-hidden":"true"}},[a._v("#")]),a._v(" nvm的使用")]),a._v(" "),t("p",[a._v("查看已安装的版本：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),t("p",[a._v("查看可以安装的版本：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nvm ls-remote\n")])])]),t("p",[a._v("安装指定的版本：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nvm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" \n")])])]),t("p",[a._v("指定的版本将会直接安装在 nvm 程序所在的目录下。")]),a._v(" "),t("p",[a._v("删除指定的版本：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nvm uninstall \n")])])]),t("p",[a._v("使用选定的版本：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ nvm use \n")])])]),t("p",[a._v("卸载nvm")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.nvm\n")])])]),t("h2",{attrs:{id:"gnvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gnvm","aria-hidden":"true"}},[a._v("#")]),a._v(" gnvm")]),a._v(" "),t("p",[a._v("官方描述: Node.js version manager on Windows by GO (一个windows上用Go语言实现的node版本管理工具)")]),a._v(" "),t("p",[a._v("参考资料: https://www.cnblogs.com/kevinlvhsl/p/6226758.html")]),a._v(" "),t("h3",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),t("p",[a._v("下载 gnvm 安装包")]),a._v(" "),t("ul",[t("li",[a._v("32位: https://github.com/Kenshin/gnvm-bin/blob/master/32-bit/gnvm.exe?raw=true")]),a._v(" "),t("li",[a._v("64位: https://github.com/Kenshin/gnvm-bin/blob/master/64-bit/gnvm.exe?raw=true")])]),a._v(" "),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("将以上下载的exe文件放到 nodejs安装的目录即可，就是node.exe的同级目录，确保已经添加进环境变量。")]),a._v(" "),t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用")]),a._v(" "),t("p",[a._v("查看gnvm版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ gnvm version\n")])])]),t("p",[a._v("初始化gnvm")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ gnvm config INIT\n")])])]),t("p",[a._v("查看本地安装了什么版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ gnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),t("p",[a._v("安装需要的版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ gnvm 4.4.0 6.9.2 7.3.0\n")])])]),t("p",[a._v("gnvm ls查看所有版本后 切换到想要的版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ gnvm use 6.9.2\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);