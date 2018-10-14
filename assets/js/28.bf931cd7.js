(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{358:function(e,t,r){"use strict";r.r(t);var _=r(1),o=Object(_.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("ul",[r("li",[e._v("官网："),r("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.docker.com"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("中文社区："),r("a",{attrs:{href:"http://www.docker.org.cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.docker.org.cn"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Docker Hub："),r("a",{attrs:{href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("hub.docker.com"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Document："),r("a",{attrs:{href:"https://docs.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("docs.docker.com"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("GitHub："),r("a",{attrs:{href:"https://github.com/docker/docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/docker/docker"),r("OutboundLink")],1)])]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("Docker 提供了一个可以运行你的运行程序的封套（envelope），或者说容器。它最初是用Go语言编写的，它就相当于是加在LXC（Linux Containers）上的管道，允许开发者在更高层次的概念上工作。")]),e._v(" "),r("p",[e._v("Docker 也是一个云计算平台，它利用 Linux 的 LXC、AUFU、Go语言、cgroup实现了资源的独立，可以很轻松地实现文件、资源、网络等隔离，其最终的目标是实现类似 PaaS 平台的应用隔离。")]),e._v(" "),r("p",[e._v("Docker 会像一个可移植引擎那样工作。它把应用程序以及所有应用程序的依赖环境打包到一个虚拟容器中，这个虚拟容器可以运行在任何一种Linux服务器上。这大大地提高了程序运行的灵活性和可移植性，无论需不需要许可、是在公共云还是私密云、是不是裸机环境等等。")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),r("p",[e._v("Docker 是 Docker.Inc（前身dotCloud）公司开源的一个基于 LXC 技术之上构建的 Container 容器引擎，它原本是dotCloud启动的一个业余项目，源代码托管在 GitHub 上，基于 Go 语言并遵从 Apache2.0 协议，于2013年3月27日作为 public 项目发布。它吸引了大量的关注和讨论，导致 dotCloud 把它重命名到 Docker Inc。")]),e._v(" "),r("p",[e._v("Docker 是通过内核虚拟化技术（namespaces 及 cgroup等）来提供容器的资源隔离与安全保障等，由于 Docker 通过操作系统层的虚拟化实现隔离，所以 Docker 所以 Docker 容器在运行时，不需要类似虚拟机（VM）额外的操作系统开销，提高资源利用率。")]),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("传统虚拟机与Docker的区别图：")]),e._v(" "),r("imgLink",{attrs:{src:"date/20181013/virtualization.png"}}),e._v(" "),r("imgLink",{attrs:{src:"date/20181013/docker.png"}}),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("Docker 使用客户端-服务器（C/S）架构模式。Docker客户端会与Docker守护进程进行通讯。Docker守护进程会处理复杂繁重的任务，例如建立、运行、发布你的Docker容器。Docker客户端和守护进程可以运行在同一个系统上，当然你也可以使用Docker客户端去连接一个远程的Docker守护进程。Docker客户端和守护进程之间通过socket或者RESTful API进行通信。")]),e._v(" "),e._m(13),e._v(" "),r("imgLink",{attrs:{src:"date/20181014/001.png"}})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"docker-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-简介","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 简介")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 是什么")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("一种虚拟化解决方案")]),this._v(" "),t("li",[this._v("操作系统级别的虚拟化")]),this._v(" "),t("li",[this._v("只能运行相同或类似内核的操作系统")]),this._v(" "),t("li",[this._v("依赖于Linux内核特性：Namespace和Cgroups（Control Group）")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-的诞生"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的诞生","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 的诞生")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-可以做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-可以做什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 可以做什么")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Docker 是一个开源的软件部署解决方案")]),this._v(" "),t("li",[this._v("Docker 是一个轻量级的应用容器框架")]),this._v(" "),t("li",[this._v("Docker 可以打包、发布、运行任何应用")]),this._v(" "),t("li",[this._v("build once，run anywhere")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-与虚拟机的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-与虚拟机的区别","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 与虚拟机的区别")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[e._v("传统虚拟机")]),e._v(" "),r("th",[e._v("Docker")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("依赖物理CPU和内存，是硬件级别的。")]),e._v(" "),r("td",[e._v("在操作系统上，利用操作系统的containerization（集装箱化）技术，可以在虚拟机上运行。")])]),e._v(" "),r("tr",[r("td",[e._v("一般都是指操作系统镜像，比较复杂。")]),e._v(" "),r("td",[e._v("docker开源而且轻量，成为“容器”，单个容器适合部署少量应用。")])]),e._v(" "),r("tr",[r("td",[e._v("使用快照来保存状态。")]),e._v(" "),r("td",[e._v("引入了类似源代码管理机制，将容器的快照历史版本一一记录。")])]),e._v(" "),r("tr",[r("td",[e._v("在构建系统的时候较为复杂，需要大量的人力。")]),e._v(" "),r("td",[e._v("docker可以通过Dockfile来构建整个容器，重启和构建速度很快，更重要的是Dockfile可以手动编写，这样应用程序开发人员可以通过发布Dockfile来指导系统环境和依赖，这样对于持续交付十分有利。")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-使用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 使用场景")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("使用Docker容器开发、测试、部署服务")]),e._v(" "),r("li",[e._v("创建隔离的运行环境")]),e._v(" "),r("li",[e._v("搭建测试环境")]),e._v(" "),r("li",[e._v("构建多用户的平台即服务（PaaS）基础设施")]),e._v(" "),r("li",[e._v("提供软件即服务（SaaS）应用程序")]),e._v(" "),r("li",[e._v("高性能、超大规模的宿主机部署")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-特性与能力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-特性与能力","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 特性与能力")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[r("strong",[e._v("文件系统隔离")]),e._v(" 每个进程容器运行在完全独立的根（root）文件系统里")]),e._v(" "),r("li",[r("strong",[e._v("进程隔离")]),e._v(" 每个容器都运行在自己的进程环境中")]),e._v(" "),r("li",[r("strong",[e._v("资源隔离和分组")]),e._v(" 可以使用 cgroup 为每个进程容器分配不同的系统资源，例如 CPU 和内存")]),e._v(" "),r("li",[r("strong",[e._v("网络隔离")]),e._v(" 每个进程容器运行在自己的网络命名空间里，拥有自己的虚拟接口和IP地址")]),e._v(" "),r("li",[r("strong",[e._v("写时复制")]),e._v(" 采用写时复制创建根文件系统，这让部署变得极其快捷，并且节省内存和硬盘空间")]),e._v(" "),r("li",[r("strong",[e._v("日志记录")]),e._v(" Docker 将会搜集和记录没跟进程容器的标准流（stdout、stderr、stdin），用于实时检索或批量检索")]),e._v(" "),r("li",[r("strong",[e._v("变更管理")]),e._v(" 容器文件系统的变更可以提交到新的映像中，并可重复使用以创建更多的容器，无需使用模板或手动配置")]),e._v(" "),r("li",[r("strong",[e._v("交互式shell")]),e._v(" Docker 可以分配一个虚拟终端并关联到任何容器的标准输入上，例如运行一个一次性交互shell")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"docker-工作原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-工作原理","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 工作原理")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Docker守护进程")]),this._v(" Docker守护进程运行在一台主机上。用户并不直接和守护进程进行交互，而是通过Docker客户端简介和其通信。")]),this._v(" "),t("li",[t("strong",[this._v("Docker客户端")]),this._v(" Docker客户端实际上是Docker的二进制程序，是主要的用户与Docker交互方式。它接收用户指令并且与背后的Docker守护进程通讯，如此来回往复。")])])}],!1,null,null,null);o.options.__file="Index.md";t.default=o.exports}}]);