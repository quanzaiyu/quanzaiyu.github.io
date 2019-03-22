(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{810:function(_,v,t){"use strict";t.r(v);var e=t(1),a=Object(e.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"玩转交互式命令行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#玩转交互式命令行","aria-hidden":"true"}},[_._v("#")]),_._v(" 玩转交互式命令行")]),_._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),t("p",[_._v("震惊过命令行中那些五颜六色的文本显示，使用包管理安装程序时进度条的变化，vim、Emacs等编辑器在终端中的实现。其实，这些都是"),t("code",[_._v("Ansi Escape Codes")]),_._v("的应用。")]),_._v(" "),t("p",[_._v("绝大部分Ansi Escape Codes都以"),t("code",[_._v("\\u001b")]),_._v("开头。本文以"),t("code",[_._v("python")]),_._v("命令行交互环境演示。")]),_._v(" "),t("h2",{attrs:{id:"ansi-escape-codes的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ansi-escape-codes的使用","aria-hidden":"true"}},[_._v("#")]),_._v(" Ansi Escape Codes的使用")]),_._v(" "),t("h3",{attrs:{id:"字体颜色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字体颜色","aria-hidden":"true"}},[_._v("#")]),_._v(" 字体颜色")]),_._v(" "),t("h4",{attrs:{id:"_8色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8色","aria-hidden":"true"}},[_._v("#")]),_._v(" 8色")]),_._v(" "),t("p",[_._v("基本上所有的控制台都支持以下8种颜色：")]),_._v(" "),t("p",[_._v("格式: "),t("code",[_._v("\\u001b[${ID}m")]),_._v(" ID从30-37")]),_._v(" "),t("ul",[t("li",[_._v("黑色："),t("code",[_._v("\\u001b[30m")])]),_._v(" "),t("li",[_._v("红色："),t("code",[_._v("\\u001b[31m")])]),_._v(" "),t("li",[_._v("绿色："),t("code",[_._v("\\u001b[32m")])]),_._v(" "),t("li",[_._v("黄色："),t("code",[_._v("\\u001b[33m")])]),_._v(" "),t("li",[_._v("蓝色："),t("code",[_._v("\\u001b[34m")])]),_._v(" "),t("li",[_._v("洋红色："),t("code",[_._v("\\u001b[35m")])]),_._v(" "),t("li",[_._v("青色："),t("code",[_._v("\\u001b[36m")])]),_._v(" "),t("li",[_._v("白色："),t("code",[_._v("\\u001b[37m")])]),_._v(" "),t("li",[_._v("重置："),t("code",[_._v("\\u001b[0m")])])]),_._v(" "),t("p",[_._v("test.py")]),_._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[_._v("'''\n\\u001b[30m黑色\\u001b[0m\n\\u001b[31m红色\\u001b[0m\n\\u001b[32m绿色\\u001b[0m\n\\u001b[33m黄色\\u001b[0m\n\\u001b[34m蓝色\\u001b[0m\n\\u001b[35m洋红色\\u001b[0m\n\\u001b[36m青色\\u001b[0m\n\\u001b[37m白色\\u001b[0m\n'''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])])]),t("imgLink",{attrs:{src:"articles/0007.jpg"}}),_._v(" "),t("h4",{attrs:{id:"_16色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16色","aria-hidden":"true"}},[_._v("#")]),_._v(" 16色")]),_._v(" "),t("p",[_._v("大多数的控制台，除了支持刚才提到的8色外，还可以输出在此之上更加明亮的8种颜色：")]),_._v(" "),t("p",[_._v("格式: "),t("code",[_._v("\\u001b[${ID};1m")]),_._v(" ID从30-37")]),_._v(" "),t("ul",[t("li",[_._v("亮黑色："),t("code",[_._v("\\u001b[30;1m")])]),_._v(" "),t("li",[_._v("亮红色："),t("code",[_._v("\\u001b[31;1m")])]),_._v(" "),t("li",[_._v("亮绿色："),t("code",[_._v("\\u001b[32;1m")])]),_._v(" "),t("li",[_._v("亮黄色："),t("code",[_._v("\\u001b[33;1m")])]),_._v(" "),t("li",[_._v("亮蓝色："),t("code",[_._v("\\u001b[34;1m")])]),_._v(" "),t("li",[_._v("亮洋红色："),t("code",[_._v("\\u001b[35;1m")])]),_._v(" "),t("li",[_._v("亮青色："),t("code",[_._v("\\u001b[36;1m")])]),_._v(" "),t("li",[_._v("亮白色："),t("code",[_._v("\\u001b[37;1m")])])]),_._v(" "),t("p",[_._v("亮色指令分别在原来对应颜色的指令中间加上"),t("code",[_._v(";1")]),_._v("。")]),_._v(" "),t("h4",{attrs:{id:"_256色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_256色","aria-hidden":"true"}},[_._v("#")]),_._v(" 256色")]),_._v(" "),t("p",[_._v("除了16色外，某些控制台支持输出256色。指令的形式如下：")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("\\u001b[38;5;${ID}m")]),_._v(" ID从1-255")])]),_._v(" "),t("p",[_._v("以下示例打印出256色矩阵")]),_._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("for")]),_._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("in")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[_._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("for")]),_._v(" j "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("in")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[_._v("range")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(":")]),_._v("\n        code "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" i "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("16")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" j\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[_._v('"\\u001b[38;5;%dm%d"')]),_._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[_._v("%")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" code"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[_._v('"\\u001b[0m"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n")])])]),t("h3",{attrs:{id:"背景颜色"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景颜色","aria-hidden":"true"}},[_._v("#")]),_._v(" 背景颜色")]),_._v(" "),t("p",[_._v("原理同字体颜色")]),_._v(" "),t("p",[_._v("8色:")]),_._v(" "),t("ul",[t("li",[_._v("黑色背景："),t("code",[_._v("\\u001b[40m")])]),_._v(" "),t("li",[_._v("红色背景："),t("code",[_._v("\\u001b[41m")])]),_._v(" "),t("li",[_._v("绿色背景："),t("code",[_._v("\\u001b[42m")])]),_._v(" "),t("li",[_._v("黄色背景："),t("code",[_._v("\\u001b[43m")])]),_._v(" "),t("li",[_._v("蓝色背景："),t("code",[_._v("\\u001b[44m")])]),_._v(" "),t("li",[_._v("洋红色背景："),t("code",[_._v("\\u001b[45m")])]),_._v(" "),t("li",[_._v("青色背景："),t("code",[_._v("\\u001b[46m")])]),_._v(" "),t("li",[_._v("白色背景："),t("code",[_._v("\\u001b[47m")])])]),_._v(" "),t("p",[_._v("16色:")]),_._v(" "),t("ul",[t("li",[_._v("亮黑色背景："),t("code",[_._v("\\u001b[40;1m")])]),_._v(" "),t("li",[_._v("亮红色背景："),t("code",[_._v("\\u001b[41;1m")])]),_._v(" "),t("li",[_._v("亮绿色背景："),t("code",[_._v("\\u001b[42;1m")])]),_._v(" "),t("li",[_._v("亮黄色背景："),t("code",[_._v("\\u001b[43;1m")])]),_._v(" "),t("li",[_._v("亮蓝色背景："),t("code",[_._v("\\u001b[44;1m")])]),_._v(" "),t("li",[_._v("亮洋红色背景："),t("code",[_._v("\\u001b[45;1m")])]),_._v(" "),t("li",[_._v("亮青色背景："),t("code",[_._v("\\u001b[46;1m")])]),_._v(" "),t("li",[_._v("亮白色背景："),t("code",[_._v("\\u001b[47;1m")])])]),_._v(" "),t("p",[_._v("256色:")]),_._v(" "),t("ul",[t("li",[t("code",[_._v("\\u001b[48;5;${ID}m")])])]),_._v(" "),t("p",[_._v("重置:")]),_._v(" "),t("ul",[t("li",[_._v("仍然是 "),t("code",[_._v("\\u001b[0m")])])]),_._v(" "),t("h3",{attrs:{id:"样式设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#样式设置","aria-hidden":"true"}},[_._v("#")]),_._v(" 样式设置")]),_._v(" "),t("ul",[t("li",[_._v("粗体："),t("code",[_._v("\\u001b[1m")])]),_._v(" "),t("li",[_._v("下划线："),t("code",[_._v("\\u001b[4m")])]),_._v(" "),t("li",[_._v("反色："),t("code",[_._v("\\u001b[7m")])])]),_._v(" "),t("h3",{attrs:{id:"光标控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#光标控制","aria-hidden":"true"}},[_._v("#")]),_._v(" 光标控制")]),_._v(" "),t("ul",[t("li",[_._v("光标向上移动："),t("code",[_._v("\\u001b[{n}A")]),_._v("将光标向上移动"),t("code",[_._v("n")]),_._v("格。")]),_._v(" "),t("li",[_._v("光标向下移动："),t("code",[_._v("\\u001b[{n}B")]),_._v("将光标向下移动"),t("code",[_._v("n")]),_._v("格。")]),_._v(" "),t("li",[_._v("光标向右移动："),t("code",[_._v("\\u001b[{n}C")]),_._v("将光标向右移动"),t("code",[_._v("n")]),_._v("格。")]),_._v(" "),t("li",[_._v("光标向左移动："),t("code",[_._v("\\u001b[{n}D")]),_._v("将光标向左移动"),t("code",[_._v("n")]),_._v("格。")]),_._v(" "),t("li",[_._v("光标按行向下移动："),t("code",[_._v("\\u001b[{n}E")]),_._v("将光标向下移动"),t("code",[_._v("n")]),_._v("行并且将光标移至行首。")]),_._v(" "),t("li",[_._v("光标按行向上移动："),t("code",[_._v("\\u001b[{n}F")]),_._v("将光标向上移动"),t("code",[_._v("n")]),_._v("行并且将光标移至行首。")]),_._v(" "),t("li",[_._v("设置光标所在列："),t("code",[_._v("\\u001b[{n}G")]),_._v("将光标移至第"),t("code",[_._v("n")]),_._v("列（行数与当前所在行保持一致）。")]),_._v(" "),t("li",[_._v("设置光标所在位置："),t("code",[_._v("\\u001b[{n};{m}H")]),_._v("将光标移至第"),t("code",[_._v("n")]),_._v("行"),t("code",[_._v("m")]),_._v("列，坐标原点从屏幕左上角开始。")]),_._v(" "),t("li",[_._v("保存光标当前所在位置："),t("code",[_._v("\\u001b[{s}")]),_._v("。")]),_._v(" "),t("li",[_._v("读取光标上一次保存的位置："),t("code",[_._v("\\u001b[{u}")]),_._v("。")])]),_._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[_._v("#")]),_._v(" 参考资料")]),_._v(" "),t("p",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s/PrYBXRoUApbcalaIgY7LPQ",target:"_blank",rel:"noopener noreferrer"}},[_._v("WeChat: 震惊！原来命令行还可以这么玩？！"),t("OutboundLink")],1)]),_._v(" "),t("p",[t("a",{attrs:{href:"http://blog.csdn.net/justheretobe/article/details/7259718",target:"_blank",rel:"noopener noreferrer"}},[_._v("stty的用法及解析--escape sequence code的用法"),t("OutboundLink")],1)])],1)},[],!1,null,null,null);v.default=a.exports}}]);