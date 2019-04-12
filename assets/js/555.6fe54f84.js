(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{946:function(t,a,s){"use strict";s.r(a);var e=s(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-磁盘管理与设备挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-磁盘管理与设备挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" Linux 磁盘管理与设备挂载")]),t._v(" "),s("h2",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("设备驱动")]),t._v(" 位于 "),s("code",[t._v("/dev")]),t._v(" 下，通过 "),s("code",[t._v("ls")]),t._v(" 命令查看系统中所有设备")]),t._v(" "),s("li",[t._v("根文件系统之外的其他文件要想能够被访问，都必须通过“关联”至根文件系统上的某个目录来实现，此关联操作即为“挂载”，此目录即为“挂载点”,解除此关联关系的过程称之为“卸载”\n"),s("ul",[s("li",[s("strong",[t._v("挂载")]),t._v(": 根文件系统外通过关联至根文件系统上的某个目录来实现访问")]),t._v(" "),s("li",[s("strong",[t._v("挂载点")]),t._v(": mount_point，用于作为另一个文件系统的访问入口\n"),s("ol",[s("li",[t._v("挂载点目录事先存在")]),t._v(" "),s("li",[t._v("应该使用未被或不会被其它进程使用到的目录")]),t._v(" "),s("li",[t._v("挂载点下原有的文件将会被隐藏")])])])])])]),t._v(" "),s("h2",{attrs:{id:"列出所有磁盘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出所有磁盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 列出所有磁盘")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("fdisk -l")]),t._v(" 列出所有磁盘")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" -l\nDisk /dev/vda: 42.9 GB, 42949672960 bytes, 83886080 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nDisk label type: dos\nDisk identifier: 0x0008d73a\n\n   Device Boot      Start         End      Blocks   Id  System\n/dev/vda1   *        2048    83884031    41940992   83  Linux\n\nDisk /dev/vdb: 536.9 GB, 536870912000 bytes, 1048576000 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\n\nDisk /dev/mapper/vg_f08a5cd7b4e31c2b93f7d6c385860882-brick_3d7dc9f1e6346efc7361d0f4ec4ddf8c: 2147 MB, 2147483648 bytes, 4194304 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 262144 bytes / 262144 bytes\n\nDisk /dev/mapper/vg_f08a5cd7b4e31c2b93f7d6c385860882-brick_0027aec42ae3a4b5171cc7fddea50bc0: 1073 MB, 1073741824 bytes, 2097152 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 262144 bytes / 262144 bytes\n")])])]),s("p",[t._v("可以看到, 有一块 42.9 GB 的磁盘设备 "),s("code",[t._v("/dev/vda")]),t._v(" 已经使用, 划分了一个分区 "),s("code",[t._v("/dev/vda1")]),t._v(", 有一块 536.9GB 的磁盘设备 "),s("code",[t._v("/dev/vdb")]),t._v(" 还未使用")]),t._v(" "),s("h2",{attrs:{id:"磁盘分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘分区","aria-hidden":"true"}},[t._v("#")]),t._v(" 磁盘分区")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("fdisk /dev/vdb")]),t._v(" 进入磁盘设备进行操作, 可以进行分区、保存分区表、打印分区表等等操作")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" /dev/vdb\nWelcome to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("util-linux 2.23.2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nChanges will remain "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" memory only, "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("until")]),t._v(" you decide to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" them.\nBe careful before using the "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" command.\n\nDevice does not contain a recognized partition table\nBuilding a new DOS disklabel with disk identifier 0x11171dc8.\n")])])]),s("p",[t._v("以下是一些常用的命令:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("m")]),t._v(" 打开帮助")]),t._v(" "),s("li",[s("code",[t._v("n")]),t._v(" 添加新分区")]),t._v(" "),s("li",[s("code",[t._v("p")]),t._v(" 打印分区表")]),t._v(" "),s("li",[s("code",[t._v("w")]),t._v(" 保存分区表并退出")]),t._v(" "),s("li",[s("code",[t._v("q")]),t._v(" 不保存分区表并退出")]),t._v(" "),s("li",[s("code",[t._v("l")]),t._v(" 列出所有支持的分区格式")])]),t._v(" "),s("h3",{attrs:{id:"获取帮助-m"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助-m","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取帮助 (m)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": m\nCommand action\n   a   toggle a bootable flag\n   b   edit bsd disklabel\n   c   toggle the dos compatibility flag\n   d   delete a partition\n   g   create a new empty GPT partition table\n   G   create an IRIX "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("SGI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" partition table\n   l   list known partition types\n   m   print this menu\n   n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" a new partition\n   o   create a new empty DOS partition table\n   p   print the partition table\n   q   quit without saving changes\n   s   create a new empty Sun disklabel\n   t   change a partition's system "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("\n   u   change display/entry "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("units")]),t._v("\n   v   verify the partition table\n   w   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" table to disk and "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n   x   extra functionality "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("experts only"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"列出所有支持的分区格式-l"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出所有支持的分区格式-l","aria-hidden":"true"}},[t._v("#")]),t._v(" 列出所有支持的分区格式 (l)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": l\n\n 0  Empty           24  NEC DOS         81  Minix / old Lin bf  Solaris        \n 1  FAT12           27  Hidden NTFS Win 82  Linux swap / So c1  DRDOS/sec "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FAT-\n 2  XENIX root      39  Plan 9          83  Linux           c4  DRDOS/sec "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FAT-\n 3  XENIX usr       3c  PartitionMagic  84  OS/2 hidden C:  c6  DRDOS/sec "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FAT-\n 4  FAT16 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("32M      40  Venix 80286     85  Linux extended  c7  Syrinx         \n 5  Extended        41  PPC PReP Boot   86  NTFS volume "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" da  Non-FS data    \n 6  FAT16           42  SFS             87  NTFS volume "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" db  CP/M / CTOS / "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n 7  HPFS/NTFS/exFAT 4d  QNX4.x          88  Linux plaintext de  Dell Utility   \n 8  AIX             4e  QNX4.x 2nd part 8e  Linux LVM       "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v("  BootIt         \n 9  AIX bootable    4f  QNX4.x 3rd part 93  Amoeba          e1  DOS access     \n a  OS/2 Boot Manag 50  OnTrack DM      94  Amoeba BBT      e3  DOS R/O        \n b  W95 FAT32       51  OnTrack DM6 Aux 9f  BSD/OS          e4  SpeedStor      \n c  W95 FAT32 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LBA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 52  CP/M            a0  IBM Thinkpad hi eb  BeOS fs        \n e  W95 FAT16 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LBA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 53  OnTrack DM6 Aux a5  FreeBSD         ee  GPT            \n f  W95 Ext'd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LBA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 54  OnTrackDM6      a6  OpenBSD         ef  EFI "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("FAT-12/16/\n10  OPUS            55  EZ-Drive        a7  NeXTSTEP        f0  Linux/PA-RISC b\n11  Hidden FAT12    56  Golden Bow      a8  Darwin UFS      f1  SpeedStor      \n12  Compaq diagnost 5c  Priam Edisk     a9  NetBSD          f4  SpeedStor      \n14  Hidden FAT16 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("3 61  SpeedStor       ab  Darwin boot     f2  DOS secondary  \n16  Hidden FAT16    63  GNU HURD or Sys af  HFS / HFS+      fb  VMware VMFS    \n17  Hidden HPFS/NTF 64  Novell Netware  b7  BSDI fs         fc  VMware VMKCORE \n18  AST SmartSleep  65  Novell Netware  b8  BSDI swap       fd  Linux raid auto\n1b  Hidden W95 FAT3 70  DiskSecure Mult bb  Boot Wizard hid fe  LANstep        \n1c  Hidden W95 FAT3 75  PC/IX           be  Solaris boot    ff  BBT            \n1e  Hidden W95 FAT1 80  Old Minix      \n")])])]),s("h3",{attrs:{id:"创建新分区-n"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新分区-n","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建新分区 (n)")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Partition type")]),t._v(" 分区类型 (直接回车就好)\n"),s("ul",[s("li",[t._v("p: 主分区")]),t._v(" "),s("li",[t._v("e: 扩展分区")])])]),t._v(" "),s("li",[s("strong",[t._v("Partition number")]),t._v(" 分区序号 (直接回车就好)")]),t._v(" "),s("li",[s("strong",[t._v("First sector")]),t._v(" 起始扇区 (直接回车就好)")]),t._v(" "),s("li",[s("strong",[t._v("Last sector")]),t._v(" 分区大小, 输入 +100G 表示为此分区分配 100G 的空间")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": n\nPartition type:\n   p   primary "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0 primary, 0 extended, 4 free"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   e   extended\nSelect "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nUsing default response p\nPartition number "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1-4, default 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nFirst sector "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2048-1048575999, default 2048"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(":\nUsing default value 2048\nLast sector, +sectors or +size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("K,M,G"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2048-1048575999, default 1048575999"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": +100G\nPartition 1 of "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("type")]),t._v(" Linux and of size 100 GiB is "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v("\n")])])]),s("p",[t._v("多次输入 n 命令, 可对磁盘进行多个分区划分")]),t._v(" "),s("h3",{attrs:{id:"打印分区表-p"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打印分区表-p","aria-hidden":"true"}},[t._v("#")]),t._v(" 打印分区表 (p)")]),t._v(" "),s("p",[t._v("创建完分区后, 使用 p 命令打印分区表")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": p\n\nDisk /dev/vdb: 536.9 GB, 536870912000 bytes, 1048576000 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nDisk label type: dos\nDisk identifier: 0x11171dc8\n\n   Device Boot      Start         End      Blocks   Id  System\n/dev/vdb1            2048   209717247   104857600   83  Linux\n/dev/vdb2       209717248   419432447   104857600   83  Linux\n/dev/vdb3       419432448   629147647   104857600   83  Linux\n/dev/vdb4       629149696  1048575999   209713152   83  Linux\n")])])]),s("h3",{attrs:{id:"保存分区表-w"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存分区表-w","aria-hidden":"true"}},[t._v("#")]),t._v(" 保存分区表 (w)")]),t._v(" "),s("p",[t._v("使用 w 命令对已划分的分区表进行保存")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Command "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": w\nThe partition table has been altered"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nCalling ioctl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to re-read partition table.\nSyncing disks.\n")])])]),s("h3",{attrs:{id:"查看新的磁盘设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看新的磁盘设备","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看新的磁盘设备")]),t._v(" "),s("p",[t._v("创建完分区表并退出后, 使用 "),s("code",[t._v("ls /dev/vdb*")]),t._v(" 可以看到, 已划分的4个分区都已出现")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" /dev/vdb*\n/dev/vdb  /dev/vdb1  /dev/vdb2  /dev/vdb3  /dev/vdb4\n")])])]),s("p",[t._v("再次使用 "),s("code",[t._v("fdisk -l")]),t._v(" 查看磁盘信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fdisk")]),t._v(" -l\n\nDisk /dev/vda: 42.9 GB, 42949672960 bytes, 83886080 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nDisk label type: dos\nDisk identifier: 0x0008d73a\n\n   Device Boot      Start         End      Blocks   Id  System\n/dev/vda1   *        2048    83884031    41940992   83  Linux\n\nDisk /dev/vdb: 536.9 GB, 536870912000 bytes, 1048576000 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nDisk label type: dos\nDisk identifier: 0x11171dc8\n\n   Device Boot      Start         End      Blocks   Id  System\n/dev/vdb1            2048   209717247   104857600   83  Linux\n/dev/vdb2       209717248   419432447   104857600   83  Linux\n/dev/vdb3       419432448   629147647   104857600   83  Linux\n/dev/vdb4       629149696  1048575999   209713152   83  Linux\n\nDisk /dev/mapper/vg_f08a5cd7b4e31c2b93f7d6c385860882-brick_3d7dc9f1e6346efc7361d0f4ec4ddf8c: 2147 MB, 2147483648 bytes, 4194304 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 262144 bytes / 262144 bytes\n\n\nDisk /dev/mapper/vg_f08a5cd7b4e31c2b93f7d6c385860882-brick_0027aec42ae3a4b5171cc7fddea50bc0: 1073 MB, 1073741824 bytes, 2097152 sectors\nUnits "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sectors of 1 * 512 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 512 bytes\nSector size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("logical/physical"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 512 bytes / 512 bytes\nI/O size "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("minimum/optimal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": 262144 bytes / 262144 bytes\n")])])]),s("p",[t._v("可以看到 "),s("code",[t._v("/dev/vdb")]),t._v(" 的4个分区都已分配")]),t._v(" "),s("h2",{attrs:{id:"分区格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分区格式化","aria-hidden":"true"}},[t._v("#")]),t._v(" 分区格式化")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("mkfs")]),t._v(" 进行磁盘格式化, 通过 "),s("code",[t._v("-t")]),t._v(" 选项指定文件系统的格式")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" -t ext3 /dev/vdb1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mke2fs")]),t._v(" 1.42.9 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("28-Dec-2013"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nFilesystem label"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nOS type: Linux\nBlock size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4096 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nFragment size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4096 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nStride"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0 blocks, Stripe width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0 blocks\n6553600 inodes, 26214400 blocks\n1310720 blocks "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5.00%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" reserved "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the super user\nFirst data block"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0\nMaximum filesystem blocks"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("4294967296\n800 block "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groups")]),t._v("\n32768 blocks per group, 32768 fragments per group\n8192 inodes per group\nSuperblock backups stored on blocks:\n\t32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,\n\t4096000, 7962624, 11239424, 20480000, 23887872\n\nAllocating group tables: "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nWriting inode tables: "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nCreating journal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("32768 blocks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\nWriting superblocks and filesystem accounting information:\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),s("h2",{attrs:{id:"设备挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设备挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" 设备挂载")]),t._v(" "),s("p",[t._v("比如，在 "),s("code",[t._v("/dev")]),t._v(" 下有一个设备叫 "),s("code",[t._v("cdrom")]),t._v("，通常为光驱设备，要将此设备挂载到系统当中，只需使用 "),s("code",[t._v("mount /dev/cdrom /mnt/cdrom")]),t._v(" 即可，此时，该设备已挂载至 "),s("code",[t._v("/mnt/cdrom")]),t._v(" 下。")]),t._v(" "),s("imgLink",{attrs:{src:"articles/011.jpg"}}),t._v(" "),s("p",[t._v("前面创建的分区, 使用以下命令进行挂载")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p  /mnt/vdb1  /mnt/vdb2  /mnt/vdb3  /mnt/vdb4\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/vdb1 /mnt/vdb1\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/vdb2 /mnt/vdb2\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/vdb3 /mnt/vdb3\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/vdb4 /mnt/vdb4\n")])])]),s("p",[t._v("挂载命令使用格式："),s("code",[t._v("mount [-o options] device mount_point")])]),t._v(" "),s("p",[t._v("device：指明要挂载的设备；")]),t._v(" "),s("ol",[s("li",[t._v("设备文件：例如 /dev/sda5")]),t._v(" "),s("li",[t._v("卷标：-L 'LABEL', 例如 -L 'MYDATA'")]),t._v(" "),s("li",[t._v("UUID, -U 'UUID'：例如 -U '0c50523c-43f1-45e7-85c0-a126711d406e'")]),t._v(" "),s("li",[t._v("伪文件系统名称：proc, sysfs, devtmpfs, configfs")])]),t._v(" "),s("p",[t._v("卸载 (umount) 命令使用格式:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" DEVICE\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("umount")]),t._v(" MOUNT_POINT\n")])])]),s("h3",{attrs:{id:"常用命令选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令选项","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用命令选项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-t vsftype")]),t._v("：指定要挂载的设备上的文件系统类型；")]),t._v(" "),s("li",[s("code",[t._v("-r")]),t._v(": readonly，只读挂载；")]),t._v(" "),s("li",[s("code",[t._v("-w")]),t._v(": read and write, 读写挂载；")]),t._v(" "),s("li",[s("code",[t._v("-n")]),t._v(": 不更新/etc/mtab；")]),t._v(" "),s("li",[s("code",[t._v("-a")]),t._v("：自动挂载所有支持自动挂载的设备；(定义在了/etc/fstab文件中，且挂载选项中有“自动挂载”功能)")]),t._v(" "),s("li",[s("code",[t._v("-L 'LABEL'")]),t._v(": 以卷标指定挂载设备；")]),t._v(" "),s("li",[s("code",[t._v("-U 'UUID'")]),t._v(": 以UUID指定要挂载的设备；")]),t._v(" "),s("li",[s("code",[t._v("-B")]),t._v(", "),s("code",[t._v("--bind")]),t._v(": 绑定目录到另一个目录上；")])]),t._v(" "),s("h3",{attrs:{id:"o-options：-挂载文件系统的选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#o-options：-挂载文件系统的选项","aria-hidden":"true"}},[t._v("#")]),t._v(" -o options：(挂载文件系统的选项)")]),t._v(" "),s("ul",[s("li",[t._v("async：异步模式；")]),t._v(" "),s("li",[t._v("sync：同步模式；")]),t._v(" "),s("li",[t._v("atime/noatime：包含目录和文件；")]),t._v(" "),s("li",[t._v("diratime/nodiratime：目录的访问时间戳")]),t._v(" "),s("li",[t._v("auto/noauto：是否支持自动挂载")]),t._v(" "),s("li",[t._v("exec/noexec：是否支持将文件系统上应用程序运行为进程")]),t._v(" "),s("li",[t._v("dev/nodev：是否支持在此文件系统上使用设备文件；")]),t._v(" "),s("li",[t._v("suid/nosuid：是否支持在此文件系统上使用特殊权限")]),t._v(" "),s("li",[t._v("remount：重新挂载")]),t._v(" "),s("li",[t._v("ro：只读")]),t._v(" "),s("li",[t._v("rw:读写")]),t._v(" "),s("li",[t._v("user/nouser：是否允许普通用户挂载此设备")]),t._v(" "),s("li",[t._v("acl：启用此文件系统上的acl功能")])]),t._v(" "),s("p",[t._v("注意：上述选项可多个同时使用，彼此使用逗号分隔；")]),t._v(" "),s("p",[t._v("默认挂载选项：defaults：rw, suid, dev, exec, auto, nouser, and async")]),t._v(" "),s("h3",{attrs:{id:"挂载示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 挂载示例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -o loop file.iso /mnt/cdrom "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载一个文件或ISO镜像文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -t vfat /dev/hda5 /mnt/hda5 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载一个Windows FAT32文件系统")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" -t smbfs -o username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("user,password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("pass //WinClient/share /mnt/share "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载一个windows网络共享磁盘空间")]),t._v("\n")])])]),s("h2",{attrs:{id:"etc-fstab和-etc-mtab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-fstab和-etc-mtab","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/fstab和/etc/mtab")]),t._v(" "),s("h3",{attrs:{id:"etc-fstab文件的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-fstab文件的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/fstab文件的作用")]),t._v(" "),s("p",[t._v("记录了计算机上硬盘分区的相关信息，启动 Linux 的时候，检查分区的 fsck 命令，和挂载分区的 mount 命令，都需要 fstab 中的信息，来正确的检查和挂载硬盘。")]),t._v(" "),s("h3",{attrs:{id:"etc-mtab文件的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etc-mtab文件的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" /etc/mtab文件的作用")]),t._v(" "),s("p",[t._v("记载的是现在系统已经装载的文件系统，包括操作系统建立的虚拟文件等；而/etc/fstab是系统准备装载的。 每当 mount 挂载分区、umount 卸载分区，都会动态更新 mtab，mtab 总是保持着当前系统中已挂载的分区信息，fdisk、df 这类程序，必须要读取 mtab 文件，才能获得当前系统中的分区挂载情况。当然我们自己还可以通过读取/proc/mount也可以来获取当前挂载信息")]),t._v(" "),s("h3",{attrs:{id:"开机自动挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开机自动挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" 开机自动挂载")]),t._v(" "),s("p",[t._v("如果我们想实现开机自动挂载某设备，只要修改 "),s("code",[t._v("/etc/fstab")]),t._v(" 文件即可。")]),t._v(" "),s("p",[t._v("文件挂载的配置文件："),s("code",[t._v("/etc/fstab")])]),t._v(" "),s("p",[t._v("每行定义一个要挂载的文件系统；")]),t._v(" "),s("p",[t._v("格式例如")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("要挂载的设备或伪文件系统")]),t._v(" "),s("th",[t._v("挂载点")]),t._v(" "),s("th",[t._v("文件系统类型")]),t._v(" "),s("th",[t._v("挂载选项")]),t._v(" "),s("th",[t._v("转储频率")]),t._v(" "),s("th",[t._v("自检次序")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("UUID=6efb8a23-bae1-427c-ab10-3caca95250b1")]),t._v(" "),s("td",[t._v("/boot")]),t._v(" "),s("td",[t._v("xfs")]),t._v(" "),s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("/dev/mapper/cl-root")]),t._v(" "),s("td",[t._v("/")]),t._v(" "),s("td",[t._v("xfs")]),t._v(" "),s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("UUID=01758f71-af40-4a56-8763-bd2272746772")]),t._v(" "),s("td",[t._v("/boot")]),t._v(" "),s("td",[t._v("xfs")]),t._v(" "),s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("/dev/mapper/cl-swap")]),t._v(" "),s("td",[t._v("swap")]),t._v(" "),s("td",[t._v("swap")]),t._v(" "),s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("/dev/cdrom")]),t._v(" "),s("td",[t._v("/mnt/cdrom")]),t._v(" "),s("td",[t._v("auto")]),t._v(" "),s("td",[t._v("defaults")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("要挂载的设备或伪文件系统")]),t._v(' 设备文件、LABEL(LABEL="")、UUID(UUID="")、伪文件系统名称(proc, sysfs)')]),t._v(" "),s("li",[s("strong",[t._v("挂载点")]),t._v(" 指定的文件夹")]),t._v(" "),s("li",[s("strong",[t._v("挂载选项")]),t._v(" 可指定多项，用英文逗号分隔，如 auto, ro\n"),s("ul",[s("li",[t._v("auto 开机自动挂载")]),t._v(" "),s("li",[t._v("default 按照大多数永久文件系统的缺省值设置挂载定义")]),t._v(" "),s("li",[t._v("noauto 开机不自动挂载")]),t._v(" "),s("li",[t._v("nouser 只有超级用户可以挂载")]),t._v(" "),s("li",[t._v("ro 按只读权限挂载")]),t._v(" "),s("li",[t._v("rw 按可读可写权限挂载")]),t._v(" "),s("li",[t._v("user 任何用户都可以挂载")])])]),t._v(" "),s("li",[s("strong",[t._v("转储频率")]),t._v(" "),s("ul",[s("li",[t._v("0：不做备份")]),t._v(" "),s("li",[t._v("1：每天转储")]),t._v(" "),s("li",[t._v("2：每隔一天转储")])])]),t._v(" "),s("li",[s("strong",[t._v("自检次序")]),t._v(" "),s("ul",[s("li",[t._v("0：不自检")]),t._v(" "),s("li",[t._v("1：首先自检；一般只有rootfs才用1；")])])])]),t._v(" "),s("h2",{attrs:{id:"查看所有挂载的设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有挂载的设备","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看所有挂载的设备")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("cat /proc/mounts")]),t._v(" 或 "),s("code",[t._v("df -lh")]),t._v(" 查看所有挂载的设备")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /proc/mounts\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" -lh\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        40G   18G   21G  47% /\ndevtmpfs        7.8G     0  7.8G   0% /dev\ntmpfs           7.8G     0  7.8G   0% /dev/shm\ntmpfs           7.8G  672K  7.8G   1% /run\ntmpfs           7.8G     0  7.8G   0% /sys/fs/cgroup\ntmpfs           1.6G     0  1.6G   0% /run/user/0\noverlay          40G   18G   21G  47% /var/lib/docker/overlay2/387fee3668a3843c7520649366bafa3716562f7129f0ec6b5e94040a9bbc5a61/merged\nshm              64M     0   64M   0% /var/lib/docker/containers/0ac46dccc179c16c6fc8caa87704d78d9c096125d67939ad416c351d9bc01e61/mounts/shm\n/dev/vdb1        99G   60M   94G   1% /mnt/vdb1\n/dev/vdb2        99G   60M   94G   1% /mnt/vdb2\n/dev/vdb3        99G   60M   94G   1% /mnt/vdb3\n/dev/vdb5       197G   60M  187G   1% /mnt/vdb5\n")])])]),s("h2",{attrs:{id:"问题处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 问题处理")]),t._v(" "),s("h3",{attrs:{id:"挂载或格式化时提示设备正忙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#挂载或格式化时提示设备正忙","aria-hidden":"true"}},[t._v("#")]),t._v(" 挂载或格式化时提示设备正忙")]),t._v(" "),s("p",[t._v("在格式化的时候, 报 "),s("code",[t._v("/dev/vdb1 is apparently in use by the system")])]),t._v(" "),s("p",[t._v("挂载的时候, 报 "),s("code",[t._v("/dev/vdb1 is already mounted or /mnt/vdb1 busy")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),t._v(" /dev/vdb1 /mnt/vdb1\nmount: /dev/vdb1 is already mounted or /mnt/vdb1 busy\n\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkfs")]),t._v(" -t ext3 /dev/vdb1\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mke2fs")]),t._v(" 1.42.9 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("28-Dec-2013"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n/dev/vdb1 is apparently "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" use by the system"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" will not "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" a filesystem here"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("dmsetup status")]),t._v(" 查看dm设备信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ dmsetup status\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_0027aec42ae3a4b5171cc7fddea50bc0: 0 2097152 linear\nvg_f08a5cd7b4e31c2b93f7d6c385860882-brick_3d7dc9f1e6346efc7361d0f4ec4ddf8c: 0 4194304 thin 29184 4194303\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_3d7dc9f1e6346efc7361d0f4ec4ddf8c: 0 4194304 linear\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_3d7dc9f1e6346efc7361d0f4ec4ddf8c-tpool: 0 4194304 thin-pool 1 10/3072 57/8192 - rw no_discard_passdown queue_if_no_space -\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_3d7dc9f1e6346efc7361d0f4ec4ddf8c_tdata: 0 4194304 linear\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_3d7dc9f1e6346efc7361d0f4ec4ddf8c_tmeta: 0 24576 linear\nvg_f08a5cd7b4e31c2b93f7d6c385860882-brick_0027aec42ae3a4b5171cc7fddea50bc0: 0 2097152 thin 25600 2097151\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_0027aec42ae3a4b5171cc7fddea50bc0-tpool: 0 2097152 thin-pool 1 10/2048 50/4096 - rw no_discard_passdown queue_if_no_space -\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_0027aec42ae3a4b5171cc7fddea50bc0_tdata: 0 2097152 linear\nvg_f08a5cd7b4e31c2b93f7d6c385860882-tp_0027aec42ae3a4b5171cc7fddea50bc0_tmeta: 0 16384 linear\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("dmsetup remove_all")]),t._v(" 移除所有dm设备即可")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ dmsetup remove_all\n$ dmsetup status\nNo devices found\n")])])]),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/vipchenwei/articles/6909324.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux下磁盘分区，格式化以及挂载"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.linuxidc.com/Linux/2016-08/134666.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux基础知识之挂载详解(mount,umount及开机自动挂载)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/ddbear/p/7485857.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("挂载硬盘，提示 mount: unknown filesystem type 'LVM2_member'的解决方案"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/tianlesoftware/article/details/8594958",target:"_blank",rel:"noopener noreferrer"}},[t._v("/dev/sdxx is apparently in use by the system; will not make a filesystem here! 解决方法"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=n.exports}}]);