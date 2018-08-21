(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{469:function(s,t,n){"use strict";n.r(t);var a=n(1),v=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"挂载与卸载"}},[s._v("挂载与卸载")]),s._v(" "),n("p",[s._v("挂载概念简述：")]),s._v(" "),n("p",[s._v("根文件系统之外的其他文件要想能够被访问，都必须通过“关联”至根文件系统上的某个目录来实现，此关联操作即为“挂载”，此目录即为“挂载点”,解除此关联关系的过程称之为“卸载”")]),s._v(" "),n("ol",[n("li",[s._v("挂载：根文件系统外通过关联至根文件系统上的某个目录来实现访问")]),s._v(" "),n("li",[s._v("挂载点：mount_point，用于作为另一个文件系统的访问入口；")])]),s._v(" "),n("h2",{attrs:{id:"挂载-mount"}},[s._v("挂载 mount")]),s._v(" "),n("p",[s._v("命令使用格式：mount [-o options] device mount_point")]),s._v(" "),n("h3",{attrs:{id:"device"}},[s._v("device")]),s._v(" "),n("p",[s._v("device：指明要挂载的设备；")]),s._v(" "),n("ol",[n("li",[s._v("设备文件：例如/dev/sda5")]),s._v(" "),n("li",[s._v("卷标：-L 'LABEL', 例如 -L 'MYDATA'")]),s._v(" "),n("li",[s._v("UUID, -U 'UUID'：例如 -U '0c50523c-43f1-45e7-85c0-a126711d406e'")]),s._v(" "),n("li",[s._v("伪文件系统名称：proc, sysfs, devtmpfs, configfs")])]),s._v(" "),n("h3",{attrs:{id:"mount-point"}},[s._v("mount_point")]),s._v(" "),n("p",[s._v("挂载需注意以下几点")]),s._v(" "),n("ol",[n("li",[s._v("挂载点目录事先存在；")]),s._v(" "),n("li",[s._v("应该使用未被或不会被其它进程使用到的目录；")]),s._v(" "),n("li",[s._v("挂载点下原有的文件将会被隐藏；")])]),s._v(" "),n("h3",{attrs:{id:"常用命令选项"}},[s._v("常用命令选项")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("-t vsftype")]),s._v("：指定要挂载的设备上的文件系统类型；")]),s._v(" "),n("li",[n("code",[s._v("-r")]),s._v(": readonly，只读挂载；")]),s._v(" "),n("li",[n("code",[s._v("-w")]),s._v(": read and write, 读写挂载；")]),s._v(" "),n("li",[n("code",[s._v("-n")]),s._v(": 不更新/etc/mtab；")]),s._v(" "),n("li",[n("code",[s._v("-a")]),s._v("：自动挂载所有支持自动挂载的设备；(定义在了/etc/fstab文件中，且挂载选项中有“自动挂载”功能)")]),s._v(" "),n("li",[n("code",[s._v("-L 'LABEL'")]),s._v(": 以卷标指定挂载设备；")]),s._v(" "),n("li",[n("code",[s._v("-U 'UUID'")]),s._v(": 以UUID指定要挂载的设备；")]),s._v(" "),n("li",[n("code",[s._v("-B")]),s._v(", "),n("code",[s._v("--bind")]),s._v(": 绑定目录到另一个目录上；")])]),s._v(" "),n("h3",{attrs:{id:"查看所有挂载的设备"}},[s._v("查看所有挂载的设备")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ cat /proc/mounts\n$ df -h  # 显示已经挂载的分区列表\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"o-options：-挂载文件系统的选项"}},[s._v("-o options：(挂载文件系统的选项)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("async：异步模式；\n\nsync：同步模式；\n\natime/noatime：包含目录和文件；\n\ndiratime/nodiratime：目录的访问时间戳\n\nauto/noauto：是否支持自动挂载\n\nexec/noexec：是否支持将文件系统上应用程序运行为进程\n\ndev/nodev：是否支持在此文件系统上使用设备文件；\n\nsuid/nosuid：是否支持在此文件系统上使用特殊权限\n\nremount：重新挂载\n\nro：只读\n\nrw:读写\n\nuser/nouser：是否允许普通用户挂载此设备\n\nacl：启用此文件系统上的acl功能\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("注意：上述选项可多个同时使用，彼此使用逗号分隔；")]),s._v(" "),n("p",[s._v("默认挂载选项：defaults：rw, suid, dev, exec, auto, nouser, and async")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mount -o loop file.iso /mnt/cdrom # 挂载一个文件或ISO镜像文件\nmount -t vfat /dev/hda5 /mnt/hda5 # 挂载一个Windows FAT32文件系统\nmount -t smbfs -o username=user,password=pass //WinClient/share /mnt/share # 挂载一个windows网络共享磁盘空间\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"卸载-umount"}},[s._v("卸载 umount")]),s._v(" "),n("p",[s._v("命令使用格式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ umount DEVICE\n\n$ umount MOUNT_POINT\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"交互演示"}},[s._v("交互演示")]),s._v(" "),n("h3",{attrs:{id:"设备驱动"}},[s._v("设备驱动")]),s._v(" "),n("p",[s._v("设备驱动位于 "),n("code",[s._v("/dev")]),s._v(" 下，通过 "),n("code",[s._v("ls")]),s._v(" 命令查看系统中所有设备。")]),s._v(" "),n("h3",{attrs:{id:"挂载"}},[s._v("挂载")]),s._v(" "),n("p",[s._v("比如，在 "),n("code",[s._v("/dev")]),s._v(" 下有一个设备叫 "),n("code",[s._v("cdrom")]),s._v("，通常为光驱设备，要将此设备挂载到系统当中，只需使用 "),n("code",[s._v("mount /dev/cdrom /mnt/cdrom")]),s._v(" 即可，此时，该设备已挂载至 "),n("code",[s._v("/mnt/cdrom")]),s._v(" 下。")]),s._v(" "),n("figure",[n("img",{attrs:{src:"http://img.xiaoyulive.top/img/articles/011.jpg",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"etc-fstab和-etc-mtab的区别"}},[s._v("/etc/fstab和/etc/mtab的区别")]),s._v(" "),n("h3",{attrs:{id:"etc-fstab文件的作用"}},[s._v("/etc/fstab文件的作用:")]),s._v(" "),n("p",[s._v("记录了计算机上硬盘分区的相关信息，启动 Linux 的时候，检查分区的 fsck 命令，和挂载分区的 mount 命令，都需要 fstab 中的信息，来正确的检查和挂载硬盘。")]),s._v(" "),n("h3",{attrs:{id:"etc-mtab文件的作用"}},[s._v("/etc/mtab文件的作用:")]),s._v(" "),n("p",[s._v("记载的是现在系统已经装载的文件系统，包括操作系统建立的虚拟文件等；而/etc/fstab是系统准备装载的。 每当 mount 挂载分区、umount 卸载分区，都会动态更新 mtab，mtab 总是保持着当前系统中已挂载的分区信息，fdisk、df 这类程序，必须要读取 mtab 文件，才能获得当前系统中的分区挂载情况。当然我们自己还可以通过读取/proc/mount也可以来获取当前挂载信息")]),s._v(" "),n("h3",{attrs:{id:"开机自动挂载"}},[s._v("开机自动挂载")]),s._v(" "),n("p",[s._v("如果我们想实现开机自动挂载某设备，只要修改 "),n("code",[s._v("/etc/fstab")]),s._v(" 文件即可。")]),s._v(" "),n("p",[s._v("文件挂载的配置文件："),n("code",[s._v("/etc/fstab")])]),s._v(" "),n("p",[s._v("每行定义一个要挂载的文件系统；")]),s._v(" "),n("p",[s._v("格式例如")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("要挂载的设备或伪文件系统")]),s._v(" "),n("th",[s._v("挂载点")]),s._v(" "),n("th",[s._v("文件系统类型")]),s._v(" "),n("th",[s._v("挂载选项")]),s._v(" "),n("th",[s._v("转储频率")]),s._v(" "),n("th",[s._v("自检次序")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("UUID=6efb8a23-bae1-427c-ab10-3caca95250b1")]),s._v(" "),n("td",[s._v("/boot")]),s._v(" "),n("td",[s._v("xfs")]),s._v(" "),n("td",[s._v("defaults")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td",[s._v("0")])]),s._v(" "),n("tr",[n("td",[s._v("/dev/mapper/cl-root")]),s._v(" "),n("td",[s._v("/")]),s._v(" "),n("td",[s._v("xfs")]),s._v(" "),n("td",[s._v("defaults")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td",[s._v("0")])]),s._v(" "),n("tr",[n("td",[s._v("UUID=01758f71-af40-4a56-8763-bd2272746772")]),s._v(" "),n("td",[s._v("/boot")]),s._v(" "),n("td",[s._v("xfs")]),s._v(" "),n("td",[s._v("defaults")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td",[s._v("0")])]),s._v(" "),n("tr",[n("td",[s._v("/dev/mapper/cl-swap")]),s._v(" "),n("td",[s._v("swap")]),s._v(" "),n("td",[s._v("swap")]),s._v(" "),n("td",[s._v("defaults")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td",[s._v("0")])]),s._v(" "),n("tr",[n("td",[s._v("/dev/cdrom")]),s._v(" "),n("td",[s._v("/mnt/cdrom")]),s._v(" "),n("td",[s._v("auto")]),s._v(" "),n("td",[s._v("defaults")]),s._v(" "),n("td",[s._v("0")]),s._v(" "),n("td",[s._v("0")])])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('要挂载的设备或伪文件系统：设备文件、LABEL(LABEL="")、UUID(UUID="")、伪文件系统名称(proc, sysfs)\n挂载点：指定的文件夹\n挂载选项: 可指定多项，用英文逗号分隔，如 auto, ro\n    auto 开机自动挂载 \n    default 按照大多数永久文件系统的缺省值设置挂载定义\n    noauto 开机不自动挂载\n    nouser 只有超级用户可以挂载\n    ro 按只读权限挂载\n    rw 按可读可写权限挂载\n    user 任何用户都可以挂载\n转储频率：\n    0：不做备份\n    1：每天转储\n    2：每隔一天转储\n自检次序：\n    0：不自检\n    1：首先自检；一般只有rootfs才用1；\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])])])}],!1,null,null,null);t.default=v.exports}}]);