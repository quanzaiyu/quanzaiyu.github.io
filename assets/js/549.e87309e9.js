(window.webpackJsonp=window.webpackJsonp||[]).push([[549],{929:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"helm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://helm.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm 官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/helm/helm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm GitHub"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/kubernetes/helm/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Releasees"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.kubernetes.org.cn/tags/helm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm"),a("OutboundLink")],1),e._v("是Kubernetes的一个包管理工具，用来简化Kubernetes应用的部署和管理。可以把Helm比作CentOS的yum工具。")]),e._v(" "),a("p",[a("strong",[e._v("Helm有如下几个基本概念:")])]),e._v(" "),a("ul",[a("li",[e._v("Chart: 是Helm管理的安装包，里面包含需要部署的安装包资源。可以把Chart比作CentOS yum使用的rpm文件。每个Chart包含下面两部分：")]),e._v(" "),a("li",[e._v("包的基本描述文件Chart.yaml")]),e._v(" "),a("li",[e._v("放在templates目录中的一个或多个Kubernetes manifest文件模板")]),e._v(" "),a("li",[e._v("Release：是chart的部署实例，一个chart在一个Kubernetes集群上可以有多个release，即这个chart可以被安装多次")]),e._v(" "),a("li",[e._v("Repository：chart的仓库，用于发布和存储chart")])]),e._v(" "),a("p",[e._v("使用Helm可以完成以下事情：")]),e._v(" "),a("ul",[a("li",[e._v("管理Kubernetes manifest files")]),e._v(" "),a("li",[e._v("管理Helm安装包charts")]),e._v(" "),a("li",[e._v("基于chart的Kubernetes应用分发")])]),e._v(" "),a("p",[a("strong",[e._v("Helm的组成")])]),e._v(" "),a("p",[e._v("Helm由两部分组成，客户端helm和服务端tiller。")]),e._v(" "),a("ul",[a("li",[e._v("tiller运行在Kubernetes集群上，管理chart安装的release")]),e._v(" "),a("li",[e._v("helm是一个命令行工具，可在本地运行，一般运行在CI/CD Server上。")])]),e._v(" "),a("h2",{attrs:{id:"helm-组件及相关术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-组件及相关术语","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm 组件及相关术语")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Helm")]),e._v(" Helm 是一个命令行下的客户端工具。主要用于 Kubernetes 应用程序 Chart 的创建、打包、发布以及创建和管理本地和远程的 Chart 仓库。")]),e._v(" "),a("li",[a("strong",[e._v("Tiller")]),e._v(" Tiller 是 Helm 的服务端，部署在 Kubernetes 集群中。Tiller 用于接收 Helm 的请求，并根据 Chart 生成 Kubernetes 的部署文件（ Helm 称为 Release ），然后提交给 Kubernetes 创建应用。Tiller 还提供了 Release 的升级、删除、回滚等一系列功能。")]),e._v(" "),a("li",[a("strong",[e._v("Chart")]),e._v(" Helm 的软件包，采用 TAR 格式。类似于 APT 的 DEB 包或者 YUM 的 RPM 包，其包含了一组定义 Kubernetes 资源相关的 YAML 文件。")]),e._v(" "),a("li",[a("strong",[e._v("Repoistory")]),e._v(" Helm 的软件仓库，Repository 本质上是一个 Web 服务器，该服务器保存了一系列的 Chart 软件包以供用户下载，并且提供了一个该 Repository 的 Chart 包的清单文件以供查询。Helm 可以同时管理多个不同的 Repository。")]),e._v(" "),a("li",[a("strong",[e._v("Release")]),e._v(" 使用 helm install 命令在 Kubernetes 集群中部署的 Chart 称为 Release。")])]),e._v(" "),a("p",[e._v("注：需要注意的是：Helm 中提到的 Release 和我们通常概念中的版本有所不同，这里的 Release 可以理解为 Helm 使用 Chart 包部署的一个应用实例。")]),e._v(" "),a("h2",{attrs:{id:"helm工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm工作原理","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm工作原理")]),e._v(" "),a("imgLink",{attrs:{src:"date/20190421/001.jpg"}}),e._v(" "),a("p",[a("strong",[e._v("Chart Install 过程")])]),e._v(" "),a("ul",[a("li",[e._v("Helm从指定的目录或者tgz文件中解析出Chart结构信息")]),e._v(" "),a("li",[e._v("Helm将指定的Chart结构和Values信息通过gRPC传递给Tiller")]),e._v(" "),a("li",[e._v("Tiller根据Chart和Values生成一个Release")]),e._v(" "),a("li",[e._v("Tiller将Release发送给Kubernetes用于生成Release")])]),e._v(" "),a("p",[a("strong",[e._v("Chart Update过程")])]),e._v(" "),a("ul",[a("li",[e._v("Helm从指定的目录或者tgz文件中解析出Chart结构信息")]),e._v(" "),a("li",[e._v("Helm将要更新的Release的名称和Chart结构，Values信息传递给Tiller")]),e._v(" "),a("li",[e._v("Tiller生成Release并更新指定名称的Release的History")]),e._v(" "),a("li",[e._v("Tiller将Release发送给Kubernetes用于更新Release")])]),e._v(" "),a("p",[a("strong",[e._v("Chart Rollback过程")])]),e._v(" "),a("ul",[a("li",[e._v("Helm将要回滚的Release的名称传递给Tiller")]),e._v(" "),a("li",[e._v("Tiller根据Release的名称查找History")]),e._v(" "),a("li",[e._v("Tiller从History中获取上一个Release")]),e._v(" "),a("li",[e._v("Tiller将上一个Release发送给Kubernetes用于替换当前Release")])]),e._v(" "),a("h2",{attrs:{id:"helm-安装-架梯子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-安装-架梯子","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm 安装 (架梯子)")]),e._v(" "),a("p",[e._v("方式一：使用官方提供的脚本一键安装")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" https://raw.githubusercontent.com/helm/helm/master/scripts/get "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" get_helm.sh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" 744 get_helm.sh\n$ ./get_helm.sh\n")])])]),a("p",[e._v("方式二：手动下载安装")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://storage.googleapis.com/kubernetes-helm/helm-v2.13.1-linux-amd64.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxvf helm-2.9.0.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" helm-2.9.0/helm /usr/local/bin/helm\n$ helm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("help")]),e._v("\n")])])]),a("p",[e._v("初始化:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm init\n")])])]),a("p",[e._v("先在 K8S 集群上每个节点安装 socat 软件 ("),a("code",[e._v("yum install -y socat")]),e._v(")，不然会报如下错误：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("E0522 22:22:15.492436   24409 portforward.go:331] an error occurred forwarding 38398 -> 44134: error forwarding port 44134 to pod dc6da4ab99ad9c497c0cef1776b9dd18e0a612d507e2746ed63d36ef40f30174, uid : unable to do port forwarding: socat not found.\nError: cannot connect to Tiller\n")])])]),a("p",[e._v("由于 Helm 默认会去 "),a("code",[e._v("storage.googleapis.com")]),e._v(" 拉取镜像，如果你当前执行的机器不能访问该域名的话可以使用以下命令来安装：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm init --client-only --stable-repo-url https://aliacs-app-catalog.oss-cn-hangzhou.aliyuncs.com/charts/\n")])])]),a("h2",{attrs:{id:"helm-换源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-换源","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm 换源")]),e._v(" "),a("p",[e._v("若遇到以下错误")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Unable to get an update from the “stable” chart repository (https://kubernetes-charts.storage.googleapis.com)\n")])])]),a("p",[e._v("手动更换 stable 存储库为阿里云的存储库即可")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm repo remove stable "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 先移除原先的仓库")]),e._v("\n$ helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" stable https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 添加新的仓库地址")]),e._v("\n$ helm repo update "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 更新仓库")]),e._v("\n")])])]),a("p",[e._v("添加源")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" incubator https://aliacs-app-catalog.oss-cn-hangzhou.aliyuncs.com/charts-incubator/\n$ helm repo update\n")])])]),a("h2",{attrs:{id:"helm-服务端-tiller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-服务端-tiller","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm 服务端 Tiller")]),e._v(" "),a("p",[e._v("创建服务端")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm init --service-account tiller --upgrade -i registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.13.1  --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n")])])]),a("p",[e._v("创建TLS认证服务端，参考地址："),a("a",{attrs:{href:"https://github.com/gjmzj/kubeasz/blob/master/docs/guide/helm.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/gjmzj/kubeasz/blob/master/docs/guide/helm.md"),a("OutboundLink")],1)]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm init --service-account tiller --upgrade -i registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.13.1 --tiller-tls-cert /etc/kubernetes/ssl/tiller001.pem --tiller-tls-key /etc/kubernetes/ssl/tiller001-key.pem --tls-ca-cert /etc/kubernetes/ssl/ca.pem --tiller-namespace kube-system --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts\n")])])]),a("p",[e._v("在 Kubernetes 中安装 Tiller 服务，因为官方的镜像因为某些原因无法拉取，使用-i指定自己的镜像，可选镜像：registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.13.1（阿里云），该镜像的版本与helm客户端的版本相同，使用helm version可查看helm客户端版本。")]),e._v(" "),a("p",[e._v("如果在用helm init安装tiller server时一直部署不成功,检查deployment，根据描述解决问题。")]),e._v(" "),a("h3",{attrs:{id:"卸载-helm-服务器端-tiller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载-helm-服务器端-tiller","aria-hidden":"true"}},[e._v("#")]),e._v(" 卸载 Helm 服务器端 Tiller")]),e._v(" "),a("p",[e._v("如果你需要在 Kubernetes 中卸载已部署的 Tiller，可使用以下命令完成卸载。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm reset 或\n$ helm reset --force\n")])])]),a("h3",{attrs:{id:"给-tiller-授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给-tiller-授权","aria-hidden":"true"}},[e._v("#")]),e._v(" 给 Tiller 授权")]),e._v(" "),a("p",[e._v("因为 Helm 的服务端 Tiller 是一个部署在 Kubernetes 中 kube-system 命名空间下的 Deployment，它会去连接 Kube-Api 在 Kubernetes 里创建和删除应用。")]),e._v(" "),a("p",[e._v("而从 Kubernetes 1.6 版本开始，API Server 启用了 RBAC 授权。目前的 Tiller 部署时默认没有定义授权的 ServiceAccount，这会导致访问 API Server 时被拒绝。所以我们需要明确为 Tiller 部署添加授权。")]),e._v(" "),a("p",[e._v("创建 Kubernetes 的服务帐号和绑定角色")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl create serviceaccount tiller -n kube-system\n$ kubectl create clusterrolebinding tiller-cluster-rule --clusterrole"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cluster-admin --serviceaccount"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kube-system:tiller\n")])])]),a("p",[e._v("为 Tiller 设置帐号")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 使用 kubectl patch 更新 API 对象")]),e._v("\n$ kubectl patch deploy -n kube-system tiller-deploy -p "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}\'')]),e._v("\ndeployment.extensions "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tiller-deploy"')]),e._v(" patched\n")])])]),a("p",[e._v("查看是否授权成功")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl get deploy -n kube-system tiller-deploy -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" serviceAccount\nserviceAccount: tiller\nserviceAccountName: tiller\n")])])]),a("h3",{attrs:{id:"验证-tiller-是否安装成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-tiller-是否安装成功","aria-hidden":"true"}},[e._v("#")]),e._v(" 验证 Tiller 是否安装成功")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ kubectl -n kube-system get pods "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" tiller\ntiller-deploy-6d68f5c78f-nql2z          1/1       Running   0          5m\n\n$ helm version\nClient: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("version.Version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("SemVer:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v2.13.1"')]),e._v(", GitCommit:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"618447cbf203d147601b4b9bd7f8c37a5d39fbb4"')]),e._v(", GitTreeState:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nServer: "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("version.Version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("SemVer:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"v2.13.1"')]),e._v(", GitCommit:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"618447cbf203d147601b4b9bd7f8c37a5d39fbb4"')]),e._v(", GitTreeState:"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"clean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"helm-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helm-使用","aria-hidden":"true"}},[e._v("#")]),e._v(" Helm 使用")]),e._v(" "),a("p",[e._v("查看在存储库中可用的所有 Helm charts")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm search\n")])])]),a("h3",{attrs:{id:"查看k8s中已安装的charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看k8s中已安装的charts","aria-hidden":"true"}},[e._v("#")]),e._v(" 查看K8S中已安装的charts")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm list\n\nNAME                REVISION    UPDATED                     STATUS      CHART               NAMESPACE\namber-seal          1           Mon Jul  2 17:29:25 2018    DEPLOYED    nginx-ingress-0.9.5 default\nmy-release          1           Mon Jul  2 15:19:44 2018    DEPLOYED    spark-0.1.10        default\nnonplussed-panther  1           Mon Jul  2 17:27:41 2018    FAILED      nginx-ingress-0.9.5 default\nturbulent-tuatara   1           Mon Jul  2 17:31:33 2018    DEPLOYED    monocular-0.6.2     default\n")])])]),a("h3",{attrs:{id:"删除安装的charts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除安装的charts","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除安装的charts")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# helm delete <chartsName>")]),e._v("\n$ helm delete amber-seal\n")])])]),a("h2",{attrs:{id:"安装-monocular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-monocular","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Monocular")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/helm/monocular",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("Monocular是一个开源软件，用于管理kubernetes上以Helm Charts形式创建的服务，可以通过它的web页面来安装helm Charts")]),e._v(" "),a("p",[e._v("首先需要安装 "),a("code",[e._v("Nginx Ingress controller")]),e._v("，安装的k8s集群启用了RBAC，则一定要加rbac.create=true参数, 比如")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" stable/nginx-ingress -n nginx-ingress --set controller.hostNetwork"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true,rbac.create"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),a("p",[e._v("安装 Monocular")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" monocular https://helm.github.io/monocular\n$ helm "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" monocular/monocular\n")])])]),a("imgLink",{attrs:{src:"date/20190421/002.png"}}),e._v(" "),a("h2",{attrs:{id:"安装-kubeapps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubeapps","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Kubeapps")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kubeapps.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubeapps 官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/kubeapps/kubeapps/blob/master/docs/user/getting-started.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"安装-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-jenkins","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装 Jenkins")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git clone https://github.com/dotbalo/helm.git\n$ cd helm/jenkins\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.kubernetes.org.cn/3435.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("是时候使用Helm了：Helm, Kubernetes的包管理工具"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/bbwangj/article/details/81087911",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes之helm简介、安装、配置、使用指南"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=r.exports}}]);