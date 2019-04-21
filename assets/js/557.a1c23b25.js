(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{762:function(e,a,t){"use strict";t.r(a);var s=t(1),n=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kubernetes-核心概念-标签-label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-标签-label","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes 核心概念 - 标签 (Label)")]),e._v(" "),t("p",[e._v("Label是Kubernetes系统中的一个核心概念。"),t("strong",[e._v("Label以key/value键值对的形式附加到任何对象上，如Pod，Service，Node，RC（ReplicationController）/RS（ReplicaSet）等")]),e._v("。Label可以在创建对象时就附加到对象上，也可以在对象创建后通过API进行额外添加或修改。")]),e._v(" "),t("p",[e._v("在为对象定义好Label后，其他对象就可以通过Label来对对象进行引用。Label的最常见的用法便是通过"),t("strong",[e._v("spec.selector")]),e._v("来引用对象。下面是文章："),t("a",{attrs:{href:"https://www.jianshu.com/p/fd8d8d51741e",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes对象之ReplicaSet"),t("OutboundLink")],1),e._v(" 中新建一个RC的例子：")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" ReplicationController\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n\n")])])]),t("p",[e._v("关于Label的用法重点在于这两步：")]),e._v(" "),t("ul",[t("li",[e._v("通过"),t("strong",[e._v("template.metadata.labels")]),e._v("字段为即将新建的Pod附加Label。在上面的例子中，新建了一个名称为nginx的Pod，它拥有一个键值对为"),t("code",[e._v("app:nginx")]),e._v("的Label。")]),e._v(" "),t("li",[e._v("通过"),t("strong",[e._v("spec.selector")]),e._v("字段来指定这个RC管理哪些Pod。在上面的例子中，新建的RC会管理所有拥有"),t("code",[e._v("app:nginx")]),e._v("Label的Pod。这样的"),t("strong",[e._v("spec.selector")]),e._v("在Kubernetes中被称作"),t("strong",[e._v("Label Selector")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"label的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label的定义","aria-hidden":"true"}},[e._v("#")]),e._v(" Label的定义")]),e._v(" "),t("p",[e._v("我们通常使用"),t("strong",[e._v("metadata.labels")]),e._v("字段，来为对象添加Label。Label可以为多个。一个简单的例子如下：")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("release")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" stable\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("\n")])])]),t("p",[e._v("上面的描述文件为名为nginx的Pod添加了两个Label，分别为"),t("code",[e._v("app: nginx")]),e._v("和"),t("code",[e._v("release: stable")]),e._v("。")]),e._v(" "),t("h3",{attrs:{id:"常见的label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见的label","aria-hidden":"true"}},[e._v("#")]),e._v(" 常见的Label")]),e._v(" "),t("p",[e._v("一般来说，我们会给一个Pod（或其他对象）定义多个Label，以便于配置，部署等管理工作。例如：部署不同版本的应用到不同的环境中；或者监控和分析应用（日志记录，监控，报警等）。通过多个Label的设置，我们就可以多维度的Pod或其他对象进行精细化管理。一些常用的Label示例如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("relase: stable\nrelease: canary\nenvironment: dev\nenvironemnt: qa\nenvironment: production\ntier: frontend\ntier: backend\ntier: middleware\n......\n")])])]),t("p",[e._v("Label是自定义的一些key/value对，你可以随心所欲的设置。")]),e._v(" "),t("h2",{attrs:{id:"label-selector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label-selector","aria-hidden":"true"}},[e._v("#")]),e._v(" Label Selector")]),e._v(" "),t("p",[e._v("带有Label的对象创建好之后，我们就可以通过Label Selector来引用这些对象。")]),e._v(" "),t("p",[e._v("通常我们通过描述文件中的"),t("strong",[e._v("spec.selector")]),e._v("字段来指定Label，从而Kubernetes寻找到所有包含你指定Label的对象，进行管理。")]),e._v(" "),t("p",[e._v("Kubernetes目前支持两种类型的Label Selector：")]),e._v(" "),t("ul",[t("li",[e._v("基于等式的Selector（Equality-based）")]),e._v(" "),t("li",[e._v("基于集合的Selector（Set-based）")])]),e._v(" "),t("p",[e._v("RC只支持基于等式的Selector，而RS两种Selector都支持。")]),e._v(" "),t("h3",{attrs:{id:"基于等式的selector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于等式的selector","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于等式的Selector")]),e._v(" "),t("p",[e._v("上文中创建RC的例子中的使用的就是基于等式的Selector。基于等式的Selector通过等式类的表达式来进行筛选。例如：")]),e._v(" "),t("ul",[t("li",[e._v("app=nginx 选择所有Label中key为app，value为nginx的对象。")]),e._v(" "),t("li",[e._v("env!=dev 选择所有Label中key为env，value不等于dev的对象。")])]),e._v(" "),t("h3",{attrs:{id:"基于集合的selector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于集合的selector","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于集合的Selector")]),e._v(" "),t("p",[e._v("基于集合的Selector通过集合操作的表达式来进行筛选。例如：")]),e._v(" "),t("ul",[t("li",[e._v("name in (redis-master, redis-slave) 选择所有Label中key为name，并且value为redis-master或redis-slave的对象。")]),e._v(" "),t("li",[e._v("env not in (dev) 选择所有Label中key为env，并且value不为dev的对象。")])]),e._v(" "),t("p",[e._v("使用Label可以给对象创建一组或多组标签，Service，RC/RS等组件则通过Label Selector来定位需要管理的对象，Label和Label Selector共同构成了Kubernetes系统中最核心的应用模型，使得对象能够精细分组，同时实现了集群的高可用性。")]),e._v(" "),t("h2",{attrs:{id:"对node添加标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对node添加标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 对node添加标签")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl label nodes "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("node-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("label-key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("label-value"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("eg:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl get nodes\nNAME         STATUS   ROLES    AGE    VERSION\nk8s-master   Ready    master   171m   v1.14.0\nk8s-node1    Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   169m   v1.14.0\nk8s-node2    Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   169m   v1.14.0\n\n\n$ kubectl label nodes k8s-master traefik"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("proxy\nnode/k8s-master labeled\n\n$ kubectl get nodes --show-labels\nNAME         STATUS   ROLES    AGE    VERSION   LABELS\nk8s-master   Ready    master   172m   v1.14.0   beta.kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("amd64,beta.kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux,traefik"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("proxy,kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("amd64,kubernetes.io/hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("k8s-master,kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux,node-role.kubernetes.io/master"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\nk8s-node1    Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   171m   v1.14.0   beta.kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("amd64,beta.kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux,kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("amd64,kubernetes.io/hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("k8s-node1,kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux\nk8s-node2    Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("   171m   v1.14.0   beta.kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("amd64,beta.kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux,kubernetes.io/arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("amd64,kubernetes.io/hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("k8s-node2,kubernetes.io/os"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("linux\n")])])]),t("h2",{attrs:{id:"label的其他操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label的其他操作","aria-hidden":"true"}},[e._v("#")]),e._v(" label的其他操作")]),e._v(" "),t("p",[e._v("删除label, 使用key与减号相连, 如:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl label nodes k8s-master traefik-\n")])])]),t("p",[e._v("为各种资源添加标签:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl label svc test1 test"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("test1 -n "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n$ kubectl label rc test-controller test"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("test1 -n "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n$ kubectl label rs test-set test"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("test1 -n "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("test")]),e._v("\n")])])]),t("h2",{attrs:{id:"污点标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#污点标记","aria-hidden":"true"}},[e._v("#")]),e._v(" 污点标记")]),e._v(" "),t("p",[e._v("使用Taint规则，将拒绝Pod在Node上运行。")]),e._v(" "),t("p",[e._v("Taint需要和Tolerations配合使用，让Pod避开那些不合适的Node。在Node上设置一个或多个Taint之后，除非Pod明确声明能够容忍这些“污点”，否则无法在这些Node上运行。Toleration是Pod的属性，让Pod能够运行在标注了Taint的Node节点上。")]),e._v(" "),t("ol",[t("li",[e._v("使用 kubectl taint 命令为 Node 设置Taint信息：")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl taint nodes k8s-master  key"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("value:NoSchedule\n")])])]),t("p",[e._v("为node节点的k8s-master加上一个Taint, Taint的键为Key，值为value, Taint的效果是NoSchedule。这里表示的含义是任何Pod都不能调度到这个节点，除非设置了toleration.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("删除节点上的taint")])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl taint nodes 10.0.0.3 key:NoSchedule-\n")])])]),t("p",[e._v("默认的master节点是不能调度应用pod的，需要给master节点消除污点标记")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl taint nodes --all node-role.kubernetes.io/master-\n")])])]),t("h2",{attrs:{id:"容忍标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容忍标记","aria-hidden":"true"}},[e._v("#")]),e._v(" 容忍标记")]),e._v(" "),t("p",[e._v("在Pod中定义容忍(Tolerate)具有该Taint的Node,使得Pod可以被调度到这个节点：")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"key"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Equal"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"NoSchedule"')]),e._v("\n")])])]),t("p",[e._v("或者")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("tolerations")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"key"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Exists"')]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"NoSchedule"')]),e._v("\n")])])]),t("h2",{attrs:{id:"node-s-didn-t-match-node-selector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-s-didn-t-match-node-selector","aria-hidden":"true"}},[e._v("#")]),e._v(" node(s) didn't match node selector")]),e._v(" "),t("p",[e._v("报错如:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("0/3 nodes are available: 3 node(s) didn't match node selector.\n")])])]),t("p",[e._v("如果指定的label在所有node上都无法匹配，则创建Pod失败，会提示无法调度")]),e._v(" "),t("p",[e._v("对应yaml的nodeSelector字段, 如:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("nodeSelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("traefik")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" proxy\n")])])]),t("p",[e._v("需要为node指定标签")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ kubectl label nodes <node-name> <label-key>=<label-value>\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://docs.kubernetes.org.cn/628.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes kubectl label 命令详解"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/cd6b4b4caaab",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes基本概念之Label"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://cloud.tencent.com/info/1438d8e12cfaac3c0fffbe50328ac9c7.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pod 调度"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=n.exports}}]);