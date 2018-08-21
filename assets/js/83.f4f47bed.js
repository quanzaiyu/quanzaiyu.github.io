(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{540:function(s,a,t){"use strict";t.r(a);var n=t(1),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"数组常用函数"}},[s._v("数组常用函数")]),s._v(" "),t("h2",{attrs:{id:"array-change-key-case"}},[s._v("array_change_key_case")]),s._v(" "),t("p",[t("code",[s._v("array_change_key_case(array,case)")]),s._v(" 将数组的所有的键都转换为大写字母或小写字母。")]),s._v(" "),t("p",[s._v("case:")]),s._v(" "),t("p",[t("code",[s._v("CASE_LOWER")]),s._v(" - 默认值。将数组的键转换为小写字母。")]),s._v(" "),t("p",[t("code",[s._v("CASE_UPPER")]),s._v(" - 将数组的键转换为大写字母。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token keyword"}},[s._v("array")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Peter"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"35"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Ben"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"37"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Joe"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"43"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("print_r")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token function"}},[s._v("array_change_key_case")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token constant"}},[s._v("CASE_UPPER")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("输出")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Array\n(\n    [PETER] => 35\n    [BEN] => 37\n    [JOE] => 43\n)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"array-chunk"}},[s._v("array_chunk")]),s._v(" "),t("p",[t("code",[s._v("array_chunk(array,size,preserve_keys)")]),s._v(" 函数把一个数组分割为新的数组块。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token keyword"}},[s._v("array")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Peter"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"35"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Ben"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"37"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Joe"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"43"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Harry"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"50"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("print_r")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token function"}},[s._v("array_chunk")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token number"}},[s._v("2")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token boolean"}},[s._v("true")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("输出")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Array\n(\n  [0] => Array\n  (\n    [Peter] => 35\n    [Ben] => 37\n  )\n  [1] => Array\n  (\n    [Joe] => 43\n    [Harry] => 50\n  )\n)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"array-combine"}},[s._v("array_combine")]),s._v(" "),t("p",[t("code",[s._v("array_combine(keys,values)")]),s._v(" 通过合并两个数组来创建一个新数组，其中的一个数组元素为键名，另一个数组的元素为键值。")]),s._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("注释")]),s._v(" "),t("p",[s._v("键名数组和键值数组的元素个数必须相同！")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token variable"}},[s._v("$fname")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token keyword"}},[s._v("array")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Peter"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Ben"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Joe"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token keyword"}},[s._v("array")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"35"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"37"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"43"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{attrs:{class:"token variable"}},[s._v("$c")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token function"}},[s._v("array_combine")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$fname")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token variable"}},[s._v("$age")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("print_r")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$c")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("输出:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Array\n(\n  [Peter] => 35\n  [Ben] => 37\n  [Joe] => 43\n)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"array-count-values"}},[s._v("array_count_values")]),s._v(" "),t("p",[t("code",[s._v("array_count_values(array)")]),s._v(" 用于统计数组中所有值出现的次数。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token variable"}},[s._v("$a")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token keyword"}},[s._v("array")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"A"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Cat"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Dog"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"A"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"Dog"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("print_r")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token function"}},[s._v("array_count_values")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$a")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("输出:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Array\n(\n    [A] => 2\n    [Cat] => 1\n    [Dog] => 2\n)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"array-flip"}},[s._v("array_flip")]),s._v(" "),t("p",[t("code",[s._v("array_flip(array)")]),s._v(" 用于反转/交换数组中的键名和对应关联的键值。")]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{attrs:{class:"token variable"}},[s._v("$a1")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token keyword"}},[s._v("array")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"a"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"red"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"b"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"green"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"c"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"blue"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"d"')]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token operator"}},[s._v(">")]),t("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"yellow"')]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token variable"}},[s._v("$result")]),t("span",{attrs:{class:"token operator"}},[s._v("=")]),t("span",{attrs:{class:"token function"}},[s._v("array_flip")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$a1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token function"}},[s._v("print_r")]),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{attrs:{class:"token variable"}},[s._v("$result")]),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("输出:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Array\n(\n    [red] => a\n    [green] => b\n    [blue] => c\n    [yellow] => d\n)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}],!1,null,null,null);a.default=r.exports}}]);