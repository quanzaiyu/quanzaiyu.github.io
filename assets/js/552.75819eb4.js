(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{920:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"使用-minikube-搭建实验环境的-kubernetes-集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-minikube-搭建实验环境的-kubernetes-集群","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Minikube 搭建实验环境的 Kubernetes 集群")]),e._v(" "),a("p",[e._v("准备工作:")]),e._v(" "),a("ul",[a("li",[e._v("BIOS中开启VT-X (如果是虚拟机注意设置)")]),e._v(" "),a("li",[e._v("科学上网 (由于GFW)")])]),e._v(" "),a("h2",{attrs:{id:"基本知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本知识","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本知识")]),e._v(" "),a("h3",{attrs:{id:"kubernetes-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-cluster","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes Cluster")]),e._v(" "),a("p",[e._v("Kubernetes将底层的计算资源连接在一起对外体现为一个计算集群，并将资源高度抽象化。部署应用时Kubernetes会以更高效的方式自动的将应用分发到集群内的机器上面，并调度运行。几个Kubernetes集群包含两种类型的资源：")]),e._v(" "),a("ul",[a("li",[e._v("Master节点：协调控制整个集群。")]),e._v(" "),a("li",[e._v("Nodes节点：运行应用的工作节点。")])]),e._v(" "),a("imgLink",{attrs:{src:"date/20190324/001.svg"}}),e._v(" "),a("p",[a("strong",[e._v("Master")]),e._v(" 负责管理集群。 master 协调集群中的所有活动，例如调度应用程序、维护应用程序的所需状态、扩展应用程序和滚动更新。")]),e._v(" "),a("p",[a("strong",[e._v("Node")]),e._v(" 是 Kubernetes 集群中的工作机器，可以是物理机或虚拟机。 每个工作节点都有一个 Kubelet，它是管理 节点 并与 Kubernetes Master 节点进行通信的代理。节点 上还应具有处理容器操作的工作，例如 Docker 或 rkt。一个 Kubernetes 工作集群至少有三个节点。")]),e._v(" "),a("p",[e._v("当部署应用的时候，我们通知Master节点启动应用容器。然后Master会调度这些应用将它们运行在Node节点上面。Node节点和Master节点通过Master节点暴露的Kubernetes API通信。当然我们也可以直接通过这些API和集群交互。")]),e._v(" "),a("h2",{attrs:{id:"virtualbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox","aria-hidden":"true"}},[e._v("#")]),e._v(" virtualbox")]),e._v(" "),a("p",[e._v("Minikube可以方便的在本地运行Kubernetes集群，方便日常开发，需要先安装virtualBox虚拟机。")]),e._v(" "),a("h3",{attrs:{id:"安装编译工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装编译工具","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装编译工具")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ yum update kernel -y "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 升级内核")]),e._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" kernel-headers kernel-devel-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" gcc "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" perl -y "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装编译工具")]),e._v("\n$ init 6 "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 重启系统")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 重启后")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -r "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看内核")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" -qa kernel\\*\nkernel-3.10.0-957.el7.x86_64\nkernel-tools-3.10.0-957.el7.x86_64\nkernel-tools-libs-3.10.0-957.el7.x86_64\nkernel-headers-3.10.0-957.10.1.el7.x86_64\nkernel-devel-3.10.0-957.10.1.el7.x86_64\nkernel-devel-3.10.0-957.el7.x86_64\n")])])]),a("h3",{attrs:{id:"安装-virtualbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-virtualbox","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 virtualbox")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/virtualbox.repo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("virtualbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nname"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Oracle Linux / RHEL / CentOS-\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v(" / \\"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$basearch")]),e._v(" - VirtualBox\nbaseurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://download.virtualbox.org/virtualbox/rpm/el/\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v("/\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$basearch")]),e._v("\nenabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\nrepo_gpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://www.virtualbox.org/download/oracle_vbox.asc\nEOF\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("virtualbox VirtualBox-5.2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置virtualbox")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" /sbin/vboxconfig\n")])])]),a("h2",{attrs:{id:"minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" minikube")]),e._v(" "),a("p",[e._v("Kubernetes提供了一个轻量级的 "),a("a",{attrs:{href:"https://github.com/kubernetes/minikube",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minikube"),a("OutboundLink")],1),e._v(" 应用，利用它我们可以很容器的创建一个只包含一个Node节点的Kubernetes Cluster用于日常的开发测试。")]),e._v(" "),a("h3",{attrs:{id:"安装-minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 minikube")]),e._v(" "),a("p",[e._v("方法一: 直接使用curl安装")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" \\\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" \\\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" minikube /usr/local/bin/\n")])])]),a("p",[e._v("方法二: 使用wget先下载再安装")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/kubernetes/minikube/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub binary"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://storage.googleapis.com/minikube/releases/v0.35.0/minikube-linux-amd64\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" minikube-linux-amd64 minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x minikube "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" minikube /usr/local/bin/\n")])])]),a("p",[e._v("验证安装")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube version\n")])])]),a("h2",{attrs:{id:"kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" kubectl")]),e._v(" "),a("p",[e._v("Minikube要正常使用，还必须安装kubectl，并且放在PATH里面。kubectl是一个通过Kubernetes API和Kubernetes集群交互的命令行工具。")]),e._v(" "),a("h3",{attrs:{id:"安装-kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 kubectl")]),e._v(" "),a("p",[e._v("方法一: 使用yum安装")]),e._v(" "),a("p",[e._v("官方镜像")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/kubernetes.repo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nname"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes\nbaseurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64\nenabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\nrepo_gpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg\nEOF\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes kubectl\n")])])]),a("p",[e._v("阿里云镜像")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/kubernetes.repo\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubernetes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nname"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes\nbaseurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\nrepo_gpgcheck"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgkey"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes kubectl\n")])])]),a("p",[e._v("方法二: 使用wget先下载再安装")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://storage.googleapis.com/kubernetes-release/release/v1.5.1/bin/linux/amd64/kubectl\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x kubectl\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" kubectl /usr/local/bin/kubectl\n")])])]),a("p",[e._v("验证安装")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl version\n")])])]),a("h2",{attrs:{id:"换源拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#换源拉取镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 换源拉取镜像")]),e._v(" "),a("p",[e._v("在进行下一节部署具体应用前我们先要做一件事情。Kubernetes在部署容器应用的时候会先拉一个pause镜像，这个是一个基础容器，主要是负责网络部分的功能的，具体这里不展开讨论。最关键的是Kubernetes里面镜像默认都是从Google的镜像仓库拉的（就跟docker默认从docker hub拉的一样），但是因为GFW的原因，中国用户是访问不了Google的镜像仓库gcr.io的（如果你可以ping通，那恭喜你）。庆幸的是这个镜像被传到了docker hub上面，虽然中国用户访问后者也非常艰难，但通过一些加速器之类的还是可以pull下来的。如果没有VPN等科学上网的工具的话，可以先从 aliyuncs.com 中拉取pause, 将其打上标签, 这样Kubernetes VM就不会从gcr.io拉镜像了，而是会直接使用本地的镜像。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 登录到我们的Kubernetes VM里面去")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 从阿里云拉取容器")]),e._v("\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.2.24\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.2.6\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将阿里云拉取的容器打标签")]),e._v("\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.13.4 k8s.gcr.io/kube-apiserver:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.13.4 k8s.gcr.io/kube-controller-manager:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.13.4 k8s.gcr.io/kube-scheduler:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.13.4 k8s.gcr.io/kube-proxy:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1 k8s.gcr.io/pause:3.1\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.2.24 k8s.gcr.io/etcd:3.2.24\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.2.6 k8s.gcr.io/coredns:1.2.6\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除阿里云拉取的容器")]),e._v("\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.2.24\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.2.6\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 退出 minikube")]),e._v("\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("exit")]),e._v("\n")])])]),a("h2",{attrs:{id:"启动-minikube"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动 minikube")]),e._v(" "),a("p",[e._v("启动 Kubernetes Cluster，这里使用的driver是Virtualbox")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ minikube start --vm-driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("virtualbox\no   minikube v0.34.1 on linux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Configuring local "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" environment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Creating none VM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CPUs"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2, Memory"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2048MB, Disk"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("20000MB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minikube"')]),e._v(" IP address is 172.17.0.70\n-   Configuring Docker as the container runtime "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Preparing Kubernetes environment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n@   Downloading kubeadm v1.13.3\n@   Downloading kubelet v1.13.3\n-   Pulling images required by Kubernetes v1.13.3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Launching Kubernetes v1.13.3 using kubeadm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Configuring cluster permissions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Verifying component health "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n+   kubectl is now configured to use "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minikube"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("   Done"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" Thank you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" using minikube"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n")])])]),a("h2",{attrs:{id:"测试集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试集群","aria-hidden":"true"}},[e._v("#")]),e._v(" 测试集群")]),e._v(" "),a("p",[e._v("查看集群信息")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl cluster-info\nKubernetes master is running at https://172.17.0.21:8443\nTo further debug and diagnose cluster problems, use "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl cluster-info dump'")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),a("p",[e._v("查看当前可用的Node, 使用Minikube创建的cluster只有一个Node节点")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get nodes\nNAME       STATUS   ROLES    AGE     VERSION\nminikube   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   7m24s   v1.13.3\n")])])]),a("p",[e._v("至此，我们已经用Minikube创建了一个Kubernetes Cluster。")]),e._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/",target:"_blank",rel:"noopener noreferrer"}},[e._v("生产级别的容器编排系统 自动化的容器部署、扩展和管理"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://docs.kubernetes.org.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes中文社区 | 中文文档"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://time-track.cn/kubernetes-trial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes初体验 - 时间轨迹"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://time-track.cn/Kubernetes-resources-summaries.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes架构及资源关系简单总结"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/64ed63594485",target:"_blank",rel:"noopener noreferrer"}},[e._v("简单Kubernetes的Minikube安装"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("互动教程")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/cluster-interactive/",target:"_blank",rel:"noopener noreferrer"}},[e._v("互动教程 - 创建集群"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/expose-interactive/",target:"_blank",rel:"noopener noreferrer"}},[e._v("互动教程 - 应用外部可见"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("问题解决")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/mylinux/p/5612168.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决centos7安装wmwaretools找不到kernel header"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/jinguangliu/article/details/82792617",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes：如何解决从k8s.gcr.io拉取镜像失败问题"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=r.exports}}]);