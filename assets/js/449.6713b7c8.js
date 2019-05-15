(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{724:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-mock-js-进行数据模拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-mock-js-进行数据模拟","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 mock.js 进行数据模拟")]),t._v(" "),s("p",[t._v("在开发中, 前端的开发尝尝快于后端, 而接口数据往往跟不上节奏, 这时我们可以拦截ajax请求, 进行数据模拟。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MockJS 官网"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/nuysoft/Mock/wiki/Getting-Started",target:"_blank",rel:"noopener noreferrer"}},[t._v("MockJS - Getting Started"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" mockjs\n")])])]),s("p",[t._v("简单使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 Mock")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Mock "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mockjs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性 list 的值是一个数组，其中含有 1 到 10 个元素")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'list|1-10'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 属性 id 是一个自增数，起始值为 1，每次增 1")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id|+1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"mock-mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-mock","aria-hidden":"true"}},[t._v("#")]),t._v(" Mock.mock()")]),t._v(" "),s("p",[t._v("根据数据模板生成模拟数据。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" rurl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rtype"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",[s("li",[t._v("Mock.mock( template ) 根据数据模板生成模拟数据。")]),t._v(" "),s("li",[t._v("Mock.mock( rurl, template ) 记录数据模板。当拦截到匹配 "),s("code",[t._v("rurl")]),t._v(" 的 Ajax 请求时，将根据数据模板 "),s("code",[t._v("template")]),t._v(" 生成模拟数据，并作为响应数据返回。")]),t._v(" "),s("li",[t._v("Mock.mock( rurl, function( options ) ) 记录用于生成响应数据的函数。当拦截到匹配 "),s("code",[t._v("rurl")]),t._v(" 的 Ajax 请求时，函数 "),s("code",[t._v("function(options)")]),t._v(" 将被执行，并把执行结果作为响应数据返回。")]),t._v(" "),s("li",[t._v("Mock.mock( rurl, rtype, template ) 记录数据模板。当拦截到匹配 "),s("code",[t._v("rurl")]),t._v(" 和 "),s("code",[t._v("rtype")]),t._v(" 的 Ajax 请求时，将根据数据模板 "),s("code",[t._v("template")]),t._v(" 生成模拟数据，并作为响应数据返回。")]),t._v(" "),s("li",[t._v("Mock.mock( rurl, rtype, function( options ) ) 记录用于生成响应数据的函数。当拦截到匹配 "),s("code",[t._v("rurl")]),t._v(" 和 "),s("code",[t._v("rtype")]),t._v(" 的 Ajax 请求时，函数 "),s("code",[t._v("function(options)")]),t._v(" 将被执行，并把执行结果作为响应数据返回。")])]),t._v(" "),s("p",[t._v("参数:")]),t._v(" "),s("ul",[s("li",[t._v("rurl 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则。例如 "),s("code",[t._v("/\\/domain\\/list\\.json/")]),t._v("、"),s("code",[t._v("'/domian/list.json'")]),t._v("。")]),t._v(" "),s("li",[t._v("rtype 表示需要拦截的 Ajax 请求类型。例如 "),s("code",[t._v("GET")]),t._v("、"),s("code",[t._v("POST")]),t._v("、"),s("code",[t._v("PUT")]),t._v("、"),s("code",[t._v("DELETE")]),t._v(" 等。")]),t._v(" "),s("li",[t._v("template 表示数据模板，可以是对象或字符串。例如 "),s("code",[t._v("{ 'data|1-10':[{}] }")]),t._v("、"),s("code",[t._v("'@EMAIL'")]),t._v("。")]),t._v(" "),s("li",[t._v("function(options) 表示用于生成响应数据的函数。")]),t._v(" "),s("li",[t._v("options 指向本次请求的 Ajax 选项集，含有 "),s("code",[t._v("url")]),t._v("、"),s("code",[t._v("type")]),t._v(" 和 "),s("code",[t._v("body")]),t._v(" 三个属性，参见 "),s("a",{attrs:{href:"https://xhr.spec.whatwg.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XMLHttpRequest 规范"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("blockquote",[s("p",[t._v("从 1.0 开始，Mock.js 通过覆盖和模拟原生 XMLHttpRequest 的行为来拦截 Ajax 请求，不再依赖于第三方 Ajax 工具库（例如 jQuery、Zepto 等）。")])]),t._v(" "),s("h2",{attrs:{id:"mock-random"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-random","aria-hidden":"true"}},[t._v("#")]),t._v(" Mock.Random")]),t._v(" "),s("p",[t._v("Mock.Random 是一个工具类，用于生成各种随机数据。")]),t._v(" "),s("p",[t._v("Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 "),s("code",[t._v("@占位符(参数 [, 参数])")]),t._v("。")]),t._v(" "),s("p",[t._v("以下两种写法结果一致:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Mock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@email'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Mock.Random 提供的完整方法（占位符）如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Method")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Basic")]),t._v(" "),s("td",[t._v("boolean/bool, natural, integer, float, character, string, range, date, time, datetime, now")])]),t._v(" "),s("tr",[s("td",[t._v("Image")]),t._v(" "),s("td",[t._v("image, dataImage")])]),t._v(" "),s("tr",[s("td",[t._v("Color")]),t._v(" "),s("td",[t._v("color")])]),t._v(" "),s("tr",[s("td",[t._v("Text")]),t._v(" "),s("td",[t._v("paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle")])]),t._v(" "),s("tr",[s("td",[t._v("Name")]),t._v(" "),s("td",[t._v("first, last, name, cfirst, clast, cname")])]),t._v(" "),s("tr",[s("td",[t._v("Web")]),t._v(" "),s("td",[t._v("url, domain, email, ip, tld")])]),t._v(" "),s("tr",[s("td",[t._v("Address")]),t._v(" "),s("td",[t._v("area, region")])]),t._v(" "),s("tr",[s("td",[t._v("Helper")]),t._v(" "),s("td",[t._v("capitalize, upper, lower, pick, shuffle")])]),t._v(" "),s("tr",[s("td",[t._v("Miscellaneous")]),t._v(" "),s("td",[t._v("guid, id")])])])]),t._v(" "),s("h3",{attrs:{id:"常用占位符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用占位符","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用占位符")]),t._v(" "),s("h4",{attrs:{id:"basic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic")]),t._v(" "),s("ol",[s("li",[t._v("boolean( min?, max?, current? ) 返回一个随机的布尔值。\n"),s("ul",[s("li",[t._v("boolean()")]),t._v(" "),s("li",[t._v("boolean( min, max, current )")])])]),t._v(" "),s("li",[t._v("natural( min?, max? ) 返回一个随机的自然数。\n"),s("ul",[s("li",[t._v("natural()")]),t._v(" "),s("li",[t._v("natural( min )")]),t._v(" "),s("li",[t._v("natural( min, max )")])])]),t._v(" "),s("li",[t._v("integer( min?, max? ) 返回一个随机的整数。\n"),s("ul",[s("li",[t._v("integer()")]),t._v(" "),s("li",[t._v("integer( min )")]),t._v(" "),s("li",[t._v("integer( min, max )")])])]),t._v(" "),s("li",[t._v("float( min?, max?, dmin?, dmax? ) 返回一个随机的浮点数。\n"),s("ul",[s("li",[t._v("float()")]),t._v(" "),s("li",[t._v("float( min )")]),t._v(" "),s("li",[t._v("float( min, max )")]),t._v(" "),s("li",[t._v("float( min, max, dmin )")]),t._v(" "),s("li",[t._v("float( min, max, dmin, dmax )")])])]),t._v(" "),s("li",[t._v("character( pool? ) 返回一个随机字符。\n"),s("ul",[s("li",[t._v("character()")]),t._v(" "),s("li",[t._v("character( 'lower/upper/number/symbol' )")]),t._v(" "),s("li",[t._v("character( pool )")])])]),t._v(" "),s("li",[t._v("string( pool?, min?, max? ) 返回一个随机字符串。\n"),s("ul",[s("li",[t._v("string()")]),t._v(" "),s("li",[t._v("string( length )")]),t._v(" "),s("li",[t._v("string( pool, length )")]),t._v(" "),s("li",[t._v("string( min, max )")]),t._v(" "),s("li",[t._v("string( pool, min, max )")])])]),t._v(" "),s("li",[t._v("range( start?, stop, step? ) 返回一个整型数组。\n"),s("ul",[s("li",[t._v("range( stop )")]),t._v(" "),s("li",[t._v("range( start, stop )")]),t._v(" "),s("li",[t._v("range( start, stop, step )")])])])]),t._v(" "),s("h4",{attrs:{id:"image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#image","aria-hidden":"true"}},[t._v("#")]),t._v(" Image")]),t._v(" "),s("ol",[s("li",[t._v("image( size?, background?, foreground?, format?, text? ) 生成一个随机的图片地址。\n"),s("ul",[s("li",[t._v("image()")]),t._v(" "),s("li",[t._v("image( size )")]),t._v(" "),s("li",[t._v("image( size, background )")]),t._v(" "),s("li",[t._v("image( size, background, text )")]),t._v(" "),s("li",[t._v("image( size, background, foreground, text )")]),t._v(" "),s("li",[t._v("image( size, background, foreground, format, text )")])])])]),t._v(" "),s("ul",[s("li",[t._v("size 指示图片的宽高，格式为 '宽x高'。默认从下面的数组中随机读取一个：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[\n  '300x250', '250x250', '240x400', '336x280',\n  '180x150', '720x300', '468x60', '234x60',\n  '88x31', '120x90', '120x60', '120x240',\n  '125x125', '728x90', '160x600', '120x600',\n  '300x600'\n]\n")])])]),s("ul",[s("li",[t._v("background 指示图片的背景色。默认值为 '#000000'。")]),t._v(" "),s("li",[t._v("foreground 指示图片的前景色（文字）。默认值为 '#FFFFFF'。")]),t._v(" "),s("li",[t._v("format 指示图片的格式。默认值为 'png'，可选值包括：'png'、'gif'、'jpg'。")]),t._v(" "),s("li",[t._v("text 指示图片上的文字。默认值为参数 size。")])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "http://dummyimage.com/125x125"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "http://dummyimage.com/200x100"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fb0a2a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "http://dummyimage.com/200x100/fb0a2a"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#02adea'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "http://dummyimage.com/200x100/02adea&text=Hello"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#00405d'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FFF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mock.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "http://dummyimage.com/200x100/00405d/FFF&text=Mock.js"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#ffcc33'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#FFF'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "http://dummyimage.com/200x100/ffcc33/FFF.png&text=!"')]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("dataImage( size?, text? ) 生成一段随机的 Base64 图片编码。\n"),s("ul",[s("li",[t._v("dataImage()")]),t._v(" "),s("li",[t._v("dataImage( size )")]),t._v(" "),s("li",[t._v("dataImage( size, text )")])])])]),t._v(" "),s("p",[t._v("示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dataImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'200x100'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello Mock.js!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#color","aria-hidden":"true"}},[t._v("#")]),t._v(" Color")]),t._v(" "),s("ol",[s("li",[t._v("color() 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。")]),t._v(" "),s("li",[t._v("hex() 随机生成一个有吸引力的颜色，格式为 '#RRGGBB'。")]),t._v(" "),s("li",[t._v("rgb() 随机生成一个有吸引力的颜色，格式为 'rgb(r, g, b)'。")]),t._v(" "),s("li",[t._v("rgba() 随机生成一个有吸引力的颜色，格式为 'rgba(r, g, b, a)'。")]),t._v(" "),s("li",[t._v("hsl() 随机生成一个有吸引力的颜色，格式为 'hsl(h, s, l)'。")])]),t._v(" "),s("h4",{attrs:{id:"text"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text","aria-hidden":"true"}},[t._v("#")]),t._v(" Text")]),t._v(" "),s("ol",[s("li",[t._v("paragraph( min?, max? ) 随机生成一段文本。\n"),s("ul",[s("li",[t._v("paragraph()")]),t._v(" "),s("li",[t._v("paragraph( len )")]),t._v(" "),s("li",[t._v("paragraph( min, max )")])])]),t._v(" "),s("li",[t._v("cparagraph( min?, max? ) 随机生成一段中文文本。\n"),s("ul",[s("li",[t._v("cparagraph()")]),t._v(" "),s("li",[t._v("cparagraph( len )")]),t._v(" "),s("li",[t._v("cparagraph( min, max )")])])]),t._v(" "),s("li",[t._v("sentence( min?, max? ) 随机生成一个句子，第一个单词的首字母大写。\n"),s("ul",[s("li",[t._v("sentence()")]),t._v(" "),s("li",[t._v("sentence( len )")]),t._v(" "),s("li",[t._v("sentence( min, max )")])])]),t._v(" "),s("li",[t._v("csentence( min?, max? ) 随机生成一段中文文本。\n"),s("ul",[s("li",[t._v("csentence()")]),t._v(" "),s("li",[t._v("csentence( len )")]),t._v(" "),s("li",[t._v("csentence( min, max )")])])]),t._v(" "),s("li",[t._v("word( min?, max? ) 随机生成一个单词。\n"),s("ul",[s("li",[t._v("word()")]),t._v(" "),s("li",[t._v("word( len )")]),t._v(" "),s("li",[t._v("word( min, max )")])])]),t._v(" "),s("li",[t._v("cword( pool?, min?, max? ) 随机生成一个汉字。\n"),s("ul",[s("li",[t._v("cword()")]),t._v(" "),s("li",[t._v("cword( pool )")]),t._v(" "),s("li",[t._v("cword( length )")]),t._v(" "),s("li",[t._v("cword( pool, length )")]),t._v(" "),s("li",[t._v("cword( min, max )")]),t._v(" "),s("li",[t._v("cword( pool, min, max )")])])]),t._v(" "),s("li",[t._v("title( min?, max? ) 随机生成一句标题，其中每个单词的首字母大写。\n"),s("ul",[s("li",[t._v("title()")]),t._v(" "),s("li",[t._v("title( len )")]),t._v(" "),s("li",[t._v("title( min, max )")])])]),t._v(" "),s("li",[t._v("ctitle( min?, max? ) 随机生成一句中文标题。\n"),s("ul",[s("li",[t._v("ctitle()")]),t._v(" "),s("li",[t._v("ctitle( len )")]),t._v(" "),s("li",[t._v("ctitle( min, max )")])])])]),t._v(" "),s("h4",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name","aria-hidden":"true"}},[t._v("#")]),t._v(" Name")]),t._v(" "),s("ol",[s("li",[t._v("first() 随机生成一个常见的英文名。")]),t._v(" "),s("li",[t._v("last() 随机生成一个常见的英文姓。")]),t._v(" "),s("li",[t._v("name( middle? ) 随机生成一个常见的英文姓名。\n"),s("ul",[s("li",[t._v("name()")]),t._v(" "),s("li",[t._v("name( middle ) 若middle为true, 表示生成中间名")])])]),t._v(" "),s("li",[t._v("cfirst() 随机生成一个常见的中文名。")]),t._v(" "),s("li",[t._v("clast() 随机生成一个常见的中文姓。")]),t._v(" "),s("li",[t._v("cname() 随机生成一个常见的中文姓名。")])]),t._v(" "),s("h4",{attrs:{id:"web"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web","aria-hidden":"true"}},[t._v("#")]),t._v(" Web")]),t._v(" "),s("ol",[s("li",[t._v("url( protocol?, host? ) 随机生成一个 URL。\n"),s("ul",[s("li",[t._v("url()")]),t._v(" "),s("li",[t._v("url( protocol, host )")])])]),t._v(" "),s("li",[t._v("protocol() 随机生成一个 URL 协议。")]),t._v(" "),s("li",[t._v("domain() 随机生成一个域名。")]),t._v(" "),s("li",[t._v("tld() 随机生成一个顶级域名（Top Level Domain）。")]),t._v(" "),s("li",[t._v("email( domain? ) 随机生成一个邮件地址。\n"),s("ul",[s("li",[t._v("email()")]),t._v(" "),s("li",[t._v("email( domain )")])])]),t._v(" "),s("li",[t._v("ip() 随机生成一个 IP 地址。")])]),t._v(" "),s("h4",{attrs:{id:"address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#address","aria-hidden":"true"}},[t._v("#")]),t._v(" Address")]),t._v(" "),s("ol",[s("li",[t._v("region() 随机生成一个（中国）大区。")]),t._v(" "),s("li",[t._v("province() 随机生成一个（中国）省（或直辖市、自治区、特别行政区）。")]),t._v(" "),s("li",[t._v("city( prefix? ) 随机生成一个（中国）市。\n"),s("ul",[s("li",[t._v("city()")]),t._v(" "),s("li",[t._v("city( prefix )")])])]),t._v(" "),s("li",[t._v("county( prefix? ) 随机生成一个（中国）县。\n"),s("ul",[s("li",[t._v("county()")]),t._v(" "),s("li",[t._v("county( prefix )")])])]),t._v(" "),s("li",[t._v("zip() 随机生成一个邮政编码（六位数字）。")])]),t._v(" "),s("h4",{attrs:{id:"date"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#date","aria-hidden":"true"}},[t._v("#")]),t._v(" Date")]),t._v(" "),s("ol",[s("li",[t._v("date( format? ) 返回一个随机的日期字符串。\n"),s("ul",[s("li",[t._v("date()")]),t._v(" "),s("li",[t._v("date(format)")])])]),t._v(" "),s("li",[t._v("time( format? ) 返回一个随机的时间字符串。\n"),s("ul",[s("li",[t._v("time()")]),t._v(" "),s("li",[t._v("time( format )")])])]),t._v(" "),s("li",[t._v("datetime( format? ) 返回一个随机的日期和时间字符串。\n"),s("ul",[s("li",[t._v("datetime()")]),t._v(" "),s("li",[t._v("datetime( format )")])])]),t._v(" "),s("li",[t._v("now( unit?, format? ) 返回当前的日期和时间字符串。\n"),s("ul",[s("li",[t._v("now( unit, format )")]),t._v(" "),s("li",[t._v("now()")]),t._v(" "),s("li",[t._v("now( format )")]),t._v(" "),s("li",[t._v("now( unit )")])])])]),t._v(" "),s("p",[t._v("format 格式如下:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Format")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("yyyy")]),t._v(" "),s("td",[t._v("A full numeric representation of a year, 4 digits")]),t._v(" "),s("td",[t._v("1999 or 2003")])]),t._v(" "),s("tr",[s("td",[t._v("yy")]),t._v(" "),s("td",[t._v("A two digit representation of a year")]),t._v(" "),s("td",[t._v("99 or 03")])]),t._v(" "),s("tr",[s("td",[t._v("y")]),t._v(" "),s("td",[t._v("A two digit representation of a year")]),t._v(" "),s("td",[t._v("99 or 03")])]),t._v(" "),s("tr",[s("td",[t._v("MM")]),t._v(" "),s("td",[t._v("Numeric representation of a month, with leading zeros")]),t._v(" "),s("td",[t._v("01 to 12")])]),t._v(" "),s("tr",[s("td",[t._v("M")]),t._v(" "),s("td",[t._v("Numeric representation of a month, without leading zeros")]),t._v(" "),s("td",[t._v("1 to 12")])]),t._v(" "),s("tr",[s("td",[t._v("dd")]),t._v(" "),s("td",[t._v("Day of the month, 2 digits with leading zeros")]),t._v(" "),s("td",[t._v("01 to 31")])]),t._v(" "),s("tr",[s("td",[t._v("d")]),t._v(" "),s("td",[t._v("Day of the month without leading zeros")]),t._v(" "),s("td",[t._v("1 to 31")])]),t._v(" "),s("tr",[s("td",[t._v("HH")]),t._v(" "),s("td",[t._v("24-hour format of an hour with leading zeros")]),t._v(" "),s("td",[t._v("00 to 23")])]),t._v(" "),s("tr",[s("td",[t._v("H")]),t._v(" "),s("td",[t._v("24-hour format of an hour without leading zeros")]),t._v(" "),s("td",[t._v("0 to 23")])]),t._v(" "),s("tr",[s("td",[t._v("hh")]),t._v(" "),s("td",[t._v("12-hour format of an hour without leading zeros")]),t._v(" "),s("td",[t._v("1 to 12")])]),t._v(" "),s("tr",[s("td",[t._v("h")]),t._v(" "),s("td",[t._v("12-hour format of an hour with leading zeros")]),t._v(" "),s("td",[t._v("01 to 12")])]),t._v(" "),s("tr",[s("td",[t._v("mm")]),t._v(" "),s("td",[t._v("Minutes, with leading zeros")]),t._v(" "),s("td",[t._v("00 to 59")])]),t._v(" "),s("tr",[s("td",[t._v("m")]),t._v(" "),s("td",[t._v("Minutes, without leading zeros")]),t._v(" "),s("td",[t._v("0 to 59")])]),t._v(" "),s("tr",[s("td",[t._v("ss")]),t._v(" "),s("td",[t._v("Seconds, with leading zeros")]),t._v(" "),s("td",[t._v("00 to 59")])]),t._v(" "),s("tr",[s("td",[t._v("s")]),t._v(" "),s("td",[t._v("Seconds, without leading zeros")]),t._v(" "),s("td",[t._v("0 to 59")])]),t._v(" "),s("tr",[s("td",[t._v("SS")]),t._v(" "),s("td",[t._v("Milliseconds, with leading zeros")]),t._v(" "),s("td",[t._v("000 to 999")])]),t._v(" "),s("tr",[s("td",[t._v("S")]),t._v(" "),s("td",[t._v("Milliseconds, without leading zeros")]),t._v(" "),s("td",[t._v("0 to 999")])]),t._v(" "),s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("Uppercase Ante meridiem and Post meridiem")]),t._v(" "),s("td",[t._v("AM or PM")])]),t._v(" "),s("tr",[s("td",[t._v("a")]),t._v(" "),s("td",[t._v("Lowercase Ante meridiem and Post meridiem")]),t._v(" "),s("td",[t._v("am or pm")])]),t._v(" "),s("tr",[s("td",[t._v("T")]),t._v(" "),s("td",[t._v("Milliseconds, since 1970-1-1 00:00:00 UTC")]),t._v(" "),s("td",[t._v("759883437303")])])])]),t._v(" "),s("p",[t._v("比如:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2002-10-23"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-MM-dd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "1983-01-29"')]),t._v("\n")])])]),s("p",[s("code",[t._v("Random.now()")]),t._v(" 的实现参考了 "),s("a",{attrs:{href:"http://momentjs.cn/docs/#/manipulating/start-of/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 20:08:38 "')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-MM-dd HH:mm:ss SS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 00:00:00 000"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 00:00:00 "')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yyyy-MM-dd HH:mm:ss SS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 20:08:38 157"')]),t._v("\n\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'year'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-01-01 00:00:00"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'month'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-01 00:00:00"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'week'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-27 00:00:00"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'day'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 00:00:00"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hour'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 20:00:00"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'minute'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 20:08:00"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'second'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "2014-04-29 20:08:38"')]),t._v("\n")])])]),s("h4",{attrs:{id:"helper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helper","aria-hidden":"true"}},[t._v("#")]),t._v(" Helper")]),t._v(" "),s("ol",[s("li",[t._v("capitalize(word) 把字符串的第一个字母转换为大写。")]),t._v(" "),s("li",[t._v("upper( str ) 把字符串转换为大写。")]),t._v(" "),s("li",[t._v("lower( str ) 把字符串转换为小写。")]),t._v(" "),s("li",[t._v("pick( arr ) 从数组中随机选取一个元素，并返回。")]),t._v(" "),s("li",[t._v("shuffle( arr ) 打乱数组中元素的顺序，并返回。")])]),t._v(" "),s("h4",{attrs:{id:"miscellaneous"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous","aria-hidden":"true"}},[t._v("#")]),t._v(" Miscellaneous")]),t._v(" "),s("ol",[s("li",[t._v("guid() 随机生成一个 GUID。")]),t._v(" "),s("li",[t._v("id() 随机生成一个 18 位身份证。")]),t._v(" "),s("li",[t._v("increment( step? ) 生成一个全局的自增整数。\n"),s("ul",[s("li",[t._v("increment()")]),t._v(" "),s("li",[t._v("increment( step )")])])])]),t._v(" "),s("h3",{attrs:{id:"扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#扩展","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展")]),t._v(" "),s("p",[t._v("Mock.Random 中的方法与数据模板的 "),s("code",[t._v("@占位符")]),t._v(" 一一对应，在需要时还可以为 Mock.Random 扩展方法，然后在数据模板中通过 "),s("code",[t._v("@扩展方法")]),t._v(" 引用。例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("constellation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" constellations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'白羊座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'金牛座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'双子座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'巨蟹座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'狮子座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'处女座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'天秤座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'天蝎座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'射手座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'摩羯座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'水瓶座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'双鱼座'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("constellations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constellation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "水瓶座"')]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@CONSTELLATION'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "天蝎座"')]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    constellation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@CONSTELLATION'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => { constellation: "射手座" }')]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);