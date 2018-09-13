(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{758:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"更改用户设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改用户设置","aria-hidden":"true"}},[s._v("#")]),s._v(" 更改用户设置")]),s._v(" "),e("p",[e("strong",[s._v("usermod命令")]),s._v(" 用于修改用户的基本信息。usermod命令不允许你改变正在线上的使用者帐号名称。当usermod命令用来改变user id，必须确认这名user没在电脑上执行任何程序。")]),s._v(" "),e("h3",{attrs:{id:"选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-c<备注>：修改用户帐号的备注文字；\n-d<登入目录>：修改用户登入时的目录；\n-e<有效期限>：修改帐号的有效期限；\n-f<缓冲天数>：修改在密码过期后多少天即关闭该帐号；\n\n-g<群组>：修改用户所属的群组；\n-G<群组>；修改用户所属的附加群组；\n\n-u<uid>：修改用户ID；\n-s<shell>：修改用户登入后所使用的shell；\n\n-l<帐号名称>：修改用户帐号名称；\n\n-L：锁定用户密码，使密码无效；\n-U:解除密码锁定；\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("h3",{attrs:{id:"参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),e("p",[s._v("登录名：指定要修改信息的用户登录名。")]),s._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例","aria-hidden":"true"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),e("p",[s._v("将 newuser 添加到组staff中")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G staff newuser\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改用户名为")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -l newuser1 newuser\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("锁定/解锁账号")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -L newuser1\n"),e("span",{attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -U newuser1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("修改用户的 shell")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -s /sbin/nologin ftpuser\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}],!1,null,null,null);t.options.__file="usermod.md";a.default=t.exports}}]);