(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{630:function(t,e,a){"use strict";a.r(e);var r=a(0),v=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"将已有文档转化为-gitbook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将已有文档转化为-gitbook","aria-hidden":"true"}},[t._v("#")]),t._v(" 将已有文档转化为 Gitbook")]),t._v(" "),a("p",[t._v("如果本地已经有一个Word或HTML文档，可以使用 "),a("code",[t._v("gitbook-convert")]),t._v(" 工具直接转化为 gitbook 电子书。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/GitbookIO/gitbook-convert",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub : gitbook-convert"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"gitbook-convert-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitbook-convert-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" gitbook-convert 简介")]),t._v(" "),a("p",[t._v("导入文档的特性使用了 gitbook-convert 命令行程序。这个组件负责将原始文档转化到 makrdown 文件，以及 SUMMARY.md 的创建。\ngitbook-convert 根据文章的结构，将文章划分成章节和子章节。因此，原始文档的一级标题都会被转化成一个章节。如果一个章节包含二级标题，则会为这个章节创建一个目录来包含每个子章节。")]),t._v(" "),a("p",[t._v("在章节目录里，会创建一个包含章节前言的 README.md 文件。第一个二级标题前的所有内容会被认为是一个章节的前言。这样的规则同样适用于第一个一级标题前的所有内容，它们会成为为书的前言。\n对于 .docx 文档，gitbook-convert 会将文档包含的所有图片导出到 assets/ 目录中。\n如果你需要更多的灵活性，可以考虑在本地使用 gitbook-convert，然后用 Git 或 GitHub 新建一个仓库并导入转化后的内容。")]),t._v(" "),a("h2",{attrs:{id:"安装-gitbook-convert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitbook-convert","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装 gitbook-convert")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gitbook-convert -g\n")])])]),a("h2",{attrs:{id:"可转化文件格式列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可转化文件格式列表","aria-hidden":"true"}},[t._v("#")]),t._v(" 可转化文件格式列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Extension")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Microsoft Office Open XML Document")]),t._v(" "),a("td",[t._v(".docx")])]),t._v(" "),a("tr",[a("td",[t._v("OpenOffice / Open Document Format")]),t._v(" "),a("td",[t._v(".odt")])]),t._v(" "),a("tr",[a("td",[t._v("Docbook Markup Language")]),t._v(" "),a("td",[t._v(".xml")])]),t._v(" "),a("tr",[a("td",[t._v("HyperText Markup Language")]),t._v(" "),a("td",[t._v(".html")])])])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ gitbook-convert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("export-directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"命令参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Short")]),t._v(" "),a("th",[t._v("Long")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("-t")]),t._v(" "),a("td",[t._v("--document-title")]),t._v(" "),a("td",[t._v("Name used for the main document title")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("-a")]),t._v(" "),a("td",[t._v("--assets-dir")]),t._v(" "),a("td",[t._v("Name of the document's assets export directory")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("assets")])]),t._v(" "),a("tr",[a("td",[t._v("-m")]),t._v(" "),a("td",[t._v("--max-depth")]),t._v(" "),a("td",[t._v("Maximum title depth to use to split your original document into sub-chapters")]),t._v(" "),a("td",[t._v("integer")]),t._v(" "),a("td",[t._v("2")])]),t._v(" "),a("tr",[a("td",[t._v("-p")]),t._v(" "),a("td",[t._v("--prefix")]),t._v(" "),a("td",[t._v("Prefix filenames by an incremental counter")]),t._v(" "),a("td",[t._v("flag")]),t._v(" "),a("td",[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("-d")]),t._v(" "),a("td",[t._v("--debug")]),t._v(" "),a("td",[t._v("Log stack trace when an error occurs")]),t._v(" "),a("td"),t._v(" "),a("td")])])])])},[],!1,null,null,null);v.options.__file="convert.md";e.default=v.exports}}]);