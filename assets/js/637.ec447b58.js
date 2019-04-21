(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{822:function(t,a,r){"use strict";r.r(a);var e=r(1),n=Object(e.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"大型网站系统架构演化之路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大型网站系统架构演化之路","aria-hidden":"true"}},[t._v("#")]),t._v(" 大型网站系统架构演化之路")]),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("一个成熟的大型网站（如淘宝、天猫、腾讯等）的系统架构并不是一开始设计时就具备完整的高性能、高可用、高伸缩等特性的，它是随着用户量的增加，业务功能的\n扩展逐渐演变完善的，在这个过程中，开发模式、技术架构、设计思想也发生了很大的变化，就连技术人员也从几个人发展到一个部门甚至一条产品线。所以成熟的\n系统架构是随着业务的扩展而逐步完善的，并不是一蹴而就；不同业务特征的系统，会有各自的侧重点，例如淘宝，要解决海量的商品信息的搜索、下单、支付，例\n如腾讯，要解决数亿用户的实时消息传输，百度它要处理海量的搜索请求，他们都有各自的业务特性，系统架构也有所不同。尽管如此我们也可以从这些不同的网站背景下，找出其中共用的技术，这些技术和手段广泛运用在大型网站系统的架构中，下面就通过介绍大型网站系统的演化过程，来认识这些技术和手段。")]),t._v(" "),r("h2",{attrs:{id:"一、最开始的网站架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、最开始的网站架构","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、最开始的网站架构")]),t._v(" "),r("p",[t._v("最初的架构，应用程序、"),r("a",{attrs:{href:"https://www.lvtao.net/sort/database/",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库"),r("OutboundLink")],1),t._v("、文件都部署在一台"),r("a",{attrs:{href:"https://www.lvtao.net/sort/server/",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器"),r("OutboundLink")],1),t._v("上，如图：")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/cf994f650d851a5a183d91266d37a0d720140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"二、应用、数据、文件分离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、应用、数据、文件分离","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、应用、数据、文件分离")]),t._v(" "),r("p",[t._v("随着业务的扩展，一台服务器已经不能满足性能需求，故将应用程序、数据库、文件各自部署在独立的服务器上，并且根据服务器的用途配置不同的硬件，达到最佳的性能效果。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/3be3e1b704c7c23e46b926d8697ab48120140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"三、利用缓存改善网站性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、利用缓存改善网站性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、利用缓存改善网站性能")]),t._v(" "),r("p",[t._v("在\n硬件优化性能的同时，同时也通过软件进行性能优化，在大部分的网站系统中，都会利用缓存技术改善系统的性能，使用缓存主要源于热点数据的存在，大部分网站\n访问都遵循28原则（即80%的访问请求，最终落在20%的数据上），所以我们可以对热点数据进行缓存，减少这些数据的访问路径，提高用户体验。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/99ee6024044e9b68068b78b2fcb2e08220140928003100.png"}}),t._v(" "),r("p",[t._v("缓\n存实现常见的方式是本地缓存、分布式缓存。当然还有CDN、反向代理等，这个后面再讲。本地缓存，顾名思义是将数据缓存在应用服务器本地，可以存在内存\n中，也可以存在文件，OSCache就是常用的本地缓存组件。本地缓存的特点是速度快，但因为本地空间有限所以缓存数据量也有限。分布式缓存的特点是，可\n以缓存海量的数据，并且扩展非常容易，在门户类网站中常常被使用，速度按理没有本地缓存快，常用的分布式缓存是"),r("a",{attrs:{href:"https://lvtao.net/tag/memcached/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Memcached"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://lvtao.net/tag/redis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"四、使用集群改善应用服务器性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、使用集群改善应用服务器性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 四、使用集群改善应用服务器性能")]),t._v(" "),r("p",[t._v("应用服务器作为网站的入口，会承担大量的请求，我们往往通过应用服务器集群来分担请求数。应用服务器前面部署负载均衡服务器调度用户请求，根据分发策略将请求分发到多个应用服务器节点。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/2130deeba832535e634dade0c4c8608620140928003100.png"}}),t._v(" "),r("p",[t._v("常\n用的负载均衡技术硬件的有F5，价格比较贵，软件的有"),r("a",{attrs:{href:"https://lvtao.net/tag/LVS/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LVS"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://lvtao.net/tag/nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx"),r("OutboundLink")],1),t._v("、HAProxy。LVS是四层负载均衡，根据目标地址和端口选择内部服务\n器，Nginx和HAProxy是七层负载均衡，可以根据报文内容选择内部服务器，因此LVS分发路径优于Nginx和HAProxy，性能要高些，而\nNginx和HAProxy则更具配置性，如可以用来做动静分离（根据请求报文特征，选择静态资源服务器还是应用服务器）。")]),t._v(" "),r("h2",{attrs:{id:"五、数据库读写分离和分库分表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、数据库读写分离和分库分表","aria-hidden":"true"}},[t._v("#")]),t._v(" 五、数据库读写分离和分库分表")]),t._v(" "),r("p",[t._v("随\n着用户量的增加，数据库成为最大的瓶颈，改善数据库性能常用的手段是进行读写分离以及分库分表，读写分离顾名思义就是将数据库分为读库和写库，通过主备功\n能实现数据同步。分库分表则分为水平切分和垂直切分，水平切分则是对一个数据库特大的表进行拆分，例如用户表。垂直切分则是根据业务的不同来切分，如用户\n业务、商品业务相关的表放在不同的数据库中。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/66ae8b1b82ff050f13a818694c22459320140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"六、使用cdn和反向代理提高网站性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、使用cdn和反向代理提高网站性能","aria-hidden":"true"}},[t._v("#")]),t._v(" 六、使用CDN和反向代理提高网站性能")]),t._v(" "),r("p",[t._v("假\n如我们的服务器都部署在成都的机房，对于四川的用户来说访问是较快的，而对于北京的用户访问是较慢的，这是由于四川和北京分别属于电信和联通的不同发达地\n区，北京用户访问需要通过互联路由器经过较长的路径才能访问到成都的服务器，返回路径也一样，所以数据传输时间比较长。对于这种情况，常常使用CDN解\n决，CDN将数据内容缓存到运营商的机房，用户访问时先从最近的运营商获取数据，这样大大减少了网络访问的路径。比较专业的CDN运营商有蓝汛、网宿。")]),t._v(" "),r("p",[t._v("而反向代理，则是部署在网站的机房，当用户请求达到时首先访问反向代理服务器，反向代理服务器将缓存的数据返回给用户，如果没有缓存数据才会继续访问应用服务器获取，这样做减少了获取数据的成本。反向代理有Squid，Nginx。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/894672ae2b133b37a82a2cf813a72b7220140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"七、使用分布式文件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#七、使用分布式文件系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 七、使用分布式文件系统")]),t._v(" "),r("p",[t._v("用户一天天增加，业务量越来越大，产生的文件越来越多，单台的文件服务器已经不能满足需求，这时就需要分布式文件系统的支撑。常用的分布式文件系统有GFS、HDFS、TFS。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/db9dae9e6e02a500455959fd7a16b35620140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"八、使用nosql和搜索引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#八、使用nosql和搜索引擎","aria-hidden":"true"}},[t._v("#")]),t._v(" 八、使用NoSql和搜索引擎")]),t._v(" "),r("p",[t._v("对于海量数据的查询和分析，我们使用nosql数据库加上搜索引擎可以达到更好的性能。并不是所有的数据都要放在关系型数据中。常用的NOSQL有"),r("a",{attrs:{href:"https://lvtao.net/tag/mongodb/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongodb"),r("OutboundLink")],1),t._v("、hbase、redis，搜索引擎有lucene、solr、elasticsearch。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/fb32844a1b49f47ddc6cb89bb54a86e720140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"九、将应用服务器进行业务拆分"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#九、将应用服务器进行业务拆分","aria-hidden":"true"}},[t._v("#")]),t._v(" 九、将应用服务器进行业务拆分")]),t._v(" "),r("p",[t._v("随着业务进一步扩展，应用程序变得非常臃肿，这时我们需要将应用程序进行业务拆分，如百度分为新闻、网页、图片等业务。每个业务应用负责相对独立的业务运作。业务之间通过消息进行通信或者共享数据库来实现。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/53aea4cf4e181a529ae4138911b524e320140928003100.png"}}),t._v(" "),r("h2",{attrs:{id:"十、搭建分布式服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#十、搭建分布式服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 十、搭建分布式服务")]),t._v(" "),r("p",[t._v("这时我们发现各个业务应用都会使用到一些基本的业务服务，例如用户服务、订单服务、支付服务、"),r("a",{attrs:{href:"https://lvtao.net/tag/%E5%AE%89%E5%85%A8/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安全"),r("OutboundLink")],1),t._v("服务，这些服务是支撑各业务应用的基本要素。我们将这些服务抽取出来利用分部式服务框架搭建分布式服务。阿里的Dubbo是一个不错的选择。")]),t._v(" "),r("imgLink",{attrs:{src:"date/20180823/1e62c5039dabe4d6a71b8a557ccdc57220140928003101.png"}}),t._v(" "),r("h2",{attrs:{id:"小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),r("p",[t._v("大型网站的架构是根据业务需求不断完善的，根据不同的业务特征会做特定的设计和考虑，本文只是讲述一个常规大型网站会涉及的一些技术和手段。")]),t._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://lvtao.net/server/580.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("大型网站系统架构演化之路"),r("OutboundLink")],1)])])],1)},[],!1,null,null,null);a.default=n.exports}}]);