(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{938:function(e,n,a){"use strict";a.r(n);var r=a(1),t=Object(r.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node-包管理工具比较"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-包管理工具比较","aria-hidden":"true"}},[e._v("#")]),e._v(" node 包管理工具比较")]),e._v(" "),a("h2",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm","aria-hidden":"true"}},[e._v("#")]),e._v(" npm")]),e._v(" "),a("p",[e._v("npm是Node.js能够如此成功的主要原因之一。npm团队做了很多的工作，以确保npm保持向后兼容，并在不同的环境中保持一致。")]),e._v(" "),a("p",[e._v("npm是围绕着 "),a("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义版本控制（semver）"),a("OutboundLink")],1),e._v(" 的思想而设计的，下面是从他们的网站摘抄过来的：")]),e._v(" "),a("p",[a("em",[e._v("给定一个版本号：主版本号.次版本号.补丁版本号， 以下这三种情况需要增加相应的版本号:")])]),e._v(" "),a("ul",[a("li",[a("em",[e._v("主版本号： 当API发生改变，并与之前的版本不兼容的时候")])]),e._v(" "),a("li",[a("em",[e._v("次版本号： 当增加了功能，但是向后兼容的时候")])]),e._v(" "),a("li",[a("em",[e._v("补丁版本号： 当做了向后兼容的缺陷修复的时候")])])]),e._v(" "),a("p",[a("code",[e._v("npm")]),e._v(" 使用一个名为 "),a("code",[e._v("package.json")]),e._v(" 的文件，用户可以通过 "),a("code",[e._v("npm i --save")]),e._v(" 命令把项目里所有的依赖项保存在这个文件里，如果通过 "),a("code",[e._v("npm i --save-dev")]),e._v(" 安装的依赖只在开发环境起效。("),a("code",[e._v("i")]),e._v(" 是 "),a("code",[e._v("install")]),e._v(" 的缩写)")]),e._v(" "),a("p",[e._v("package.json 像这样")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"关于-package-json-中的版本号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-package-json-中的版本号","aria-hidden":"true"}},[e._v("#")]),e._v(" 关于 "),a("code",[e._v("package.json")]),e._v(" 中的版本号")]),e._v(" "),a("p",[e._v("一个 "),a("code",[e._v("package.json")]),e._v(" 文件可能长这样:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"lodash"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"^4.17.4"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("在版本号 lodash 之前有个 "),a("code",[e._v("^")]),e._v(" 字符。这个字符告诉 npm，安装主版本等于4的任意一个版本即可。所以如果我现在运行 npm 进行安装，npm 将安装 lodash 的主版本为4的最新版，可能是 lodash@4.25.5（@是npm约定用来确定包名的指定版本的）。可以在"),a("a",{attrs:{href:"https://docs.npmjs.com/misc/semver",target:"_blank",rel:"noopener noreferrer"}},[e._v("此处"),a("OutboundLink")],1),e._v("查看所有支持的字符。")]),e._v(" "),a("p",[e._v("理论上，次版本号的变化并不会影响向后兼容性。因此，安装最新版的依赖库应该是能正常工作的，而且能引入自4.17.4版本以后的重要错误和安全方面的修复。")]),e._v(" "),a("p",[e._v("但是，另一方面，即使不同的开发人员使用了相同的 package.json 文件，在他们自己的机器上也可能会安装同一个库的不同种版本，这样就会存在潜在的难以调试的错误和 “在我的电脑上…” 的情形。")]),e._v(" "),a("p",[e._v("大多数 npm 库都严重依赖于其他 npm 库，这会导致嵌套依赖关系，并增加无法匹配相应版本的几率。")]),e._v(" "),a("p",[e._v("虽然可以通过 "),a("code",[e._v("npm config set save-exact true")]),e._v(" 命令关闭在版本号前面使用^的默认行为，但这个只会影响顶级依赖关系。由于每个依赖的库都有自己的 package.json 文件，而在它们自己的依赖关系前面可能会有^符号，所以无法通过 package.json 文件为嵌套依赖的内容提供保证。")]),e._v(" "),a("p",[e._v("为了解决这个问题，npm 提供了shrinkwrap 命令。此命令将生成一个 "),a("code",[e._v("npm-shrinkwrap.json")]),e._v(" 文件，为所有库和所有嵌套依赖的库记录确切的版本。")]),e._v(" "),a("p",[e._v("然而，即使存在 npm-shrinkwrap.json 这个文件，npm 也只会锁定库的版本，而不是库的内容。即便 npm 现在也能阻止用户多次重复发布库的同一版本，但是 npm 管理员仍然具有强制更新某些库的权力。")]),e._v(" "),a("p",[e._v("这是引用自 shrinkwrap 文档的内容：")]),e._v(" "),a("p",[e._v("如果你希望锁定包中的特定字节，比如是为了保证能正确地重新部署或构建，那么你应该在源代码控制中检查依赖关系，或者采取一些其他的机制来校验内容，而不是靠校验版本。")]),e._v(" "),a("h3",{attrs:{id:"npm2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm2","aria-hidden":"true"}},[e._v("#")]),e._v(" npm2")]),e._v(" "),a("p",[a("code",[e._v("npm 2")]),e._v(" 会安装每一个包所依赖的所有依赖项。如果我们有这么一个项目，它依赖项目A，项目A依赖项目B，项目B依赖项目C，那么依赖树将如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node_modules\n- package-A\n-- node_modules\n--- package-B\n----- node_modules\n------ package-C\n-------- some-really-really-really-long-file-name-in-package-c.js\n")])])]),a("p",[e._v("这个结构可能会很长。这对于基于 Unix 的操作系统来说只不过是一个小烦恼，但对于 Windows 来说却是个破坏性的东西，因为有很多程序无法处理超过 260 个字符的文件路径名。")]),e._v(" "),a("h3",{attrs:{id:"npm3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm3","aria-hidden":"true"}},[e._v("#")]),e._v(" npm3")]),e._v(" "),a("p",[a("code",[e._v("npm 3")]),e._v("采用了扁平依赖关系树来解决这个问题，所以我们的3个项目结构现在看起来如下所示：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node_modules\n- package-A\n- package-B\n- package-C\n-- some-file-name-in-package-c.js\n")])])]),a("p",[e._v("这样，一个原来很长的文件路径名就从 "),a("code",[e._v("./node_modules/package-A/node_modules/package-B/node-modules/some-file-name-in-package-c.js")]),e._v(" 变成了 "),a("code",[e._v("/node_modules/some-file-name-in-package-c.js")]),e._v("。")]),e._v(" "),a("p",[e._v("可以在"),a("a",{attrs:{href:"https://docs.npmjs.com/how-npm-works/npm3",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v(" 阅读到更多有关 NPM 3 依赖解析的工作原理。")]),e._v(" "),a("p",[e._v("这种方法的缺点是，npm 必须首先遍历所有的项目依赖关系，然后再决定如何生成扁平的 "),a("code",[e._v("node_modules")]),e._v(" 目录结构。npm 必须为所有使用到的模块构建一个完整的依赖关系树，这是一个耗时的操作，是"),a("a",{attrs:{href:"https://github.com/npm/npm/issues/8826",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm安装速度慢的一个很重要的原因"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"npm-的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-的配置","aria-hidden":"true"}},[e._v("#")]),e._v(" npm 的配置")]),e._v(" "),a("p",[e._v("查看当前配置 "),a("code",[e._v("npm config ls")])]),e._v(" "),a("p",[e._v("修改全局安装的包路径，也就是使用 "),a("code",[e._v("npm i -g xxx")]),e._v(" 安装的包，使用命令 "),a("code",[e._v('npm config set prefix "D:\\nodejs\\modules"')]),e._v(" 设置，跟上自定义的路径即可")]),e._v(" "),a("p",[e._v("注意，需要同时修改环境变量，否则不能在全局使用相关命令")]),e._v(" "),a("p",[e._v("对于Windows自行百度添加到环境变量的方法，Linux使用命令 "),a("code",[e._v("export PATH=$PATH:/the/path/to/yarn/global/bin/")]),e._v(" 即可。")]),e._v(" "),a("p",[e._v("修改缓存路径使用 "),a("code",[e._v('npm config set cache "D:\\nodejs\\cache"')])]),e._v(" "),a("p",[e._v("设置安装源，例如使用淘宝源: "),a("code",[e._v("npm config set registry https://registry.npm.taobao.org/")])]),e._v(" "),a("p",[e._v("设置完成后，使用 "),a("code",[e._v("npm config get registry")]),e._v(" 查看是否生效。")]),e._v(" "),a("h3",{attrs:{id:"npm-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本","aria-hidden":"true"}},[e._v("#")]),e._v(" npm 脚本")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("package.json")]),e._v(" 中，有一个 "),a("code",[e._v("scripts")]),e._v(" 字段，用于制定个性化的命令。")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"node build.js"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("比如在里面加入 "),a("code",[e._v("build")]),e._v(" 命令，可以使用 "),a("code",[e._v("npm run build")]),e._v(" 或 "),a("code",[e._v("yarn build")]),e._v(" 来执行，实际执行的命令为 "),a("code",[e._v("node build.js")]),e._v("。")]),e._v(" "),a("p",[e._v("在 "),a("code",[e._v("scripts")]),e._v(" 中有一个特殊的命令: "),a("code",[e._v("start")]),e._v("，可以直接使用 "),a("code",[e._v("npm start")]),e._v(" 来执行。")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"node server.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"start"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"npm run dev"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("此处，执行 "),a("code",[e._v("npm start")]),e._v("，实际执行的命令为 "),a("code",[e._v("node server.js")]),e._v("。")]),e._v(" "),a("p",[e._v("详细教程可以参考阮大大的 "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《npm scripts 使用指南》"),a("OutboundLink")],1),e._v("，此处仅作为抛砖引玉。")]),e._v(" "),a("h2",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn","aria-hidden":"true"}},[e._v("#")]),e._v(" yarn")]),e._v(" "),a("p",[e._v("Yarn 是 Facebook, Google, Exponent 和 Tilde 开发的一款新的 JavaScript 包管理工具。就像我们可以从官方文档了解那样，它的目的是解决这些团队使用 npm 面临的少数问题，即：")]),e._v(" "),a("ul",[a("li",[e._v("安装的时候无法保证速度/一致性")]),e._v(" "),a("li",[e._v("安全问题，因为 npm 安装时允许运行代码")])]),e._v(" "),a("p",[e._v("每当 npm 或 Yarn 需要安装一个包时，它会进行一系列的任务。在 npm 中这些任务是按包的顺序一个个执行，这意味着必须等待上一个包被完整安装才会进入下一个；Yarn 则并行的执行这些任务，提高了性能。")]),e._v(" "),a("h3",{attrs:{id:"yarn-lock-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-lock-文件","aria-hidden":"true"}},[e._v("#")]),e._v(" yarn.lock 文件")]),e._v(" "),a("p",[e._v("npm 和 Yarn 都使用 "),a("code",[e._v("package.json")]),e._v(" 来跟踪项目的依赖，版本号并非一直准确，因为你可以定义版本号范围，这样你可以选择一个主版本和次要版本的包，但让 npm 安装最新的补丁也许可以修改一些 bug。")]),e._v(" "),a("p",[e._v("理想状态下使用"),a("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义化版本"),a("OutboundLink")],1),e._v("发布补丁不会包含大的变化，但不幸的是这必非真理。npm 的这种策略可能导致两台拥有相同 "),a("code",[e._v("package.json")]),e._v(" 文件的机子安装了不同版本的包，这可能导致一些错误。")]),e._v(" "),a("p",[e._v("为了避免包版本的错误匹配，一个确定的安装版本被固定在一个锁文件中。每次模块被添加时，Yarn 就会创建（或更新）"),a("code",[e._v("yarn.lock")]),e._v(" 文件，这样你就可以保证其它机子也安装相同版本的包，同时包含了 "),a("code",[e._v("package.json")]),e._v(" 中定义的一系列允许的版本。")]),e._v(" "),a("p",[e._v("在 npm 中同样可以使用 "),a("code",[e._v("npm shrinkwrap")]),e._v(" 命令来生成一个锁文件，这样在使用 "),a("code",[e._v("npm install")]),e._v(" 时会在读取 "),a("code",[e._v("package.json")]),e._v(" 前先读取这个文件，就像 Yarn 会先读取"),a("code",[e._v("yarn.lock")]),e._v(" 一样。这里的区别是 Yarn 总会自动更新 "),a("code",[e._v("yarn.lock")]),e._v("，而 npm 需要你重新操作。")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://yarnpkg.com/en/docs/configuration#toc-use-yarn-lock-to-pin-your-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn.lock 文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/shrinkwrap",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm shrinkwrap 文档"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"与-npm-命令对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-npm-命令对比","aria-hidden":"true"}},[e._v("#")]),e._v(" 与 npm 命令对比")]),e._v(" "),a("ul",[a("li",[e._v("yarn 相关文档: "),a("a",{attrs:{href:"https://yarn.bootcss.com/docs/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("中文文档"),a("OutboundLink")],1),e._v("、"),a("a",{attrs:{href:"https://yarnpkg.com/en/docs/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("npm 相关文档: "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/",target:"_blank",rel:"noopener noreferrer"}},[e._v("英文文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("命令对比: "),a("a",{attrs:{href:"https://yarn.bootcss.com/docs/migrating-from-npm.html#toc-cli-commands-comparison",target:"_blank",rel:"noopener noreferrer"}},[e._v("从 npm 迁移到 Yarn"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("全局安装")]),e._v(" "),a("ul",[a("li",[e._v("yarn: "),a("code",[e._v("yarn global add package")])]),e._v(" "),a("li",[e._v("npm: "),a("code",[e._v("npm i package -g")]),e._v(" 或 "),a("code",[e._v("npm i package --global")])])]),e._v(" "),a("p",[e._v("局部安装")]),e._v(" "),a("ul",[a("li",[e._v("yarn: "),a("code",[e._v("yarn add package")])]),e._v(" "),a("li",[e._v("yarn 添加开发依赖 "),a("code",[e._v("yarn add package --dev")]),e._v(" 或 "),a("code",[e._v("yarn add package -D")])]),e._v(" "),a("li",[e._v("npm: "),a("code",[e._v("npm i package --save")])]),e._v(" "),a("li",[e._v("npm 添加开发依赖: "),a("code",[e._v("npm i package --save-dev")]),e._v(" 或 "),a("code",[e._v("npm i package -D")])])]),e._v(" "),a("p",[e._v("初始化依赖淡妆")]),e._v(" "),a("ul",[a("li",[e._v("yarn: "),a("code",[e._v("yarn")]),e._v(" 或 "),a("code",[e._v("yarn install")])]),e._v(" "),a("li",[e._v("npm: "),a("code",[e._v("npm i")]),e._v(" 或 "),a("code",[e._v("npm install")])])]),e._v(" "),a("p",[e._v("卸载包")]),e._v(" "),a("ul",[a("li",[e._v("yarn: "),a("code",[e._v("yarn remove package")])]),e._v(" "),a("li",[e._v("npm: "),a("code",[e._v("npm uninstall --save package")]),e._v(" 或 "),a("code",[e._v("npm uninstall --save-dev package")])])]),e._v(" "),a("h2",{attrs:{id:"npm-与-yarn-的缓存策略对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-与-yarn-的缓存策略对比","aria-hidden":"true"}},[e._v("#")]),e._v(" npm 与 yarn 的缓存策略对比")]),e._v(" "),a("h3",{attrs:{id:"npm-的缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-的缓存策略","aria-hidden":"true"}},[e._v("#")]),e._v(" npm 的缓存策略")]),e._v(" "),a("p",[e._v("npm 的缓存目录是通过 cache 变量指定的，一般默认是在 "),a("code",[e._v("~/.npm")]),e._v(" 文件夹（Windows 系统在 "),a("code",[e._v("%AppData%/npm-cache")]),e._v(" 文件夹），可以执行命令 "),a("code",[e._v("npm config get cache")]),e._v(" 查看")]),e._v(" "),a("p",[e._v("在 npm@5 以前，每个缓存的模块在 "),a("code",[e._v("~/.npm")]),e._v(" 文件夹中以模块名的形式直接存储，例如 koa 模块存储在 "),a("code",[e._v("~/.npm/koa")]),e._v(" 文件夹中。而 npm@5 版本开始，数据存储在 "),a("code",[e._v("~/.npm/_cacache")]),e._v(" 中，并且不是以模块名直接存放。")]),e._v(" "),a("p",[e._v("也可以通过 "),a("code",[e._v("npm config set cache path")]),e._v(" 来手动指定 npm 缓存目录。")]),e._v(" "),a("hr"),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm cache"),a("OutboundLink")],1),e._v(" 提供了三个命令，分别是 "),a("code",[e._v("npm cache add")]),e._v(", "),a("code",[e._v("npm cache clean")]),e._v(", "),a("code",[e._v("npm cache verify")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("npm cache add")]),e._v(" 官方解释说这个命令主要是 npm 内部使用，但是也可以用来手动给一个指定的 package 添加缓存。")]),e._v(" "),a("li",[a("code",[e._v("npm cache clean")]),e._v(" 删除缓存目录下的所有数据。从 npm@5 开始，为了保证缓存数据的有效性和完整性，需要加上 --force 参数。")]),e._v(" "),a("li",[a("code",[e._v("npm cache verify")]),e._v(" 验证缓存数据的有效性和完整性，清理垃圾数据。")])]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("npm 提供了离线安装模式，使用 "),a("code",[e._v("--offline")]),e._v(", "),a("code",[e._v("--prefer-offline")]),e._v(", "),a("code",[e._v("--prefer-online")]),e._v(" 可以指定离线模式。")]),e._v(" "),a("p",[a("code",[e._v("--prefer-offline")]),e._v(" / "),a("code",[e._v("--prefer-online")]),e._v(" “离线优先/网络优先”模式。")]),e._v(" "),a("p",[e._v("如果设置为 "),a("code",[e._v("--prefer-offline")]),e._v(" 则优先使用缓存数据，如果没有匹配的缓存数据，则从远程仓库下载。")]),e._v(" "),a("p",[e._v("如果设置为 "),a("code",[e._v("--prefer-online")]),e._v(" 则优先使用网络数据，忽略缓存数据，这种模式可以及时获取最新的模块。")]),e._v(" "),a("p",[a("code",[e._v("--offline")]),e._v(" 完全离线模式，安装过程不需要网络，直接使用匹配的缓存数据，一旦缓存数据不存在，则安装失败。")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("npm 的缓存是使用 pacote 模块进行下载和管理，基于 "),a("code",[e._v("cacache")]),e._v(" 缓存存储。由于 npm 会维护缓存数据的完整性，一旦数据发生错误，就回重新获取。因此不推荐手动清理缓存，除非需要释放磁盘空间，这也是要强制加上 "),a("code",[e._v("--force")]),e._v(" 参数的原因。")]),e._v(" "),a("p",[e._v("目前没有提供用户自己管理缓存数据的命令，随着你不断安装新的模块，缓存数据也会越来越多，因为 npm 不会自己删除数据。")]),e._v(" "),a("h3",{attrs:{id:"yarn-的缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-的缓存策略","aria-hidden":"true"}},[e._v("#")]),e._v(" yarn 的缓存策略")]),e._v(" "),a("p",[e._v("Yarn 发布于 2016年10月，并在 Github 上迅速拥有了 2.4万个 Star。而 npm 只有 1.2万个 Star。这个项目由一些高级开发人员维护，包括了 Sebastian McKenzie（"),a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel.js"),a("OutboundLink")],1),e._v("）和Yehuda Katz（"),a("a",{attrs:{href:"https://www.emberjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ember.js"),a("OutboundLink")],1),e._v("、"),a("a",{attrs:{href:"https://www.rust-lang.org/en-US/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rust"),a("OutboundLink")],1),e._v("、"),a("a",{attrs:{href:"http://bundler.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bundler"),a("OutboundLink")],1),e._v("等）。")]),e._v(" "),a("p",[e._v("从我搜集到的情况来看，Yarn 一开始的主要目标是解决上一节中描述的由于语义版本控制而导致的 npm 安装的不确定性问题。虽然可以使用 "),a("code",[e._v("npm shrinkwrap")]),e._v(" 来实现可预测的依赖关系树，但它并不是默认选项，而是取决于所有的开发人员知道并且启用这个选项。")]),e._v(" "),a("p",[e._v("Yarn 采取了不同的做法。每个 yarn 安装都会生成一个类似于 "),a("code",[e._v("npm-shrinkwrap.json")]),e._v(" 的 "),a("code",[e._v("yarn.lock")]),e._v(" 文件，而且它是默认创建的。除了常规信息之外，"),a("code",[e._v("yarn.lock")]),e._v(" 文件还包含要安装的内容的校验和，以确保使用的库的版本相同。")]),e._v(" "),a("p",[e._v("由于 yarn 是崭新的经过重新设计的 npm 客户端，它能让开发人员并行化处理所有必须的操作，并添加了一些其他改进，这使得运行速度得到了显著的提升，整个安装时间也变得更少。我估计，速度提升是 yarn 受欢迎的主要原因。")]),e._v(" "),a("p",[e._v("像 npm 一样，yarn 使用本地缓存。与 npm 不同的是，yarn 无需互联网连接就能安装本地缓存的依赖项，它提供了 ==离线模式==。这个功能在 2012年的 npm 项目中就被提出来过，但一直没有实现。")]),e._v(" "),a("p",[e._v("yarn 缓存目录位于 "),a("code",[e._v("~/Library/Caches/Yarn")]),e._v(" 文件夹中，每个缓存的模块被存放在独立的文件夹，文件夹名称包含了模块名称、版本号等信息。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://yarnpkg.com/en/docs/cli/cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn cache"),a("OutboundLink")],1),e._v(" 提供了三个命令，分别是 "),a("code",[e._v("yarn cache ls")]),e._v(", "),a("code",[e._v("yarn cache dir")]),e._v(", "),a("code",[e._v("yarn cache clean")]),e._v("。")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("yarn cache ls")]),e._v(" 列出当前缓存的包列表。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("yarn cache dir")]),e._v(" 显示缓存数据的目录。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("yarn cache clean")]),e._v(" 清除所有缓存数据。")])])]),e._v(" "),a("p",[e._v("yarn 还提供了一些其他改进，例如，它允许合并项目中使用到的所有的包的许可证，这一点让人很高兴。")]),e._v(" "),a("p",[e._v("设置 yarn 缓存目录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yarn config set cache-folder <path>\n")])])]),a("hr"),e._v(" "),a("p",[e._v("yarn 也支持离线安装，yarn 默认会使用 "),a("code",[e._v("--prefer-online")]),e._v(" 的模式，也就是先尝试从远程仓库下载，如果连接失败则尝试从缓存读取。yarn 也提供了 "),a("code",[e._v("--offline")]),e._v("参数，即通过 "),a("code",[e._v("yarn add --offline")]),e._v(" 或 "),a("code",[e._v("--perfer-offline")]),e._v(" 安装依赖，")]),e._v(" "),a("p",[e._v("另外 yarn 还支持配置离线镜像，通过以下命令设置离线缓存仓库。具体细节参照官方博客"),a("a",{attrs:{href:"https://yarnpkg.com/blog/2016/11/24/offline-mirror/",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Running Yarn offline》"),a("OutboundLink")],1),e._v("。可设置为")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yarn config set yarn-offline-mirror ./npm-packages-offline-cache\n")])])]),a("hr"),e._v(" "),a("p",[e._v("一个有趣的事情是，yarn 文档的态度开始针对 npm 发生改变，因为 yarn 项目变得流行起来。")]),e._v(" "),a("p",[e._v("最开始的 yarn 公告是这么介绍 yarn 的安装的：")]),e._v(" "),a("p",[e._v("最简单的入门方法是运行：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g yarn\n")])])]),a("p",[e._v("现在的 yarn 安装页面是这么说的：")]),e._v(" "),a("p",[a("em",[e._v("注意：通常情况下不建议通过 npm 进行安装。npm 安装是非确定性的，程序包没有签名，并且 npm 除了做了基本的 SHA1哈希之外不执行任何完整性检查，这给安装系统程序带来了安全风险。")])]),e._v(" "),a("p",[a("em",[e._v("基于这些原因，强烈建议你通过最适合于你的操作系统的安装方法来安装 yarn。")])]),e._v(" "),a("p",[e._v("以这种速度发展下去的话，如果 yarn 要宣布他们自己的 registry，让开发者慢慢淘汰 npm 的话，我们一点都不会感到惊讶。")]),e._v(" "),a("p",[e._v("看起来似乎要感谢 yarn，npm 终于意识到他们需要更加关注一些大家强烈要求的问题了。当我在审核我之前提到的强烈要求的 “离线” 功能时，我注意到这个需求正在被积极地修复之中。")]),e._v(" "),a("h2",{attrs:{id:"pnpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm","aria-hidden":"true"}},[e._v("#")]),e._v(" pnpm")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/pnpm/pnpm",target:"_blank",rel:"noopener noreferrer"}},[e._v("pnpm"),a("OutboundLink")],1),e._v(" 是又一个 Node.js 包管理工具。它可以替换 npm， 而且 npm 更快更高效。")]),e._v(" "),a("p",[e._v("能有多快? "),a("em",[e._v("3 倍！")]),e._v(" 可以在"),a("a",{attrs:{href:"https://github.com/pnpm/node-package-manager-benchmark",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v(" 查看 benchmarks 。")]),e._v(" "),a("p",[e._v("为什么更高效？ 当你安装一个软件包，我们把它保存在你的机器上的一个全局存储目录中，然后我们创建一个硬链接而不是复制。 对于模块的每个版本，只会有一个副本保存在磁盘上。 例如，当使用 npm 或 yarn 时，如果有 100 个使用 lodash 的项目，你的磁盘上就会有有 100 份 lodash 的拷贝。pnpm 能帮助您节省千兆字节的磁盘空间！")]),e._v(" "),a("p",[e._v("安装 pnpm")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g pnpm\n")])])]),a("p",[e._v("pnpm 的使用同 npm")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pnpm i foo\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/pnpm/pnpm",target:"_blank",rel:"noopener noreferrer"}},[e._v("github 仓库地址"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"pnpm-的几个特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm-的几个特性","aria-hidden":"true"}},[e._v("#")]),e._v(" pnpm 的几个特性")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("安全")]),e._v(" 像 Yarn 一样，pnpm 有一个特殊的文件，其中包含所有安装包的校验码，以在代码执行之前验证每个已安装包的完整性。")]),e._v(" "),a("li",[a("strong",[e._v("离线模式")]),e._v(" pnpm 将所有下载的软件包 tar 包保存在本地镜像仓库中。 当一个包在本地可用时，它从不发出请求。 使用 --offline 参数，HTTP 请求可以被完全禁止。")]),e._v(" "),a("li",[a("strong",[e._v("速度")]),e._v(" pnpm 不仅比 npm 快，而且比 Yarn 还要快。 它比 cold 和 hot 缓存 Yarn 都快。 Yarn 从缓存拷贝文件，而 pnpm 只是从全局存储目录链接它们。")])]),e._v(" "),a("h3",{attrs:{id:"pnpm-的目录树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pnpm-的目录树","aria-hidden":"true"}},[e._v("#")]),e._v(" pnpm 的目录树")]),e._v(" "),a("p",[e._v("与 npm@3 不同，pnpm 试图解决 npm@2 所具有的问题，而不是将依赖关系树展平。 在由 pnpm 创建的 node_modules 文件夹中，所有的软件包都有自己的依赖关系，但是目录树永远不会像 npm@2 那么深。 pnpm 保持所有依赖关系平坦，但使用符号链接将它们组合在一起。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-> - a symlink (or junction on Windows)\n\nnode_modules\n├─ foo -> .registry.npmjs.org/foo/1.0.0/node_modules/foo\n└─ .registry.npmjs.org\n   ├─ foo/1.0.0/node_modules\n   |  ├─ bar -> ../../bar/2.0.0/node_modules/bar\n   |  └─ foo\n   |     ├─ index.js\n   |     └─ package.json\n   └─ bar/2.0.0/node_modules\n      └─ bar\n         ├─ index.js\n         └─ package.json\n")])])]),a("p",[e._v("要查看实例，请访问 "),a("a",{attrs:{href:"https://github.com/pnpm/sample-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("示例 pnpm 项目"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/1470c5d7b8c3",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm如何管理依赖包的版本"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qiansg123/article/details/80129453",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSDN: 一文看懂npm、yarn、pnpm之间的区别"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000009709213",target:"_blank",rel:"noopener noreferrer"}},[e._v("segmentFault: npm 和 yarn 缓存策略对比"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000013214927",target:"_blank",rel:"noopener noreferrer"}},[e._v("为什么我们应该使用 pnpm（译）"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://ju.outofmemory.cn/entry/64247",target:"_blank",rel:"noopener noreferrer"}},[e._v("NPM本地缓存方案"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://web.jobbole.com/88459/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn vs npm: 你需要知道的一切"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/dapenglalala/p/6511557.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn初学"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/friendan/article/details/51736231",target:"_blank",rel:"noopener noreferrer"}},[e._v("更改npm全局模块和cache默认安装位置"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jeikerxiao/article/details/53887524",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm - 换淘宝源"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://cnodejs.org/topic/57ff0541487e1e4578afb48d",target:"_blank",rel:"noopener noreferrer"}},[e._v("「CYarn」使用 cnpm 源的 Yarn"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/e21e3783304f",target:"_blank",rel:"noopener noreferrer"}},[e._v("nvm 使用攻略"),a("OutboundLink")],1)])])])},[],!1,null,null,null);n.default=t.exports}}]);