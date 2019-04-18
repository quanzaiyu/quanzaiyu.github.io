(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{769:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-核心概念-服务-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-服务-service","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes 核心概念 - 服务 (Service)")]),e._v(" "),s("p",[e._v("在Kubernetes的世界里，虽然每个Pod都会被分配一个单独的IP地址，但这个IP地址会随着Pod的销毁而消失，这就引出一个问题：如果有一组Pod组成一个集群来提供服务，那么如何来访问它呢？Service！")]),e._v(" "),s("p",[e._v("一个Service可以看作一组提供相同服务的Pod的对外访问接口，Service作用于哪些Pod是通过Label Selector来定义的。")]),e._v(" "),s("ul",[s("li",[e._v("拥有一个指定的名字（比如my-mysql-server）；")]),e._v(" "),s("li",[e._v("拥有一个虚拟IP（ClusterIP、ServiceIP或VIP）和端口号，销毁之前不会改变，只能内网访问；")]),e._v(" "),s("li",[e._v("能够提供某种远程服务能力；")]),e._v(" "),s("li",[e._v("被映射到了提供这种服务能力的一组容器应用上；")])]),e._v(" "),s("p",[e._v("如果Service要提供外网服务，需指定公共IP和NodePort，或外部负载均衡器；")]),e._v(" "),s("p",[s("strong",[e._v("NodePort")])]),e._v(" "),s("p",[e._v("系统会在Kubernetes集群中的每个Node上打开一个主机的真实端口，这样，能够访问Node的客户端就能通过这个端口访问到内部的Service了")]),e._v(" "),s("h3",{attrs:{id:"定义-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义-service","aria-hidden":"true"}},[e._v("#")]),e._v(" 定义 Service")]),e._v(" "),s("p",[e._v("一个 "),s("code",[e._v("Service")]),e._v(" 在 Kubernetes 中是一个 REST 对象，和 "),s("code",[e._v("Pod")]),e._v(" 类似。 像所有的 REST 对象一样， "),s("code",[e._v("Service")]),e._v(" 定义可以基于 POST 方式，请求 apiserver 创建新的实例。 例如，假定有一组 "),s("code",[e._v("Pod")]),e._v("，它们对外暴露了 9376 端口，同时还被打上 "),s("code",[e._v('"app=MyApp"')]),e._v(" 标签。")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" MyApp\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" TCP\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("9376")]),e._v("\n")])])]),s("p",[e._v("上述配置将创建一个名称为 “my-service” 的 "),s("code",[e._v("Service")]),e._v(" 对象，它会将请求代理到使用 TCP 端口 9376，并且具有标签 "),s("code",[e._v('"app=MyApp"')]),e._v(" 的 "),s("code",[e._v("Pod")]),e._v(" 上。 这个 "),s("code",[e._v("Service")]),e._v(" 将被指派一个 IP 地址（通常称为 “Cluster IP”），它会被服务的代理使用（见下面）。 该 "),s("code",[e._v("Service")]),e._v(" 的 selector 将会持续评估，处理结果将被 POST 到一个名称为 “my-service” 的 "),s("code",[e._v("Endpoints")]),e._v(" 对象上。")]),e._v(" "),s("p",[e._v("需要注意的是， "),s("code",[e._v("Service")]),e._v(" 能够将一个接收端口映射到任意的 "),s("code",[e._v("targetPort")]),e._v("。 默认情况下，"),s("code",[e._v("targetPort")]),e._v(" 将被设置为与 "),s("code",[e._v("port")]),e._v(" 字段相同的值。 可能更有趣的是，"),s("code",[e._v("targetPort")]),e._v(" 可以是一个字符串，引用了 backend "),s("code",[e._v("Pod")]),e._v(" 的一个端口的名称。 但是，实际指派给该端口名称的端口号，在每个 backend "),s("code",[e._v("Pod")]),e._v(" 中可能并不相同。 对于部署和设计 "),s("code",[e._v("Service")]),e._v(" ，这种方式会提供更大的灵活性。 例如，可以在 backend 软件下一个版本中，修改 Pod 暴露的端口，并不会中断客户端的调用。")]),e._v(" "),s("p",[e._v("Kubernetes "),s("code",[e._v("Service")]),e._v(" 能够支持 "),s("code",[e._v("TCP")]),e._v(" 和 "),s("code",[e._v("UDP")]),e._v(" 协议，默认 "),s("code",[e._v("TCP")]),e._v(" 协议。")])])},[],!1,null,null,null);t.default=r.exports}}]);