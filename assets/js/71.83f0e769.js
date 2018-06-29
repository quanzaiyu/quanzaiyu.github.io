(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{399:function(s,t,a){s.exports=a.p+"assets/img/004.7031fe82.png"},804:function(s,t,a){"use strict";a.r(t);var n=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"thinkphp-中错误、异常的处理及调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#thinkphp-中错误、异常的处理及调试","aria-hidden":"true"}},[s._v("$")]),s._v(" ThinkPHP 中错误、异常的处理及调试")]),n("h2",{attrs:{id:"异常捕获"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#异常捕获","aria-hidden":"true"}},[s._v("$")]),s._v(" 异常捕获")]),n("p",[s._v("可以使用PHP的异常捕获进行必要的处理，但需要注意一点，在异常捕获中不要使用"),n("code",[s._v("think\\Controller")]),s._v("类的error、success和redirect方法，因为上述三个方法会抛出"),n("code",[s._v("HttpResponseException")]),s._v("异常，从而影响正常的异常捕获，例如：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("try")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Db"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("name")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("find")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token variable"}},[s._v("$this")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("success")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'执行成功!'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token keyword"}},[s._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\"),n("span",{attrs:{class:"token package"}},[s._v("Exception")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$e")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token variable"}},[s._v("$this")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("error")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'执行错误'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("应该改成")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("try")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Db"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("name")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'user'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("find")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token keyword"}},[s._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\"),n("span",{attrs:{class:"token package"}},[s._v("Exception")]),s._v(" "),n("span",{attrs:{class:"token variable"}},[s._v("$e")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token variable"}},[s._v("$this")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("error")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'执行错误'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{attrs:{class:"token variable"}},[s._v("$this")]),n("span",{attrs:{class:"token operator"}},[s._v("-")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),n("span",{attrs:{class:"token function"}},[s._v("success")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'执行成功!'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"手动抛出异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动抛出异常","aria-hidden":"true"}},[s._v("$")]),s._v(" 手动抛出异常")]),n("p",[s._v("可以使用"),n("code",[s._v("\\think\\Exception")]),s._v("类来抛出异常")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("// 使用think自带异常类抛出异常")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Exception")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'异常消息'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("100006")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果不使用think异常类，也可以定义自己的异常类来抛出异常")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("foobar"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Exception")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'异常消息'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("也可以使用系统提供的助手函数 "),n("code",[s._v("exception")]),s._v(" 来简化处理：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("exception")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'异常消息'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("100006")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 使用自定义异常类")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("exception")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'异常消息'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token number"}},[s._v("100006")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \\"),n("span",{attrs:{class:"token package"}},[s._v("foobar"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Exceeption")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"抛出-http-异常"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抛出-http-异常","aria-hidden":"true"}},[s._v("$")]),s._v(" 抛出 HTTP 异常")]),n("p",[s._v("可以使用"),n("code",[s._v("\\think\\exception\\HttpException")]),s._v("类来抛出异常")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("// 抛出 HTTP 异常")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("exception"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("HttpException")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("404")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'异常消息'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("null")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("系统提供了助手函数"),n("code",[s._v("abort")]),s._v("简化HTTP异常的处理，例如：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("abort")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("404")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'异常消息'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("参数"),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("HTTP异常可以单独定义异常模板，请参考后面的404页面。")]),n("h2",{attrs:{id:"性能调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#性能调试","aria-hidden":"true"}},[s._v("$")]),s._v(" 性能调试")]),n("p",[s._v("开发过程中，有些时候为了测试性能，经常需要调试某段代码的运行时间或者内存占用开销，系统提供了"),n("code",[s._v("think\\Debug")]),s._v("类可以很方便的获取某个区间的运行时间和内存占用情况。 例如：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("Debug"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("remark")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// ...其他代码段")]),s._v("\nDebug"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("remark")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// ...也许这里还有其他代码")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 进行统计区间")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" Debug"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("getRangeTime")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'s'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("表示统计begin位置到end位置的执行时间（单位是秒），begin必须是一个已经标记过的位置，如果这个时候end位置还没被标记过，则会自动把当前位置标记为end标签，输出的结果类似于："),n("code",[s._v("0.0056s")])]),n("p",[s._v("默认的统计精度是小数点后4位，如果觉得这个统计精度不够，还可以设置例如：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" Debug"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("getRangeTime")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token number"}},[s._v("6")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'s'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可能的输出会变成："),n("code",[s._v("0.005587s")])]),n("p",[s._v("如果你的环境支持内存占用统计的话，还可以使用"),n("code",[s._v("getRangeMem")]),s._v("方法进行区间内存开销统计（单位为kb），例如：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" Debug"),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{attrs:{class:"token function"}},[s._v("getRangeMem")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'kb'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("第三个参数使用m表示进行内存开销统计，输出的结果可能是："),n("code",[s._v("625kb")])]),n("p",[s._v("同样，如果end标签没有被标记的话，会自动把当前位置先标记位end标签。")]),n("p",[s._v("系统还提供了助手函数"),n("code",[s._v("debug")]),s._v("用于完成相同的作用，上面的代码可以改成：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("debug")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// ...其他代码段")]),s._v("\n"),n("span",{attrs:{class:"token function"}},[s._v("debug")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// ...也许这里还有其他代码")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("// 进行统计区间")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("debug")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'s'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("debug")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token number"}},[s._v("6")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'s'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("debug")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'begin'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'end'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'m'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'kb'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"sql-调试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sql-调试","aria-hidden":"true"}},[s._v("$")]),s._v(" SQL 调试")]),n("p",[s._v("需要在数据库配置中添加:")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'debug'")]),s._v("          "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{attrs:{class:"token boolean"}},[s._v("true")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("才能开启 SQL 调试，这样的话可以在页面中输出调试信息:")]),n("figure",[n("img",{attrs:{src:a(399),alt:""}})]),n("h2",{attrs:{id:"_404-页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_404-页面","aria-hidden":"true"}},[s._v("$")]),s._v(" 404 页面")]),n("p",[s._v("一旦抛出了"),n("code",[s._v("HttpException")]),s._v("异常，可以支持定义单独的异常页面的模板地址，只需要在应用配置文件中增加：")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'http_exception_template'")]),s._v("    "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("// 定义404错误的重定向页面地址")]),s._v("\n    "),n("span",{attrs:{class:"token number"}},[s._v("404")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{attrs:{class:"token constant"}},[s._v("APP_PATH")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'404.html'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{attrs:{class:"token comment"}},[s._v("// 还可以定义其它的HTTP status")]),s._v("\n    "),n("span",{attrs:{class:"token number"}},[s._v("401")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),n("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("  "),n("span",{attrs:{class:"token constant"}},[s._v("APP_PATH")]),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'401.html'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("模板文件支持模板引擎中的标签。")]),n("blockquote",[n("p",[n("code",[s._v("http_exception_template")]),s._v("配置仅在部署模式下面生效。")])]),n("p",[s._v("一般来说"),n("code",[s._v("HTTP")]),s._v("异常是由系统自动抛出的，但我们也可以手动抛出")]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{attrs:{class:"token class-name"}},[n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("think"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("exception"),n("span",{attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("HttpException")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token number"}},[s._v("404")]),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'页面不存在'")]),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("或者通过助手函数"),n("code",[s._v("abort")]),s._v("手动抛出"),n("code",[s._v("HTTP")]),s._v("异常，例如：")]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("abort(404,'页面不存在');\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}],e=a(1),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);t.default=r.exports}}]);