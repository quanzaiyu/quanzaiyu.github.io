(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{780:function(a,t,s){"use strict";s.r(t);var n=s(0),p=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"配置-nginx-支持-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-支持-php","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置 Nginx 支持 php")]),a._v(" "),s("h2",{attrs:{id:"安装-php-及相关组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-php-及相关组件","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 php 及相关组件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" php php-cli php-fpm php-pear php-mysql php-mssql php-odbc php-imap php-common php-devel lighttpd-fastcgi php-gd php-ldapphp-xml php-xmlrpc php-mbstring php-mcrypt php-snmp php-soap php-tidy \n")])])]),s("h2",{attrs:{id:"开启服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 开启服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" php-fpm start\nRedirecting to /bin/systemctl start php-fpm.service\n")])])]),s("p",[a._v("查看是否启动成功")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" php-fpm\nroot      20153      1  0 21:26 ?        00:00:00 php-fpm: master process "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/etc/php-fpm.conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\napache    20154  20153  0 21:26 ?        00:00:00 php-fpm: pool www\napache    20155  20153  0 21:26 ?        00:00:00 php-fpm: pool www\napache    20156  20153  0 21:26 ?        00:00:00 php-fpm: pool www\napache    20157  20153  0 21:26 ?        00:00:00 php-fpm: pool www\napache    20158  20153  0 21:26 ?        00:00:00 php-fpm: pool www\nroot      20924  20650  0 21:38 pts/1    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" --color"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("auto php-fpm\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -ntlp "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 9000\ntcp        0      0 127.0.0.1:9000          0.0.0.0:*               LISTEN  \n")])])]),s("p",[a._v("php-fpm 默认监听 9000")]),a._v(" "),s("h2",{attrs:{id:"开机启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机启动","aria-hidden":"true"}},[a._v("#")]),a._v(" 开机启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chkconfig")]),a._v(" --levels 235 php-fpm on\n")])])]),s("h2",{attrs:{id:"配置nginx支持php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx支持php","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置nginx支持php")]),a._v(" "),s("p",[a._v("首先最好备份 nginx.conf，以防出错")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak\n")])])]),s("p",[a._v("编辑 "),s("code",[a._v("/etc/nginx/conf.d/default.conf")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  listen       80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  server_name  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    root   /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    index  index.php index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#增加index.php")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#error_page  404              /404.html;")]),a._v("\n\n  error_page   500 502 503 504  /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  location "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    root   /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  location ~ \\.php$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    root           /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#修改为nginx默认路径")]),a._v("\n    fastcgi_pass   127.0.0.1:9000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    fastcgi_index  index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    fastcgi_param  SCRIPT_FILENAME  /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$fastcgi_script_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    include        fastcgi_params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("配置php，编辑 "),s("code",[a._v("/etc/php.ini")]),a._v(" 文件，找到以下语句放开注释")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ vim /etc/php.ini\ncgi.fix_pathinfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 1\n")])])]),s("p",[a._v("重启 nginx，php-fpm")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("systemctl restart nginx\nsystemctl restart php-fpm\n")])])]),s("p",[a._v("建立info.php文件")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ vim /usr/share/nginx/html/info.php \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("?php\n  phpinfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n?"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("此时，就可以在浏览器中访问 php 文件了。")]),a._v(" "),s("imgLink",{attrs:{src:"articles/014.jpg/small"}})],1)},[],!1,null,null,null);p.options.__file="PHP.md";t.default=p.exports}}]);