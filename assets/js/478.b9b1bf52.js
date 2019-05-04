(window.webpackJsonp=window.webpackJsonp||[]).push([[478],{700:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"使用-docker-compose-部署-traefik"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-compose-部署-traefik","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Docker Compose 部署 Traefik")]),t._v(" "),e("h2",{attrs:{id:"traefik-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traefik-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" Traefik 简介")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.traefik.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Træfɪk"),e("OutboundLink")],1),t._v(" 是一个为了让部署微服务更加便捷而诞生的现代HTTP反向代理、负载均衡工具。 它支持多种后台 (Docker, Swarm, Kubernetes, Marathon, Mesos, Consul, Etcd, Zookeeper, BoltDB, Rest API, file…) 来自动化、动态的应用它的配置文件设置。")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190416/006.png"}}),t._v(" "),e("p",[t._v("从上图可以看出，在我们日常业务开发中，我们会部署一系列微服务，外部网络要通过 domain、path、负载均衡等转发到后端私有网络中，微服务之所以称为微，是因为它是动态变化的，它会经常被增加、删除、干掉或者被更新。而且传统的反向代理对服务动态变化的支持不是很方便，也就是服务变更后，我们不是很容易立马改变配置和热加载。traefik 的出现就是为了解决这个问题，它可以时刻监听服务注册或服务编排 API，随时感知后端服务变化，自动重新更改配置并热重新加载，期间服务不会暂停或停止，这对于用户来说是无感知的。")]),t._v(" "),e("p",[t._v("Traefik 还有很多特性如下：")]),t._v(" "),e("ul",[e("li",[t._v("速度快")]),t._v(" "),e("li",[t._v("不需要安装其他依赖，使用 GO 语言编译可执行文件")]),t._v(" "),e("li",[t._v("支持最小化官方 Docker 镜像")]),t._v(" "),e("li",[t._v("支持多种后台，如 Docker, Swarm mode, Kubernetes, Marathon, Consul, Etcd, Rancher, Amazon ECS 等等")]),t._v(" "),e("li",[t._v("支持 REST API")]),t._v(" "),e("li",[t._v("配置文件热重载，不需要重启进程")]),t._v(" "),e("li",[t._v("支持自动熔断功能")]),t._v(" "),e("li",[t._v("支持轮训、负载均衡")]),t._v(" "),e("li",[t._v("提供简洁的 UI 界面")]),t._v(" "),e("li",[t._v("支持 Websocket, HTTP/2, GRPC")]),t._v(" "),e("li",[t._v("自动更新 HTTPS 证书")]),t._v(" "),e("li",[t._v("支持高可用集群模式")])]),t._v(" "),e("p",[t._v("其内部结构示意:")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190416/009.png"}}),t._v(" "),e("ul",[e("li",[t._v("请求在"),e("a",{attrs:{href:"https://docs.traefik.cn/basics#entrypoints",target:"_blank",rel:"noopener noreferrer"}},[t._v("入口点"),e("OutboundLink")],1),t._v("处结束, 顾名思义, 它们是Træfɪk的网络入口(监听端口, SSL, 流量重定向...)。")]),t._v(" "),e("li",[t._v("之后流量会导向一个匹配的"),e("a",{attrs:{href:"https://docs.traefik.cn/basics#frontends",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端"),e("OutboundLink")],1),t._v("。 前端是定义"),e("a",{attrs:{href:"https://docs.traefik.cn/basics#entrypoints",target:"_blank",rel:"noopener noreferrer"}},[t._v("入口点"),e("OutboundLink")],1),t._v(" 到 "),e("a",{attrs:{href:"https://docs.traefik.cn/basics#backends",target:"_blank",rel:"noopener noreferrer"}},[t._v("后端"),e("OutboundLink")],1),t._v("之间的路由的地方。 路由是通过请求字段("),e("code",[t._v("Host")]),t._v(", "),e("code",[t._v("Path")]),t._v(", "),e("code",[t._v("Headers")]),t._v("...) 来定义的，它可以匹配或否定一个请求。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://docs.traefik.cn/basics#frontends",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端"),e("OutboundLink")],1),t._v(" 将会把请求发送到 "),e("a",{attrs:{href:"https://docs.traefik.cn/basics#backends",target:"_blank",rel:"noopener noreferrer"}},[t._v("后端"),e("OutboundLink")],1),t._v("。后端可以由一台或一个通过负载均衡策略配置后的多台"),e("a",{attrs:{href:"https://docs.traefik.cn/basics#servers",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器"),e("OutboundLink")],1),t._v("组成。")]),t._v(" "),e("li",[t._v("最后, "),e("a",{attrs:{href:"https://docs.traefik.cn/basics#servers",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器"),e("OutboundLink")],1),t._v(" 将转发请求到对应私有网络的微服务当中去。")])]),t._v(" "),e("p",[t._v("实验:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.katacoda.com/courses/traefik/deploy-load-balancer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Load Balance Containers using Traefik"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"traefik-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#traefik-安装","aria-hidden":"true"}},[t._v("#")]),t._v(" Traefik 安装")]),t._v(" "),e("p",[t._v("通过 "),e("a",{attrs:{href:"./Docker_Compose"}},[t._v("Docker Compose")]),t._v(" 测试 Træfɪk, 首先在 "),e("code",[t._v("traefik")]),t._v(" 的目录下创建 "),e("code",[t._v("docker-compose.yml")]),t._v(" 文件:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker.domain=docker.localhost "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("logLevel=DEBUG\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" webgateway\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"80:80"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8080:8080"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /dev/null"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/traefik.toml\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("webgateway")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("driver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bridge\n")])])]),e("p",[t._v("在 traefik 目录下运行：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker-compose up -d\n")])])]),e("p",[t._v("创建完成后, 可以看到服务已经运行:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker-compose "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n     Name                    Command               State                     Ports\n-----------------------------------------------------------------------------------------------------\ntraefik_proxy_1   /traefik --web --docker -- "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".   Up      0.0.0.0:80-"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("80/tcp, 0.0.0.0:8080-"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("8080/tcp\n")])])]),e("p",[t._v("打开浏览器, 输入 "),e("code",[t._v("host:8080")]),t._v(" 即可看到:")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190416/007.png"}}),t._v(" "),e("h2",{attrs:{id:"负载均衡测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 负载均衡测试")]),t._v(" "),e("p",[t._v("现在, 创建一个名称为 test 的目录，并在目录中使用以下内容创建一个 "),e("code",[t._v("docker-compose.yml")]),t._v(" 文件：")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("whoami")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" emilevauge/whoami\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" web\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.backend=whoami"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:whoami.docker.localhost"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik_webgateway\n")])])]),e("p",[t._v("然后, 在 test 目录下按顺序执行以下命令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker-compose up -d\n$ docker-compose scale whoami"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2\n")])])]),e("p",[t._v("最后, 测试 test_whoami_1 和 test_whoami_2 这两个服务之间的负载均衡：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H Host:whoami.docker.localhost http://127.0.0.1\nHostname: ef194d07634a\nIP: 127.0.0.1\nIP: ::1\nIP: 172.17.0.4\nIP: fe80::42:acff:fe11:4\nGET / HTTP/1.1\nHost: 172.17.0.4:80\nUser-Agent: curl/7.35.0\nAccept: */*\nAccept-Encoding: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("\nX-Forwarded-For: 172.17.0.1\nX-Forwarded-Host: 172.17.0.4:80\nX-Forwarded-Proto: http\nX-Forwarded-Server: dbb60406010d\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H Host:whoami.docker.localhost http://127.0.0.1\nHostname: 6c3c5df0c79a\nIP: 127.0.0.1\nIP: ::1\nIP: 172.17.0.3\nIP: fe80::42:acff:fe11:3\nGET / HTTP/1.1\nHost: 172.17.0.3:80\nUser-Agent: curl/7.35.0\nAccept: */*\nAccept-Encoding: "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("\nX-Forwarded-For: 172.17.0.1\nX-Forwarded-Host: 172.17.0.3:80\nX-Forwarded-Proto: http\nX-Forwarded-Server: dbb60406010d\n")])])]),e("imgLink",{attrs:{src:"date/20190416/008.png"}}),t._v(" "),e("h2",{attrs:{id:"部署web应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署web应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署web应用")]),t._v(" "),e("p",[t._v("创建 "),e("code",[t._v("docker-compose.yml")]),t._v(" 文件:")]),t._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" web\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.backend=nginx"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"traefik.frontend.rule=Host:nginx.docker.localhost"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /opt/conf/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/mnt\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /web/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/usr/share/nginx/html\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"8088:80"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("external")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" traefik_webgateway\n")])])]),e("p",[t._v("以上, 使用 nginx 镜像创建了一个web服务, 暴露8088端口提供外部访问, 并将web容器目录暴露到宿主机/web下")]),t._v(" "),e("p",[t._v("部署应用:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker-compose up -d\n$ docker-compose "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n    Name              Command          State          Ports\n-------------------------------------------------------------------\nnginx_nginx_1   nginx -g daemon off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   Up      0.0.0.0:8088-"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("80/tcp\n")])])]),e("p",[t._v("测试网络通畅性:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H Host:nginx.docker.localhost http://127.0.0.1\n")])])]),e("p",[t._v("创建入口页面:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /web/index.html\n")])])]),e("p",[t._v("浏览器访问:")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190416/011.png"}}),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://segmentfault.com/a/1190000014436718",target:"_blank",rel:"noopener noreferrer"}},[t._v("新东方的负载均衡架构探索和实践"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.51cto.com/6764097/2066670",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker swarm模式使用traefik部署服务"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/aixiaoyang168/article/details/78557739",target:"_blank",rel:"noopener noreferrer"}},[t._v("初试 Kubernetes 集群中使用 Traefik 反向代理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_36178641/article/details/80118890",target:"_blank",rel:"noopener noreferrer"}},[t._v("centos7下使用docker-compose部署nginx"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/Cooldiok/article/details/82390676",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker环境下使用treafik实现反向代理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.51cto.com/icenycmh/2124502",target:"_blank",rel:"noopener noreferrer"}},[t._v("kubernetes使用Traefik暴露web服务"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/a1f168b7b0ed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Treafik 实践"),e("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=n.exports}}]);