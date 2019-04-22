(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{705:function(t,s,a){"use strict";a.r(s);var e=a(1),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"获取微信openid与用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取微信openid与用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取微信Openid与用户信息")]),t._v(" "),a("h2",{attrs:{id:"配置基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置基本信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置基本信息")]),t._v(" "),a("p",[t._v("首先, 需要到微信公众平台后台配置一些基本信息")]),t._v(" "),a("ol",[a("li",[t._v("获取appid和appSecret")])]),t._v(" "),a("p",[t._v("开发 > 基本配置 > 公众号开发信息")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190404/001.png"}}),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("绑定开发者")])]),t._v(" "),a("p",[t._v("开发 > 开发者工具 > Web开发者工具")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190404/002.png"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("设置网页授权域名")])]),t._v(" "),a("p",[t._v("设置 > 公众号设置 > 功能设置 > 网页授权域名")]),t._v(" "),a("imgLink",{attrs:{src:"date/20190404/003.png"}}),t._v(" "),a("p",[t._v("将验证文件 (形似 "),a("code",[t._v("MP_verify_NmGVB1zUykrDOUnL.txt")]),t._v(") 下载到服务器, 放于web站点根目录, 提示验证通过即成功")]),t._v(" "),a("h2",{attrs:{id:"获取openid流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取openid流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取openid流程")]),t._v(" "),a("h3",{attrs:{id:"获取-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-code","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取 code")]),t._v(" "),a("p",[t._v("在前台页面直接 location.href 到下面链接获取code")]),t._v(" "),a("p",[t._v("调用格式:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect\n")])])]),a("p",[t._v("::: warning 注意\n由于授权操作安全等级较高，所以在发起授权请求时，微信会对授权链接做正则强匹配校验，如果链接的参数顺序不对，授权页面将无法正常访问\n:::")]),t._v(" "),a("p",[t._v("scope为snsapi_base, 只能获取openid, 不能获取用户信息, 若获取用户信息会返回错误码48001")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520c15f417810387&redirect_uri=https%3A%2F%2Fchong.qq.com%2Fphp%2Findex.php%3Fd%3D%26c%3DwxAdapter%26m%3DmobileDeal%26showwxpaytitle%3D1%26vb2ctag%3D4_2030_5_1194_60&response_type=code&scope=snsapi_base&state=123#wechat_redirect\n")])])]),a("p",[t._v("scope为snsapi_userinfo, 可以获取openid, 也能获取用户信息, 第一次调用时需要用户同意授权")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf0e81c3bee622d60&redirect_uri=http%3A%2F%2Fnba.bluewebgame.com%2Foauth_response.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect\n")])])]),a("p",[t._v("返回地址示例:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://test.com?code=xxx&state=123\n")])])]),a("h3",{attrs:{id:"通过code换取网页授权access-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过code换取网页授权access-token","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过code换取网页授权access_token")]),t._v(" "),a("p",[t._v("后端调用, 请求地址:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code\n")])])]),a("p",[t._v("正确时返回的JSON数据包如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ACCESS_TOKEN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REFRESH_TOKEN"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"openid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPENID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SCOPE"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"拉取用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 拉取用户信息")]),t._v(" "),a("p",[t._v("注意: 需scope为snsapi_userinfo才能正常获取")]),t._v(" "),a("p",[t._v("后端调用, 请求地址:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN\n")])])]),a("p",[t._v("正确时返回的JSON数据包如下：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"openid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPENID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('" nickname"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NICKNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"province"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PROVINCE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"city"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CITY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"country"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COUNTRY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headimgurl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"privilege"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRIVILEGE1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PRIVILEGE2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unionid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"o6_bmasdasdsad6_2sgVt7hMZOPfL"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信公众平台: 微信网页授权"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信公众平台: 微信web开发者工具"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/qq_24800377/article/details/53437040",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取用户openid - CSDN"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=r.exports}}]);