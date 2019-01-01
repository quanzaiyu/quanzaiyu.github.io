(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{749:function(n,t,e){"use strict";e.r(t);var s=e(0),a=Object(s.a)({},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"多分支流水线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多分支流水线","aria-hidden":"true"}},[n._v("#")]),n._v(" 多分支流水线")]),n._v(" "),e("p",[n._v("以上节仓库为例, 新建两个分支: "),e("code",[n._v("development")]),n._v(" 和 "),e("code",[n._v("production")]),n._v(", 将 "),e("code",[n._v("master")]),n._v(" 分支下的内容检出到当前分支:")]),n._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[n._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" branch development\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" checkout development\nSwitched to branch "),e("span",{pre:!0,attrs:{class:"token string"}},[n._v("'development'")]),n._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" pull "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v(".")]),n._v(" master\nFrom "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v(".")]),n._v("\n * branch            master     -"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" FETCH_HEAD\nAlready up to date.\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" branch production\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" checkout production\nSwitched to branch "),e("span",{pre:!0,attrs:{class:"token string"}},[n._v("'production'")]),n._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" pull "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v(".")]),n._v(" master\nFrom "),e("span",{pre:!0,attrs:{class:"token keyword"}},[n._v(".")]),n._v("\n * branch            master     -"),e("span",{pre:!0,attrs:{class:"token operator"}},[n._v(">")]),n._v(" FETCH_HEAD\nAlready up to date.\n")])])]),e("h2",{attrs:{id:"jenkinsfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkinsfile","aria-hidden":"true"}},[n._v("#")]),n._v(" Jenkinsfile")]),n._v(" "),e("p",[n._v("修改 Jenkinsfile 如下:")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("pipeline {\n    agent {\n        docker {\n            image 'node:6-alpine'\n            args '-p 3000:3000 -p 5000:5000'\n        }\n    }\n    environment {\n        CI = 'true'\n    }\n    stages {\n        stage('Build') {\n            steps {\n                sh 'npm config set registry https://registry.npm.taobao.org'\n                sh 'npm install'\n            }\n        }\n        stage('Test') {\n            steps {\n                sh './jenkins/scripts/test.sh'\n            }\n        }\n        stage('Deliver for development') {\n            when {\n                branch 'development'\n            }\n            steps {\n                sh './jenkins/scripts/deliver-for-development.sh'\n                input message: 'Finished using the web site? (Click \"Proceed\" to continue)'\n                sh './jenkins/scripts/kill.sh'\n            }\n        }\n        stage('Deploy for production') {\n            when {\n                branch 'production'\n            }\n            steps {\n                sh './jenkins/scripts/deploy-for-production.sh'\n                input message: 'Finished using the web site? (Click \"Proceed\" to continue)'\n                sh './jenkins/scripts/kill.sh'\n            }\n        }\n    }\n}\n")])])]),e("h2",{attrs:{id:"创建多分支流水线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建多分支流水线","aria-hidden":"true"}},[n._v("#")]),n._v(" 创建多分支流水线")]),n._v(" "),e("imgLink",{attrs:{src:"date/20190101/Jenkins/012.png"}}),n._v(" "),e("imgLink",{attrs:{src:"date/20190101/Jenkins/013.png"}}),n._v(" "),e("imgLink",{attrs:{src:"date/20190101/Jenkins/014.png"}})],1)},[],!1,null,null,null);a.options.__file="muti-pipeline.md";t.default=a.exports}}]);