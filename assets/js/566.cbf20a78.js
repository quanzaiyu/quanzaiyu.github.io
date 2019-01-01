(window.webpackJsonp=window.webpackJsonp||[]).push([[566],{865:function(e,a,t){"use strict";t.r(a);var s=t(0),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"安装与使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装与使用")]),e._v(" "),t("p",[e._v("vue本身并不强制用户使用脚手架进行安装，用户完全可以自定义进行安装，不过为了方便起见，脚手架中已集成各种必要的配置，我们可以站在巨人的肩膀上，将重心放到开发上，而不是搭建项目上折腾。")]),e._v(" "),t("h2",{attrs:{id:"vue-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" vue-cli")]),e._v(" "),t("p",[e._v("相关链接:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub : vue-cli"),t("OutboundLink")],1),e._v("、"),t("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm : vue-cli"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("下载 vue-cli")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g vue-cli\n")])])]),t("h2",{attrs:{id:"初始化一个项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化一个项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 初始化一个项目")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vue init "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("project-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("比如")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vue init webpack my-project\n")])])]),t("p",[t("strong",[e._v("官方 Templates")])]),e._v(" "),t("p",[e._v("官方还提供其他一些常用的模板，webpack 只是其中一种 :")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("webpack")]),e._v(" - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.")]),e._v(" "),t("li",[t("strong",[e._v("webpack-simple")]),e._v(" - A simple Webpack + vue-loader setup for quick prototyping.")]),e._v(" "),t("li",[t("strong",[e._v("browserify")]),e._v(" - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.")]),e._v(" "),t("li",[t("strong",[e._v("browserify-simple")]),e._v(" - A simple Browserify + vueify setup for quick prototyping.")]),e._v(" "),t("li",[t("strong",[e._v("pwa")]),e._v(" - PWA template for vue-cli based on the webpack template")]),e._v(" "),t("li",[t("strong",[e._v("simple")]),e._v(" - The simplest possible Vue setup in a single HTML file")])]),e._v(" "),t("p",[t("strong",[e._v("非官方 Template")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vue init username/repo"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#<branch-name> my-project")]),e._v("\n")])])]),t("p",[e._v("其中 username/repo 分别代表 GitHub 用户名和其放置脚手架的仓库，branch-name 代表分支名称，可以省略默认为master。")]),e._v(" "),t("p",[t("strong",[e._v("本地 Template")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vue init ~/fs/path/to-custom-template my-project\n")])])]),t("p",[e._v("用户自己存放于本地的脚手架仍然可以通过本地路径的方式获取并创建项目。")]),e._v(" "),t("h2",{attrs:{id:"项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目结构")]),e._v(" "),t("p",[e._v("我们采用webpack的方式创建一个Vue项目:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("vue init webpack "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n")])])]),t("p",[e._v("目录结构如图:")]),e._v(" "),t("imgLink",{attrs:{src:"articles/022.png/small"}}),e._v(" "),t("p",[e._v("开发只需要关注 "),t("code",[e._v("src")]),e._v(" 目录即可，如果需要一些定制化的配置，可以修改 "),t("code",[e._v("build")]),e._v(" 目录下的 "),t("code",[e._v("webpack")]),e._v(" 配置。")]),e._v(" "),t("p",[e._v("其中比较重要的文件为 "),t("code",[e._v("src/main.js")]),e._v(" ，是整个项目的入口文件，渲染模板为 "),t("code",[e._v("index.html")]),e._v("，其中 "),t("code",[e._v("scr/App.vue")]),e._v(" 是可更改甚至删除的，只是脚手架提供的默认渲染组件。")]),e._v(" "),t("h2",{attrs:{id:"运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 运行项目")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])]),t("p",[e._v("默认监听端口 8080，只需在浏览器输入 "),t("code",[e._v("http://localhost:8080")]),e._v(" 即可访问。")])],1)},[],!1,null,null,null);r.options.__file="Install.md";a.default=r.exports}}]);