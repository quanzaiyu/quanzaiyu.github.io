(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{754:function(t,a,s){"use strict";s.r(a);var r=s(1),n=Object(r.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"node-包管理工具-npm-yarn-换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-包管理工具-npm-yarn-换源","aria-hidden":"true"}},[t._v("#")]),t._v(" node 包管理工具(npm/yarn)换源")]),t._v(" "),s("h2",{attrs:{id:"npm-换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-换源","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 换源")]),t._v(" "),s("h3",{attrs:{id:"常用源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用源","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用源")]),t._v(" "),s("p",[s("strong",[t._v("npm 原始镜像")])]),t._v(" "),s("ul",[s("li",[t._v("搜索地址: "),s("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("registry地址: https://registry.npmjs.org")])]),t._v(" "),s("p",[s("strong",[t._v("yarn 原始镜像")])]),t._v(" "),s("ul",[s("li",[t._v("搜索地址: "),s("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yarnpkg.com/zh-Hans/packages"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("registry地址: https://registry.yarnpkg.com")])]),t._v(" "),s("p",[s("strong",[t._v("淘宝 npm 镜像")])]),t._v(" "),s("ul",[s("li",[t._v("搜索地址: "),s("a",{attrs:{href:"http://npm.taobao.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://npm.taobao.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("registry地址: http://registry.npm.taobao.org/")])]),t._v(" "),s("p",[s("strong",[t._v("cnpmjs 镜像")])]),t._v(" "),s("ul",[s("li",[t._v("搜索地址: "),s("a",{attrs:{href:"http://cnpmjs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://cnpmjs.org"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("registry地址: http://r.cnpmjs.org/")])]),t._v(" "),s("h3",{attrs:{id:"查看源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看源","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看源")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config list "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 npm 所有设置")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config get registry "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 npm 指定设置")]),t._v("\n")])])]),s("h3",{attrs:{id:"更换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换源","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换源")]),t._v(" "),s("p",[s("strong",[t._v("第1种方法")]),t._v(" 直接更换 "),s("code",[t._v("npm")]),t._v(" 源")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n")])])]),s("p",[s("strong",[t._v("第2种方法")]),t._v(" 另行安装 "),s("code",[t._v("cnpm")]),t._v("，并注册淘宝源")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g cnpm --registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n")])])]),s("p",[s("strong",[t._v("第3种方法")]),t._v(" 修改 "),s("code",[t._v(".npmrc")])]),t._v(" "),s("p",[t._v("在此文件中加入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("registry='https://registry.npm.taobao.org'\n")])])]),s("p",[t._v("此方法适用于 npm，对 yarn 同样生效。")]),t._v(" "),s("p",[s("strong",[t._v("第4中方法")]),t._v(" 临时使用")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" express --registry https://registry.npm.taobao.org\n")])])]),s("p",[s("strong",[t._v("第5种方法")]),t._v(" 使用别名配置 npm")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alias")]),t._v(" cnpm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm --registry=https://registry.npm.taobao.org \\\n--cache='),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/.npm/.cache/cnpm \\\n--disturl=https://npm.taobao.org/dist \\\n--userconfig="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v('/.cnpmrc"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or alias it in .bashrc or .zshrc")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n#alias for cnpm\\nalias cnpm=\"npm --registry=https://registry.npm.taobao.org \\\n  --cache="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/.npm/.cache/cnpm \\\n  --disturl=https://npm.taobao.org/dist \\\n  --userconfig="),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/.cnpmrc\"'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshrc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),t._v(" ~/.zshrc\n")])])]),s("p",[t._v("之后使用 cnpm 进行安装即可, 这样不需要重新安装 cnpm 即可使用此命令")]),t._v(" "),s("h2",{attrs:{id:"yarn-换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yarn-换源","aria-hidden":"true"}},[t._v("#")]),t._v(" yarn 换源")]),t._v(" "),s("h3",{attrs:{id:"查看源-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看源-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看源")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yarn config list "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 yarn 所有设置")]),t._v("\n$ yarn config get registry "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 yarn 指定设置")]),t._v("\n")])])]),s("h3",{attrs:{id:"更换源-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换源-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换源")]),t._v(" "),s("p",[s("strong",[t._v("第1种方法")]),t._v(" 直接更换源, 跟 npm 类似：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yarn config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n")])])]),s("p",[s("strong",[t._v("第2种方法")]),t._v(" 另行安装 "),s("a",{attrs:{href:"https://github.com/xcatliu/cyarn",target:"_blank",rel:"noopener noreferrer"}},[t._v("cYarn"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("cYarn 是使用 cnpm 源的 Yarn。")]),t._v(" "),s("p",[t._v("安装 cYarn：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g cyarn "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 cnpm 默认源进行安装")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g cyarn --registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用淘宝源进行安装")]),t._v("\n")])])]),s("p",[s("strong",[t._v("第3种方法")]),t._v(" 使用 "),s("a",{attrs:{href:"https://github.com/i5ting/yrm",target:"_blank",rel:"noopener noreferrer"}},[t._v("yrm"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g yrm\n$ yrm use cnpm\n")])])]),s("h2",{attrs:{id:"更换-node-sass-等包的安装源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更换-node-sass-等包的安装源","aria-hidden":"true"}},[t._v("#")]),t._v(" 更换 node-sass 等包的安装源")]),t._v(" "),s("p",[s("strong",[t._v("第1种方法")]),t._v(" 更换源")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" sass_binary_site https://npm.taobao.org/mirrors/node-sass/\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" electron_mirror https://npm.taobao.org/mirrors/electron/\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver\n")])])]),s("p",[s("strong",[t._v("第2种方法")]),t._v(" 安装时指定")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i node-sass --sass_binary_site"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://npm.taobao.org/mirrors/node-sass/\n\n// 也可以设置系统环境变量的方式。示例\n// linux、mac 下\n$ SASS_BINARY_SITE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://npm.taobao.org/mirrors/node-sass/ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" node-sass\n\n// window 下\n$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" SASS_BINARY_SITE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://npm.taobao.org/mirrors/node-sass/ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" node-sass\n")])])]),s("p",[s("strong",[t._v("第3种方法")]),t._v(" 使用VPN")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" proxy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:1080 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#此处是VPN的代理地址")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i node-sass\n")])])]),s("p",[t._v("下载完成后删除 http 代理")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config delete proxy\n")])])]),s("h3",{attrs:{id:"错误解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误解决","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误解决")]),t._v(" "),s("p",[t._v("提示没有安装python、build失败等")]),t._v(" "),s("p",[t._v("执行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g node-gyp\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --global --production windows-build-tools\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" rebuild node-sass\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://cnodejs.org/topic/581d96d5bb9452c9052e7b58",target:"_blank",rel:"noopener noreferrer"}},[t._v("在中国，安装 & 升级 npm 依赖的正确方法"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://riny.net/2014/cnpm/",target:"_blank",rel:"noopener noreferrer"}},[t._v("国内优秀npm镜像推荐及使用"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("yarn")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/docs/cli/create",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn create"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("node-sass")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/a295277302/article/details/70992404",target:"_blank",rel:"noopener noreferrer"}},[t._v("node安装node-sass失败，配置淘宝源"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000010984731",target:"_blank",rel:"noopener noreferrer"}},[t._v("整理 node-sass 安装失败的原因及解决办法"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/q/1010000009068215/a-1020000009068824",target:"_blank",rel:"noopener noreferrer"}},[t._v("install node-sass出错，提示not found: python2"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/weixin_36222137/article/details/78463543",target:"_blank",rel:"noopener noreferrer"}},[t._v('Error: Can\'t find Python executable "python", you can set the PYTHON env variable.解决办法'),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);