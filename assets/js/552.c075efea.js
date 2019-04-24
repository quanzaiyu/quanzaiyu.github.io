(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{933:function(e,s,t){"use strict";t.r(s);var a=t(1),n=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubectl-命令大全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-命令大全","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubectl 命令大全")]),e._v(" "),t("p",[e._v("本文仍然使用 "),t("code",[e._v("ksys")]),e._v(" 命令作为 "),t("code",[e._v("kubectl -n kube-system")]),e._v(" 的缩写 ("),t("code",[e._v("alias ksys='kubectl -n kube-system'")]),e._v(")")]),e._v(" "),t("h2",{attrs:{id:"查看集群信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看集群信息","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看集群信息")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys cluster-info\nKubernetes master is running at https://192.168.126.129:6443\nKubeDNS is running at https://192.168.126.129:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'kubectl cluster-info dump'")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])]),t("p",[e._v("查看节点信息")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl get nodes\n$ kubectl describe node\n")])])]),t("h2",{attrs:{id:"显示-kubeconfig-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示-kubeconfig-配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 显示 kubeconfig 配置")]),e._v(" "),t("p",[e._v("显示合并后的 kubeconfig 配置")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl config view\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: DATA+OMITTED\n    server: https://172.18.50.200:6443\n  name: kubernetes\ncontexts:\n- context:\n    cluster: kubernetes\n    user: kubernetes-admin\n  name: kubernetes-admin@kubernetes\ncurrent-context: kubernetes-admin@kubernetes\nkind: Config\npreferences: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nusers:\n- name: kubernetes-admin\n  user:\n    client-certificate-data: REDACTED\n    client-key-data: REDACTED\n")])])]),t("h2",{attrs:{id:"创建资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建资源")]),e._v(" "),t("p",[e._v("Kubernetes 的清单文件可以使用 json 或 yaml 格式定义。可以以 .yaml、.yml、或者 .json 为扩展名, 通过 "),t("code",[e._v("create")]),e._v("/"),t("code",[e._v("apply")]),e._v(" 命令创建。")]),e._v(" "),t("ul",[t("li",[e._v("create: 没有创建则创建, 若已创建则报错")]),e._v(" "),t("li",[e._v("apply: 创建和更新, 已创建也不会报错")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl create -f ./my-manifest.yaml           "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建资源")]),e._v("\n$ kubectl create ns "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建命名空间test")]),e._v("\n$ kubectl create -f ./my1.yaml -f ./my2.yaml     "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用多个文件创建资源")]),e._v("\n$ kubectl create -f ./dir                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用目录下的所有清单文件来创建资源")]),e._v("\n$ kubectl create -f https://git.io/vPieo         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 url 来创建资源")]),e._v("\n$ kubectl run nginx --image"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("nginx                "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 启动一个 nginx 实例")]),e._v("\n$ kubectl explain pods,svc                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 获取 pod 和 svc 的文档")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 从 stdin 输入中创建多个 YAML 对象")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl create -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-sleep\nspec:\n  containers:\n  - name: busybox\n    image: busybox\n    args:\n    - "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v("\n    - "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1000000"')]),e._v("\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox-sleep-less\nspec:\n  containers:\n  - name: busybox\n    image: busybox\n    args:\n    - "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sleep")]),e._v("\n    - "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1000"')]),e._v("\nEOF\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建包含几个 key 的 Secret")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<<")]),e._v("EOF "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl create -f -\napiVersion: v1\nkind: Secret\nmetadata:\n  name: mysecret\ntype: Opaque\ndata:\n  password: "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"s33msi4"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n  username: "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"jane"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\nEOF\n")])])]),t("p",[e._v("使用可视化管理后台创建资源:")]),e._v(" "),t("imgLink",{attrs:{src:"date/20190417/002.png"}}),e._v(" "),t("h2",{attrs:{id:"显示和查找资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示和查找资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 显示和查找资源")]),e._v(" "),t("h3",{attrs:{id:"node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node","aria-hidden":"true"}},[e._v("#")]),e._v(" Node")]),e._v(" "),t("p",[e._v("查看当前可用的Node")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys get nodes\nNAME         STATUS   ROLES    AGE     VERSION\nk8s-master   Ready    master   3h29m   v1.14.0\n")])])]),t("p",[e._v("使用下面命令输出节点详细信息")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys describe nodes k8s-node2\n")])])]),t("h3",{attrs:{id:"service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service","aria-hidden":"true"}},[e._v("#")]),e._v(" service")]),e._v(" "),t("p",[e._v("查看 service")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys get svc "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或 `ksys get service`")]),e._v("\nNAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("                  AGE\nkube-dns               ClusterIP   10.96.0.10      "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        53/UDP,53/TCP,9153/TCP   3h27m\nkubernetes-dashboard   NodePort    10.100.16.166   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        443:30443/TCP            3h26m\n\n$ ksys get services --sort-by"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(".metadata.name "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# List Services Sorted by Name")]),e._v("\n")])])]),t("p",[e._v("通过 "),t("code",[e._v("-o wide")]),e._v(" 参数输出更多信息")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys get services -o wide\nNAME                   TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("S"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("                                     AGE    SELECTOR\nheapster               ClusterIP   10.100.63.129    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        80/TCP                                      4d4h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("heapster\nkube-dns               ClusterIP   10.96.0.10       "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        53/UDP,53/TCP,9153/TCP                      4d5h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-dns\nkubernetes-dashboard   NodePort    10.106.213.160   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        443:30000/TCP                               4d4h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kubernetes-dashboard\nmetrics-server         ClusterIP   10.111.28.233    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        443/TCP                                     4d4h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("metrics-server\nmonitoring-grafana     NodePort    10.101.173.240   "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        80:30006/TCP                                4d4h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("grafana\nmonitoring-influxdb    ClusterIP   10.102.109.50    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        8086/TCP                                    4d4h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("influxdb\ntiller-deploy          ClusterIP   10.103.22.243    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        44134/TCP                                   4d3h   app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("helm,name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tiller\ntraefik-web-ui         NodePort    10.103.163.31    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("        80:30751/TCP,443:30750/TCP,8080:30011/TCP   4d4h   k8s-app"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("traefik-ingress-lb\n")])])]),t("h3",{attrs:{id:"pod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pod","aria-hidden":"true"}},[e._v("#")]),e._v(" pod")]),e._v(" "),t("p",[e._v("查看 pod")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys get po "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或 `ksys get pods`")]),e._v("\nNAME                                    READY   STATUS    RESTARTS   AGE\ncoredns-fb8b8dccf-5cxfw                 1/1     Running   0          3h32m\ncoredns-fb8b8dccf-dbzbf                 1/1     Running   0          3h32m\netcd-k8s-master                         1/1     Running   5          3h31m\nkube-apiserver-k8s-master               1/1     Running   5          3h31m\nkube-controller-manager-k8s-master      1/1     Running   4          3h31m\nkube-flannel-ds-amd64-bq94z             1/1     Running   0          3h31m\nkube-proxy-w4b6r                        1/1     Running   0          3h32m\nkube-scheduler-k8s-master               1/1     Running   5          3h31m\nkubernetes-dashboard-5f7b999d65-gw8tc   1/1     Running   0          3h31m\n\n$ kubectl get pods --all-namespaces             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列出所有 namespace 中的所有 pod")]),e._v("\n$ kubectl get pods --include-uninitialized      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列出该 namespace 中的所有 pod 包括未初始化的")]),e._v("\n$ ksys get pods --sort-by"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'.status.containerStatuses[0].restartCount'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 根据重启次数排序列出 pod")]),e._v("\n")])])]),t("p",[e._v("通过 "),t("code",[e._v("-o wide")]),e._v(" 参数输出更多信息")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys get pods -o wide\nNAME                                            READY     STATUS             RESTARTS   AGE       IP             NODE\ncoredns-78fcdf6894-m9kwr                        1/1       Running            1          20h       10.244.0.5     inspur2.ops.haodf.bj1\ncoredns-78fcdf6894-tgjn6                        1/1       Running            1          20h       10.244.0.4     inspur2.ops.haodf.bj1\netcd-inspur2.ops.haodf.bj1                      1/1       Running            1          20h       10.1.101.202   inspur2.ops.haodf.bj1\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),t("p",[e._v("查看某一个pod的配置")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl get pods/podname -n "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v(" -o yaml\n$ kubectl get pods/podname -n "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v(" -o json\n")])])]),t("p",[e._v("查看某一个pod的信息")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys describe pods etcd-k8s-master\nName:               etcd-k8s-master\nNamespace:          kube-system\nPriority:           2000000000\nPriorityClassName:  system-cluster-critical\nNode:               k8s-master/192.168.126.129\nStart Time:         Sun, 31 Mar 2019 15:07:17 +0800\nLabels:             component"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("etcd\n                    tier"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("control-plane\nAnnotations:        kubernetes.io/config.hash: 783c7b37e5d9d9e5bf6d4b5fe18a4bc4\n                    kubernetes.io/config.mirror: 783c7b37e5d9d9e5bf6d4b5fe18a4bc4\n                    kubernetes.io/config.seen: 2019-03-31T15:07:17.623010149+08:00\n                    kubernetes.io/config.source: "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("\nStatus:             Running\nIP:                 192.168.126.129\nContainers:\n  etcd:\n    Container ID:  docker://c25a8845bf0f773feeae78520e609bfa36dd30cdbca2fda6b6ff1101e4d1c582\n    Image:         k8s.gcr.io/etcd:3.3.10\n    Image ID:      docker://sha256:2c4adeb21b4ff8ed3309d0e42b6b4ae39872399f7b37e0856e673b13c4aba13d\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),t("h3",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[e._v("#")]),e._v(" deployment")]),e._v(" "),t("p",[e._v("查看 deployment")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys get deployment\nNAME                   READY   UP-TO-DATE   AVAILABLE   AGE\ncoredns                2/2     2            2           4d5h\nheapster               1/1     1            1           4d4h\nkubernetes-dashboard   1/1     1            1           4d4h\nmetrics-server         1/1     1            1           4d4h\nmonitoring-grafana     1/1     1            1           4d4h\nmonitoring-influxdb    1/1     1            1           4d4h\ntiller-deploy          1/1     1            1           4d3h\n")])])]),t("h2",{attrs:{id:"更新资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 更新资源")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl rolling-update frontend-v1 -f frontend-v2.json           "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 滚动更新 pod frontend-v1")]),e._v("\n$ kubectl rolling-update frontend-v1 frontend-v2 --image"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("image:v2  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新资源名称并更新镜像")]),e._v("\n$ kubectl rolling-update frontend --image"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("image:v2                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新 frontend pod 中的镜像")]),e._v("\n$ kubectl rolling-update frontend-v1 frontend-v2 --rollback        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 退出已存在的进行中的滚动更新")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cat")]),e._v(" pod.json "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl replace -f -                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 基于 stdin 输入的 JSON 替换 pod")]),e._v("\n$ kubectl replace --force -f ./pod.json "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 强制替换，删除后重新创建资源。会导致服务中断。")]),e._v("\n$ kubectl expose rc nginx --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("80 --target-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("8000 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 为 nginx RC 创建服务，启用本地 80 端口连接到容器上的 8000 端口")]),e._v("\n$ kubectl get pod mypod -o yaml "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/\\(image: myimage\\):.*$/\\1:v4/'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" kubectl replace -f - "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新单容器 pod 的镜像版本（tag）到 v4")]),e._v("\n$ kubectl label pods my-pod new-label"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("awesome                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 添加标签")]),e._v("\n$ kubectl annotate pods my-pod icon-url"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("http://goo.gl/XXBTWq       "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 添加注解")]),e._v("\n$ kubectl autoscale deployment foo --min"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2 --max"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("10                "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 自动扩展 deployment “foo”")]),e._v("\n")])])]),t("h2",{attrs:{id:"修补资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修补资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 修补资源")]),e._v(" "),t("p",[e._v("使用策略合并补丁并修补资源")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl patch node k8s-node-1 -p "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"spec":{"unschedulable":true}}\'')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 部分更新节点")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新容器镜像； spec.containers[*].name 是必须的，因为这是合并的关键字")]),e._v("\n$ kubectl patch pod valid-pod -p "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"spec":{"containers":[{"name":"kubernetes-serve-hostname","image":"new image"}]}}\'')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用具有位置数组的 json 补丁更新容器镜像")]),e._v("\n$ kubectl patch pod valid-pod --type"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'json'")]),e._v(" -p"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'[{"op": "replace", "path": "/spec/containers/0/image", "value":"new image"}]\'')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用具有位置数组的 json 补丁禁用 deployment 的 livenessProbe")]),e._v("\n$ kubectl patch deployment valid-deployment  --type json   -p"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'[{"op": "remove", "path": "/spec/template/spec/containers/0/livenessProbe"}]\'')]),e._v("\n")])])]),t("h2",{attrs:{id:"编辑资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编辑资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 编辑资源")]),e._v(" "),t("p",[e._v("在编辑器中编辑任何 API 资源。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl edit svc/docker-registry                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 编辑名为 docker-registry 的 service")]),e._v("\n$ KUBE_EDITOR"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nano"')]),e._v(" kubectl edit svc/docker-registry   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用其它编辑器")]),e._v("\n")])])]),t("h2",{attrs:{id:"scale-资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scale-资源","aria-hidden":"true"}},[e._v("#")]),e._v(" Scale 资源")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl scale --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("3 rs/foo                                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Scale a replicaset named 'foo' to 3")]),e._v("\n$ kubectl scale --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("3 -f foo.yaml                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# Scale a resource specified in "foo.yaml" to 3')]),e._v("\n$ kubectl scale --current-replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2 --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("3 deployment/mysql  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If the deployment named mysql's current size is 2, scale mysql to 3")]),e._v("\n$ kubectl scale --replicas"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("5 rc/foo rc/bar rc/baz                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Scale multiple replication controllers")]),e._v("\n")])])]),t("h2",{attrs:{id:"删除资源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除资源","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除资源")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl delete -f ./pod.json                                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除 pod.json 文件中定义的类型和名称的 pod")]),e._v("\n$ kubectl delete pod,service baz foo                                        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除名为“baz”的 pod 和名为“foo”的 service")]),e._v("\n$ kubectl delete pods,services -l name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myLabel                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除具有 name=myLabel 标签的 pod 和 serivce")]),e._v("\n$ kubectl delete pods,services -l name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("myLabel --include-uninitialized      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除具有 name=myLabel 标签的 pod 和 service，包括尚未初始化的")]),e._v("\n$ kubectl -n my-ns delete po,svc --all                                      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除 my-ns namespace 下的所有 pod 和 serivce，包括尚未初始化的")]),e._v("\n")])])]),t("h3",{attrs:{id:"删除pod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除pod","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除pod")]),e._v(" "),t("p",[e._v("比如某个pod发生错误的情况, 需要删除某个pod")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ ksys delete pod kubernetes-dashboard-5f7b999d65-gw8tc\n")])])]),t("h2",{attrs:{id:"与运行中的-pod-交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与运行中的-pod-交互","aria-hidden":"true"}},[e._v("#")]),e._v(" 与运行中的 Pod 交互")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl logs my-pod                                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# dump 输出 pod 的日志（stdout）")]),e._v("\n$ kubectl logs my-pod -c my-container                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# dump 输出 pod 中容器的日志（stdout，pod 中有多个容器的情况下使用）")]),e._v("\n$ kubectl logs -f my-pod                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 流式输出 pod 的日志（stdout）")]),e._v("\n$ kubectl logs -f my-pod -c my-container              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 流式输出 pod 中容器的日志（stdout，pod 中有多个容器的情况下使用）")]),e._v("\n$ kubectl run -i --tty busybox --image"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("busybox -- sh  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 交互式 shell 的方式运行 pod")]),e._v("\n$ kubectl attach my-pod -i                            "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 连接到运行中的容器")]),e._v("\n$ kubectl port-forward my-pod 5000:6000               "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 转发 pod 中的 6000 端口到本地的 5000 端口")]),e._v("\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" my-pod -- "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在已存在的容器中执行命令（只有一个容器的情况下）")]),e._v("\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" my-pod -c my-container -- "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" /         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在已存在的容器中执行命令（pod 中有多个容器的情况下）")]),e._v("\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" pod POD_NAME --containers               "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 显示指定 pod 和容器的指标度量")]),e._v("\n")])])]),t("h2",{attrs:{id:"与节点和集群交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与节点和集群交互","aria-hidden":"true"}},[e._v("#")]),e._v(" 与节点和集群交互")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl cordon my-node                                                "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 标记 my-node 不可调度")]),e._v("\n$ kubectl drain my-node                                                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 清空 my-node 以待维护")]),e._v("\n$ kubectl uncordon my-node                                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 标记 my-node 可调度")]),e._v("\n$ kubectl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("top")]),e._v(" node my-node                                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 显示 my-node 的指标度量")]),e._v("\n$ kubectl cluster-info                                                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 显示 master 和服务的地址")]),e._v("\n$ kubectl cluster-info dump                                             "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将当前集群状态输出到 stdout")]),e._v("\n$ kubectl cluster-info dump --output-directory"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/path/to/cluster-state   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 将当前集群状态输出到 /path/to/cluster-state")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果该键和影响的污点（taint）已存在，则使用指定的值替换")]),e._v("\n$ kubectl taint nodes foo dedicated"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("special-user:NoSchedule\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.bookstack.cn/read/kubernetes-handbook/guide-kubectl-cheatsheet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubectl命令技巧大全"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubectl Cheat Sheet"),t("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=n.exports}}]);