(window.webpackJsonp=window.webpackJsonp||[]).push([[449],{402:function(s,a,t){"use strict";t.r(a);var n={props:["slot-key"]},e=t(0),r=Object(e.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.slotKey}},[t("h1",{attrs:{id:"使用-limit-实现分页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-limit-实现分页","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 Limit 实现分页")]),s._v(" "),t("p",[s._v("在实际应用中，我们常常有分页的需求，在查询数据库的时候，可以使用 Limit 关键字进行分页操作。")]),s._v(" "),t("p",[s._v("在不同的数据库中，实现是不同的，Limit 是 MySQL 的实现方式，如果是 SQL Server 或 MS Access，则使用 SELECT TOP 实现，Oracle 使用 WHERE ROWNUM <= number 实现，这里不做讨论，只看 Limit 的实现方式。")]),s._v(" "),t("p",[s._v("基础语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" number"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token comment"}},[s._v("-- or")]),s._v("\n"),t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),t("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" number"),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" length"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("如果只使用一个参数，number，则查询数据库中前面的 number 条数据。")]),s._v(" "),t("p",[s._v("如果使用两个参数，number 和 length，则从 number 行开始，查询之后的 length 条数据。")]),s._v(" "),t("p",[s._v("示例：")]),s._v(" "),t("p",[s._v("有如下一张表")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites"),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" name          "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" url                       "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" alexa "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" country "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Google        "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.google.cm/    |     1 | USA     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 淘宝          "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.taobao.com/   |    13 | CN      |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 菜鸟教程       "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.runoob.com/    |  5000 | USA     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 微博           "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),t("span",{attrs:{class:"token comment"}},[s._v("//weibo.com/         |    20 | CN      |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Facebook      "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.facebook.com/ |     3 | USA     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" stackoverflow "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),t("span",{attrs:{class:"token comment"}},[s._v("//stackoverflow.com/ |     0 | IND     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),t("span",{attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("2")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询出以下数据：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" name          "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" url                       "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" alexa "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" country "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Google        "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.google.cm/    |     1 | USA     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 淘宝          "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.taobao.com/   |    13 | CN      |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Websites "),t("span",{attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("2")]),t("span",{attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{attrs:{class:"token number"}},[s._v("3")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询出以下数据：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" name          "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" url                       "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" alexa "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" country "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 菜鸟教程       "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.runoob.com/    |  5000 | USA     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" 微博           "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" http:"),t("span",{attrs:{class:"token comment"}},[s._v("//weibo.com/         |    20 | CN      |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),t("span",{attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Facebook      "),t("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" https:"),t("span",{attrs:{class:"token comment"}},[s._v("//www.facebook.com/ |     3 | USA     |")]),s._v("\n"),t("span",{attrs:{class:"token operator"}},[s._v("+")]),t("span",{attrs:{class:"token comment"}},[s._v("----+---------------+---------------------------+-------+---------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"limit-的其他使用技巧"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-的其他使用技巧","aria-hidden":"true"}},[s._v("#")]),s._v(" Limit 的其他使用技巧")]),s._v(" "),t("p",[s._v("查询第一条数据：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name "),t("span",{attrs:{class:"token keyword"}},[s._v("ASC")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询最后一条数据")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name "),t("span",{attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name "),t("span",{attrs:{class:"token keyword"}},[s._v("DESC")]),s._v(" "),t("span",{attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{attrs:{class:"token number"}},[s._v("1")]),t("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])},[],!1,null,null,null);r.options.__file="Limit.md";a.default=r.exports}}]);