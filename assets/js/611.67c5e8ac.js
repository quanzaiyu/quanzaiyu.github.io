(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{869:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-事务详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-事务详解","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL 事务详解")]),t._v(" "),a("p",[t._v("MySQL 事务主要用于处理操作量大，复杂度高的数据。比如说，在人员管理系统中，你删除一个人员，你即需要删除人员的基本资料，也要删除和该人员相关的信息，如信箱，文章等等，这样，这些数据库操作语句就构成一个事务！")]),t._v(" "),a("ul",[a("li",[t._v("在 MySQL 中只有使用了 Innodb 数据库引擎的数据库或表才支持事务。")]),t._v(" "),a("li",[t._v("事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。")]),t._v(" "),a("li",[t._v("事务用来管理 insert,update,delete 语句")])]),t._v(" "),a("h2",{attrs:{id:"事务的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务的特性")]),t._v(" "),a("p",[t._v("一般来说，事务是必须满足4个条件（ACID）：原子性（Atomicity，或称不可分割性）、一致性（Consistency）、隔离性（Isolation，又称独立性）、持久性（Durability）。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("原子性：")]),t._v(" 一个事务（transaction）中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。")]),t._v(" "),a("li",[a("strong",[t._v("一致性：")]),t._v(" 在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。")]),t._v(" "),a("li",[a("strong",[t._v("隔离性：")]),t._v(" 数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。")]),t._v(" "),a("li",[a("strong",[t._v("持久性：")]),t._v(" 事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。")])]),t._v(" "),a("blockquote",[a("p",[t._v("在 MySQL 命令行的默认设置下，事务都是自动提交的，即执行 SQL 语句后就会马上执行 COMMIT 操作。因此要显式地开启一个事务务须使用命令 BEGIN 或 START TRANSACTION，或者执行命令 SET AUTOCOMMIT=0，用来禁止使用当前会话的自动提交。")])]),t._v(" "),a("h2",{attrs:{id:"事务控制语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务控制语句","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务控制语句")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("BEGIN TRANSACTION")]),t._v(" 或 "),a("strong",[t._v("START TRANSACTION")]),t._v("：显式地开启一个事务；")]),t._v(" "),a("li",[a("strong",[t._v("COMMIT")]),t._v("：也可以使用 COMMIT WORK，不过二者是等价的。COMMIT 会提交事务，并使已对数据库进行的所有修改成为永久性的；")]),t._v(" "),a("li",[a("strong",[t._v("ROLLBACK")]),t._v("：有可以使用 ROLLBACK WORK，不过二者是等价的。回滚会结束用户的事务，并撤销正在进行的所有未提交的修改；")]),t._v(" "),a("li",[a("strong",[t._v("SAVEPOINT identifier")]),t._v("：SAVEPOINT 允许在事务中创建一个保存点，一个事务中可以有多个 SAVEPOINT；")]),t._v(" "),a("li",[a("strong",[t._v("RELEASE SAVEPOINT identifier")]),t._v("：删除一个事务的保存点，当没有指定的保存点时，执行该语句会抛出一个异常；")]),t._v(" "),a("li",[a("strong",[t._v("ROLLBACK TO identifier")]),t._v("：把事务回滚到标记点；")]),t._v(" "),a("li",[a("strong",[t._v("SET TRANSACTION")]),t._v("：用来设置事务的隔离级别。InnoDB 存储引擎提供事务的隔离级别有 READ UNCOMMITTED、READ COMMITTED、REPEATABLE READ 和 SERIALIZABLE。")])]),t._v(" "),a("h2",{attrs:{id:"mysql-事务处理主要有两种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-事务处理主要有两种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" MYSQL 事务处理主要有两种方法")]),t._v(" "),a("p",[t._v("1、用 BEGIN, ROLLBACK, COMMIT 来实现")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("BEGIN")]),t._v(" 开始一个事务")]),t._v(" "),a("li",[a("strong",[t._v("ROLLBACK")]),t._v(" 事务回滚")]),t._v(" "),a("li",[a("strong",[t._v("COMMIT")]),t._v(" 事务确认")])]),t._v(" "),a("p",[t._v("2、直接用 SET 来改变 MySQL 的自动提交模式")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("SET AUTOCOMMIT=0")]),t._v(" 禁止自动提交")]),t._v(" "),a("li",[a("strong",[t._v("SET AUTOCOMMIT=1")]),t._v(" 开启自动提交")])]),t._v(" "),a("h2",{attrs:{id:"事务测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 事务测试")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" use RUNOOB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDatabase changed\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CREATE TABLE runoob_transaction_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("innodb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建数据表")]),t._v("\nQuery OK, 0 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.04 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from runoob_transaction_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nEmpty "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.01 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始事务")]),t._v("\nQuery OK, 0 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.00 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" insert into runoob_transaction_test value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nQuery OK, 1 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.01 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" insert into runoob_transaction_test value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nQuery OK, 1 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.00 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交事务")]),t._v("\nQuery OK, 0 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.01 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from runoob_transaction_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 5    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 6    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------+\n2 rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.01 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" begin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始事务")]),t._v("\nQuery OK, 0 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.00 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  insert into runoob_transaction_test values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nQuery OK, 1 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.00 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" rollback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回滚")]),t._v("\nQuery OK, 0 rows affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.00 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" * from runoob_transaction_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 因为回滚所以数据没有插入")]),t._v("\n+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 5    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 6    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+------+\n2 rows "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.01 sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"php中使用事务实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php中使用事务实例","aria-hidden":"true"}},[t._v("#")]),t._v(" PHP中使用事务实例")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dbhost")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'localhost:3306'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mysql服务器主机地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dbuser")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'root'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mysql用户名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dbpass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mysql用户名密码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dbhost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dbuser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$dbpass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("die")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'连接失败: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置编码，防止中文乱码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"set names utf8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_select_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'RUNOOB'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"SET AUTOCOMMIT=0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置为不自动提交，因为MYSQL默认立即执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_begin_transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始事务定义")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"insert into runoob_transaction_test (id) values(8)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"ROLLBACK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断当执行失败时回滚")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"insert into runoob_transaction_test (id) values(9)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"ROLLBACK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断执行失败时回滚")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//执行事务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mysqli_close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$conn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])])},[],!1,null,null,null);s.default=e.exports}}]);