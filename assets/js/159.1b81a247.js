(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1118:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"配置虚拟主机"}},[s._v("配置虚拟主机")]),s._v(" "),a("h2",{attrs:{id:"hosts"}},[s._v("hosts")]),s._v(" "),a("p",[s._v("修改 "),a("code",[s._v("hosts")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("127.0.0.1       www.my-tp5.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"apache"}},[s._v("Apache")]),s._v(" "),a("p",[s._v("如果服务器是 Apache，则修改 "),a("code",[s._v("httpd-vhosts.conf")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("VirtualHost")]),s._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[s._v("*:")]),s._v("80")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('\n  ServerAdmin webmaster@tp5.com\n  DocumentRoot "D:\\\\projects\\\\think\\\\public"\n  ServerName tp5\n  ServerAlias www.my-tp5.com\n  DirectoryIndex news.html index.html index.htm index.php\n  ErrorLog "logs/tp5-error.log"\n  CustomLog "logs/tp5-access.log" common\n'),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("VirtualHost")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("或者修改 "),a("code",[s._v("vhosts.conf")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("VirtualHost")]),s._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[s._v("*:")]),s._v("80")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v('\n    DocumentRoot "D:\\projects\\think\\public"\n    ServerName www.my-tp5.com\n    ServerAlias\n  '),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),s._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[s._v('"D:')]),s._v('\\projects\\think\\public"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n      Options FollowSymLinks ExecCGI\n      AllowOverride All\n      Order allow,deny\n      Allow from all\n      Require all granted\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("VirtualHost")]),a("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"nginx"}},[s._v("Nginx")]),s._v(" "),a("p",[s._v("如果服务器是 Nginx，则修改 "),a("code",[s._v("vhosts.conf")]),s._v(" :")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("listen")]),s._v("       "),a("span",{attrs:{class:"token number"}},[s._v("80")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("server_name")]),s._v("  www"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my"),a("span",{attrs:{class:"token operator"}},[s._v("-")]),s._v("tp5"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("root")]),s._v("   "),a("span",{attrs:{class:"token string"}},[s._v('"D:/projects/think/public"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("index")]),s._v("  "),a("span",{attrs:{class:"token keyword"}},[s._v("index")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html "),a("span",{attrs:{class:"token keyword"}},[s._v("index")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm "),a("span",{attrs:{class:"token keyword"}},[s._v("index")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("php"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("一切配置就绪，只需在浏览器中输入 "),a("code",[s._v("http://www.my-tp5.com")]),s._v(" 即可。")])])}],!1,null,null,null);t.default=e.exports}}]);