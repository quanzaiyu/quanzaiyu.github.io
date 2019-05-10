(window.webpackJsonp=window.webpackJsonp||[]).push([[418],{896:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"七牛云-oss-使用笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七牛云-oss-使用笔记","aria-hidden":"true"}},[e._v("#")]),e._v(" 七牛云 OSS 使用笔记")]),e._v(" "),s("p",[e._v("其实七牛云OSS我两年前就在使用，主要用于我的博客，当时还在使用 Hexo。后来，换成好几套系统，直到今天的 Vuepress。在写这篇文章之前，我一直使用的是阿里云OSS，主要是其客户端管理工具特别好用，可视化操作，特别方便。但是，总是欠费，过几天又得进去交交费，对于我这种穷苦农民工有点承受不起。然而七牛云里面有免费的OSS空间，想着还是折腾一下，再切到七牛云OSS吧。")]),e._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),s("h3",{attrs:{id:"oss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oss","aria-hidden":"true"}},[e._v("#")]),e._v(" OSS")]),e._v(" "),s("p",[e._v("OSS（Object Storage Service），中文名为对象存储服务。")]),e._v(" "),s("h3",{attrs:{id:"存储空间（bucket）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储空间（bucket）","aria-hidden":"true"}},[e._v("#")]),e._v(" 存储空间（Bucket）")]),e._v(" "),s("p",[e._v("存储空间是用于存储对象（Object）的容器，所有的对象都必须隶属于某个存储空间。可以设置和修改存储空间属性用来控制地域、访问权限、生命周期等，这些属性设置直接作用于该存储空间内所有对象，因此您可以通过灵活创建不同的存储空间来完成不同的管理功能。")]),e._v(" "),s("p",[e._v("同一个存储空间的内部是扁平的，没有文件系统的目录等概念，所有的对象都直接隶属于其对应的存储空间。")]),e._v(" "),s("ul",[s("li",[e._v("每个用户可以拥有多个存储空间。")]),e._v(" "),s("li",[e._v("存储空间的名称在 OSS 范围内必须是全局唯一的，一旦创建之后无法修改名称。")]),e._v(" "),s("li",[e._v("存储空间内部的对象数目没有限制。")])]),e._v(" "),s("p",[e._v("存储空间的命名规范如下：")]),e._v(" "),s("ul",[s("li",[e._v("只能包括小写字母、数字和短横线（-）。")]),e._v(" "),s("li",[e._v("必须以小写字母或者数字开头和结尾。")]),e._v(" "),s("li",[e._v("长度必须在3–63字节之间。")])]),e._v(" "),s("h3",{attrs:{id:"对象-文件（object）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象-文件（object）","aria-hidden":"true"}},[e._v("#")]),e._v(" 对象/文件（Object）")]),e._v(" "),s("p",[e._v("对象是 OSS 存储数据的基本单元，也被称为 OSS 的文件。对象由元信息（Object Meta），用户数据（Data）和文件名（Key）组成。对象由存储空间内部唯一的 Key 来标识。对象元信息是一个键值对，表示了对象的一些属性，比如最后修改时间、大小等信息，同时用户也可以在元信息中存储一些自定义的信息。")]),e._v(" "),s("p",[e._v("对象的生命周期是从上传成功到被删除为止。在整个生命周期内，对象信息不可变更。重复上传同名的对象会覆盖之前的对象，因此，OSS 不支持修改文件的部分内容等操作。")]),e._v(" "),s("p",[e._v("OSS 提供了追加上传功能，用户可以使用该功能不断地在Object尾部追加写入数据。")]),e._v(" "),s("p",[e._v("对象的命名规范如下：")]),e._v(" "),s("ul",[s("li",[e._v("使用UTF-8编码。")]),e._v(" "),s("li",[e._v("长度必须在1–1023字节之间。")]),e._v(" "),s("li",[e._v("不能以正斜线（/）或者反斜线（\\）开头。")]),e._v(" "),s("li",[e._v("区分大小写")])]),e._v(" "),s("h3",{attrs:{id:"访问密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问密钥","aria-hidden":"true"}},[e._v("#")]),e._v(" 访问密钥")]),e._v(" "),s("p",[e._v("AccessKey，简称 AK，指的是访问身份验证中用到的 AccessKeyId 和AccessKeySecret。OSS 通过使用 AccessKeyId 和 AccessKeySecret 对称加密的方法来验证某个请求的发送者身份。AccessKeyId 用于标识用户，AccessKeySecret 是用户用于加密签名字符串和 OSS 用来验证签名字符串的密钥，其中 AccessKeySecret 必须保密。对于 OSS 来说，AccessKey 的来源有：")]),e._v(" "),s("ul",[s("li",[e._v("Bucket 的拥有者申请的 AccessKey。")]),e._v(" "),s("li",[e._v("被 Bucket 的拥有者通过 RAM 授权给第三方请求者的 AccessKey。")]),e._v(" "),s("li",[e._v("被 Bucket 的拥有者通过 STS 授权给第三方请求者的 AccessKey。")])]),e._v(" "),s("p",[e._v("SecretKey，简称 SK，是用于加密签名字符串和服务器端验证签名字符串的密钥。")]),e._v(" "),s("h3",{attrs:{id:"存储区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#存储区域","aria-hidden":"true"}},[e._v("#")]),e._v(" 存储区域")]),e._v(" "),s("p",[e._v("Region 表示 OSS 的数据中心所在的地域，物理位置。用户可以根据费用、请求来源等综合选择数据存储的 Region。一般来说，距离用户更近的 Region 访问速度更快。")]),e._v(" "),s("p",[e._v("存储区域是在创建空间时指定的，一旦指定后就无法修改。")]),e._v(" "),s("h3",{attrs:{id:"访问域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问域名","aria-hidden":"true"}},[e._v("#")]),e._v(" 访问域名")]),e._v(" "),s("p",[e._v("Endpoint 表示 OSS 对外服务的访问域名。OSS 以 HTTP RESTful API 的形式对外提供服务，当访问不同的 Region 的时候，需要不同的域名。通过内网和外网访问同一个 Region 所需要的 Endpoint 也是不同的。")]),e._v(" "),s("h2",{attrs:{id:"七牛oss基本配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七牛oss基本配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 七牛OSS基本配置")]),e._v(" "),s("h3",{attrs:{id:"自定义域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义域名","aria-hidden":"true"}},[e._v("#")]),e._v(" 自定义域名")]),e._v(" "),s("p",[e._v("在融合CDN加速域名中进行配置")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-183018.png/small"}}),e._v(" "),s("p",[e._v("可以看到，配置的域名已经成功")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-182917.png/small"}}),e._v(" "),s("p",[e._v("再配置域名的CNAME即可")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-183130.png/small"}}),e._v(" "),s("p",[e._v("再配置默认域名即可")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-193234.png/small"}}),e._v(" "),s("h3",{attrs:{id:"样式处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式处理","aria-hidden":"true"}},[e._v("#")]),e._v(" 样式处理")]),e._v(" "),s("p",[e._v("首先，在图片样式中新增样式")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-180238.png/small"}}),e._v(" "),s("p",[e._v("可以添加水印、剪裁图片。")]),e._v(" "),s("p",[e._v("新增完成，可以在列表中看到")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-180031.png/small"}}),e._v(" "),s("p",[e._v("列表中包括一个 名称 和 处理接口，通过两种方式都能够对图片进行处理，如果使用处理接口，则使用以下格式：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://img.xiaoyulive.top/xxx.png?处理接口\n")])])]),s("p",[e._v("比如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://img.xiaoyulive.top/xxx.png?imageView2/2/w/800/h/600/format/webp/interlace/1/q/75|watermark/2/text/eGlhb3l1bGl2ZS50b3A=/font/5b6u6L2v6ZuF6buR/fontsize/400/fill/I0ZGRkZGRg==/dissolve/90/gravity/SouthEast/dx/10/dy/10\n")])])]),s("p",[e._v("如果使用名称，则需要在 样式分隔符设置里面配置，比如配置 分隔符为 "),s("code",[e._v("/")])]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-181138.png/small"}}),e._v(" "),s("p",[e._v("这使用以下格式就行：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://img.xiaoyulive.top/xxx.png/名称\n")])])]),s("p",[e._v("比如：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://img.xiaoyulive.top/xxx.png/small\n")])])]),s("h2",{attrs:{id:"七牛云命令行工具-qshell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七牛云命令行工具-qshell","aria-hidden":"true"}},[e._v("#")]),e._v(" 七牛云命令行工具 qshell")]),e._v(" "),s("p",[e._v("七牛云官方介绍页："),s("a",{attrs:{href:"https://developer.qiniu.com/kodo/tools/1302/qshell",target:"_blank",rel:"noopener noreferrer"}},[e._v("qshell"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[e._v("#")]),e._v(" 安装")]),e._v(" "),s("p",[e._v("下载后，配置环境变量以便全局使用，本人使用 MacOS，将 "),s("code",[e._v("qshell_darwin_x64")]),e._v(" 文件拷贝到 "),s("code",[e._v("~/tools")]),e._v(" 下，命名为 "),s("code",[e._v("qshell")]),e._v("，完整路径为 "),s("code",[e._v("~/tools/qshell")]),e._v("。")]),e._v(" "),s("p",[e._v("编辑 "),s("code",[e._v("~/.bash_profile")]),e._v("，加入：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ PATH"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$PATH")]),e._v(":~/tools\n")])])]),s("p",[e._v("使用命令 "),s("code",[e._v("source ~/.bash_profile")]),e._v(" 使配置生效。")]),e._v(" "),s("p",[e._v("在终端输入 "),s("code",[e._v("qshell -h")]),e._v(" 可以看到已经配置成功。")]),e._v(" "),s("h3",{attrs:{id:"注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册","aria-hidden":"true"}},[e._v("#")]),e._v(" 注册")]),e._v(" "),s("p",[e._v("通过以下命令，配置 accessKey 和 secretKey")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ qshell account "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ak"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("sk"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("ak 和 sk 可以在 "),s("code",[e._v("个人中心 -> 密钥管理")]),e._v(" 中看到。")]),e._v(" "),s("imgLink",{attrs:{src:"new/WX20180821-154801.png/small"}}),e._v(" "),s("h3",{attrs:{id:"上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传","aria-hidden":"true"}},[e._v("#")]),e._v(" 上传")]),e._v(" "),s("p",[e._v("通过 "),s("code",[e._v("qupload")]),e._v(" 命令可以进行本地目录的上传操作，具体操作如下：")]),e._v(" "),s("p",[e._v("第一步，新建一个json，比如名叫 "),s("code",[e._v("~/qupload.json")]),e._v("，用于配置上传的一些参数：")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"src_dir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/Desktop/qshell-bucket"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"bucket"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xiaoyu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"secret_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"up_host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"http://upload-z2.qiniup.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"key_prefix"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rescan_local"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"check_exists"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"check_size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"overwrite"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"skip_fixed_strings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".svn,.git"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"skip_suffixes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".DS_Store,.exe"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("一些常见配置项如下：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("src_dir")]),e._v(" 本地同步路径，为全路径格式，工具将同步该目录下面所有的文件；在Windows系统下面使用的时候，注意src_dir的设置遵循D:\\Quanzaiyu\\backup这种方式。也就是路径里面的\\要有两个（\\）")]),e._v(" "),s("li",[s("code",[e._v("bucket")]),e._v(" 同步数据的目标空间名称，可以为公开空间或私有空间")]),e._v(" "),s("li",[s("code",[e._v("up_host")]),e._v(" 上传域名，可选设置，可参见"),s("a",{attrs:{href:"https://developer.qiniu.com/kodo/manual/1671/region-endpoint",target:"_blank",rel:"noopener noreferrer"}},[e._v("存储区域"),s("OutboundLink")],1),e._v("进行配置")]),e._v(" "),s("li",[s("code",[e._v("rescan_local")]),e._v(" 默认情况下，本地新增的文件不会被同步，需要手动设置为true才会去检测新增文件")]),e._v(" "),s("li",[s("code",[e._v("check_size")]),e._v(" 在check_exists设置为true的情况下，如果check_hash为false，那么你可以设置check_size为true做简单的大小检查，以查看本地文件和空间文件大小是否一致，默认不检查")]),e._v(" "),s("li",[s("code",[e._v("check_exists")]),e._v(" 每个文件上传之前是否检查空间中是否存在同名文件，默认为false，不检查")]),e._v(" "),s("li",[s("code",[e._v("check_hash")]),e._v(" 在check_exists设置为true的情况下生效，是否检查本地文件hash和空间文件hash一致，默认不检查，节约同步时间")]),e._v(" "),s("li",[s("code",[e._v("overwrite")]),e._v(" 是否覆盖空间中已有的同名文件，默认不覆盖")]),e._v(" "),s("li",[s("code",[e._v("key_prefix")]),e._v(" 在保存文件在七牛空间时，使用的文件名的前缀，默认为空字符串")]),e._v(" "),s("li",[s("code",[e._v("ignore_dir")]),e._v(" 保存文件在七牛空间时，使用的文件名是否忽略本地路径，默认为false")]),e._v(" "),s("li",[s("code",[e._v("file_type")]),e._v(" 文件存储类型，默认为0(标准存储） 1为低频存储")]),e._v(" "),s("li",[s("code",[e._v("delete_on_success")]),e._v(" 上传成功的文件，同时删除本地文件，以达到节约磁盘的目的，默认为false")]),e._v(" "),s("li",[s("code",[e._v("skip_file_prefixes")]),e._v(" 跳过所有文件名（不带相对路径）以该前缀列表里面字符串为前缀的文件")]),e._v(" "),s("li",[s("code",[e._v("skip_path_prefixes")]),e._v(" 跳过所有文件路径（相对路径）以该前缀列表里面字符串为前缀的文件")]),e._v(" "),s("li",[s("code",[e._v("skip_fixed_strings")]),e._v(" 跳过所有文件路径（相对路径）中包含该字符串列表中字符串的文件")]),e._v(" "),s("li",[s("code",[e._v("skip_suffixes")]),e._v(" 跳过所有以该后缀列表里面字符串为后缀的文件或者目录")])]),e._v(" "),s("p",[e._v("第二步，使用命令进行同步")]),e._v(" "),s("p",[e._v("创建好配置文件之后，就可以使用以下命令对目录下的文件进行同步了：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ qshell qupload 100 ~/qupload.json\n")])])]),s("p",[e._v("格式如下：")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ qshell qupload "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ThreadCount"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("LocalUploadConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("其中，第一个参数 ThreadCount 代表同时上传的最大协程数量，第二参数 LocalUploadConfig 为配置文件路径。")]),e._v(" "),s("p",[e._v("上传成功后，控制台输出：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("See upload log at path /Users/DYT/.qshell/qupload/f7d9e1d6937cd86389b82d6cd617686a/f7d9e1d6937cd86389b82d6cd617686a.log\n✨  Done in 0.39s.\n")])])]),s("p",[e._v("可以看到，上传成功，并输出日志文件。")]),e._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.qiniu.com/kodo/kb/1347/how-to-ali-cloud-oss-files-on-migration-to-seven-niuyun-storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何将阿里云 OSS上 的文件迁移到七牛云存储？"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://www.capjsj.cn/qiniu_stylename.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("七牛图片处理样式的正确使用方式"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.qiniu.com/dora/manual/3683/img-directions-for-use",target:"_blank",rel:"noopener noreferrer"}},[e._v("图片处理使用说明 - 七牛云文档"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"http://developer.qiniu.com/kodo/manual/1277/product-introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("七牛云OSS产品概述"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("qupload")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.qiniu.com/kodo/kb/3858/video-of-how-to-use-qrs-tools",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频教程--命令行工具使用"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/qiniu/qshell/blob/master/docs/qupload.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("qupload 介绍 - GitHub"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);t.default=r.exports}}]);