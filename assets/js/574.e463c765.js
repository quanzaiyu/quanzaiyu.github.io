(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{750:function(a,s,t){"use strict";t.r(s);var e=t(1),r=Object(e.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux-管道及重定向输入输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-管道及重定向输入输出","aria-hidden":"true"}},[a._v("#")]),a._v(" Linux 管道及重定向输入输出")]),a._v(" "),t("h2",{attrs:{id:"管道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道","aria-hidden":"true"}},[a._v("#")]),a._v(" 管道")]),a._v(" "),t("p",[a._v("管道符号 "),t("code",[a._v("|")]),a._v("，其作用是，在前一个命令的基础上，在交给下一个命令进一步处理（前面的命令的输出当作后面的命令输入）, 用一句话来概括 “把前一个命令原本要输出到屏幕的标准正常数据当作是后一个命令的标准输入”")]),a._v(" "),t("p",[a._v("管道只允许正确的输出通过，通常管道会配合正则输出, 其执行格式为 "),t("code",[a._v("命令A | 命令B")])]),a._v(" "),t("h3",{attrs:{id:"管道的常见使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管道的常见使用场景","aria-hidden":"true"}},[a._v("#")]),a._v(" 管道的常见使用场景")]),a._v(" "),t("p",[t("strong",[a._v("筛选指定端口的服务")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -ntlp "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 22\ntcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1008/sshd   \n")])])]),t("p",[t("strong",[a._v("统计目录大小")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("du")]),a._v("\n6.1M\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v(".")]),a._v("\n")])])]),t("p",[t("strong",[a._v("过滤MAC地址")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ifconfig")]),a._v(" -a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" ether "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("awk")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("}'")]),a._v("\n02:42:52:31:90:57\n00:0c:29:c3:2c:49\n82:bd:9f:b7:00:e5\n52:54:00:e0:95:6a\n52:54:00:e0:95:6a\n")])])]),t("h2",{attrs:{id:"重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向","aria-hidden":"true"}},[a._v("#")]),a._v(" 重定向")]),a._v(" "),t("ul",[t("li",[a._v("标准输入重定向（STDIN，文件描述符为0）：默认从键盘输入，也可从其他文件或命令中输入。")]),a._v(" "),t("li",[a._v("标准输出重定向（STDOUT，文件描述符为1）：默认输出到屏幕。")]),a._v(" "),t("li",[a._v("错误输出重定向（STDERR，文件描述符为2）：默认输出到屏幕。")])]),a._v(" "),t("p",[a._v("输入重定向中用到的符号及其作用:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("命令 < 文件")]),a._v(" 将文件作为命令的标准输入")]),a._v(" "),t("li",[t("code",[a._v("命令 << 分界符")]),a._v("  从标准输入中读入，直到遇见分界符才停止")]),a._v(" "),t("li",[t("code",[a._v("命令 < 文件1 > 文件2")]),a._v("  将文件1作为命令的标准输入并将标准输出到文件2")])]),a._v(" "),t("p",[a._v("输出重定向中用到的符号及其作用:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("命令 > 文件")]),a._v(" 将标准输出重定向到一个文件中（清空原有文件的数据）")]),a._v(" "),t("li",[t("code",[a._v("命令 2> 文件")]),a._v("  将错误输出重定向到一个文件中（清空原有文件的数据）")]),a._v(" "),t("li",[t("code",[a._v("命令 >> 文件")]),a._v("  将标准输出重定向到一个文件中（追加到原有内容的后面）")]),a._v(" "),t("li",[t("code",[a._v("命令 2>> 文件")]),a._v(" 将错误输出重定向到一个文件中（追加到原有内容的后面）")]),a._v(" "),t("li",[t("code",[a._v("命令 >> 文件 2>&1")]),a._v(" 或 "),t("code",[a._v("命令 &>> 文件")]),a._v(" 将标准输出与错误输出共同写入到文件中（追加到原有内容的后面）")]),a._v(" "),t("li")]),a._v(" "),t("p",[a._v("对于重定向中的标准输出模式，可以省略文件描述符1不写，而错误输出模式的文件描述符2是必须要写的。")]),a._v(" "),t("h3",{attrs:{id:"重定向正确输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向正确输出","aria-hidden":"true"}},[a._v("#")]),a._v(" 重定向正确输出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/yum.repos.d/CentOS-Base.repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" a.txt \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" a.txt \n\n$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello world"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" a.txt \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" a.txt \nHello world\n")])])]),t("p",[t("code",[a._v(">")]),a._v(" 符号会覆盖掉file文件原有的内容， 要想向file文件追加内容，使用“ >> ”符号")]),a._v(" "),t("p",[a._v("添加到黑洞区：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ echo hello >/dev/null\n$ cd /dev/null\n-bash: cd: /dev/null: 不是目录\n$ cat /dev/null\n")])])]),t("h3",{attrs:{id:"追加正确输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#追加正确输出","aria-hidden":"true"}},[a._v("#")]),a._v(" 追加正确输出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Welcome to xiaoyulive.top"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" a.txt \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" a.txt \nHello world\nWelcome to xiaoyulive.top\n")])])]),t("h3",{attrs:{id:"重定向错误输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向错误输出","aria-hidden":"true"}},[a._v("#")]),a._v(" 重定向错误输出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc -name "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("  2"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])])]),t("h3",{attrs:{id:"追加错误输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#追加错误输出","aria-hidden":"true"}},[a._v("#")]),a._v(" 追加错误输出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc -name "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("  2"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("  \n")])])]),t("h3",{attrs:{id:"重定向所有输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向所有输出","aria-hidden":"true"}},[a._v("#")]),a._v(" 重定向所有输出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc -name "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])])]),t("h3",{attrs:{id:"追加所有输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#追加所有输出","aria-hidden":"true"}},[a._v("#")]),a._v(" 追加所有输出")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /etc -name "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("passwd")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("   \n")])])]),t("h3",{attrs:{id:"“改邪归正”输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#“改邪归正”输出","aria-hidden":"true"}},[a._v("#")]),a._v(" “改邪归正”输出")]),a._v(" "),t("p",[a._v("所谓”改邪归正”，即，"),t("code",[a._v("2>&1")]),a._v("，将标准错误输出2重定向到标准输出中，"),t("code",[a._v("2>")]),a._v("就是标准错误输出，"),t("code",[a._v("&")]),a._v("是为了让bash将"),t("code",[a._v("1")]),a._v("解释成标准输出而不是文件名字为1的文件。")]),a._v(" "),t("h3",{attrs:{id:"输入重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入重定向","aria-hidden":"true"}},[a._v("#")]),a._v(" 输入重定向")]),a._v(" "),t("p",[a._v("输入重定向相对来说有些冷门，在工作中遇到的概率会小一点。输入重定向的作用是把文件直接导入到命令中。接下来使用输入重定向把readme.txt文件导入给wc -l命令，统计一下文件中的内容行数。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$ wc -l < readme.txt\n2\n")])])]),t("p",[a._v("上述命令实际上等同于 "),t("code",[a._v("cat readme.txt | wc -l")]),a._v(" 的管道符命令组合。")]),a._v(" "),t("h3",{attrs:{id:"应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用","aria-hidden":"true"}},[a._v("#")]),a._v(" 应用")]),a._v(" "),t("p",[t("strong",[a._v("交互式写文件")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat > hello.txt <<EOF")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" node1\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" node2\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" node3\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" EOF\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@node1 ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cat hello.txt ")]),a._v("\nnode1\nnode2\nnode3\n")])])]),t("p",[a._v("下面这条自造的命令就结合使用了mail邮件命令与输入重定向的分界符，其目的是让用户一直输入内容，直到用户输入了其自定义的分界符时，才结束输入。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('$ mail -s "Readme" root@linuxprobe.com << over\n> I think linux is very practical\n> I hope to learn more\n> can you teach me ?\n> over\n')])])]),t("h2",{attrs:{id:"通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通配符","aria-hidden":"true"}},[a._v("#")]),a._v(" 通配符")]),a._v(" "),t("p",[a._v("通配符就是通用的匹配信息的符号，比如星号（*）代表匹配零个或多个字符，问号（?）代表匹配单个字符，中括号内加上数字[0-9]代表匹配0～9之间的单个数字的字符，而中括号内加上字母[abc]则是代表匹配a、b、c三个字符中的任意一个字符。下面我们就来匹配所有在/dev目录中且以sda开头的文件：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l /dev/sda*\nbrw-rw----. 1 root disk 8, 0 May 4 15:55 /dev/sda\nbrw-rw----. 1 root disk 8, 1 May 4 15:55 /dev/sda1\nbrw-rw----. 1 root disk 8, 2 May 4 15:55 /dev/sda2\n")])])]),t("p",[a._v("如果只想查看文件名为sda开头，但是后面还紧跟其他某一个字符的文件的相关信息，该怎么操作呢？这时就需要用到问号来进行通配了。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l /dev/sda?\nbrw-rw----. 1 root disk 8, 1 May 4 15:55 /dev/sda1\nbrw-rw----. 1 root disk 8, 2 May 4 15:55 /dev/sda2\n")])])]),t("p",[a._v("除了使用[0-9]来匹配0~9之间的单个数字，也可以用[135]这样的方式仅匹配这三个指定数字中的一个，若没有匹配到，则不会显示出来：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l /dev/sda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("0-9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nbrw-rw----. 1 root disk 8, 1 May 4 15:55 /dev/sda1\nbrw-rw----. 1 root disk 8, 2 May 4 15:55 /dev/sda2\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -l /dev/sda"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("135"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nbrw-rw----. 1 root disk 8, 1 May 4 15:55 /dev/sda1\n")])])]),t("h2",{attrs:{id:"转义字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转义字符","aria-hidden":"true"}},[a._v("#")]),a._v(" 转义字符")]),a._v(" "),t("p",[a._v("4个最常用的转义字符:")]),a._v(" "),t("ul",[t("li",[a._v("反斜杠（\\）：使反斜杠后面的一个变量变为单纯的字符串。")]),a._v(" "),t("li",[a._v("单引号（''）：转义其中所有的变量为单纯的字符串。")]),a._v(" "),t("li",[a._v('双引号（""）：保留其中的变量属性，不进行转义处理。')]),a._v(" "),t("li",[a._v("反引号（``）：把其中的命令执行后返回结果。")])]),a._v(" "),t("p",[a._v("我们先定义一个名为PRICE的变量并赋值为5，然后输出以双引号括起来的字符串与变量信息：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# PRICE=5")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@linuxprobe ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# echo "Price is $PRICE"')]),a._v("\nPrice is 5\n")])])]),t("p",[a._v("接下来，我们希望能够输出"),t("code",[a._v("Price is $5")]),a._v("，即价格是5美元的字符串内容，但碰巧美元符号与变量提取符号合并后的"),t("code",[a._v("$$")]),a._v("作用是显示当前程序的进程ID号码，于是命令执行后输出的内容并不是我们所预期的：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Price is $'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PRICE")]),a._v('"')]),a._v(" \nPrice is 3767PRICE\n")])])]),t("p",[a._v("要想让第一个 "),t("code",[a._v("$")]),a._v(" 乖乖地作为美元符号，那么就需要使用反斜杠（\\）来进行转义，将这个命令提取符转义成单纯的文本，去除其特殊功能。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Price is \\$'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PRICE")]),a._v('"')]),a._v("\nPrice is "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$5")]),a._v("\n")])])]),t("p",[a._v("而如果只需要某个命令的输出值时，可以像"),t("code",[a._v("命令")]),a._v("这样，将命令用反引号括起来，达到预期的效果。例如，将反引号与 "),t("code",[a._v("uname -a")]),a._v(" 命令结合，然后使用echo命令来查看本机的Linux版本和内核信息：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("uname")]),a._v(" -a"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v("\nLinux linuxprobe.com 3.10.0-123.el7.x86_64 "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#1 SMP Mon May 5 11:16:57 EDT 2017 x86_64 x86_64 x86_64 GNU/Linux")]),a._v("\n")])])])])},[],!1,null,null,null);s.default=r.exports}}]);