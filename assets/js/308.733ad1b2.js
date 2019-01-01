(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{743:function(e,n,t){"use strict";t.r(n);var s=t(0),r=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案","aria-hidden":"true"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),t("h2",{attrs:{id:"卷权限问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卷权限问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 卷权限问题")]),e._v(" "),t("p",[e._v("如果挂载卷时提示权限错误 "),t("code",[e._v("Permission denied")]),e._v(", 有以下解决方案:")]),e._v(" "),t("ol",[t("li",[e._v("在运行容器的时候，给容器加特权，及加上 "),t("code",[e._v("--privileged=true")]),e._v(" 参数")]),e._v(" "),t("li",[e._v("临时关闭 selinux, 执行 "),t("code",[e._v("setenforce 0")])]),e._v(" "),t("li",[e._v("添加selinux规则，改变要挂载的目录的安全性文本, 比如 "),t("code",[e._v("chown -R 1000:1000 ~")])])]),e._v(" "),t("p",[e._v("查看容器内权限:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" jenkins "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("whoami")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v("\n$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("exec")]),e._v(" jenkins "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" -la /var/jenkins_home\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\n\n$ docker run -ti --rm --entrypoint"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/bash"')]),e._v(" jenkinsci/blueocean -c "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"whoami && id"')]),e._v("\n$ docker run -ti --rm --entrypoint"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/bin/bash"')]),e._v(" jenkinsci/blueocean -c "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ls -la /var/jenkins_home"')]),e._v("\n")])])]),t("p",[e._v("参考:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/linuxiao/article/details/80116083",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Permission denied"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/xinhaige/p/9687269.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("jenkins docker 错误总结"),t("OutboundLink")],1)])])])},[],!1,null,null,null);r.options.__file="Q&A.md";n.default=r.exports}}]);