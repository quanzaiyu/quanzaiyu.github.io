(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1003:function(s,t,a){"use strict";a.r(t);var n=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"自动时间戳"}},[s._v("自动时间戳")]),s._v(" "),n("h2",{attrs:{id:"开启自动时间戳"}},[s._v("开启自动时间戳")]),s._v(" "),n("p",[s._v("全局开启: 在 配置文件 "),n("code",[s._v("database.php")]),s._v(" 中配置")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'auto_timestamp'")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("true")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("局部开启: 在 指定的模型中配置")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$autoWriteTimestamp")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("true")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("默认自动时间戳将绑定数据表中的 "),n("code",[s._v("create_time")]),s._v(" 和 "),n("code",[s._v("update_time")]),s._v(" 两个字段，默认为整型（int），数据写入的时候将自动写入时间戳。")]),s._v(" "),n("p",[s._v("如果为 "),n("code",[s._v("datetime")]),s._v(" 或 "),n("code",[s._v("timestamp")]),s._v(" 类型，则需要显式声明其类型:")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$type")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'update_time'")]),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'datetime'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'create_time'")]),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'timestamp'")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("如果需要修改默认绑定的字段，则:")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$createTime")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'create_at'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$updateTime")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'update_at'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果需要关闭某一个字段的自动写入，比如关闭更新时间的自动写入:")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$updateTime")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("true")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"存取和读取"}},[s._v("存取和读取")]),s._v(" "),n("p",[s._v("存取数据时，不需要使用修改器，也不需要显式指定时间戳字段，将自动获取当前时间戳并写入数据库，比如:")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[s._v("User")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token variable"}},[s._v("$user")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("save")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'name'")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'XIAOYU'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'email'")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'yu@qq.com'")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("figure",[n("img",{attrs:{src:a(392),alt:""}})]),s._v(" "),n("p",[s._v("读取数据时，不需要使用获取器，会自动将时间戳转化为可读数据，比如 :")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" User"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("19")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("dump")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token variable"}},[s._v("$user")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("figure",[n("img",{attrs:{src:a(393),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"设置时间字段的格式化类"}},[s._v("设置时间字段的格式化类")]),s._v(" "),n("p",[n("code",[s._v("datetime_format")]),s._v(" 参数支持设置为一个时间类名，用于时间戳的格式化输出")]),s._v(" "),n("p",[s._v("默认为")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'datetime_format'")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'\\org\\util\\DateTime'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以修改取出数据时的时间格式，在配置文件中修改 :")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'datetime_format'")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'Y-m-d H:i:s'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"动态关闭时间戳写入"}},[s._v("动态关闭时间戳写入")]),s._v(" "),n("p",[s._v("例如，在更新阅读数的时候不修改更新时间，可以使用 "),n("code",[s._v("isAutoWriteTimestamp")]),s._v(" 方法：")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token variable"}},[s._v("$user")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" User"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("get")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("1")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token variable"}},[s._v("$user")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token property"}},[s._v("read")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("+")]),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token number"}},[s._v("1")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token variable"}},[s._v("$user")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("isAutoWriteTimestamp")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token boolean"}},[s._v("false")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("save")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}],e=a(1),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);t.default=r.exports},392:function(s,t){s.exports="data:image/png;base64,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"},393:function(s,t){s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaYAAAClAQMAAAAtXMtaAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURf///wAAAFXC034AAAVhSURBVGje7ZhPbFRFGMC/eTubDs1a5pU1qWFt376suHpaMNFFmnaor/XVUws10RMYjR5Esj3RxKLT15U+DVBKJFETE1QOePOkJiZkS1FqooAXExKQrUuoFyxNY6iRP87Mtg1pSd+8pxfXzqGdJvvbb/58v5n5CrDW/p2GDYiFp8gUGOGpdWYUyqQ8JNX/5dl94Sl/gnxKyxyHo/Je7P3wsVwPR6B8j/jh13D/9MhkpP0ikXKjUJOaoG8BPuOqa4B2iqA4SRznwIADtn7VpuohzjhYcgdeatSmhMsiDhUUSZv6VL4VeDuJHToViiKOnBMccEl6cziqnUDRJdZPIWNRRYUdoQXFbpy29am2NkGx2O/XcOG0NlUCiIXOjVpt0hT1+9mlC0bPFPGDU7QdgCN1weiZIhoHYwiEZEDXmZqmKEp2hGRUHMSapqCzp/q/QPAWrds4qEsRx8geo5NyTihxRJvKwW/HqC9jIaJPEZRVFFhhKDVCSTFEjuquYdsAuvnH7UuC4nWXf9Dcr9JCpy5MbogWu1GrpsRTi38aCOKqkwwwRVK4ep8zwE08Lg/9IEqaUo9lyssP4wxX6kBWwxQM1XsFCGN6ubFn21QJo3m2fvDijyP+Cwy2FfrPzQVRWzp3WCKWZdLdXd3kFQaN9L1MbxBlP7yzLGMlKHO6icMgQZ+2xwKpR3aoeRmC6qpSz2lQaoQIzEbmuNjhcoTpDUHUvvYXS3K/mhOzd6ZxnsNTg/vHH+AapizmBvHQPfuh2xYkg4YauVPqC/cULfUL3XiAKYfrqbqTq3dKPaByECW/2UhSKRirFi1JMKgaQIAphrAEVSl19uILgaak5ise0Loyb5n9amOzpGY+3nkeBmb4qnn4PPWkkcxm44kTZo6Dc6ivF959kK16YvcVqrGa2BA5QS9wyEpqaHXK6jviqXlhQX1AxQizB68GUgsjNMB2h8jxdWlx7HyU7M0FjDD1818zXO5X6+bpy5fIuKDeqJzPFa7vDrxTFnPDlneKWJrtoRJMiSYyo8JrwhTIlsNRcVHoHYasBRRdOZXSr1OQ2OEeCwh8nyT6dYqkxMsLh6IGt1a8BrDWn4bPQ1CPd1LPFLFQaKolUiyq5vVhhBESQblcl3p9a2XmMMj9mpy5okstvL7K8H9oKBPSFEog+3bppMbrC5Qp6sAH6wxkcd3dwNeXJfJemSILD0hnoAdjFPj6kpTKKEV1iHgY3QrKjeb56YujKnvfvHZuT2uHKGQzCAe+bdImGVOm+MPGFvcZUTQ/Oh4Yq8nqJwdVrN2eYbsdgsrIomp1CltjxFPzooLKKSp2J/jNZj42pkzxjxo2s8UGZww7iGptmv/uF2kK3Hht9GY+fUZSm8KZ4ojcgLtlK+S/BmusopdFxpItRCxoz7IPJu9jiszcpMp7aQsd9qGn4qWgzHAehnlbITaSXPH6wuoNlV3Ke7PowifJLhtRlnBQkVk+dk+ueH1VKbHTRpWyig6gZIegStiBKsWXmbJn6koDmhsVJ+n6cWiv7H2yVVIgKZNJym31i8spe3NjxgT2Tq9MdO4MeQ+5VlGmVUfqtrmrmBexbB93L6Os9I2rLYLapWLlhgzTtYZFLEfEalSxmOHjrhUUylBB9ah5EUHlLC6ooqA2lBUlYrHlI0w3ZsbAVSPE4IwZJqNFf2E12CLVvfz1NTA11wBPXN+rHBt4+fw3X5sTBNDciNivckMeTfipwvCB+1f099pC1OEY3G7Vmi3RTclFMoVGMoVGMOXV+dkopnRGMcXupBFMsTvNCKZs6oxiysaBP6OYwiKZUq5BU0qRKFajlLW2Gv84N9baWvuvtr8BkzKrOO7amYEAAAAASUVORK5CYII="}}]);