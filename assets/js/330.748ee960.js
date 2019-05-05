(window.webpackJsonp=window.webpackJsonp||[]).push([[330],{580:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"导航-底部导航"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#导航-底部导航","aria-hidden":"true"}},[t._v("#")]),t._v(" 导航: 底部导航")]),t._v(" "),s("p",[t._v("这是一个创建底部导航的导航器")]),t._v(" "),s("h2",{attrs:{id:"添加图标库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加图标库","aria-hidden":"true"}},[t._v("#")]),t._v(" 添加图标库")]),t._v(" "),s("p",[t._v("由于底部导航通常会有图标, 我们可以下载一个"),s("a",{attrs:{href:"https://github.com/oblador/react-native-vector-icons",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-native-vector-icons"),s("OutboundLink")],1),t._v("图标库:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" react-native-vector-icons\n$ react-native "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" react-native-vector-icons\n")])])]),s("p",[t._v("针对于 Android, 还需要一些额外的配置")]),t._v(" "),s("p",[s("code",[t._v("android/settings.gradle")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("include ':react-native-vector-icons'\nproject(':react-native-vector-icons').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-vector-icons/android')\n")])])]),s("p",[s("code",[t._v("android/app/build.gradle")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("project.ext.vectoricons = [\n    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // 需要拷贝的字体文件, 非必须配置, 可手动拷贝\n]\napply from: \"../../node_modules/react-native-vector-icons/fonts.gradle\"\n\ndependencies {\n    implementation project(':react-native-vector-icons')\n    compile project(':react-native-vector-icons')\n}\n")])])]),s("p",[t._v("如果不配置 "),s("code",[t._v("project.ext.vectoricons")]),t._v(" 节点, 执行 link 则会自动将所有字体拷贝到 "),s("code",[t._v("android/app/src/main/assets/fonts")]),t._v(", 配置的话, 只拷贝指定的字体")]),t._v(" "),s("p",[t._v("如果没有自动拷贝成功, 可以手动将 "),s("code",[t._v("node_modules/react-native-vector-icons/Fonts")]),t._v(" 下的字体 (ttf) 拷贝到 "),s("code",[t._v("android/app/src/main/assets/fonts")])]),t._v(" "),s("p",[t._v("react-native-vector-icons 关于 Android 的配置, 详见 "),s("a",{attrs:{href:"https://github.com/oblador/react-native-vector-icons#android",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/oblador/react-native-vector-icons#android"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"创建-tabbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-tabbar","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 tabBar")]),t._v(" "),s("p",[s("code",[t._v("createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig)")])]),t._v(" "),s("ul",[s("li",[t._v("RouteConfigs(必选): 路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么。")]),t._v(" "),s("li",[t._v("BottomTabNavigatorConfig(可选): 配置导航器的路由(如: 默认首屏，navigationOptions，paths等)样式(如，转场模式mode、头部模式等)。")])]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createBottomTabNavigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-navigation'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ionicons "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-native-vector-icons/Ionicons'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AppBottomTabNavigator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBottomTabNavigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Page1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'最热'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("tabBarIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" focused"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ionicons")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios-home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'趋势'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("tabBarIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" focused"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ionicons")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios-people'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'收藏'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("tabBarIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" focused"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ionicons")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios-chatboxes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我的'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("tabBarIcon")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" focused"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ionicons")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios-aperture'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tabBarOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    activeTintColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ios'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#e91e63'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#f00'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AppStackNavigator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStackNavigator")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  HomePage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HomePage\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AppBottomTabNavigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AppBottomTabNavigator'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  initialRouteName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HomePage'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("imgLink",{attrs:{src:"date/20190219/003.png"}}),t._v(" "),s("h2",{attrs:{id:"routeconfigs-navigationoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routeconfigs-navigationoptions","aria-hidden":"true"}},[t._v("#")]),t._v(" RouteConfigs.navigationOptions")]),t._v(" "),s("p",[t._v("createBottomTabNavigator 支持如下屏幕导航选项")]),t._v(" "),s("ul",[s("li",[t._v("title: 可以用作headerTitle和tabBarLabel的备选的通用标题。")]),t._v(" "),s("li",[t._v("tabBarVisible: 显示或隐藏TabBar，默认显示；")]),t._v(" "),s("li",[t._v("tabBarIcon: 设置TabBar的图标；")]),t._v(" "),s("li",[t._v("tabBarLabel: 设置TabBar的标签；")]),t._v(" "),s("li",[t._v("tabBarOnPress: Tab被点击的回调函数，它的参数是一保函一下变量的对象:\n"),s("ul",[s("li",[t._v("navigation: navigation prop ；")]),t._v(" "),s("li",[t._v("defaultHandler: tab按下的默认处理程序；")])])]),t._v(" "),s("li",[t._v("tabBarButtonComponent: React组件，它包装图标和标签并实现onPress。 默认情况下是TouchableWithoutFeedback的一个封装，使其其表现与其它可点击组件相同，tabBarButtonComponent: TouchableOpacity 将使用 TouchableOpacity 来替代；")]),t._v(" "),s("li",[t._v("tabBarAccessibilityLabel: 选项卡按钮的辅助功能标签。 当用户点击标签时，屏幕阅读器会读取这些信息。 如果您没有选项卡的标签，建议设置此项；")]),t._v(" "),s("li",[t._v("tabBarTestID: 用于在测试中找到该选项卡按钮的 ID；")])]),t._v(" "),s("h2",{attrs:{id:"bottomtabnavigatorconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bottomtabnavigatorconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" BottomTabNavigatorConfig")]),t._v(" "),s("ul",[s("li",[t._v("tabBarComponent: 指定createBottomTabNavigator的TabBar组件，如果不指定在iOS上默认使用"),s("code",[t._v("TabBarBottom")]),t._v("，在Android平台上默认使用"),s("code",[t._v("TabBarTop")]),t._v("。\n"),s("ul",[s("li",[s("code",[t._v("TabBarBottom")]),t._v("与"),s("code",[t._v("TabBarTop")]),t._v("都是"),s("code",[t._v("react-navigation")]),t._v("所支持的组件，要自定义TabBar可以重写这两个组件也可以根据需要自己实现一个；")])])]),t._v(" "),s("li",[t._v("tabBarOptions: 配置TaBar下文会详细讲解；")]),t._v(" "),s("li",[t._v("initialRouteName : 默认页面组件，createBottomTabNavigator显示的第一个页面；")]),t._v(" "),s("li",[t._v("order: 定义tab顺序的routeNames数组。")]),t._v(" "),s("li",[t._v("paths: 提供routeName到path config的映射，它覆盖routeConfigs中设置的路径。")]),t._v(" "),s("li",[t._v("backBehavior: 后退按钮是否会导致标签切换到初始tab？ 如果是，则设切换到初始tab，否则什么也不做。 默认为切换到初始tab。")])]),t._v(" "),s("h3",{attrs:{id:"tabbaroptions（tab配置）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tabbaroptions（tab配置）","aria-hidden":"true"}},[t._v("#")]),t._v(" tabBarOptions（tab配置）")]),t._v(" "),s("ul",[s("li",[t._v("activeTintColor: 设置TabBar选中状态下的标签和图标的颜色；")]),t._v(" "),s("li",[t._v("inactiveTintColor: 设置TabBar非选中状态下的标签和图标的颜色；")]),t._v(" "),s("li",[t._v("showIcon: 是否展示图标，默认是false；")]),t._v(" "),s("li",[t._v("showLabel: 是否展示标签，默认是true；")]),t._v(" "),s("li",[t._v("upperCaseLabel - 是否使标签大写，默认为true。")]),t._v(" "),s("li",[t._v("tabStyle: 设置单个tab的样式；")]),t._v(" "),s("li",[t._v("indicatorStyle: 设置 indicator(tab下面的那条线)的样式；")]),t._v(" "),s("li",[t._v("labelStyle: 设置TabBar标签的样式；")]),t._v(" "),s("li",[t._v("iconStyle: 设置图标的样式；")]),t._v(" "),s("li",[t._v("style: 设置整个TabBar的样式；")]),t._v(" "),s("li",[t._v("allowFontScaling: 设置TabBar标签是否支持缩放，默认支持；")]),t._v(" "),s("li",[t._v("safeAreaInset: 覆盖的forceInset prop，默认是{ bottom: 'always', top: 'never' }，可选值: top | bottom | left | right ('always' | 'never')；")])])],1)},[],!1,null,null,null);a.default=e.exports}}]);