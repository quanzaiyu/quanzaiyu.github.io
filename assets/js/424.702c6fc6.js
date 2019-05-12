(window.webpackJsonp=window.webpackJsonp||[]).push([[424],{647:function(e,a,s){"use strict";s.r(a);var t=s(1),n=Object(t.a)({},function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用-minikube-搭建实验环境的-kubernetes-集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-minikube-搭建实验环境的-kubernetes-集群","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用 Minikube 搭建实验环境的 Kubernetes 集群")]),e._v(" "),s("p",[e._v("准备工作:")]),e._v(" "),s("ul",[s("li",[e._v("BIOS中开启VT-X (如果是虚拟机注意设置)")]),e._v(" "),s("li",[e._v("科学上网 (由于GFW)")])]),e._v(" "),s("h2",{attrs:{id:"virtualbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox","aria-hidden":"true"}},[e._v("#")]),e._v(" virtualbox")]),e._v(" "),s("p",[e._v("Minikube可以方便的在本地运行Kubernetes集群，方便日常开发，需要先安装virtualBox虚拟机。")]),e._v(" "),s("h3",{attrs:{id:"安装编译工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装编译工具","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装编译工具")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ yum update kernel -y "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 升级内核")]),e._v("\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" kernel-headers kernel-devel-"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -r"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" gcc "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" perl -y "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装编译工具")]),e._v("\n$ init 6 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 重启系统")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 重启后")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("uname")]),e._v(" -r "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看内核")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" -qa kernel\\*\nkernel-3.10.0-957.el7.x86_64\nkernel-tools-3.10.0-957.el7.x86_64\nkernel-tools-libs-3.10.0-957.el7.x86_64\nkernel-headers-3.10.0-957.10.1.el7.x86_64\nkernel-devel-3.10.0-957.10.1.el7.x86_64\nkernel-devel-3.10.0-957.el7.x86_64\n")])])]),s("p",[e._v("参考: "),s("a",{attrs:{href:"https://www.cnblogs.com/mylinux/p/5612168.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("解决 centos7 找不到kernel header"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"安装-virtualbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-virtualbox","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 virtualbox")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/virtualbox.repo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("virtualbox"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Oracle Linux / RHEL / CentOS-\\"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v(" / \\"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$basearch")]),e._v(" - VirtualBox\nbaseurl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://download.virtualbox.org/virtualbox/rpm/el/\\"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$releasever")]),e._v("/\\"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$basearch")]),e._v("\nenabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\nrepo_gpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://www.virtualbox.org/download/oracle_vbox.asc\nEOF\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("virtualbox VirtualBox-5.2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置virtualbox")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" /sbin/vboxconfig\n")])])]),s("h2",{attrs:{id:"minikube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" minikube")]),e._v(" "),s("p",[e._v("Kubernetes提供了一个轻量级的 "),s("a",{attrs:{href:"https://github.com/kubernetes/minikube",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minikube"),s("OutboundLink")],1),e._v(" 应用，利用它我们可以很容器的创建一个只包含一个Node节点的Kubernetes Cluster用于日常的开发测试。")]),e._v(" "),s("h3",{attrs:{id:"安装-minikube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 minikube")]),e._v(" "),s("p",[e._v("方法一: 直接使用curl安装")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" \\\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x minikube "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" \\\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" minikube /usr/local/bin/\n")])])]),s("p",[e._v("方法二: 使用wget先下载再安装")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/kubernetes/minikube/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub binary"),s("OutboundLink")],1)]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://storage.googleapis.com/minikube/releases/v0.35.0/minikube-linux-amd64\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" minikube-linux-amd64 minikube "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x minikube "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" minikube /usr/local/bin/\n")])])]),s("p",[e._v("验证安装")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ minikube version\n")])])]),s("h2",{attrs:{id:"kubectl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" kubectl")]),e._v(" "),s("p",[e._v("Minikube要正常使用，还必须安装kubectl，并且放在PATH里面。kubectl是一个通过Kubernetes API和Kubernetes集群交互的命令行工具。")]),e._v(" "),s("h3",{attrs:{id:"安装-kubectl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 kubectl")]),e._v(" "),s("p",[e._v("方法一: 使用yum安装")]),e._v(" "),s("p",[e._v("官方镜像")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/kubernetes.repo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes\nbaseurl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64\nenabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\nrepo_gpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg\nEOF\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes kubectl\n")])])]),s("p",[e._v("阿里云镜像")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/yum.repos.d/kubernetes.repo\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("kubernetes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nname"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes\nbaseurl"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\nrepo_gpgcheck"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1\ngpgkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes kubectl\n")])])]),s("p",[e._v("方法二: 使用wget先下载再安装")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://storage.googleapis.com/kubernetes-release/release/v1.5.1/bin/linux/amd64/kubectl\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x kubectl\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" kubectl /usr/local/bin/kubectl\n")])])]),s("p",[e._v("验证安装")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl version\n")])])]),s("h2",{attrs:{id:"换源拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#换源拉取镜像","aria-hidden":"true"}},[e._v("#")]),e._v(" 换源拉取镜像")]),e._v(" "),s("p",[e._v("在进行下一节部署具体应用前我们先要做一件事情。Kubernetes在部署容器应用的时候会先拉一个pause镜像，这个是一个基础容器，主要是负责网络部分的功能的，具体这里不展开讨论。最关键的是Kubernetes里面镜像默认都是从Google的镜像仓库拉的（就跟docker默认从docker hub拉的一样），但是因为GFW的原因，中国用户是访问不了Google的镜像仓库gcr.io的（如果你可以ping通，那恭喜你）。庆幸的是这个镜像被传到了docker hub上面，虽然中国用户访问后者也非常艰难，但通过一些加速器之类的还是可以pull下来的。如果没有VPN等科学上网的工具的话，可以先从 aliyuncs.com 中拉取pause, 将其打上标签, 这样Kubernetes VM就不会从gcr.io拉镜像了，而是会直接使用本地的镜像。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ minikube "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 登录到我们的Kubernetes VM里面去")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 从阿里云拉取容器")]),e._v("\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.13.4\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.2.24\n$ docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.2.6\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将阿里云拉取的容器打标签")]),e._v("\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.13.4 k8s.gcr.io/kube-apiserver:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.13.4 k8s.gcr.io/kube-controller-manager:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.13.4 k8s.gcr.io/kube-scheduler:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.13.4 k8s.gcr.io/kube-proxy:v1.13.4\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1 k8s.gcr.io/pause:3.1\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.2.24 k8s.gcr.io/etcd:3.2.24\n$ docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.2.6 k8s.gcr.io/coredns:1.2.6\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除阿里云拉取的容器")]),e._v("\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.13.4\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.2.24\n$ docker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.2.6\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 退出 minikube")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("exit")]),e._v("\n")])])]),s("h2",{attrs:{id:"启动-minikube"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-minikube","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动 minikube")]),e._v(" "),s("p",[e._v("启动 Kubernetes Cluster，这里使用的driver是Virtualbox")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ minikube start --vm-driver"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("virtualbox\no   minikube v0.34.1 on linux "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("amd64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Configuring local "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("host")]),e._v(" environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   Creating none VM "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("CPUs"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2, Memory"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2048MB, Disk"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("20000MB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minikube"')]),e._v(" IP address is 172.17.0.70\n-   Configuring Docker as the container runtime "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Preparing Kubernetes environment "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n@   Downloading kubeadm v1.13.3\n@   Downloading kubelet v1.13.3\n-   Pulling images required by Kubernetes v1.13.3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Launching Kubernetes v1.13.3 using kubeadm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Configuring cluster permissions "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n-   Verifying component health "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n+   kubectl is now configured to use "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"minikube"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("   Done"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" Thank you "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" using minikube"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n")])])]),s("h2",{attrs:{id:"测试集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试集群","aria-hidden":"true"}},[e._v("#")]),e._v(" 测试集群")]),e._v(" "),s("p",[e._v("查看集群信息")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl cluster-info\nKubernetes master is running at https://172.17.0.21:8443\nTo further debug and diagnose cluster problems, use "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl cluster-info dump'")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),s("p",[e._v("查看当前可用的Node, 使用Minikube创建的cluster只有一个Node节点")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ kubectl get nodes\nNAME       STATUS   ROLES    AGE     VERSION\nminikube   Ready    "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   7m24s   v1.13.3\n")])])]),s("p",[e._v("至此，我们已经用Minikube创建了一个Kubernetes Cluster。")])])},[],!1,null,null,null);a.default=n.exports}}]);