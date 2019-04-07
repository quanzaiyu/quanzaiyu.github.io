(window.webpackJsonp=window.webpackJsonp||[]).push([[618],{810:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"搭建-git-服务器-gitlab-和-gogs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-git-服务器-gitlab-和-gogs","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建 Git 服务器 (GitLab 和 Gogs)")]),t._v(" "),s("h2",{attrs:{id:"直接安装-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接安装-git","aria-hidden":"true"}},[t._v("#")]),t._v(" 直接安装 Git")]),t._v(" "),s("h3",{attrs:{id:"服务器端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器端","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yum –y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 git")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个 git 用户并赋予密码")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" /home/git "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" git-server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" git-server "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建仓库路径")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare learngit.git "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个裸仓库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git learngit.git "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 赋予 git 用户权限")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/passwd "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用 git 用户 shell 登录（一定要禁用）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将")]),t._v("\ngit:x:1001:1001:,,,:/home/git:/bin/bash\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 改为")]),t._v("\ngit:x:1000:1000:,,,:/home/git:/usr/bin/git-shell\n")])])]),s("p",[t._v("至此, 服务端配置完成。")]),t._v(" "),s("h3",{attrs:{id:"客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),s("p",[t._v("使用 clone 命令克隆仓库，格式如下")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@172.23.29.183:/home/git/git-server/learngit.git\n")])])]),s("p",[t._v("可以将客户端公钥保存到服务器，以便下次操作不需输入密码。")]),t._v(" "),s("h2",{attrs:{id:"搭建-gitlab-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-gitlab-服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建 GitLab 服务器")]),t._v(" "),s("p",[t._v("GitLab是利用 Ruby on Rails 一个开源的版本管理系统，实现一个自托管的Git项目仓库，可通过Web界面进行访问公开的或者私人项目。它拥有与Github类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序(Wall)进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用，便于日后有需要的时候进行查找。")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[s("strong",[t._v("apt-get方式")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitlab-ce\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gitlab-ctl reconfigure\n")])])]),s("imgLink",{attrs:{src:"articles/017.jpg"}}),t._v(" "),s("p",[s("strong",[t._v("deb包方式")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://packages.gitlab.com/gitlab/gitlab-ce/Ubuntu/pool/trusty/main/g/gitlab-ce/gitlab-ce_8.3.4-ce.0_amd64.deb\n$ dpkg -i gitlab-ce_8.3.4-ce.0_amd64.deb\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" gitlab-ctl reconfigure\n")])])]),s("imgLink",{attrs:{src:"articles/018.jpg"}}),t._v(" "),s("h3",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),s("p",[t._v("gitlab 常用命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ gitlab-ctl start\n$ gitlab-ctl stop\n$ gitlab-ctl status\n$ gitlab-ctl restart\n")])])]),s("p",[t._v("重新应用配置")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ gitlab-ctl reconfigure\n")])])]),s("p",[t._v("Gitlab 默认的日志文件存放在 "),s("code",[t._v("/var/log/gitlab")]),t._v(" 目录下:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ gitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有日志")]),t._v("\n$ gitlab-ctl "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tail")]),t._v(" nginx/gitlab_access.log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看nginx访问日志")]),t._v("\n")])])]),s("h3",{attrs:{id:"端口修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口修改","aria-hidden":"true"}},[t._v("#")]),t._v(" 端口修改")]),t._v(" "),s("p",[t._v("配置文件位于 "),s("code",[t._v("/var/opt/gitlab/nginx/conf/gitlab-http.conf")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /var/opt/gitlab/nginx/conf/gitlab-http.conf\n\nupstream gitlab-workhorse "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server unix:/var/opt/gitlab/gitlab-workhorse/socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen *:8090"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改端口")]),t._v("\n\n  server_name localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_tokens off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Don't show the nginx version number, a security best practice")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),s("p",[t._v("将默认的 80 端口修改为自定义端口即可")]),t._v(" "),s("p",[t._v("如果访问时出现 502 错误，则需要修改 unicorn 端口")]),t._v(" "),s("imgLink",{attrs:{src:"articles/019.jpg"}}),t._v(" "),s("p",[t._v("配置文件位于 "),s("code",[t._v("/etc/gitlab/gitlab.rb")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("unicorn['listen'] = '127.0.0.1'\nunicorn['port'] = 8091\n")])])]),s("p",[t._v("将默认的 8080 端口改为自定义端口即可")]),t._v(" "),s("p",[t._v("重启服务 "),s("code",[t._v("gitlab-ctl restart")])]),t._v(" "),s("p",[t._v("此时，访问正常")]),t._v(" "),s("imgLink",{attrs:{src:"articles/020.jpg"}}),t._v(" "),s("h3",{attrs:{id:"登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#登录","aria-hidden":"true"}},[t._v("#")]),t._v(" 登录")]),t._v(" "),s("p",[t._v("首次访问，会提示设置密码，默认用户名为 root，设置后即可正常登录")]),t._v(" "),s("imgLink",{attrs:{src:"articles/021.jpg"}}),t._v(" "),s("h2",{attrs:{id:"搭建-gogs-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-gogs-服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 搭建 Gogs 服务器")]),t._v(" "),s("p",[t._v("Gogs 是一款极易搭建的自助 Git 服务。")]),t._v(" "),s("p",[t._v("Gogs 的目标是打造一个最简单、最快速和最轻松的方式搭建自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 所有平台，包括 Linux、Mac OS X、Windows 以及 ARM 平台。")]),t._v(" "),s("p",[t._v("本文讲述的是通过 docker 安装 gogs 环境。")]),t._v(" "),s("h3",{attrs:{id:"安装-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 mysql")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker pull mysql\n$ docker run -d -p 13306:3306  --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mysql -v /opt/mydata/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("123456 mysql:latest\n$ firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("13306/tcp\n")])])]),s("p",[t._v("上面的命令, 通过 docker 拉取了 mysql 镜像, 并开启了宿主机的 13306, 将容器的的 3306 端口映射到宿主机的 13306, 然后将 13306 端口放行, 以便管理。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),t._v(" -it mysql /bin/bash\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此时进入容器")]),t._v("\nroot@c2e0d973b6ad:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mysql --version")]),t._v("\nmysql  Ver 8.0.13 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Linux on x86_64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MySQL Community Server - GPL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nroot@c2e0d973b6ad:/"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mysql -uroot -p123456")]),t._v("\nmysql: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Warning"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Using a password on the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("command")]),t._v(" line interface can be insecure.\nWelcome to the MySQL monitor.  Commands end with "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" or \\g.\nYour MySQL connection "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" is 3768\nServer version: 8.0.13 MySQL Community Server - GPL\n\nCopyright "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 2000, 2018, Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'help;'")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\h'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help. Type "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\c'")]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v(" the current input statement.\n\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("以上命令, 进入容器进行操作, 再进入 mysql 的命令行执行环境。")]),t._v(" "),s("p",[t._v("创建一个叫 gogs 的数据库, 用于存放相关数据。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysql> create database gogs;\nQuery OK, 1 row affected (0.03 sec)\nmysql> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| gogs               |\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n6 rows in set (0.00 sec)\n")])])]),s("p",[t._v("ok, 准备工作完毕, 准备安装 gogs 环境。")]),t._v(" "),s("h3",{attrs:{id:"安装-gogs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-gogs","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 gogs")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ docker pull gogs/gogs\n$ docker run --name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gogs -p 10022:22 -p 10080:3000 -v /var/gogs:/data gogs/gogs\n$ firewall-cmd --add-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10080/tcp\n")])])]),s("p",[t._v("同样地, 拉取 gogs 镜像, 运行容器, 并开启防火墙指定端口。")]),t._v(" "),s("p",[t._v("此时, 就可愉快地用浏览器打开页面了:")]),t._v(" "),s("imgLink",{attrs:{src:"date/20181128/010_gogs.png"}}),t._v(" "),s("p",[t._v("这里注意几处, mysql 地址填写 mysql 容器开启的端口, 用户名为 root, 密码为填写的 MYSQL_ROOT_PASSWORD, IP 填写宿主机的 IP, SSH 可以置空, 毕竟自己用嘛, 如果要填就填 10022, 这样得从防火墙里面将此端口放行。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[t._v("Gitlab")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/laobaozi/p/6638334.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux系统下安装Gitlab"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.linuxidc.com/Linux/2016-07/133044.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux下GitLab安装部署笔记"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/arybd/article/details/54635295",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitlab修改默认端口"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/wizard_rp/article/details/73147129",target:"_blank",rel:"noopener noreferrer"}},[t._v("更改gitlab默认端口"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Gogs")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/meibo69631310/article/details/79767810",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker安装gogs - CSDN"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=n.exports}}]);