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
    "revision": "79d8c6e9913a5c0718064f1b654eb9bc"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "bcb6c45c36391b9f871bcf74f7b1f3d8"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "63b83370453c685d11196fb8fb238e74"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "7fc04cf6e0eecbfe3d69c8fd2810004a"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "e97a970b5a67b24fa24c716339747acc"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "59f20313a1415b27714f583df6bad687"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "3df2afd66c30a9cd18e8807cb24fa050"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e09b25e8778b811461cdc6817a9b3c56"
  },
  {
    "url": "articles/index.html",
    "revision": "706707a3a956073c6a90873f72dbbc33"
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
    "url": "assets/js/1.eaa33edf.js",
    "revision": "0ff827af28de2fc7cba9e942e33b5fec"
  },
  {
    "url": "assets/js/10.38acf979.js",
    "revision": "b9e4a5fa05e3b1c2ba146511b2a6c1c5"
  },
  {
    "url": "assets/js/11.fc2d78c1.js",
    "revision": "11d52529f07e925cee1ca387dc1c6fc5"
  },
  {
    "url": "assets/js/12.127174aa.js",
    "revision": "ac30e7d8e7a10e6a91df051c5770088e"
  },
  {
    "url": "assets/js/13.9facbb15.js",
    "revision": "645246998eba7a69bdc53209dc700653"
  },
  {
    "url": "assets/js/14.09023cd3.js",
    "revision": "9e2a38954134410c62db1b17093692c6"
  },
  {
    "url": "assets/js/15.5e3bfa95.js",
    "revision": "fa9c03ada898277e4aea10387b0c86da"
  },
  {
    "url": "assets/js/2.8690f1f9.js",
    "revision": "39d4fe0ff3cc5de4f44f6a8ff9d23eda"
  },
  {
    "url": "assets/js/5.b2d88b04.js",
    "revision": "d5c68d23b0cc8d4ae4e2bac5b775a00b"
  },
  {
    "url": "assets/js/6.9cfaa079.js",
    "revision": "326e78b6679f8d22deddbffe461b4294"
  },
  {
    "url": "assets/js/7.12d7389a.js",
    "revision": "1f86876bdae3eefba994965c64565d17"
  },
  {
    "url": "assets/js/8.2a2bed59.js",
    "revision": "386ec3b516a301d711e779b909ccff27"
  },
  {
    "url": "assets/js/9.38d16243.js",
    "revision": "2e13a6f3bac27d77810a842e193ecf44"
  },
  {
    "url": "assets/js/vendors~docsearch.9ca4b8ed.js",
    "revision": "ffae475eedd9319be60a48484c5541b4"
  },
  {
    "url": "blog/index.html",
    "revision": "0d4e8ed297e5cbe16d069142731f62c0"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "da25cd4d313a3b7a9376d31c6cbf0d5e"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "13d6f49fb76a6858906b4628296bbdc9"
  },
  {
    "url": "books/index.html",
    "revision": "c0af29662f976651137e16466457c488"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "17a07a5bdacf443148bc55b3b6109d4c"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "06f323c6dec0474ccd2411a54b6ca1df"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "25aa8fb1010b2ecb409f2fd0eda0f1d9"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "0a76ca9dcb488ba1f3c4aa1d6834605f"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "1138add6b5380478cea905547f6eaf48"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "4786f4bcb03533ab6db6c155026d4554"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "36337c883e04510d2d37f9ca964c3f22"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "4fede68cce503f9b47ef66e66b31ad38"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "70956606e485e9acc8e1c30451b8a3b0"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "314c01b2103ed4e01b89fd9dea65fdc4"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "c8080ec9c23331c8f67ff46486ed889c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "ceef012363dd8176808401bed42a020a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "499a4d6d7faed3f0e3381ef8716baa0f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "ded331be09bcdcfb1c7728de4c2216fc"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "013c6486d72d0e069503f37880f5c4dd"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "aaafb5b6addb5511611b2c44a953fc67"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "dad6745c5e78a8603c218bd6a043660f"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "abb46cc951e2581837bae4d23d3e6bc1"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "fbab66c994c0fd1b88a49d5f3428a976"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2992b26ef48da1aa4dfad3b6bcdd5862"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "7e84d42cd60654af70b4fca8a3fae1d8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "9bde8a5f9135af36d10ef82dea32b95f"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "8b7855574da28258ed7abb0aac9714f1"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "4213cf52fa22aaf303cadd20ac0b7043"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "7d0a1c0946e3ec02d6b8ce9870e2a56b"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "876f5a5aaff5d96f38f89252e7baade5"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "23840ec5d159fc0f169e044c4fd3bbe1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "4ec73a19788042414efe8077c8856e6f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ecd1affebd8c62a08cb60bffedb2cd04"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "59969a3a3848ce4edc29cf54c48ebba4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "0435408bbc76a43a88bfbbf20e4de4d1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "7b4aa99bd24bd018a108078e90f8026d"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "bf76e2682215654817237fdb98dc5eb2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "7a4e469454aa5986fb5d3b5411728251"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "cb84728bb73b24185aed3da6599a3c93"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "12a55b46165fc27c677eef892c96d317"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "8028a1553716566a411e039dea0f5b83"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b17f3e7d9cf441be520f9eafb8e9096e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "d40df492dddf55fce360ad5889579a68"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "3a3bc8eaa2230aa46ed8e5d20d7b2694"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "c92018f1113464a20ce5acdb5b0771d6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "cecdb8d9c5fc632ae59446b8fa3a5050"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "faa0c7be119ccb21faf5606c4788a113"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "b9f71959c7874e14d63fe9a21d54bd4d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0c687221e658c9510705b95c963874d9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "c8d349a4ac67c25feead0a245c3cc34a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "427129433122ac7358ed4dbc8932d8a8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "f10c6e96e395fdd272277ab633196da3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8bc8dfd00a1ec6fd6fb62d936256278f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "80a9c8f703c98e1d0894c1800e133a66"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "ed71a06fe02fc0df5eba9eb3a48edc10"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "f1c9c06e7aa5fbad0855145ccc1300cb"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "f0f9e4e68acdbed2cf737736359a4ac2"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "65a58a5b2ed3dbd995b4630b2fe8dc18"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "dd6b4183f11ce3d8f4da05034f53fea8"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "3208c58783bd773cf60ba0712feec21f"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "54e825760f91c35d2e96620fe58c52bc"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e6c4754911294099616d83532b84bdb2"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "890c705405bb29d647a305a4c9ff2a9a"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "e32c6c5372f276fb161d39085ebdc4f1"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "d205fa38bdb0a0b171013fb5a9929508"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "b78bfd7b3762ec12343307541fc26c40"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "8aef1cd149fc3dfb6bee18b22ad118f0"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "f66e9d8a2affafb3f59a314503f1a036"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "01d00fdce37022f471582498d7045d78"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "b9b57667e5f9017b783c7352d9243e65"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "66c8507f3f427e46430f48ef58152337"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "fd9d25ae658a9d41afd015e2667d374d"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0a08e5394278ad1f16c4d69436bcbce5"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "a2dcca970593a4fea72e83f93ddabbb8"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "b36e18c675d67cf2608c09003cc4702c"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "f64f20624deeae63146f660c705a521b"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "1be4a51b0edaf1d2b9cf87daab16c644"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "5b99738efa42f8fc4c559e07ed0f69b2"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "578303bc8e710911b311d2d821619b2a"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "33892c8c90355f274826f9d74c426178"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "9b9a3b0ddc16fa54bafa7f5687e002be"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "854225ed56dab25190768d24aaa8f331"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "21ba8adc32d2559f4b12578413f30900"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "4d3643868fae26e7a71832a67b8ac698"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "194935667618877157e20771fb304eea"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "8835b680bef0a5eb3e2f12815f6b4d7b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "cc04e47c923a21060f9d8ee93316b5bd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "980696f2f0c3c26a86cedfbfd94025b0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "44ce2c35d596ca4af1355bf77e4fa28d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "94c5d899f84ad702bfa94e1c76c3bc98"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "d40fc929da4083e35821d22dea0e756f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "aa0ecb59e5f6d32389b93b74151a6fdf"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "2180d7be07b196da9a651800ad5d90e6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "b3913ad178a12ec80e223d214f1323f8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "6d2273c325977d7ff287f574bff14d37"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "e4eb68457f9a2e371ee3002460f2c337"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "ac5f81a5786f01e61be5fb0a49433929"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "9342223977f681c5cefe1717e60c2b7a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "961fba8b6d5083993c5f4d94612f95fb"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "cf36d1126f7e95126a62410d3889c4f0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "f408db7879c21bc28745e6f53ec72043"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "9aa734201f0a24be169c1b88bdc3444f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "3208b21a8edc4033c1de62c9f58b21e2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "edf8183466bd01355b56011ac069700a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "f14a9c9e2c936f7be0bb1dfadb87aa2c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "1c617b0f8c791e270bea594a55587c16"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "b5e1e00b3401f8971674abfeed7ded86"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b7149b65b5568cf567361c37b9129170"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "3f5f4545a6dd788b7cc3384a1e9ec22c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "6aa2b06b991bb2b2635fa81ad20ec698"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "7d611e8e0f91587094a6350a8bb74651"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "a672cdaef70a02b35b1acd76472c6d93"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "bf0921a0e6d18ce2a82e3e64be5d7248"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "325854f5a2a0dd6a943849a2b746429c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "1371211b44653b4454f300cde84dc85b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "d44f1b214c4993225a7604fff0f6a374"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "11de553a4fa00ae24f5dfd01bb68c63e"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "0f45bcc4fa9d8bf6f320b0391365e7ca"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "f4afb05efaf16824e9ffa42f0a09e4ac"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "f554926d10e480663cd1a5e9fc855480"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "9acf4980706e5b51b1b9288af562a1a3"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "f26c2315dfa91f68628276cbb5da4a39"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "663b12121e3a03d1f9f018d4fe3ce239"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "091eed93410e855a204ca9196a517d18"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f780715c239a7b367b765a45281fdd3d"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "089d595767f2660d13b4e00d1ac58daa"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "229750e3c3db8a58f311c0b624d5b3c2"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "914589d5ef4f10ed968701126524bb6e"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "9743cfdfaf1e85947bf6f2aa52263b7f"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "ed292961e21e26c14d30cd9631f84e0b"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "f208f3bf6fdb03b6343deda8d1493a3e"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "c33705efb5d0be77513b3c8043201519"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "028982ea8d0c228c9573221133eda14b"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "de3498c6f54e5693e2367cc471e29468"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "f9c6e4fde2d36891e5a07b8f8a4afe6a"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "27a7f9abd3dd494d7abe4c92894f812a"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "7a133b46de15bb7dd8cd8bec1180a192"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "93ab92ec73d8d146f75d5b266509058b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "e9ed438c749e810678b7443c6b83fd79"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "2775d0bc87397d7c6fef269c17db48e7"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "fdf7d4bf9b4462e8fd946e4112dde9c1"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "0730f445a1b5f9ae5ce557a448b0091a"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "8f1c217d273907c2d78dd243e03cc6e6"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "5abf2fbd097fe04b3ae14a710f6c6959"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "5288bcb312dd4c1897a4eb3dd52b2f2a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "b67bf8c26709c840981beec32099e97e"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "aed76131f9832770680136f29b9cf1ea"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "9ab552afe428c3c720e48d2ca03fe7b3"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8894298d81ce15f36663c1ac5fc9cc2d"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "1ed521eb13d74d43f9ee58ba96b8cb74"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "e9a35b637b3266280f1bc3493d5e76fe"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "28feec76554fca293a9a2053e169896c"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "bce992fe31ae3d079afa9f791325d691"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "b638b48227a6459a25f4de19844da007"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "8aebd6f3dc0ac076d7a69fcd227da922"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "297b5b1f0727f9792ce067afd01cc47b"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "bbe8ed5288c2e2c6b3266f3afe8a7a54"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "9270e45f6faf4ef7659d9f869910c570"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "c97327d53410feba630f3dc58bc3d089"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "49e3e3f9cd00a586cec6acadaeb138e4"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "f3fdc4fea7dc66e7299c07ebb7f4bb17"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "2a658f5e883e20d101d2729524bc2c08"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "f70956cfb08d4013e570307f65a1234e"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "8f8c5b4b2e0356b9d9e67a6e84f1d88c"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "d68fb7224e4bd0bc8ff9ce83314f5243"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "dddbe5331c705191b72295bf329410c3"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "751399cab33e51f13d72d810159a4a7a"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "c6f3da10aee8b523818b4227a3da02ca"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "b5913e4bbc3f96bc48d4f09e1f76d8e0"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "bb939dbd428a6c661d155b92975c43d1"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "ada915acb1744f82686d1b08a5d58697"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "98bccfdd755a9fa31b8bad9b9c00c3ad"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "e8b2c33f334bf7bf7b2025567463632e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "2757dc95a0593cb7745cb5c8e43d546b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "0bc99c8d2eb6929997f182765fb68f23"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "94ee18a80d02c95d8db59c0004b6e0ba"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "6a473f3b3ac48cde4250d05e89d163fa"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "325523b52bb9d1f2a02364167232ff16"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "71c5517b1d758dca665c202c838a8f16"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "57faa5719973405cc0a39112fb9d0225"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "50a6e509b41f7e39d1ddbc13a347523e"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "c9354712d890639f26833b37a820fc2a"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "b63e239310916c08ae5cad5f359bfdee"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "f4021f28e910001994ebc3eda28a0383"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "5c77ae4fce382da3ff27ac1cb3ceb046"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "dee12e775117ca9aacf8de4632f78f45"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e43bd4cf9e9881faef50f560786dc85c"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "38c37169b31df5a86855bdc86ae3134d"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "43946024d60d4cda77d68f5cb535f73f"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "881d2a781cedb3f26758251293c95a1e"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "2d29b1e0d840dafdcc749004d3f30abb"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "b05517a359355223553b8753277763fd"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "813cf69020f4d30fd87f9782cb63b3c3"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "5469e3a354e4b9704c5db9dee7577cfd"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "e572732d326bb49054f8b57aa30f498e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "3c239cced3cd303ddf731797599ae27c"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "43115fbc42645b34c334a5a3a8b5ca45"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a318330528a819882e08219dfe780235"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "4e4b397b70270419d63e86c669a5ecc0"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "fa51444771d86562056d633f209d631f"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "54c3873ea60af8a0f3772619de9b23c4"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "813f765173fdffdb36b8574ccfc959ef"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "05cb6cfb8100632b3f2651aff6b02b86"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "4bad32716645a94776b26d165caeadb3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "22ecec9c59a1f5320b6c6e4849cc77ec"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "964c0c37b9840cf8d071720e75a8cc8a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "d8e47f0ed9ad5c0983cc55802de004af"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f0faf311e3a03a4066c093769ae01831"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "d6a5f1898094fbd6fea48ffd920c9d14"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "03c9df4c3581d41146ec8cf33d4b7669"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "5aba236e5fcb8fbdde7f3a3b87698e98"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "5cea6c9e15d9bc2453c9928ccadceb7a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "1c48d83ff33bdc2558ebcb3290cd6442"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "33a2980715c3999f9139c2c20d7ada2a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "755e95ec5d6758460378e8da8f2e82ec"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "748197f3489fe9ed7550467eb1eddfc0"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "017d8a34a7155e0857164bc905a56d64"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "8e15473633fee6f5ba7cb27db7430e7e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "edb55b2367deb1ec481c96a9c2f95479"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "4965ee233dba6168beac9923081e3d4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "95bc46b9dfec58644955a14b182026c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "8dac8b5524e421814e10e5a73f1ec753"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "1b03cf25964609205765a3855d5ec54e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "fd97b5b6e72e2691293ad1805a27c57d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "32dd109419321c8720aa41795de040d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "0aab570231ebe8d578f57c4052ef3afa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "c4a9aa9cfccfed3d27b68859b29700f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "b14326f2086caff6f29c4715d9b7a886"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "48a63c240470e4529607aa305d1a4c12"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "75f5a3cd0cc6a56d18b6b1e387824124"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "21d3280fad1d024522d5a9370087d169"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "0bc53e9c7312b82554a2ba4fbbe61c44"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "3181f5431a7f679f9e004f3185b8711e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "76daf55d709a891478e38aa481b1aec0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "be5a041a23d73faa5ab51f700a5a8264"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "216c8173e870c26dc66cf0561acc47e8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e108b87a37f534752b1e616de4a4f2a7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "015ee8b8d00324ac37de889f4b4dd946"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "083cfe8532bced182d5b86e0c8be0d72"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "73b09a677e1939891cbd80b62f6403b5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "7e40a34780c59875182c0ef77abb000d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "b864494decad992565bd57130de47054"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "d95811f1d325c238985ccb57c8ce8bda"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "c8ff73693c0b25ef9ce2de26a6b6628b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "11e69af6c7efacb82d92cc947ec8585a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "da02cfd8c49ea9a460af2f9dd358703d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "91fdff4de36392f83b17211e39fdebb0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "3017cb4b83890693f74df79fd4e4b2cd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "0238870782983b86783fa9547d7f668f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e546382f0aea4d7482a1976e9ab202ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "591ff50355aa42a3680a35b4f9f9b210"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "0e87321a751a3482f93f7f34aa3aba54"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "7de7dc4176aaa8fe02f0a326da7660d1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "82e6018a1b3ec3892d4f656906f9442b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "324eb07f41f4dd1b7766097494cd1a56"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "6abf6485a196e28a14ac91b3426dc4d0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "8c1ec2bb3fff67c4551589a6a5ea2948"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "d26a3a38464f431a995140dfbd7d4b08"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "09aa7dea1af3e59136468283f13c172d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "b18932c7e54894e00c480a1bc63a4bee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "a742444994638f3169d25894fb87feab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "90dcbde244e47e9e3b7b4b051fe87f34"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "a66d5f7a05def29e7b59f739957f5cf8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "89c5cd4b847030ee05897001e41f778a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "91b77953f791d59c49ce46d83f573572"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "6d8348cab8a5c8b9a9b6890b131f18a7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "db0fc0a80567dcc8f1685f4e59983dbb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "1dbd8d4e7fa10e01964e58745dd3c8bc"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "d931b28ccf3e98ba584a9d070d4754c1"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "562458593ed525b88e246ebcfd5391a2"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "c3cfc01b84dcdc082e52f415e672bb14"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "ed69b76bbdc3ab64d8b7490c9c686a36"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "56583f94a56e51f2c69a1aa84a3e7fec"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "d6ec19a8415bbb667fbd99bd8949d8c5"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "c3ae193c95f1e1825059f18c727b4cf3"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "1ff25d1eabbb6c0537433f38c8b6ad32"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "9ac3cbf0002cb99da892a98c30e1410f"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "6c6ea9c3e4b4800b268d8947a54e9885"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "8bf1072944d43cfaa240baf4d25e3aca"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7611d3153e80d8803f53eefb45fe190c"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "ed21df6ca26f548973fbc7b76f5dc39b"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "b48defa7234c6884990ff1607b0de604"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4965eea3b257f8e581329733364f92b4"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "b3eb2a9aefa698988dedb498d2e94fee"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "8a8f607c4c0f01717716a9afebdf0afd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "a4b44383c46165ea0317520393b66032"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "80f2a316ba11de82b035528dda9bae5a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "31c456b62b0c81168aca106091d96943"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "7dd433b7bd59e2521540081161819c67"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "8bf4428697bdf203fcd6a8a44cf8cddb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "005e7a0d9c07f71c28d78641d50bf136"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "bd1dd1f2abe7ae820b1160b4722cb306"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "db79f33e3067a75e93a2e957f879a4a3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "bc8009fa31eb336857a5a76a82cd8d9f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "de86bf081b697da4822d7f9a36cc1a86"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "2ac3409d03641811d845803d3791dc9d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "dc7d11a727ddba7644349fd223ab1c10"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "c40a686f0558e93e74469ce45f687151"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "02b844f6ab018e36becf70ecb372ceac"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "935633e8680a85b54cb65ff7252566fe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "7aface22f9e826a3c963862bf660cd1e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "a9e408a63f0c8c054b50df062e3d4b2c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "a56dca0b6bdcb24f234eb8d617c145ff"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "e1a99918a964259ca19321627c5b53e1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "34f881fe1f588c0ab3315ed5753c2733"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "01769f619e87875dbf2064b8b00c0867"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "3587e10c709ea5d0a45844114ce67b4e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "179e7b7692ecf7121b2bb13950ae425a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "d1ec5569d69febecbbec6d4c8c0f4911"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "fdce91ec176421708c7c95b47ba74427"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "662b078dd9395fc1bb185b9dfd9ef28d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "d6bef8e14313b24b8ed031325237ab2c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "18f3761a7ec7179a397b2c0096b420f9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "2290a451aaa94e253ad0b2cce370a9c9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "3855e0a7beaeede54d295f8133c2203c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "21f7b9b5056c6ee05755f9cce8e52381"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "e4114f082cd25f2a1066709bb8bf98ec"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "510576ad9767c6d40f4ef833f6a9bb72"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "960cd96fbf6630f1f6c5f0e2be033626"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "71b204748293ff48734aabc3fb8a1724"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "876ad980e541c52bfd2552f08b86e779"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "49a9f6dd8a73ad18e62a1a9248796d09"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "0f77625c26ee845640e132ad2044f88f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "87ddc8ad7694bc1e30ca327d95964f86"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "b7df236f8ae7e4fcfcdd3fdc69e15237"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "ad63ca25abe8184a04f0a8221e97242a"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "6c10995ecbbd7fc9a3d1ff5aff35c058"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "dff46ecba093b048ecc4f6147af444b2"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "3f2ce6b5e847efb8ad91b71024d51785"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "8221971673b89b440c274d7c8aeb5323"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "0a28dcbf30f547f0a49ae4865915ad76"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "273875f150c66f06a49b8ab1b79318c4"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "a276e14ed44e28d71e2d3fdcfda18e6d"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "28064f0469cefbfd4009de63f20696cb"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "ea5b319e6fdc5dc8c7b4a2fd419b079a"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "e6faa6734510e63aee4ed8144505d20f"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "bda7a6ec833431bb7bf61d254e2ffb55"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "1a3e78b0a1a96224bb664513ebd3663f"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "58686115f9b46daba12f4d71a5ce1767"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "343fe08c8c9a72b2a3fc0c7d5d95b9ec"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "c69ec4692aacb76e2448fd910e95100f"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "441105deee8638eab8fa2006aa8b0c70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "7a3936b869f27f19cf1bc12538dc00cc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "bf1c49c5b0c61fde93db70367b07369d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "6feed65318c74804568072ef2728cc74"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "9eade0234ad3c9fb766fb07e0b35987f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "3a6d0015f5aba7b3b8dc0ff348c46bbe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "f18e88d1ce80ff82f863f925775f6843"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "3dee2404c64a0f59d737768352a3ddbe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "d45930e7c934db22def63bfab30f5f30"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "5e945507060a7d6d706d5288f2399aba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "0f596a5766e7d1972bdd8000ebd2e3cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "994784e19f39037dea0028eabc041016"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "30da91d31e19d0a9f008b91350252094"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "5e2d4acaca60fb3433a4370a70420801"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "31d5a2ea4cedeb8f47b1e4039f27f7d4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "c1fad4943183c37c590489912a82f548"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "3cd2f031b371956903b835d12df6593f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "2dd6b691ae5a917df3d0381078a0828f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "af0d30a01d144849ac11d9f30a485ad8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "1a4a599eeb94b57436d4846099d1058f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "08b92bf3937b2b29742acefcc880970e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "67deeeb1a497ad1df339cc9a48aa3333"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "8f27795a42ab8ac9603f3d9617267c53"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "2293989c1b3661c63e83fb919acf9dcb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "32131d63b803608842dd926377c6973e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "e00ebef14e48aa59a83442bfdccfe311"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "386ca1938a6ed1ed4385e446427ba027"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "a2d4d4c24c1025b58fa41d594e4e184f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "49c435797ca2d8bcba580a4a92ac349e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "82d8e9e068b3f36e65e3ebafc3060fde"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "980a0fc6fa7d5f5738d4586adbeef6de"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "68b584f8af32408d0d7c5f755f7b94ba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "c67597ecfe81eaeedc4c42e20a4b1d97"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "a6e93924d8a0651360e8de34ad623c3c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "0093a6fc68c36c83ebe53c69abb181c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "8145581f18c20f52d7bb7755a046f3f6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "826d11fe563c966ea918aede04907035"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "56477ffd466d9b0d811513fed5dce34b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "48a21f37bee5ae2da3299015f214a59c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "6ffe870402b0f0972a485c6daa384728"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b2d8c7b34cac4c7d1701d050c084ffe2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "251d66c24c4a0c402eaf52d3ad37f129"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "bb3b1720a112ec7f879f832c7b77136a"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "2b9457f1ceb65ea3a9ddc392121be97c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "0e88a98eafd968db336762ca7f8ef6a1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "1ead33bdbe0f7ce493e8b0d0a2e5c2cc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "2873984653823a691877564dbd7538c5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "2cc3203f53ffbc996eb4c71efa568aeb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "8f8aed68e77ab08909403915caced2c3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d58027ecb231be7e00ca81961acefe8e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "52483402d2b8974a17ca42f77996aa7f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "2a7a6c30f4dd8c4d729af70269324bf7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "42d8b9b0487c1db353ca58f89ea33be1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "10c122ed0462daf3c0b9a6b2fed2e62d"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "21db0348e56a79e3599cc76966c820ef"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "7a7ebb97b7d36b6faab939ac5bf717ea"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "b0069a052d66c45f73c4acf9c3753062"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "d66c93c7200606f6d1282c7094d47b20"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "690c4ec4a148852073d26796680592bf"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "8b3bd251394084356a2e5debfb982e25"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "3f15985910a9db6d45dac9e692e8172a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "45afe052ddfa209cb812aeff85a35be7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "6f6fc81dea8dff29541cc40ba0a9956c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "a60a29d45cc561c8245a5e0b2dc4e87e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "a7d350436776c5bca83063440df2f115"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "08db6cf1ea9df8e7af9f849aa4a1c303"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "bafd03473be5ba3a02c5e5ab1c6685fd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "4b137d98d45358a62c42bdd778a0cb3c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "12b514086e9c83b5e0fd9e3183cbbad9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "9a25d1b4a761aa72988f57d2599b234b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "4555ed9a1db0fdec1995ea1dbdd162da"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "ba49fbb1fdb536ac87602bca04288035"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "c344c0d66c6f2c1021014fd0c5c8fc52"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "ab92978b1becb00d4a08e1227d703782"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "5f5de3a8bdee2b98575a5c25cb499b90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "d039d7d9b891667f9cf589268b5059ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "28e2d5420c4c857fdb3fc03f049b3aa3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "f54ad7fbdf76d3d5cbd2d3e2866ba01c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "a73587b8d79d3c3d711fae3c909b78cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "de269346212c4c99fa7ac7871b240ed4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "7333adc77c8181b517d355d098af9799"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "f09801487fbe3f849a15bf7bfca4d799"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "414c505467007a8fda685b027786ec3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "e779225b4be005f12b4e3024aafa439f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "1c5359b10e8cca9078bc0510c4159a98"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "70ccbc0252f015ed16705eafafbba7f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "2d1d37e39b07a585dea208ccfffd9686"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "65825c2c366a15a6fb3e47d25a86782c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "653a991d5fc20cf74af8cabde79f892f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "c552fdd87633ee23d24211461a41085c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "e04a2e5b60e00a7197b4639983a032a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "21be1d2b2c6c936080464ef36d793e09"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "079b0500966518c22be8b915b98439d7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "0a3bc63f0a5326b877a012a3ae47854b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "ca7fb26946e76548fc9b8c50a809886c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "dd21475ea5e21c172f2c384ea5c5422e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "ea941efec48f1bd7a6d6b07d0526b3fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "064cbef84767ddca135fc993df5364e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "6f2e743aa81f56ed3d426f59fc7087b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1b089b993d9c5418773e9bc59075550f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "440ff64a82c77d34b14bbb8be8424d62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "ddb549915f2532c0af4f0aaf97348a18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "d48292cbbeb870f1ae535731bc0980fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "212f215f4edb19bacd4c0df74345c826"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "5a9e7a54f3b5cfbbeca93b908d51b75e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "06b5089113f15db61dec4fefb4cc2cea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "af62f305847b2764600f9b375309593e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "86b9a62566265de0b3be32efc14bd790"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "e714a03258b5376603f9ea8c5d4b8170"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "e101b3d9dc30098f2b5d82b4d8f2f826"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "72ddbc602846a8aae7176e5570fb8daf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "067c47a1760c6fbc93d2180846dffda2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "e22a5b3426db2dee533cfb3d43a72ad2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "722b1b7d02dfaeb59135ae729ab65d62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "60250d01d989e90bba7d6619b5a192e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "a57cbdbba3ed354805d4daf25a971412"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "88617ed96e255bf40590750781e5c7bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "40bf2bf33e3f68f47b8b4f0dc7e04ad3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "edb1d43b16f119e3a4b3bbe913de19ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "f87527f5196bdcea25fb29e582767097"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "97c824fc4bb64dc84abdd148cbf472f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "04a74c25636d850c55bb8f0ad86946e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "01d84cd3c47ba344967a3df81c961012"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "d64fc3144253344341ac3dca3741e113"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "be72a0a2eb280f314ecbf2618d5cdfd4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "129602831079993027ce26cac37a66ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "83f4a04ba27c4e749da603efbc27bb28"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "f9c2cc2991c81c5f160419c002d134ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b820db70a440e47afea5490fbae55ced"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "cbbc8c8de18e796628c2ff2b1c1d1ba4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "916ae7aec43956dfa78a3903d4040c53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "7d34c7fee2f78ca5eb4c416ff1d6e869"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "5fa420c469340dc6ec5fd1c2b1b08308"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "ee62c2384a6fdfa978b5cf3cdb3498f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "4c8121ebc6cc0c0afdb3860f9a076d1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "9f39d4740c51273caa55f817ff618542"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "b6a4d745ebdc48c240e34f7c19ec7153"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "e452eae17c0f2b811ae098d74753d811"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "6336afe12186bdb52969dd8065582300"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "d43b28514c272ff050734f5f4e4b0d30"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "6389914db8638effaa6d1fcb242ac05d"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "98a43c4f5c8cf59b7d890aa4bd6b0407"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "2c421da2a0738c4d859c13295f836f23"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "0db20820d67ccee274af242dced2ff53"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "fd9701cb2243584edd2a5076778fbe53"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "40b3dfe8274caddb577abc928ef543f5"
  },
  {
    "url": "categories/index.html",
    "revision": "6933096f9c0d2ddf9a721ea06fadfb03"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "fc0e1b21aa815268289a0126f56ee0de"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "91a11b1c95976c882e4559581a7527b0"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "e02a0818a6d4801c6e5948ceafc27d50"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "f0cf5645e801e9f1e0ce0cf8c33b3252"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "0ae1c1c9f0705d0c0a3d6cd47b7b36b6"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "daa1144c446d432531b1d04bc858d5fe"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "0e56d1214a017e8077765bf5bd29adb2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "b2e60525fe259aa26221e7c83405b71a"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "07e873da057daf3d6a8350c18de2dd67"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "eb4a947433504eaeea37edc880e6d9f0"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "282be5929fc0bfb0c95f9147ca3f23d4"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "ef474c94d94fa5209fceb713fce22ac7"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "809735b29cbe51af2c116c67c67d5430"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "1d4100f8fbafb15055167a94163cba1f"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "cbe430550b086af61580f8eeaaceefc6"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "737ffab4d65fb3d922245016b0a20668"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "0004797b98983a918ba9fd2a57bb8949"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "a2fa4a0354b87cfd776b2d4809ee20cb"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "cfcc89e388d405cd393d48017eaff237"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "b0ed5ac53133fb48f5614f37b0f1b4be"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "3eadb6760015c12947fb3c033f8c5872"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "33820fe3254307d7dc5d4b23dce040ae"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "6ba9c72df9dd57ca92273c386ea39a2e"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "7acac9f6e167a7ce1d01782881757c48"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "b7bad8b064b8bbd8cbac093736d66346"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "4a7703475d409387dd0624a2f844f7b1"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "f8acdbb70a0a697ca910be0d37b8189b"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "42743af6d0200610d779396d1057143d"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "be6348436172570324bed66ce843bf31"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "50869f2f8ad68edbd7185bd0ed558083"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "88799a35ef79f174e3bba42d747d09dc"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "b94d5a4fac6a3948fe48ed709dbc56e7"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "72850d0c48d996bea5770b67bbb08fb2"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "24e27341695b81420f7c06000a23128f"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "0c7d687d750df9e00276ca2bd5a28172"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "da056db9c4ea5e990ed2f256716b6e08"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "90d71c9cb91b410d088492e315a2c659"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "cc4bc44b429b1f1e275e37ae8a79e78d"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "a4129b77a4cbb1a32b94e0e9bad1f5c9"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "269cf361a474c1db948badea9bbab4d5"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "9b74700e8cd51fe12cd89c89a4fa9eda"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "364b8ade0e9dedf12beec44774f63b6d"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "811e9e3890c0d271dac6dfdbb0f4dee2"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "940c23c38839107b72d8ff7397617b76"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "7596f14db680ebb503ba4239cb9f5507"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "4023f57085af3041ea2ce746358f9ba2"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "5846157d40bd4a9cd727dd27210498c4"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "f0d66e3b1555926028cdaf00323dd003"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "35262dc9d54e285bcfe7055e4ad84b90"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "0b7e134ab3749675c3f0a8e742e1b89e"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "663e2b06f0fe8e81df672b0eecc3f5e5"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "5c5d463e5bd948dd607797e729aab243"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "18b4f0b2317f3847a276e5cbdfa7c16c"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "1dd8fe5a5b0752423acf2505fa5733b4"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "bff53f3e11287a2fb002e0f4ef6301de"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "fa6427b2ff9f55d8f7933e3a31a60294"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "b7dafb77680e6c96a328daa04c8ce673"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "e9e86d900df319c2699afe25effeae75"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "00eb5ed77ea2d82140a504825b8e7f1b"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "761bd19eb83c3cc7f54f81676ab58681"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "483d492d337ef14c75988f0edd367636"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "000bf5ee04924cbdc2bee8b8180baa83"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "d07946e7fcd410a1226cb05d0c4d1ebf"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "f0a76b584d4940f391e4cf979a58785d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "5458113da36c43ebbb9708f0e127db82"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "9b162103ddee6d0c795411541b42c7ce"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "c4aef295319e91e1c0b83f03550d2b1f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "c140cfd419e3e59e20348a488adfcef5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "b51f3217343fa1123ac8640a9afc9ca6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "ce95d695aadd41611fb986792d420b3c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "256192d60aac566fb2287b70f137c487"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "eb7c44764b398f7a6adbfa6c04715173"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "00015b7c63538af54d82edea77548072"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "c136c97cf1e2409fb9f13a2892fa6da4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "d4b2efefa4b1fdb5574fc6f145c4aef8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "767e6a4c5d7a3109bc4d2c0e9eb1f500"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "998676eee3521ebe72c0009697bf9416"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "a23f8a52946a559ceb0c3c8e7b755712"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "18ac885f69c8059d4891d646c6ba6480"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "fdaafd50aff83ab6d8837a0bcebc695a"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "e8d736c05ffba0f393b163dcc4357543"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "17cff72317f02652dc4c60740e15a0db"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "c87d184e35a3631f82a68db690f9cc64"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "2c0d9e82b0aaafed01f9026ead5e4621"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "f9ff04a2179f18ac0a1c9def8adedfcb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "8a73c18580f03d6d65b398d365bf14a9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "d76fda0aa637e14af66fe86343041ab3"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "7aa3565f7fcfc696275be4af714896cc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "7fb8e391372254b5e6683829497cdfdd"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "63dbae391fed35a612fccff6f09d0599"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "e6b0c66da3ec80251490d1e2df7d027a"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "8d37060c1a4b4ebbb839a2de66ec3398"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "10f769206b0820e406742266d4faedd9"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "e68a5a8da7a6d4114c23afb546734f6c"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "4b3e3154c8286da406f510ffba58a66a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "4ba1d0e158749b9c877d692f7c864763"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "48882a3dd3a73a5eb4441e935d0b6fbe"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "ead714b662ca9cf264ccf69a71b371c4"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "8a5511fa4ddf1ebb7d9b2027d59c5dd5"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "4ba4cd80a4106417d6605c09b7f4fba5"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "08e723b23a7f908b4409642127f8660a"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "376608576a88762450a7fb77a0b0dd85"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "cd1499d588844f1c94ace4ef755e0498"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "4cbc6aada583bdca576febcfd5992887"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "8344e088e10e0138cc14ad134a2730df"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "366bd23d25856c8dc6d6ac04128f9b46"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "4c0ad91deef6e304ece9cba6efc56be8"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "f7e216e94ec81c645987fa1a77b284c2"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "a3f714331d4739d8197d7ff6c2b2fa64"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "9b63cad1207458340c1910430b923703"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "e1fa81b6a5b78d1334d37f3221452f6f"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "64f6501ec27b89f5c9f051fc00083b8e"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "d8db482c5312d05a2ae3833484b7b5ad"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "f1f21dd2ae18dc3636c7242070bcad49"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "c54ea3d79c1f4965230644433f056298"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "8822eaab231838f7aa8d53959dd85272"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "36126849c1174aff9ce411c77f484c78"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "ad2de2a6d8133cca4407c741f17cb195"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "2803a79e836abb337c299d3c74980003"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "076f1d0ead8fa16cb4d955492c2f1639"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "eb8c94d6d98853f2e56f56a3d30729f3"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "64f20a057c758a8c885f4bdf22816084"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "3c61225b33130d25ed733e18f23cb704"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "79190a80390e22176deb2e739875d4b8"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "e90ddbe1f4215ff6b0a76a7c2ade2c52"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "33f7d7f5b0a42d3642b0928dae4dc97b"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "8e6feadb159f91d1d4dc5d48ccc350a7"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "6370a81316d8646e26ef89e6e5555021"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "c60fcf39ab5a7f10b86a146016c008fe"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "839650b0bc92716653c8592b368a1340"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "1ebaa59411180656c62d8a920d5d2317"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "a489fd62b9161f94d3cf11514a32b6c5"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "c68f4e0cf8427caba2b6e00c1933b0df"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "2d6abc238669a21251f34d721193494b"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "b45b2241d301a019a1e5b744bd255ba3"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "9dfaf0ccb3f054bd894153cf5279208b"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "f2981cda88652ff5e71b959e6d885cd7"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "74a5c10039e3334dfb883836792bc427"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b0ab7cbefe52545f7eccf7fe39646ffb"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "d41819402cc116b2fa3caf989158f0cf"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "266d686bb5eb9d0bce70c457760d5dce"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "f6730df650e641add1d7659909c22587"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "0c4e3e5ccf2cf71528712d24f9206472"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "91cf9b7efd134c96bc8bb79865481761"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "6017834efba1939ffd6e41b73a27c18e"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "40283c58eed0c57bafdaff6d3ce6b98f"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "03c7172ed85148be1668f1701dfdfd6c"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "1d546c075627eb294bf96a9cdc89764e"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "8d03a53af2e6113d95e0ec1a31393fa1"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "ba37b76e73557fb11740e98bce90898c"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "4b149dffae8bbf9e712ca01059cf6c3e"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "2a22422dfa0d03a16ba6213fb1c5d9ee"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "d68e60591637770e657c2dcd774f2497"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "aefafbc0ba3e084a0af6a80a582ffcf8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "ba21a6e4f0cfb8bde507bc2f3d2224a1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "b37c0a1e636b4dfeed78865e931f0be8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "1271c75a558af66211e311b73b3f089d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "0bcb37a9854e7e6b10543d4ba1c78b86"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "2d3a5efe39c3d4f3998e59de6950f92d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "59438d1accc60b0901e37504c5d1fd9c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "ef6909f60deb6f40036eb29e8164933a"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "d02d6588209d0da72851075216a2ef8c"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "664f51bf5b6ab995050b7da68ba5fe23"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "ae63c232f574adfe1c32fd6c18fd403b"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "57d8724555e4e574fcc8abf6fd5cdb04"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "9521cbc513ef2aeb8cdb38381f737725"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "420d1f1383b3c4fd38299eb33c676927"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "7c69a64a7624ebb70359d86d9f070b54"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "15a6fd2fbc010006713319ccaff920af"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "edb5ae35b07e6130501750259abe6cc6"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "c681a89d8614019eed17f43846af1ede"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "9fef66500ed175fa61bff06ea42fa816"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "3401fd4d7345f5833e6261949c818db6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "a39b0bdfab61ef9f51a0f3fd51410e5c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e7b621d4ec3bd5ec2dcf0d487b504e3e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "5353e752b3ee3056da6df43ee89630e0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "7bc2523071d6513fea053eedf4f3a994"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "c78414dfdfb7c87a99385498e0c9c295"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "b1987792569fb1060c7126d729c495b1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "13cffa9e8c632a32e3e501a6959a6fdd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "bbd26cc52a41d4c8e8eb505e82f3506d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4eaf6c526b85bfaafd2a85099f438c1b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "035758855009e00d5fb4e0cfe38e7b23"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "d1458e5984a02b1f11e7616c62f1b687"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "84e5c35088fcdba3a945380a05d78d6a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "159b988469bbff33b5b17c8216290224"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "a522b07f11cc5119878728969963e71d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "51de0ba1328f57e57f911cd6485c0cfb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "73370047571023f661cee78c43e09a60"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "1f624ccca16eeb3cf53ef53d7a9ba88f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "2dbb4d443d4fe4479b7815a8eff44b33"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "231d351c94ac073b93c4b679be9ff170"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "e059cd3722a5a83b3b8e419e25899ffd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "d56ad4b43874a6f5bd0753e63a260fbb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "564a5e80a47746b3e6adf57b87933bd3"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "05e17cf59edfd31361e8f35fc1278df2"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6b23d2bb4cc540b6ae411b70852b360e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "dc617409888af44a5e1b21eca1d40057"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "18bf03c01476202777895ea3461ea159"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "aded58cce81cfc8123a002e28f5ffd62"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "427b5beecd99912e937aa0b15df79648"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "fff101f5f7a9c675560911d76b035f01"
  },
  {
    "url": "categories/os/index.html",
    "revision": "91f5533e8c388dbf9de0fb6304023304"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "198a9f6d1086446b14eaf0dc597ee6c1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "55b0a70b16d1590da68e55d4e3441201"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "c9c45106486aa194f8157bc56c23193f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "66d8446da871c9fd2cb52c4dab5da993"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "8701171f2fef842d50cf16f38c48640b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "b043962d75a18a0affbef30b6c40fe1c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "190f5da8b7cf8a815f1964e24ef222b7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "0e958d4b1a02390bd95d0001851bdf21"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "1bf61c02d55dac47b3127547b6ad02a0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "c6839d02fe90445800a6c43a6ee1d871"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "08338f333c0f6a7a9e6b981d6f9b8d41"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "6db6f4d30badb91831f7aa34d4d1d7f5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "44c6c1df242cbefe2f7e3b751c0e6fd3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "2ae408d369002d41de7128e5cada4f00"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "d61da9357f37207c1c8ac97a1aed30e9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "2a4461cfc8e58d443c5b3ffa48728972"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "df50776fef2d85109dcca08fd5a82d0d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "ef3f2ece7998b0e92825360c24fdba95"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "b96478205a5ba3a271d1a2a022f6a38b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "739145e17ce9a46dfa468a47cfbbf952"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "e4c21d6f11eed5a51a0364c2c408d99d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "0c3d0fbeda4b48772734001b0c659f16"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "17cbea9a1c24f11c1e1cc0a4f24d6e93"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "501e0bd54464fc0a7fef6653c40b12d3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "7a11f212565f645661a8a279bb9572a9"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "b63c0b2581f5f84f9ddb6ba94c1cc313"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "37d572ae1415735ae82d5d6adfcc78d7"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "b738697db0c7535f7f77874f1b251b69"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "fdf786fe0f60adb96f6d49d445a41658"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "33e5e83b861edeb06415600a3a0dc73e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "3cc6e07761e0e35ea495f825b729ad78"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "ddcecaf496b71e3a64f4c0ee655e56f8"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "e9f8d3ba680f63bd5309f2cfee2f6d42"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "135acdb48732054a6acc16d46b823dd3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "1870316f13bcfb975773e660830f8da5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "01cd7dcce41cc00f9e2db6b6149e1405"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "ae51d371f25c1f0360e6f145c6977123"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "3f3e6bf81245f2d15a8995e370cf89a9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "978ae167ffe8478c4d22b2ac852473a6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "1348f34aa1ade1a653c962f4169ab035"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "f9c84906c6859516218d8bb95abf3808"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "b3baddf72487aa2916e43b1b99c61524"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "d7bedc89c0da5def8173a71f559c9cba"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "b6cb8e906721383dec937395e086779c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "c35dcc068c08b1211b9b6a72522cc53e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "e6b60658f2115bee956666faaaa88466"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "6e8bd3dcf91aa968f8564e559673f29f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "dd492e20a4296fa66e8df3615083b6a7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "6b3907e643918f27649fe11361dfb488"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "4535f2bbe0dc165e21c01574de500f91"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "b8448745baca141ba4026b7ce5793f70"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "e9a175d7ae1178d675cdfb33163918d6"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "e890e121de83384b54cf80c4c0abdd9c"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "353ae422991e3f7a612cda4ce1094ec2"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "ccdb9f3d1b9c6a0041e9f77a2c70839b"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "86ef1fd717ff563cadf96bb50f386226"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "ef46e6a2aabfc7737ccb4f30dece26ae"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "460633f6e28c3dbf96562a672573ae35"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "5fdad6aaceb83de96777fcce39cff327"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "edc565be3eed59e4f6b36de82335129c"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "1da7832bba8bcb72e907bdcdc465707d"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "c1f90671202f47a58042c3f327660571"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "6939e3d7f236732910bbd3b7eae2fad6"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "bea373bb39a72815fdb7fb65fb5a0dd2"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "91ec9c542fe8d42dcb96447bc58c78a8"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "69646c1518dcab5cad8852260be61a01"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "72976f87ae48b3dbcc5b61d9b8f23144"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "800cd60af43436c9d488f806b06ba531"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "2ed16950ad95451756785450aae37cfd"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "d10ed0534b673e775dea731632544e9f"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "d818d31296d29a180be82de13aaa690b"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "597f841eaf189bc7179e12d2c684f973"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "e6e8546c40ea8fdcec8f004b703a9991"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "73f6c41714c97a702ef5cb5ab8931150"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "bae9328f3ffc17067d3117ff65640fe3"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "2a78fb1d77a6ca7de45e051f6f8dde9e"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "995c83b5e431149372ff660abb5bb216"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "967cd018ec83b6b85aa51c51ac6e88bd"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "d0c6f590d01c1af6b63c5ec24fa32a57"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "08fe6dc9fef23f1edbf2f9d70918b8ab"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "daf333241dbdbe4459c54f086ea13bb5"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "560edc5b6af4f9c0ae6a5b4554519331"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "118cfa0aadb5c7c15a3d4df123466a41"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "79fbbf01dc8c64a4bbb9a3841a2f618f"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "f018a4e0a2ed574b3626793ad13f6bc9"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "bc4f2331746c617271e97cc1dcc31cce"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "db1dc3092d45154aaf9ba764deae1222"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "2fb572e26412ff60023f83bf262ed3d5"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "3b3967aa435e53e2f30863d0aa5e1e7e"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "95bcec757d95240b97b788d6bd0cfbe9"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "484b4f741b4c49fbad5acf466849cbb2"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "8707e444af645bfcd282703f64cfd739"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "47067119bf59edb8da1cbbc647d05cda"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "3b543f5479dbfe4a65576c65e965be39"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "799f709eeb1a8e70d858374a1a87763a"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "a26ca9905a1e54349a6af7106a7d6441"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "c9b91dddb037b88064953f7616794760"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "e0b093867500358e37371320e25d3253"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "78233e13e7867a13adfac16c7c71ac45"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "c16e38809b9ae379cdc99a86da355fac"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "59d777e393750baacc2f04df01cb5be4"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "669c3ab2b45bc774de6813303c520bf6"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1c209d1965ca1eb15088601c71f4faac"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "b343de8455ec2a67151b155764a65013"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "46c2186714abbcd6ee5293e3cbbb82d6"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "e175595c500dd9d46c87572ed9594f9a"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "556b0dcedcce23734a24a3d2f6efdf91"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "a809a5ea8b1ca66ab06ebaa511dd6e56"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b611f0cc4a50529b963d053396df35b4"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "1b0cc673e7cca4d980f6aa3e84ead84d"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "5183480a6203d702d623196068ad208e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "f41f103252fc64be5dfd6d3d1de5add8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "e5af899b39ec7865fd169974c6617781"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "27a836d5520118cdcd63e06ee2e9b576"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "fd5a49a973f624354fc459a428152de6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "27958f056afe803ffde3b646c9b05bb4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "8d00271a653166240282d976ceabdcec"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "c8bc7f47d91babb8158374b5cde6cf58"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "56577714d9a196c21b7095dcd266d6f2"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "80be7d511686574d903bc3357bf8d12b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "9b3009684b665d428dbc0f0e30130d8c"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "e61ecc70db8400b9b9bf5ae94195d0a7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "36e7fdd5fcfefa933f1c3ea689e07359"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "4a142ae63d4c18dfbf216cdd76f5e4a7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "b025191db461af97ac442d51d2540a56"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "8231a42470da0a073765eb290e943858"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "37a01a5e7e48cfdfd329ff7b13f50b92"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "3fbe8bb7719d562377709d6d043072b2"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "e0a9cbcfe64e32df24ca94815e0900eb"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "206ff7d6033c2fa2b4ec42fbfb6d689a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "db13638437634510a288403ed5400aaa"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "2c2d145cc864a1dc9e7f7b05f682c00a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "88fc2ee3337db38349a8e5551856e215"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "19919f6145339704f18c9afb25e6f561"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "d71d9131f9bf0b6b16361b40fb691f0b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "95cfe8f8e2d5f35607a6fd99540a0994"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "e56e3c3476d9364c109bc1017479b03a"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "b8d4d249c129ca80110f14a0fc250603"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "6356149dc1d708b4dc58495c277a1bee"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "153d2942601eb6f00725f8ee81d5ad04"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "b2900301287a24bd804d5f69c8319530"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "3dea14876a24ab5b75818aeb4f3dd799"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "5b3eb2464e7b9b4160a8a2357dd3bdd1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "7583a478ac34aa82bf0837cb78a4038a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "233dcedfc4acdba40364ce6c29fd859e"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "70b555dc5caf5ffaa5a30d82daf13b98"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "74ddfeef99de715990577439fe227e15"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "1c701c0f0bc85f1891cd85a0e60aa984"
  },
  {
    "url": "categories/php/index.html",
    "revision": "8d42765a454d2c58aa341f9475f3386a"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "cb34a37d3b72a2cc64fc9b1d7b87c5b7"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "3e23109a0feead5e140314f3c28cb1fa"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "ca30b2ad0adbe6271e85d2c39e3d47f7"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "5399882f5eeec0ca032215c769aa74e4"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4cf212c1bf025aa895834b8f8f833e90"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "1f3c1e3d4e3d7ea93aaa4a3c21b9f34b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "cebe87226a92677072ef22e4f8def88f"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "4d148c0f4581409df409d4f882670497"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "0cfaaac7037afd6e4f3acaeccd23349a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "a9a92949dfe5df713b6d66d108b77a52"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "6ca52a765966d52f3e6adf26e2b2b923"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "16c69dc0b80ae64112af0b06e15fa0df"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "955eeb83a44c2cdba815c6d4e77b0492"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "b5b1344cb17d7b09b219d5e2b7a2f46e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "feecde4e1eb9deb1edbc82512dea7b7a"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "4c724cfec48bba853ca602ebcf15e54e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "8c2301df3fd50a1b4b796293a4a1e624"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "07e627f8b454534dfbf8a1f09f37cfa2"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "b4473c75e4a9cc6d21b7c0632ae8a401"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "3fedcceea1450ae87bdbd09e524b5c6c"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "1d8108649bb47cd0d521359b065ef244"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "d7d2b281c18b1fb14e43732fce624c2e"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "dfc147f07ec5bc29327ef455531f0073"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "d2bbd27ff5baa750cd539a25cec7e82d"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "7d27232140ad720a1a077e3185aae581"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "bd0665f4fedb8b0317bcef3e2d72607d"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "dbfedd10e2a54f9c53dc866731e981c2"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "28b011bda42c7062155ab01abb6d292a"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "17fe47e58cab228ff1a97f6789c34153"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "587875b9b42f46b0a6e7f21491246f2e"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "94779796089ff93548297408f070789f"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "238379f7b0ed7946e1bd5210aef96be4"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "1d9e077ffc50284f1fb013a2b26ac5ca"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "b52136bec5520ae3d6c46fd16d16040f"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "07dff2d232f12b7b71f3af5c985dc7a5"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "72423114cc89950b900504dd137dfb7c"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "af11f380c1400abc2ce7df41b6256bcf"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "82830481b6210e55c6482c56193eaa24"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "5516ec3d5e40815e62018ff98a2dfe86"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "289fe646fe750c61d28913035808e332"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "7e3539686004ce1a2d4b2a14da699a03"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "4ba784758c82c13b2a23f5479701ce44"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "a29706b78581db439e9b4ddd1990f5a6"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "7945226c4ffff4f107bc05be6cd216c8"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "46fee86704ecfdef5c83439b338c53a8"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "acea7a8f48e5d05010cb85ba190b2f62"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "a50a92a68c5cb277df2b8e8c25a82633"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "9e44fb631123d30ebbef88d18a3765c2"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "71fd5ae37e469df4d8524e4ddd89579e"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "892f3fe248fd1b6edd92ceaf768f3a34"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "f14567aaa401bbd803fc20ec861b7873"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "b2211747f007b9303fc3082503b9f036"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "d64005a3d75694584c995e91ffde9242"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "8adad454443da4e61681431221346878"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "b9822c62f8d505d560ef7dfeb4e46eec"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "bf3b1635f0e777b7ae87fd47ef729396"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "d6b7d5eea08321ffa13e94d4ee64765f"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "dd3a642ea50a58aee4fe385f28317ea8"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "65b0de64eb211fa5edab5b80d0391b60"
  },
  {
    "url": "categories/python/index.html",
    "revision": "7156616be78f33ae47ef59a582c39bf2"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "8297f8fadecb61c3f80af0a3f4352577"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "7105c9f37ad33cd5e47e3be3641f481c"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "e4d2d2bf59cff9c5d06e2cc055bd696b"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "2fbf7f5b57fd38eb2883c18b4d5e306a"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "29980a0f371bac46515ed71a73fe2f62"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "48a1d5af35ea2ce04332db92bb6fa337"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "af9bbe786da29104dcecbfa10317af37"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "e0564e5bbf775706591912cf1708a890"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "45c91fc027e541115258524021e1b5b5"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "8214af4a0f8597a8a6ff56f46e4f42b3"
  },
  {
    "url": "categories/system/index.html",
    "revision": "cf9c4d2a82f5f5b5262871362925a67e"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "4214671905b4fc60218779eb440975e9"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "7504495882e9dcaf0a93c3a3d60e652f"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "19577b1950599905f4312abe710c9a02"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "92b636334bcf1618a982a5d8e8ceb800"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "e90f4558c7527bbe12a1309a716256a5"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "8afb3eb082ef5eafe81617a7afb8f828"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "18d68116e9fb8bde63b07c3ed4c19753"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "6984f8f451ed737ad4508fc7f5cd1a09"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "c3a79657a0fa8830d85a43463308f4ce"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "9055050890d8d4a2c2d00f687a779f29"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "d0fc50f7454bdedf3e91442e1cf970c4"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "2c9b55d7ce3d61adc58e84c14828782c"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "07b9dc55799334cacf02c1ffb5dc32b8"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "06d2ff514aeb4a3c3305a80276bc4185"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "5c7e1275254be83c02570b3ae45bd9ce"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "e8d069896d6b9ec2945f1d3de5e46ff4"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "684785ac8402a99d598b8e4a8f27ba8e"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "042402a3f1b507108305831d2d0af172"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "50a4af8d275894af2de41ee250495d47"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "40a57eea6a887113459a027c417fd17b"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "0889b48fa918538fc331709862b7ad8b"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "cc4ca2b59bc891ee14a31118cf7a8bc8"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "bb967fcc930903ff136226e5d28c97c5"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "6f24818b5ced52e1231845cf60ee30c9"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "b148f5e79efb9820fbb023e3afae284e"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "f128bb523d2e3a082a9c606c4ca496fd"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "4f7f426404b0dcd346296b655fe0c9a9"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "ed1fd1f2288aeb3e3f6b66f1d25b3267"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "bdf3dc18db8c12f702c036e8f7513d2f"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "b83dfab5620487bec0bd229789434c0d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "e069d6d5a26dc6d8ace653a70c03c94b"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "5f97ad54971d2e5aa22b71973d094b4e"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "14939d719c2d44e9431631fb6490112f"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "1830148577a44bee399d288421baca92"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "c220f965bbaa6bc2cadfaf3615dee636"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "00411be56c2598c5fbbe22c9607b0c66"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "cc1f17ffa6d60c544261ca24e8d5d9c9"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "470c3325ae14d52a72c90efc8e9cbaca"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "f26bdd5a860b5574b9f76ac88100958a"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "e594f0202e0f304ff93aee5ddf65cb2c"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "f220d00bb8ae88b5c561fa46d21c7c3a"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "319ca49755fb837e8fe4ec09890fcb7b"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "6ff27409745d948c503fd8f6f3f4eea8"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "87bb7b0fff5eca82e86c09c4d36da9af"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "9e7b804e6efdafcbe6d1c2cb9abd0e34"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "58b7fc969f474475084bf1273bb2a8f3"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "9994f5e438ccd7096cd74030c286b989"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "3547ca2057b49c8781380c0ea4bc7685"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "6ad0879a6283a4a0ac6b69474fcd0c61"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "e6f78f497735b039d19b740e81774121"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "681c54c80cc8b84aa10ae8fa89769740"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "adbfd6c22d01dd77a8dd37a668c205d2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "e3c1fa77c68b9e342592382586b2511d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "3f7b9db9107b1032fe0b11dc67d80b29"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "30bcb6f3659b3cc64950604621ef9de4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "ec08066247e91ee4eade8596b3cd206c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "0b265821da4210a094c2afbb2018e6b4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "ae6da12769892721b9e6466b88aad12f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "a771607b873158730010a556f87d12c1"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "af8689f49d7f89d8cdf12df4226a1557"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "9beb961322f6ebc697e5ec855d7b7ce0"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "b04d08f15000593a45c49e843401cb80"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "f7071c7af86bbf0bba37aabcbfa9d174"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "160cc0a90ed23e840fe0a5ce31db0e21"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "a4f2a527068050dc94dcd571c121ebb6"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "cfb9e561ea0dff1d702abe6d2c523d54"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "250860f8cb8a44454737d667cb18033a"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "c1839da357ce798f681833921f42e09c"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "a02defe6eea30da73eb5ee0fb42082e8"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "5d7824a458f057a870b6a9d95d293eec"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "ce1d92676f36be775df9cafbea12db08"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "79927279a97827e8c5ea0e497e3ead98"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "737d7ef6f43a31eb548208aad780f425"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "92165fb83987a43fe319b2f078842716"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "4e6997dc69279de96ea8529d7a654c64"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "f43c3f3a14579c60d61d65cd823c6874"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "bf098c1ffde7585043a6c50357bf6d31"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "2413cae281617a68fa6783222e145bd3"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "7462559d4d8dea38469e492876e951e0"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "1561f1af97b1d35e68eb33358875cb65"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "7dd42b1ceff428a6539c7a5795a22782"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "3d78ae48ef389514f94c6a05da22e5d4"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "380472a605d54b0b93b70fe55a49ceb1"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "47cdbf0b70ad33c4dfe888403684e61f"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "1739949a238ed31b1bc2b8e3b4898481"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "2990e029d9da2572ac2f187233894e40"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "6059b845961995363714ce431ceb1351"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "788b67768178b95e05c86c247a6ace02"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "859baf897999c5133bd50ea08eb8ede8"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "9787ab539ba3518e2304f217731bff46"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "14d5e93f9222d75e795b26743b10e9df"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "56811427feace4e9a489d6f0e1135b78"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "133e1c1b59426f46cef7c33fb88cb329"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "9ae966c88b5f460baf268cdd3fe1d62d"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "f5a6e96173c94d0467838017e4829576"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "5e01479a2affcf501e38d66c2bec56fe"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "37ac776fb92380942be9d61e5bcde188"
  },
  {
    "url": "favorite/index.html",
    "revision": "9eba1c2b89c7d1ca4763d19271bda005"
  },
  {
    "url": "index.html",
    "revision": "3ec9862260e4db51bb03824830909d1f"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "e6641b6faf94777a72a9ada32119174e"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "426a21d65b026418cf0609da84d5ef8e"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "8dfb4d888918d5446edfaadc74c2b444"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "9ab55856d947ae131611ccfee1b1401e"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "f18c12ed0016bb81fcc6feaa25c4d418"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "9cfbe9541d4ec76956e2a0699fa3e80c"
  },
  {
    "url": "note/index.html",
    "revision": "a3b608efe1c48a7d66a3f0b46c10a7ce"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "6cf4824a94e4b9c503bbc3f74d4b6d7e"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "39a5ac6b06daaae6689201a7b5c6b2b8"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "7bbdfe96bc53cbb667d62a2039fee02f"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "1bc81cb8f66eacf5a33536e2016fec68"
  },
  {
    "url": "share/index.html",
    "revision": "896f80ed8264e182ee95a9d4f15852c5"
  },
  {
    "url": "single/about_me.html",
    "revision": "379dd2bd996bab53bf184e1d198fe3f6"
  },
  {
    "url": "single/all_article.html",
    "revision": "4b69e4bf14f99457536220d8ee7905ca"
  },
  {
    "url": "single/welcome.html",
    "revision": "49a6b36ba7355a613f943dadec4b9377"
  },
  {
    "url": "test/index.html",
    "revision": "a41187ade1017bbcb1eaab227dd24975"
  },
  {
    "url": "test/test.html",
    "revision": "8500bdbd0370c4cfe55f8199ea8cbcc8"
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
