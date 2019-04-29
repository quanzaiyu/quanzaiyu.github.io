(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{805:function(t,e,r){"use strict";r.r(e);var a=r(1),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"申请免费ssl证书-让网站拥有https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#申请免费ssl证书-让网站拥有https","aria-hidden":"true"}},[t._v("#")]),t._v(" 申请免费SSL证书 - 让网站拥有HTTPS")]),t._v(" "),r("h2",{attrs:{id:"什么是-ssl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ssl","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 SSL")]),t._v(" "),r("p",[t._v("SSL是指安全套接层协议（以及传输层协议TLS），位于TCP/IP协议与各种应用层协议之间，为数据通讯提供安全支持，是目前使用最广泛的安全协议。它为互联网或内部网络连接，进行操作的两台机器之间提供安全信息通道，即HTTPS。")]),t._v(" "),r("ol",[r("li",[t._v("数据传输期间，对信息进行加密")]),t._v(" "),r("li",[t._v("通过唯一的SSL凭据识别证书所有者身份")]),t._v(" "),r("li",[t._v("先验证证书所有者身份，再颁发SSL证书")])]),t._v(" "),r("h2",{attrs:{id:"什么是-http、https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-http、https","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 HTTP、HTTPS")]),t._v(" "),r("p",[t._v("http（Hypertext Transfer Protocol）超文本传输协议：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准(TCP)，用于从WWW服务器传输超文本到本地浏览器的传输协议。它可以使浏览器更加高效，使网络传输减少。")]),t._v(" "),r("p",[t._v("https（Secure Hypertext Transfer Protocol）安全超文本传输协议：是以安全为目标的http通道，简单讲是http的安全版，https的安全基础是ssl证书，因此加密的详细内容就需要ssl证书。https协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全;另一种就是确认网站的真实性。详情可查看文章：一张图读懂https加密协议")]),t._v(" "),r("h2",{attrs:{id:"https-协议加密过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https-协议加密过程","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTPS 协议加密过程")]),t._v(" "),r("p",[t._v("https其实是有两部分组成：http + SSL / TLS，也就是在http上又加了一层处理加密信息的模块。服务端和客户端的信息传输都会通过TLS进行加密，所以传输的数据都是加密后的数据。具体是如何进行加密，解密，验证的，且看下图。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180822/https-work.jpg"}}),t._v(" "),r("h2",{attrs:{id:"http-与-https-的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http-与-https-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" http 与 https 的区别")]),t._v(" "),r("p",[t._v("http协议传输的数据都是未加密的，也就是明文的，因此使用http协议传输隐私信息非常不安全。为了保证这些隐私数据能加密传输，于是网景公司设计了ssl(Secure Sockets Layer)协议用于对http协议传输的数据进行加密，从而就诞生了https。")]),t._v(" "),r("p",[t._v("简单来说，https协议是由ssl+http协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。")]),t._v(" "),r("p",[t._v("https和http的主要区别：")]),t._v(" "),r("p",[t._v("一、https协议需要到CA机构申请SSL证书(如沃通CA)，另外沃通CA还提供3年期的免费ssl证书http://freessl.wosign.com，高级别的ssl证书需要一定费用。")]),t._v(" "),r("p",[t._v("二、http是超文本传输协议，信息是明文传输，https 则是具有安全性的ssl加密传输协议。")]),t._v(" "),r("p",[t._v("三、http和https使用的是完全不同的连接方式，用的端口也不一样，http是80端口，https是443端口。")]),t._v(" "),r("p",[t._v("四、http的连接很简单，是无状态的;https协议是由ssl+http协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。")]),t._v(" "),r("h2",{attrs:{id:"部分相关名词解释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部分相关名词解释","aria-hidden":"true"}},[t._v("#")]),t._v(" 部分相关名词解释")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("CA")]),t._v(' （Certificate Authority）即证书授权中心。CA是负责签发证书、认证证书、管理已颁发证书的机关。用户向CA提出申请后，CA负责审核用户信息，然后对关键信息利用私钥进行"签名"，并公开对应的公钥。客户端可以利用公钥验证签名。')]),t._v(" "),r("li",[r("strong",[t._v("CSR")]),t._v(" （Certificate Signing Request）即证书请求文件，也就是证书申请者在申请数字证书时由CSP（加密服务提供者）在生成私钥的同时也生成证书请求文件，证书申请者只要把CSR文件提交给证书颁发机构后，证书颁发机构使用其根证书私钥签名就生成了证书公钥文件，也就是颁发给用户的证书。")])]),t._v(" "),r("h2",{attrs:{id:"在阿里云中申请免费的ssl证书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在阿里云中申请免费的ssl证书","aria-hidden":"true"}},[t._v("#")]),t._v(" 在阿里云中申请免费的SSL证书")]),t._v(" "),r("p",[t._v("我个人呢也不打算做什么大型商业站点，就维护下我这个小小的个人网站就好了，因此就去阿里云整了个免费的证书。")]),t._v(" "),r("p",[t._v("在阿里云控制台：安全（云盾）->证书服务->购买证书")]),t._v(" "),r("p",[t._v("地址："),r("a",{attrs:{href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.1.zTLyhO&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://common-buy.aliyun.com/?spm=5176.2020520163.cas.1.zTLyhO&commodityCode=cas#/buy"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("选择以下套餐：")]),t._v(" "),r("ul",[r("li",[t._v("品牌：Symantec")]),t._v(" "),r("li",[t._v("证书类型：免费型DV SSL")]),t._v(" "),r("li",[t._v("保护类型：1个域名")]),t._v(" "),r("li",[t._v("域名个数：1个")])]),t._v(" "),r("imgLink",{attrs:{src:"date/20180822/WX20180822-134818.png"}}),t._v(" "),r("p",[t._v("购买成功后，要做一些相关的配置")]),t._v(" "),r("p",[t._v("按照配置将一个名叫 fileauth.txt 的文件存放到站点指定目录，然后点击配置检查，如果配置正确，过不了多长时间证书就能申请成功。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180822/WX20180822-140039.png"}}),t._v(" "),r("p",[t._v('申请成功后，可以在SSL列表中看到"下载"按钮')]),t._v(" "),r("imgLink",{attrs:{src:"date/20180822/WX20180822-142528.png"}}),t._v(" "),r("p",[t._v("下载证书，可以看到一个压缩包，解压之后可以看到有一个 "),r("code",[t._v(".pem")]),t._v(" 文件和一个 "),r("code",[t._v(".key")]),t._v(" 文件，可以用编辑器打开，分别就是证书和私钥了。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180822/WX20180822-143328.png"}}),t._v(" "),r("p",[t._v("在需要配置SSL的地方将证书和私钥的内容上传即可。")]),t._v(" "),r("h2",{attrs:{id:"使用certbot安装证书"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用certbot安装证书","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用certbot安装证书")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ yum "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y certbot\n")])])]),r("p",[t._v("这条命令的意思是为以/var/www/example为根目录的两个域名example.com和www.example.com申请证书。")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ certbot certonly --webroot -w /var/www/example -d example.com -d www.example.com\n")])])]),r("p",[t._v("如果你的网站没有根目录或者是你不知道你的网站根目录在哪里，可以通过下面的语句来实现：")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ certbot certonly --standalone -d example.com -d www.example.com\n")])])]),r("p",[t._v("使用这个语句时Certbot会自动启用网站的443端口来进行验证，如果你有某些服务占用了443端口，就必须先停止这些服务，然后再用这种方式申请证书。")]),t._v(" "),r("p",[t._v("证书申请完之后，Certbot会告诉你证书所在的目录，一般来说会在 "),r("code",[t._v("/etc/letsencrypt/live/")]),t._v(" 这个目录下。")]),t._v(" "),r("h2",{attrs:{id:"其他可以申请-ssl-证书的站点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他可以申请-ssl-证书的站点","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他可以申请 SSL 证书的站点")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://certbot.eff.org/lets-encrypt/osx-other",target:"_blank",rel:"noopener noreferrer"}},[t._v("Certbot"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.sslchaoshi.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL 超市"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.pianyissl.com/?i21402",target:"_blank",rel:"noopener noreferrer"}},[t._v("便宜 SSL"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/c5c9d071e395",target:"_blank",rel:"noopener noreferrer"}},[t._v("Let's Encrypt 终于支持通配符证书了"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://linuxstory.org/deploy-lets-encrypt-ssl-certificate-with-certbot/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS 简介及使用官方工具 Certbot 配置 Let’s Encrypt SSL 安全证书详细教程"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au",target:"_blank",rel:"noopener noreferrer"}},[t._v("certbot-letencrypt-wildcardcertificates-alydns-au"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/SzeCheng/p/8075799.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Let's Encrypt加密你的小站"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.lucien.ink/archives/81/",target:"_blank",rel:"noopener noreferrer"}},[t._v("让网站永久拥有HTTPS - 申请免费SSL证书并自动续期"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://freessl.wosign.com/https-web.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何申请https证书、搭建https网站"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jingyan.baidu.com/article/d169e1866f6e73436611d89d.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费百度https证书申请及部署"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/lxf1117/p/6650647.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在阿里云里申请免费Https证书SSL"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://yq.aliyun.com/ask/24591",target:"_blank",rel:"noopener noreferrer"}},[t._v("CNAME记录和MX记录冲突怎么解决 - 云栖问答"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://help.aliyun.com/knowledge_detail/42214.html?spm=5176.2020520163.cas.195.69042b7avI9B4i",target:"_blank",rel:"noopener noreferrer"}},[t._v("主流数字证书都有哪些格式？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/lazb/p/7353494.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP和HTTPS有什么区别？ 什么是SSL证书？使用ssl证书优势？"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/taomylife/p/4778009.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("一张图读懂https加密协议"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.cnblogs.com/mddblog/p/6948980.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络安全——一图看懂HTTPS建立过程"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/ctwy291314/article/details/80017639",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPS证书转换成PEM格式"),r("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.default=s.exports}}]);