(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{920:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-搜索与排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-搜索与排序","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 搜索与排序")]),s._v(" "),a("h2",{attrs:{id:"搜索-find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索-find","aria-hidden":"true"}},[s._v("#")]),s._v(" 搜索: find")]),s._v(" "),a("p",[a("strong",[s._v("find")]),s._v(" 命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。")]),s._v(" "),a("h3",{attrs:{id:"常用选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用选项","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用选项")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("-name")]),s._v(" 文件或目录")]),s._v(" "),a("li",[a("strong",[s._v("-path")]),s._v(" 路径")]),s._v(" "),a("li",[a("strong",[s._v("-size")]),s._v(" 文件大小")]),s._v(" "),a("li",[a("strong",[s._v("-regex")]),s._v(" 正则匹配")]),s._v(" "),a("li",[a("strong",[s._v("-iregex")]),s._v(" 此参数的效果和指定“-regex”参数类似，但忽略字符大小写的差别")]),s._v(" "),a("li",[a("strong",[s._v("-user")]),s._v(" 用户")])]),s._v(" "),a("h3",{attrs:{id:"根据类型进行匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据类型进行匹配","aria-hidden":"true"}},[s._v("#")]),s._v(" 根据类型进行匹配")]),s._v(" "),a("p",[a("strong",[s._v("-type")]),s._v(" 用于匹配文件类型")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("b")]),s._v(" 特殊块文件(缓冲的)")]),s._v(" "),a("li",[a("code",[s._v("c")]),s._v(" 特殊字符文件(不缓冲)")]),s._v(" "),a("li",[a("code",[s._v("d")]),s._v(" 目录")]),s._v(" "),a("li",[a("code",[s._v("p")]),s._v(" 命名管道 (FIFO)")]),s._v(" "),a("li",[a("code",[s._v("f")]),s._v(" 普通文件")]),s._v(" "),a("li",[a("code",[s._v("l")]),s._v(" 符号链接")]),s._v(" "),a("li",[a("code",[s._v("s")]),s._v(" 套接字")]),s._v(" "),a("li",[a("code",[s._v("D")]),s._v(" 门 (Solaris 特有)")])]),s._v(" "),a("h3",{attrs:{id:"根据时间进行匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据时间进行匹配","aria-hidden":"true"}},[s._v("#")]),s._v(" 根据时间进行匹配")]),s._v(" "),a("p",[s._v("UNIX/Linux文件系统每个文件都有三种时间戳")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("访问时间")]),s._v("（-atime/天，-amin/分钟）用户最近一次访问时间")]),s._v(" "),a("li",[a("strong",[s._v("修改时间")]),s._v("（-mtime/天，-mmin/分钟）文件最后一次修改时间")]),s._v(" "),a("li",[a("strong",[s._v("变化时间")]),s._v("（-ctime/天，-cmin/分钟）文件数据元（例如权限等）最后一次修改时间")])]),s._v(" "),a("h3",{attrs:{id:"根据文件大小进行匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据文件大小进行匹配","aria-hidden":"true"}},[s._v("#")]),s._v(" 根据文件大小进行匹配")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -size 文件大小单元\n")])])]),a("p",[s._v("文件大小单元：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("b")]),s._v(" —— 块（512字节）")]),s._v(" "),a("li",[a("strong",[s._v("c")]),s._v(" —— 字节")]),s._v(" "),a("li",[a("strong",[s._v("w")]),s._v(" —— 字（2字节）")]),s._v(" "),a("li",[a("strong",[s._v("k")]),s._v(" —— 千字节")]),s._v(" "),a("li",[a("strong",[s._v("M")]),s._v(" —— 兆字节")]),s._v(" "),a("li",[a("strong",[s._v("G")]),s._v(" —— 吉字节")])]),s._v(" "),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出当前目录及子目录下所有文件和文件夹, 其中 `.` 可省略")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.repo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配所有指定路径的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.repo'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /usr -path "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*local*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索路径中包含 local 的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /home -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 `/home` 目录下查找以 .txt 结尾的文件名, 其中引号可省略")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /home -iname "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上，但忽略大小写")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -size +10k "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索大于10KB的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -size -10k "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索小于10KB的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -size 10k "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索等于10KB的文件")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -atime -7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索最近7天内被访问过的所有文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -atime 7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索恰好在7天前被访问过的所有文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -atime +7 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索超过7天内被访问过的所有文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -mtime -10 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索在10天内被创建或者修改过的所有文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -amin +10 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索访问时间超过10分钟的所有文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -newer file.log "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找出比file.log修改时间更长的所有文件")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -o -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.pdf"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前目录及子目录下查找所有以 .txt 和 .pdf 结尾的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -o -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.pdf"')]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -regex "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*\\(\\.txt\\|\\.pdf\\)$"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基于正则表达式匹配文件路径")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -iregex "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".*\\(\\.txt\\|\\.pdf\\)$"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同上，但忽略大小写")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -maxdepth 3 -type f "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向下最大深度限制为3")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -mindepth 2 -type f "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索出深度距离当前目录至少2个子目录的所有文件")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -perm 777 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前目录下搜索出权限为777的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -user tom "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找出当前目录用户tom拥有的所有文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -group sunk "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找出当前目录用户组sunk拥有的所有文件")]),s._v("\n")])])]),a("h3",{attrs:{id:"借助-exec-选项与其他命令结合使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借助-exec-选项与其他命令结合使用","aria-hidden":"true"}},[s._v("#")]),s._v(" 借助 "),a("code",[s._v("-exec")]),s._v(" 选项与其他命令结合使用")]),s._v(" "),a("blockquote",[a("p",[s._v("找出当前目录下所有用户权限为root的文件，并把所有权更改为用户tom")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -user root -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" tom "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("上例中，"),a("strong",[s._v("{}")]),s._v(" 用于与 "),a("strong",[s._v("-exec")]),s._v(" 选项结合使用来匹配所有文件，然后会被替换为相应的文件名。")]),s._v(" "),a("blockquote",[a("p",[s._v("找出自己家目录下所有的 .txt 文件并删除")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/. -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -ok "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("上例中，"),a("strong",[s._v("-ok")]),s._v("和**-exec**行为一样，不过它会给出提示，是否执行相应的操作。")]),s._v(" "),a("blockquote",[a("p",[s._v("查找当前目录下所有.txt文件并把他们拼接起来写入到 all.txt 文件中")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" all.txt\n")])])]),a("blockquote",[a("p",[s._v("将30天前的.log文件移动到old目录中")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -mtime +30 -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.log"')]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" old \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("找出当前目录下所有.txt文件并以“File:文件名”的形式打印出来")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -exec "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"File: %s\\n"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("因为单行命令中-exec参数中无法使用多个命令，以下方法，将多条命令写在 .sh 文件中，可以实现在-exec之后接受多条命令")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -exec ./text.sh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"否定参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#否定参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 否定参数")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /home "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找出/home下不是以.txt结尾的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.php"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -perm 644 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找出当前目录下权限不是644的 php 文件")]),s._v("\n")])])]),a("h3",{attrs:{id:"删除匹配文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除匹配文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除匹配文件")]),s._v(" "),a("p",[s._v("删除当前目录下所有.txt文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -type f -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.txt"')]),s._v(" -delete\n")])])]),a("h3",{attrs:{id:"要列出所有长度为零的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要列出所有长度为零的文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 要列出所有长度为零的文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -empty\n")])])]),a("h2",{attrs:{id:"搜索-which"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索-which","aria-hidden":"true"}},[s._v("#")]),s._v(" 搜索: which")]),s._v(" "),a("p",[a("strong",[s._v("which")]),s._v(" 命令用于查找并显示给定命令的绝对路径，环境变量PATH中保存了查找命令时需要遍历的目录。which指令会在环境变量$PATH设置的目录里查找符合条件的文件。也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。")]),s._v(" "),a("p",[a("strong",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pwd")]),s._v("\n/bin/pwd\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" adduser\n/usr/sbin/adduser\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("which是根据使用者所配置的 PATH 变量内的目录去搜寻可运行档的！所以，不同的 PATH 配置内容所找到的命令不一样的！")])]),s._v(" "),a("h2",{attrs:{id:"搜索-whereis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搜索-whereis","aria-hidden":"true"}},[s._v("#")]),s._v(" 搜索: whereis")]),s._v(" "),a("p",[a("strong",[s._v("whereis")]),s._v(" 命令用来定位指令的二进制程序、源代码文件和man手册页等相关文件的路径。")]),s._v(" "),a("p",[s._v("whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。")]),s._v(" "),a("p",[s._v("和"),a("a",{attrs:{href:"http://man.linuxde.net/find",target:"_blank",rel:"noopener noreferrer"}},[s._v("find"),a("OutboundLink")],1),s._v("相比，whereis 查找的速度非常快，这是因为linux系统会将系统内的所有文件都记录在一个数据库文件中，当使用 whereis 时，会从数据库中查找数据，而不是像find命令那样，通过遍历硬盘来查找，效率自然会很高。但是该数据库文件并不是实时更新，默认情况下时一星期更新一次，因此，我们在用whereis和locate 查找文件时，有时会找到已经被删除的数据，或者刚刚建立文件，却无法查找到，原因就是因为数据库文件没有被更新。")]),s._v(" "),a("p",[a("strong",[s._v("常用选项")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("-b")]),s._v(" 只查找二进制文件")]),s._v(" "),a("li",[a("strong",[s._v("-m")]),s._v(" 只查找说明文件")]),s._v(" "),a("li",[a("strong",[s._v("-s")]),s._v(" 只查找原始代码文件")]),s._v(" "),a("li",[a("strong",[s._v("-f")]),s._v(" 不显示文件名前的路径名称")]),s._v(" "),a("li",[a("strong",[s._v("-u")]),s._v(" 查找不包含指定类型的文件")])]),s._v(" "),a("p",[a("strong",[s._v("示例")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" svn\nsvn: /usr/bin/svn /usr/local/svn /usr/share/man/man1/svn.1.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" -b svn\nsvn: /usr/bin/svn /usr/local/svn\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" -m svn\nsvn: /usr/share/man/man1/svn.1.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" -s svn\nsvn:\n")])])]),a("p",[s._v("说明："),a("code",[s._v("whereis -m svn")]),s._v("查出说明文档路径，"),a("code",[s._v("whereis -s svn")]),s._v("找source源文件。")]),s._v(" "),a("h2",{attrs:{id:"排序-sort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序-sort","aria-hidden":"true"}},[s._v("#")]),s._v(" 排序: sort")]),s._v(" "),a("p",[a("code",[s._v("sort")]),s._v(" 将文件/文本的每一行作为一个单位，相互比较，比较原则是从首字符向后，依次按ASCII码值进行比较，最后将他们按升序输出。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正序输出")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 逆序输出")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" sort.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 正序输出sort.txt中每一行的内容")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -u sort.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略相同行，或者使用 uniq")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" sort.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略相同行")]),s._v("\n")])])]),a("h2",{attrs:{id:"正则搜索-grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则搜索-grep","aria-hidden":"true"}},[s._v("#")]),s._v(" 正则搜索: grep")]),s._v(" "),a("p",[a("strong",[s._v("grep")]),s._v(" （global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。")]),s._v(" "),a("h3",{attrs:{id:"基本使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("blockquote",[a("p",[s._v("在文件中搜索一个单词，命令会返回一个包含 "),a("strong",[s._v("match_pattern")]),s._v(" 的文本行")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" match_pattern file_name\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_name\n")])])]),a("blockquote",[a("p",[s._v("在多个文件中查找")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_1 file_2 file_3 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-v")]),s._v(" 反转查找")])]),s._v(" "),a("p",[s._v("输出除匹配之外的所有行 "),a("strong",[s._v("-v")]),s._v(" 选项")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_name\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*\\.txt'")]),s._v("\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("--color=auto")]),s._v(" 标记匹配颜色")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_name --color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-E")]),s._v(" 使用正则表达式")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[1-9]+"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[1-9]+"')]),s._v("\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-o")]),s._v(" 只输出文件中匹配到的部分")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" this is a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v(" line. "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -o -E "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[a-z]+\\."')]),s._v("\nline.\n\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" this is a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("test")]),s._v(" line. "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -o "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[a-z]+\\."')]),s._v("\nline.\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-c")]),s._v(" 统计文件或者文本中包含匹配字符串的行数")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" file_name\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*\\.txt'")]),s._v("\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-n")]),s._v(" 输出包含匹配字符串的行数")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" -n file_name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" file_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" -n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多个文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" -n file_1 file_2\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-bo")]),s._v(" 打印样式匹配所位于的字符或字节偏移")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" gun is not unix "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -bo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"not"')]),s._v("\n7:not\n")])])]),a("p",[s._v("一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0")]),s._v(" "),a("blockquote",[a("p",[s._v("搜索多个文件并查找匹配文本在哪些文件中")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -l "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" file1 file2 file3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示哪些文件包含搜索内容")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -bon "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" file1 file2 file3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同时输出行列号")]),s._v("\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-r")]),s._v(" 在多级目录中对文本进行递归搜索")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r -n\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-i")]),s._v(" 忽略大小写")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HELLO"')]),s._v("\nhello\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-e")]),s._v(" 指定多个匹配")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" this is a text line "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"is"')]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"line"')]),s._v(" -o\nis\nline\n")])])]),a("p",[s._v("也可以使用 "),a("code",[s._v("-f")]),s._v(" 选项来匹配多个样式，在样式文件中逐行写出需要匹配的字符。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" patfile\naaa\nbbb\n\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" aaa bbb ccc ddd eee "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -f patfile -o\n")])])]),a("blockquote",[a("p",[a("strong",[s._v("-q")]),s._v(" 静默输出")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -q "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(" filename\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不会输出任何信息，如果命令运行成功返回0，失败则返回非0值。一般用于条件测试。")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("在 grep 搜索结果中包括或者排除指定文件")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#只在目录中所有的.php和.html文件中递归搜索字符"main()"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r --include *."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("php,html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在搜索结果中排除所有README文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r --exclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"README"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在搜索结果中排除filelist文件列表里的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r --exclude-from filelist\n")])])]),a("blockquote",[a("p",[s._v("使用 0 值字节后缀的 grep 与 xargs")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试文件：")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file1\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bbb"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file2\n$ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" file3\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" file* -lZ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -0 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#执行后会删除file1和file3，grep输出用-Z选项来指定以0值字节作为终结符文件名（\\0），xargs -0 读取输入并用0值字节终结符分隔文件名，然后删除匹配文件，-Z通常和-l结合使用。")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("打印出匹配文本之前或者之后的行")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示匹配某个结果之后的3行，使用 -A 选项：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" 10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v(" -A 3\n5\n6\n7\n8\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示匹配某个结果之前的3行，使用 -B 选项：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" 10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v(" -B 3\n2\n3\n4\n5\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#显示匹配某个结果的前三行和后三行，使用 -C 选项：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" 10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5"')]),s._v(" -C 3\n2\n3\n4\n5\n6\n7\n8\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果匹配结果有多个，会用“--”作为各匹配结果之间的分隔符：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a\\nb\\nc\\na\\nb\\nc"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" a -A 1\na\nb\n--\na\nb\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);