(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{762:function(a,t,s){"use strict";s.r(t);var n=s(1),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"使用-linux-进行-c-开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-linux-进行-c-开发","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用 Linux 进行 C++ 开发")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("p",[a._v("yum 安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -y gcc gcc-c++\n")])])]),s("p",[a._v("源码安装 GNU GCC")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://ftp.gnu.org/gnu/gcc/gcc-7.3.0/gcc-7.3.0.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xzvf gcc-7.3.0.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" gcc-7.3.0\n$ ./contrib/download_prerequisites\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" gcc-build-4.8.5\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cd")]),a._v(" gcc-build-4.8.5\n$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/configure --prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n")])])]),s("p",[a._v("验证安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ gcc --version\n$ gcc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("GCC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 4.8.5\n\n$ g++ --version\n$ g++ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("GCC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" 4.8.5\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" gcc\n/usr/bin/gcc\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" g++\n/usr/bin/g++\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rpm")]),a._v(" -qa "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" gcc\n")])])]),s("h2",{attrs:{id:"编写源代码测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写源代码测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 编写源代码测试")]),a._v(" "),s("p",[s("code",[a._v("cpp")]),a._v(" 测试")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ vim main.cpp\n\n#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello world!" << endl;\n    return 0;\n}\n')])])]),s("p",[s("code",[a._v("c")]),a._v(" 测试")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('$ vim main.cpp \n\n#include <stdio.h>\nint main() {\n    printf("Hello world!\\n");\n    return 0;\n}\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ ./test\nHello world\n")])])]),s("p",[a._v("编译")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ g++ main.cpp -o main\n")])])]),s("p",[a._v("运行")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ ./main\nHello world!\n")])])])])},[],!1,null,null,null);t.default=e.exports}}]);