(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{571:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"类库扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类库扩展","aria-hidden":"true"}},[s._v("#")]),s._v(" 类库扩展")]),s._v(" "),a("p",[s._v("如果你需要在核心之外扩展和使用第三方类库，并且该类库不是通过"),a("code",[s._v("Composer")]),s._v("安装使用，那么可以直接放入应用根目录下面的"),a("code",[s._v("extend")]),s._v("目录下面，该目录是官方建议的第三方扩展类库目录。")]),s._v(" "),a("p",[s._v("类的命名规范遵循"),a("code",[s._v("PSR-2")]),s._v("及"),a("code",[s._v("PSR-4")]),s._v("规范，例如，如果有一个扩展类库的命名空间是 "),a("code",[s._v("first.second.Foo")]),s._v("，类定义如下：")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("second")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("使用第三方类库的时候注意不要和系统的命名空间产生冲突，例如核心的"),a("code",[s._v("think")]),s._v("、"),a("code",[s._v("app")]),s._v("以及"),a("code",[s._v("Composer")]),s._v("类库自身定义的命名空间。")])]),s._v(" "),a("p",[s._v("那么实际的类文件位置应该是：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("extend/first/second/Foo.php\n")])])]),a("p",[s._v("使用"),a("code",[s._v("first.second.Foo")]),s._v("类的时候，直接实例化即可使用，例如：")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("或者先")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[s._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("然后")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("你可以在入口文件中随意修改"),a("code",[s._v("extend")]),s._v("目录的名称，例如：")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'EXTEND_PATH'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'../extension/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[a("code",[s._v("ThinkPHP5")]),s._v("建议所有的扩展类库都使用命名空间定义，如果你的类库没有使用命名空间，则不支持自动加载，必须使用"),a("code",[s._v("Loader::import")]),s._v("方法先导入文件后才能使用。")]),s._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("Loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[s._v("'first.second.Foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);