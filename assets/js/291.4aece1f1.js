(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{541:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#socket","aria-hidden":"true"}},[t._v("#")]),t._v(" Socket")]),t._v(" "),a("p",[t._v('Socket又称"套接字"，应用程序通常通过"套接字"向网络发出请求或者应答网络请求，使主机间或者一台计算机上的进程间可以通讯。')]),t._v(" "),a("p",[t._v("Python 中，可以引入 socket 模块来使用套接字")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n")])])]),a("h2",{attrs:{id:"创建socket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建socket","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建socket")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("family"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" proto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("family: 套接字家族可以使 socket.AF_UNIX或者 socket.AF_INET")]),t._v(" "),a("li",[t._v("type: 套接字类型可以根据是面向连接的还是非连接分为 socket.SOCK_STREAM 或 socket.SOCK_DGRAM")]),t._v(" "),a("li",[t._v("protocol: 一般不填默认为0.")])]),t._v(" "),a("p",[t._v("比如以下代码将创建一个 socket 对象")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 socket 对象")]),t._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("p",[t._v("获取本地主机名")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"服务器端套接字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端套接字","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端套接字")]),t._v(" "),a("h3",{attrs:{id:"绑定端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定端口","aria-hidden":"true"}},[t._v("#")]),t._v(" 绑定端口")]),t._v(" "),a("p",[t._v("使用bind方法，传入本地主机名和端口号")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绑定端口")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"设置最大连接数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置最大连接数","aria-hidden":"true"}},[t._v("#")]),t._v(" 设置最大连接数")]),t._v(" "),a("p",[t._v("使用listen方法，设置最大连接数，超过后排队")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"建立客户端连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立客户端连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 建立客户端连接")]),t._v(" "),a("p",[t._v("被动接受TCP客户端连接,(阻塞式)等待连接的到来，将返回一个元组 (clientsocket,addr)")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"客户端套接字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端套接字","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端套接字")]),t._v(" "),a("h3",{attrs:{id:"连接服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 连接服务")]),t._v(" "),a("p",[t._v("同样的，在客户端创建一个socket，使用connect连接服务器，传入本地主机名和端口号即可连接到服务器。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("还可以使用 "),a("code",[t._v("s.connect_ex()")]),t._v(" 方法连接服务，它是 "),a("code",[t._v("connect()")]),t._v(" 函数的扩展版本,出错时返回出错码,而不是抛出异常。")]),t._v(" "),a("h2",{attrs:{id:"套接字公用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#套接字公用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 套接字公用方法")]),t._v(" "),a("h3",{attrs:{id:"接收数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接收数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 接收数据")]),t._v(" "),a("p",[t._v("使用recv接收数据，指定接收数据的长度")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收小于 1024 字节的数据")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"发送数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发送数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 发送数据")]),t._v(" "),a("p",[t._v("使用send方法发送数据，指定数据编码")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"关闭连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 关闭连接")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("大多数连接都是可靠的TCP连接。创建TCP连接时，主动发起连接的叫客户端，被动响应连接的叫服务器。")]),t._v(" "),a("h2",{attrs:{id:"使用tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用tcp连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用TCP连接")]),t._v(" "),a("p",[t._v("创建Socket时，"),a("code",[t._v("SOCK_STREAM")]),t._v("指定了这个Socket的类型是TCP。")]),t._v(" "),a("h3",{attrs:{id:"创建一个本地连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个本地连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个本地连接")]),t._v(" "),a("h4",{attrs:{id:"服务器端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端")]),t._v(" "),a("p",[t._v("server.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件名：server.py")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入 socket、sys 模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 socket 对象")]),t._v("\nserversocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取本地主机名")]),t._v("\nhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绑定端口")]),t._v("\nserversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置最大连接数，超过后排队")]),t._v("\nserversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立客户端连接")]),t._v("\n    clientsocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      \n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"连接地址: %s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'欢迎访问小昱的python服务！'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\r\\n"')]),t._v("\n    clientsocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    clientsocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),a("p",[t._v("client.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件名：client.py")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入 socket、sys 模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 socket 对象")]),t._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取本地主机名")]),t._v("\nhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置端口好")]),t._v("\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接服务，指定主机和端口")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收小于 1024 字节的数据")]),t._v("\nmsg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("使用的时候，先运行服务器端")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python server.py\n")])])]),a("p",[t._v("再启动客户端")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python client.py\n")])])]),a("p",[t._v("在服务器端会看到输出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("连接地址: ('192.168.1.23', 52125)\n")])])]),a("p",[t._v("客户端将会看到输出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("欢迎访问小昱的python服务！\n")])])]),a("h3",{attrs:{id:"创建一个远程连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个远程连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个远程连接")]),t._v(" "),a("p",[t._v("client.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件名：client.py")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 socket 对象")]),t._v("\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_STREAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'www.sina.com.cn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发送数据:")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'GET / HTTP/1.1\\r\\nHost: www.sina.com.cn\\r\\nConnection: close\\r\\n\\r\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收数据:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("buffer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每次最多接收1k字节:")]),t._v("\n    d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("buffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("buffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nheader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'\\r\\n\\r\\n'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把接收的数据写入文件:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sina.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭连接:")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("运行 "),a("code",[t._v("client.py")]),t._v(" 可以看到控制台输出HTTP request信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP/1.1 200 OK\nServer: nginx\nDate: Thu, 04 Jan 2018 03:23:15 GMT\nContent-Type: text/html\nContent-Length: 605677\nConnection: close\nLast-Modified: Thu, 04 Jan 2018 03:21:57 GMT\nVary: Accept-Encoding\nExpires: Thu, 04 Jan 2018 03:24:15 GMT\nCache-Control: max-age=60\nX-Powered-By: shci_v1.03\nAge: 0\nVia: http/1.1 ctc.ningbo.ha2ts4.97 (ApacheTrafficServer/6.2.1 [cMsSfW]), http/1.1 ctc.guangxi.ha2ts4.28 (ApacheTrafficServer/6.2.1 [cRs f ])\nX-Via-Edge: 1515036195742e4fcacde49ee01747bad6432\nX-Cache: HIT.28\nX-Via-CDN: f=edge,s=ctc.guangxi.ha2ts4.29.nb.sinaedge.com,c=222.172.252.228;f=Edge,s=ctc.guangxi.ha2ts4.28,c=116.1.238.29\n")])])]),a("p",[t._v("获取到的数据保存到 "),a("code",[t._v("sina.html")])]),t._v(" "),a("p",[t._v("TCP是建立可靠连接，并且通信双方都可以以流的形式发送数据。相对TCP，UDP则是面向无连接的协议。")]),t._v(" "),a("p",[t._v("使用UDP协议时，不需要建立连接，只需要知道对方的IP地址和端口号，就可以直接发数据包。但是，能不能到达就不知道了。")]),t._v(" "),a("p",[t._v("虽然用UDP传输数据不可靠，但它的优点是和TCP比，速度快，对于不要求可靠到达的数据，就可以使用UDP协议。")]),t._v(" "),a("h2",{attrs:{id:"使用udp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用udp连接","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用UDP连接")]),t._v(" "),a("p",[t._v("服务器端使用UDP时，"),a("code",[t._v("SOCK_DGRAM")]),t._v("指定了这个Socket的类型是UDP。绑定端口和TCP一样，但是不需要调用listen()方法，而是直接接收来自任何客户端的数据。")]),t._v(" "),a("p",[t._v("客户端使用UDP时，首先仍然创建基于UDP的Socket，然后，不需要调用connect()，直接通过sendto()给服务器发数据")]),t._v(" "),a("h3",{attrs:{id:"创建一个本地连接-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个本地连接-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建一个本地连接")]),t._v(" "),a("h4",{attrs:{id:"服务器端-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器端-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务器端")]),t._v(" "),a("p",[t._v("server.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件名：server.py")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入 socket、sys 模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建 socket 对象")]),t._v("\nserversocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_DGRAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取本地主机名")]),t._v("\nhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 绑定端口")]),t._v("\nserversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bind UDP on 9999...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收数据:")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recvfrom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Received from %s:%s.'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    serversocket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Hello, %s!'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"客户端-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),a("p",[t._v("client.py")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件名：server.py")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导入 socket、sys 模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AF_INET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SOCK_DGRAM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Michael'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Tracy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'Sarah'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发送数据:")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gethostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9999")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接收数据:")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("使用的时候，先运行服务器端")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python server.py\n")])])]),a("p",[t._v("再启动客户端")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("python client.py\n")])])]),a("p",[t._v("在服务器端会看到输出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Bind UDP on 9999...\nReceived from 192.168.1.23:50903.\nReceived from 192.168.1.23:50903.\nReceived from 192.168.1.23:50903.\n")])])]),a("p",[t._v("客户端将会看到输出")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Hello, Michael!\nHello, Tracy!\nHello, Sarah!\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);