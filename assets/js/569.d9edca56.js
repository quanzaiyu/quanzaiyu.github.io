(window.webpackJsonp=window.webpackJsonp||[]).push([[569],{942:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-用户与权限管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-用户与权限管理","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 用户与权限管理")]),s._v(" "),t("h2",{attrs:{id:"linux-用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-用户","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 用户")]),s._v(" "),t("p",[s._v("Linux用户分为：拥有者、组群(Group)、其他（other），Linux系统中，预设的情況下，系统中所有的帐号与一般身份使用者，以及root的相关信息，都是记录在"),t("code",[s._v("/etc/passwd")]),s._v("文件中。每个人的密码则是记录在"),t("code",[s._v("/etc/shadow")]),s._v("文件下。 此外，所有的组群名称记录在"),t("code",[s._v("/etc/group")]),s._v("內！")]),s._v(" "),t("p",[s._v("linux文件的用户权限的分析图")]),s._v(" "),t("imgLink",{attrs:{src:"articles/008.gif"}}),s._v(" "),t("imgLink",{attrs:{src:"date/20181226/001.png"}}),s._v(" "),t("p",[s._v("例：rwx　rw-　r--  // 值 764")]),s._v(" "),t("ul",[t("li",[s._v("r=读取属性\t// 值＝4")]),s._v(" "),t("li",[s._v("w=写入属性\t// 值＝2")]),s._v(" "),t("li",[s._v("x=执行属性\t// 值＝1")])]),s._v(" "),t("p",[s._v("第一个字符意义")]),s._v(" "),t("ul",[t("li",[s._v("-=普通文件")]),s._v(" "),t("li",[s._v("d=目录")]),s._v(" "),t("li",[s._v("l=软链接")]),s._v(" "),t("li",[s._v("b=块设备文件")]),s._v(" "),t("li",[s._v("c=字符设备文件")]),s._v(" "),t("li",[s._v("p=管道文件")])]),s._v(" "),t("p",[s._v("例: "),t("code",[s._v("lrwxrwxrwx. 1 root root 1 Apr 1 01:18 d -> b")])]),s._v(" "),t("h2",{attrs:{id:"用户特征码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户特征码","aria-hidden":"true"}},[s._v("#")]),s._v(" 用户特征码")]),s._v(" "),t("p",[s._v("操作系统时通过用户特征码来识别用户的。对于人类，我们识别用户是通过用户名，因为用户名（字符串）好记。而计算机觉得数字更好记一些，于是在创建用户时系统会为其分配一个唯一的特征码，用以识别该用户，这个特征码也叫"),t("strong",[s._v("UID")]),s._v("。同样的，用户组也有特征码，叫做GID。")]),s._v(" "),t("p",[s._v("Linux 系统中，UID以如下的方式划分：")]),s._v(" "),t("ul",[t("li",[s._v("0 表示管理员（root）")]),s._v(" "),t("li",[s._v("1 - 999 表示系统用户")]),s._v(" "),t("li",[s._v("1000 - 65535 表示普通用户")])]),s._v(" "),t("p",[s._v("注：不同的 Linux 发行版，这些数字可能不一样")]),s._v(" "),t("p",[s._v("UID是不能冲突的，而且管理员创建的普通用户的UID默认是从1000开始的（即使前面有闲置的号码）。")]),s._v(" "),t("h2",{attrs:{id:"用户与用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户与用户组","aria-hidden":"true"}},[s._v("#")]),s._v(" 用户与用户组")]),s._v(" "),t("h3",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("adduser username")]),s._v(" 添加用户")])]),s._v(" "),t("p",[s._v("在Linux系统中创建每个用户时，将自动创建一个与其同名的"),t("strong",[s._v("基本用户组")]),s._v("，而且这个基本用户组只有该用户一个人。如果该用户以后被归纳入其他用户组，则这个其他用户组称之为"),t("strong",[s._v("扩展用户组")]),s._v("。一个用户只有一个基本用户组，但是可以有多个扩展用户组，从而满足日常的工作需要。")]),s._v(" "),t("p",[s._v("在创建用户的时候, 可以指定用户目录、UID以及Shell解释器:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -d /home/admin -u 8888 -s /sbin/nologin linuxprobe\n")])])]),t("p",[s._v("::: tip 注意\n"),t("code",[s._v("/sbin/nologin")]),s._v(" 是终端解释器中的一员，与Bash解释器有着天壤之别。一旦用户的解释器被设置为nologin，则代表该用户不能登录到系统中\n:::")]),s._v(" "),t("p",[s._v("使用 id 命令查看用户的uid及所属的组：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" admin\nuid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" gid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" groups"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"删除用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除用户","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除用户")]),s._v(" "),t("p",[t("code",[s._v("userdel")]),s._v(" 命令用于删除用户，格式为 "),t("code",[s._v("userdel [选项] 用户名")]),s._v("。")]),s._v(" "),t("p",[s._v("参数如下:")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("-f")]),s._v("\t强制删除用户")]),s._v(" "),t("li",[t("strong",[s._v("-r")]),s._v("\t同时删除用户及用户家目录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" -r username "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个用户 ( '-r' 排除主目录)")]),s._v("\n")])])]),t("h3",{attrs:{id:"设置登录密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置登录密码","aria-hidden":"true"}},[s._v("#")]),s._v(" 设置登录密码")]),s._v(" "),t("p",[t("code",[s._v("passwd")]),s._v(" 命令用于修改用户密码、过期时间、认证信息等，格式为 "),t("code",[s._v("passwd [选项] [用户名]")]),s._v("。")]),s._v(" "),t("p",[s._v("普通用户只能使用passwd命令修改自身的系统密码，而root管理员则有权限修改其他所有人的密码。更酷的是，root管理员在Linux系统中修改自己或他人的密码时不需要验证旧密码，这一点特别方便。既然root管理员可以修改其他用户的密码，就表示完全拥有该用户的管理权限。")]),s._v(" "),t("p",[s._v("参数如下:")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("-l")]),s._v("\t锁定用户，禁止其登录")]),s._v(" "),t("li",[t("strong",[s._v("-u")]),s._v("\t解除锁定，允许用户登录")]),s._v(" "),t("li",[t("strong",[s._v("--stdin")]),s._v("\t允许通过标准输入修改用户密码，如 "),t("code",[s._v('echo "NewPassWord" | passwd --stdin Username')])]),s._v(" "),t("li",[t("strong",[s._v("-d")]),s._v("\t使该用户可用空密码登录系统")]),s._v(" "),t("li",[t("strong",[s._v("-e")]),s._v("\t强制用户在下次登录时修改密码")]),s._v(" "),t("li",[t("strong",[s._v("-S")]),s._v("\t显示用户的密码是否被锁定，以及密码所采用的加密算法名称")])]),s._v(" "),t("p",[s._v("在修改用户密码时，通常都需要输入两次密码以进行确认，这在编写自动化脚本时将成为一个非常致命的缺陷。通过把管道符和passwd命令的--stdin参数相结合，我们可以用一条命令来完成密码重置操作：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --stdin root\nChanging password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user root.\npasswd: all authentication tokens updated successfully.\n")])])]),t("h3",{attrs:{id:"更改用户设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改用户设置","aria-hidden":"true"}},[s._v("#")]),s._v(" 更改用户设置")]),s._v(" "),t("p",[t("code",[s._v("usermod")]),s._v(" 命令用于修改用户的基本信息。usermod命令不允许你改变正在线上的使用者帐号名称。当usermod命令用来改变user id，必须确认这名user没在电脑上执行任何程序。")]),s._v(" "),t("p",[t("strong",[s._v("修改用户名")])]),s._v(" "),t("p",[s._v("我们可以用 "),t("code",[s._v("-l")]),s._v(" 参数修改用户帐号名称, 格式为")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -l newUserName userName\n")])])]),t("p",[t("strong",[s._v("修改组信息")])]),s._v(" "),t("p",[s._v("我们可以用 "),t("code",[s._v("-g")]),s._v(" 参数修改用户的基本组ID，用 "),t("code",[s._v("-G")]),s._v(" 参数修改用户扩展组ID。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G admins admin\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" admin\nuid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" gid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" groups"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",1002"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("admins"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("以上命令, 将用户 admin 添加到组 admins 中, 使用 id 查看其修改后的状态")]),s._v(" "),t("p",[t("strong",[s._v("锁定/解锁账号")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("-L")]),s._v(" 锁定用户，禁止其登录系统")]),s._v(" "),t("li",[t("strong",[s._v("-U")]),s._v(" 解锁用户，允许其登录系统")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -L userName\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -U userName\n")])])]),t("p",[t("strong",[s._v("修改用户的shell")])]),s._v(" "),t("p",[t("code",[s._v("-s")]),s._v(" 参数用于修改用户登入后所使用的shell")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -s /sbin/nologin ftpuser\n")])])]),t("h3",{attrs:{id:"群组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#群组","aria-hidden":"true"}},[s._v("#")]),s._v(" 群组")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("groupadd groupname")]),s._v(" 添加一个群组")]),s._v(" "),t("h2",{attrs:{id:"su-与-sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#su-与-sudo","aria-hidden":"true"}},[s._v("#")]),s._v(" su 与 sudo")]),s._v(" "),t("h3",{attrs:{id:"su-切换用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#su-切换用户","aria-hidden":"true"}},[s._v("#")]),s._v(" su: 切换用户")]),s._v(" "),t("p",[s._v("使用 su 命令可以切换到不同的用户进行登录:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("admin@node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root\npassword:\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# exit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("admin@node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$\n")])])]),t("p",[s._v("使用 exit 命令将退出此用户对话。")]),s._v(" "),t("p",[s._v("如果在上面的su命令与用户名之间加一个减号（-），这意味着完全切换到新的用户，即把环境变量信息也变更为新用户的相应信息，而不是保留原始的信息。强烈建议在切换用户身份时添加这个减号（-）。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[admin@node1 ~]$ su - root\n")])])]),t("h3",{attrs:{id:"sudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo","aria-hidden":"true"}},[s._v("#")]),s._v(" sudo")]),s._v(" "),t("p",[s._v("在普通用户时, 如果想要"),t("strong",[s._v("临时获取root权限")]),s._v("来执行某条命令, 可以使用 "),t("code",[s._v("sudo")]),s._v(" 前缀, 比如:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/hosts\n")])])]),t("h3",{attrs:{id:"sudo-hu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo-hu","aria-hidden":"true"}},[s._v("#")]),s._v(" sudo -Hu")]),s._v(" "),t("p",[s._v("如果想以某用户身份执行某些命令, 可以使用 "),t("code",[s._v("sudo -Hu [username] [command]")]),s._v(", 比如在 root 用户下使用 quanzaiyu 用户执行某条命令")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -Hu quanzaiyu "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/quanzaiyu/data\n")])])]),t("h3",{attrs:{id:"sudo-授权"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sudo-授权","aria-hidden":"true"}},[s._v("#")]),s._v(" sudo 授权")]),s._v(" "),t("p",[s._v("个人用户的权限只可以在本home下有完整权限，其他目录要看别人授权。而经常需要root用户的权限，这时候sudo可以化身为root来操作。我记得我曾经sudo创建了文件，然后发现自己并没有读写权限，因为查看权限是root创建的。")]),s._v(" "),t("p",[s._v("这是未授权之前 quanzaiyu 用户使用 sudo 命令时提示")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("quanzaiyu is not in the sudoers file.  This incident will be reported.\n")])])]),t("p",[s._v("新创建的用户并不能使用sudo命令，需要给他添加授权。")]),s._v(" "),t("p",[s._v("sudo命令的授权管理是在sudoers文件里的。可以看看sudoers:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" sudoers\nsudoers: /etc/sudoers /etc/sudoers.d /usr/libexec/sudoers.so /usr/share/man/man5/sudoers.5.gz\n")])])]),t("p",[s._v("找到这个文件位置之后再查看权限:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l /etc/sudoers\n-r--r----- 1 root root 4251 9月  25 15:08 /etc/sudoers\n")])])]),t("p",[s._v("可以看到，只有只读的权限，如果想要修改的话，需要先添加w权限:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -v u+w /etc/sudoers\nmode of "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/sudoers"')]),s._v(" changed from 0440 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r--r-----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to 0640 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw-r-----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("然后就可以添加内容了，在下面的一行下追加新增的用户:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sudoers\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Allow root to run any commands anywher")]),s._v("\nroot    ALL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       ALL\nquanzaiyu  ALL"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       ALL  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个是新增的用户")]),s._v("\n")])])]),t("p",[s._v("wq保存退出，这时候要记得将写权限收回:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -v u-w /etc/sudoers\nmode of "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/sudoers"')]),s._v(" changed from 0640 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rw-r-----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to 0440 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r--r-----"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("或 "),t("code",[s._v("chmod 0440 sudoers")])]),s._v(" "),t("p",[s._v("这时候使用新用户登录，使用sudo:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sudo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" password "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" linuxidc:\n\nWe trust you have received the usual lecture from the local System\nAdministrator. It usually boils down to these three things:\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1) Respect the privacy of others.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2) Think before you type.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3) With great power comes great responsibility.")]),s._v("\n")])])]),t("p",[s._v("第一次使用会提示你，你已经化身超人，身负责任。而且需要输入密码才可以下一步。")]),s._v(" "),t("p",[s._v("如果不想需要输入密码，将最后一个 ALL 修改成 NOPASSWD: ALL")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("quanzaiyu ALL=(ALL)     NOPASSWD:ALL\n")])])]),t("p",[s._v("也可以使用 "),t("code",[s._v("visudo")]),s._v(" 命令直接编辑 sudoers 文件")]),s._v(" "),t("h2",{attrs:{id:"改变文件属性-chattr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变文件属性-chattr","aria-hidden":"true"}},[s._v("#")]),s._v(" 改变文件属性: chattr")]),s._v(" "),t("p",[t("code",[s._v("chattr")]),s._v(" 命令用来改变文件的隐藏权限。这项指令可改变存放在ext2文件系统上的文件或目录属性，这些属性共有以下几种模式：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("a")]),s._v(" 仅允许补充（追加）内容，无法覆盖/删除内容（Append Only）")]),s._v(" "),t("li",[t("code",[s._v("A")]),s._v("\t不再修改这个文件或目录的最后访问时间（atime）")]),s._v(" "),t("li",[t("code",[s._v("b")]),s._v(" 不再更新文件或目录的最后存取时间；")]),s._v(" "),t("li",[t("code",[s._v("c")]),s._v(" 将文件或目录压缩后存放")]),s._v(" "),t("li",[t("code",[s._v("d")]),s._v(" 使用dump命令备份时忽略本文件/目录")]),s._v(" "),t("li",[t("code",[s._v("D")]),s._v("\t检查压缩文件中的错误")]),s._v(" "),t("li",[t("code",[s._v("i")]),s._v(" 无法对文件进行修改；若对目录设置了该参数，则仅能修改其中的子文件内容而不能新建或删除文件")]),s._v(" "),t("li",[t("code",[s._v("s")]),s._v(" 彻底从硬盘中删除，不可恢复（用0填充原文件所在硬盘区域）")]),s._v(" "),t("li",[t("code",[s._v("S")]),s._v(" 文件内容在变更后立即同步到硬盘（sync）")]),s._v(" "),t("li",[t("code",[s._v("u")]),s._v(" 当删除该文件后依然保留其在硬盘中的数据，方便日后恢复")]),s._v(" "),t("li",[t("code",[s._v("t")]),s._v("\t让文件系统支持尾部合并（tail-merging）")]),s._v(" "),t("li",[t("code",[s._v("x")]),s._v("\t可以直接访问压缩文件中的内容")])]),s._v(" "),t("p",[t("strong",[s._v("选项")])]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("-R")]),s._v(" 递归处理，将指令目录下的所有文件及子目录一并处理；")]),s._v(" "),t("li",[t("strong",[s._v("-v<版本编号>")]),s._v(" 设置文件或目录版本；")]),s._v(" "),t("li",[t("strong",[s._v("-V")]),s._v(" 显示指令执行过程；")])]),s._v(" "),t("hr"),s._v(" "),t("ul",[t("li",[t("strong",[s._v("+<属性>")]),s._v(" 开启文件或目录的该项属性；")]),s._v(" "),t("li",[t("strong",[s._v("-<属性>")]),s._v(" 关闭文件或目录的该项属性；")]),s._v(" "),t("li",[t("strong",[s._v("=<属性>")]),s._v(" 指定文件或目录的该项属性。")])]),s._v(" "),t("h3",{attrs:{id:"文件防篡改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件防篡改","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件防篡改")]),s._v(" "),t("p",[s._v("用 chattr 命令防止系统中某个关键文件被修改：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ chattr +i /etc/fstab\n")])])]),t("p",[s._v("然后试一下 rm、mv、rename 等命令操作于该文件，都是得到 Operation not permitted 的结果。")]),s._v(" "),t("p",[s._v("让某个文件只能往里面追加内容，不能删除，一些日志文件适用于这种操作：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ chattr +a /data1/user_act.log\n")])])]),t("h3",{attrs:{id:"查看文件的隐藏权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件的隐藏权限","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看文件的隐藏权限")]),s._v(" "),t("p",[t("code",[s._v("lsattr")]),s._v(" 命令用于显示文件的隐藏权限，格式为 "),t("code",[s._v("lsattr [参数] 文件")]),s._v("。在Linux系统中，文件的隐藏权限必须使用 "),t("code",[s._v("lsattr")]),s._v(" 命令来查看，平时使用的ls之类的命令则看不出端倪:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -al linuxprobe\n-rw-r--r--. 1 root root 9 Feb 12 11:42 linuxprobe\n")])])]),t("p",[s._v("一旦使用lsattr命令后，文件上被赋予的隐藏权限马上就会原形毕露。此时可以按照显示的隐藏权限的类型（字母），使用chattr命令将其去掉:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ lsattr linuxprobe\n-----a---------- linuxprobe\n$ chattr -a linuxprobe\n$ lsattr linuxprobe\n---------------- linuxprobe\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" linuxprobe\nrm: remove regular "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" ‘linuxprobe’? y\n")])])]),t("h2",{attrs:{id:"改变目录权限-chmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变目录权限-chmod","aria-hidden":"true"}},[s._v("#")]),s._v(" 改变目录权限: chmod")]),s._v(" "),t("p",[t("code",[s._v("chmod")]),s._v(" 命令用来变更文件或目录的权限。在UNIX系统家族里，文件或目录权限的控制分别以读取、写入、执行3种一般权限来区分，另有3种特殊权限可供运用。用户可以使用chmod指令去变更文件与目录的权限，设置方式采用文字或数字代号皆可。符号连接的权限无法变更，如果用户对符号连接修改权限，其改变会作用在被连接的原始文件。")]),s._v(" "),t("p",[t("strong",[s._v("权限范围")]),s._v("的表示法如下：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("u")]),s._v(" User，即文件或目录的拥有者；")]),s._v(" "),t("li",[t("code",[s._v("g")]),s._v(" Group，即文件或目录的所属群组；")]),s._v(" "),t("li",[t("code",[s._v("o")]),s._v(" Other，除了文件或目录拥有者或所属群组之外，其他用户皆属于这个范围；")]),s._v(" "),t("li",[t("code",[s._v("a")]),s._v(" All，即全部的用户，包含拥有者，所属群组以及其他用户；")])]),s._v(" "),t("p",[t("strong",[s._v("权限设置")]),s._v("的表示法如下：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("r")]),s._v(" 读取权限，数字代号为“4”;")]),s._v(" "),t("li",[t("code",[s._v("w")]),s._v(" 写入权限，数字代号为“2”；")]),s._v(" "),t("li",[t("code",[s._v("x")]),s._v(" 执行或切换权限，数字代号为“1”；")])]),s._v(" "),t("hr"),s._v(" "),t("ul",[t("li",[t("code",[s._v("-")]),s._v(" 不具任何权限，数字代号为“0”；")]),s._v(" "),t("li",[t("code",[s._v("s")]),s._v(" 特殊功能说明：变更文件或目录的权限。")])]),s._v(" "),t("h3",{attrs:{id:"改变权限设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变权限设置","aria-hidden":"true"}},[s._v("#")]),s._v(" 改变权限设置")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("<权限范围>+<权限设置>")]),s._v(" 开启权限范围的文件或目录的该选项权限设置；")]),s._v(" "),t("li",[t("code",[s._v("<权限范围>-<权限设置>")]),s._v(" 关闭权限范围的文件或目录的该选项权限设置；")]),s._v(" "),t("li",[t("code",[s._v("<权限范围>=<权限设置>")]),s._v(" 指定权限范围的文件或目录的该选项权限设置；")])]),s._v(" "),t("p",[t("strong",[s._v("实例")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 777 temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改变 temp 权限为 777")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+w temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对u属用户增加写权限")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u-x temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对u属用户删除执行权限")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u+x,g+w temp　　"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为文件 temp 设置自己可以执行，组员可以写入的权限")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rwx,g"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("rw,o"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("r temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对不同的属设置不同的权限")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" a+x temp　　"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对文件 temp 的u,g,o都设置可执行属性")]),s._v("\n")])])]),t("h2",{attrs:{id:"改变所有者-chown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变所有者-chown","aria-hidden":"true"}},[s._v("#")]),s._v(" 改变所有者: chown")]),s._v(" "),t("p",[t("strong",[s._v("chown命令")]),s._v(" 改变某个文件或目录的所有者和所属的组，该命令可以向某个用户授权，使该用户变成指定文件的所有者或者改变文件所属的组。用户可以是用户或者是用户D，用户组可以是组名或组"),t("a",{attrs:{href:"http://man.linuxde.net/id",target:"_blank",rel:"noopener noreferrer"}},[s._v("id"),t("OutboundLink")],1),s._v("。文件名可以使由空格分开的文件列表，在文件名中可以包含通配符。")]),s._v(" "),t("p",[s._v("只有文件主和超级用户才可以便用该命令。")]),s._v(" "),t("p",[t("strong",[s._v("实例")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R user /usr/temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归处理 temp 下的所有文件，将其所有权赋予 user")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R user:market /usr/temp "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把文件(夹) temp 所有权设置给 uesr，添加到 market 组")]),s._v("\n")])])]),t("h2",{attrs:{id:"passwd-shadow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#passwd-shadow","aria-hidden":"true"}},[s._v("#")]),s._v(" passwd && shadow")]),s._v(" "),t("p",[s._v("在 Linux 中，用户及密码文件位于 "),t("code",[s._v("/etc/passwd")]),s._v(" 中，")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" -n /etc/passwd\n     1\troot:x:0:0:root:/root:/bin/bash\n     2\tbin:x:1:1:bin:/bin:/sbin/nologin\n     3\tdaemon:x:2:2:daemon:/sbin:/sbin/nologin\n     4\tadm:x:3:4:adm:/var/adm:/sbin/nologin\n     5\tlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\n     6\tsync:x:5:0:sync:/sbin:/bin/sync\n     7\tshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\n     8\thalt:x:7:0:halt:/sbin:/sbin/halt\n     9\tmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\n    10\toperator:x:11:0:operator:/root:/sbin/nologin\n    11\tgames:x:12:100:games:/usr/games:/sbin/nologin\n    12\tftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\n    13\tnobody:x:99:99:Nobody:/:/sbin/nologin\n    14\tsystemd-bus-proxy:x:999:998:systemd Bus Proxy:/:/sbin/nologin\n    15\tsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\n    16\tdbus:x:81:81:System message bus:/:/sbin/nologin\n    17\tpolkitd:x:998:997:User "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" polkitd:/:/sbin/nologin\n    18\ttss:x:59:59:Account used by the trousers package to sandbox the tcsd daemon:/dev/null:/sbin/nologin\n    19\tsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\n    20\tpostfix:x:89:89::/var/spool/postfix:/sbin/nologin\n    21\tchrony:x:997:995::/var/lib/chrony:/sbin/nologin\n    22\tquanzaiyu:x:1000:1000:quanzaiyu:/home/quanzaiyu:/bin/bash\n    23\tdockerroot:x:996:993:Docker User:/var/lib/docker:/sbin/nologin\n    24\tftper:x:1001:1001::/home/ftper:/bin/bash\n    25\tnginx:x:995:991:nginx user:/var/cache/nginx:/sbin/nologin\n    26\tmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\n    27\tapache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin\n    28\tgit:x:1002:1002::/home/git:/usr/bin/git-shell\n")])])]),t("h3",{attrs:{id:"etc-passwd-中的字段分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-passwd-中的字段分析","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("code",[s._v("/etc/passwd")]),s._v(" 中的字段分析")]),s._v(" "),t("ul",[t("li",[s._v("ACCOUNT：用户名")]),s._v(" "),t("li",[s._v("PASSWORD：密码占位符")]),s._v(" "),t("li",[s._v("UID：用户ID")]),s._v(" "),t("li",[s._v("GID：用户组ID")]),s._v(" "),t("li",[s._v("COMMAND：注释信息")]),s._v(" "),t("li",[s._v("HOME DIR：用户家目录")]),s._v(" "),t("li",[s._v("SHELL：用户的默认 shell")])]),s._v(" "),t("h3",{attrs:{id:"etc-shadow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-shadow","aria-hidden":"true"}},[s._v("#")]),s._v(" "),t("code",[s._v("/etc/shadow")])]),s._v(" "),t("p",[s._v("密码占位符，其值是 x，显然这不是真正的密码。真正的密码保存在哪里呢？在 /etc/shadow 文件中，此文件中保存的也不是明文密码，而是经过加密处理之后的密码。我们来看一下 "),t("code",[s._v("/etc/shadow")]),s._v(" 中的内容（root only）：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shadow\n     1\troot:"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gV")]),s._v(".KVvRI/4wSk3fS"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$s3GXP7hk4qtqyrL1cichXmbfaJuxUd4Z")]),s._v("/dW9GsgzYOGBNZU.eKyi.IhRyukZj0coReMxYQ8eYBuzS0bUDAKs/1::0:99999:7:::\n     2\tbin:*:17110:0:99999:7:::\n     3\tdaemon:*:17110:0:99999:7:::\n     4\tadm:*:17110:0:99999:7:::\n     5\tlp:*:17110:0:99999:7:::\n     6\tsync:*:17110:0:99999:7:::\n     7\tshutdown:*:17110:0:99999:7:::\n     8\thalt:*:17110:0:99999:7:::\n     9\tmail:*:17110:0:99999:7:::\n    10\toperator:*:17110:0:99999:7:::\n    11\tgames:*:17110:0:99999:7:::\n    12\tftp:*:17110:0:99999:7:::\n    13\tnobody:*:17110:0:99999:7:::\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://man.linuxde.net/sub/%E7%94%A8%E6%88%B7%E5%92%8C%E5%B7%A5%E4%BD%9C%E7%BB%84%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[s._v("用户和工作组管理"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.linuxidc.com/Linux/2016-11/137549.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS 7中添加一个新用户并授权"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.linuxidc.com/Linux/2016-10/136251.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux基础知识之用户和用户组以及 Linux 权限管理"),t("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=n.exports}}]);