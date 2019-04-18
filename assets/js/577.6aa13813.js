(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{935:function(t,a,s){"use strict";s.r(a);var n=s(1),v=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-进程操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-进程操作","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux 进程操作")]),t._v(" "),s("h2",{attrs:{id:"查看进程-ps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程-ps","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看进程: ps")]),t._v(" "),s("p",[t._v("ps命令用于报告当前系统的进程状态。可以搭配kill指令随时中断、删除不必要的程序。ps命令是最基本同时也是非常强大的进程查看命令，使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等，总之大部分信息都是可以通过执行该命令得到的，格式为 "),s("code",[t._v("ps [参数]")]),t._v("。")]),t._v(" "),s("p",[t._v("ps命令的参数以及作用")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-a")]),t._v(" "),s("td",[t._v("显示所有进程（包括其他用户的进程）")])]),t._v(" "),s("tr",[s("td",[t._v("-u")]),t._v(" "),s("td",[t._v("用户以及其他详细信息")])]),t._v(" "),s("tr",[s("td",[t._v("-x")]),t._v(" "),s("td",[t._v("显示没有控制终端的进程")])])])]),t._v(" "),s("p",[t._v("输出格式：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("l")]),t._v(" ：较长、较详细的将该PID 的的信息列出；")]),t._v(" "),s("li",[s("strong",[t._v("j")]),t._v(" ：工作的格式 (jobs format)")]),t._v(" "),s("li",[s("strong",[t._v("-f")]),t._v(" ：做一个更为完整的输出。")])]),t._v(" "),s("p",[t._v("Linux系统中时刻运行着许多进程，如果能够合理地管理它们，则可以优化系统的性能。在Linux系统中，有5种常见的进程状态，分别为运行、中断、不可中断、僵死与停止，其各自含义如下所示。")]),t._v(" "),s("ul",[s("li",[t._v("R（运行）：进程正在运行或在运行队列中等待。")]),t._v(" "),s("li",[t._v("S（中断）：进程处于休眠中，当某个条件形成后或者接收到信号时，则脱离该   状态。")]),t._v(" "),s("li",[t._v("D（不可中断）：进程不响应系统异步信号，即便用kill命令也不能将其中断。")]),t._v(" "),s("li",[t._v("Z（僵死）：进程已经终止，但进程描述符依然存在, 直到父进程调用wait4()系统函数后将进程释放。")]),t._v(" "),s("li",[t._v("T（停止）：进程收到停止信号后停止运行。")])]),t._v(" "),s("h3",{attrs:{id:"查看进程信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看进程信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("admin@sshk1 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -al\nF S   UID   PID  PPID  C PRI  NI ADDR SZ WCHAN  TTY          TIME CMD\n4 S     0 12086 11995  0  80   0 - 48077 do_wai pts/0    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v("\n4 S     0 12099 12086  0  80   0 - 28882 do_wai pts/0    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n0 S  1000 19693 19659  0  80   0 - 43992 poll_s pts/1    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n4 T     0 21923 12099  0  80   0 - 35493 do_sig pts/0    00:00:00 kubectl\n0 S  1000 24169 20708  0  80   0 - 43992 poll_s pts/2    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v("\n4 S     0 25275 12099  0  80   0 - 35493 futex_ pts/0    00:00:00 kubectl\n0 R  1000 26137 24388  0  80   0 - 37235 -      pts/3    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v("\n")])])]),s("p",[t._v("各相关信息的意义为：")]),t._v(" "),s("ul",[s("li",[t._v("F 代表这个程序的旗标 (flag)， 4 代表使用者为 superuser；")]),t._v(" "),s("li",[t._v("S 代表这个程序的状态 (STAT)；")]),t._v(" "),s("li",[t._v("UID 代表执行者身份")]),t._v(" "),s("li",[t._v("PID 进程的ID号！")]),t._v(" "),s("li",[t._v("PPID 父进程的ID；")]),t._v(" "),s("li",[t._v("C CPU使用的资源百分比")]),t._v(" "),s("li",[t._v("PRI指进程的执行优先权(Priority的简写)，其值越小越早被执行；")]),t._v(" "),s("li",[t._v("NI 这个进程的nice值，其表示进程可被执行的优先级的修正数值。")]),t._v(" "),s("li",[t._v("ADDR 这个是内核函数，指出该程序在内存的那个部分。如果是个执行 的程序，一般就是『 - 』")]),t._v(" "),s("li",[t._v("SZ 使用掉的内存大小；")]),t._v(" "),s("li",[t._v("WCHAN 目前这个程序是否正在运作当中，若为 - 表示正在运作；")]),t._v(" "),s("li",[t._v("TTY 登入者的终端机位置；")]),t._v(" "),s("li",[t._v("TIME 使用掉的 CPU 时间。")]),t._v(" "),s("li",[t._v("CMD 所下达的指令名称")])]),t._v(" "),s("h3",{attrs:{id:"列出目前所有的正在内存当中的程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出目前所有的正在内存当中的程序","aria-hidden":"true"}},[t._v("#")]),t._v(" 列出目前所有的正在内存当中的程序")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("admin@sshk1 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.0 191068  3532 ?        Ss   Nov15   1:11 /usr/lib/systemd/systemd --system --deserialize 20\nroot         2  0.0  0.0      0     0 ?        S    Nov15   0:00 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kthreadd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("各相关信息的意义为：")]),t._v(" "),s("ul",[s("li",[t._v("USER：该进程属于那个使用者账号。")]),t._v(" "),s("li",[t._v("PID ：该进程的进程ID号。")]),t._v(" "),s("li",[t._v("%CPU：该进程使用掉的 CPU 资源百分比；")]),t._v(" "),s("li",[t._v("%MEM：该进程所占用的物理内存百分比；")]),t._v(" "),s("li",[t._v("VSZ ：该进程使用掉的虚拟内存量 (Kbytes)")]),t._v(" "),s("li",[t._v("RSS ：该进程占用的固定的内存量 (Kbytes)")]),t._v(" "),s("li",[t._v("TTY ：该进程是在那个终端机上面运作，若与终端机无关，则显示 ?。另外， tty1-tty6 是本机上面的登入者程序，若为 pts/0 等等的，则表示为由网络连接进主机的程序。")]),t._v(" "),s("li",[t._v("STAT：该程序目前的状态")]),t._v(" "),s("li",[t._v("START：该进程被触发启动的时间；")]),t._v(" "),s("li",[t._v("TIME ：该进程实际使用 CPU 运作的时间。")]),t._v(" "),s("li",[t._v("COMMAND：该程序的实际指令。")])]),t._v(" "),s("h3",{attrs:{id:"优化显示输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优化显示输出","aria-hidden":"true"}},[t._v("#")]),t._v(" 优化显示输出")]),t._v(" "),s("p",[t._v("通常可以配合管道符或重定向到文件:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" psInfo.txt\n")])])]),s("p",[t._v("可以使用 "),s("code",[t._v("-o")]),t._v(" 选项输出指定字段:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -o pid,ppid,pgrp,session,tpgid,comm\n")])])]),s("p",[t._v("根据某个字段排序:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aux --sort -pcpu "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据 CPU 使用来升序排序")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aux --sort -pmem "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据 内存使用 来升序排序")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("pstree")]),t._v(" 命令树形显示进程:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("admin@sshk1 ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ pstree\nsystemd─┬─AliYunDun───19*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("AliYunDun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        ├─dockerd─┬─docker-containe─┬─7*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("docker-containe─┬─pause"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        │         │                 │                    └─9*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("docker-containe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        │         │                 ├─docker-containe─┬─pause\n        │         │                 │                 └─11*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("docker-containe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        │         │                 ├─docker-containe─┬─etcd───11*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("etcd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        │         │                 │                 └─10*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("docker-containe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        │         │                 └─31*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("docker-containe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        │         └─19*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dockerd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("查看特定用户进程:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -u admin\n")])])]),s("p",[t._v("通过进程名过滤:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -C "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),s("p",[t._v("显示所有进程信息:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef\n")])])]),s("h2",{attrs:{id:"结束进程-kill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束进程-kill","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束进程: kill")]),t._v(" "),s("p",[t._v("kill命令用来删除执行中的程序或工作。kill可将指定的信息送至程序。预设的信息为SIGTERM(15),可将指定程序终止。若仍无法终止该程序，可使用SIGKILL(9)信息尝试强制删除程序。程序或工作的编号可利用ps指令或job指令查看。")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("kill -l")]),t._v(" 列出所有信号名称：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -l\n 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGHUP       2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGINT       3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGQUIT      4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGILL\n 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTRAP      6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGABRT      7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGBUS       8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGFPE\n 3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGKILL     10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGUSR1     11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSEGV     12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGUSR2\n1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGPIPE     14"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGALRM     15"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTERM     16"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSTKFLT\n2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGCHLD     18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGCONT     19"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSTOP     20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTSTP\n3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGTTIN     22"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGTTOU     23"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGURG      24"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGXCPU\n4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGXFSZ     26"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGVTALRM   27"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGPROF     28"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGWINCH\n5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGIO       30"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGPWR      31"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGSYS      34"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN\n6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGRTMIN+1  36"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+2  37"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+3  38"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+4\n7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGRTMIN+5  40"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+6  41"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+7  42"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+8\n8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGRTMIN+9  44"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+10 45"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+11 46"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+12\n9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  SIGRTMIN+13 48"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+14 49"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMIN+15 50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-14\n10"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-13 52"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-12 53"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-11 54"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-10\n11"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-9  56"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-8  57"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-7  58"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-6\n12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-5  60"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-4  61"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-3  62"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-2\n13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX-1  64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" SIGRTMAX\n")])])]),s("p",[t._v("只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略，下面是常用的信号：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("HUP     1    终端断线\nINT     2    中断（同 Ctrl + C）\nQUIT    3    退出（同 Ctrl + \\）\nTERM   15    终止\nKILL    9    强制终止\nCONT   18    继续（与STOP相反， fg/bg命令）\nSTOP   19    暂停（同 Ctrl + Z）\n")])])]),s("p",[t._v("举例: 先用ps查找进程，然后用kill杀掉：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v("\nroot      3268  2884  0 16:21 pts/1    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" install.log\nroot      3370  2822  0 16:21 pts/0    00:00:00 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v("\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" 3268\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" 3268\n-bash: kill: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3268"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" - 没有那个进程\n")])])]),s("h2",{attrs:{id:"结束进程-killall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束进程-killall","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束进程: killall")]),t._v(" "),s("p",[t._v("killall命令使用进程的名称来杀死进程，使用此指令可以杀死一组同名进程。我们可以使用kill命令杀死指定进程PID的进程，如果要找到我们需要杀死的进程，我们还需要在之前使用ps等命令再配合grep来查找进程，而killall把这两个过程合二为一，是一个很好用的命令。")]),t._v(" "),s("p",[t._v("参数列表:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("-e：对长名称进行精确匹配；\n-l：忽略大小写的不同；\n-p：杀死进程所属的进程组；\n-i：交互式杀死进程，杀死进程前需要进行确认；\n-l：打印所有已知信号列表；\n-q：如果没有进程被杀死。则不输出任何信息；\n-r：使用正规表达式匹配要杀死的进程名称；\n-s：用指定的进程号代替默认信号“SIGTERM”；\n-u：杀死指定用户的进程。\n")])])]),s("p",[t._v("杀死所有同名进程:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("killall")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v("\n")])])]),s("h2",{attrs:{id:"结束进程-pkill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束进程-pkill","aria-hidden":"true"}},[t._v("#")]),t._v(" 结束进程: pkill")]),t._v(" "),s("p",[t._v("pkill命令可以按照进程名杀死进程。pkill和killall应用方法差不多，也是直接杀死运行中的程序。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ pgrep -l java\n4514 java\n4594 java\n9263 java\n19715 java\n19846 java\n19954 java\n20347 java\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pkill")]),t._v(" java\n")])])]),s("h2",{attrs:{id:"查看系统资源分配-top"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看系统资源分配-top","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看系统资源分配: top")]),t._v(" "),s("p",[t._v("top命令是Linux下常用的性能分析工具，能够实时显示系统中各个进程的资源占用状况，类似于Windows的任务管理器。")]),t._v(" "),s("p",[t._v("top是一个动态显示过程,即可以通过用户按键来不断刷新当前状态.如果在前台执行该命令,它将独占前台,直到用户终止该程序为止.比较准确的说,top命令提供了实时的对系统处理器的状态监视.它将显示系统中CPU最“敏感”的任务列表.该命令可以按CPU使用.内存使用和执行时间对任务进行排序；而且该命令的很多特性都可以通过交互式命令或者在个人定制文件中进行设定.")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190103/001.png"}}),t._v(" "),s("h3",{attrs:{id:"显示参数含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示参数含义","aria-hidden":"true"}},[t._v("#")]),t._v(" 显示参数含义")]),t._v(" "),s("p",[t._v("Tasks")]),t._v(" "),s("ul",[s("li",[t._v("total 进程总数")]),t._v(" "),s("li",[t._v("running 正在运行的进程数")]),t._v(" "),s("li",[t._v("sleeping 睡眠的进程数")]),t._v(" "),s("li",[t._v("stopped 停止的进程数")]),t._v(" "),s("li",[t._v("zombie 僵尸进程数")])]),t._v(" "),s("p",[t._v("Cpu(s)")]),t._v(" "),s("ul",[s("li",[t._v("0.3% us 用户空间占用CPU百分比")]),t._v(" "),s("li",[t._v("1.0% sy 内核空间占用CPU百分比")]),t._v(" "),s("li",[t._v("0.0% ni 用户进程空间内改变过优先级的进程占用CPU百分比")]),t._v(" "),s("li",[t._v("98.7% id 空闲CPU百分比")]),t._v(" "),s("li",[t._v("0.0% wa 等待输入输出的CPU时间百分比")]),t._v(" "),s("li",[t._v("0.0%hi：硬件CPU中断占用百分比")]),t._v(" "),s("li",[t._v("0.0%si：软中断占用百分比")]),t._v(" "),s("li",[t._v("0.0%st：虚拟机占用百分比")])]),t._v(" "),s("p",[t._v("Mem")]),t._v(" "),s("ul",[s("li",[t._v("191272k total 物理内存总量")]),t._v(" "),s("li",[t._v("173656k used  使用的物理内存总量")]),t._v(" "),s("li",[t._v("17616k free   空闲内存总量")]),t._v(" "),s("li",[t._v("22052k buffers  用作内核缓存的内存量")])]),t._v(" "),s("p",[t._v("Swap")]),t._v(" "),s("ul",[s("li",[t._v("192772k total 交换区总量")]),t._v(" "),s("li",[t._v("0k used       使用的交换区总量")]),t._v(" "),s("li",[t._v("192772k free  空闲交换区总量")]),t._v(" "),s("li",[t._v("123988k cached  缓冲的交换区总量,内存中的内容被换出到交换区，而后又被换入到内存，但使用过的交换区尚未被覆盖，该数值即为这些内容已存在于内存中的交换区的大小,相应的内存再次被换出时可不必再对交换区写入。")])]),t._v(" "),s("p",[t._v("进程信息区")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("序号  列名    含义\na    PID     进程id\nb    PPID    父进程id\nc    RUSER   Real user name\nd    UID     进程所有者的用户id\ne    USER    进程所有者的用户名\nf    GROUP   进程所有者的组名\ng    TTY     启动进程的终端名。不是从终端启动的进程则显示为 ?\nh    PR      优先级\ni    NI      nice值。负值表示高优先级，正值表示低优先级\nj    P       最后使用的CPU，仅在多CPU环境下有意义\nk    %CPU    上次更新到现在的CPU时间占用百分比\nl    TIME    进程使用的CPU时间总计，单位秒\nm    TIME+   进程使用的CPU时间总计，单位1/100秒\nn    %MEM    进程使用的物理内存百分比\no    VIRT    进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES\np    SWAP    进程使用的虚拟内存中，被换出的大小，单位kb。\nq    RES     进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA\nr    CODE    可执行代码占用的物理内存大小，单位kb\ns    DATA    可执行代码以外的部分(数据段+栈)占用的物理内存大小，单位kb\nt    SHR     共享内存大小，单位kb\nu    nFLT    页面错误次数\nv    nDRT    最后一次写入到现在，被修改过的页面数。\nw    S       进程状态(D=不可中断的睡眠状态,R=运行,S=睡眠,T=跟踪/停止,Z=僵尸进程)\nx    COMMAND 命令名/命令行\ny    WCHAN   若该进程在睡眠，则显示睡眠中的系统函数名\nz    Flags   任务标志，参考 sched.h\n")])])]),s("p",[t._v("默认情况下仅显示比较重要的 PID、USER、PR、NI、VIRT、RES、SHR、S、%CPU、%MEM、TIME+、COMMAND 列。")]),t._v(" "),s("h3",{attrs:{id:"快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷键","aria-hidden":"true"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),s("ul",[s("li",[t._v("f - 更改显示内容")]),t._v(" "),s("li",[t._v("P - 以 CPU 占用率大小的顺序排列进程列表")]),t._v(" "),s("li",[t._v("M - 以内存占用率大小的顺序排列进程列表")])])],1)},[],!1,null,null,null);a.default=v.exports}}]);