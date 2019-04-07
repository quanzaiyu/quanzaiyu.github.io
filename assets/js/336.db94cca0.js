(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{584:function(t,a,e){"use strict";e.r(a);var r=e(1),n=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"接口-其他增强型接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口-其他增强型接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口: 其他增强型接口")]),t._v(" "),e("h2",{attrs:{id:"accessibilityinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessibilityinfo","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/accessibilityinfo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AccessibilityInfo"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("有时候我们希望知道用户的设备是否正在运行读屏应用。AccessibilityInfo正是用于此目的。你可以用它来查询读屏应用的当前状态，并且可以监听其状态变化。")]),t._v(" "),e("h2",{attrs:{id:"cameraroll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cameraroll","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/cameraroll.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CameraRoll"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("CameraRoll")]),t._v("模块提供了访问本地相册的功能。在 iOS 上使用这个模块之前，你需要先链接"),e("code",[t._v("RCTCameraRoll")]),t._v("库，具体做法请参考"),e("a",{attrs:{href:"https://reactnative.cn/docs/linking-libraries-ios",target:"_blank",rel:"noopener noreferrer"}},[t._v("链接原生库"),e("OutboundLink")],1),t._v("文档。")]),t._v(" "),e("p",[t._v("本模块只提供了基本的访问图片的功能，并没有提供相册界面。对于多数开发者来说，可能第三方的"),e("a",{attrs:{href:"https://github.com/ivpusic/react-native-image-crop-picker",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-image-crop-picker"),e("OutboundLink")],1),t._v("的功能更为完整易用（可多选、压缩、裁剪等）。")]),t._v(" "),e("p",[t._v("从 iOS 10 开始，访问相册需要用户授权。你需要在"),e("code",[t._v("Info.plist")]),t._v("中添加一条名为"),e("code",[t._v("NSPhotoLibraryUsageDescription")]),t._v("的键，然后在其值中填写向用户请求权限的具体描述。编辑完成后这个键在 Xcode 中实际会显示为"),e("code",[t._v("Privacy - Photo Library Usage Description")]),t._v("。")]),t._v(" "),e("p",[t._v("从 iOS 11 开始，如果需要保存图片，则需要额外申请用户授权。你需要在"),e("code",[t._v("Info.plist")]),t._v("中添加一条名为"),e("code",[t._v("NSPhotoLibraryAddUsageDescription")]),t._v("的键，然后在其值中填写向用户请求权限的具体描述。编辑完成后这个键在 Xcode 中实际会显示为"),e("code",[t._v("Privacy - Photo Library Additions Usage Description")]),t._v("。而名为"),e("code",[t._v("NSPhotoLibraryUsageDescription")]),t._v("的键此时仅控制相册的读取。具体说明请翻阅"),e("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),e("OutboundLink")],1),t._v("搜索相关键值。")]),t._v(" "),e("h2",{attrs:{id:"clipboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clipboard","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/clipboard.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clipboard"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Clipboard组件可以在 iOS 和 Android 的剪贴板中读写内容。")]),t._v(" "),e("h2",{attrs:{id:"keyboardavoidingview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyboardavoidingview","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/keyboardavoidingview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("KeyboardAvoidingView"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("本组件用于解决一个常见的尴尬问题：手机上弹出的键盘常常会挡住当前的视图。本组件可以自动根据键盘的位置，调整自身的 position 或底部的 padding，以避免被遮挡。")]),t._v(" "),e("div",{staticClass:"language-jsx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-jsx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyboardAvoidingView")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[e("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("behavior")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("padding"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ... 在这里放置需要根据键盘调整位置的组件 ...\n")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("KeyboardAvoidingView")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("imgLink",{attrs:{src:"date/20190221/001.gif"}}),t._v(" "),e("h2",{attrs:{id:"linking"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linking","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://reactnative.cn/docs/linking.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linking"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("提供了一个通用的接口来调起其他应用或被其他应用调起。")])],1)},[],!1,null,null,null);a.default=n.exports}}]);