(window.webpackJsonp=window.webpackJsonp||[]).push([[553],{757:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在-kubernetes-集群中部署-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-kubernetes-集群中部署-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 Kubernetes 集群中部署 Nginx")]),t._v(" "),s("h2",{attrs:{id:"使用宿主机存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用宿主机存储","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用宿主机存储")]),t._v(" "),s("ol",[s("li",[t._v("创建副本控制器, ReplicationController 配置如下:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ReplicationController\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/nginx/html "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载的目录")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为挂载的目录取个名字")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 跟上面的名称对应")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hostPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用宿主机挂载")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /data "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 宿主机挂载点")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建服务, 配置如下:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30088")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在dashboard中查看")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190417/003.png"}}),t._v(" "),s("p",[t._v("可以看到, 通过副本自动将pod分配到两个节点 "),s("code",[t._v("k8s-node1")]),t._v(" 和 "),s("code",[t._v("k8s-node2")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("控制台查看")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ kubectl get rc -n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 副本控制器")]),t._v("\nNAME         DESIRED   CURRENT   READY   AGE\nnginx-test   2         2         2       21m\n$ kubectl get po -n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pods")]),t._v("\nNAME               READY   STATUS    RESTARTS   AGE\nnginx-test-98bgp   1/1     Running   0          20m\nnginx-test-pfv8d   1/1     Running   0          20m\n$ kubectl get svc -n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service")]),t._v("\nNAME            TYPE       CLUSTER-IP       EXTERNAL-IP   PORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        AGE\nnginx-service   NodePort   10.100.192.191   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        80:30088/TCP   14m\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("测试浏览器访问")])]),t._v(" "),s("p",[t._v("在两台机子中分别录入一些数据:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("k8s-node1$ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, Welcome to my website...'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /data/index.html\n")])])]),s("p",[t._v("访问: "),s("code",[t._v("http://192.168.126.129:30088/")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190417/004.png"}}),t._v(" "),s("h2",{attrs:{id:"使用pvc存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用pvc存储","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用PVC存储")]),t._v(" "),s("p",[t._v("以下示例, 演示在k8s中配置nginx网页文件使用PVC持久化存储")]),t._v(" "),s("ol",[s("li",[t._v("创建副本控制器, ReplicationController 配置如下:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ReplicationController\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /usr/share/nginx/html\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("persistentVolumeClaim")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定使用的PVC")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("claimName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("data\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("创建服务, 配置如下:")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodePort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30088")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("查看存储卷的路径")])]),t._v(" "),s("p",[t._v("选择PVC")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190418/001.png"}}),t._v(" "),s("p",[t._v("选择PV")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190418/002.png"}}),t._v(" "),s("p",[t._v("找到GlusterFS中的路径")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190418/003.png"}}),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("将PV挂载到宿主机")])]),t._v(" "),s("p",[t._v("使用上面看到的路径, 将PV挂载到宿主机 "),s("code",[t._v("/test1")]),t._v(" 路径下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -t glusterfs 172.18.50.200:vol_17fbf7ad28666ccbf55e4d6fe5d9a8d8 /test1/\n")])])]),s("p",[t._v("其中 172.18.50.200 是宿主机(k8s-master)的IP, 也可为其他node的IP")]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("往宿主机挂载点写点数据")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190418/004.png"}}),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("进入到pod验证")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190418/005.png"}}),t._v(" "),s("p",[t._v("看到, 在宿主机往 /test1 写入的数据, 进入pod依然能够看到")]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("浏览器测试")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190418/006.png"}}),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.51cto.com/ylw6006/2071845",target:"_blank",rel:"noopener noreferrer"}},[t._v("在kubernetes集群中运行nginx"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=e.exports}}]);