(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{344:function(t,s,a){"use strict";a.r(s);var n=a(1),p=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装和使用")]),t._v(" "),a("h2",{attrs:{id:"使用架手架创建-angular-项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用架手架创建-angular-项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用架手架创建 Angular 项目")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @angular/cli\n$ ng new angular-test\n$ ng serve --open\n")])])]),a("p",[t._v("使用 @angular/cli 创建的项目使用 TypeScript 撰写")]),t._v(" "),a("p",[t._v("项目默认运行在 "),a("code",[t._v("http://localhost:4200/")])]),t._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("src/\n app/\n     app.component.css\n     app.component.html\n     app.component.spec.ts\n     app.component.ts\n     app.module.ts\n     assets/...\n ...\n")])])]),a("ul",[a("li",[a("strong",[t._v("app/app.component.ts")]),t._v("\t定义应用程序根组件（名叫 AppComponent）的逻辑代码。当你往应用中添加组件和服务时，根组件所关联的视图会作为 view hierarchy 视图树的根。")]),t._v(" "),a("li",[a("strong",[t._v("app/app.component.html")]),t._v("\t定义与根组件 AppComponent 关联的模板。")]),t._v(" "),a("li",[a("strong",[t._v("app/app.component.css")]),t._v("\t定义根组件 AppComponent 的 CSS 样式表。")]),t._v(" "),a("li",[a("strong",[t._v("app/app.component.spec.ts")]),t._v("\t定义根组件 AppComponent 的单元测试文件。")]),t._v(" "),a("li",[a("strong",[t._v("app/app.module.ts")]),t._v("\t定义根模块（名叫 AppModule），它告诉 Angular 如何组装应用。其初始声明中只有 AppComponent。当你往应用中添加更多组件时，它们必须声明在这里。")]),t._v(" "),a("li",[a("strong",[t._v("assets/")]),t._v("*\t包含图片文件和其它资源，当构建应用时，它们将被原样复制到目标目录中。")])]),t._v(" "),a("h2",{attrs:{id:"创建组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建组件")]),t._v(" "),a("p",[t._v("使用以下命令可以创建一个组件, 可以看到目录下会多出一个 app/heroes 目录, 包括 "),a("code",[t._v("heroes.component.ts")]),t._v(" 等4个文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ng generate component heroes\n")])])]),a("p",[t._v("注意使用此命令后 "),a("code",[t._v("app.module.ts")]),t._v(" 的变化:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BrowserModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/platform-browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NgModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HeroesComponent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./heroes/heroes.component'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  declarations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    AppComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    HeroesComponent\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  imports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    BrowserModule\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  providers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bootstrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AppComponent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("会在 "),a("code",[t._v("declarations")]),t._v(" 中新增 "),a("code",[t._v("HeroesComponent")]),t._v(" 的引用。")])])},[],!1,null,null,null);s.default=p.exports}}]);