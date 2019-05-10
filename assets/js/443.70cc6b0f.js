(window.webpackJsonp=window.webpackJsonp||[]).push([[443],{667:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"kubernetes-核心概念-配置存储-secret、configmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-核心概念-配置存储-secret、configmap","aria-hidden":"true"}},[a._v("#")]),a._v(" Kubernetes 核心概念 - 配置存储 (Secret、ConfigMap)")]),a._v(" "),s("h2",{attrs:{id:"配置字典-configmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置字典-configmap","aria-hidden":"true"}},[a._v("#")]),a._v(" 配置字典 (ConfigMap)")]),a._v(" "),s("h3",{attrs:{id:"向容器传递参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向容器传递参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 向容器传递参数")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("Docker")]),a._v(" "),s("th",[a._v("Kubernetes")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("ENTRYPOINT")]),a._v(" "),s("td",[a._v("command")]),a._v(" "),s("td",[a._v("容器中的可执行文件")])]),a._v(" "),s("tr",[s("td",[a._v("CMD")]),a._v(" "),s("td",[a._v("args")]),a._v(" "),s("td",[a._v("需要传递给可执行文件的参数")])])])]),a._v(" "),s("p",[a._v("如果需要向容器传递参数，可以在Yaml文件中通过command和args或者环境变量的方式实现。")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" docker.io/nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/command"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"arg1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"arg2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"arg3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" INTERVAL\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"30"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" FIRST_VAR\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"foo"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" SECOND_VAR\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$(FIRST_VAR)bar"')]),a._v("\n")])])]),s("p",[a._v("可以看到，我们可以利用env标签向容器中传递环境变量，环境变量还可以相互引用。这种方式的问题在于配置文件和部署是绑定的，那么对于同样的应用，测试环境的参数和生产环境是不一样的，这样就要求写两个部署文件，管理起来不是很方便。")]),a._v(" "),s("h3",{attrs:{id:"什么是configmap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是configmap","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是ConfigMap")]),a._v(" "),s("p",[a._v("上面提到的例子，利用ConfigMap可以解耦部署与配置的关系，对于同一个应用部署文件，可以利用"),s("code",[a._v("valueFrom")]),a._v("字段引用一个在测试环境和生产环境都有的ConfigMap（当然配置内容不相同，只是名字相同），就可以降低环境管理和部署的复杂度。")]),a._v(" "),s("imgLink",{attrs:{src:"date/20191423/001.png"}}),a._v(" "),s("p",[a._v("ConfigMap有三种用法：")]),a._v(" "),s("ul",[s("li",[a._v("生成为容器内的环境变量")]),a._v(" "),s("li",[a._v("设置容器启动命令的参数")]),a._v(" "),s("li",[a._v("挂载为容器内部的文件或目录")])]),a._v(" "),s("h3",{attrs:{id:"configmap的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configmap的缺点","aria-hidden":"true"}},[a._v("#")]),a._v(" ConfigMap的缺点")]),a._v(" "),s("ul",[s("li",[a._v("ConfigMap必须在Pod之前创建")]),a._v(" "),s("li",[a._v("ConfigMap属于某个NameSpace，只有处于相同NameSpace的Pod才可以应用它")]),a._v(" "),s("li",[a._v("ConfigMap中的配额管理还未实现")]),a._v(" "),s("li",[a._v("如果是volume的形式挂载到容器内部，只能挂载到某个目录下，该目录下原有的文件会被覆盖掉")]),a._v(" "),s("li",[a._v("静态Pod不能用ConfigMap")])]),a._v(" "),s("h3",{attrs:{id:"configmap的创建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configmap的创建","aria-hidden":"true"}},[a._v("#")]),a._v(" ConfigMap的创建")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl create configmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("map-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter-value"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ kubectl create configmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("map-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter1"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter1-value"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter2"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter2-value"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-literal"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter3"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("parameter3-value"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ kubectl create configmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("map-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("file-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ kubectl apply -f "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("configmap-file.yaml"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 还可以从一个文件夹创建configmap")]),a._v("\n$ kubectl create configmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("map-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/dir\n")])])]),s("h3",{attrs:{id:"yaml的声明方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml的声明方式","aria-hidden":"true"}},[a._v("#")]),a._v(" yaml的声明方式")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("my-nginx-config.conf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[a._v("\n    server {\n      listen              80;\n      server_name         www.kubia-example.com;")]),a._v("\n\n      gzip on;\n      gzip_types text/plain application/xml;\n\n      location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("sleep-interval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[a._v("\n    25")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ConfigMap\n")])])]),s("h3",{attrs:{id:"configmap的调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configmap的调用","aria-hidden":"true"}},[a._v("#")]),a._v(" ConfigMap的调用")]),a._v(" "),s("h4",{attrs:{id:"环境变量的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量的方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 环境变量的方式")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("configmap\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" INTERVAL\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("configMapKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("interval\n")])])]),s("p",[a._v("::: warning 注意\n如果引用了一个不存在的ConfigMap，则创建Pod时会报错，直到能够正常读取ConfigMap后，Pod会自动创建。\n:::")]),a._v(" "),s("p",[a._v("一次传递所有的环境变量")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("envFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("prefix")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" CONFIG_\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("configMapRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n")])])]),s("h4",{attrs:{id:"命令行参数的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数的方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令行参数的方式")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("configmap\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" INTERVAL\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("valueFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("configMapKeyRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("interval\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("args")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"$(INTERVAL)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h4",{attrs:{id:"以配置文件的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以配置文件的方式","aria-hidden":"true"}},[a._v("#")]),a._v(" 以配置文件的方式")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" v1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" Pod\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("test\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" web"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("server\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" config\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /etc/nginx/conf.d\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("readOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" config\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("configMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("将Configmap挂载为一个文件夹后，原来在镜像中的文件夹里的内容就看不到，这是什么原理？这是因为原来文件夹下的内容无法进入，所以显示不出来。为了避免这种挂载方式影响应用的正常运行，可以将configmap挂载为一个配置文件。")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("containers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nginx\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumeMounts")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" config\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("mountPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /etc/someconfig.conf\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("subPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" myconfig.conf\n")])])]),s("imgLink",{attrs:{src:"date/20190423/002.png"}}),a._v(" "),s("h3",{attrs:{id:"configmap的更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configmap的更新","aria-hidden":"true"}},[a._v("#")]),a._v(" Configmap的更新")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl edit configmap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("map-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("confgimap更新后，如果是以文件夹方式挂载的，会自动将挂载的Volume更新。如果是以文件形式挂载的，则不会自动更新。\n但是对多数情况的应用来说，配置文件更新后，最简单的办法就是重启Pod（杀掉再重新拉起）。如果是以文件夹形式挂载的，可以通过在容器内重启应用的方式实现配置文件更新生效。即便是重启容器内的应用，也要注意configmap的更新和容器内挂载文件的更新不是同步的，可能会有延时，因此一定要确保容器内的配置也已经更新为最新版本后再重新加载应用。")]),a._v(" "),s("p",[a._v("如果是以文件创建的, 使用:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl replace -f k8s-configmap.yaml\n")])])]),s("h2",{attrs:{id:"保密字典-secret"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保密字典-secret","aria-hidden":"true"}},[a._v("#")]),a._v(" 保密字典 (Secret)")]),a._v(" "),s("p",[a._v("Secret与ConfigMap类似，但是用来存储敏感信息。Secret是用来保存和传递密码、密钥、认证凭证这些敏感信息的对象。使用Secret的好处是可以避免把敏感信息明文写在配置文件里。在Kubernetes集群中配置和使用服务不可避免的要用到各种敏感信息实现登录、认证等功能，例如访问AWS存储的用户名密码。为了避免将类似的敏感信息明文写在所有需要使用的配置文件中，可以将这些信息存入一个Secret对象，而在配置文件中通过Secret对象引用这些敏感信息。这种方式的好处包括：意图明确，避免重复，减少暴漏机会。")]),a._v(" "),s("p",[a._v("在Master节点上，secret以非加密的形式存储（意味着我们要对master严加管理）。从Kubernetes1.7之后，etcd以加密的形式保存secret。secret的大小被限制为1MB。当Secret挂载到Pod上时，是以tmpfs的形式挂载，即这些内容都是保存在节点的内存中，而不是写入磁盘，通过这种方式来确保信息的安全性。")]),a._v(" "),s("p",[a._v("每个Kubernetes集群都有一个默认的secrets")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ kubectl get secrets -n "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),a._v("\n")])])]),s("p",[a._v("创建和调用的过程与configmap大同小异")]),a._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://kubernetes.io/zh/docs/concepts/configuration/secret/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kubernetes 中文文档: Secret"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/cocowool/p/kubernetes_configmap_secret.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Kubernetes中的Configmap和Secret"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=e.exports}}]);