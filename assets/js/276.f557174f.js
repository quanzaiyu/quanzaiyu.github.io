(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{693:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"java-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-安装","aria-hidden":"true"}},[a._v("#")]),a._v(" Java 安装")]),a._v(" "),s("h2",{attrs:{id:"windows-安装-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装-java","aria-hidden":"true"}},[a._v("#")]),a._v(" Windows 安装 Java")]),a._v(" "),s("h3",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境变量")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("JAVA_HOME")]),a._v(" JAVA 的安装目录, 比如 "),s("code",[a._v("C:\\Program Files\\Java\\jdk1.8.0_181")])]),a._v(" "),s("li",[s("code",[a._v("Path")]),a._v(" JAVA 可执行文件目录, 配置 "),s("code",[a._v(";%JAVA_HOME%\\bin;%JAVA_HOME%\\jre\\bin")])]),a._v(" "),s("li",[s("code",[a._v("CLASSPATH")]),a._v(" 配置 "),s("code",[a._v(".;%JAVA_HOME%\\lib;%JAVA_HOME%\\lib\\dt.jar;%JAVA_HOME%\\lib\\tools.jar")])])]),a._v(" "),s("h2",{attrs:{id:"centos-安装-java"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-java","aria-hidden":"true"}},[a._v("#")]),a._v(" CentOS 安装 Java")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ yum install -y java\n")])])]),s("h2",{attrs:{id:"在-centos-中安装-web-容器-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-centos-中安装-web-容器-tomcat","aria-hidden":"true"}},[a._v("#")]),a._v(" 在 CentOS 中安装 Web 容器 Tomcat")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y tomcat tomcat-webapps tomcat-admin-webapps tomcat-docs-webapp tomcat-javadoc\n$ systemctl start tomcat\n")])])]),s("p",[a._v("其中 tomcat-webapps tomcat-admin-webapps 为管理程序及应用示例, tomcat-docs-webapp tomcat-javadoc 为帮助文档")]),a._v(" "),s("ul",[s("li",[a._v("应用程序目录为: "),s("code",[a._v("/usr/share/tomcat/webapps")])]),a._v(" "),s("li",[a._v("配置文件路径为: "),s("code",[a._v("/usr/share/tomcat/conf/tomcat.conf")])])]),a._v(" "),s("p",[a._v("tomcat 默认监听 8080 端口")]),a._v(" "),s("p",[a._v("如果需要在 GUI 界面管理应用程序, 需要修改配置文件 "),s("code",[a._v("/usr/share/tomcat/conf/tomcat-users.xml")])]),a._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("tomcat-users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("role")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rolename")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("manager-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("user")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("roles")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("manager-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("user")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("username")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("password")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("roles")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("manager-gui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("tomcat-users")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("p",[a._v("安装成功后, 可以看到")]),a._v(" "),s("imgLink",{attrs:{src:"date/20190106/001.png"}}),a._v(" "),s("h2",{attrs:{id:"使用-docker-安装-web-容器-tomcat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-安装-web-容器-tomcat","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Docker 安装 Web 容器 Tomcat")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker pull docker.io/tomcat\n$ docker run -d -u root \\\n  -v /usr/share/tomcat/webapps:/usr/local/tomcat/webapps \\\n  -p 8080:8080 \\\n  --privileged"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true \\\n  --name tomcat \\\n  docker.io/tomcat\n$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /usr/share/tomcat/conf/tomcat-users.xml 94d0cd439481:/usr/local/tomcat/conf\n$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("exec")]),a._v(" -it tomcat "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])])])],1)},[],!1,null,null,null);t.default=e.exports}}]);