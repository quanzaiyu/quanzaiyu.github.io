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
    "revision": "bfd3481d5a2cebba68b20e35160a0936"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "afdfa52e6745efe27450ce53c3de5d37"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "7abd804143fd636f56fcf35077056b22"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "0db1d5f8500e6fde86193ef550c9a457"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "5ea751f2643a8a693bbf9bbb425750ef"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "5fd553739f2fc0338cacab31a8d97b24"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "62ee2a987a8fe1ec582f7d2b271319ba"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e2594eeacd8b66aa469ccf1a77bfbb6e"
  },
  {
    "url": "articles/index.html",
    "revision": "2c6638c848e015918177189cb701cbe5"
  },
  {
    "url": "assets/css/0.styles.d26a0eb0.css",
    "revision": "e3ffb476daa2afc535d789317dd2ab68"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5dc5322d.js",
    "revision": "4855d48f3a29982b7a9b85bde2f1a43c"
  },
  {
    "url": "assets/js/10.b101ee73.js",
    "revision": "b6ef97df8f050dce58d8f649c7e23f5c"
  },
  {
    "url": "assets/js/11.b9944dfe.js",
    "revision": "33a5059703f49f6f2d6f201e05b0b5d9"
  },
  {
    "url": "assets/js/12.883552b0.js",
    "revision": "283d75a7916bc1b2a9d53336e300ed46"
  },
  {
    "url": "assets/js/13.125a28a9.js",
    "revision": "b678d30a1a11f9c5311fc063eb1b2634"
  },
  {
    "url": "assets/js/14.f80bf307.js",
    "revision": "2405df15aaac7dd044c41eaf91aaa15d"
  },
  {
    "url": "assets/js/15.fa5104b8.js",
    "revision": "3a4a3e03866ea46b0102e7d42793f5be"
  },
  {
    "url": "assets/js/2.0ebfac41.js",
    "revision": "f913d550ffe11d0689ec6dc4b8ef32f0"
  },
  {
    "url": "assets/js/5.68f6d9e7.js",
    "revision": "91ce5eb2ca876a8ec89dc0addc2ff2e0"
  },
  {
    "url": "assets/js/6.9376c31e.js",
    "revision": "128b30befdd564b6662199f00a9a35a1"
  },
  {
    "url": "assets/js/7.f8d43fb5.js",
    "revision": "fecee075ff8d4569a06b5b8d928e1791"
  },
  {
    "url": "assets/js/8.a7e06abf.js",
    "revision": "b4a6ffb1f6c9ab7c4c98a221aa8d0bbf"
  },
  {
    "url": "assets/js/9.b8822b0e.js",
    "revision": "d11bd1217ed70cfae49408d79467abfc"
  },
  {
    "url": "assets/js/vendors~docsearch.593c1d0c.js",
    "revision": "c9351880870d905e326198ab994e23fa"
  },
  {
    "url": "blog/index.html",
    "revision": "30cf18ca405f6ffb1cbd82daff841624"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "3641184f56737dc1cf3d4899e1900811"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "b5953c2431ceb641b866dbf8023da190"
  },
  {
    "url": "books/index.html",
    "revision": "36edf6fd39fb11d36a36085db93299e2"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "ba27679133206a31aebf0a17d88fbbae"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "3fe9e91a8edd20cf71885d7fc1295d20"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "dbb11c619dcfc5da7b522a0b9e4a8e74"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "d0e16e1dcc6ef31d41a7698f283afce2"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "64dba80424c7ff234c204787a2d6726a"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "3ac2697091abdea9f5fdca0d32031c0c"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ddec5aaac53f638a164d5c04095d308c"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "e67656e1cabdb4d7efb950ee3d3e4da8"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "8b599b6bd7eeb51f0a8bbda398572f4d"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "97508841a1e13a2a1fdfd7b23cdfa9e8"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "6528f188632b725b1a55cbda7e7ff4d9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "7cdb6cfd41d8c689337c061211893acf"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "3637579dc0ab52be4df13ab72683a0ef"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "3222af6caeec562111a3b58989b17539"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "af52447ee0ba915df8ba4faf50e5ec74"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "057c6b4b8c2c494607b199d34bdbda64"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "11733f15abe8c856bff6f2527a241178"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "1e076a984c149e02ca1f22e6508dd17f"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "50bb321748b8e0f63cecceb9a7971162"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "ab57203e9eacec6bb6ca2dd1c568ac5c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "6ccac72ad441ca761129f26ba533ab7d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "30f3d3a8b8b5c2c4536bee348ed58f9d"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "c03ae9677f935143537e72622abbc870"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "5d7cdf0afc470b3ae504a3401ec4b544"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "4f45d0b225ec1aaac1de18d57220ccde"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "71dd5d179e6f79203c5f687d9fcb41ce"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "222af0e9e990c7e478fb1725dfbac4b8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "f0a295dc26567f56ca2c39a28fcf697e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "16bb9ff97f76a5d4069b8e4c9bcf02c4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "4121cb193b1239581f440122d4074b81"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "4a05e00f3ff0176289758c4374854795"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "6ddad1b9f325e2762f554cac0163485d"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "12b515f732ea18cb429af74d778bd6da"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "ce9cf8fc86082a8462d497ca56d22128"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "33f89a7e317a6164e668544b3bdb4e44"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "282f54f3e483a1f189fda50dcd5b1891"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "acbdb430f0c8a1f01c5efddd905abc04"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "8220fe8afb6e28a524aa906b0a6d0943"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "ccea641f76db8f29b8767805cf12d0b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "d57a821a63d50557f11ac11d13d05626"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "8eb83d50e9ffc922fed3f813406aaf9e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a8c482117cf60750e9f5e838c2c0ecda"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "af2d498bee398c52d3cb7663cd554b94"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "53f41240d52fa7e8d01162bb4d016305"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "e128fc2ec06819968d74b64f10e85e37"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "34d763e98951639be079afbd6d47698b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "8e24acdb404436317a737dabcfb10c34"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "3010fc35ef1de7f4877735b743960255"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "3eb4ca3dc0c214fc7311f3ba61c5fca8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "0eb5dcbb5798d49a555971f24d199f4a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "bd2398c3e182c16fe0d6c4b9f04dd83c"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "906605c42af38c8f2c70881755e95913"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "30ad097aa7650e06fb7cdec3bb0a0fd9"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "62c63a44f5cffdd45f186b57f0bc9f41"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "b7733c51d0c265ed3fceca5409ce052d"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "29b40de9c1df48e1a513caf4709b7cf8"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "1c8611a212964c79e81347436486cd9b"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "0e6022262a158ede3c2af30c46b12176"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "96bce9f4c123a3573198b25f388f6528"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "4cbf7af90fcf4dcbc7ee9f6065810e72"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "b50d0d2436f961fe1192b3d18af99f4b"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "ac9aba2777df2c3c0858d24131b95409"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "eaf5a233ea773bc92a42ef5ba3f8370a"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "7109f286e018bbc9cfbc211dc0a8fd5a"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "6f82f2a5a848ce0493c9aa525c75bd02"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "9c917b55e8b089f9d75a1cd34589f3b9"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "2d09e9349071ab1d784300322eebdc55"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "ad08320fc644a48950dc791b12caf8f2"
  },
  {
    "url": "categories/database/index.html",
    "revision": "be71ba4164093b5ceef079a7f445d345"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "eed232b7eea05695314ac98ebb5818ea"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "bdb481aed96c6b6779b8c2a331b0e3bc"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "d30de883c3116b19de602dc382291402"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "34ad0c5ff51679f2b0f53e839b0319fd"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "27a5509e661d1c964f09cd49057ac1db"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "c1bc685c206c28b92e0a289d360cff52"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "13d7974a16c8cf944199c51b52b1f0c8"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "047eafa79530f0e168e489d2724e71f9"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "88ff1ffe631b3c60f971f2738de81c96"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "d916a1873029745cfa0d5f30002248e9"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "35ef177fda013f6f7c22eabe125d3b88"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "fb8cf7c6fe19b2ff4f88e3068488e158"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "2385829ede70d3a5cdc2d544ac42cb88"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "e35d239e8837278317bd2c41a755670c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "432ca035e14bd0ecf2fa0276a2cf43e4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "a9e22563066dd0b9d083189b04b1a6a3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "b9ea339385887ec3dbd8c6461b387bde"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "fa9a3834b78b23ce79ae480c273e55e3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "53adbd4dce97ac95d025216e221d8011"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "4a8ccf6b62ce34db2f3218aa64ab7109"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "7eee279ed9152afd3d9d74d20dbc0b40"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "7f5485e59a07c306da58346ea54818ee"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "38f10ab338118c4c1860362075d680b6"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "53be7ba1cf6951a521735dbd9fe697d4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "3dceae27f5baf468e6257cdd6b9a24e0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "05b3067daafc6b5819d6afdda0258256"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "20c1a9802c5ba7afa9178731ade72410"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "ca7e7e708dc2f5e5365883f6561cea82"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d330615467fa2b51e55838e6f10317c9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "2afbb48f17f26f824425b94b4cfbf5c6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "b947d2f8144f2575c50bc1eb81f672ee"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "522acaec39b86575bd9d8c0391f9e028"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "1efe21ee0bd330aa17a9fac16043b3dd"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "f094461092a16f55c6575e6782a53ba8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "8605d47f6db7637411290892f8edfdee"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "77fef58b5e0178634f21157b4f72498b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "841a150aa8c668844ea47a590121f665"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "9aa1d93663fed899a813c49ab425be0c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "d2ec1c1c28882da1e789a72eb8e7ad5f"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "58c3b25ba33fa17832767f39992541e7"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "64dcc7f01175c282d9f225d66e3e4699"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "d3de1743917b521ad01302aaf87c7299"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "3dad9f420a7f071c815dd91a9d7be763"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "8dd2702401517b9c9b62196e0dc2f5b1"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "28bfddc68ebc46f9b8fc44b11c17c817"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "9baf1af3bce6a4db0093e28915277fd9"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "6e6d80453e80b973d5a0d31d41b02ddd"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "0b96ad3ed454849b068a3cb0742c4fed"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "059304b7c9f90ca8cb7c94222d239d15"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "d178b951e784b646613d70a97b85c128"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "9becb0ca6673fe3e2257200706c758a2"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "6ee898ffb799de3f3e2f23f73ff2fdf7"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "07baa88df1b1309d9512c074f9ab85f8"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "8cead82240a2bfee7c77da1aa4f53a1c"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "1bb869915e0d33481444efc479801237"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "a3fb0d57013573a859c8a86f2fc0efed"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "db5e7c1c04eef89ad3ca415b9b4c47b6"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "f7d853ebebd609cf89ec1018cdd47a38"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "74455878b46f78993417d6237fe7103a"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "70b47d4af722ddd380b4e534baad51eb"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "cc66d64a2f0d43196aa94b1ab120f501"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "bdcdac6a128be8e4d4a7761231c5d21a"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "abc133ff0ccdd12ef7e089b5e76aea33"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "ebaa8607012226fb49821af6569c11ff"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "343d7a5a498919f0a5c34c852fe07e1f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "546bfb58743eeafd2c54bf7c1615088d"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "06fc0e54d5595afda37796b760d56e24"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "1b871daadd7486a811e03fe3e4556a6f"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "d3c7c9446a300528ae07f8e51544913f"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "bf8b51caea1302aaa0d0ffd6e13a1505"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "6a1962d2b53432a446ba024b007bcc69"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "6919a3b3b78aa7f3374ffc5b3705d951"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "432b745d87f023d1090e7de851198f2c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "876476cefca57a573c1f3e457ef14ce9"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "a45ea04dc133ced11e37057dfa8daef2"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "0bb6ea013443df29d44d7d8e7d7f14b1"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "36968351ad9ba0a73e3ee586baebc01e"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "2c0cd8a102608dc274b8f990b0ea0758"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "cef698877d86c59b0365d3d6c519c841"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "d1be220de80c5dd1fc63f503ae5578ce"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "e259552a8acf425e441438f4f553ac62"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "2eff09f7a078f8543d22ca1330ea7ca0"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "2beafd48382894ea0f1801f42dd1332e"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "a75367541f03e529e1671ef5deee7fab"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "9ab776b3c4c489a192ef5046471235b5"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "a2523ddf275ee83920bf7b1d4083b78b"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "42e9825fe5793e0141cc74febdc02b48"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "962b4793c3746b4857c3279c25459e39"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "da8821a7d218bb708aea2a311ace3bc6"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "a5c23af1fc31e4412f65f2dd4f234195"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "721605a2221d34b4236fa8d66a9e4bd0"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "83834c9c1f205066abd5855382d16508"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "0f809bad28c6e517ff7adbafe9715646"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "562a85c649619915717b5e03b62fe78d"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "c421ad136f35029e4869d1bbb912fbdb"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "cde2c43266a53f88ef1c86770e27a36d"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "b6bbe8c9401b46d221ec973a57897273"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "faf441df7ac79045885e996843371c4e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "f6c1c611cce1f43ea0587fa7280bb35e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "099331be053ba1522779b866845a53ef"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "d3460848e8573cd93b6dab6ef348a6d8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "efe3087a915c4f992a8b9abbc207958d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "ee854c9f5dcf25d7b2f9bb61b90b9758"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "e1e3043186c1f10704a159227bd6b226"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "72c50ab6d1f1fa813a22d9fc55174a36"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "a12fae29cdca7e7a34a02311c7bef59a"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "fd734404299b1b357b230f80af816c6c"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "c7250be0b35b88e7b88bc4671f31c5de"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "59892ffbb68d6b2f9280f3d8aac933db"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "4de6ce182d9f90efd68ed3bd00041f9b"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "3a81641abd0979016edb5e6af690f74a"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "a960649c26b1829e4a94171f78024c7b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "1fc5c734b24d39d0c76c64bfa48e422e"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "733cf2d1c78c178d893c344880ca2fbb"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "d5994f78f2612b2d3a500ba3dae01881"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "285e13e06a369b5558922eedf554d3fa"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "0461ad261864071675d6f86cb3164e0f"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "e15d8673cd5776e5c4ccd75a6a1954f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "aa56ab44b10e0c4db851af847f12e827"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "b800b03da715f861c00d209c6e5b044b"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "13a9b8047ac5102b75e42f20ebd94267"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "6351815bcfed05842cdce8ec2e77179b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "d388931a7c6a34a2f05a68a539ff7e04"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "14a01122d587ac1f3413a5bb64892759"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "6528017e7e92cac206f2b163148d70f6"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "febcf263b977853a6500de19bfd9d5ca"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "8ab6c310f55ebf72c8f8e76b7071e903"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "ca1cbfdbd2341a75fc27903f4fbebb93"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "a481fa6faac32ea9dea5aa842e853624"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "9ee887167f49c6520d50877bcb6986b7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "a6f17f81967b5369820e25da0f61d30c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "caf7c4d922708cc5bf085ccf46cc9c96"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "d4a5cc06c28ff26fd135e6f16fc65843"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "cd1bf1cd3c0403b37ad72d8bdcf81fc0"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "51440414179fe34f685be232758d87c0"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "8043e463b03eefaa2bb3f9fa8348ef57"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "d84dce4ed631c230be8ba590ea6bf5e4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "46426acd07932f26ff5424f2907e3a9e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "28a629fc2dc73a5dfc8c3dd4b6522ae6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "b5fb96bfe8338e8e1c0950032aefde3a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "3a80a554ea051aced757301d4da1d566"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "719e30a84eadc09dc2ba550f433d761c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "f6c083e3f5e25430f5ac83ded60309a7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "7b8457933573ee23d567d3a915b92280"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "5120e02d53f336bc29a68c456f834b79"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "ed2f9eb2c6ea653decb895070e63c4e4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "f1e21398399aed454515112175951d9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "ed5dfe969116441b0c32691694f50c6b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "33589ad753a282e214f8bace6b876b2a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "e4c2d1cc0f099ec5ea2eedf5aa4e0b0b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "6d7aaf4f739ef8bd549df9ee1426a91b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "18e8a6b4737d8a6a655b628c8c2f7fff"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "3af96670bf995026057a87b0bc81f395"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "e40a80b33cf86c4c0ada66b662851b82"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "7d3f4139ecc36af63efcda4b863c28f6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "088d09d4277e9fc5b64e6037fb92b947"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "564e7ebe39159ecec78f3817e957b37a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "52beaf0f9aba9b4a973ead8e8ea57876"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "f0bcc0b8a62c97f10854a4af4b329a4b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "6b3cb57cbee6304e554136e273cafa1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "5cee0532a1bb716e74718602053cae03"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "ab88a6990e4dbd76a551fcf9b67f30f4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "d21e419037f2e034382bd13229375042"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "7276a2dafd78e96ecd5ff203ef83951d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "34d827407ba6bb230fcc296fca4ef8da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "9b5f95ecb28b3081de001043bd05dabf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "b692b6903443a1d6a6942df01c1594ce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "4951047689fd31f622476b2af1b101ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "c6b570a58baa4f59df77d2ebb0af2240"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "51873c7f592af433cd2d35a021015d8b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "55984eabb6428a24ad9c364584146043"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "9b884c931aa1e6fa283d0f14e3468f45"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "1eaef9517a16f2c73d225f2248951511"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "a9f98a71a1174d59bec7d2a36ed62fc0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "d23c0c2ba8c8dfdf57a5370c7331c244"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "fd2ff14481ca85d5ad8a41e6b0b735d0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "234f54134676e1a3b98e83232feb5290"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "4ccfd972b0f699e0a9be57eb6310dbee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "01e75f705600099ed9a810956f8152d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "9faff42f7365a28cdd5da84ca64991ea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "2edeb281acc3232724046c408e393b3f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "ea1e2c96cd9579b6ef2799207043cd6b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "85e2b7d5e42ed1ccb388166665883cba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "e5770d9ce149617bcfc618afb07eb089"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "0574d17307ebc7b011c5f545402d89c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "0a4aa1a1532518f1c16e5f3e31ea1e05"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "43671fcfff4ede6d605c6a11e062fd68"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "66fc88fa27a7969efa6f12818b4f4d5c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "3f05320b6244b93440138fd328538186"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "1e90c6b6d722759df4ea25ef6ac9c24c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "33d35a3ebee3a4be11f848d76780f381"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "79d854e27078c565c6afa6ee66266619"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "dc6429c39e9056f021d35c264550a6b5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "ec8f984bfb010b39b32bfd79d73d3a92"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "0c8f589ea3dd1d80f0397bd45da81269"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "e4c56bf2014de0da0b1edfb297777267"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "0e04eba3522e907559a803e9be00ab63"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "02d85322f2120f8e6e4d31a2cf9b08fa"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "5395c904076f78b43d7274decf6fd9e9"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "286cb86f5e48ccb58db70306988f52ee"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "42b7c0ae39ac522b7c9cc04c9df3cb6d"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "11050336c1869923350c075db171bec3"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "069cb5b1d93f5accec68b94246159011"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "ed740de9d542e2c764adced2045b8b12"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "83c7649db5205f86d1fb67e50411bc88"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "514230f30ed9250c56d2fe9a587992cc"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "a00248d757ff907c10a8b685addc7cc3"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "3ff06df4187bd6ffb8e98403d5c8ca24"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "760989590c1cd0d1acad5e014e9eba65"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "ea1acac37f2556be82f707226ada4948"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "0c68dc99dd22f7fe26474310fdffb937"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "b9a940807a8946e533bd8ac2cc231c03"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "9d3b4412d3752a4ab1517cdc4cf7b5ed"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "58e1b8aef2f2c7fb68d29bab7c71daf9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "77b4794020ceb5d6ee5d81175891fbf1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "961a2353a54adcab1bf06e2b03f93332"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "cac6573e44e24ddc09729b2db5209b69"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "270afc6439d9ebe97344328f7e444d0c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "c593152394a9f16172ab704b68473039"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "901e5205227a1ff2e9f356c0699030bd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "ab2716579d7d04632900c926b713acd2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "09e9927f07108f6699f4628185074fab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "b302698c58af2025fc984339c11f35e3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "447ec09930e4a6cb6bcee1e76096ff5f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "afa646054b6ca170012fbfe53587de2b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "ee871226eab240007a4d1675e6c7168c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "7dc4d0ffecc622c80ab283403e5a5809"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "09ee39328eede4b55d177c878ebaab6d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "6ea351971933a40b806570c505b77c89"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "43a9d3eec569241a2d7a5ef7a984008a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "d6480a082c71190f8226fe3209e95e8a"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "6c46a68918dc9ffc51ece412f53b1efd"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "8be911594b2cbe44455cc7a7d1c39edd"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "7ff8d1d166deba2c9a6516cfaf0d9312"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "0bfe26f9ab44ebbfd89a6a4368d7bfb8"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "a2548689a8fe3c7b925bc2714b50633d"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "f7370e8649450b96617640870ef30260"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "aa584708600543b2707c6d4a488420b9"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "afae63702adc5ff3d3b4afda232689f7"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "25fe3cbbae206ed5f4c5d7d53222e527"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "8256fe2c55bdef6d5923e2cf6c98f2cd"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "a8a70061b58096b055d974cce4249a2f"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "b92fa24964b76bd3a89e1e3cca42af0d"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "4262e0f3f34cedfa6a2f37b553209b72"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "2b260ed8cf400bff35531516f7a74cb3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "5a728e1dc5358ff0fa9b99a0754667b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "bcafefc1ff16491959b025466b92c753"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "6496f317e6d99ee3fd874a041d56daab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "13b0af210e4a1a3fc7b93cfd6a360931"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "7368601242d786e45f7485fd1c55322a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "25dfd86a9a8a5f1ca262ac280f7df34d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "7ee7262729d1e20d5028469a2e9a001c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "37b45e4cbf2df684346207773840562e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "ce42097700179855fbd8f98deb5fd917"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "48c588f467d990d4d0ac6c4e4fda3640"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "6f38b404f0e029c7f2820ac3fa25d4b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "646c9e3a0e925ed389c18135d84dcaf6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "bd2045eeab3d626f38efab23b7b5fc39"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "14902f9bd897d6c63323edd9ebe25c30"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "b37b726e80328a6c7444667e4082cc10"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "dd599da5a2541f9ed0f2019f05a6a9c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "3cc1f9923d68f6af8528411a6835f5fa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "8605faee2c5e8b97513d9b65c2921497"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "ea976e62907b77aa01079e122064344d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "976e09a6f31258d17fadd519adc12e33"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "48922041b198ce0ed32f5d5a924618fd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "8f98547b62e8124387866fe18ef7801c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "9eda4e3dfd64e6c302dcb6ac1f81ca40"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "0f22b2fb55b0e61ec046a0a57a422cd2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "a4f70390274243df47c4a215fe4e185e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "e680ac0b8872976e3cbcad7c477515ba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "4cf22688e04088243c089eae99d69c8e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "40380c3b8cfd96907f400d948d9e6c82"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "abfdf43317c83812d4971ae9989a2756"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "09a9d35d2eeabe4f94a4cd58e4f27430"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "a450831868295beef52e1d16f6ff49e9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "9f75c4753e667a676d46de62e61cd782"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "ba31793dbe676052346168cc09c8f268"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "1db81054c11e542982e69a46eba7bbd6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "32ca119567df617c73ab8e611412b8d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "40921c496e31edb8237bde92d4554a05"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "223a0991f9ac7253148ed990332d3ebb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "2dcc8e699ffdf85d6ee84d35d6acf40a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "039ee508eec8eff7b7f1997bd038908d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "fcee4fec193d892527f2e49655440fde"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "5596e24a85d02e3b3d2389ff4b6752d7"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e9e8e6c7b115054bcfa2e5007c0109db"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "0cbb2e605ce1cac3c23e1d452031ea78"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "db842c73e67e714cb8bd79208ea18cd5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "e752decc7abf095998f5c31c5e6a52ae"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "a7f93a2828486dfbee21ab57d4a1d435"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "c781ff33efab176d47f0fe781e88e80e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "9a4927403bdadeba79a691a8ac6ee349"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "f07a5768633c02bec28952a3b19d0669"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "4bd55619d822996c1426c9f43e8fbd77"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "ed9238ec1e180e53cccc58acd0843f82"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "137df76afa486eb43de897ac53630725"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "04c9a489d9186fa57a59aa1b4abcd737"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "4842398d620f57d4f7ae4ec539fb0fd7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "67704f59cb8e247c1bb7ca06fc9492c6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "9d1e2fe78fb65d01e17519dca5d896e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "6b9197bef37b166edb86a3dade65684c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "0d6ee676726690f07990ecdb7d89e401"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "1422ebd07666704e2dea081b48d257c7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "a842c9142c9818017368c19b6888915a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "3fa9341f4e314b503b71be95f911f02b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "2796edf45ddee556b3c569fefb9593f3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "e394423106791d29f50569584741b66d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "b29e779e8477b0ec41c87289321bac31"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "4e78812a58ffeaf817b7667b18a32097"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d6407759fa7ca2eb59fecaaa39fc8347"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "b79c3ac1ac1c1e1e5c22378c8638e541"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "fcec0a92073d947bf86245a8e662915e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "568f23084d6574d88a2f94bc70cf9422"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "f073b6dd5fb20e161bd83b3a12ceb48f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "0e218a33874db6658376e759e1fcad9d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "f952193c5a1dad3c723192ec3cffeb53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "2b29624d9d77fda580a9894a412d8e57"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "b6f1cafd49e9b244ee6ac10c892590a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "2361c9c24403b887a6258d3d5bcfbda7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "efcfaf2f72743669973126c3d7cd9d36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "3dc832fe10e628f941278ba458aa2f3c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "da5a999d03eff8aee113d1f3ad91e0c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "4cfbf9ef6c8b38f8345af0eb7af617b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "5b433217ea57ad25fc7c3f859bd3fe8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "c8fd9164006825a97952f0485acda39a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "fdd0a37bbb02404f7e4099e287276fd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "4cb1b3cf669fcdfbc6e889dc1ab49510"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "b8b6ad2133bd3aee307f608d9dee0d71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "b22d8b6eecca2255a0c4df45ad425ce3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "1241ee97572f4e92567008b6da3317f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5f3206225574aca2df017746d99c9bd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "cdb05e9b54878460e2a4302b2af364c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "5538d418c29f38da2e498fd05e8bbfce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "1c9f8132e09db9c8b954b1015c9d7302"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "065a4e4bca1bc00a317153dd1ae5e746"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "b8bb04183a56fa3290ab6baace5bed46"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "132c3d56273b19c6d767f54d1a7f652a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "7d497bfc9ddbe2aab0d7fc3a5888fbe0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "814987135f10bc3bff32144814546a8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "a1b018440bbf0cd34ec77e3855747e75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "0cb3d508b07dac269935e8a01802602f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "8f468da24d8fb58f8a9c471205bb3d15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "0efd43e95bac1c298ff2c2b17cc4e154"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "6e40ee063f27d7de6668b5f8665fca79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "d55eb77727b721b2e444df8b8135daa4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "c0becc96a48ffe82a4dadfd7f02e9f0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "1936327030137bfc36fd44ecebf45d4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "ec29185a62086dc199c108debf8a54c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "06950c2f5910c6a400a4a484b0a3c74b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "7d7b36e9401762a6ac617f9b684d3c60"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "9a7293050d0c3a60afee995098d656ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "62e343685c8561ad3ab004e9415d7b98"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "a4802d8f55f1f104cfba181520728a97"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "f7b4f29e60e02b43ecff83200c5aa42a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "b7fbca23561b7b01b0bacc08daa9314e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "32854c75d11f6e5c32221c222a61919a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "b3c8b78b9a5bef664b8bc435b29dcda9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "122510f970c78889fd1e8c1887cdc801"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "fc744e04b1e215d97c4ff0768c79e56b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "14ecd46ac8b2c17ea74c5153591868ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "a33109b570467f32522af311fc741390"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "f9c86e49779cce603208d6afad4ad47b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "95068d5e7fa0c99e454261b4dc1505d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "57a9526bace389b05cdc618355668253"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "25ca56779fdfb017a51e35c7075ecede"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "a0cddbdbe60b230297b3c36e0eda8ad4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "944ea56a7f0618b9a001cc77a0fd4e69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "4ab82d5693b809ecfba960405c8e29fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "48852253831e54d2440774e05c0e8dbd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "9d6f7c108bc410d8ad19fc998050d1e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "bace768e2f567662db5d493429c11ffd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "c25e62ccd4d35452e2430f544d3f740a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "f0f866bb683223df54a7732c22e4b34b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "9e2ade3750632febf1cb118b4e4d63f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "cff9da2a85496ed6d1a3d8f5dc306192"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "4ba3d471cdd7d33eebbff3bce5e530fc"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "8951a43e5de483e5e1c0785778bd127b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "a606e6b1e4d809b8c797ff85a05a1958"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "1d37141e09daff7f7f464b552e00f82f"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "9d2114b584354bdccd7883b013e57ea8"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "1d1071664af3a8052800eebd194cabb3"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "e4642389a7e1363ffade9e63cda15a6a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "615c8aef35c999a31229a975841ea5b7"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "3b84f153faf4e719e7b74d6a7382f9c7"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "cb1277f1032982c5d6e71099601e39f5"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "62cb1d898a2690e51d9ff101778e8cb6"
  },
  {
    "url": "categories/index.html",
    "revision": "8d301a5d02fbe91e33dc36c99b573cae"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "72b54215a8a5d88f00ea609bbb926e0a"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "876b75985686955c50bfc292aeed4b93"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "3dca22bab32b0ec07e549b9e1074e621"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "5e4ac7b585d2129fb646a44246180f15"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "d0e5258bf8eb25309e747c4fd2e1dbe2"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "fde7dce3660ee9dc7e4487c585ef4acc"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "61e2bedf2cb0c6b7da082e0f7a095d12"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "c485950eda787d03f0cb8c8831710612"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "83db97a706916e3c176b3c30a8f92496"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "e1ba6ad2df1a461cc97d5cff7ee63e73"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "34a45f81916b81f82c77f2d44c1b5af8"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "039b2ca191b08fa41baa1aebe9690c56"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "9f137ed9b1438d3e23582b4554b8239b"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "3b1dce704e403fcb0b69549998c13052"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ca8bc2e639086a6839b06c12225e342d"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "8c9cbb568ad092dcdc31be613ce47b74"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "7ca2c37123da2c6d44f39683a22fb198"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "25c4365551aa2e780289d4cbbce7166e"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "b0000e4edea916a278c24f10b224cb03"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "30de2f60057aac1a7e869027fe6cbef8"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "502c38f154ca19654b838b475d622d3e"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "90e6e86e3321cbbf57661737d2e2a051"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "96d6e91365eb129015d3131580804cc1"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "cbd010a2fa2132356e2f7d6fdf4b960a"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "7bfaedbe860e750331086778679bf6b9"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "54f6a2fd66d77a1ab52e6ce5175019ae"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "c79346bd654829b1bf7d80196e8cf01f"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "07535828118977e11cbd2b4298b47f14"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "bef3fd64e8fa63ce90d72047f0083796"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "adecce761f545fc0845d3b9cc826129e"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "d6910dbed96e2ecfc154f5c0c2aa310c"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "cf0d781eca2fded28d0209a886e1eb08"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "3dc2d16dc039b1f56320a9df22f16581"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "2a2bd0733e69c5601f1c024dd996fd99"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "fdf109e3e7e2f47e9c3c3a3108e77f8d"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "c3fb6a2bbef3bef65f0de3e874d6983f"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "b181c75fff40d105349cfcb0c506e77a"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "2d360ae0d9c9c8223cec9eb18cb9786f"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "1a37472537c0cbfe6801e24f46cfc190"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "f44339fa8831f1ae291d75889790a299"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "cd9a648dd0dec0b0e9136902f6de812b"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "51e1aa0f03009b2bfcbb8d9bb849bd6c"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "e5a4d70b85ea3cf06b7915c79a646719"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "0e4b350f093ac0a837617247fed6dc2f"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "1ee9835517fb8bee48c6e197169cd6d6"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "b98161bdb554f839a28b00d825e59993"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "544ef8d1eba27f5c8f6d187c5fc590f2"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "881d90ae042864137e5d94e9075cdc8d"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "bc4e21fabca7332f78992636408b5524"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "522d460425f900c91105f393e401ca31"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "c63ac3990c86cb9d87678f51520a65fa"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "a4ad7d58eaec4caf244dacb995626e77"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "a0170a2a738fb5624a08fed1a8e2971d"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "a36a79e49defc0ea1b53d9d0beed47db"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "c076ac850844481bdd5fe9856b79d359"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "14f09542f320e4f087943d8ea8c8c4c0"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "f35092db7f3758a91a73764e552b3984"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "6ca4706f599547653bd806f571dae1a1"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "894a7b937398d5e5e507bba379078f23"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "1f57c7e7f7309e2a82317ca375629d63"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "0ecb91c73681ba9a0a30b8a360d2bf6e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "d56994c510b9ae735b89c8586b6d9733"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "e27119c112bfcfbaf5a53709b4717887"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "7302f76622ce170cda7d9ee0250a2b00"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "d4a0678795c8616b024ea5317dabdc88"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "ca25771e88ab44068d00b1b4a79d53cd"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "57c359a22b1d6b4b61f13c52e25cff29"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "1d6ac50a80a9f35abdd07f03692b209c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "2ba84988cc7494de6d85150af0db8e30"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "bc0478f3a346c7d193ad905e4eee6d07"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "08acf1c237c9797206a2e0c7ae6b7e1f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "627ad941841391f197ee9b9a896a5ce3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "eefffc8af26b659f7fd3e9d771395be9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "12b1dd15bed94c3f6b7e566f3abe4379"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "2e86e210578488d43f7b1549a01d8f20"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "aa5044aa587ab48838ab4723e76b5c02"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "2f38ee847a9641f91acb4769231d02da"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "781b2708cd98815c1f2412d8233b0c6f"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "13a58c9d2ff9e53b7aba8b4275d1152e"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "ad04c3f46eef90da60a3714cdea5b9aa"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "5beb1f107534518b552225fa59c7fc29"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "d951c1cd5f3fedbf5905e501bec0f112"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "9efad29e6996908da4ca1bd852e03db2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "08b0598608d52ee79f8c752bc58be882"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "6ccab49d19058d1bccab981e646c333f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "29381edad548471cf7b743744549052f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "40cf18fb8c532f39179b313047213f8f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "63cc21adb9dd72757350133e5e224a33"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "a6cfd33ed10bb1844bbf77fbe4964972"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "20111e2e0a5da85e8544e246c8857feb"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "81ad831e19b94771e9b639a3576ae55d"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "eade4cf701e45c85c2b17234bfeff5c8"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "bfeada5479620b8ce66bf1657d7291b0"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "37c49d4065b233ce1f4edfdc4ea22355"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4a80c18c2f106a2be5a3642c8874d68f"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "b1ba0d415cbc574102d6eb5ba0fb89a7"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "9aad3b41ccfc99e715af22b15576ba68"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e4e499b6611b0bb572eefea90ae6a21e"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "f04436fd7e4ba66d037b5191a64295cc"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "104c3ea9f51dfb3c8205eeee3b5560dd"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "1005ae1525ddf843a649880286fb06ef"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "b7938985b31b3cd99141b91bedee6b75"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "72c354c4c67fea979e2be549a350a18e"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "90e20a5ab0a807d0c1ebcb616876d494"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "b766f3e2fab01eb37eebd1061a19cbc2"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "d8eba899b7d7a5e493727ee748d80fff"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "d291774f4ace5f53c33ff67395d71fff"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "6e54076ceda892fda27a7bd0fc94f289"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "8338900f08f4d0f1e631e6842338aac7"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "bd411e8c99ec21e1ad7308fc462cc93b"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "2827a4e658d2b554559eb44394c6a577"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "cda9fcbba3572cfc6d2e631a5396a205"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "cee7fb95c359f021b8d6f10657a1f54e"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "81007ee58b035e4a9bb3e76a468d4ef3"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "d3f81b4470b10079dd1c50a7e60c13e0"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "973153ac8fda451a690eb3b1a2a4d81c"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "9b930a59df45e73db50b0db8981bc4aa"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "d33259d39aa790eaa222f3f1c8fe1e93"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "5f393d12c9a9449bcfc0668e0a9547cb"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "cc528ab3ad9ec91168853e5fa833a63b"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "ed42cce3d9ce26ff6ad6126232426cc6"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "2a4e19153a429c547d671afa3b9d5ae9"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "62a8fd8822f28b24a9c0557f36e35cdb"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "71410793f7656deb68a1b85623ec5bae"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "2a494be719afd0fb8328fcd479c3e7b6"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "28d5c0ca9d8e53ea07f919612afab366"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "fa6a6f624d977ff45ce672141773f8cf"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "c1b004ca5570c1d37f978c4d2de083af"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "605998628ff0a92e7cad0d922675ee56"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "5c3e1bc67fce513f65ee341fc046fffb"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "c388a409d5243c6a45cbf2166fde6b9f"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "17ef57e302fd3bee899f6032d54d13c2"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "bc0895b0d3f0a8a70cf02b7de698414d"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "76d0522777f8f96167612cb74d2c0945"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "453af6d61a8e41ebd16e4872ac1ba6f6"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "2bb24419bfa74c015350eaa95debc0f1"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "562f42930c287141e8ae90871af9bdaa"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "4ccb2c949601069b6526cab9d65a24d0"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "3420a9114ec1cbb48f76e50d28b13cf2"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "103b72f03e73e23381b1aa3c2d9c90ef"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "b44201b07f80341e187234a54d5aa5ac"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "b2d8b4dcfbeb78a60d8d199dd0c8651e"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "3026bf90e6e57d2e2d58046bf27d0793"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "e2856e1d28c0a8d50cd79d1c78cc3d14"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "28de48ace776a0e14cfd956f4117fb80"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "a347730c0cb7fc1d1ea64a7091bd1bf1"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "43338a31b0034ebde10c3b1c412929f8"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "d4349f7dc0bbf68a52d0e9661f7b4dc6"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "72fb2e495abaf01cd3314309646cf213"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "ef7cb4f333b44e55a3e9ebba600fa629"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "e695d09068e0e706399c628ed4ce33f5"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "fdb77e2762217a4d53a619344e5dd4a8"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "894993f0d0691dbf05bf464e5e794108"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "efe6fb231397f3d0ec51872a01e3a6d8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "ce9bdea82c06e473c56a15bb862c0dc9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "326dce031deaa05dce34fb240d4a4a51"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "0c71221e486c19ea2602d592c15f2a3a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ce4389ddeecc533d335b52676c8946ee"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "10dc8890c25fa3b0744acc1cc67c4028"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "2482bc1c7fa7a0d8ba6c61a4082d56ea"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "af33edb9bebce790498f80bfba52f347"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "25034d171b1baf68dca4006336d2c3a1"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "388fe240346599252c0bd59e66028caf"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "90c9ad943027d3dcc1fd533441c95b76"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "cab821fc5a9c2094e934533318522cde"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "78d2c66e68a76f5c3705c2bb9931100d"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "7cf14346fd1df05188b1c030ca2bf157"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "df3427daed073ed6d3de042653e56aeb"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "c38b5907ee437ce2dbf8cf32b13d8e18"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "4ec8726a5fa20cae732fd93f0796bc29"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "fa34ee6ff45cf7bba953b92175372566"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "82648125fcfa1db0c8e7090af4bc84b2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "1da7abe28f60b594faf30871d852f9fe"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "569e16ac242fe56652cdb02f97aa50bb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "719021fe0e9e781cfdcfdd09eda0baf3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "685717ea6ea9a0100e95a38b264cfe79"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "4327be08b1cee6d5585887ac4bb3fcfb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "6d6340a733179bae42573a51e5724f69"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "922e6b46d36ef8ba43765c65011b2656"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "bbac7b48caac5811f6ecad24cd2ca6ad"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "92df39cb299d50af6559071840f4a219"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "80cd994ade9683695dc162cd6d6eb193"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "999d24363b2faf13d8cf0a44d7706add"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "2fd1c31c8869c7a2a371197fe169b43b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "8458c750317c1f670c414e110f7ea88a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "8a3a06bf9f6be1be84c935041178ee17"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "87e37223978df1d9392b9adeea4a99a1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "69619999d34ba8dd893f0d337c8fb31d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "99b02658a5a821cec5cb1529d89642a3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "f9e8551b7fff72e0613751a6722df26e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "aa22ef70247dbcb80589a4654430be2b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "da916b7b1a570ccc628654c135bebd6d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3da92e17c9eb6224517d88e699271897"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "5822a786789126fb54e0dae524a8ef27"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "175a6a6f66a34097a29a8094d2a44955"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "afbeffa36be01d8da67536262cfe9a56"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ab505ca82c5c18416d4f2a482ce5c238"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "5c5ae1a4902751da6e37294de8a64531"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "a057535833e32de0d9141f548c6cfadd"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "82fb84afe2cd8b134152be7bbd4ebc84"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "786f5a77c97c80f780ae71aece13588c"
  },
  {
    "url": "categories/os/index.html",
    "revision": "183613f1c83a268f2bf83c5321c2bcce"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "3906e2b8d7e24fb3930fc3845f78df90"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "030975626def90641d793f1701544c28"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "cc96363be28bd758b17558cca7e5598d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "1e3a93bb6dd02dd21dbe9882dc05779c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "033b1f923d15798243d14f67b079726e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "fb7a39c44a4865ed4fa7d01c0961f2b6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "128f9057180a32def555006a11652cef"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "af20830e54e06ae5ca2f665861cd002e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "fa55b0b681951f749bf18566394681ad"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "384dc48614234c4847a28b1d6a2b1e47"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "ad1b83e30b1819ed784e00de25b3bfee"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "37a32b8693d6f7830a9c94e61ff55b35"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "41c68a11a1b1ad8654334d5493d6e928"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "697ca2b6a5cc64effe5158abd5f5a217"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "9c67063161c4833bfc1eefd32cb1fb75"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "110cdd9c2be97dda640440060374006d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "5042ac38147fd1fbb95a7218d1868a73"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "9323cd7b9f50c6acee87df058225fc88"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "e045aeb88a3ceca4c7ee2f278bf909c9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "f5e964d27ce40970cb9a5351c45175ed"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "b79c5e4b40f118aa74f501b35b50de85"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "c7812a46f4a38766a645a062c92f8170"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "5c68454efd7ca4cc4dbd7e0d77d94fb8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "b478a91d4140c582e2314f549950c226"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "731a5686526877c31f05c3f90697d46e"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "18debbead7be7dea1c13ebf25d7a653e"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "fab77c40540632d40e606f2537db3303"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "c76434fd70699537caf3c52a1a909898"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "3bd5a86c7d633db0e115c382a81b40b1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "dcea8672049011a117a774e30888525f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "684c81197269131d21b4ab986bd9524a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "73e60edf68cb1f4734dbba0e9337567b"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "c566be7fc84d23e1baa93bd4352976b3"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "9db4c5539ad133da71258b5cf321d614"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "b1a3ce50ddd488a43c0ade48ef665bb0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "2e3730972b580944d84f71fb252e8522"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "1adde7732846fa6a82ff8a9f82b74bfa"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "1ea74d7e0e791aaca8cf10b70ecc27fb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "10b7eeb8f0af4c1f0cc4ea5986c13c1e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "7cbf7fec929f863a11204a966a3f6ecb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "f7fe152a73959aff3f1e6cb8110199e4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "335971aff5fb4cb000a2cea7722f3278"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "c2495bc81fd044aad9c7a7aa8b6b1f6c"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "d5063b8edfd4d009e2ac094c88f07bac"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "9afcf53fce274cf8052ebc5926e9e316"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "7b056de92a342bbf5d914a639cb3c3a1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "fbce6228de9dbc7ed710d4c2d8001b77"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "ad7680f013993230a93880d17cbaa399"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "eab906f6f169dd69c6966b18be5e1573"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "e8569527ece1f1e649aadfd74cc35521"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "bd5ee0aa8bb93972d88daddd4dcf6283"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "53b2f7d06eb7f32f702d754665013f75"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "dc0fc97ac09b6078dfac10b5a2bfb11a"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "6af69b93b919402e4f8aec621b2302b3"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "4eafb16e631276799e76c762b4614227"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "bd192ce5fa5d57b714551d80c5e2f489"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "9f269683684a6915296516c4c33018e0"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "7be575ffebd5ea1013d5c747bb7c2661"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "a3c18b90548a897c481e6c853c4206eb"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f3682436c196634b8c244a7c8412c705"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "e2d3bd18ec2074fc78a0f56a2545a94f"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "affaed55e61015b33aab4a03a89c8dc5"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "c1d8c3d32b29e16c54db65a675f6c07c"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "a8921bbb092d0d080ee69391737067b7"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "d3c242dfe87ac216f1fe308633be4dac"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "e7c3b1d060e22610cd80d349692d6b13"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "f175f4e7b254f2cff69a8d3cdcd252be"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "ca93256e2daca6cb3f4308131e94400a"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "9e360dfcd4393ebd5feb722ef4c1cbf5"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "0190ded762aae675aaa4508da77f3b39"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "f3fa53a40ecf51401c057efda0fdbb43"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "e822317c75d44d8a1315b5f6b140bca6"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "c8cf04ebdae13ed17e4d1b2338fc51be"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "6f9cf3f51163a4349df383f951ba3474"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "a7688f1dea35dad38978c4bc4c61d383"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "fcbaa281556db6575e3f50d0df64953c"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "25aa7301f2c87e09fbcc5145f94dccf4"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "e507ec568f0d42ee2d5803ac997287ba"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "d984c6317c1a73967f6aef232d35e448"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "69b6bd1abc52b5513163d7b52276fbb2"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "5240f5a0c5f16adb91db920085eb2bf1"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "d3cdfdef7879817c7ac19a66182d9cee"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "f5b9decb996fb778b85399c7e5e68661"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "71cc20030387b8fcbe45ee0a5bbdac1b"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "2f31230591a9f515958e92e9ed206cb3"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "7be09d1f3a6889eda206542895930869"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "c354816f01f955ed6d14d57a26dc437f"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "b18cfdb67d07bef2a0e3ac96bd3e64d0"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "6959b2951e55db0e41ee26d0243bb14f"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "cb58d6531de0b5704a5d99759a6b5f6c"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "e33616c945ff4f5eb26165a3e4fa4b4f"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "b6ea5aa7e41f7b779be546539f8f9d25"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "5adffa281539e870083816153bd3b598"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "547be434072dc3475202fb633e83d168"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "5ba450dcae95f669ef862a6df1ab4d4a"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "d7a46c174a664cd5744be1e6a7f4b37b"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "5cc5ee0a05084bbe48012430f5d2bad7"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "755f55e1948186bcc30592366ad5d9fd"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "5aebec6394d4f3c8519e6fd9301e468e"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "a576c3577e7a8257c116f33cf0c6f61a"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "c66d10f00ed94498d3bc0168cc97ca76"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "21032ba52408f7a97ec6a1a69024f76f"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "108084ff28b579c7916f411eba7c603d"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "880d808a6aba2324534b45871f59d9c2"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "a3b01fa734ce4f7918cf82923ab4a128"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "a4384ffa3146106ca5a2c82850a43133"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "b7eb219a1f1f215381dcddba0b34b1f5"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "8fc8a34156619ca4d940a22bc251174f"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "ba5a1689e650860b505c076d9e620f91"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "660ffac77446330b6dec40aa04b221f2"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "ff4cf967692b2c83dd6c9ee6cf4168a1"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "20d4d1d8ca104b1b89e64e68ea5dafb1"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "d699baa23e300a5f4e06756dab9b83a3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "59a2b8f76b0c83335213bc0c1a231247"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "f0a0724e877f38709ba2b8985d127ab1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "893df3b4f5c30f61a0882a0e18091ba9"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "768ac3c55d39309816e18520558734a2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "07abc251cd70a23d03cb6211f1709e19"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "c8cf4acc4d1f2613ae501fc2074eeded"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "85786fc9d5638cc316c4ff6a09ac4cfd"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "d571fd98bc7c7138f58f0ce5b44e8eed"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "713dc6e647050fa478413ff3bf41eab8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "31cc75e80242d0ce0eb641d95bf0392a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "a7e7456d46db618e2f595e7346f76f59"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "dbfa3a02df46ce7ef3251fd3d82c9e7f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "bd3e8bd20eed16999cd9da473eef6b89"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "37032af8cd65ba05f70d531809bd1942"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "4714463938e939fa3201e494c794b0d4"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "cd7e9a34554e56e938279826841ec960"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "51f2fd49bb37f5b1c374d00353bf789c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "039aa22c01b06faa6c4f4c024ede8137"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1561b31f5a9cf6c25cd8ec4ed99f39c1"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "b1e4a06b98dc1142b4463cd3e6732821"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "74891f2d1f5a6ae548a33508431c3301"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "6054dec335be95d08db42b9bbead0945"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "3b2da9dc1212a741c7229bde9e686c70"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "89ce3af32f695aa714ffa7f185fd9154"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "bf86989f8e4e48b952bd185bcbac4bf9"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "6733f57d78fd47e92a7c3986fc0422f6"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "a7fce4e4eeea57574f1e78bf90dbe726"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "7e3743cb0f86d9dfd40a7742527ea47a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "e4ea1f602911c4e68f5780a78ff3d5c6"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "bc3be5a166b4a7822ab63b0792a09c78"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "ba56c6cf351bb2ab109566292dae4f37"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "bfe814e7a71beeefc162158bedf7f358"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "27c14c4a3dd6a34d0084fe7835fb76d2"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "407c5fc9326ea090a42b00b7508029a8"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "6f433068c32bc79a39c2aad2765c9f68"
  },
  {
    "url": "categories/php/index.html",
    "revision": "66f8513f360ef800e1e820b863512360"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "e772e1bfdd3153293aa73672a9329bdc"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "ffc0f47f5f4c64c6fd6366f87d94aab5"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "d6bcea553d8c176ed12da33c72c0a52b"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "5bc1f0ad185e9ec5c529561cbfa8b3f9"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "b3710d4dfe2841143b136c61378f94bf"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "b2b4e4cc02bcfb1fa428f9d09adf63fc"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "e328620404b879550c92b4baee2515d1"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "7827a653b6595be81299a832e55b2dde"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "b5f2a1875c7182791ff630f777e23e5e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "df7f167ce309d4ab29f54c4691b987ab"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "906ba185a803f36c95027400519e754c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b4a343b40bb9e5faa0b89e554577f3e2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "021e71eea83d4b9ceaaba70371801172"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a222f9dc630daafaaa09a608ef5a2381"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ed5fcb33c75f81a5e040dea3f8578251"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "44c195b277a72e2edc828125b241ce8a"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "38cad25957b922ededcd4cd7004ff4c9"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "3fb6784f42935b1d7ec3f518238c02ca"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "aa279889ab9cdf5375a3cf90bca3c50b"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "52f57e98c3156a21782aa6207ac71f84"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "16fbe70ce65d96d27ff8fee35acba1b5"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "11a74c5b1c6769f57dd7adea5329002f"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "7d3102b0e7b7ba8b2ab52e60d4e6576a"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "1dcfcb3605774fa42a31ce8df289104d"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "b67158ee131a9b10596152817f1f59a1"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "8e49c809afc0f95edd85c7217634ffe7"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "683a0ac8a457591363db37e2c2badcf0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "152d0833a1154a3a3b6beff09866e010"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "77336d430abc5f9f2c22e04d3be8052f"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "1da5f324935554b5b14dcb6bc034f92a"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "9ff0df297afdc8b6bb3c1d8aa891ef76"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "25cc740e9d3c56c14c53bace1cbb6cc3"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "a23f2f5a0c5308f882d7fa0e4ccecadf"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "d8136d69dbe93d8b608b2bb441b172dc"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "96dfa65ca4c3864a4494fb96b796d3f9"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "45352402fe36f4d1483ba5b3ea7f08c6"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "215cbb89765415319af8ae0ac8c61864"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "49ed5c40aa359c33789812cf8d3d4b25"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "74e02dbc9f29cf1c8cfc70e6c24c36cc"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "57280fbe90ad9e488a6c56b8291e4015"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "48b4930512eb9b316e2690011f198262"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "fd3cb15314677ffe8b0d91ec9dfccf57"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "5efc347f0c119efeeff94e4c8d31b8bd"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "6a61e12d87ffa34f1ade6d8c7bfa05f2"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "b9828eb23cdbaee9a6cf114a9fcd4146"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "6996c0040a24605d15bffde4f1932f0e"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "fc2ef884fd87941d755f14609333cecf"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "7dddf5da3e5edf61aa9b62b61f58357f"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "bc7573869c77fc50508bd1f02fa903fe"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "58183cc202fe4c21b59c0f7015997f25"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "028f3d0bed2d3585bfc5124b06b69276"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "8fd4e19868e8ff280b6cb62f86b5fd21"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7d2496d16f3878d195ed8c5008caeb2c"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "03430bf5c6e74fac1c5dbf3c3e8719e2"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "d2636c03386113b56bfecfd3927da5e2"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "f59ea5a210d117a45183885d53d04290"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "190cdfb5ed2fe5b0925f835580d1e30e"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "a429638ff1dd91a7da9548ae15b9c800"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "03dea1259b056c0b74735a58b459ca44"
  },
  {
    "url": "categories/python/index.html",
    "revision": "3b938715976a04e2a4ef65a747550223"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "f35fc22f376c12c5f29f8a1403303105"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "f68366a7daabf4ecdcb40e4b3001bb18"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0ce5ddec8e1cfbab67f9dd3a7de5e4ff"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "80d258eff283686251b2c40368595b36"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "bbf042aa0c3d1fb0b2663753707f3fda"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "75eba58644b0d0f73d22f8173abae707"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "69aab510834f08a1f92cdbc33ea40b3c"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "db8f712860daff3a4b3c110a83840558"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "9758206a4f26786f1e5eb7f63c74e2c8"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "8fbd608fcd8773865da2e321b7aca5a7"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "36525152f72b49b667de705e7e59afb5"
  },
  {
    "url": "categories/system/index.html",
    "revision": "af897884338c7cffb0780538afb89eb3"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "7bdab21cee5bae3216e26f5658eee6ba"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "277a3641be9c448fa90c5965e3c1914e"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "18d1d06affe87539b78be16f1d80205c"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "370e116859bffd7b57e77cd7bc1ed30a"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "5ab76bc2c3ba3d7f92e33d2988728295"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "e56b3fa10d697e33f81f323e0ee688ed"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "5bc42d0162d10f0094d7bb1337c4aacc"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "005edf928b975eefc9da487097a6b9e4"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "3a4d79c4e5640ec4ea9bcb4d2348abe9"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "5932d5878344c683316ee9b6cd40d910"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "40824adb53baf4276480b2965b74452c"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "0ad7fa52ec513738d8d334497339c759"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "02c00d299c101aceb31374aec8abc293"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "358da90459f23680453369de69192865"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "7a3e2cddef996a063d5461fe5b925238"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "74fb1a746cf7767605b769f6b007be74"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "c2dcefbd3b44b889f97336a27f3a3d95"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "f50cffd088cbae53499316b24c3101a5"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "8a0162ae0bc5f5c423623406d8060086"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "4516a2017a7c2b16cf05ac5b1575f617"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "6d5a21b80570469971848a1d26b3a00a"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "bdffadb5799c4da187920e4fcec16789"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "ef8222e69fc8008c9187865d0f0278e3"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "e7f216fe980df976c5d62a37c1d52a8f"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "f9cc5c8bad003480a5a49e0a4cc692b7"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "55f3451bc7d65da7e6b22a160e018cd0"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "e05b336eaa4e19a443bcce8caaaeb1c4"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "6f9178f945db2d83a21e197b791166e7"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "8210db73a02882c119af39e694094505"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "c0c98e20caa7baf08214cda77134f5e0"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "9de908d506c22d2fd78bbcf702e45cbd"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "4422f8e07e27eef2a01930efcc6a0f84"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "ba77fa29bd2764e3a9f1c9d1f0e7764d"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "0dfccc6cb8b77064ebf22ecfa37e94c7"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "abcccbc0b294b379ee0cae6dd746b7a3"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "e55d8d1fe27f67dc300c17f140c93259"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "7a311871fb6afe40f20bf42a10ad15b4"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "50145a6ee458baa0bca29f6827629e36"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "50e18f5e6bfcbd6f96b979a9af22eef3"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "38c2871ac90e8df247cfa3a000713bab"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "604be60d395604436553a29ee2cb7dcf"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "e552773562f4cd394e0bb16a23a31b0c"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "57388c5875b327fe4ed6bc77c4171907"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f880b57cb97f0fb1355e7d36892afd44"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "3edb3d09ca226f0ff0f62d40cb0ffdbc"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "3e597c65b7954fde4271968c036aec3e"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "a33f1b44175069759bc92e02d0e45268"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "414deb9aee6f7dac53b50816c8b2a0fa"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "dfafeeb264c1c0ee4e409e0141ab4f5b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "6cdb26f9e87971a79f24b70101187467"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "7f3495bee822ca0fe196441b5b89cdd9"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "956e4dbc715ab03d8fc6bcf56ee92447"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "9b51913d7c043f92f8304c3a60f842c2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "f627d76dec57461de1b5feed00edb80d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "cde8785e7f731fd0e62b821412366d09"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "5dab5ad977e8db8d3fc9b0d335ce4073"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "88035e2717656746ec444f4848f84c76"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "dc8aedaa502a5aaa0da3cea2c4d1d8cc"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "2bf278e5103940d6f403f3b09b096856"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "ec1fb079b3c55c7ed2c731ff71f04a72"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "fcd1db2d76ceb0a276c9460672355cb8"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "b28800d107a522585f1422df5655ae78"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "27dfbe413d41a7ce88018e2eeff587c3"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "da48fd7fa48fe041007f0ebe5d27498d"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "de2efd317a09dd5903640eac2196b174"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "c83ff357bff2bb4a0c2caa9464caee34"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "00e40d8fea3046d929418012c6ed74f2"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "44e4de998b083cad8dadc075d74bd851"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "563344b0a2c25accf9b2322a302c956f"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "a859fa438b220cb6f937fc614fe68d48"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "80faa996c38e525c7bc88498aa40eb3b"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "1bff3989da5f0fb303d4d33de05948fd"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "c1d552418d0208dabca1f823d67d3053"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "923d0a0dfc0ca9922e307c5de96815b9"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6afb8e7fa2c7a243cf9971accc4fb46f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "2885e1227f1d41ce630766d6d0e33563"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "4f981dc0b4182b987084e0d48f5b554a"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "5aa3b367070a8204e24cab0b1ff76119"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "3cd3853a8fd0936f88b3eeeda7103e51"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "5e5d58a820fc680c6dd6dd6ca5477de2"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "d3760f792e87cad5cd3cb98bfbf31c45"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "69f250ace5a7f51e99ee88ba42b9976b"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "4412c87db95438031e2f6141c8e30ec8"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "382ae0f4c46c45893f3b7457c9f47fc0"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "171b1381ca28f13b63f933a61930853b"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "b320b7fcea4d14dac22052246cbe21fd"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "c8f26c706a0d452c36cd4c83752a18c2"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "e5db9bdc10b24b6f94c64a7cdeff93dc"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "fecd0039ae5b0c5ced8fce688b69ec63"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "a552599067b5f41385d9d1d6807497c6"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "48e547cf80a3c595d4bddd66d440923a"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "69d5f2b58557659b34d3da2c669ddade"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "856bf07676c1d3db5bfb682ac55f9c6d"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "0e4225797fa675ce363661d184fd2867"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "eccaaa7fa8018e8b8e8c27bb367d2988"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "042257b972940104ab481670cc77fc91"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "7a417bb6268365605b75528cc81accf1"
  },
  {
    "url": "favorite/index.html",
    "revision": "dad9ba3ac15055e338e8e20efe96da5b"
  },
  {
    "url": "index.html",
    "revision": "38048c0318024d4ccd4325854b4b5770"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "b01464154d95ee658824c579889197a4"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "708e973a5dab14b76566639b86722b6c"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "db22e7e08ed01eb14f9c5f3575f3ac5a"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b04115ac2ae51f567610266ba22e4efd"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "784211eda468026eb54241a9137203bb"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "a5a11d686a2bf10695e215e2083a7140"
  },
  {
    "url": "note/index.html",
    "revision": "6358c6d983aebb856d286627d3112f95"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "e1099b2fa283b4c88c59cf5576b586f0"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e4c3b169304e8b43890d92d76bd39289"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "8906d79c77ff9c5a7a45b5772368d612"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "b7b97770316c7d5c780adb47884a1455"
  },
  {
    "url": "share/index.html",
    "revision": "0f5a1e0344d08a3742aa1d1f8c4ac259"
  },
  {
    "url": "single/about_me.html",
    "revision": "61aa9a5c55b63426a96755781b60025a"
  },
  {
    "url": "single/all_article.html",
    "revision": "d5b2043cbe5490031c9a02793e5e7b6d"
  },
  {
    "url": "single/welcome.html",
    "revision": "212acf1c7333f96d1d288ef1821421fc"
  },
  {
    "url": "test/index.html",
    "revision": "cad5d32716fa8831fdf3bd551144c421"
  },
  {
    "url": "test/test.html",
    "revision": "78d669a78907e7f5d10fb18fe4477123"
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
