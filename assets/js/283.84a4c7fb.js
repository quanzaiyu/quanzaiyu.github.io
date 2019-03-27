(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{536:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"python-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" Python 简介")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.python.org/3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python3"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.python.org/ftp/python/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTP镜像"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unofficial Windows Binaries for Python Extension Packages"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("Python是一门动态语言。变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。")]),t._v(" "),s("p",[t._v("Python的3.0版本，常被称为Python 3000，或简称Py3k。相对于Python的早期版本，这是一个较大的升级。相对于Python2 (最新版本为2.7) ，有了更多的特性，很多语法规则也有了改变，在设计的时候没有考虑向下兼容。")]),t._v(" "),s("h2",{attrs:{id:"venv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#venv","aria-hidden":"true"}},[t._v("#")]),t._v(" venv")]),t._v(" "),s("p",[t._v("在开发Python应用程序的时候，系统安装的 Python3 只有一个版本, 比如3.7。所有第三方的包都会被pip安装到Python3的site-packages目录下。")]),t._v(" "),s("p",[t._v("如果我们要同时开发多个应用程序，那这些应用程序都会共用一个 Python，就是安装在系统的 Python3。如果应用A需要 jinja 2.7，而应用B需要jinja 2.6 怎么办？")]),t._v(" "),s("p",[t._v("这种情况下，每个应用可能需要各自拥有一套“独立”的Python运行环境。"),s("code",[t._v("virtualenv")]),t._v(" 就是用来为一个应用创建一套“隔离”的Python运行环境。(可理解成每个 node 项目下的 node_modules)")]),t._v(" "),s("p",[t._v("安装 venv")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" virtualenv\n")])])]),s("p",[t._v("进入项目目录, 创建一个独立的Python运行环境，命名为venv")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ virtualenv --no-site-packages venv\n")])])]),s("p",[t._v("加上 "),s("code",[t._v("--no-site-packages")]),t._v(" 选项，已经安装到系统Python环境中的所有第三方包都不会复制过来，这样，我们就得到了一个不带任何第三方包的“干净”的Python运行环境。")]),t._v(" "),s("p",[t._v("安装成功后, 可以在项目目录下看到一个 venv 文件夹, 激活后终端也可看到加了 (venv) 前缀:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("PS D:\\Documents\\crawler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" d:/Documents/crawler/venv/Scripts/activate.ps1\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" PS D:\\Documents\\crawler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("默认应该会自动激活 venv 环境, 如果没有激活, 可执行:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./venv/Scripts/activate\n")])])]),s("p",[t._v("如果在 Windows 上使用 PS 的时候激活失败, 会提示:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("PS D:\\Documents\\crawler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" d:/Documents/crawler/venv/Scripts/activate.ps1.ps1                                                                 在此系统上禁止运行脚本。有关详细\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" 无法加载文件 D:\\Documents\\crawler\\venv\\Scripts\\activate.ps1，因为_Execution_Policies。在此系统上禁止运行脚本。有关详细\n信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("135170 中的 about_Execution_Policies。\n所在位置 行:1 字符: 3                                                ion\n+ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" d:/Documents/crawler/venv/Scripts/activate.ps1\n+   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n    + CategoryInfo          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" SecurityError: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("，PSSecurityException\n    + FullyQualifiedErrorId "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(":")]),t._v(" UnauthorizedAccess\n")])])]),s("p",[t._v("此时, 需要使用管理员打开 PS, 并执行 "),s("code",[t._v("Set-ExecutionPolicy RemoteSigned")]),t._v(", 输入 y 即可")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("PS C:\\Windows\\system32"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Set-ExecutionPolicy RemoteSigned\n\n执行策略更改\n执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("135170\n中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 是"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 全是"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("A"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 否"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 全否"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 暂停"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 帮助 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认值为“N”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": y\n")])])]),s("p",[t._v("如果安装不成功, 可能需要先更新 pip")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --upgrade pip\n")])])]),s("p",[t._v("编写代码的时候, 可以安装 pylint 以进行代码检查")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -U pylint\n")])])]),s("h2",{attrs:{id:"安装与使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装与使用")]),t._v(" "),s("p",[t._v("下载链接: "),s("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Download Python.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("安装并添加到环境变量，一般安装的时候勾选 "),s("code",[t._v("Add Python to Environment variables")]),t._v(" 即可(Windows)")]),t._v(" "),s("p",[t._v("Linux 一般系统自带 Python，不过只是 Python2，需要使用 Python3 需自行安装。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("python")]),t._v(" 进入交互模式，使用 "),s("code",[t._v("exit()")]),t._v(" 退出交互模式，使用 "),s("code",[t._v("python -V")]),t._v(" 查看python版本号。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python\nPython 3.7.0a2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v3.7.0a2:f7ac4fe, Oct 17 2017, 17:06:29"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MSC v.1900 64 bit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AMD64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" on win32\nType "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"help"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copyright"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"credits"')]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"license"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" information.\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出Python交互模式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" exit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看python 版本，注意是大写的V")]),t._v("\n$ python -V\nPython 3.7.0a2\n")])])]),s("p",[t._v("安装 pylint (用于python代码检测)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pylint\n")])])]),s("h2",{attrs:{id:"执行py文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行py文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行py文件")]),t._v(" "),s("p",[t._v("执行.py文件，直接在 python 后跟上文件名(绝对路径或相对路径)即可，注意必须带上.py扩展名。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ python test.py\n")])])]),s("h2",{attrs:{id:"cython"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cython","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://cython.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cython"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Cython语言是Python的一个超集，编译成C语言，产生的性能提升可以从几个百分点到几个数量级，具体取决于手头的任务。 对于受Python原生对象类型约束的工作，加速将不会很大。 但是对于数值操作，或任何不涉及Python自身内部的操作，收益可能是巨大的。 这样，许多Python的本地限制可以被绕过或完全超越。")]),t._v(" "),s("h3",{attrs:{id:"cython优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cython优势","aria-hidden":"true"}},[t._v("#")]),t._v(" Cython优势")]),t._v(" "),s("p",[t._v("除了能够加速已经编写的代码之外，Cython还具有其他几个优点：")]),t._v(" "),s("ul",[s("li",[t._v("使用外部C库可以更快")]),t._v(" "),s("li",[t._v("可以同时使用C和Python内存管理")]),t._v(" "),s("li",[t._v("可以根据需要选择安全性或速度")]),t._v(" "),s("li",[t._v("Cython可以使用Python类型的提示语法")])]),t._v(" "),s("h2",{attrs:{id:"anaconda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#anaconda","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.anaconda.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Anaconda"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Anaconda指的是一个开源的Python发行版本，其包含了conda、Python等180多个科学包及其依赖项。因为包含了大量的科学包，Anaconda 的下载文件比较大（约 531 MB），如果只需要某些包，或者需要节省带宽或存储空间，也可以使用Miniconda这个较小的发行版（仅包含conda和 Python）。")]),t._v(" "),s("h2",{attrs:{id:"unicodedecodeerror的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unicodedecodeerror的解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" UnicodeDecodeError的解决方案")]),t._v(" "),s("p",[t._v("如果安装后使用的时候会报")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("错误")]),t._v(" "),s("p",[t._v("UnicodeDecodeError: 'utf-8' codec can't decode byte 0xa1 in position 43: invalid start byte")])]),t._v(" "),s("p",[t._v("的错误，解决方法如下:")]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("c:\\program files\\python36\\lib\\site-packages\\pip\\compat\\__init__.py")]),t._v("约75行")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf_8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("改为")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cp936'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://blog.csdn.net/qq_25191257/article/details/56488662",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows上Python3.6 通过pip安装第三方库时出现UnicodeDecodeError的解决方法"),s("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=e.exports}}]);