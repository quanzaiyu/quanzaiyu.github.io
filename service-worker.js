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
    "revision": "5582d6802f6f01baf06ddfd12aff487b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "7449706e1cfa7f2f3df2d523ed8bcdd1"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "36fe03f5a27c52651988f80be2f359f4"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "85b4b09b1eaf518e6c0689ce1d07d3a6"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "5d59f8deb633059cd49feab8a93f8c1d"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "37e315858135c487027f2dbad5f3f77c"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4f77a0edb99f6b425c994378ffa61f92"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "f8d4cec1e0592a8d40d91b081500b4ad"
  },
  {
    "url": "articles/index.html",
    "revision": "bdd8d3c79fc96e96b977ed1f939531a0"
  },
  {
    "url": "assets/css/0.styles.4691392f.css",
    "revision": "edd5d1e847937d8c111ca63f389f837b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3530781f.js",
    "revision": "102972f516c4d38e7128488eccf298de"
  },
  {
    "url": "assets/js/10.11dcbe7b.js",
    "revision": "5c0648b5b7e7f40f3dfaf966b89e2834"
  },
  {
    "url": "assets/js/11.e1ed45e0.js",
    "revision": "d9c064afe5a32ab350dbc963a79f0b69"
  },
  {
    "url": "assets/js/12.511b711b.js",
    "revision": "352f1f1d12aefbf356ded0c920e6de24"
  },
  {
    "url": "assets/js/13.776b02ff.js",
    "revision": "3db204985d6b2bc5a05608429a0b90e3"
  },
  {
    "url": "assets/js/14.9bfac5f2.js",
    "revision": "fabe48fc75db067d2fbea30e2f120ddc"
  },
  {
    "url": "assets/js/15.70a29f75.js",
    "revision": "aa473d0e0d7cb9b621aacc7033b1557b"
  },
  {
    "url": "assets/js/16.866ebf81.js",
    "revision": "4ac08b3e3caad0a3fe2b38009420b22a"
  },
  {
    "url": "assets/js/2.78c40e8d.js",
    "revision": "bb29228ca81fc8458359a5b435aeb4dc"
  },
  {
    "url": "assets/js/5.9e615a5d.js",
    "revision": "1c7a7f9066040c5b94fbde1ec17c336c"
  },
  {
    "url": "assets/js/6.6cfd8194.js",
    "revision": "20438969bc504f382001f7ea7c2cc592"
  },
  {
    "url": "assets/js/7.4d7e86f5.js",
    "revision": "f630f9cfdbf7aee783dc666106ff45f9"
  },
  {
    "url": "assets/js/8.af207216.js",
    "revision": "b76700060a7e556461ec14cf02df3559"
  },
  {
    "url": "assets/js/9.9ceb6f45.js",
    "revision": "57e0f86f7799ebecb31f950221f2d2fd"
  },
  {
    "url": "assets/js/vendors~docsearch.28d51d8e.js",
    "revision": "80a28fa993fc2e64a560467ca740504c"
  },
  {
    "url": "blog/index.html",
    "revision": "b0994ae9cd1757384d795c25a6660923"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "3a7a82503375178a03a5e3cf03091e8c"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1e4ab5b1a4ccc567843616c2f02733a0"
  },
  {
    "url": "books/index.html",
    "revision": "2b264b17cd02eb6b8acabc9a56efd45b"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "be0e6ee9212b42fbc8d0875eb81ebe8f"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "206cccfb0a980fb104e5c368d8935b9a"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "3ee626d19c2defb25a98b2ad04400d39"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "e9429637c79ba60cd24bb5ad9c49fec0"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "0dd8878f34d1f253aedf059d255623ce"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "459cb4f51a362bb7f4cea49b180cfe4b"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ae9512dbcc27bf40fff4e67a6685a77e"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "9d0067a22bebdb8bd0eefc5a4dd2eba2"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "f0cf127415ff16465556dd06779af12e"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "3071fd6d0d4a6e2189101e408279b7bd"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "acf08064283551dc5175f807bb7308f9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "0e3e503dd1dd1cedfc77192d88bd845d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "648c07291875e703c47a4d58351bb091"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "dc0491a1f7b64beb1656faec86569513"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "d33efc0fbdc8d7644b1ab7a34138847c"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "9517286be913febe76ec45de7246c993"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "50fcc5fbd8de38ba16bfc95f747ba5d9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "e609c86803822adb4b9673ce0967b46b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "9d3fbc20a8c8c9dfecbccdf546d290de"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "0daf1bb6cce25b2380fd36aefb235f20"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "384c2a824d13ad48585b9c1427e5dfea"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "d8b14d18d86cea578fd825bdd68fdecb"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "c30e3e62a8adf4b5bebf74f748892808"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "048aa4e90f59f22c8ad24c6c4bbd7602"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "3d7edee1241b08d16d29ece2dbfd60a8"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "7a3b618276675ebfe657bd983e25d8e2"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "3cbbf637225b294195fa4dd6e2cda49c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "4844f6aaf56add379b117815b41bafaa"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "0e89430b349bb7ed83aabeb521aa4e71"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "8f5eaa67643935919f9b900150616df7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "2567bd93a9064f6230e739b187542200"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "a9c26c6754468fde3c759f0ff45f0c98"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "441477b6d228c964e384e48248925212"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "272de117d79e9803ee234064d2e2d263"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "1e6fc81cdc4de90da45edf49715ab4ea"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "df9d9a4577386640b490a30e093b883b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "56424fff21eb8d762c86642be4dfc886"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "5c377457c032a4f819017fc05ccaa54f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "7e76f8bae8060fbfa4efd7d9ecee6a85"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "cea6769cc477a0c110e336a41140d803"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "90d60b72f7b960530e37be0c24c47a9d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "3b80f867665bab16420256b8011f38cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "673c756af2317ba918a8ea0c73314e16"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "277d209736b62c3f4230342a4fb2782d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0be922602d2a17fecdf863b5da8df752"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "9f98cce87a1de8e9b534444d49842b39"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "82e6bf96fc2cca998a41a36fe7ebca92"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "b1ce6ed5eee15c42c906da693463a367"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "d555fcf976f3da9208a863f386764c58"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b500fb126db852bc68e97edd78f1f2a0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "66376b7c3478c9b1660ac67a932646fa"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "11c5af5f72d9aa54edc604d8a8ed9f76"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "452fe108d8c9b3526f5242ea21731c47"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "537d758ff0ce6ba0b096635396d7564c"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "b6f9f98106e7defba4adfd758531f153"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "6d4f1ddec437b829c80394470dfa7543"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b2fb6a9bb2c587d61671f70e86318a74"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "2aca5296a1dde6efab359fab755851b7"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "fb4c9e35090977a52b9f12e1efc5e971"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "d07cf2e90b799ef853c9ee4a7421db4f"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "cd03acdba84079e0ac5cd0fdfbcb6aae"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "f9e93f36f36b9e9240ed1ff2a5bfab5b"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "eb90b734f21fa6e807397e925f94a10e"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "d1561814427fac46b15d4fd98081de95"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "89501b48e5746a68b3eab3570b750d7c"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e9f881d4a5f5d14b6e8e5e6a927da287"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "0083739e50064c9a95ed3375a622e2cd"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "c2aefc3c9796efeba2e3aac166b815f0"
  },
  {
    "url": "categories/database/index.html",
    "revision": "c933ec7c6cf814556fdebc66ea3f32e7"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "8f620a218a96d7fdd5165c7af20f44b0"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "88624c78f272a16582fef0d16c47e5df"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "18f83cebd07219418733f5f57527258e"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "7c09fb3d8e1532a759bd0a156975bdb9"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "0ae46c4c4ed2275fd6d4be4caf7d83c7"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "ec6d12c4dca90a25fdaa713a05894920"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "6782f8128e30996bf36013565e6602b7"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "e51413e9ed7429df459b5812fa24311d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "86ee285468461bc5670c540fc5f2b939"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "08d05a93dcfd7d5c792df01dc7c7aaaa"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "5acfb2dada23ae631ce6e64ec5fdf2c2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "9838886a293d575630523906cc7958c7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "eb09487eb45df46c5ba097ceba2b85c4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "3e437c14d1a2eb0a446c29e23df2e4dd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "57a88bc1bea194f69e3641df1ce71d20"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "1dbc389b3ba4c6a2157f267d3ea4bb22"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "f96ae01e4cee622b23f8c405b25907c4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "a0a35b14da6bbcc14c3e3e0de99a54f7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "4b61cea75767b77d9c4aaa8482948dd5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6231724aa5dad10e6164965a9ef03d62"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "2e5c1190eb234edb068e1cf71f337dfd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "610b07eaf0bf8ae24b36083e035ab9cd"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "f5e99c36b99ff602555f87be51dd6fd9"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "d95c722e7c82f31cde377d0e708e1f41"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "e3c619bcb3da2c59fa84dc504c26f55f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "00d40eb055ce8e41012f17b70073fba4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "c917532b87dfdcb7437133c991632742"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "94ce1f14af51f104aa299fc537d46da5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "fe1d418c61a6d96d177365b3755a1e98"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "d87b6c85ce509c6f50d6b4c31955863a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "5b2b3f3a4c6661383defdae3ac8dc096"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "44a49084c04af5cc5e948ef6fc6ef2bb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "c8ba0e6e93a5bba6ef06057fee0312fc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "f27591a03adba37aa390c9c49f832f46"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b3cfec3fb44b9d54e04ba9fe1526dbd7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "27def96aa5a854b6627426654a49abb2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "040b6f6c3bf699806a8504f6475cb6f6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "ad266107bdd45c629f7068940f9d6f54"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "2fc075bcfffd2cc482e099066cacdab7"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "09cb3cbf3bcc5a8454cdebea0327e150"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "464f3c3ed7370096c2ebe9520880d855"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4099aef22fffcce5574b719739e55fb0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "0aa86adfa47c24392453c48be3979320"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "022a807e9ababdd9d59d03869277c40b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "de43fe321edc19ae41e786905f5d35fc"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "70c96c2223d860d0a229fc8ccb53da81"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "7e33e54bf864660e56b90c983de29a9f"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "8a4523c5e04cb1b7c08051fed82fd5db"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "9dd6be0db6c12810cd7be044c36a5f26"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "8437dab91b0cf1069f048f7d79ee4b15"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "70baeea9f0953d5b7eba209673faa712"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "7b33a55ed9322f54bb401938b313e7c8"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "6acf54a18a9aca8f20efc2d52c4d9133"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "8c17fd922fa33c6e213a789dc6fa8a82"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "0e1d25cc76cb9a829bd7b60d18a08ff6"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "b7becddcab648a91034541365084f51f"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "d2ae99d0e24a00bc2682c0902b72332c"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "6385e94f659dd5099fe5909e6d646bb4"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "4166835833d39492e04f4033fb5e8d47"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "0afbf06f0206849f5f8118230bc109fe"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "75c9c5abdf117ca65c4c5868d8df7208"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "f3137057f274bd53fe548b26959d2577"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "3efc7e373080f0c93d12222412ebf0a7"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "d4db9697bcbc4e8426dbccca12c295bb"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "5704e5a8adc758c0b0e12217a1c71c7b"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "12dc75c6d57dca518f9e146828479524"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "5f1bfa914f702a80abe57dbcab427a64"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "7049d31b2e3aea59563389f6f7b61ca8"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "6d3e0dd5dcaeacf0b30c366b5abcdecf"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "58893d8aa4e7ed85abddee03115bfe98"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "6bd6dd67ebd061f2297c68dc68fdca4f"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "1287349a9fe3ff1f185aa5024200ff0a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "dfe20924b2346cee907cb9cd4577a403"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "3feb3916cf4f9917123db4960163aa63"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ff6216f2c42058b31b4cf2c86c4de9cb"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "cc6dd1195ccc7a4303a979c3175f2be0"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ae6b988efa731ca0efebe2b0ae4eb6ed"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "8700bf21a1b323874838e177d31b5000"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "806ee5b5c9edd7143422cec4d0bf79d5"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "7cf42ad7b98c3138a5c79301b407c86e"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "bab50e5c09a7759a321408eb418cf947"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "666b19495e4377bd69d0be65fad52332"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "961410156420889053ac5ac28c919c05"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "adf2589afb5711d85d7ddee1730884dc"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "878c13712aa7754dc6895b6935059eed"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "a1eb451569a6e8500b1cb0d4a3c2756b"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "f5f2e8522dfd47b4e513d7f782e710d5"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "58e87ead398bba80f2b685e54cc64b22"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "7c9768b09c40af5d15c545cbb82e5838"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "573aabacc80cf1ce6d91e71e63ce969a"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "773966ec49c1404ff7097bdf9b677e39"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "f7e67b2372bf53d8b30fe102ee720704"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "b4f6685ead3e136ccf8327d0ada913a0"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "84559a72e1ee876507cd68630d79a5af"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a8693df436a51cc61200779fac79a321"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "0043de8a4abc441d78800dca5a5ee82f"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "e5c32df7aa06aec972cb06459fb64cf3"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "310846dbdcb5b6e159514149a5d53ad7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "f6ef44266ea8c20d9761ddf63207963d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "a8d7c42cedeb1626fd367572b8b2ed37"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "6b65db60f977c8c810023e8d2f981efc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "4960dbbb06f11feb42656c2dd8ad41b8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "9ebae3378ec9e4832096b69184d61aef"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "dffc92240a33e30b5bd2ed213dc0eefd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "7914f18d9b6bbd6f2ce47b529c35d2b5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "da7c2fc39d142151d1b9078112ea9f03"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "ad7ed36a7779f84bf5c46182bda0a0ec"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "f589a6e49d4219a7441d20fc54badeac"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "969542644ea86385090e2d43ee3d7cf5"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "93e5e0ac20768ce941defbed17b8c769"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "345a9fb33fe5a4c473cf9543efccf433"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "2df02be3206b2ae01085b2d2a5402f68"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "b8cf647804af40a178814c4ea0f5289c"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "eb6ad4abf98185e3ca7d6c9759530a2e"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "bab90235dcef77f8be2e65a47244225e"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "91989371f5bb14b1ef97caa2974f67c3"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "3459876cb69650f5ba03f93f82988df1"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ffa85d8c93b3186a7fe08f60fe07c7e9"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "70a2277ddb3309215e93042cb359161f"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "434a09db7b62fcce2f2a01ab0aba33f8"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "b2b8e749cb7be3dcfd60691e1380473e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "bff298b79a6c03b043d67f92ea605ed0"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "8e68062d89da6bbfd4ee247c2e63bda1"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "155264f6a29b6b64572f85a3231bfd77"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "c74ae6cba261233a44078c6ea59ce985"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "0835336e7670a7d286194bb16b3082ca"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "32e8a56da9f20e1511d3bd54a0383887"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "11ec54c84a222e6f8de8df4a734ca7bc"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "a47a376f67af41262f595c3f8bc999e8"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "6340309720983281d328733d8ad94599"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "027407bbe0f184b173fe0df0370895e2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "5f03c01bd72c534843042e24235eb135"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "66947d9d5a9e6d2efe9c85b6b80b8579"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "6bc242cd51175f877ed61920b0967b1d"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "0e9fe63258135957f7c9e447673e0f04"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "b7ba2a332c487dc2e5c6ad20ef952d6b"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "590a7d5de069b98bd5e16f2464ca651f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "d8105a247b089f8b06d98f7abeb1087d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "f4bc410e29ecb55baf34540b20785f8e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "18ddee69c9d2952c4767a1637c923b36"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "4de45de95a2d2993b672809cf345ab26"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "b50522818a7b124eed0c833b7913e1e0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "5fe54c9bcb42bae048d636265dde78b7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "0f6034b1dcd7b5b1de2e995e4545b08b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "4dc0802c064612333c35cf99af99f166"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "72ea4f77e5461766c57416a9a8302ec2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "a8de792710da7c67de26e90d70eae814"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "818b78ceef608591b858ea823eec1fd0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "746dd9d152825a4c9f58115e71c031f2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "0ec40247758fcea9e1e4955022b8c928"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "eceaf922d5f616078ae6e7b236eeca9b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "cfe633996a4617fdfee2968f5bbb0925"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "8edcd3b462eea6b3a5cd1459d093dd29"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "629492f2623ab8c2ce9ce74f171ae22a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "52952e0710335b6d946d8b1b3c6beda0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "50c0f3a44a3b5e8d1cf3e92cca09ac24"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "a1957aae047a299fa96e288029b06034"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "4f052ba5ca6b4ec59a5e8dd177825c28"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "9a76d6caefe3a77cae102bd3b3c182c4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "90c70d4452a2ff25ad4228af93e7bd03"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "6d6f0a06ba7b0900fa3fe12ab7c3c935"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "a173367089e7f98095ee2e6bca137263"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "8ed8e41317140b2ea50b16232df79dae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "877977c30d5610ec7285da3c459f7945"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "bc9b72f9eccb0efee41cd9b2e50f136b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "1498ae7b82f3d8992084750eecbf8ffd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "0c22c31da1146d42fd3187f5dd88d481"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "3b601a28d1900cd5a21e46bf4ab66eb9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "dceeb435d69a7e105c14ad5303aa6774"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "0d3df77f5683698747d94b53c836b406"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "3bd22ce84b015d159a9de9de23c0b7cf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "635726db17690e75dc6a2fe84a66fc80"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "db15822fc214bf972dda1e63b415fa95"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "5e2926672e9fd10459fb6b4bc0b5d67c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "408d5ef5e9646941db6fdf406dfb5b2b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "fd9356cae0fae2349401b271922586df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "e8728213cbe1266b0de8eae833b5d557"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "6c9b3351c92c9e6044565534d829255f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "cb8bdb239d0d508da323079fdfec3353"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "278c6d16219c0ca69fb9362f080b3fb4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "7e1a9347309ffea84bfd4b8f2521abee"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "38145b14ebccb999f3cde92b04cb8499"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "b0a4779cae359651a2c77d55b5189401"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "445c401de5602abd7f2aa32da978c13a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "c299ac38cae8d2b973aa139663f0a7f3"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "3f1740696dd69016d028403acedb12f7"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "807952512656a0f2866888f68c3429d1"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "8c83849aea6fae44da4c223dc170290a"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "7b510c8120c92755de7d6beb94ac178f"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c9140399051f656f73ad2facbfffbebd"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "5795c7ab6be9b2120105c9da61091568"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "0689f1ad44bbc338922fc0ce96829688"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "e5fe2bd0a5c97efc6bb18a49b0a23659"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "bd057bd97daeec4b2fbaf1a6c50dfcea"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "870bfe11c18a401b718c9b75656bba7f"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "175fb0ad83453e4854478c00af408ae0"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7cc804c69fd088fbc9468efbfc766d61"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "c2b04a85c5f981765ebb2db64be4edec"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "4a680baa65f8dc7c8bd85d48a9ac3a66"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "2496c2d55fa5448b300723f8587c2353"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "34c70b173a0f9f1234a767964fb7dabf"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "774cb22c509714c5c83b6c143c165191"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "02dd7b2136c35ccfec07e67922274cb8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "769b9ac07f9a1432fe92efb33f41b9b1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "5b4d1f2c3856207661cf446b72c8c659"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "cd84292304ab8747e682312c11503187"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "dde502d8b5fd99795ed972182998a3a4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "13d0fac8588d2111a5b7e72f234bd6a1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "89b2749b4fc40eb1243dc5d4c78df8f9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "e9dfe522a5f7a65eb1f59f2fd4172734"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "1cb9ddcffff0cd6edb9e0d49e9ea9529"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "dcf9da1a154669214b54f4ec47bf0609"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "a18f5349a429ad96f9e6e68f5331b9b5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "b087402ea36a0e6e7dbb9ceb12aa8ed4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "4ec96bfcfa4c1ee53680aefdf3899392"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "a79d70bea3055a2dff29a566196aa864"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "7857ce7c4c4a93d98f2528c0273f1c17"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "a1e09b309df7aaad667639ef716c77e3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "9dd77200cbf5aeb8b9e1358c5e7c2505"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "86b8f8d5402b81a96ecaf7d8f82be576"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "b1bc77047826e076daf0d213c871d7a8"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "9184640e978e344884c312a808772319"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "0bd187b1075b1f75330f113631e74452"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "ecc41d7ea80741ba42ca4e239d05ab79"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "600b4fa518072f9f2a949f99fbbbe4c8"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "e95cb4ce10826503fe23e12e8529d818"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "70f59a5794a8f61d80098a91919e68e7"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "96222d62891e278ff0615a02daa12989"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "0eed5936129672db363a83d82025c32a"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a263646ba41de4bdec6ffe3d4d0ebc07"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "c505ff167314ab9e30353a772ccbb2fc"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "f4ed124e0e5f060346031ba0269c199d"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "2aa3662fb2d4f89baca5198d0ceb906d"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "d576f54462c4a3754904625d0cea5848"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "a84742a3df30236bc6c576a63f70237f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "1566cf62c7cad946eb281e1e72a5c188"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "b021ac6df163d7b8c9092f7c93fd1033"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "038e7787ab76fc38a6848f572dfde6b3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "82a7306c0940145ab0a46573642fc2f3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "7e02d47207861bd347767a2be8da6c4b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "136379ba543c65ae37114f343557c0bf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "d58556f024ffdf77d90110713887d96e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "ec9459014aa1756abd6db926bc147336"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "718bcf5f1632b807cafb9a90e07b1140"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "ca0e70d1f63be5e8960c64fc32dcb779"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "616e932363adf99b30da4ab241ecc689"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "da6a8d6462682e8690d86956cc2b793d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "71844cb3cf586ac6193fe79703edc7e6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "de453101fa8522ead3abdb342480e215"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "d9464f2fde8212aaf36fd975f03ded16"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "ac4f905a2f9f0f0c61a3d0dc62fd7efe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "e7e7d45284c68bb91e3607b06df927d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "282180fe521d3f2635c74dbf350857fe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "d00b76a4a9247650400fdb7ce790edfb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "f93b7c5a7bd43b114c03f984c0939cdb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "6ee0edb4836d8357499187a472269d5d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "71ac53bcfcd3b3104a2b60edd37c77d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "b46ef3f202331bad01314ca7c8927a64"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "05e6472a62df33d20a5ff33fb87a38b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "9cd9bc51f7f4f34f12efba8be36f0400"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "11ca577ea327ff96addb18e44b4661d5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "a4e2b08951ecab0416ddc2d232096811"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "bf30f011c2e620b2f5025717197fde97"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "b16c6b5b21499b46854d47e7ed44ec51"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "a5ba9bb56e7be41e684ce6cddb9d80d9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "caadbc605be567248542be6509ac0aef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "8a4d2b596f78632da1d6d295ffe48a9b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "1893f739851c5c5aee344d4188dad36c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "a34d4b6ca2b9c981aa449b674280106c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "aff00f562b60a936b9870110b2c3ea00"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "aefdeebee3480ef662b7a561006302a0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "a85148d365aa31223be17cb844565360"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "d3a0c21bbffb15e2752cefd940502bfe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "6a6045bcb172cf7630561b50c8c277c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "0f4fd556d0d9a7693267a3e792f89b0c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "aa180cd7950accfad6e6a033811dbeae"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "801b021e03f67e4093e958d1cbc214c7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "b8c7e2d311fbb280805d09772d7c4c0a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "ba57e7e02ad0bd58fb6c351b2e9690f7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "a80d96baee112ca862b91e760fa8eb9b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "aac28420d5c40a4af950ec8c2d4f3a2d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "53056d67900e58269ffb67714b246ca4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "f53c840431277d75a9eb469b69da39ee"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "9d6c8f2ed5dcffbf205d7f2a42065440"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "a56192d3f722a63a0895346cc85eaf7e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "075ff8bd28dd9d097bcee93c41f3994c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "b22ba87c20fb2c804c72998c93b7b72e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "20a27ca9cf86806980274d1ff9146aec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "59be236a2b4d9508498f17fe358f5679"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "635e2c797c03e82f3867bb1e2398139c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "a5f849ab796833c34b1ad6782e817c7e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "476cbdc0cca9a6be76e7070ded1fc95a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "87c12db49d64f8d5f014691096bed240"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "de7fe08738694c376dc05fc5131d0fde"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "9d9e5ae73bde849fa3ba3d1e05216a08"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "ac6a8626eafc3347999f0d6722064a76"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "008db15cc3ea9cfb7a3d6ccb9a037317"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "a8a6b39390b40534b7d1729688c1131a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "1d0ed32e375ec7202849153cf5c93e40"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "b936bdb5b36668f9f0836fa7f7d82493"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "eb001c6809b41ec883b6f5a1b29cecb0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "26964804c002bf2419bfd176869750e6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "3bde5f3b285e021bc8f84aa54fba5845"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "dbff304c8aebb244491dc4ccda31510a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "78bb592ae54221387eb7ae12a81c8810"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "6c8a333ec960af95642f86935d819833"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "798a2743f44d636480777dd8d70f32ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "e529d21c462f5d60329c57e7a74d91ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "d6daf98ada158aad8e6a94fbff20e82d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "b9f3af027921ea6396aba05a6d50918a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "b9fd8c8fb993ad740fd1113e7fadc73e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "a46cbc1d68f44349d1e3d9f5a9f45948"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1da1a720930929fa9d4166c641bf9ad8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "fbe6b40584f35e3d03fd66c949f33a1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "df38cb049c94c0c9dc5c5d7e0f23b577"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "4dc029445efe8f391075d44a1bd2b6fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "24573c82326d26d040312a15a37f4ae5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "9c4cb1b66e394789f73323b6d233852a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "491339f0aa263ba34293b5b17d99d758"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "5eb650069bf12e4ed298f2d408215a7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "4c9fca4d5021b44e81ac8650fad1e8a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "d7644f5845ef4ed5a15636a0cf94c82c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "12fcf1cb40824803fcb0a2bb06c90e96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "d36212ee0288e103954fd6c83b4749c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "a81de05e89da5647e540fc2aa814c55b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "8de5c932c722b0c7a0de9233951c9e59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "523516e3208b84d8d43d58a3aadc518d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "b5d909083391cdc6555c07f1f1e2f644"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "eb76123c1c1c1ea559ae59de57fb2b6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "3235b96272f0a06636cc95df71b9a81c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1d9ef50d4bdf66be7b5c4b1d866f2e19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "f3243482b45c7cb4acab6240ff9eb107"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "db253e9f5150b584dfbc8678eedbcba0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c050fd0bf4a8f6218846c873852f93fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "f4fc9dc6e112c3b27539e3a6a0273120"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "8ad4ceaaedb1a6f277db31980b9af5c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "34d929e245be528d5fe3434ba3c355aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "c381207c12193f81730b798264ed4241"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "837e4aeddde7efb4bbdec553c0dcc59e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "05b8ac913987bb1d4291b7a15d1ebd07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "bf3998dd5c1ac6068c28aa138bd49830"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "8ba216fe678286fd1178120655a96fe0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b1b48f7ab75defd736bb187970dd7486"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "ea534be18f580d06b6d7c080a04fa929"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "b567120dc377c9bb4d5a8998f8250cda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "e07d0cc753b0f892550d762326f2a5f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "d40b5ad240cbfe497e213c89dba99a3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "071ad8f326dae27998da33d7607a06f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "7d196aeaa093563c0ceef8e4b3a61d25"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "90418941c7220c0374f6ddc67c208d3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "d0a27468325b89fd2ae8a20cab0ec7e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "bba766ab300bb757c8f6c84c718cc7a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "cba801be86427e916190f70acfbd6093"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "6317f86ba03ed46db20f6b3cbba39ee9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "d63ca8df3feffd46cf2e99f3c10c90b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "56292e56efa6e03ef6ae4a9cd601add8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "834bf1a4fe7959a43039c8fd86173fee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "0403abe74dce76cb1923064645204e10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "7a4e305adab9d04f96da238e999d6460"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "cac4c05db5897a7d2b2c396bedf20075"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "4a60f2bb5d193799b6fdc155fe23b4fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "76996174721f177912687283d79110cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "9c95d1e4b245ed2c60583b7e3ba6c634"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "df9d8fab1982f8e79e0cbe546c660e2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "1755f73c7ba12d40f666008bc81f7dfc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "5a93a386340600757894284f20f7405d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "c3fc5a0fb9b112c63c2b9534fca38eb9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "36f26ab402c6900d99075763fa78fc29"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "51d3cd085cae25b7a593a0d6a2a6174f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "b9555692551a6133cdae499edf88a439"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "18a43ae421b95f5f7bc66c1a58477414"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "0e00cd25e30454376e81fa327284a0f1"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "452a3e105a3dcb5b66f4c9ae2a83994a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "89da164dde856d364e7220a0db339d34"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "475e1ad393ea929e2e62e1a703da8773"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d6ee7456a6f3b91c555efe5e812f0ab7"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "a8b441d9356695f5477bb6b28c30ba58"
  },
  {
    "url": "categories/index.html",
    "revision": "7e359e5748b115693a48e055c01d05f6"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "714bbd17371adc867e4ed94aa084c664"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "73ee8688ee8cce3ffaebff7e3992261f"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "f85d0f3e26b6b5e64a0f09dee4d366fd"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "8d7a668ab12b312a93a2ba0ee396ee6b"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "94f3948f3ea80c9f3a44a29c8019789e"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "0e4719e92be9ddf75d6f900e12a9cc7a"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "63cd6e6bc47dfc7cbe076c16f87a9837"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "7c725248414b22b8c5047325d8e56c33"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "23092a45eac415841c397102a6925a03"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "90a02024e512e9e0c3f99e3a3f2cbb04"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2672eeff5a025682d60695541bf1a245"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "7ca2fadb22fc06220ded95d218c6bd97"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "08aa8e312612c70c8cbb4fb7443f6ba0"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "2eb9dceadf816a276897a0d7e199809b"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "28d57aa681d3f6ec75aad5f93d258805"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "3074f2168ff41fd4d180ce072a89b355"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "4da85a908ee8654bd589d2f78c0e9831"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "1094813423d20a746bd2a5b8ab152c08"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "1ff1cd7089035d9278469c7038c1daa5"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "0a8cd9cd76ae814608303c0aeb511fe5"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "e8c3064193da6ab0b5c2789a6090245a"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "f592b48e31604b31401178b13743b534"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "3440cc62e637d9c8de7b800ba0784c7a"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "a761902cd90b4ea95bc8e053036362a6"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "4fc7295d91bfd33e12ab362fddede91f"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "883471b564405dc3616898495d55ee6f"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "d496b2a0a34b91c740b09548b15ea4ed"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "aac206a6bcbf11e8bfeda00887df3be0"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "21018fe76da9826df306c7a76252d242"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "1129d9820bcdb483f8655b8e1efd2d72"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "ddc6f056091797b58b937faf962c1329"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "7991c6349051e0f1b61856f8ef936a94"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "a289fb65bc60d13cc54715f49c7c2989"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "aad58285491b4da706a122186f6b9ae0"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "f01178849bea434d7a674404ab1ad83d"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "cbb863908ba63a97a28b2c41ba174af7"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "0a41da8df20ecda258271cf47a415221"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "43064b106ecebdd3d4b39fcc51ab2982"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "37d1368b798b037cd4e5cd5c55693712"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "c68298986bcb572c586c0813443e547c"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "992a94e3556dccc04f56bc91b539523e"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "d645d3fbc9ea97ff4419ad86b6960d40"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "65b339d7bf023330e766b916c61fa0b1"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "34721896d64093fdbf87da0f8a57ad40"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "34404f5f004f5d1e46e27d1137073c13"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "024dbba30a44b481ebed72e8665dbca7"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "6a7d378b8e8983d00e91ade44cf81969"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "a53e2375361aefd5f78a981ae8a90ec5"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "a205a15fbaf5688729b69cd8ef0ae6b4"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "67c073558cb1539d799748939fe7d5e5"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "d4fb18bb452b7947fb2e7b00f38df8ba"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "b0b12888bbc5b28c857bd4edd93845c6"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "3f697171b83980f2539ed32ab7b4f2ef"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "8beaf17f6044b1d609e851d16b3f5155"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "a4ac5fa322ae33364150b6d50a9845e9"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "9ee5c40f2edcbc57474bf4f29c56f980"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "7341e307234ea27672f3432b123225d7"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "7e37ab6e1ea604c65e601842fe29396f"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "3c06d40df4ac84e80c3b8990b0036838"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "f3712153f0f128474c5048f6a2e0549e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "008647507d51f17ee9ea8d75bd0c199e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "60a51c3a7bc9b7162db8c69c5ee80986"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "e1547bd670bd20e4f7f9d4b161cd3e61"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "8dc845e596c803ad82d6e342719231c5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "35073d9c487908791a4d9c08a59607a1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "39f3eb61584b079431cbb36f3a3ab818"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "021d8137595dadb291bf43f9fbd9ef0e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "fe1691ddb5a88d40e5ca49f494a2f4ef"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "d82a1b4b0f8afd4388ecf6133af92fcf"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "d332034fd41f3071d0023db4aba03086"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "77e266750568c8bc41f10a4f2bfb3f69"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "0fcc6615f699b0a124bb373aead91cb4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "717a5e58c9512ad546f1f6285520d401"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "2c55cfe35b6faedcb1d37e26e74f91f3"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "07e3c1459792b98bbe9f53bd1e1f01a2"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "1410783a4fcb913af551a90b4e635e71"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "71a110f9280f6b5411656bf4f5bb5a20"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "bd510b863a87cd95d4662390888af4d4"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "b84cfccc4a5550d9cd6dc3109fd4c71b"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "c0b4e4182fe4f8e82a7523a4fc6b8f67"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "50397f831aa75ce36afb15d4ce4e57f5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "c59cb3b5d2b2a7d1ceaa95030e80c945"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "99b404eac81b596d5dbcbcc0c1ab5b3a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "157986fc7113ae42be64bb10754ce3f4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "38ca4b53f3949a917b82ed01e6fc57b2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "a54580fe2f8b68b8eabd02e6dc38e18a"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "b2b01ec4443739b61e16ec9fe13f26f2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "bc32233d9c0cde0c2b6a4f6e5905f4b3"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "84c39a8819adfe0e2b508a786497c2ab"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "a1de92a7026895fa60e792c783e749f0"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "0523598b0916beda3f76ca1cb48c273f"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "4563d866f4ee35b64c6ec2cfaf7396c2"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "c11dcfa2767a4240a9d04e5fb1188326"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "313a8c458b846e81f99228de05a239a6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d20bdbccd7098738b40f5fb7fe7c4d19"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "1d388a2dba405fa8a7f8b1be262440fa"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "f268bdb2a2599adf21fc75d5fc37648b"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "382d35c68a748dd4a8126f61361675d4"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "1e689641a47b22823be1d02a1505ca81"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "6896d65a0a4904b6b0b356eadfad0fcf"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "6414fde516ca8881866d630c4f23dade"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "91c9eb51c61949d50b8697b9d319e121"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "2ae3ee0066d5d1d5603c4c97377a1204"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "5cea688c9f36666c6ec1675e5c9391ee"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "fc70d483c93c6bc7d6da613c92ef34af"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "a0529914c3ddc5a43cb12144815704ba"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "6858573eb602aeb46659445f2d2a81ba"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "5f5181ac7982db63224e635f7e5e2f5b"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "c6ddb88c46ccb7cbdb6e2a75bd0e55a1"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "fa6d353d6b5086943959f4fd537b793a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "8d270ec001d9ff2c7c24cecc63dd8f3c"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "5613cfcfa1866ed8b08d05298e33e59d"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "cdeb52d606ce4e7fe62978bc44ae685f"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "bdb8fd96ce4e4ff281c7068a00709a1f"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "28552abe3d141195bed6bfd2c54daecb"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "29d971dc8bd9604c7866dbd5f8dc9767"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "6bb01766e4e55b9b1e6c0ed3168d05d6"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "46a9708909453efebf99269f05dc8153"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "84637eb839ee39c51a38e25deb7f8744"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "d586cff3f51299b320301dfdb897643d"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "fd067a96bb4c5e7188fccc0f2feb8217"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "f12c1618ff5be97478fefcb4dc878385"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "632c66047d8ceb902822dd185704dfa7"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "a13c495d79151e58c60839cf0bb64e56"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "1a3b6651c46acffb72cb7a983301fc51"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "1c275d825373c8362eeccbe9dadb8cb9"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "34a4623534d214242d3668604dcf9f19"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "7b7cac9de603e5d0e7cb3f2a4d6cab97"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "a86b7c0c49418b6d5eaaf9a6353b3b37"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "4751a3a351064de62d38be1f3b2aab43"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "c58728232fee2a9dd4980b6499a037f3"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "7389b2080d5f9841a2e9f68e3d4c2ac8"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "32c877855522e37859bee1bb993c844a"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "3b4f3b6e163568129dc0ca7e2468f1b0"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "e58f151725c9f7c85bbcc8ce3a8635c1"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "c99ffa248444810f4460596325447ba3"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "7d5411857ef778da2887e4f3ef2037e9"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8bd8da55404f5a8a8716d8295e1b35ca"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "39e0331a27c7597e1eac86fb61be4285"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "6bb7929943585ef8b7c3fd7dfa37785b"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "d8a1b5b9c92ddc32a33f053ff52f793f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "4a313ed5e31dd0d8c9cb7127be71b7b7"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "966d7573ffa5140d215c393a2b5589bc"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "82011e5eedf2cadfa9d6f3e5a869e209"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "7e4e745ce57211be0aa12011450b9ce2"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "8dcc6feea7b0d82dfab3289cf93494d7"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "2d7ff28e8af970b5482ac6d2804aaeaf"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "6138ba17b03ece80c775d41d136cd487"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "2f1de02f689fb0813289513e8c169226"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "cd4a521068127f61abdadbd51811a57f"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "7a460a5e906be674912451ed12e6835f"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "6dd8d3353e152b966a3952a32592b707"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "e51b19a37a65310975134695a6e4cfcc"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "0fb461a37de783c496281073f84c18d5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "4985c0f90fd276a18126ee29c797e2f9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "aac1ba5d738b5e4503a8719aa6687b57"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "7d27947f1eddff182af94efd2968a8b5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "0b1d04dec0976eca77e25aabdf0d5891"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "ab858c2f740e7245ce86cbd63092c316"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "a9113e2dc47f63596ea6ed2ad959fa6b"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "d27ca17d259c08e99512eb50d73f16c6"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "ae21a06bf3927362528148742cee5ee1"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "8bd58c3f02f242e7ad5ef6067762860f"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "e16edc99f8b300bce7913736a690899f"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "e771498eacf5aa93f55eefb6502b58a8"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "94cb455fc2812eaf4d01f10b1c44b3fd"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "a8a7043c2f24a4394f47a7b0fe6774b2"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "6947625a0cffa3b9cfd4b8ee57a73fc4"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "1280bedd59ffa065f9979e4216068d42"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "a8ae98e82d4e3500ac3713160c31865d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "d4cd16f3bd53ee1e11c36da313eb8979"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "f20c447bfa0da73ade6dd755d39752fc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "c08cc31d2da9646b51dfe438bfa21545"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "977a6abf5a0006ef615cb10f726d4d63"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b4dcc0d1bb01ff89808e1c658d63760c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "44ce3a3c2734208fffe743c974fa1168"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "c45b5cfc2269a26081faa7f927805a51"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "0950e5c1f2729bc8fac7b39e199f8f45"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "f419f7f604aa0aa5dd7b96142995964d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "3a891f19748b6ab746e9546e24930645"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "449ed75df374c52e6d2ae26aae9c309c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "53ad311ddeea6071798cfc563d42829a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "e53d43f94c92364e25be83cb41c71f10"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "6350063cf6e38d558b9ac7a7c92cb03b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "98d814057daf2e11e35f2b529a012059"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "8a87dc2dd298a6582cfd057a00eb3eb8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "46d0a533b02678abf5db17e63d355c5c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "d6c1645c7a3ebd73e1c9b65001c748d8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "3ab06737d79aec8f21192a0d04f8ed2d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "cbd6ba3a6f3cf0d0ec2c87e0b5268d2b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "07c853a1165581e1e2c55f8912f71232"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "03a3c548d06e0dd0ea82a5748200645b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b2e2a78402b72ed8ea68da40b55b81aa"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "b2145eff2fc1a212dc55eb9adf16047c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "53aa237ec12e9d5e110da3341abebe72"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "796044e112e73314151c715bc2df7939"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "9b0230495ffc82403b2d0a605b3ff6eb"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "59f2dea99e582a6efb887d6e2c785f15"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "979de4a8840db134b189fd1368f48aaa"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "b41d094dba577c33d398288b1be637e3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "7a3a3a442e3cb978177f657f3ab6c357"
  },
  {
    "url": "categories/os/index.html",
    "revision": "c00cbb00789c125bc1de25388fcbc72e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "c7a507042bf24832caa2d1011ef664db"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "181e2552f71c48ed5fcb4202d5b2d537"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "7f875d5b07f39b0552cb85a36b21ac63"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "6780493355652f92a08e9e136ff51dea"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "71ed6a1e849640787cfc97ca1f8b0444"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "4b87305e7d84ae2a225d132b66c6ea5c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "48109c9ada2083135ec50c7e87e28f8d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "2fffaa24034293375a0fc52b0076b2c7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "141ebbfa726c8d70609d7ffc4d91ab2e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "61d5c8cd6a2104c7d277c3e19bb85b1c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "c90499e32cb6cde4b341e6bf5409e741"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "ae57baeb9820eb3d6939ba45c3a680a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "7e368e5a8ef3023eb0bd2655e4503493"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "a4a77d12b9b79de580089777bdf3cd6e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "541a65c9c5c8dcd5d7bf13477587e1a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "72ad96b0cf8b12b3927ed1477ad8fc3c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "e93fee6ae95a00054b52b01d9aa5cf5d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "ba1140f3de10eefa540c51f27bb7be95"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "911db8c0a8b3502dd4e95112e28dd5b6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "484b3430b036a13d77048969be3c690e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "e418aa60c04c176b86a027291d6ca76a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "60437d550cb8945d7511795aa5afd7cf"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "6f41d6897aad9b3446ba3d9994ab1ebb"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "c06669a207f359aeefd9769b84ed095d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "a12e6071cbfc8d698459971cf1f84c78"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "f667ea87cd566715f537291603974ec2"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "5acfa13d8d67c9dc6d72f1aafd24ef54"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "0104347cb242fc2643ea4a8769c43a73"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "ae42fba5498dede3a90692e879fc3146"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "7d0bd2de3b6be47fca71eb222b0e548f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "e1be5a4e90e3d26511e50ac9e19878dc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "e2f47c0961ad9a6331c740c93cca26cf"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "9014d8581b835dc916a9e93c5d74ef98"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "f018dacb839e4e365ca71c86311960bb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "6fa9e57c406e2188fde44e14cf3f7ac3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "1754923f18f9f09b175b85341a7ad031"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "5cad761cb5e1cfe936d1aab3fb134dc2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "f95b80232f5def326135c468cd2ab8a9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "f731cab40e6353db6c27a304c1bb3ef0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "c431b870f805eae586124b9054e6e625"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "a2afc48b3eb90eaeafda86b0bb63f67e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "463b8a26ef2c81ae5ef72fd1163249ad"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "dd6abda72568240f3797d214d723516d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "d1694b455fb1e2a58611d636f32ec124"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "3e2128203e0d13d5710b20dfa5eac361"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "4fad7b9e868853a15e6b26b67b3c2d43"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "96ccee72dcd964b7bdebe21472bffcc4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "d241aabf5e419aeadf11a8453b84aa55"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "c4140aef4fe3df618498a4d59b1b09af"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "15599045aee2b3ecfb28d5c11cb0f207"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "725aeb6e84525978edd8300ad03be4b5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "24534937f9166197addd2fc7f4cf8e61"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "7b3f00d6b03ca0716ad2bae569dad229"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "2051039bb63fa4ffffef4daf84af6c2c"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "d461e698b7cce806959e2f77ae0ff301"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "a3a4e6450a159f5d34ef4d360937f1e4"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "bdf2e0694d9401f3680df855384f4136"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "492fe33c88866b00b84c42561b821901"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "ac36ca9d52d8f03860b6c07b2a9bb282"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "be44e016ca8396968840b11d5cdd53ea"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "8e1b9c5112b3e1c3765aa1e98c75c68a"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "fbbe5f1613d501ff206089791c89392a"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "fa06351662793808b25387e06b2d5a22"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "2479267f45f1c869b674ac495985215f"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "557f9116710339d91aa9b391894eae5a"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "234d2ac96856835967e07311c956af0c"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "2b6a77ab64b2f4dc0d897722b47eacb9"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "86c405faa0539016ef84c2855e479427"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "a0b6d8ee522b7a2b100562346df47704"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "7f646760fa3a7cc885b9276500aab2a5"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "15733b2eb95a6fb6d3479bdea43c2351"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "c92ce8df4928c12fe0c91acfdfde9ed5"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "11e08e1f709e504dbe29cbbebdbb7812"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "951a61448f774f6e1f1810a10cbd473f"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "b321ecb84ef8b0899c25a953ec1b0b66"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "d93a4c7e1940e884b90f4d69a44438ec"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "47d9364d9b2d18cd9e3dff264a2258c4"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "eb5bb67338db934a312420323f21ae3b"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "aec25b448d781d53f100b860b28e82cd"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "499804773ce6367ac37759069bb2a7b7"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "51a63b1e59b1fccaf231994ec49b2231"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "478bd92b16ee5694cbb26ab2be7312c5"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "cf005d554139761dcb7a77326400e872"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "1634038996cdaf63ea1d736ca67f26f5"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "c0857ecba227a1ac6e46401252a779d6"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "2be0c83ae3a4b95dae90197d500051ab"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "63e3f029512826d7b1956adea2150e51"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "d42259be35e9d4dcedd7e9227bd58e31"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "2e28843b1dc9568d2bfc1ab9f4b2c1de"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "b632b89834ab729ba35ab8fa596f722b"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "b51e867e9020fe0b15c9234aa6ec711c"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "7cb37f06022655bccdcf208dc19cda87"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "f059614a93f9acf9c93299368c75895c"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "86d8a3d0ad0a22c55f0b0844f75b943e"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "22a94857a0fca7db2d132faf9c182945"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "0fd6e6d210665fe7db484cb1f7aea26f"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "5a11347032128aaf319e8ce720dc0665"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "7a6039c3adf5560a8b80020a48decda0"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "fdec8b8519352f1a7f3aa2ac63a3c12c"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "6a259e3f865fb631d33784d7358f2b57"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "676763af07197c33a913f57ae4a22701"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "d58558030a94651419ec2f7a7d54c241"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1d07ddfa4ce10f7054cf32f5d02daaca"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "2ca258dd4e9c140abe965a365d77cf5d"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "7bdfc9854b20e8f7451af95e80b94949"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "26a508aae54d006436e6713b4fbc350f"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "1af35b693c1a0a8e224bd5906ca7fe44"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "0d10465985b1784d146f9f8775f6de0a"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b777e6168d32a339886bfc1947fcceb2"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "d5e86f7d7e4189a3a905acb2fddd8b12"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "6138b9e0d6ad191ee147b5cfd5a87dc7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "701ae42d9cadcceaaa44944a511cec35"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "925a8533b0d9f2a287fc7c832e2245a4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "be86032dae62271c954fa7a2f5f86350"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "437305ccb1125d45b596192abbef41c4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "5504695aaf13f72c287b0ebcc53d5b72"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "6d0cf2a8f8881d747148a84e422e7efe"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "91210898efd22af6523bf5a3042ecdfa"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "ef94ac301a4cc962c510e3b19311c593"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "9ff7bffdab4094f9625d7105cba7a31b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "6353525aa131fb492e1ab8b2b61f8f86"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "35ccc218baf6f6491ce0881ddb6b4957"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "464b1ef067b778600ceff88806058b60"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "200c11a99f9f034e3d8ee865ca77bd13"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "b5ddf909a4c1303cb0c5200afbd2cf6e"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "e6b6695b15ca0ca6f4b72b8824c38298"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a20e50733f1679a02c7fbe8ce53823b6"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "58860c91ef22791aad9d0a84ca4bfa8b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "1e5d8a12f85894aa619d7332751bb219"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "b353d236deb236ca863a948ddc741864"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "c973032df1565093165d9e529baafce8"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "61706b3f67e853fc5b7dd99dfb1c0f6f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "6faaf9394d601ebeab1c19bc3843aad0"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "878a61f22a44a6103851f071006b720d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "27e1e705a10cb7920d7ef3c7335dfaa5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "acd1bfa515b9b4b96240a6a4a19ec81d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "8a719bc0d913bf26808acfff9b7829b6"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "4ceaa94e5ff541ee50788eb7cc68d47e"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "6eeedd947a31d433ea49c21230dd26b0"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "4ed029a000a567003cefb48af4d092cf"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "4a41c19430bed8c7c41594a8f28de17d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "ac388e80c1b1d460093645b9d11c8cad"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "f29c2f54e7a065560ebac8bf6f02ecee"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "4bae38b813366a7445844364d1503383"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "417fb22da234e41b9d6bd5c6000712f9"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "3540e2848aa77c8c0118dad16441a6d9"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "7a5de52ea0fd2229301da003255efb26"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "fee969d34ebc5f5d24ad3e6fbf9fe2b0"
  },
  {
    "url": "categories/php/index.html",
    "revision": "388940503da5da153254409ffd9811fe"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "5231f33bfecc6c256766ccc0ec541b24"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "1fcdca172f5af33188dcfb3e613a8b45"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "87d67d8b0b2dda9b0f08ad11fe74206a"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "e6a57cac8b6eb1e88cb92bb102364538"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "37fa9df97bdbc7072dc8c0213da02262"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "3023e72035674443394f5879ac0e5b81"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "621df5866eb69ebd0373ade05236778d"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "6060edd90d4b6f8f5d132dd2283bd9c4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "73b59c348eeef0fd340f3aa6199cf1be"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "d6449077631ff8d1b3fa6af6ad44212b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "a7ee91f179137fa36c5b21fe7a3fd9ec"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "45f5341981647803071c592cc2337c60"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "652213eed672c4bdae9f94c9b3e9096d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a7bbadef70072c3df58da737a7596e7a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "fdca756b247564e149de133190af114f"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "1df0ceba78bac3280c391fd34f18473f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "875500a3cdd44246d7742a246d7d4567"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "3e97e50dfdf96fdafde4ad512a6bfbf9"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "e97ad1639dc4b826eabc76a11ab5ac46"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "b606766c274287f90818c999f5160bd6"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e182e80fe2c6751061771e61264ba100"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "91ee66901a212e918110afad8ec8dd90"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "d6873b13a2010d5fb2a89d058ab47717"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "658f266fae30511c29a67fe0c015df22"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "51d00a60ed04f2273137c758ecabf565"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "86f795c1fbb6927960a64c29981587a2"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "29b7cb399c1e319fab0ca4a67fe8bb84"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "76375ccdf376ba18d6ac4e84b8d5d258"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "ee383ef71f7ce4b7e7128c29aea7cd3a"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "9da28b2bad52656fe4d16eadaa009a0b"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "ed37b011c95235cd38dcd5d800f44f0f"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "db742b1f98bfbdff0af0d66133aeb8be"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "33715025b6d7e4f2c99e090b31f8d0b9"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "50f3ecec2c9e25b778bc35da2334fe8b"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "dfbc87fd97f7c27da6583e949d6b655e"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "7730c481bfb66e4a3f4b85fa35c7b925"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "6463e053f3a380b5effbc2ada0870c31"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "cff6a73808e2ce4de523782cfaf33365"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "862c1ac0acedd2af71cade0f97b8e47d"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "60b51888d8613c28f8227ad03ce8edfd"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "9599c5d4ba9c54c633841c489ef1b2ff"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "98e70193dab2f541eb2cf5902a60c3f9"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "1e8d0cb4abfa11965ddce3f2bd6108ee"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "e8c6989594819ae9d5b82266a4e70a49"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "55dea2ed7817ec48e8ca7422bd38d6fa"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "1817f57f8d8e8ea9a15e9e41cfd2f63a"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "40882fcdcc7907bd63ee8d6f1e0373bb"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "0b5086531bf001e924a31cceff60689d"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "da60fc9e4baad5a0c44d64c47db0377a"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "95074bd99b68e218f20a32ecfd1cc1fc"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "291ca8e37e1822100a0b5debadc05309"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "469cbcd342b76a8d1d8d8a0387550a22"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "9b664dac425234fa97acfd9b83bb1fb8"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "05440b74650cea3829f88a0c0a08cc6e"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "1dabcba4a813876f6aaa8ea0a4cfff5b"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "dc7eb6b65723c0ba08e57f9649723265"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "399ff034b5db3a21d9a0fcee7c99e449"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "cc209c8ca2fd063d31f57042aa841e33"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "fc066cd2488b6fbded8683bd8f0879cc"
  },
  {
    "url": "categories/python/index.html",
    "revision": "2ea17636c05162231ee7e2eab12e4c02"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "3a9c692af5595441555d4ddc5c055fe9"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "ba3f7f0a922cdd18dfc50ad85ecbbedb"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0f55daad21e8fe06dd4e9ed14fd468ab"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "cf71cf9f72707a104edafa2b9fef1e92"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "afa29f0961a01c79d420420291bf2dff"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "5bad303beb5fff31268420b2c912c637"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "d83f34d8272746e385b55f0503c2c32e"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "22a4bcecb8ffcfe0e1e60b6069fce8d7"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "f34ae5435cce0328280ef82d19f7dc61"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "f0bba973d9e7418c40ada0ef30c883b4"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "e8c9f7dcb7d6eda80ba6939cec7ad49c"
  },
  {
    "url": "categories/system/index.html",
    "revision": "b4b9028fdb20fcc58aa9d3b0a18cb997"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "6e4d97d1a8af686a6f746f9efa2c9654"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "ccc7f5589a239c7dc9d415a3c10e70a2"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "007fb86dca46d97a336db13ddc95e550"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "7f61857d0d46e03ba535a6768a5dc354"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "5936e4df54c4275d2001303d7dde5991"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "4929808d2d20673035f024041296d6da"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "a14a80d8ac79ec1b43af6d6e87baa7bf"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "bab97ac73dced3a6583d427281127eee"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "bcb592a646c602539f9267f00139b746"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "28b0c6c47390bc9e06a942192bac4085"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "466b9e881d576135f5dea616a2a45a91"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "110774cc1ae04eacfeeb6eb0c8b207e5"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "cb70585aefa74d5ea9102dee39784db7"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "6fa447f8d050e92f717eb9f7a66ce894"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "260211c49eb0d607937213e26a1e953c"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "652441e888f7e884a313337a8dae0273"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "df4153217ad481560b7bf55be56fde07"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "8f41a53196bfaac2aac0ed8442610325"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "1da4a2ae90850f698a290eb2e18a826e"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "e7a70d0143b1bb459dda48acb6b20653"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "2e1792554993379b33c8e8135b8d30f3"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "386f2f173cc65aea26406e898b427099"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "e6d8670dd0938329df17c7c18ff0d69c"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "e834d5656e6a73fbce6c5613a9433fca"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "6f0d39e515b5a732cba437dfdca713a7"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "13d06fdf348f0de76f355f295e37e81f"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "34bcbdd11f88539807362c4991d14d3f"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "96ede0acd04a5fe9ed72e8885dfdf456"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "651c425bef7a22d371573578d81d4574"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "16840ed285cd171a288c063fd58bdd4e"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d432f1aca716cc9ef03f5217f1cad5fa"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "b9a61b9c241efe5a68f59dc26e3704b2"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "f75006d7d59324530a77e43603abbf28"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "a35cc3aced79a5cdec378a6919e54081"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "b23f42aecce6d3265e555251fc992085"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b82605e50c62dd51918320966e80c5d0"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "ebc2fa6be8703f6e600da2f6fbd65b2e"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "c0903bc3755a644a1de5519d11bf60c0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "9c2121a4b875022d72fd4fb34478e285"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "8944b1085482f9ca64aa316754548135"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "55cd1bcece81e7b7190282cfe6d3c473"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "2aa501ab26561fbe080e7faefbac7c46"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "6c28d1b58c5ffd13e35038d643b083fa"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "187aa058bc639e820a0d834e1e946364"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "56bda856959ace1e0899c984e73e9343"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "54bbfc0786479f307a814feb8130923b"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "ff4c16c6736a8f3067cdd62e8da5db97"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "2645655dab2e0bb4045c316bb7f5571f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "ecc98d3d08464d2430e2877aa6c0d90e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "c31d5ac700155d48f855e37920346c2c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "8ecf120e4db543670c5ae134db7d0e85"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "44653aeaa82963e8d67999578040bd9f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "553c836e18053a4ba73c661188b23b29"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "6b2b9bf7713b8e854fb8348516201c64"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "eca8b7e3f8ccc0de8a137429c7d6e29e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "a7c9cb945ebdabdf888194be9a573e46"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "f591eb1246cbe1f5ea79e235e1107af8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "f4c47214afdb1ca242de2822d0743f38"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "05f578757853b816af09df0b5e8ac7c1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "efbec9a814a6c531ca460ab5e921d1e9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "c76b5d85d6ac38584051b0dcc1dfd868"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "1cb3ffff536fa3f2d219e5205d468de1"
  },
  {
    "url": "favorite/index.html",
    "revision": "7ec6eca1e2ac22f717220662e7126e26"
  },
  {
    "url": "index.html",
    "revision": "2849c684df71ec278add2d0ca09a20e9"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "b76a52664b6b4872c920eafb580686b0"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "967f0b64cb424ce398b46083c71cfc43"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "e0c5afc5fe00661091a4abdc9b531138"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "9be1d2f79624677e67f1e25e52fd1c53"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "09044eacbfa703d27d90f8aab0c789b4"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "1168d4d2792a08b4f8d5a6ba989f76db"
  },
  {
    "url": "note/index.html",
    "revision": "783bb5c54f0cdb9868f8ed7bc7e720a2"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "317de9edb3c0955662e97c990b052412"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "2138317a2cd0591a13aae6c321b44a69"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "294fbcd9ca9bf7ce36197500f9a70cf7"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "27ba69ddbc26f1a4fb699c1ec0bc0758"
  },
  {
    "url": "share/index.html",
    "revision": "9a865abd4c9ec46f5984e68fa2bbdada"
  },
  {
    "url": "single/about_me.html",
    "revision": "147f33d13c3dbbf0073a4f98358a6aea"
  },
  {
    "url": "single/all_article.html",
    "revision": "aae79d2d3935523ada41b7db3bdefc8f"
  },
  {
    "url": "single/welcome.html",
    "revision": "801c3ae7ab224fa462b0786bb18068f6"
  },
  {
    "url": "test/index.html",
    "revision": "ffe219158cad438e592a921474002015"
  },
  {
    "url": "test/test.html",
    "revision": "b717fa6b4eff32d3d29055665cb416e5"
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
