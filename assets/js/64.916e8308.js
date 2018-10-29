(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{515:function(s,a,t){"use strict";t.r(a);var e={props:["slot-key"]},n=t(0),r=Object(n.a)(e,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("h1",{attrs:{id:"linux-下载工具-wget"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-下载工具-wget","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 下载工具 wget")]),s._v(" "),t("p",[t("strong",[s._v("wget命令")]),s._v(" 用来从指定的URL下载文件，如果系统没有curl可以使用"),t("code",[s._v("yum install wget")]),s._v("安装。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。")]),s._v(" "),t("h2",{attrs:{id:"使用-wget-下载单个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-wget-下载单个文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 wget 下载单个文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.linuxde.net/testfile.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("以下的例子是从网络下载一个文件并保存在当前目录，在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。")]),s._v(" "),t("h2",{attrs:{id:"下载并以不同的文件名保存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载并以不同的文件名保存","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载并以不同的文件名保存")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O wordpress.zip http://www.linuxde.net/download.aspx?id"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1080\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("wget默认会以最后一个符合"),t("code",[s._v("/")]),s._v("的后面的字符来命名，对于动态链接的下载通常文件名会不正确。")]),s._v(" "),t("p",[s._v("错误：下面的例子会下载一个文件并以名称 "),t("code",[s._v("download.aspx?id=1080")]),s._v(" 保存:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.linuxde.net/download?id"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("即使下载的文件是zip格式，它仍然以 "),t("code",[s._v("download.php?id=1080")]),s._v(" 命名。")]),s._v(" "),t("h2",{attrs:{id:"wget-限速下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wget-限速下载","aria-hidden":"true"}},[s._v("#")]),s._v(" wget 限速下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --limit-rate"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("300k http://www.linuxde.net/testfile.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。")]),s._v(" "),t("h2",{attrs:{id:"使用-wget-断点续传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-wget-断点续传","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 wget 断点续传")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -c http://www.linuxde.net/testfile.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用"),t("code",[s._v("wget -c")]),s._v("重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用"),t("code",[s._v("-c")]),s._v("参数。")]),s._v(" "),t("h2",{attrs:{id:"使用-wget-后台下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-wget-后台下载","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 wget 后台下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -b http://www.linuxde.net/testfile.zip\n\nContinuing "),t("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" background, pid 1840.\nOutput will be written to `wget-log'.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("对于下载非常大的文件的时候，我们可以使用参数 "),t("code",[s._v("-b")]),s._v(" 进行后台下载，你可以使用以下命令来察看下载进度：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f wget-log\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"伪装代理名称下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪装代理名称下载","aria-hidden":"true"}},[s._v("#")]),s._v(" 伪装代理名称下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --user-agent"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token string"}},[s._v('"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16"')]),s._v(" http://www.linuxde.net/testfile.zip\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过"),t("code",[s._v("--user-agent")]),s._v("参数伪装。")]),s._v(" "),t("h2",{attrs:{id:"测试下载链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试下载链接","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试下载链接")]),s._v(" "),t("p",[s._v("当你打算进行定时下载，你应该在预定时间测试下载链接是否有效。我们可以增加"),t("code",[s._v("--spider")]),s._v("参数进行检查。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --spider URL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果下载链接正确，将会显示:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Spider mode enabled. Check if remote file exists.\nHTTP request sent, awaiting response... 200 OK\nLength: unspecified [text/html]\nRemote file exists and could contain further links,\nbut recursion is disabled -- not retrieving.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("这保证了下载能在预定的时间进行，但当你给错了一个链接，将会显示如下错误:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --spider url\nSpider mode enabled. Check "),t("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" remote "),t("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" exists.\nHTTP request sent, awaiting response"),t("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". 404 Not Found\nRemote "),t("span",{attrs:{class:"token function"}},[s._v("file")]),s._v(" does not exist -- broken link"),t("span",{attrs:{class:"token operator"}},[s._v("!")]),t("span",{attrs:{class:"token operator"}},[s._v("!")]),t("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("你可以在以下几种情况下使用"),t("code",[s._v("--spider")]),s._v("参数：")]),s._v(" "),t("ul",[t("li",[s._v("定时下载之前进行检查")]),s._v(" "),t("li",[s._v("间隔检测网站是否可用")]),s._v(" "),t("li",[s._v("检查网站页面的死链接")])]),s._v(" "),t("h2",{attrs:{id:"增加重试次数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加重试次数","aria-hidden":"true"}},[s._v("#")]),s._v(" 增加重试次数")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --tries"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("40 URL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。如果需要，你可以使用"),t("code",[s._v("--tries")]),s._v("增加重试次数。")]),s._v(" "),t("h2",{attrs:{id:"下载多个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载多个文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载多个文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -i filelist.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("首先，保存一份下载链接文件：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" filelist.txt\nurl1\nurl2\nurl3\nurl4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("接着使用这个文件和参数"),t("code",[s._v("-i")]),s._v("下载。")]),s._v(" "),t("h2",{attrs:{id:"镜像网站"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像网站","aria-hidden":"true"}},[s._v("#")]),s._v(" 镜像网站")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --mirror -p --convert-links -P ./LOCAL URL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下载整个网站到本地。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("--miror")]),s._v("开户镜像下载。")]),s._v(" "),t("li",[t("code",[s._v("-p")]),s._v("下载所有为了html页面显示正常的文件。")]),s._v(" "),t("li",[t("code",[s._v("--convert-links")]),s._v("下载后，转换成本地的链接。")]),s._v(" "),t("li",[t("code",[s._v("-P ./LOCAL")]),s._v("保存所有文件和目录到本地指定目录。")])]),s._v(" "),t("h2",{attrs:{id:"过滤指定格式下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过滤指定格式下载","aria-hidden":"true"}},[s._v("#")]),s._v(" 过滤指定格式下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --reject"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("gif ur\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下载一个网站，但你不希望下载图片，可以使用这条命令。")]),s._v(" "),t("h2",{attrs:{id:"把下载信息存入日志文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#把下载信息存入日志文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 把下载信息存入日志文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -o download.log URL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("不希望下载信息直接显示在终端而是在一个日志文件，可以使用。")]),s._v(" "),t("h2",{attrs:{id:"限制总下载文件大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限制总下载文件大小","aria-hidden":"true"}},[s._v("#")]),s._v(" 限制总下载文件大小")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -Q5m -i filelist.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你想要下载的文件超过5M而退出下载，你可以使用。注意：这个参数对单个文件下载不起作用，只能递归下载时才有效。")]),s._v(" "),t("h2",{attrs:{id:"下载指定格式文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载指定格式文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载指定格式文件")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" -r -A.pdf url\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可以在以下情况使用该功能：")]),s._v(" "),t("ul",[t("li",[s._v("下载一个网站的所有图片。")]),s._v(" "),t("li",[s._v("下载一个网站的所有视频。")]),s._v(" "),t("li",[s._v("下载一个网站的所有PDF文件。")])]),s._v(" "),t("h2",{attrs:{id:"ftp-下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ftp-下载","aria-hidden":"true"}},[s._v("#")]),s._v(" FTP 下载")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" ftp-url\n$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --ftp-user"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("USERNAME --ftp-password"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD url\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("可以使用wget来完成ftp链接的下载。")]),s._v(" "),t("p",[s._v("使用wget匿名ftp下载：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" ftp-url\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用wget用户名和密码认证的ftp下载：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" --ftp-user"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("USERNAME --ftp-password"),t("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("PASSWORD url\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"选项列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项列表","aria-hidden":"true"}},[s._v("#")]),s._v(" 选项列表")]),s._v(" "),t("ul",[t("li",[s._v("-a<日志文件>：在指定的日志文件中记录资料的执行过程；")]),s._v(" "),t("li",[s._v("-A<后缀名>：指定要下载文件的后缀名，多个后缀名之间使用逗号进行分隔；")]),s._v(" "),t("li",[s._v("-b：进行后台的方式运行wget；")]),s._v(" "),t("li",[s._v("-B<连接地址>：设置参考的连接地址的基地地址；")]),s._v(" "),t("li",[s._v("-c：继续执行上次终端的任务；")]),s._v(" "),t("li",[s._v("-C<标志>：设置服务器数据块功能标志on为激活，off为关闭，默认值为on；")]),s._v(" "),t("li",[s._v("-d：调试模式运行指令；")]),s._v(" "),t("li",[s._v("-D<域名列表>：设置顺着的域名列表，域名之间用“，”分隔；")]),s._v(" "),t("li",[s._v("-e<指令>：作为文件“.wgetrc”中的一部分执行指定的指令；")]),s._v(" "),t("li",[s._v("-h：显示指令帮助信息；")]),s._v(" "),t("li",[s._v("-i<文件>：从指定文件获取要下载的URL地址；")]),s._v(" "),t("li",[s._v("-l<目录列表>：设置顺着的目录列表，多个目录用“，”分隔；")]),s._v(" "),t("li",[s._v("-L：仅顺着关联的连接；")]),s._v(" "),t("li",[s._v("-r：递归下载方式；")]),s._v(" "),t("li",[s._v("-nc：文件存在时，下载文件不覆盖原有文件；")]),s._v(" "),t("li",[s._v("-nv：下载时只显示更新和出错信息，不显示指令的详细执行过程；")]),s._v(" "),t("li",[s._v("-q：不显示指令执行过程；")]),s._v(" "),t("li",[s._v("-nh：不查询主机名称；")]),s._v(" "),t("li",[s._v("-v：显示详细执行过程；")]),s._v(" "),t("li",[s._v("-V：显示版本信息；")]),s._v(" "),t("li",[s._v("--passive-ftp：使用被动模式PASV连接FTP服务器；")]),s._v(" "),t("li",[s._v("--follow-ftp：从HTML文件中下载FTP连接文件。")])])])},[],!1,null,null,null);r.options.__file="Wget.md";a.default=r.exports}}]);