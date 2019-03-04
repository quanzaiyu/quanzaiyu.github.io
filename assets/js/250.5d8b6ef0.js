(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{669:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git-问题汇总及解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-问题汇总及解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 问题汇总及解决方案")]),t._v(" "),e("h2",{attrs:{id:"src-refspec-xxx-does-not-match-any"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#src-refspec-xxx-does-not-match-any","aria-hidden":"true"}},[t._v("#")]),t._v(" src refspec xxx does not match any.")]),t._v(" "),e("p",[t._v("出现以下报错：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("error: src refspec xxx does not match any.\n")])])]),e("p",[t._v("可使用以下命令解决：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -mv master "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),t._v("\n")])])]),e("p",[t._v("这句话的意思是将 master 分支移动到 test 分支")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/21264738/error-src-refspec-master-does-not-match-any",target:"_blank",rel:"noopener noreferrer"}},[t._v("error: src refspec master does not match any - stackoverflow"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/jeremylee/p/5715289.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("error: src refspec master does not match any. 错误处理办法"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"git-修改提交的用户名和-email"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-修改提交的用户名和-email","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 修改提交的用户名和 Email")]),t._v(" "),e("p",[t._v("有的时候提交的时候会报以下提示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Your name and email address were configured automatically based\non your username and hostname. Please check that they are accurate.\nYou can suppress this message by setting them explicitly. Run the\nfollowing command and follow the instructions in your editor to edit\nyour configuration file:\n\n    git config --global --edit\n\nAfter doing this, you may fix the identity used for this commit with:\n\n    git commit --amend --reset-author\n")])])]),e("p",[t._v("其实这只需要绑定以下用户名和邮箱即可：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email you@example.com\n")])])]),e("p",[t._v("或者提交的时候指定用户名和邮箱")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend --author"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Your Name <you@example.com>'")]),t._v("\n")])])]),e("h2",{attrs:{id:"git-取消文件跟踪"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-取消文件跟踪","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 取消文件跟踪")]),t._v(" "),e("p",[t._v("遇到那么一个问题，在项目还未同步到远程服务器的时候，初次创建 .gitignore 文件，列表中包含的文件都会被忽略。但是，在项目开发中，在 .gitignore 中新增加的文件（夹）却不会生效，文件依然处于跟踪状态，提交到服务器时此文件依然会一起提交。")]),t._v(" "),e("p",[t._v("看了一些文章，几乎都是以下做法：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".gitignore is now working"')]),t._v("\n")])])]),e("p",[t._v("但是，这样的话，移除的文件仍然是处于被跟踪的状态，同步到服务器，服务器同名文件仍然会被删除。")]),t._v(" "),e("p",[t._v("我希望的是，第一次提交，将一些服务器配置传上去，之后的提交，本地文件改为本地配置，不影响服务器端的同名文件。")]),t._v(" "),e("p",[t._v("最后百度搜索“git取消文件跟踪”，终于找到了解决方案：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-index --assume-unchanged filePath "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git 不再追踪文件改动")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-index —-no-assume-unchanged filePath "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git 恢复追踪文件改动")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" —cached filePath "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git 删除被管理的文件")]),t._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r -f —cached filePath "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git 删除被管理的文件夹")]),t._v("\n")])])]),e("p",[t._v("使用 "),e("code",[t._v("git update-index --assume-unchanged")]),t._v(" 即可取消对文件的跟踪，再次提交，未跟踪的文件不会被提交，服务器端的文件不受影响。记得在 .gitignore 加入相关忽略配置，以免其他开发者down下来的代码中包含此文件并错误提交。")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/birthmarkqiqi/article/details/49124927",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 取消跟踪已版本控制的文件"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://shiyousan.com/post/636470505667009340",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决.gitignore文件忽略规则无效git依然跟踪修改的问题"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://my.oschina.net/u/2603728/blog/788131",target:"_blank",rel:"noopener noreferrer"}},[t._v(".gitignore更新后如何生效"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"git-默认对文件名大小写不敏感"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-默认对文件名大小写不敏感","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 默认对文件名大小写不敏感")]),t._v(" "),e("p",[t._v("git 默认不区分文件名大小写。")]),t._v(" "),e("p",[t._v("比如，当你创建一个文件后，叫 readme.md 写入内容后提交到线上代码仓库。")]),t._v(" "),e("p",[t._v("然后你在本地修改文件名为 Readme.md 接着你去提交，发现代码没有变化。")]),t._v(" "),e("p",[t._v("其实 git 默认对于文件名大小写是不敏感的，所以上面你修改了首字母大写，但是 git 并没有发现代码任何改动。")]),t._v(" "),e("p",[t._v("让 git 识别文件名大小写变化有两种方式。")]),t._v(" "),e("p",[t._v("一、配置 git 使其对文件名大小写敏感")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config core.ignorecase "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),e("p",[t._v("二、从 git 本地仓库删除此文件，然后添加再提交")]),t._v(" "),e("p",[t._v("(1) 删除")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" readme.md\n")])])]),e("p",[t._v("(2) 重新添加")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add Readme.md\n")])])]),e("p",[t._v("(3) 提交")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Readme.md'")]),t._v("\n")])])]),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://yijiebuyi.com/blog/e96eccc4e6f7168e0ce92fa9c79f0d23.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 默认对文件名大小写不敏感 (不区分文件名大小写)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/u013707249/article/details/79135639",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 大小写问题 踩坑笔记"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"git-提交空目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-提交空目录","aria-hidden":"true"}},[t._v("#")]),t._v(" Git 提交空目录")]),t._v(" "),e("p",[t._v("git 本身是会忽略空目录的，要解决这个问题，需要在空目录下新建 .gitkeep 文件：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PATH_TO_REPOSITORY")]),t._v(" -type d "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" -path "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*.git*"')]),t._v(" -empty -exec "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{}'")]),t._v("/.gitkeep \\"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("其中 $PATH_TO_REPOSITORY 是当前创库根目录。")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/fengchao2016/article/details/52769151",target:"_blank",rel:"noopener noreferrer"}},[t._v("git提交空文件夹"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"tortoisegit状态图标不能正常显示的解决办法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tortoisegit状态图标不能正常显示的解决办法","aria-hidden":"true"}},[t._v("#")]),t._v(" TortoiseGit状态图标不能正常显示的解决办法")]),t._v(" "),e("p",[t._v("打开 "),e("code",[t._v("regedit")]),t._v(", 找到 "),e("code",[t._v("HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\ShellIconOverlayIdentifiers")]),t._v(", 将带 "),e("code",[t._v("tortoise")]),t._v(" 的项重命名, 使其排序靠前, 重启资源管理器即可")]),t._v(" "),e("p",[t._v("参考：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://jingyan.baidu.com/article/359911f552827957fe0306f8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TortoiseGit状态图标不能正常显示的解决办法"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"git-bash-中文显示乱码问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-bash-中文显示乱码问题","aria-hidden":"true"}},[t._v("#")]),t._v(" git bash 中文显示乱码问题")]),t._v(" "),e("p",[t._v("解决方案1:")]),t._v(" "),e("p",[t._v("在git bash下，右键 出现下图，选择 options > Text, 将Character set设置为 UTF-8")]),t._v(" "),e("p",[t._v("解决方案2:")]),t._v(" "),e("ol",[e("li",[t._v("编辑 "),e("code",[t._v("~\\.gitconfig")]),t._v(" 文件，在文件末尾增加以下内容：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[gui]\n    encoding = utf-8  #代码库统一使用utf-8\n[i18n]\n    commitencoding = utf-8  #log编码\n[svn]\n    pathnameencoding = utf-8  #支持中文路径\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("编辑 "),e("code",[t._v("Git安装目录\\mingw64\\share\\git\\completion\\git-completion.bash")]),t._v(" 文件, 在文件末尾增加以下内容：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("alias ls='ls --show-control-chars --color=auto'  #ls能够正常显示中文\n")])])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("编辑 "),e("code",[t._v("Git安装目录\\etc\\inputrc")]),t._v(" 文件，修改output-meta和convert-meta属性值：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("set output-meta on  #bash可以正常输入中文\nset convert-meta off\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("编辑 "),e("code",[t._v("Git安装目录\\etc\\profile")]),t._v(" 文件，在文件末尾添加如下内容：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export LESSHARESET=utf-8\n")])])]),e("p",[t._v("参考:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/scale/p/6258457.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git bash下中文乱码 —— 解决方案"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);