(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{1018:function(t,a,e){"use strict";e.r(a);var s={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},n=e(0),i=Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[e("h1",{attrs:{id:"git-版本回退"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-版本回退","aria-hidden":"true"}},[t._v("#")]),t._v(" git 版本回退")]),t._v(" "),e("h2",{attrs:{id:"git-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-log","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("git log")])]),t._v(" "),e("p",[t._v("假设我们有一个 "),e("code",[t._v("readme.txt")]),t._v(" 文件, 一共有三个版本被提交到 Git 仓库里了, 用 "),e("code",[t._v("git log -n")]),t._v(" 命令查看提交记录.")]),t._v(" "),e("p",[t._v("其中 "),e("code",[t._v("n")]),t._v(" 代表显示最近提交的几次更改:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" log -3\ncommit 3628164fb26d48395383f8f31179f24e0882e1e0\nAuthor: Michael Liao "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("askxuefeng@gmail.com"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug 20 15:11:49 2013 +0800\n\n    append GPL\n\ncommit ea34578d5496d7dd233c827ed32a8cd576c5ee85\nAuthor: Michael Liao "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("askxuefeng@gmail.com"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Tue Aug 20 14:53:12 2013 +0800\n\n    add distributed\n\ncommit cb926e7ea50ad11b8f9e909c05226233bf755030\nAuthor: Michael Liao "),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("askxuefeng@gmail.com"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Mon Aug 19 17:51:55 2013 +0800\n\n    wrote a readme "),e("span",{attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])])]),e("p",[t._v("如果嫌输出信息太多，看得眼花缭乱的，可以加上 "),e("code",[t._v("--pretty=oneline")]),t._v(" 参数：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n3628164fb26d48395383f8f31179f24e0882e1e0 append GPL\nea34578d5496d7dd233c827ed32a8cd576c5ee85 add distributed\ncb926e7ea50ad11b8f9e909c05226233bf755030 wrote a readme "),e("span",{attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])])]),e("p",[t._v("可以看到的一大串类似 3628164...882e1e0 的是 commit id（版本号），和SVN不一样，Git 的 commit id 不是 1，2，3…… 递增的数字，而是一个 SHA1 计算出来的一个非常大的数字，用十六进制表示，而且你看到的 commit id 和我的肯定不一样，以你自己的为准。为什么 commit id 需要用这么一大串数字表示呢？因为Git是分布式的版本控制系统，后面我们还要研究多人在同一个版本库里工作，如果大家都用 1，2，3…… 作为版本号，那肯定就冲突了。")]),t._v(" "),e("h2",{attrs:{id:"git-reset-hard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-hard","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("git reset --hard")])]),t._v(" "),e("p",[t._v("现在如果想把 readme.txt 回退到上一个版本，也就是 'add distributed' 的那个版本，怎么做呢？")]),t._v(" "),e("p",[t._v("首先，Git 必须知道当前版本是哪个版本，在 Git 中，用 "),e("code",[t._v("HEAD")]),t._v(" 表示当前版本，也就是最新的提交 3628164...882e1e0，上一个版本就是 "),e("code",[t._v("HEAD^")]),t._v("，上上一个版本就是 "),e("code",[t._v("HEAD^^")]),t._v("，当然往上 100 个版本写 "),e("code",[t._v("100个^")]),t._v(" 比较容易数不过来，所以写成 "),e("code",[t._v("HEAD~100")]),t._v("。")]),t._v(" "),e("p",[t._v("现在，我们要把当前版本 'append GPL' 回退到上一个版本 'add distributed'，就可以使用 "),e("code",[t._v("git reset")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\nHEAD is now at ea34578 add distributed\n")])])]),e("p",[t._v("也可以通过 "),e("code",[t._v("commit id")]),t._v(" 指定回到过去或未来的某个版本：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard 3628164\nHEAD is now at 3628164 append GPL\n")])])]),e("p",[t._v("版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。")]),t._v(" "),e("p",[t._v("Git 的版本回退速度非常快，因为 Git 在内部有个指向当前版本的 HEAD 指针，当你回退版本的时候，Git仅仅是把HEAD从指向append GPL：")]),t._v(" "),e("imgLink",{attrs:{src:"articles/015.jpg/small"}}),t._v(" "),e("p",[t._v("改为指向add distributed：")]),t._v(" "),e("imgLink",{attrs:{src:"articles/016.jpg/small"}}),t._v(" "),e("p",[t._v("然后顺便把工作区的文件更新了。所以你让HEAD指向哪个版本号，你就把当前版本定位在哪。")]),t._v(" "),e("h2",{attrs:{id:"git-reflog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-reflog","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("code",[t._v("git reflog")])]),t._v(" "),e("p",[t._v("现在，你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的 commit id 怎么办？")]),t._v(" "),e("p",[t._v("在 Git 中，总是有后悔药可以吃的。当你用 "),e("code",[t._v("$ git reset --hard HEAD^")]),t._v(" 回退到 add distributed 版本时，再想恢复到 append GPL ，就必须找到 append GPL 的 commit id。Git 提供了一个命令 "),e("code",[t._v("git reflog")]),t._v(" 用来记录你的每一次命令：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\nea34578 HEAD@"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("0"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": reset: moving to HEAD^\n3628164 HEAD@"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: append GPL\nea34578 HEAD@"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("2"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: add distributed\ncb926e7 HEAD@"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("3"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initial"),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": wrote a readme "),e("span",{attrs:{class:"token function"}},[t._v("file")]),t._v("\n")])])]),e("p",[t._v("终于舒了口气，第二行显示 append GPL 的 commit id 是 3628164，现在，你又可以乘坐时光机回到未来了。")]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("ol",[e("li",[t._v("HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令 "),e("code",[t._v("git reset --hard commit_id")]),t._v("。")]),t._v(" "),e("li",[t._v("穿梭前，用 "),e("code",[t._v("git log")]),t._v(" 可以查看提交历史，以便确定要回退到哪个版本。")]),t._v(" "),e("li",[t._v("要重返未来，用 "),e("code",[t._v("git reflog")]),t._v(" 查看命令历史，以便确定要回到未来的哪个版本。")])])],1)},[],!1,null,null,null);i.options.__file="Rollback.md";a.default=i.exports}}]);