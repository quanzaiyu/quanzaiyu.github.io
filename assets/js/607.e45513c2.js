(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{785:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"macos-使用-ssh-进行远程连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-使用-ssh-进行远程连接","aria-hidden":"true"}},[s._v("#")]),s._v(" MacOS 使用 SSH 进行远程连接")]),s._v(" "),t("p",[s._v("ssh登录Linux通常有两种方法：用户名密码登录、用户名密钥登录；使用用户名密码登录每次都要输入密码，相当麻烦，而使用用户名密钥登录则可以避免这个问题。")]),s._v(" "),t("h2",{attrs:{id:"创建秘钥对"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建秘钥对","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建秘钥对")]),s._v(" "),t("p",[s._v("打开本地终端，执行 ssh-keygen 命令创建密钥对：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ssh-keygen -t rsa -C  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your email@domain.com'")]),s._v("\n")])])]),t("p",[s._v("-t 指定密钥类型，默认即 rsa ，可以省略\n-C 设置注释文字，比如你的邮箱，可以省略")]),s._v(" "),t("p",[s._v("密钥默认保存位置在 ~/.ssh 目录下，打开后会看到私钥文件 id_rsa 和公钥文件 id_rsa.pub。")]),s._v(" "),t("h2",{attrs:{id:"复制公钥到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制公钥到服务器","aria-hidden":"true"}},[s._v("#")]),s._v(" 复制公钥到服务器")]),s._v(" "),t("p",[s._v("使用 scp 命令将本地的公钥文件 id_rsa.pub 复制到需要连接的Linux服务器：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" ~/.ssh/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":/home/id_rsa.pub\n")])])]),t("p",[s._v("如果修改了ssh默认连接端口的话，需要加上端口信息：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -P "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("端口号"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ~/.ssh/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip地址"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":/home/id_rsa.pub\n")])])]),t("p",[s._v("把公钥追加到服务器ssh认证文件中：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /home/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.ssh/authorized_keys\n")])])]),t("p",[s._v("这时候在本地终端中使用用户名和ip登录就不需要密码了：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("用户名"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("也可连接的时候指定私钥路径：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("您的私钥文件的完整路径"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" user@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("实例 IP 地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"配置快捷登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置快捷登录","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置快捷登录")]),s._v(" "),t("p",[s._v("即使不用输入密码，这样每次登录还要输入用户名ip端口信息还是有点麻烦，我们可以配置ssh快捷登录更方便的登录Linux；\n在本地 ~/.ssh/config 配置文件中添加ssh服务器信息，格式：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Host            alias            #自定义别名\nHostName        hostname         #替换为你的ssh服务器ip或domain\nPort            port             #ssh服务器端口，默认为22\nUser            user             #ssh服务器用户名\nIdentityFile    ~/.ssh/id_rsa    #第一个步骤生成的公钥文件对应的私钥文件\n")])])]),t("p",[s._v("这时候就可以使用配置文件中自定义的别名来登录了：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v("\n")])])]),t("h2",{attrs:{id:"错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误处理","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误处理")]),s._v(" "),t("h3",{attrs:{id:"permission-denied"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permission-denied","aria-hidden":"true"}},[s._v("#")]),s._v(" Permission denied")]),s._v(" "),t("p",[s._v("如果报以下错误：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Permission denied (publickey,gssapi-keyex,gssapi-with-mic)\n")])])]),t("p",[s._v("则说明需要在服务器中部署公钥。")]),s._v(" "),t("h3",{attrs:{id:"not-accessible-by-others"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#not-accessible-by-others","aria-hidden":"true"}},[s._v("#")]),s._v(" NOT accessible by others")]),s._v(" "),t("p",[s._v("如果配置完成后连接时报以下错误：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("It is required that your private key files are NOT accessible by others.\n")])])]),t("p",[s._v("需要修改私钥文件的权限：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 600 id_rsa\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.linuxidc.com/Linux/2015-12/126649.htm",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac OS X下配置远程Linux 服务器SSH密钥认证自动登录 - Linux 公社"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/s_istvan/article/details/80960581",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac使用ssh密钥登录Linux - CSDN"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/qq_28616789/article/details/79275762",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mac 通过 ssh 远程登录服务器(密钥对方式）"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);