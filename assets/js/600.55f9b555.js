(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{793:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"发布自己的npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布自己的npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布自己的npm包")]),s._v(" "),a("p",[s._v("前一段时间开发了一些基于Vue的插件，感觉还挺好用的，就发布到npm，希望大家都能使用。")]),s._v(" "),a("p",[s._v("下面说一下发布npm 的流程:")]),s._v(" "),a("h2",{attrs:{id:"注册一个npm账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册一个npm账号","aria-hidden":"true"}},[s._v("#")]),s._v(" 注册一个npm账号")]),s._v(" "),a("p",[s._v("进入网址: https://www.npmjs.com 注册一个npm账号。")]),s._v(" "),a("p",[s._v("本人的npm地址为: "),a("a",{attrs:{href:"https://www.npmjs.com/~quanzaiyu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/~quanzaiyu"),a("OutboundLink")],1)]),s._v(" "),a("imgLink",{attrs:{src:"date/20181118/005.png"}}),s._v(" "),a("p",[s._v("注册后如果需要进行头像设置，需要到 https://en.gravatar.com 注册一个账号(使用的是WordPress账号)，添加头像。")]),s._v(" "),a("imgLink",{attrs:{src:"date/20181118/006.png"}}),s._v(" "),a("h2",{attrs:{id:"开发一个npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发一个npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 开发一个npm包")]),s._v(" "),a("h3",{attrs:{id:"初始化仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化仓库","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化仓库")]),s._v(" "),a("p",[s._v("每一个npm包都需要一个"),a("code",[s._v("package.json")]),s._v("文件，进行常规配置。")]),s._v(" "),a("p",[s._v("首先进入需要发布npm的目录，输入")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init\n")])])]),a("p",[s._v("进行包初始化，自动生成一个"),a("code",[s._v("package.json")]),s._v("文件，填写一些简单的选项，包括: 包名、版本号、主入口文件、描述、作者、脚本 等。")]),s._v(" "),a("p",[s._v("最终文件大致如下:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qzy-npm-test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"一个npm测试包"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"quanzaiyu"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"主入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主入口文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 主入口文件")]),s._v(" "),a("p",[s._v("可以看到，在"),a("code",[s._v("package.json")]),s._v("中指定主入口文件为"),a("code",[s._v("index.js")]),s._v("，那么，就得在项目下创建一个名为"),a("code",[s._v("index.js")]),s._v("的文件。比如:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hello "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("可以看到，此文件导出了一个名叫"),a("code",[s._v("hello")]),s._v("的函数。")]),s._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("p",[s._v("将整个文件夹丢到"),a("code",[s._v("node_modules")]),s._v("目录下，在"),a("code",[s._v("node_modules")]),s._v("同级目录下使用"),a("code",[s._v("npm init")]),s._v(" 创建 "),a("code",[s._v("package.json")]),s._v("，内容大体如下:")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"projects"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"qzy-npm-test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.0.1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo \\"Error: no test specified\\" && exit 1"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ISC"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("再在同级目录下创建一个"),a("code",[s._v("test.js")]),s._v("，内容如下:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qzy-npm-test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Jarrick'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("执行"),a("code",[s._v("node test")]),s._v("，控制台输出"),a("code",[s._v("hello Jarrick")]),s._v("。说明此包测试成功。")]),s._v(" "),a("p",[s._v("创建的目录结构如下:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("projects/ # 测试项目目录\n\tnode_modules/ # 包目录\n\t\tqzy-npm-test/ # 插件目录\n\t\t\tindex.js # 插件入口文件\n\t\t\tpackage.json # 插件配置文件\n\ttest.js # 测试文件\n\tpackage.json # 测试配置文件\n")])])]),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),a("p",[s._v("以下操作都在 "),a("code",[s._v("projects/node_modules/qzy-npm-test/")]),s._v(" 目录下进行。")]),s._v(" "),a("h3",{attrs:{id:"添加npm用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加npm用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 添加npm用户")]),s._v(" "),a("p",[s._v("使用之前注册的npm账号进行登录")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" adduser\nusername: xxx\npassword: xxx\nemail: xxx\n")])])]),a("p",[s._v("也可以使用 "),a("code",[s._v("npm login")]),s._v(" 进行登录。")]),s._v(" "),a("h3",{attrs:{id:"发布npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布npm包")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n")])])]),a("p",[s._v("发布后可在自己的npm主页看到")]),s._v(" "),a("h3",{attrs:{id:"更新npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 更新npm包")]),s._v(" "),a("p",[s._v("如果之后修改过此包，需要修改"),a("code",[s._v("package.json")]),s._v("中的版本号字段"),a("code",[s._v("version")]),s._v("，使其大于当前版本，然后"),a("code",[s._v("npm publish")]),s._v("即可。")]),s._v(" "),a("p",[s._v("如果未更改版本号，会报错:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm ERR! publish Failed PUT 403\nnpm ERR! code E403\nnpm ERR! You cannot publish over the previously published version 1.0.0. : qzy-npm-test\n\nnpm ERR! A complete log of this run can be found in:\nnpm ERR!     C:\\Users\\quanzaiyu\\AppData\\Roaming\\npm-cache\\_logs\\2017-09-12T07_59_18_829Z-debug.log\n")])])]),a("p",[s._v("修改版本号后则成功:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" publish\n+ qzy-npm-test@1.0.1\n")])])]),a("h2",{attrs:{id:"删除npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除npm包")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unpublish\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" unpublish --force\n")])])]),a("h2",{attrs:{id:"安装npm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装npm包","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装npm包")]),s._v(" "),a("p",[s._v("安装使用方法很简单，跟以前安装npm包同样的使用即可。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("packageName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("比如安装刚才发布的包:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i qzy-npm-test --save\n")])])]),a("p",[s._v("使用刚才发布的包:")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qzy-npm-test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qzy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("执行"),a("code",[s._v("node index")]),s._v("即可看见输出了"),a("code",[s._v("hello qzy")])]),s._v(" "),a("p",[s._v("详细的使用请访问本人的npm: "),a("a",{attrs:{href:"https://www.npmjs.com/~quanzaiyu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.npmjs.com/~quanzaiyu"),a("OutboundLink")],1)])],1)},[],!1,null,null,null);t.default=e.exports}}]);