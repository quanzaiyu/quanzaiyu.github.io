(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{509:function(t,e,s){"use strict";s.r(e);var n=s(1),i=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"curl"}},[t._v("curl")]),t._v(" "),s("p",[s("strong",[t._v("curl命令")]),t._v(" 是一个利用URL规则在命令行下工作的文件传输工具。它支持文件的上传和下载，所以是综合传输工具，但按传统，习惯称curl为下载工具。作为一款强力工具，curl支持包括HTTP、HTTPS、"),s("a",{attrs:{href:"http://man.linuxde.net/ftp",target:"_blank",rel:"noopener noreferrer"}},[t._v("ftp"),s("OutboundLink")],1),t._v("等众多协议，还支持POST、cookies、认证、从指定偏移处下载部分文件、用户代理字符串、限速、文件大小、进度条等特征。做网页处理流程和数据检索自动化，curl可以祝一臂之力。")]),t._v(" "),s("h2",{attrs:{id:"文件下载"}},[t._v("文件下载")]),t._v(" "),t._m(0),t._v(" "),t._m(1),s("p",[t._v("这条命令是将下载文件输出到终端，所有下载的数据都被写入到stdout。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),s("h2",{attrs:{id:"断点续传"}},[t._v("断点续传")]),t._v(" "),s("p",[t._v("curl 能够从特定的文件偏移处继续下载，它可以通过指定一个便宜量来下载部分文件：")]),t._v(" "),t._m(6),s("h2",{attrs:{id:"使用-curl-设置参照页字符串"}},[t._v("使用 curl 设置参照页字符串")]),t._v(" "),s("p",[t._v("参照页是位于HTTP头部中的一个字符串，用来表示用户是从哪个页面到达当前页面的，如果用户点击网页A中的某个连接，那么用户就会跳转到B网页，网页B头部的参照页字符串就包含网页A的URL。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),s("h2",{attrs:{id:"用-curl-设置-cookies"}},[t._v("用 curl 设置 cookies")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),s("h2",{attrs:{id:"用-curl-设置用户代理字符串"}},[t._v("用 curl 设置用户代理字符串")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),s("h2",{attrs:{id:"curl-的带宽控制和下载配额"}},[t._v("curl 的带宽控制和下载配额")]),t._v(" "),t._m(17),t._v(" "),t._m(18),s("p",[t._v("命令中用 k（千字节）和 m（兆字节）指定下载速度限制。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),s("p",[t._v("如果文件大小超出限制，命令则返回一个非0退出码，如果命令正常则返回0。")]),t._v(" "),s("h2",{attrs:{id:"用-curl-进行认证"}},[t._v("用 curl 进行认证")]),t._v(" "),s("p",[t._v("使用curl选项 -u 可以完成HTTP或者FTP的认证，可以指定密码，也可以不指定密码在后续操作中输入密码：")]),t._v(" "),t._m(21),s("h2",{attrs:{id:"只打印响应头部信息"}},[t._v("只打印响应头部信息")]),t._v(" "),t._m(22),t._v(" "),t._m(23)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("curl 命令可以用来执行下载、发送各种 HTTP 请求，指定 HTTP 头部等操作。如果系统没有curl可以使用 "),e("code",[this._v("yum install curl")]),this._v(" 安装，也可以下载安装。curl 是将下载文件输出到 stdout，将进度信息输出到 stderr，不显示进度信息使用 "),e("code",[this._v("--silent")]),this._v(" 选项。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl URL --silent\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用选项"),e("code",[this._v("-O")]),this._v("将下载的数据写入到文件，必须使用文件的绝对地址：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl http://man.linuxde.net/text.iso --silent -O\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("选项"),e("code",[this._v("-o")]),this._v("将下载数据写入到指定名称的文件中，并使用 "),e("code",[this._v("--progress")]),this._v(" 显示进度条：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl http://man.linuxde.net/test.iso -o filename.iso --progress\n######################################### 100.0%\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl URL/File -C 偏移量\n\n#偏移量是以字节为单位的整数，如果让curl自动推断出正确的续传位置使用-C -：\ncurl -C -URL\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用"),e("code",[this._v("--referer")]),this._v("选项指定参照页字符串：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl --referer http://www.google.com http://man.linuxde.net\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用"),e("code",[this._v('--cookie "COKKIES"')]),this._v("选项来指定cookie，多个cookie使用分号分隔：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('curl http://man.linuxde.net --cookie "user=root;pass=123456"\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("将cookie另存为一个文件，使用"),e("code",[this._v("--cookie-jar")]),this._v("选项：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl URL --cookie-jar cookie_file\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("有些网站访问会提示只能使用IE浏览器来访问，这是因为这些网站设置了检查用户代理，可以使用curl把用户代理设置为IE，这样就可以访问了。使用"),e("code",[this._v("--user-agent")]),this._v("或者"),e("code",[this._v("-A")]),this._v("选项：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('curl URL --user-agent "Mozilla/5.0"\ncurl URL -A "Mozilla/5.0"\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("其他HTTP头部信息也可以使用curl来发送，使用"),e("code",[this._v("-H")]),this._v('"头部信息" 传递多个头部信息，例如：')])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('curl -H "Host:man.linuxde.net" -H "accept-language:zh-cn" URL\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用"),e("code",[this._v("--limit-rate")]),this._v("限制curl的下载速度：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl URL --limit-rate 50k\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("使用"),e("code",[this._v("--max-filesize")]),this._v("指定可下载的最大文件大小：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl URL --max-filesize bytes\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("curl -u user:pwd http://man.linuxde.net\ncurl -u user http://man.linuxde.net\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("通过"),e("code",[this._v("-I")]),this._v("或者"),e("code",[this._v("-head")]),this._v("可以只打印出HTTP头部信息：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[root@localhost text]# curl -I http://man.linuxde.net\nHTTP/1.1 200 OK\nServer: nginx/1.2.5\ndate: Mon, 10 Dec 2012 09:24:34 GMT\nContent-Type: text/html; charset=UTF-8\nConnection: keep-alive\nVary: Accept-Encoding\nX-Pingback: http://man.linuxde.net/xmlrpc.php\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])}],!1,null,null,null);e.default=i.exports}}]);