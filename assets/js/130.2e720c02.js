(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1162:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"url-字串的处理"}},[s._v("URL 字串的处理")]),s._v(" "),a("p",[s._v("用于处理 URL 字符串: 编码，解码和解析。")]),s._v(" "),a("p",[s._v("参考资料: "),a("a",{attrs:{href:"http://php.net/manual/zh/book.url.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("book.url"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"base64-的编码与解码"}},[s._v("Base64 的编码与解码")]),s._v(" "),s._m(0),s._v(" "),a("p",[s._v("语法")]),s._v(" "),s._m(1),a("p",[s._v("示例")]),s._v(" "),s._m(2),s._m(3),a("h2",{attrs:{id:"url-的编码与解码"}},[s._v("URL 的编码与解码")]),s._v(" "),s._m(4),s._v(" "),a("p",[s._v("解码给出的已编码字符串中的任何 %##。 加号（'+'）被解码成一个空格字符。")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),s._m(5),a("p",[s._v("示例")]),s._v(" "),s._m(6),a("h2",{attrs:{id:"url-处理"}},[s._v("URL 处理")]),s._v(" "),s._m(7),s._v(" "),a("p",[s._v("语法")]),s._v(" "),s._m(8),a("p",[s._v("本函数解析一个 URL 并返回一个关联数组，包含在 URL 中出现的各种组成部分。")]),s._v(" "),a("p",[s._v("本函数不是用来验证给定 URL 的合法性的，只是将其分解为下面列出的部分。不完整的 URL 也被接受，parse_url() 会尝试尽量正确地将其解析。")]),s._v(" "),a("p",[s._v("示例")]),s._v(" "),s._m(9),a("p",[s._v("返回")]),s._v(" "),s._m(10),a("h2",{attrs:{id:"查询字符串"}},[s._v("查询字符串")]),s._v(" "),a("h3",{attrs:{id:"http-build-query"}},[s._v("http_build_query")]),s._v(" "),a("p",[s._v("http_build_query 用于生成 URL-encode 之后的请求字符串。")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),s._m(11),a("p",[s._v("示例")]),s._v(" "),s._m(12),a("h3",{attrs:{id:"parse-str"}},[s._v("parse_str")]),s._v(" "),a("p",[s._v("(parse_str)[http://php.net/manual/zh/function.parse-str.php] 用于将字符串解析成多个变量。")]),s._v(" "),a("p",[s._v("语法")]),s._v(" "),s._m(13),a("p",[s._v("示例")]),s._v(" "),s._m(14)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("base64_decode 用于对使用 MIME base64 编码的数据进行解码")]),this._v(" "),t("li",[this._v("base64_encode 用于对数据使用 MIME base64 进行编码")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("string base64_decode "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bool "),a("span",{attrs:{class:"token variable"}},[s._v("$strict")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nstring base64_encode "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw=='")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("base64_decode")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// This is an encoded string")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'This is an encoded string'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("base64_encode")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("urldecode 解码已编码的 URL 字符串")]),this._v(" "),t("li",[this._v("urlencode 编码 URL 字符串")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("string urldecode "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nstring urlencode "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 解码")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$query")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"say=我是+中国人&myname=q z y"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("urlencode")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$query")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// say%3D%E6%88%91%E6%98%AF%2B%E4%B8%AD%E5%9B%BD%E4%BA%BA%26myname%3Dq+z+y")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 解码")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$query")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"say%3D%E6%88%91%E6%98%AF%2B%E4%B8%AD%E5%9B%BD%E4%BA%BA%26myname%3Dq+z+y"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("urldecode")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$query")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// say=我是+中国人&myname=q z y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("parse_url 解析 URL，返回其组成部分")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("mixed parse_url "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$url")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" int "),a("span",{attrs:{class:"token variable"}},[s._v("$component")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("-")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$url")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'http://username:password@hostname/path?a=0&b=1#anchor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("print_r")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token function"}},[s._v("parse_url")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$url")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('array(7) {\n  ["scheme"] => string(4) "http"\n  ["host"] => string(8) "hostname"\n  ["user"] => string(8) "username"\n  ["pass"] => string(8) "password"\n  ["path"] => string(5) "/path"\n  ["query"] => string(9) "a=0&b=1"\n  ["fragment"] => string(6) "anchor"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("string http_build_query "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" mixed "),a("span",{attrs:{class:"token variable"}},[s._v("$query_data")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$numeric_prefix")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$arg_separator")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" int "),a("span",{attrs:{class:"token variable"}},[s._v("$enc_type")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token constant"}},[s._v("PHP_QUERY_RFC1738")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("// 使用关联数组")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'foo'")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'baz'")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'boom'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'cow'")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'milk'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'php'")]),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'hypertext processor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("http_build_query")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// foo=bar&baz=boom&cow=milk&php=hypertext+processor")]),s._v("\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 使用普通数组")]),s._v("\n"),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'foo'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'bar'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'baz'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'boom'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'cow'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'milk'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'php'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token operator"}},[s._v(">")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'hypertext processor'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("http_build_query")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$data")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// 0=foo&1=bar&2=baz&3=boom&cow=milk&php=hypertext+processor")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("void parse_str "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" string "),a("span",{attrs:{class:"token variable"}},[s._v("$encoded_string")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("array")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("&")]),a("span",{attrs:{class:"token variable"}},[s._v("$result")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token variable"}},[s._v("$str")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[s._v('"first=value&arr[]=foo+bar&arr[]=baz"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 推荐用法，使用一个变量接收")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("parse_str")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$output")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$output")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'first'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("// value")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$output")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'arr'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// foo bar")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$output")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[s._v("'arr'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// baz")]),s._v("\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("// 不建议这么用，所有变量暴露到全局")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("parse_str")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token variable"}},[s._v("$str")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$first")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{attrs:{class:"token comment"}},[s._v("// value")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// foo bar")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{attrs:{class:"token variable"}},[s._v("$arr")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("// baz")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])}],!1,null,null,null);t.default=e.exports}}]);