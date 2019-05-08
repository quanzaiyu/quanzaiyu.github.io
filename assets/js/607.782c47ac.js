(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{792:function(s,t,a){"use strict";a.r(t);var e=a(1),r=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-limit-实现分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-limit-实现分页","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 Limit 实现分页")]),s._v(" "),a("p",[s._v("在实际应用中，我们常常有分页的需求，在查询数据库的时候，可以使用 Limit 关键字进行分页操作。")]),s._v(" "),a("p",[s._v("在不同的数据库中，实现是不同的，Limit 是 MySQL 的实现方式，如果是 SQL Server 或 MS Access，则使用 SELECT TOP 实现，Oracle 使用 WHERE ROWNUM <= number 实现，这里不做讨论，只看 Limit 的实现方式。")]),s._v(" "),a("p",[s._v("基础语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果只使用一个参数，number，则查询数据库中前面的 number 条数据。")]),s._v(" "),a("p",[s._v("如果使用两个参数，number 和 length，则从 number 行开始，查询之后的 length 条数据。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("p",[s._v("有如下一张表")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" url                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" alexa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" country "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Google        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.google.cm/    |     1 | USA     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 淘宝          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.taobao.com/   |    13 | CN      |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 菜鸟教程       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.runoob.com/    |  5000 | USA     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 微博           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//weibo.com/         |    20 | CN      |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Facebook      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.facebook.com/ |     3 | USA     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stackoverflow "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//stackoverflow.com/ |     0 | IND     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("查询出以下数据：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" url                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" alexa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" country "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Google        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.google.cm/    |     1 | USA     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 淘宝          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.taobao.com/   |    13 | CN      |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("查询出以下数据：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" name          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" url                       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" alexa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" country "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 菜鸟教程       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.runoob.com/    |  5000 | USA     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 微博           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//weibo.com/         |    20 | CN      |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Facebook      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//www.facebook.com/ |     3 | USA     |")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n")])])]),a("h2",{attrs:{id:"limit-的其他使用技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-的其他使用技巧","aria-hidden":"true"}},[s._v("#")]),s._v(" Limit 的其他使用技巧")]),s._v(" "),a("p",[s._v("查询第一条数据：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("查询最后一条数据")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);