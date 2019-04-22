(window.webpackJsonp=window.webpackJsonp||[]).push([[595],{785:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"truncate、delete、drop-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truncate、delete、drop-的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" truncate、delete、drop 的区别")]),t._v(" "),a("p",[a("code",[t._v("truncate table")]),t._v(" 命令将快速删除数据表中的所有记录，但保留数据表结构。这种快速删除与 "),a("code",[t._v("delete from 数据表")]),t._v(" 的删除全部数据表记录不一样，delete 命令删除的数据将存储在系统回滚段中，需要的时候，数据可以回滚恢复，而 "),a("strong",[t._v("truncate 命令删除的数据是不可以恢复的")]),t._v("。")]),t._v(" "),a("p",[t._v("SQL 关于删除的三个语句： DROP、TRUNCATE、DELETE 的区别。")]),t._v(" "),a("h2",{attrs:{id:"drop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop","aria-hidden":"true"}},[t._v("#")]),t._v(" DROP")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除表test，并释放空间(包括结构和数据)，将test删除的一干二净。")]),t._v("\n")])])]),a("h2",{attrs:{id:"truncate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#truncate","aria-hidden":"true"}},[t._v("#")]),t._v(" TRUNCATE")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRUNCATE")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除表test里的内容，并释放空间，但不删除表的定义，表的结构还在。")]),t._v("\n")])])]),a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[t._v("#")]),t._v(" DELETE")]),t._v(" "),a("p",[t._v("1、删除指定数据")]),t._v(" "),a("p",[t._v("删除表test中年龄等于30的且国家为US的数据")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" test "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" country"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("2、删除整个表")]),t._v(" "),a("p",[t._v("仅删除表test内的所有内容，保留表的定义，不释放空间。")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结：相同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结：相同点","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结：相同点")]),t._v(" "),a("p",[t._v("truncate 和不带 where 子句的 delete, 以及 drop 都会删除表内的数据。")]),t._v(" "),a("h2",{attrs:{id:"总结：不同点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结：不同点","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结：不同点")]),t._v(" "),a("ol",[a("li",[t._v("truncate 和 delete 只删除数据不删除表的结构(定义) ，drop 语句将删除表的结构被依赖的约束(constrain), 触发器(trigger), 索引(index); 依赖于该表的存储过程/函数将保留, 但是变为 invalid 状态。")]),t._v(" "),a("li",[t._v("delete 语句是 dml, 这个操作会放到 rollback segement 中, 事务提交之后才生效; 如果有相应的 trigger, 执行的时候将被触发。 truncate, drop 是 ddl, 操作立即生效, 原数据不放到 rollback segment 中, 不能回滚。 操作不触发 trigger。")]),t._v(" "),a("li",[t._v("delete 语句不影响表所占用的 extent, 高水线(high watermark)保持原位置不动。 显然 drop 语句将表所占用的空间全部释放 。 truncate 语句缺省情况下见空间释放到 minextents 个 extent, 除非使用 reuse storage; truncate会将高水线复位(回到最开始)。")]),t._v(" "),a("li",[t._v("速度：一般来说: drop > truncate > delete 。")]),t._v(" "),a("li",[t._v("安全性: 小心使用 drop 和 truncate, 尤其没有备份的时候。否则哭都来不及。")])]),t._v(" "),a("h2",{attrs:{id:"使用建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用建议","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用建议")]),t._v(" "),a("p",[t._v("使用上, 想删除部分数据行用 delete, 注意带上 where 子句。 回滚段要足够大。")]),t._v(" "),a("p",[t._v("想删除表, 当然用 drop。")]),t._v(" "),a("p",[t._v("想保留表而将所有数据删除。如果和事务无关, 用 truncate 即可。 如果和事务有关, 或者想触发 trigger, 还是用 delete。")]),t._v(" "),a("p",[t._v("如果是整理表内部的碎片, 可以用 truncate 跟上 reuse stroage, 再重新导入/插入数据。")])])},[],!1,null,null,null);e.default=r.exports}}]);