(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{543:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object","aria-hidden":"true"}},[t._v("#")]),t._v(" Object")]),t._v(" "),a("h2",{attrs:{id:"序列化和反序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化和反序列化","aria-hidden":"true"}},[t._v("#")]),t._v(" 序列化和反序列化")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("JSON.parse()")]),t._v(" 和 "),a("code",[t._v("JSON.stringify()")]),t._v(" 分别为对象的序列化和反序列化")]),t._v(" "),a("li",[t._v("可以重写对象的 "),a("code",[t._v("toJSON()")]),t._v(" 方法以覆盖覆盖该对象默认的反序列化行为")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  toJSON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'\"bar\"'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//\'{"x":"bar"}\'')]),t._v("\n")])])]),a("h2",{attrs:{id:"对象的属性描述符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的属性描述符","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象的属性描述符")]),t._v(" "),a("p",[t._v("一个属性描述符是一个记录，由下面属性当中的某些组成的：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("value")]),t._v(" 该属性的值(仅针对数据属性描述符有效)")]),t._v(" "),a("li",[a("strong",[t._v("writable")]),t._v(" 当且仅当属性的值可以被改变时为true。(仅针对数据属性描述有效)")]),t._v(" "),a("li",[a("strong",[t._v("get")]),t._v(" 获取该属性的访问器函数（getter）。如果没有访问器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)")]),t._v(" "),a("li",[a("strong",[t._v("set")]),t._v(" 获取该属性的设置器函数（setter）。 如果没有设置器， 该值为undefined。(仅针对包含访问器或设置器的属性描述有效)")]),t._v(" "),a("li",[a("strong",[t._v("configurable")]),t._v(" 当且仅当指定对象的属性描述可以被改变或者属性可被删除时，为true。")]),t._v(" "),a("li",[a("strong",[t._v("enumerable")]),t._v(" 当且仅当指定对象的属性可以被枚举出时，为 true。")])]),t._v(" "),a("h2",{attrs:{id:"object-与其他类型的数据之间的转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-与其他类型的数据之间的转换","aria-hidden":"true"}},[t._v("#")]),t._v(" Object 与其他类型的数据之间的转换")]),t._v(" "),a("h3",{attrs:{id:"根据键值数组对创建对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据键值数组对创建对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 根据键值数组对创建对象")]),t._v(" "),a("p",[t._v("使用 Array.reduce() 来创建和组合键值对。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("objectFromPairs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("objectFromPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// {a: 1, b: 2}")]),t._v("\n")])])]),a("h3",{attrs:{id:"对象转化为键值对"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象转化为键值对","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象转化为键值对")]),t._v(" "),a("p",[t._v("使用 Object.keys() 和  Array.map() 遍历对象的键并生成一个包含键值对的数组。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("objectToPairs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("objectToPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [['a',1],['b',2]])")]),t._v("\n")])])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("objectToPairs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("entries")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("objectToPairs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [['a',1],['b',2]])")]),t._v("\n")])])]),a("h2",{attrs:{id:"深入理解-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-object","aria-hidden":"true"}},[t._v("#")]),t._v(" 深入理解 Object")]),t._v(" "),a("ul",[a("li",[a("aLink",{attrs:{href:"./Difficulty/copy",title:"对象的深拷贝和浅拷贝"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_create",title:"深入理解 Object.create()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_assign",title:"深入探索 Object.assign()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_freeze",title:"深入探索 Object.freeze()"}})],1)]),t._v(" "),a("p",[t._v("对象的属性操作：")]),t._v(" "),a("ul",[a("li",[a("aLink",{attrs:{href:"./Comprehension/object_defineProperty",title:"深入理解 Object.defineProperty()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_keys",title:"对象属性的获取 Object.keys()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_entries",title:"对象属性的获取 Object.entries()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_getOwnPropertyNames",title:"对象属性的获取 Object.getOwnPropertyNames()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_getOwnPropertySymbols",title:"对象属性的获取 Object.getOwnPropertySymbols()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_getOwnPropertyDescriptor",title:"对象属性的获取 Object.getOwnPropertyDescriptor()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_getOwnPropertyDescriptors",title:"对象属性的获取 Object.getOwnPropertyDescriptors()"}})],1),t._v(" "),a("li",[a("aLink",{attrs:{href:"./Comprehension/object_getPrototypeOf",title:"对象属性的获取 Object.getPrototypeOf()"}})],1)]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor",target:"_blank",rel:"noopener noreferrer"}},[t._v("getOwnPropertyDescriptor"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors",target:"_blank",rel:"noopener noreferrer"}},[t._v("getOwnPropertyDescriptors"),a("OutboundLink")],1)])])])},[],!1,null,null,null);s.default=e.exports}}]);