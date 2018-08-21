(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{792:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"service-worker-更新"}},[t._v("Service Worker 更新")]),t._v(" "),n("p",[t._v("Service Worker 的更新也会影响到 Service Worker 的注册，在这里，重点剖析一下 Service Worker 更新的问题。")]),t._v(" "),n("p",[t._v("当页面注册好了一个 Service Worker 之后，Service Worker 会被安装、激活、通过 "),n("code",[t._v("fetch")]),t._v(" 事件监听作用域下站点的网络请求等等行为，为了 Web App 的首屏体验，"),n("a",{attrs:{href:"https://lavas.baidu.com/doc/architecture/the-app-shell-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppShell"),n("OutboundLink")],1),t._v(" 作为最小优先展现单元，其中的 html 页面和静态资源是需要被持久缓存起来的。也就是说保证用户能在离线之后至少优先看到一个完整的 AppShell。")]),t._v(" "),n("p",[t._v("这个和优雅的注册 Service Worker 有个啥子关系？")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("如果 "),n("code",[t._v("sw.js")]),t._v(" 发生了更新，我们预期的是希望浏览器立即更新当前页面的缓存，并且立即加载最新的内容和资源。"),n("code",[t._v("sw.js")]),t._v(" 的更新包含她 URL 的更新和内容的更新，Service Worker 本身的机制能够 diff 到 "),n("code",[t._v("sw.js")]),t._v(" 的更新，如果在注册时候通过 "),n("a",{attrs:{href:"https://w3c.github.io/ServiceWorker/#update-algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Worker Update 算法"),n("OutboundLink")],1),t._v(" diff 到 URL 或者 内容的更新，则马上启动新的 "),n("code",[t._v("sw.js")]),t._v(" 文件的安装、激活，但因为用户当前的页面已经使用老的缓存中的内容加载完成，所以需要等到第二次进入页面的时候才能真正使用新的静态资源和网络请求。")]),t._v(" "),n("p",[t._v("这个机制是有以下两个坑的：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("h2",{attrs:{id:"no-cache-处理"}},[t._v("no-cache 处理")]),t._v(" "),t._m(3),t._v(" "),n("h3",{attrs:{id:"服务器-cache-control"}},[t._v("服务器 Cache-Control")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),n("h3",{attrs:{id:"前端版本控制"}},[t._v("前端版本控制")]),t._v(" "),n("p",[t._v("对于前端版本控制，前端开发者应该并不陌生，如果需要一个静态资源的请求永远不会被缓存，下面这种做法就很好理解了")]),t._v(" "),t._m(8),t._m(9),t._v(" "),n("p",[t._v("但是，这种做法又引发出了其他的问题，每次执行注册 Service Worker 代码逻辑的时候，Service Worker 都能 diff 到变化（URL 的变化也是一种更新的 diff），每次都会在第一次安装，第二次激活并且更新缓存，这种做法使得 Service Worker 的缓存完全没有生效，和每次都和请求最新的 Network 请求内容没什么区别，理论上讲，这种方式由于缓存的频繁读取和删除，甚至比每次直接无缓存刷新的性能更加糟糕。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),n("h3",{attrs:{id:"为什么不直接使用-buildtime-做版本控制？"}},[t._v("为什么不直接使用 buildTime 做版本控制？")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),n("h2",{attrs:{id:"service-worker-缓存实时生效"}},[t._v("Service Worker 缓存实时生效")]),t._v(" "),n("p",[t._v("Service Worker 是一个独立于浏览器主线程的 Worker 线程，在这个线程 Context 中是不允许操作页面的 DOM，但是 Worker 线程可以通过 postMessage 机制与主线程进行通信。")]),t._v(" "),n("p",[t._v("通过前面对 Service Worker 的介绍，已经了解到 Service Worker 更新的第二个痛点是必须要等到用户第二次进入页面的时候才能使用 Service Worker 更新之后的内容，我们的预期是如果 Web App 重新上线了，那用户在任何时候打开页面都能使用到最新的内容，并且同时还要保持 Service Worker 离线缓存的特性。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),n("h3",{attrs:{id:"service-worker-实时生效的策略"}},[t._v("Service Worker 实时生效的策略")]),t._v(" "),n("p",[t._v("通常对用户比较友好的实时生效策略有两种：")]),t._v(" "),t._m(29),t._v(" "),n("p",[t._v("目前百度 Lavas 解决方案推荐的是第二种引导用户刷新的方式。")]),t._v(" "),t._m(30)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("拿 SPA 为例，作为 AppShell 的载体 "),s("code",[this._v("index.html")]),this._v(" 是会被缓存起来的，AppShell 的静态资源也都会被缓存起来的，然而 Service Worker 的注册必然是需要在 "),s("code",[this._v("index.html")]),this._v(" 的 "),s("code",[this._v("<script><\/script>")]),this._v(" 标签或者被缓存住的 js 文件中做的。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("sw.js")]),this._v(" 自身也会被浏览器缓存（也就是 diff 不能做到实时）")]),this._v(" "),s("li",[this._v("就算 diff 到了最新的 "),s("code",[this._v("sw.js")]),this._v("，用户在当前的这次访问中的任何交互还是使用老的缓存内容，需要等到第二次进入页面才能更新缓存")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("对于 "),s("code",[this._v("sw.js")]),this._v(" HTTP 缓存的问题解决方案肯定是让这个文件永远都不缓存（暂时不讨论请求开销的问题）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为了能让 Service Worker 做到实时更新，必须要解决 Service Worker 文件 "),s("code",[this._v("sw.js")]),this._v(" HTTP 缓存的问题。\n通常需要让文件完全无缓存，有两种思路：一种是在服务器端控制请求文件的 "),s("code",[this._v("Cache-Control")]),this._v("，另一种就是在前端通过版本号来改变浏览器缓存策略。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("服务器端的 Cache-Control 的控制是将 "),s("code",[this._v("sw.js")]),this._v(" 的请求设置成 "),s("code",[this._v("no-cache")]),this._v("，以 nginx 为例：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("sw\\"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js$ "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Cache"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Control no"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("store"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Pragma no"),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("cache"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("通过配置服务器这种方式的"),n("strong",[t._v("好处")]),t._v("是：只要做好了 "),n("code",[t._v("sw.js")]),t._v(" 缓存实时更新问题之后，就可以不用关心整个 Web App 的实时更新问题，浏览器都会参照 「"),n("code",[t._v("sw.js")]),t._v(" 的 diff」 -> 「重新安装新 "),n("code",[t._v("sw.js")]),t._v("」 -> 「激活并删除老的缓存」 ->「用户第二次进入页面重新更新缓存」的套路来自行搞定。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当然，这种处理方式也有很大的局限性，如果您将静态资源都部署在第三方的 CDN 静态资源服务器，单独针对某一个文件进行服务器设置 "),s("code",[this._v("sw.js")]),this._v(" 还是感觉很麻烦。尤其是对于大型站点的运维人员来说，在服务器新增一个路由不是一件很随意的事情。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("register")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/sw.js?v='")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Date"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("now")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这段代码一祭出，就解决了之前所提到的 "),s("code",[this._v("sw.js")]),this._v(" 被浏览器缓存的问题了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提醒")]),this._v(" "),s("p",[this._v("在 Service Worker 得注册过程中，慎用时间戳来做版本控制，会导致一些意想不到的坑。事实也证明这种做法也是不可取的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("接下来转变一下思路，这个时候需要先想一想如何优雅的做好无缓存的版本控制了。如果不能对 "),s("code",[this._v("sw.js")]),this._v(" 直接做版本控制，能不能对别的文件做无缓存的版本控制，然后在这个文件中再执行 Service Worker 的注册逻辑？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假设这个文件叫 "),s("code",[this._v("sw-register.js")]),this._v("，其代码如下：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// sw-register.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("register")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/sw.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后在 "),s("code",[this._v("index.html")]),this._v(" 中对 "),s("code",[this._v("sw-register.js")]),this._v(" 做版本控制就好了：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\nwindow"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" script "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("createElement")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'script'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" firstScript "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'script'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'text/javascript'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  script"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/sw-register.js?v='")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" Date"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("now")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  firstScript"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("insertBefore")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("script"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" firstScript"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样处理之后，"),s("code",[this._v("sw-register.js")]),this._v(" 就不会被浏览器缓存了，并且由于 "),s("code",[this._v("sw-register.js")]),this._v(" 是异步加载的，也不会造成页面 block，但还有个问题，当前的 "),s("code",[this._v("sw.js")]),this._v(" 依然会被浏览器 HTTP 缓存。根本问题还是没有解决。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其实设想一下，每次 Service Worker 的更新都是因为工程的上线，如果能够保证每次上线一次就赋给 "),s("code",[this._v("sw.js")]),this._v(" 一个版本，等新上线之后就用新的版本号替换老的版本号，从而触发 Service Worker 的 diff，并且能保证每次上线之后就更新了新的 "),s("code",[this._v("sw.js")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// sw-register.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("register")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/sw.js?v=buildVersion'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中 "),s("code",[this._v("buildVersion")]),this._v(" 是每次上线前构建的一个唯一版本号。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这样看来，是解决了之前 Service Worker 更新不及时的问题。但是代价是增加了一次 "),s("code",[this._v("sw-register.js")]),this._v(" 的请求，由于 "),s("code",[this._v("sw-register.js")]),this._v(" 通常只做 Service Worker 的注册工作，体量不会太大，所以应该还是可以接受，相比于在服务器端的配置，前端的版本控制的方案应该更加的简单方便。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("绕了一圈，版本控制为什么不直接在 注册 "),s("code",[this._v("sw.js")]),this._v(" 时候做，为什么非要借助一个 "),s("code",[this._v("sw-register.js")]),this._v(" 文件？就像如下代码：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("register")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'/sw.js?v=buildTime'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("为了保证离线可用，所有和 AppShell 相关的 html 和静态资源都要被缓存住，此时，就算上线时候更改了 "),s("code",[this._v("buildTime")]),this._v(", 但是 Service Worker 所有可能被注册的地方由于被缓存了是感知不到变化的，除非是用 "),s("code",[this._v("Date.now()")]),this._v(" 这种变量时间戳的方式自动轮询，但是这种方案的弊端在前面已经分析过了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通过对 "),s("code",[this._v("sw.js")]),this._v(" 文件的无缓存处理，我们能做到实时的检测更新，接下来需要处理缓存更新实时生效的问题。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("当注册 Service Worker 得时候，实时监测到 "),s("code",[this._v("sw.js")]),this._v(" 更新之后，则浏览器会立即立即安装、激活，然而激活完成并清除老的缓存之后，如果有一种途径告诉主线程 "),s("code",[this._v("sw 完成了更新")]),this._v(" 这样也会对用户比较友好。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// sw.js 文件")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 新的 Service Worker 更新时，进入激活状态后，会触发 activate 事件")]),t._v("\nself"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'activate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cacheName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'a_cache_name'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("waitUntil")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    caches"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("open")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheName"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cache"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 进行老缓存的清除...(略过..)")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 完成缓存删除之后就可以通知浏览器主线程啦")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 当然这里也可以判断如果缓存内本来就没内容")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 就代表是首次安装，就不要发 message了 (这个逻辑略过...)")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clients"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("matchAll")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" clients"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              clients"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("client"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{attrs:{class:"token comment"}},[t._v("// 给每个已经打开的标签都 postMessage")]),t._v("\n                client"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("postMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'sw.update'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n              "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("p",[t._v("这样的话，相当于我们在自己的业务代码中只要监听 "),n("code",[t._v("message")]),t._v(" 事件，监听到 "),n("code",[t._v("sw.update")]),t._v(" 这个 message 就知道 Service Worker 更新成功了。看来这段代码写在 "),n("code",[t._v("sw-register.js")]),t._v(" 中比较优雅，我们可以把 "),n("code",[t._v("sw-register.js")]),t._v(" 这个文件就当成专门处理 Service Worker 的文件好了。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// sw-register.js")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  navigator"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'message'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'sw.update'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果代码走到了在这里，就知道了，Service Worker 已经更新完成了")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 可以做点什么事情让用户体验更好")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("监听到 Service Worker 成功更新后，直接 location.reload() 刷新当前页面")]),this._v(" "),s("li",[this._v("通过 toast 的形式提示用户主动刷新当前页面")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("figure",[s("img",{attrs:{src:"http://img.xiaoyulive.top/img/shortcut/141.png",alt:""}})])}],!1,null,null,null);s.default=e.exports}}]);