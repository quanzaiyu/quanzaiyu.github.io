(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{772:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"在-coding-中使用-webhook-部署应用-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-coding-中使用-webhook-部署应用-php","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 Coding 中使用 webhook 部署应用(PHP)")]),t._v(" "),a("h2",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),a("ol",[a("li",[t._v("在 Coding 中创建个人项目")]),t._v(" "),a("li",[t._v("在服务器中安装git, nginx, php等相关服务")])]),t._v(" "),a("h2",{attrs:{id:"一步一步搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一步一步搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" 一步一步搭建")]),t._v(" "),a("ol",[a("li",[t._v("创建web服务器用户目录，这里以apache用户为例，不同的环境请根据自己环境自行修改：")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /home/www/.ssh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R apache:apache /home/www/.ssh/\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("生成公钥")])]),t._v(" "),a("p",[t._v("公钥有两个：1. git用户公钥 2. 部署公钥")]),t._v(" "),a("p",[t._v("git用户公钥, 我们使用 root 用户生成:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ssh-keygen\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /root/.ssh/id_rsa.pub\n")])])]),a("p",[t._v("部署公钥, 我们使用 apache 用户生成:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -Hu apache ssh-keygen -t rsa\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /var/www/.ssh/id_rsa.pub\n")])])]),a("ul",[a("li",[t._v("将 git用户公钥 粘到 Coding 个人设置页")]),t._v(" "),a("li",[t._v("将 部署公钥 粘到 Coding项目 > 设置 > 部署公钥")])]),t._v(" "),a("imgLink",{attrs:{src:"date/20190312/002.png"}}),t._v(" "),a("imgLink",{attrs:{src:"date/20190312/001.png"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("拉取远程项目")])]),t._v(" "),a("p",[t._v("比如在 "),a("code",[t._v("/usr/share/nginx/html/repos/www.test.com")]),t._v(" 目录中拉取了coding中的代码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /usr/share/nginx/html/repos\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" -Hu apache "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@git.dev.tencent.com:zcntpz/test.git www.test.com\n")])])]),a("p",[t._v("注意: 一定要使用 apache 用户进行拉取")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("创建一个 hook.php")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shell_exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"whoami"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error_reporting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$target")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/usr/share/nginx/html/repos/www.test.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生产环境web目录")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json_decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_get_contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'php://input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cmd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"cd '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$target")])]),t._v(';git pull"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'cmd: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ret")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shell_exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$cmd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[t._v("在 nginx 中配置相关服务(php, 虚拟域名), 确保在浏览器中能访问此文件, 比如 "),a("code",[t._v("http//:www.test.com/hook.php")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在 Coding 中添加 hook")])]),t._v(" "),a("imgLink",{attrs:{src:"date/20190312/003.png"}}),t._v(" "),a("imgLink",{attrs:{src:"date/20190312/004.png"}}),t._v(" "),a("p",[t._v("至此, 所有配置完毕, 其实实际搭建中可能会遇到很多问题, 比如用户权限问题等等, 耐心一点慢慢调, 最终总会成功的。")]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://overtrue.me/articles/2015/01/how-to-deploy-project-with-git-hook.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 PHP 脚本远程部署 git 项目"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/wicub/p/6423904.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("利用WebHook实现PHP自动部署Git代码"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=e.exports}}]);