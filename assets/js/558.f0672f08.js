(window.webpackJsonp=window.webpackJsonp||[]).push([[558],{927:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-核心概念之-volume-存储数据卷"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念之-volume-存储数据卷","aria-hidden":"true"}},[t._v("#")]),t._v(" Kubernetes 核心概念之 Volume 存储数据卷")]),t._v(" "),s("p",[t._v("在Docker中就有数据卷的概念，当容器删除时，数据也一起会被删除，想要持久化使用数据，需要把主机上的目录挂载到Docker中去，在K8S中，数据卷是通过Pod实现持久化的，如果Pod删除，数据卷也会一起删除，k8s的数据卷是docker数据卷的扩展，K8S适配各种存储系统，包括本地存储EmptyDir,HostPath,网络存储NFS,GlusterFS,PV/PVC等，下面就详细介绍下K8S的存储如何实现。")]),t._v(" "),s("h2",{attrs:{id:"本地存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#本地存储","aria-hidden":"true"}},[t._v("#")]),t._v(" 本地存储")]),t._v(" "),s("h3",{attrs:{id:"emptydir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emptydir","aria-hidden":"true"}},[t._v("#")]),t._v(" EmptyDir")]),t._v(" "),s("ol",[s("li",[t._v("编辑EmptyDir配置文件")])]),t._v(" "),s("p",[s("code",[t._v("emptydir.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#类型是Pod")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("role")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义为主redis")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("master\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义环境变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MASTER\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器内端口")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器内挂载点")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#必须有名称")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#跟上面的名称对应")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("emptyDir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#宿主机挂载点")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建Pod")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl create -f emptydir.yaml\n")])])]),s("p",[t._v("此时Emptydir已经创建成功，在宿主机上的访问路径为 "),s("code",[t._v("/var/lib/kubelet/pods/<pod uid>/volumes/kubernetes.io~empty-dir/redis-data")]),t._v(",如果在此目录中创建删除文件，都将对容器中的/data目录有影响，如果删除Pod，文件将全部删除，即使是在宿主机上创建的文件也是如此，在宿主机上删除容器则k8s会再自动创建一个容器，此时文件仍然存在。")]),t._v(" "),s("h3",{attrs:{id:"hostdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hostdir","aria-hidden":"true"}},[t._v("#")]),t._v(" HostDir")]),t._v(" "),s("p",[t._v("在宿主机上指定一个目录，挂载到Pod的容器中，其实跟上面的写法不尽相同，这里只截取不同的部分，当pod删除时，本地仍然保留文件")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#跟上面的名称对应")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#宿主机挂载点")]),t._v("\n")])])]),s("h2",{attrs:{id:"网络数据卷-nfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络数据卷-nfs","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络数据卷(NFS)")]),t._v(" "),s("p",[t._v("编辑一个使用NFS的Pod的配置文件")]),t._v(" "),s("p",[s("code",[t._v("nfs.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("web\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Never        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果已经有镜像，就不需要再拉取镜像")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" web\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80        ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将容器的80端口映射到宿主机的80端口")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定名称必须与下面一致")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/share/nginx/html"')]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#容器内的挂载点")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定名称必须与上面一致")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nfs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nfs存储")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.66.50        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nfs服务器ip或是域名")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/test"')]),t._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#nfs服务器共享的目录")]),t._v("\n")])])]),s("p",[t._v("创建Pod")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl create -f nfs.yaml\n")])])]),s("p",[t._v("在节点端可以用 "),s("code",[t._v("mount")]),t._v(" 命令查询挂载情况")]),t._v(" "),s("p",[t._v("因为我映射的是代码目录，在/test目录中创建index.html文件后，这个文件也将在容器中生效，当Pod删除时，文件不受影响，实现了数据持久化。")]),t._v(" "),s("h2",{attrs:{id:"persistent-volume-pv-和persistent-volume-claim-pvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistent-volume-pv-和persistent-volume-claim-pvc","aria-hidden":"true"}},[t._v("#")]),t._v(" Persistent Volume(PV)和Persistent Volume Claim(PVC)")]),t._v(" "),s("p",[t._v("其实这两种数据卷也属于网络数据卷，单拎出来是因为我觉得这个比前面的数据卷要酷多了，有种大数据，云平台的意思，当用户要使用数据存储的时候他是否还需要知道是什么类型的数据存储，答案是不需要，用户只想要安全可靠的数据存储，而且实现起来很简单，管理员建立一个存储平台，用户按自己的需求消费就可以了，下面就来实现PV/PVC架构。")]),t._v(" "),s("h3",{attrs:{id:"persistent-volume-pv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistent-volume-pv","aria-hidden":"true"}},[t._v("#")]),t._v(" Persistent Volume(PV)")]),t._v(" "),s("ol",[s("li",[t._v("编辑PV配置文件")])]),t._v(" "),s("p",[s("code",[t._v("persistent-volume.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolume\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pv\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定类型是NFS")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("capacity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定访问空间是15G")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15Gi\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定访问模式是能在多节点上挂载，并且访问权限是读写执行")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteMany\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeReclaimPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Recycle        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定回收模式是自动回收，当空间被释放时，K8S自动清理，然后可以继续绑定使用")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nfs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.126.130\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /test\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建PV")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl create -f  persistent-volume.yaml\n")])])]),s("p",[t._v("状态已经变成可用")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("获取pv信息")])]),t._v(" "),s("p",[t._v("pv 没有命名空间的限制")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl get "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pv")]),t._v("\nNAME      CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM           STORAGECLASS   REASON   AGE\ntest-pv   15Gi       RWX            Recycle          Bound    test/nfs-data                           51s\n")])])]),s("p",[t._v("查看pv详情")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl describe "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pv")]),t._v(" test-pv\nName:            test-pv\nLabels:          type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nfs\nAnnotations:     pv.kubernetes.io/bound-by-controller: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nFinalizers:      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubernetes.io/pv-protection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nStorageClass:\nStatus:          Bound\nClaim:           test/nfs-data\nReclaim Policy:  Recycle\nAccess Modes:    RWX\nVolumeMode:      Filesystem\nCapacity:        15Gi\nNode Affinity:   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nMessage:\nSource:\n    Type:      NFS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("an NFS "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" that lasts the lifetime of a pod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Server:    192.168.126.130\n    Path:      /test\n    ReadOnly:  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\nEvents:        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("可以看到, test-pv 被 PVC "),s("code",[t._v("test/nfs-data")]),t._v(" 声明, 挂载到 "),s("code",[t._v("192.168.126.130/test")]),t._v(" 下")]),t._v(" "),s("h3",{attrs:{id:"persistent-volume-claim-pvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#persistent-volume-claim-pvc","aria-hidden":"true"}},[t._v("#")]),t._v(" Persistent Volume Claim(PVC)")]),t._v(" "),s("ol",[s("li",[t._v("编辑PVC配置文件")])]),t._v(" "),s("p",[s("code",[t._v("nfs-data.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PersistentVolumeClaim\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessModes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ReadWriteMany\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("resources")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定请求的资源，存储3G")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("requests")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3Gi\n")])])]),s("p",[t._v("如果当前有两个PV, 一个10G, 一个2G, 请求资源为3G, 那么将直接使用10GPV")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建PVC")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl create -f nfs-data.yaml\n")])])]),s("p",[t._v("因为我之前又创建了一个3G可回收的PV，所以自动选择这个卷了，在PVC选择PV后，不管PV有多少空间都会直接占满所有虚拟空间，实际使用则由Pod来完成")]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("创建Pod以使用平台空间")])]),t._v(" "),s("p",[s("code",[t._v("pv-pod.yaml")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("imagePullPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Never\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/data"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定使用的PVC")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 名字一定要正确")]),t._v("\n")])])]),s("p",[t._v("当前Pod可用空间为3G，如果超过3G，则需要再创建存储来满足需求，因为是网络数据卷，如果需要扩展空间，直接删除Pod再建立一个即可。")]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("获取pvc信息")])]),t._v(" "),s("p",[t._v("pvc 可以指定命名空间, 默认为 default")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl get pvc --all-namespaces\nNAMESPACE   NAME       STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("        nfs-data   Bound    test-pv   15Gi       RWX                           5m20s\n\n$ kubectl get pvc -n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\nNAME       STATUS   VOLUME    CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nnfs-data   Bound    test-pv   15Gi       RWX                           44m\n")])])]),s("p",[t._v("查看pvc详情")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl describe pvc nfs-data -n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\nName:          nfs-data\nNamespace:     "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\nStorageClass:\nStatus:        Bound\nVolume:        test-pv\nLabels:        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nAnnotations:   pv.kubernetes.io/bind-completed: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\n               pv.kubernetes.io/bound-by-controller: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("\nFinalizers:    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kubernetes.io/pvc-protection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nCapacity:      15Gi\nAccess Modes:  RWX\nVolumeMode:    Filesystem\nEvents:\n  Type       Reason         Age                 From                         Message\n  ----       ------         ----                ----                         -------\n  Normal     FailedBinding  43m "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x12 over 46m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  persistentvolume-controller  no persistent volumes available "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" this claim and no storage class is "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v("\nMounted By:  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("可以看到, nfs-data 使用了持久卷 "),s("code",[t._v("test-pv")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.51cto.com/forall/2135152",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes 核心概念之 Volume 存储数据卷详解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://docs.kubernetes.org.cn/429.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes 中文文档 Volume"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);