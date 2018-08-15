(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{817:function(t,s,n){"use strict";n.r(s);var a=n(1),v=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"配置选项"}},[t._v("配置选项")]),t._v(" "),n("h2",{attrs:{id:"gulp-src"}},[t._v("gulp.src")]),t._v(" "),n("p",[t._v("格式: gulp.src(globs[, options])")]),t._v(" "),n("p",[t._v("指定输入源。")]),t._v(" "),n("h3",{attrs:{id:"globs"}},[t._v("globs")]),t._v(" "),n("p",[t._v("类型： String 或 Array")]),t._v(" "),n("p",[t._v("所要读取的 glob 或者包含 globs 的数组。")]),t._v(" "),n("h3",{attrs:{id:"options"}},[t._v("options")]),t._v(" "),n("p",[t._v("类型： Object")]),t._v(" "),n("p",[n("strong",[t._v("options.buffer")])]),t._v(" "),n("p",[t._v("类型： Boolean")]),t._v(" "),n("p",[t._v("默认值： true")]),t._v(" "),n("p",[t._v("如果该项被设置为 false，那么将会以 stream 方式返回 file.contents 而不是文件 buffer 的形式。这在处理一些大文件的时候将会很有用。"),n("strong",[t._v("注意：")]),t._v(" 插件可能并不会实现对 stream 的支持。")]),t._v(" "),n("p",[n("strong",[t._v("options.read")])]),t._v(" "),n("p",[t._v("类型： Boolean")]),t._v(" "),n("p",[t._v("默认值： true")]),t._v(" "),n("p",[t._v("如果该项被设置为 false， 那么 file.contents 会返回空值（null），也就是并不会去读取文件。")]),t._v(" "),n("p",[n("strong",[t._v("options.base")])]),t._v(" "),n("p",[t._v("类型： String")]),t._v(" "),n("p",[t._v("默认值： 将会加在 glob 之前")]),t._v(" "),n("h2",{attrs:{id:"gulp-dest"}},[t._v("gulp.dest")]),t._v(" "),n("p",[t._v("格式: gulp.dest(path[, options])")]),t._v(" "),n("p",[t._v("指定输出路径。")]),t._v(" "),n("h3",{attrs:{id:"path"}},[t._v("path")]),t._v(" "),n("p",[t._v("类型： String or Function")]),t._v(" "),n("p",[t._v("文件将被写入的路径（输出目录）。也可以传入一个函数，在函数中返回相应路径，这个函数也可以由 vinyl 文件实例 来提供。")]),t._v(" "),n("h3",{attrs:{id:"options-2"}},[t._v("options")]),t._v(" "),n("p",[t._v("类型： Object")]),t._v(" "),n("p",[n("strong",[t._v("options.cwd")])]),t._v(" "),n("p",[t._v("类型： String")]),t._v(" "),n("p",[t._v("默认值： process.cwd()")]),t._v(" "),n("p",[t._v("输出目录的 cwd 参数，只在所给的输出目录是相对路径时候有效。")]),t._v(" "),n("p",[n("strong",[t._v("options.mode")])]),t._v(" "),n("p",[t._v("类型： String")]),t._v(" "),n("p",[t._v("默认值： 0777")]),t._v(" "),n("p",[t._v("八进制权限字符，用以定义所有在输出目录中所创建的目录的权限。")]),t._v(" "),n("p",[t._v("示例:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("gulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("src")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./client/templates/*.jade'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token function"}},[t._v("jade")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("pipe")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dest")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./build/templates'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("h2",{attrs:{id:"gulp-task"}},[t._v("gulp.task")]),t._v(" "),n("p",[t._v("格式: gulp.task(name[, deps], fn)")]),t._v(" "),n("p",[t._v("定义一个 gulp 任务。")]),t._v(" "),n("h3",{attrs:{id:"name"}},[t._v("name")]),t._v(" "),n("p",[t._v("任务的名字，可以直接在命令行使用 "),n("code",[t._v("gulp [name]")]),t._v(" 执行任务。")]),t._v(" "),n("h3",{attrs:{id:"deps"}},[t._v("deps")]),t._v(" "),n("p",[t._v("类型： Array")]),t._v(" "),n("p",[t._v("一个包含任务列表的数组，这些任务会在你当前任务运行之前完成。")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("一定要确保所依赖的任务列表中的任务都使用了正确的异步执行方式：使用一个 callback，或者返回一个 promise 或 stream。")])]),t._v(" "),n("h3",{attrs:{id:"fn"}},[t._v("fn")]),t._v(" "),n("p",[t._v("该函数定义任务所要执行的一些操作。通常来说，它会是这种形式：gulp.src().pipe(someplugin())。")]),t._v(" "),n("p",[t._v("示例:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 返回一个 callback，因此系统可以知道它什么时候完成")]),t._v("\ngulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("task")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'one'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 做一些事 -- 异步的或者其他的")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("cb")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// 如果 err 不是 null 或 undefined，则会停止执行，且注意，这样代表执行失败了")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 定义一个所依赖的 task 必须在这个 task 执行之前完成")]),t._v("\ngulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("task")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'two'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'one'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 'one' 完成后")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ngulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("task")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'default'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'one'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'two'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("h2",{attrs:{id:"gulp-watch"}},[t._v("gulp.watch")]),t._v(" "),n("p",[t._v("格式:")]),t._v(" "),n("ul",[n("li",[t._v("gulp.watch(glob[, opts], tasks)")]),t._v(" "),n("li",[t._v("gulp.watch(glob[, opts, cb])")])]),t._v(" "),n("p",[t._v("监视文件改动。")]),t._v(" "),n("h3",{attrs:{id:"glob"}},[t._v("glob")]),t._v(" "),n("p",[t._v("类型： String or Array")]),t._v(" "),n("p",[t._v("一个 glob 字符串，或者一个包含多个 glob 字符串的数组，用来指定具体监控哪些文件的变动。")]),t._v(" "),n("h3",{attrs:{id:"opts"}},[t._v("opts")]),t._v(" "),n("p",[t._v("类型： Object")]),t._v(" "),n("p",[t._v("传给 gaze 的参数。")]),t._v(" "),n("h3",{attrs:{id:"tasks"}},[t._v("tasks")]),t._v(" "),n("p",[t._v("类型： Array")]),t._v(" "),n("h3",{attrs:{id:"cb-event"}},[t._v("cb(event)")]),t._v(" "),n("p",[t._v("类型： Function")]),t._v(" "),n("p",[t._v("每次变动需要执行的 callback。")]),t._v(" "),n("p",[t._v("示例:")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" watcher "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("watch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'js/**/*.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'uglify'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{attrs:{class:"token string"}},[t._v("'reload'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwatcher"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("on")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'change'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'File '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("' was '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("', running tasks...'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("gulp"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("watch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'js/**/*.js'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'File '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("' was '")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" event"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("', running tasks...'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br")])]),n("p",[t._v("callback 会被传入一个名为 event 的对象。这个对象描述了所监控到的变动：")]),t._v(" "),n("p",[n("strong",[t._v("event.type")])]),t._v(" "),n("p",[t._v("类型： String")]),t._v(" "),n("p",[t._v("发生的变动的类型：added, changed 或者 deleted。")]),t._v(" "),n("p",[n("strong",[t._v("event.path")])]),t._v(" "),n("p",[t._v("类型： String")]),t._v(" "),n("p",[t._v("触发了该事件的文件的路径。")])])}],!1,null,null,null);s.default=v.exports}}]);