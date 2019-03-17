(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{975:function(e,a,r){"use strict";r.r(a);var v=r(1),t=Object(v.a)({},function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"网站-pwa-化开发记录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网站-pwa-化开发记录","aria-hidden":"true"}},[e._v("#")]),e._v(" "),r("imgLink",{attrs:{src:"logo/app.svg",width:"50px"}}),e._v(" 网站 PWA 化开发记录")],1),e._v(" "),r("imgLink",{attrs:{src:"cover/pwa.png/small"}}),e._v(" "),r("p",[e._v("最近，研究了 PWA，将本站进行了 PWA 化，感觉不错，在此分享一下心得。")]),e._v(" "),r("p",[e._v("添加到桌面图标：")]),e._v(" "),r("imgLink",{attrs:{src:"shortcut/131.jpeg/small"}}),e._v(" "),r("p",[e._v("启动页面：")]),e._v(" "),r("imgLink",{attrs:{src:"shortcut/132.png/small"}}),e._v(" "),r("p",[e._v("全屏显示：")]),e._v(" "),r("imgLink",{attrs:{src:"shortcut/133.jpeg/small"}}),e._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),r("p",[e._v("近年来，Web 应用在整个软件与互联网行业承载的责任越来越重，软件复杂度和维护成本越来越高，Web 技术，尤其是 Web 客户端技术，迎来了爆发式的发展。")]),e._v(" "),r("p",[e._v("包括但不限于基于 Node.js 的前端工程化方案；诸如 Webpack、Rollup 这样的打包工具；Babel、PostCSS 这样的转译工具；TypeScript、Elm 这样转译至 JavaScript 的编程语言；React、Angular、Vue 这样面向现代 web 应用需求的前端框架及其生态，也涌现出了像同构 JavaScript与通用 JavaScript 应用这样将服务器端渲染（Server-side Rendering）与单页面应用模型（Single-page App）结合的 web 应用架构方式，可以说是百花齐放。")]),e._v(" "),r("p",[e._v("但是，Web 应用在移动时代并没有达到其在桌面设备上流行的程度。究其原因，尽管上述的各种方案已经充分利用了现有的 JavaScript 计算能力、CSS 布局能力、HTTP 缓存与浏览器 API 对当代基于 Ajax 与响应式设计的 web 应用模型的性能与体验带来了工程角度的巨大突破，我们仍然无法在不借助原生程序辅助浏览器的前提下突破 web 平台本身对 web 应用固有的桎梏：客户端软件（即网页）需要下载所带来的网络延迟；与 Web 应用依赖浏览器作为入口所带来的体验问题。")]),e._v(" "),r("p",[e._v("在桌面设备上，由于网络条件稳定，屏幕尺寸充分，交互方式趋向于多任务，这两点造成的负面影响对比 web 应用免于安装、随叫随到、无需更新等优点，瑕不掩瑜。但是在移动时代，脆弱的网络连接与全新的人机交互方式使得这两个问题被无限放大，严重制约了 web 应用在移动平台的发展。在用户眼里，原生应用不会出现「白屏」，清一色都摆在主屏幕上；而 web 应用则是浏览器这个应用中的应用，使用起来并不方便，而且加载也比原生应用要慢。")]),e._v(" "),r("h2",{attrs:{id:"什么是-pwa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-pwa","aria-hidden":"true"}},[e._v("#")]),e._v(" 什么是 PWA")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developers.google.com/web/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Progressive Web App"),r("OutboundLink")],1),e._v(", 中文名叫做"),r("strong",[e._v("渐进式网页应用")]),e._v("，简称 PWA，是提升 Web App 的体验的一种新方法，能给用户原生应用的体验。")]),e._v(" "),r("p",[e._v("PWA 以及构成 PWA 的一系列关键技术的出现，终于让我们看到了彻底解决这两个平台级别问题的曙光：能够显著提高应用加载速度、甚至让 web 应用可以在离线环境使用的 Service Worker 与 Cache Storage；用于描述 web 应用元数据（metadata）、让 web 应用能够像原生应用一样被添加到主屏、全屏执行的 Web App Manifest；以及进一步提高 web 应用与操作系统集成能力，让 web 应用能在未被激活时发起推送通知的 Push API 与 Notification API 等等。")]),e._v(" "),r("p",[e._v("PWA 可以将 Web 和 App 各自的优势融合在一起：渐进式、可响应、可离线、实现类似 App 的交互、即时更新、安全、可以被搜索引擎检索、可推送、可安装、可链接。")]),e._v(" "),r("h2",{attrs:{id:"pwa-的技术要点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwa-的技术要点","aria-hidden":"true"}},[e._v("#")]),e._v(" PWA 的技术要点")]),e._v(" "),r("p",[e._v("其实，PWA 并不是单独的一门技术，其中每一项功能的实现都是多种技术的组合。")]),e._v(" "),r("h3",{attrs:{id:"桌面访问：service-worker-web-app-manifest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#桌面访问：service-worker-web-app-manifest","aria-hidden":"true"}},[e._v("#")]),e._v(" 桌面访问：Service Worker + Web App Manifest")]),e._v(" "),r("p",[e._v("这是 PWA 中最炫酷的功能了，添加桌面图标。这个功能就算没有PWA也是可以实现的，但是目前添加桌面图标指示简单的打开网页而已，在获得HTML、JavaScript和CSS之前，页面将会呈现一段时间的空白时间，但是WebApp Manifest功能可以在这一空白时间内补上一开屏画面，从而提高用户等待期间的体验。目前该功能还是比较简陋的，对于一些稍微高级一点的需求就无法支持了，比如背景图片，动画。")]),e._v(" "),r("h3",{attrs:{id:"缓存机制：service-worker-cachestorage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制：service-worker-cachestorage","aria-hidden":"true"}},[e._v("#")]),e._v(" 缓存机制：Service Worker + CacheStorage")]),e._v(" "),r("p",[e._v("在这之前所有的离线功能是交给 Application Cache 和 IndexedDB，IndexedDB 是一个优秀的API，但是 Application Cache 自诞生初期就被吐槽，其对于缓存的控制不灵活一直为人所诟病，所以更多用户选择，将静态资源响应头的 max-age 和 expire 字段设置成最大，使得缓存永不过期来达到离线效果。但是自从有了 CacheStorage 之后，“麻麻再也不用担心控制缓存的能力了”。因为 CacheStorage + Service Worker 简直就是控制缓存的最佳组合，CacheStorage 可以将静态资源批量或者单个导入，在 Service Worker 中对指定地址的静态资源进行监听，当 Service Worker 接收 fetch 事件时，开发者可以按照具体的业务需求，来制定是否使用或者如何使用缓存的策略。")]),e._v(" "),r("h3",{attrs:{id:"推送通知：push-notification"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推送通知：push-notification","aria-hidden":"true"}},[e._v("#")]),e._v(" 推送通知：Push + Notification")]),e._v(" "),r("p",[e._v("Notification和Push功能是绑定使用的，开发者可以在 inspector 下使用模拟推送来调试通知功能。")]),e._v(" "),r("p",[e._v("推送是一个很有价值接口，并且依赖于 Service Worker 线程，所以是否能够推送成功，全都仰仗ServiceWorker线程是否存在，之前曾经提到过，Service Worker 是运行在单独线程，在浏览器线程退出之后，Service Worker 线程也会关闭，Service Worker 线程在网页关闭后，如果内存足够，也不会被销毁。")]),e._v(" "),r("h2",{attrs:{id:"几种技术的优缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#几种技术的优缺点","aria-hidden":"true"}},[e._v("#")]),e._v(" 几种技术的优缺点")]),e._v(" "),r("h3",{attrs:{id:"native-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#native-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Native APP")]),e._v(" "),r("p",[e._v("Native APP 由于天生就基于操作系统（Android、iOS），因此具备很多优点：")]),e._v(" "),r("ul",[r("li",[e._v("相比于其它模式，提供最佳的用户体验，最优质的用户界面，最华丽的交互")]),e._v(" "),r("li",[e._v("针对不同平台提供不同体验")]),e._v(" "),r("li",[e._v("可节省带宽成本，打开速度更快")]),e._v(" "),r("li",[e._v("功能最为强大,特别是在与系统交互中,几乎所有功能都能实现")])]),e._v(" "),r("p",[e._v("Native APP 用起来很流畅，但是也有其天然的基因缺陷：")]),e._v(" "),r("ul",[r("li",[e._v("门槛高，原生开发人才稀缺，至少比前端和后端少，开发环境昂贵")]),e._v(" "),r("li",[e._v("无法跨平台，开发的成本比较大，各个系统独立开发")]),e._v(" "),r("li",[e._v("发布成本高，版本更新需要将新版本上传到不同的应用商店，导致更新缓慢，软件上线需要审核")]),e._v(" "),r("li",[e._v("维持多个版本、多个系统的成本比较高，而且必须做兼容")]),e._v(" "),r("li",[e._v("用户 80% 的时间被 Top3 的超级 App 占据，对于站点来说，应用分发的性价比也越来越不划算")]),e._v(" "),r("li",[e._v("要使用它，首先还需要下载几十兆上百着兆的安装包，即使是偶尔需要使用一下下")])]),e._v(" "),r("h3",{attrs:{id:"hybrid-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hybrid-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Hybrid APP")]),e._v(" "),r("p",[e._v("混合模式移动应用，介于Web App、Native App这两者之间的App开发技术，兼具“Native App良好交互体验的优势”和“Web App跨平台开发的优势”（百度百科解释）")]),e._v(" "),r("p",[e._v("主要的原理是，由Native通过JSBridge等方法提供统一的API，然后用Html+Css实现界面，JS来写逻辑，调用API，最终的页面在Webview中显示，这种模式下，Android、iOS的API一般有一致性，Hybrid App所以有跨平台效果。")]),e._v(" "),r("ul",[r("li",[e._v("优点：开发和发布都比较方便，效率介于Native App、Web App之间")]),e._v(" "),r("li",[e._v("缺点：学习范围较广，需要原生配合")]),e._v(" "),r("li",[e._v("应用技术：PhoneGap，AppCan，Wex5，APICloud，H5+（HBuilder）等")])]),e._v(" "),r("h3",{attrs:{id:"web-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#web-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Web App")]),e._v(" "),r("p",[e._v("web网页开发成本低，网站更新时上传最新的资源到服务器即可，用手机带的浏览器打开就可以使用，具有很多优点：")]),e._v(" "),r("ul",[r("li",[e._v("可以跨平台，调试方便")]),e._v(" "),r("li",[e._v("无需安装，不会占用手机内存，而且更新速度最快")]),e._v(" "),r("li",[e._v("不存在多版本问题，维护成本低")]),e._v(" "),r("li",[e._v("临时入口，可以随意嵌入")])]),e._v(" "),r("p",[e._v("但是除了体验上比 Native App 还是差一些，还有一些明显的缺点：")]),e._v(" "),r("ul",[r("li",[e._v("手机桌面入口不够便捷，想要进入一个页面必须要记住它的 url 或者加入书签")]),e._v(" "),r("li",[e._v("依赖于网络，没网络就没响应，不具备离线能力，第一次访问页面速度慢，耗费流量")]),e._v(" "),r("li",[e._v("不像APP一样能进行消息推送")]),e._v(" "),r("li",[e._v("受限于手机和浏览器性能，用户体验相较于其他模式最差")]),e._v(" "),r("li",[e._v("功能受限，大量移动端功能无法实现")])]),e._v(" "),r("p",[e._v("Web App 与 WAP 的区别：")]),e._v(" "),r("p",[e._v("说到 Web App 不少人会联想到 WAP，或者有人认为，WAP 就是 Web App，其实不然。")]),e._v(" "),r("p",[e._v("Web App 与 WAP 最直接的区别就是功能层面。WAP更侧重使用网页技术在移动端做展示，包括文字、媒体文件等。而Web App更侧重“功能”，是使用网页技术实现的App。总的来说，Web App就是运行于网络和标准浏览器上，基于网页技术开发实现特定功能的应用。")]),e._v(" "),r("h3",{attrs:{id:"pwa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pwa","aria-hidden":"true"}},[e._v("#")]),e._v(" PWA")]),e._v(" "),r("p",[e._v("一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用。随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能。")]),e._v(" "),r("p",[e._v("解决了以下一些问题：")]),e._v(" "),r("ul",[r("li",[e._v("可以添加至主屏幕，点击主屏幕图标可以实现启动动画以及隐藏地址栏")]),e._v(" "),r("li",[e._v("实现离线缓存功能，能够在各种网络环境下使用，包括网络差和断网条件下")]),e._v(" "),r("li",[e._v("实现了消息推送")]),e._v(" "),r("li",[e._v("其本质是一个网页，没有原生app的各种启动条件，快速响应用户指令")])]),e._v(" "),r("p",[e._v("但仍然存在一些问题：")]),e._v(" "),r("ul",[r("li",[e._v("支持率不高:现在ios手机端不支持pwa，IE也暂时不支持")]),e._v(" "),r("li",[e._v("Chrome在中国桌面版占有率还是不错的，安卓移动端上的占有率却很低")]),e._v(" "),r("li",[e._v("各大厂商还未明确支持pwa")]),e._v(" "),r("li",[e._v("依赖的GCM服务在国内无法使用")]),e._v(" "),r("li",[e._v("微信小程序的竞争")])]),e._v(" "),r("p",[e._v("尽管有上述的一些缺点，PWA技术仍然有很多可以使用的点。")]),e._v(" "),r("ul",[r("li",[e._v("service worker 技术实现离线缓存，可以将一些不经常更改的静态文件放到缓存中，提升用户体验")]),e._v(" "),r("li",[e._v("service worker 实现消息推送，使用浏览器推送功能，吸引用户")]),e._v(" "),r("li",[e._v("渐进式开发，尽管一些浏览器暂时不支持，可以利用上述技术给使用支持浏览器的用户带来更好的体验")])]),e._v(" "),r("h3",{attrs:{id:"小程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序")]),e._v(" "),r("p",[e._v("微信小程序和PWA（Progressive Web App）是目前移动端以及前端受关注度较高的两项技术。小程序自去年公测以来，国内很多公司均投入到小程序的开发中，今日头条、携程、摩拜单车等小程序纷纷在第一时间发布。从实际效果来看，小程序的用户体验普遍受到了好评，并且它可以在微信上安装、卸载和离线使用。PWA则是在传统Web应用的基础上，通过完善Web应用的一些能力，比如离线使用、后台加载、添加到主屏和消息推送等，达到用户体验提升和性能优化。两者的达到的效果相似，但实现技术上略有不同。")]),e._v(" "),r("imgLink",{attrs:{src:"shortcut/139.png/small"}})],1)},[],!1,null,null,null);a.default=t.exports}}]);