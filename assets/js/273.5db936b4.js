(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{609:function(t,s,n){"use strict";n.r(s);var a={props:["slot-key"]},e=n(0),o=Object(e.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器","aria-hidden":"true"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),n("p",[t._v("在 tp5.1，引入了容器类，核心文件位于 "),n("code",[t._v("thinkphp/library/think/Container.php")]),t._v(" 。")]),t._v(" "),n("h2",{attrs:{id:"绑定一个类到容器中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定一个类到容器中","aria-hidden":"true"}},[t._v("#")]),t._v(" 绑定一个类到容器中")]),t._v(" "),n("p",[t._v("例子同依赖注入中的Demo类，在 index 控制器中加入方法 :")]),t._v(" "),n("p",[n("code",[t._v("application/index/Index.php")])]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bindClass "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \\"),n("span",{attrs:{class:"token package"}},[t._v("think"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Container")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("set")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'temp'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\app\\common\\Demo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token variable"}},[t._v("$temp")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),n("span",{attrs:{class:"token package"}},[t._v("think"),n("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Container")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),n("span",{attrs:{class:"token function"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'temp'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'xiaoyu'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$temp")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("使用 "),n("code",[t._v("\\think\\Container::set")]),t._v(" 可以绑定一个类到容器中，使用 "),n("code",[t._v("\\think\\Container::get")]),t._v(" 可以获取容器中类。")]),t._v(" "),n("p",[t._v("也可使用助手函数 :")]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bindClass "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("bind")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'temp'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'\\app\\common\\Demo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token variable"}},[t._v("$temp")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("app")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'temp'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'xiaoyu'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$temp")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("getName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("其中 "),n("code",[t._v("bind")]),t._v(" 对应 "),n("code",[t._v("\\think\\Container::set")]),t._v("，"),n("code",[t._v("app")]),t._v(" 对应 "),n("code",[t._v("\\think\\Container::get")]),t._v("。")]),t._v(" "),n("p",[t._v("输入 "),n("code",[t._v("http://www.my-tp5.com/index.php/index/index/bindClass")]),t._v(" 即可看到效果。")]),t._v(" "),n("h2",{attrs:{id:"绑定一个匿名方法到容器中"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#绑定一个匿名方法到容器中","aria-hidden":"true"}},[t._v("#")]),t._v(" 绑定一个匿名方法到容器中")]),t._v(" "),n("p",[t._v("例子同依赖注入中的Demo类，在 index 控制器中加入方法 :")]),t._v(" "),n("p",[n("code",[t._v("application/index/Index.php")])]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bindClosure "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("bind")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'temp'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$domin")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Domin is'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$domin")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("app")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'temp'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'domin'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'xiaoyulive.top'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("输入 "),n("code",[t._v("http://www.my-tp5.com/index.php/index/index/bindClosure")]),t._v(" 即可看到效果。")])])},[],!1,null,null,null);o.options.__file="Container.md";s.default=o.exports}}]);