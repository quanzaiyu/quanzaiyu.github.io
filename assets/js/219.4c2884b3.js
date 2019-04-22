(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{479:function(v,_,t){"use strict";t.r(_);var e=t(1),a=Object(e.a)({},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"安装和使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用","aria-hidden":"true"}},[v._v("#")]),v._v(" 安装和使用")]),v._v(" "),t("h2",{attrs:{id:"nuxt-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-安装","aria-hidden":"true"}},[v._v("#")]),v._v(" Nuxt 安装")]),v._v(" "),t("p",[v._v("使用脚手架 "),t("code",[v._v("create-nuxt-app")]),v._v(" 进行安装:")]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("$ npx create-nuxt-app "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("项目名"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("# or")]),v._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("yarn")]),v._v(" create nuxt-app "),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("项目名"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])])]),t("p",[v._v("安装完成后, 使用 "),t("code",[v._v("npm run dev")]),v._v(" 运行, 默认开启的路径是 "),t("code",[v._v("localhost:3000")])]),v._v(" "),t("p",[v._v("Nuxt.js 会监听 pages 目录中的文件更改，在添加新页面时无需重新启动应用程序。")]),v._v(" "),t("ul",[t("li",[v._v("构建应用程序: "),t("code",[v._v("yarn build")])]),v._v(" "),t("li",[v._v("开启应用程序: "),t("code",[v._v("yarn start")])])]),v._v(" "),t("p",[v._v("安装 "),t("code",[v._v("nuxt")]),v._v(" 全局包以便直接执行 "),t("code",[v._v("nuxt")]),v._v(" 命令(非必须):")]),v._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[v._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("yarn")]),v._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[v._v("add")]),v._v(" nuxt\n")])])]),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[v._v("#")]),v._v(" 目录结构")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("pages")]),v._v(" 页面目录, 用于组织应用的路由及视图。"),t("code",[v._v("Nuxt.js")]),v._v(" 框架读取该目录下所有的 "),t("code",[v._v(".vue")]),v._v(" 文件并自动生成对应的路由配置。"),t("em",[v._v("该目录名为Nuxt.js保留的，不可更改。")])]),v._v(" "),t("li",[t("code",[v._v("layouts")]),v._v(" 布局目录, 用于组织应用的布局组件。"),t("em",[v._v("该目录名为Nuxt.js保留的，不可更改。")])]),v._v(" "),t("li",[t("code",[v._v("static")]),v._v(" 静态文件目录, 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。"),t("em",[v._v("该目录名为Nuxt.js保留，不可更改。")])]),v._v(" "),t("li",[t("code",[v._v("store")]),v._v(" 目录用于组织应用的 "),t("code",[v._v("Vuex 状态树")]),v._v(" 文件。 Nuxt.js 框架集成了 "),t("code",[v._v("Vuex 状态树")]),v._v(" 的相关功能配置，在 store 目录下创建一个 index.js 文件可激活这些配置。"),t("em",[v._v("该目录名为Nuxt.js保留，不可更改。")])]),v._v(" "),t("li",[t("code",[v._v("assets")]),v._v(" 资源目录, 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript。")]),v._v(" "),t("li",[t("code",[v._v("components")]),v._v(" 组件目录, 用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。")]),v._v(" "),t("li",[t("code",[v._v("plugins")]),v._v(" 插件目录, 用于组织那些需要在 "),t("code",[v._v("根vue.js应用")]),v._v(" 实例化之前需要运行的 Javascript 插件。")]),v._v(" "),t("li",[t("code",[v._v("middleware")]),v._v(" 中间件目录。")]),v._v(" "),t("li",[t("code",[v._v("nuxt.config.js")]),v._v(" 文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。"),t("em",[v._v("该文件名为Nuxt.js保留的，不可更改。")])]),v._v(" "),t("li",[t("code",[v._v("package.json")]),v._v(" 文件用于描述应用的依赖关系和对外暴露的脚本接口。"),t("em",[v._v("该文件名为Nuxt.js保留的，不可更改。")])])]),v._v(" "),t("h2",{attrs:{id:"别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#别名","aria-hidden":"true"}},[v._v("#")]),v._v(" 别名")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("~")]),v._v(" 或 "),t("code",[v._v("@")]),v._v(": src目录")]),v._v(" "),t("li",[t("code",[v._v("~~")]),v._v(" 或 "),t("code",[v._v("@@")]),v._v(": 根目录")]),v._v(" "),t("li",[v._v("默认情况下，"),t("code",[v._v("src目录")]),v._v(" 和 "),t("code",[v._v("根目录")]),v._v(" 相同")])]),v._v(" "),t("p",[v._v("::: tip 提示\n在 vue 模板中, 如果你需要引入 assets 或者 static 目录, 使用 "),t("code",[v._v("~/assets/your_image.png")]),v._v(" 和 "),t("code",[v._v("~/static/your_image.png")]),v._v(" 方式。\n:::")]),v._v(" "),t("h2",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署","aria-hidden":"true"}},[v._v("#")]),v._v(" 部署")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("nuxt")]),v._v("\t启动一个热加载的Web服务器（开发模式） "),t("code",[v._v("localhost:3000")]),v._v("。")]),v._v(" "),t("li",[t("code",[v._v("nuxt build")]),v._v("\t利用webpack编译应用，压缩JS和CSS资源（发布用）, 生成路径为 "),t("code",[v._v(".nuxt/dist")]),v._v("。")]),v._v(" "),t("li",[t("code",[v._v("nuxt start")]),v._v("\t以生成模式启动一个Web服务器 (nuxt build 需先执行)。")]),v._v(" "),t("li",[t("code",[v._v("nuxt generate")]),v._v("\t编译应用，并依据路由配置生成对应的HTML文件 (用于静态站点的部署), 生成路径为 "),t("code",[v._v("dist")]),v._v("。")])]),v._v(" "),t("p",[v._v("生成 spa:")]),v._v(" "),t("ol",[t("li",[v._v("将 "),t("code",[v._v("nuxt.config.js")]),v._v(" 中的 "),t("code",[v._v("mode")]),v._v(" 更改为 "),t("code",[v._v("spa")]),v._v("。")]),v._v(" "),t("li",[v._v("运行 "),t("code",[v._v("npm run build")]),v._v(".")]),v._v(" "),t("li",[v._v("自动生成 "),t("code",[v._v("dist/")]),v._v(" 文件夹，部署到您的服务器，如 Surge，GitHub Pages或nginx。")])])])},[],!1,null,null,null);_.default=a.exports}}]);