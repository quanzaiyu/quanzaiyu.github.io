(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{403:function(t,e,a){"use strict";a.r(e);var i=a(1),r=Object(i.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用不同的托管平台部署站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用不同的托管平台部署站点","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用不同的托管平台部署站点")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("众所周知，GitHub 提供静态网站托管服务 GitHub Pages，甚至可以在你没有任何云服务和域名的情况下使用，非常人性化。")]),t._v(" "),a("p",[t._v("就在昨日，2018年6月5日，GitHub 换了主人，微软收购了 GitHub，这个全球最大的同性交友平台，今后的趋势不得而知。很多人都向 GitLab 迁移，我个人还是持比较乐观的态度，毕竟微软近几年为开源事业做出的贡献大家都有目共睹，2016年，微软在 GitHub 的贡献榜排名第一，微软已经不是当年封闭的微软。")]),t._v(" "),a("h2",{attrs:{id:"使用不同的托管平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用不同的托管平台","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用不同的托管平台")]),t._v(" "),a("p",[t._v("在2016年之前，我唯 GitHub 独尊，虽然也了解过很多代码托管平台，不过都没尝试过使用。")]),t._v(" "),a("p",[t._v("从2016年开始，尝试使用不同的平台，先后使用过 Coding、Gitee、Gitlab 等，发现都挺不错的，功能强悍，各有千秋。尤其是在天朝，使用 GitHub 总而言之一个字 - 慢。不过作为人类代码界的基因工程，GitHub 的地位无可撼动。")]),t._v(" "),a("p",[t._v("这里简述一下几种托管平台的站点部署服务。")]),t._v(" "),a("h2",{attrs:{id:"github-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub Pages")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://help.github.com/articles/what-is-github-pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Pages"),a("OutboundLink")],1),t._v(" 是 GitHub 的静态网站托管服务，使用起来极其简单。")]),t._v(" "),a("p",[t._v("只需要创建一个与自己用户名相同的 "),a("code",[t._v("[username].github.io")]),t._v(" 仓库即可，比如我的 GitHub 个人主页为 "),a("code",[t._v("https://github.com/quanzaiyu")]),t._v("，则只需要创建一个名叫 "),a("code",[t._v("quanzaiyu.github.io")]),t._v(" 的仓库即可。")]),t._v(" "),a("imgLink",{attrs:{src:"github/001.png"}}),t._v(" "),a("imgLink",{attrs:{src:"github/002.png"}}),t._v(" "),a("p",[t._v("不需要额外的操作，此仓库即可作为一个服务启动，默认会访问此仓库下的 "),a("code",[t._v("index.html")]),t._v(" 页面，如果找不到页面，会定位到此仓库下的 "),a("code",[t._v("404.html")]),t._v(" 页面。")]),t._v(" "),a("imgLink",{attrs:{src:"github/003.png"}}),t._v(" "),a("p",[t._v("支持根目录的形式访问和项目的形式访问两种方式，可以自定义域名，如果已经做过域名解析，只需要在仓库根下创建一个 CNAME 即可，比如我的 "),a("code",[t._v("blog.xiaoyulive.top")]),t._v("。")]),t._v(" "),a("p",[t._v("缺点是提交代码和拉取代码速度特慢，毕竟是国外的服务器，不过作为代码界的基因工程，这地位是无可撼动的。")]),t._v(" "),a("h2",{attrs:{id:"gitee-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitee-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Gitee Pages")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://git.mydoc.io/?t=154714",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitee Pages"),a("OutboundLink")],1),t._v(" 是码云提供的静态网站，相比于 GitHub，部署更加轻松，功能更加强大。")]),t._v(" "),a("p",[t._v("Gitee 不但支持个人站点的部署，除此之外任何托管的项目都能进行部署。")]),t._v(" "),a("ol",[a("li",[t._v("以根目录的形式访问")])]),t._v(" "),a("p",[t._v("在 Gitee 中创建与自己个性地址相同的仓库，比如我的码云地址为 "),a("code",[t._v("https://gitee.com/quanzaiyu")]),t._v("，则建立一个名为"),a("code",[t._v("quanzaiyu")]),t._v(" 的仓库即可。")]),t._v(" "),a("imgLink",{attrs:{src:"github/004.png"}}),t._v(" "),a("imgLink",{attrs:{src:"github/005.png"}}),t._v(" "),a("imgLink",{attrs:{src:"github/006.png"}}),t._v(" "),a("p",[t._v("可以看到，码云可以指定项目的部署目录，若不指定，则默认使用项目根路径。使用 "),a("code",[t._v("http://quanzaiyu.gitee.io")]),t._v(" 即可访问。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("以项目的形式访问")])]),t._v(" "),a("p",[t._v("码云还支持项目的部署，此时只需要使用使用 "),a("code",[t._v("http://quanzaiyu.gitee.io/projectName")]),t._v(" 即可访问，并为项目指定演示地址。")]),t._v(" "),a("p",[t._v("不过现在我不知道 Gitee 如何进行 CNAME 域名绑定，貌似不支持 (最近我在码云里面提了 issue，现在已经支持自定义域名了，不过需要 money)。")]),t._v(" "),a("h2",{attrs:{id:"coding-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Coding Pages")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://coding.net/help/doc/pages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Coding Pages"),a("OutboundLink")],1),t._v(" 功能非常强大，本站点就是部署到 Coding Pages 中的，自定义站点针对银牌会员是免费的，只需要在站点中添加 "),a("code",[t._v("Hosted by Coding Pages")]),t._v(" 的声明或添加 Coding 的图标即可。")]),t._v(" "),a("imgLink",{attrs:{src:"github/007.png"}}),t._v(" "),a("p",[t._v("仓库名称以 "),a("code",[t._v("xxx.coding.me")]),t._v(" 命名即可以根目录的形式访问，比如我的 "),a("code",[t._v("quanzaiyu.coding.me")]),t._v("。其他仓库支持以项目的形式访问，上面几种托管平台支持的功能 Coding 几乎都支持，而且操作简便，推荐!")]),t._v(" "),a("p",[t._v("另外，Coding Pages 支持静态 Pages 和动态 Pages 两种形式的服务，意味着 PHP+MySQL 的项目也可以部署到 Coding Pages 中，非常不错。")]),t._v(" "),a("imgLink",{attrs:{src:"shortcut/064.jpg"}}),t._v(" "),a("imgLink",{attrs:{src:"shortcut/063.jpg"}})],1)},[],!1,null,null,null);e.default=r.exports}}]);