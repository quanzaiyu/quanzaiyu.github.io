(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{602:function(t,a,n){"use strict";n.r(a);var s=n(1),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"导航-顶部导航"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导航-顶部导航","aria-hidden":"true"}},[t._v("#")]),t._v(" 导航: 顶部导航")]),t._v(" "),n("p",[t._v("这是创建顶部导航的导航器")]),t._v(" "),n("h2",{attrs:{id:"创建-topbar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-topbar","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 topBar")]),t._v(" "),n("p",[n("code",[t._v("createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)")])]),t._v(" "),n("ul",[n("li",[t._v("RouteConfigs(必选): 路由配置对象是从路由名称到路由配置的映射，告诉导航器该路由呈现什么。")]),t._v(" "),n("li",[t._v("TabNavigatorConfig(可选): 配置导航器的路由(如: 默认首屏，navigationOptions，paths等)样式(如，转场模式mode、头部模式等)。")])]),t._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createMaterialTopTabNavigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react-navigation'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AppTopTabNavigator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMaterialTopTabNavigator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Page1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'All'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'React'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'React Native'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Devio'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Devio'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Page6"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Page4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      tabLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Devio'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tabBarOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    upperCaseLabel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签是否大写, 默认 true")]),t._v("\n      scrollEnabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否支持 选项卡滚动, 默认 false")]),t._v("\n      style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      backgroundColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#678'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TabBar 样式")]),t._v("\n    tabStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      minWidth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单个 tab 样式")]),t._v("\n    indicatorStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        backgroundColor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签指示器的样式")]),t._v("\n    labelStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fontSize"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        marginTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        marginBottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文字的样式")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" AppStackNavigator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStackNavigator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  HomePage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HomePage\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Top"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    screen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AppTopTabNavigator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    navigationOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AppTopTabNavigator'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  initialRouteName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HomePage'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("imgLink",{attrs:{src:"date/20190219/004.png"}}),t._v(" "),n("h2",{attrs:{id:"routeconfigs-navigationoptions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#routeconfigs-navigationoptions","aria-hidden":"true"}},[t._v("#")]),t._v(" RouteConfigs.navigationOptions")]),t._v(" "),n("p",[t._v("createMaterialTopTabNavigator 支持如下屏幕导航选项")]),t._v(" "),n("ul",[n("li",[t._v("title: 可以用作headerTitle和tabBarLabel的备选的通用标题。")]),t._v(" "),n("li",[t._v("swipeEnabled: 是否允许tab之间的滑动切换，默认允许；")]),t._v(" "),n("li",[t._v("tabBarIcon: 设置TabBar的图标；")]),t._v(" "),n("li",[t._v("tabBarLabel: 设置TabBar的标签；")]),t._v(" "),n("li",[t._v("tabBarOnPress: Tab被点击的回调函数，它的参数是一保函一下变量的对象:\n"),n("ul",[n("li",[t._v("navigation: 页面的 navigation props")]),t._v(" "),n("li",[t._v("defaultHandler: tab press 的默认 handler")])])]),t._v(" "),n("li",[t._v("tabBarAccessibilityLabel: 选项卡按钮的辅助功能标签。 当用户点击标签时，屏幕阅读器会读取这些信息。 如果您没有选项卡的标签，建议设置此项；")]),t._v(" "),n("li",[t._v("tabBarTestID: 用于在测试中找到该选项卡按钮的 ID；")])]),t._v(" "),n("h2",{attrs:{id:"tabnavigatorconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tabnavigatorconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" TabNavigatorConfig")]),t._v(" "),n("ul",[n("li",[t._v("tabBarComponent: 指定TabNavigator的TabBar组件；")]),t._v(" "),n("li",[t._v("tabBarPosition: 用于指定TabBar的显示位置，支持’top’ 与 ‘bottom’两种方式；")]),t._v(" "),n("li",[t._v("swipeEnabled : 是否可以左右滑动切换tab；")]),t._v(" "),n("li",[t._v("lazy - 默认值是 false。如果是true，Tab 页只会在被选中或滑动到该页时被渲染。当为 false 时，所有的 Tab 页都将直接被渲染；（可以轻松实现多Tab 页面的懒加载）；")]),t._v(" "),n("li",[t._v("optimizationsEnabled -是否将 Tab 页嵌套在到  中。如果是，一旦该 Tab 页失去焦点，将被移出当前页面, 从而提高内存使用率。")]),t._v(" "),n("li",[t._v("animationEnabled :  切换页面时是否有动画效果。")]),t._v(" "),n("li",[t._v("initialLayout : 包含初始高度和宽度的可选对象可以被传递以防止react-native-tab-view呈现中的一个帧延迟；")]),t._v(" "),n("li",[t._v("tabBarOptions: 配置TaBar下文会详细讲解；")]),t._v(" "),n("li",[t._v("initialRouteName : 默认页面组件，TabNavigator显示的第一个页面；")]),t._v(" "),n("li",[t._v("order: 定义tab顺序的routeNames数组。")]),t._v(" "),n("li",[t._v("paths: 提供routeName到path config的映射，它覆盖routeConfigs中设置的路径。")]),t._v(" "),n("li",[t._v("backBehavior: 后退按钮是否会导致标签切换到初始tab？ 如果是，则设切换到初始tab，否则什么也不做。 默认为切换到初始tab。")])]),t._v(" "),n("h3",{attrs:{id:"tabbaroptions（tab配置）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tabbaroptions（tab配置）","aria-hidden":"true"}},[t._v("#")]),t._v(" tabBarOptions（tab配置）")]),t._v(" "),n("ul",[n("li",[t._v("activeTintColor: 设置TabBar选中状态下的标签和图标的颜色；")]),t._v(" "),n("li",[t._v("inactiveTintColor: 设置TabBar非选中状态下的标签和图标的颜色；")]),t._v(" "),n("li",[t._v("showIcon: 是否展示图标，默认是false；")]),t._v(" "),n("li",[t._v("showLabel: 是否展示标签，默认是true；")]),t._v(" "),n("li",[t._v("upperCaseLabel - 是否使标签大写，默认为true。")]),t._v(" "),n("li",[t._v("tabStyle: 设置单个tab的样式；")]),t._v(" "),n("li",[t._v("indicatorStyle: 设置 indicator(tab下面的那条线)的样式；")]),t._v(" "),n("li",[t._v("labelStyle: 设置TabBar标签的样式；")]),t._v(" "),n("li",[t._v("iconStyle: 设置图标的样式；")]),t._v(" "),n("li",[t._v("style: 设置整个TabBar的样式；")]),t._v(" "),n("li",[t._v("allowFontScaling: 设置TabBar标签是否支持缩放，默认支持；")]),t._v(" "),n("li",[t._v("pressColor -Color for material ripple（仅支持 Android >= 5.0；")]),t._v(" "),n("li",[t._v("pressOpacity -按下标签时的不透明度（支持 iOS 和 Android < 5.0）；")]),t._v(" "),n("li",[t._v("scrollEnabled -是否支持 选项卡滚动")])])],1)},[],!1,null,null,null);a.default=e.exports}}]);