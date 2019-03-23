(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{775:function(s,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jenkins-通过-ssh-发布构建产物"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-通过-ssh-发布构建产物","aria-hidden":"true"}},[s._v("#")]),s._v(" Jenkins 通过 SSH 发布构建产物")]),s._v(" "),n("ol",[n("li",[s._v("安装 "),n("code",[s._v("Publish Over SSH")]),s._v(" 插件")])]),s._v(" "),n("imgLink",{attrs:{src:"date/20190317/000.png"}}),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("系统管理 > 系统设置 > Publish over SSH")])]),s._v(" "),n("imgLink",{attrs:{src:"date/20190317/001.png"}}),s._v(" "),n("ul",[n("li",[n("strong",[s._v("Passphrase")]),s._v(": 私钥密码")]),s._v(" "),n("li",[n("strong",[s._v("Path to key")]),s._v(": 私钥路径")]),s._v(" "),n("li",[n("strong",[s._v("Key")]),s._v(": 私钥内容(如果设置Key则Path to key无效)")]),s._v(" "),n("li",[n("strong",[s._v("SSH Servers")]),s._v(": SSH 服务器配置")])]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("流水线配置")])]),s._v(" "),n("p",[s._v("项目 > Pipeline Syntax > 片段生成器 > sshPublisher")]),s._v(" "),n("p",[s._v("生成相关构建语句:")]),s._v(" "),n("imgLink",{attrs:{src:"date/20190317/002.png"}}),s._v(" "),n("ul",[n("li",[n("strong",[s._v("Source files")]),s._v(" 构建中生成的文件")]),s._v(" "),n("li",[n("strong",[s._v("Remove prefix")]),s._v(" SSH服务器的前缀, 通常留空")]),s._v(" "),n("li",[n("strong",[s._v("Remote directory")]),s._v(" SSH服务器的远程目录")]),s._v(" "),n("li",[n("strong",[s._v("Exec command")]),s._v(" 在SSH服务器中执行的命令")])]),s._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[s._v("创建 Jenkinsfile")])]),s._v(" "),n("p",[s._v("Jenkinsfile 示例, 本站点的构建语句:")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("pipeline "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    agent "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" docker "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node:latest'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    triggers "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cron")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'H H * * *'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    stages "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prepare'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'whoami'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node --version'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm --version'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'config'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm config set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm config set phantomjs_cdnurl https://npm.taobao.org/mirrors/phantomjs/'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm config set electron_mirror https://npm.taobao.org/mirrors/electron/'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'build'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm install'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'npm run build'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mkdir -p www'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -rf www/*'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\cp -r -a dist/* www'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls www'")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pwd'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'publish'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n              sshPublisher"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                publishers: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                  sshPublisherDesc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                    configName: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root@sshk3'")]),s._v(",\n                    transfers: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                      sshTransfer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                        sourceFiles: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist/**/*'")]),s._v(",\n                        remoteDirectory: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/usr/share/nginx/html/www/xiaoyulive'")]),s._v(",\n                        cleanRemote: true,\n                        excludes: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(",\n                        execCommand:  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n                                        echo \\'ssh transfer ok\\'\n                                        pwd\n                                        cd /usr/share/nginx/html/www/xiaoyulive\n                                        pwd\n                                        \\\\cp -r -a dist/* .\n                                        rm -rf dist\n                                        cd ..\n                                        pwd\n                                        \\\\cp -r -a xiaoyulive/* quanzaiyu.coding.me\n                                        cd quanzaiyu.coding.me\n                                        pwd\n                                        git add .\n                                        git commit -am update\n                                        git push origin master\n                                      '")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(",\n                        execTimeout: 120000,\n                        flatten: false,\n                        makeEmptyDirs: false,\n                        noDefaultExcludes: false,\n                        patternSeparator: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[, ]+'")]),s._v(",\n                        remoteDirectorySDF: false,\n                        removePrefix: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n                      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n                    usePromotionTimestamp: false,\n                    useWorkspaceInPromotion: false,\n                    verbose: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n                  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        stage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            steps "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                sh "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'curl blog.xiaoyulive.top'")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])],1)},[],!1,null,null,null);t.default=r.exports}}]);