(window.webpackJsonp=window.webpackJsonp||[]).push([[473],{761:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"thinkphp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thinkphp","aria-hidden":"true"}},[t._v("#")]),t._v(" ThinkPHP")]),t._v(" "),s("h2",{attrs:{id:"thinkphp-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thinkphp-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" ThinkPHP 简介")]),t._v(" "),s("h2",{attrs:{id:"使用-composer-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-composer-安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Composer 安装")]),t._v(" "),s("p",[t._v("Composer中文网: https://www.phpcomposer.com/")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ composer create-project topthink/think\n$ composer create-project topthink/think"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("5.0.* tp5  --prefer-dist\n")])])]),s("p",[t._v("如果提示错误 "),s("code",[t._v("[Composer\\Exception\\NoSslException] The openssl extension is required for SSL/TLS protection but is not available.")]),t._v("，只需打开 PHP 扩展 "),s("code",[t._v("openssl")]),t._v(" 即可。")]),t._v(" "),s("p",[t._v("如果提示 :")]),t._v(" "),s("imgLink",{attrs:{src:"shortcut/010.jpg/small"}}),t._v(" "),s("p",[t._v("即为安装成功")]),t._v(" "),s("h2",{attrs:{id:"使用-git-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Git 安装")]),t._v(" "),s("p",[t._v("GitHub")]),t._v(" "),s("ul",[s("li",[t._v("应用项目：https://github.com/top-think/think")]),t._v(" "),s("li",[t._v("核心框架：https://github.com/top-think/framework")])]),t._v(" "),s("p",[t._v("码云")]),t._v(" "),s("ul",[s("li",[t._v("应用项目：https://git.oschina.net/liu21st/thinkphp5.git")]),t._v(" "),s("li",[t._v("核心框架：https://git.oschina.net/liu21st/framework.git")])]),t._v(" "),s("p",[t._v("Coding")]),t._v(" "),s("ul",[s("li",[t._v("应用项目：https://git.coding.net/liu21st/thinkphp5.git")]),t._v(" "),s("li",[t._v("核心框架：https://git.coding.net/liu21st/framework.git")])]),t._v(" "),s("p",[t._v("首先克隆下载应用项目仓库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/top-think/think tp5\n")])])]),s("p",[t._v("然后切换到tp5目录下面，再克隆核心框架仓库：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/top-think/framework thinkphp\n")])])]),s("h2",{attrs:{id:"配置虚拟主机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置虚拟主机")]),t._v(" "),s("p",[t._v("首先修改 "),s("code",[t._v("hosts")]),t._v(" :")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("127.0.0.1       www.my-tp5.com\n")])])]),s("h3",{attrs:{id:"apache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),s("p",[t._v("如果服务器是 Apache，则修改 "),s("code",[t._v("httpd-vhosts.conf")]),t._v(" :")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VirtualHost")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("*:")]),t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n  ServerAdmin webmaster@tp5.com\n  DocumentRoot "D:\\\\projects\\\\think\\\\public"\n  ServerName tp5\n  ServerAlias www.my-tp5.com\n  DirectoryIndex news.html index.html index.htm index.php\n  ErrorLog "logs/tp5-error.log"\n  CustomLog "logs/tp5-access.log" common\n'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VirtualHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("或者修改 "),s("code",[t._v("vhosts.conf")]),t._v(" :")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("VirtualHost")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("*:")]),t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    DocumentRoot "D:\\projects\\think\\public"\n    ServerName www.my-tp5.com\n    ServerAlias\n  '),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Directory")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v('"D:')]),t._v('\\projects\\think\\public"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      Options FollowSymLinks ExecCGI\n      AllowOverride All\n      Order allow,deny\n      Allow from all\n      Require all granted\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Directory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("VirtualHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("p",[t._v("如果服务器是 Nginx，则修改 "),s("code",[t._v("vhosts.conf")]),t._v(" :")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  www.my-tp5.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    root   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:/projects/think/public"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        index  index.html index.htm index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("一切配置就绪，只需在浏览器中输入 "),s("code",[t._v("http://www.my-tp5.com")]),t._v(" 即可。")]),t._v(" "),s("h2",{attrs:{id:"url-访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-访问","aria-hidden":"true"}},[t._v("#")]),t._v(" URL 访问")]),t._v(" "),s("p",[t._v("在默认情况下，在 URL 中访问对应资源通过 "),s("code",[t._v("PATH_INFO")]),t._v(" 的方式访问，格式如下 :")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://host/index.php/模块/控制器/操作\n")])])]),s("p",[t._v("比如在 "),s("code",[t._v("index")]),t._v(" 模块下，有一个 "),s("code",[t._v("Demo")]),t._v(" 控制器，里面有一个方法 :")]),t._v(" "),s("p",[s("code",[t._v("application/index/controller/Demo.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" getName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'qzy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("此时在浏览器中输入 "),s("code",[t._v("http://www.my-tp5.com/index.php/index/Demo/getName")]),t._v(" 会看到输出 "),s("code",[t._v("Hello qzy")]),t._v(" 。")]),t._v(" "),s("p",[t._v("也可使用传统的MVC兼容访问模式:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/?s=/index/Demo/getName\n// or\nhttp://www.my-tp5.com/?s=index/Demo/getName\n")])])]),s("h2",{attrs:{id:"url-传值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-传值","aria-hidden":"true"}},[t._v("#")]),t._v(" URL 传值")]),t._v(" "),s("p",[t._v("在上述方法中，可以看到 "),s("code",[t._v("getName")]),t._v(" 方法接受一个 "),s("code",[t._v("$name")]),t._v(" 参数，如果要传入参数，则在 URL 中指定，格式为:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://host/index.php/模块/控制器/操作/key/value\n")])])]),s("p",[t._v("比如上面的例子可以这样传值:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/index.php/index/Demo/getName/name/Quan\n")])])]),s("p",[t._v("可以看到输出 "),s("code",[t._v("Hello Quan")]),t._v("。")]),t._v(" "),s("p",[t._v("对应关系如下:")]),t._v(" "),s("imgLink",{attrs:{src:"shortcut/012.png/small"}}),t._v(" "),s("p",[t._v("不过，URL 传值只能传递字符串、数值，使用 GET 方式来传值到类中方法。")]),t._v(" "),s("p",[t._v("PATH_INFO 也支持查询字符串传值:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/index.php/index/Demo/getName?name=5\n")])])]),s("p",[t._v("传统 MVC 兼容模式传参格式为:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/?s=index/Demo/getName&name=5\n")])])]),s("h3",{attrs:{id:"多个参数传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多个参数传递","aria-hidden":"true"}},[t._v("#")]),t._v(" 多个参数传递")]),t._v(" "),s("p",[t._v("比如刚才控制器中方法包含多个参数:")]),t._v(" "),s("p",[s("code",[t._v("application/index/controller/Demo.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("controller")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" say "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'My name is  '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("', I am '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$age")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'years old.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("key-value 键值对写法")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://host/index.php/模块/控制器/操作/key1/value1/key2/value2\n")])])]),s("p",[t._v("比如:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/index.php/index/Demo/say/name/Quan/age/18\n")])])]),s("p",[t._v("也可以颠倒顺序，但必须是 key-value 配对")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/index.php/index/Demo/say/age/18/name/Quan\n")])])]),s("p",[s("strong",[s("code",[t._v("PATH_INFO")]),t._v(" 查询字符串传值的写法")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/index.php/index/Demo/say?name=5&age=18\n")])])]),s("p",[s("strong",[t._v("传统 MVC 兼容模式传参格式")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/?s=index/Demo/say&name=5&age=18\n")])])]),s("h3",{attrs:{id:"配置传参规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置传参规则","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置传参规则")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("config/app.php")]),t._v(" 配置文件中，可以看到那么一个配置:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// URL参数方式 0 按名称成对解析 1 按顺序解析")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'url_param_type'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("这里，默认为 0，按照 key-value 的方式解析路由，如果是 1，则按照顺序解析，上面的路径必须写为:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//www.my-tp5.com/index.php/index/Demo/say/Quan/18")]),t._v("\n")])])]),s("h2",{attrs:{id:"url-重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-重写","aria-hidden":"true"}},[t._v("#")]),t._v(" URL 重写")]),t._v(" "),s("p",[t._v("可以通过URL重写隐藏应用的入口文件index.php。")]),t._v(" "),s("h3",{attrs:{id:"nginx-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),s("p",[t._v("在虚拟主机配置文件中加入:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-e "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rewrite  ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$  /index.php?s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("  last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("完整配置如下:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen       80"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name  www.my-tp5.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  root   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D:/projects/think/public"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index  index.html index.htm index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-e "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_filename")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      rewrite  ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$  /index.php?s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("  last"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也可使用 "),s("code",[t._v("rewrite ^/(.*)$ /index.php/$1 last;")]),t._v(" 进行重写。")]),t._v(" "),s("p",[t._v("此时，就可省略 index.php 直接通过 PATH_INFO 访问:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://www.my-tp5.com/模块/控制器/操作\n")])])]),s("h3",{attrs:{id:"apache-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-2","aria-hidden":"true"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("httpd.conf")]),t._v(" 配置文件中加载了 "),s("code",[t._v("mod_rewrite.so")]),t._v(" 模块")]),t._v(" "),s("li",[s("code",[t._v("AllowOverride None")]),t._v(" 将 "),s("code",[t._v("None")]),t._v(" 改为 "),s("code",[t._v("All")]),t._v(" (可能是 vhosts.conf 配置的虚拟主机中)")]),t._v(" "),s("li",[t._v("把下面的内容保存为.htaccess文件放到应用入口文件的同级目录下")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IfModule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mod_rewrite.c")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  Options +FollowSymlinks -Multiviews\n  RewriteEngine On\n\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteRule ^(.*)$ index.php [L,E=PATH_INFO:$1]\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("IfModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"隐藏路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐藏路径")]),t._v(" "),s("h3",{attrs:{id:"隐藏模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐藏模块")]),t._v(" "),s("p",[t._v("如果整个系统中只有一个 "),s("code",[t._v("index")]),t._v(" 模块，想要隐藏此模块的名称，则只需要在 "),s("code",[t._v("public/index.php")]),t._v(" 中改写 :")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此时，访问只需要通过:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://serverName/index.php/控制器/操作\n")])])]),s("p",[t._v("如果通过 URL 重写后，只需要:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://serverName/控制器/操作\n")])])]),s("h3",{attrs:{id:"隐藏控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隐藏控制器","aria-hidden":"true"}},[t._v("#")]),t._v(" 隐藏控制器")]),t._v(" "),s("p",[t._v("如果整个系统相当简单，只有一个模块和一个控制器，还可以隐藏控制器:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("Container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'index/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("此时就更加简单，访问只需 "),s("code",[t._v("http://serverName/操作")]),t._v(" 即可。")])],1)},[],!1,null,null,null);a.default=n.exports}}]);