(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{834:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[a("a",{attrs:{href:"https://baike.baidu.com/item/blob/543419?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("BLOB (binary large object)"),a("OutboundLink")],1),t._v("，二进制大对象，是一个可以存储二进制文件的容器。在计算机中，BLOB常常是数据库中用来存储二进制文件的字段类型[^1]。")]),t._m(6),a("p",[a("a",{attrs:{href:"https://baike.baidu.com/item/base64/8545775?fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Base64"),a("OutboundLink")],1),t._v(" 是网络上最常见的用于传输8Bit字节码的编码方式之一，Base64就是一种基于64个可打印字符来表示二进制数据的方法。Base64编码是从二进制到字符的过程，可用于在HTTP环境下传递较长的标识信息。可查看RFC2045～RFC2049，上面有MIME的详细规范[^2]。")]),t._m(7),t._m(8),t._m(9),a("p",[t._v("调用:")]),t._m(10),t._m(11),t._m(12),a("p",[t._v("File对象转换为dataURL与Blob一致。")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),a("p",[t._v("先构造Image对象，src为dataURL，图片onload之后绘制到canvas")]),t._m(18),t._m(19),t._m(20),a("p",[t._v("使用的话很简单，将插件注册一下就能直接使用:")]),t._m(21),a("p",[t._v("组件中使用(支持mp3, wav, ogg, amr):")]),t._m(22),t._m(23),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/lusonglin121/article/details/9333095",target:"_blank",rel:"noopener noreferrer"}},[t._v("AMRNB 与 AMRWB 语音编码标准技术的对比研究"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"http://blog.csdn.net/oscar999/article/details/36373183",target:"_blank",rel:"noopener noreferrer"}},[t._v("[JS进阶] JS 之Blob 对象类型"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"http://blog.csdn.net/cuixiping/article/details/45932793",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataURL与File,Blob,canvas对象之间的互相转换的Javascript"),a("OutboundLink")],1),t._v(" (精)")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"深入理解-blob、base64-及其转化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-blob、base64-及其转化","aria-hidden":"true"}},[this._v("$")]),this._v(" 深入理解 Blob、Base64 及其转化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("$")]),this._v(" 前言")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("之所以会写这篇文章，是由于前段时间研究JS的语音播放，当时想着使用H5自带的"),a("code",[t._v("audio")]),t._v("进行处理，然而上传的语音文件却是"),a("code",[t._v(".amr")]),t._v("格式的(个人不太熟悉这个格式，感觉很罕见)，使用"),a("code",[t._v("audio")]),t._v("只能处理"),a("code",[t._v("mp3")]),t._v("、"),a("code",[t._v("wav")]),t._v("、"),a("code",[t._v("ogg")]),t._v("三种格式，"),a("code",[t._v("amr")]),t._v("显然对H5并不友好。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("处理这个格式花费了大量功夫，想了很多办法，比如前端上传前类型转换、后端上传后类型转换、寻找可以播放"),a("code",[t._v("amr")]),t._v(" 格式的插件等等，折腾了好久。由于是用"),a("code",[t._v("Vue")]),t._v("进行开发的，之前想用"),a("code",[t._v("MUI")]),t._v("集成的"),a("code",[t._v("H5+")]),t._v("进行播放也不能实现(必须打包成APP才行，需要HBuilder的基座支持)。当时找了一个名叫"),a("code",[t._v("amrnb.js")]),t._v("(amr牛逼啊，哈哈，开玩笑的，全称为: Adaptive Multi Rate-Narrow Band Speech Codec，用C++进行开发的)的插件，的确可以做到播放和转化"),a("code",[t._v("amr")]),t._v("格式，但是文件太大，光是压缩后的文件都接近500k，果断放弃了。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("最后想到了将多媒体文件转化为"),a("code",[t._v("Base64")]),t._v("进行使用，但如何将服务器中的文件转化为"),a("code",[t._v("Base64")]),t._v("又成了问题，"),a("code",[t._v("FileReader")]),t._v("可以实现转化，但是JS浏览器端并不能对本地文件系统(或者远程URI进行操作)，只能从"),a("code",[t._v("input[type=file]")]),t._v("的输入框读取，"),a("code",[t._v("node")]),t._v("虽然可以对文件系统进行操作，但却不能实现在浏览器的转化。郁闷了好几天，后来想到直接通过"),a("code",[t._v("ajax")]),t._v("向服务器请求多媒体文件不就可以了，查了些资料就开始操作了。为什么会提到"),a("code",[t._v("Blob")]),t._v("呢?是由于请求下来的格式可以指定为此格式，进行操作比较容易。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是blob"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是blob","aria-hidden":"true"}},[this._v("$")]),this._v(" 什么是Blob")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是base64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是base64","aria-hidden":"true"}},[this._v("$")]),this._v(" 什么是Base64")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"数据获取与格式转化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据获取与格式转化","aria-hidden":"true"}},[this._v("$")]),this._v(" 数据获取与格式转化")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从服务器端获取blob格式的资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从服务器端获取blob格式的资源","aria-hidden":"true"}},[this._v("$")]),this._v(" 从服务器端获取Blob格式的资源")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("fetchBlob")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("open")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseType "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'blob'")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Failed to fetch '")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" url"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  xhr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("send")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("fetchBlob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'http://localhost/test.amr'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 回调处理")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"blob对象转化为base64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blob对象转化为base64","aria-hidden":"true"}},[this._v("$")]),this._v(" Blob对象转化为Base64")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("readBlobAsDataURL")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" reader "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FileReader")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  reader"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  reader"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("readAsDataURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blob"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"base64转换为blob对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base64转换为blob对象","aria-hidden":"true"}},[this._v("$")]),this._v(" base64转换为Blob对象")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("dataURLtoBlob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataurl"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataurl"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("','")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mime "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/:(.*?);/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bstr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("atob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" u8arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Uint8Array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("while")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        u8arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" bstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("u8arr"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mime"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//test:")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blob "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("dataURLtoBlob")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'data:text/plain;base64,YWFhYWFhYQ=='")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"canvas转换为base64"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas转换为base64","aria-hidden":"true"}},[this._v("$")]),this._v(" canvas转换为base64")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dataurl "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toDataURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'image/png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dataurl2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toDataURL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'image/jpeg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.8")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"base64图片数据绘制到canvas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base64图片数据绘制到canvas","aria-hidden":"true"}},[this._v("$")]),this._v(" base64图片数据绘制到canvas")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    canvas"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("drawImage")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataurl"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"amr的处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amr的处理","aria-hidden":"true"}},[this._v("$")]),this._v(" AMR的处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("至于如何播放amr格式，我做了一个Vue的插件，已上传到个人OSS，有兴趣的童鞋可以自行下载研究。"),s("a",{attrs:{href:"@/res/pVioce.zip"}},[this._v("下载地址")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pVioce "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'./pVioce'")]),t._v("\nVue"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("component")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'pVioce'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pVioce"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pVioce")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://localhost/test.amr"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pVioce")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pVioce")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://localhost/test.mp3"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pVioce")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("$")]),this._v(" 参考资料")])}],!1,null,null,null);s.default=e.exports}}]);