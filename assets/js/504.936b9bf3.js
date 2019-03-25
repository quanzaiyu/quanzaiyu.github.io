(window.webpackJsonp=window.webpackJsonp||[]).push([[504],{728:function(a,e,t){"use strict";t.r(e);var s=t(1),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装与使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用","aria-hidden":"true"}},[a._v("#")]),a._v(" "),t("imgLink",{attrs:{src:"logo/vue-cli.svg",width:"50px"}}),a._v(" 安装与使用")],1),a._v(" "),t("p",[a._v("vue-cli 官网: "),t("a",{attrs:{href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://cli.vuejs.org/zh/"),t("OutboundLink")],1)]),a._v(" "),t("imgLink",{attrs:{src:"cover/vue-cli.png"}}),a._v(" "),t("p",[a._v("vue本身并不强制用户使用脚手架进行安装，用户完全可以自定义进行安装，不过为了方便起见，脚手架中已集成各种必要的配置，我们可以站在巨人的肩膀上，将重心放到开发上，而不是搭建项目上折腾。")]),a._v(" "),t("h2",{attrs:{id:"vue-cli-2-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-2-0","aria-hidden":"true"}},[a._v("#")]),a._v(" vue-cli 2.0")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yarn global add vue-cli\n$ vue init "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("template-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("project-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[t("strong",[a._v("官方 Templates")])]),a._v(" "),t("p",[a._v("官方还提供其他一些常用的模板，webpack 只是其中一种 :")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("webpack")]),a._v(" - A full-featured Webpack + vue-loader setup with hot reload, linting, testing & css extraction.")]),a._v(" "),t("li",[t("strong",[a._v("webpack-simple")]),a._v(" - A simple Webpack + vue-loader setup for quick prototyping.")]),a._v(" "),t("li",[t("strong",[a._v("browserify")]),a._v(" - A full-featured Browserify + vueify setup with hot-reload, linting & unit testing.")]),a._v(" "),t("li",[t("strong",[a._v("browserify-simple")]),a._v(" - A simple Browserify + vueify setup for quick prototyping.")]),a._v(" "),t("li",[t("strong",[a._v("pwa")]),a._v(" - PWA template for vue-cli based on the webpack template")]),a._v(" "),t("li",[t("strong",[a._v("simple")]),a._v(" - The simplest possible Vue setup in a single HTML file")])]),a._v(" "),t("p",[t("strong",[a._v("非官方 Template")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("vue init username/repo"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#<branch-name> my-project")]),a._v("\n")])])]),t("p",[a._v("其中 username/repo 分别代表 GitHub 用户名和其放置脚手架的仓库，branch-name 代表分支名称，可以省略默认为master。")]),a._v(" "),t("p",[t("strong",[a._v("本地 Template")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("vue init ~/fs/path/to-custom-template my-project\n")])])]),t("p",[a._v("用户自己存放于本地的脚手架仍然可以通过本地路径的方式获取并创建项目。")]),a._v(" "),t("p",[a._v("目录结构如图:")]),a._v(" "),t("imgLink",{attrs:{src:"articles/022.png"}}),a._v(" "),t("p",[a._v("开发只需要关注 "),t("code",[a._v("src")]),a._v(" 目录即可，如果需要一些定制化的配置，可以修改 "),t("code",[a._v("build")]),a._v(" 目录下的 "),t("code",[a._v("webpack")]),a._v(" 配置。")]),a._v(" "),t("p",[a._v("其中比较重要的文件为 "),t("code",[a._v("src/main.js")]),a._v(" ，是整个项目的入口文件，渲染模板为 "),t("code",[a._v("index.html")]),a._v("，其中 "),t("code",[a._v("scr/App.vue")]),a._v(" 是可更改甚至删除的，只是脚手架提供的默认渲染组件。")]),a._v(" "),t("h3",{attrs:{id:"运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行项目")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yarn dev\n")])])]),t("p",[a._v("默认监听端口 8080，只需在浏览器输入 "),t("code",[a._v("http://localhost:8080")]),a._v(" 即可访问。")]),a._v(" "),t("h2",{attrs:{id:"vue-cli-3-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-3-0","aria-hidden":"true"}},[a._v("#")]),a._v(" vue-cli 3.0")]),a._v(" "),t("p",[a._v("其实本人一直使用的是 vue-cli 2.0, 不过最近尤大大发布了 3.0, 因此心血来潮, 写了这篇文章。")]),a._v(" "),t("p",[a._v("与 3.0 相比, 2.0 还是有一些令人满意的功能, 本人比较喜欢的是 2.0 可以自定义初始化模板, 而 3.0 必须引入 "),t("code",[a._v("@vue/cli-init")]),a._v(" 包才行。")]),a._v(" "),t("p",[a._v("如果要使用 3.0, 必须卸载 2.0 才能进行安装。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yarn global remove vue-cli\n")])])]),t("p",[a._v("安装 3.0 并创建项目")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yarn global add @vue/cli\n$ vue --version\n$ vue create hello-world "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 创建项目")]),a._v("\n$ vue add element "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装模板")]),a._v("\n$ yarn serve "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 运行程序")]),a._v("\n")])])]),t("p",[a._v("为了兼容 2.0, 3.0 版本提供了一个 "),t("code",[a._v("@vue/cli-init")]),a._v(" 以集成自定义的初始化模板:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yarn global add @vue/cli-init\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `vue init` 的运行效果将会跟 `vue-cli@2.x` 相同")]),a._v("\n$ vue init webpack my-project\n")])])]),t("h3",{attrs:{id:"_3-0-的可视化操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-0-的可视化操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.0 的可视化操作")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ vue ui\n🚀  Starting GUI"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n🌠  Ready on http://localhost:8000\n")])])]),t("p",[a._v("默认开启 8000 端口, 也可自定义端口访问:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ vue ui -p 3000\n")])])]),t("imgLink",{attrs:{src:"date/20181128/001.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/002.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/003.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/004.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/005.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/006.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/007.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/008.png"}}),a._v(" "),t("hr"),a._v(" "),t("imgLink",{attrs:{src:"date/20181128/009.png"}}),a._v(" "),t("p",[a._v("看起来挺不错的啊, 有点碉堡天的赶脚 !!")])],1)},[],!1,null,null,null);e.default=r.exports}}]);