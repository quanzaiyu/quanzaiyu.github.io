(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{918:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-compose-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-的使用","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 的使用")]),s._v(" "),a("h2",{attrs:{id:"docker-compose-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-概述","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 概述")]),s._v(" "),a("p",[s._v("Docker Compose是Docker官方编排（Orchestration）项目之一，负责快速的部署分布式应用。其代码目前在 "),a("a",{attrs:{href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/docker/compose"),a("OutboundLink")],1),s._v(" 上开源。Compose 定位是 「定义和运行多个 Docker 容器的应用（Defining and running multi-container Docker applications）」，其前身是开源项目Fig。")]),s._v(" "),a("p",[s._v("前面我们已经学习过使用一个Dockerfile模板文件，可以很方便的定义一个单独的应用容器。然而，在日常工作中，经常会碰到需要多个容器相互配合来完成某项任务的情况。例如要实现一个 Web 项目，除了 Web 服务容器本身，往往还需要再加上后端的数据库服务容器或者缓存服务容器，甚至还包括负载均衡容器等。Compose 恰好满足了这样的需求。它允许用户通过一个单独的 "),a("code",[s._v("docker-compose.yml")]),s._v(" 模板文件（YAML 格式）来定义一组相关联的应用容器为一个项目（project）。")]),s._v(" "),a("p",[s._v("Compose 中有两个重要的概念：")]),s._v(" "),a("ul",[a("li",[s._v("服务 (service)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。")]),s._v(" "),a("li",[s._v("项目 (project)：由一组关联的应用容器组成的一个完整业务单元，在 docker-compose.yml 文件中定义。")])]),s._v(" "),a("p",[s._v("Compose 的默认管理对象是项目，通过子命令对项目中的一组容器进行便捷地生命周期管理。Compose 项目由 Python 编写，实现上调用了 Docker 服务提供的 API 来对容器进行管理。所以只要所操作的平台支持 Docker API，就可以在其上利用 Compose 来进行编排管理。")]),s._v(" "),a("p",[a("strong",[s._v("使用 Docker Compose 可以轻松、高效的管理容器，它是一个用于定义和运行多容器 Docker 的应用程序工具")])]),s._v(" "),a("h2",{attrs:{id:"docker-compose-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 安装")]),s._v(" "),a("p",[s._v("安装很简单")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n$ yum -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python-pip\n$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-compose\n$ docker-compose version\ndocker-compose version 1.24.0, build 0aa5906\ndocker-py version: 3.7.2\nCPython version: 2.7.5\nOpenSSL version: OpenSSL 1.0.2k-fips  26 Jan 2017\n")])])]),a("h2",{attrs:{id:"docker-compose-的使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-的使用-2","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 的使用")]),s._v(" "),a("p",[s._v("Docker Compose 部署应用依赖于一个叫 "),a("code",[s._v("docker-compose.yml")]),s._v(" 的文件")]),s._v(" "),a("p",[s._v("部署应用")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose up -d\n$ docker-compose -f docker-compose.yml up -d\n")])])]),a("p",[s._v("查看服务的运行状态")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n     Name                    Command               State                     Ports\n-----------------------------------------------------------------------------------------------------\ntraefik_proxy_1   /traefik --web --docker -- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".   Up      0.0.0.0:80-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("80/tcp, 0.0.0.0:8080-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("8080/tcp\n")])])]),a("h2",{attrs:{id:"示例-python-完成页面统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-python-完成页面统计","aria-hidden":"true"}},[s._v("#")]),s._v(" 示例: Python 完成页面统计")]),s._v(" "),a("p",[s._v("下面我们用 Python 来建立一个能够记录页面访问次数的 web 网站。 新建文件夹，在该目录中编写"),a("code",[s._v("app.py")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" redis\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" flask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Flask\n\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Flask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncache "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_hit_count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    retries "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" cache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("incr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hits'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exceptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionError "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" exc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" retries "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("raise")]),s._v(" exc\n            retries "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("route"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    count "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" get_hit_count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello World! I have been seen {} times.\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("接着编写"),a("code",[s._v("Dockerfile")]),s._v("文件，内容为:")]),s._v(" "),a("div",{staticClass:"language-docker extra-class"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" python"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("3.6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" . /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /code\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pip install redis flask\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"python"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.py"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("然后是编写"),a("code",[s._v("docker-compose.yml")]),s._v("文件，这个是 Compose 使用的主模板文件。")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5000:5000"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/code\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis:alpine"')]),s._v("\n")])])]),a("p",[s._v("运行 compose 项目:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose up\n")])])]),a("p",[s._v("此时访问本地 5000 端口，每次刷新页面，计数就会加 1。")]),s._v(" "),a("h2",{attrs:{id:"docker-compose-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Compose 常用命令")]),s._v(" "),a("p",[s._v("docker-compose 命令的基本的使用格式是:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-f"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("命令选项")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("-f")]),s._v(", "),a("strong",[s._v("--file")]),s._v(" FILE 指定使用的 Compose 模板文件，默认为 docker-compose.yml，可以多次指定。")]),s._v(" "),a("li",[a("strong",[s._v("-p")]),s._v(", "),a("strong",[s._v("--project-name")]),s._v(" NAME 指定项目名称，默认将使用所在目录名称作为项目名。")]),s._v(" "),a("li",[a("strong",[s._v("--x-networking")]),s._v(" 使用 Docker 的可拔插网络后端特性")]),s._v(" "),a("li",[a("strong",[s._v("--x-network-driver")]),s._v(" DRIVER 指定网络后端的驱动，默认为 bridge")]),s._v(" "),a("li",[a("strong",[s._v("--verbose")]),s._v(" 输出更多调试信息。")]),s._v(" "),a("li",[a("strong",[s._v("-v")]),s._v(", "),a("strong",[s._v("--version")]),s._v(" 打印版本并退出。")])]),s._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[s._v("#")]),s._v(" build")]),s._v(" "),a("p",[s._v("构建（重新构建）项目中的服务容器。服务容器一旦构建后，将会带上一个标记名，例如对于 web 项目中的一个 db 容器，可能是 web_db。可以随时在项目目录下运行"),a("code",[s._v("docker-compose build")]),s._v("来重新构建服务。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose build "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("--force-rm")]),s._v(" 删除构建过程中的临时容器。")]),s._v(" "),a("li",[a("strong",[s._v("--no-cache")]),s._v(" 构建镜像过程中不使用 cache（这将加长构建过程）。")]),s._v(" "),a("li",[a("strong",[s._v("--pull")]),s._v(" 始终尝试通过 pull 来获取更新版本的镜像。")])]),s._v(" "),a("h3",{attrs:{id:"kill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kill","aria-hidden":"true"}},[s._v("#")]),s._v(" kill")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("通过发送"),a("code",[s._v("SIGKILL")]),s._v("信号来强制停止服务容器。支持通过"),a("code",[s._v("-s")]),s._v("参数来指定发送的信号，例如通过如下指令发送"),a("code",[s._v("SIGINT")]),s._v("信号。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ docker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -s SIGINT\n")])])]),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[s._v("#")]),s._v(" port")]),s._v(" "),a("p",[s._v("打印某个容器端口所映射的公共端口。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose port "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" SERVICE PRIVATE_PORT\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("--protocol=proto")]),s._v(" 指定端口协议，tcp（默认值）或者 udp。")]),s._v(" "),a("li",[a("strong",[s._v("--index=index")]),s._v(" 如果同一服务存在多个容器，指定命令对象容器的序号（默认为 1）。")])]),s._v(" "),a("h3",{attrs:{id:"ps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ps","aria-hidden":"true"}},[s._v("#")]),s._v(" ps")]),s._v(" "),a("p",[s._v("列出项目中目前的所有容器。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-q")]),s._v("只打印容器的 ID 信息。")])]),s._v(" "),a("h3",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull","aria-hidden":"true"}},[s._v("#")]),s._v(" pull")]),s._v(" "),a("p",[s._v("拉取服务依赖的镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[s._v("--ignore-pull-failures 忽略拉取镜像过程中的错误。")])]),s._v(" "),a("h3",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push","aria-hidden":"true"}},[s._v("#")]),s._v(" push")]),s._v(" "),a("p",[s._v("推送服务依赖的镜像到 Docker 镜像仓库。")]),s._v(" "),a("h3",{attrs:{id:"restart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restart","aria-hidden":"true"}},[s._v("#")]),s._v(" restart")]),s._v(" "),a("p",[s._v("重启项目中的服务。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[s._v("-t, --timeout TIMEOUT 指定重启前停止容器的超时（默认为 10 秒）。")])]),s._v(" "),a("h3",{attrs:{id:"rm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rm","aria-hidden":"true"}},[s._v("#")]),s._v(" rm")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("删除所有（停止状态的）服务容器。推荐先执行 "),a("code",[s._v("docker-compose stop")]),s._v("命令来停止容器。选项：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("-f")]),s._v(", "),a("strong",[s._v("--force")]),s._v(" 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。")]),s._v(" "),a("li",[a("strong",[s._v("-v")]),s._v(" 删除容器所挂载的数据卷。")])]),s._v(" "),a("h3",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run","aria-hidden":"true"}},[s._v("#")]),s._v(" run")]),s._v(" "),a("p",[s._v("在指定服务上执行一个命令。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-e KEY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("VAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" SERVICE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARGS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose run ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" docker.com\n")])])]),a("p",[s._v("将会启动一个 ubuntu 服务容器，并执行 ping docker.com 命令。默认情况下，如果存在关联，则所有关联的服务将会自动被启动，除非这些服务已经在运行中。")]),s._v(" "),a("p",[s._v("该命令类似启动容器后运行指定的命令，相关卷、链接等等都将会按照配置自动创建。")]),s._v(" "),a("p",[s._v("给定命令将会覆盖原有的自动运行命令； 不会自动创建端口，以避免冲突。")]),s._v(" "),a("p",[s._v("如果不希望自动启动关联的容器，可以使用"),a("code",[s._v("--no-deps")]),s._v("选项，例如:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose run --no-deps web python manage.py shell\n")])])]),a("p",[s._v("这将不会启动 web 容器所关联的其它容器,")]),s._v(" "),a("p",[s._v("选项：")]),s._v(" "),a("ul",[a("li",[s._v("-d 后台运行容器。")]),s._v(" "),a("li",[s._v("--name NAME 为容器指定一个名字。")]),s._v(" "),a("li",[s._v("--entrypoint CMD 覆盖默认的容器启动指令。")]),s._v(" "),a("li",[s._v("-e KEY=VAL 设置环境变量值，可多次使用选项来设置多个环境变量。")]),s._v(" "),a("li",[s._v('-u, --user="" 指定运行容器的用户名或者 uid。')]),s._v(" "),a("li",[s._v("--no-deps 不自动启动关联的服务容器。")]),s._v(" "),a("li",[s._v("--rm 运行命令后自动删除容器，d 模式下将忽略。")]),s._v(" "),a("li",[s._v("-p, --publish=[] 映射容器端口到本地主机。")]),s._v(" "),a("li",[s._v("--service-ports 配置服务端口并映射到本地主机。")]),s._v(" "),a("li",[s._v("-T 不分配伪 tty，意味着依赖 tty 的指令将无法运行。")])]),s._v(" "),a("h3",{attrs:{id:"scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale","aria-hidden":"true"}},[s._v("#")]),s._v(" scale")]),s._v(" "),a("p",[s._v("设置指定服务运行的容器个数。 通过 service=num 的参数来设置数量。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose scale "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NUM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ docker-compose scale web"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("3 db"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("2\n")])])]),a("p",[s._v("将启动 3 个容器运行 web 服务，2 个容器运行 db 服务。")]),s._v(" "),a("p",[s._v("一般的，当指定数目多于该服务当前实际运行容器，将新创建并启动容器；反之，将停止容器。选项：")]),s._v(" "),a("ul",[a("li",[s._v("-t, --timeout TIMEOUT 停止容器时候的超时（默认为 10 秒）。")])]),s._v(" "),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[s._v("#")]),s._v(" start")]),s._v(" "),a("p",[s._v("启动已经存在的服务容器。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"stop：格式为docker-compose-stop-options-service-停止已经处于运行状态的容器，但不删除它。通过docker-compose-start可以再次启动这些容器。选项："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop：格式为docker-compose-stop-options-service-停止已经处于运行状态的容器，但不删除它。通过docker-compose-start可以再次启动这些容器。选项：","aria-hidden":"true"}},[s._v("#")]),s._v(" stop：格式为"),a("strong",[s._v("docker-compose stop [options] [SERVICE...]")]),s._v(", 停止已经处于运行状态的容器，但不删除它。通过"),a("code",[s._v("docker-compose start")]),s._v("可以再次启动这些容器。选项：")]),s._v(" "),a("ul",[a("li",[s._v("-t, --timeout TIMEOUT 停止容器时候的超时（默认为 10 秒）。")])]),s._v(" "),a("h3",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs","aria-hidden":"true"}},[s._v("#")]),s._v(" logs")]),s._v(" "),a("p",[s._v("查看服务容器的输出。默认情况下，docker-compose 将对不同的服务输出使用不同的颜色来区分。可以通过 "),a("code",[s._v("--no-color")]),s._v("来关闭颜色。该命令在调试问题的时候十分有用。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose logs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"pause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pause","aria-hidden":"true"}},[s._v("#")]),s._v(" pause")]),s._v(" "),a("p",[s._v("暂停一个服务容器。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker-compose pause "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SERVICE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("h3",{attrs:{id:"其他命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 其他命令")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("config")]),s._v(" 验证 Compose 文件格式是否正确，若正确则显示配置，若格式错误显示错误原因。")]),s._v(" "),a("li",[a("strong",[s._v("down")]),s._v(" 此命令将会停止 up 命令所启动的容器，并移除网络")]),s._v(" "),a("li",[a("strong",[s._v("exec")]),s._v(" 进入指定的容器。")]),s._v(" "),a("li",[a("strong",[s._v("help")]),s._v(" 获得一个命令的帮助。")]),s._v(" "),a("li",[a("strong",[s._v("images")]),s._v(" 列出 Compose 文件中包含的镜像。")]),s._v(" "),a("li",[a("strong",[s._v("top")]),s._v(" 查看各个服务容器内运行的进程。")])]),s._v(" "),a("p",[s._v("unpause：格式为"),a("strong",[s._v("docker-compose unpause [SERVICE...]")]),s._v("，恢复处于暂停状态中的服务。")]),s._v(" "),a("p",[s._v("up：格式为"),a("strong",[s._v("docker-compose up [options] [SERVICE...]")]),s._v("，该命令十分强大，它将尝试自动完成包括构建镜像，（重新）创建服务，启动服务，并关联服务相关容器的一系列操作。链接的服务都将会被自动启动，除非已经处于运行状态。 可以说，大部分时候都可以直接通过该命令来启动一个项目。")]),s._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.qikqiak.com/k8s-book/docs/8.Docker%20Compose.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Compose - 阳明的博客"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/658911a8cff3",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker：Docker Compose 详解"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/u011781521/article/details/80464826",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker ---- Docker-Compose 详解"),a("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=n.exports}}]);