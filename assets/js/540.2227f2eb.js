(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{296:function(t,e,a){"use strict";a.r(e);var s={props:["slot-key"]},r=a(0),n=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"虚拟机自动启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机自动启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟机自动启动")]),t._v(" "),a("p",[t._v("比如，在 VMWare 虚拟机中安装了一个 CentOS 系统，想要在 Windows 开机时自动启动VMWare，并启动 CentOS 虚拟机系统，只需要写一个简单的脚本即可。")]),t._v(" "),a("p",[t._v("创建一个 "),a("code",[t._v("centos_start.bat")]),t._v("，用于自动开启虚拟机")]),t._v(" "),a("div",{staticClass:"language-bat line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe" start "D:\\User\\quanzaiyu\\Documents\\Virtual Machines\\CentOS7 64 λ\\CentOS7 64 λ.vmx" nogui\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("创建一个 "),a("code",[t._v("centos_stop.bat")]),t._v("，用于结束虚拟机")]),t._v(" "),a("div",{staticClass:"language-bat line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmrun.exe" stop "D:\\User\\quanzaiyu\\Documents\\Virtual Machines\\CentOS7 64 λ\\CentOS7 64 λ.vmx" soft \n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("运行这两个脚本，可以测试是否正常。")]),t._v(" "),a("h2",{attrs:{id:"加入开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加入开机启动","aria-hidden":"true"}},[t._v("#")]),t._v(" 加入开机启动")]),t._v(" "),a("p",[t._v("往Windows的“脚本(登录/注销)”添加，运行 > gpedit.msc > 用户配置 > windows设置 > 脚本(登录/注销) > 添加")]),t._v(" "),a("imgLink",{attrs:{src:"articles/027.jpg/small"}}),t._v(" "),a("p",[t._v("将创建的两个脚本分别添加进 登录、注销 脚本中即可。")])],1)},[],!1,null,null,null);n.options.__file="vm_auto_run.md";e.default=n.exports}}]);