(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{782:function(a,t,e){"use strict";e.r(t);var s=e(1),n=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"uni-app-常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uni-app-常见问题","aria-hidden":"true"}},[a._v("#")]),a._v(" uni-app 常见问题")]),a._v(" "),e("h2",{attrs:{id:"数组更新视图不刷新问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组更新视图不刷新问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组更新视图不刷新问题")]),a._v(" "),e("p",[a._v("在uni-app中使用数组更新相关的操作, 视图却不更新, 可以通过同时更新一个辅助变量进行更改:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("<template lang='pug'>\nview\n  view {{arr}}\n  button(@click='click') click me\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      arr: [1,2,3],\n      status: false\n    }\n  },\n  methods: {\n    click () {\n      this.status = !this.status\n      this.arr.push(4)\n    }\n  }\n}\n<\/script>\n")])])]),e("p",[a._v("这个uni-app的bug很神叨, 这个解决方案也是偶然摸索中得出, 希望官方在后续更新中解决。")]),a._v(" "),e("h2",{attrs:{id:"在uni-app中添加模板支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在uni-app中添加模板支持","aria-hidden":"true"}},[a._v("#")]),a._v(" 在uni-app中添加模板支持")]),a._v(" "),e("p",[a._v("用惯了 pug 和 stylus 的编码形式，就对 html 和 css 心生嫌弃。在 HBuilderX 中添加这些语言的支持是很容易的。")]),a._v(" "),e("p",[a._v("选择 菜单栏 -> 插件 -> 插件安装")]),a._v(" "),e("imgLink",{attrs:{src:"date/20181015/001.png/small"}}),a._v(" "),e("p",[a._v("然后到 HBuilderX 安装目录下的 plugins 目录下安装相应插件，比如 pug 和 stylus：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("npm i pug pug-loader stylus stylus-loader --save\n")])])]),e("p",[a._v("即可在代码区写相关的代码了。")]),a._v(" "),e("h2",{attrs:{id:"unable-to-locate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unable-to-locate","aria-hidden":"true"}},[a._v("#")]),a._v(" unable to locate ...")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[copy-webpack-plugin] WARNING - unable to locate 'D:\\Datas\\uni-app\\static'\n")])])]),e("p",[a._v("早上重装了系统，从 Coding 拉下项目来，运行时报了那么一个警告，很是郁闷，检查了半天，发现根目录下的 static 文件夹不见了，由于 git 提交时忽略了空目录，所以拉下来才报这个错。")]),a._v(" "),e("p",[a._v("解决方案：在项目根下创建 static 文件夹即可。")]),a._v(" "),e("h2",{attrs:{id:"exceed-the-max-of-500kb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exceed-the-max-of-500kb","aria-hidden":"true"}},[a._v("#")]),a._v(' ... exceed the max of "500KB"')]),a._v(" "),e("imgLink",{attrs:{src:"date/20181018/006.png"}}),a._v(" "),e("p",[a._v("npm 装上 lodash 之后，引入后会报这个错误，说是包太大了。")]),a._v(" "),e("p",[a._v("新版 lodash 是可以分包的，其实我只是想使用 throttle 而已，于是就重新装了个 lodash.throttle 即可。")]),a._v(" "),e("p",[a._v("另外，经测试很多 npm包是不能使用的，比如 JQuery、axios 等等。")])],1)},[],!1,null,null,null);t.default=n.exports}}]);