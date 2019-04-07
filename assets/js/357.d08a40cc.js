(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{603:function(a,t,e){"use strict";e.r(t);var r=e(1),n=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航","aria-hidden":"true"}},[a._v("#")]),a._v(" 导航")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://reactnavigation.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("react-nagivation 官网"),e("OutboundLink")],1)]),a._v(" "),e("li",[e("a",{attrs:{href:"https://kmagiera.github.io/react-native-gesture-handler/",target:"_blank",rel:"noopener noreferrer"}},[a._v("react-native-gesture-handler 官网"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("安装react-nagivation")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" react-navigation\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" react-native-gesture-handler\n$ react-native "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("link")]),a._v(" react-native-gesture-handler\n")])])]),e("p",[a._v("如果是 iOS 不需要额外的配置, Android 的话请继续往下。")]),a._v(" "),e("h2",{attrs:{id:"android-环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#android-环境配置","aria-hidden":"true"}},[a._v("#")]),a._v(" Android 环境配置")]),a._v(" "),e("ol",[e("li",[a._v("修改 "),e("code",[a._v("android/settings.gradle")])])]),a._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[a._v("rootProject.name = 'reactNativeTest'\n\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ include ':react-native-gesture-handler'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-gesture-handler/android')")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ include ':react-native-navigation'")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ project(':react-native-navigation').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-navigation/android/app/')")]),a._v("\n\ninclude ':app'\n")])])]),e("p",[a._v("注意, link 后会自动生成 'react-native-gesture-handler' 依赖的语句, 但引入的路径不对, 需要将 "),e("code",[a._v("\\")]),a._v(" 改为 "),e("code",[a._v("/")])]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("修改 "),e("code",[a._v("MainActivity.java")])])]),a._v(" "),e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[a._v("package com.reactnavigation.example;\n\nimport com.facebook.react.ReactActivity;\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ import com.facebook.react.ReactActivityDelegate;")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ import com.facebook.react.ReactRootView;")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;")]),a._v('\n\npublic class MainActivity extends ReactActivity {\n\n  @Override\n  protected String getMainComponentName() {\n    return "Example";\n  }\n\n'),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+  @Override")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+  protected ReactActivityDelegate createReactActivityDelegate() {")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+    return new ReactActivityDelegate(this, getMainComponentName()) {")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+      @Override")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+      protected ReactRootView createRootView() {")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+       return new RNGestureHandlerEnabledRootView(MainActivity.this);")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+      }")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+    };")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[a._v("+  }")]),a._v("\n}\n")])])]),e("p",[a._v("::: danger 踩过的坑\n说实话, 在配置Android的时候遇到一大堆坑, 按照官网上一步一步的配置, 仍然很难成功")]),a._v(" "),e("p",[a._v("如果想尽快开始运行可直接拉取官方的仓库:")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/henrikra/nativeNavigationGestureHandler",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/henrikra/nativeNavigationGestureHandler"),e("OutboundLink")],1),a._v("\n:::")]),a._v(" "),e("h2",{attrs:{id:"navigation-导航器分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#navigation-导航器分类","aria-hidden":"true"}},[a._v("#")]),a._v(" Navigation 导航器分类")]),a._v(" "),e("p",[a._v("Navigation 有以下7种类型的导航器:")]),a._v(" "),e("ul",[e("li",[a._v("createStackNavigator: 类似于普通的Navigator，屏幕上方导航栏；")]),a._v(" "),e("li",[a._v("createTabNavigator: createTabNavigator已弃用，使用createBottomTabNavigator和/或createMaterialTopTabNavigator替代；")]),a._v(" "),e("li",[a._v("createBottomTabNavigator: 相当于iOS里面的TabBarController，屏幕下方的标签栏；")]),a._v(" "),e("li",[a._v("createMaterialTopTabNavigator: 屏幕顶部的材料设计主题标签栏；")]),a._v(" "),e("li",[a._v("createDrawerNavigator: 抽屉效果，侧边滑出；")]),a._v(" "),e("li",[a._v("createSwitchNavigator: SwitchNavigator 的用途是一次只显示一个页面。")])]),a._v(" "),e("p",[a._v("两个和导航关于概念:")]),a._v(" "),e("ul",[e("li",[a._v("Screen navigation prop(屏幕导航属性): 通过navigation可以完成屏幕之间的调度操作，例如打开另一个屏幕；")]),a._v(" "),e("li",[a._v("Screen navigationOptions(屏幕导航选项):  通过navigationOptions可以定制导航器显示屏幕的方式（例如: 头部标题，选项卡标签等）；")])]),a._v(" "),e("h2",{attrs:{id:"导航方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 导航方法")]),a._v(" "),e("p",[a._v("navigation包含以下功能方法:")]),a._v(" "),e("ul",[e("li",[a._v("navigate: 跳转到其他界面；")]),a._v(" "),e("li",[a._v("state: 屏幕的当前state；")]),a._v(" "),e("li",[a._v("setParams: 改变路由的params；")]),a._v(" "),e("li",[a._v("goBack: 关闭当前屏幕；")]),a._v(" "),e("li",[a._v("dispatch: 向路由发送一个action；")]),a._v(" "),e("li",[a._v("addListener: 订阅导航生命周期的更新；")]),a._v(" "),e("li",[a._v("isFocused: true 标识屏幕获取了焦点；")]),a._v(" "),e("li",[a._v("getParam: 获取具有回退的特定参数；")]),a._v(" "),e("li",[a._v("dangerouslyGetParent: 返回父导航器；")])]),a._v(" "),e("h3",{attrs:{id:"stacknavigator的navigation的额外功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stacknavigator的navigation的额外功能","aria-hidden":"true"}},[a._v("#")]),a._v(" StackNavigator的navigation的额外功能:")]),a._v(" "),e("p",[a._v("当且仅当当前 navigator 是 stack navigator 时，"),e("code",[a._v("this.props.navigation")]),a._v(" 上有一些附加功能。 这些函数是 navigate 和 goBack 的替代方法， 你可以使用任何你喜欢的方法。 这些功能是:")]),a._v(" "),e("ul",[e("li",[a._v("push - 导航到堆栈中的一个新的路由")]),a._v(" "),e("li",[a._v("pop - 返回堆栈中的上一个页面")]),a._v(" "),e("li",[a._v("popToTop - 跳转到堆栈中最顶层的页面")]),a._v(" "),e("li",[a._v("replace - 用新路由替换当前路由")]),a._v(" "),e("li",[a._v("reset - 擦除导航器状态并将其替换为多个操作的结果")]),a._v(" "),e("li",[a._v("dismiss - 关闭当前栈")])]),a._v(" "),e("h3",{attrs:{id:"使用navigate进行界面之间的跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用navigate进行界面之间的跳转","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用navigate进行界面之间的跳转")]),a._v(" "),e("p",[e("code",[a._v("navigation.navigate({routeName, params, action, key})")]),a._v(" 或 "),e("code",[a._v("navigation.navigate(routeName, params, action)")])]),a._v(" "),e("ul",[e("li",[a._v("routeName: 要跳转到的界面的路由名，也就是在导航其中配置的路由名；")]),a._v(" "),e("li",[a._v("params: 要传递给下一个界面的参数；")]),a._v(" "),e("li",[a._v("action: 如果该界面是一个navigator的话，将运行这个sub-action；")]),a._v(" "),e("li",[a._v("key: 要导航到的路由的可选标识符。 如果已存在，将后退到此路由；")])]),a._v(" "),e("h3",{attrs:{id:"使用-state-params"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-state-params","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 state.params")]),a._v(" "),e("p",[a._v("可以通过 "),e("code",[a._v("this.props.state.params")]),a._v(" 来获取通过 "),e("code",[a._v("setParams()")]),a._v("，或 "),e("code",[a._v("navigation.navigate()")]),a._v(" 传递的参数。")]),a._v(" "),e("h3",{attrs:{id:"使用-setparams-改变路由参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-setparams-改变路由参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 setParams 改变路由参数")]),a._v(" "),e("p",[a._v("我们可以借助 "),e("code",[a._v("setParams")]),a._v(" 来改变route params，比如，通过setParams来更新页面顶部的标题，返回按钮等。")]),a._v(" "),e("h2",{attrs:{id:"路由参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 路由参数")]),a._v(" "),e("p",[a._v("无论创建何种导航器, 第一个参数都接收 RouteConfigs 路由配置")]),a._v(" "),e("p",[a._v("RouteConfigs支持三个参数screen、path以及navigationOptions；")]),a._v(" "),e("ul",[e("li",[a._v("screen(必选)：指定一个 React 组件作为屏幕的主要显示内容，当这个组件被createStackNavigator加载时，它会被分配一个navigation prop。")]),a._v(" "),e("li",[a._v("path(可选)：用来设置支持schema跳转时使用，具体使用会在下文的有关Schema章节中讲到；")]),a._v(" "),e("li",[a._v("navigationOptions(可选)：用以配置全局的屏幕导航选项如：title、headerRight、headerLeft等；")])])])},[],!1,null,null,null);t.default=n.exports}}]);