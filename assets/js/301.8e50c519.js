(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{553:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"io-文件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-文件操作","aria-hidden":"true"}},[t._v("#")]),t._v(" IO - 文件操作")]),t._v(" "),a("h2",{attrs:{id:"读文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 读文件")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./info.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以只读的方式打开一个文件")]),t._v("\nt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 读取文件内容，保存到一个str对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果文件打开成功，将打印文件内容")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭文件")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("open()")]),t._v(" 传入文件名和标示符，可以打开一个文件对象。")]),t._v(" "),a("li",[a("code",[t._v("read()")]),t._v(" 可以一次读取文件的全部内容，Python把内容读到内存，用一个"),a("code",[t._v("str")]),t._v("对象表示。")]),t._v(" "),a("li",[a("code",[t._v("close()")]),t._v(" 关闭文件，文件使用完毕后必须关闭，因为文件对象会占用操作系统的资源，并且操作系统同一时间能打开的文件数量也是有限的。")])]),t._v(" "),a("h2",{attrs:{id:"写文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 写文件")]),t._v(" "),a("p",[t._v("写文件和读文件是一样的，唯一区别是调用"),a("code",[t._v("open()")]),t._v("函数时，传入标识符"),a("code",[t._v("'w'")]),t._v("或者"),a("code",[t._v("'wb'")]),t._v("表示写文本文件或写二进制文件：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./info.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'w'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("你可以反复调用"),a("code",[t._v("write()")]),t._v("来写入文件，但是务必要调用"),a("code",[t._v("f.close()")]),t._v("来关闭文件。当我们写文件时，操作系统往往不会立刻把数据写入磁盘，而是放到内存缓存起来，空闲的时候再慢慢写入。只有调用"),a("code",[t._v("close()")]),t._v("方法时，操作系统才保证把没有写入的数据全部写入磁盘。忘记调用"),a("code",[t._v("close()")]),t._v("的后果是数据可能只写了一部分到磁盘，剩下的丢失了。所以，还是用"),a("code",[t._v("with")]),t._v("语句来得保险。")]),t._v(" "),a("p",[t._v("要写入特定编码的文本文件，请给"),a("code",[t._v("open()")]),t._v("函数传入"),a("code",[t._v("encoding")]),t._v("参数，将字符串自动转换成指定编码。")]),t._v(" "),a("h2",{attrs:{id:"读写模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 读写模式")]),t._v(" "),a("p",[t._v("读写模式的类型有：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("rU或Ua 以读方式打开, 同时提供通用换行符支持 (PEP 278)\nw      以写方式打开，\na      以追加模式打开 (从 EOF 开始, 必要时创建新文件)\nr+     以读写模式打开\nw+     以读写模式打开 (参见 w )\na+     以读写模式打开 (参见 a )\nrb     以二进制读模式打开\nwb     以二进制写模式打开 (参见 w )\nab     以二进制追加模式打开 (参见 a )\nrb+    以二进制读写模式打开 (参见 r+ )\nwb+    以二进制读写模式打开 (参见 w+ )\nab+    以二进制读写模式打开 (参见 a+ )\n")])])]),a("h2",{attrs:{id:"filenotfounderror"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filenotfounderror","aria-hidden":"true"}},[t._v("#")]),t._v(" FileNotFoundError")]),t._v(" "),a("p",[t._v("如果文件不存在，将抛出以下错误信息:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("FileNotFoundError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Errno "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" No such "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/info.log'")]),t._v("\n")])])]),a("p",[t._v("由于文件读写时都有可能产生"),a("code",[t._v("IOError")]),t._v("，一旦出错，后面的"),a("code",[t._v("f.close()")]),t._v("就不会调用。所以，为了保证无论是否出错都能正确地关闭文件，我们可以使用"),a("code",[t._v("try ... finally")]),t._v("来实现：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./info.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"with-as"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#with-as","aria-hidden":"true"}},[t._v("#")]),t._v(" with...as")]),t._v(" "),a("p",[t._v("但是如果每次都这么写实在太繁琐，所以，Python引入了"),a("code",[t._v("with")]),t._v("语句来自动帮我们调用"),a("code",[t._v("close()")]),t._v("方法：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./info.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这和前面的"),a("code",[t._v("try ... finally")]),t._v("是一样的，但是代码更佳简洁，并且不必调用"),a("code",[t._v("f.close()")]),t._v("方法。")]),t._v(" "),a("p",[t._v("调用"),a("code",[t._v("read()")]),t._v("会一次性读取文件的全部内容，如果文件有10G，内存就爆了，所以，要保险起见，可以反复调用"),a("code",[t._v("read(size)")]),t._v("方法，每次最多读取size个字节的内容。另外，调用"),a("code",[t._v("readline()")]),t._v("可以每次读取一行内容，调用"),a("code",[t._v("readlines()")]),t._v("一次读取所有内容并按行返回"),a("code",[t._v("list")]),t._v("。因此，要根据需要决定怎么调用。")]),t._v(" "),a("p",[t._v("如果文件很小，"),a("code",[t._v("read()")]),t._v("一次性读取最方便；如果不能确定文件大小，反复调用"),a("code",[t._v("read(size)")]),t._v("比较保险；如果是配置文件，调用"),a("code",[t._v("readlines()")]),t._v("最方便：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" line "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readlines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("line"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把末尾的'\\n'删掉")]),t._v("\n")])])]),a("ul",[a("li",[a("code",[t._v("read(size)")]),t._v(" 方法，不带"),a("code",[t._v("size")]),t._v("读取整个文件内容，带"),a("code",[t._v("size")]),t._v("读取指定字节的内容。")]),t._v(" "),a("li",[a("code",[t._v("readlines()")]),t._v(" 方法，一次性读取文件所有内容并按照行号返回为"),a("code",[t._v("list")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"file-like-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-like-object","aria-hidden":"true"}},[t._v("#")]),t._v(" file-like Object")]),t._v(" "),a("p",[t._v("像"),a("code",[t._v("open()")]),t._v("函数返回的这种有个"),a("code",[t._v("read()")]),t._v("方法的对象，在Python中统称为file-like Object。除了file外，还可以是内存的字节流，网络流，自定义流等等。file-like Object不要求从特定类继承，只要写个"),a("code",[t._v("read()")]),t._v("方法就行。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("StringIO")]),t._v("就是在内存中创建的file-like Object，常用作临时缓冲。")])]),t._v(" "),a("h2",{attrs:{id:"二进制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 二进制文件")]),t._v(" "),a("p",[t._v("前面默认都是读取文本文件，并且是UTF-8编码的文本文件。要读取二进制文件，比如图片、视频等等，用"),a("code",[t._v("'rb'")]),t._v("模式打开文件即可：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./100.jpg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("其中"),a("code",[t._v("b")]),t._v("表示以二进制文件形式打开，将输出类似以下的十六进制表示的字节内容:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("b'\\xff\\xd8\\xff\\xe0\\x00\\x10JFIF\\x00\\x01\\x01\\x01\\x00`\\x00`\\x00\\x00\\xff\\xe1\\x00\\x08Exif\\x00\\x00\\xff\\xdb\\x00C\\x00\\x08\\x06\\x06\\x07\\x06\\x05\\x08\\x07\\x07\\x07\\t\\t\\x08\\n\\x0c\\x14\\r\\x0c\\x0b\\x0b\\x0c\\x19\\x12\\x13\\x0f\\x14\\x1d\\x1a\\x1f\\x1e\\x1d\\x1a\\x1c\\x1c $.\\' \",#\\x1c\\x1c(7),\n")])])]),a("h2",{attrs:{id:"编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码","aria-hidden":"true"}},[t._v("#")]),t._v(" 编码")]),t._v(" "),a("p",[t._v("只需要在第三个参数加上"),a("code",[t._v("encoding='xxx'")]),t._v(" 即可")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./info.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gbk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("遇到有些编码不规范的文件，你可能会遇到"),a("code",[t._v("UnicodeDecodeError")]),t._v("，因为在文本文件中可能夹杂了一些非法编码的字符。遇到这种情况，"),a("code",[t._v("open()")]),t._v("函数还接收一个"),a("code",[t._v("errors")]),t._v("参数，表示如果遇到编码错误后如何处理。最简单的方式是直接忽略：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/Users/michael/gbk.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'r'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gbk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ignore'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);