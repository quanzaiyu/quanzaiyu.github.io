(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{593:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"包-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包-package","aria-hidden":"true"}},[t._v("#")]),t._v(" 包(package)")]),t._v(" "),s("p",[t._v("包是一种管理 Python 模块命名空间的形式，从文件存储的角度看，包就是一个个文件夹。")]),t._v(" "),s("p",[t._v("比如有如下一个目录结构")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sound/                          # 顶层包\n      __init__.py               # 初始化 sound 包\n      formats/                  # 文件格式转换子包\n              __init__.py\n              wavread.py\n              wavwrite.py\n              aiffread.py\n              aiffwrite.py\n              auread.py\n              auwrite.py\n              ...\n      effects/                  # 声音效果子包\n              __init__.py\n              echo.py\n              surround.py\n              reverse.py\n              ...\n      filters/                  # filters 子包\n              __init__.py\n              equalizer.py\n              vocoder.py\n              karaoke.py\n              ...\n")])])]),s("h2",{attrs:{id:"使用-import-导入子包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-import-导入子包","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 import 导入子包")]),t._v(" "),s("p",[t._v("要使用 import 导入包中的某个模块，只需要用点 "),s("code",[t._v(".")]),t._v(" 分割即可，要使用其中的方法，必须带上包全名。")]),t._v(" "),s("p",[t._v("如:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echo\n\nsound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echofilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" atten"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用-from-import-导入子包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-from-import-导入子包","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 from...import 导入子包")]),t._v(" "),s("p",[t._v("还有一种导入子模块的方法是使用 from...import 导入，此时使用子包中的方法只需带上引入的模块名即可。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" echo\n\necho"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echofilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" atten"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"使用-from-import-导入子包中的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-from-import-导入子包中的方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 from...import 导入子包中的方法")]),t._v(" "),s("p",[t._v("此时要访问指定方法只需使用方法名即可 !")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echo "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" echofilter\n\nechofilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" atten"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用-from-package-import-导入包中所有模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-from-package-import-导入包中所有模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 from package import * 导入包中所有模块")]),t._v(" "),s("p",[t._v("导入语句遵循如下规则：如果包定义文件 "),s("code",[t._v("__init__.py")]),t._v(" 存在一个叫做 "),s("code",[t._v("__all__")]),t._v(" 的列表变量，那么在使用 from package import * 的时候就把这个列表中的所有名字作为包内容导入。")]),t._v(" "),s("p",[t._v("比如在 "),s("code",[t._v("sounds/effects/__init__.py")]),t._v(" 中包含如下代码:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("__all__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"surround"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reverse"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("这表示当你使用"),s("code",[t._v("from sound.effects import *")]),t._v("这种用法时，只会导入包里面这三个子模块。")]),t._v(" "),s("p",[t._v("如果 "),s("code",[t._v("__all__")]),t._v(" 真的没有定义，那么使用 "),s("code",[t._v("from sound.effects import *")]),t._v(" 这种语法的时候，就不会导入包 "),s("code",[t._v("sound.effects")]),t._v(" 里的任何子模块。他只是把包 "),s("code",[t._v("sound.effects")]),t._v(" 和它里面定义的所有内容导入进来（可能运行 "),s("code",[t._v("__init__.py")]),t._v(" 里定义的初始化代码）。")]),t._v(" "),s("p",[t._v("比如在 "),s("code",[t._v("__init__.py")]),t._v(" 中包含以下代码")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("echo\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surround\n")])])]),s("p",[t._v("将会引入代码中提及的两个模块")]),t._v(" "),s("p",[t._v("如果代码改为")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sound"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("effects "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n")])])]),s("p",[t._v("这将导入指定包下的所有模块。")])])},[],!1,null,null,null);a.default=e.exports}}]);