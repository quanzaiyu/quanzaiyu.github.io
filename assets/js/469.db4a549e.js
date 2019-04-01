(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{697:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),a("p",[t._v("首先看一张官方的生命周期图:")]),t._v(" "),a("imgLink",{attrs:{src:"articles/lifecycle.png"}}),t._v(" "),a("h2",{attrs:{id:"生命周期历程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期历程","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期历程")]),t._v(" "),a("p",[t._v("从图中可以看到，整个 Vue 实例/组件的生命周期大致分为以下几个阶段")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("init")]),t._v(" 初始化阶段")]),t._v(" "),a("li",[a("strong",[t._v("mount")]),t._v(" 挂载阶段")]),t._v(" "),a("li",[a("strong",[t._v("update")]),t._v(" 更新阶段")]),t._v(" "),a("li",[a("strong",[t._v("destroy")]),t._v(" 销毁阶段")])]),t._v(" "),a("p",[t._v("在每个阶段都会有对应的一些生命周期钩子。")]),t._v(" "),a("h2",{attrs:{id:"生命周期钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期钩子","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期钩子")]),t._v(" "),a("p",[t._v("生命周期钩子，又称生命周期函数，比较重要的有:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("beforeCreate")])])]),t._v(" "),a("p",[t._v("在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("created")])])]),t._v(" "),a("p",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("beforeMount")])])]),t._v(" "),a("p",[t._v("在挂载开始之前被调用：相关的 render 函数首次被调用。")]),t._v(" "),a("p",[t._v("注意: 该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[t._v("mounted")])])]),t._v(" "),a("p",[t._v("el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。")]),t._v(" "),a("p",[t._v("注意: mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 "),a("code",[t._v("vm.$nextTick")]),t._v(" 替换掉 mounted：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("mounted")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the entire view has been rendered")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意: 该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("strong",[t._v("beforeUpdate")])])]),t._v(" "),a("p",[t._v("数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。")]),t._v(" "),a("p",[t._v("你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。")]),t._v(" "),a("p",[t._v("注意: 该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("strong",[t._v("updated")])])]),t._v(" "),a("p",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。")]),t._v(" "),a("p",[t._v("当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。")]),t._v(" "),a("p",[t._v("注意: updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updated")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code that will run only after the")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// entire view has been re-rendered")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意: 该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("strong",[t._v("beforeDestroy")])])]),t._v(" "),a("p",[t._v("实例销毁之前调用。在这一步，实例仍然完全可用。")]),t._v(" "),a("p",[t._v("注意: 该钩子在服务器端渲染期间不被调用。")]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("strong",[t._v("destroyed")])])]),t._v(" "),a("p",[t._v("Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。")]),t._v(" "),a("p",[t._v("注意: 该钩子在服务器端渲染期间不被调用。")])],1)},[],!1,null,null,null);s.default=e.exports}}]);