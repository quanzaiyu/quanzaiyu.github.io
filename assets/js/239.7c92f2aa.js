(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{495:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装与使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装与使用")]),a._v(" "),t("p",[a._v("首先到 Node.js 官网下载 Node 环境。相关链接如下:")]),a._v(" "),t("ul",[t("li",[a._v("英文官网: https://nodejs.org/en/")]),a._v(" "),t("li",[a._v("中文地址: https://nodejs.org/zh-cn/")]),a._v(" "),t("li",[a._v("英文API文档: https://nodejs.org/en/docs/")]),a._v(" "),t("li",[a._v("中文API文档: http://nodejs.cn/api/")]),a._v(" "),t("li",[a._v("中文技术论坛: http://cnodejs.org/")])]),a._v(" "),t("p",[a._v("本书编写时使用的是 node v9.3.0 版本")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("p",[a._v("下载 Node.js 镜像")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://npm.taobao.org/mirrors/node/v8.11.1/node-v8.11.1-linux-x64.tar.xz\n")])])]),t("p",[a._v("解压")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ xz -d node-v8.11.1-linux-x64.tar.xz\n// 或者\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xzvf node-v8.11.1-linux-x64.tar.gz\n\n// 然后\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf node-v8.11.1-linux-x64.tar\n")])])]),t("p",[a._v("这时，node 软件包已释放到当前目录下，我的位于 "),t("code",[a._v("/root/software/node-v8.11.1-linux-x64")]),a._v(" 下")]),a._v(" "),t("p",[a._v("要使 node 工作，需要将 node 放置于环境变量的 path 中，这里将之连接到 "),t("code",[a._v("/usr/local/bin")]),a._v(" 下")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" /root/software/node-v8.11.1-linux-x64/bin/node /usr/local/bin/node\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" /root/software/node-v8.11.1-linux-x64/bin/npm /usr/local/bin/npm -s\n")])])]),t("h2",{attrs:{id:"yum-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" yum 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --silent --location https://rpm.nodesource.com/setup_11.x "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" -\n")])])]),t("p",[a._v("其中 11.x 可换成具体想要安装的node版本, 执行完以上命令后, 使用 yum 进行安装:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y nodejs\n")])])]),t("p",[a._v("安装yarn")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --silent --location https://dl.yarnpkg.com/rpm/yarn.repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" /etc/yum.repos.d/yarn.repo\n$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y yarn\n")])])]),t("h2",{attrs:{id:"检测安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 检测安装")]),a._v(" "),t("p",[a._v("下载安装完毕之后，执行 "),t("code",[a._v("node -v")]),a._v(" 可以看到当前node版本")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ node -v\nv9.3.0\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" -v\n5.6.0\n")])])]),t("h2",{attrs:{id:"repl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repl","aria-hidden":"true"}},[a._v("#")]),a._v(" REPL")]),a._v(" "),t("p",[a._v("直接输入 "),t("code",[a._v("node")]),a._v(" 进入REPL(Read Eval Print Loop:交互式解释器)模式")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ node\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("To exit, press ^C again or "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),a._v(" .exit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("使用 "),t("code",[a._v("ctrl + C")]),a._v(" 两次退出 REPL 模式")]),a._v(" "),t("h2",{attrs:{id:"运行-js-脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-js-脚本","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行 js 脚本")]),a._v(" "),t("p",[a._v("编写脚本")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ vim hello.js\nconsole.log('Hello world')\n")])])]),t("p",[a._v("运行脚本")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ node hello.js\nHello world\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);