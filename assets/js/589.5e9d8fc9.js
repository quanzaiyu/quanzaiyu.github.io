(window.webpackJsonp=window.webpackJsonp||[]).push([[589],{673:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(0),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"保存时自动格式化成eslint风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保存时自动格式化成eslint风格","aria-hidden":"true"}},[t._v("#")]),t._v(" 保存时自动格式化成ESLint风格")]),t._v(" "),a("p",[t._v("使用 VSCode 自带的 "),a("kbd",[t._v("Ctrl")]),t._v(" + "),a("kbd",[t._v("Shift")]),t._v(" + "),a("kbd",[t._v("F")]),t._v(" 并不能把代码保存成 ESLint 风格, 可以借助 VSCode 的 ESLint 插件做到这一点。")]),t._v(" "),a("imgLink",{attrs:{src:"date/20181126/001.png"}}),t._v(" "),a("p",[t._v("打开用户配置 "),a("code",[t._v("文件")]),t._v(" -> "),a("code",[t._v("首选项")]),t._v(" -> "),a("code",[t._v("设置")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"eslint.autoFixOnSave"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"eslint.alwaysShowStatus"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"eslint.validate"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"javascript"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"javascriptreact"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"language"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"html"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"autoFix"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"language"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vue"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"autoFix"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("ESLint 插件会自动检测项目目录下的 "),a("code",[t._v(".eslintrc.js")]),t._v(" 文件, 并根据里面的设置进行格式化。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("ESLint 插件保存时格式化的时候只会对当前文件有用。")])]),t._v(" "),a("h2",{attrs:{id:"使用第三方验证库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用第三方验证库","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用第三方验证库")]),t._v(" "),a("p",[t._v("比如使用 vue 官方的 ESLint 验证库, 地址: "),a("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue-libs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/vuejs/eslint-plugin-vue-libs"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("安装: "),a("code",[t._v("yarn add -D eslint-plugin-vue-libs")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v(".eslintrc.js")]),t._v(" 中配置:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"plugin:vue-libs/recommended"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// override if necessary")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"与-prettier-共存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-prettier-共存","aria-hidden":"true"}},[t._v("#")]),t._v(" 与 Prettier 共存")]),t._v(" "),a("p",[t._v("在格式化代码方面， Prettier 确实和 ESLint 有重叠，但两者侧重点不同：ESLint 主要工作就是检查代码质量并给出提示，它所能提供的格式化功能很有限；而 Prettier 在格式化代码方面具有更大优势。而 Prettier 被设计为易于与 ESLint 集成，所以你可以轻松在项目中使两者，而无需担心冲突。")]),t._v(" "),a("p",[t._v("安装: "),a("code",[t._v("yarn add -D eslint-plugin-prettier eslint-config-prettier prettier-eslint-cli")])]),t._v(" "),a("p",[t._v("其公开了一个配置: "),a("code",[t._v("plugin:prettier/recommended")]),t._v(", 在 "),a("code",[t._v(".eslintrc.js")]),t._v(" 中配置:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用命令进行修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用命令进行修复","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用命令进行修复")]),t._v(" "),a("p",[t._v("如果需要手动修复, 可以在 package.json 中配置:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"fix"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"eslint --ext .js,.vue --fix --ignore-path .gitignore ."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"vue-fix"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"eslint src/pages/**/*.vue --fix"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"format-code"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"prettier-eslint --write \\"src/**/*.js\\" \\"src/**/*.vue\\""')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用对应的命令即可修复:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ yarn fix\n$ yarn vue-fix\n$ yarn format-code\n")])])]),a("p",[t._v("跟 ESLint 插件的保存时自动格式化不同, 使用命令的话可以一次性格式化所有匹配的文件。")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/68dbca4a9a11",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode代码保存时自动格式化成ESLint风格（支持VUE）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://nice.lovejade.cn/zh/article/beautify-vue-by-eslint-and-prettier.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 ESLint & Prettier 美化 Vue 代码"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/hdchangchang/article/details/82233740",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode保存代码，自动按照eslint规范格式化代码设置"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);r.options.__file="ESLint.md";s.default=r.exports}}]);