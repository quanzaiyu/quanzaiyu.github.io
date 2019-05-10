(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{664:function(t,e,s){"use strict";s.r(e);var n=s(1),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在-gitee-中使用-webhook-部署应用-jenkins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-gitee-中使用-webhook-部署应用-jenkins","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 Gitee 中使用 webhook 部署应用(Jenkins)")]),t._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),s("ol",[s("li",[t._v("在 Gitee 中创建个人项目")]),t._v(" "),s("li",[t._v("在服务器中部署Docker、Jenkins等相关服务")])]),t._v(" "),s("h2",{attrs:{id:"一步一步搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一步一步搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 一步一步搭建")]),t._v(" "),s("ol",[s("li",[t._v("安装相应Jenkins插件 "),s("a",{attrs:{href:"https://plugins.jenkins.io/coding-webhook",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitee plugin"),s("OutboundLink")],1)])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/005.png"}}),t._v(" "),s("p",[t._v("通过单一流水线的方式, 可设定Coding触发条件")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("在项目中配置 Jenkinsfile")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pipeline "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    agent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" docker "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kkarczmarczyk/node-yarn:latest'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    stages "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        stage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'build'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            steps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                sh "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yarn --version'")]),t._v("\n                sh "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yarn'")]),t._v("\n                sh "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yarn build'")]),t._v("\n                sh "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ls'")]),t._v("\n                sh "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pwd'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("配置Jenkins")])]),t._v(" "),s("p",[t._v("首先到Gitee中获取令牌: "),s("a",{attrs:{href:"https://gitee.com/profile/personal_access_tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/profile/personal_access_tokens"),s("OutboundLink")],1)]),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/006.png"}}),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/007.png"}}),t._v(" "),s("p",[t._v("在 Jenkins 中配置 Gitee: 系统管理 > 系统设置 > Gitee 配置")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/009.png"}}),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/008.png"}}),t._v(" "),s("p",[t._v("在 Gitee API Token 中输入码云私人令牌")]),t._v(" "),s("p",[t._v("点击 Test Connection 测试链接是否成功")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("创建一个单分支流水线")])]),t._v(" "),s("p",[t._v("配置触发器")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/003.png"}}),t._v(" "),s("ul",[s("li",[t._v("Push Events 推送代码事件")]),t._v(" "),s("li",[t._v("Opened Merge Request Events 提交 PR 事件")]),t._v(" "),s("li",[t._v("Updated Merge Request Events 更新 PR 事件")]),t._v(" "),s("li",[t._v("Accepted Merge Request Events 接受/合并 PR 事件")]),t._v(" "),s("li",[t._v("Closed Merge Request Events 关闭 PR 事件")]),t._v(" "),s("li",[t._v("Approved Pull Requests 审查通过 PR 事件")]),t._v(" "),s("li",[t._v("Tested Pull Requests 测试通过 PR 事件")])]),t._v(" "),s("p",[t._v("此处需要生成 "),s("code",[t._v("Gitee WebHook 密码")]),t._v(" 配置 Gitee webhook 时需要使用")]),t._v(" "),s("p",[t._v("配置管道")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/004.png"}}),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("配置Gitee")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/010.png"}}),t._v(" "),s("imgLink",{attrs:{src:"date/20190317/011.png"}}),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://gitee.com/help/articles/4193",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jenkins 插件 - 码云帮助中心"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/boonya/article/details/81915857",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee Jenkins Plugin码云持续集成插件"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.default=a.exports}}]);