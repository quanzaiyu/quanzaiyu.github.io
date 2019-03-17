(window.webpackJsonp=window.webpackJsonp||[]).push([[628],{888:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"给-rm-命令添加个垃圾桶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给-rm-命令添加个垃圾桶","aria-hidden":"true"}},[a._v("#")]),a._v(" 给 rm 命令添加个垃圾桶")]),a._v(" "),e("p",[a._v("当使用 "),e("code",[a._v("rm")]),a._v(" 命令时，一定要小心，特别是使用 "),e("code",[a._v("rm -rf")]),a._v(" 的时候，如果一不小心将整个服务器都删除，后悔晚矣。")]),a._v(" "),e("p",[a._v("我们可以使用 "),e("code",[a._v("saferm.sh")]),a._v(" 实现 rm 移至垃圾桶的目的.")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ git clone https://github.com/lagerspetz/linux-stuff\n$ mv linux-stuff/scripts/saferm.sh /bin\n$ rm -Rf linux-stuff\n")])])]),e("p",[a._v("测试命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost temp]# saferm.sh a\na is on /home. Unsafe delete (y/n)? y\nDeleting a\n\n[root@localhost temp]# saferm.sh d\nd is on /home. Unsafe delete (y/n)? n\nMoving d to /root/Trash\n")])])]),e("p",[a._v("修改 "),e("code",[a._v("/root/.bashrc")]),a._v(" 文件")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost ~]# vim .bashrc\n\nalias rm=saferm.sh\n")])])]),e("p",[a._v("执行下面的命令使其生效，")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ source ~/.bashrc\n")])])]),e("p",[a._v("测试")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost temp]# rm b\nb is on /home. Unsafe delete (y/n)? y\nDeleting b\n\n[root@localhost temp]# rm d\nd is on /home. Unsafe delete (y/n)? n\nMoving d to /root/Trash\n")])])]),e("p",[a._v("删除目录")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[root@localhost temp]# rm -r dirName\n")])])]),e("p",[a._v("一切就绪，现在可以执行 rm 命令，自动将文件移动到”垃圾桶”，而不是永久删除它们。")]),a._v(" "),e("p",[a._v("查看帮助")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ saferm.sh -h\n")])])]),e("p",[a._v("查看垃圾桶")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ ls -lh /root/Trash/\n")])])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://linux.cn/article-9425-1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("给 “rm” 命令添加个“垃圾桶”"),e("OutboundLink")],1)])])},[],!1,null,null,null);t.default=r.exports}}]);