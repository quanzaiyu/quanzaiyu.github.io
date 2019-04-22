(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{966:function(a,s,t){"use strict";t.r(s);var e=t(1),n=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"文件传输工具-vsftpd-的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件传输工具-vsftpd-的使用","aria-hidden":"true"}},[a._v("#")]),a._v(" 文件传输工具 vsftpd 的使用")]),a._v(" "),t("p",[t("a",{attrs:{href:"http://www.linuxfromscratch.org/blfs/view/svn/server/vsftpd.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("vsftpd"),t("OutboundLink")],1),a._v(" 是 "),t("code",[a._v("very secure FTP daemon")]),a._v(" 的缩写，安全性是它的一个最大的特点。拥有非常高的安全性需求、带宽限制、良好的可伸缩性、可创建虚拟用户、支持IPv6、速率高等特性。")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" vsftpd\n")])])]),t("p",[a._v("查看安装位置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("whereis")]),a._v(" vsftpd\nvsftpd: /usr/sbin/vsftpd /etc/vsftpd /usr/share/man/man8/vsftpd.8.gz\n")])])]),t("h2",{attrs:{id:"启动与停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动与停止","aria-hidden":"true"}},[a._v("#")]),a._v(" 启动与停止")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" vsftpd start "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" vsftpd stop "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" vsftpd restart "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n\n$ systemctl start vsftpd.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\n$ systemctl stop vsftpd.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止")]),a._v("\n$ systemctl restart vsftpd.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启")]),a._v("\n$ systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("enable")]),a._v(" vsftpd.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 设置开机启动")]),a._v("\n$ systemctl status vsftpd.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看服务状态")]),a._v("\n")])])]),t("p",[a._v("启动后，可以看到系统已经监听了 21 端口：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -nltp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 21\n")])])]),t("p",[a._v("配置好之后，默认可以使用匿名登录。")]),a._v(" "),t("h2",{attrs:{id:"添加防火墙设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加防火墙设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加防火墙设置")]),a._v(" "),t("p",[a._v("为 21 端口放行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ firewall-cmd --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("21/tcp\n")])])]),t("h2",{attrs:{id:"添加ftp用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加ftp用户","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加FTP用户")]),a._v(" "),t("p",[a._v("设置FTP用户的账号，例如账号为 "),t("code",[a._v("ftpuser")]),a._v(" ，用户目录为 "),t("code",[a._v("/home/ftpuser")]),a._v("，且设置不允许通过ssh登录。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("useradd")]),a._v(" -d /home/ftpuser -s /sbin/nologin ftpuser\n")])])]),t("p",[a._v("如果创建用户的时候没有声明不能通过 ssh 访问，可以随后设置")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" -s /sbin/nologin ftpuser\n")])])]),t("p",[a._v("设置为用户的主目录：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" -d /home/ftpuser ftpuser\n")])])]),t("p",[a._v("设置账号对应的密码")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" ftpuser\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"password"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v(" ftpuser --stdin\n")])])]),t("p",[a._v("这样一个用户建完，可以用这个登录，记得用普通登录不要用匿名了。登录后默认的路径为 "),t("code",[a._v("/home/ftpuser")]),a._v(" 。")]),a._v(" "),t("h2",{attrs:{id:"为用户分配主目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为用户分配主目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 为用户分配主目录")]),a._v(" "),t("p",[a._v("为用户 ftpuser 创建主目录并约定：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("/home/ftpuser")]),a._v("\t为主目录, 该目录不可上传文件")]),a._v(" "),t("li",[t("code",[a._v("/home/ftpuser/pub")]),a._v("\t文件只能上传到该目录下")])]),a._v(" "),t("p",[a._v("在 /data 中创建相关的目录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /home/ftpuser/pub\n")])])]),t("p",[a._v("创建登录欢迎文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Welcome to use FTP service."')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /home/ftpuser/welcome.txt\n")])])]),t("p",[a._v("设置访问权限")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 555 /home/ftpuser\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" 777 -R /home/ftpuser/pub\n")])])]),t("h2",{attrs:{id:"常用配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 常用配置")]),a._v(" "),t("h3",{attrs:{id:"禁止匿名登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁止匿名登录","aria-hidden":"true"}},[a._v("#")]),a._v(" 禁止匿名登录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("anonymous_enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NO\n")])])]),t("h3",{attrs:{id:"禁止切换根目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁止切换根目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 禁止切换根目录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("chroot_local_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n")])])]),t("h3",{attrs:{id:"可写模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可写模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 可写模式")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/vsftpd/vsftpd.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" write_enable\nwrite_enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#anon_mkdir_write_enable=YES")]),a._v("\n")])])]),t("h3",{attrs:{id:"开启监听"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启监听","aria-hidden":"true"}},[a._v("#")]),a._v(" 开启监听")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("listen"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YES\nlisten_port"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("21\nlisten_ipv6"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NO\n")])])]),t("p",[a._v("禁止 "),t("code",[a._v("ftpusers")]),a._v(" 中的用户访问")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("userlist_enable"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NO\n")])])]),t("h2",{attrs:{id:"vsftpd-详细配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vsftpd-详细配置","aria-hidden":"true"}},[a._v("#")]),a._v(" vsftpd 详细配置")]),a._v(" "),t("p",[a._v("vsftpd 的配置目录为 "),t("code",[a._v("/etc/vsftpd")]),a._v(" ，包含下列的配置文件：")]),a._v(" "),t("ul",[t("li",[a._v("vsftpd.conf 为主要配置文件")]),a._v(" "),t("li",[a._v("ftpusers 配置禁止访问 FTP 服务器的用户列表")]),a._v(" "),t("li",[a._v("user_list 配置用户访问控制")])]),a._v(" "),t("h3",{attrs:{id:"_1-默认配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-默认配置","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 默认配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("1>允许匿名用户和本地用户登陆。\n     anonymous_enable=YES\n     local_enable=YES\n\n2>匿名用户使用的登陆名为ftp或anonymous，口令为空；匿名用户不能离开匿名  用户家目录/var/ftp,且只能下载不能上传。\n\n3>本地用户的登录名为本地用户名，口令为此本地用户的口令；本地用户可以在自己家目录中进行读写操作；本地用户可以离开自家目录切换至有权限访问的其他目录，并在权限允许的情况下进行上传/下载。\n    write_enable=YES\n\n4>写在文件/etc/vsftpd.ftpusers中的本地用户禁止登陆。\n")])])]),t("h3",{attrs:{id:"_2-配置文件格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件格式","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 配置文件格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("vsftpd.conf 的内容非常单纯，每一行即为一项设定。若是空白行或是开头为#的一行，将会被忽略。内容的格式只有一种，如下所示\noption=value\n要注意的是，等号两边不能加空白。\n")])])]),t("h3",{attrs:{id:"_3-匿名用户（anonymous）设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-匿名用户（anonymous）设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 匿名用户（anonymous）设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("anonymous_enable=YES/NO（YES）\n控制是否允许匿名用户登入，YES 为允许匿名登入，NO 为不允许。默认值为YES。\n\nwrite_enable=YES/NO（YES）\n是否允许登陆用户有写权限。属于全局设置，默认值为YES。\n\nno_anon_password=YES/NO（NO）\n若是启动这项功能，则使用匿名登入时，不会询问密码。默认值为NO。\n\nftpftp_username=ftp\n定义匿名登入的使用者名称。默认值为ftp。\n\nanon_root=/var/ftp\n使用匿名登入时，所登入的目录。默认值为/var/ftp。注意ftp目录不能是777的权限属性，即匿名用户的家目录不能有777的权限。\n\nanon_upload_enable=YES/NO（NO）\n如果设为YES，则允许匿名登入者有上传文件（非目录）的权限，只有在write_enable=YES时，此项才有效。当然，匿名用户必须要有对上层目录的写入权。默认值为NO。\n\nanon_world_readable_only=YES/NO（YES）\n如果设为YES，则允许匿名登入者下载可阅读的档案（可以下载到本机阅读，不能直接在FTP服务器中打开阅读）。默认值为YES。\n\nanon_mkdir_write_enable=YES/NO（NO）\n如果设为YES，则允许匿名登入者有新增目录的权限，只有在write_enable=YES时，此项才有效。当然，匿名用户必须要有对上层目录的写入权。默认值为NO。\n\nanon_other_write_enable=YES/NO（NO）\n如果设为YES，则允许匿名登入者更多于上传或者建立目录之外的权限，譬如删除或者重命名。（如果anon_upload_enable=NO，则匿名用户 不能上传文件，但可以删除或者重命名已经存在的文件；如果anon_mkdir_write_enable=NO，则匿名用户不能上传或者新建文件夹，但 可以删除或者重命名已经存在的文件夹。）默认值为NO。\n\nchown_uploads=YES/NO（NO）\n设置是否改变匿名用户上传文件（非目录）的属主。默认值为NO。\n\nchown_username=username\n设置匿名用户上传文件（非目录）的属主名。建议不要设置为root。\n\nanon_umask=077\n设置匿名登入者新增或上传档案时的umask 值。默认值为077，则新建档案的对应权限为700。\n\ndeny_email_enable=YES/NO（NO）\n若是启动这项功能，则必须提供一个档案/etc/vsftpd/banner_emails，内容为email address。若是使用匿名登入，则会要求输入email address，若输入的email address 在此档案内，则不允许进入。默认值为NO。\n\nbanned_email_file=/etc/vsftpd/banner_emails\n此文件用来输入email address，只有在deny_email_enable=YES时，才会使用到此档案。若是使用匿名登入，则会要求输入email address，若输入的email address 在此档案内，则不允许进入。\n")])])]),t("h3",{attrs:{id:"_4-本地用户设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-本地用户设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 本地用户设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("local_enable=YES/NO（YES）\n控制是否允许本地用户登入，YES 为允许本地用户登入，NO为不允许。默认值为YES。\n\nlocal_root=/home/username\n当本地用户登入时，将被更换到定义的目录下。默认值为各用户的家目录。\n\nwrite_enable=YES/NO（YES）\n是否允许登陆用户有写权限。属于全局设置，默认值为YES。\n\nlocal_umask=022\n本地用户新增档案时的umask 值。默认值为077。\n\nfile_open_mode=0755\n本地用户上传档案后的档案权限，与 chmod 所使用的数值相同。默认值为0666。\n")])])]),t("h3",{attrs:{id:"_5-欢迎语设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-欢迎语设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 欢迎语设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("dirmessage_enable=YES/NO（YES）\n如果启动这个选项，那么使用者第一次进入一个目录时，会检查该目录下是否有.message这个档案，如果有，则会出现此档案的内容，通常这个档案会放置欢迎话语，或是对该目录的说明。默认值为开启。\n\nmessage_file=.message\n设置目录消息文件，可将要显示的信息写入该文件。默认值为.message。\n\nbanner_file=/etc/vsftpd/banner\n当使用者登入时，会显示此设定所在的档案内容，通常为欢迎话语或是说明。默认值为无。如果欢迎信息较多，则使用该配置项。\n\nftpd_banner=Welcome to BOB's FTP server\n这里用来定义欢迎话语的字符串，banner_file是档案的形式，而ftpd_banner 则是字符串的形式。预设为无。\n")])])]),t("h3",{attrs:{id:"_6-控制用户是否允许切换到上级目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-控制用户是否允许切换到上级目录","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 控制用户是否允许切换到上级目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("在默认配置下，本地用户登入 FTP 后可以使用 cd 命令切换到其他目录，这样会对系统带来安全隐患。可以通过以下三条配置文件来控制用户切换目录。\n\nchroot_list_enable=YES/NO（NO）\n设置是否启用chroot_list_file配置项指定的用户列表文件。默认值为NO。\n\nchroot_list_file=/etc/vsftpd.chroot_list\n用于指定用户列表文件，该文件用于控制哪些用户可以切换到用户家目录的上级目录。\n\nchroot_local_user=YES/NO（NO）\n用于指定用户列表文件中的用户是否允许切换到上级目录。默认值为NO。\n\n通过搭配能实现以下几种效果：\n①当chroot_list_enable=YES，chroot_local_user=YES时，在/etc/vsftpd.chroot_list文件中列出的用户，可以切换到其他目录；未在文件中列出的用户，不能切换到其他目录。\n②当chroot_list_enable=YES，chroot_local_user=NO时，在/etc/vsftpd.chroot_list文件中列出的用户，不能切换到其他目录；未在文件中列出的用户，可以切换到其他目录。\n③当chroot_list_enable=NO，chroot_local_user=YES时，所有的用户均不能切换到其他目录。\n④当chroot_list_enable=NO，chroot_local_user=NO时，所有的用户均可以切换到其他目录。\n")])])]),t("h3",{attrs:{id:"_7-数据传输模式设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据传输模式设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. 数据传输模式设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FTP在传输数据时，可以使用二进制方式，也可以使用ASCII模式来上传或下载数据。\n\nascii_upload_enable=YES/NO（NO）\n设置是否启用ASCII 模式上传数据。默认值为NO。\n\nascii_download_enable=YES/NO（NO）\n设置是否启用ASCII 模式下载数据。默认值为NO。\n")])])]),t("h3",{attrs:{id:"_8-访问控制设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-访问控制设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 8. 访问控制设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("两种控制方式：一种控制主机访问，另一种控制用户访问。\n\n①控制主机访问：\ntcp_wrappers=YES/NO（YES）\n设 置vsftpd是否与tcp wrapper相结合来进行主机的访问控制。默认值为YES。如果启用，则vsftpd服务器会检查/etc/hosts.allow 和/etc/hosts.deny 中的设置，来决定请求连接的主机，是否允许访问该FTP服务器。这两个文件可以起到简易的防火墙功能。\n\n比如：若要仅允许192.168.0.1—192.168.0.254的用户可以连接FTP服务器，则在/etc/hosts.allow文件中添加以下内容：\nvsftpd:192.168.0. :allow\nall:all :deny\n\n②控制用户访问：\n对于用户的访问控制可以通过/etc目录下的vsftpd.user_list和ftpusers文件来实现。\n\nuserlist_file=/etc/vsftpd.user_list\n控制用户访问FTP的文件，里面写着用户名称。一个用户名称一行。\n\nuserlist_enable=YES/NO（NO）\n是否启用vsftpd.user_list文件。\n\nuserlist_deny=YES/NO（YES）\n决定vsftpd.user_list文件中的用户是否能够访问FTP服务器。若设置为YES，则vsftpd.user_list文件中的用户不允许访问FTP，若设置为NO，则只有vsftpd.user_list文件中的用户才能访问FTP。\n/etc /vsftpd/ftpusers文件专门用于定义不允许访问FTP服务器的用户列表（注意:如果 userlist_enable=YES,userlist_deny=NO,此时如果在vsftpd.user_list和ftpusers中都有某个 用户时，那么这个用户是不能够访问FTP的，即ftpusers的优先级要高）。默认情况下vsftpd.user_list和ftpusers，这两个 文件已经预设置了一些不允许访问FTP服务器的系统内部账户。如果系统没有这两个文件，那么新建这两个文件，将用户添加进去即可。\n")])])]),t("h3",{attrs:{id:"_9-访问速率设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-访问速率设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 9. 访问速率设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("anon_max_rate=0\n设置匿名登入者使用的最大传输速度，单位为B/s，0 表示不限制速度。默认值为0。\n\nlocal_max_rate=0\n本地用户使用的最大传输速度，单位为B/s，0 表示不限制速度。预设值为0。\n")])])]),t("h3",{attrs:{id:"_10-超时时间设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-超时时间设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 10. 超时时间设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("accept_timeout=60\n设置建立FTP连接的超时时间，单位为秒。默认值为60。\n\nconnect_timeout=60\nPORT 方式下建立数据连接的超时时间，单位为秒。默认值为60。\n\ndata_connection_timeout=120\n设置建立FTP数据连接的超时时间，单位为秒。默认值为120。\n\nidle_session_timeout=300\n设置多长时间不对FTP服务器进行任何操作，则断开该FTP连接，单位为秒。默认值为300 。\n")])])]),t("h3",{attrs:{id:"_11-日志文件设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-日志文件设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 11. 日志文件设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("xferlog_enable= YES/NO（YES）\n是否启用上传/下载日志记录。如果启用，则上传与下载的信息将被完整纪录在xferlog_file 所定义的档案中。预设为开启。\n\nxferlog_file=/var/log/vsftpd.log\n设置日志文件名和路径，默认值为/var/log/vsftpd.log。\n\nxferlog_std_format=YES/NO（NO）\n如果启用，则日志文件将会写成xferlog的标准格式，如同wu-ftpd 一般。默认值为关闭。\n\nlog_ftp_protocol=YES|NO（NO）\n如果启用此选项，所有的FTP请求和响应都会被记录到日志中，默认日志文件在/var/log/vsftpd.log。启用此选项时，xferlog_std_format不能被激活。这个选项有助于调试。默认值为NO。\n")])])]),t("h3",{attrs:{id:"_12-定义用户配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-定义用户配置文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 12. 定义用户配置文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("在vsftpd中，可以通过定义用户配置文件来实现不同的用户使用不同的配置。\n\nuser_config_dir=/etc/vsftpd/userconf\n设置用户配置文件所在的目录。当设置了该配置项后，用户登陆服务器后，系统就会到/etc/vsftpd/userconf目录下，读取与当前用户名相同的文件，并根据文件中的配置命令，对当前用户进行更进一步的配置。\n\n例 如：定义user_config_dir=/etc/vsftpd/userconf，且主机上有使用者 test1,test2，那么我们就在user_config_dir 的目录新增文件名为test1和test2两个文件。若是test1 登入，则会读取user_config_dir 下的test1 这个档案内的设定。默认值为无。利用用户配置文件，可以实现对不同用户进行访问速度的控制，在各用户配置文件中定义local_max_rate=XX， 即可。\n")])])]),t("h3",{attrs:{id:"_13-ftp的工作方式与端口设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-ftp的工作方式与端口设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 13. FTP的工作方式与端口设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FTP有两种工作方式：PORT FTP（主动模式）和PASV FTP（被动模式）\n\nlisten_port=21\n设置FTP服务器建立连接所监听的端口，默认值为21。\n\nconnect_from_port_20=YES/NO\n指定FTP使用20端口进行数据传输，默认值为YES。\n\nftp_data_port=20\n设置在PORT方式下，FTP数据连接使用的端口，默认值为20。\n\npasv_enable=YES/NO（YES）\n若设置为YES，则使用PASV工作模式；若设置为NO，则使用PORT模式。默认值为YES，即使用PASV工作模式。\n\npasv_max_port=0\n在PASV工作模式下，数据连接可以使用的端口范围的最大端口，0 表示任意端口。默认值为0。\n\npasv_min_port=0\n在PASV工作模式下，数据连接可以使用的端口范围的最小端口，0 表示任意端口。默认值为0。\n")])])]),t("h3",{attrs:{id:"_14-与连接相关的设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-与连接相关的设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 14. 与连接相关的设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("listen=YES/NO（YES）\n设 置vsftpd服务器是否以standalone模式运行。以standalone模式运行是一种较好的方式，此时listen必须设置为YES，此为默 认值。建议不要更改，有很多与服务器运行相关的配置命令，需要在此模式下才有效。若设置为NO，则vsftpd不是以独立的服务运行，要受到xinetd 服务的管控，功能上会受到限制。\n\nmax_clients=0\n设置vsftpd允许的最大连接数，默认值为0，表示不受限制。若设置为100时，则同时允许有100个连接，超出的将被拒绝。只有在standalone模式运行才有效。\n\nmax_per_ip=0\n设置每个IP允许与FTP服务器同时建立连接的数目。默认值为0，表示不受限制。只有在standalone模式运行才有效。\nlisten_address=IP地址\n设置FTP服务器在指定的IP地址上侦听用户的FTP请求。若不设置，则对服务器绑定的所有IP地址进行侦听。只有在standalone模式运行才有效。\n\nsetproctitle_enable=YES/NO（NO）\n设置每个与FTP服务器的连接，是否以不同的进程表现出来。默认值为NO，此时使用ps aux |grep ftp只会有一个vsftpd的进程。若设置为YES，则每个连接都会有一个vsftpd的进程。\n")])])]),t("h3",{attrs:{id:"_15-虚拟用户设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-虚拟用户设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 15. 虚拟用户设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("虚拟用户使用PAM认证方式。\n\npam_service_name=vsftpd\n设置PAM使用的名称，默认值为/etc/pam.d/vsftpd。\n\nguest_enable= YES/NO（NO）\n启用虚拟用户。默认值为NO。\n\nguest_username=ftp\n这里用来映射虚拟用户。默认值为ftp。\n\nvirtual_use_local_privs=YES/NO（NO）\n当该参数激活（YES）时，虚拟用户使用与本地用户相同的权限。当此参数关闭（NO）时，虚拟用户使用与匿名用户相同的权限。默认情况下此参数是关闭的（NO）。\n")])])]),t("h3",{attrs:{id:"_16-其他设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-其他设置","aria-hidden":"true"}},[a._v("#")]),a._v(" 16. 其他设置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("text_userdb_names= YES/NO（NO）\n设置在执行ls –la之类的命令时，是显示UID、GID还是显示出具体的用户名和组名。默认值为NO，即以UID和GID方式显示。若希望显示用户名和组名，则设置为YES。\n\nls_recurse_enable=YES/NO（NO）\n若是启用此功能，则允许登入者使用ls –R（可以查看当前目录下子目录中的文件）这个指令。默认值为NO。\n\nhide_ids=YES/NO（NO）\n如果启用此功能，所有档案的拥有者与群组都为ftp，也就是使用者登入使用ls -al之类的指令，所看到的档案拥有者跟群组均为ftp。默认值为关闭。\n\ndownload_enable=YES/NO（YES）\n如果设置为NO，所有的文件都不能下载到本地，文件夹不受影响。默认值为YES。\n")])])]),t("h2",{attrs:{id:"windows-ftp-命令行工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-ftp-命令行工具","aria-hidden":"true"}},[a._v("#")]),a._v(" windows ftp 命令行工具")]),a._v(" "),t("imgLink",{attrs:{src:"articles/012.jpg"}}),a._v(" "),t("p",[a._v("help 查看帮助")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("ftp"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("help")]),a._v("\n命令可能是缩写的。  命令为:\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("               delete          literal         prompt          send\n?               debug           "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("              put             status\nappend          "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dir")]),a._v("             mdelete         "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("pwd")]),a._v("             trace\nascii           disconnect      mdir            quit            "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("type")]),a._v("\nbell            get             mget            quote           user\nbinary          glob            "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v("           recv            verbose\nbye             "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hash")]),a._v("            mls             remotehelp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v("              "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("help")]),a._v("            mput            "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rename")]),a._v("\nclose           lcd             "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("open")]),a._v("            "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rmdir")]),a._v("\n")])])]),t("p",[a._v("lcd  指定本地文件路径")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ftp> lcd\n目前的本地目录 C:\\Users\\quanzaiyu。\nftp> lcd D:\\\n目前的本地目录 D:\\。\n")])])]),t("p",[a._v("get 传输远程主机文件到本地\nsend 传送本地文件到远程主机")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ftp> get\n远程文件 /pub/a\n本地文件\n200 PORT command successful. Consider using PASV.\n150 Opening BINARY mode data connection for /pub/a (0 bytes).\n226 Transfer complete.\n")])])]),t("p",[a._v("dir 列出文件列表")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ftp> dir\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxrwxrwx    2 0        0              32 Apr 01 11:22 pub\n226 Directory send OK.\nftp: 收到 64 字节，用时 0.00秒 64.00千字节/秒。\n")])])]),t("p",[a._v("cd 切换目录")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ftp> cd pub\n250 Directory successfully changed.\n")])])]),t("p",[a._v("close 关闭连接")]),a._v(" "),t("p",[a._v("quit 退出命令")]),a._v(" "),t("p",[a._v("bye 退出命令")]),a._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/wave_1102/article/details/50651433",target:"_blank",rel:"noopener noreferrer"}},[a._v("FTP 服务器（vsftpd）搭建鸟哥详细教材"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://wiki.ubuntu.org.cn/Vsftpd",target:"_blank",rel:"noopener noreferrer"}},[a._v("vsftpd，ftp服务端 "),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.linuxidc.com/Linux/2017-11/148518.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("基于 CentOS 搭建 FTP 文件服务"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/mayday920723/article/details/53173263",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS7 添加FTP用户并设置权限"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://zhangge.net/3987.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("解决Centos下vsftp无法上传文件的问题，附vsftp配置详解"),t("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=n.exports}}]);