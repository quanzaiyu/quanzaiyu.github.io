(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{743:function(t,a,s){"use strict";s.r(a);var n=s(1),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jdk-安装及-java-环境的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk-安装及-java-环境的配置","aria-hidden":"true"}},[t._v("#")]),t._v(" JDK 安装及 JAVA 环境的配置")]),t._v(" "),s("h2",{attrs:{id:"下载jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载jdk","aria-hidden":"true"}},[t._v("#")]),t._v(" 下载JDK")]),t._v(" "),s("p",[t._v("首先到 "),s("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle官网"),s("OutboundLink")],1)]),t._v(" "),s("imgLink",{attrs:{src:"date/20190408/003.png"}}),t._v(" "),s("p",[t._v("下载对应自己系统的版本即可")]),t._v(" "),s("h2",{attrs:{id:"安装与配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装与配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装与配置")]),t._v(" "),s("p",[t._v("安装就不用说了, 一步一步往下走即可")]),t._v(" "),s("p",[t._v("安装完毕后, 需要配置环境变量:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("JAVA_HOME")]),t._v(" jdk安装目录, 比如我的 "),s("code",[t._v("C:\\Program Files\\Java\\jdk1.8.0_201")])]),t._v(" "),s("li",[s("code",[t._v("PATH")]),t._v(" 配置 "),s("code",[t._v("%JAVA_HOME%\\bin")])]),t._v(" "),s("li",[s("code",[t._v("CLASSPATH")]),t._v(" (非必须, 主要是为了方便找到JAVA基础类库) 配置 "),s("code",[t._v(".; %JAVA_HOME%\\lib\\tools.jar; %JAVA_HOME%\\lib\\dt.jar;")])])]),t._v(" "),s("h2",{attrs:{id:"idea配置jdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea配置jdk","aria-hidden":"true"}},[t._v("#")]),t._v(" Idea配置JDK")]),t._v(" "),s("p",[t._v("在 Idea 中键入 "),s("kbd",[t._v("Ctrl")]),t._v(" + "),s("kbd",[t._v("Shift")]),t._v(" + "),s("kbd",[t._v("Alt")]),t._v(" + "),s("kbd",[t._v("S")]),t._v(", 配置jdk")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190408/001.png"}}),t._v(" "),s("h2",{attrs:{id:"安装maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装maven","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装Maven")]),t._v(" "),s("p",[t._v("如果使用Idea, IDE将自动集成Maven, 当然, 还是建议单独安装一下Maven")]),t._v(" "),s("ul",[s("li",[t._v("Maven 官网: "),s("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://maven.apache.org/"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Maven下载地址: "),s("a",{attrs:{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://maven.apache.org/download.cgi"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Maven 官方仓库: "),s("a",{attrs:{href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mvnrepository.com/"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"maven换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maven换源","aria-hidden":"true"}},[t._v("#")]),t._v(" Maven换源")]),t._v(" "),s("p",[t._v("Maven 的配置默认使用 "),s("code",[t._v("C:\\Users\\user\\.m2\\settings.xml")]),t._v(", 其下载的包位于 "),s("code",[t._v("C:\\Users\\quanzaiyu\\.m2\\repository")])]),t._v(" "),s("p",[t._v("官方源下载特别慢, 我们可以修改 settings.xml 进行换源:")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("settings")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/SETTINGS/1.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 阿里云仓库 --\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alimaven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aliyun maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://maven.aliyun.com/nexus/content/repositories/central/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 中央仓库1 --\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("repo1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Human Readable Name for this Mirror."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://repo1.maven.org/maven2/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 中央仓库2 --\x3e")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("repo2"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Human Readable Name for this Mirror."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("http://repo2.maven.org/maven2/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mirrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在Idea中配置:")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190409/002.png"}}),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA API 官方手册"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://json-lib.sourceforge.net/apidocs/jdk15/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSONObject 参考手册"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=r.exports}}]);