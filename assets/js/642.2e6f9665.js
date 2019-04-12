(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{831:function(e,a,t){"use strict";t.r(a);var s=t(1),r=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"windows-注册表概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-注册表概述","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows 注册表概述")]),e._v(" "),t("p",[e._v("REG文件实际上是一种注册表脚本文件，双击REG文件即可将其中的数据导入到注册表中。通过约定的格式，我们可以利用REG文件直接对注册表进行任何修改操作，而且它对注册表的操作可以不受 "),t("code",[e._v("Regedit.exe")]),e._v(" 被禁用的限制，因此功能更为强大、灵活；此外，由于REG文件可以用任何文本编辑器/(如记事本/进行打开、编辑、修改，可以在发生错误的时候，通过改回REG文件中的数据后再导入，实现恢复操作，因此它更方便、安全。")]),e._v(" "),t("p",[e._v("REG文件对于注册表的操作可以归结为以下几种：新建主键、删除主键、新建键值、修改键值、删除键值。")]),e._v(" "),t("h2",{attrs:{id:"reg-文件编写格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reg-文件编写格式","aria-hidden":"true"}},[e._v("#")]),e._v(" reg 文件编写格式")]),e._v(" "),t("p",[e._v(".reg文件实际上是一个文本文件，.reg 文件具有以下语法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('RegistryEditorVersion\n\n[RegistryPath1]\n@="DataType1:DataValue1"\n"DataItemName1"="DataType1:DataValue1"\n"DataItemName2"="DataType2:DataValue2"\n\n[RegistryPath2]\n"DataItemName3"="DataType3:DataValue3"\n')])])]),t("ol",[t("li",[e._v("第一行为注册表版本，写成下面的字串即可")])]),e._v(" "),t("p",[e._v("Windows Registry Editor Version 5.00")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("第二行和最后一行均为空行")])]),e._v(" "),t("h2",{attrs:{id:"新建项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建项","aria-hidden":"true"}},[e._v("#")]),e._v(" 新建项")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[路径\\新主键名]\n")])])]),t("p",[e._v("比如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[HKEY_CURRENT_USER\\test]\n")])])]),t("h2",{attrs:{id:"删除项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除项","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除项")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[-路径\\主键名]\n")])])]),t("p",[e._v("比如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[-HKEY_CURRENT_USER\\test]\n")])])]),t("h2",{attrs:{id:"新建键值-或-修改键值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建键值-或-修改键值","aria-hidden":"true"}},[e._v("#")]),e._v(" 新建键值 或 修改键值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[路径]\n"键名"="键值" (针对字符串型键值)\n"键名"=hex:键值 (针对二进制型键值)\n"键名"=dword:键值 (针对DWORD键值)\n"键名"=hex(2):键值 (REG_EXPAND_SZ)\n"键名"=hex(7):键值 (REG_MULTI_SZ)\n')])])]),t("p",[e._v("比如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[HKEY_CURRENT_USER\\test]\n@="Default项的文本 - Test"\n"reg_binary_test"=hex:E0,31\n"reg_dword_test"=dword:000000ff\n"reg_expand_sz_test"=hex(2):30,00,31,00\n"reg_multi_sz_test"=hex(7):30,00,31,00\n')])])]),t("h2",{attrs:{id:"删除键值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除键值","aria-hidden":"true"}},[e._v("#")]),e._v(" 删除键值")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[路径]\n\n"键名"=-\n')])])]),t("p",[e._v("比如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[HKEY_CURRENT_USER\\test]\n@=-\n"reg_binary_test"=-\n"reg_dword_test"=-\n"reg_expand_sz_test"=-\n"reg_multi_sz_test"=-\n')])])]),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),t("ul",[t("li",[e._v("注意主键路径大小写")]),e._v(" "),t("li",[e._v("键值类型一律为小写")]),e._v(" "),t("li",[e._v('在创建字符串类型的键值时，如果字符串中包含路径分隔符，这个路径分隔符应该用双斜杠"\\"表示')]),e._v(" "),t("li",[e._v('若键值名为"默认"，则键值名用"@"表示，没有引号')])]),e._v(" "),t("p",[e._v("写完保存为 *.reg 文件然后双击导入即可")]),e._v(" "),t("h2",{attrs:{id:"问题修复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题修复","aria-hidden":"true"}},[e._v("#")]),e._v(" 问题修复")]),e._v(" "),t("h3",{attrs:{id:"右键没有“新建”"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#右键没有“新建”","aria-hidden":"true"}},[e._v("#")]),e._v(" 右键没有“新建”")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_CLASSES_ROOT\\Directory\\Background\\shellex\\ContextMenuHandlers\\New]\n@="{D969A300-E7FF-11d0-A93B-00A0C90F2719}"\n')])])]),t("h3",{attrs:{id:"右键没有“打开方式”"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#右键没有“打开方式”","aria-hidden":"true"}},[e._v("#")]),e._v(" 右键没有“打开方式”")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_CLASSES_ROOT\\*\\shell\\OpenWith]\n@="打开方式"\n\n[HKEY_CLASSES_ROOT\\*\\shell\\OpenWith\\Command]\n@="C:\\\\Windows\\\\rundll32.exe Shell32.dll,OpenAs_RunDLL %1\\""\n')])])]),t("h3",{attrs:{id:"去除“快捷方式”字样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#去除“快捷方式”字样","aria-hidden":"true"}},[e._v("#")]),e._v(" 去除“快捷方式”字样")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer]\n"Link"=hex:00,00,00,00\n')])])]),t("h3",{attrs:{id:"去除快捷方式小箭头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#去除快捷方式小箭头","aria-hidden":"true"}},[e._v("#")]),e._v(" 去除快捷方式小箭头")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\lnkfile]\n"IsShortcut"=-\n')])])]),t("p",[e._v("复原的话：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Classes\\lnkfile]\n"IsShortcut"=""\n')])])]),t("h3",{attrs:{id:"win-e-提示“该文件没有与之关联的程序”"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#win-e-提示“该文件没有与之关联的程序”","aria-hidden":"true"}},[e._v("#")]),e._v(" Win + E 提示“该文件没有与之关联的程序”")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_CLASSES_ROOT\\Folder\\shell\\explore\\command]\n"DelegateExecute"="{11dbb47c-a525-400b-9e80-a54615a090c0}"\n\n[HKEY_CLASSES_ROOT\\Folder\\shell\\opennewprocess\\command]\n"DelegateExecute"="{11dbb47c-a525-400b-9e80-a54615a090c0}"\n\n[HKEY_CLASSES_ROOT\\Folder\\shell\\opennewwindow\\command]\n"DelegateExecute"="{11dbb47c-a525-400b-9e80-a54615a090c0}"\n')])])]),t("h3",{attrs:{id:"右键新建排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#右键新建排序","aria-hidden":"true"}},[e._v("#")]),e._v(" 右键新建排序")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Windows Registry Editor Version 5.00\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Discardable\\PostSetup\\ShellNew]\n"Classes"=hex(7):2e,00,6c,00,6e,00,6b,00,00,00,46,00,6f,00,6c,00,64,00,65,00,\\\n  72,00,00,00,2e,00,74,00,78,00,74,00,00,00,2e,00,72,00,74,00,66,00,00,00,2e,\\\n  00,64,00,6f,00,63,00,78,00,00,00,2e,00,78,00,6c,00,73,00,78,00,00,00,2e,00,\\\n  70,00,70,00,74,00,78,00,00,00,2e,00,61,00,63,00,63,00,64,00,62,00,00,00,2e,\\\n  00,6d,00,64,00,62,00,00,00,2e,00,70,00,75,00,62,00,00,00,2e,00,7a,00,69,00,\\\n  70,00,00,00,2e,00,72,00,61,00,72,00,00,00,2e,00,37,00,7a,00,00,00,2e,00,62,\\\n  00,6d,00,70,00,00,00,2e,00,63,00,6f,00,6e,00,74,00,61,00,63,00,74,00,00,00,\\\n  2e,00,6c,00,69,00,62,00,72,00,61,00,72,00,79,00,2d,00,6d,00,73,00,00,00,00,\\\n  00\n"~reserved~"=hex:08,00,00,00,00,00,06,00\n')])])]),t("p",[e._v("排序顺序：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".lnk\nFolder\n.txt\n.rtf\n.docx\n.xlsx\n.pptx\n.accdb\n.mdb\n.pub\n.zip\n.rar\n.7z\n.bmp\n.contact\n.library-ms\n")])])]),t("p",[e._v("Classes默认是不能修改的，需要修改其权限，而其权限是继承父类的，所以在修改权限是，首先要修改不被继承的，修改方式如下：")]),e._v(" "),t("ul",[t("li",[e._v("第一：右键ShellNew，选择权限，选择高级，取消权限“包括可从该对象的父项继承的权限”，保存；")]),e._v(" "),t("li",[e._v("第二：对使用的账户的权限设置为读取，取消完全控制(完全控制包括读取、修改、删除，如果允许完全控制，系统会自动更改修改好的Classes值)，保存即可。")]),e._v(" "),t("li",[e._v("第三：在桌面右键选择新建时候，顺序已改变即修改成功。")])]),e._v(" "),t("p",[e._v("参考："),t("a",{attrs:{href:"https://blog.csdn.net/my_de_dream/article/details/24706753",target:"_blank",rel:"noopener noreferrer"}},[e._v("修改右键 新建菜单顺序"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"浏览器右键扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器右键扩展","aria-hidden":"true"}},[e._v("#")]),e._v(" 浏览器右键扩展")]),e._v(" "),t("p",[e._v("地址： HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\MenuExt")]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/lanxinju/article/details/5779510",target:"_blank",rel:"noopener noreferrer"}},[e._v("注册表文件(.reg)编写方法"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://wenku.baidu.com/view/a288fb260066f5335a81215c.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("注册表reg文件语法规则"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/maji9370/article/details/4318361",target:"_blank",rel:"noopener noreferrer"}},[e._v("reg文件编写方法整理"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/haolipengzhanshen/article/details/42648623",target:"_blank",rel:"noopener noreferrer"}},[e._v("自己动手写reg注册表文件"),t("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=r.exports}}]);