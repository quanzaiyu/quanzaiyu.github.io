(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{738:function(e,t,n){"use strict";n.r(t);var s=n(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"在-coding-中使用-webhook-部署应用-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在-coding-中使用-webhook-部署应用-jenkins","aria-hidden":"true"}},[e._v("#")]),e._v(" 在 Coding 中使用 webhook 部署应用(Jenkins)")]),e._v(" "),n("h2",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),n("ol",[n("li",[e._v("在 Coding 中创建个人项目")]),e._v(" "),n("li",[e._v("在服务器中部署Docker、Jenkins等相关服务")])]),e._v(" "),n("h2",{attrs:{id:"一步一步搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一步一步搭建","aria-hidden":"true"}},[e._v("#")]),e._v(" 一步一步搭建")]),e._v(" "),n("ol",[n("li",[e._v("安装相应Jenkins插件 "),n("a",{attrs:{href:"https://plugins.jenkins.io/coding-webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("coding-webhook"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("通过单一流水线的方式, 可设定Coding触发条件")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("在项目中配置 Jenkinsfile")])]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" docker "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kkarczmarczyk/node-yarn:latest'")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'build'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'yarn --version'")]),e._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'yarn'")]),e._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'yarn build'")]),e._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'ls'")]),e._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'pwd'")]),e._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("配置Jenkins")])]),e._v(" "),n("p",[e._v("创建一个单分支流水线")]),e._v(" "),n("p",[e._v("配置触发器")]),e._v(" "),n("imgLink",{attrs:{src:"date/20190314/010.png"}}),e._v(" "),n("p",[e._v("记住 Coding WebHook 地址")]),e._v(" "),n("p",[e._v("配置管道")]),e._v(" "),n("imgLink",{attrs:{src:"date/20190314/011.png"}}),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("配置Coding")])]),e._v(" "),n("imgLink",{attrs:{src:"date/20190314/012.png"}}),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[e._v("测试")])]),e._v(" "),n("p",[e._v("本地修改代码后, 提交到 Coding, 打开 Jenkins 管理页面, 可以看到构建成功:")]),e._v(" "),n("imgLink",{attrs:{src:"date/20190314/013.png"}}),e._v(" "),n("h2",{attrs:{id:"通过coding发起合并请求时构建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过coding发起合并请求时构建","aria-hidden":"true"}},[e._v("#")]),e._v(" 通过Coding发起合并请求时构建")]),e._v(" "),n("p",[e._v('选择 "收到 Merge/Pull Request 事件时触发构建", 点击右边的问号, 看到提示:')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("收到 merge/pull request 事件时触发构建。\n\n注意: 这个选项需要一些额外的配置才能工作:\n1. 打开任务的 配置 页面\n2. 进入 源码管理\n3. 选择 Git, 进入 高级, 设置 Name 为 origin, 然后:\n如果是私有项目, 设置 refspec 为 +refs/heads/*:refs/remotes/origin/* +refs/merge/*/MERGE:refs/remotes/origin/merge/*\n如果是公开项目, 设置 refspec to +refs/heads/*:refs/remotes/origin/* +refs/pull/*/MERGE:refs/remotes/origin/pull/*\n4. 点击 应用\n")])])]),n("ul",[n("li",[e._v("在 动作 (action) 中输入 "),n("code",[e._v("merge")])]),e._v(" "),n("li",[e._v("在 按名称过滤可以触发此任务的分支 中输入 "),n("code",[e._v("master")])])]),e._v(" "),n("imgLink",{attrs:{src:"date/20190315/001.png"}}),e._v(" "),n("p",[e._v("在 Pipeline > Repositories > Refspec 中配置:")]),e._v(" "),n("p",[e._v("name: origin\nRefspec: +refs/heads/"),n("em",[e._v(":refs/remotes/origin/")]),e._v(" +refs/merge/"),n("em",[e._v("/MERGE:refs/remotes/origin/merge/")])]),e._v(" "),n("imgLink",{attrs:{src:"date/20190315/002.png"}}),e._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://open.coding.net/ci/jenkins/",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用 Jenkins 构建 Coding 项目"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/jonsonler/article/details/81317352",target:"_blank",rel:"noopener noreferrer"}},[e._v("jenkins自动化部署vue"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/ansu2009/article/details/83584796",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins自动化构建vue项目然后发布到远程服务器"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/vipzhou/p/7890016.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("jenkins学习之自动打包构建nodejs应用"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.jianshu.com/p/0a865a321d78",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkins---jenkins中安装nodejs"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/yeguxin/article/details/79615057",target:"_blank",rel:"noopener noreferrer"}},[e._v("jenkins+coding+webhook实现代码merge自动部署合并"),n("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=r.exports}}]);