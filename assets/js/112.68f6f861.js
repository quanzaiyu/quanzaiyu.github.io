(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{731:function(s,a,n){"use strict";n.r(a);var t=n(1),e=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"cpp-开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cpp-开发","aria-hidden":"true"}},[s._v("#")]),s._v(" CPP 开发")]),s._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("yum 安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v(" -y gcc gcc-c++\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("源码安装 GNU GCC")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz\n"),n("span",{attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xzvf gcc-7.3.0.tar.gz\n"),n("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" gcc-7.3.0\n./contrib/download_prerequisites\n"),n("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" gcc-build-4.8.5\n"),n("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" gcc-build-4.8.5\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/configure --prefix"),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr\n"),n("span",{attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("make")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("验证安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("gcc --version\ngcc "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GCC"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 4.8.5\n\ng++ --version\ng++ "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GCC"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 4.8.5\n\n"),n("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" gcc\n/usr/bin/gcc\n\n"),n("span",{attrs:{class:"token function"}},[s._v("which")]),s._v(" g++\n/usr/bin/g++\n\nrpm -qa "),n("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("grep")]),s._v(" gcc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"编写源代码测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写源代码测试","aria-hidden":"true"}},[s._v("#")]),s._v(" 编写源代码测试")]),s._v(" "),n("p",[n("code",[s._v("cpp")]),s._v(" 测试")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@localhost test]# vim main.cpp \n\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello world!" << endl;\n    return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("code",[s._v("c")]),s._v(" 测试")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[root@localhost test]# vim main.cpp \n\n#include <stdio.h>\nint main() {\n    printf("Hello world!\\n");\n    return 0;\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost test]# ./test\nHello world\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("编译")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost test]# g++ main.cpp -o main\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("运行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@localhost test]# ./main\nHello world!\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}],!1,null,null,null);e.options.__file="cpp.md";a.default=e.exports}}]);