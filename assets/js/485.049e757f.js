(window.webpackJsonp=window.webpackJsonp||[]).push([[485],{714:function(e,o,r){"use strict";r.r(o);var s=r(1),a=Object(s.a)({},function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-compose-的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-的使用","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose 的使用")]),e._v(" "),r("h2",{attrs:{id:"docker-compose-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-概述","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose 概述")]),e._v(" "),r("p",[e._v("前面我们使用 Docker 的时候，定义 "),r("code",[e._v("Dockerfile")]),e._v(" 文件，然后使用 "),r("code",[e._v("docker build")]),e._v("、"),r("code",[e._v("docker run")]),e._v(" 等命令操作容器。然而微服务架构的应用系统一般包含若干个微服务，每个微服务一般都会部署多个实例，如果每个微服务都要手动启停，那么效率之低，维护量之大可想而知")]),e._v(" "),r("p",[r("strong",[e._v("使用 Docker Compose 可以轻松、高效的管理容器，它是一个用于定义和运行多容器 Docker 的应用程序工具")])]),e._v(" "),r("h2",{attrs:{id:"docker-compose-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-安装","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose 安装")]),e._v(" "),r("p",[e._v("安装很简单")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ yum -y "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" epel-release\n$ yum -y "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" python-pip\n$ pip "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" docker-compose\n$ docker-compose version\ndocker-compose version 1.24.0, build 0aa5906\ndocker-py version: 3.7.2\nCPython version: 2.7.5\nOpenSSL version: OpenSSL 1.0.2k-fips  26 Jan 2017\n")])])]),r("h2",{attrs:{id:"docker-compose-的使用-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-的使用-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Compose 的使用")]),e._v(" "),r("p",[e._v("Docker Compose 部署应用依赖于一个叫 "),r("code",[e._v("docker-compose.yml")]),e._v(" 的文件")]),e._v(" "),r("p",[e._v("部署应用")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker-compose up -d\n$ docker-compose -f docker-compose.yml up -d\n")])])]),r("p",[e._v("查看服务的运行状态")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("$ docker-compose "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v("\n     Name                    Command               State                     Ports\n-----------------------------------------------------------------------------------------------------\ntraefik_proxy_1   /traefik --web --docker -- "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".   Up      0.0.0.0:80-"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("80/tcp, 0.0.0.0:8080-"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("8080/tcp\n")])])]),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/658911a8cff3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker：Docker Compose 详解"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/u011781521/article/details/80464826",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker(四)----Docker-Compose 详解"),r("OutboundLink")],1)])])])},[],!1,null,null,null);o.default=a.exports}}]);