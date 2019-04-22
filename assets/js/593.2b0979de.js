(window.webpackJsonp=window.webpackJsonp||[]).push([[593],{938:function(t,v,_){"use strict";_.r(v);var a=_(1),r=Object(a.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"数据库的数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据库的数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库的数据类型")]),t._v(" "),_("p",[t._v("事实上，不同的数据库中存在不同的数据类型定义，不过也有很多相同的类型。")]),t._v(" "),_("h2",{attrs:{id:"常用的数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用的数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用的数据类型")]),t._v(" "),_("p",[t._v("下面的表格列出了 SQL 中通用的数据类型：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("数据类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("character(n)、char(n)")]),t._v(" "),_("td",[t._v("字符/字符串。固定长度 n。")])]),t._v(" "),_("tr",[_("td",[t._v("varchar(n)")]),t._v(" "),_("td",[t._v("字符/字符串。可变长度。最大长度 n。")])]),t._v(" "),_("tr",[_("td",[t._v("binary(n)")]),t._v(" "),_("td",[t._v("二进制串。固定长度 n。")])]),t._v(" "),_("tr",[_("td",[t._v("varbinary(n)")]),t._v(" "),_("td",[t._v("二进制串。可变长度。最大长度 n。")])]),t._v(" "),_("tr",[_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("存储 TRUE 或 FALSE 值")])]),t._v(" "),_("tr",[_("td",[t._v("integer(p)")]),t._v(" "),_("td",[t._v("整数值（没有小数点）。精度 p，不指定为10。")])]),t._v(" "),_("tr",[_("td",[t._v("smallint")]),t._v(" "),_("td",[t._v("整数值（没有小数点）。精度 5。")])]),t._v(" "),_("tr",[_("td",[t._v("bigint")]),t._v(" "),_("td",[t._v("整数值（没有小数点）。精度 19。")])]),t._v(" "),_("tr",[_("td",[t._v("decimal(p,s)")]),t._v(" "),_("td",[t._v("精确数值，精度 p，小数点后位数 s。例如：decimal(5,2) 是一个小数点前有 3 位数小数点后有 2 位数的数字。")])]),t._v(" "),_("tr",[_("td",[t._v("numeric(p,s)")]),t._v(" "),_("td",[t._v("精确数值，精度 p，小数点后位数 s。（与 DECIMAL 相同）")])]),t._v(" "),_("tr",[_("td",[t._v("float(p)")]),t._v(" "),_("td",[t._v("近似数值，尾数精度 p，不指定为16。一个采用以 10 为基数的指数计数法的浮点数。该类型的 size 参数由一个指定最小精度的单一数字组成。")])]),t._v(" "),_("tr",[_("td",[t._v("real")]),t._v(" "),_("td",[t._v("近似数值，尾数精度 7。")])]),t._v(" "),_("tr",[_("td",[t._v("double")]),t._v(" "),_("td",[t._v("近似数值，尾数精度 16。")])]),t._v(" "),_("tr",[_("td",[t._v("date")]),t._v(" "),_("td",[t._v("存储年、月、日的值。")])]),t._v(" "),_("tr",[_("td",[t._v("time")]),t._v(" "),_("td",[t._v("存储小时、分、秒的值。")])]),t._v(" "),_("tr",[_("td",[t._v("timestamp")]),t._v(" "),_("td",[t._v("存储年、月、日、小时、分、秒的值。")])]),t._v(" "),_("tr",[_("td",[t._v("interval")]),t._v(" "),_("td",[t._v("由一些整数字段组成，代表一段时间，取决于区间的类型。")])]),t._v(" "),_("tr",[_("td",[t._v("array")]),t._v(" "),_("td",[t._v("元素的固定长度的有序集合")])]),t._v(" "),_("tr",[_("td",[t._v("multiset")]),t._v(" "),_("td",[t._v("元素的可变长度的无序集合")])]),t._v(" "),_("tr",[_("td",[t._v("xml")]),t._v(" "),_("td",[t._v("存储 XML 数据")])])])]),t._v(" "),_("h2",{attrs:{id:"sql-数据类型快速参考手册"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql-数据类型快速参考手册","aria-hidden":"true"}},[t._v("#")]),t._v(" SQL 数据类型快速参考手册")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("数据类型")]),t._v(" "),_("th",[t._v("Access")]),t._v(" "),_("th",[t._v("SQLServer")]),t._v(" "),_("th",[t._v("Oracle")]),t._v(" "),_("th",[t._v("MySQL")]),t._v(" "),_("th",[t._v("PostgreSQL")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("em",[t._v("boolean")])]),t._v(" "),_("td",[t._v("Yes/No")]),t._v(" "),_("td",[t._v("Bit")]),t._v(" "),_("td",[t._v("Byte")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Boolean")])]),t._v(" "),_("tr",[_("td",[_("em",[t._v("integer")])]),t._v(" "),_("td",[t._v("Number (integer)")]),t._v(" "),_("td",[t._v("Int")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("Int Integer")]),t._v(" "),_("td",[t._v("Int Integer")])]),t._v(" "),_("tr",[_("td",[_("em",[t._v("float")])]),t._v(" "),_("td",[t._v("Number (single)")]),t._v(" "),_("td",[t._v("Float Real")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("Float")]),t._v(" "),_("td",[t._v("Numeric")])]),t._v(" "),_("tr",[_("td",[_("em",[t._v("currency")])]),t._v(" "),_("td",[t._v("Currency")]),t._v(" "),_("td",[t._v("Money")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Money")])]),t._v(" "),_("tr",[_("td",[_("em",[t._v("string (fixed)")])]),t._v(" "),_("td",[t._v("N/A")]),t._v(" "),_("td",[t._v("Char")]),t._v(" "),_("td",[t._v("Char")]),t._v(" "),_("td",[t._v("Char")]),t._v(" "),_("td",[t._v("Char")])]),t._v(" "),_("tr",[_("td",[_("em",[t._v("string (variable)")])]),t._v(" "),_("td",[t._v("Text (<256) Memo (65k+)")]),t._v(" "),_("td",[t._v("Varchar")]),t._v(" "),_("td",[t._v("Varchar Varchar2")]),t._v(" "),_("td",[t._v("Varchar")]),t._v(" "),_("td",[t._v("Varchar")])]),t._v(" "),_("tr",[_("td",[_("em",[t._v("binary object")])]),t._v(" "),_("td",[t._v("OLE Object Memo")]),t._v(" "),_("td",[t._v("Binary (fixed up to 8K) Varbinary (<8K) Image (<2GB)")]),t._v(" "),_("td",[t._v("Long Raw")]),t._v(" "),_("td",[t._v("Blob Text")]),t._v(" "),_("td",[t._v("Binary Varbinary")])])])]),t._v(" "),_("h2",{attrs:{id:"mysql-数据类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL 数据类型")]),t._v(" "),_("p",[t._v("在 MySQL 中，有三种主要的类型：Text（文本）、Number（数字）和 Date/Time（日期/时间）类型。")]),t._v(" "),_("h3",{attrs:{id:"text-类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#text-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Text 类型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("数据类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("CHAR(size)")]),t._v(" "),_("td",[t._v("保存固定长度的字符串（可包含字母、数字以及特殊字符）。在括号中指定字符串的长度。最多 255 个字符。")])]),t._v(" "),_("tr",[_("td",[t._v("VARCHAR(size)")]),t._v(" "),_("td",[t._v("保存可变长度的字符串（可包含字母、数字以及特殊字符）。在括号中指定字符串的最大长度。最多 255 个字符。**注释：**如果值的长度大于 255，则被转换为 TEXT 类型。")])]),t._v(" "),_("tr",[_("td",[t._v("TINYTEXT")]),t._v(" "),_("td",[t._v("存放最大长度为 255 个字符的字符串。")])]),t._v(" "),_("tr",[_("td",[t._v("TEXT")]),t._v(" "),_("td",[t._v("存放最大长度为 65,535 个字符的字符串。")])]),t._v(" "),_("tr",[_("td",[t._v("MEDIUMTEXT")]),t._v(" "),_("td",[t._v("存放最大长度为 16,777,215 个字符的字符串。")])]),t._v(" "),_("tr",[_("td",[t._v("LONGTEXT")]),t._v(" "),_("td",[t._v("存放最大长度为 4,294,967,295 个字符的字符串。")])]),t._v(" "),_("tr",[_("td",[t._v("BLOB（Binary Large Objects）")]),t._v(" "),_("td",[t._v("存放最多 65,535 字节的数据。")])]),t._v(" "),_("tr",[_("td",[t._v("MEDIUMBLOB")]),t._v(" "),_("td",[t._v("存放最多 16,777,215 字节的数据。")])]),t._v(" "),_("tr",[_("td",[t._v("LONGBLOB")]),t._v(" "),_("td",[t._v("存放最多 4,294,967,295 字节的数据。")])]),t._v(" "),_("tr",[_("td",[t._v("ENUM(x,y,z,etc.)")]),t._v(" "),_("td",[t._v("允许您输入可能值的列表。可以在 ENUM 列表中列出最大 65535 个值。如果列表中不存在插入的值，则插入空值。"),_("strong",[t._v("注释：")]),t._v(" 这些值是按照您输入的顺序排序的。可以按照此格式输入可能的值： ENUM('X','Y','Z')")])]),t._v(" "),_("tr",[_("td",[t._v("SET")]),t._v(" "),_("td",[t._v("与 ENUM 类似，不同的是，SET 最多只能包含 64 个列表项且 SET 可存储一个以上的选择。")])])])]),t._v(" "),_("h3",{attrs:{id:"number-类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#number-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Number 类型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("数据类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("TINYINT(size)")]),t._v(" "),_("td",[t._v("带符号-128到127 ，无符号0到255。")])]),t._v(" "),_("tr",[_("td",[t._v("SMALLINT(size)")]),t._v(" "),_("td",[t._v("带符号范围-32768到32767，无符号0到65535, size 默认为 6。")])]),t._v(" "),_("tr",[_("td",[t._v("MEDIUMINT(size)")]),t._v(" "),_("td",[t._v("带符号范围-8388608到8388607，无符号的范围是0到16777215。 size 默认为9")])]),t._v(" "),_("tr",[_("td",[t._v("INT(size)")]),t._v(" "),_("td",[t._v("带符号范围-2147483648到2147483647，无符号的范围是0到4294967295。 size 默认为 11")])]),t._v(" "),_("tr",[_("td",[t._v("BIGINT(size)")]),t._v(" "),_("td",[t._v("带符号的范围是-9223372036854775808到9223372036854775807，无符号的范围是0到18446744073709551615。size 默认为 20")])]),t._v(" "),_("tr",[_("td",[t._v("FLOAT(size,d)")]),t._v(" "),_("td",[t._v("带有浮动小数点的小数字。在 size 参数中规定显示最大位数。在 d 参数中规定小数点右侧的最大位数。")])]),t._v(" "),_("tr",[_("td",[t._v("DOUBLE(size,d)")]),t._v(" "),_("td",[t._v("带有浮动小数点的大数字。在 size 参数中规显示定最大位数。在 d 参数中规定小数点右侧的最大位数。")])]),t._v(" "),_("tr",[_("td",[t._v("DECIMAL(size,d)")]),t._v(" "),_("td",[t._v("作为字符串存储的 DOUBLE 类型，允许固定的小数点。在 size 参数中规定显示最大位数。在 d 参数中规定小数点右侧的最大位数。")])])])]),t._v(" "),_("p",[t._v("::: tip 注意\n以上的 size 代表的并不是存储在数据库中的具体的长度，如 int(4) 并不是只能存储4个长度的数字。")]),t._v(" "),_("p",[t._v("实际上int(size)所占多少存储空间并无任何关系。int(3)、int(4)、int(8) 在磁盘上都是占用 4 btyes 的存储空间。就是在显示给用户的方式有点不同外，int(M) 跟 int 数据类型是相同的。")]),t._v(" "),_("p",[t._v("例如：")]),t._v(" "),_("p",[t._v("int的值为10 （指定 zerofill）")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("int（9）显示结果为000000010\nint（3）显示结果为010\n")])])]),_("p",[t._v(":::")]),t._v(" "),_("h3",{attrs:{id:"date-类型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#date-类型","aria-hidden":"true"}},[t._v("#")]),t._v(" Date 类型")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("数据类型")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("DATE()")]),t._v(" "),_("td",[t._v("日期。格式：YYYY-MM-DD**注释：**支持的范围是从 '1000-01-01' 到 '9999-12-31'")])]),t._v(" "),_("tr",[_("td",[t._v("DATETIME()")]),t._v(" "),_("td",[t._v("*日期和时间的组合。格式：YYYY-MM-DD HH:MM:SS**注释：**支持的范围是从 '1000-01-01 00:00:00' 到 '9999-12-31 23:59:59'")])]),t._v(" "),_("tr",[_("td",[t._v("TIMESTAMP()")]),t._v(" "),_("td",[t._v("*时间戳。TIMESTAMP 值使用 Unix 纪元('1970-01-01 00:00:00' UTC) 至今的秒数来存储。格式：YYYY-MM-DD HH:MM:SS**注释：**支持的范围是从 '1970-01-01 00:00:01' UTC 到 '2038-01-09 03:14:07' UTC")])]),t._v(" "),_("tr",[_("td",[t._v("TIME()")]),t._v(" "),_("td",[t._v("时间。格式：HH:MM:SS**注释：**支持的范围是从 '-838:59:59' 到 '838:59:59'")])]),t._v(" "),_("tr",[_("td",[t._v("YEAR()")]),t._v(" "),_("td",[t._v("2 位或 4 位格式的年。**注释：**4 位格式所允许的值：1901 到 2155。2 位格式所允许的值：70 到 69，表示从 1970 到 2069。")])])])]),t._v(" "),_("p",[t._v("*即便 DATETIME 和 TIMESTAMP 返回相同的格式，它们的工作方式很不同。在 INSERT 或 UPDATE 查询中，TIMESTAMP 自动把自身设置为当前的日期和时间。TIMESTAMP 也接受不同的格式，比如 YYYYMMDDHHMMSS、YYMMDDHHMMSS、YYYYMMDD 或 YYMMDD。")]),t._v(" "),_("h2",{attrs:{id:"null"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#null","aria-hidden":"true"}},[t._v("#")]),t._v(" NULL")]),t._v(" "),_("p",[t._v("NULL 值代表遗漏的未知数据。默认地，表的列可以存放 NULL 值。")]),t._v(" "),_("p",[t._v("如果表中的某个列是可选的，那么我们可以在不向该列添加值的情况下插入新记录或更新已有的记录。这意味着该字段将以 NULL 值保存。")]),t._v(" "),_("p",[t._v("NULL 值的处理方式与其他值不同。")]),t._v(" "),_("p",[t._v("NULL 用作未知的或不适用的值的占位符。")]),t._v(" "),_("p",[t._v("::: tip 注释\n无法比较 NULL 和 0；它们是不等价的。\n:::")]),t._v(" "),_("h3",{attrs:{id:"查询-null-值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#查询-null-值","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询 NULL 值")]),t._v(" "),_("p",[t._v("使用 IS NULL 可以查询 NULL 值，使用 IS NOT NULL 查询非 NULL 值。")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" LastName"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("FirstName"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Address "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Persons\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Address "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" LastName"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("FirstName"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Address "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Persons\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" Address "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IS")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("h3",{attrs:{id:"null-函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#null-函数","aria-hidden":"true"}},[t._v("#")]),t._v(" NULL 函数")]),t._v(" "),_("p",[t._v("可以使用 ISNULL() 函数判断某个值是否是 NULL，在 MySQL 中使用 IFNULL() 或 COALESCE() 判断。")]),t._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ProductName"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("UnitPrice"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UnitsInStock"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("IFNULL"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UnitsOnOrder"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" totalPrice\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Products\n\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- or")]),t._v("\n\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" ProductName"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("UnitPrice"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UnitsInStock"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COALESCE")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UnitsOnOrder"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" totalPrice\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" Products\n")])])]),_("p",[t._v("以上查询，IFNULL 函数判断指定字段是否是空，如果是空则返回 0，然后参与运算。")]),t._v(" "),_("h2",{attrs:{id:"参考文档"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.runoob.com/sql/sql-datatypes-general.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL 通用数据类型"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"http://www.runoob.com/sql/sql-datatypes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL 用于各种数据库的数据类型"),_("OutboundLink")],1)])])},[],!1,null,null,null);v.default=r.exports}}]);