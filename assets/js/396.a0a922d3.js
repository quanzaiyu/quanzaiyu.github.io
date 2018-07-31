(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{1004:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"grep"}},[s._v("grep")]),n("p",[n("strong",[s._v("grep")]),s._v(" （global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。")]),n("h2",{attrs:{id:"选项"}},[s._v("选项")]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-i 忽略字符大小写的差别。\n-n 在显示符合范本样式的那一列之前，标示出该列的编号。\n-v 反转查找。\n-o 只输出文件中匹配到的部分。\n-b 在显示符合范本样式的那一行之外，并显示该行之前的内容。\n\n-e<范本样式> 指定字符串作为查找文件内容的范本样式。\n-E 将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。\n\n-c 计算符合范本样式的列数。\n-C<显示列数>或-<显示列数>  除了显示符合范本样式的那一列之外，并显示该列之前后的内容。\n\n-l 列出文件内容符合指定的范本样式的文件名称。\n-L 列出文件内容不符合指定的范本样式的文件名称。\n\n-R/-r 此参数的效果和指定“-d recurse”参数相同。\n\n-q 不显示任何信息。\n-s 不显示错误信息。\n\n-w 只显示全字符合的列。\n-x 只显示全列符合的列。\n\n-h 在显示符合范本样式的那一列之前，不标示该列所属的文件名称。\n-H 在显示符合范本样式的那一列之前，标示该列的文件名称。\n\n-a 不要忽略二进制数据。\n-A<显示列数> 除了显示符合范本样式的那一行之外，并显示该行之后的内容。\n-d<进行动作> 当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。\n-f<范本文件> 指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。\n-F 将范本样式视为固定字符串的列表。\n-G 将范本样式视为普通的表示法来使用。\n-y 此参数效果跟“-i”相同。\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("h2",{attrs:{id:"常见用法"}},[s._v("常见用法")]),n("p",[s._v("在文件中搜索一个单词，命令会返回一个包含 "),n("strong",[s._v("match_pattern")]),s._v(" 的文本行：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" match_pattern file_name\n"),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_name\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("在多个文件中查找：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_1 file_2 file_3 "),n("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("输出除匹配之外的所有行 "),n("strong",[s._v("-v")]),s._v(" 选项：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),n("span",{attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_name\n"),n("span",{attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -v "),n("span",{attrs:{class:"token string"}},[s._v("'*\\.txt'")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("标记匹配颜色 "),n("strong",[s._v("--color=auto")]),s._v(" 选项：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"match_pattern"')]),s._v(" file_name --color"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("auto\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("使用正则表达式 "),n("strong",[s._v("-E")]),s._v(" 选项：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -E "),n("span",{attrs:{class:"token string"}},[s._v('"[1-9]+"')]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"[1-9]+"')]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("只输出文件中匹配到的部分 "),n("strong",[s._v("-o")]),s._v(" 选项：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" this is a "),n("span",{attrs:{class:"token function"}},[s._v("test")]),s._v(" line. "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -o -E "),n("span",{attrs:{class:"token string"}},[s._v('"[a-z]+\\."')]),s._v("\nline.\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" this is a "),n("span",{attrs:{class:"token function"}},[s._v("test")]),s._v(" line. "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -o "),n("span",{attrs:{class:"token string"}},[s._v('"[a-z]+\\."')]),s._v("\nline.\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("统计文件或者文本中包含匹配字符串的行数 "),n("strong",[s._v("-c")]),s._v(" 选项：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -c "),n("span",{attrs:{class:"token string"}},[s._v('"text"')]),s._v(" file_name\n"),n("span",{attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("egrep")]),s._v(" -c "),n("span",{attrs:{class:"token string"}},[s._v("'*\\.txt'")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("输出包含匹配字符串的行数 "),n("strong",[s._v("-n")]),s._v(" 选项：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"text"')]),s._v(" -n file_name\n"),n("span",{attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" file_name "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"text"')]),s._v(" -n\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("# 多个文件")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"text"')]),s._v(" -n file_1 file_2\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("打印样式匹配所位于的字符或字节偏移：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" gun is not unix "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -b -o "),n("span",{attrs:{class:"token string"}},[s._v('"not"')]),s._v("\n7:not\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#一行中字符串的字符便宜是从该行的第一个字符开始计算，起始值为0。选项 -b -o 一般总是配合使用。")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("搜索多个文件并查找匹配文本在哪些文件中：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -l "),n("span",{attrs:{class:"token string"}},[s._v('"text"')]),s._v(" file1 file2 file3"),n("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"递归搜索文件"}},[s._v("递归搜索文件")]),n("p",[s._v("在多级目录中对文本进行递归搜索：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"text"')]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r -n\n"),n("span",{attrs:{class:"token comment"}},[s._v("# .表示当前目录。")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("忽略匹配样式中的字符大小写：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"hello world"')]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),n("span",{attrs:{class:"token string"}},[s._v('"HELLO"')]),s._v("\nhello\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("选项 "),n("strong",[s._v("-e")]),s._v(" 制动多个匹配样式：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" this is a text line "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -e "),n("span",{attrs:{class:"token string"}},[s._v('"is"')]),s._v(" -e "),n("span",{attrs:{class:"token string"}},[s._v('"line"')]),s._v(" -o\nis\nline\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#也可以使用-f选项来匹配多个样式，在样式文件中逐行写出需要匹配的字符。")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("cat")]),s._v(" patfile\naaa\nbbb\n\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" aaa bbb ccc ddd eee "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -f patfile -o\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("在 grep 搜索结果中包括或者排除指定文件：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v('#只在目录中所有的.php和.html文件中递归搜索字符"main()"')]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r --include *."),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("php,html"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#在搜索结果中排除所有README文件")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r --exclude "),n("span",{attrs:{class:"token string"}},[s._v('"README"')]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#在搜索结果中排除filelist文件列表里的文件")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v(" -r --exclude-from filelist\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("使用 0 值字节后缀的 grep 与 xargs ：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("#测试文件：")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" file1\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"bbb"')]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" file2\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" file3\n\n"),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"aaa"')]),s._v(" file* -lZ "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -0 "),n("span",{attrs:{class:"token function"}},[s._v("rm")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#执行后会删除file1和file3，grep输出用-Z选项来指定以0值字节作为终结符文件名（\\0），xargs -0 读取输入并用0值字节终结符分隔文件名，然后删除匹配文件，-Z通常和-l结合使用。")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("grep 静默输出：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" -q "),n("span",{attrs:{class:"token string"}},[s._v('"test"')]),s._v(" filename\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#不会输出任何信息，如果命令运行成功返回0，失败则返回非0值。一般用于条件测试。")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("打印出匹配文本之前或者之后的行：")]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("#显示匹配某个结果之后的3行，使用 -A 选项：")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("seq")]),s._v(" 10 "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"5"')]),s._v(" -A 3\n5\n6\n7\n8\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#显示匹配某个结果之前的3行，使用 -B 选项：")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("seq")]),s._v(" 10 "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"5"')]),s._v(" -B 3\n2\n3\n4\n5\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#显示匹配某个结果的前三行和后三行，使用 -C 选项：")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("seq")]),s._v(" 10 "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{attrs:{class:"token string"}},[s._v('"5"')]),s._v(" -C 3\n2\n3\n4\n5\n6\n7\n8\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("#如果匹配结果有多个，会用“--”作为各匹配结果之间的分隔符：")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" -e "),n("span",{attrs:{class:"token string"}},[s._v('"a\\nb\\nc\\na\\nb\\nc"')]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" a -A 1\na\nb\n--\na\nb\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}],!1,null,null,null);a.default=e.exports}}]);