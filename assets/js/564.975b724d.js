(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{745:function(a,r,i){"use strict";i.r(r);var e=i(1),t=Object(e.a)({},function(){var a=this,r=a.$createElement,i=a._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"linux-压缩与解压"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#linux-压缩与解压","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 压缩与解压")]),a._v(" "),i("h2",{attrs:{id:"tar"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tar","aria-hidden":"true"}},[a._v("#")]),a._v(" tar")]),a._v(" "),i("ul",[i("li",[i("code",[a._v("tar -cvf archive.tar file")]),a._v(" 创建一个非压缩的 tarball")]),a._v(" "),i("li",[i("code",[a._v("tar -cvf archive.tar file1 file2 dir1")]),a._v(" 创建一个包含了 'file1', 'file2' 以及 'dir1'的档案文件")]),a._v(" "),i("li",[i("code",[a._v("tar -tf archive.tar")]),a._v(" 显示一个包中的内容")]),a._v(" "),i("li",[i("code",[a._v("tar -xvf archive.tar")]),a._v(" 释放一个包")]),a._v(" "),i("li",[i("code",[a._v("tar -xvf archive.tar -C /tmp")]),a._v(" 将压缩包释放到 /tmp目录下")]),a._v(" "),i("li",[i("code",[a._v("tar -cvfj archive.tar.bz2 dir1")]),a._v(" 创建一个bzip2格式的压缩包")]),a._v(" "),i("li",[i("code",[a._v("tar -xvfj archive.tar.bz2")]),a._v(" 解压一个bzip2格式的压缩包")]),a._v(" "),i("li",[i("code",[a._v("tar -cvfz archive.tar.gz dir1")]),a._v(" 创建一个gzip格式的压缩包")]),a._v(" "),i("li",[i("code",[a._v("tar -xzvf archive.tar.gz")]),a._v(" 解压一个gzip格式的压缩包")])]),a._v(" "),i("h2",{attrs:{id:"zip"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#zip","aria-hidden":"true"}},[a._v("#")]),a._v(" zip")]),a._v(" "),i("ul",[i("li",[i("code",[a._v("zip file.zip file")]),a._v(" 创建一个zip格式的压缩包")]),a._v(" "),i("li",[i("code",[a._v("zip -r file.zip file1 file2 dir1")]),a._v(" 将几个文件和目录同时压缩成一个zip格式的压缩包")]),a._v(" "),i("li",[i("code",[a._v("unzip file.zip")]),a._v(" 解压一个zip格式压缩包")])]),a._v(" "),i("h2",{attrs:{id:"bz2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bz2","aria-hidden":"true"}},[a._v("#")]),a._v(" bz2")]),a._v(" "),i("ul",[i("li",[i("code",[a._v("bzip2 file")]),a._v(" 压缩一个叫做 'file' 的文件 到 'file.bz2'")]),a._v(" "),i("li",[i("code",[a._v("bunzip2 file1.bz2")]),a._v(" 解压一个叫做 'file1.bz2'的文件")])]),a._v(" "),i("h2",{attrs:{id:"gz"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gz","aria-hidden":"true"}},[a._v("#")]),a._v(" gz")]),a._v(" "),i("ul",[i("li",[i("code",[a._v("gzip file")]),a._v(" 压缩一个叫做 'file' 的文件")]),a._v(" "),i("li",[i("code",[a._v("gzip -9 file")]),a._v(" 最大程度压缩")]),a._v(" "),i("li",[i("code",[a._v("gunzip file.gz")]),a._v(" 解压一个叫做 'file.gz' 的文件")])]),a._v(" "),i("h2",{attrs:{id:"rar"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#rar","aria-hidden":"true"}},[a._v("#")]),a._v(" rar")]),a._v(" "),i("p",[a._v("安装")]),a._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[a._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://www.rarlab.com/rar/rarlinux-x64-5.3.0.tar.gz\n$ "),i("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xzvf rarlinux-x64-5.3.0.tar.gz -C /usr/local\n")])])]),i("p",[a._v("rar软件不需要安装，直接解压到/usr/local下，然后执行以下命令")]),a._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[a._v("$ "),i("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /usr/local/rar/rar /usr/local/bin/rar\n$ "),i("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /usr/local/rar/unrar /usr/local/bin/unrar\n")])])]),i("p",[a._v("使用")]),a._v(" "),i("ul",[i("li",[i("code",[a._v("rar a file1.rar file")]),a._v(" 创建一个叫做 'file1.rar' 的包")]),a._v(" "),i("li",[i("code",[a._v("rar a file1.rar file1 file2 dir1")]),a._v(" 同时压缩 'file1', 'file2' 以及目录 'dir1'")]),a._v(" "),i("li",[i("code",[a._v("rar x file1.rar")]),a._v(" 解压rar包")]),a._v(" "),i("li",[i("code",[a._v("unrar x file1.rar")]),a._v(" 解压rar包")])]),a._v(" "),i("h2",{attrs:{id:"xz"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#xz","aria-hidden":"true"}},[a._v("#")]),a._v(" xz")]),a._v(" "),i("ul",[i("li",[i("code",[a._v("xz -d file")]),a._v(" 释放到 tar 文件")])])])},[],!1,null,null,null);r.default=t.exports}}]);