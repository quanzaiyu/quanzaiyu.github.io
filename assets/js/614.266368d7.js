(window.webpackJsonp=window.webpackJsonp||[]).push([[614],{812:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux-网络请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-网络请求","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 网络请求")]),a._v(" "),t("p",[t("strong",[a._v("curl命令")]),a._v(" 是一个利用URL规则在命令行下工作的文件传输工具。它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称curl为下载工具。作为一款强力工具，curl支持包括HTTP、HTTPS、"),t("a",{attrs:{href:"http://man.linuxde.net/ftp",target:"_blank",rel:"noopener noreferrer"}},[a._v("ftp"),t("OutboundLink")],1),a._v("等众多协议，还支持POST、cookies、认证、从指定偏移处下载部分文件、用户代理字符串、限速、文件大小、进度条等特征。做网页处理流程和数据检索自动化，curl可以祝一臂之力。")]),a._v(" "),t("h2",{attrs:{id:"网络请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络请求","aria-hidden":"true"}},[a._v("#")]),a._v(" 网络请求")]),a._v(" "),t("p",[a._v("使用 curl 可以发起网络请求：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://www.baidu.com\n")])])]),t("p",[a._v("返回的结果会在控制台中输出。")]),a._v(" "),t("h2",{attrs:{id:"文件下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件下载")]),a._v(" "),t("p",[a._v("curl 命令可以用来执行下载、发送各种 HTTP 请求，指定 HTTP 头部等操作。如果系统没有curl可以使用 "),t("code",[a._v("yum install curl")]),a._v(" 安装，也可以下载安装。curl 是将下载文件输出到 stdout，将进度信息输出到 stderr，不显示进度信息使用 "),t("code",[a._v("--silent")]),a._v(" 选项。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL --silent\n")])])]),t("p",[a._v("这条命令是将下载文件输出到终端，所有下载的数据都被写入到stdout。")]),a._v(" "),t("p",[a._v("使用选项"),t("code",[a._v("-O")]),a._v("将下载的数据写入到文件，必须使用文件的绝对地址：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://man.linuxde.net/text.iso --silent -O\n")])])]),t("p",[a._v("选项"),t("code",[a._v("-o")]),a._v("将下载数据写入到指定名称的文件中，并使用 "),t("code",[a._v("--progress")]),a._v(" 显示进度条：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://man.linuxde.net/test.iso -o filename.iso --progress\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("######################################### 100.0%")]),a._v("\n")])])]),t("h2",{attrs:{id:"断点续传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#断点续传","aria-hidden":"true"}},[a._v("#")]),a._v(" 断点续传")]),a._v(" "),t("p",[a._v("curl 能够从特定的文件偏移处继续下载，它可以通过指定一个便宜量来下载部分文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL/File -C 偏移量\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#偏移量是以字节为单位的整数，如果让curl自动推断出正确的续传位置使用-C -：")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -C -URL\n")])])]),t("h2",{attrs:{id:"使用-curl-设置参照页字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-curl-设置参照页字符串","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 curl 设置参照页字符串")]),a._v(" "),t("p",[a._v("参照页是位于HTTP头部中的一个字符串，用来表示用户是从哪个页面到达当前页面的，如果用户点击网页A中的某个连接，那么用户就会跳转到B网页，网页B头部的参照页字符串就包含网页A的URL。")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("--referer")]),a._v("选项指定参照页字符串：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" --referer http://www.google.com http://man.linuxde.net\n")])])]),t("h2",{attrs:{id:"用-curl-设置-cookies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-curl-设置-cookies","aria-hidden":"true"}},[a._v("#")]),a._v(" 用 curl 设置 cookies")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v('--cookie "COKKIES"')]),a._v("选项来指定cookie，多个cookie使用分号分隔：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://man.linuxde.net --cookie "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"user=root;pass=123456"')]),a._v("\n")])])]),t("p",[a._v("将cookie另存为一个文件，使用"),t("code",[a._v("--cookie-jar")]),a._v("选项：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL --cookie-jar cookie_file\n")])])]),t("h2",{attrs:{id:"用-curl-设置用户代理字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-curl-设置用户代理字符串","aria-hidden":"true"}},[a._v("#")]),a._v(" 用 curl 设置用户代理字符串")]),a._v(" "),t("p",[a._v("有些网站访问会提示只能使用IE浏览器来访问，这是因为这些网站设置了检查用户代理，可以使用curl把用户代理设置为IE，这样就可以访问了。使用"),t("code",[a._v("--user-agent")]),a._v("或者"),t("code",[a._v("-A")]),a._v("选项：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL --user-agent "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mozilla/5.0"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL -A "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mozilla/5.0"')]),a._v("\n")])])]),t("p",[a._v("其他HTTP头部信息也可以使用curl来发送，使用"),t("code",[a._v("-H")]),a._v('"头部信息" 传递多个头部信息，例如：')]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Host:man.linuxde.net"')]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"accept-language:zh-cn"')]),a._v(" URL\n")])])]),t("h2",{attrs:{id:"curl-的带宽控制和下载配额"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#curl-的带宽控制和下载配额","aria-hidden":"true"}},[a._v("#")]),a._v(" curl 的带宽控制和下载配额")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("--limit-rate")]),a._v("限制curl的下载速度：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL --limit-rate 50k\n")])])]),t("p",[a._v("命令中用 k（千字节）和 m（兆字节）指定下载速度限制。")]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v("--max-filesize")]),a._v("指定可下载的最大文件大小：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" URL --max-filesize bytes\n")])])]),t("p",[a._v("如果文件大小超出限制，命令则返回一个非0退出码，如果命令正常则返回0。")]),a._v(" "),t("h2",{attrs:{id:"用-curl-进行认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用-curl-进行认证","aria-hidden":"true"}},[a._v("#")]),a._v(" 用 curl 进行认证")]),a._v(" "),t("p",[a._v("使用curl选项 -u 可以完成HTTP或者FTP的认证，可以指定密码，也可以不指定密码在后续操作中输入密码：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -u user:pwd http://man.linuxde.net\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -u user http://man.linuxde.net\n")])])]),t("h2",{attrs:{id:"只打印响应头部信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只打印响应头部信息","aria-hidden":"true"}},[a._v("#")]),a._v(" 只打印响应头部信息")]),a._v(" "),t("p",[a._v("通过"),t("code",[a._v("-I")]),a._v("或者"),t("code",[a._v("-head")]),a._v("可以只打印出HTTP头部信息：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -I http://man.linuxde.net\nHTTP/1.1 200 OK\nServer: nginx/1.2.5\ndate: Mon, 10 Dec 2012 09:24:34 GMT\nContent-Type: text/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" charset"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("UTF-8\nConnection: keep-alive\nVary: Accept-Encoding\nX-Pingback: http://man.linuxde.net/xmlrpc.php\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);