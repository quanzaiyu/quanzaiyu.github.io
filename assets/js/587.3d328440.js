(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{761:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux-上传与下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-上传与下载","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 上传与下载")]),a._v(" "),s("h2",{attrs:{id:"scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp","aria-hidden":"true"}},[a._v("#")]),a._v(" scp")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("scp")]),a._v(" ./test.txt root@localhost:/root\n")])])]),s("h2",{attrs:{id:"ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp","aria-hidden":"true"}},[a._v("#")]),a._v(" ftp")]),a._v(" "),s("h2",{attrs:{id:"wget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wget","aria-hidden":"true"}},[a._v("#")]),a._v(" wget")]),a._v(" "),s("p",[s("strong",[a._v("wget命令")]),a._v(" 用来从指定的URL下载文件，如果系统没有curl可以使用"),s("code",[a._v("yum install wget")]),a._v("安装。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。")]),a._v(" "),s("p",[a._v("wget命令的参数以及作用")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数")]),a._v(" "),s("th",[a._v("作用")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("-b")]),a._v(" "),s("td",[a._v("后台下载模式")])]),a._v(" "),s("tr",[s("td",[a._v("-P")]),a._v(" "),s("td",[a._v("下载到指定目录")])]),a._v(" "),s("tr",[s("td",[a._v("-t")]),a._v(" "),s("td",[a._v("最大尝试次数")])]),a._v(" "),s("tr",[s("td",[a._v("-c")]),a._v(" "),s("td",[a._v("断点续传")])]),a._v(" "),s("tr",[s("td",[a._v("-p")]),a._v(" "),s("td",[a._v("下载页面内所有资源，包括图片、视频等")])]),a._v(" "),s("tr",[s("td",[a._v("-r")]),a._v(" "),s("td",[a._v("递归下载")])])])]),a._v(" "),s("h3",{attrs:{id:"使用-wget-下载单个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-wget-下载单个文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 wget 下载单个文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.linuxde.net/testfile.zip\n")])])]),s("p",[a._v("以下的例子是从网络下载一个文件并保存在当前目录，在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。")]),a._v(" "),s("h3",{attrs:{id:"递归下载整个网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#递归下载整个网站","aria-hidden":"true"}},[a._v("#")]),a._v(" 递归下载整个网站")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -r -p https://www.linuxprobe.com\n")])])]),s("h3",{attrs:{id:"下载并以不同的文件名保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载并以不同的文件名保存","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载并以不同的文件名保存")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -O wordpress.zip http://www.linuxde.net/download.aspx?id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1080\n")])])]),s("p",[a._v("wget默认会以最后一个符合"),s("code",[a._v("/")]),a._v("的后面的字符来命名，对于动态链接的下载通常文件名会不正确。")]),a._v(" "),s("p",[a._v("错误：下面的例子会下载一个文件并以名称 "),s("code",[a._v("download.aspx?id=1080")]),a._v(" 保存:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.linuxde.net/download?id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1\n")])])]),s("p",[a._v("即使下载的文件是zip格式，它仍然以 "),s("code",[a._v("download.php?id=1080")]),a._v(" 命名。")]),a._v(" "),s("h3",{attrs:{id:"wget-限速下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wget-限速下载","aria-hidden":"true"}},[a._v("#")]),a._v(" wget 限速下载")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --limit-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("300k http://www.linuxde.net/testfile.zip\n")])])]),s("p",[a._v("当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。")]),a._v(" "),s("h3",{attrs:{id:"使用-wget-断点续传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-wget-断点续传","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 wget 断点续传")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -c http://www.linuxde.net/testfile.zip\n")])])]),s("p",[a._v("使用"),s("code",[a._v("wget -c")]),a._v("重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用"),s("code",[a._v("-c")]),a._v("参数。")]),a._v(" "),s("h3",{attrs:{id:"使用-wget-后台下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-wget-后台下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 wget 后台下载")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -b http://www.linuxde.net/testfile.zip\n\nContinuing "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" background, pid 1840.\nOutput will be written to `wget-log'.\n")])])]),s("p",[a._v("对于下载非常大的文件的时候，我们可以使用参数 "),s("code",[a._v("-b")]),a._v(" 进行后台下载，你可以使用以下命令来察看下载进度：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -f wget-log\n")])])]),s("h3",{attrs:{id:"伪装代理名称下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#伪装代理名称下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 伪装代理名称下载")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --user-agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16"')]),a._v(" http://www.linuxde.net/testfile.zip\n")])])]),s("p",[a._v("有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过"),s("code",[a._v("--user-agent")]),a._v("参数伪装。")]),a._v(" "),s("h3",{attrs:{id:"测试下载链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试下载链接","aria-hidden":"true"}},[a._v("#")]),a._v(" 测试下载链接")]),a._v(" "),s("p",[a._v("当你打算进行定时下载，你应该在预定时间测试下载链接是否有效。我们可以增加"),s("code",[a._v("--spider")]),a._v("参数进行检查。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --spider URL\n")])])]),s("p",[a._v("如果下载链接正确，将会显示:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Spider mode enabled. Check if remote file exists.\nHTTP request sent, awaiting response... 200 OK\nLength: unspecified [text/html]\nRemote file exists and could contain further links,\nbut recursion is disabled -- not retrieving.\n")])])]),s("p",[a._v("这保证了下载能在预定的时间进行，但当你给错了一个链接，将会显示如下错误:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --spider url\nSpider mode enabled. Check "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" exists.\nHTTP request sent, awaiting response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". 404 Not Found\nRemote "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" does not exist -- broken link"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),s("p",[a._v("你可以在以下几种情况下使用"),s("code",[a._v("--spider")]),a._v("参数：")]),a._v(" "),s("ul",[s("li",[a._v("定时下载之前进行检查")]),a._v(" "),s("li",[a._v("间隔检测网站是否可用")]),a._v(" "),s("li",[a._v("检查网站页面的死链接")])]),a._v(" "),s("h3",{attrs:{id:"增加重试次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加重试次数","aria-hidden":"true"}},[a._v("#")]),a._v(" 增加重试次数")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --tries"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("40 URL\n")])])]),s("p",[a._v("如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。如果需要，你可以使用"),s("code",[a._v("--tries")]),a._v("增加重试次数。")]),a._v(" "),s("h3",{attrs:{id:"下载多个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载多个文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载多个文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -i filelist.txt\n")])])]),s("p",[a._v("首先，保存一份下载链接文件：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" filelist.txt\nurl1\nurl2\nurl3\nurl4\n")])])]),s("p",[a._v("接着使用这个文件和参数"),s("code",[a._v("-i")]),a._v("下载。")]),a._v(" "),s("h3",{attrs:{id:"镜像网站"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像网站","aria-hidden":"true"}},[a._v("#")]),a._v(" 镜像网站")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --mirror -p --convert-links -P ./LOCAL URL\n")])])]),s("p",[a._v("下载整个网站到本地。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("--miror")]),a._v("开户镜像下载。")]),a._v(" "),s("li",[s("code",[a._v("-p")]),a._v("下载所有为了html页面显示正常的文件。")]),a._v(" "),s("li",[s("code",[a._v("--convert-links")]),a._v("下载后，转换成本地的链接。")]),a._v(" "),s("li",[s("code",[a._v("-P ./LOCAL")]),a._v("保存所有文件和目录到本地指定目录。")])]),a._v(" "),s("h3",{attrs:{id:"过滤指定格式下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#过滤指定格式下载","aria-hidden":"true"}},[a._v("#")]),a._v(" 过滤指定格式下载")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --reject"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("gif ur\n")])])]),s("p",[a._v("下载一个网站，但你不希望下载图片，可以使用这条命令。")]),a._v(" "),s("h3",{attrs:{id:"把下载信息存入日志文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#把下载信息存入日志文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 把下载信息存入日志文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -o download.log URL\n")])])]),s("p",[a._v("不希望下载信息直接显示在终端而是在一个日志文件，可以使用。")]),a._v(" "),s("h3",{attrs:{id:"限制总下载文件大小"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制总下载文件大小","aria-hidden":"true"}},[a._v("#")]),a._v(" 限制总下载文件大小")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -Q5m -i filelist.txt\n")])])]),s("p",[a._v("当你想要下载的文件超过5M而退出下载，你可以使用。注意：这个参数对单个文件下载不起作用，只能递归下载时才有效。")]),a._v(" "),s("h3",{attrs:{id:"下载指定格式文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载指定格式文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 下载指定格式文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" -r -A.pdf url\n")])])]),s("p",[a._v("可以在以下情况使用该功能：")]),a._v(" "),s("ul",[s("li",[a._v("下载一个网站的所有图片。")]),a._v(" "),s("li",[a._v("下载一个网站的所有视频。")]),a._v(" "),s("li",[a._v("下载一个网站的所有PDF文件。")])]),a._v(" "),s("h3",{attrs:{id:"ftp-下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp-下载","aria-hidden":"true"}},[a._v("#")]),a._v(" FTP 下载")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" ftp-url\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --ftp-user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("USERNAME --ftp-password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PASSWORD url\n")])])]),s("p",[a._v("可以使用wget来完成ftp链接的下载。")]),a._v(" "),s("p",[a._v("使用wget匿名ftp下载：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" ftp-url\n")])])]),s("p",[a._v("使用wget用户名和密码认证的ftp下载：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" --ftp-user"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("USERNAME --ftp-password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PASSWORD url\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);