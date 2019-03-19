(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{890:function(t,a,e){"use strict";e.r(a);var n=e(1),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"npm-与-yarn-简介与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-与-yarn-简介与使用","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 与 yarn 简介与使用")]),t._v(" "),e("h2",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[t._v("#")]),t._v(" npm")]),t._v(" "),e("p",[t._v("npm，全称 NodeJS Package Management，就是NodeJS的包管理工具。")]),t._v(" "),e("p",[t._v("npm 有以下一些作用:")]),t._v(" "),e("ol",[e("li",[t._v("统一下载途径")]),t._v(" "),e("li",[t._v("自动下载依赖")]),t._v(" "),e("li",[t._v("提交代码到NPM官网进行托管")]),t._v(" "),e("li",[t._v("运行 "),e("code",[t._v("package.json")]),t._v(" 中的脚本")])]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM 官网"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.npmjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NPM 中文文档"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("p",[t._v("安装模块")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xxx -g\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 局部安装")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xxx --save\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 局部安装并添加到开发环境")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xxx --save-dev\n")])])]),e("p",[t._v("卸载模块")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" uninstall xxx\n")])])]),e("p",[t._v("搜索包")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" search xxx\n")])])]),e("h3",{attrs:{id:"改变-npm-全局安装目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改变-npm-全局安装目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 改变 npm 全局安装目录")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" prefix "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:\\Program Files\\node\\packages"')]),t._v("\n")])])]),e("h3",{attrs:{id:"关于-npmrc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于-npmrc","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于 npmrc")]),t._v(" "),e("p",[e("code",[t._v(".npmrc")]),t._v(" 的意思为 "),e("code",[t._v("npm runtime config")]),t._v(" 的意思，有全局配置，不同操作平台路径不一样, 用户使用的配置通常位于 "),e("code",[t._v("~/.npmrc")]),t._v("。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.com.cn/files/npmrc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npmrc"),e("OutboundLink")],1),t._v(" 文件分为以下几种权限："),e("code",[t._v("项目权限")]),t._v(" > "),e("code",[t._v("用户权限")]),t._v(" > "),e("code",[t._v("全局权限")])]),t._v(" "),e("p",[t._v("路径如下")]),t._v(" "),e("ul",[e("li",[t._v("全局权限："),e("code",[t._v("$PREFIX/etc/npmrc")])]),t._v(" "),e("li",[t._v("用户权限："),e("code",[t._v("$HOME/.npmrc")])]),t._v(" "),e("li",[t._v("项目权限："),e("code",[t._v("$PROJECT/.npmrc")]),t._v(" 在项目更目录中，跟 "),e("code",[t._v("node_modules")]),t._v(" 和 "),e("code",[t._v("package.json")]),t._v(" 同路径")])]),t._v(" "),e("h2",{attrs:{id:"yarn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yarn","aria-hidden":"true"}},[t._v("#")]),t._v(" yarn")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn 中文网"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"npm-与-yarn-命令对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-与-yarn-命令对比","aria-hidden":"true"}},[t._v("#")]),t._v(" npm 与 yarn 命令对比")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("command")]),t._v(" "),e("th",[t._v("yarn")]),t._v(" "),e("th",[t._v("npm")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("初始化")]),t._v(" "),e("td",[t._v("yarn init -y")]),t._v(" "),e("td",[t._v("npm init -y")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("在已有package.json的项目中安装依赖")]),t._v(" "),e("td",[t._v("yarn")]),t._v(" "),e("td",[t._v("npm i / install")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("全局安装")]),t._v(" "),e("td",[t._v("yarn global add "),e("code",[t._v("<package>")])]),t._v(" "),e("td",[t._v("npm i -g / --global  "),e("code",[t._v("<package>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("添加运行时依赖")]),t._v(" "),e("td",[t._v("yarn add "),e("code",[t._v("<package>")])]),t._v(" "),e("td",[t._v("npm i –S / --save "),e("code",[t._v("<package>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("添加开发时依赖")]),t._v(" "),e("td",[t._v("yarn add -D "),e("code",[t._v("<package>")])]),t._v(" "),e("td",[t._v("npm i –D / --save-dev "),e("code",[t._v("<package>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("更新依赖")]),t._v(" "),e("td",[t._v("yarn "),e("code",[t._v("[global]")]),t._v(" upgrade "),e("code",[t._v("<package>")])]),t._v(" "),e("td",[t._v("npm update "),e("code",[t._v("[-g][–S/–D]")]),t._v(" "),e("code",[t._v("<package>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("卸载")]),t._v(" "),e("td",[t._v("yarn"),e("code",[t._v("[global]")]),t._v(" remove "),e("code",[t._v("<package>")])]),t._v(" "),e("td",[t._v("npm un / uninstall "),e("code",[t._v("[-g][–S/–D]")]),t._v(" "),e("code",[t._v("<package>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("重装/升级")]),t._v(" "),e("td",[t._v("yarn upgrade")]),t._v(" "),e("td",[t._v("rm -rf node_modules && npm install")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("清除缓存")]),t._v(" "),e("td",[t._v("yarn cache clean")]),t._v(" "),e("td",[t._v("npm cache clean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("查看包信息")]),t._v(" "),e("td",[t._v("yarn info "),e("code",[t._v("<package>")])]),t._v(" "),e("td",[t._v("npm info "),e("code",[t._v("<package>")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("查看配置信息")]),t._v(" "),e("td",[t._v("yarn config list")]),t._v(" "),e("td",[t._v("npm config list")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("获取指定配置信息")]),t._v(" "),e("td",[t._v("yarn config get registry")]),t._v(" "),e("td",[t._v("npm config get registry")])])])]),t._v(" "),e("h2",{attrs:{id:"运行-package-json-中的脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-package-json-中的脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行 "),e("code",[t._v("package.json")]),t._v(" 中的脚本")]),t._v(" "),e("p",[t._v("比如 "),e("code",[t._v("package.json")]),t._v(" 中包含以下内容:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dev"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node build/dev-server.js"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("此时，只需执行 "),e("code",[t._v("npm run dev")]),t._v(" 或 "),e("code",[t._v("yarn (run) dev")]),t._v("，即可运行 "),e("code",[t._v("node build/dev-server.js")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("scripts")]),t._v(" 中有一个特殊的命令: "),e("code",[t._v("start")]),t._v("。")]),t._v(" "),e("p",[t._v("比如，将上述代码改为")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node build/dev-server.js"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("此时，只需执行 "),e("code",[t._v("npm start")]),t._v(" 或 "),e("code",[t._v("yarn start")]),t._v("，即可运行 "),e("code",[t._v("node build/dev-server.js")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://yarn.bootcss.com/docs/migrating-from-npm/#toc-cli-commands-comparison",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLI commands comparison"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://yuanhehe.cn/2017/06/11/npm-%E4%B8%8E-Yarn-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E5%AF%B9%E6%AF%94/",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 与 Yarn 常用命令对比"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);