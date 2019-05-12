(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{634:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-私有仓库的搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库的搭建","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 私有仓库的搭建")]),t._v(" "),e("h2",{attrs:{id:"阿里云私有镜像仓"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阿里云私有镜像仓","aria-hidden":"true"}},[t._v("#")]),t._v(" 阿里云私有镜像仓")]),t._v(" "),e("p",[t._v("地址: "),e("a",{attrs:{href:"https://cr.console.aliyun.com/cn-shenzhen/instances/repositories",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cr.console.aliyun.com/cn-shenzhen/instances/repositories"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("过程很简单, 首先申请开通阿里云私有镜像仓, 然后使用此账号登录即可, 比如:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker login --username"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx@qq.com registry.cn-shenzhen.aliyuncs.com\n")])])]),e("p",[t._v("然后创建一个命名空间:")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190424/003.png"}}),t._v(" "),e("p",[t._v("将本地的镜像重新打标签并上传即可, 比如:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker tag "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ImageId"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" registry.cn-shenzhen.aliyuncs.com/quanzaiyu/kubernetes-dashboard-amd64:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("镜像版本号"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ docker push registry.cn-shenzhen.aliyuncs.com/quanzaiyu/kubernetes-dashboard-amd64:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("镜像版本号"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("同时, 还可以使用镜像加速服务:")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190424/002.png"}}),t._v(" "),e("p",[t._v("上传到私有仓库的镜像:")]),t._v(" "),e("imgLink",{attrs:{src:"date/20190424/002.png"}}),t._v(" "),e("h2",{attrs:{id:"registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registry","aria-hidden":"true"}},[t._v("#")]),t._v(" Registry")]),t._v(" "),e("h3",{attrs:{id:"docker-注册服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-注册服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" Docker 注册服务器")]),t._v(" "),e("p",[t._v("下载 registry 镜像, 并创建容器")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ docker pull registry "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载Docker注册服务器镜像")]),t._v("\n$ docker run -d \\\n  -p 5000:5000 \\\n  --name server-registry \\\n  -v /tmp/registry:/tmp/registry \\\n  registry "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行Docker注册服务器")]),t._v("\n")])])]),e("h3",{attrs:{id:"将私有仓库上传到docker注册服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将私有仓库上传到docker注册服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 将私有仓库上传到Docker注册服务器")]),t._v(" "),e("p",[t._v("首先，得对需要上传的镜像打标签，并指定Docker注册服务器的地址")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@node1 ~]# docker tag centos:latest localhost:5000/centos:1.0\n")])])]),e("p",[t._v("然后，将打了标签的镜像上传到Docker注册服务器：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@node1 ~]# docker push localhost:5000/centos:1.0\nThe push refers to a repository [localhost:5000/centos]\nf972d139738d: Pushed\n1.0: digest: sha256:dc29e2bcceac52af0f01300402f5e756cc8c44a310867f6b94f5f7271d4f3fec size: 529\n")])])]),e("p",[t._v("注意，这里由于是在一台机子上演示的，所以意义不大，通常我们会在另一台机器上开一个Docker注册服务器。将镜像上传到另一个机器上, 这里的 localhost:5000 就是另一台机器的镜像仓库地址。")]),t._v(" "),e("h3",{attrs:{id:"拉取私有仓库镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取私有仓库镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 拉取私有仓库镜像")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@node1 ~]# docker pull localhost:5000/centos:1.0\nTrying to pull repository localhost:5000/centos ...\n1.0: Pulling from localhost:5000/centos\nDigest: sha256:dc29e2bcceac52af0f01300402f5e756cc8c44a310867f6b94f5f7271d4f3fec\nStatus: Image is up to date for localhost:5000/centos:1.0\n\n# 如果没有指定标签，而指定镜像又没有latest标签，则报错\n\n[root@node1 ~]# docker pull localhost:5000/centos\nUsing default tag: latest\nTrying to pull repository localhost:5000/centos ...\nPulling repository localhost:5000/centos\nError: image centos:latest not found\n")])])]),e("h2",{attrs:{id:"harbor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#harbor","aria-hidden":"true"}},[t._v("#")]),t._v(" Harbor")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.51cto.com/11093860/2117805",target:"_blank",rel:"noopener noreferrer"}},[t._v("Harbor仓库介绍与搭建过程"),e("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=r.exports}}]);