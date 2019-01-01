(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{614:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 简介")]),t._v(" "),a("p",[t._v("Git(读音为/gɪt/。)是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。 Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。")]),t._v(" "),a("ul",[a("li",[t._v("Git 官网: "),a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Git 官方文档: "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git-scm.com/book/zh/v2"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Pro Git 中文版: "),a("a",{attrs:{href:"https://gitee.com/progit/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/progit/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Git - 简易指南: "),a("a",{attrs:{href:"http://www.bootcss.com/p/git-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.bootcss.com/p/git-guide/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("github-git-cheat-sheet.pdf: "),a("a",{attrs:{href:"https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"关于版本控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于版本控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于版本控制")]),t._v(" "),a("p",[a("strong",[t._v("版本控制")]),t._v(" （Version Control System，简称 VCS）是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。")]),t._v(" "),a("p",[a("strong",[t._v("集中化的版本控制系统")]),t._v("（Centralized Version Control Systems，简称 CVCS），比如 CVS、SVN，都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。 多年以来，这已成为版本控制系统的标准做法。")]),t._v(" "),a("p",[a("strong",[t._v("分布式版本控制系统")]),t._v("（Distributed Version Control System，简称 DVCS），比如 Git，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。")]),t._v(" "),a("h2",{attrs:{id:"git-基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-基本配置","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 基本配置")]),t._v(" "),a("p",[t._v("git 配置文件路径")]),t._v(" "),a("ul",[a("li",[t._v("Windows: ~/.gitconfig")]),t._v(" "),a("li",[t._v("Linux: /etc/gitconfig (系统级别)、~/.gitconfig 或 ~/.config/git/config (用户级别)")]),t._v(" "),a("li",[t._v("针对于项目的配置： 项目路径/.git/config")])]),t._v(" "),a("p",[t._v("配置优先级： 项目级 > 用户级 > 系统级")]),t._v(" "),a("ul",[a("li",[t._v("使用参数 "),a("code",[t._v("--system")]),t._v(" 配置系统级配置")]),t._v(" "),a("li",[t._v("使用参数 "),a("code",[t._v("--global")]),t._v(" 配置用户级配置")]),t._v(" "),a("li",[t._v("直接使用 "),a("code",[t._v("git config")]),t._v(" 配置项目级配置")])]),t._v(" "),a("p",[t._v("添加用户名和邮箱")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your name"')]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email example@example.com\n")])])]),a("p",[t._v("配置示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[user]\n  email = 731734107@qq.com\n  name = quanzaiyu\n[http]\n  postBuffer = 1048576000\n")])])]),a("p",[t._v("要查看当前配置, 使用:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n")])])]),a("p",[t._v("获取某个指定的配置, 比如查看用户名:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name\nquanzaiyu\n")])])]),a("h2",{attrs:{id:"获取帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取帮助")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("help")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("help")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("verb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --help\n")])])])])},[],!1,null,null,null);r.options.__file="Index.md";e.default=r.exports}}]);