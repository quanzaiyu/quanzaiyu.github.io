(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{760:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用-hexo-搭建静态博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-hexo-搭建静态博客","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Hexo 搭建静态博客")]),t._v(" "),a("blockquote",[a("p",[t._v("这不是一个教程，只是记录个人配置 Hexo 的历程，方便下次使用，最后的参考资料中会有详细的搭建教程。")])]),t._v(" "),a("h2",{attrs:{id:"hexo简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hexo简介","aria-hidden":"true"}},[t._v("#")]),t._v(" Hexo简介")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hexo.io/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo"),a("OutboundLink")],1),t._v(" 是一款快速、简洁且高效的博客框架，基于node.js构建，速度快，支持Markdown的编写文章，可以一键部署到GitHub，简单方便。")]),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("p",[t._v("依赖环境: "),a("code",[t._v("node.js")]),t._v("、"),a("code",[t._v("npm")]),t._v("(或"),a("code",[t._v("yarn")]),t._v(")，部署网站需要 "),a("code",[t._v("git")])]),t._v(" "),a("h3",{attrs:{id:"安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装和使用")]),t._v(" "),a("h4",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" hexo-cli "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装hexo-cli")]),t._v("\nhexo -v "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 检测hexo是否安装完成")]),t._v("\n")])])]),a("h4",{attrs:{id:"初始化站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化站点","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化站点")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("hexo init "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个Hexo站点，如果没有设置 <folder>，Hexo 默认在目前的文件夹建立网站。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\nhexo server "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动服务器，默认情况下，访问网址为： http://localhost:4000/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选参数:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -p, --port\t重设端口")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -s, --static\t只使用静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -l, --log\t\t启动日记记录，使用覆盖记录格式")]),t._v("\n")])])]),a("h4",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("hexo new "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一篇文章")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有设置 [layout] 的话，默认使用 _config.yml 中的 default_layout 参数代替。如果标题包含空格的话需要使用引号括起来。")]),t._v("\n\nhexo generate "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选参数:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -d, --deploy\t文件生成后立即部署网站")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -w, --watch监视文件变动")]),t._v("\n\nhexo publish "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布草稿")]),t._v("\n\nhexo deploy "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 部署网站")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可选参数:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -g, --generate\t部署之前预先生成静态文件")]),t._v("\n\nhexo clean "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除缓存，这将清除缓存文件 (db.json) 和已生成的静态文件 (public)。")]),t._v("\n")])])]),a("h4",{attrs:{id:"命令简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令简写","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令简写")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("hexo n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hexo new")]),t._v("\nhexo g "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hexo generate")]),t._v("\nhexo s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hexo server")]),t._v("\nhexo d "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hexo deploy")]),t._v("\n")])])]),a("h3",{attrs:{id:"网站部署配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站部署配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 网站部署配置")]),t._v(" "),a("p",[t._v("编辑项目根目录下的"),a("code",[t._v("_config,yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deployment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Docs: https://hexo.io/docs/deployment.html")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/quanzaiyu/quanzaiyu.github.io.git\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("barnch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n")])])]),a("p",[t._v("可能需要配置"),a("code",[t._v("SSH")]),t._v("，网上搜一下就有解决方案。"),a("a",{attrs:{href:"https://help.github.com/articles/connecting-to-github-with-ssh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("关于如何配置 "),a("code",[t._v("github pages")]),t._v(" 参考网上资料即可。")]),t._v(" "),a("p",[t._v("可能出现的问题:")]),t._v(" "),a("blockquote",[a("p",[t._v("(node:19344) [DEP0061] DeprecationWarning: fs.SyncWriteStream is deprecated")])]),t._v(" "),a("p",[t._v("根据提示，"),a("code",[t._v("deprecated")]),t._v("，弃用了，说明前面那个应该是个方法，这个方法在node当中弃用了。明显就是Hexo还在继续使用这个已经被弃用的方法。")]),t._v(" "),a("p",[t._v("解决方案: "),a("code",[t._v("npm install hexo-fs --save")]),t._v(" 更新一下"),a("code",[t._v("hexo-fs")]),t._v("插件。"),a("a",{attrs:{href:"http://www.abrocks.com/2017/06/17/node8.0%E6%96%B9%E6%B3%95%E5%BC%83%E7%94%A8%E5%A4%84%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Error")]),t._v(": Deployer not found : github,")])]),t._v(" "),a("p",[t._v("安装插件 "),a("code",[t._v("npm install hexo-deployer-git --save")]),t._v(" ，然后再"),a("code",[t._v("generate")]),t._v(" 和"),a("code",[t._v("deploy")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[t._v("博客园 - "),a("a",{attrs:{href:"http://www.cnblogs.com/cherishzy/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cherishzy"),a("OutboundLink")],1),t._v(" : "),a("a",{attrs:{href:"http://www.cnblogs.com/cherishzy/p/5694658.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在Github上面搭建Hexo博客（一）：部署到Github"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("博客园 - "),a("a",{attrs:{href:"http://www.cnblogs.com/liulangmao/",target:"_blank",rel:"noopener noreferrer"}},[t._v("流浪猫の窝"),a("OutboundLink")],1),t._v(" : "),a("a",{attrs:{href:"http://www.cnblogs.com/liulangmao/p/4323064.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用hexo搭建github.io博客(一)"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("简书 - "),a("a",{attrs:{href:"http://www.jianshu.com/u/60e19f1dfd2a",target:"_blank",rel:"noopener noreferrer"}},[t._v("sanchuan"),a("OutboundLink")],1),t._v(" : "),a("a",{attrs:{href:"http://www.jianshu.com/p/da941bd0a3dd",target:"_blank",rel:"noopener noreferrer"}},[t._v("你不知道的HEXO deploy"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("博客园 - "),a("a",{attrs:{href:"https://blog.csdn.net/csdn_yudong",target:"_blank",rel:"noopener noreferrer"}},[t._v("csdn_yudong"),a("OutboundLink")],1),t._v(" - "),a("a",{attrs:{href:"https://blog.csdn.net/csdn_yudong/article/details/70837277",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hexo + Gitpage 搭建个人博客"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("SegmentFault - "),a("a",{attrs:{href:"https://segmentfault.com/u/ahonn",target:"_blank",rel:"noopener noreferrer"}},[t._v("ahonn"),a("OutboundLink")],1),t._v(" - "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000008040387",target:"_blank",rel:"noopener noreferrer"}},[t._v("从零开始制作 Hexo 主题"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=s.exports}}]);