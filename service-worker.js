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
    "revision": "c93566b9881125d38649852662948c5c"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "548b7cc9a8e270ac6ce6f8cfd63b1d94"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "3e924212e433acf5e022e9bf56f3916f"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "589d82ccea6a627dd74cf4d5d29777d1"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "c9e0ec25831498f202b99fdd28849d86"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "5e095f3b67a18ec990237277e5c44443"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "6fdb998386c3bc5f0dc31904fb41363d"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "636a7b543f8d4504e834dd53224b06c1"
  },
  {
    "url": "articles/index.html",
    "revision": "0b47db3c0f6cebf845314df1cfee2e77"
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
    "url": "assets/js/1.f31797ae.js",
    "revision": "6d37e83ff83324b524a6c58e16ef29e7"
  },
  {
    "url": "assets/js/10.81151c48.js",
    "revision": "395ecb85d3c94de238afc96ed9c37e38"
  },
  {
    "url": "assets/js/11.8a991d74.js",
    "revision": "da4aa37301289a1551c078021031ac9e"
  },
  {
    "url": "assets/js/12.f69e76d6.js",
    "revision": "a9a6a52bf2b2037c298b98e1f144833e"
  },
  {
    "url": "assets/js/13.48edb8bf.js",
    "revision": "bb8314a127a82926005786f12760f909"
  },
  {
    "url": "assets/js/14.799fff98.js",
    "revision": "ebaa0b35668d5b9890b0991157203f62"
  },
  {
    "url": "assets/js/15.33432ef9.js",
    "revision": "6d7c4e0915d6ecb93281afa60d1317d5"
  },
  {
    "url": "assets/js/2.f21ab4b8.js",
    "revision": "32665f7819436a8c5b21ecd598e0aa68"
  },
  {
    "url": "assets/js/5.7aa5ebf3.js",
    "revision": "5e3655e6cad03ff7050e6f3c4df9f271"
  },
  {
    "url": "assets/js/6.3aadb3b2.js",
    "revision": "0f2bed35c100052a8fd8fbea82e85119"
  },
  {
    "url": "assets/js/7.ee758a9b.js",
    "revision": "74edb7621428f20876fc2dc37f98168f"
  },
  {
    "url": "assets/js/8.39bef4fd.js",
    "revision": "876a2a658840ccea9fd54d7a6e8525cc"
  },
  {
    "url": "assets/js/9.61bf025a.js",
    "revision": "a7000b90799dc5a8bb5b2e3856d6b01f"
  },
  {
    "url": "assets/js/vendors~docsearch.f033e9d9.js",
    "revision": "805abf1379f13523080abdd948ff3939"
  },
  {
    "url": "blog/index.html",
    "revision": "7c62c60a1f16374e3277c4ec82625444"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "40b0254a97d316361515ba70661ded92"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "7cf5a39e87ec3d92bfdc21e0f6a90e45"
  },
  {
    "url": "books/index.html",
    "revision": "39394cf766f473b9a6a78f960526ae0a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "d580666518193d752f6b4fa30554f77d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "0bf63a60cbf1feb22ee202d2006ca032"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "f2b4d3525939f41e457832b76ea283fa"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "37cba8a818459f0ebd661aaf89fd80e1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "9b63a51ee8aadb9702362e6f8321b0ab"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "2634539e63cd4a288ce00a8d97dcfc70"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "1f03e9c1426d3b8fd20d2f89975ab213"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "cdc03c37d74a14ffeca300e0409aa460"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "2c34ae8ca23f3076911af768709e107a"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "971cca6bffe4200d95c6d67f55e9160c"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "55dbf0b22823c85f7911c0bd810e582b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "eba5580410230628040aafaf6551f5e2"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "ef1b3b92f23687cdc048cde1e6aacb02"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "557c4771e6c4e052ffbc07bafade7605"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "92ecd2441e6cfeb83448d36a91c976a9"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "b0d7e1928ae148879355be01f64faddb"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "2f6854dc716612550f040b863b481edf"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "997a139606ec0189743f87346b6fa237"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "cf18ac4d9f85799be2f2aeae04801dca"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "033207241679505d28ba040bc03c051a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "4e1fdbf26c4e633b3ae8157b7fcb0872"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "ffb3868a8a36c5d85c053eb9ecf480f2"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "2535ed2cc812d221c583de8f292d7688"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "7d404f974fb2b6b87c383e2fd84ba5bf"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "f1291b8146392b6581ca4e33abc40de0"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "5a011b4d9c1eae0d9cef24ac78d16278"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "a2a5cdd3be51c882df7d684d12d9100d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "21c37e86d9598e6f7371a9b6c6adbbc0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "4945d14c8131f66b2cb91dc66cdda793"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e9f679c7e65b229880c25100f6734db2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "375777fed40405b688a2a160cd4a2e76"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "ba683d01c0ee99e6e5892d03f57c4b04"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "fa3b292492a62eb91e056b5de2ea872a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "b61953ce19f41749ef73e7a11d8104ef"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "944042c86d232a56d32af3f49034a67e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "7f1378ffa940b52173c01e44f97baf13"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "3aed3253ce439ffd3c9a423622e7a4d3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "cdd82a3216a0aadc7f270535a54d6c67"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "ef65b5cfc000d39b5be39eb417ccb9ba"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "5a4a1979a3f6bdaec630ef447f2c348e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "73a7d7f7830f6412e65eafb3d5f71e56"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "6269e18697ddb22db94f9946effe0fdd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "a6f0f72656f791b004c851ef219ac80a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "ef9e07f4d8d9720a5ab1beaa01947996"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0d97322e81daf5b1bd674e727aa93ce5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "8d459d5b2ba1a70bbb33d0e7aae3a3e7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "10ff3b87d8d74d29f0369121d7434e75"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "244f4b135ea32ed0a8a98724e6e437fc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "4b0792ff94cad83ad12b1fabed0e6fa8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "9d270b84fc01b5bf4526511016697e7b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "890032f1b864e6766306bb524a33a527"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "b14e5499b5b09405463c8df4d2673262"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "d53c8b5550aa9b6b45a01fa70a96c341"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "1ea68088fa2562f1e72e2328db5b3989"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "9c88a37a951574e611e1cae1740740fd"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "3005d018fa266bd6b5a07c3bd69e378c"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "50ed4afecd079506950cff25e9668a77"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "9dbedef15a4773cafa75a5cbe5fccccf"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "17f6bcc8c2d03c75e001cfb4e17b41ef"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "d8a0103ebbd6e0b95ec7d17bc035d463"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "94f605e1942926671eb07fe2e49bab9a"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "4a36aa497bf46c6fd99c7a53a1d834bf"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "0ea4e1a6ea0342bec13e23352d393e96"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "73b967890b8dcba13ff1439e10e5a63e"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "3798acb192573f4b5f2eaac80d10d988"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e44047eb719fe75c31d58f148783202a"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "e97d0e832e15eae7b5ecffce6c26f368"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "c10ffd46e25f569f37d00893f409d6a3"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e3014e412ef842284aa6373673e3be42"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "1e0f94208fb57aaa98bd6cb9e3761b65"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "0cb8ca3426eb5808c47acbc54aa9440e"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "96607185f6a2147fd4dee5e9994d6eb5"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "8b5ca1207174fae14f26e21fb51263d7"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "b229fabcbe93c93400e52c468a0fc7e1"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "0d06feb37c5fe6a9d333faf1b5f9f9b0"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "ebbc0b2302e4c423459f3c97d8571d5f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "c65a24ade7f7c5aad8aa0de5f60bdbf5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "2b88edeb2834ad088b59de52c0d8859b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "28e5ea5bb82518ea01553e9cbfd0fea1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "b59d129c18337546776a226ca37b6a4a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "268fb9be36a9feb502ffeea435f17184"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "bb253394902d09f260042314c9cd9cba"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "a331715c6d33966075d60f681834a47e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "630c18e4c53c77d2dd77d0fc227a5cf9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "739b82774ffd16436dfc5ff265b9d419"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "fe398da048fa0997a8ef233dc19a35c6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "224afafcc63ab40404ee80a49b0268fd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "298b2443812ded7e9dc477caa7519663"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "72ef753fb4ab78fbf99e1d771787fa75"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "058abdc60b8269b80a155865bf8cabb3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "f7219396f875cd78710331d1220a2565"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "0485ebe197a8115f90b4558e24f8d59e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "eed54579452e1bbfa046a5afbf64958a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "b82f9da5fd3ecd68ddd7623a24a90534"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "b3cda154a269a02056314d51ad4e9055"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "c0b39faeba4726fb76fe6d0e04b6f6bb"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "3a795fd17e7cf7cfa551fc5c5e833b9f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "854463c25618594f5066d7a11f6c28ee"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "8f4777a70744b2e7a4b60a2681bc1317"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "44d08ddc775b151d26f7ab61b909ddee"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "98af8c6c58389567448e8ac36637c466"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "696168bf569b994c64890c0b3c82ad0f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "2d8948eeea9c6b1a143bd2fae1608ab3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b0dc2b33f06b3cd00251dc0c03e57439"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "7629df30582652d4e8592f2bee10621a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "a68f284f32df0d8a30f0d2c55460fe58"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "e1178fcf5c923ad1581f4c6c2b9984e0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "0c8772d0b2929ef0cb80f085ffedf76d"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "37fe0d68e9dba840d3bdeb50c95ab87b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "d544098fd32ca0d0839e7b64141ba95a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "9d33d6f1c21629cc49cd5ad13287b0bd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "df1a72b175d7f107a8124bfd83bc0dd4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "55fd28f0059d592176a8655dac1625a5"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "923eebb6ccd0d548035c78da95e2d858"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "aae57728697adeb47f6f72014e28dd9c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "4319577226397d41aa808dab22905e8d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "2b8d7d3d20a6e7ca336fe771140f02b5"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "d6e524d10f7845ac3530ede02286307e"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "427d4e9641776bb500e3b2ecfb2600e6"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "ae8bda813a6a36693700fb7c2629df77"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "ec80766fca6972edcea65149e75db68c"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "d7a878f3910cde93ea387bfb0460e9b8"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "940507f3c0bd2b2e86c16fbae5063300"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "c493ca25846488eb26eb0e512f826ac7"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "926496884e0a98d768a0b21b1c86b088"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "3e8cdafe7a78014f1b4454b77230c4ce"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "b9d162c5da2ef72c2185dc3bf3ed7d93"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "c5347c2b84e75dbf770aec6efae237ed"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "6329df9a7ef3ffb79918daf104762208"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "ffdf39c1e17805283d40874f2487a122"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "07812ecbe4e53cdb675b3c6791b5d805"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "54757aec9fc46b0f8ad28386bab5bc61"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5f44775133e752c10f5f4dc060ffd33c"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "22ba107cb0e990209163e801e47009e7"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "339542bec3897465526f364b19c85577"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "ebfc659e6f13b29cc1752e7b89fb2520"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "8f5c2668aabca8dffb212d37e0b39d45"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "944b172fe61aa09b5ccd4c88fb1c1d3a"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "650ef438f0f2af840cfb43721dafba36"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "756331595abed4b7d5180fcb44e768b6"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "d24dd64cfb908a5c6cd6da4b691ed84d"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "6ba642ad539124cf6c8c70271b2c321b"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "3b875ce32850cbfcef7c33248a00b0f2"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "06f68d6bae49fc697082f76fd797dcee"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "2b305e00c39f4e397bbeec87e66085d7"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "cbd749ab3ec54ea515ca9c19275bb3b5"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "110fe407ffdef1d1ec6e0d71e668ccef"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "6ff1b6164221fbd5ce1630488785faee"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "f04c4135c5d689950132ff78e467ceeb"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "1029ec572317372fe181e8a8d77f287b"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "da4b577fba62d6feca6fa47c85b7cb36"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "96113e919a33a496fd8b64bc756de5e9"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "058614fc0665fa1533c65bcba3d06a2c"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "0c71416cae136c598d3fd4db6fdf7df0"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "b6aed2c50e6bd9c505867a06a79ece61"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "4067a4b4d03418dcefe3ba3b727852a8"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "303f05f57d6a131c6b8caa92145ac702"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "29faced6b9c9b4c4b99968b3acbd4a95"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "8e170914c4cd37d4dfca50c0e0abe4c6"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "a6ae766c9d2c649b6394b3b77be0e77f"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "98970d371b14322d8ede591e661f6d2e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "2c64e99b2e2aecbce6eb072c13beb013"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "2969582e13091feb5e427504d4411599"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "bb963e5da57126fbced78dec505eda78"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "11c3cace64913efaad1a7bc07dbd974c"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "6b613bbecdb01e4ade350a907c51cf72"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "e061afe1af306436128a44da3fcef9fa"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "60af99b064b81961cd0fc787a15465d8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "8570a2785c77164ecd91290a2a648760"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "71b437336b86ac9fa2cbea0ed7778901"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "8582b1c75b07fec7340d135c9eda6e53"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "94ceb5e19bbc42762f41f31e5c0b969e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "c6539e7d4571141867dfed1ca288c319"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "a4eb940bbb35b818720073faf1580a6d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "ec4a1acf64f3a9a3cef6e71dbcb28dcb"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "4c7beab03f27e60ca8862a57239e30c1"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "299488787b72da77ac34e54ef2e9d7c8"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "c811ab1c724865c4df74f828ab8cf11f"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "5828a8cd29086c5bcd6ee36e76878c5b"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "4aa7d0e009b64fabffa6603c6225c2bc"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "1d32dcb69f3c2980daf34e0e2837bdd0"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "802732b499753ce1fa990ab4cb1f93e9"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "a796bb16aa4029f4070772f8b08b027c"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b891da12e0b0337b4be91c20559dfa3f"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "e2ee033c0fadef3c4ae681005049056d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "227a0b5a0dc9b14f220382700e5f6443"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "bc353f6e18afec5ed548925840257bbc"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "5048c1c4e108222ae6d60b55b7019de3"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "1754f859f1dd437b85fcd6c5b528bf60"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "c21b4897c3c8e8b2df7ce10259bee585"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "f3c5bc7da2c30e19d04bbdbf4ed43a56"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "f3e5d9f52ea6f9f2ad6a28e6e25941ab"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "47fdca53cf41b5934e992f0237eb6879"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "333fd8e1a651f6833f4da34a558d091c"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "d67bfe0f8e71d4080747aafbc18827ae"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "b2fcac6fcdf49664aa777df68059afbf"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "c5bfaca44b89acdefeda514440cc9a50"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "aa4f0afb1d952c1ccb23af96fc651e8a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "094f877b159c239f6b4b90d98f4ecb5e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "654a8e814843d84a790dff9d2a2f64b9"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "d9e64e5688c778c8918568bede6436ef"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "295ad4658efc0a2a551e1d447872085c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "ac49d0c1ad7ca2e74497dc7696c59958"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "9b8a7adacd1c79b23b389ab197bb9233"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "a5c25fa2413f52dd0140f4eadbaeb5ff"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "ce9df572c75a91db8f85d3c6c36b304c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "502e83b41669fd001dd3f5bb85a13254"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "209ec92e3e5bc1f96064fddbf900cec5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "8ff3b6ac496aa1a74f48f6270c2c1d83"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "e00cf2152fb398e98fa7ebf52d5a5391"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "9636df37dfe0d744c9f6197b3a575023"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "1edaf38d3d78bb80b52ab28b87bb1b9f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "40cbd1169658588ae5e56651fa945fe4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "b8c061858d89368e402cb0f30cdd6d15"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "057bee2e71599cd3e21d7f47dddb0994"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "a5fd6f5f1eda585f610ff4d32c1b340f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "cb8002ee93475d2935b452631212c91d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "3b8b8b1ed6d5040d6db5662d8e5be0d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "281f1744f71e665d2063023c63aeb6c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "0e9fa0b5e72e60f32dd08e57fc247231"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "7664b409f6c84589d0ffd91769bd65bc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "026c5823b73515819096792987303044"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "3a17322a6ae4df798309a3b95c18dcd4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "3a04e5368774e60bfe14250285c0387f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "0ac464ad504736bb37431a4dbfbdd965"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "f2d58f16ffca164f2b9b6ccb39ad6e89"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "da5c3e54dd5c5e8638470ac4d942b32c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "953b9b255f73217ef5c4cad2a3e8d793"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "22005a22f199feb85117c50257301a53"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "2873c4f033d300ede53537c254cde59d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "58be002f52c174882b6714e151d2fa20"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "e48a9b9673a19b8541ca91401283fae8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "22857d00b119f7dd8cdc7d50b06bd3c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "f1c735a617a2090ca850125912077d1e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "dcfa7c816355bcaf3f864b65d6feec47"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "ebd228e8558776a9be3bd41bd1e6cd9d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "1ad53726e0f441bdf3be471ca23301d8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "15373f37a73915017f5f311cdc6ad1cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "97569671903cd76f8e66c79ddc80040d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "a2de7a59e371c8102ee9caaaf6e74ab7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "67200ce544ff0745b9bb8838b9f3c69b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "9cb65b0095a133417c569e05882d7654"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "04ee89d2656ccbd869b04691de7c7bc6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "7bf648b29bf19ba41b38949fd3f7c23b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "e0571fcb99c65fe0f8c908378229c221"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "a07765eb1c810c9454cddf7c74800c7f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "3482bbbcbc9ec820e4626afaa47ff328"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "d57b643a5ebc4424689b585c54ce5fee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "554b31824d6219f4140193ff28a606cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "51e195eef5011d73b02ca2060104f186"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "e5104f6c7f75dafa91badad55cc7c3b2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "4e6af3224d675546a0ae061433bb74ba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "20b815ab0fccaea20bdcef9e38826862"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "561ee17bff107738d17acf3a141a1982"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "2bf5c89c7874dd1d4b5151bfe35cd850"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "15e28968812819a484fd4dc1fad63ba9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "3efd94a60bd709e934fdcff1d1785bc4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "7432aa32f2ee0b12ec2a797383cc95e0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "2a17ba4acf031df9ac6c2b6f8f99128e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "005a5c76e88f7f36e44816fa8ae30ea4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "134f2963c0984dab00c311923e64c263"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "c93095f73b049e7d4cc57a1450496364"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "cf57838761f468c44a2010bf7c07784e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "0e41601d186294d389f51747583bf4b2"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "99ec282d220d40492c4a15b53db0ac34"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "88cc8b4196a87f4b95f6b8686114cc84"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a7ee01d69062d3b9aad262dcae3621ee"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "beeb0b7cb507c5361674aa25a758f66f"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "e004fb4a59645067885590bb1254d68d"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "bec2161d57bf71388b7f96beeb35bdb9"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "919f964cbdcfebbf7bc7a12a1ff0f510"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "91cd00862e4a5053677a74fdadfd7d54"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "b36c03e0f941199486b80b9b3f6ea1d2"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "5abd048875c7fbff73d5571dd5fe1133"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "99489b59fb8bf55c25cfd93ef71ca414"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "5ef4bfa4f55c6d7f9200ce1307e93d37"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "7e891154af73e313065262b445e6f123"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "7ad757b42657bf3a23f2321c8936aafb"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "ba031eb0fc0e987604888815a08e03e6"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "5db61a56a90a54b4808381bbe72076ee"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "1e76e4732faf135bfed69ee45979deae"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "725626da01fd9693ac4a5d749ceab8c7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "40d75f3a55cab52f743a52dd6fd38df2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "25b6fd5ab5be131a5758afe619b84efe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "d634dc84a768e19bae8428c3b9294746"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "59d73fa43af08aecc453b7e6ac8685ab"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "3400c8ca6c87fb5677bcb069bec38a44"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Audio.html",
    "revision": "3dac1a4a9548f55238adb9c7d0ca66bb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Button.html",
    "revision": "ff020f299903cc00ecd85f40de916c9b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Camera.html",
    "revision": "ea174a7f4a3b16b260f958a1f842684d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Gradient.html",
    "revision": "014c38a62f111cc7d1bfab5215e80d15"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Image.html",
    "revision": "d112447bea731c5f5caa1a9b4ee2122a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/index.html",
    "revision": "9a6ee0e1866f749c09dd8d8f613c526e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/ProgressBar.html",
    "revision": "462ee678cfe2b6ad4d44dce2e184c383"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Svg.html",
    "revision": "94b56ef97e82bbe22cbbbdd118d24421"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Toast.html",
    "revision": "fec35463fb4db3561d80e974b29166df"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Video.html",
    "revision": "611f9dfb6da9c3474437003db3e352e9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "b2c630bedfcb4381733a19b6bc84794f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "9f22775d4f70ee753ad6d9e51a721318"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "b5d2e4db4418185ac6b2f23adcce0ecd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "0355674c617f3ca1498b43c05a223669"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "8a58a99baaf719cd742abd02d3d67ee6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "d12468ce4a64b1333d42a9acbb663d68"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "ea7540156fdbb96baaaad85a8037b287"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "c80e4e4e546dc7d618ef16324096f933"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "1f2b9472a313fbf957904c496ada3d5b"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "39959c25bd91dba2a23f7b15ccda2c1e"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "ee11cbcb404e0d7b19952ea2b26beb44"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "4d8042e4b576ea2cd5c335fba691c93e"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "cb49980d24623498466ad6d3119d56be"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "dd752faa2912a7728eb5f0fb488c1a8f"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "d83601c0eee466bc9bf86eaea8d4e1f2"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "3cda919b41c8f188ceb69bccf7ea0c2d"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "2a4767b9e7b1581a180a173b62d43436"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "1cc413c07abecad0d0526bbcb7d6702a"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "cc2bbbaa83481bdf2cc3f38cc2af4498"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "4bba3c2aa8ec81411d2aeb268d07fa19"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "a7fb48ee14708a6599c5a78e1568f806"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "883d5c89ab207fa3fc5c07c5fcddf47f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "d5d3a4f7aa6964626bc6eb401dc7d00d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "dc07206e0e1c3edbc70de91b3b8b2103"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "e189c37f31cc4b55d36323c3622606fe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "d296599ae53b79e1cca72283d87604d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "248e09fa6b4557d42e3b51bb94a9ade2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "4d741c89f987b2c6ead5c6e5b57a008c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "15a7b35cfdcd8e587e28a71840af5179"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "554acc02ef2c9ba128b2a98580b1c077"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "b4555758a8a3cb5a6ef572d796b1ac5c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "15c944815a2bafed5564465522c2f581"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "d28086c70c0753177c329e43453b8142"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "e7e119ac11a600101e8908ac9ab4fb81"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "e9fcb78c4bbae1aee76929900c71b8c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "685e15fd22e48cad1ba92cfd6cffa5f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "2eb90e5473c613faa31a12f0a1f7ac59"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "2d6820781579b4d0571312c06c941150"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "14dc57c5e943b4bd4184a57cb9d9fd75"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "b65b0951ed7af09074103a59a1b58506"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "490b8d51e0aad50555848055659b57b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "bacc502fc73318611ddcf74d9a2555ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "af79c2350edfad860737050c022197ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "d057913c94d219d3627649cfecaf53cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "3cc2866ed4e2c551f67688fae9469ec7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "745597f50746ae6a7e7fc4d880067046"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "48e394d1feddd075625195681f8bb510"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "bf6c93747d6039cb24eda03628034427"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "8522efc47a0c4630f9dd390269433de7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "0256887fef78335f961df00ee2b1bd01"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "792f915058c7f7bb6f2b41217b06540f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "b5a1296f4159e143f2661a670210a85f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "a387180bb8d4ed1a556ef176ad5e97eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "ace90950f3c1efd7c1e7ebc00be942a5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "641b4b749f3aec6b4f58959c0378346e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "a1032bb329445b9fe479b8c8945b00b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "92e620e6683b3ac59a708f1c0ee443e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "26c4c521dbed80b5d4023e5364a551d2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "3f3ba03701599000b0df742c26710544"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "f575ecbb2ffd8e03610a15cfb3ac60cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "c431a648b6c36184bd2bb0f6edc21588"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "c52c60e8b838291538a2f85c073cc4c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "6c57b017a0f3b34b98797c98b8ab3346"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "a05e2d7b1b838df1660184e75d5415b8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "6a8348f4a15bd1d17dbda055c0405ef1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "2f96c79e8581572f826f19a526dc8f67"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "fcea5816751411882aa713e202f4407f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e2347c6e58bc4aa5c5e2633e0515b185"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "c58d088b30f62d1ed7ecefebd309ca6d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "ec0e29efb574cd3220349973c3343e33"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "8b5599a089e7bf9c9aaf7b173c8032e3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "81ea6cbde69e68991fee347e913b08b0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "9fbbd8a5c6bf5faff2f2eca989ccaacb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "28c265b1d497d891a31fad17fd182765"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "3a1f5440625a12d5845120bc7c934e74"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "cb360d849d90cf8376132147f80be977"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "bc4d97210839dc5f721476ee9de9cbd6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "acff818b2ec0269907ae229564f75500"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "3ab284a72a9b8e6c3a5f9a685cc33634"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "2ebe220f69b45f627e86da5aae64537c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "5556cb3a724717aa860c6cd48a151731"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "814ac33eff040b54da3d9e8047cb8c91"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "320e6fd3ad103d1f93a7612dc64b990b"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "08b100ed057fa91916335db64ef9d572"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "fe91f17f1b8f9289b0f33324b7160664"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "d95ced223d8b60e246d4ca564eaae283"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "5a9b31e73ce7f13a51168d67933211e6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "2285e7d99a17a4270cb1b3241a27a733"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "4b812f8c27e3c35d4c4d8f2477d203bc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "cb09c2bbba671551422e5c55b6ea9546"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "6ec66594c995bda28ef2dc4565f51b65"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "97f7e9601b1720774fdc474abdd3074f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "b73d10d49e0f0c54e498047b38eac2da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "e061347b3d3ca8ef637377f32f2958d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "6306029289d44bc741d1599e78cb2063"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "3e8b52d6294bf498bd47464536620582"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "fc3287b47b453a24a7b9f51602a3eb02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "e981869f860d6828fe4a6388a4e984f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "c3fc515b3a0b821664c652ead27d1027"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "8dd91b452d76fef1ebf09afd0a06d874"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "a2223ec3399c7fe25ce61984d15f6bba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "951dd1a53ca69823bf8a80d0b0694d39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "5f62d4b471f82bc5781558e0ecd26c62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "f6a3b34283dae0a94dd5b2520ca162fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "a241649ec6ef3a9b3f98008bb637b5d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "c410050bada690e20262af5d008bbff2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "81b69a3476400742c97c1c72a8371b76"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "e2ffbed04e28072cd62f521f45842923"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "b818c1fa27d401a06661d05a575261a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "6f2eaa9b8e10dce9146c8b1e9e5bae49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "30ffc2d376a8e01d26813befe8b916dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "058afd8210d530c0f8653bcebf001b06"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "5700a2fa3ec5437ba8d9af12956209fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "61ade94138b16bbd59f0a6841cbdd95e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "4538b20d4f0a8329b25cfd0afddade4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "2fb7e29e80b224f0643dccfd3f0a910b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "61c2bed17d22bf34de68f0b23457ca9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "faf34a6cc2c2e76fb8bc290db238afcf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "d9306e732f201fdcf19c10d959c33fbf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "12cfd9264069f80299c93be85cda4dda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "7529b4185be564597a04ccf7e70c488b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "d2ee2a84c70d67ac8109f8dc80296bd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "bed4ed1f8a6acd75aef5eb62ba7b19fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "3709bbf2679eac5ea2f756c637524001"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "f4bc571cd92246d695619f79c4f6b380"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "8791ece3cf455944880ac1318c744f14"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "584ca15cdf0164d4b700ecc75d12e46c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "f41bd75bcc7b64e736c7ac2573f903ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "234192af8bc2aa5591b5f169f3cb6dc6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "9d0f86f0ad0a6abadbfb7f68f6ee5cb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "f1297c461454916986b482d31b125ec8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "0fe07ce924c69006e95c1bcbffa9fecc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "b8f4dd6a240f6fa69b95dabd7ee2a54c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "ddf62cc424f953ac76c93fd47b2fb974"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "ceb910a94d4426994cc84f1b06dd242d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "39bc63a1ddc72a2ab97e93f93d749a09"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "5d6fb86607209183baef137b6e8b9dba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "4c212b5a8bc7302a25ef84fbe11f78dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "03049fdffe5ae47bc3d43800ff1eefb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "2242f00443eedd7d8127012994e38fde"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "3ddefa02a6e9b1cb80f8ba0f12fb354d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "37a5620b7b8e10bfcff4d9f128e5b3f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "db41670a0890254576c2cb70c3f7702b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "7d16ee62c03fbe9609fe1deee0e6a7a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "0e84dc7a6ea5ad300f85181adce71f6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "981430ff0a5bd43f3028dc129b16ccf9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "5388aa3a1e2f3fb7fc4a1efa7ad104b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "ddab091f60f4ab43a05336e27beed560"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "8a0812899de8190cf85585c856efcad0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "40468559a1eb81c5fec33cbd5dc1960b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "6695778b6a7f7ddacfafd42cfd33a002"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "e196bf33a620cd47ba745067dff2dece"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "e887e6cedf2bbd7d730a3cf492bc4973"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "92673159041c32227af7ab09344e4df4"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "9b70aa5c662e84c414b1fd5d3918971c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "92c19dc893edafcab0244a6129372305"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "8527c74c14bc8ce32b83774826da3282"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "e2c3d74e2908e2bfe72873520ccb7e98"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "ada545237d8c59591052d6a284c24a39"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "013fa91a80f3299b6e40c8661ce112b6"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "527c219cc87c2d80e1b2cfd2c801a3b2"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "8ddd3019768e61191b186cf3d56fcbbc"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "7d46374e71b7bac089ffc335c1267b77"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "20c66c9a35e2d1afc1e9c6b04be24001"
  },
  {
    "url": "categories/index.html",
    "revision": "4eed8d03676a201d892aaa208a9cbc3b"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "9e044cf45c43dd72590cbe6fd5ec58b3"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "86f98fcec1b479b64272d6aafa32a3d0"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "3ac14ff70824a4ae587ba3431121b868"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "78e5c74b6b5940d66319319eb1478daf"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "9bfc0cc5017401fad40d4dab3408cca5"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "3a3b077a58777ba82670402b3db8dd80"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "a8c496131d9925987bc446640a882cd2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "e0ff21b34c07f399a2124f1c449e2458"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "2e0202ec42d0ee5618eb784795e9f974"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "03315d07f53a268b0839b191ad82f8e4"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "dee5bd304dd758f09ce4f5ca033ca459"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "99049cb1acd0fd47fb5c2314d1cdbc50"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "eb903f074b22aa71ec136b1187c0311c"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "0a648bd2a638e112876b16f7fdd319cc"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "ae418bddd1dc539f118e0f23fbd05a31"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "45b553ea83e443848b8569a1ded90bc3"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "79ce1b234f28a25be6ada47c3c9e7019"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "cdd56330c072f7d7042f777b8d726234"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "843c5d3c5b58cc2d2589aca47132bfe8"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "8e162371507f9fb2db8b339afecc0179"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "501e85578573dce14ac377a3d8f0c75f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "fc41b9c02960bbcf0b8ec313501ca82c"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "d31175648812f0435dc23ba130287bc1"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "f41f723a9d8a8992c140b9ee7243ede3"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "c68ee9e20a381fd02ecd4fe8e20b6457"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "864e13b5bf824e577f545c5ab7bd835d"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "3b4e7811cacef45e722ba08006bb5330"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "90d91bbf5a6779465e4a906f4b3bacba"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "7733328d06041bea4e8b54500f3d0b64"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "59d8efe59c732104db3fc139915b55c7"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "970cc2642b558aadc868c1a515998b54"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "1483ecd80849fea063858b02f71c7559"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "2e4db7404c24261a58a0d82ad3de8b52"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "274dcf2b431d989f9f4a2188b47f4d43"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "d604501e26419c08dbd8fd029bf9a8be"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "6ac8075227a3a1dea285560452ef49bd"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "d0f3ed4e3e713be31a34423dfd9dcc6d"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "64eab3809bc488533ba5e1a7cbc40ee6"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "a30dc13f4353d24c6c0e13850d699e5b"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "fca97d1b0aa5160d1300fa6897783cbd"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "833ef3b704b5f60f6cdc47ad92ad9f4d"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "d7d9f389294fc70261d756ee4621a724"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "48359e0a5074304b4f6f1873ce1d2712"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "c87014c7803bcf4bcaa368d7212671f3"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "0095f2a17e0f02b0ed6608639e6b32c4"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "86cc58e25c42e5ca478537d5d2b0d213"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "883394551dcf5f22205e6cb207f3c2dd"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "f8d0e43888e87ec9a9690c52e8e2b37a"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "806a11c0702318a1e4889d815c8cac07"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "337f96a7e48c9a67408ab085f1c1cd5a"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "e4253e6f8a2773f2a8b585076d1830c3"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "bfec7f0932cab12c6361e27391ff371a"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "9018f418c58073b6061ca2e8b7eef9a7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "cbd64ee44708ac3685796c22d1bcaf73"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "d4e53ff2e22857466c29fd5b65e4416e"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "1e9b0af883f4738f6abc2f50b5d443e7"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "ee10d265ba42ea3fbc767b50393c5545"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "1e251ca82e2e830308f585310cf82b8e"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "a49b2d5eb8216b14094c8f614b1ce7d3"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "577a7da52a79f7e36c49062774595bf1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "43afc49ab743ff718692e54755ef34d1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "24aa6855df1cf8082eb0e12f3dc09d2c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "14ac057944506c8aa132706abb8e858b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "74dc81a956290f701ccc635c629c1718"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "85ecd1323738398312bd2dc3098749ba"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "a3cc57a1aad183369f63f0fd0e993594"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "570e7e90dd5430b7278b824f11c4cf3e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "5f361b4cae85573e95687633150bdd6b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "44fa9012bad199bc4209243f42381508"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "cbda70873b02b58c71eb90c2863e0e6d"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "ed70ae0bd59cbf43ccf77df9aff5b898"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "1def5b7badbdd65713a2fc1d916c6f45"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "556adccd079729a08c5a70a2456e53b7"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "e7bb7aeef03256d2b57d74910ab40162"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "c74145365c510395e75ad652a41f0833"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "8271c8bcb48cbe4a2daf2cbc94668fc4"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "04c59c61ccaadca8d80f2289ec624ec9"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "f4e62d1c5f75a526bc6918480f6e9c55"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "ae656db71bb0b08b874d83c3fa32589c"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "07cb35fefe8fdeba52b869848ef03a5e"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "7b9b252e4eed275aebbb5e3147b1a5c9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "9b2e9830399c1dbda0cc086fb51d9368"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "30be21e3625d9981371d3edbd4928e37"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "21dfdca26e3171e39f3e6f39907ac5d0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "2bd76f0ea8737f550b1be3775017a819"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "56b32adc9a623ba525276f51743465fe"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "779a57770b4202b46773415176111495"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "e14f22118660172babc2a66ef273d1c3"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "dec164e640d07e5bac9a24a333c7de11"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "862ecc49e93ff681a993d075da05aa73"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "7b58902e701b0637ae7bd36daeeeaf79"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "d73b018c0ccdda270ae990dad8c76868"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "eddc6795d080b9981ee5b199739a710c"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "9b791cc3039bba584a0b63a0fe19d6e1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "82de04845428301cb361837c7b9bc3c2"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "393b0e3b419ba1faeed3fbc4317d9451"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "8281468d65da28de2e87f80e74b1fdcc"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "4531277a265ecea114fbd5a763c92fab"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "ae34b2ca866ac3a29c508872da78c54d"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "a6ccf18e59185cf92db84ad08abed9c6"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "647737bd89d51a4b85c1abff0e828ee5"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "455a47a1d41a34c7eecab2ec65e7df85"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "c3357fea74b8f561da30fb73eba27573"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "118c9ac49fb0d51cb3531b609d06bf28"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "b34d4555342d57191ca7f0e080ba7420"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "b5bc63a6e9f90112686db765e8597649"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "b8eea29a7418858e0582ea0eb5551a0f"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "e5dbeff9c120bf20b1ec507ae9ae769b"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "ce3ca76fe3bbb084e3dbea4ee830efe3"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "13c349991274ab29c3be5df6320d413e"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "6219ed44cf0ce7b5265c2e6579693510"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c635eb80766a7bd101907fd3039459b7"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "ef3c456f3bf49ab1c8374081b16655e7"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "b36960cabd58f229d70cd7fd0ecd0968"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "2e1ef199f2426a88edbd0a32c4550331"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "ef826c64413a180c76616c686622973a"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "14cf047adc03c16e264ca04f0dbafd62"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "4ea3c1f61fd3c72e891ac3395d84e2f7"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "5c69384ac8875296ade494ed79f89a8a"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "77b804f76ae70fc02ce4c55d2e8fe518"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "1f201c00095db8beafe4fbe7c2650936"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "8d07b8a1a334953fc6a003dbae8597ce"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "9a10a28195de10d245bed9d4e6b7426a"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "30b28c3fbab1c2efd93daa24f3994444"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "1aca7c98ada463adb9445eb175358402"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "91b2d8560127d9bfb5908ac0ab7b3b73"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "de68483e8dd590b21a05f85ce91c8992"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "73f07504da74336d975b5a07faa44fc3"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "17939692d8f16bbd8d54fa4811cde078"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "b56a96ee21d2cea2a29d881295baf4a4"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "a206bfc0b1fdaf0b5c8e07e7fa7f420c"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "d7fc8a875add711119bacb7afcb57068"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "1f8128d574704a0e271ff5f6f73bb339"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "173cd4c32361bfb994d2a19e624f845b"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "a2688c02437f655bea547cc6cae4a288"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "cf3f414f95de7829d56b27f806300ec2"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "fb8b8cc17cd5288cbe1001e3bb982759"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "23b10b02a863354e8b4425e4569d39bd"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "bbbc5ff77beda2a6dd4b196709dbfa12"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "939a697f544aea27a02364e948c99733"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "30d752825fb3db3021dc85c64727a06f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "87acc7c428402da7ad3aceb004bb7970"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "e7d79b45448e198dc32a579c502c3582"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "a782cda282bb98401a6d4a8ae4301a95"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "c6f18e3c0a37f682a59b93b0efab2d64"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "cc578c089d3fbd6fba18a2dbf275d7e6"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "b81a5f119e29619293a78dc98eb1daac"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c9be3f6c2e46ec5d8358a67d908035e4"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "9f092572b07123a8f7dbe78f2d3fe080"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "29048db0adc07f2a145def1fdf7fbec1"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "3664c750cf8db793f4ca500516fd388d"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "7cddd57dc0d1c71e5f3d204a5283c158"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "33db503b8065411002ca812cd5fa3230"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "defd9285b76547fe35151a715241d3db"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "f4b8238cd3b6f072c684453ceb2685d6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "3f113689b5166eae3a6db9fb6ba617a2"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "b999fc501006420c4c0da105843c5869"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "994869a2c156eb3f31172c0b2c03bac6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "6b55e7e98690f8faedcb4365d4d15316"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "1b377acaf4a9148bca8b7ad4bcc9a9e2"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "50a009e49c40c289689f68a1e288b6fe"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "302818e78981c4bd0f09cd0122591eb8"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "9296abcdeb55cc7dc48d9e250e31acac"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "661789e0c7aa74c064915186667f5a0e"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "145519db46d2dae10976e173becb1a26"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "8be5713b2c51ba64dcddb76d3d2defd9"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "471e36f325acf86bb355ded197b8dd71"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "b3888bde2994646502447d394a83d1e5"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "00e923cf22e6028d908d1b42a95bc126"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "0f91ab4d172764654da327276fc30d03"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "d0775175cef0b002ccdfa1c107a77101"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "7aa35fcaf49fb8798ba11d4a8046d361"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "90e8a3e8a8be7e3b77bacdfa7667f643"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "008bb2144b6bcc170caeb5440261113a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "1c564c1c222a5577b4f6d3fc359de36e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "4c4c691b639680cf111837c3c790a719"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "d1b282bbc6446d050dbda8586c0b4096"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "f59f8c58a2294992b81f2355b55a3bf8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "417ba3764eafdda26ace48a2a3b915e1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "e05ae23913eb91c3d023de5472481b51"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "a903c5cafb2af903f048d8e75e0b678b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "80142b4593c8dd63cc650f7402c28e34"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "5f81e0653796fab44c4599bcc2ac9477"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "05c7a2cc9de7b0dc021615c4016f7355"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "5c67e2eb177d22fbb5f4625d4b2cb149"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "bc4adf7e336a4c82071e124bfc2b5ad5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "4a7fc890258dd782116a534c417f3074"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "e8f36474dcbbd3af85bb881e056beabb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "7b4476452c1cee2c0fc632330f9fa27e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "840bcfe3ebb54585d4ee700657478e3e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "aaed629aaf878fe1c8e8364803ce20ed"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "438283da865b70a9756cb29a59a2b295"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b7533fd78619097cc29dde63a1d0cdb1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "1a7ca68d8022b3760efdfa79fb565a2a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "eefd8ccd74a61f3704b35defd3e6d685"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d41825c85c6b224306b9a7e53ad8a0e1"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "29e60c89f09fc0f69eaf5b7188386253"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "0f5968a8efd4a88edc29aaf088f54a5e"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "b12f947031fd53658da850ecc7c09124"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "a7b5f07f99ccc80155b32580d07f7753"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "48befd57d2ac4107630a0633183ddfad"
  },
  {
    "url": "categories/os/index.html",
    "revision": "763548ad12736a2dc0f8df148418b9f2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "6d6813f48661e9940ab3548b0a9682bd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "953c61637b3a3a285a97e02cac923fdc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "7be94747e4d45eaaf2a233573caf3283"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "27b5502be9988c3199ed1d3153870e98"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "855928210534e66a262789b2192b7e2a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "226eb99d7963730976eece1b85f0aabc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "2b2e86cb772a4429661f11da568f630d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "9e2867cc6967feae9ab482407894ea62"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "f4c64b363c9717c5e4fc116fee216205"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "bba02b1edcaf2438940b8f8d9a69f1a0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "7c28777e8f1d1230c75faec9bad259bb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "6c2b94a9b4cdd88f717de62fc07deec8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "f5d20b55e033a71d47878a638891db65"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "d21ae8e621c2e00d1263072d06ab07e9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "57660fc4900d3e19f842b7626de46b7a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "056af2f4ba369eb5aaa489ce05d75da8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "e17d2e7f559d2af03bc5419d06486775"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "b504352c2c8b0aa3bc47bb3e86fa5f80"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "56130e384a58a91cd23fdf9ae79d984e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "2db4d7b2451d477ec27afd20284a2719"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "a05c9013674b45e791a768a05651e8f1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "dfafe0a1d7aa7ce941408f420f1e1d40"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "98805d5bf551cb9d42377c8e2275a276"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "ae18c96d0541f576c858241b5fd61fab"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "de21fde8cf90639af056c8cc943e7bba"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "478f2b60a1249e4d7ae8a30b1fbd6d94"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "bed6c7f82f3bdece4730b9102927d348"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "0bb5c079631fcaa8774e7fc52fe3bef0"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "7f48d09e337b7317e13db980fe9c36a8"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "5359c2000831293371e323242621d927"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "33e1a0bb7a28310071e2020d706fee35"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "8890ac0a1691db7465f5fc4dfa5e43ec"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "bda7f172331ead7e8f98208cdb63ab4c"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "f23822179a6c8a9862a6e192373ea82b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "73e5a17fdecf97805ab088d597f6e420"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "2915b465a8c9c43fbf09e156e1ae168d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "578544307df73aa4dfb42ae3797903f0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "50c5542a5adbbbc84c40a160809b202e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "d5db1a7bb0c72e3b9f3939a38ec3bcab"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "3658c176bdbcd154f116d92255fbe0be"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "f768baaca28550e2a82d0653d824386d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "5cfbd3e7f2b0477e85a1eaff3ab391c9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "fc6972da43408e4a97a36b3139f97945"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "9a42d4ac056c69257caaecafa92beef1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "7c79966e5b9493f96afe03def54ab89f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "2f956490c710e45a4815177f0ff924b8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "1c3c850d935056a1cfb03d2878a51f15"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "b1a7c3199f6ae50562aaefdf51dd3c56"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "0e8e4785c228569e12d5f1fe074ed8de"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "2643d8c0a02553f266c3e196748dfb62"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "117956208955300a98f5edf25f2be4b7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "d40e003c4802740c8f2c1f73d711d2c7"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "9d5712fd293e92e3104f4e5926184204"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "f9542e61ba1cb4baad056e45f216bedc"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "cff2e7452fac75a30dd2462eab5cae5c"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "5817ff16ded553bd151a1df635fe504d"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "2a6c38ec9dc1a741a236590ec6fe6268"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "ce6cfb12f4b837086f0f997fd4746b6d"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "987d419981d6534f85faf9ce5fcd7582"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "b4918cf888df9b54bd1eb978510cc59e"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "20ee6d01479b57f3714f4c1c3c45a643"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "d9a025e290657f7a4dd317684665e9ea"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "657994ec0f78a1ff112f13d33e0fef52"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "40013b293fa985813e8bb6f4225da9b9"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "3304d6ff027eaa6a9783ac3b337fd406"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "20e36b5c86a9e0c264fee44fffe9fb0d"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "55b7667a9f12b98ca4acf5d7fddbe1d6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "b3feb5b35672ff40067b969060107619"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "14c106aafb43e05f1da0a3848de8ea4a"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "ec438459166b931f7aad1ac9d26414be"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "07b9e119d58d6a54dd0428304dcfd88b"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "72d1340f98601ae9f819e1708009b56c"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "e97fe867faa059fcb6d0715d9dbcff76"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "963c622d1ad1dcf24dd59e74eeffe8bb"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "fe29f5b549179f931b6c326584739717"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "8193eb3b1b7c72cfce5e2765faa4b28b"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "32c84fe27c924bbb4e7d2f27a479d210"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "e10e873acbcded6286cb38c1a288b4f0"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "057587a17b182de3a3a77934c7b4326a"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7a3376aa06eb2e0ece64e6f398ec780d"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "9ded84b338e5efcd8e179319449c68cd"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "c87b2433043054e1b0a128e0a3b27375"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "390acefca7d03d3e94559ee25795f473"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "abc0b51f772d07edfe57b8fe5a353065"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "21a7350cdc2a17e00f8d579bf51f04fa"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "e8e3b9a99e8a78c86f1d1d3590344d9b"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "bea677539e0a0abec1b045a9dbe38829"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "cc9c888de7a5b0d0537c1980b21e6991"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "c15c5235be309bf030ccd48090b84902"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "c84e94d65b27ec10a65f832e003526d4"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "422c59a2f4d828126a4c2a71de6c0cd0"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "727f5bc7a86e6c07d61755f6a41060a4"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "a8203bb7952f62820ac5890ad49acb99"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "d56630222ec30f696ef0a3ab389ec90e"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "94606dc092f5a27f640697236a5c5541"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "9e919bef8a0aa746bc3a44acc9fa21de"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "2433f8f6e1eec73a3510b125571f11cb"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "3f1f860d62931f292f0034b33d0b33d3"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "cd7043363fe2c4dea2b6e49f089cdfa5"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "47592b8a885fca2253f4187790da98e3"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "705a4d43f5522a1529af52cb2a7b20c0"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "a1a83b64930d7a907e68aa089f48913f"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "416569e1f57d714f259df766545acd78"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "bae2a079206ac966cfce16084025fb3f"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "b785550fa53a55f256d1737708dfceb7"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ecd5f45970c55074f827e5ac4d6a74c6"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "41e6b3e35cb581ae875f03f6c4071aaf"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "178ce938de455d62b5fecdbf8cb4c39e"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b703754faf4b6c5e8cf1ed4dcfd9cb44"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "e12c4028c8e0fcf0b34d9283b0f0691a"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "73754d55eda805e7772955a7cbff1494"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "7f30ccf77fdefccada8b0ef9ba791fa9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "40fc22e1b9da913e5d6c260d3bde413a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "57378a48ac5d8cac3742297e441b83b7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "ce534e7fa06b5c1c64a7567efddca775"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "e91ba3d29d9ee95c9bf625d33856f4a2"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "a2c3ae42fe671e90bfaf5f3b3b50e4bc"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "5da3e336134c6c60b454e894e43ff7dc"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "5b7c570fa1e3869f9a566a59a7519367"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "f206f0fdd8ec82870d6d8a571fb1b7ca"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "eb9e6183e6d3c8cb3508c0307f10b047"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "f8174d4c54769d3ba26725e4351c2558"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "dfcebaf715b3d8c27fd40835b9455572"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "415191c38f046c5a9eb8ce57913eaa1a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "5d8141edf16299f6b57a01cc47810fca"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "787cfea8be3e7db193176a96790d66c1"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "14c7c6b47aec9919781e2eb6b4d6c65e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "da81c49a49e94b4cae7a6d4daea70a71"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "6a55d562a653d3a74fba5373b8264373"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "6101ea0932ff18136edab92c83ff9bf9"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "45895a631851275762322965d609c253"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "33ee19c642367240ffc5a38821070482"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "e2bc56418324a08d471c78d8c2ad9abe"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "88263a6e769aeeb32ec5337cc0833c36"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "5e0479db4539a4d90b57229aed81e86d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "4cd47f7270e39e982095599c776ee902"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "796286cdf7001151a37bf1e193ef5dc3"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "5a5abb0776cb1977dca143ab8567217b"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "b0e193180f1afe743694fe76a60309d9"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "3a2f3e14467b284353b361b6a88be446"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "f7e3a69b4074242641eedbeee7f5e566"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "876678e9341c0611597634eaacccbddd"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "365100659ba232098e1bae64ceac739c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "1bd620ecf20b4e2bdb4cd407ff7f48d3"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "3205ae8f56ae851a2917c9551bead882"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "898e06c28ad568ad2dccc82250f1345d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "cc375b01c18faff066538173961daf67"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "af94a5a66c115bf43935b50d775f7f02"
  },
  {
    "url": "categories/php/index.html",
    "revision": "27f1d773d917b0cab25cad76b27a8c38"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "5754446fd02f040119425417b7274cc1"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "768e2e4eef31506aef4494a3589460b3"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "31c482fe0a2d649d5a55cdce56cbce59"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "4cfeb016a24b8795ffb8df5843fa5ca1"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "3090e11f28ef3d89450c4c341a5f31fd"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "500d5273472d60af6d4a9cc7a2bb60d3"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "52379a476f3ec8b3c6174ba818939166"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "0d2de389f1778d88a6ae021e651d1544"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "5231a86ceb9bcd48dd1fc1ed09d56a7d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "8b09449820722be4f074804b0393fc6d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "d86168a0309ae3e499a5a74691c0c830"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "49bed1ac98f86bf09e7ef5ad06f215fd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "d7e7256784f2b0e9c1ffc79d0a35c440"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a6c9f261b9379a1f42e4393333aa91d6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "28dd0deab70ee539765c6a6ae4f5fc85"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "6a2fe07a57362aa1b5750d89696921f1"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "107910ca6b9f965d6bf73402f99eb806"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "4b7480b0c27b19661aadeb13e81f0af9"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "937fe7a176c31ffdec785dbdfeb36b4a"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "e6b13ff418a4ae7a1d45dbd105980733"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "cd913c8370209f73523f7b55f46edfc5"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "cf73d63cdcf17a80047e43eb480507b7"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "673716bcf213c13be37a9e8dee4b5b4f"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "797dbf2225c08699c8d6d715b2ab1178"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "bede472427241ec3b4aaffe59c991c6c"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "eb6f2a1a72ed95c0c7336a95616ee1b0"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "4d809fa88696a1b0bdae658957036821"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "d354807e12601cbfa1e73375881f55d4"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "0debacf42dfc5733b1adb2a6810e81a7"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "6e90dba86b10f6ef58b3e34e74631ca1"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "3e9efe364fb75687fa99f533f8bdfff3"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "504a022fa65596f511c855a2b32590e8"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "b59a45eeac8bb2f05aba9a14048589b1"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "1e110a15255338f3748ddd92ce30fb20"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "d42e76f4550d6881500a8d8b29ea6750"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "397b8fed81c106f3d1fc71fc1d850bb9"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "82b739b46e0e4dec880398972da3933b"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "c13a2a4809988e67649d96ca61e1fa7c"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "3528443f8549b3a9e27eb957cede26d8"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "f89169e660012ac085323cf00929ba7a"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "127a414c68238fccddc9fce8464817d5"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "e4d3b53bc5e3d0b43beaa7658a50810c"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "0242aed31163dd3f45e2013f668de7f7"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "5e2b16eeef26a9dc1d3900f53b3e1820"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "917e21058cdc34f824386579ec99791a"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "83fe5466e0c9f9517e90d60670e8a4af"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "343374da1fe61f181e55b7d0167468d7"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "75260611ee746212f88d234180ff1f6a"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "aa33c716703951b6417924f53bcbf422"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "4d5d0fb981d982012ea643890d7d915b"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "fd70a04c7fad9091668caabf1db318b3"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "21912ec69ed8aafdbd18ee64c41487ff"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "dd97a0a27cf847ad35aa759426935869"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "2eddf1580510ff04c23d2d8d0bcac3d1"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "a7b842cc8c9207f7e5f2133e3bca7cd4"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "818807fb8b9edadd7756fc0058b63804"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "91606f1071f9f7e2fa34ffe29e36deb8"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "b6a8f6d4b126d6e9e1af0b9af8f3192e"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "6420aa54e5d50f29b848935f476cb3a3"
  },
  {
    "url": "categories/python/index.html",
    "revision": "2ab5f01c3f5cadde711836cd8c387b59"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "ae8508e656789d934e710455b23c2ce7"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "afd257ca4acb1ea3355cf69484159e4f"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "4521486b19ab20c1f03f7298363bddd9"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "86019c052e7e0fc9362e728f11750d02"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "7f6a9f291d2ca671a9e8574a746e69fa"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "471e1748b663fef6b77249c68c5382e9"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "91e839933dcb287aa93a1ba6837a55a5"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "1eb39c8b9da8c594cba8eb13c799a232"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "3449290b91b2d7ddf7a52fd14b97104b"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "2e735b98070fdfa2c9b55a22e01d8a4b"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c95ad1c8883a8d15cf61545438f6c4db"
  },
  {
    "url": "categories/system/index.html",
    "revision": "16e90632679075ccbe6d77809da1f10b"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "0c3a06e3a52c395a8826558bbd0f532b"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "895ddaf1e6f018842924001ee43a6de0"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "74765c0ba90ec7b90616c47924891859"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "4827bec876649ea530e571391c9f92e4"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "1526af4569f67df0a8dc4657af706e3f"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "ff488a28801c3111d496b817f0cac74a"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "db91404285619c613856a9b3f63a5631"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "fd1b6656d9c6cc082638ac443382858c"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "978d67e6617f46193c3464a3300945c7"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "2cf57ff215bed337848ae4b85f6123b2"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "047c69eb7fc95f96f7b8f6b13dd4c0e5"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "aba58488a6f63782713adb0fbc2d2062"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "87b9b291ba5065dd013f0a251ecf725a"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "8535b41fe5d01d250fef4caa6cd9f295"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "0c1287b6c576eb3024434f6d354be316"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "a1664971f46e13943309a5b53922b500"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "a2e17e43dfadf5f43e0b16b824f56d27"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "89cd0db982c99828e0aa1f2502d1d444"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "12d85c91df30d680feffce0592a12b92"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "e558d5a313498b17a4ce527003241dbd"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "e7f5c70f717b5e7cac3edec8ce58fe20"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "7d665a3c9507f1adff8c36eac514c242"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "1e449a0a0fd83015ff5f8444777743aa"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "bd32bff5db3bd66d1c58c04e00da6992"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "eb1b5ca99985f0f557abc1f8be323384"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "6edc6921298dc69e595279fa32cce90c"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "c9a5d7d23ce772fedc135080973278aa"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "369d7c5e9917f15bb6d6be2493bcddbb"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "a885c6b191f82477dd507a07e8f06d28"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "4279481e8b176fba79b54ee1985ff5f8"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "57eee223a1e6814ba028715489d574dd"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "d0f04b20dd7cae22b35855bdb87f5b77"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "d83e28ae1774817d528404989142378e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "55023829a4bac0379473da28c3cb4376"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "d44033f5a02ac8c54aa7c1fc122e82c2"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "4aefe216454d59c1eb38adce5db64495"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "c5a06f335af0f208008456069fd8ff17"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "25a30d9226a6cc713d2c682004c82664"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "a6454b3643b0e2492ca890083a020615"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "e4c2809936ce21cae7a161afc6b92918"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "6ca733f2344cb0facb5dcd64d792383d"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "49a5fc3de94c891f51cb1c3bcd72f66d"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "67d6c5181d342f19721f62c79f9b58f5"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "579697e13b16cab1bfb4c7610925a18b"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "19d547c5e51186803640e30661c07d6e"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "a8f7c4e6e0ed29c2b159c9b7ce034af0"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "b1529966d3ccc2bbcb752bf78369399f"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ab858dcc5f35ec0fa83d9e3b7c780c23"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "4102d6a95602de550b260821d3a47181"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "4cf71fc8373c81a51a6b3776e864004a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "69871b89375532e895507de70a627191"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "30ba7fa8f9466b417680f15178f942f1"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "65438ee115790e7070f6373aa665b717"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "4cf7df85a542e1bbbe69ab3455a0d7d4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "9ddb3d531e34cd9c47531a11c436dc61"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "e4a4db0ffaa03e8e78e5690a2abf28da"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "2e538e0eb93469ba0330c4f8a1a81e51"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "5c0a0aca23ac111f834b1ba07f86f684"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "ff3ea76ec13be7f374ce9c4fa24e89df"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "7e540d263b154f17deb1c6a256ef357f"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "28a58f3cb7da5f0276eec98202e2bb4d"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "7efd7b2ad501c04ab43cd41d0f1e89ee"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "83f131637e829ebc6d312d8536543df1"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "e3dd68eff3f1c39f7b44b9ce984bb8dc"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "ebf4a2ab5ba5c23d270bf39eb37397a2"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "20bd62263d039bf3c94b58271fabfff4"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "e954a80cbfed38afcdf846c388e320d4"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "9f564a2a17a86e508e2e6eed105c908a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3d04219a8c73c645746e8a45f809d826"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "eeae90431d13ed139fa4b46158ba5db2"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e5169f6b679d3e928f95c3d1d9914a92"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "0cf0f9edc0da7310f59a652056de1c30"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "22258ac972069b99032a84bd1c334b6b"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "12c0a4818915d87f83475b509092c56b"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "c5479705f712de4b37862192052872ad"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "4d075e62eb110f986a7e370991a0c843"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e1e08e1a344e2a4afffef203787dd5f4"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "2e984cd3ae4b23aec250fb19112e4c04"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "72562521e6af4fecec66b3290ef67998"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "7ad8fc03a9f71cb2bcc3c8171372aff4"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "05be478032310325f1b2b550fa6c6a15"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "53901d48d8fcc220af82b377134c3f1f"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "fcb30eef1a6c1b3a497af91402417802"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "ba27eb75a8b2ee118fa3f6167ba935d2"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "a15b9153b2423a57cba8f5dbbbdbc343"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "1189c42828e66f581c9601e2acbd329a"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "5c36ed7c881d40bef846214db2ad91f0"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "716cd343fd3e47f8083d16a5d9f05aaf"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "7cf21c42527d49ff8da9c56018e92521"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "b23212c2af83d6218be8bbfd7e99b73c"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "b819355f4c944abb4cbdf3a1ca3452c1"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "aacdbf3d6bf23773fa2be2c48efb99ab"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "edfcc3b9260ce2b44ebe668827ed349d"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "fa66a0a408949e3b0247845b2b690416"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "aaef0575be9d2ef60a262ffc7f61c586"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "8131a60b147c38ac71f06dcca30c772f"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "75502f99228d3b05af9fd2fc0d49d7bf"
  },
  {
    "url": "favorite/index.html",
    "revision": "04512af9d4d376c5420005bfa7f0e33f"
  },
  {
    "url": "index.html",
    "revision": "104ceac6694bc94270cbfaa2fb7e0df9"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "dad32ab23e372d7811b26294d02979e4"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "9eac426448e060c9c53f4b5af72b117c"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "0e81096f9b74aaf912ad8833e504db72"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "f286c58296117b762d3a5439b4966e1e"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "96f466506bd5fd8e1a968a9e4837cab5"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "38d7ad20b62651d89101ca6d9c84c260"
  },
  {
    "url": "note/index.html",
    "revision": "1a09af19a9d874b7c60704996d371f39"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "d54decf4fa42cd7733528934d896ff2d"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c25738c850eea7f7e470bff131a235e2"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "59a183d71194f4432f17c7a9a5e1d6fa"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "8ce7c614446e8b68408196b84f221897"
  },
  {
    "url": "share/index.html",
    "revision": "bf2aca83b9979834ce12af9ee2d18b13"
  },
  {
    "url": "single/about_me.html",
    "revision": "9d8c2d8d5cf3bf34917aacd9fd4acd67"
  },
  {
    "url": "single/all_article.html",
    "revision": "fff95d278e35c855d0a1270763786b0b"
  },
  {
    "url": "single/welcome.html",
    "revision": "d2b307bc67a155b336bef00c72e732c9"
  },
  {
    "url": "test/index.html",
    "revision": "6d5e337cef8a3f86f01f57b8d370319f"
  },
  {
    "url": "test/test.html",
    "revision": "0747b0e25937177cca1d9724e303bdfe"
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
