(window.webpackJsonp=window.webpackJsonp||[]).push([[639],{819:function(t,a,e){"use strict";e.r(a);var r=e(1),i=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"消息队列-rabbitmq-的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息队列-rabbitmq-的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 消息队列 RabbitMQ 的使用")]),t._v(" "),e("p",[t._v("消息（Message）是指在应用间传送的数据。消息可以非常简单，比如只包含文本字符串，也可以更复杂，可能包含嵌入对象。")]),t._v(" "),e("p",[t._v("消息队列（Message Queue）是一种应用间的通信方式，消息发送后可以立即返回，由消息系统来确保消息的可靠传递。消息发布者只管把消息发布到 MQ 中而不用管谁来取，消息使用者只管从 MQ 中取消息而不管是谁发布的。这样发布者和使用者都不用知道对方的存在。")]),t._v(" "),e("p",[t._v("消息系统允许软件、应用相互连接和扩展．这些应用可以相互链接起来组成一个更大的应用，或者将用户设备和数据进行连接．消息系统通过将消息的发送和接收分离来实现应用程序的异步和解偶．")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ"),e("OutboundLink")],1),t._v(" 是一个消息代理：它接受和转发消息。你可以把它想象成一个邮局：当你把你想要发布的邮件放在邮箱中时，你可以确定邮差先生最终将邮件发送给你的收件人。在这个比喻中，RabbitMQ是邮政信箱，邮局和邮递员。")]),t._v(" "),e("h2",{attrs:{id:"rabbitmq-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-特点","aria-hidden":"true"}},[t._v("#")]),t._v(" RabbitMQ 特点")]),t._v(" "),e("p",[t._v("RabbitMQ 是一个由 Erlang 语言开发的 AMQP 的开源实现。")]),t._v(" "),e("p",[t._v("AMQP ：Advanced Message Queue，高级消息队列协议。它是应用层协议的一个开放标准，为面向消息的中间件设计，基于此协议的客户端与消息中间件可传递消息，并不受产品、开发语言等条件的限制。")]),t._v(" "),e("p",[t._v("RabbitMQ 最初起源于金融系统，用于在分布式系统中存储转发消息，在易用性、扩展性、高可用性等方面表现不俗。具体特点包括：")]),t._v(" "),e("ul",[e("li",[t._v("可靠性（Reliability） RabbitMQ 使用一些机制来保证可靠性，如持久化、传输确认、发布确认。")]),t._v(" "),e("li",[t._v("灵活的路由（Flexible Routing） 在消息进入队列之前，通过 Exchange 来路由消息的。对于典型的路由功能，RabbitMQ 已经提供了一些内置的 Exchange 来实现。针对更复杂的路由功能，可以将多个 Exchange 绑定在一起，也通过插件机制实现自己的 Exchange 。")]),t._v(" "),e("li",[t._v("消息集群（Clustering） 多个 RabbitMQ 服务器可以组成一个集群，形成一个逻辑 Broker 。")]),t._v(" "),e("li",[t._v("高可用（Highly Available Queues） 队列可以在集群中的机器上进行镜像，使得在部分节点出问题的情况下队列仍然可用。")]),t._v(" "),e("li",[t._v("多种协议（Multi-protocol） RabbitMQ 支持多种消息队列协议，比如 STOMP、MQTT 等等。")]),t._v(" "),e("li",[t._v("多语言客户端（Many Clients） RabbitMQ 几乎支持所有常用语言，比如 Java、.NET、Ruby 等等。")]),t._v(" "),e("li",[t._v("管理界面（Management UI） RabbitMQ 提供了一个易用的用户界面，使得用户可以监控和管理消息 Broker 的许多方面。")]),t._v(" "),e("li",[t._v("跟踪机制（Tracing） 如果消息异常，RabbitMQ 提供了消息跟踪机制，使用者可以找出发生了什么。")]),t._v(" "),e("li",[t._v("插件机制（Plugin System） RabbitMQ 提供了许多插件，来从多方面进行扩展，也可以编写自己的插件。")])]),t._v(" "),e("h2",{attrs:{id:"安装与使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装与使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装与使用")]),t._v(" "),e("p",[t._v("在安装 RabbitMQ 之前, 需要先安装 "),e("a",{attrs:{href:"http://www.erlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Erlang"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.rabbitmq.com/install-windows.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ 下载地址"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.erlang.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Erlang 下载地址"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("安装完毕后, 设置环境变量:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("ERLANG_HOME")]),t._v(": "),e("code",[t._v("C:\\Program Files\\erl21.3")])]),t._v(" "),e("li",[e("strong",[t._v("PATH")]),t._v(": "),e("code",[t._v("%ERLANG_HOME%\\bin")])])]),t._v(" "),e("p",[t._v("激活 rabbitmq_management")]),t._v(" "),e("p",[t._v("在CMD中键入如下命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"C:\\Program Files\\RabbitMQ Server\\rabbitmq_server-3.7.3\\sbin\\rabbitmq-plugins.bat" enable rabbitmq_management\n')])])]),e("p",[t._v("常用命令:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("net start RabbitMQ")]),t._v(" 启动RabbitMQ服务")]),t._v(" "),e("li",[e("code",[t._v("net stop RabbitMQ")]),t._v(" 关闭RabbitMQ服务")])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://rabbitmq.mr-ping.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ 中文文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/qq_31634461/article/details/79377256",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ入门（一）——RabbitMQ的安装以及使用(Windows环境下)"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzI4NDY5Mjc1Mg==&mid=2247483710&idx=1&sn=b4a29d64919479817adcbaaf829c25c5&chksm=ebf6d941dc815057d9fd617cfe22bb58ebd29a9005cd27290c23a3aeab7845a0365600ecb19d&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("springboot(八)：RabbitMQ详解"),e("OutboundLink")],1)])])])},[],!1,null,null,null);a.default=i.exports}}]);