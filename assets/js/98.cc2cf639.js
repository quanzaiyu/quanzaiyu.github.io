(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{961:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"sql-基础语句汇总"}},[s._v("SQL 基础语句汇总")]),a("p",[s._v("SQL，指结构化查询语言，全称是 Structured Query Language。")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),a("p",[s._v("SQL 对大小写不敏感：SELECT 与 select 是相同的。")])]),a("h2",{attrs:{id:"一些最重要的-sql-命令"}},[s._v("一些最重要的 SQL 命令")]),a("ul",[a("li",[s._v("SELECT - 从数据库中提取数据")]),a("li",[s._v("UPDATE - 更新数据库中的数据")]),a("li",[s._v("DELETE - 从数据库中删除数据")]),a("li",[s._v("INSERT INTO - 向数据库中插入新数据")]),a("li",[s._v("CREATE DATABASE - 创建新数据库")]),a("li",[s._v("ALTER DATABASE - 修改数据库")]),a("li",[s._v("CREATE TABLE - 创建新表")]),a("li",[s._v("ALTER TABLE - 变更（改变）数据库表")]),a("li",[s._v("DROP TABLE - 删除表")]),a("li",[s._v("CREATE INDEX - 创建索引（搜索键）")]),a("li",[s._v("DROP INDEX - 删除索引")])]),a("h2",{attrs:{id:"查询语句"}},[s._v("查询语句")]),a("p",[s._v("SELECT 语句用于从数据库中选取数据。结果被存储在一个结果表中，称为结果集。")]),a("p",[s._v("基础语法")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name1 "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"distinct"}},[s._v("DISTINCT")]),a("p",[s._v("在表中，一个列可能会包含多个重复值，有时我们希望仅仅列出不同（distinct）的值。DISTINCT 关键词用于返回唯一不同的值。")]),a("p",[s._v("基础语法")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" column_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" age "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" api_age"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"where"}},[s._v("WHERE")]),a("p",[s._v("WHERE 子句用于提取那些满足指定标准的记录。")]),a("p",[s._v("基础语法")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" column_name operator "),a("span",{attrs:{class:"token keyword"}},[s._v("value")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("WHERE 子句中的运算符")]),a("table",[a("thead",[a("tr",[a("th",[s._v("运算符")]),a("th",[s._v("描述")])])]),a("tbody",[a("tr",[a("td",[s._v("=")]),a("td",[s._v("等于")])]),a("tr",[a("td",[s._v("<> 或 !=")]),a("td",[s._v("不等于")])]),a("tr",[a("td",[s._v(">")]),a("td",[s._v("大于")])]),a("tr",[a("td",[s._v("<")]),a("td",[s._v("小于")])]),a("tr",[a("td",[s._v(">=")]),a("td",[s._v("大于等于")])]),a("tr",[a("td",[s._v("<=")]),a("td",[s._v("小于等于")])])])]),a("p",[s._v("WHERE 子句的逻辑运算符")]),a("table",[a("thead",[a("tr",[a("th",[s._v("运算符")]),a("th",[s._v("描述")])])]),a("tbody",[a("tr",[a("td",[s._v("not")]),a("td",[s._v("非")])]),a("tr",[a("td",[s._v("and")]),a("td",[s._v("与")])]),a("tr",[a("td",[s._v("or")]),a("td",[s._v("或")])]),a("tr",[a("td",[s._v("()")]),a("td",[s._v("改变运算符优先级")])])])]),a("p",[s._v("逻辑运算的优先级：")]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("()  >  not  >  and  >  or\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" api_wechat "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" subscribe "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("not")]),s._v(" sal "),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1500")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("空值判断")])]),a("p",[s._v("使用 "),a("code",[s._v("is null")]),s._v(" 进行空值判断")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" comm "),a("span",{attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("null")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("范围查询")])]),a("p",[s._v("使用 "),a("code",[s._v("between and")]),s._v(" 查询指定范围的数据")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sal "),a("span",{attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1500")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("包含查询")])]),a("p",[s._v("使用 "),a("code",[s._v("In")]),s._v(" 操作符进行包含查询")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sal "),a("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("5000")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("1500")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("模糊查询")])]),a("p",[s._v("使用 "),a("code",[s._v("Like")]),s._v(" 操作符进行模糊查询")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ename "),a("span",{attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'M%'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("% : 表示多个字值，_ 下划线表示一个字符；")]),a("li",[s._v("M% : 为能配符，正则表达式，表示的意思为模糊查询信息为 M 开头的。")]),a("li",[s._v("%M% : 表示查询包含M的所有内容。")]),a("li",[s._v("%M_ : 表示查询以M在倒数第二位的所有内容。")])]),a("h3",{attrs:{id:"排序"}},[s._v("排序")]),a("p",[s._v("ORDER BY 关键字用于对结果集按照一个列或者多个列进行排序，默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，可以使用 DESC 关键字。")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),a("span",{attrs:{class:"token keyword"}},[s._v("ASC")]),a("span",{attrs:{class:"token operator"}},[s._v("|")]),a("span",{attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),a("span",{attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" alexa "),a("span",{attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("多列排序：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),a("span",{attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" country"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("alexa"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("首先按照 country 字段进行升序排列，然后按照 alexa 字段进行升序排列。")]),a("h2",{attrs:{id:"插入语句"}},[s._v("插入语句")]),a("p",[s._v("INSERT INTO 语句用于向表中插入新记录。")]),a("p",[s._v("第一种形式无需指定要插入数据的列名，只需提供被插入的值即可：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" table_name "),a("span",{attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value3"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("第二种形式需要指定列名及被插入的值：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" table_name "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column2"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column3"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value3"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" Websites "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" alexa"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" country"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'百度'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'https://www.baidu.com/'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'4'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'CN'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"更新语句"}},[s._v("更新语句")]),a("p",[s._v("UPDATE 语句用于更新表中的记录。")]),a("p",[s._v("基础语法")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" table_name "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" column1"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("value1"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column2"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("value2"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" some_column"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("some_value"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" Websites "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" alexa"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'5000'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" country"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'USA'")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'xiaoyulive'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),a("p",[s._v("在更新记录时要格外小心！在上面的实例中，如果我们省略了 WHERE 子句，如下所示：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" Websites "),a("span",{attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" alexa"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'5000'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" country"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'USA'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行以上代码会将 Websites 表中所有数据的 alexa 改为 5000，country 改为 USA。")]),a("p",[s._v("执行没有 WHERE 子句的 UPDATE 要慎重，再慎重。")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),a("p",[s._v("在 MySQL 中可以通过设置 "),a("code",[s._v("sql_safe_updates")]),s._v(" 这个自带的参数来解决，当该参数开启的情况下，你必须在update 语句后携带 where 条件，否则就会报错。")]),a("p",[a("code",[s._v("set sql_safe_updates=1;")]),s._v(" 表示开启该参数。")])]),a("h2",{attrs:{id:"删除语句"}},[s._v("删除语句")]),a("p",[s._v("DELETE 语句用于删除表中的记录。")]),a("p",[s._v("基础语法")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" some_column"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("some_value"),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("比如：")]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'百度'")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("AND")]),s._v(" country"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'CN'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("警告")]),a("p",[s._v("WHERE 子句规定哪条记录或者哪些记录需要删除。如果您省略了 WHERE 子句，所有的记录都将被删除！")])])])}],!1,null,null,null);t.default=e.exports}}]);