(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{798:function(e,n,a){"use strict";a.r(n);var s=a(1),t=Object(s.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jenkinsfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jenkinsfile","aria-hidden":"true"}},[e._v("#")]),e._v(" Jenkinsfile")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://jenkins.io/zh/doc/book/pipeline/jenkinsfile/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jenkinsfile"),a("OutboundLink")],1),e._v(" 中所有有效的声明式流水线必须包含在一个 pipeline 块中:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    /* insert Declarative Pipeline here */\n}\n")])])]),a("h2",{attrs:{id:"agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#agent","aria-hidden":"true"}},[e._v("#")]),e._v(" agent")]),e._v(" "),a("p",[e._v("agent 指令告诉Jenkins在哪里以及如何执行Pipeline或者Pipeline子集。 正如您所预料的，所有的Pipeline都需要 agent 指令。")]),e._v(" "),a("p",[e._v("在执行引擎中，agent 指令会引起以下操作的执行：")]),e._v(" "),a("ul",[a("li",[e._v("所有在块block中的步骤steps会被Jenkins保存在一个执行队列中。 一旦一个执行器 executor 是可以利用的，这些步骤将会开始执行。")]),e._v(" "),a("li",[e._v("一个工作空间 workspace 将会被分配， 工作空间中会包含来自远程仓库的文件和一些用于Pipeline的工作文件")])]),e._v(" "),a("h3",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" docker")]),e._v(" "),a("p",[e._v("使用给定的容器执行流水线或阶段。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("agent {\n    docker {\n        image 'maven:3-alpine'\n        label 'my-defined-label'\n        args  '-v /tmp:/tmp'\n    }\n}\n")])])]),a("h3",{attrs:{id:"各语言代理示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各语言代理示例","aria-hidden":"true"}},[e._v("#")]),e._v(" 各语言代理示例")]),e._v(" "),a("p",[e._v("下面是一个简单的Pipeline各种语言示例。")]),e._v(" "),a("p",[e._v("Java")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent { docker 'maven:3.3.3' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'mvn --version'\n            }\n        }\n    }\n}\n")])])]),a("p",[e._v("Node.js / JavaScript")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent { docker 'node:6.3' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'npm --version'\n            }\n        }\n    }\n}\n")])])]),a("p",[e._v("Ruby")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent { docker 'ruby' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'ruby --version'\n            }\n        }\n    }\n}\n")])])]),a("p",[e._v("Python")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent { docker 'python:3.5.1' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'python --version'\n            }\n        }\n    }\n}\n")])])]),a("p",[e._v("PHP")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent { docker 'php' }\n    stages {\n        stage('build') {\n            steps {\n                sh 'php --version'\n            }\n        }\n    }\n}\n")])])]),a("h3",{attrs:{id:"阶段级代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阶段级代理","aria-hidden":"true"}},[e._v("#")]),e._v(" 阶段级代理")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent none \n    stages {\n        stage('Example Build') {\n            agent { docker 'maven:3-alpine' } \n            steps {\n                echo 'Hello, Maven'\n                sh 'mvn --version'\n            }\n        }\n        stage('Example Test') {\n            agent { docker 'openjdk:8-jre' } \n            steps {\n                echo 'Hello, JDK'\n                sh 'java -version'\n            }\n        }\n    }\n}\n")])])]),a("h2",{attrs:{id:"stages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stages","aria-hidden":"true"}},[e._v("#")]),e._v(" stages")]),e._v(" "),a("p",[e._v("Pipelines由多重steps组成，包括构建、测试和部署等应用。 Jenkins Pipeline允许您使用一种简单的方式组合多重steps，以帮助您实现多种类型的自动化构建过程。")]),e._v(" "),a("p",[e._v("可以把“step”看作一个简单的命令去执行一个简单的动作，或者说是一个步骤。 当一个步骤运行成功时继续运行下一个步骤。 当任何一个步骤执行失败时，Pipeline的执行结果也为失败。")]),e._v(" "),a("p",[e._v("当所有的步骤都执行完成并且为成功时，Pipeline的执行结果为成功。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent any\n    stages { \n        stage('Example') {\n            steps {\n                echo 'Hello World'\n            }\n        }\n        stage('Test') {\n            steps {\n                echo 'Test'\n            }\n        }\n    }\n}\n")])])]),a("h3",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" steps")]),e._v(" "),a("p",[e._v("steps 部分在给定的"),a("code",[e._v("stage")]),e._v(" 指令中执行的定义了一系列的一个或多个steps。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent any\n    stages {\n        stage('Example') {\n            steps { \n                sh 'whoami'\n                echo 'Hello World'\n            }\n        }\n    }\n}\n")])])]),a("h2",{attrs:{id:"post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post","aria-hidden":"true"}},[e._v("#")]),e._v(" post")]),e._v(" "),a("p",[e._v("当Pipeline运行完成时，你可能需要做一些清理工作或者基于Pipeline的运行结果执行不同的操作， 这些操作可以放在 post 部分。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("pipeline {\n    agent any\n    stages {\n        stage('Test') {\n            steps {\n                sh 'echo \"Fail!\"; exit 1'\n            }\n        }\n    }\n    post {\n        always {\n            echo 'This will always run'\n        }\n        success {\n            echo 'This will run only if successful'\n        }\n        failure {\n            echo 'This will run only if failed'\n        }\n        unstable {\n            echo 'This will run only if the run was marked as unstable'\n        }\n        changed {\n            echo 'This will run only if the state of the Pipeline has changed'\n            echo 'For example, if the Pipeline was previously failing but is now successful'\n        }\n    }\n}\n")])])])])},[],!1,null,null,null);n.default=t.exports}}]);