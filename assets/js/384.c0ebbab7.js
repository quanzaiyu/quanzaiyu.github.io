(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{846:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"包含文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包含文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 包含文件")]),t._v(" "),s("h2",{attrs:{id:"include-和-require-语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-和-require-语句","aria-hidden":"true"}},[t._v("#")]),t._v(" include 和 require 语句")]),t._v(" "),s("p",[t._v("在 PHP 中，您可以在服务器执行 PHP 文件之前在该文件中插入一个文件的内容。")]),t._v(" "),s("p",[t._v("include 和 require 语句用于在执行流中插入写在其他文件中的有用的代码。")]),t._v(" "),s("p",[s("strong",[t._v("include 和 require 除了处理错误的方式不同之外，在其他方面都是相同的：")])]),t._v(" "),s("ul",[s("li",[t._v("require 生成一个致命错误（E_COMPILE_ERROR），在错误发生后脚本会停止执行。")]),t._v(" "),s("li",[t._v("include 生成一个警告（E_WARNING），在错误发生后脚本会继续执行。")])]),t._v(" "),s("p",[t._v("因此，如果希望脚本继续执行，并向用户输出结果，即使包含文件已丢失，那么请使用 include。")]),t._v(" "),s("p",[t._v("否则，在框架、CMS 或者复杂的 PHP 应用程序编程中，都始终使用 require 向执行流引用关键文件。这有助于提高应用程序的安全性和完整性，在某个关键文件意外丢失的情况下。")]),t._v(" "),s("p",[t._v("包含文件省去了大量的工作。这意味着您可以为所有网页创建标准页头、页脚或者菜单文件。然后，在页头需要更新时，您只需更新这个页头包含文件即可。")]),t._v(" "),s("p",[t._v("语法:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'filename'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'filename'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("对于 include，在执行文件时每次都要进行读取和评估；而对于 require，文件只处理一次。")]),t._v(" "),s("p",[t._v("举例:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v("<?php include 'header.php'; ?>")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Welcome to my home page!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Some text."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"include-once-与-require-once"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-once-与-require-once","aria-hidden":"true"}},[t._v("#")]),t._v(" include_once 与 require_once")]),t._v(" "),s("p",[t._v("每次使用include语句时，它都会重新将请求的文件导入，即使这个文件已经被导入过。")]),t._v(" "),s("p",[t._v("include_once 函数的作用与include相同，不过它会首先验证是否已经包含了该文件。如果已经包含，则不再执行include_once。否则，则必须包含该文件。除了这一点与include完全相同。")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include_once")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"fileinfo.php"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")]),t._v("\n")])])]),s("p",[t._v("require_once 同理。")])])},[],!1,null,null,null);n.options.__file="Include.md";a.default=n.exports}}]);