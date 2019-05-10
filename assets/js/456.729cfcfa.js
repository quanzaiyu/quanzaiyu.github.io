(window.webpackJsonp=window.webpackJsonp||[]).push([[456],{908:function(e,r,s){"use strict";s.r(r);var t=s(1),n=Object(t.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-核心概念-暴露服务的方式-service、ingress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-暴露服务的方式-service、ingress","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes 核心概念 - 暴露服务的方式 (Service、Ingress)")]),e._v(" "),s("p",[e._v("从 kubernetes 1.2 版本开始，kubernetes提供了 Ingress 对象来实现对外暴露服务；到目前为止 kubernetes 总共有三种暴露服务的方式:")]),e._v(" "),s("ul",[s("li",[e._v("LoadBlancer Service")]),e._v(" "),s("li",[e._v("NodePort Service")]),e._v(" "),s("li",[e._v("Ingress")])]),e._v(" "),s("p",[s("strong",[e._v("LoadBlancer Service")]),e._v(" 是 kubernetes 深度结合云平台的一个组件；当使用 LoadBlancer Service 暴露服务时，实际上是通过向底层云平台申请创建一个负载均衡器来向外暴露服务；目前 LoadBlancer Service 支持的云平台已经相对完善，比如国外的 GCE、DigitalOcean，国内的 阿里云，私有云 Openstack 等等，由于 LoadBlancer Service 深度结合了云平台，所以只能在一些云平台上来使用。")]),e._v(" "),s("p",[e._v("下面详细介绍其他几种暴露服务的方式")]),e._v(" "),s("h2",{attrs:{id:"服务-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务-service","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务 Service")]),e._v(" "),s("p",[e._v("在Kubernetes的世界里，虽然每个Pod都会被分配一个单独的IP地址，但这个IP地址会随着Pod的销毁而消失，这就引出一个问题：如果有一组Pod组成一个集群来提供服务，那么如何来访问它呢？Service！")]),e._v(" "),s("p",[e._v("一个Service可以看作一组提供相同服务的Pod的对外访问接口，Service作用于哪些Pod是通过Label Selector来定义的。")]),e._v(" "),s("ul",[s("li",[e._v("拥有一个指定的名字（比如my-mysql-server）；")]),e._v(" "),s("li",[e._v("拥有一个虚拟IP（ClusterIP、ServiceIP或VIP）和端口号，销毁之前不会改变，只能内网访问；")]),e._v(" "),s("li",[e._v("能够提供某种远程服务能力；")]),e._v(" "),s("li",[e._v("被映射到了提供这种服务能力的一组容器应用上；")])]),e._v(" "),s("p",[e._v("如果Service要提供外网服务，需指定公共IP和NodePort，或外部负载均衡器；")]),e._v(" "),s("h3",{attrs:{id:"服务中的3个端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务中的3个端口","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务中的3个端口")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("port")]),e._v(" 这里的port表示：service暴露在 cluster ip 上的端口，"),s("code",[e._v("<cluster ip>:port")]),e._v(" 是提供给集群内部客户访问service的入口。")]),e._v(" "),s("li",[s("strong",[e._v("nodePort")]),e._v(" nodePort是kubernetes提供给集群外部客户访问service入口的一种方式（另一种方式是LoadBalancer），所以，"),s("code",[e._v("<nodeIP>:nodePort")]),e._v(" 是提供给集群外部客户访问service的入口。")]),e._v(" "),s("li",[s("strong",[e._v("targetPort")]),e._v(" targetPort很好理解，targetPort是pod上的端口，从port和nodePort上到来的数据最终经过kube-proxy流入到后端pod的targetPort上进入容器。")])]),e._v(" "),s("h3",{attrs:{id:"nodeport-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodeport-service","aria-hidden":"true"}},[e._v("#")]),e._v(" NodePort Service")]),e._v(" "),s("p",[e._v("NodePort Service 顾名思义，实质上就是通过在集群的每个 node 上暴露一个端口，然后将这个端口映射到某个具体的 service 来实现的，虽然每个 node 的端口有很多(0~65535)，但是由于安全性和易用性(服务多了就乱了，还有端口冲突问题)实际使用可能并不多。")]),e._v(" "),s("p",[e._v("service 是 k8s 暴露http服务的默认方式， 其中 NodePort 类型可以将http 服务暴露在宿主机的端口上，以便外部可以访问。 service模式的结构如下.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("service -> label selector -> pods\n31217 ->   app1 selector  -> app1 1234\n31218 ->   app2 selector  -> app2 3456\n31218 ->   app2 selector  -> app2 4567\n")])])]),s("p",[s("strong",[e._v("模式的优点")]),e._v(": 结构简单，容易理解。")]),e._v(" "),s("p",[s("strong",[e._v("模式缺点")])]),e._v(" "),s("ol",[s("li",[e._v("一个 app 需要占用一个主机端口")]),e._v(" "),s("li",[e._v("端口缺乏管理")]),e._v(" "),s("li",[e._v("L4转发， 无法根据http header 和 path 进行路由转发")])]),e._v(" "),s("h3",{attrs:{id:"定义-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义-service","aria-hidden":"true"}},[e._v("#")]),e._v(" 定义 Service")]),e._v(" "),s("p",[e._v("一个 "),s("code",[e._v("Service")]),e._v(" 在 Kubernetes 中是一个 REST 对象，和 "),s("code",[e._v("Pod")]),e._v(" 类似。 像所有的 REST 对象一样， "),s("code",[e._v("Service")]),e._v(" 定义可以基于 POST 方式，请求 apiserver 创建新的实例。 例如，假定有一组 "),s("code",[e._v("Pod")]),e._v("，它们对外暴露了 9376 端口，同时还被打上 "),s("code",[e._v('"app=MyApp"')]),e._v(" 标签。")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" MyApp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" TCP\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("9376")]),e._v("\n")])])]),s("p",[e._v("上述配置将创建一个名称为 “my-service” 的 "),s("code",[e._v("Service")]),e._v(" 对象，它会将请求代理到使用 TCP 端口 9376，并且具有标签 "),s("code",[e._v('"app=MyApp"')]),e._v(" 的 "),s("code",[e._v("Pod")]),e._v(" 上。 这个 "),s("code",[e._v("Service")]),e._v(" 将被指派一个 IP 地址（通常称为 “Cluster IP”），它会被服务的代理使用（见下面）。 该 "),s("code",[e._v("Service")]),e._v(" 的 selector 将会持续评估，处理结果将被 POST 到一个名称为 “my-service” 的 "),s("code",[e._v("Endpoints")]),e._v(" 对象上。")]),e._v(" "),s("p",[e._v("需要注意的是， "),s("code",[e._v("Service")]),e._v(" 能够将一个接收端口映射到任意的 "),s("code",[e._v("targetPort")]),e._v("。 默认情况下，"),s("code",[e._v("targetPort")]),e._v(" 将被设置为与 "),s("code",[e._v("port")]),e._v(" 字段相同的值。 可能更有趣的是，"),s("code",[e._v("targetPort")]),e._v(" 可以是一个字符串，引用了 backend "),s("code",[e._v("Pod")]),e._v(" 的一个端口的名称。 但是，实际指派给该端口名称的端口号，在每个 backend "),s("code",[e._v("Pod")]),e._v(" 中可能并不相同。 对于部署和设计 "),s("code",[e._v("Service")]),e._v(" ，这种方式会提供更大的灵活性。 例如，可以在 backend 软件下一个版本中，修改 Pod 暴露的端口，并不会中断客户端的调用。")]),e._v(" "),s("p",[e._v("Kubernetes "),s("code",[e._v("Service")]),e._v(" 能够支持 "),s("code",[e._v("TCP")]),e._v(" 和 "),s("code",[e._v("UDP")]),e._v(" 协议，默认 "),s("code",[e._v("TCP")]),e._v(" 协议。")]),e._v(" "),s("h2",{attrs:{id:"访问权-ingress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问权-ingress","aria-hidden":"true"}},[e._v("#")]),e._v(" 访问权 Ingress")]),e._v(" "),s("p",[e._v("简单说, Ingress 就是k8s中用作反向代理和负载均衡的工具, 避免使用service的NodePort暴露宿主机过多端口而造成管理混乱的情况。")]),e._v(" "),s("p",[e._v("Ingress 是 1.2 后才出现的，通过 Ingress 用户可以实现使用 nginx 等开源的反向代理负载均衡器实现对外暴露服务，以下详细说一下 Ingress，毕竟 traefik 用的就是 Ingress。")]),e._v(" "),s("p",[e._v("在service 之前加了一层ingress, 外部通过路由规则(域名)进行不同服务的访问, 结构如下")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("            ingress      -> service      -> label selector -> pods\n            www.app1.com -> app1-service -> app1 selector -> app1 1234\n80/443  ->  www.app2.com -> app2-service -> app2 selector -> app2 3456\n            www.app3.com -> app3-service -> app3 selector ->app3 4567\n")])])]),s("ul",[s("li",[s("strong",[e._v("模式的优点")]),e._v(" 增加了7层的识别能力，可以根据 http header, path 进行路由转发")]),e._v(" "),s("li",[s("strong",[e._v("模式缺点")]),e._v(" 复杂度提升")])]),e._v(" "),s("h3",{attrs:{id:"ingress-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress-实现","aria-hidden":"true"}},[e._v("#")]),e._v(" Ingress 实现")]),e._v(" "),s("p",[e._v("Ingress 的实现分为两个部分 Ingress Controller 和 Ingress")]),e._v(" "),s("p",[s("strong",[e._v("使用 Ingress 时一般会有三个组件")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("反向代理负载均衡器")])]),e._v(" "),s("li",[s("strong",[e._v("Ingress Controller")]),e._v(" 是流量的入口，是一个实体软件， 一般是Nginx 和 Haproxy、traefik")]),e._v(" "),s("li",[s("strong",[e._v("Ingress")]),e._v(" 描述具体的路由规则")])]),e._v(" "),s("p",[e._v("Ingress Controller 会监听 api server上的 /ingresses 资源 并实时生效。")]),e._v(" "),s("p",[e._v("Ingerss 描述了一个或者多个 域名的路由规则，以 ingress 资源的形式存在。")]),e._v(" "),s("p",[e._v("简单说： Ingress 描述路由规则， Ingress Controller 实时实现规则。")]),e._v(" "),s("p",[s("strong",[e._v("设计理念")])]),e._v(" "),s("p",[e._v("k8s 有一个贯穿始终的设计理念，即需求和供给的分离。 Ingress Controller和 Ingress 的实现也很好的实践了这一点。 要理解k8s ，时刻记住 需求供给分离的设计理念。")]),e._v(" "),s("h3",{attrs:{id:"反向代理负载均衡器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理负载均衡器","aria-hidden":"true"}},[e._v("#")]),e._v(" 反向代理负载均衡器")]),e._v(" "),s("p",[e._v("反向代理负载均衡器很简单，说白了就是 nginx、apache 什么的；在集群中反向代理负载均衡器可以自由部署，可以使用 Replication Controller、Deployment、DaemonSet 等等，不过个人喜欢以 DaemonSet 的方式部署，感觉比较方便。")]),e._v(" "),s("h3",{attrs:{id:"ingress-controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress-controller","aria-hidden":"true"}},[e._v("#")]),e._v(" Ingress Controller")]),e._v(" "),s("p",[e._v("Ingress Controller 实质上可以理解为是个监视器，Ingress Controller 通过不断地跟 kubernetes API 打交道，实时的感知后端 service、pod 等变化，比如新增和减少 pod，service 增加与减少等；当得到这些变化信息后，Ingress Controller 再结合下文的 Ingress 生成配置，然后更新反向代理负载均衡器，并刷新其配置，达到服务发现的作用。")]),e._v(" "),s("p",[s("strong",[e._v("Ingress Controller 注意事项")])]),e._v(" "),s("ol",[s("li",[e._v("一个集群中可以有多个 Ingress Controller， 在Ingress 中可以指定使用哪一个Ingress Controller")]),e._v(" "),s("li",[e._v("多个 Ingress 规则可能出现竞争")]),e._v(" "),s("li",[e._v("Ingress Controller 本身需要以hostport 或者 service形式暴露出来。 云端可以使用云供应商lb 服务。")]),e._v(" "),s("li",[e._v("Ingress 可以为多个命名空间服务")])]),e._v(" "),s("p",[s("strong",[e._v("Ingress Controller 做哪些设置")])]),e._v(" "),s("p",[e._v("我们以 nginx-ingress 为例. 我们可以设置如下几个全局参数")]),e._v(" "),s("ol",[s("li",[e._v("全局timeout时间")]),e._v(" "),s("li",[e._v("全局gzip 压缩")]),e._v(" "),s("li",[e._v("https 和 http2")]),e._v(" "),s("li",[e._v("全局 请求数量的 limit")]),e._v(" "),s("li",[e._v("vts 实时nginx 状态，可以监控流量")])]),e._v(" "),s("p",[s("strong",[e._v("如何设置 Ingress Controller")])]),e._v(" "),s("p",[e._v("两种方式 configmap 和 custom template。")]),e._v(" "),s("p",[e._v("custom template 用来设置configmap不能设置的一些高级选项， 通常情况下，使用configmap 已经够用。")]),e._v(" "),s("p",[e._v("使用configmap 需要确保Ingress Controller时，启用了 configmap 参数")]),e._v(" "),s("p",[s("strong",[e._v("Ingress Controller 总结")])]),e._v(" "),s("ol",[s("li",[e._v("Ingress Controller 负责实现路由需求， Ingress负责描述路由需求")]),e._v(" "),s("li",[e._v("Ingress Controller 一个集群可以有多个")]),e._v(" "),s("li",[e._v("Ingress Controller 通过Configmap设置， Ingress 通过Annotations设置")]),e._v(" "),s("li",[e._v("Ingress Controller 设置全局规则， Ingress 设置局部规则")]),e._v(" "),s("li",[e._v("Ingress Controller 可为多个命名空间服务。")]),e._v(" "),s("li",[e._v("需求供给分离可以做到权限隔离，又能提供配置能力。")])]),e._v(" "),s("h3",{attrs:{id:"ingress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress","aria-hidden":"true"}},[e._v("#")]),e._v(" Ingress")]),e._v(" "),s("p",[e._v("Ingress 简单理解就是个规则定义；比如说某个域名对应某个 service，即当某个域名的请求进来时转发给某个 service;这个规则将与 Ingress Controller 结合，然后 Ingress Controller 将其动态写入到负载均衡器配置中，从而实现整体的服务发现和负载均衡。")]),e._v(" "),s("p",[s("strong",[e._v("Ingress 可以做哪些设置")])]),e._v(" "),s("p",[e._v("我们以nginx-ingress 为例. 我们可以设置如下几参数")]),e._v(" "),s("ol",[s("li",[e._v("基于http-header 的路由")]),e._v(" "),s("li",[e._v("基于 path 的路由")]),e._v(" "),s("li",[e._v("单个ingress 的 timeout (不影响其他ingress 的 timeout 时间设置)")]),e._v(" "),s("li",[e._v("登录验证")]),e._v(" "),s("li",[e._v("cros")]),e._v(" "),s("li",[e._v("请求速率limit")]),e._v(" "),s("li",[e._v("rewrite 规则")]),e._v(" "),s("li",[e._v("ssl")])]),e._v(" "),s("p",[s("strong",[e._v("如何设置 Ingress")])]),e._v(" "),s("p",[e._v("Ingress只能通过Annotations 进行设置。并且需要确保　Ingress Controller 启动时， 启用了 Annotations 选项")]),e._v(" "),s("p",[s("strong",[e._v("需求和供给分离的优点")])]),e._v(" "),s("ol",[s("li",[e._v("Ingress Controller 放在独立命名空间中， 由管理员来管理。")]),e._v(" "),s("li",[e._v("Ingress 放在各应用的命名空间中， 由应用运维来设置。")])]),e._v(" "),s("p",[e._v("如此可以实现权限的隔离， 又可以提供配置能力。")]),e._v(" "),s("h3",{attrs:{id:"ingress-相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ingress-相关命令","aria-hidden":"true"}},[e._v("#")]),e._v(" Ingress 相关命令")]),e._v(" "),s("p",[e._v("获取Ingress")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl get ing --all-namespace "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 获取所有命名空间的Ingress")]),e._v("\n$ kubectl get ingress -n "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 获取test命名空间的Ingress")]),e._v("\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/189fab1845c5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("理解k8s 的 Ingress"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/kubernetes/ingress-nginx",target:"_blank",rel:"noopener noreferrer"}},[e._v("nginx-ingress 文档"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/feeea0bbd73e",target:"_blank",rel:"noopener noreferrer"}},[e._v("从零开始搭建Kubernetes集群（五、搭建K8S Ingress）"),s("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=n.exports}}]);