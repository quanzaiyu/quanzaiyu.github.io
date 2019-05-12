(window.webpackJsonp=window.webpackJsonp||[]).push([[621],{792:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"redis-数据库的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-数据库的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" Redis 数据库的使用")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis"),a("OutboundLink")],1),t._v(", REmote DIctionary Server 是一个由Salvatore Sanfilippo写的key-value存储系统。")]),t._v(" "),a("p",[t._v("Redis是一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。")]),t._v(" "),a("p",[t._v("它通常被称为数据结构服务器，因为值（value）可以是 字符串(String), 哈希(Hash), 列表(list), 集合(sets) 和 有序集合(sorted sets)等类型。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("Windows下载地址: "),a("a",{attrs:{href:"https://github.com/MicrosoftArchive/redis/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/MicrosoftArchive/redis/releases"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Linux 安装:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://download.redis.io/releases/redis-2.8.17.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" xzf redis-2.8.17.tar.gz\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" redis-2.8.17\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("p",[t._v("Ubuntu 安装:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" redis-server\n")])])]),a("h2",{attrs:{id:"基本使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本使用方法")]),t._v(" "),a("p",[t._v("安装后, 进入到 Redis 安装目录, 开启 Redis 服务, 默认监听 6379 端口")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ redis-server -v\nRedis server v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("3.2.100 sha"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("00000000:0 malloc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jemalloc-3.6.0 bits"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("64 build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dd26f1f93c5130ee\n\n$ redis-server.exe redis.windows.conf\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("11184"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 09 Apr 09:23:02.979 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Creating Server TCP listening socket 127.0.0.1:6379: bind: No error")]),t._v("\n\n$ redis-cli\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v("\nPONG\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" myKey abc\nOK\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" get myKey\nabc\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" info "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看服务器信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n")])])]),a("p",[t._v("相关可视化工具:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/uglide/RedisDesktopManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("RedisDesktopManager"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/caoxinyu/RedisClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("RedisClient"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cinience/RedisStudio",target:"_blank",rel:"noopener noreferrer"}},[t._v("RedisStudio"),a("OutboundLink")],1)])]),t._v(" "),a("imgLink",{attrs:{src:"date/20190409/001.png"}}),t._v(" "),a("h2",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("简介")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("特性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("场景")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("String(字符串)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("二进制安全")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可以包含任何数据,比如jpg图片或者序列化的对象,一个键最大能存储512M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("---")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Hash(字典)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("键值对集合,即编程语言中的Map类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("适合存储对象,并且可以像数据库中update一个属性一样只修改某一项属性值(Memcached中需要取出整个字符串反序列化成对象修改完再序列化存回去)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("存储、读取、修改用户属性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("List(列表)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("链表(双向链表)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("增删快,提供了操作某一段元素的API")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1,最新消息排行等功能(比如朋友圈的时间线) 2,消息队列")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Set(集合)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("哈希表实现,元素不重复")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1、添加、删除,查找的复杂度都是O(1) 2、为集合提供了求交集、并集、差集等操作")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1、共同好友 2、利用唯一性,统计访问网站的所有独立ip 3、好友推荐时,根据tag求交集,大于某个阈值就可以推荐")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Sorted Set(有序集合)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("将Set中的元素增加一个权重参数score,元素按score有序排列")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据插入集合时,已经进行天然排序")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1、排行榜 2、带权重的消息队列")])])])]),t._v(" "),a("h2",{attrs:{id:"数据库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库操作")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> SELECT 0 # 选择数据库db0\n")])])]),a("h2",{attrs:{id:"键的相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#键的相关操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 键的相关操作")]),t._v(" "),a("p",[t._v("键的基本操作格式: "),a("code",[t._v("COMMAND KEY_NAME")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("del key")]),t._v(" 删除 key")]),t._v(" "),a("li",[a("code",[t._v("dump key")]),t._v(" 序列号 key, 并返回被序列化的值")]),t._v(" "),a("li",[a("code",[t._v("rename key newKey")]),t._v(" 修改 key 的名称")]),t._v(" "),a("li",[a("code",[t._v("renamenx key newKey")]),t._v(" 仅当 newkey 不存在时，将 key 改名为 newkey")]),t._v(" "),a("li",[a("code",[t._v("exists key")]),t._v(" 检测 key 是否存在")]),t._v(" "),a("li",[a("code",[t._v("type key")]),t._v(" 返回 key 的类型")]),t._v(" "),a("li",[a("code",[t._v("randomkey")]),t._v(" 从当前数据库中随机返回一个 key")]),t._v(" "),a("li",[a("code",[t._v("move key db")]),t._v(" 将当前数据库的 key 移动到给定的数据库 db 当中")]),t._v(" "),a("li",[a("code",[t._v("keys pattern")]),t._v(" 查找所有符合给定模式 (pattern) 的 key")]),t._v(" "),a("li",[a("code",[t._v("expire key seconds")]),t._v(" 设置 key 的过期时间 (单位秒)")]),t._v(" "),a("li",[a("code",[t._v("pexpire key milliseconds")]),t._v(" 设置 key 的过期时间 (单位毫秒)")]),t._v(" "),a("li",[a("code",[t._v("expireat key timestamp")]),t._v(" 设置 key 的过期时间 (UNIX 秒时间戳)")]),t._v(" "),a("li",[a("code",[t._v("pexpireat key milliseconds-timestamp")]),t._v(" 设置 key 的过期时间 (UNIX 毫秒时间戳)")]),t._v(" "),a("li",[a("code",[t._v("ttl key")]),t._v(" 以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)")]),t._v(" "),a("li",[a("code",[t._v("pttl key")]),t._v(" 以毫秒为单位返回 key 的剩余的过期时间")]),t._v(" "),a("li",[a("code",[t._v("persist key")]),t._v(" 移除 key 的过期时间，key 将持久保持")])]),t._v(" "),a("h2",{attrs:{id:"字符串的相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串的相关操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串的相关操作")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("set key value")]),t._v(" 设置 key-value 键值对")]),t._v(" "),a("li",[a("code",[t._v("get key")]),t._v(" 获取 key 对应的 value")])]),t._v(" "),a("h3",{attrs:{id:"getrange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getrange","aria-hidden":"true"}},[t._v("#")]),t._v(" GETRANGE")]),t._v(" "),a("p",[t._v("返回 key 中字符串值的子字符")]),t._v(" "),a("p",[t._v("语法: "),a("code",[t._v("GETRANGE KEY_NAME start end")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('redis> set mykey "This is my test key"\nOK\n\nredis> getrange mykey 0 3\nThis\n')])])]),a("h3",{attrs:{id:"getset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getset","aria-hidden":"true"}},[t._v("#")]),t._v(" GETSET")]),t._v(" "),a("p",[t._v("将给定 key 的值设为 value ，并返回 key 的旧值(old value)")]),t._v(" "),a("p",[t._v("语法: "),a("code",[t._v("GETSET key value")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('redis> GETSET db mongodb    # 没有旧值，返回 nil\n(nil)\n\nredis> GET db\n"mongodb"\n\nredis> GETSET db redis      # 返回旧值 mongodb\n"mongodb"\n\nredis> GET db\n"redis"\n')])])]),a("h3",{attrs:{id:"mkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mkey","aria-hidden":"true"}},[t._v("#")]),t._v(" MKEY")]),t._v(" "),a("p",[t._v("Redis Mget 命令返回所有(一个或多个)给定 key 的值。 如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。")]),t._v(" "),a("p",[t._v("语法: "),a("code",[t._v("MGET KEY1 KEY2 .. KEYN")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('127.0.0.1:6379> mget foo mykey\n1) "bar"\n2) "This is my test key"\n')])])]),a("h3",{attrs:{id:"msetnx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#msetnx","aria-hidden":"true"}},[t._v("#")]),t._v(" Msetnx")]),t._v(" "),a("p",[t._v("语法: "),a("code",[t._v("MSETNX key1 value1 key2 value2 .. keyN valueN")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.runoob.com/redis/redis-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 教程 - RUNOOB"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.redis.cn/documentation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 文档中心"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.default=r.exports}}]);