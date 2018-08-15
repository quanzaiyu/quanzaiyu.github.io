(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{866:function(s,t,n){"use strict";n.r(t);var a=n(1),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"关于-npm-和-yarn-换源"}},[s._v("关于 npm 和 yarn 换源")]),s._v(" "),n("h2",{attrs:{id:"查看源"}},[s._v("查看源")]),s._v(" "),s._m(0),n("h2",{attrs:{id:"更换源"}},[s._v("更换源")]),s._v(" "),n("p",[s._v("这里使用淘宝源。")]),s._v(" "),n("h3",{attrs:{id:"npm"}},[s._v("npm")]),s._v(" "),n("p",[s._v("npm 默认的源为 https://registry.npmjs.org")]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),n("p",[s._v(".npmrc 的意思为 npm runtime config 的意思，有全局配置，不同操作平台路径不一样。")]),s._v(" "),n("p",[s._v("也可以在项目根目录中生成此文件，以覆盖全局配置。")]),s._v(" "),n("p",[s._v("在此文件中加入：")]),s._v(" "),s._m(8),n("p",[s._v("即可，此方法适用于 npm，对 yarn 同样生效。")]),s._v(" "),s._m(9),s._v(" "),s._m(10),n("h3",{attrs:{id:"yarn"}},[s._v("yarn")]),s._v(" "),n("p",[s._v("yarn 默认的源为 https://registry.yarnpkg.com")]),s._v(" "),n("p",[s._v("安装 yarn 可以到"),n("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),n("OutboundLink")],1),s._v("下载安装，也可使用命令进行安装")]),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),n("p",[n("strong",[s._v("第二种方法")]),s._v("：另行安装 "),n("a",{attrs:{href:"https://github.com/xcatliu/cyarn",target:"_blank",rel:"noopener noreferrer"}},[s._v("cYarn"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("cYarn 是使用 cnpm 源的 Yarn。")]),s._v(" "),n("p",[s._v("安装 cYarn：")]),s._v(" "),s._m(14),n("p",[n("strong",[s._v("第三种方法")]),s._v("：使用 "),n("a",{attrs:{href:"https://github.com/i5ting/yrm",target:"_blank",rel:"noopener noreferrer"}},[s._v("yrm"),n("OutboundLink")],1)]),s._v(" "),s._m(15),s._m(16),s._v(" "),n("h2",{attrs:{id:"更换-node-sass-安装源"}},[s._v("更换 node-sass 安装源")]),s._v(" "),n("p",[s._v("众所周知，sass 是基于 ruby 开发的，而在 node 平台想要获得 sass 的支持，需要借助 node-sass。")]),s._v(" "),n("p",[s._v("然而，安装 node-sass 的时候总是会各种不成功，大部分安装不成功的原因都源自这里，因为 GitHub Releases 里的文件都托管在 s3.amazonaws.com上面，而这个网址在国内总是网络不稳定，所以我们需要通过第三方服务器下载这个文件。")]),s._v(" "),n("p",[s._v("方法一：使用淘宝源")]),s._v(" "),s._m(17),n("p",[s._v("这样使用 npm install 安装 node-sass、electron 和 phantomjs 时都能自动从淘宝源上下载。")]),s._v(" "),n("p",[s._v("方法二：安装cnpm >>>  也是淘宝源的做法")]),s._v(" "),s._m(18),n("p",[s._v("这样也可以成功安装node-sass")]),s._v(" "),n("p",[s._v("方法三：使用VPN")]),s._v(" "),s._m(19),n("h2",{attrs:{id:"国内一些优秀的源"}},[s._v("国内一些优秀的源")]),s._v(" "),n("h3",{attrs:{id:"淘宝-npm-镜像"}},[s._v("淘宝 npm 镜像")]),s._v(" "),s._m(20),s._v(" "),n("h3",{attrs:{id:"cnpmjs-镜像"}},[s._v("cnpmjs 镜像")]),s._v(" "),s._m(21),s._v(" "),n("h2",{attrs:{id:"关于-npmrc"}},[s._v("关于 npmrc")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.npmjs.com.cn/files/npmrc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("npmrc"),n("OutboundLink")],1),s._v(" 文件分为以下几种权限：项目权限 > 用户权限 > 全局权限")]),s._v(" "),n("p",[s._v("路径如下")]),s._v(" "),s._m(22),s._v(" "),n("h2",{attrs:{id:"参考资料"}},[s._v("参考资料")]),s._v(" "),n("p",[n("a",{attrs:{href:"http://npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("淘宝源：TaoNPM"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://cnodejs.org/topic/581d96d5bb9452c9052e7b58",target:"_blank",rel:"noopener noreferrer"}},[s._v("在中国，安装 & 升级 npm 依赖的正确方法"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://cnodejs.org/topic/57ff0541487e1e4578afb48d",target:"_blank",rel:"noopener noreferrer"}},[s._v("「CYarn」使用 cnpm 源的 Yarn"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"http://riny.net/2014/cnpm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("国内优秀npm镜像推荐及使用"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/a295277302/article/details/70992404",target:"_blank",rel:"noopener noreferrer"}},[s._v("node安装node-sass失败，配置淘宝源"),n("OutboundLink")],1)])])},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config list "),n("span",{attrs:{class:"token comment"}},[s._v("# 查看 npm 所有设置")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get registry "),n("span",{attrs:{class:"token comment"}},[s._v("# 查看 npm 指定设置")]),s._v("\nyarn config list "),n("span",{attrs:{class:"token comment"}},[s._v("# 查看 yarn 所有设置")]),s._v("\nyarn config get registry "),n("span",{attrs:{class:"token comment"}},[s._v("# 查看 yarn 指定设置")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第一种方法")]),this._v("：另行安装 cnpm，注册淘宝源")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm --registry"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第二种方法")]),this._v("：使用别名配置 npm")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("alias")]),s._v(" cnpm"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token string"}},[s._v('"npm --registry=https://registry.npm.taobao.org \\\n--cache='),n("span",{attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.npm/.cache/cnpm \\\n--disturl=https://npm.taobao.org/dist \\\n--userconfig="),n("span",{attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.cnpmrc"')]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("# Or alias it in .bashrc or .zshrc")]),s._v("\n$ "),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v("'\\n#alias for cnpm\\nalias cnpm=\"npm --registry=https://registry.npm.taobao.org \\\n  --cache="),n("span",{attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.npm/.cache/cnpm \\\n  --disturl=https://npm.taobao.org/dist \\\n  --userconfig="),n("span",{attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.cnpmrc\"'")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc "),n("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.zshrc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第三种方法")]),this._v("：直接更换 npm 源")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{attrs:{class:"token keyword"}},[this._v("set")]),this._v(" registry https://registry.npm.taobao.org\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第四种方法")]),this._v("：修改 .npmrc")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("registry='https://registry.npm.taobao.org'\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第五中方法")]),this._v("：临时使用")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" --registry https://registry.npm.taobao.org "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" express\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("cnpm "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" yarn -g\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第一种方法")]),this._v("：更换源跟 npm 类似：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn config "),t("span",{attrs:{class:"token keyword"}},[this._v("set")]),this._v(" registry https://registry.npm.taobao.org\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cyarn "),n("span",{attrs:{class:"token comment"}},[s._v("# 使用 cnpm 默认源进行安装")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cyarn --registry"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org "),n("span",{attrs:{class:"token comment"}},[s._v("# 使用淘宝源进行安装")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -g yrm\nyrm use cnpm\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("strong",[this._v("第四种方法")]),this._v("：修改 .npmrc，上面提到了。")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" sass_binary_site"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/node-sass/\n"),n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" phantomjs_cdnurl"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/phantomjs/\n"),n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" electron_mirror"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npm.taobao.org/mirrors/electron/\n"),n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" registry"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("https://registry.npm.taobao.org\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -g cnpm\ncnpm "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" proxy "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http://127.0.0.1:1080"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("此处是VPN的代理地址\nnpm i node-sass\n\n下载完成后删除 http 代理\n\n```bash\n"),n("span",{attrs:{class:"token function"}},[s._v("npm")]),s._v(" config delete proxy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("搜索地址：http://npm.taobao.org/")]),this._v(" "),t("li",[this._v("registry地址：http://registry.npm.taobao.org/")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("搜索地址：http://cnpmjs.org/")]),this._v(" "),t("li",[this._v("registry地址：http://r.cnpmjs.org/")])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ul",[n("li",[s._v("全局权限："),n("code",[s._v("$PREFIX/etc/npmrc")])]),s._v(" "),n("li",[s._v("用户权限："),n("code",[s._v("$HOME/.npmrc")])]),s._v(" "),n("li",[s._v("项目权限："),n("code",[s._v("$PROJECT/.npmrc")]),s._v(" 在项目更目录中，跟 "),n("code",[s._v("node_modules")]),s._v(" 和 "),n("code",[s._v("package.json")]),s._v(" 同路径")])])}],!1,null,null,null);t.default=e.exports}}]);