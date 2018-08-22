(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{808:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"七牛云命令行工具-qshell"}},[s._v("七牛云命令行工具 qshell")]),s._v(" "),e("p",[s._v("七牛云官方介绍页："),e("a",{attrs:{href:"https://developer.qiniu.com/kodo/tools/1302/qshell",target:"_blank",rel:"noopener noreferrer"}},[s._v("qshell"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"安装"}},[s._v("安装")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._m(3),s._v(" "),s._m(4),s._v(" "),e("h2",{attrs:{id:"注册"}},[s._v("注册")]),s._v(" "),e("p",[s._v("通过以下命令，配置 accessKey 和 secretKey")]),s._v(" "),s._m(5),s._m(6),s._v(" "),s._m(7),s._v(" "),e("h2",{attrs:{id:"上传"}},[s._v("上传")]),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),e("p",[s._v("一些常见配置项如下：")]),s._v(" "),e("ul",[s._m(11),s._v(" "),s._m(12),s._v(" "),e("li",[e("code",[s._v("up_host")]),s._v(" 上传域名，可选设置，可参见"),e("a",{attrs:{href:"https://developer.qiniu.com/kodo/manual/1671/region-endpoint",target:"_blank",rel:"noopener noreferrer"}},[s._v("存储区域"),e("OutboundLink")],1),s._v("进行配置")]),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),s._m(18),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),s._m(22),s._v(" "),s._m(23),s._v(" "),s._m(24),s._v(" "),s._m(25)]),s._v(" "),e("p",[s._v("第二步，使用命令进行同步")]),s._v(" "),e("p",[s._v("创建好配置文件之后，就可以使用以下命令对目录下的文件进行同步了：")]),s._v(" "),s._m(26),e("p",[s._v("格式如下：")]),s._v(" "),s._m(27),e("p",[s._v("其中，第一个参数 ThreadCount 代表同时上传的最大协程数量，第二参数 LocalUploadConfig 为配置文件路径。")]),s._v(" "),e("p",[s._v("上传成功后，控制台输出：")]),s._v(" "),s._m(28),e("p",[s._v("可以看到，上传成功，并输出日志文件。")]),s._v(" "),e("h2",{attrs:{id:"参考资料"}},[s._v("参考资料")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://developer.qiniu.com/kodo/kb/3858/video-of-how-to-use-qrs-tools",target:"_blank",rel:"noopener noreferrer"}},[s._v("视频教程--命令行工具使用"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/qiniu/qshell/blob/master/docs/qupload.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("qupload 介绍 - GitHub"),e("OutboundLink")],1)])])},[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("下载后，配置环境变量，本人使用 MacOS，将 "),e("code",[s._v("qshell_darwin_x64")]),s._v(" 文件拷贝到 "),e("code",[s._v("~/tools")]),s._v(" 下，命名为 "),e("code",[s._v("qshell")]),s._v("，完整路径为 "),e("code",[s._v("~/tools/qshell")]),s._v("。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("编辑 "),t("code",[this._v("~/.bash_profile")]),this._v("，加入：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("PATH"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),t("span",{attrs:{class:"token variable"}},[this._v("$PATH")]),this._v(":~/tools\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用命令 "),t("code",[this._v("source ~/.bash_profile")]),this._v(" 使配置生效。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在终端输入 "),t("code",[this._v("qshell -h")]),this._v(" 可以看到已经配置成功。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("qshell account ak sk\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ak 和 sk 可以在 "),t("code",[this._v("个人中心 -> 密钥管理")]),this._v(" 中看到。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("figure",[t("img",{attrs:{src:"https://img.xiaoyulive.top/img/new/WX20180821-154801.png/small",alt:""}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("通过 "),t("code",[this._v("qupload")]),this._v(" 命令可以进行本地目录的上传操作，具体操作如下：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("第一步，新建一个json，比如名叫 "),t("code",[this._v("~/qupload.json")]),this._v("，用于配置上传的一些参数：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"src_dir"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"~/Desktop/qshell-bucket"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"bucket"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"xiaoyu"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"access_key"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"xxx"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"secret_key"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"xxx"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"up_host"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('"http://upload-z2.qiniup.com"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"key_prefix"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('""')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"rescan_local"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token boolean"}},[s._v("true")]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"check_exists"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token boolean"}},[s._v("true")]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"check_size"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token boolean"}},[s._v("true")]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"overwrite"')]),s._v(" "),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token boolean"}},[s._v("true")]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"skip_fixed_strings"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('".svn,.git"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{attrs:{class:"token property"}},[s._v('"skip_suffixes"')]),e("span",{attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{attrs:{class:"token string"}},[s._v('".DS_Store,.exe"')]),s._v("\n"),e("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("src_dir")]),this._v(" 本地同步路径，为全路径格式，工具将同步该目录下面所有的文件；在Windows系统下面使用的时候，注意src_dir的设置遵循D:\\Quanzaiyu\\backup这种方式。也就是路径里面的\\要有两个（\\）")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("bucket")]),this._v(" 同步数据的目标空间名称，可以为公开空间或私有空间")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("rescan_local")]),this._v(" 默认情况下，本地新增的文件不会被同步，需要手动设置为true才会去检测新增文件")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("check_size")]),this._v(" 在check_exists设置为true的情况下，如果check_hash为false，那么你可以设置check_size为true做简单的大小检查，以查看本地文件和空间文件大小是否一致，默认不检查")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("check_exists")]),this._v(" 每个文件上传之前是否检查空间中是否存在同名文件，默认为false，不检查")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("check_hash")]),this._v(" 在check_exists设置为true的情况下生效，是否检查本地文件hash和空间文件hash一致，默认不检查，节约同步时间")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("overwrite")]),this._v(" 是否覆盖空间中已有的同名文件，默认不覆盖")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("key_prefix")]),this._v(" 在保存文件在七牛空间时，使用的文件名的前缀，默认为空字符串")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("ignore_dir")]),this._v(" 保存文件在七牛空间时，使用的文件名是否忽略本地路径，默认为false")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("file_type")]),this._v(" 文件存储类型，默认为0(标准存储） 1为低频存储")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("delete_on_success")]),this._v(" 上传成功的文件，同时删除本地文件，以达到节约磁盘的目的，默认为false")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("skip_file_prefixes")]),this._v(" 跳过所有文件名（不带相对路径）以该前缀列表里面字符串为前缀的文件")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("skip_path_prefixes")]),this._v(" 跳过所有文件路径（相对路径）以该前缀列表里面字符串为前缀的文件")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("skip_fixed_strings")]),this._v(" 跳过所有文件路径（相对路径）中包含该字符串列表中字符串的文件")])},function(){var s=this.$createElement,t=this._self._c||s;return t("li",[t("code",[this._v("skip_suffixes")]),this._v(" 跳过所有以该后缀列表里面字符串为后缀的文件或者目录")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("qshell qupload 100 ~/qupload.json\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("qshell qupload "),e("span",{attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("ThreadCount"),e("span",{attrs:{class:"token operator"}},[s._v(">")]),e("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("LocalUploadConfig"),e("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("See upload log at path /Users/DYT/.qshell/qupload/f7d9e1d6937cd86389b82d6cd617686a/f7d9e1d6937cd86389b82d6cd617686a.log\n✨  Done in 0.39s.\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])}],!1,null,null,null);t.default=n.exports}}]);