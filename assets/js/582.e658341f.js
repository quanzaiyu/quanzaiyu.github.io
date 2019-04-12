(window.webpackJsonp=window.webpackJsonp||[]).push([[582],{783:function(s,a,t){"use strict";t.r(a);var e=t(1),r=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sql-基础语句汇总-curd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-基础语句汇总-curd","aria-hidden":"true"}},[s._v("#")]),s._v(" SQL 基础语句汇总 - CURD")]),s._v(" "),t("p",[s._v("SQL，指结构化查询语言，全称是 Structured Query Language。")]),s._v(" "),t("p",[s._v("::: tip\nSQL 对大小写不敏感：SELECT 与 select 是相同的。\n:::")]),s._v(" "),t("p",[s._v("SQL 基本操作为 C（create）创建、U（update）更新、R（Retrieve）读取、D（delete）删除。")]),s._v(" "),t("h2",{attrs:{id:"查询语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 查询语句")]),s._v(" "),t("p",[s._v("SELECT 语句用于从数据库中选取数据。结果被存储在一个结果表中，称为结果集。")]),s._v(" "),t("p",[s._v("基础语法")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"distinct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#distinct","aria-hidden":"true"}},[s._v("#")]),s._v(" DISTINCT")]),s._v(" "),t("p",[s._v("在表中，一个列可能会包含多个重复值，有时我们希望仅仅列出不同（distinct）的值。DISTINCT 关键词用于返回唯一不同的值。")]),s._v(" "),t("p",[s._v("基础语法")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distinct")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" api_age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"where"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where","aria-hidden":"true"}},[s._v("#")]),s._v(" WHERE")]),s._v(" "),t("p",[s._v("WHERE 子句用于提取那些满足指定标准的记录。")]),s._v(" "),t("p",[s._v("基础语法")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" column_name operator "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("WHERE 子句中的运算符")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("=")]),s._v(" "),t("td",[s._v("等于")])]),s._v(" "),t("tr",[t("td",[s._v("<> 或 !=")]),s._v(" "),t("td",[s._v("不等于")])]),s._v(" "),t("tr",[t("td",[s._v(">")]),s._v(" "),t("td",[s._v("大于")])]),s._v(" "),t("tr",[t("td",[s._v("<")]),s._v(" "),t("td",[s._v("小于")])]),s._v(" "),t("tr",[t("td",[s._v(">=")]),s._v(" "),t("td",[s._v("大于等于")])]),s._v(" "),t("tr",[t("td",[s._v("<=")]),s._v(" "),t("td",[s._v("小于等于")])])])]),s._v(" "),t("p",[s._v("WHERE 子句的逻辑运算符")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("not")]),s._v(" "),t("td",[s._v("非")])]),s._v(" "),t("tr",[t("td",[s._v("and")]),s._v(" "),t("td",[s._v("与")])]),s._v(" "),t("tr",[t("td",[s._v("or")]),s._v(" "),t("td",[s._v("或")])]),s._v(" "),t("tr",[t("td",[s._v("()")]),s._v(" "),t("td",[s._v("改变运算符优先级")])])])]),s._v(" "),t("p",[s._v("逻辑运算的优先级：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("()  >  not  >  and  >  or\n")])])]),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" api_wechat "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" subscribe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" sal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("空值判断")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("is null")]),s._v(" 进行空值判断")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" comm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("范围查询")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("between and")]),s._v(" 查询指定范围的数据")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("包含查询")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("In")]),s._v(" 操作符进行包含查询")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" sal "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1500")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("模糊查询")])]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("Like")]),s._v(" 操作符进行模糊查询")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" emp "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" ename "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("% : 表示多个字值，_ 下划线表示一个字符；")]),s._v(" "),t("li",[s._v("M% : 为能配符，正则表达式，表示的意思为模糊查询信息为 M 开头的。")]),s._v(" "),t("li",[s._v("%M% : 表示查询包含M的所有内容。")]),s._v(" "),t("li",[s._v("%M_ : 表示查询以M在倒数第二位的所有内容。")])]),s._v(" "),t("h3",{attrs:{id:"排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排序","aria-hidden":"true"}},[s._v("#")]),s._v(" 排序")]),s._v(" "),t("p",[s._v("ORDER BY 关键字用于对结果集按照一个列或者多个列进行排序，默认按照升序对记录进行排序。如果需要按照降序对记录进行排序，可以使用 DESC 关键字。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" alexa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("多列排序：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" country"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("alexa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("首先按照 country 字段进行升序排列，然后按照 alexa 字段进行升序排列。")]),s._v(" "),t("h2",{attrs:{id:"插入语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插入语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 插入语句")]),s._v(" "),t("p",[s._v("INSERT INTO 语句用于向表中插入新记录。")]),s._v(" "),t("p",[s._v("第一种形式无需指定要插入数据的列名，只需提供被插入的值即可：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("第二种形式需要指定列名及被插入的值：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" Websites "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" alexa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" country"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'百度'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://www.baidu.com/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"更新语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 更新语句")]),s._v(" "),t("p",[s._v("UPDATE 语句用于更新表中的记录。")]),s._v(" "),t("p",[s._v("基础语法")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" column1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("column2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" some_column"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("some_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" Websites "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" alexa"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" country"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USA'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xiaoyulive'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("::: danger 警告\n在更新记录时要格外小心！在上面的实例中，如果我们省略了 WHERE 子句，如下所示：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" Websites "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" alexa"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5000'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" country"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USA'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("执行以上代码会将 Websites 表中所有数据的 alexa 改为 5000，country 改为 USA。")]),s._v(" "),t("p",[s._v("执行没有 WHERE 子句的 UPDATE 要慎重，再慎重。\n:::")]),s._v(" "),t("p",[s._v("::: tip\n在 MySQL 中可以通过设置 "),t("code",[s._v("sql_safe_updates")]),s._v(" 这个自带的参数来解决，当该参数开启的情况下，你必须在update 语句后携带 where 条件，否则就会报错。")]),s._v(" "),t("p",[t("code",[s._v("set sql_safe_updates=1;")]),s._v(" 表示开启该参数。\n:::")]),s._v(" "),t("h2",{attrs:{id:"删除语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除语句","aria-hidden":"true"}},[s._v("#")]),s._v(" 删除语句")]),s._v(" "),t("p",[s._v("DELETE 语句用于删除表中的记录。")]),s._v(" "),t("p",[s._v("基础语法")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" some_column"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("some_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'百度'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" country"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'CN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("::: danger 警告\nWHERE 子句规定哪条记录或者哪些记录需要删除。如果您省略了 WHERE 子句，所有的记录都将被删除！\n:::")])])},[],!1,null,null,null);a.default=r.exports}}]);