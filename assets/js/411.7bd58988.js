(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{677:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-核心概念-容器组-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-容器组-pod","aria-hidden":"true"}},[t._v("#")]),t._v(" Kubernetes 核心概念 - 容器组 (Pod)")]),t._v(" "),a("p",[t._v("Pod是Kubernetes最基本的操作单元，包含一个或多个紧密相关的容器，一个Pod可以被一个容器化的环境看作应用层的“逻辑宿主机”；一个Pod中的多个容器应用通常是紧密耦合的，Pod在Node上被创建、启动或者销毁；每个Pod里运行着一个特殊的被称之为Pause的容器，其他容器则为业务容器，这些业务容器共享Pause容器的网络栈和Volume挂载卷，因此他们之间通信和数据交换更为高效，在设计时我们可以充分利用这一特性将一组密切相关的服务进程放入同一个Pod中。")]),t._v(" "),a("p",[t._v("同一个Pod里的容器之间仅需通过localhost就能互相通信。")]),t._v(" "),a("p",[t._v("一个Pod中的应用容器共享同一组资源：")]),t._v(" "),a("ul",[a("li",[t._v("PID命名空间：Pod中的不同应用程序可以看到其他应用程序的进程ID；")]),t._v(" "),a("li",[t._v("网络命名空间：Pod中的多个容器能够访问同一个IP和端口范围；")]),t._v(" "),a("li",[t._v("IPC命名空间：Pod中的多个容器能够使用SystemV IPC或POSIX消息队列进行通信；")]),t._v(" "),a("li",[t._v("UTS命名空间：Pod中的多个容器共享一个主机名；")]),t._v(" "),a("li",[t._v("Volumes（共享存储卷）：Pod中的各个容器可以访问在Pod级别定义的Volumes；")])]),t._v(" "),a("p",[t._v("Pod的生命周期通过Replication Controller来管理；通过模板进行定义，然后分配到一个Node上运行，在Pod所包含容器运行结束后，Pod结束。")]),t._v(" "),a("p",[t._v("Kubernetes为Pod设计了一套独特的网络配置，包括：为每个Pod分配一个IP地址，使用Pod名作为容器间通信的主机名等。")]),t._v(" "),a("h2",{attrs:{id:"获取pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取pod","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取Pod")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl get pods "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取default命名空间的pods")]),t._v("\n$ kubectl get po -n "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取test命名空间的pods")]),t._v("\n")])])]),a("p",[t._v("在Kubernetes集群中Pod有如下两种使用方式：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("一个Pod中运行一个容器")]),t._v("。“每个Pod中一个容器”的模式是最常见的用法；在这种使用方式中，你可以把Pod想象成是单个容器的封装，kuberentes管理的是Pod而不是直接管理容器。")]),t._v(" "),a("li",[a("strong",[t._v("在一个Pod中同时运行多个容器")]),t._v("。一个Pod中也可以同时封装几个需要紧密耦合互相协作的容器，它们之间共享资源。这些在同一个Pod中的容器可以互相协作成为一个service单位——一个容器共享文件，另一个“sidecar”容器来更新这些文件。Pod将这些容器的存储资源作为一个实体来管理。")])]),t._v(" "),a("p",[t._v("每个Pod都是应用的一个实例。如果你想平行扩展应用的话（运行多个实例），你应该运行多个Pod，每个Pod都是一个应用实例。在Kubernetes中，这通常被称为replication。")]),t._v(" "),a("h2",{attrs:{id:"pod中管理多个容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod中管理多个容器","aria-hidden":"true"}},[t._v("#")]),t._v(" Pod中管理多个容器")]),t._v(" "),a("p",[t._v("Pod中可以同时运行多个进程（作为容器运行）协同工作。同一个Pod中的容器会自动的分配到同一个 node 上。同一个Pod中的容器共享资源、网络环境和依赖，它们总是被同时调度。")]),t._v(" "),a("p",[t._v("注意在一个Pod中同时运行多个容器是一种比较高级的用法。只有当你的容器需要紧密配合协作的时候才考虑用这种模式。例如，你有一个容器作为web服务器运行，需要用到共享的volume，有另一个“sidecar”容器来从远端获取资源更新这些文件，如下图所示：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190402/pod-overview.png"}}),t._v(" "),a("p",[t._v("Pod中可以共享两种资源：网络和存储。")]),t._v(" "),a("p",[a("strong",[t._v("网络")])]),t._v(" "),a("p",[t._v("每个Pod都会被分配一个唯一的IP地址。Pod中的所有容器共享网络空间，包括IP地址和端口。Pod内部的容器可以使用localhost互相通信。Pod中的容器与外界通信时，必须分配共享网络资源（例如使用宿主机的端口映射）。")]),t._v(" "),a("p",[a("strong",[t._v("存储")])]),t._v(" "),a("p",[t._v("可以为一个Pod指定多个共享的Volume。Pod中的所有容器都可以访问共享的volume。Volume也可以用来持久化Pod中的存储资源，以防容器重启后文件丢失。")]),t._v(" "),a("h2",{attrs:{id:"pod的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" Pod的使用")]),t._v(" "),a("p",[t._v("你很少会直接在kubernetes中创建单个Pod。因为Pod的生命周期是短暂的，用后即焚的实体。当Pod被创建后（不论是由你直接创建还是被其他Controller），都会被Kubernetes调度到集群的Node上。直到Pod的进程终止、被删掉、因为缺少资源而被驱逐、或者Node故障之前这个Pod都会一直保持在那个Node上。")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("重启Pod中的容器跟重启Pod不是一回事。Pod只提供容器的运行环境并保持容器的运行状态，重启容器不会造成Pod重启。")])]),t._v(" "),a("p",[t._v("Pod不会自愈。如果Pod运行的Node故障，或者是调度器本身故障，这个Pod就会被删除。同样的，如果Pod所在Node缺少资源或者Pod处于维护状态，Pod也会被驱逐。Kubernetes使用更高级的称为Controller的抽象层，来管理Pod实例。虽然可以直接使用Pod，但是在Kubernetes中通常是使用Controller来管理Pod的。")]),t._v(" "),a("p",[t._v("Pod也可以用于垂直应用栈（例如LAMP），这样使用的主要动机是为了支持共同调度和协调管理应用程序，例如：")]),t._v(" "),a("ul",[a("li",[t._v("内容管理系统、文件和数据加载器、本地换群管理器等。")]),t._v(" "),a("li",[t._v("日志和检查点备份、压缩、旋转、快照等。")]),t._v(" "),a("li",[t._v("数据变更观察者、日志和监控适配器、活动发布者等。")]),t._v(" "),a("li",[t._v("代理、桥接和适配器等。")]),t._v(" "),a("li",[t._v("控制器、管理器、配置器、更新器等。")])]),t._v(" "),a("p",[t._v("通常单个pod中不会同时运行一个应用的多个实例。")]),t._v(" "),a("h2",{attrs:{id:"pod-的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-的生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" Pod 的生命周期")]),t._v(" "),a("p",[t._v("下图是Pod的生命周期示意图，从图中可以看到Pod状态的变化。")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190402/kubernetes-pod-life-cycle.jpg"}}),t._v(" "),a("p",[t._v("Pod 的生命周期包括:")]),t._v(" "),a("ul",[a("li",[t._v("挂起（Pending）：Pod 已被 Kubernetes 系统接受，但有一个或者多个容器镜像尚未创建。等待时间包括调度 Pod 的时间和通过网络下载镜像的时间，这可能需要花点时间。")]),t._v(" "),a("li",[t._v("运行中（Running）：该 Pod 已经绑定到了一个节点上，Pod 中所有的容器都已被创建。至少有一个容器正在运行，或者正处于启动或重启状态。")]),t._v(" "),a("li",[t._v("成功（Succeeded）：Pod 中的所有容器都被成功终止，并且不会再重启。")]),t._v(" "),a("li",[t._v("失败（Failed）：Pod 中的所有容器都已终止了，并且至少有一个容器是因为失败终止。也就是说，容器以非0状态退出或者被系统终止。")]),t._v(" "),a("li",[t._v("未知（Unknown）：因为某些原因无法取得 Pod 的状态，通常是因为与 Pod 所在主机通信失败。")])]),t._v(" "),a("h2",{attrs:{id:"pod-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-hook","aria-hidden":"true"}},[t._v("#")]),t._v(" Pod hook")]),t._v(" "),a("p",[t._v("Pod hook（钩子）是由Kubernetes管理的kubelet发起的，当容器中的进程启动前或者容器中的进程终止之前运行，这是包含在容器的生命周期之中。可以同时为Pod中的所有容器都配置hook。")]),t._v(" "),a("p",[t._v("Hook的类型包括两种：")]),t._v(" "),a("ul",[a("li",[t._v("exec：执行一段命令")]),t._v(" "),a("li",[t._v("HTTP：发送HTTP请求。")])]),t._v(" "),a("p",[t._v("参考下面的配置：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lifecycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lifecycle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("lifecycle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bin/sh"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo Hello from the postStart handler > /usr/share/message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("preStop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/sbin/nginx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"quit"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("在容器创建之后，容器的Entrypoint执行之前，这时候Pod已经被调度到某台node上，被某个kubelet管理了，这时候kubelet会调用postStart操作，该操作跟容器的启动命令是在异步执行的，也就是说在postStart操作执行完成之前，kubelet会锁住容器，不让应用程序的进程启动，只有在 postStart操作完成之后容器的状态才会被设置成为RUNNING。")]),t._v(" "),a("p",[t._v("如果postStart或者preStop hook失败，将会终止容器。")]),t._v(" "),a("h2",{attrs:{id:"进入到-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入到-pod","aria-hidden":"true"}},[t._v("#")]),t._v(" 进入到 Pod")]),t._v(" "),a("p",[t._v("类同于进入docker容器:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -ti  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-container-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   /bin/sh\n")])])]),a("p",[t._v("进入pod:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -ti "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-pod-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  -- /bin/sh\n")])])]),a("h2",{attrs:{id:"pod-preset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-preset","aria-hidden":"true"}},[t._v("#")]),t._v(" Pod Preset")]),t._v(" "),a("p",[t._v("Preset 就是预设，有时候想要让一批容器在启动的时候就注入一些信息，比如 secret、volume、volume mount 和环境变量，而又不想一个一个的改这些 Pod 的 template，这时候就可以用到 PodPreset 这个资源对象了。")]),t._v(" "),a("p",[t._v("Pod Preset 是用来在 Pod 被创建的时候向其中注入额外的运行时需求的 API 资源。")]),t._v(" "),a("p",[t._v("使用 Pod Preset 使得 pod 模板的作者可以不必为每个 Pod 明确提供所有信息。这样一来，pod 模板的作者就不需要知道关于该服务的所有细节。")]),t._v(" "),a("h2",{attrs:{id:"init-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-容器","aria-hidden":"true"}},[t._v("#")]),t._v(" Init 容器")]),t._v(" "),a("p",[t._v("Pod 能够具有多个容器，应用运行在容器里面，但是它也可能有一个或多个先于应用容器启动的 Init 容器。")]),t._v(" "),a("p",[t._v("Init 容器与普通的容器非常像，除了如下两点：")]),t._v(" "),a("ul",[a("li",[t._v("Init 容器总是运行到成功完成为止。")]),t._v(" "),a("li",[t._v("每个 Init 容器都必须在下一个 Init 容器启动之前成功完成。")])]),t._v(" "),a("p",[t._v("如果 Pod 的 Init 容器失败，Kubernetes 会不断地重启该 Pod，直到 Init 容器成功为止。然而，如果 Pod 对应的 restartPolicy 为 Never，它不会重新启动。")]),t._v(" "),a("p",[t._v("指定容器为 Init 容器，在 PodSpec 中添加 initContainers 字段，以 v1.Container 类型对象的 JSON 数组的形式，还有 app 的 containers 数组。 Init 容器的状态在 status.initContainerStatuses 字段中以容器状态数组的格式返回（类似 status.containerStatuses 字段）。")]),t._v(" "),a("h3",{attrs:{id:"使用-init-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-init-容器","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Init 容器")]),t._v(" "),a("p",[t._v("以下是 Kubernetes 1.6 版本的新语法，尽管老的 annotation 语法仍然可以使用。我们已经把 Init 容器的声明移到 "),a("code",[t._v("spec")]),t._v(" 中：")]),t._v(" "),a("p",[a("code",[t._v("myapp.yaml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("pod\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myapp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("container\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echo The app is running! && sleep 3600'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("initContainers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("myservice\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'until nslookup myservice; do echo waiting for myservice; sleep 2; done;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mydb\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" busybox\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'until nslookup mydb; do echo waiting for mydb; sleep 2; done;'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("下面的 YAML 文件展示了包括 "),a("code",[t._v("mydb")]),t._v(" 和 "),a("code",[t._v("myservice")]),t._v(" 两个 Service：")]),t._v(" "),a("p",[a("code",[t._v("services.yaml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" myservice\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9376")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mydb\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9377")]),t._v("\n")])])]),a("p",[t._v("这个 Pod 可以使用下面的命令进行启动和调试：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl create -f myapp.yaml\npod "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myapp-pod"')]),t._v(" created\n$ kubectl get -f myapp.yaml\nNAME        READY     STATUS     RESTARTS   AGE\nmyapp-pod   0/1       Init:0/2   0          6m\n$ kubectl describe -f myapp.yaml\n$ kubectl logs myapp-pod -c init-myservice "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Inspect the first init container")]),t._v("\n$ kubectl logs myapp-pod -c init-mydb      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Inspect the second init container")]),t._v("\n")])])]),a("p",[t._v("可以看到, 在 "),a("code",[t._v("mydb")]),t._v(" 和 "),a("code",[t._v("myservice")]),t._v(" 服务还未创建之前, STATUS 为 "),a("code",[t._v("Init:0/2")]),t._v(", 处于等待服务创建的阶段。")]),t._v(" "),a("p",[t._v("一旦我们启动了 "),a("code",[t._v("mydb")]),t._v(" 和 "),a("code",[t._v("myservice")]),t._v(" 这两个 Service，我们能够看到 Init 容器完成，并且 "),a("code",[t._v("myapp-pod")]),t._v(" 被创建, 其状态为 "),a("code",[t._v("Running")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ kubectl create -f services.yaml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myservice"')]),t._v(" created\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mydb"')]),t._v(" created\n$ kubectl get -f myapp.yaml\nNAME        READY     STATUS    RESTARTS   AGE\nmyapp-pod   1/1       Running   0          9m\n")])])]),a("p",[t._v("这个例子非常简单，但是应该能够为我们创建自己的 Init 容器提供一些启发。")]),t._v(" "),a("h2",{attrs:{id:"api-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-object","aria-hidden":"true"}},[t._v("#")]),t._v(" API Object")]),t._v(" "),a("p",[t._v("Pod是kubernetes REST API中的顶级资源类型。")]),t._v(" "),a("p",[t._v("在kuberentes1.6的V1 core API版本中的Pod的数据结构如下图所示：")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190402/kubernetes-pod-cheatsheet.png"}})],1)},[],!1,null,null,null);s.default=n.exports}}]);