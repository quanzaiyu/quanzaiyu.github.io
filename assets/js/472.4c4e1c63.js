(window.webpackJsonp=window.webpackJsonp||[]).push([[472],{699:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"应用-使用-docker-构建-vue-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用-使用-docker-构建-vue-项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 应用 - 使用 Docker 构建 Vue 项目")]),a._v(" "),s("p",[a._v("首先创建一个 Vue 应用, 然后打包:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" run build\n")])])]),s("p",[a._v("打包后, 会生成 /dist 目录, 这是构建产物")]),a._v(" "),s("p",[a._v("创建 "),s("code",[a._v("default.conf")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("server {\n    listen       80;\n    server_name  localhost;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   html;\n    }\n}\n")])])]),s("p",[a._v("创建 Dockerfile:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("FROM hub.c.163.com/library/nginx\n\nMAINTAINER quanzaiyu\n\nRUN rm /etc/nginx/conf.d/default.conf\n\nADD default.conf /etc/nginx/conf.d/\n\nCOPY dist/ /usr/share/nginx/html/\n")])])]),s("p",[a._v("注意, 因为引用的基础容器为nginx, 因此这里不需要暴露任何端口")]),a._v(" "),s("p",[a._v("打包构建为 Docker 镜像:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker build -t "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"731734107/vue-test"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("以上步骤, 结合 Jenkins 会更加容易, 注意, 打包vue是在docker外部完成的, 需要的只是其构建产物")]),a._v(" "),s("p",[a._v("运行测试:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker run -p 8088:80 731734107/vue-test\n")])])]),s("p",[a._v("将容器中的80端口映射到宿主机的8088端口, 在宿主机中使用 http://localhost:8088 即可访问")]),a._v(" "),s("p",[a._v("推送到 Docker Hub")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ docker push 731734107/vue-test\n")])])])])},[],!1,null,null,null);e.default=n.exports}}]);