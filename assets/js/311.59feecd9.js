(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{747:function(e,a,n){"use strict";n.r(a);var s=n(0),t=Object(s.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"jenkinsfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkinsfile","aria-hidden":"true"}},[e._v("#")]),e._v(" Jenkinsfile")]),e._v(" "),n("p",[e._v("Jenkinsfile 中所有有效的声明式流水线必须包含在一个 pipeline 块中:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    /* insert Declarative Pipeline here */\n}\n")])])]),n("h2",{attrs:{id:"代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代理","aria-hidden":"true"}},[e._v("#")]),e._v(" 代理")]),e._v(" "),n("p",[e._v("agent 部分指定了整个流水线或特定的部分, 将会在Jenkins环境中执行的位置，这取决于 agent"),n("code",[e._v("区域的位置。该部分必须在")]),e._v("pipeline 块的顶层被定义, 但是stage级别的使用是可选的。")]),e._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" docker")]),e._v(" "),n("p",[e._v("使用给定的容器执行流水线或阶段。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("agent {\n    docker {\n        image 'maven:3-alpine'\n        label 'my-defined-label'\n        args  '-v /tmp:/tmp'\n    }\n}\n")])])]),n("h3",{attrs:{id:"各语言代理示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#各语言代理示例","aria-hidden":"true"}},[e._v("#")]),e._v(" 各语言代理示例")]),e._v(" "),n("p",[e._v("下面是一个简单的Pipeline各种语言示例。")]),e._v(" "),n("p",[e._v("Java")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent { docker 'maven:3.3.3' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'mvn --version'\n            }\n        }\n    }\n}\n")])])]),n("p",[e._v("Node.js / JavaScript")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent { docker 'node:6.3' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'npm --version'\n            }\n        }\n    }\n}\n")])])]),n("p",[e._v("Ruby")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent { docker 'ruby' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'ruby --version'\n            }\n        }\n    }\n}\n")])])]),n("p",[e._v("Python")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent { docker 'python:3.5.1' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'python --version'\n            }\n        }\n    }\n}\n")])])]),n("p",[e._v("PHP")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("pipeline {\n    agent { docker 'php' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'php --version'\n            }\n        }\n    }\n}\n")])])])])},[],!1,null,null,null);t.options.__file="jenkinsfile.md";a.default=t.exports}}]);