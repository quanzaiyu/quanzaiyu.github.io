(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{826:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用idm批量下载ts视频并合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用idm批量下载ts视频并合并","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用IDM批量下载ts视频并合并")]),t._v(" "),a("h2",{attrs:{id:"什么是-ts-视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ts-视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是 ts 视频")]),t._v(" "),a("p",[t._v('ts是日本高清摄像机拍摄下进行的封装格式，全称为MPEG2-TS。ts即"Transport Stream"的缩写。MPEG2-TS格式的特点就是要求从视频流的任一片段开始都是可以独立解码的。(百度百科)')]),t._v(" "),a("h2",{attrs:{id:"批量下载-ts-视频文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量下载-ts-视频文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 批量下载 ts 视频文件")]),t._v(" "),a("p",[t._v("找到一个播放ts视频的站点, 打开开发者工具 Network 选项卡查看其网络路径, 可以看到比较规律的的路径序列, 比如:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190217/001.webp"}}),t._v(" "),a("p",[t._v("然后将规则设置到IDM, 进行下载:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190217/002.webp"}}),t._v(" "),a("p",[t._v("不久就能看到全部下载完毕:")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190217/003.webp"}}),t._v(" "),a("h2",{attrs:{id:"合并多个-ts-视频文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并多个-ts-视频文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 合并多个 ts 视频文件")]),t._v(" "),a("p",[t._v("编写 Python 进行视频合并:")]),t._v(" "),a("p",[a("code",[t._v("join.py")])]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n\nfiledir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('r"D:\\User\\quanzaiyu\\Downloads"')]),t._v("\nnew_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('u"%s\\\\out.ts"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" filedir\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("new_file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb+'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("324")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  filepath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('u"%s\\\\1ecf49a0bc1%03d.ts"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filedir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flush"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("执行此 python 文件, 输出到 "),a("code",[t._v("out.ts")]),t._v(":")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190217/004.webp"}}),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://baike.baidu.com/item/TS%E6%96%87%E4%BB%B6/9554188",target:"_blank",rel:"noopener noreferrer"}},[t._v("TS文件 - 百度百科"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://jingyan.baidu.com/article/75ab0bcb8b7ee0d6864db2f1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("合并多个ts视频文件"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=r.exports}}]);