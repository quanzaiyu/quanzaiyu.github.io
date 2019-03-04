(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{680:function(a,t,e){"use strict";e.r(t);var s=e(1),r=Object(s.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"安装-gitbook-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitbook-cli","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装 gitbook-cli")]),a._v(" "),e("p",[a._v("采用全局安装的方式，以便全局使用")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ npm install gitbook-cli -g\n# or\n$ yarn global add gitbook-cli\n")])])]),e("p",[a._v("查看gitbook版本确认是否安装成功")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gitbook -V\n")])])]),e("p",[a._v("查看帮助")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gitbook help\n")])])]),e("h2",{attrs:{id:"创建电子书项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建电子书项目","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建电子书项目")]),a._v(" "),e("p",[a._v("首先创建一个电子书目录，使用 "),e("code",[a._v("gitbook init")]),a._v(" 初始化一个电子书项目。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ mkdir MyBook\n$ cd MyBook\n$ gitbook init\n")])])]),e("p",[a._v("可以看到新创建的目录树是这样的:")]),a._v(" "),e("imgLink",{attrs:{src:"date/20181118/008.png"}}),a._v(" "),e("h2",{attrs:{id:"生成电子书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成电子书","aria-hidden":"true"}},[a._v("#")]),a._v(" 生成电子书")]),a._v(" "),e("p",[a._v("使用 "),e("code",[a._v("gitbook build")]),a._v(" 命令即可生成一个目录名为 "),e("code",[a._v("_book")]),a._v(" 电子书网页项目，目录结构长这样:")]),a._v(" "),e("imgLink",{attrs:{src:"date/20181118/009.png"}}),a._v(" "),e("p",[a._v("在浏览器直接打开 "),e("code",[a._v("index.html")]),a._v(" 可以看到效果:")]),a._v(" "),e("imgLink",{attrs:{src:"date/20181118/010.png"}}),a._v(" "),e("p",[a._v("可以看到，还能够自定义字体大小、字体和主题。")]),a._v(" "),e("h2",{attrs:{id:"运行服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行服务","aria-hidden":"true"}},[a._v("#")]),a._v(" 运行服务")]),a._v(" "),e("p",[a._v("可以直接使用 "),e("code",[a._v("$ gitbook serve")]),a._v(" 运行服务")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ gitbook serve\n")])])]),e("p",[a._v("默认监听端口为 4000，只需输入 "),e("code",[a._v("“http://localhost:4000")]),a._v(" 即可访问。")]),a._v(" "),e("h2",{attrs:{id:"导出电子书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出电子书","aria-hidden":"true"}},[a._v("#")]),a._v(" 导出电子书")]),a._v(" "),e("p",[a._v("确定电子书没有问题后，可以通过输入以下命令生成 mobi 电子书：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ gitbook mobi ./ ./MyFirstBook.mobi\n")])])]),e("p",[a._v("如果出现以下错误提示，说明您还未安装 Calibre。由于 GitBook 生成 mobi 格式电子书依赖 Calibre 的 ebook-convert，所以请先"),e("a",{attrs:{href:"http://kindlefere.com/tools#calibre",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击这里"),e("OutboundLink")],1),a._v("下载安装 Calibre。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Error: Need to install ebook-convert from Calibre\n")])])]),e("p",[a._v("Calibre 安装完毕后，对于 Mac OS X 系统，还需要先设置一下软链接：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /Applications/calibre.app/Contents/MacOS/ebook-convert /usr/local/bin\n")])])]),e("p",[a._v("再次运行转换命令，即可生成 mobi 格式电子书。")])],1)},[],!1,null,null,null);t.default=r.exports}}]);