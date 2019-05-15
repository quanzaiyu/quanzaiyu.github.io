(window.webpackJsonp=window.webpackJsonp||[]).push([[388],{653:function(a,e,t){"use strict";t.r(e);var s=t(1),r=Object(s.a)({},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"dockerfile-详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-详解","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile 详解")]),a._v(" "),t("p",[a._v("Dockerfile是一个包含用于组合映像的命令的文本文档。可以使用在命令行中调用任何命令。 Docker通过读取Dockerfile中的指令自动生成映像。")]),a._v(" "),t("h2",{attrs:{id:"文件格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件格式")]),a._v(" "),t("p",[a._v("Dockerfile 一般分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令，’#’ 为 Dockerfile 中的注释。")]),a._v(" "),t("ul",[t("li",[a._v("注释: 以 # 开头的是注释语句")]),a._v(" "),t("li",[a._v("指令: "),t("code",[a._v("INSTRUCTION argument")])])]),a._v(" "),t("h2",{attrs:{id:"常用指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用指令","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用指令")]),a._v(" "),t("h3",{attrs:{id:"from"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from","aria-hidden":"true"}},[a._v("#")]),a._v(" FROM")]),a._v(" "),t("p",[a._v("指定基础镜像。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM [image] # 使用 latest 版本\nFROM [image:tag] # 使用指定版本\n")])])]),t("ul",[t("li",[a._v("必须是已经存在的基础镜像")]),a._v(" "),t("li",[a._v("必须是第一条非注释指令")])]),a._v(" "),t("h3",{attrs:{id:"maintainer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintainer","aria-hidden":"true"}},[a._v("#")]),a._v(" MAINTAINER")]),a._v(" "),t("p",[a._v("指定镜像的作者信息，包括镜像的所有者和联系信息")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MAINTAINER [name]\n")])])]),t("p",[a._v("示例:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MAINTAINER quanzaiyu\nMAINTAINER 731734107@qq.com\nMAINTAINER quanzaiyu <731734107@qq.com>\n")])])]),t("h3",{attrs:{id:"run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[a._v("#")]),a._v(" RUN")]),a._v(" "),t("p",[a._v("指定当前镜像中运行的命令。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('RUN [command] # shell 模式\nRUN ["executable", "param1", "param2"] # exec 模式\n')])])]),t("p",[a._v("在 shell 模式下，是以 "),t("code",[a._v("/bin/sh -c command")]),a._v(" 开始执行命令")]),a._v(" "),t("p",[a._v("比如：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("RUN echo hello\n")])])]),t("p",[a._v("在 exec 模式下，可以使用其他的 shell 执行命令")]),a._v(" "),t("p",[a._v("RUN指令创建的中间镜像会被缓存，并会在下次构建中使用 (因此, 不要过多书写 RUN 指令，尽量将多个命令合并)。如果不想使用这些缓存镜像，可以在构建时指定--no-cache参数，如：docker build --no-cache")]),a._v(" "),t("h3",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose","aria-hidden":"true"}},[a._v("#")]),a._v(" EXPOSE")]),a._v(" "),t("p",[a._v("指定运行该镜像的容器使用的端口。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("EXPOSE [port1] [port2] ...\n")])])]),t("p",[a._v("但是运行时Docker并不会自动开启对应服务，还需要手动开启对应的服务并添加端口的映射指令，比如：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run --name nginx-server -p 80 -d ubuntu:latest nginx -g "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"daemon off;"')]),a._v("\n")])])]),t("h3",{attrs:{id:"cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd","aria-hidden":"true"}},[a._v("#")]),a._v(" CMD")]),a._v(" "),t("p",[a._v("跟 RUN 命令使用方法类似，也是运行一个指令：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('CMD [command] # shell 模式\nCMD ["executable", "param1", "param2"] # exec 模式\nCMD ["param1", "param2"] # 作为 ENTRYPOINT 指令的默认参数\n')])])]),t("p",[a._v("与 RUN 命令的区别：")]),a._v(" "),t("ul",[t("li",[a._v("RUN 命令时在镜像构建时运行")]),a._v(" "),t("li",[a._v("CMD 命令是在容器启动时运行")])]),a._v(" "),t("p",[a._v("比如:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CMD ['/usr/sbin/nginx', '-g', 'deamon off;']\n")])])]),t("p",[a._v("指定 CMD 命令之后，运行容器的时候就不需要在后面加上运行参数了，不过还是得指定端口映射：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run --name nginx-server -p 80 -d ubuntu:latest\n")])])]),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),t("p",[a._v("如果在启动一个容器时，指定了运行时命令，则 CMD 中的命令会被覆盖。")])]),a._v(" "),t("h3",{attrs:{id:"entrypoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint","aria-hidden":"true"}},[a._v("#")]),a._v(" ENTRYPOINT")]),a._v(" "),t("p",[a._v("也是运行一个命令，与 RUN 不同的是，ENTRYPOINT 中的指令不会被运行容器时覆盖。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ENTRYPOINT [command] # shell 模式\nENTRYPOINT ["executable", "param1", "param2"] # exec 模式\n')])])]),t("p",[a._v("运行容器时如果必须覆盖 ENTRYPOINT 中的命令，需要使用")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -- entrypoint "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("进行覆盖。")]),a._v(" "),t("h3",{attrs:{id:"add-和-copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-和-copy","aria-hidden":"true"}},[a._v("#")]),a._v(" ADD 和 COPY")]),a._v(" "),t("p",[a._v("ADD 和 COPY 都是复制文件。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ADD [src]...  [dest]\nADD ["src"... "dest"] # 适用于文件路径中有空格的情况\n\nCOPY [src]...  [dest]\nCOPY ["src"... "dest"] # 适用于文件路径中有空格的情况\n')])])]),t("p",[a._v("区别为：ADD 包含了类似 tar 的解压功能")]),a._v(" "),t("ul",[t("li",[a._v("ADD: 将本地文件添加到容器中，tar类型文件会自动解压(网络压缩资源不会被解压)，可以访问网络资源，类似wget")]),a._v(" "),t("li",[a._v("COPY: 功能类似ADD，但是是不会自动解压文件，也不能访问网络资源")])]),a._v(" "),t("p",[a._v("如果只是简单的复制文件，推荐使用 COPY。")]),a._v(" "),t("h3",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume","aria-hidden":"true"}},[a._v("#")]),a._v(" VOLUME")]),a._v(" "),t("p",[a._v("用于指定持久化目录")]),a._v(" "),t("p",[a._v("格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('VOLUME ["/path/to/dir"]\n')])])]),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('VOLUME ["/data"]\nVOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"\n')])])]),t("p",[a._v("注：一个卷可以存在于一个或多个容器的指定目录，该目录可以绕过联合文件系统，并具有以下功能：")]),a._v(" "),t("ul",[t("li",[a._v("1 卷可以容器间共享和重用")]),a._v(" "),t("li",[a._v("2 容器并不一定要和其它容器共享卷")]),a._v(" "),t("li",[a._v("3 修改卷后会立即生效")]),a._v(" "),t("li",[a._v("4 对卷的修改不会对镜像产生影响")]),a._v(" "),t("li",[a._v("5 卷会一直存在，直到没有任何容器在使用它")])]),a._v(" "),t("h3",{attrs:{id:"workdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workdir","aria-hidden":"true"}},[a._v("#")]),a._v(" WORKDIR")]),a._v(" "),t("p",[a._v("设置工作目录，即创建容器后进入的目录，类似于cd命令。")]),a._v(" "),t("p",[a._v("格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("WORKDIR /path/to/dir\n")])])]),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("WORKDIR /a  (这时工作目录为/a)\nWORKDIR b  (这时工作目录为/a/b)\nWORKDIR c  (这时工作目录为/a/b/c)\n")])])]),t("p",[a._v("注：通过WORKDIR设置工作目录后，Dockerfile中其后的命令RUN、CMD、ENTRYPOINT、ADD、COPY等命令都会在该目录下执行。在使用\ndocker run 运行容器时，可以通过-w参数覆盖构建时所设置的工作目录。")]),a._v(" "),t("h3",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env","aria-hidden":"true"}},[a._v("#")]),a._v(" ENV")]),a._v(" "),t("p",[a._v("设置环境变量。")]),a._v(" "),t("p",[a._v("格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('ENV <key> <value>  # <key>之后的所有内容均会被视为其<value>的组成部分，因此，一次只能设置一个变量\nENV <key>=<value> ...  # 可以设置多个变量，每个变量为一个"<key>=<value>"的键值对，如果<key>中包含空格，可以使用\\来进行转义，也可以通过""来进行标示；另外，反斜线也可以用于续行\n')])])]),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ENV myName John Doe\nENV myDog Rex The Dog\nENV myCat=fluffy myDog=Rex\n")])])]),t("h3",{attrs:{id:"user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user","aria-hidden":"true"}},[a._v("#")]),a._v(" USER")]),a._v(" "),t("p",[a._v("指定容器为哪个用户运行，可以使用uid（用户）和gid（用户组），以及其组合。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("USER daemon\n")])])]),t("p",[a._v("有以下几种组合：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("USER user\nUSER user:group\nUSER user:gid\nUSER uid\nUSER uid:group\nUSER uid:gid\n")])])]),t("p",[a._v("默认使用 root 用户。")]),a._v(" "),t("h3",{attrs:{id:"onbuild"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#onbuild","aria-hidden":"true"}},[a._v("#")]),a._v(" ONBUILD")]),a._v(" "),t("p",[a._v("ONBUILD 用于设置镜像触发器")]),a._v(" "),t("p",[a._v("格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ONBUILD [INSTRUCTION]\n")])])]),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ONBUILD ADD . /app/src\nONBUILD RUN /usr/local/bin/python-build --dir /app/src\n")])])]),t("p",[a._v("注：当所构建的镜像被用做其它镜像的基础镜像，该镜像中的触发器将会被触发")]),a._v(" "),t("h3",{attrs:{id:"label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#label","aria-hidden":"true"}},[a._v("#")]),a._v(" LABEL")]),a._v(" "),t("p",[a._v("用于为镜像添加元数据")]),a._v(" "),t("p",[a._v("格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("LABEL <key>=<value> <key>=<value> <key>=<value> ...\n")])])]),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('LABEL version="1.0" description="这是一个Web服务器" by="IT笔录"\n')])])]),t("p",[a._v("注：使用LABEL指定元数据时，一条LABEL指定可以指定一或多条元数据，指定多条元数据时不同元数据之间通过空格分隔。推荐将所有的元数据通过一条LABEL指令指定，以免生成过多的中间镜像。")]),a._v(" "),t("h3",{attrs:{id:"arg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arg","aria-hidden":"true"}},[a._v("#")]),a._v(" ARG")]),a._v(" "),t("p",[a._v("用于指定传递给构建运行时的变量")]),a._v(" "),t("p",[a._v("格式：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ARG <name>[=<default value>]\n")])])]),t("p",[a._v("示例：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ARG site\nARG build_user=www\n")])])]),t("h2",{attrs:{id:"dockerfile-示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-示例","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile 示例")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM ubuntu:14.04\nMAINTAINER quanzaiyu \"quanzaiyu@163.com\"\nENV REFERSH_DATE 2015-04-01\nRUN apt-get update && apt-get install -y nginx\nCOPY index.html /usr/share/nginx/html # 将宿主机的文件覆盖到容器中\nEXPOSE 80\nENTRYPOINT ['/usr/sbin/nginx', '-g', 'deamon off;']\nCMD echo 'created'\n")])])]),t("p",[a._v("为 CentOS 安装常用工具")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FROM centos:latest\nRUN yum update -y && yum install net-tools.x86_64 -y\nEXPOSE 80\nCMD /bin/bash\n")])])]),t("h2",{attrs:{id:"使用-dockerfile-构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-dockerfile-构建镜像","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Dockerfile 构建镜像")]),a._v(" "),t("p",[a._v("docker build 命令用于从 Dockerfile 构建镜像")]),a._v(" "),t("p",[a._v("可以在 docker build 命令中使用 -f 标志指向文件系统中任何位置的 Dockerfile, 加上 -t 为构建的镜像打标签")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker build -t "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'731734107/test'")]),a._v(" -f /path/to/a/Dockerfile "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 以指定路径的Dockerfile进行构建")]),a._v("\n")])])]),t("p",[a._v("如果 Docker 文件就在当前目录，则：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ docker build -t "731734107/test" .\n')])])]),t("h2",{attrs:{id:"dockerfile-构建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-构建过程","aria-hidden":"true"}},[a._v("#")]),a._v(" Dockerfile 构建过程")]),a._v(" "),t("ol",[t("li",[a._v("从基础镜像运行一个容器")]),a._v(" "),t("li",[a._v("执行一条指令，对容器做出修改")]),a._v(" "),t("li",[a._v("执行类似 docker commit 的操作，提交一个新的镜像层")]),a._v(" "),t("li",[a._v("再基于刚提交的镜像运行一个新容器")]),a._v(" "),t("li",[a._v("执行 Dockerfile 中的下一条指令，直至所有指令执行完毕")])]),a._v(" "),t("p",[a._v("构建过程中，会生成一些中间层镜像，可以使用中间层镜像进行调试，便于定位错误的位置。")]),a._v(" "),t("p",[a._v("正常情况下，构建镜像会用到缓存，这样可以提升构建速度，但有的时候不想用缓存，可以在构建命令中加入 "),t("code",[a._v("--no-cache")]),a._v(" 选项。")]),a._v(" "),t("p",[a._v("另外，修改环境变量也可以刷新缓存，比如上面的 Dockerfile 示例中，改变 REFERSH_DATE 的值即可。")]),a._v(" "),t("p",[a._v("可以使用 "),t("code",[a._v("docker history")]),a._v(" 命令查看镜像的构建过程。")]),a._v(" "),t("h2",{attrs:{id:"结束语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[a._v("#")]),a._v(" 结束语")]),a._v(" "),t("p",[a._v("最后附上一张很不错的图, 生动地展现了各种命令的作用:")]),a._v(" "),t("imgLink",{attrs:{src:"date/20190424/001.png"}}),a._v(" "),t("p",[a._v("图片来源: https://www.cnblogs.com/panwenbin-logs/p/8007348.html")])],1)},[],!1,null,null,null);e.default=r.exports}}]);