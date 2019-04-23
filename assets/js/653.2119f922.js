(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{831:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微信小程序登录及授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序登录及授权","aria-hidden":"true"}},[t._v("#")]),t._v(" 微信小程序登录及授权")]),t._v(" "),a("h2",{attrs:{id:"授权登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权登录","aria-hidden":"true"}},[t._v("#")]),t._v(" 授权登录")]),t._v(" "),a("p",[t._v("小程序可以直接登录，获取到code, 再通过后端接口换取用户openid及unionid。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用code换取openid")]),t._v("\n      wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://test.com/login'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'登录失败！'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("errMsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"获取用户信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取用户信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取用户信息")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("wx.getUserInfo")]),t._v(" 可获取用户信息：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 必须是在用户已经授权的情况下调用")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" userInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" nickName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nickName\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" avatarUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("avatarUrl\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//性别 0：未知、1：男、2：女")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" province "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("province\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" city "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("city\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" country "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userInfo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("country\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("返回的数据包括：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("userInfo")]),t._v(" "),a("Badge",{attrs:{text:"UserInfo",type:"tip"}}),t._v(" 用户信息对象，不包含 openid 等敏感信息")],1),t._v(" "),a("li",[a("strong",[t._v("rawData")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 不包括敏感信息的原始数据字符串，用于计算签名")],1),t._v(" "),a("li",[a("strong",[t._v("signature")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息，详见 用户数据的签名验证和加解密")],1),t._v(" "),a("li",[a("strong",[t._v("encryptedData")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 包括敏感数据在内的完整用户信息的加密数据，详见 用户数据的签名验证和加解密")],1),t._v(" "),a("li",[a("strong",[t._v("iv")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 加密算法的初始向量，详见 用户数据的签名验证和加解密")],1)]),t._v(" "),a("p",[t._v("其中 userInfo 包括以下信息：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  avatarUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AVATARURL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  city"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CITY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  country"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COUNTRY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  gender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GENDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 男 2 女")]),t._v("\n  language"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LANGUAGE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  nickName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NICKNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  province"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PROVINCE"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中 encryptedData 解密后包括以下信息：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OPENID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nickName"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NICKNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gender"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GENDER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"city"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CITY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"province"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PROVINCE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"country"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COUNTRY"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"avatarUrl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AVATARURL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unionId"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNIONID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"watermark"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APPID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIMESTAMP")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.getUserInfo"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("加密数据解密算法"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("以前第一次进入小程序，使用 "),a("code",[t._v("wx.getUserInfo")]),t._v(" 可以直接跳出用户登录弹框，最近微信对其核心API进行了修改，不允许自动弹出授权登录框，必须用户点击按钮手动触发。")]),t._v(" "),a("p",[t._v("如果第一次用户已经同意获取用户信息，则之后进入小程序 "),a("code",[t._v("wx.getUserInfo")]),t._v(" 都会默认成功获取用户信息。如果第一次直接使用此接口或者之前没有同意，则默认返回失败。")]),t._v(" "),a("p",[t._v("详见文章："),a("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/0000a26e1aca6012e896a517556c01",target:"_blank",rel:"noopener noreferrer"}},[t._v("小程序与小游戏获取用户信息接口调整，请开发者注意升级。"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("解决方案1")])]),t._v(" "),a("p",[t._v("使用 button 组件，并将 open-type 指定为 getUserInfo 类型，获取用户基本信息。")]),t._v(" "),a("div",{staticClass:"language-pug extra-class"},[a("pre",{pre:!0,attrs:{class:"language-pug"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[t._v("button"),a("span",{pre:!0,attrs:{class:"token attributes"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getUserInfo"')]),t._v(" lang"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh_CN"')]),t._v(" bindgetuserinfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"onGotUserInfo"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("获取用户信息")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onGotUserInfo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在 button 中使用 bindgetuserinfo，以绑定用户信息，用户必须手动点击才能触发。")]),t._v(" "),a("p",[t._v("详见文章："),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/button.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("button"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("解决方案2")])]),t._v(" "),a("p",[t._v("如果只是展示用户头像昵称，可以使用 open-data 组件，直接获取到用户基本信息。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("groupName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("open-gid")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxxxxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userAvatarUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userNickName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userCity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userProvince"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userCountry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("open-data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userLanguage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("open-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v('::: tip 提示\ntype="groupName"时，open-gid 指定群id，用只有当前用户在此群内才能拉取到群名称。')]),t._v(" "),a("p",[t._v("详见文章："),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/share/wx.getShareInfo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.getShareInfo"),a("OutboundLink")],1),t._v("\n:::")]),t._v(" "),a("h2",{attrs:{id:"获取-openid-和-unionid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-openid-和-unionid","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取 openid 和 unionid")]),t._v(" "),a("p",[a("strong",[t._v("方式一")])]),t._v(" "),a("p",[t._v("使用 code2Session 接口可以获取 openid 和 unionid")]),t._v(" "),a("p",[t._v("请求地址：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code\n")])])]),a("p",[t._v("其中 js_code 就是 wx.login 登录后拿到的 code。")]),t._v(" "),a("p",[t._v("成功获取数据的返回：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("openid")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 用户唯一标识")],1),t._v(" "),a("li",[a("strong",[t._v("session_key")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 会话密钥")],1),t._v(" "),a("li",[a("strong",[t._v("unionid")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回")],1)]),t._v(" "),a("p",[t._v("失败的返回：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("errcode")]),t._v(" "),a("Badge",{attrs:{text:"number",type:"tip"}}),t._v(" 错误码")],1),t._v(" "),a("li",[a("strong",[t._v("errMsg")]),t._v(" "),a("Badge",{attrs:{text:"string",type:"tip"}}),t._v(" 错误信息")],1)]),t._v(" "),a("p",[a("strong",[t._v("方式二")])]),t._v(" "),a("p",[t._v("获取用户信息接口（getUserInfo）拿到的 encryptedData 字段，通过解密获取 openid 和 unionid")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("UnionID 机制说明"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/code2Session.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("code2Session"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"获取授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取授权","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取授权")]),t._v(" "),a("p",[t._v("开发者可以使用 "),a("code",[t._v("wx.getSetting")]),t._v(" 获取用户当前的授权状态。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res.authSetting = {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   "scope.userInfo": true,')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   "scope.userLocation": true')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("wx.authorize")]),t._v(" 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope')]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authSetting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scope.record'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scope.record'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问")]),t._v("\n          wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("参考:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("授权"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.getSetting"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.authorize"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);