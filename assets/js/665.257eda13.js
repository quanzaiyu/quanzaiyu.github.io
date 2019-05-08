(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{840:function(t,e,a){"use strict";a.r(e);var r=a(1),n=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"小程序路由无限层级解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序路由无限层级解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序路由无限层级解决方案")]),t._v(" "),a("h2",{attrs:{id:"小程序路由限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序路由限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 小程序路由限制")]),t._v(" "),a("p",[t._v("小程序原生页面存在层级限制，超过一定层数就会无法打开新页面。一开始这个限制为不超过5层，目前是不超过10层。")]),t._v(" "),a("p",[t._v("使用wx.navigateTo()或 "),a("code",[t._v("<navigator>")]),t._v(" 组件(open-type=navigate时）跳转的页面路劲最多只有5层，这些页面路径可以通过wx.navigateBack() API或者左上角返回按钮顺序返回。当页面路径大于5层时，使用wx.navigateTo()跳转下一页不会有任何动静，页面既不跳转也不会报错（这就尴尬了，如果没有细看开发文档，还以为是自己代码写错了呢）。")]),t._v(" "),a("p",[t._v("这个限制对于体量较大的小程序来说，挺难受的。特别是只能打开5层那会儿，业务流程很容易一不小心就超了，比如：首页-搜索结果页-商品详情页-聊天页-下单页-地址选择页-...；更有访问回路防不胜防，比如：商品详情页-查看更多页-商品详情页-查看更多页-...、商品详情页-聊天页-个人主页-商品详情页-聊天页-个人主页-商品详情页-...、诸如此类。即使后来放宽至了10层，还是很容易遭遇层级溢出。")]),t._v(" "),a("p",[t._v("一种处理思路是调整交互路径，严格控制层级数量。但是这种处理方案，一则很多时候会牺牲用户体验，比如为避免个人主页和商品详情页的访问回路，要么不能在个人主页中访问用户商品，要么不能在商品详情页中访问卖家主页，要么访问时需要替换当前不能返回继续浏览，不管怎么取舍都会牺牲某些用户的浏览诉求；二则维护成本特别高，业务逻辑越来越复杂，交互路径越来越发散，路径的统一梳理和规划就会越来越困难，而且管理过程对业务不透明，业务方在设计需求时要受到交互路径的种种限制，甚至一个需求的交互调整很可能无意中造成另一个需求层级溢出，维护成本高且不断膨胀。")]),t._v(" "),a("p",[t._v("在小程序中支持不限层级的路由过程, 可使用转转的 fancy-mini 库: "),a("a",{attrs:{href:"https://github.com/zhuanzhuanfe/fancy-mini",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/zhuanzhuanfe/fancy-mini"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/zhuanzhuanfe/p/9702656.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序无限层级路由方案"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Tencent/wepy/issues/322",target:"_blank",rel:"noopener noreferrer"}},[t._v("两级页面为同一路由时，后者数据覆盖前者"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000012282464",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信小程序页面5层限制的一种解决方案"),a("OutboundLink")],1)])])])},[],!1,null,null,null);e.default=n.exports}}]);