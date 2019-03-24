(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{543:function(t,a,n){"use strict";n.r(a);var s=n(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"php-常见问题汇总"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php-常见问题汇总","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP 常见问题汇总")]),t._v(" "),n("h2",{attrs:{id:"解决-php-curl-证书错误"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决-php-curl-证书错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决 PHP CURL 证书错误")]),t._v(" "),n("p",[t._v("在使用 CURL 调用接口的时候，如果直接使用通常不会直接返回我们想要的结果，需要配置证书才行。")]),t._v(" "),n("h3",{attrs:{id:"解决步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决步骤")]),t._v(" "),n("ol",[n("li",[t._v("下载 "),n("a",{attrs:{href:"https://curl.haxx.se/ca/cacert.pem",target:"_blank",rel:"noopener noreferrer"}},[t._v("cacert.pem"),n("OutboundLink")],1),t._v(" 保存到本地。")]),t._v(" "),n("li",[t._v("配置 php.ini，指定以下字段为 cacert.pem 存放路径")])]),t._v(" "),n("div",{staticClass:"language-ini extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ini"}},[n("code",[n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("curl.cainfo")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v('"D:\\phpStudy\\cacert.pem"')]),t._v("\n")])])]),n("p",[t._v("参考资料:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://blog.csdn.net/mazicwong/article/details/54946952",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决使用CURL出现code ERROR 60错误的问题"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"nginx-服务器中-php-调用本地接口失败的解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-服务器中-php-调用本地接口失败的解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx 服务器中 PHP 调用本地接口失败的解决方案")]),t._v(" "),n("h3",{attrs:{id:"问题现象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题现象","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题现象")]),t._v(" "),n("p",[t._v("当在同一个 PHP 项目中访问同一个项目中的接口的时候，会出现访问超时、加载不出数据甚至卡死的问题。")]),t._v(" "),n("h3",{attrs:{id:"问题原因"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题原因")]),t._v(" "),n("p",[t._v("nginx 中，看 PHP 文件块 fastcig-pass 的设置值(127.0.0.1:9000)。设置都是以 keepalive 方式请求，接收到 PHP 文件时，交于后端过程 PHPCGI 解析处理(127.0.0.1:9000)，等待响应。")]),t._v(" "),n("p",[t._v("而在本地文件以 CURL 请求本地环境中 PHP 文件时，之前的 PHP 还在等待 CURL 后的结果，这时 9000 端口已经被占用。导致 CURL 一直在处于等待状态。不设置 timeout 超时，程序就会卡死。")]),t._v(" "),n("h3",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),n("p",[t._v("第一步，使用负载均衡的方式为 php-cgi 设置多个端口，比如:")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("upstream backend "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server 127.0.0.1:9000"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server 127.0.0.1:9001"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen 80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name  www.dyt_api.com "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  root   "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:/projects/dyt_api/public"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index  index.html index.htm index.php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#autoindex  on;")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-e "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rewrite  ^/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$  /index.php/"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("  last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  location ~ \\.php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fastcgi_pass   backend"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fastcgi_index  index.php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fastcgi_split_path_info  ^"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("?U"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".+\\.php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/?.+"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fastcgi_param  SCRIPT_FILENAME  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fastcgi_param  PATH_INFO  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_path_info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    fastcgi_param  PATH_TRANSLATED  "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_path_info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    include        fastcgi_params"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("第二步，重启 nginx，并新开启一个 phpcgi 进程监听不同端口，比如:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("D:\\phpStudy\\php70n\\php-cgi.exe -b 127.0.0.1:9001 -c D:\\phpStudy\\php70n\\php.ini\n")])])]),n("p",[t._v("使用 "),n("code",[t._v("netstat -no")]),t._v(" 命令查看端口是否工作正常。")]),t._v(" "),n("p",[t._v("参考资料:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/wamptao/p/6381913.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP----------用curl方式请求接口在同一个项目里面的时候不能请求的情况"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/yicixing7/article/details/77323706",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么本地开发时使用CURL请求本地URL会卡死"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.csdn.net/php_younger/article/details/54890136",target:"_blank",rel:"noopener noreferrer"}},[t._v("搭建nginx负载均衡"),n("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);