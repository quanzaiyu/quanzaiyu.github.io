(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{913:function(t,v,e){"use strict";e.r(v);var _=e(1),r=Object(_.a)({},function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"flow-静态类型检查及在-vue-项目中的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-静态类型检查及在-vue-项目中的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow 静态类型检查及在 Vue 项目中的使用")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("结合由 Facebook 出品的静态类型检查工具 "),e("a",{attrs:{href:"https://flow.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow"),e("OutboundLink")],1),t._v("，和最近将 Flow 引入到一个 Vue.js 项目中的实践经验，本文想聊聊 Flow 类型检查工具和它在Vue项目中实际使用的效果。")]),t._v(" "),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),e("ul",[e("li",[t._v("为什么需要引入类型检查？")]),t._v(" "),e("li",[t._v("Flow 是什么？")]),t._v(" "),e("li",[t._v("Flow 的作用")]),t._v(" "),e("li",[t._v("Flow 在 Vue 项目中的使用")]),t._v(" "),e("li",[t._v("Flow 的配置过程")]),t._v(" "),e("li",[t._v("在 Vue 组件中使用 Flow 的几个方法")]),t._v(" "),e("li",[t._v("类型检查工具对团队有什么好处？")]),t._v(" "),e("li",[t._v("总结")])]),t._v(" "),e("h2",{attrs:{id:"为什么需要引入类型检查？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要引入类型检查？","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么需要引入类型检查？")]),t._v(" "),e("p",[t._v("JS作为一个弱类型语言，一个著名的黑点是它很容易就写出非常隐蔽的隐患代码，在编译期甚至运行时看上去都不会报错，但是可能会发生各种各样奇怪的和难以解决的bug。\n类型检查是当前动态类型语言的发展趋势，根据"),e("a",{attrs:{href:"https://github.com/flow-typed/flow-typed",target:"_blank",rel:"noopener noreferrer"}},[t._v("stateofjs"),e("OutboundLink")],1),t._v("的调查结果，JS的强类型超集TypeScript已经有了相当的知名度，吸引了大量开发者的学习兴趣，并且大部分开发者计划继续了解或者使用。")]),t._v(" "),e("imgLink",{attrs:{src:"vue/001.webp"}}),t._v(" "),e("ol",[e("li",[t._v("使得大型项目可维护")]),t._v(" "),e("li",[t._v("增加代码的可读性")]),t._v(" "),e("li",[t._v("通常会有更好的IDE支持")])]),t._v(" "),e("h2",{attrs:{id:"flow是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow是什么？")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/facebook/Flow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow"),e("OutboundLink")],1),t._v("是一个由Facebook出品的JavaScript静态类型检查工具，它与Typescript不同的是，它可以部分引入，不需要完全重构整个项目，所以对于一个已有一定规模的项目来说，迁移成本更小，也更加可行。除此之外，Flow可以提供实时增量的反馈，通过运行Flow server不需要在每次更改项目的时候完全从头运行类型检查，提高运行效率。\nFlow 和 Typescript 都是给 Javascript 增加类型检查的优秀解决方案，两者的简单对比如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("工具")]),t._v(" "),e("th",[t._v("Flow")]),t._v(" "),e("th",[t._v("Typescript")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("公司")]),t._v(" "),e("td",[t._v("Facebook")]),t._v(" "),e("td",[t._v("微软")])]),t._v(" "),e("tr",[e("td",[t._v("star")]),t._v(" "),e("td",[t._v("12k+")]),t._v(" "),e("td",[t._v("23k+")])]),t._v(" "),e("tr",[e("td",[t._v("文档支持程度")]),t._v(" "),e("td",[t._v("中等")]),t._v(" "),e("td",[t._v("更多")])]),t._v(" "),e("tr",[e("td",[t._v("第三方库支持工具")]),t._v(" "),e("td",[t._v("Flow-typed")]),t._v(" "),e("td",[t._v("tsd")])]),t._v(" "),e("tr",[e("td",[t._v("IDE支持")]),t._v(" "),e("td",[t._v("Webstorm自带插件支持")]),t._v(" "),e("td",[t._v("Webstorm支持，Visual Studio原生支持")])]),t._v(" "),e("tr",[e("td",[t._v("其他")]),t._v(" "),e("td",[t._v("自由度更高，老项目的迁移成本低")]),t._v(" "),e("td",[t._v("工程化强，社区活跃度和官方支持力度更高，适合新项目")])])])]),t._v(" "),e("p",[t._v("两者在代码语法上有大量相似的地方，除了对于一些数据类型的支持不一样，具体请查看Flow的文档。关于 Flow 和 Typescript 的比较，可以简单总结为：对于新项目，可以考虑使用 TypeScript 或者 Flow，对于已有一定规模的项目则建议使用Flow进行较小成本的逐步迁移来引入类型检查。")]),t._v(" "),e("h2",{attrs:{id:"flow的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow的作用")]),t._v(" "),e("p",[t._v("一个简单的demo如下。")]),t._v(" "),e("imgLink",{attrs:{src:"vue/002.webp"}}),t._v(" "),e("imgLink",{attrs:{src:"vue/003.webp"}}),t._v(" "),e("h2",{attrs:{id:"flow-在-vue-项目中的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow-在-vue-项目中的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow 在 Vue 项目中的使用")]),t._v(" "),e("p",[t._v("Flow 在Vue 项目中的具体使用价值有：")]),t._v(" "),e("ul",[e("li",[t._v("使用 Flow 可以在不需要重构整个 Vue 项目（如UI组件迁移成本）、不需要引入大量的工具链（eslint+babel）、不需要第三方库一定支持的情况下引入静态类型检查")]),t._v(" "),e("li",[t._v("Vue.js 官方对 TypeScript 做了支持，但是项目所依赖的第三方库不一定支持TypeScript，从全局考虑TypeScript的迁移成本比较大")])]),t._v(" "),e("p",[t._v("在尝试Flow+Vue.js的实践过程中，主要的步骤包括：")]),t._v(" "),e("ol",[e("li",[t._v("使用"),e("a",{attrs:{href:"https://github.com/flow-typed/flow-typed",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow-typed工具"),e("OutboundLink")],1),t._v(" packages的支持；")]),t._v(" "),e("li",[t._v("在一个由Vue cli (webpack + babel + eslint) 生成的脚手架项目中配置 Flow（见后文）；3，Vue 的单文件组件结构如何支持 Flow，在业务项目的实践中前后使用了三种方案，也会在后文分别介绍这几种方法和其优缺点。")])]),t._v(" "),e("h2",{attrs:{id:"flow的配置过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flow的配置过程","aria-hidden":"true"}},[t._v("#")]),t._v(" Flow的配置过程")]),t._v(" "),e("ol",[e("li",[t._v("假设目前有一个从vue-cli命令行生成的项目：vue init webpack-simple Flow-vue-demo。关于Babel，Eslint（可选）和Flow，需要安装所需的 npm packages，参考列表如下：")])]),t._v(" "),e("p",[t._v("Babel:")]),t._v(" "),e("ul",[e("li",[t._v("babel-plugin-syntax-Flow")]),t._v(" "),e("li",[t._v("babel-plugin-transform-class-properties")]),t._v(" "),e("li",[t._v("babel-plugin-transform-Flow-strip-types")])]),t._v(" "),e("p",[t._v("Eslint: (可选)")]),t._v(" "),e("ul",[e("li",[t._v("eslint")]),t._v(" "),e("li",[t._v("babel-eslint")]),t._v(" "),e("li",[t._v("eslint-plugin-html")]),t._v(" "),e("li",[t._v("eslint-plugin-Flowtype-errors")]),t._v(" "),e("li",[t._v("eslint-plugin-vue")]),t._v(" "),e("li",[t._v("eslint-config-vue")])]),t._v(" "),e("p",[t._v("Flow:")]),t._v(" "),e("ul",[e("li",[t._v("Flow-bin")])]),t._v(" "),e("ol",[e("li",[t._v("Webstorm 自带了 Flow 的支持，需要开启，结合 eslint 配置 Flow 相关的 rules，在编辑时通过eslint即可自动报错。")]),t._v(" "),e("li",[t._v("安装Flow，运行Flow init && Flow check。配置 .vue 文件为 Flow 的检查范围。")]),t._v(" "),e("li",[t._v("使用 Flow-typed 处理第三方的 npm packages 的类型声明。")]),t._v(" "),e("li",[t._v("必要的话增加自定义的类型声明文件，如自定义的对象等，具体可以参考Flow文档。")])]),t._v(" "),e("h2",{attrs:{id:"在-vue-组件中使用-flow-的几个方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-vue-组件中使用-flow-的几个方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 Vue 组件中使用 Flow 的几个方法")]),t._v(" "),e("p",[t._v("在前面的 demo 中已经展示了纯 JS 文件里面怎么用 Flow，那么在一个vue组件文件中应该如何配置呢？有下面几种方法。")]),t._v(" "),e("p",[t._v("方法一：直接在script标签中，像纯 js 文件处理一样添加 Flow 注释，发现可以正常编译运行，但是运行Flow check是无效的。")]),t._v(" "),e("p",[t._v("方法二：注释掉template, style 和 script 标签，由于Vue的编译器即使注释了也会识别其中的"),e("code",[t._v("<template>, <style> 和 <script>")]),t._v(" 标签，而Flow检查会忽略注释，因此对于Flow来说可以当做一个 javascript 文件进行处理。demo如下图所示。")]),t._v(" "),e("imgLink",{attrs:{src:"vue/004.webp"}}),t._v(" "),e("p",[t._v("对于这样处理的vue文件，Flow命令能够报出关于一般的函数声明的类型检查错误，但是对于绑定到Vue实例（this）上的方法是无效的。因此Flow类型检查不是100%覆盖。这种方法的主要问题在于代码和注释混用不便于阅读，目前 Flow 社区有一个 open issue 就是关于这个问题的，即不能自动检测中文件中的script标签，请见："),e("a",{attrs:{href:"https://github.com/facebook/Flow/issues/2218",target:"_blank",rel:"noopener noreferrer"}},[t._v("Support HTML files #2218"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("方法三：Vue 文件引用外部的 js 文件，将js部分单独抽离出来进行类型检查。该方法的优点在于可以用到Flow的所有功能，但是没有了vue单文件组件的结构，项目结构略显臃肿。（每个组件都会有至少两个文件）。如下图：")]),t._v(" "),e("imgLink",{attrs:{src:"vue/005.webp"}}),t._v(" "),e("p",[t._v("三种解决方法的优缺点对比如下表所示：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("方法")]),t._v(" "),e("th",[t._v("Pros")]),t._v(" "),e("th",[t._v("Cons")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("标签中直接添加Flow")]),t._v(" "),e("td",[t._v("代码添加量最小")]),t._v(" "),e("td",[t._v("Flow 类型检查无效. 不予考虑")])]),t._v(" "),e("tr",[e("td",[t._v("注释template中的标签")]),t._v(" "),e("td",[t._v("1. 可以通过Flow check检查出部分的类型错误 2. 最接近使用直觉. 目前是一个open issue")]),t._v(" "),e("td",[t._v("1. 对于和组件无关的函数以及import. 可以正常工作. 但是不是100%覆盖 2. 看上去样式比较糟糕")])]),t._v(" "),e("tr",[e("td",[t._v("Vue 文件引用外部的 js 文件")]),t._v(" "),e("td",[t._v("1. 通过 eslint 中通过使用 Flow 插件. 配置Flow规则. 可以在编辑时实时提示 2. 没有影响文件结构 3. 单独的 js 文件可以几乎完全使用 Flow 的所有功能")]),t._v(" "),e("td",[t._v("1. method仍然不能自动识别. 由于 Vue 中的一些函数一般没有return value. 需要手动判断类型防止bug 2. 一个组件的代码被分拆到多个文件. 不如单文件组件那么直观")])])])]),t._v(" "),e("h2",{attrs:{id:"类型检查工具对团队有什么好处？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类型检查工具对团队有什么好处？","aria-hidden":"true"}},[t._v("#")]),t._v(" 类型检查工具对团队有什么好处？")]),t._v(" "),e("p",[t._v("通过在一个 Vue 技术栈的实际业务项目中引入 Flow，我们大致获得了这些收益：")]),t._v(" "),e("ol",[e("li",[t._v("几乎消灭了由函数数据类型引起的bug")]),t._v(" "),e("li",[t._v("无需额外的关于变量、参数、返回值类型的注释，可以让读者了解必要的附加信息")]),t._v(" "),e("li",[t._v("大量减少由于使用第三方库不当引起的类型错误")]),t._v(" "),e("li",[t._v("可以在CI系统中集成")]),t._v(" "),e("li",[t._v("工具链配置成本比较低，只需要很少的工作量即可达到这些效果")])]),t._v(" "),e("p",[t._v("关于类型检查工具，读者可能需要考虑的问题，回答如下表所示。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Question")]),t._v(" "),e("th",[t._v("Answer")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("类型检查可以让我的代码bug free吗？")]),t._v(" "),e("td",[t._v("不能保证bug free，只能检查类型错误")])]),t._v(" "),e("tr",[e("td",[t._v("可以提高我的生产力吗？")]),t._v(" "),e("td",[t._v("需要多写一些代码，但是相应地可以减少很多runtime debug的时间")])]),t._v(" "),e("tr",[e("td",[t._v("将Flow引入我的项目，所需要的工作量大吗？")]),t._v(" "),e("td",[t._v("不大，可以逐步引入")])]),t._v(" "),e("tr",[e("td",[t._v("我的项目需要长期维护？")]),t._v(" "),e("td",[t._v("请使用 Flow 或者 Typescript")])]),t._v(" "),e("tr",[e("td",[t._v("我的项目非常简单？")]),t._v(" "),e("td",[t._v("简单项目不一定需要类型检查，可能会有些多余")])]),t._v(" "),e("tr",[e("td",[t._v("我的项目需要重构？")]),t._v(" "),e("td",[t._v("请引入类型检查")])]),t._v(" "),e("tr",[e("td",[t._v("我的项目对于bug free的要求非常高？")]),t._v(" "),e("td",[t._v("请引入类型检查，减少类型错误等难以发现的bug")])]),t._v(" "),e("tr",[e("td",[t._v("我的项目开发人员流动很频繁？")]),t._v(" "),e("td",[t._v("请引入类型检查，增加项目可读性")])]),t._v(" "),e("tr",[e("td",[t._v("我的项目有大量的算法计算？")]),t._v(" "),e("td",[t._v("请引入类型检查，减少隐蔽的类型转换错误等")])])])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("ol",[e("li",[t._v("Flow 或者 TypeScript 都是静态类型检查的优秀解决方案，能够给有类型检查需求的一定规模的项目带来实际收益。")]),t._v(" "),e("li",[t._v("Flow+Vue目前看来有些使用上的不便，期待尽早解决open issue，能够自动识别Vue组件文件的标签，从而使得 Flow 在 vue 项目中的使用更加流畅。")])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5967038d51882568b4630faa",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flow 静态类型检查及在 Vue 项目中的使用"),e("OutboundLink")],1)])],1)},[],!1,null,null,null);v.default=r.exports}}]);