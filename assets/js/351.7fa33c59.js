(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{862:function(s,t,a){"use strict";a.r(t);var n={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(0),r=Object(e.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[a("h1",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[s._v("#")]),s._v(" npm")]),s._v(" "),a("p",[s._v("npm，全称 NodeJS Package Management，就是NodeJS的包管理工具。")]),s._v(" "),a("p",[s._v("npm 有以下几个特点:")]),s._v(" "),a("ol",[a("li",[s._v("统一下载途径")]),s._v(" "),a("li",[s._v("自动下载依赖")]),s._v(" "),a("li",[s._v("提交代码到NPM官网进行托管")]),s._v(" "),a("li",[s._v("运行 "),a("code",[s._v("package.json")]),s._v(" 中的脚本")])]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("NPM 官网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.npmjs.com.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("NPM 中文文档"),a("OutboundLink")],1)])]),s._v(" "),a("hr"),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn 中文网"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://yarn.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn 镜像 - BootCss"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("p",[s._v("安装模块")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 全局安装")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx -g\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 局部安装")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx --save\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 局部安装并添加到开发环境")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" xxx --save-dev\n")])])]),a("p",[s._v("卸载模块")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall xxx\n")])])]),a("p",[s._v("运行 "),a("code",[s._v("package.json")]),s._v(" 中的脚本")]),s._v(" "),a("p",[s._v("比如 "),a("code",[s._v("package.json")]),s._v(" 中包含以下内容:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token property"}},[s._v('"dev"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"node build/dev-server.js"')]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("此时，只需执行 "),a("code",[s._v("npm run dev")]),s._v("，即可运行 "),a("code",[s._v("node build/dev-server.js")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("scripts")]),s._v(" 中有一个特殊的命令: "),a("code",[s._v("start")]),s._v("。")]),s._v(" "),a("p",[s._v("比如，将上述代码改为")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token property"}},[s._v('"start"')]),a("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v('"node build/dev-server.js"')]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("此时，只需执行 "),a("code",[s._v("npm start")]),s._v("，即可运行 "),a("code",[s._v("node build/dev-server.js")]),s._v("。")]),s._v(" "),a("p",[s._v("搜索包")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" search xxx\n")])])]),a("h2",{attrs:{id:"改变-npm-全局安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变-npm-全局安装目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 改变 npm 全局安装目录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" prefix "),a("span",{attrs:{class:"token string"}},[s._v('"D:\\Program Files\\node\\packages"')]),s._v("\n")])])])])},[],!1,null,null,null);r.options.__file="Index.md";t.default=r.exports}}]);