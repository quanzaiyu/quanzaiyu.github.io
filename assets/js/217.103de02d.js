(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{621:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git-简易教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-简易教程","aria-hidden":"true"}},[a._v("#")]),a._v(" Git 简易教程")]),a._v(" "),s("h2",{attrs:{id:"创建新仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建新仓库")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" init\n")])])]),s("h2",{attrs:{id:"检出仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检出仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 检出仓库")]),a._v(" "),s("p",[a._v("执行如下命令以创建一个本地仓库的克隆版本：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone /path/to/repository \n")])])]),s("p",[a._v("如果是远端服务器上的仓库：")]),a._v(" "),s("p",[a._v("使用 SSH")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone username@host:/path/to/repository\n")])])]),s("p",[a._v("使用 HTTPS")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/path/to/repository.git\n")])])]),s("p",[a._v("只检出 "),s("code",[a._v(".git")]),a._v(" 目录:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone --bare "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("repository"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"添加一个远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加一个远程仓库","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加一个远程仓库")]),a._v(" "),s("p",[a._v("如果在本地已经初始化了一个本地仓库，需要添加远程仓库，可以使用")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote add "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("local-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("server"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("比如 :")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" remote add origin "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("reomteAddr"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("此时在本地仓库命名了一个叫 "),s("code",[a._v("origin")]),a._v(" 的远程仓库，之后只需要使用此名称就可将变更推送到指定远程仓库。")]),a._v(" "),s("p",[a._v("查看 git 配置文件可以看到添加成功了:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" .git "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" config \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("core"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\trepositoryformatversion "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 0\n\tfilemode "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n\tbare "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n\tlogallrefupdates "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("remote "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"origin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\turl "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /root/git-test/\n\tfetch "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" +refs/heads/*:refs/remotes/origin/*\n")])])]),s("h2",{attrs:{id:"添加与提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加与提交","aria-hidden":"true"}},[a._v("#")]),a._v(" 添加与提交")]),a._v(" "),s("p",[a._v("把计划改动的文件添加到缓存区，使用如下命令：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" add "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" add *\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" add "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),s("p",[a._v("这是 git 基本工作流程的第一步；使用如下命令以实际提交改动：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"代码提交信息"')]),a._v("\n")])])]),s("p",[a._v("比如:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" commit -am 0\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("master "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("root-commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" f168f34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" 0\n 1 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" changed, 1 insertion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n create mode 100644 a\n")])])]),s("p",[a._v("现在，改动的文件已经提交到了 HEAD，但是还没同步到远端仓库。")]),a._v(" "),s("h2",{attrs:{id:"更新与合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新与合并","aria-hidden":"true"}},[a._v("#")]),a._v(" 更新与合并")]),a._v(" "),s("p",[a._v("要更新本地仓库至最新改动，执行：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull origin master\n")])])]),s("p",[a._v("比如:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" pull origin master\nremote: Counting objects: 3, done.\nremote: Total 3 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("delta 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", reused 0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("delta 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nUnpacking objects: 100% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("3/3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", done.\nFrom /root/git-test\n * branch            master     -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" FETCH_HEAD\n * "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("new branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("      master     -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" origin/master\nMerge made by the "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'recursive'")]),a._v(" strategy.\n a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 1 +\n 1 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" changed, 1 insertion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n create mode 100644 a\n")])])]),s("p",[s("code",[a._v("git pull")]),a._v(" 实际上是一个合并的命令，包括 获取（fetch）并 合并（merge） 远端的改动。")]),a._v(" "),s("p",[a._v("要合并其他分支到你的当前分支（例如 master），执行：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("两种情况下，git 都会尝试去自动合并改动。但自动合并并非次次都能成功，并可能导致 冲突（conflicts）。")]),a._v(" "),s("p",[a._v("这时候就需要你修改这些文件来人为合并这些 冲突（conflicts）。改完之后，你需要执行如下命令以将它们标记为合并成功：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" add "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("在合并改动之前，也可以使用如下命令查看：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("diff")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("source_branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("target_branch"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"推送改动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送改动","aria-hidden":"true"}},[a._v("#")]),a._v(" 推送改动")]),a._v(" "),s("p",[a._v("改动已经在本地仓库的 HEAD 中了。执行如下命令以将这些改动提交到远端仓库：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master\n")])])]),s("p",[a._v("origin 为绑定的远程仓库名称，master 为需要推送到的分支，可以把 master 换成想要推送的任何分支。")]),a._v(" "),s("p",[a._v("如果首次提交失败，提示:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("By default, updating the current branch in a non-bare repository is denied, because it will make the index and work tree inconsistent with what you pushed, and will require 'git reset --hard' to match the work tree to HEAD.\n")])])]),s("p",[a._v("可以在远程仓库设置 "),s("code",[a._v("git config receive.denyCurrentBranch ignore")]),a._v(" 忽略之")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin master\nCounting objects: 8, done.\nCompressing objects: 100% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("5/5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", done.\nWriting objects: 100% "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("8/8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", 737 bytes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 0 bytes/s, done.\nTotal 8 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("delta 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", reused 0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("delta 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nTo /root/git-test/\n   f168f34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("cd317f4  master -"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" master\n")])])]),s("h2",{attrs:{id:"分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支","aria-hidden":"true"}},[a._v("#")]),a._v(" 分支")]),a._v(" "),s("p",[a._v("分支是用来将特性开发绝缘开来的。在你创建仓库的时候，master 是“默认的”。在其他分支上进行开发，完成后再将它们合并到主分支上。")]),a._v(" "),s("p",[a._v("创建一个叫做“feature_x”的分支，并切换过去：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout -b feature_x\n")])])]),s("p",[a._v("切换回主分支：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout master\n")])])]),s("p",[a._v("再把新建的分支删掉：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch -d feature_x\n")])])]),s("p",[a._v("除非你将分支推送到远端仓库，不然该分支就是 不为他人所见的：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin <branch>\n")])])]),s("h2",{attrs:{id:"标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签","aria-hidden":"true"}},[a._v("#")]),a._v(" 标签")]),a._v(" "),s("p",[a._v("在软件发布时创建标签，是被推荐的。这是个旧有概念，在 SVN 中也有。可以执行如下命令以创建一个叫做 1.0.0 的标签：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git tag 1.0.0 1b2e1d63ff\n")])])]),s("p",[a._v("1b2e1d63ff 是你想要标记的提交 ID 的前 10 位字符。使用如下命令获取提交 ID：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git log\n")])])]),s("p",[a._v("你也可以用该提交 ID 的少一些的前几位，只要它是唯一的。")]),a._v(" "),s("h2",{attrs:{id:"替换本地改动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换本地改动","aria-hidden":"true"}},[a._v("#")]),a._v(" 替换本地改动")]),a._v(" "),s("p",[a._v("假如你做错事，你可以使用如下命令替换掉本地改动：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout -- <filename>\n")])])]),s("p",[a._v("此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到缓存区的改动，以及新文件，都不受影响。")]),a._v(" "),s("p",[a._v("假如你想要丢弃你所有的本地改动与提交，可以到服务器上获取最新的版本并将你本地主分支指向到它：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git fetch origin\ngit reset --hard origin/master\n")])])])])},[],!1,null,null,null);r.options.__file="Simple.md";t.default=r.exports}}]);