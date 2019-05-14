(window.webpackJsonp=window.webpackJsonp||[]).push([[469],{674:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"rn第三方库-视频播放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rn第三方库-视频播放","aria-hidden":"true"}},[t._v("#")]),t._v(" RN第三方库 - 视频播放")]),t._v(" "),s("h2",{attrs:{id:"react-native-video"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-native-video","aria-hidden":"true"}},[t._v("#")]),t._v(" react-native-video")]),t._v(" "),s("p",[t._v("使用 "),s("a",{attrs:{href:"https://github.com/react-native-community/react-native-video",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-video"),s("OutboundLink")],1),t._v(" 像操作 H5 的 video标签 一样操作 RN 的视频, 不过更强大。")]),t._v(" "),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("对版本的要求 (重要)")]),t._v(" "),s("ol",[s("li",[t._v("Version 4.x (ExoPlayer 2.9.0)")])]),t._v(" "),s("ul",[s("li",[t._v("react-native >= 0.57.0 (默认 Gradle 3 & SDK 27)")]),t._v(" "),s("li",[t._v("Android target SDK 26+")]),t._v(" "),s("li",[t._v("Gradle 3 plugin")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Version 3.x")])]),t._v(" "),s("ul",[s("li",[t._v("react-native >= 0.40.0")])]),t._v(" "),s("p",[t._v("If you need to support an older React Native version, you should use react-native-video 3.2.1.")]),t._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" react-native-video\n$ react-native "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" react-native-video\n")])])]),s("p",[t._v("也可手动配置:")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("android/settings.gradle")]),t._v(" 中:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 使用 ExoPlayer (新)\ninclude ':react-native-video'\nproject(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android-exoplayer')\n\n// 使用 Android MediaPlayer (旧) (经测试, 使用 ExoPlayer 有问题)\ninclude ':react-native-video'\nproject(':react-native-video').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-video/android')\n")])])]),s("p",[t._v("在 "),s("code",[t._v("android/app/build.gradle")]),t._v(" 中")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("dependencies {\n  implementation project(':react-native-video')\n}\n")])])]),s("p",[t._v("在 "),s("code",[t._v("MainActivity.java")]),t._v(" (react-native < 0.29) 或 "),s("code",[t._v("MainApplication.java")]),t._v(" (react-native >= 0.29) 中:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("brentvatne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("react")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactVideoPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getPackages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainReactPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReactVideoPackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Component "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" StyleSheet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" View "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Video "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react-native-video"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" justifyContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'space-evenly'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" alignItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" marginVertical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                <Video source=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://xxx.com/xxx.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("   // Can be a URL or a local file.\n                    controls=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                    style=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("backgroundVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                    ref=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ref\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                    resizeMode=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"stretch"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n                />\n            ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" styles "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" StyleSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    backgroundVideo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'absolute'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"配置属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置属性")]),t._v(" "),s("ul",[s("li",[t._v("controls 是否显示控制条")]),t._v(" "),s("li",[t._v("source 播放源, 可为本地地址或网络地址 "),s("code",[t._v("{uri: ''}")]),t._v(", 详见: "),s("a",{attrs:{href:"https://github.com/react-native-community/react-native-video#source",target:"_blank",rel:"noopener noreferrer"}},[t._v("source"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("repeat 是否重复播放, 默认 false")]),t._v(" "),s("li",[t._v("resizeMode 拉伸模式\n"),s("ul",[s("li",[t._v('"none" (default) - 不拉伸')]),t._v(" "),s("li",[t._v('"contain"')]),t._v(" "),s("li",[t._v('"cover"')]),t._v(" "),s("li",[t._v('"stretch"')])])]),t._v(" "),s("li",[t._v("rate 播放速度\n"),s("ul",[s("li",[t._v("0.0 - 暂停")]),t._v(" "),s("li",[t._v("1.0 (default) - 正常速度")]),t._v(" "),s("li",[t._v("0.0~1.0 - 慢速播放")]),t._v(" "),s("li",[t._v(">1.0 - 加速播放")])])]),t._v(" "),s("li",[t._v("volume 音量大小 (0.0~1.0)\n"),s("ul",[s("li",[t._v("0.0 - 静音")]),t._v(" "),s("li",[t._v("1.0 (default) - 全音量")])])]),t._v(" "),s("li",[t._v("muted 是否静音\n"),s("ul",[s("li",[t._v("false (default)")]),t._v(" "),s("li",[t._v("true")])])]),t._v(" "),s("li",[t._v("paused 是否暂停\n"),s("ul",[s("li",[t._v("false (default)")]),t._v(" "),s("li",[t._v("true")])])]),t._v(" "),s("li",[t._v("audioOnly 仅仅播放声音, 必须设置 poster 属性才会生效\n"),s("ul",[s("li",[t._v("false")]),t._v(" "),s("li",[t._v("true")])])]),t._v(" "),s("li",[t._v("progressUpdateInterval "),s("code",[t._v("onProgress")]),t._v(" 事件触发的频率, 单位毫秒, 默认 250.0")]),t._v(" "),s("li",[t._v("poster 视频加载时显示的图像")]),t._v(" "),s("li",[t._v("posterResizeMode 加载时图像拉伸效果\n"),s("ul",[s("li",[t._v('"contain"')]),t._v(" "),s("li",[t._v('"center"')]),t._v(" "),s("li",[t._v('"cover"')]),t._v(" "),s("li",[t._v('"none"')]),t._v(" "),s("li",[t._v('"repeat"')]),t._v(" "),s("li",[t._v('"stretch"')])])]),t._v(" "),s("li",[t._v("playInBackground 程序在后台运行时是否继续播放\n"),s("ul",[s("li",[t._v("false")]),t._v(" "),s("li",[t._v("true")])])])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("headers 设置请求头, 比如:")])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[t._v("source"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  uri"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.example.com/video.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Authorization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bearer some-token-value'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Custom-Header'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'some value'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"事件属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件属性")]),t._v(" "),s("ul",[s("li",[t._v("onLoadStart(payload) 视频开始加载时调用\n"),s("ul",[s("li",[t._v("payload.isNetwork")]),t._v(" "),s("li",[t._v("payload.type")]),t._v(" "),s("li",[t._v("payload.uri")])])]),t._v(" "),s("li",[t._v("onLoad(payload) 视频初始化完毕准备进行播放时调用\n"),s("ul",[s("li",[t._v("payload.currentPosition 当前位置")]),t._v(" "),s("li",[t._v("payload.duration 持续时长")]),t._v(" "),s("li",[t._v("payload.naturalSize 视频尺寸 "),s("code",[t._v("{width, height, orientation}")])])])]),t._v(" "),s("li",[t._v("onProgress(payload) 播放时调用, 调用频率为 progressUpdateInterval\n"),s("ul",[s("li",[t._v("payload.currentTime\t当前位置")]),t._v(" "),s("li",[t._v("payload.playableDuration 已加载时长")]),t._v(" "),s("li",[t._v("payload.seekableDuration 总时长")])])]),t._v(" "),s("li",[t._v("onSeek(payload) 全部视频加载完毕时调用\n"),s("ul",[s("li",[t._v("payload.currentTime\t当前播放时长")]),t._v(" "),s("li",[t._v("payload.seekTime 总时长")])])]),t._v(" "),s("li",[t._v("onEnd 视频播放完成调用")])]),t._v(" "),s("h3",{attrs:{id:"实例方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例方法")]),t._v(" "),s("p",[t._v("调用实例方法需要通过指定 ref 调用。")]),t._v(" "),s("ul",[s("li",[t._v("seek(seconds) 跳转到指定位置")]),t._v(" "),s("li",[t._v("seek(seconds, tolerance)")]),t._v(" "),s("li",[t._v("save() 将视频保存到相册")])]),t._v(" "),s("h2",{attrs:{id:"其他视频库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他视频库","aria-hidden":"true"}},[t._v("#")]),t._v(" 其他视频库")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/itsnubix/react-native-video-controls",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-video-controls"),s("OutboundLink")],1),t._v(" 是基于 react-native-video 实现的视频播放器, 包含一些基本控制条控件")])]),t._v(" "),s("imgLink",{attrs:{src:"date/20190222/017.gif"}}),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/cornedor/react-native-video-player",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-video-player"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/ldn0x7dc/react-native-media-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-media-kit"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/shahen94/react-native-video-processing",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-video-processing"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=e.exports}}]);