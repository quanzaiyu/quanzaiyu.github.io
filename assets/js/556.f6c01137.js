(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{763:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-基础配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 基础配置")]),s._v(" "),t("h2",{attrs:{id:"系统信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示系统名、节点名称、操作系统的发行版号、操作系统版本、运行系统的机器 ID 号")]),s._v("\n$ arch "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示机器的处理器架构")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("iconv")]),s._v(" -l "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出已知的编码")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示CPU info的信息")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/interrupts "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示中断")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/meminfo "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 校验内存使用")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/swaps "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示哪些swap被使用")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示内核的版本")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/net/dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示网络适配器及统计")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/mounts "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示已加载的文件系统")]),s._v("\n\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内核信息(红帽系)")]),s._v("\nCentOS Linux release 7.6.1810 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量","aria-hidden":"true"}},[s._v("#")]),s._v(" 环境变量")]),s._v(" "),t("p",[s._v("变量是计算机系统用于保存可变值的数据类型。在Linux系统中，变量名称一般都是大写的，这是一种约定俗成的规范。我们可以直接通过变量名称来提取到对应的变量值。Linux系统中的环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的家目录、邮件存放位置等。")]),s._v(" "),t("p",[s._v("环境变量配置位于 "),t("code",[s._v("~/.bash_profile")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bash_profile\nPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/bin:/usr/local/python3/bin\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" PATH\n")])])]),t("p",[s._v("Linux系统中最重要的10个环境变量:")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("HOME")]),s._v("\t用户的主目录（即家目录）")]),s._v(" "),t("li",[t("strong",[s._v("SHELL")]),s._v("\t用户在使用的Shell解释器名称")]),s._v(" "),t("li",[t("strong",[s._v("HISTSIZE")]),s._v("\t输出的历史命令记录条数")]),s._v(" "),t("li",[t("strong",[s._v("HISTFILESIZE")]),s._v("\t保存的历史命令记录条数")]),s._v(" "),t("li",[t("strong",[s._v("MAIL")]),s._v("\t邮件保存路径")]),s._v(" "),t("li",[t("strong",[s._v("LANG")]),s._v("\t系统语言、语系名称")]),s._v(" "),t("li",[t("strong",[s._v("RANDOM")]),s._v("\t生成一个随机数字")]),s._v(" "),t("li",[t("strong",[s._v("PS1")]),s._v("\tBash解释器的提示符")]),s._v(" "),t("li",[t("strong",[s._v("PATH")]),s._v("\t定义解释器搜索用户执行命令的路径")]),s._v(" "),t("li",[t("strong",[s._v("EDITOR")]),s._v("\t用户默认的文本编辑器")])]),s._v(" "),t("h3",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path","aria-hidden":"true"}},[s._v("#")]),s._v(" PATH")]),s._v(" "),t("p",[s._v("PATH 不同的环境变量使用 "),t("code",[s._v(":")]),s._v(" 分割。")]),s._v(" "),t("p",[s._v("执行source命令使其生效:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.bash_profile\n")])])]),t("p",[s._v("也可直接对PATH变量进行设置")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),s._v("\n/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin\n$ PATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),s._v(":/root/bin\n$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PATH")]),s._v("\n/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin:/root/bin\n")])])]),t("p",[s._v("这里有比较经典的问题：“为什么不能将当前目录（.）添加到PATH中呢? ” 原因是，尽管可以将当前目录（.）添加到PATH变量中，从而在某些情况下可以让用户免去输入命令所在路径的麻烦。但是，如果黑客在比较常用的公共目录/tmp中存放了一个与ls或cd命令同名的木马文件，而用户又恰巧在公共目录中执行了这些命令，那么就极有可能中招了。")]),s._v(" "),t("h3",{attrs:{id:"自定义环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义环境变量","aria-hidden":"true"}},[s._v("#")]),s._v(" 自定义环境变量")]),s._v(" "),t("p",[s._v("其实变量是由固定的变量名与用户或系统设置的变量值两部分组成的，我们完全可以自行创建变量，来满足工作需求。例如设置一个名称为WORKDIR的变量，方便用户更轻松地进入一个层次较深的目录：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/workdir\n$ WORKDIR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/workdir\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pwd")]),s._v("\n/home/workdir\n")])])]),t("p",[s._v("但是，这样的变量不具有全局性，作用范围也有限，默认情况下不能被其他用户使用。如果工作需要，可以使用export命令将其提升为全局变量，这样其他用户也就可以使用它了:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linuxprobe workdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su linuxprobe")]),s._v("\nLast login: Fri Mar 20 20:52:10 CST 2017 on pts/0\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("linuxprobe@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("linuxprobe@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("linuxprobe@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export WORKDIR")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su linuxprobe")]),s._v("\nLast login: Fri Mar 20 21:52:10 CST 2017 on pts/0\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("linuxprobe@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WORKDIR")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("linuxprobe@linuxprobe workdir"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pwd")]),s._v("\n/home/workdir\n")])])]),t("h2",{attrs:{id:"主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主机名","aria-hidden":"true"}},[s._v("#")]),s._v(" 主机名")]),s._v(" "),t("p",[s._v("当使用多台主机的时候, 如果使用默认主机名, 将很难区分其名字, 可以使用以下命令进行重命名主机名:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" node1\n")])])]),t("p",[s._v("以上修改, 将在服务器不重启的条件下生效, 若服务器重启将恢复默认主机名。")]),s._v(" "),t("p",[s._v("或者修改配置文件 "),t("code",[s._v("/etc/hostname")]),s._v(", 配置将在重启服务器后生效:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/hostname\nnode1\n")])])]),t("h2",{attrs:{id:"别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#别名","aria-hidden":"true"}},[s._v("#")]),s._v(" 别名")]),s._v(" "),t("p",[s._v("环境变量配置位于 "),t("code",[s._v("~/.bashrc")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.bashrc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" cp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cp -i'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" mv"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mv -i'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" rm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -i'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" saferm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'saferm.sh'")]),s._v("\n")])])]),t("p",[s._v("执行source命令使其生效:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("source")]),s._v(" ~/.bashrc\n")])])]),t("p",[s._v("可以直接用 "),t("code",[s._v("alias")]),s._v(" 命令来创建一个属于自己的命令别名，格式为 "),t("code",[s._v("alias 别名=命令")]),s._v(" , 直接使用 "),t("code",[s._v("alias 别名")]),s._v(" 可以查看当前别名绑定的命令。若要取消一个命令别名，则是用 "),t("code",[s._v("unalias")]),s._v(" 命令，格式为 "),t("code",[s._v("unalias 别名")]),s._v("。")]),s._v(" "),t("p",[s._v("创建一个别名:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" netstatl"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'netstat -ntlp'")]),s._v("\n$ netstatl\n")])])]),t("p",[s._v("我们之前在使用rm命令删除文件时，Linux系统都会要求我们再确认是否执行删除操作，其实这就是Linux系统为了防止用户误删除文件而特意设置的rm别名命令，接下来我们把它取消掉：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nanaconda-ks.cfg Documents initial-setup-ks.cfg Pictures Templates\nDesktop Downloads Music Public Videos\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" anaconda-ks.cfg\nrm: remove regular "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" ‘anaconda-ks.cfg’? y\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" rm"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -i'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unalias")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" initial-setup-ks.cfg\n")])])]),t("h2",{attrs:{id:"hosts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hosts","aria-hidden":"true"}},[s._v("#")]),s._v(" hosts")]),s._v(" "),t("p",[s._v("hosts 文件位于 "),t("code",[s._v("/etc/hosts")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 单个虚拟主机")]),s._v("\n127.0.0.1     localhost\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个虚拟主机")]),s._v("\n192.168.0.15  node1 node2 node3\n")])])]),t("h2",{attrs:{id:"换源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换源","aria-hidden":"true"}},[s._v("#")]),s._v(" 换源")]),s._v(" "),t("p",[s._v("1、备份")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n")])])]),t("p",[s._v("2、下载新的 CentOS-Base.repo 到 "),t("code",[s._v("/etc/yum.repos.d/")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 5")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-5.repo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 6")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 7")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n")])])]),t("p",[s._v("3、之后运行 "),t("code",[s._v("yum makecache")]),s._v(" 生成缓存")])])},[],!1,null,null,null);a.default=e.exports}}]);