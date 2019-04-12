(window.webpackJsonp=window.webpackJsonp||[]).push([[276],{529:function(a,t,s){"use strict";s.r(t);var e=s(1),v=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"函数-内置函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数-内置函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 函数 - 内置函数")]),a._v(" "),s("h2",{attrs:{id:"数学函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数学函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 数学函数")]),a._v(" "),s("p",[a._v("不在"),s("code",[a._v("math")]),a._v(" 下的数学函数:")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("abs(num)")]),a._v(" 返回num的绝对值")]),a._v(" "),s("li",[s("code",[a._v("min(nums)")]),a._v(" 返回nums的最小值")]),a._v(" "),s("li",[s("code",[a._v("max(nums)")]),a._v(" 返回nums的最大值")]),a._v(" "),s("li",[s("code",[a._v("round(num)")]),a._v(" 返回num的四舍五入值")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("code",[a._v("divmod(x,y)")]),a._v("  返回一个元组（x//y, x%y）")])]),a._v(" "),s("p",[a._v("如 divmod(100,10)  返回一个元组（10,0），第一个元素的100/10的商，第二个元素的100/10的余数")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("pow(x,y)")]),a._v("  求次方，返回 x**y 的结果")]),a._v(" "),s("li",[s("code",[a._v("pow(x,y,z)")]),a._v(" 返回 x**y%z 的结果")]),a._v(" "),s("li",[s("code",[a._v("range(num)")]),a._v(" 获取随机数或随机字符 eg. range(10) 从0到10的随机数")])]),a._v(" "),s("h2",{attrs:{id:"转换函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转换函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 转换函数")]),a._v(" "),s("h3",{attrs:{id:"类型转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换","aria-hidden":"true"}},[a._v("#")]),a._v(" 类型转换")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("int(x [,base])")]),a._v(" 将x转换为一个整数")]),a._v(" "),s("li",[s("code",[a._v("float(x)")]),a._v(" 将x转换到一个浮点数")]),a._v(" "),s("li",[s("code",[a._v("complex(real [,imag])")]),a._v(" 创建一个复数")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("code",[a._v("str(x)")]),a._v(" 将对象x转换为字符串")]),a._v(" "),s("li",[s("code",[a._v("bool(x)")]),a._v(" 将其他数据类型的对象转化为布尔值")])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[s("code",[a._v("list(s)")]),a._v(" 将序列s转换为一个列表")]),a._v(" "),s("li",[s("code",[a._v("tuple(s)")]),a._v(" 将序列s转换为一个元组")]),a._v(" "),s("li",[s("code",[a._v("set(s)")]),a._v(" 将序列s转换为可变集合")]),a._v(" "),s("li",[s("code",[a._v("dict(d)")]),a._v(" 创建一个字典。d 必须是一个序列 (key,value)元组")]),a._v(" "),s("li",[s("code",[a._v("frozenset(s)")]),a._v(" 转换为不可变集合")])]),a._v(" "),s("h3",{attrs:{id:"进制转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进制转换","aria-hidden":"true"}},[a._v("#")]),a._v(" 进制转换")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("bin()")]),a._v(" 将一个整数转换为一个二进制字符串")]),a._v(" "),s("li",[s("code",[a._v("oct()")]),a._v(" 将一个整数转换为一个八进制字符串")]),a._v(" "),s("li",[s("code",[a._v("hex()")]),a._v(" 将一个整数转换为一个十六进制字符串")])]),a._v(" "),s("h3",{attrs:{id:"其它转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它转换","aria-hidden":"true"}},[a._v("#")]),a._v(" 其它转换")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("ascii()")]),a._v(" 将一个字符转换为它的ascii")]),a._v(" "),s("li",[s("code",[a._v("bytes()")]),a._v(" 将一个字符转换为字节码")]),a._v(" "),s("li",[s("code",[a._v("chr()")]),a._v(" 将一个整数转换为一个字符")]),a._v(" "),s("li",[s("code",[a._v("ord()")]),a._v(" 将一个字符转换为它的整数值")]),a._v(" "),s("li",[s("code",[a._v("unichr(x)")]),a._v(" 将一个整数转换为Unicode字符")])]),a._v(" "),s("h2",{attrs:{id:"集合运算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集合运算","aria-hidden":"true"}},[a._v("#")]),a._v(" 集合运算")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("all()")]),a._v(" 所有传入参数为真，才为真\n"),s("ul",[s("li",[a._v("all([True,False])返回 False")]),a._v(" "),s("li",[a._v("all([True,True])返回 True")])])]),a._v(" "),s("li",[s("code",[a._v("any()")]),a._v(" 任何一个传入参数为真，就为真\n"),s("ul",[s("li",[a._v("any([True,False])返回 True")]),a._v(" "),s("li",[a._v("any([False,False])返回 False")])])])]),a._v(" "),s("h2",{attrs:{id:"eval"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eval","aria-hidden":"true"}},[a._v("#")]),a._v(" eval")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("eval()")]),a._v("  执行python代码，并返回其执行结果。")])]),a._v(" "),s("p",[a._v("如")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1+2+3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("eval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"print(123)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("在接收用户输入时应避免使用eval，因为别有用心的用户可能借此注入恶意代码")]),a._v(" "),s("h2",{attrs:{id:"exec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exec","aria-hidden":"true"}},[a._v("#")]),a._v(" exec")]),a._v(" "),s("p",[s("code",[a._v("exec()")]),a._v("  执行python代码（可以是编译过的，也可以是未编译的），没有返回结果（返回None）")]),a._v(" "),s("p",[a._v("如")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"print(123)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<string>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exec"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("   \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"print(123)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"isinstance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#isinstance","aria-hidden":"true"}},[a._v("#")]),a._v(" isinstance")]),a._v(" "),s("p",[s("code",[a._v("isinstance(object, class)")]),a._v(" 判断对象是否是某个类的实例.")]),a._v(" "),s("p",[a._v("如")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("isinstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h2",{attrs:{id:"其他函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 其他函数")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("dir()")]),a._v("  接收对象作为参数，返回该对象的所有属性和方法")]),a._v(" "),s("li",[s("code",[a._v("help()")]),a._v(" 接收对象作为参数，更详细地返回该对象的所有属性和方法")]),a._v(" "),s("li",[s("code",[a._v("slice(起始下标，终止下标，步长)")]),a._v("  对序列化类型数据切片，返回一个新的对象，步长默认为1。")]),a._v(" "),s("li",[s("code",[a._v("globals()")]),a._v("  返回一个字典，包括所有的全局变量与它的值所组成的键值对")]),a._v(" "),s("li",[s("code",[a._v("locals()")]),a._v("  返回一个字典，包括所有的局部变量与它的值所组成的键值对")]),a._v(" "),s("li",[s("code",[a._v("compile()")]),a._v("  接收.py文件或字符串作为传入参数，将其编译成python字节码。")]),a._v(" "),s("li",[s("code",[a._v("hash()")]),a._v("  对传入参数取哈希值并返回")]),a._v(" "),s("li",[s("code",[a._v("id()")]),a._v(" 返回内存地址，可用于查看两个变量是否指向相同一块内存地址")]),a._v(" "),s("li",[s("code",[a._v("issubclass(subclass,class)")]),a._v(" 查看这个类是否是另一个类的派生类，如果是返回True，否则返回False")]),a._v(" "),s("li",[s("code",[a._v("memoryview()")]),a._v(" 查看内存地址")]),a._v(" "),s("li",[s("code",[a._v("repr()")]),a._v(" 执行传入对象中的_repr_方法")]),a._v(" "),s("li",[s("code",[a._v("type()")]),a._v(" 返回对象类型")]),a._v(" "),s("li",[s("code",[a._v("staticmethod()")]),a._v(" 返回静态方法")]),a._v(" "),s("li",[s("code",[a._v("super()")]),a._v(" 返回基类")]),a._v(" "),s("li",[s("code",[a._v("vars()")]),a._v(" 返回当前模块中的所有变量")]),a._v(" "),s("li",[s("code",[a._v("next()")])]),a._v(" "),s("li",[s("code",[a._v("iter()")])]),a._v(" "),s("li",[s("code",[a._v("object()")])])]),a._v(" "),s("p",[a._v("参考：")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/huamingao/p/5887887.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("python3内置函数详解"),s("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=v.exports}}]);