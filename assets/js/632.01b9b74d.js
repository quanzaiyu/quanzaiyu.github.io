(window.webpackJsonp=window.webpackJsonp||[]).push([[632],{830:function(a,s,t){"use strict";t.r(s);var n=t(1),e=Object(n.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"给-rm-命令添加个垃圾桶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给-rm-命令添加个垃圾桶","aria-hidden":"true"}},[a._v("#")]),a._v(" 给 rm 命令添加个垃圾桶")]),a._v(" "),t("p",[a._v("当使用 "),t("code",[a._v("rm")]),a._v(" 命令时，一定要小心，特别是使用 "),t("code",[a._v("rm -rf")]),a._v(" 的时候，如果一不小心将整个服务器都删除，后悔晚矣。")]),a._v(" "),t("p",[a._v("我们可以使用 "),t("code",[a._v("saferm.sh")]),a._v(" 实现 rm 移至垃圾桶的目的.")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/lagerspetz/linux-stuff\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" linux-stuff/scripts/saferm.sh /bin\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -Rf linux-stuff\n")])])]),t("p",[a._v("测试命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ saferm.sh a\na is on /home. Unsafe delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? y\nDeleting a\n\n$ saferm.sh d\nd is on /home. Unsafe delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? n\nMoving d to /root/Trash\n")])])]),t("p",[a._v("修改 "),t("code",[a._v("/root/.bashrc")]),a._v(" 文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ vim .bashrc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("alias")]),a._v(" rm"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("saferm.sh\n")])])]),t("p",[a._v("执行下面的命令使其生效，")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("source")]),a._v(" ~/.bashrc\n")])])]),t("p",[a._v("测试")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" b\nb is on /home. Unsafe delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? y\nDeleting b\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" d\nd is on /home. Unsafe delete "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? n\nMoving d to /root/Trash\n")])])]),t("p",[a._v("删除目录")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -r dirName\n")])])]),t("p",[a._v("一切就绪，现在可以执行 rm 命令，自动将文件移动到”垃圾桶”，而不是永久删除它们。")]),a._v(" "),t("p",[a._v("查看帮助")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ saferm.sh -h\n")])])]),t("p",[a._v("查看垃圾桶")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -lh /root/Trash/\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[a._v("#")]),a._v(" 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://linux.cn/article-9425-1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("给 “rm” 命令添加个“垃圾桶”"),t("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);