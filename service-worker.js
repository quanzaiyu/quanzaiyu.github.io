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
    "revision": "17bd3d1d33a6d5a1f01719bf6a7d95ea"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "1ebfdf6136b2cf2b9e6cb2f13f0039f7"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "bcf4cf16b91581092d5be121a32b365a"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "c3ffe34da38e46ebf15e5215c721366c"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "0419051baff4951f33ff712bc26ff32f"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "710cc3a9065e38fe50c004ed461e0423"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "208bef804ef7793e9b1209a36995826b"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "3759647c79625cb3bfada546d6f9ec0f"
  },
  {
    "url": "articles/index.html",
    "revision": "961f5fcf5bc6a3d442e2d1b2097ccf54"
  },
  {
    "url": "assets/css/0.styles.d5495972.css",
    "revision": "bcb66b13c944e9726091dd63ad5fada7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.639bdc9a.js",
    "revision": "a477a1ff569252af77d1a7f03ceb9584"
  },
  {
    "url": "assets/js/10.e19b7469.js",
    "revision": "c1cdec6236121983029b51e2b37938cf"
  },
  {
    "url": "assets/js/11.a3ae743e.js",
    "revision": "532c6ec03a21943bad077130362c827b"
  },
  {
    "url": "assets/js/12.08b75db7.js",
    "revision": "f188b0f158c17bf4c55198c3cf7e1d4e"
  },
  {
    "url": "assets/js/13.f397ae57.js",
    "revision": "bf90243408c31226acb915308e7562f0"
  },
  {
    "url": "assets/js/14.0c1734d9.js",
    "revision": "e0357926e6e9a17a866d8c50946a7fb1"
  },
  {
    "url": "assets/js/15.4852bcec.js",
    "revision": "2cb5bf581003c30178aea771ca46069e"
  },
  {
    "url": "assets/js/2.86f54203.js",
    "revision": "bbffab4b093ab2826bef77e5c98e428d"
  },
  {
    "url": "assets/js/5.cd8054ad.js",
    "revision": "4fdbe4c5df44e620ad14aa70a2e4e3a1"
  },
  {
    "url": "assets/js/6.dd8cde6a.js",
    "revision": "73a55f50b44d35001bca2d7f0155b406"
  },
  {
    "url": "assets/js/7.49c395e1.js",
    "revision": "26df2df7f57c3f11d74997a820d78859"
  },
  {
    "url": "assets/js/8.0f4aa4da.js",
    "revision": "e2ee0e017afc80a5dda16c7524b27fe3"
  },
  {
    "url": "assets/js/9.73250f91.js",
    "revision": "0d3a56dd5c03432421cbc0569918c3a8"
  },
  {
    "url": "assets/js/vendors~docsearch.0fcdbc6c.js",
    "revision": "b76e2b686ed2bd2baec8c69a09088eb2"
  },
  {
    "url": "blog/index.html",
    "revision": "6caeedf2b060bf572665d36ea9199f86"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "afbafde22bf46517384afd291fce3e8b"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "ec02981afea82e33f44c2d566c05dee7"
  },
  {
    "url": "books/index.html",
    "revision": "3e06de5806f5a6581b6c2a7976526a53"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "fdacbdd2378f906cf2a3c1158cf9c8f6"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "ea1fc379655579e0697a0c8d737a0f87"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "5d952a2fde86ce812431c2cb44c8e124"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "12bf7ec20ebef2057c345c9075abbd67"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "1504389e1f5ed29f6274d9b37d4e053e"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "009a63db1e69e0f5ec50d3c264f4f479"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "2fb5caa8f8e1b55b99e8409e4ed813a3"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7108c1b9b11e819ac47afeecd8637d90"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "792579dccf1bf77e09d82b22d1d8c294"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "c5fd79874660f2ebbc7cd9616fe77d04"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "01375aacb38e4aecb36cea7ec4caaaf7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "2396cdb47f99cbb2f17be52b26a21aab"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "834bf7e87047515bacbbe0facb7a28a4"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "99ace149ba4c8e77d2da3fc6e8ce1d43"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "48b67667bf917fa31552a2aafa97ed36"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "1a14366d817aaa27c73a57a693344e01"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "666b039271966bde07edcd611b695208"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "9a8350f55ea5ce5b74c4ff748f8c2eaa"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "e3d62e9b1ae678138f9e4b83292a1a1a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a5999e76ff29abdf8686414006fed9b7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "e6aec020fca52c508df8caf71410e9f5"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "210e9e3d8534369ae96dac9f3e856ff2"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "aa95ac36ccaf1061aac771c83d38acb9"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "127ed528e04a6e98b6ce9b4ffaf8ebaa"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "bf13e7b2dc6eaa89c60c1d8e9af3d0a2"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "a826ec6b6834a22b331a0282ae769a9f"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "8b253fabf8c8d5299219564e7793c691"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "b40bd2e1e8252b12b5bf719df4c43f45"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "8c6d388483b3423d65e04d6760e57bc1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "f119d020f89fcbccd86f0243c2a899c9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "6917fbe37da2bde07e4ca2d1c422b385"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "6a676f47f600c72c06a07d9c73a135b2"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "beb37171c786d50636ea74266e390166"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "172bc8d35240a054717604d9e8ca098c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "b573a47e467f2450b3122f75053da442"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "c9056b6624e31f2e82d1bcec76340e41"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "39487c3b8f334e1faf5e6867af9d1a12"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "793726a7e05bdb9fd2b246891fbdbb42"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "92df6bda320ba64cad0164e060033762"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "f4e96e59dea74e6390b784419cf6bb08"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "f410041a37ffb65a06c376b6e7b08d2f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "fd49d42689b7fcb4082df2c7d160d3ed"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "b6bac3d3114e44b9ed27cb75bf25cb65"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "2fd1180194ed1b6fc57812e8b02bbb73"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "bf68089e7b0d2a2d02c8e4ec30bdcbd8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "0cd8029adbc63bd004901763115ecdb2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "ea4f44d7c2e4f666e2136a56f19e9ec8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "f52a9af71188d2645f1f52d0fa8d190a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "17e46483a3ee70a88cfe81ab05680331"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "c2889a0066255cede61cc7341b2c91d1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "7a1bb12329e4ea7cc0fe0c7c74a048dc"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "82596494533a7cec7e29e0f5aa865f54"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "3306b399b79577525cdd6175a7822b32"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "7aea2736da2d8a5b3aac72d9901d78bb"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "ec4d0595019b429c8174e7231b2269a1"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "f4cb1f4e3bf85a8d5a704ed084f670d1"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "9083d6c4dc87a9da9b77a05a80836f4d"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "ff8fac21b2680a98d0bbecf83e97ce71"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "8716d7a3325e18dcbf7e3d09fac36d3a"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "33f8c96defa74b9d4f2543aab2d4a077"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "b10c9cc6977fbd6ace8e52c756d7399e"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "34e6ff8de3f0a64b6cb7327b6ffc48bf"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "4d788fafd74a3e1acbadf271e49ee13f"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "ea09b7db66799a64a51f21e6898e0e96"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "48328df466c76d173699dd3303530497"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "4010168f94796b5000e746386a6d442b"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "8779a61b7620892eb697552ef3e9c77a"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "303a0c4d455f5ab95592ac07525bb98e"
  },
  {
    "url": "categories/database/index.html",
    "revision": "632216aaa99a9196af8f995915fcc72e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "d31220543fa795de82dfbd62ef4180b5"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "d00ad020f3e970763d15846ce1b63da7"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "91042b1892f956610408d01b0dd18c58"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "605bd3850afb218142cb75ab489c62d1"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "8baffb435976a9c1fced19f428ac6284"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "f86f5eba550ad6a4c8d23138ed946ee8"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e04758e9f910c9e66d830e787b6c4f48"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "4e713f689deeb1dba79ba0d95fe7455c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "6e01793473e753f27d4d3cb5a0977d59"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "98379083e75f81744a00af1f2968f3fd"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "db1eae695896e13e7e14cb2288dee5b6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "0d202cb1cd97e4071776898d8432f58d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "e86282dcb77b03f3e3836a7cee04616f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "68409637ef9eba2125cdeb89fed0a622"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "42eec24330503e6126a93c3f4d5a5043"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "797e4994d8b7ad3145854e8c9ca99d0d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "b459ce6cb743503cac201f017c223e19"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "1e4d36632f52bc5fa0074f7a140a252a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "89b702bf7eae04075ba3aa472175240a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "2a7cfa378242f6db6022dd5dcf3882e7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "6a96c0422f9862eb916a5747c8fc1bb6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "680d13ec876e8ea7ee86aaf719dd8f8a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "fc4c53a50badebd870a06637d255aa23"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "99a7c90f83eedef43772dc03d31ea3cf"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "b9128de238cb6437b4dea05e86e8b125"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "4bfec0273e3134dfde72ba4ad94f3faf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "7f3af60872549aa6fe71552fda963447"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "d88e8362c3bbfc7e880b9d1e6b6bea64"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "ed075804e02ffa24ae9c4614bd8e73df"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "df2981813a1607a9ec9adf9b74887d10"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "cdde096a1ccb9d4ae3a931cc55235155"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "32a01d7ac54339e542c0b44197203063"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "9e09456b3b93ebc4ffe8974e5fce288d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "919dd587823f597b9a4d80d532fc3d24"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "046b15814681b813d10940c197a7dc91"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "4c15b0479ddf516b743500a0a37859fe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "785613dd78ff8186b13e6089d47909a4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "bf588db32e4b780778441eeadd2ffa91"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "a39b381b75424e58afea7bf3f94bbca4"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "01ac749b301ab00d7bfd16b6e1ea3bf3"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "cfcd4708ced5271c406e9a8aa08fdbfd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "bb0bdc3e9c1ba67b3cc1d09181399b5b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "6b392027d7598cde3a019a5dc91d9655"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "983389b8aadee1829406ff99c2105d5d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "d125e2af2b56f838d3ee486de55da138"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "f95847130b2ae303aaf5ab389c3fd2bf"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "a08cf9d7d6d277ad01a4738e87ce018c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "513fb6293d113b21e6354977ebd7afbf"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "f5679622dbcb73c5fcd9d9640a03e817"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "c754ee112c97f41442d10a5d390177db"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "a3a2d8ecf9a39dff017032270342718b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f52605a9defc8d3cafb16f9059b9a054"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a522ff610bbbb1ffbd2250681517775e"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c1c9c236d6c24a2c0cc9b809e47a2794"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "74379da75de56b8576d3c5377c5a133d"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "28b752a12209d9dac22fc508a77dcd65"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "15f0ea7e9d590b3820902e089bbe531e"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "380e7fbd2bfa8ea59142334791c22f4f"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "c7e9960acaa0e18f4e7b541ccb52b045"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "f8d1954b806673a4f145ab0be828bc50"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "934333e69788471ae66a717e5f70b075"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "b800b4dfe1900070af44c4825527be39"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "b8c3f87e3aae500aa0813d97cf0d3a74"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "8bbe525bdb16ccf5af8825e8fa9304b2"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a48834251fa96508ac48a02fc0d27013"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "8b2881658407c7b7cf4734d2200da946"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "678a050c58033c7df8ab549cc5b968e6"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "29b1ad880e7fbc491de7e39b4fb26b78"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "914ddbf97f06ee06d8f15d643cc8d2d0"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3f955cf420f0cdb3522f5c07718eca2b"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "d6cf88f9596dc236a2a13f9714dea7ac"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "4ba0a4ff759ba7ff0889f6456816fc97"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "ff75839541219823cff1976b9a508c12"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "2118309c6f535f21d0288a061cb2b7d5"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "83ccaa0a814a6fc713214f7429de8518"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "5a437f89858131c7296ec718a519b631"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "23b8744db01ad442952729e5177a1dae"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "c14702885be50325e38b17704f9eaa38"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "0f9d4ffcca0b7c8839036827b2538158"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "6188e7c7362f53a0dcc2dac0b16dc4aa"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "c58f1fbff2c6a56ae3bb4fb3019129f2"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "ac91c5f97acc89caa0410d0c993ce1f4"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "6b484a1ba5e7b00325d463319eb25401"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "8f21ab00433088e708619dd65a4bc38c"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "ede5fa729717fb496feeccab5404fb0f"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "cc89e56b2e4865e952bab7adc48b3db5"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "7a889eb5a4bddbdb73056cbf7f1faf18"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "cc2880a8c5c7c17059935c492cb3e671"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "8b7118ab26652d2b97b5f95c5bd79dae"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "fcb178104ee8da3367c43693b2058bfb"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "5e232d9ab25e38b1bf62faf7991d0830"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "d91efe8ffdeacf0a43f10a2406c99c69"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "16bd0a65f0812a8850f4d85d17730303"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "5fa1b4cd92fa45e76bb8e11aa750c147"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "3a4e1e406a96cba3748d3ef3481b7b16"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "f2eb96f37374057ba6c63f79c5ce2c01"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "56ffeb14ac01847adea323a6d2a37e46"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "51294781ae46ab25eb8d9a78ab50c17b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "de736c90475c84f36f568c91687d6b88"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "ba3834af566559808ee88076e80dcbab"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "fb5bb85504b1c8ed913360e2b4319fda"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "c80898102bb92f1006c783eb2c86df79"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "17366da2fb0182271f9b1d465cdcdf1c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "46e3d04e78024ed091deb47dbb1c39d1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "254d8e10694ff1f694561c89842061e0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "07b18ecd732b044e03a4fa432239bf25"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "5b6236ac04020d667addaffed30092f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "2880d3cdc121da7e56981b4c364b3a9c"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "b660b04cfbabd28424f658ece37f136d"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "738d86f50c58fbbd6c9eb7c2d7a638e6"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "6a793a35b62e439f45f3ff197a3b3faa"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "d23b68ac3d443a375e97e90a85e5a51a"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "a914f4c8470365840d5b59a46c760408"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "a5e28e6d2e32f7906feec7b89fe8ce6a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "2411e495d8d5d8add9a47b11ad0332dc"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "629237dad368735576472c60d4a8e398"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "cc9c0c0d2f60e9986fb1cf254c9cb417"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "6f00d99e97ad5d79df16a7a33b102ca7"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "373cdc746d832cab622a891c834a9ccf"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e0319a9e16108a84c79b34a7701ecd1e"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "1421f7ecefcc032d4de797e47a9620e7"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "87562c823a737cb265b038f6b4e1bf63"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "130a291fd26dbbb1a5d515f1c25b20db"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "1acab5fa17aa16d25d15ebaeb51ccf0b"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a890469aea1cb416c6279df09dd96b0d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "38cf3f091085a70282441b76d9f1acc2"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "295f8187aae9ff634ae690a3a6b7c71b"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "970710fa3b79354d131091a3eb77e69a"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "6a13aaad78e6916edd3be5e5774e1433"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "95b43675740a40bc39ba4df4f7b76ba1"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "9b087841958ae4783a707624aa310740"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "63150459f60b670202315a22bb732035"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "34478105a7c68d38595d3595668f9978"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "d0f950c5027afdcd4be3293f4d440155"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "def75fddf5c0ff0aea1c095407a853ec"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "160ee1e886d34b545905031229bdd2d0"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "7aaf7933afb57a065f00d2c38bbec6dc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "5cecd922c40a816a6aa3d3d83a12efb0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "e5cd905a74f9e428d5a26299371d72e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "194cb05cb327760e797d22548cebb17e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "9714b9192751a82d117671debf3ae728"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "138c535468c395bab6797208950e11c3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "16ff08ef7db394dee6dff52dcad2f553"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "6a478881b3157fd922c92684243271d3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "2f0f08e9da6c2f20b3179617387714f2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "16400761734b5f0ded272eee4aa06c47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "08e2f870a8ce8d536f9c55d03d6ebc57"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "90ebb417905a914c0a99a46301b63663"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "8712816cb5b939b04fad5b0a0ab26186"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "8c995b1c133d8728081b2f28b29eb2ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "812fd806388d50becb29368986386422"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "dd7566af11aa375cad06281d0ba00bdf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "27ad0d9ead42166f77d593db352421cd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "9457d9ad57dd449837eb144d28139cdd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "ba86864645eaf4fb79ad6c907f83d1e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "f8529d397edc64c13ce59e25d2318d00"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "bca094374c5e9b46783252d148257bcc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "7b9f6c3fa89d5d2f6d02cc382ae525e4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "82e91e7cbe0ce4149bd99e6c94bfa73c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "d7cbd891f61a6ac01ca7dc29e4e3e46c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "1b161dc32037c9135e23ebd200d65938"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "896da5164a3f7bec58b62ef5f5c35962"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "93768eb5c70701c416fd7bdaf549e9b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "d3f1484f44d970c217adb6bfed218ace"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "632a2c61e778c60878a1e439c8ec4a5a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "69b59f2619238697725913f67ce9861d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "1774b80d2c135df8d2a877934db0970c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "d3d17581587f2d38875f13dfdc133a70"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "c0b3dc8f034cb72d6146e5cd114e726d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "50129c4e47916bd2bb0b47bef2a6c88e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "94c739f73f8dd29a1079639d64ad6af7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "1238caf9723fe04576d2d1c4274f4d54"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "714146128adf5c584d79ce5a1dde63aa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "0f4e3f15bfa4eea2e750d64877a10be5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "bee081fd419d900f2e494cac992ec0ca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "7326c5e7e4d7d292325c8be43b4652f2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "332bb05c0c42ef6ea48b80f32d43cc5f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "1c526d844fb5570a1018ff8a36a7dc6e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "22eb43a4cc3f89c7d6e491d6c477554f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "0d5ae328d88efd9398f6140131025b32"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "a180f1a08244f9f8398aecc90865c1eb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "96ffdc5d959e8f87f9925f310c9806ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "227603ac4acac540643c116a615a2689"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "1ee5ef16040c9d8dc4327566d93d09bc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "34e4f7f97b47f1f99632a617ba847fa0"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "0c23a7f3afed9ac41ca0645e4f3d42f7"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "5dfce34e1c64c97e3e0af94b353f8e8d"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "cd81a411a5ba8b38957b75fdffb13679"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "e5d8dd5c926761caef25c4fcfb4667ba"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "bc44479af352ea027f381a624c20f83f"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "56253c13579786ac1f9514223ddd31c4"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "c5a0122449a53cc6599fb3c649504f34"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "c8abb9ca8bc6f531b3e876ce0af854aa"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "b8b1e6015ef216f3d3e8ccc389dc4ebe"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "b3ef7cf36039a1768b06745367056388"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "b84b1e22d14b5a1f604492d205618604"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "a3412b4797062481a73c083aa44cd2c4"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "13a9862c128e035ad25f4786eace93ae"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "412f70e454de191dfb4fb245fffd23de"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "64ab41ff0e94ac1ea9932eb19f1101fa"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "d4676cabac26a7b98a651f49f3422e05"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "c882b0f07229f65b38b88de8a54460b4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "2f161479a85f7c82a1b51c0183239995"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "d26cc02676fa6be601b1e1fa85364432"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "0825a732e9a2ebc6faa57860f841f4bb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "173a82cfca32390205b52d031e7a5ec3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "2f1f84a65d619a87fab24561baa5b352"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "ac234c9b374aebbd80c941271a9052c9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "67dd63b2a1881561ad320d00b3bf3d62"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "31f422a887f46ca5d0ab255f3559c016"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "96f1e3e79e3348462d7c6664901e7024"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "2b8996b1d2f2a83e1114930bed9766b1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "a3f1c58a16beb765dd023bd5142a5f04"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "435c9d30f20244bb66af9b1f6fff6d47"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "b9810f3bd5b71a6b07c29e5261ddb71d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "aacc639aa671a09390b2fec53c1ce85c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "9e34e364cb74bfa396ac68777cf47152"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "93b377bd0bddf1dc4d755d91146ba5ad"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "1486a9488f0eae4b0b2fe5106d0c5164"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "763ff99b33c0e45984aabe2854e52d90"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "db4479ec4211053215e0363440f99b81"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "8fc05c5547a400e121e91b5ea2c4e336"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "c20cc7006940f869efb8ee815bde5824"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8d04140e328ff75e8f09498da9c4adb8"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "fe7e12d19863940c9bd2e5ff794dbaa4"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "9b3152f853169c449c0668ae6d0d2b5c"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "955a400fba20dc0146f087e6352fe37c"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "272ff0077daa6175687338e9f41bad63"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "179ae55751482dc8c595a75c1372e9d6"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "fb1746db8ef6ef12d270d34c505e56c0"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "663e909e0ea7b5dddae7685fdb43e3a3"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "f738d916af301008965e49aea748cfc4"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "b16d70a50e1643949cecd88342056004"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "5d0363656dbde0ec4a681db586805c7e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "6080fa183bc63b72092983cb694448a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "7b1534778b9ce22d2639254596e79d99"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "d9dff9c84908a1b940f0e2a1b30346f3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "db0e678a5e4079d9f0dee9539c779b5d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "1936d5afe749d4c6fff033d2661fd776"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "8023ba353b206231dd62cf1806d0d615"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "f27f61055e5ba28c749da086a1001864"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "cca1c9e542398e22c48b7d4bfa28f471"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "d1f58092e25502c0e4a6a061c5235df6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "f531b96605a1175e7708ace5cc14bbc4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "6582877e0c49e32be7111d800c820de7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "72b02646bd54262b3e29979a07267fe3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "dfbfd237a14220b1b1d1b2f6dc78eb1d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "9b2812ddb6abdc280ff3b42a2ef7890c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "9679f0466a14eb9f6795f96be173da2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "2d0cc56b8527cd578628a71e3b45d464"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "ddb795dc68f0a72cd6b937f608f36c20"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "81df0720e457b6bb9ce109c62968de4f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "f7921d504e497f7545d788fdfe23136f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "6882c4e998181554d841af7f0be038f9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "9af57e1097d7996b06249d79730e7e0d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "63fce3a40ef2beaac10366d1903458de"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "6d0c32e37e3ef8b094f28ff6df30382e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "83611573d7950dbfe1cdcbbd20e03ebb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "e16034116d3818ac1780d1af1005bafd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "bb78f3307c3ec02e951367dfb15925d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "e47163aaca45ddb7c99edf088d6d07af"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "d1bb3cbb210ded1be8d713d62d4b3dcc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "33d5d0126309d3cc4a7f5dc0ec908dbd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "f1aade9e15cb2b294043e3d10d1f2f89"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "4748cacc38016a8fb5c549e05dec8e01"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "0f5db1d7baabf279ee1e9624b2ff5ca3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "ca88f1e460f7ed08cc2d31c24b8b2f57"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "1c889ba3639b5540ff4888e7ab78cb61"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "201ea0e7f50c423f75271d1481977e7b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "62e54b018add03180c1c398a378f7b07"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "54b949c03c86536e7aa90c8e8bad9435"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "305dbfec6d756e1b15d5bad18d350c10"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "a09e01ae01ea7fb025d00bb39637ae19"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "8d83cd73227762d158ee782157b14ebb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "ec003fc3967df065578fdc22cb7655f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "ba0bdfadfeed5c0de6a872d03f307a17"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "32ca134bc1cbf607feafddcffe61f482"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "92b8c134e27c86941a35a2ba19373303"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "4db405ee94634629dfa92f7f00843fe2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "cd8c7cf5f5c077b825929a5f6e9b7e6f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "888a4caaa8ee3bff59b7c260b7bbe081"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "583d02c0e7b876a5cd099b4d43686217"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "d4c90940fd4f616be32607eef9c9ad6d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "43fd2471b9e815f86572e339648c4125"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "5eec9b74d2486c4f46672bfbe1b8f756"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "fc45340f7c43706707bf69b4a792dc48"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "a0e8489d7308cb11804401d62c54497d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "a5f27ead0eda191316501b552f2f5e81"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "816d16931c18623c97588ad0ab5fa6ea"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "85b6bb748bd1dfd17ee9e0cff327fbb2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "8778e059eaf16913ce6eaa7d0dc0d2bf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "58dc494d352d0cbf9165170debe41249"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "d6672d58ed9a0a87c1e95df3e3676e3c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "f69017469ee8c06feebf6bddc2c66c5b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "0c0d59937692a2b7b59ba83f6f0b4724"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "900441ace93f872d784fe42d6236675b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "6f50582f0112ef57d0f0edb744e11cb2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "7d9a0c4dcf355cab236b3f6ebb64424d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "525a89786e9b2ad2bbcb83deff0912de"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "7d117247608955c1dc9403754abba3c2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "58cfc3d1ee4b26ea6f67faf5292a7a50"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "b365d13aface80c1427f3d6cea043d2b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "a264e8c717b2a8d5276ca600eee08674"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "54344a9631309daa9e8081bb20eb6bec"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "7f5fb6863d1d006128c8bab3c58c1add"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "11daa8da075abdd967293b81f737c352"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "71f292a689992eb648901bfddeb189b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "ee67ef0b3fd4d99c4e12e8b8d806cb70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "4c7a60950e033529f34789dece1c3233"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "8119fee1b30adef1dfa7616c39144b3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "48daf66bef3012aeb774abd1a506d639"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "0a93a185976becd4b0c99b7c81edbb87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "87ad371003b1d0d51eb7af1fee1d207b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "42c5775e554140536df5e35157758ff5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "340041e0e261c59eeafcc403a4b61866"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "a306cdb3d89b10b9bf77411d02d8659a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "0290f2d8b1660a16b9f281fcecd40457"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "843d4ad9bad240131b555b77df653bdc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "25d18ef203cd98438e15aeef5ee4e8f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "f2f82dbedea7c93bdf8ed3427ba757f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "4d5147767f105ce120eb66b18d89d96e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "cd25e916c28651a69312b14352b27474"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "93599731848796c704e05d01b10ea729"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "4127a9bda8e01c9b87c1dadf1533a615"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c1db939976876ed7989af3e1f21c4cd3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "ef3a5207858f8bd01c825d0e30d51e89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "5919af7bf4fb4145fed97e2ea351a88d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "24251edd3e0c995c54a0fdb2c920fcad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "b7cf1d4f9903812e512615c0f34fb79f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "e03f9d4bc37359bba80836aa1279c140"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "dae77c58825f0f3c816488da740ad651"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "05542004cb4ef7189237095343e84825"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "c79027d76334648d028bab3ee97234bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "061778cb417abc8ef057b6d12c31a3cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "96d1241e9a8c904b34c2fd27f70e43d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "b199d692cf4d59fa7dc06609a7dcf24f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "e58c508a4a0d4fc13056d93ddeecd439"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "4ae5ecff2f6fa32930202219e803a8c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "e3e7cf1d1bc366637ef141ee1aa995fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "88dd0cbba4b6e3f7001adea41cd373f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "c0e1126338129675d1714182c08655d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "b66dde71fdc5982873755012227c8433"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b997ee884583fcec1b867703deda6fb4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "b150b21e1636ab3ebb4af094c7cf8f9c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "af36c048989014e52923f24f40a2e6d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "4e7055b71b25a82ceaa5fc2812cc948d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "6a75f5766c6eac51e1bb497d1d2108cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "6fe304910f55782498dd9a76620a74b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "977b356fcea104d8d83bf232da027c9d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "d116e4d67534de7bfb31df08e6ca92fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "0a6a9d83033d5ddfee9a6fe2b4dbbacc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "fa035872646346c3499cc3ce71c0c22a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "015b8cf9915970708fdb72cd5f9ff867"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "b831df882b957d3852f85929261651b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "d692e9c70916ef1bbf7156e9f240440f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "e91fd40904ff9d337c9a6baabe30e3ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "8ee08d42e37b95c423d7a68b47f121c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "bdd0f48c2ef69a1718cf21f85fbd642a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "09190473e5f21575cb8b4f597aac1320"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "07e449936a7217d3370bb4c4651f2606"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "19acaf4027527a84aeee6f9ae5231d34"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "65b6d38b4ae034857e7b6a5ef8c976d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "26cbe5afc3f1efab3f9483819c7b9e83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "ca7afb47ded9274fbe733c6e7e67b5f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "244eda5a1e4e8fd6cd09ab8dbdb8b8f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "cb6bff7d3c2ea68e742db96c5cd8e683"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "9028fad7451f73764ae96adcb15f9afc"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "558ff698442f535035649130f75bde8e"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "4bb1aeb962e164f273f859298ae90a49"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "5e23cd136b83968cda8ee296a03b9deb"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "f3861daa4695f27beb5e5f74116e5ba0"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "f622f548d4da6f37cbf80c8288dadc5f"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "e0e0ea0e7c36f8b7f3980bcefaf4e2b2"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "abbb7d22230ef5561fb1c00e578ac60c"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "e37ce77beb3db3f3373f858f09ab33f3"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d75d56eef939cbedda2cce2d2b5b2e67"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "40142427878d661a3bf58d0a5ca20c70"
  },
  {
    "url": "categories/index.html",
    "revision": "f2ba248cb44180375b401d5b2b9ebefe"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "2384a47420b01ab3103064489fc2911f"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "348e3ac4eed92f2d04c6fd4b6fc10ffd"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "c9624c1a3c05c47bd2e05307c94aa666"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "e484701702cff0a66f6df9dfedbcadea"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "6f34131942fee065d5f87846825dd50e"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "6b7b76573855cf39e8044fb1807da173"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "6913b4b109451d2f739f1f8efc3c2b41"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "0d9214deacab54d9d94b3589aeb54cec"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "1d6a6594a8b03b76b0bcfde474abc366"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "21b6cfacf8ba93b3d23e94c79e7ef2ed"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "d5a49f02395fd554353439d5128868bc"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "0496e2a6a56097a9fbd9b49269c54389"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "1110d3d10927c7f10bc28a2cc4ad2374"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "715aa08e4fdad7216838edccc8fac33a"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "773cd7395cb17810b1ef6558e9b67a72"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "553c42f4cfb6788358231547ffebd1e7"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "5d9081d34b82b4026c870474346b8448"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "dc834c0abbfd096ca3a4d61b0725c800"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "f5dbf06f284e59d635e54ddc968509d8"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "a43b2b632a2ff4e3b18b9b09f441c03a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "801a5d2a9a56c124542a6ee74f08742f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "1b58d46b2a4cd735ebc39bb1e3645bde"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "e217aa07b3e7dd15ea10794b788edb9f"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "fd879c058ef15436b13fbd1a9ceae0b9"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "2a3386ddc5cd21b76c5d6df46b0fdebd"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "421a3dca87e17aeb4ef139e3677fa9da"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "ea81b0776dcdf38d5c93e49fe18ae837"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "2410b86593d8846cb9bf525284a62420"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "6af96dd2f3b16cc62dfee8194f029ad2"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "af408d16f64a283829296754982a8b91"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "a13ade0308c78f128aebf3ab7b8e285a"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "7af2fc4f8ce2e5e2ba6dbc1063098f16"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "d52b949b0ce2b262a2677372e69e9152"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "4b6a85184e836607c3d70e46b0f33088"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "f3b394c4e8b5a330b985718491f2891d"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "a0de0d7d083971008ca7b4d711d6ff3a"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "6946c7d529d9e28d14a4a3723e49f2e9"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "08999716aeb2ea1826744b60596f0ae8"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "a73c081961a87dcb140cc23c689f16c0"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e3214623bda93ce0d699560027219b7f"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "21d59c0cabc4c33b0c454b025ca3f988"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "50475022419dd295a00870b0b07ecaff"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "e39442e6dd81a7bea69eb5ddc8cfec0c"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "1daed098f928825ad20613860939426a"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "a3f5625dd44ef6cb5b740bc8769ff6fe"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "c650bcd60326a18704fd95546865d604"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "cfd1e4b245e75cc63eabd3ce01826c4c"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "f7f4e72cfe95a9eaa490f34025f5d046"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "02e9ebe5e045f570a71aa95437942232"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "4738b67a24ab47b459ef5fe8948c1123"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "54739c3f845ed417c48fc0144dcbfd93"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "bc4b2d1800d93e5655e73be009aee2c4"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "a92384dcb8a6073aab725eb37612d0b7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "9d94074ca79dfa36159830f839f104af"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "1c9bee475a802ed5661b2327afb2555d"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "0689df1d735760d7e88d21e7bd7b7212"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "84c96ac2b71bda1b204c0416ff2868da"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "367c4e1b228985ed2284855d81622098"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "9ea43a9318eafba05a2f7d7c7bbf4041"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "a73ae0be104380b9823657147aa9035b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "22a2085479d716280ce30fc843eebccb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "1a530caaa4623c24cea40f7ae46dd963"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "9bbae0f4902fbc1738b0cf2bf9fb8125"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "e07bc9afc9b5c4d380448793315e76e0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "221475c0cfd2469b51fd01df8484f6c0"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "373e35bce2281de7477461e50bb2d459"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "f5e56e9cddf8dd4eecea65f10bcde7de"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "470298794173b4de1866b59ffbb77a9f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "c0b8944cf090fc1334246879c65767a2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "583222d00482da7f14a22f0246c37b03"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "6db7f8ac7cbfbd241aef7bbf9d769f98"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "b3ccf2e402794042ecf060fe36e3799d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "a66c097aed60dcb7cf0d739905980768"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "72a50f568ac81beeb65e4f1d25acb09e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "2275f546a52ce6f56ce0764f796c513d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "4877bebee5ac1bd76290b4ef6d2eb3f2"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "0b9cb13f44ac120ccce3047da81225c2"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "f1ce377751d41e9fce0422bc2a4aaf5b"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "4f522ea4355a379fb4ac234e4436805b"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "0aa7cfef2406830edb186b8f87119b75"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "0251f7697a36c56bc4313f00987970bf"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "34bd87c38b93fb3bd171b6a377faf74c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "ee967e71772b42fba52adcc0d931e28a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "65a732e740c37e3f902bc579aa9269f2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "bb1f5057198c9f067a436a2184b2a616"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "233c7773a3deb4e34671f95db35753be"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "0f60f8005e38a3fc55ed6f7a1278f322"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "1ed382af7507ec4458a65e15ed2850f4"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "8de0b62ebc63c77e2417ed309cdca971"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "5c913390488b700e2ae240d0abb9b726"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "a0de8a2059d6ab34e430af86fabd5b45"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "0871618115ef1643e15aad7aee5f11f2"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "e2c90fff9737e03fdf89800db7fbb99d"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d9b4b0415f807730138b3f11632b5df2"
  },
  {
    "url": "categories/java/index.html",
    "revision": "8817b5409b03de6b266f2ccf38684108"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "edae822a01c1aa2d1ed9607b0007339e"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "d235763922d1a006a155dcbead7c6a53"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "1687125b9fbfcca3ff116e00964187c4"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "bebe92e20ffaf39fd228166ce9c728b0"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "503457a056ad10a8e9abfb86804b1922"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "7e232026abd4dec86be0ec38c9d22ffc"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "d4f494beafde58fc8f5384a48532a046"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "926875035e200b18104b3118cf99c84d"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "04abf6bb4ba3d4dd958efed1f37f7202"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "8c815f1dac8dc2142adda9840a82cb14"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "11bc26fa075933f4a4250a60647ec27b"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "1a20ff5708738d1c80761774f6ea8fe6"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "083f12de4a1189bba26c76d3e3e198f7"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "fccfa94b90903a23094fccc24e6b3714"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "9cec69819afe0b0c16e602ec5441988f"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "bcf39a68e228aac9ede1f4bea82b50f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "932da75e9d1aa8f8b90f137eb4a3f371"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "29d8f613f08d168a3ddc479372c53d1a"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "0f3d962e75f8f89e4fefe11ca3e30623"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "fdabf84bd7e2a8f5f35291f3c35befeb"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c7d971c041c1a54f6749f815fdaa9dee"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "2ebc2164133220d89cb9c2a69956d296"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "e8a3596eb1c10454f11bb5e31837f76d"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "57cb22d07973df232f80d2608a0c3154"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "8d3893b4f287583788715fbb64a1a177"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "56da2a606dc10204c76173ff77964341"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "524f13b52ba9618f5449eeb7e1a25e86"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "4cfa10167cbe0ed7ba4aeaa2590d3651"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "129c0ba966130073ac8ee1f80dae0ab0"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "5e6668c2a6992fba69ced8c7bc494ce3"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "eb96c9aaf3ad19910359a6e868c8a6a2"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "3453dbdd7bd02212068312bc031a3bf3"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "97c25822c19821e4f5fbdfa38f168202"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "fade0268c2f4c2cc96675bbbc6df5064"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "716d1c46ef1c07af41d39fceb0689774"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "1e01a26e82e45ab6bebcfa3e5eaff724"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "10d76581da0e839fe13665da2b8659dd"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "9e657949682f8e3c43742864bcc52daf"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "a5169efd04006656f02ede927d0730f3"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "f2ef90fb4c7e048c9c18fe0f135288fc"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "4bb93f43bfc90866cb6db9bf8f2923a1"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "f11f9c1dd5e40e76de87e17f971ffaf7"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b3de5965eaf5c9c07092874481ca0c40"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "43c4557ef5e919950f9bef38bb897900"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e165ba34aca54da34a1f957cc53e119c"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "ab5d33c75f3e64eb9642496c76606d48"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "e15c59551a50ef2b53054976306f2a9b"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "63da91cab38afbedcfe07d90a37f2d3c"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "d11fe39ffeb2783bf6b78ee85a8ad1ce"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "49972f984d9c44bed3cea47ebb62dbf8"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "eb7020e055d2a8d8289af7098adda907"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "753cd1414c1721ba92fe82a686301532"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "69efd03d92fc217a99674bc6a09c1ba5"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "5879ceed5eea120d5b01e5329b6e1aa7"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "fcb97805b6fa10c2804d2cee20aaa9c4"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "4ccb6caef6d370476d42822eb3e060d6"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "ef1789d87c78969b55e4a8569e7ea067"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "3a8314accf434a9aa5e2e7ce8b5e8cd8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "dd47936dc123f1e85051f8a16e481a3b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "2e95deeec36c2fc6e4dca59c23eb31d0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "c80a98222b34afb8add0c9e7483f59f8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "c5e7b0b88d36761cc4ea947c7bd21973"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ea9e477c837ecb2c8429e8cc416c189d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "d1906fa7714cca2f953c51e8c443a0f5"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "6be553baaed9ddfb420ae52a953d1df4"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c3e87db00270b31b5c04a70409dbb627"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "6c5bc2570c488ff2f981a9feefe9e6b7"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "27753025578b32b02411bdb3668672f5"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "7078cda535d15388e2a89cba74be3f61"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "56589b6f43c91ec900167e042fcdc7b4"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "a1f33a9d0cbeb273879f55482ff68635"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "efc9c5e4d9a1745eabbd01613b628fcc"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "e8ea268ee6cd64095dd514564c5563c2"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "c0d71828bcdf0092beb7652a0b791b25"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "e1fd4849d828725168b98d5b364fb6ff"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "4dd5fca59cc87a9fec0033ddbb96ca32"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "2406812c6d5bbb96d5a863565c1030c1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "de4589643efea54881847f4901d4c7c3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "9129147df04463f5ce5addad65c7f9d6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9cd5d08eb2203399001ff706be357f05"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "fd01398cffe7cd6caa4e91e05ebc74ec"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "6b784a47643b085a31cee71b4d6b2c86"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "0288e2a0d348bc3665b20fb3967800bf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "1ed9fb275c392c9c37f26e098344247b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "339f4affe7e56f3dadbb99cfddb282da"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "9304ee028ad00ee7ce342960f02475ee"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "4eb081eaf7f41cfa9c53eda2b3459a08"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "58399f32aaaf098e21c0c9499430a044"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "60de904fb6923815869dcfe54b5b3c67"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "bba5b364d95e50c9820b7473b8e78dc7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "457dac2c0e4c119b4e7a5c8908210dd4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "345a13612c2cde963fc49579bf541d0c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "a60a8190b062cd95d8d5b19231c9b3a7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "bb4df7fe2300bf67e2001b1d661c3a3f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "b0a4713018de086959c08e71ae239c19"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "fa9855c959179073000ccf73f6d4177c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "ea8811061b2dbb3880fdd038ad6230ed"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "4c74042655e4a4cfd5a5522797b89ad7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "1b7d609d9953a94830cbf542e74677bc"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "5499e32fa72cb68b79dead124b4a5341"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "46a8fa67cc5a937fa97af24f7b80bdd9"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "0c769d527fbcbfe3b3d76ba13cf43764"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "1add570ccfc00e9a7496fa9df20562d3"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "122d46b15085da1c7d29807b3a19c4f5"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "9d065bf3df946bd5041b45200a6fda4a"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "8fcc03c727ffde021cfa911324b8941c"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d58f2983f4b4b873228b991ff4184832"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "ff1bf12006f8b05224669e2efe8483b7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "847de07aa556e8dc7baa93d773399c6a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "ab27a31ec66df317af9ee0eab8ad89a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "c95f8bca68eea53a02de3ebe682de41e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "ce3f099004f6a0349cfd281c6b560685"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "c353e9bb872403d2b6820aa10f2f52d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "31b576092d36fffb442ab83ce7938730"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "33740ddf2544920bf5126682c02d483a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "b9c37dd62e2f78b81010284b1420d860"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "d17ce2078dbf78989922f26c0492d626"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "b3ba63cd46d8c19f1e39d98ef38a05a4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "e09596caa6ed3faaf22d939c6f83ff3b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "a68b41af3d3a67268bf57f72e22ad877"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "c3cd5f125d54cebe317cd375e36bee78"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "a462c81748484ac7671e851e5aa10ded"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "2b4aae289dc4ef2d0cd8beef4816bbaa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "9ab15354d335d6243085c24a04caae47"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "dac1f26c7f61c2b663738e49a36eb6a4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "48ca30e517fcd4b965b574685779d78f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "2e305f1e704c091d88a34dabb5b170b7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "f60b3f6d09fe47111683e14b36741121"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "b5456ff9856077db2d2f1f21b7901510"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "678e0c01833697c2372bb50517bb2282"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "6af0a5f6da809ee6a04a3583b5dade3f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "97629f4f9ba6d42431bc34b2a873acad"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "ab8a5138ea6cd77438801f9d4186b4e1"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "2c9316e41648cf61bf51e1b33dce5f16"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "0f482e921997d8891d6561f460cae383"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "75381a0b0690b16d4bbe597bfd7f642f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "1f38eadb4127bc962507070cc3c97a7a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "53a05294e9a06a5263de9223d13c6d41"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "4dfa71473963c07920f6ca3171c59338"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "1afa00dd6b792001c9e0d1f43ff9fed1"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "9eed0dbecda7c678a4660786ef70b6d2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "9faf7ecdbe71348e6f9f0c3a5140f7fa"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "4d7a5f805cc7b72d8663bcedfa86c886"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "32f0282159816611ca1ef7cbb1164677"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "6c3aefe9904918d616282f4c223f312d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "891e781aa60055a9fe21cd5cbc56bea4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "59fe2a8cb33149995faaa9249c331148"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "5ec46cc46227074b609d70aeaeaefb09"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "88e07cf3b31145d706412343db42a5b3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "c075751b8c1f6ad6a8f64a94a310f858"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "001a20a6fd65b9c4cf040752dc7a281b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "4ea7050ed447459a48767902dfe1e1f5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "e00099c457fe43fb3c854f73bc180183"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5b9c321681ed05a5890de1541c03d66c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "4e3a80a23b152753415e90553f16c01e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "1efb81c95c6bd51eb666aece06864380"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "b38ddaaec2de31111f5c926dd6acf9c9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "2d217e941de19d25f787985b86f83565"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "a0b468a526f9f7200a44eac54fe1ad55"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "5194df6abb6444466c348e539fa781d1"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "375bcf0be649bb6af6a6274d9795ba08"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "5ad12375f07900f7db6ab82d6b426f5b"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "e1d7de794f60ab2ed36c4f23b7720cb5"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "283a574df3ee24c2da1284cb42f8c534"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "fc432354914fe2252130c2050198cba7"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "1fdebb6de36a25d5db81a012803a008f"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "cbbc3c7935aa59401f853fc0caaea26a"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "3d480b38dc0ed2aa69f6dc62d334418c"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "afe896ad3c4e4c648511757aeef6b265"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "74e4ea426cff7b9499dc7ea86549c458"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "46567ef73219f45f1c036169523b58da"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "c54356167cc3ddd328ebad63dcf8104f"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "fcd179d7b0f90e6bcb40c56cd1035b98"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "99a458f3496c610089e8bfd43fef8eb4"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "fe67fbbc8613e412c9a9fe9f3c2de1b3"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "35be53c2a29c91574e1385fb167c3412"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "e619750955322113b185087f05a9a4c0"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "8299b00215a94c22303d0a3679bbd4e0"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "a10afb30c6b3e134221fe117abe5b322"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "5038a22f2de6518a044ebb0fc0a47569"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "71d5fe7356000c1438c96800883179d2"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "215dc58f2e1b8d2899879efe1cb2341b"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "a8d7af0ac02f350cba0a59a594b251ca"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "fcd22a3e7e63024db6a3195d561bc7dd"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "6e34375684fe8bb649f65cb24b7fc828"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "29a11adf8b1a26ae7a733c700db1c2b5"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "312d1434c769ca8ece32d698815d320d"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "27fd66257390cf94e46a0028e5828a94"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "e14138180af24de718acc3849edc1812"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "07ae865cdca51b10dd275057139bbc63"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "d3e0e1175d628fa696af87c8ce14068d"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "35dd48fbb2a6067901cd57a1bbbcc57f"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "bbd3658ddbffe24101a27edf5d8071c3"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "b8a4ef9a86e45f08d46e9f82da9a1ce0"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "7b8acdcc61e8dbf7f20f7d50853c2f92"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "79e352ce259cd98f1a82d51c8786a0a4"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "1b5317e058a9ec2d3a16c3aeb883258b"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "7312c18e0d7e9fa84ae1881ff230026a"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "a5233ec1c042adbbd3befd2777132d20"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "16dfc66c0f394d4a49ed7e70b69f03cd"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "96d7a35a537b585ce1c3b90e9897b6a8"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "e2ece6ab5128497a016573738aa37b13"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "736aaedefa54a86baa8149884dd95920"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "103b02fe6c917babb51669f3baa9c20b"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "0fae9309456a4154d8e5242cbbd72663"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "3a141d4c1668a3bed8433f0c3db3508e"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "4711122252e7702b6463d02d390f3177"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "b8ef7cd82f9176d91c40e6384f022694"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "961e3d1173f546589b780e99b0aa3744"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1000c775e67e83f18166c672b75b4620"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "4442560c5a5e0daff042d6f78a22c31c"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "c970df614786af552512076043dd3eba"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "be1c58a34162df60a9e8f01b023d07eb"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "6d34e6f993cad3e82fb5eed18586c04b"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "7e5b7975dd47cafdf9ad1a7172a9eedd"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "407bfe371f77e5051c4ca2d801f5843f"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "22cc557e70f557c4d3aa264a57755a85"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "398f978e766873a8b622f01bd09beeab"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "a5fcce8081cd097c0f73b9f15cf98b70"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "f595afd64f67c8ac510cf7f62f7e2b69"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "b81d79f0eb50ff6be967a555d123b5d4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "c2b79b4da525aafe1ec99649c5561966"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "608d024d7263604e690b00eca94b3521"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "44d9d0135778b40560e826b7ca60c1ed"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "318e5face764ee0d1582f7e1e1b7801f"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "a3d09bb3dc18c8bb0dd72d8342ed2650"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8496c76c60590ccd793c5b91849f4ab2"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f925cdb69c7785e0c9859be306dd4b6b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "3423cc114c0443894a488cfbcb3e8cd4"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "b2cf9d3d997eb3d6178059fad9dabdcd"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "b5ee7c2e8810ce3e992253eacb442216"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "b18bf972c84f45b0a9d469562e8e6c52"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "bcac7971faa6e7f8b2c2e262cf89e3ab"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "03bcfc903f21b50ee15c4d1e72a0fddf"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "d2affb53c848ff3477da08ce7f13d28e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "4e27409307feabdbec02b140c17dbee1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "cd70c6d88733a1fbb5eaa7ce6aae6fb7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "be482e0c48facb6f8625cfb2477cdf7b"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "cb2993473df74dab60a12d64cf7301d9"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "5316f1e68bb1b7e325bd81ee32bff07b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "9f2d2670538b0ca4c175b872282c26b6"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "17a3003502328a758153ba467bf1cc90"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "2f4e861d71267ff9b783dc159ecbde6e"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "a0f00f51e9cb8be9944ad993b19cb0ef"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "48d8003143b570474bd0e23f2d64589a"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "45895d549787a91bb12be27ee16cd65d"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "ab5626eb322d355ea5b4abd54c5aafdf"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "df029189d43b916af1336678eaef4e68"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "a42a53213a8e20e4a4a79dcc21c64733"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "e1bb8500d2899ff0bf515cf8a2c446fc"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "68c3a260ed73daa146cdf421edd7ae1b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "347a8283caf7b7de3688111beb6fadac"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "1c9182ec098a033417a18508e228f911"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "67aea6bd218fa2f620dabdf0275546ef"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "c2c78911132707dad1c6510472cb7f39"
  },
  {
    "url": "categories/php/index.html",
    "revision": "24439553ef44bc4fc2ef3637cad566cd"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "c87e56c1ce80227ed36b8e5185952df9"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "dd1a76c82bc64e4fbc4c184b0392a259"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "091375ecd3224d255ecc5b70abac0e1e"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7d1824700babec9141e2d4ae00508aa9"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4c96dd626a8591d5f431ad3d87e3b3f3"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d7799feda5510fe473ef3b03a51e5a67"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "21dcbdb8d9f7dbee728b00a4dca13340"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "24ee5cb2f3c7fe86d878faf0eb64261a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "59bde346aa437035c1e424c84166130d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "3a4689ba28ca4123418c2e90b1c80064"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "cd56c0b7dbae5956c38c4df5e890894f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "b5e85a47041c3fa9e2edd0251cd8d9db"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "597a3577faf34c5ddc6dfb701cfb6e06"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "366e9a2f113f0a120991eb9ab1cf92b1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "dc8efa497bc3a505814aa974264478f5"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "c557b30e6888f76a20fa834758d836cb"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "9d2c787b3df233770efc268351d19e1e"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "85ced6419f8bd687fd1589cf9225135b"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "40dc9233bf6be7742641a44707a91ebd"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "689d17d4bb66821102378937e3c44393"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e25fea6634e5cf4d95b88cb8d01c4aff"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "6d2293baa52dadf930bd8eeaebfa9d68"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "2393cfce2b7389c084470c650f0948a0"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "c14c845b1ebafd19f4b0fcbd0348f25a"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "4864526450e556738d688a366e5dc17f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "c8a0a7efc735f21092b7d8bef56487c2"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "81fd5f3e048fdb2441942d2c8a30be0c"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "63ce54ee3029905d184471d68c9e0289"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "774e228388f4a00418e9f00773eba4c6"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "c17499f79af45abecae77b1b7345e805"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "926e56e68763e6b867e053f4551e2516"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "5fef64787a2322f9f8e0a1b4ff015350"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "c1db156135bca2379472f9a33008c1b7"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "5ea6347be7c26949c020b744ffa9ca1f"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "536a3c2f0988ee7873bca4c4c7d4631b"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "4ddd135b605543ee43d4b29b64751426"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "b09363e86ff2491038c146f64789bf9f"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "5b672d81b240cbbfd1030effcc164e7f"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "54fbd5277e3fe305293a9768d66b1d60"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "9a9d7ab8db074a8ad398bf750556bee4"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "b89653c9d46d040cfb8169b50d3e91f2"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "c1c56427c4541a2fae15d954097b7f63"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "2330008d798bb8540be377c47c7f422e"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "dc2e3a1570a4db30fffb2c5b32dfb87b"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "19c63cbf1f34b65752d0e136fa1bff1f"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "d0062d189edc63edb7923e390e889f8b"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "2300dec37ab73b6464c096a92b4c8668"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "2a6bc2e79912767765ec5c60333f479b"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "b2afd2e93e8fa61ff637264428a0004f"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "5354bbbe188e43e7432d51d2e850eee1"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4868df3691eba2cc34e1ee6344324bf5"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "636b392046db7e46c3042bce58a56011"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "e6c73195381ba8ad40ef7bf90ca1e5de"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "ff2540854cefa910e9bfc639b290f11a"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "841bfcd7b2a0a8ea2600fb5f706d3eb1"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "c708bbf684fcd5ba3051531a6b431e66"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "7515cc4b21e23a7901ac880f63634cee"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "1a9e88159a05cf0953478de67cf2e9dd"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "3b431c46af03597e54a0273c6a533928"
  },
  {
    "url": "categories/python/index.html",
    "revision": "ea689221f45f5880e130dae00f03dcb0"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "d8e3a799f58e8152dbcc83e76b9e3693"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "87e11d4e3faee0dbf5f646ad0699c11a"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "e59f8f5e7a8f83b21faa5a48ee3faa45"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "92751cbcad853df1b862708ae4036e29"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "ca04bc40a47329fb74d600660f5b27c7"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "6a5abbca73183e185fd69ca7a164ca98"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "bbb22e93788b7fc29c4032fa9bd4b313"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "a57714123a51370a941be8bef91f2af7"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "212e465d932763efaa8f4df2f906dc4d"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "ddfa27b98245c0991d74f08e9ab42891"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "aa2251506ec238f869830d05ff3b5d1a"
  },
  {
    "url": "categories/system/index.html",
    "revision": "b980d15d366682679e20dee1cdb1bcfb"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a1898910092d819b49e12d72075d5cfb"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "81ed5db083c0477d7039a10670adb92a"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "4dad9a891064bee3914dad7783b7526b"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "62b9ad1bf1227bbfed09b3d4f56f1e36"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "d41f91e6a4269e9b0deeb6e165322e9f"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "c8ce2c2e3ea8af8eaf3659de1c4d30ee"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "d4dcf944abeeeb61b7c77f0e81e4fde8"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "04a29adc500264838c181591da9f06f3"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "d838cad3dee183a0420279169f67e0a6"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "5ee261b70ee6a0e5180290fa1fe7971c"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "58ce3f4e2f6f1cae234078f85b940ce4"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "b0743eea76a9b135021a902b89a9e16b"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "a4cdad88448c2732cc88275f0138eaec"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "5d5b0a8f73aae4c076429ee630de1c14"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ea1e80aadc38f11667ddbe6e8f9b0274"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "c02848bad27a5d148ddc7e1439e27a32"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "e4a9bf9a0421a3731ebabff622fdce69"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "75ac2d13a077ab8027456df69f2dee66"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "17c2cacf1407d87c9f170440d167f153"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "74739a1ffa398d480af4a7afeec37ac1"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "85f406135dc90f659dadb879e5b0cd1a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "6a3922937839487badb86aaf2b4f3155"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "8a9737ccd49fe89d302eeb9d86c73ef6"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "cc30b9b58d41f90d0196f48a046910d9"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "edd6f2b7f7b0a98eb1bbdbe5a8adf59e"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "3eb18dd3e5b445c1bea2fb02e3812f37"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "449e8b91760ec7ff609542d5d126e8ac"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "6d5ca1112fba71357a6cdcf8c71d9466"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "142c1156310b0a4dd454356997dcad1d"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "b72ce9b269aa596667e9676e51c0c13d"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d53262eb47089c7162b3af7ba1f72507"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "20ec9a5df787c87ef7353263642c79fd"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "06e15a03e0eba04b1c642ad9f6b41381"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "8923fe76fa1a62f6b613b8f70d6974a5"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "6662b2e98abe6385f462cd1a7f247e9f"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "8f0a03d9fe0776d3e6e0716b88ddc5b9"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "165c5418f066f7b629fc764f209f4319"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "f2718932b76c8d909bf9c6dee21722f2"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "71cd66602fbe01257e381107cf666e22"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "266812afeb1fcfdb55bea845bb0bb24c"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "3b15bc1bffb384ee66e13c5f01e343f7"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "235a23f40cab797129d7630ee4bfa79f"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "7d775c8aaf125ef60b665b0189fca11e"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "01988cbf116334058c36c2d7082a7a94"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "6a21df7c19bccd909492d77334762b14"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "d17a20102dc64872040f14f74a399dd4"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "7af1f78b85ff1dfc6c573c650ed3927c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "199af76bba4c56a055e340192859a8e1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "20b3c966920829379b22d2b00176084e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "ed79f19534ad6e8fe68f0cc23395bdeb"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "601be296f2716a2f161706a89380031c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "9b9eae5a007cb7a806d4e5460a4483d7"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "e01c4795fc70b3d24fde87333d9814e0"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "7219f65bd5149c6605bdea55e89ab284"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "b32674af904bfb6f6dd0337e6253bf10"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "9c7c87c110c6436802e65e25b0ae953d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "3fa2d061af289fcaa0a3a3d74a442686"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "5dda2bce217db62c22d7d628c80d8584"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "067fb2b8690813ede00fae42f3a06911"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "3f911203e56cd9f5525f03e1cca015f4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "0408edeb32f10645927050130bdb90ee"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "9e6d2fa0cb202107a69412e06941155d"
  },
  {
    "url": "favorite/index.html",
    "revision": "c77e2ab1d9959c607c233bea4ff570e8"
  },
  {
    "url": "index.html",
    "revision": "cae4e1ad3ac68b73d9f8b2c6fb5d2b91"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "556f2c29fc9bfb1b23667602bc5310d2"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4993e9413a721c6f4790596a2198e293"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "95b8fe0e8eb8ce4146b1a6175afacc96"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "5f9f5936845a4d0b89dec6f7f62aad18"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "2a9fc721911fd8b1e30e2abaa41a0d76"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "f403586eaaa630cf8dc5ff5060e245c4"
  },
  {
    "url": "note/index.html",
    "revision": "3677846cf233406d75f9e4513b817c58"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "a628ce38a1a4e61201ef2b0d59c89494"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "9e926998977994e00f9fbf9a4328e676"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "db8fdcf81dca1d74fe625d33bb760bad"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "4159c66298287fdac4606e0b6298c399"
  },
  {
    "url": "share/index.html",
    "revision": "9afc42ebabe5caa772aab6650ed9dfd5"
  },
  {
    "url": "single/about_me.html",
    "revision": "a69fbbd5ccadb0c94b894582880c04ef"
  },
  {
    "url": "single/all_article.html",
    "revision": "dd1b4b50dd9fc0254038886a22270b51"
  },
  {
    "url": "single/welcome.html",
    "revision": "53cac901397d6f85e8a33f68879e1bb6"
  },
  {
    "url": "test/index.html",
    "revision": "b55b8dd46bc749dc6325755cd65bb506"
  },
  {
    "url": "test/test.html",
    "revision": "a3498a98ad377f48f6ba2359973ac54f"
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
