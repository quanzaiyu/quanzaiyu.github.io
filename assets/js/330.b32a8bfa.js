(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{538:function(s,a,t){"use strict";t.r(a);var n={props:["slot-key"]},e=t(0),l=Object(e.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("h1",{attrs:{id:"模板分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板分离","aria-hidden":"true"}},[s._v("#")]),s._v(" 模板分离")]),s._v(" "),t("p",[s._v("通常，一个网站会包含公共的头部、脚部、侧边栏等公共布局模块，我们可以通过模板分离的方式将他们分离出去。")]),s._v(" "),t("h2",{attrs:{id:"父模板-模板布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父模板-模板布局","aria-hidden":"true"}},[s._v("#")]),s._v(" 父模板 (模板布局)")]),s._v(" "),t("p",[s._v("在父模板中只允许出现 "),t("code",[s._v("include")]),s._v(" 和 "),t("code",[s._v("block")]),s._v(" 标签。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("include")]),s._v(" 标签包含公共部分")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{include file='文件路径' /}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("以下几种写法均为合法")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{include file='public/header' /}\n{include file='public:header' /}\n{include file='public::header' /}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("block")]),s._v(" 标签进行标识可替换的区块")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{block name='区块名称'}\n代码部分\n{/block}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("其中，如果子模板中申明了对应名称的 block 标记，则 代码部分 会被子模板中的内容所替换。")]),s._v(" "),t("h2",{attrs:{id:"子模板-模板继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子模板-模板继承","aria-hidden":"true"}},[s._v("#")]),s._v(" 子模板 (模板继承)")]),s._v(" "),t("p",[s._v("在子模板中只允许出现 "),t("code",[s._v("extend")]),s._v(" 和 "),t("code",[s._v("block")]),s._v(" 标签。")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("extend")]),s._v(" 标签继承父模板")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{extend name='文件路径' /}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("block")]),s._v(" 标签重写父模板中对应 block 的内容。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("{block name='区块名称'}\n代码部分\n{/block}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例","aria-hidden":"true"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),t("p",[s._v("目录结构")]),s._v(" "),t("imgLink",{attrs:{src:"shortcut/017.jpg/small"}}),s._v(" "),t("p",[s._v("注意，模板布局和继承的定位位置是在当前模块下的 "),t("code",[s._v("view")]),s._v(" 目录下。")]),s._v(" "),t("p",[s._v("其中，"),t("code",[s._v("view/public")]),s._v(" 目录下为公共模块，"),t("code",[s._v("view/template")]),s._v(" 目录下为模板目录。")]),s._v(" "),t("p",[s._v("在模板文件 "),t("code",[s._v("view/template/base.html")]),s._v(" 中，定义一个基础模板 :")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("{include file='public/meta' /}\n\n{block name='seo'}\n网站标题、关键字与描述\n{/block}\n\n{include file='public/header' /}\n\n{include file='public/menu' /}\n\n{block name='content'}\n页面主体内容\n{/block}\n\n{include file='public/footer' /}\n\n{block name='js'}\n用户自定义js脚本\n{/block}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[s._v("在 "),t("code",[s._v("view/index/index.html")]),s._v(" 视图文件中引入 :")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("{extend name='template/base' /}\n\n{block name='seo'}\n"),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("title")]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("{$title|default='页面标题'}"),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("title")]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),t("span",{attrs:{class:"token attr-name"}},[s._v("name")]),t("span",{attrs:{class:"token attr-value"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("keywords"),t("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{attrs:{class:"token attr-name"}},[s._v("content")]),t("span",{attrs:{class:"token attr-value"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{$keywords|default="),t("span",{attrs:{class:"token punctuation"}},[s._v("'")]),s._v("关键字"),t("span",{attrs:{class:"token punctuation"}},[s._v("'")]),s._v("}"),t("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("meta")]),s._v(" "),t("span",{attrs:{class:"token attr-name"}},[s._v("name")]),t("span",{attrs:{class:"token attr-value"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("description"),t("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),t("span",{attrs:{class:"token attr-name"}},[s._v("content")]),t("span",{attrs:{class:"token attr-value"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{attrs:{class:"token punctuation"}},[s._v('"')]),s._v("{$desc|default="),t("span",{attrs:{class:"token punctuation"}},[s._v("'")]),s._v("描述"),t("span",{attrs:{class:"token punctuation"}},[s._v("'")]),s._v("}"),t("span",{attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n{/block}\n\n{block name='content'}\n "),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n   主体内容\n "),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n{/block}\n\n{block name='js'}{/block}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("子模板中使用变量，使用 "),t("code",[s._v("{$variableName}")]),s._v("，可以定义其 "),t("code",[s._v("default")]),s._v(" 属性，设置默认值。")]),s._v(" "),t("p",[s._v("注意，如果在父模板中定义的区块在子模板中未实现，则渲染父模板中的内容。")]),s._v(" "),t("p",[s._v("如果想要引入父模板中对应区块的内容，可以使用 "),t("code",[s._v("{__block__}")]),s._v(" 引入，如")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[s._v("{block name='content'}\n "),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n   主体内容\n "),t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token tag"}},[t("span",{attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n {__block__}\n{/block}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])],1)},[],!1,null,null,null);l.options.__file="Separation.md";a.default=l.exports}}]);