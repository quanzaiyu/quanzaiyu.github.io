(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{523:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"io-内存操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#io-内存操作","aria-hidden":"true"}},[t._v("#")]),t._v(" IO - 内存操作")]),t._v(" "),a("p",[t._v("StringIO和BytesIO是在内存中操作str和bytes的方法，使得和读写文件具有一致的接口。")]),t._v(" "),a("h2",{attrs:{id:"stringio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stringio","aria-hidden":"true"}},[t._v("#")]),t._v(" StringIO")]),t._v(" "),a("p",[t._v("StringIO就是在内存中读写str。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" io "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" StringIO\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StringIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getvalue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hello world!")]),t._v("\n")])])]),a("p",[a("code",[t._v("getvalue()")]),t._v("方法用于获得写入后的str。")]),t._v(" "),a("p",[t._v("创建的时候初始化StringIO，然后可以像文件一样进行操作 :")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" io "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" StringIO\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StringIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello!\\nHi!\\nGoodbye!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"bytesio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bytesio","aria-hidden":"true"}},[t._v("#")]),t._v(" BytesIO")]),t._v(" "),a("p",[t._v("BytesIO就是在内存中读写二进制数据。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" io "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BytesIO\nf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BytesIO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'中文'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getvalue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("输出: "),a("code",[t._v("b'\\xe4\\xb8\\xad\\xe6\\x96\\x87'")])])])},[],!1,null,null,null);s.default=r.exports}}]);