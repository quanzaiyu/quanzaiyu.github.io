(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{554:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"io-序列化-pickle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-序列化-pickle","aria-hidden":"true"}},[t._v("#")]),t._v(" IO - 序列化(pickle)")]),t._v(" "),a("p",[t._v("我们把变量从内存中变成可存储或传输的过程称之为序列化，在Python中叫pickling，在其他语言中也被称之为serialization，marshalling，flattening等等，都是一个意思。")]),t._v(" "),a("p",[t._v("序列化之后，就可以把序列化后的内容写入磁盘，或者通过网络传输到别的机器上。")]),t._v(" "),a("p",[t._v("反过来，把变量内容从序列化的对象重新读到内存里称之为反序列化，即unpickling。")]),t._v(" "),a("h2",{attrs:{id:"序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化","aria-hidden":"true"}},[t._v("#")]),t._v(" 序列化")]),t._v(" "),a("p",[a("code",[t._v("pickle.dumps()")]),t._v("方法把任意对象序列化成一个"),a("code",[t._v("bytes")]),t._v("，然后，就可以把这个"),a("code",[t._v("bytes")]),t._v("写入文件了。")]),t._v(" "),a("p",[t._v("格式："),a("code",[t._v("pickle.dumps(obj, protocol=None)")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pickle\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("88")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"存入文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存入文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 存入文件")]),t._v(" "),a("p",[a("code",[t._v("pickle.dump()")]),t._v("方法可以直接把对象序列化后写入一个file-like Object。")]),t._v(" "),a("p",[t._v("格式: "),a("code",[t._v("pickle.dump(obj, file, protocol=None)")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pickle\nd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" score"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("88")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dump.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dump.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# b'\\x80\\x03}q\\x00(X\\x04\\x00\\x00\\x00nameq\\x01X\\x03\\x00\\x00\\x00Bobq\\x02X\\x03\\x00\\x00\\x00ageq\\x03K\\x14X\\x05\\x00\\x00\\x00scoreq\\x04KXu.'")]),t._v("\n")])])]),a("h2",{attrs:{id:"反序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反序列化","aria-hidden":"true"}},[t._v("#")]),t._v(" 反序列化")]),t._v(" "),a("p",[a("code",[t._v("pickle.load()")]),t._v("方法反序列化出对象，也可以直接用"),a("code",[t._v("pickle.load()")]),t._v("方法从一个"),a("code",[t._v("bytes-like Object")]),t._v("中直接反序列化出对象。")]),t._v(" "),a("p",[t._v("格式："),a("code",[t._v("pickle.load(file)")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dump.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pickle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# {'name': 'Bob', 'age': 20, 'score': 88}")]),t._v("\n")])])]),a("p",[t._v("如果打开的文件不是 "),a("code",[t._v("bytes-like Object")]),t._v(" 则会报错")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TypeError")]),t._v(" "),a("p",[t._v("a bytes-like object is required, not 'str'")])])])},[],!1,null,null,null);s.default=e.exports}}]);