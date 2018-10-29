(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{570:function(s,a,e){"use strict";e.r(a);var n={props:["slot-key"]},t=e(0),r=Object(t.a)(n,function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[e("h1",{attrs:{id:"镜像相关概念及相关操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关概念及相关操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 镜像相关概念及相关操作")]),s._v(" "),e("h2",{attrs:{id:"搜索镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 搜索镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker search [关键词]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("比如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker search centos\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 下载镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker pull [image:tag]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 <仓库名/镜像名>:<标签> 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 latest 作为默认标签。")]),s._v(" "),e("p",[s._v("tag可以不指定，默认使用 latest，代表最新版")]),s._v(" "),e("p",[s._v("比如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker pull centos\n\n# or\n\n$ docker pull centos:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"列出所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出所有镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 列出所有镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker images\n\n# or\n\n$ docker image ls\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("列表包含了 仓库名、标签、镜像 ID、创建时间 以及 所占用的空间。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker images\nREPOSITORY           TAG                 IMAGE ID            CREATED             SIZE\nredis                latest              5f515359c7f8        5 days ago          183 MB\nnginx                latest              05a60462f8ba        5 days ago          181 MB\nubuntu               16.04               f753707788c5        4 weeks ago         127 MB\nubuntu               latest              f753707788c5        4 weeks ago         127 MB\n<none>               <none>              00285df0df87        5 days ago          342 MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("列出部分镜像：比如只需要列出 ubuntu 相关的镜像，使用以下命令即可：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image ls ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"虚悬镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚悬镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 虚悬镜像")]),s._v(" "),e("p",[s._v("上面的镜像列表中，还可以看到一个特殊的镜像，这个镜像既没有仓库名，也没有标签，均为 "),e("code",[s._v("<none>")]),s._v("。")]),s._v(" "),e("p",[s._v("这个镜像原本是有镜像名和标签的，原来为 mongo:3.2，随着官方镜像维护，发布了新版本后，重新 docker pull mongo:3.2 时，mongo:3.2 这个镜像名被转移到了新下载的镜像身上，而旧的镜像上的这个名称则被取消，从而成为了 "),e("code",[s._v("<none>")]),s._v("。除了 docker pull 可能导致这种情况，docker build 也同样可以导致这种现象。由于新旧镜像同名，旧镜像名称被取消，从而出现仓库名、标签均为 "),e("code",[s._v("<none>")]),s._v(" 的镜像。这类无标签镜像也被称为 虚悬镜像(dangling image) ，可以用下面的命令专门显示这类镜像：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image ls -f dangling=true\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n<none>              <none>              00285df0df87        5 days ago          342 MB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("一般来说，虚悬镜像已经失去了存在的价值，是可以随意删除的，可以用下面的命令删除。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image prune\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"中间层镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间层镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 中间层镜像")]),s._v(" "),e("p",[s._v("为了加速镜像构建、重复利用资源，Docker 会利用 中间层镜像。所以在使用一段时间后，可能会看到一些依赖的中间层镜像。默认的 docker image ls 列表中只会显示顶层镜像，如果希望显示包括中间层镜像在内的所有镜像的话，需要加 -a 参数。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image ls -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这样会看到很多无标签的镜像，与之前的虚悬镜像不同，这些无标签的镜像很多都是中间层镜像，是其它镜像所依赖的镜像。这些无标签镜像不应该删除，否则会导致上层镜像因为依赖丢失而出错。实际上，这些镜像也没必要删除，因为之前说过，相同的层只会存一遍，而这些镜像是别的镜像的依赖，因此并不会因为它们被列出来而多存了一份，无论如何你也会需要它们。只要删除那些依赖它们的镜像后，这些依赖的中间层镜像也会被连带删除。")]),s._v(" "),e("h2",{attrs:{id:"删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker rmi [image1] [image2]...\n\n# or\n\n$ $ docker image rm [option] [image1] [image2]...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("参数有：")]),s._v(" "),e("ul",[e("li",[s._v("-f： --force 强制删除")])]),s._v(" "),e("p",[s._v("与ls命令配合批量删除镜像：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker image rm $(docker image ls -q redis)\n$ docker image rm $(docker image ls -q -f before=mongo:3.2)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"镜像体积"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像体积","aria-hidden":"true"}},[s._v("#")]),s._v(" 镜像体积")]),s._v(" "),e("p",[s._v("可以通过以下命令来便捷的查看镜像、容器、数据卷所占用的空间:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker system df\n\nTYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE\nImages              24                  0                   1.992GB             1.992GB (100%)\nContainers          1                   0                   62.82MB             62.82MB (100%)\nLocal Volumes       9                   0                   652.2MB             652.2MB (100%)\nBuild Cache                                                 0B                  0B\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"上传镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 上传镜像")]),s._v(" "),e("p",[s._v("上传镜像之前，需要先登录docker：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker login -u [用户名] -p [密码]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里我的用户名是 731734107")]),s._v(" "),e("p",[s._v("将容器保存为镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ docker commit -m "change" -a "quanzaiyu" server1 731734107/test\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("或者给已有的镜像打标签")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ docker tag centos 731734107/test\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("需要上传的镜像名需要以自己的用户名开头")])]),s._v(" "),e("p",[s._v("搜索镜像，发现已经有咯：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@node1 ~]# docker search 731734107\nINDEX       NAME                       DESCRIPTION   STARS     OFFICIAL   AUTOMATED\ndocker.io   docker.io/731734107/test                 0               \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])},[],!1,null,null,null);r.options.__file="Image.md";a.default=r.exports}}]);