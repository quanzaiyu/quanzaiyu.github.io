/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "38f4fbda982dab6a695a61cd4f012f29"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f24fcc30a67ca0297d39ef51af5bdb3f"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "49a69aa9ce5c8fd1ae8536c147f1e19c"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "b30f4157186fb6a60e61c8737fda8493"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "588d60fef89c894fb5d4d8b220856d63"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "d6d04fbcd6a01c8bb2516818ecf58f53"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "6fa7cc18b6233b7d6d0edd8009df7f8b"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "9df1c808dbf59922754d1358871c4758"
  },
  {
    "url": "articles/index.html",
    "revision": "e003b56fd669da6dabe7a686013a2636"
  },
  {
    "url": "assets/css/0.styles.e2d81a46.css",
    "revision": "50427fee7dafdf12b8a17b6f347d4885"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.498ea54e.js",
    "revision": "0eaa52741afae9e3e145cc497124466e"
  },
  {
    "url": "assets/js/10.5199bb3f.js",
    "revision": "43f4249bb710c9fa7a98e7121a740f31"
  },
  {
    "url": "assets/js/11.599ce28f.js",
    "revision": "8b0301fe59cba5d27ae4d1277c3ee146"
  },
  {
    "url": "assets/js/12.70e406bf.js",
    "revision": "15d461054122cd6354cc94a92b39d551"
  },
  {
    "url": "assets/js/13.c1f37e97.js",
    "revision": "363252b855338496045cebfae9817543"
  },
  {
    "url": "assets/js/14.35572a91.js",
    "revision": "de1a93952d6eb64a2e53698907b7e0cf"
  },
  {
    "url": "assets/js/15.f9b488e1.js",
    "revision": "4adfd2f1f8e42529a27dd631e2ca53ab"
  },
  {
    "url": "assets/js/2.e89ceb0b.js",
    "revision": "c3e159b85cb72a96cc8737e6c31077f8"
  },
  {
    "url": "assets/js/5.fa2f35ee.js",
    "revision": "903e6ac8bb946d849faf696aea191ff6"
  },
  {
    "url": "assets/js/6.4b7a4d72.js",
    "revision": "2524fd8e2d77858e7c917af9e5ffcf69"
  },
  {
    "url": "assets/js/7.3a442e8b.js",
    "revision": "37311065e17809803ee8ee71be9f3c14"
  },
  {
    "url": "assets/js/8.49a9e85e.js",
    "revision": "706192408c4fe1bc66a43b542ddaec08"
  },
  {
    "url": "assets/js/9.eb8a678c.js",
    "revision": "0e4ffc7b0e9efef966ed334b080b6c86"
  },
  {
    "url": "assets/js/vendors~docsearch.12823743.js",
    "revision": "2ff0beef836d9da13ecbc107ca4865cc"
  },
  {
    "url": "blog/index.html",
    "revision": "20ad135fa496c1190003b4c6f5938d14"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "99563bc23bc44c4bd8615ff30ff17eab"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "d917200c70748fb4dd5e12fdf71f3229"
  },
  {
    "url": "books/index.html",
    "revision": "28fc9d9f9d35760ddc060dfb6d268dfd"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "1a6e4dae84dad439a63c23accd92e41e"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "ec21a8b8f25ac7451ee4aed2019890ac"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "0de7e465ced40af9b966cafd983ab710"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "ac6905319e3c40a6a4905d0b7234b754"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "15f98023d27036a399055da0b2fcf4b6"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "a7ddf7772bcaa0771d197048523620c9"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "cfd117ef60729a3132c807bde61e2387"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "82d3839fd72d8bd2b410144a34e4e596"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "d3358eb684a058cbd70c25c1fca4d1bd"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "520d71000a90e048c305b1e315ff3a2b"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "3433231936b75c22ec652dfc558e429e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d398e42048b858747e478c247434ac63"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "45e7ecc05f30f9fc189d7d345ed1df1b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "babbbe0d00f4f61335ea0db8c18d8208"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4b413f0950de7e4bcf943262e72e51da"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "23d144513c6008be6fd00174861cbb4b"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "62bbe8f712c05d7f268a5f2ed1d661f5"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "6699a6e4813f19a639e4403fd36e6138"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "6b3d573320f35e4401f4180481090b88"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "3aea25a1777804e63d62e80e1fcb3992"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "f33a0cef3d88df5ed36130264f63bc8f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "dc3f0a87f76333a39e1076fefd8cc38a"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "332a414108c16a63d39a9a92b0d2ba6f"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "5444a82801516b6f29fdcfa61982dff9"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "28205f727fdab1179925b0cec37279a7"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "84f05bf8e858ae3b3234d129ca63ebe6"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "ef3eb257e732e20264c3a953fa6306ba"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "3208aaa14265e1a5e373f02564eb9836"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "8b9fda9f3cd22e5c4f16d4dec7739413"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "0b82e332901cdd3d44a18b1e4ce9ce81"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "8aa442cac39ba7c304260ec00a3ee801"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "4394da373c35eabc008b3312d59b967c"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "d6bfaeb9fb9bf689faad600cc22b16d4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "bd032e3a19b81c3a9b50db2965aa38d7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "f8f703c7efcdb0ea2ffa085961634ca0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "1747d601a904fcc4cede1a296decbef2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "eb15d34acf19f21983f2863fe6d1397e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "f0c84d1b5cad66985feaab0efcfe34d2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "b4ef6bf0f1b26ea931692c6635ccbfb5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "fc390e487cd581d52f85bbbdb9aac10a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "0f21e25aac5455a75bee70404fb72291"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "9b0ad75c5071cb085b401d3c3112059d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "cb8a153c0604b10018f3ad9b7f2a815c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "60b830f5ada7182d05597f81e5901ff8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "648e8964a4335b1b930d3c6d49b4ab2f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "382435955aa82b3e48a383deef897ec3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "f2874cf2926e53d24a92984562ca31e5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "658732372f415ff354658a30b284deeb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "6af9dd38725ccfae7d0eeaeefeedbf7d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "f31c261800e3990795e9cc9071d3fcf5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "a47bbd8b5582415f8bd1946722185788"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "a4daa59d7bae22ee5c4fa25f63dee196"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "3dfb74a0cceb55340b5dcd0b336458ef"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "b61f3e4cad81350ed0931af5e737cc2d"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "f7a0a545ee6ca1d8fea0714f374610ee"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "92f084da5efa0a26a116b0b1c45c5528"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "d024f9dc9f0145dc0d85cb71b5208620"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "3d7b6f03b1452b6590d476ba751a77bd"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "eef909e65e8acb53fd1f5cd9d0a2dc23"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "856bf695967fc5ceac7b98e927233f28"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7006f124e5cb429eb1218ade4b521552"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "925b26e93ab1ef9b6d0add446d26dabf"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "37326c631802628079594550c3e7e663"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "0f291c81f0c80b072eaf24d48440f73c"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "c266d9e87eaaf9b3cf299431f5638473"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "04f2d21431e2597bfa7fb58a74a88b4d"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "36b6fb6a60d2364ac89a191277871769"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "042d717fff8c87e860e0e134ca838a93"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a737960e27695c7a2f4406473b490b83"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "72f7242fcbb71ce7263a361384e80301"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "9e4f11dfeb5320d41c72aeb571f8bbe1"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "86bd1de1da61d67e23cff104c0d88281"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "a9288e775b09e55f88b7e82bc6b21022"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "63b71bc40d88edb28af899b314edfc97"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "a2cf9b8efeca63962c26d8b52e18e13f"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "6eb3e01f2b86a2873b3014d2b2d4b440"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "98e8d1106ab7fcacd63681159710562b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "1876a99d009da2a979b060b07f66a3e1"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "d7d991a4d204173edafe758d5bb3b8ba"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "22bcf4e37c458dac6997cd65a763dcdd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "25cd1e6bf7ff76003f28c623d5d47741"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "ac6c0040de5dd8eec65f0412b5253443"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "a8ba7a9212c9b29edc833a5c56b0094a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "9317182dd461ae19c31a80749720a0e2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "281dbbb468f1489b733620d007d84941"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "b60cf6e36ed9ea7157ac645e94ef446f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "42ae733a0a7468621d47a3fb2cf169d2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "acd5f75e99f9281d39ea1246012d4a44"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "8956bf0d1bcdc985238e4a4613b60132"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "518d58db5bf345e0486b96546e59440a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "4050a3490bac8e2979765a0b44e6fb24"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "75ac1798fe8f63b989b5e3764a9a3ff2"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "810c31b8bab3992ed1cda47ac1197750"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "eca72d8280128409b139492ee408d96c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "b9a4639f3f607fd41aaa335659c33a37"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "6c5058b5b30bfbb5b83d2a6c4eb908ae"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "6d1ea95ed4d852bba13be922e73dbf84"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "2602b97c45ad0c5f3836ccf24283fa6b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "6e42ca289a981f5c81a60d8da18f3b8d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "7a616f3e68f8b812e954b6c16cd13c2b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "4f51127eed8eaa5a98e752c7784d4e0d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "b701fd227bbdd689c913e0e943377c9b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "f434e695e18fd9420e60c524d2116758"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "35462448a9815858fb070552c0058ee9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "6c906d6abe83c76ded5c4fdf6676a849"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "b074b7b80090f4f249e95f1ec9349af4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "4783b57ffa712e2ed9d6e52e61ee95d8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "d17314b099a6991a8d07dd835a33a809"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "c5e3f59de4af8d07cbd8107064b7434d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "3bbec32154fd6c04c1f866e9f197521c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4fc86a82d8816930c33616e44b31d31a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "1710a52d9a2c97f09a8ada57aaf3feb4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "6c912ca19667198ae9bb8158f78087b9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "49a75a8fda01fca9ab75743903315902"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "080e2f9d0ae2045afb0ca7be018d47b3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "69d0b77af7afa16802d104b583fb5054"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "267059537024d93766d99c200dd5fd87"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "049d64a399b51e877d6e1fab5d2fbf2f"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "b2f316f7e3fa73a37a75b99bf073931e"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "fef093fbca31072ac2b4c55578f28b03"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "bc90e61ad7456aedd5c174ca631278e0"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "6f4e8d25e593ca10e85891493582addb"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "b4f36645d00637d02d7d225719e49cbc"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "17dbee8acb2097e5b6ac21b6ea1fc270"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "398dea29a00a16f98380657f9b897df5"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4d59a404c8972c9ff5ef004f3d82e35e"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "f340d4e45eb56f4f76451547335a6f30"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "f9af7c227552544f52212094b6b86f3d"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "47864f445966a36a2957604e5ffab26d"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "b850cb93bde3af69f02cf78e28350e77"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "8f71dcd2c53546466f8eecd4334067e0"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "42a2a4a8b388b81334ecede15fb78f8f"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "2533e99fa92b0520c253d8ef78eb69e7"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "0e5bd9603fc7d965dfc084b36ad20d69"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "5486d772d0f0fe6a4a994e815d2eca26"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "6262a2489fb6c82693ad7d1c71cbef02"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "764db2f3d58da4515e5aab695980e3f9"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "c49768e8da8576b554d67788ffdf8cba"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "e20bca5b1dc8cf01f3c96e4761fec7c6"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "44315e90b4e35798cb83a1d361145697"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "99dca41e6dbc9b7f76e128079d696d1c"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "657daf6a72f04c839ce57624820b101a"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "57f5d233ccbf7df2550b1c194690aa37"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "e1f4e93f6dbe39f144606031113e533d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8f1a45b03773e86799d59b609756686e"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "c6622704cd532db049fad3abd03f4d5c"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "cb42f6b1817cafbe91bf03a5f549a994"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "5ff53c717b7e2e0c06cad3518525349e"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "636f4d7f82bb0440e99ca9a28e0af481"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "c49e3518276626f3012e8e0e6b5ed817"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "290f051e8fd9c9904f6d4f8290fff99b"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "4e38dfc370069c0378bba7810c655682"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "685de2e73c34f5b131f6136311feec4d"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "9902c68cca7252f3eb708e923b987832"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "405672d8eed5265e758ba19a51446473"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "4e34795b1a096143ed39dbbdf2c8dc5b"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "79df29ea100a37c5a4c089dc7d18c334"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "5c753e3c4a712c2dd9597f35fbd94403"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "c225ce99ff5fa834e4df28396b9a381a"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "77fb43db92e424fa9e4bdb4c6825800f"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "1aadab1ad917dc6a74bbc67e1fe447b9"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "0a8a205288e6e93c68910de2d39a9a59"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "431bee863971c44ae514d90cdcf7f440"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "73ee8be73c11b2681eec552c7d417d75"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "6d2ce2955f5f4948a35a32a1909de565"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "17a7418d13bcc521d0726ef4db568d02"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "f4da30568a2889488c6214788fbee545"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "559f2e69f7493645c27cc6d195e3f918"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "2d6c30b77ca4ff387dbc1e36c322dccb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "80808cbe1d35e6ce4549ad138e3ffa01"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "ad7c29c9605b7f9025c53ee6d6aae944"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "6b36154d0ec4f343cb9878b867c8390c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "e39bce8e44095330551430b330ecdd02"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "e89914528e921aa8f915db74cc08659c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "b6a29e02f5e0e3bad00beb61a10bcfd4"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "a2a4a8d1751098920b9f9ed555c50d6b"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "6e0320cfff5fbfcf8950fb37eef4ca28"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "d0547ef2a9579c1d0fac66a547cc9b58"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "ca2c0945914ea652d5b6e75bc562a51f"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "e7c7c029c564203e92ff66e40e1cc2c9"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "ed2cf52a0bbdcc738063582b78cdccba"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "59d4a4fa9f38926e3d23c9e160ba029c"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "0b818e9a6fdf5212b6c8e35062bb733d"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "4fa28d87a811b49f35a40a0e6e12cb91"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "70fc3b99bf18182ec7e840a7c98aae08"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "89d591c59fd153450babd65f8bc60c10"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "232b9ffa98d30ecfecd50205656b4d76"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "bd8ac280208d4c08c17acd0dd8c7cbd3"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "92bbe9285148357fcc449201384e118d"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "164e8001691b852ff95de5f52d43b639"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "0967266e2ad16095a802b681cafa25f4"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "1b259c93290f4a65684511dc273d0e71"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "6757065dcfeb426938fc9b420b1aad1a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "933fb03c1ea1f96f5b781958b1d3b977"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "311c619fb21a3ed3f5f2d937fc62edf0"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "aa55170ef7f4f7233d4b3fee1eb519ae"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "6e12193da7827c4172efe0ddc3e0b9c2"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "23d41b9d3792dbe7435ce85ee29cae3f"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "61a5ebd528f9fc6e0e306b7dc3f73051"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "955387b862f12cbcef3557c2442b65da"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "39ef3ec832d262cfafbbd26102fb38a6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "fbffd47ccd481c787149d7243b7db548"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "d8b02d6f81d812dd3ce337586ffa19d1"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "505560804c5082f394feba73a2c17989"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "84d64a89e7e04a6ca91e1c5cc57108d4"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "40cbde7565eae7e89bba18652376a1c2"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "65e23cf0f86adc89b40b46043da87d0d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "46d8cddc581ba2c4dfcd25faf589690b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "0adaf6a9099a2fdcf74e9eb941cae3f1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "1ef1e3189844248bd2ccd99609941a22"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "e559ce041ab30a2c8c0983ba1023c0dd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "5cf9d45759e675d7a8dad485b05ad793"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "438afcb74d3142eee8a95a3aa904858c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "0ede543de49b4bfda57118c1bee6ab3f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "38e6dd277fec8cd5763f3e2c54b51cb8"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "a52cbed338a4a498815abcb58ffdd65b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "a923d9ae828126ff9f4fd972a13b306c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "a32076b6ebba7882b087ac0e306d5794"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "0b806145508ee54765a1a827024a5fb0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "c0f59d98de974a7d7b1a044d352a35ea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "8941b37dc42afc1f9324db9131ba58d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "f72e7d8933fa8876b76d3af4dff5544a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "1d42597731f8ed6811f9fb39a02eb65a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "c44652e11fb2af51156628f4c85f18fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "29904ac6f5090cf10d0fd716386c3c65"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "9fe714381f4b3fbd0ccf20d46db4606f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "e3cfe8909e36b1e2a76fce1bf9c47a74"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "eec4af79bb36e1d5c7c9844deb6a9893"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "b864b7a27a72388f966a0b7624673790"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "020653f9113f1315397dc6f120c6d801"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "6d957555ffd424234925904679fe1449"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "cd48417990996a5ee22701b632a7414a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "aca532886777f7f3b35fa2850841daa0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "ee5b098b39e0270cb0bafd9b336a97af"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "6a19a26ebb140ed1947c4ef407d1486c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "40167ef85e11bd7635c50833f7ecbde1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "1c4c8b3a8731561f9d04cf0a8f532095"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "a47e6f7a3c5171002f88d8dd66be0b04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "598aeddea6223aec5dc7b8e5c547053e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "afe73a7a41d0c5e9c0e6dd43d38ec16c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "fd1db29448e295a68f5fbe9a50a64bd5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "0d4dd22487e2b8d73743d9ce14de37eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "2b4b2361c9afb1658c3e3904f4418daf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "4c4a431038498414751ff4920d83ce2c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "3d6ea9f7aa08f304889262442e9b85ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "4a33b89f0aa15c483d8e46b393fd1c78"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "13d6da5c776ad348597380a67628843d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "72b54024a1750d3645ec8fbadac5f07e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "f7a0cbc40d5e0f1f4b0cbf073928b3e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "2b298a4010a860e42558f7c58c17c418"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "8a3876fbb8fef1ac100d0c307e842883"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "fc89bc9999626517e5bea8845f7b3e41"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "8d744569720c47b6a9ad2f8fd24a4136"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "86204753efaa082a3197d9eaa29d8ca9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "97f49d13c0e9cbe56e4af34c3a2030af"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "5886b7b02eb346097fa0d7be50a50f35"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "5341948343a2f6fc0580235b80a357d9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "a3af5f693d757f1d9b816424f6717aec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "7d4eeb0c014ab8723223d97ccfa6bb01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "9a6ccfb1dddd7f1607ec87703489b076"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "e91206071353bee232d8b3b6ce3e9c25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "66f4f45861a05de6efcd73bb104d1117"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "16b72b016be164752e04fee7d2aa3780"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "d81e75b22a91def60e2cfb755dc73d30"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "6b61d719fbf9d9f5cc173e0cae5185ff"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "5029e8da2970f7dac3ebafc224c9f9fc"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a77fb141446dd0418ab662a44ae47780"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "abaf7d3485847bc97b125215dc44c07f"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "f46e202af89ebd79c671c24993302c1c"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "e11c43242a81995cdac77f11b8b9bed7"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "652b0ee676a0a6632203761f1960db98"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "f88195a86f508f46c3e6a923ed4d69e9"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "d03c25e1f694bf1407fb8bd7f0332e78"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "63b73c8560b716b6e8130f59601984d2"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "8706279b050a3d609b9d4608e9785420"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "e6ee45d4aeeb13524b5ff5e5e39e6fef"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "dd2665770f2a7d1ecd20dfe1570c5151"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "f0779007dd01183e69e2b39ce55eed8d"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4090df3367ddb24d677248a377f5d714"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "2c3a31b86901f4e71df60eae89ce2ed4"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "b30e2b2856f83e31177e3414a447a984"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "cc4ae31474d64b8dc234dddd9bc41376"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "9f4701a88f37608e78de1893e3b6b46f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "5717288d7077d54ee0419648c285c941"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "7f2db3f7ce00fb8be732ca1d3f5417e5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "cb14a172bf6ccdc74c29e0953adec91a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "26a18e3beb95226503846e1a8c15c80a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Audio.html",
    "revision": "37f8eacb96eb06afad15e0fe6e8d918a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Button.html",
    "revision": "e8972e15c76a33bd0256c8c5052f6c36"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Camera.html",
    "revision": "3eda32f3e36c724e8a2d7a5b5a2577a4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Icons.html",
    "revision": "e0dc13bc4f78ff8500aafe1021c32b4b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "3fd2a72ee06570e6ca3ea1340f0e8777"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Video.html",
    "revision": "b1cb5dd86a42637f53b8e914a320c3ca"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "4832a332eb5c8ad04a700522fd207ba2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "4bce70bfde4bc9a9da3e5ddbe04c5dad"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "0bb7bad8d102f05de7a521631f456fda"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "a18c0427e71e69e60a4891d5036bacd5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "c4f4ea8633d1182f58f0fe196b1a2940"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "f403ab04e6fc77d74b30a5e8787aab82"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "151fa12c643c4908117beae802e8dc70"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "e610c5c81b157b5890b7da07c9ce3f3b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "59b9bacabfa799a11cc102e5a5916bd8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "6d36ab28e08300f94df0c1f44fab3b8b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "a4e821532814d3158da1452c94fc8c77"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "86bc1b2082d47528b6bea812ee2025dc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "e9017aaa1408dfd892fbaf4dccaba10c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "cbca023b02b276081cd31821d08e9c41"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "11af0860d542f43c6998bc8d64d00253"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "b9bb4fe8dfc4050a5ff3503b2cff4c7e"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "a235ae371e803b3f2733203aa692eb71"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "632ebf04cd8130c90fe765b0a6000ecb"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "30d14998481bf2d2ae7f6d2a1b71be7d"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "f0bfc16a9f56b8676b0f455594a97c9f"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "fc3cff101debe6998acc34bf98e15fb6"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "d84ca951a1b9df4b80b13ae7b80561e2"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "5cdc8a936ed8070bf1d7eaab8ad62b25"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "967bb2a88a24bfcbf06a26d172f9d6ca"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "c4cd783e7ebf9e9cc21d0fec24984140"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "ca9db7dadac8b922f28df1440e2b8082"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "c1f7daadb41737fa54bda0f9fd52e458"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "ad91137c4769ff3be35424963ec37007"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "05621efc959b6e3e9e669037ace6872b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "12bbd452d2172460ac220b2500737b61"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "ae0995979e0c883e8e6326a94538008b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "10f75515597a5fc67f63422bfed15093"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "3192c78c830c8a3be696289ce51dcdc0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "9727a45d249fc5ec35681f9242a94de8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "5988553080e521e60c54ea7d0bcbef1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "e94aacf2f0c23675d0073ba838b091c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "5b9ffdded74bf3906bb65b2bcdefaaa1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "d7f93568493f6f5580bd3c674dbe1903"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "ef87deddb3bc1f54cec4c011d2099028"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "d886531e9521cd2fb28e7b48e3b3beb1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "23627ad3776c51cf462c13f895159a68"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "8ccb84eab7a16068e86abb964d4d484e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "353136ca1af3d3ce2054f213a2e080d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "81cb0253073f761cbf77ab9287c59178"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "cebcf47571ab552a33972e81a7670037"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "0528e839dd474d26401277c172c18fea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "fa65ca6ef7fc9dfc181d926ee2a67100"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "2a90c639915af93715efa0d508e5e1ae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "a11b1e133e5c3e8fd4ab78616adb8686"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "8b30bf22b24f84293cb127f241e35c34"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "05ae21f633198f4c69dff1f0ce42cb52"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "0a21ba9f907ae7c3cfb34f0091b79761"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "99a75d53f700ef5eb85f0a53cead905a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "da14222d60ef8107c18f92dc1fed1e08"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "073e05fbf19dd6fc01c555c2234e2134"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "a98797c849d97e8b512116c9ee1dff9d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "a88659176852490395a4241f35fbed1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "5e5c7e8d8e0de382b695240657bf9c09"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "8e4f7010ca14a988edd0bc170630d91a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "6f4d71d2c3eca5afe7a5c40bd0c1a26b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "01676045baa3bb03b2b3944df049272d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "ffe5d0d931b7f0190e72cfdda6ddbf7f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "f5c600b6ae9079abb79bc42dd415b311"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "3634a6b680dc011511deb7768af3b692"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "728b89f5f040b8fd2e457962438f4dfc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "bb2909cb0b99863cddab4e04be8b6dba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "846c1447ff10e1f16e5970e1baf7a594"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "16d53ac4cf9af8ffc9eca74b299d5351"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "1463e11c4c8b00ac52033530058af644"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "6dcbe0a559c253a2bf777837f03b4c14"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c2632314b36812e77493ad27715876f7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9988668b2f8324b90adc82adee5093ed"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "d972fa16ed18f8786354330707992337"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "617005885fa85ce408a81055f883deda"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "3fd8ecfeb4704cf14aa73132aa1758a7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "48927345fb5b23b12f23f06a1b5dc139"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "c83e8e806549ba2e31f0876344a9cb6c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3c89116a6e2db528898cdca8f9e879ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "e3d496e741487742246624e79dc8eee7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "ba09d3fba5acd7103de8d4029d270bb4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "c828f8ed607bee9986c1434b667ea9e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "d03104db6c460132d5c567a0e99c59f6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "debcf35bf53738fba07c6ca6f3a67654"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "53513d7cf310975bc11d42ce3ade3b65"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "fb52a778cef401d222fbe7750bdcbd21"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "b95916636b6f2d369ba4408249125abf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "91c1f860422ca36dac979d30078fae69"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "ef0439cb8e0949a6fb019b9bf55beb4f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "a043f3b093c72f625e472345f45284c9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "b92d6edb00cff49102fe198bcdacdb97"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "f50df312645f21239d29f1cd66ba3dd8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "cc8cc16a779dc37beec8d09b6b79e754"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "37c370d2b9badea4c64c119cbc654edb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "48341bbaee94800c6cf754d27ec12528"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "0234162707ec7f04d0eaa3b8b3c31da2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "e85fdd4fcf7517d6a6c3b2e4b5ace812"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "8134c8ad410d358da3e5405f0e303b0a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "34688fed9dcd3de9ba326a3634668f55"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "2e340f28b75a66189c549fd4fc03c772"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "31cb3550723fc2289b056255d03f6f01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "45527f9d06635f0ee12d6b955bdc247d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "68f1068ff92d8ecb2e0b51dc5bd19961"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "a0fea57bf40f17610ab01f5ee528c842"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "3768a7ac5d8e6769144b7451abbc9bed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "6b7157a955117530f1be80af51a71841"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "15b2e3291253b7283ad3a3a5372140f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "37216529a1f034f8410b1d68a50f2023"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "9452d0da1e190e5db8a507e33f15adaf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "4ec350a3d561182268f0b2c4cdc9eede"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "f81352fc8a3fd896bd47a7cb9558dff0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "1c97f4d9636cb86d094e75225965fed7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "61f77d398cbcda29f8d2bcc81f49457a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "eb4a12f611906503fad7f26b93540189"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "887dd27d5f73b4de723e6ab5f5e3f663"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "6c2f4ae91c8654c6858e6993973ea4ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "6fbc6b9abeb92b643e9b019487159a92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "b80573c12b52db5688412e980be4c1c3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "0097f7d309f9d9a8de112db75a3a9396"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "2abaed70533bf434efe369d967f699c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "3b3079b2f627f413f834339f6d6fc67b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "38cbea4bc626419ba30132d120e21429"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "9d445b3a9f7a4c525f4ba0698824d01e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "1c421bd3e0094c0b3ac86bbc4beceaf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "6ddfd60165886e0ea35b4837df5779a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "34899595fc7c23836a443e0c4ce4140f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "d87e9711b8b0fc7c8956f8a230494a6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "324be9b6eadc5fe2ae5f4693b42e3dac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "43a876664984d5351ea3a84a4ca6b9e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "de5ff2a77a85408b2037a1276ccc6f76"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "67dcb90b0395ef3915304cb7b4cdddb4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "4d858dc7cc01d1f07816aa566c9ba2c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "858b72043db986404924eea32fe32778"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "30644d3ab218a6fb0c1cdb803b9aeba7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "657b97474eb44d2266bc871aa9e8a935"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "89b6f13c0821d991c7cae7adf97fc774"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "53a22cf96dd9a82f4fb66c91daad2c19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "d0a7f75cd3ab9079987263de6f478bd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "5e2a9b55dca55bef8c3ea1a73a1838b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "dc9edd8f75f7aba8d16fb898f2c014da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "c1b1b6d1330afea2a4e9277984fdba08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "5757db097334e0feaa33b7c0b387aba0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "f46b9d5d5c75fb1adb0834f679864169"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "30c0f9bd31753570a3ee642c37c7508f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "167592f2370999db0794ca3618827e06"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "0391cfa24c6dfb089e930285d8722fe7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "a20e3c05fe7b3412bca7736842b76eec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "b96a00bfea0539f622e0f8ee4beb5897"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "a023ce70c225c328bff615492433a66f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "2e8de50ae82bf38fd3411244a3a3bec7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "d84f91120c270ed26004fcc211cb0193"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "6deffbe96ea53e8f0a3749edbbdc9ba5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "5abe7c919e579bf381255a54d09ec02d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "e5854d09e893cdfa2f31f0de5b4d2492"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b1a41e21ee8fee530656ca12e056e522"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "9c2d85bdba5dc65515eeddf80eec2245"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "5310c7f204f88d82fd6eec1f3b14bd93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "dba8b08e4fa1b4c4e57dc7bf00d5b405"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "be934f807212c51b1d7c7cc4c448b853"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "2f1d241a82b2d0e4dbe038ab9ef8ffb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "4ac530194e3549e80e65b05c72cfd691"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "54147032c0eb2995ddfd51366ab7e7fe"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "c8036fe74f413e672bdb68aad6145574"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "80005f78b133757dce63758376dad8a6"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "af25db564c01fedd2a35b5ced9b1ca82"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "7c06d88e92bf10ace4136fd61e47bc1d"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "dc4c51e17608ebeaafae5415f5dc19bd"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "71c3b4bf6c892a3b88696f552435a95e"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "1460a38345c6ef42275b6e0dd2d85c53"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "6752fa19089e2d8eb52cb6865a0a4173"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "bc6599b9c6ed8b0182bd0f1370f1d936"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "5e1cf9a800d6ffc0a40aea32a1f701a8"
  },
  {
    "url": "categories/index.html",
    "revision": "5788da1200c0e14bf8a1afbd206d8726"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "5fb0655004fa4fc03b596d572c339848"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "3c0293952d579c4b50e6034fb7c1c5f6"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "4aee3c1a8564dc2bc7e4b55f918b683f"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "763c8ff1eb5516b52ca9a3910a05830a"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "c384dad86362b83fa16ecea0968da5fd"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "a57fbb7d4880be1ea3cde00d0e705cd9"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "24196806161a09cd715e950e5823f418"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "769d097186c2c42890d542e0160a47cc"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "7e8cf293c9e36ee0807f9b26aa24410f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "e75993452279571755f74a7509b01f6c"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "2a47ed1b782c84d5dfca07b4af2cc283"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2e8c41979e37b5eb7e0c6b9e32f811b8"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "e0af3d752b8c25b19c22a6c21714f04a"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "29609380d5948e094cf0c7be76b1bd47"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "95db09c25ab7c0a50d20f0fc6ce93eba"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "5880bc2788ab662eb66a77633655cfff"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "7c49c132411ea19399cbdbb3389171a1"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "83c87789a1bd73ea4bb798aa6838c157"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "8b58088afbc2fb27f86a0c6f286e66e4"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "fa615181ecfd767fb41e909023ffd258"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "15d908f5ba4d6d403b08892685930868"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "86c4515c0b61db61cda85a171ed3e6c5"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "1ab6e5a15f54f243f7380fe731f6b93b"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "31f57cbb789643420ef7bc87ca642782"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "4d058967419cb8dae11b6d4cf8c9fe65"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "bb5503fd2206efe75f59420db89114e7"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "06825f68e9574aa93050faff06d05137"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "c809d150f16f6272124ed0523bd4c605"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "b807723e028eb748cb09850c1615b2eb"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "1746f0d62a70fe2f5c538bc2d6355e9a"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "ef1d94afcbed26767e48b0f5777a14a2"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "57af6ca34c24a25b2d0a2ad8d8860bce"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "db43ccb35e8f9064d4c5459b9310c0d8"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "c135f9e906171e34aad355185418aeeb"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "552bfecb5e94098755725114ab91decf"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "adfa567f9a0b018bacb8e0525148c523"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "d8fb86f91f4d6ddcd163af7ad0fbacb3"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "252d1b79966d0d0e080983a2715a011c"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "1cc47930733f85a242a918f7ef55ede6"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "702fc9caa605e8432fc671c140ce1a42"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "009c4fc3942995e38360309b27268cb3"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "20691e9ae0e72605fe533214cae7251e"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "36c3eac7e389cd0fa2fa3bfcdfed2b33"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "dea5f0e6bc830cad700293e711f10ede"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "dcf0b16f000cb2caf61562947010ff42"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "d569e588e2176b5bf65bf2d10ab9e53e"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "4a4e83d7a5c534b446023633de0b70e9"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "9dd36a2d85e76d153af80817e24b672e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "6296a6c26cf67dcd0f8543daa6bb4bf0"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "3caca2886a6e8cc0734c2e7e33faafc8"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "6cd7d2e536cfab960e31c56807c02120"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "386f7dc498f9f6bf861b709d91d6111c"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "4e5bb2dce7f23dcc7c5fc0582c734f05"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "64a11325b955902dc3247b7c84111c06"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "198f3e3e309cf71afae8945c7647b9ef"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "c96d52c7e3c7914f98a46e4dd4ac5e01"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "7aa072caea7b7de82227a7a389d7e3d5"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "9870e924406bc6939b714fcba29bcd6a"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "95f4d55c99aa08c2256e02abc305aadf"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "c4fe32a4f90deca194161ca8aeaaed50"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "ea0606049a52d87bfb32e675a7ae311a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "274460dd349cc41f908994d63edce9c7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "2b91bce33500ee257b98e8d6c6f7a18e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "8e3b2e3ebd18f3802c7178ce06ccf813"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "7f3f0d78bf781190811ba9b32c71bc56"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "de12d99adbe4fa69607f9cd412d294fb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "38f1813006cc5a74014ef60ccf9d4060"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "d158c11f1c3f2646c050dc9fb4417312"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "31a5f9c69c3d99ea15a0b1d11cc18b19"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "d2858563942f6eb21d8a469f6adb007a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "0212e7e4d15ad098727941a469c3d8f3"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "0ec79cd2fb14c59c7e83e03421c95382"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "cbb18a898963cda7582df8a8e4d0c0d9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "f53cddf77333870808e78e0656157356"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "f4bff3416d0a92d5cb3006e0e02c9397"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "9b6c7d12285c316f8be8da46c6bc4a02"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "c5ec071b0783a58074863362a75bba94"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "ad4735809f2a13b0ae9d3045953150e4"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "6d3104e8e5014f1e19760aaa90a28619"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "3f2982e8e0264ab8b3f0bb3f3bd72e29"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "4faa5683c2a6a0bc4b4979324231b576"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "b85c1faf2550f2207fabcb95fcb7357a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "41b32846be54bb5e2fb9fc60c06138a7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "0466262faeccf73570a81c1745f20fa6"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "f34c9e6884a7e326151f3d350fb62dac"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "000af13f96239351188c872992c67a06"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "092638943e479911392f6e4e0c1a3e3e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "834bfda51d03654cdf8da68858ab0cdc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "bdd83a973569fed8315c8c202ca034fc"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "0d7a73c062e3088c34367d19fb48cbef"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "5dffa084e7c8d856c9901bb8adaf9285"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "d958d24884cf2c91a463659180fe9dd9"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "b0feb098093a3f291c122621da9b5ed2"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "769389f952504b60ddba13301e66fd2a"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "5c95eae982cebae3bfb3b401a5c78d39"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d2e61c4270633853b38a8a9833594458"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "9a38593bc7b3782c97bc61031e054f15"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "f58916cf087745f480d35524f829e5d5"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e461684eb19111aa11788ae98d563dbc"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "5b199bbbc2aef7024c5b385dc38729e1"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "4fd6a25f5f3315c620948418c83aa084"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "1693b9b435125d7c07390501dfa8a432"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "3e359665241de93c642b94bac76354a3"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "d99bf382ece7b1bb71d4c10bd0483578"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "7d01830660bed976a6d30a60365a2e67"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "8b555a7d2e814455b191718684123bd4"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "0c938a34e79efe94a73069aaac0d099b"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2b484f0537e22a873390d2c476618a33"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "669a4d8c337946d0f5d01827d9f8e1e5"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "24abe14377fbc30e2b6ce117524c2051"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8417463404a11062c6e639b3803c25e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "de82848498d8314b546107182383b50d"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "da497bfe3152610071306eea63df9a2f"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "1fd63d244a713271e28c341144bf351c"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "824cef50fb3b815328d9686c3e23238c"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "16034201478b523d962be300ae8faf48"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "4f7b46d3dafa6b3c3058b41dfeeba4a6"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "781339809a2c32b1c1badad213562f51"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "9d47a3f6f9e426355b332f81647b09d7"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "945357eb78815c520a2f501adfe7e67b"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "4361b40b97d2dbdb7b5c8361b2f2ec6b"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "51ac8161186f3a9f98a07c3daf7a3976"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "22197fbd3995955af3618ee91f01bcb1"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "dfa5c51468879a1f1ea2a015d6080160"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "194af6b0c70c394d2cae453a29883be0"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "18d595cfe70332eac90b0e31a204daf7"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1e7c9e2073424d0caf0eec8c822499b4"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "b8d0701e90b82aae98b7c9fc07fcf26b"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "4ec8efc544e6e4c7a19581ac4316fe68"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "a7e124ad2c2aa74eda7438f5d703ef67"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "86aa879dcb175805b7f9fa3b57c1a27e"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "341cf7667f702bc8d2f5edc6d24d5842"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "ab725ec642e15b27ee214eda627501dd"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "c7412bf5c6ec6ac462a8db37aa43a655"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "903d59b3894db9101d4c75b51bd2bb9f"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "18d390348c2d1cd1e25686810fd05595"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "7b734968c835c9dae1f7e4ecc041c6ef"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "3f4bfce06fc100b8ef0f0c97bbba4e35"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b742f55c9836030b91e2546357c87da5"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "edfdb5e6af73a110652a0871a6b4c0de"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "002865b21acfa42cd37a53657950ca8a"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "2d56ead0ca0f897f8be6eba16d7ece54"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "b8b1ef9cf86c4b52111d20fdea4cc58e"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "1aaaf292a4cc5139de10c56332565723"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "28e382152441d553c635b45cbcc71426"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "5c996085d4378554a42bf1141152bdcc"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "42a0d288261f44a1eee31c59e1e8742c"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "1d65ca5e2b880012d42af8ae03f15a13"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "28ca5d6b96b3e8181c00baf44c68c52b"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "6240c1ae60f8345f5ec2d7f3526c245e"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "eacf943e1f1b4e4866976cab89bc9b2e"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "14f73584399420989b809a1fd80e4622"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "4182bdc406396f12378c1603f514463a"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ba311071b28ccdc4d862f5868c78fb65"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "34bc4b89dbe8f94dfc3e86cdd9275dbf"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "9aa8c21b85bcc02614061fd8bf84887a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "4a2a72335044191b48eb8c6ba17d74c9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "3270bfbe831390dea9712b8e439b797a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "5e1bfff6cfc0d0f5d64ef4065293c1b5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "a38a0af29998e90fac82adc13e40f974"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "637ac3285a53d982108775a03a7b65df"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "cad5ee6b8d53178696b33738ca37b7e7"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "01538345a36e7ba96f9c4d53f3fd2439"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "fdfce9b11aeb3af161ca3c64d1aa42cd"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "2443496767fa3c12c0961e232e4607aa"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "8e74787d9a997b350c87dda52c9a2858"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "6995b055042fd29fb307684b9f3b7085"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "db32161a58991a0c01f6376bcd688b9c"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "ee2173fd79a8f365d23bffef1f8f7b6c"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "5c8e3ea920dd19fbae5b890d7f0c482e"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "1684e8c28f2331cf3d879f9da81392d1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "859a0b4289fdbb42444e7b99298c7124"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "88f2cda31311ecf8d560f8679e1fbb75"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "2336ff74ff96fa01858348dfc179fb53"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "013f0a421513c5168cdae7c5325099b9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "a754f6cd1cab3c0aae4829305119ce70"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "6d54c24f8cc09ab36df523b76cafe58e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "bb2e7376bfc10abe58e5566934a8fae5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ea61b85e826553fa58d79e4278362093"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "bc7a8b16f568df5a6fac533dc0d55bbe"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "562fbf760813c092df2fdf9cdc593929"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "9ae1c749c908f0fc7d7563d1505ae72a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "b2674c04ddf7ffac9719fa5fc36e12a5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "dcc8ca81fcea3148a87b0abe28aaa64a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "2da05f058328feb968af264b7ae32795"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "84c6fed00044c56e1a677bf6a05976fd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "89328ea2880d44ac0331d59584c6e36d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "39a76ef9ac802a5a6950974fed410b63"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "7515325aa091d622648cabc859b14681"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "61b62709939ac83061f3d56471591d49"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "005bf6b2a815dbb599e17b76fa6dad27"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "ce05b3001b736fde72531a9837c504dd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "7e4c06a048e3d6e94902c13e94b6b353"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d7ebee4578045b07fd01efbfd49f190a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "fef8d372b130ca84a6128bbb7fb3ad22"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "79a7d3768b8a9e70c02e1c8b9f7c2549"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "2971e3b63cefdfd01dc2d8dc1e69510d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "6a3c52b1df5d8bd3d15bebb58f7de612"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "852f0d4ac617122a747bfc521b9eeec6"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "ad1ebf0ededc5cf422a0cb60226f0a3b"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "dcc51525021805f1bd1dfba736f1b07d"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "1020679b42f27845b048f05679581957"
  },
  {
    "url": "categories/os/index.html",
    "revision": "cc18e38e17440a46cb9acabd5037ea70"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "3c3f3a5069bc28e451c81137dada7c39"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "78282fc009c63c8d7a78477c4cb04230"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "9cb33f57e8c985de84cd28bb142636df"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "18528ab922fbde42ce45d4d924f7069c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "dfc719d042972174c0689b513435e6ad"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "99829e22a07bb9f81f270d38bd0f2564"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "ce4d1e9439f5e8d8b2a74c8fc9694af4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "eb931f1b918bbab34f105ffabebcf611"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "8e7890506d9d538bda1f7922257d3b58"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "f54b41cd725a90135b81dc1743838125"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "ffb9502ff7ddb9996ba65d91de27194e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "99b0b3dd365d1500b6161f7e741d58ff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "34836884dc0780ec90b34747a2000773"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "f876df71d5a029a4ffe5f67ffb0c357e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "86bdc746200e97e59f53f74765938b05"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "a8118a4dc4a8ed2201fb3d787962b061"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "51945a74ca7ae4808606a425c104fd2f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "8a43c2488d8af3f94166b67e16371c72"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "150e7907042ed4d2919691c3378e9747"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "1530e29959e5edce6ec1de6723a59c6e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "69c52c357aaf4e0f1b8571eccfc20ab4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "59efc1383171454dc50cc6efbf2e1128"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "d0d8903f158ada53aa68d8ebdde9e673"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "fdd6129ad21a7203e1be06811b470de3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "889259b98c7384b4a705a87eb17eb30f"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "ad05a4aa8030f9f4bb1a62238713bf10"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "7d2aac18573125452bb6885810834a8e"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "dd84a6525310db5ef4800b028bca5881"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "c5653e44478614dfac4d813adabfcf1a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "efcbe42f17cec51daeceb1b35fda98f8"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "5803214e3b00826dbd8eac9023f860b7"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "dc52ae825798a6a3b1e2a6176341714d"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "91e9bc268049c48a596ececf5e756d4e"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "88b619611d91cad1aa0b211c87758650"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "753358821d9568e4f0e36ae358e3f25e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "02bdcd8b23164607e086bda7138fe67f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "5358bb7cf0720b8a3c9d6aaf8f793399"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "fc825d54e4d2024cce77f2c2c89f3ea9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "de32973a72bb905e2d5065c6ca43cd36"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "9b4b4759225bd35b39f7028d2cae4c7b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "79581772c665874f7c45a3e3b8e6c627"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "d1aa91d50933a1c0a37a57370d517e31"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "bedca5565645f76131929215c8ee1439"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "30f3febd312fea1c80b1201aad06f815"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "ad68e8144acbf1cbbe7e095c64c6d507"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "a15f8e278b6355d0803de62d4fdd73bb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "07a991ed57a01ea25834ae7a92b3d34e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "ce13496d064010000a51eea9cab2f44a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "baf580a875546a352c39b3c6202082f9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "67c77c9ea4c04000622e521046bfb7dc"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "52812c353d063eadc5b93e2d185e5335"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "97deb7ad513f957e6437e160219eaa7f"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "373b6e2974bfff92b8c0e38e9d9ab627"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "58a0b0c615ff698626d554b1988b2052"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "b077828933b1f97b6f40547851abce2b"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b78ee624f9ed5b745521dfd39cf3a18e"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "7b364399bf608797aa4c8d43e95e29db"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "941bdab51e5e2eb2aba9c8a17a07cce6"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "e09a8f7894c092d88066bcbc665fee29"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "48375e8ad6b145228d30cbd169370e14"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "85326294613685e8122add0832ce4821"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "da161225f1f83de1f065754d2659347c"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "9b7ca3f81d117132785906b098eea923"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e28bcec5fbc26db7b473692ab1b7809c"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "70f2fee68c5bdb8a39c3c6a35e88d7a4"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "cf8f82cf7b3bedc9365f500bc23be667"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "b83b107cdf3270e397aca277f2706473"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "dec002e2aaa3c801ecd1e4189443a9af"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "f25ff02962c80e54c0ebd5b806011c43"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "aac7e1b682bf041d47b43045a8fd3d95"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "31ff99859bdacc17366fcce2ddfd10fc"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "d2b1857777ee88c921b4f2451a3fbde3"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "22e9fad4b3fc427dbf04c5ddb6b71310"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f29526ad37f8b87bf99d5e68ac0318a5"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "602072f5800c69a94f29b66fe143ede1"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "883c2d28165db10406c02a6e28c09543"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "93074eb2e32bd7a38322287be63c3e12"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "0bc78a74b9080807728a7181933bf43c"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "ab512206259bca43c50cf18a6aa927f5"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "c5ff2f18b1d8bc30463e0927c6c4ccfe"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "cfbaa1957e3a9c5f06f67010113c5f1e"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "fab09b1c9e358f7b5e2f09ab7a336882"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c2e49f2f7fcfd186d3a560b985486ed7"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "9e297e19979452a86f9b9da4eaac8749"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "276df5445e0cedae1a04e87d8d6b8b1a"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "6d1f53d35f124ba4694779b9b3639162"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "2ccc07aa02b8efd72474d6b91235d7f1"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "c75d403192d66a87815c5e65583b76ff"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "a9ca6e057eab14450d0188aaff48a657"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "4e25e9ae38cc9c7937709d1de2eddf3b"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "d5b3ca4d772a3b932358b5ddb5602485"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "9186222acd5b67cf09aa747ac8644435"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "3e2cd9bed37ebbbeb7f36c555d647bad"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "cf8e5e6cc88304846c92063700750ea1"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "4f8032902b328fe320f83e568b5ab5d5"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "43f65ab674989d74f8d715b1cfd2b66d"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "de6a0f36d4d42e724d19862646c3e47e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "77fa70d9dedd0768a4bda66a8bc20d08"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "f0f6dafd618dd8320e9898913c289eb0"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "681184b05f036a7d8bcdfa9c73d6df7b"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "bb7697b4c32b670bc125858d721877c5"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "cdb6cd6b0029ceba91154633136bf3e1"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "86023242a43b7cd60a871c77ded8cecb"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "7a72d643d7f3dcc4ed0fe0f9763e4e77"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "c90901b836d94c3e0f04a42e411d71c4"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "5773574ed1edc4bab85f1d3e8ca8ad89"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "979b66f9f57612d2f7faf72a550984a5"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "75344b720808ef373e0f149b15e7d73e"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "29ae17f4365f38dfc14a4579e393fb09"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "dea028c245aef6f1f48d94f6770d6af8"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "f22186e86a65b0c5211c9ca6fc421ed6"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "7a72460dab9498f7e5bab89941828e2e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "2bf3b36dbf41c31c7c50a7a761287b79"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "e624e12b50da0334aca570a9bc68fe5d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "a829ac1a2396b8ab3f7c39c83d9c42af"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "f31da4688ce6f049b2a90cf4186e02ba"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "bf3e1e0d7ed69b0aeba9336b3284a097"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "baf6d729c386ff4dc4d665f1d62ced5a"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "6c9c6fdd1cb8b4bd78d28dba8d648236"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "ddc96da58da90c2bf13f5b577d923576"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "7585e02b8050b69b449a4f74ece4374d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "ef4c06a975a67532425e5d7904496186"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "6093dd85160160374886fd47545c961c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "49166c56a50743ec3c500aa46074375a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "3f73f807c9ed7ba78a1edacb7715dd30"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "edacbee8162d9509f9cdf6fba33347cb"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "5f5850bbb4508c26d261242be2f33e7d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "0f0c283510ff65061049d5efcf86b8b5"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "9e8e7546964e2915168dd974fa82db18"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "ca7900393d63a0fe2e33518080e544e8"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "61e16631303f9ad4cf7cc97ebc846983"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "b5eefb91f79c7add2b4ce4c253dd6e02"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "fe9b18d249785438d80ff78dade87ed5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "5a42c8a172bccc34ac194dd6ea95184a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "1b016c1c1653acc50d3a04d86f740eda"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "14e1a524c72463f94bf5b3bd5499b72e"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "d264f6f87dc7c4bd0efed4a9149e38ec"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "cb3e8cf91dc63b567a701cebf2c3e4bd"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "bba132af496bfb978905fa72460cd081"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "58d515c5da9dc8893dd433aa06fc83e6"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "98d68294754fea7566c56615ab9423c4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "c33e93ef022327eefd3e7e5da356323c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "69b3d349cba0ea6da7c435f05fa58925"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "9c744767470b550d2a409a9c3c0cfb53"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "7100e5aba2046a967dc5efb62071cb85"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "edf94da7d6edf5050e92a9d69f6372e2"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "bef421549d86d729f601bf1b7e006995"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "f0369eba541f3d522671656117a07406"
  },
  {
    "url": "categories/php/index.html",
    "revision": "15f0f2a53c6b6e409a63675ce093cf20"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "fd9459409ef1de3553fe0380476553ec"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "16fa43a5e8616ce2845888b24e554eea"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "80f2612ace2666fc958d0bca41ea6eb1"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "c2b804fd113cd75218a68a355ebe4670"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "f2eb2f587356deece47955909fdd422d"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "7e528609accc8716d3366b03b67c1edc"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "a7355c6a4bb33a07ab9e9e43828b3499"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "5120ec094def3463dd7d2e07138ae4c4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "32ee6af472efdfe0451aea0bf8df97e3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "982db736a90c2940fef117138c6a3a38"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "be2f104c9944d1c99791894b78b1b582"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "57b1d4ddeda163742d411ce04a747a2f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "6d54b37f227f91daaa7d433b5c8ac3ff"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "865783d1439fcec64a99913312598408"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "36eb7fd7ef3711886ddfc292f0a2f1af"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "f869183c25a0cee35a3a969cdaee79f1"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "789f23d7af22006807075b9befb7c912"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "39ddaf2384a8f028b4141a356417a728"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "99428d01f3f5ba57a923fec654e25dce"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "32f7576f800e35bcaa2dab41baea0152"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "03cb9906a98e32c818c7e24520854812"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "d389ed91700ed2da61ec9700a1df4552"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "9d45f19e40b5a1d5dba0e8c8f7808253"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "751e1a7d1bf2dae70966eb40c7f51d76"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "094f6c66f77360defbeac6e2d6286b67"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "ec75e64c243ec3ac70466a132f5d0c5d"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "3d8e3d6a05fee5cb489043ec6dfb736e"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "be3eacd7c4698bf6f1565f6a92e594df"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "7f06a96126fe8f7ef018cb08f4d88333"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "db3ac8bae78651a66e1aab738ff44b2a"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "afb81e4caba62b186ec1cdf56a5f91a8"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "d6f8d1eb7064e57e0a760158aa2eca82"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "9c331f6ace4577cb1b663c65a79b48e4"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "7e83d6a4cae7c2574dc61369968a9ec8"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "aadd0dbf20928592d3b01a4afc15ac12"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "5c88f3866cafe527900e1875fcbb098a"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "504e798b40814f0ec16be04b5fdeac83"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "585cab1d778abf0ea8857973400c7bdc"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "20da47cfbb33c92d2a6841bf10b7405d"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "e617d3bac796812d17a61d529c653af2"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "cd9cde67625b3b705d8eeba13e2d25f8"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "fc14ef40e30ef80de9bd902def80c3da"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "b27cec70f1ec5d14d73e0631bd4f83a0"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "fbd9b43796bcf33898dd2f70e6c5c747"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "9d8afceac68979df7b601cfaccea270c"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "900576245d550fb5c54159c08657712f"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "e014ada7208b8ab1f926c4e52e6c373a"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "77a3d63a627e26b589e221d54d502013"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "a8ec4fa263fec0ce9ab6403164b8135f"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "86af252ff48fe0d697d8de63c8504cf8"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "b46c61bcc1ab5f99812e72f7d7f32915"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c8f91975ce85be97ca1e46cfd22ac288"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "e87d3f1e7aa0b65f8905b44a7d01f8ad"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "b0859e4e79e4c109bab02a62f7fe07cf"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "f4cd293768651c99a78dbb693bfc8dac"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "896c82e635a74c55f07e0424e2dd3be0"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "2dfc2580364ee648c60038c81148e3c6"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "ae8f103d2d9965d8e1040c0cad933e0d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "1621b43f4b6a83aca410b24442997f6f"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5ca87ba0583822213e7b04a451aa9597"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "e99a2f56fbb0c4f1977d60ce2be9066d"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "6814aacedc3588b2f368d31564a1bd71"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0584ccdcd0547a483560350a124d6589"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "e34a6e8708eeef908542eb3442ecda9d"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "daa9d418fd199115abf859ccfcba7a7a"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "26e063830bef57746054f1528841d74e"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "5efe519043c6bd7f93e992ea7c9dca5b"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "155fcedb85a6e10329892694a39cd6b4"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d96ff7cfb4e78c78fde45de869d0bf87"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "3da395fc4f99cef3068392e1df92f686"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "a6398aed1e176196ea91eb6c08772df0"
  },
  {
    "url": "categories/system/index.html",
    "revision": "642ecc6573e72967583f435e231cb7d3"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "8757a7e59472d225d52d8b44e3c636ea"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "84019633e7966c843b3f00ff51a5252c"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "8a40c8b0aad174f4fd8dca1c8a352ed7"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "f5a6cc67ec6a29e290b503f61935644c"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "2af3993fffd51fc73fc5346ecd8cf99e"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "7e42ddaf6507c2e57e511a324a2c9503"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "66ff75864ba38569c9d64d9bc9cd6cd2"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "4951ca8913026e3a00fe5eaf585c376c"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "88ea9248d19ae2ee91646877b3355e25"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "f520eb42dd78220c052bea2ab363b1f2"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "b8477749fcabd8b60b5a235af68c263d"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "0b6c1ebdc069dc97f933394e66a0784b"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "bf7884b39a9fce4111042c445e8d6e24"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "b34324e6005271c9ed9c800c1f21b3fe"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "2476ce47627033443dc1f5eba2cd6c5f"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "647c2065866141aab08ac0e8137d027b"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "f071af84e1e8e3f14c9dd7e95b186700"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "4344e25ca086f1a5ce81a628f431fa06"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "695c2c7dcdbb9d547cb63089764298b6"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "59f7fd7dcd70b689ab95c64036570386"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b4edfe5893058793706dcbf9b6943d22"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "efaf92f6e19edec9f2baf6e268ac9087"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "faab4fcda33cb2f527bae3e4c4d98160"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "7b101c1e5ea8395837b399ce3dfef389"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "574d1af8902558210f920e7e8c517025"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "c4984045e2ffb56c2c0f5a06aa8ed379"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "31d85285d54cd0f423572ef218440492"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "6b09c06705edb5c97fb2ceb1b1848a7d"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "27001eae93d14aa67bf75fd9b07c5dfe"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "6b70928ed42544ea3c3cf549cfc777d8"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "42f51bcd630dc9d7006dfb9de79929d1"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "79f0753127f2f465218f1e5897399d40"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "fd6f7ac54792f0df161ae2f3393dfac9"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "f6383a954bf8d43d11691cf474a5dd4f"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "b25cdab4616d7ed79105f9fa11175825"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "841d0b91ecac1f320fc84bd771215e40"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "2e806cd55df215fd06ab03dafaa1abc4"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "60f14a93d12ff8a494193934bd732c77"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "6e8e23934f918959155658054be9adf8"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "c7b9afe24815fb459664eb54c80894f2"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "6cff38c82e3fdd213c33d9f5979a4806"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "c164f0e2a3bd5aed1e7a6eb77b8692f3"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f16df23b9edea965d518971d832b4645"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "0e58c85f3367f42abbf7374b9afbc546"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "92bad513b3684e40bd8c5e5e2352ca6c"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "30c00d724db3adc65d6fc714b5c86dda"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "9b5d1222488f0f9cca40e9261c5275be"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ebdeb45dad8146231b3d298f19b454f5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "0e428514c4348ebb4fb4df858f46090f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "f59743e29d0db7242321c8a454d9c827"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "816a1e4ef9ad98b71e15ab0281b04cd4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "4b5dc803a595bd0c70fef987b937432e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "568bf166f7ce717c0b51cd611561fe58"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "fe913a9d4b94ca2df36ea880c420857c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "073ea95fd6e13b0ceb1cf79a9a003019"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "88ceb4b52df4881d287ceb277df95086"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "b832245750bfbf2d58c015c87ee543fa"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "82d7622d77f39d19df5a9f0bfa0ed4e6"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "7223a6ee3cddada43d49c0c3b4053c1a"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "ff6b7a71042568d0c963f8ca8ff826c2"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "1453737ee95fa308f85e0cd2fe883aa4"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "9e0618525afad65c8963c2585009b383"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "6233b2822257dbad78d948e6a1121ee9"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "8879be35a3b0cfb4a043f9098e320bc5"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "9daa7420e709be59dad133e576a2a285"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "9a9690174447f124a917f1f84edd5d56"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "1645cb284913697861a46a57130e06c8"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "627f5dd2520c30ee3ade04a01a84800b"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "01349f81bf1768d84b44c05c2d3c38dd"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "943d92bcd2a5617a3afc16148bd3d68b"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "f79f94b6981a0664b540e93fb50b913a"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "016afffe2335681f654ee659c92f8fcd"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "8729e369b045cbfa76c25bec475e44aa"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "03c16ee4f6e631c126eb61ebb3b0c9e3"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "6c1306ed2e3113af75cbb55e7efaaf0e"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "7ff85763133fcc982a40993e422ff6aa"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "cc2541965da3350b74816eedecbcbc2b"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "eab3569d37b2f6f8d86382814499eec1"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "a668d5a6291e117c909988ddd0779675"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "2df9ff9f7841f6a0775671936eb9d405"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "4c3a6c91507f0ec38885be78a5ef7116"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "12d2a3ced910ea337208c7f105699525"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "56d587897e0a614a735a1e90092e9b7c"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "ac14493bfe4942c5c286adbb5cc1c3e5"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "85cd31592dba2643eec009dc81b4b510"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "185815e1b076001ca9298d35f5572dcb"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "2993209a759f554deb953f26bd66350c"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "0c9b99f23113ba7f84ca09df828ee7bc"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d9c262a0c69969b6407c07b24f8abc70"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "bab531a6f4fdb274e30b4c7aceae0452"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "814828a8aa9e4d866d8697c81ea2d581"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "70b4b4f40ceb15cb15e50bf8610abd1e"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "bff85656518e1f4db143ebf134fb45b8"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "3ef7b53f026bba858b69c389ea5fb0a8"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "df17db1a018f8d5964101c3755b93246"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "37f4bedb71cc076eedcf221facb4fe50"
  },
  {
    "url": "favorite/index.html",
    "revision": "3c8fa8e392396e4e384e7e64328662aa"
  },
  {
    "url": "index.html",
    "revision": "39f86e960451fa1c1026660025dabdf5"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "6b22f7e6235f7bfe5e662e1ec80bd1eb"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "41426f6b38f4aa17da46c2d4b0582408"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "dda6eada04ec1b2b6eb4a229d74301d4"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "4c87d94493bc09245da32e83c3aaeefc"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "e8a1bdbea68af891e33bbb1b2711fe4e"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "9698be2c5eef4fd8d02880491ea150b6"
  },
  {
    "url": "note/index.html",
    "revision": "9c7f1d7760d8d77f1bb5f7837da064d8"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "e5580368520462ff1f2b0e52b1853fcf"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e1441dbf858c8e0fb9a23712ddf2f58b"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "d2075fb9943ea91668b9c2421adbb11c"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "9265bd8b1be2b8d49434cda2620d9255"
  },
  {
    "url": "share/index.html",
    "revision": "7686cee50758cd87ef441861e68cc0e5"
  },
  {
    "url": "single/about_me.html",
    "revision": "784f46574b0735a6ab27e987ffaeadfc"
  },
  {
    "url": "single/all_article.html",
    "revision": "c21ee0ec14c85369173669b8ec63366a"
  },
  {
    "url": "single/welcome.html",
    "revision": "3f1ba37b17b952c9671bbd947ac75581"
  },
  {
    "url": "test/index.html",
    "revision": "c461c1460edbf4affc13cb92fe55ae56"
  },
  {
    "url": "test/test.html",
    "revision": "e3fdc361864b86d84feefe76bccfe383"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
