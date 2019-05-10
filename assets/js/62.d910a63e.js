(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{337:function(t,a,e){"use strict";e.r(a);var s=e(1),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"angular-管道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#angular-管道","aria-hidden":"true"}},[t._v("#")]),t._v(" Angular 管道")]),t._v(" "),e("p",[t._v("前面已经提过管道的概念, 下面来深入剖析管道的用法")]),t._v(" "),e("h2",{attrs:{id:"内置管道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置管道","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置管道")]),t._v(" "),e("p",[t._v("常用的"),e("a",{attrs:{href:"https://www.angular.cn/api?type=pipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("内置管道"),e("OutboundLink")],1),t._v("有:")]),t._v(" "),e("ul",[e("li",[t._v("UpperCasePipe 把文本转换成全大写形式。格式: "),e("code",[t._v(t._s(t._f("uppercase")(t.value_expression)))])]),t._v(" "),e("li",[t._v("LowerCasePipe 把文本转换成全小写形式。格式: "),e("code",[t._v(t._s(t._f("lowercase")(t.value_expression)))])])]),t._v(" "),e("h3",{attrs:{id:"decimalpipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decimalpipe","aria-hidden":"true"}},[t._v("#")]),t._v(" DecimalPipe")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.angular.cn/api/common/DecimalPipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("DecimalPipe"),e("OutboundLink")],1),t._v(" 把数字转换成字符串。格式:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{{ value_expression | number [ : digitsInfo [ : locale ] ] }}\n")])])]),e("p",[e("code",[t._v("digitsInfo")]),t._v(" 数字展现的选项，通过如下格式的字符串指定：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}。\n")])])]),e("ul",[e("li",[t._v("minIntegerDigits：在小数点前的最小位数。默认为 1。")]),t._v(" "),e("li",[t._v("minFractionDigits：小数点后的最小位数。默认为 0。")]),t._v(" "),e("li",[t._v("maxFractionDigits：小数点后的最大为数，默认为 3。")])]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n<div>\n  \x3c!--output '2.718'--\x3e\n  <p>e (no formatting): {{e | number}}</p>\n\n  \x3c!--output '002.71828'--\x3e\n  <p>e (3.1-5): {{e | number:'3.1-5'}}</p>\n\n  \x3c!--output '0,002.71828'--\x3e\n  <p>e (4.5-5): {{e | number:'4.5-5'}}</p>\n\n  \x3c!--output '3.14'--\x3e\n  <p>pi (no formatting): {{pi | number}}</p>\n\n  \x3c!--output '003.14'--\x3e\n  <p>pi (3.1-5): {{pi | number:'3.1-5'}}</p>\n\n  \x3c!--output '003.14000'--\x3e\n  <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>\n\n  \x3c!--output '-3' / unlike '-2' by Math.round()--\x3e\n  <p>-2.5 (1.0-0): {{-2.5 | number:'1.0-0'}}</p>\n</div>\n`")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppComponent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.14")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Number "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.718281828459045")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"datepipe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datepipe","aria-hidden":"true"}},[t._v("#")]),t._v(" DatePipe")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.angular.cn/api/common/DatePipe",target:"_blank",rel:"noopener noreferrer"}},[t._v("DatePipe"),e("OutboundLink")],1),t._v(" 根据区域设置规则格式化日期值。格式:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}\n")])])]),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app-heroes'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("`\n\x3c!-- Dec 24, 2018 --\x3e\n<p>{{ dateObj | date }}</p>\n\n\x3c!-- Dec 24, 2018, 12:26:46 AM --\x3e\n<p>{{ dateObj | date:'medium' }}</p>\n\n\x3c!-- 26:46 AM --\x3e\n<p>{{ dateObj | date:'shortTime' }}</p>\n\n\x3c!-- 2018-12-24 00:26:46 --\x3e\n<p>{{ dateObj | date:'yyyy-MM-d HH:mm:ss' }}</p>\n`")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HeroesComponent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dateObj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Date "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"自定义管道"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义管道","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义管道")])])},[],!1,null,null,null);a.default=n.exports}}]);