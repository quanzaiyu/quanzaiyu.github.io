(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{856:function(t,e,s){"use strict";s.r(e);var n=s(1),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-settings-sync-同步-vscode-设置到-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-settings-sync-同步-vscode-设置到-github","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 Settings Sync 同步 VSCode 设置到 GitHub")]),t._v(" "),s("p",[t._v("一开始不知道怎么备份 vscode 的配置，将所有的插件列表、配置文件写到我的博客里面，每次在新的机子里面装 vscode 的时候又照着博客一个一个安装，折腾得要死。虽然大部分人可能都不会遇到重装系统的麻烦，但像我这种经常换系统的单纯码农就明显感觉得到这是有多麻烦，特别是最近着手着公司的 Mac 电脑，又得赶项目又得配环境，别提多难受。")]),t._v(" "),s("p",[t._v("今天要说的就是这个插件 Settings Sync，一个可以在 github 上面通过 gist 仓来同步用户的 vscode 的配置，包括插件，settings 等信息的好插件。")]),t._v(" "),s("h2",{attrs:{id:"创建-gist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-gist","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 Gist")]),t._v(" "),s("p",[t._v("打开 github 的创建 gist 的页面: "),s("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/settings/tokens"),s("OutboundLink")],1),t._v("，然后在 github 勾选 gist 选项来存储设置")]),t._v(" "),s("imgLink",{attrs:{src:"shortcut/084.jpg"}}),t._v(" "),s("p",[t._v("保存后会生成一个 key，注意这个 key 只会出现一次，现在一定要将它保存下来")]),t._v(" "),s("imgLink",{attrs:{src:"shortcut/085.png"}}),t._v(" "),s("h2",{attrs:{id:"上传配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 上传配置")]),t._v(" "),s("ol",[s("li",[t._v("安装 "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("Settings Sync"),s("OutboundLink")],1),t._v(" 插件并重启 vscode")])]),t._v(" "),s("imgLink",{attrs:{src:"shortcut/083.png"}}),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("重启后按快捷键 "),s("kbd",[t._v("alt")]),t._v(" + "),s("kbd",[t._v("shift")]),t._v(" + "),s("kbd",[t._v("u")]),t._v(", 或键入 "),s("kbd",[t._v("ctrl")]),t._v(" + "),s("kbd",[t._v("shift")]),t._v(" + "),s("kbd",[t._v("p")]),t._v("，输入 sync，点击 "),s("code",[t._v("Sync: Upload / Update Settings")]),t._v(", 输入刚才记下的 gist Id")])]),t._v(" "),s("p",[t._v("不出问题的话它就开始对你本机的配置进行一个扫描上传了。至此上传工作完成。")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190224/001.png"}}),t._v(" "),s("h2",{attrs:{id:"同步配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 同步配置")]),t._v(" "),s("p",[t._v("接下来我们要在另一台机子上同步设置。同样的先安装 Settings Sync 插件，并重新加载。")]),t._v(" "),s("p",[t._v("然后按快捷键 "),s("kbd",[t._v("alt")]),t._v(" + "),s("kbd",[t._v("shift")]),t._v(" + "),s("kbd",[t._v("d")]),t._v("，就应该会弹出一个输入框，请在这里输入之前保存下来的 key(GIST ID)，回车后将会自动下载之前上传的配置。")]),t._v(" "),s("p",[t._v("那么下载完成后，你这台电脑修改了相关配置再次上传就好了。")]),t._v(" "),s("imgLink",{attrs:{src:"date/20190224/002.png"}}),t._v(" "),s("h2",{attrs:{id:"修改设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改设置")]),t._v(" "),s("p",[t._v("如果在输入 gist id 写错了，读取不到的情况下，就需要重置设置，按 "),s("code",[t._v("ctrl(cmd)+shift+P")]),t._v("，输入 sync，这里就有重置选项")]),t._v(" "),s("imgLink",{attrs:{src:"shortcut/086.png"}}),t._v(" "),s("h2",{attrs:{id:"invalid-expired-github-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#invalid-expired-github-token","aria-hidden":"true"}},[t._v("#")]),t._v(" Invalid / Expired GitHub Token")]),t._v(" "),s("p",[t._v("同步时提示:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Sync : Invalid / Expired GitHub Token. Please generate new token with scopes mentioned in readme. Exception Logged in Console.\n")])])]),s("p",[t._v("解决方法:")]),t._v(" "),s("ol",[s("li",[t._v("重新生成token, 到 "),s("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/settings/tokens"),s("OutboundLink")],1),t._v(" 中找到需要修改的gist, 点击 Regenerate token, 拿到重新生成的token")]),t._v(" "),s("li",[t._v("在VSCode中修改, 点击命令面板 或 Ctrl+Shift+P 输入 sync: 找到 "),s("code",[t._v("Sync: Advanced Options")]),t._v(" 回车, 选中 "),s("code",[t._v("Edit Extension Local Settings")])]),t._v(" "),s("li",[t._v("修改配置文件中的 token 属性就可以了")])]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.whidy.net/visual-studio-code-settings-sync-introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code 设置同步到github的插件介绍及使用方法(Settings Sync)"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://shanalikhan.github.io/2015/12/15/Visual-Studio-Code-Sync-Settings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio Code Settings Synchronization"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件地址"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000011206401",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code Settings Sync 的一些小记"),s("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.default=r.exports}}]);