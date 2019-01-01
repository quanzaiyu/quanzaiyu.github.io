(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{918:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装与使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装与使用")]),t._v(" "),s("p",[t._v("下载链接: "),s("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Download Python.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("安装并添加到环境变量，一般安装的时候勾选 "),s("code",[t._v("Add Python to Environment variables")]),t._v(" 即可(Windows)")]),t._v(" "),s("p",[t._v("Linux 一般系统自带 Python，不过只是 Python2，需要使用 Python3 需自行安装。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("python")]),t._v(" 进入交互模式，使用 "),s("code",[t._v("exit()")]),t._v(" 退出交互模式，使用 "),s("code",[t._v("python -V")]),t._v(" 查看python版本号。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python\nPython 3.7.0a2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v3.7.0a2:f7ac4fe, Oct 17 2017, 17:06:29"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MSC v.1900 64 bit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AMD64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" on win32\nType "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyright"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"credits"')]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"license"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information.\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出Python交互模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" exit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看python 版本，注意是大写的V")]),t._v("\n$ python -V\nPython 3.7.0a2\n")])])]),s("p",[t._v("安装 pylint (用于python代码检测)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pylint\n")])])]),s("h2",{attrs:{id:"执行py文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行py文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行py文件")]),t._v(" "),s("p",[t._v("执行.py文件，直接在 python 后跟上文件名(绝对路径或相对路径)即可，注意必须带上.py扩展名。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python test.py\n")])])]),s("h2",{attrs:{id:"unicodedecodeerror的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicodedecodeerror的解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" UnicodeDecodeError的解决方案")]),t._v(" "),s("p",[t._v("如果安装后使用的时候会报")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误")]),t._v(" "),s("p",[t._v("UnicodeDecodeError: 'utf-8' codec can't decode byte 0xa1 in position 43: invalid start byte")])]),t._v(" "),s("p",[t._v("的错误，解决方法如下:")]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("c:\\program files\\python36\\lib\\site-packages\\pip\\compat\\__init__.py")]),t._v("约75行")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf_8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("改为")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cp936'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://blog.csdn.net/qq_25191257/article/details/56488662",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows上Python3.6 通过pip安装第三方库时出现UnicodeDecodeError的解决方法"),s("OutboundLink")],1)])])])},[],!1,null,null,null);e.options.__file="Install.md";a.default=e.exports}}]);