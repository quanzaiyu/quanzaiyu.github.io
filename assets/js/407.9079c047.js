(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{737:function(s,e,a){"use strict";a.r(e);var n=a(1),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"配置-ssh-秘钥"}},[s._v("配置 SSH 秘钥")]),s._v(" "),a("p",[s._v("在客户端使用 "),a("code",[s._v("ssh-keygen -t rsa")]),s._v(" 生成秘钥")]),s._v(" "),a("p",[s._v("或使用命令 "),a("code",[s._v('ssh-keygen -t rsa -C "你的email地址"')]),s._v(" ，会在 "),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" 生成SSH公钥。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost learngit.git]# ssh-keygen -t rsa\nGenerating public/private rsa key pair.\nEnter file in which to save the key (/root/.ssh/id_rsa): \nCreated directory '/root/.ssh'.\nEnter passphrase (empty for no passphrase): \nEnter same passphrase again: \nYour identification has been saved in /root/.ssh/id_rsa.\nYour public key has been saved in /root/.ssh/id_rsa.pub.\nThe key fingerprint is:\nSHA256:cNjycjEgK1if5rGzEKMQkKrAdQxWWy+strrsX3gQ4sA root@localhost\nThe key's randomart image is:\n+---[RSA 2048]----+\n|+..o=...         |\n|o+.o *++.        |\n|=E=.Bo+o=.       |\n|+oo*.oo=.o       |\n|+ ..++. S        |\n|.  ..o+o         |\n|    .o o         |\n|  . . o          |\n|  .=o.           |\n+----[SHA256]-----+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("可以看到，root 用户生成的秘钥位于 "),a("code",[s._v("/root/.ssh")]),s._v(" 下，其他用户生成的秘钥位于 "),a("code",[s._v("/home/user/.ssh")]),s._v(" 下")]),s._v(" "),a("h2",{attrs:{id:"生成-authorized-keys"}},[s._v("生成 authorized_keys")]),s._v(" "),a("p",[a("code",[s._v("authorized_keys")]),s._v(" 文件用于存储信任的客户端公钥，将受信任的公钥 "),a("code",[s._v("id_rsa.pub")]),s._v(" 写入即可")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost .ssh]# cat id_rsa.pub >> authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将其他机器上的 ssh 公钥加入服务器列表")]),s._v(" "),a("p",[s._v("比如 Windows 系统中的公钥，位于 "),a("code",[s._v("C:\\Users\\Administrator\\.ssh\\id_rsa.pub")]),s._v(" 中，打开此文件将内容添加至用户目录 .ssh 目录下的 "),a("code",[s._v("authorized_keys")]),s._v(" 文件中即可，比如 "),a("code",[s._v("/home/git/.ssh/authorized_keys")])]),s._v(" "),a("p",[s._v("修改 sshd 配置文件 "),a("code",[s._v("vim /etc/ssh/sshd_config")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("RSAAuthentication yes\nPubkeyAuthentication yes\nAuthorizedKeysFile      .ssh/authorized_keys\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("重启 ssh 服务即可")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl restart sshd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("此时 clone 就不需要再输入密码了。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[s._v("注意事项")]),s._v(" "),a("p",[s._v("现在客户端可以通过 git clone 命令克隆远程仓库了，注意这里有些问题需要注意，SSH对公钥，私钥的权限和所有权的要求是非常严格的，总结如下：\n1，下面两个目录的所有权必须是git（上面创建的git用户），所属组也应该是git，权限必须为700\n① /home/git     # chmod 700 /home/git\n② /home/git/.ssh     # chmod 700 /home/git/.ssh\n2，公钥文件的所有权必须是git，所属组也必须是git，权限必须是644\n① /home/git/.ssh/authorized_keys #chmod 644 /home/git/.ssh/authorized_keys")]),s._v(" "),a("p",[s._v("如果权限不对，会造成不能正常登录，报错信息：Permission denied (publickey,gssapi-with-mic.....)")])])}],!1,null,null,null);e.default=t.exports}}]);