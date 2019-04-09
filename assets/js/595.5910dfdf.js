(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{789:function(e,a,t){"use strict";t.r(a);var n=t(1),r=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"node-包管理工具问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-包管理工具问题汇总","aria-hidden":"true"}},[e._v("#")]),e._v(" node 包管理工具问题汇总")]),e._v(" "),t("h2",{attrs:{id:"npm-err-write-after-end"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm-err-write-after-end","aria-hidden":"true"}},[e._v("#")]),e._v(" [npm ERR!] write after end")]),e._v(" "),t("p",[e._v("今天安装 npm 依赖的时候，出现了 "),t("code",[e._v("write after end")]),e._v(" 的错误，使用 yarn 没问题。查阅资料，解决方案如下:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i -g npm@5.6.0\n")])])]),t("p",[e._v("npm 高于 5.6 的时候容易出现此问题，降低版本即可，但我到现在并未探索出问题的原因，或许是npm自身版本的问题。")]),e._v(" "),t("p",[e._v("参考: "),t("a",{attrs:{href:"https://github.com/npm/npm/issues/19989",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/npm/npm/issues/19989"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"升级依赖问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#升级依赖问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 升级依赖问题")]),e._v(" "),t("p",[e._v("在中大型项目中，更新依赖需要十分谨慎，避免没有注意到新版本的依赖在 API 方面有重大更新（Breaking changes），而直接更新的情况。")]),e._v(" "),t("p",[e._v("我们可以通过 "),t("code",[e._v("npm outdated")]),e._v(" 或 "),t("code",[e._v("yarn outdated")]),e._v(" 查看过时的依赖，来确定要更新哪些依赖，并且了解哪些依赖有了重大更新：")]),e._v(" "),t("imgLink",{attrs:{src:"shortcut/097.png"}}),e._v(" "),t("p",[e._v("各种颜色标记有不同的意思：")]),e._v(" "),t("ul",[t("li",[e._v("<red>    : Major Update backward-incompatible updates")]),e._v(" "),t("li",[e._v("<yellow> : Minor Update backward-compatible features")]),e._v(" "),t("li",[e._v("<green>  : Patch Update backward-compatible bug fixes")])]),e._v(" "),t("p",[e._v("绿色的可以放心升级，修复了bug。")]),e._v(" "),t("p",[e._v("黄色的引入了新的特性，最好先到官网上查查 Change log，再决定是否升级。")]),e._v(" "),t("p",[e._v("红色的是主版本升级了，可能有不适的地方，需要特别小心。")]),e._v(" "),t("h3",{attrs:{id:"更好的依赖升级工具-——-npm-check"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更好的依赖升级工具-——-npm-check","aria-hidden":"true"}},[e._v("#")]),e._v(" 更好的依赖升级工具 —— npm-check")]),e._v(" "),t("p",[e._v("既然版本是有依据的，而且（假定）这些依赖都遵守，那么我们可以让机器帮我们分拣依赖，并提供更明细的信息和警告（Breaking changes、官网等）。于是有人做了一个工具，来帮我们自动化完成这些检查，并提供交互式操作介面："),t("a",{attrs:{href:"https://github.com/dylang/npm-check",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm-check"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("p",[e._v("npm-check 有以下功能：")]),e._v(" "),t("ul",[t("li",[e._v("告诉你哪些依赖已经过时；")]),e._v(" "),t("li",[e._v("在你决定升级的时候，提供依赖包的文档；")]),e._v(" "),t("li",[e._v("提示某个依赖没有被你使用；")]),e._v(" "),t("li",[e._v("支持全局安装的模块，-g；")]),e._v(" "),t("li",[e._v("交互式升级介面，减少输入和输入错误的情况，-u；")]),e._v(" "),t("li",[e._v("等等。")])]),e._v(" "),t("p",[e._v("安装方法：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g npm-check\n")])])]),t("p",[e._v("使用方法：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新全局依赖")]),e._v("\n$ npm-check -gu\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新当前项目依赖")]),e._v("\n$ npm-check -u\n")])])]),t("p",[e._v("通过 npm-check 检查后：")]),e._v(" "),t("imgLink",{attrs:{src:"shortcut/098.png"}}),e._v(" "),t("p",[e._v("敲一敲空格，按几下上下键，回车，就可以轻松搞定依赖升级的问题。")])],1)},[],!1,null,null,null);a.default=r.exports}}]);