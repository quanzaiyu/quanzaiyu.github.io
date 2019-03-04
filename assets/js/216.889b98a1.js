(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{620:function(a,e,t){"use strict";t.r(e);var s=t(1),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile")]),a._v(" "),t("h2",{attrs:{id:"dockerfile-文件格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-文件格式","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile 文件格式")]),a._v(" "),t("h3",{attrs:{id:"注释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[a._v("#")]),a._v(" 注释")]),a._v(" "),t("p",[a._v("以 # 开头的是注释语句")]),a._v(" "),t("h3",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 指令")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("INSTRUCTION argument\n")])])]),t("h2",{attrs:{id:"常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用指令")]),a._v(" "),t("h3",{attrs:{id:"from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from","aria-hidden":"true"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),t("p",[a._v("指定基础镜像。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM [image]\nFROM [image:tag]\n")])])]),t("ul",[t("li",[a._v("必须是已经存在的基础镜像")]),a._v(" "),t("li",[a._v("必须是第一条非注释指令")])]),a._v(" "),t("h3",{attrs:{id:"maintainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintainer","aria-hidden":"true"}},[a._v("#")]),a._v(" MAINTAINER")]),a._v(" "),t("p",[a._v("指定镜像的作者信息，包括镜像的所有者和联系信息。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MAINTAINER [name]\n")])])]),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),t("p",[a._v("指定当前镜像中运行的命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('RUN [command] # shell 模式\nRUN ["executable", "param1", "param2"] # exec 模式\n')])])]),t("p",[a._v("在 shell 模式下，是以 "),t("code",[a._v("/bin/sh -c command")]),a._v(" 开始执行命令")]),a._v(" "),t("p",[a._v("比如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("RUN echo hello\n")])])]),t("p",[a._v("在 exec 模式下，可以使用其他的 shell 执行命令")]),a._v(" "),t("p",[a._v("每个 RUN 命令都会在当前镜像上层创建一个新的镜像来运行命令。")]),a._v(" "),t("p",[a._v("所以，不要过多书写 RUN 指令，尽量将多个命令合并。")]),a._v(" "),t("h3",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose","aria-hidden":"true"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),t("p",[a._v("指定运行该镜像的容器使用的端口。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("EXPOSE [port1] [port2] ...\n")])])]),t("p",[a._v("但是运行时Docker并不会自动开启对应服务，还需要手动开启对应的服务并添加端口的映射指令，比如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ docker run --name nginx-server -p 80 -d ubuntu:latest nginx -g "daemon off;"\n')])])]),t("h3",{attrs:{id:"cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd","aria-hidden":"true"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),t("p",[a._v("跟 RUN 命令使用方法类似，也是运行一个指令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('CMD [command] # shell 模式\nCMD ["executable", "param1", "param2"] # exec 模式\nCMD ["param1", "param2"] # 作为 ENTRYPOINT 指令的默认参数\n')])])]),t("p",[a._v("与 RUN 命令的区别：")]),a._v(" "),t("ul",[t("li",[a._v("RUN 命令时在镜像构建时运行")]),a._v(" "),t("li",[a._v("CMD 命令是在容器启动时运行")])]),a._v(" "),t("p",[a._v("比如;")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CMD ['/usr/sbin/nginx', '-g', 'deamon off;']\n")])])]),t("p",[a._v("指定 CMD 命令之后，运行容器的时候就不需要在后面加上运行参数了，不过还是得指定端口映射：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ docker run --name nginx-server -p 80 -d ubuntu:latest\n")])])]),t("p",[a._v("::: tip 注意\n如果在启动一个容器时，指定了运行时命令，则 CMD 中的命令会被覆盖。\n:::")]),a._v(" "),t("h3",{attrs:{id:"entrypoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint","aria-hidden":"true"}},[a._v("#")]),a._v(" ENTRYPOINT")]),a._v(" "),t("p",[a._v("也是运行一个命令，与 RUN 不同的是，ENTRYPOINT 中的指令不会被运行容器时覆盖。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ENTRYPOINT [command] # shell 模式\nENTRYPOINT ["executable", "param1", "param2"] # exec 模式\n')])])]),t("p",[a._v("运行容器时如果必须覆盖 ENTRYPOINT 中的命令，需要使用")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -- entrypoint [command]\n")])])]),t("p",[a._v("进行覆盖。")]),a._v(" "),t("h3",{attrs:{id:"add-和-copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-和-copy","aria-hidden":"true"}},[a._v("#")]),a._v(" ADD 和 COPY")]),a._v(" "),t("p",[a._v("ADD 和 COPY 都是复制文件。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ADD [src]...  [dest]\nADD ["src"... "dest"] # 适用于文件路径中有空格的情况\n\nCOPY [src]...  [dest]\nCOPY ["src"... "dest"] # 适用于文件路径中有空格的情况\n')])])]),t("p",[a._v("区别为：ADD 包含了类似 tar 的解压功能")]),a._v(" "),t("p",[a._v("如果只是简单的复制文件，推荐使用 COPY。")]),a._v(" "),t("h3",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),t("p",[a._v("用来向基于镜像创建的容器添加卷。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('VOLUME ["/data"]\n')])])]),t("h3",{attrs:{id:"workdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workdir","aria-hidden":"true"}},[a._v("#")]),a._v(" WORKDIR")]),a._v(" "),t("p",[a._v("设置工作目录，即创建容器后进入的目录，CMD 和 ENTRYPOINT 命令都会在这个目录下执行。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("WORKDIR /path/to/dir\n")])])]),t("h3",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env","aria-hidden":"true"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),t("p",[a._v("设置环境变量。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ENV [key] [value]\nENV [key]=[value]\n")])])]),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[a._v("#")]),a._v(" USER")]),a._v(" "),t("p",[a._v("指定容器为哪个用户运行，可以使用uid（用户）和gid（用户组），以及其组合。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("USER daemon\n")])])]),t("p",[a._v("有以下几种组合：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("USER user\nUSER user:group\nUSER user:gid\nUSER uid\nUSER uid:group\nUSER uid:gid\n")])])]),t("p",[a._v("默认使用 root 用户。")]),a._v(" "),t("h3",{attrs:{id:"onbuild"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onbuild","aria-hidden":"true"}},[a._v("#")]),a._v(" ONBUILD")]),a._v(" "),t("p",[a._v("ONBUILD 是一个镜像触发器。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ONBUILD [INSTRUCTION]\n")])])]),t("p",[a._v("当一个镜像被其他镜像作为基础镜像时执行，会在构建过程中插入指令。")]),a._v(" "),t("h2",{attrs:{id:"dockerfile-示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-示例","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile 示例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# My First Dockerfile\nFROM ubuntu:14.04\nMAINTAINER quanzaiyu \"quanzaiyu@163.com\"\nENV REFERSH_DATE 2015-04-01\nRUN apt-get update && apt-get install -y nginx\nCOPY index.html /usr/share/nginx/html # 将宿主机的文件覆盖到容器中\nEXPOSE 80\nENTRYPOINT ['/usr/sbin/nginx', '-g', 'deamon off;']\nCMD echo 'created'\n")])])]),t("h3",{attrs:{id:"为-centos-安装常用工具："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为-centos-安装常用工具：","aria-hidden":"true"}},[a._v("#")]),a._v(" 为 CentOS 安装常用工具：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM centos:latest\nRUN yum update -y && yum install net-tools.x86_64 -y\nEXPOSE 80\nCMD /bin/bash\n")])])]),t("h2",{attrs:{id:"使用-dockerfile-构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerfile-构建镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Dockerfile 构建镜像")]),a._v(" "),t("p",[a._v("使用 docker build 构建镜像的格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ docker build [OPTIONS] PATH | URL | -\n")])])]),t("p",[a._v("其中 OPTIONS 包括：")]),a._v(" "),t("ul",[t("li",[a._v("--force-rm=false")]),a._v(" "),t("li",[a._v("--no-cache=false")]),a._v(" "),t("li",[a._v("--pull=false")]),a._v(" "),t("li",[a._v("-q, --quiet-false")]),a._v(" "),t("li",[a._v("--rm=true")]),a._v(" "),t("li",[a._v('-t, --tag="" 为镜像取个名字（打标签）')])]),a._v(" "),t("p",[a._v("如果 Docker 文件就在当前目录，则：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ docker build -t "731734107/test" .\n')])])]),t("h2",{attrs:{id:"dockerfile-构建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-构建过程","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile 构建过程")]),a._v(" "),t("ol",[t("li",[a._v("从基础镜像运行一个容器")]),a._v(" "),t("li",[a._v("执行一条指令，对容器做出修改")]),a._v(" "),t("li",[a._v("执行类似 docker commit 的操作，提交一个新的镜像层")]),a._v(" "),t("li",[a._v("再基于刚提交的镜像运行一个新容器")]),a._v(" "),t("li",[a._v("执行 Dockerfile 中的下一条指令，直至所有指令执行完毕")])]),a._v(" "),t("p",[a._v("构建过程中，会生成一些中间层镜像，可以使用中间层镜像进行调试，便于定位错误的位置。")]),a._v(" "),t("p",[a._v("正常情况下，构建镜像会用到缓存，这样可以提升构建速度，但有的时候不想用缓存，可以在构建命令中加入 "),t("code",[a._v("--no-cache")]),a._v(" 选项。")]),a._v(" "),t("p",[a._v("另外，修改环境变量也可以刷新缓存，比如上面的 Dockerfile 示例中，改变 REFERSH_DATE 的值即可。")]),a._v(" "),t("p",[a._v("可以使用 "),t("code",[a._v("docker history")]),a._v(" 命令查看镜像的构建过程。")])])},[],!1,null,null,null);e.default=r.exports}}]);