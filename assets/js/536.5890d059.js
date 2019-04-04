(window.webpackJsonp=window.webpackJsonp||[]).push([[536],{747:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-的标准化部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-的标准化部署","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes 的标准化部署")]),e._v(" "),s("p",[e._v("本来已经使用 Kubeadm 部署好了 Kubernetes 集群, 不过出于想要深入了解原理的想法, 还是想要手动部署一下 Kubernetes, 这里面一大堆坑, 边搭建边记录, 或许完成这篇文章需要一段时间了。")]),e._v(" "),s("h2",{attrs:{id:"准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[e._v("#")]),e._v(" 准备工作")]),e._v(" "),s("p",[e._v("配置三台CentOS虚拟机, 分别为:")]),e._v(" "),s("ul",[s("li",[e._v("192.168.126.129 k8s-master")]),e._v(" "),s("li",[e._v("192.168.126.130 k8s-node1")]),e._v(" "),s("li",[e._v("192.168.126.131 k8s-node2")])]),e._v(" "),s("h3",{attrs:{id:"配置主机互通"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置主机互通","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置主机互通")]),e._v(" "),s("p",[e._v("所有节点配置hosts, 使三台机子能够互通")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/hosts\n192.168.126.129 k8s-master\n192.168.126.130 k8s-node1\n192.168.126.131 k8s-node2\nEOF\n")])])]),s("h3",{attrs:{id:"关闭防火墙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙","aria-hidden":"true"}},[e._v("#")]),e._v(" 关闭防火墙")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ systemctl stop firewalld\n$ systemctl disable firewalld\n")])])]),s("h3",{attrs:{id:"禁用selinux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用selinux","aria-hidden":"true"}},[e._v("#")]),e._v(" 禁用SELinux")]),e._v(" "),s("p",[e._v("临时生效")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ setenforce 0\n")])])]),s("p",[e._v("永久生效")]),e._v(" "),s("p",[e._v("编辑文件 "),s("code",[e._v("/etc/selinux/config")]),e._v("，将SELINUX修改为disabled，如下：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/selinux/config\nSELINUX"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("disabled\n")])])]),s("h3",{attrs:{id:"关闭系统swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭系统swap","aria-hidden":"true"}},[e._v("#")]),e._v(" 关闭系统Swap")]),e._v(" "),s("p",[e._v("Kubernetes 1.8开始要求关闭系统的Swap，如果不关闭，默认配置下kubelet将无法启动。方法一,通过kubelet的启动参数–fail-swap-on=false更改这个限制。方法二,关闭系统的Swap。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ swapoff -a\n")])])]),s("p",[e._v("修改 "),s("code",[e._v("/etc/fstab")]),e._v(" 文件，注释掉SWAP的自动挂载，使用 "),s("code",[e._v("free -m")]),e._v(" 确认swap已经关闭。")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#注释掉swap分区")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/.*swap.*/#&/'")]),e._v(" /etc/fstab\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /etc/fstab\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#/dev/mapper/centos-swap swap                    swap    defaults        0 0")]),e._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" -m\n              total        used        "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("      shared  buff/cache   available\nMem:            962         154         446           6         361         612\nSwap:             0           0           0\n")])])]),s("h2",{attrs:{id:"检查docker的安装情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查docker的安装情况","aria-hidden":"true"}},[e._v("#")]),e._v(" 检查Docker的安装情况")]),e._v(" "),s("p",[e._v("检查系统是否已经安装Docker, 若已安装, 需要将其卸载:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" -qa "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" docker\ndocker-client-1.13.1-94.gitb2f74b2.el7.centos.x86_64\ndocker-common-1.13.1-94.gitb2f74b2.el7.centos.x86_64\ndocker-1.13.1-94.gitb2f74b2.el7.centos.x86_64\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rpm")]),e._v(" -e docker-client-1.13.1-94.gitb2f74b2.el7.centos.x86_64 docker-common-1.13.1-94.gitb2f74b2.el7.centos.x86_64 docker-1.13.1-94.gitb2f74b2.el7.centos.x86_64\n")])])]),s("h2",{attrs:{id:"安装kubernetes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装kubernetes")]),e._v(" "),s("p",[e._v("所有节点配置kubernetes的yum源, 并安装kubernetes:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/yum.repos.d/kubernetes.repo "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("EOF\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF")]),e._v("\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y --enablerepo"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes kubernetes\n")])])]),s("p",[e._v("先看看systemd服务文件, 查看kube-apiserver的配置")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" /lib/systemd/system/kube-apiserver.service\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nDescription"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Kubernetes API Server\nDocumentation"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://github.com/GoogleCloudPlatform/kubernetes\nAfter"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("network.target\nAfter"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("etcd.service\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nEnvironmentFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("-/etc/kubernetes/config\nEnvironmentFile"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("-/etc/kubernetes/apiserver\nUser"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube\nExecStart"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/kube-apiserver \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_LOGTOSTDERR")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_LOG_LEVEL")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_ETCD_SERVERS")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_API_ADDRESS")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_API_PORT")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBELET_PORT")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_ALLOW_PRIV")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_SERVICE_ADDRESSES")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_ADMISSION_CONTROL")]),e._v(" \\\n\t    "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KUBE_API_ARGS")]),e._v("\nRestart"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("on-failure\nType"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("notify\nLimitNOFILE"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("65536\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nWantedBy"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])]),s("p",[e._v("可以看到, kube-apiserver 依赖于 etcd 服务, 其环境变量配置文件位于 "),s("code",[e._v("/etc/kubernetes/config")]),e._v(" 和 "),s("code",[e._v("/etc/kubernetes/apiserver")])]),e._v(" "),s("ul",[s("li",[e._v("After=etcd.service")]),e._v(" "),s("li",[e._v("EnvironmentFile=-/etc/kubernetes/config")]),e._v(" "),s("li",[e._v("EnvironmentFile=-/etc/kubernetes/apiserver")]),e._v(" "),s("li",[e._v("ExecStart 为启动时直接执行的命令, "),s("code",[e._v("$xxx")]),e._v(" 为其启动参数")])]),e._v(" "),s("h2",{attrs:{id:"安装etcd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装etcd","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装etcd")]),e._v(" "),s("p",[e._v("在开始安装 Kubernetes 之前，需要先将一些必要系统创建完成，在 Kubernetes 集群中使用了 Etcd 作为数据中心，Kubernetes 会将大部分信息储存于 Etcd 上，来提供给其他节点索取，以确保整个集群运作与沟通正常。")]),e._v(" "),s("p",[e._v("在master节点上安装etcd服务")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ yum list "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" etcd\netcd.x86_64                                3.3.11-2.el7.centos         @extras\n$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -y etcd\n")])])]),s("h2",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改配置")]),e._v(" "),s("p",[e._v("所有节点:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/kubernetes/config\nKUBE_MASTER"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--master=http://k8s-master:8080"')]),e._v("\nKUBE_ETCD_SERVERS"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--etcd_servers=http://k8s-master:4001"')]),e._v("\n")])])]),s("p",[e._v("master节点:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" /etc/kubernetes/apiserver\nKUBE_API_ADDRESS"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--insecure-bind-address=0.0.0.0"')]),e._v("\nKUBE_API_PORT"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--port=8080"')]),e._v("\nKUBELET_PORT"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"--kubelet-port=10250"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# KUBE_ETCD_SERVERS="--etcd-servers=http://k8s-master:4001"')]),e._v("\n")])])]),s("h2",{attrs:{id:"启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动服务")]),e._v(" "),s("p",[e._v("我们可以编写一个shell脚本, 方便启动所有需要的服务")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("vim")]),e._v(" start.sh\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" SERVICE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" etcd kube-apiserver kube-controller-manager kube-scheduler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n        systemctl restart "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SERVICE")]),e._v("\n        systemctl "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("enable")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SERVICE")]),e._v("\n        systemctl status "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$SERVICE")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" 744 start.sh\n$ ./start.sh\n")])])]),s("p",[e._v("检测是否成功启动")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" -efww "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" kube\n")])])]),s("p",[e._v("如果列出3个kube相关的进程则启动成功")]),e._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.kubernetes.org.cn/4963.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS 使用二进制部署 Kubernetes 1.13集群"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/yjk13703623757/article/details/80158634",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS7设置EPEL源、docker-ce-stable源、kubernetes源、ceph源"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/devopser/article/details/79953440",target:"_blank",rel:"noopener noreferrer"}},[e._v("(一)超详细纯手工搭建kubernetes(k8s)集群 - 预先准备环境"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/ericnie/p/6886016.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("折腾kubernetes各种问题汇总"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://time-track.cn/deploy-kubernetes-step-by-step-on-trusty-section-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu16.04手动部署Kubernetes(1)——Master和Node部署"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=r.exports}}]);