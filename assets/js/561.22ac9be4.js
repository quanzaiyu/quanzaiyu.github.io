(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{767:function(a,e,t){"use strict";t.r(e);var s=t(1),n=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes-核心概念-命名空间-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-命名空间-namespace","aria-hidden":"true"}},[a._v("#")]),a._v(" Kubernetes 核心概念 - 命名空间 (Namespace)")]),a._v(" "),t("p",[a._v("命名空间为Kubernetes集群提供虚拟的隔离作用，Kubernetes集群初始有两个命名空间，分别是默认命名空间default和系统命名空间kube-system，除此以外，管理员可以可以创建新的命名空间满足需要。")]),a._v(" "),t("p",[a._v("在一个Kubernetes集群中可以使用namespace创建多个“虚拟集群”，这些namespace之间可以完全隔离，也可以通过某种方式，让一个namespace中的service可以访问到其他的namespace中的服务，这需要通过RBAC定义集群级别的角色来实现。")]),a._v(" "),t("p",[a._v("Kubernetes集群在启动后，如果不特别指明Namespace，则用户创建的Pod、RC、Service都被系统创建到 default 的Namespace中。")]),a._v(" "),t("p",[t("strong",[a._v("哪些情况下适合使用多个 namespace")])]),a._v(" "),t("p",[a._v("因为namespace可以提供独立的命名空间，因此可以实现部分的环境隔离。当你的项目和人员众多的时候可以考虑根据项目属性，例如生产、测试、开发划分不同的namespace。")]),a._v(" "),t("h2",{attrs:{id:"获取集群中的所有-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取集群中的所有-namespace","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取集群中的所有 Namespace")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl get namespaces\n$ kubectl get ns\n")])])]),t("p",[a._v("集群中默认会有"),t("code",[a._v("default")]),a._v("和"),t("code",[a._v("kube-system")]),a._v("这两个namespace。")]),a._v(" "),t("p",[a._v("在执行"),t("code",[a._v("kubectl")]),a._v("命令时可以使用"),t("code",[a._v("-n")]),a._v("指定操作的namespace。")]),a._v(" "),t("p",[a._v("用户的普通应用默认是在"),t("code",[a._v("default")]),a._v("下，与集群管理相关的为整个集群提供服务的应用一般部署在"),t("code",[a._v("kube-system")]),a._v("的namespace下，例如我们在安装kubernetes集群时部署的"),t("code",[a._v("kubedns")]),a._v("、"),t("code",[a._v("heapseter")]),a._v("、"),t("code",[a._v("EFK")]),a._v("等都是在这个namespace下面。")]),a._v(" "),t("p",[a._v("另外，并不是所有的资源对象都会对应namespace，"),t("code",[a._v("node")]),a._v("和"),t("code",[a._v("persistentVolume")]),a._v("就不属于任何namespace。")]),a._v(" "),t("h3",{attrs:{id:"创建命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建命名空间","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建命名空间")]),a._v(" "),t("p",[a._v("比如创建一个 development 的命名空间, 首先撰写 yaml 文件, 如下:")]),a._v(" "),t("p",[t("code",[a._v("test.yaml")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Namespace\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl create -f ./test.yaml\nnamespace/test created\n")])])]),t("p",[a._v("也可直接使用命令创建:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl create ns traefik "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or `kubectl create namespace traefik`")]),a._v("\nnamespace/traefik created\n")])])]),t("h2",{attrs:{id:"指定命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定命名空间","aria-hidden":"true"}},[a._v("#")]),a._v(" 指定命名空间")]),a._v(" "),t("p",[a._v("在创建资源(Pod/RC/Service等)时使用 "),t("code",[a._v("namespace")]),a._v(" 字段指定命名空间, 若不指定默认使用 default 命名空间")]),a._v(" "),t("p",[t("code",[a._v("nginx.yaml")])]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("test\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("qzy\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" test\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("test\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hostPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8081")]),a._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl create -f ./nginx.yaml\npod/nginx-test created\n")])])]),t("imgLink",{attrs:{src:"date/20190417/001.png"}}),a._v(" "),t("h2",{attrs:{id:"查询命名空间中的资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询命名空间中的资源","aria-hidden":"true"}},[a._v("#")]),a._v(" 查询命名空间中的资源")]),a._v(" "),t("p",[a._v("直接使用 "),t("code",[a._v("kubectl get pods")]),a._v(" 时，默认使用的是查询 "),t("code",[a._v("namespace=default")]),a._v(" 的，加上 "),t("code",[a._v("-n")]),a._v(" 参数可查询指定命名空间中的资源。同理创建RC/Service也是一样的。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl get pods -n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v("\n$ kubectl get pods --all-namespaces  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查询所有命名空间的pod")]),a._v("\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/dream_broken/article/details/53128595",target:"_blank",rel:"noopener noreferrer"}},[a._v("kubenetes学习3--Namespace命名空间"),t("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.default=n.exports}}]);