(window.webpackJsonp=window.webpackJsonp||[]).push([[629],{811:function(t,e,a){"use strict";a.r(e);var r=a(1),n=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据库问题汇总及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库问题汇总及解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据库问题汇总及解决方案")]),t._v(" "),a("h2",{attrs:{id:"err-1215-cannot-add-foreign-key-constraint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#err-1215-cannot-add-foreign-key-constraint","aria-hidden":"true"}},[t._v("#")]),t._v(" [Err] 1215 - Cannot add foreign key constraint")]),t._v(" "),a("p",[t._v("今天在 MySQL 数据表中添加外键的时候，遇到以下报错：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[Err] 1215 - Cannot add foreign key constraint\n")])])]),a("p",[t._v("导致外键无法添加。")]),t._v(" "),a("p",[t._v("外键定义添加的条件：")]),t._v(" "),a("ul",[a("li",[t._v("外键对应的字段数据类型保持一致")]),t._v(" "),a("li",[t._v("所有 tables 必须是 InnoDB 型，它们不能是临时表.因为在 MySQL 中只有 InnoDB 类型的表才支持外键（两张表的存储引擎一致）。")]),t._v(" "),a("li",[t._v("设置外键时“删除时”设置为“SET NULL”")])]),t._v(" "),a("p",[t._v("最后又复查了一下两张表的定义，发现一个是 int 类型，另一个是 int UNSIGNED，不满足条件一，将其数据类型改为一致，即可成功添加。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/actionzh/article/details/54270335",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库添加外键错误：[Err] 1215 - Cannot add foreign key constraint 的解决"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"err-1050-table-xxx-already-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#err-1050-table-xxx-already-exists","aria-hidden":"true"}},[t._v("#")]),t._v(" [Err] 1050 Table 'xxx' already exists")]),t._v(" "),a("p",[t._v("错误描述：在修改一张表的某个字段类型是突然报了那么一个错误。")]),t._v(" "),a("p",[t._v("解决方案：")]),t._v(" "),a("p",[t._v("删除表再重新创建对应的表。")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/iong_l/article/details/69524660",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysql创建表时提示 1050 - Table'"),a("code",[t._v("test")]),t._v("."),a("code",[t._v("mytable")]),t._v("' already exists"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/you23hai45/article/details/48497875",target:"_blank",rel:"noopener noreferrer"}},[t._v("错误代码： 1050 Table 'emp' already exists"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=n.exports}}]);