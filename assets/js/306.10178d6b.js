(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{525:function(t,s,a){"use strict";a.r(s);var n={props:["slot-key"],mounted(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=a(0),r=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"数据类型-字典-dict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型-字典-dict","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型 - 字典(dict)")]),t._v(" "),a("p",[t._v("Python内置字典dict的支持，dict全称dictionary，在其他语言中也称为map（JS中称为对象，数据结构中称为哈希表、散列表），使用键-值（key-value）存储，具有极快的查找速度。")]),t._v(" "),a("p",[t._v("序列是以连续的整数为索引，与此不同的是，字典以关键字为索引，关键字可以是任意不可变类型，通常用字符串或数值。在同一个字典之内，关键字必须是互不相同。")]),t._v(" "),a("h2",{attrs:{id:"字典的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典的创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 字典的创建")]),t._v(" "),a("h3",{attrs:{id:"字面量创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字面量创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 字面量创建")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("d "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'Michael'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("95")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Bob'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("75")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Tracy'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("85")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"构造函数创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造函数创建","aria-hidden":"true"}},[t._v("#")]),t._v(" 构造函数创建")]),t._v(" "),a("p",[t._v("传入一个list，内含多个tuple")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("dic "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'sape'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4139")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'guido'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4127")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'jack'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4098")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"获取字典元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取字典元素","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取字典元素")]),t._v(" "),a("p",[t._v("获取指定key对应的value，使用中括号语法。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'Michael'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("95")]),t._v("\n")])])]),a("p",[t._v("也可以使用get方法获取指定的key，如果不存在默认返回 None，可以自定义返回值。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Thomas'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 使用get()方法，如果key不存在，返回None")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Thomas'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 返回自己指定的value")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Bob'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 如果存在，则返回对应的value")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("75")]),t._v("\n")])])]),a("h2",{attrs:{id:"对指定的字典元素重新赋值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对指定的字典元素重新赋值","aria-hidden":"true"}},[t._v("#")]),t._v(" 对指定的字典元素重新赋值")]),t._v(" "),a("p",[t._v("对指定的key重新赋值，使用中括号语法。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'Adam'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("67")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" d"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'Adam'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token number"}},[t._v("67")]),t._v("\n")])])]),a("h2",{attrs:{id:"判断指定的key是否存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断指定的key是否存在","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断指定的key是否存在")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("in")]),t._v(" 操作符即可判断制定的 key 是否存在。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Thomas'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" d "),a("span",{attrs:{class:"token comment"}},[t._v("# 通过in判断key是否存在")]),t._v("\n"),a("span",{attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])]),a("h2",{attrs:{id:"del语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#del语句","aria-hidden":"true"}},[t._v("#")]),t._v(" del语句")]),t._v(" "),a("p",[t._v("del语句也可以删除一个字典key对应的值。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'b'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("del")]),t._v(" a"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" a\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'b'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);r.options.__file="Dict.md";s.default=r.exports}}]);