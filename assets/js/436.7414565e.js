(window.webpackJsonp=window.webpackJsonp||[]).push([[436],{735:function(t,_,s){"use strict";s.r(_);var v=s(1),e=Object(v.a)({},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"玩转交互式命令行"}},[t._v("玩转交互式命令行")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("h2",{attrs:{id:"ansi-escape-codes的使用"}},[t._v("Ansi Escape Codes的使用")]),t._v(" "),s("h3",{attrs:{id:"字体颜色"}},[t._v("字体颜色")]),t._v(" "),s("h4",{attrs:{id:"_8色"}},[t._v("8色")]),t._v(" "),s("p",[t._v("基本上所有的控制台都支持以下8种颜色：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("test.py")]),t._v(" "),t._m(4),t._m(5),t._v(" "),s("h4",{attrs:{id:"_16色"}},[t._v("16色")]),t._v(" "),s("p",[t._v("大多数的控制台，除了支持刚才提到的8色外，还可以输出在此之上更加明亮的8种颜色：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("h4",{attrs:{id:"_256色"}},[t._v("256色")]),t._v(" "),s("p",[t._v("除了16色外，某些控制台支持输出256色。指令的形式如下：")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("以下示例打印出256色矩阵")]),t._v(" "),t._m(10),s("h3",{attrs:{id:"背景颜色"}},[t._v("背景颜色")]),t._v(" "),s("p",[t._v("原理同字体颜色")]),t._v(" "),s("p",[t._v("8色:")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("16色:")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("256色:")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("重置:")]),t._v(" "),t._m(14),t._v(" "),s("h3",{attrs:{id:"样式设置"}},[t._v("样式设置")]),t._v(" "),t._m(15),t._v(" "),s("h3",{attrs:{id:"光标控制"}},[t._v("光标控制")]),t._v(" "),t._m(16),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[t._v("参考资料")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://mp.weixin.qq.com/s/PrYBXRoUApbcalaIgY7LPQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("WeChat: 震惊！原来命令行还可以这么玩？！"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://blog.csdn.net/justheretobe/article/details/7259718",target:"_blank",rel:"noopener noreferrer"}},[t._v("stty的用法及解析--escape sequence code的用法"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("震惊过命令行中那些五颜六色的文本显示，使用包管理安装程序时进度条的变化，vim、Emacs等编辑器在终端中的实现。其实，这些都是"),_("code",[this._v("Ansi Escape Codes")]),this._v("的应用。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("绝大部分Ansi Escape Codes都以"),_("code",[this._v("\\u001b")]),this._v("开头。本文以"),_("code",[this._v("python")]),this._v("命令行交互环境演示。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("格式: "),_("code",[this._v("\\u001b[${ID}m")]),this._v(" ID从30-37")])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ul",[s("li",[t._v("黑色："),s("code",[t._v("\\u001b[30m")])]),t._v(" "),s("li",[t._v("红色："),s("code",[t._v("\\u001b[31m")])]),t._v(" "),s("li",[t._v("绿色："),s("code",[t._v("\\u001b[32m")])]),t._v(" "),s("li",[t._v("黄色："),s("code",[t._v("\\u001b[33m")])]),t._v(" "),s("li",[t._v("蓝色："),s("code",[t._v("\\u001b[34m")])]),t._v(" "),s("li",[t._v("洋红色："),s("code",[t._v("\\u001b[35m")])]),t._v(" "),s("li",[t._v("青色："),s("code",[t._v("\\u001b[36m")])]),t._v(" "),s("li",[t._v("白色："),s("code",[t._v("\\u001b[37m")])]),t._v(" "),s("li",[t._v("重置："),s("code",[t._v("\\u001b[0m")])])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("print")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token triple-quoted-string string"}},[t._v("'''\n\\u001b[30m黑色\\u001b[0m\n\\u001b[31m红色\\u001b[0m\n\\u001b[32m绿色\\u001b[0m\n\\u001b[33m黄色\\u001b[0m\n\\u001b[34m蓝色\\u001b[0m\n\\u001b[35m洋红色\\u001b[0m\n\\u001b[36m青色\\u001b[0m\n\\u001b[37m白色\\u001b[0m\n'''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])},function(){var t=this.$createElement,_=this._self._c||t;return _("figure",[_("img",{attrs:{src:"https://img.xiaoyulive.top/img/articles/0007.jpg",alt:""}})])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("格式: "),_("code",[this._v("\\u001b[${ID};1m")]),this._v(" ID从30-37")])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ul",[s("li",[t._v("亮黑色："),s("code",[t._v("\\u001b[30;1m")])]),t._v(" "),s("li",[t._v("亮红色："),s("code",[t._v("\\u001b[31;1m")])]),t._v(" "),s("li",[t._v("亮绿色："),s("code",[t._v("\\u001b[32;1m")])]),t._v(" "),s("li",[t._v("亮黄色："),s("code",[t._v("\\u001b[33;1m")])]),t._v(" "),s("li",[t._v("亮蓝色："),s("code",[t._v("\\u001b[34;1m")])]),t._v(" "),s("li",[t._v("亮洋红色："),s("code",[t._v("\\u001b[35;1m")])]),t._v(" "),s("li",[t._v("亮青色："),s("code",[t._v("\\u001b[36;1m")])]),t._v(" "),s("li",[t._v("亮白色："),s("code",[t._v("\\u001b[37;1m")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("p",[this._v("亮色指令分别在原来对应颜色的指令中间加上"),_("code",[this._v(";1")]),this._v("。")])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[_("code",[this._v("\\u001b[38;5;${ID}m")]),this._v(" ID从1-255")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("range")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("16")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" j "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("range")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("16")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        code "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" j\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("print")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"\\u001b[38;5;%dm%d"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("print")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"\\u001b[0m"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ul",[s("li",[t._v("黑色背景："),s("code",[t._v("\\u001b[40m")])]),t._v(" "),s("li",[t._v("红色背景："),s("code",[t._v("\\u001b[41m")])]),t._v(" "),s("li",[t._v("绿色背景："),s("code",[t._v("\\u001b[42m")])]),t._v(" "),s("li",[t._v("黄色背景："),s("code",[t._v("\\u001b[43m")])]),t._v(" "),s("li",[t._v("蓝色背景："),s("code",[t._v("\\u001b[44m")])]),t._v(" "),s("li",[t._v("洋红色背景："),s("code",[t._v("\\u001b[45m")])]),t._v(" "),s("li",[t._v("青色背景："),s("code",[t._v("\\u001b[46m")])]),t._v(" "),s("li",[t._v("白色背景："),s("code",[t._v("\\u001b[47m")])])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ul",[s("li",[t._v("亮黑色背景："),s("code",[t._v("\\u001b[40;1m")])]),t._v(" "),s("li",[t._v("亮红色背景："),s("code",[t._v("\\u001b[41;1m")])]),t._v(" "),s("li",[t._v("亮绿色背景："),s("code",[t._v("\\u001b[42;1m")])]),t._v(" "),s("li",[t._v("亮黄色背景："),s("code",[t._v("\\u001b[43;1m")])]),t._v(" "),s("li",[t._v("亮蓝色背景："),s("code",[t._v("\\u001b[44;1m")])]),t._v(" "),s("li",[t._v("亮洋红色背景："),s("code",[t._v("\\u001b[45;1m")])]),t._v(" "),s("li",[t._v("亮青色背景："),s("code",[t._v("\\u001b[46;1m")])]),t._v(" "),s("li",[t._v("亮白色背景："),s("code",[t._v("\\u001b[47;1m")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[_("code",[this._v("\\u001b[48;5;${ID}m")])])])},function(){var t=this.$createElement,_=this._self._c||t;return _("ul",[_("li",[this._v("仍然是 "),_("code",[this._v("\\u001b[0m")])])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ul",[s("li",[t._v("粗体："),s("code",[t._v("\\u001b[1m")])]),t._v(" "),s("li",[t._v("下划线："),s("code",[t._v("\\u001b[4m")])]),t._v(" "),s("li",[t._v("反色："),s("code",[t._v("\\u001b[7m")])])])},function(){var t=this,_=t.$createElement,s=t._self._c||_;return s("ul",[s("li",[t._v("光标向上移动："),s("code",[t._v("\\u001b[{n}A")]),t._v("将光标向上移动"),s("code",[t._v("n")]),t._v("格。")]),t._v(" "),s("li",[t._v("光标向下移动："),s("code",[t._v("\\u001b[{n}B")]),t._v("将光标向下移动"),s("code",[t._v("n")]),t._v("格。")]),t._v(" "),s("li",[t._v("光标向右移动："),s("code",[t._v("\\u001b[{n}C")]),t._v("将光标向右移动"),s("code",[t._v("n")]),t._v("格。")]),t._v(" "),s("li",[t._v("光标向左移动："),s("code",[t._v("\\u001b[{n}D")]),t._v("将光标向左移动"),s("code",[t._v("n")]),t._v("格。")]),t._v(" "),s("li",[t._v("光标按行向下移动："),s("code",[t._v("\\u001b[{n}E")]),t._v("将光标向下移动"),s("code",[t._v("n")]),t._v("行并且将光标移至行首。")]),t._v(" "),s("li",[t._v("光标按行向上移动："),s("code",[t._v("\\u001b[{n}F")]),t._v("将光标向上移动"),s("code",[t._v("n")]),t._v("行并且将光标移至行首。")]),t._v(" "),s("li",[t._v("设置光标所在列："),s("code",[t._v("\\u001b[{n}G")]),t._v("将光标移至第"),s("code",[t._v("n")]),t._v("列（行数与当前所在行保持一致）。")]),t._v(" "),s("li",[t._v("设置光标所在位置："),s("code",[t._v("\\u001b[{n};{m}H")]),t._v("将光标移至第"),s("code",[t._v("n")]),t._v("行"),s("code",[t._v("m")]),t._v("列，坐标原点从屏幕左上角开始。")]),t._v(" "),s("li",[t._v("保存光标当前所在位置："),s("code",[t._v("\\u001b[{s}")]),t._v("。")]),t._v(" "),s("li",[t._v("读取光标上一次保存的位置："),s("code",[t._v("\\u001b[{u}")]),t._v("。")])])}],!1,null,null,null);_.default=e.exports}}]);