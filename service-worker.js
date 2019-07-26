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
    "revision": "f27e69ec32bd9aba163eb4c16d5997ec"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "bf72ab1decef231cc5c32f5aaf7ed89b"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "faa6315ffa862bd3ff053568d44cf23f"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "64291e71d1301a72e4e8761214c6ee55"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "d3dc700901e21722e6d8d289e20e08e3"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "0cadea346ef783c07e6a0aff76963aae"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "7a9f0d14582f2294a09a6f3c2030e9fe"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "a887805fb8963ca05c629e006f989d24"
  },
  {
    "url": "articles/index.html",
    "revision": "818140f4a0c8da91d78dc2389bd38662"
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
    "url": "assets/js/1.9661ddb3.js",
    "revision": "daba3598b04ea26da81b8c9b5101d729"
  },
  {
    "url": "assets/js/10.730e6669.js",
    "revision": "fe3439f081c89fc76b1f03301c919f40"
  },
  {
    "url": "assets/js/11.03a3b555.js",
    "revision": "2a7ce7e6f0bf65e82e6d390dd0a68568"
  },
  {
    "url": "assets/js/12.dea4259a.js",
    "revision": "b81c9e54cddd8f7a36dcf7b2ba0d7c4f"
  },
  {
    "url": "assets/js/13.017d0ddc.js",
    "revision": "a3072e5b22991ced4ddf3194de95675f"
  },
  {
    "url": "assets/js/14.1aec49d6.js",
    "revision": "3de1a5ec6501e2c0361733f2eb61209b"
  },
  {
    "url": "assets/js/15.54ee861e.js",
    "revision": "241adff2f543520e5bfd747765548738"
  },
  {
    "url": "assets/js/2.6b7127f7.js",
    "revision": "26579809f8a12a5b45a6e7f66e82e4aa"
  },
  {
    "url": "assets/js/5.314447d8.js",
    "revision": "62149a8ef69e24be7a8bf7d56b777b01"
  },
  {
    "url": "assets/js/6.398530e5.js",
    "revision": "c19ceebd7e62634619080a6f18497845"
  },
  {
    "url": "assets/js/7.b1fc2793.js",
    "revision": "6f0bd63bd90c8c6e1bf78865b1a6677f"
  },
  {
    "url": "assets/js/8.46eac014.js",
    "revision": "29a143886bef54011dcefb431282f372"
  },
  {
    "url": "assets/js/9.c4f01555.js",
    "revision": "ab856e3be3c6aa7162e7d1519f7ce069"
  },
  {
    "url": "assets/js/vendors~docsearch.1d9f8a8b.js",
    "revision": "3ca000d6d42f20b8cd33d12e9070e15d"
  },
  {
    "url": "blog/index.html",
    "revision": "04df9789faef2dc2cb650dc2bc98035c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "4f913efd47fbf8a850958777db98926b"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "2b1d3ad9405878e69dea9d00eb450530"
  },
  {
    "url": "books/index.html",
    "revision": "e69be89b621d5a9681c828e62643cbad"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "5090e9cbf915bf0057f32ac6a5340a78"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "36837c53f6129560d861fa54b4d1104a"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "533965e2dd0159960bbdf80646aedda9"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4cb8c0f700f089d7b232e26a80efb9a6"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "c30ad02d476411c872cd690c7cf79c45"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "8bdb3e88414fd41ec4d60ecf81569b75"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "7696cd1b28536de99dcac1de051de811"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "ecd3478358c8e61ebfb56f8431f3b379"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "86440691f7540b80d336631f0d64b4f8"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "c5e22bcc169b4e6de1336ca83bc80743"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "70ff058c62b8cf25c8a953088faafe65"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d8c6927d72fd7ede6408d80bd87636f5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "858cfac203cc907399441decb4485bb9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "fb09a0b0314ada18e4589e31bfc2b7c7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "679d460c6ac8bdf9216adb8f4e44c59b"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "4bd7f807381dea69e9b489354905c9bf"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "0bb875576c9269f6caef713003918026"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "54ace7912b76e4413d0ac5789d8aefb8"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "4094e6fb23b98ec4c4a6c6f05b2eb2fc"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a8a794fd77783405a71cf1f29aecbd46"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "c6127879279c7cc04530d40b8839f8fe"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "ed161e1579192cc51ed0658ae2d06562"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "25f78e1b74113500ada40149eff2373a"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "14677251b74fc86cb28564cea0d258d8"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "bd8f95e673a91ab8a538f393dcecf1f2"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "2f032d0e768e9e6400c6f9db7461140b"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "393aa11d68aa305c97851a614fe3189e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "c88af1b1037f32a682c1f4712f1b6dd9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "1dcc499a122f0cfa370168fa85f96b47"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "14259f7b77fb55bc50764165d6aa79c3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "6f9e74eac4583b4b5deba0b95e6c39dc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "29ef2c059ce56bc6c1b8e1bf299a45a0"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "1941408b84ff23e6ed87d9dd2172b6c8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "ac9bcaa435b5579a4a15d276af105a06"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "5c91c312931b7f6b6a8a6b3c2a642a45"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "ec653f500fc058714d992a72aa4469aa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "6a0113a1284e6063c96938d1a3d44166"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "78d57cc3d6e3f6293a5497d269314e75"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "d37ad3d2c8a542f42038e5ef108e3cd5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "e4d60016a2d7d9922d7e721c321a6087"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "d57cad35455485be123a931a174f3d32"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "caf440d682f1e9e85fea3634cbab72d3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "41dd202996dc7fcf1adeb0e7acce356f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "ad0457b1ade327b226554c4717d6281e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "122669aacf4b3b5f62c381e5c1da5bff"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "17af87d8369973c0e50c11213ddb7c65"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "eaa1d6eac84dfe7f1a75e51603812cc0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "3a2f458ad1a9f6803d9195becdc84581"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "a009941e809b1af3f95e1ca4fc27bd07"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "7b309b914dffc291a6353f1b6c8f8b97"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "313898b0e5e902b54fbded76446343b6"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "8c6a99be035bc09302c3370db5212f76"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "b368978b96774e667324c64548deacc4"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "02c0398a40f65692d40164c767dd3320"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "1099d53d0384f6d2a4ca5ead9d62a0d2"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "deee3c734eafd0371dde2fdc4d0a95c3"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "37b70be6e3781d48687c06af568ddc14"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "87d5383ddb55435cf5ff99f90dc40734"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "1e31ff749cffd87ad10c64314a36fd16"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "47c6132266a78fd29ea69fe9d89fbf0e"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7e781dd3ef113c7171eb99bb5659ce72"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "8fed73c8dcee577d1aafbced0464a868"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "c05de57c9c192d31abc6f3f5a74837c9"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "0376c5b9bfb2f5597039492499d11d7f"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "f20fac780fa7e268d1097c1e697e4a14"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "3706692c7c53637cfcf41ccd24e2699b"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "3a4dcaad833522047394d3e60e5d35ad"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "74217be5afe3af9758370bf054e61f24"
  },
  {
    "url": "categories/database/index.html",
    "revision": "b52c9323a8033721de0f861f31f90e53"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "c83854063986a0e0e76d0f7ba16a8cab"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "331f1c4f1e97e70660a3b60709b2eca7"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "fbd01974a0fe0560e09bda2c3d035c7c"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "3297ce87898783ba524a7e78176fbe77"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "3c7b873ac36cef78f5ee53d89e797d43"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "db6dc939e84ee4367d79a7fee6139141"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "ebb9940679e6c1535b631e41dcc23791"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "b0cad3ca684cd6ad33231bcdeca52900"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "b37c9b5d1c5cc3fb35e3c6b1e21f364d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "ee6906bbe047d4cb17c1ffdc4144c003"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "66636dc0c6ec7f546d047db4e1f87ec0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "400969d0bec2a4e21e998a2766affbc7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "96d89ab5f9821df73a6e1c12b3a71d6c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "d7b2bbea5ddba89f85aea34c23806044"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "56846eba16875b0cce06fb71f28a8d28"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "863f4fa8fe54bbfc1d202cd4fe5b18c4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "825582a7db29c174b971482cda668aa0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "aa14731d6c6e73bd8ca76d4e56f8d3d7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "a8e3e12b85abaeb8347eb980494c59dd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "4991b1261ee69c64e450eed897ffbbc9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "b4da19ca99aafdd90aff1a4dc4cfa432"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "b51e72cb14197cea0839a7d00b5f2167"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "8e1a701a079d27a0ae1950491611be89"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "8862606acc500e11a1981725f6b56c2c"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "0e3e905e197f658b19278c463f2ce448"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "129a6f1d5245f27fcf339f469c8f56aa"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "efa9fdac38a7ad05d9138713790a69e5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "ef4794f7d8f6ca845e87e8f262407270"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "ce0e2e71423a4366904d2df8e17db184"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "e8946455774cbe395c6cfac331f72a83"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "371f321c5502d13a412290f3567ddcf2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "bcd17c501a1908dac4f0ef3f92934b58"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "ce6d0004dca9a86552240b88f1e60e01"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "7d76de2a161c5969e46c545675426990"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "223d339b1d37bdc42ca93c8565247a15"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "dcec5cb64afe4e2bdc19b69b4a38d453"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "b3fcf0d81b3ea1035eaf53f880ce8868"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "05d4eea37495e70746976ec79e011ef0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "7fe642751b68be1dbb7a22d23847fdcf"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "72edd2da4a12e64f5b1df19da363f78a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "40c8ad3e8e8bbe5777e0826fa35b80f4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "8667aa91de67c8a678d395a41ad01c27"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "62480c139bbfe5c98fbf4c5046df5c9c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "7944fe74fc1d06cfb87a6b847e3d76b5"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "0083d2be8e888f762afb87a68d4adb3e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "bf39da1da718b9006b15a26643abc0a1"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "92716eb7ae3c92d6abbdcbbc39233276"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "fb38110d2a136e0edb74a41010291938"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "bc72a3979397e97534a5b02d7cf22a99"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "dd3d1548636fc605c1280fe966063008"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "35e82bb10d328601b4f8ec3ca4b70ce0"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "437e2fc17f8c96beb1c002711409facc"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "6c82486d2c459568b3e2648212912f20"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "95f9278de55e8b8d90878934ee3658ed"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "3ec9f31e51e36c120c03c2b0acdd8062"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "3f116efe956771bc9f983fd737658c9f"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "924cce9dae88e9a4c343e86fd6fd1926"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "5bf04eb16d8bcbfe635afe4b9e9bdb19"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "2a18573b6a67db155afc935e3cd2f6e3"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "4c9677e7fc02d5660c82cea26b9e794f"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "56de1c96b321b5f4d77c08aebf7a34b6"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "c46413b16b157c3ca478d47a7440f1a4"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "71654a217e4290198740288e1dc7e285"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5fe556446e4ebc33d0dde1b07ccc843e"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "5b4f96b7af4fe154fb69c76b43983676"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "f3c9c2176f88b4c30f9bc1e9cadede44"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "1e590a2615656847b697fb1ebf39cbed"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "284db8ff4102d88dd0cda034f32ca43c"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "cc0c13e9594a9015dda2f2b2aa0f18a1"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "ca203615f3ee1f30b696b6c0ba9d0996"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "bd919fb487701de632f1dc61cb6bbd3a"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "0404ece58619d5c9cd1ac98913785c18"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "be38704f4b0b59f3743b4ade77ccc0a9"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "7d41147ca9ca9e4f4c9ab27527a32ca7"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "cb5e246a239f3c6a7639549ec8166829"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "28531876644ad1907ac83f50b69c4fbc"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "2963462103db791e085b71ea067ccc19"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "78aeddf7210221cbc3f5f99879f5bb64"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "251555fb0cc67e02a11a8013c2955836"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "3bd7b0268ff5684fb207da7018db74a2"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "429a42f4db3d2ad2e87452c29c848289"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "8d641e6e184773ec1910cee63bda30eb"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "cc731e993fa5039606ca7ce99af8e8eb"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "ab879cf67934490e90f5720661822590"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "ce1ae9494a6ddf249b5c52a14696bde0"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "62ee2a688e2ab45ff33b1286778bfee0"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "9369dc9126b0a9f32d3335eec039d68e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "ce412ee106e0f43712e93f283a4e30fa"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "ae565eb5e6b4559a3ef16e1e47e8a502"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "97cb8cfa84c78efe29dedb29378fc4f9"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "dc960bdf4c1c5779474d7a56f5aa8b4a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "836ba23d9fe3db70b3e5b9a297c03000"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "061ba5635d3de18af8479703467552e7"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "3d8fce4946ca0afe68b046989c203328"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "f26ed5e60a1922fb8f1a718cf3ff4a34"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "c008308cf6add5775c1598557009eb3e"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "cfdbcc202a16fad3374d8d4be5f1598a"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b15f2f7b9ab1c6d4aa4db54c1114cc6c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "f3daf3b4e7df7fe11d946aa294df7aac"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "0f72d0716d87326874bfeccc39369121"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "21eaec82afff59b0eb1305912555addc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "596eed9ac46a7a8977ad0031f42bafba"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "a81822dfc2eab991c401979197e31b1b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "233f4b7b1b1651b7e00e3113912ab0c8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "3eeaac42213c97474ff3bb776eb7dff1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "acba02c7e54946950b3310ef719d4b5b"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "e2068068a0d3f2a6b71beedb199e0285"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "6450f627d93944e1387b400d8fe7ee5a"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "f976a3b8c285e4d857656b05b611b1b9"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "36278acbed2ac297ffbda23897fa31f0"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "efcb4820ff4707e1157f11242932f5f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "16d320ad48562f398c44e44c55906e54"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "4bc250394f4495cbb1d1997631d59385"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e785445d2878095444adde24af3e7a9b"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "9fb85a453148b21a20704372d7ec63c4"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "5a082c4d9126ceeb0d0da54e64cc9a2f"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "3203351196800cbd86b769d11912117f"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "32f5ef654ccb80f346da717308167257"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "c8fceed343636c87d0e45b6ebaa9b5bd"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "1052f0f987b171e1eaa0cab7c92ddefc"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "b270c37986e2eeb3594f8f019641dfce"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "cf7c7e58c2bcf3969718061e79902c82"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "2de438f500c6658dcb6179885c87afb1"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "0d29d8d172321bf80e4edc0454a6c6a5"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a5b0a0dab76b329cacd757aaac8f4bca"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6acf3c1be1b28a5e0ec228e6e1cf4172"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "aa3979d831a9b732e0fab2e2043b4ef9"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "0564128b73583371e010b696a850ac64"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "8244361b2b81fbb6bd91709bb5b59b31"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "3fc6489f519e4c7b718dfba4b5a67780"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "80170655b8e22b43223488a16fed3605"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "af593800d047f339d2cfc139db82e262"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "4d35a7f062f40d1fb42ca9b405948cf2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "8c9b33ab5c7a21d2db3d17867a89cc02"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "75f6a974debdafcdf0f110a111b9fc8c"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "643ac8aea2c3f00d4c42071a5ca2ec04"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "37f7522b5a2a6bed7449993b84335c17"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "1e039f553d941966a47feef27742d6fc"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "9e277b6d783471aa7f0030816bc50c55"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "4b09ab1c8fa3623e2ad37e75d6df01ec"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "eb5b68861e01df9adad6bb1ad9e7437f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "f5602d2d3b895c9f2abf570d982e0764"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "f158d294f9d524d79506d1708f2b4e41"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "62504d7bc741b819917b754e420ead57"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "f701dfcece4365ba5de526f70515add3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "ca0fde2ea6466fe2190be187313248ff"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "5b2e8f011c470ea887e965d46ff7094d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "a8b5eb649fc8db1a45218c31caa5fc5e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "d1f04406ece177ad9ac9bd9d976eb604"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "643387242f378473784ab77ad418512e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "ade9400f326923b8b870e6418ddf4868"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "1cbac6c6185de67403dd4b1eb4129243"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "91526a86c4df4f43750b653b0ae5fe09"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "b35617c7a58d2284545f28246292a3a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "678f9ace7625a0ffda95242f35312517"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "e22b71035d8769873057ae1640261c34"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "741f74b51c264103b39324698dfbba37"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "b41afb0e91c39781fe684e167a08db2d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "4552eed7e61250901b257a1f5fc7c84a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "0d6b915f294a846b2597cc9e0a9a82ae"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "93b8a435c814b85a3ba38b02de121d0d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "d33712bb1eda60c5cd2cd50ac2cdb27e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "ecf5a24916c37f68b455fd01f8af61c3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e3eacae39521d934324f4ec997b0c62a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "afcd34f2341f486dd536497e65b4274a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "a0791aa35c5228264463384624f4bec1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "136eb24b05d4101bfd8568f9946ac37a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "dfeb5a78fd21835769578af592fba6a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "ba44954db277d1f5e61f618e8f8a4a5c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "9b4a85d9d5087f754316a41a97f49a1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "af383576221415839bf9ffb38d36b94c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "700708cfc40cd1a780184243d5becbf3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "91a042e2f650462772b793af946ce0e2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "ef4391299ce7006129d49b984d202c04"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "ada789fdb5c4656ce557f4466b411836"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "41ba38af2ff5ab70eaa09ebffd55d25f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "de1c7f91072ae6a58bcd73f0087e21be"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "03f6f02f2da674ff96ca40191cf86913"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "b5862446b766732d564f4106c679835d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "917f77776d790732d6b1d234a654f19a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "f8350e8adc63fa3664a875338c424efc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "89debfe74e17fd7ba3bb04d00a997ac0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "bd91da8766c41553b71e12eb90ece746"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "e391c15a001d507ab3514c6d84e6311e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "0b6c12c0c6a3d86bfcab817880b60dba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "a5c953bd6afbee651090a6df5c9ad54f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "5d72f47b2b6df26287d043fcf1b55d1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "e04e6d1ee80d3ebc43844a3922cbf9c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "2322db11ad39155b644fdd3f0209523d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "e404e498021ed9abf0068eb516f3d21c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "1bf88843f61d85cde18599568809722d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "04fd1652fad64f74e9ebcd170a455763"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "50d143715ce71b2b96d87ce03257a60f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "e9fea33dabeb7995c4cf97c698c09f9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "288d9f01d58795176eaa24cf5c71ea9e"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "a3b8d2bcd97b2211b69b7377137d551f"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "93d6710400c37f1a71681360f07045f0"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "49e6c748235b41085c890b2c17d2ec0c"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "90a53867cc76c5aa50bfb6c942ef56de"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "b12b426ec3d0bb7a3c1e898e34ad7a23"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "d18d0514a368849edcfd8a53a1423298"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "912d7f709511073491bcae24fc59ba33"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "c0754cf153274b2be2ea46eb517655d7"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "9d42570b8b11e8f77769f66f4308f75b"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "e6f5eee021bf2e77c5cfbbf0c4594dff"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "863e270ff285d0af83e9fb3ff2295f26"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "92f4b6c3a5b7bd8f3f60ba4f1add612a"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "d7b18e7f2eb95e1a42f8be554bc1ddbf"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "a75e3d736b1b74eb163d24f14b3f5090"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "7e5cef6d202a6a689c4b120c0c65a734"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "e98c6aa605ef0ec1a850722d96d01ee9"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "7537855631d924dd24240ccbc8e553fb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "d74aeb222f3880716b82cb5ea4f7092e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "637e557008959636483d3293653a29c7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "48d0a2985a49e1d91ac50bb2feb5cbcd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "7aa92612aea11410777db59585423f3d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "c00df4613886dc1aeb00ad6efa39b07c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "1c328fd4a552d490934f7275290da6b1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "df672319b0d9b30e2a0c202758aced47"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "6815dc922ffbd1ba98a5036d3fbc224c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "68904083282a953e0765f831c3b88405"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "ba0686d4d34ff7364cbe7c943d631707"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "ae06ac7123fb7feea9b06b02f851c05a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "45466df80be697eecae5b78b84751638"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "d6e1369be00db7c891342a95c889c376"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "68952f32ebecb40475fefe3b8429b606"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "d8ea8e2d06a1e8b1ccdb1702ea6e3325"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "e952574567e50195cb986488febd426a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "816ff539b4baaf6d4da96e3c491f4e05"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "70110ea44257bd8fb1e45266a1ddbe91"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "887858e0ce1e4a1a9b08c2885cc970d7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "c65dc68a8baf63bd07f5fc9434971785"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "c25dae7915b3b37e4d4fdc24b9a7a462"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "bf78cfd74db6a2c26ed26d7159f87754"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "cff6f01fbb93776f00c59a81ad6307d5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "2569130ccc8d21ad0a7600c7a8b0b2b8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "2f779fbaf504792cf04fbbb0a670b189"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "29a986e1fc14bb8908bcbfbdbcb9b911"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "cf1a917ae8be00af5b50c21d4a48f750"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "77a85d82c1c27ccd1edaa3339529d6af"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "ddd821826c39601b2624fa6347c8cfbb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "9fb2c111f7659db41d4f280a0072d0ec"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "18e64cbb0b1bba07ce35293492af11d6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "89f99f2b518a2d674c83ef9a2bb806fe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "dae6fc1d55138bca9f4852f669f95195"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "78df4d7c90d0078cbf0b5fe7bbddeffa"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "f97e15ecdb01f77a59dc035b76cac1b8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "086f911e47571c1ddaeff46287c132bc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "d58874050d6187a0b9f16a8e6de57572"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "d140ae0f2757cc6be36f849bb96e2d32"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "150559f669a4c0b43724a3fc27d5899f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "cd6a48cedb7b33f954e3c80ad0851c30"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "f079458ad7f430f15ad22ceb4b4b9ed9"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "473db9be36667b661e6a955657dd5114"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "d072521cd4792f5942e68afb890c5de2"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "454ed74de7f437a6d87ebc073f901efc"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "d1a37a5a2b7527cbcf60e568c796479d"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "123f04e6c35541cf055504f6473157b3"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "3cf03d12d915167fce8f24e2b1bb18bc"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "170cf725ceb9c5c89c25d1df1a593eda"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "d2e439f3c8b15cfd6a6209b542457418"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "91215fd1e3c65327abf5bf128e090823"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "73f238e764c063966730c697fa09e65c"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "64808eaa48c9d5ee135c9d328b5b1dfc"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "78c456ae3f40e3ab7214c77c366571d9"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "c5915b41ce179711fa6b1a5dbde23263"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "94155bb0b4c4bb0192e7114ca323347b"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "082e87d22ad9795372d43a7dd146a4b6"
  },
  {
    "url": "categories/front-end/react/_books/redux/Render.html",
    "revision": "6624ecaf78a99201b220148e22ab90ae"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "3b780222658d9f3e7d5599a01202fd85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "169578d8e3098889dfb2475a359a94d2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "3e200e513a75357d12319502c69e74d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "82e8855aadbd40f92fcbc1b18e3a71bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "fc07def79e7f025f1ae76e9962da7331"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "2b8b2c4531d29b30d1e6a606a6c2dddc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "3c583585ee51a36ab825a7a118aa00e0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "4300ec3fe3dad396c3931939888e789d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "a79e2e0ec9c573b71dbe72cbb15d0309"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "652a574c373dbfa93f9bc1ce088030f4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "8c3b55a7ea7cf05679d6f8bff09f73c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "25d2be6b9241f9775fce486e45f0eda8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "c41568ebb4c612309a13d0065e20b4ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "aeb8d1f148bb4893d8ddcf3ee52acf5b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "60f05335d48e7e46710cf901aecc6a1c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "0bd42d9b243823895074ecaf95e04f7e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "91a1554a7b3f2cbb72d2cf6fa74cbbdd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "9ea6d10ae773fcf6e8015175318eb6f0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "b7147a0fae36359e88f810e71c3b4e74"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "0c80bdb497e33e969d55ef911039300d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "fa7b462c543f7ec35b9e34be998c3f85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "297d4f4873fb9a28b17196a4ee6718b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "39c0c78df3103a555406365b27f92c9b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "b7762437fad1266dcd981e383e46fc9e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "36d3ca3bf2bfb6075690334fc16c0e07"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "4072ae2b4684aeefb98ac13fdb2b7353"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "7ec02d45e502733421524f1052ed7f1d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "2a8bec23c577e4792cc9c57ba5234d23"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "abd0f9c5625867f3b8f7834f305c0798"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "a91874bf0003f4d444f375d546f2aeca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "16405028ca96db8ddc3b48533b0c2748"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "d1dfc77bc802baf893f03237b6b6d941"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "afaa1730fece488dfc5147cd618fc124"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "e17fd63766d381af60d21828e4baa42c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "ec10711c71aecdf548b6324ddc619ca8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "9444b6dd1fb97d3573fb183e16e79f12"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e2151690d93e15cee37d4c1488f45533"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "669645c82eb4a0e27020ad683a9effc9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "f09a6090b08db0a647f5760c467b08e9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "51ba0c6821c1adee113ac4cc249d969e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "420dd043051da4f4d2d3a646c420bc40"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "d6033c431c4030d3798fa1fc46a971c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "9f7c0729d5b3323339d6d87e2e5efdc9"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "0bdf8b62ce501f25fabe85939c2105a4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "8e8bc0b8198c21d69c1912f25312f65c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e26cc8ad5749992b2b2b653458414d76"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "e679786e68d5cefe70bd6bb029cd3c25"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "b445e23b0773e657c054a65a1e29fc38"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "2bd33f39e1fce9716f16ad58cf60406d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "19228c74363047d11c2ae044c2e1b984"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "e4e80b642bbdc372525cbd976442e388"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "d023f8621260df568421841b16442861"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "8688ddd90b03e5383d6a990d8f182970"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "bde860e20575ddb0509094bf77608118"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "f70b7ad42406e1e9d482b53b4f4310ea"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "9e4509bd392b397e95c0ba42f780a7cf"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "d2de196b478b1089e93bb717e4e5428a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "669f014be396b9b4ffedc5f2608237d9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "169857e8091c46f1a986777d4bde5cd7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "c614f42260b05f51b0936e43b1d37e55"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "27458f4fecaaa8d9b30545d04cb764d9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "47a2e4e06cf29726bbee3acbcf09cea2"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "3d61994b4d1ff5594ae103d742e0e6de"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "90e247fe62f9a4480bc3ffdce7ca82ec"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "13ccb07e6723f9c4056ffbc4bb92c883"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "41233092925d6d583a37e4c1f43743d7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "906673f3c9d3e9ba505370218f412259"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "d82806f66e818670a915677dd19d8ec8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "56c31fa0138e6f62b88b08b74cbb5eac"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "08cfa7e5292dbbf38a48f7ec1965978d"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "23b7c7295cbc1644e102b2e33f05dd61"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "6cb65d7303d8dc274e0a6e518218f8c8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "800674c62c18eb8b6377ea64545b13cb"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "68799b39e3616b321f41ed45de83b06c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "508139c639a9d060100146d305b9b316"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "8785bf90a35f964874fc697168b73336"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "efee54ac0492a5a75f6be6968828394a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "cd926ba5191fba6ab69026b11ff96857"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e3cab88a83462b6d74bbb48e866c8e51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "f948b2b3869973bff1577e934a32b3a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "96ea1aa831baa43f113c38331f321348"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1c23a77b3f7816d0f4e8c55a9190481d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "6e90bee6fe62c5e35df2250ea50bdde3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "459e3acbc62074956d7bf638b7395992"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "b2d2f10a3359a920e2e49430fe81fcec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "52175eda26b7c7ae46a08c8ce41f23a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "a73aff84b3d8d5f3103fafc3a53640e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "58f1e546e4e809b4ad6c17e5f6b649d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "079556603406440f83c16685f4541dc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "986fc567c375ec0dd8aab3aa8d4f2182"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "6e6e69d39a75dfcbe4ea169c9f7f9498"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "adbaffb419ddb7b84f2094e8bfb6b9e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "7654f4cff65aadd831c85987cd740c2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c3ca5c8333ccbdff7908a047e6cc1e53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "a64a4f00aab11eed55e27d125f277e84"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "d09f5ac03df46f020f439321389887a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "ad404f8dca80883559fb80a06176d880"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "d7274bb53a15a700554d6e5b9b68fe05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "580eee440d0c477bbbcb79958d9a7d52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1d5be0458b50223a5eb0adef4c8ea319"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "e9274b2b785acaaebdb2084c08a781ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "49d4a7e33c3e05bc99d61bab5a2214a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "a98a9fa8f90f0fde601412f19d7345d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "3ab0a78536338c07a9fe1c7ab138e9a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "0da544e56fb7f7132b24e7ef3221c452"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "86fe139b4ffdf3495e00694e6033afc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "a8de19469c9a947580dce4b3fc7dc3fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "94947d5e8bca8c0404ac6a754f83a239"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "9b5fe4ad0ae81627da5d8702afc8e6a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "9a7ddb20b5767fdba7693e9658814cb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "dfdaa90b79613798d33f2fb0c8108983"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "0e458b62972a95781d9e78a9e1d4a4a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "fede4a132ece1d6ed85ce6086454a461"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "5310674c3c1c41cbd6f7099402e2d4ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "99761595f278c2132c61fb70ddcb777d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "9a17d9ca4f7303b4832610b93653551a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "c8c1bfe2f533f4429786a9d1bc049747"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "2ccaa5e19d3bc8ca0ce9ef229205be96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "89b2fa5c72ba80056bd17e796bcdc20d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "39c21253a590b059063a64558ead062d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "67a3461c062c4c56294a0f2ff2c14125"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "070e3628443f4d71f9546683f350d819"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "17e50f04b75301c293704f31484dc466"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "6a9c331ccf8fc7343d86d2c602d36315"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "e09c97ef1b841b7b36d5408aed19cf84"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "fefe2a0146975ae8de1f5a8d3a423643"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "40b628239eeba3945ca1b76faa7cade3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "231b0b9a7269246b2fe76019d10eb33a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "db87fc7f354f9761813bc6c053427f12"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "0422fa00bea8deffbbe86055bfde4627"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "10b1778b233388e4a72f233b6f960b43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "955b63378c6a1a1670041fa083acab02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "135ac11b2190ece42e4c778f80971b1a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "8b90ef6a383f5da28cf4af89e3c2ae66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "e1c025f3b6c3ca1fe4b722fdfb4df3d1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "71b98f25353334edec2092b4d27ea1a9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "a094108a9a58ec970be619dccc46b3db"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "65723cbc416a1e144644a58962364e32"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "04c8f10f50740848ebfbadb1aa9e5116"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "74335e2b12e7fc2efda225e3cbeaf2c0"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "5e6a72267909b311a16e41d32529bc3c"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "dd5ce0503b51d7c52b3b43417730bb8c"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "f107972b4101c67ae1c4e833831cdcf0"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "7a2f2d8b79872b517518fe8f2984a85b"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "74dd558787e807689e98f3d5c4278590"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "658fcf983fa34d7493bcfe1beab6a80e"
  },
  {
    "url": "categories/index.html",
    "revision": "cff62504d49f5a6445d6eb2186b9e3f7"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "8d69ac1aed6ca52fd3513a5214ac0e3a"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "0c750bfc78832ebf56e37a149e2d9c2f"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "eaca4bc1c9c20cb37e33a5b73dd09e68"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "b4ae2a06eec16a8b38bef302fb48c6c4"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "04df7a8ab7cdc2970274fac8673e5a39"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "f4dc3eac41b6ebf33d56db34746f4719"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "ca77c9f9513bd4acbd32663ac6087a81"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "16e4b4203ea529ea0440ff26a1a29c40"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "0238665b3cb376b0398da7ebd49cfe6f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "2509d27aac74b68384cb4741059704f2"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "a7c6ff1b45c074a0e1e29569ad8d523e"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2b4a75b9171b8b5cdbcda9ac44e99929"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "a3ae4bd39adf2a09ee5250eed7382bc0"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "715b9b82c6aa99ed0c3225b9713cd112"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "606e1ff3456f2d52225dd07814e4d107"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "f33f5e902307d0cb858d823862000ccb"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "35efb0aac46b8c7833f39523cd20820c"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "481ceabacd5ae0d6892a4f4179b9ef76"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "7e4968632c8a7fd8661d2ed67440f748"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "de5f741a9209da934b87383b8a6e9ca5"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "902e981905255ca57dbb4b092b76975e"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "358ce2febd8beace1018ff896230395b"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "3fcbaf22e214d857a07060db0f8d66e2"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "519e103410f5c9ace6e3cde9f8f31d46"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "1c47d2d2c59b810d2ce8d598ae29d6b2"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "5dbaba7366994ec798cb21d70d4ea23d"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "51736374fa9e3a2e4aa6d65367b0fdf0"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "cf224fdad2f9beab68b3d121aa6852b2"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "cd65ca7449cf3cac5a23961ab80ed8d2"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "8ce2a6916bcd7c296d63972a35d5f94b"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "f75ed2d9935dfb85beedaebcca72e81d"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "393a491ca4ff9a55cda5f32fcf08a0a1"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "4f1a5b9070b028fe357af016ba490a42"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "b20201d0013219a31e1373e4f11b181d"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "cd877dbc1328516c365916087f1a1bdf"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "c8153c2ace66a09abb6f53300eca15fd"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "728c82973ba497a1176662cd4f1417f5"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "d980707345f73bda885d159daab6ff41"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "ff6c05cb5c523cded90d2b4d373ccdcf"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "e860c419af1f0f5231d7d0df736c6a5c"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "47f7fb6f3c8e3b69d049d48d49d727d8"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "8ed92daa4e42f80f54dde2a6aa210348"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "6199e176e3f1b9e29267bf53038486ab"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "d0a18369dabfbd7cbb3ad1044423dd53"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "333685a5df2662d0dfbc68198bd6425e"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "8f9982072ad0f2657e7a9c33aea66ed3"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "1fbc1ffaac1940b049c66188372e6c4c"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "4d81e9572aabdaaa639ea22773a82eaf"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "27ad196bfb8f9c5fa47ccacfaf686e1b"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "c5c5696e555e844e907671ec84b44ecd"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "aff1cf79605cbf262cc7e896314e68d8"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "815fa453ddec0c4a7d384dc8a354d7d2"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "0a7b2589b07e147a7507ec446beee104"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "6e3a7e1c837416fe749fc54ecd20993e"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "ea54d8920aedbf243cad88b61137da6c"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "e11789f711bdec6d7caeea629d78cb62"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "bebb7297e4e0905d4763512a087ea441"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "0f34807f48971d4a8871a7d981c3575d"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "58063894f5130fb1ee4906f59101f766"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "5726332d46426f94be7e0a8647044739"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "785414d801a04bc041fa032889a28a7f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "2e5d12298834143c9719b5ae7fa9e05f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "2e9a5d84a93492764d08d037abd95de3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "e6231fce5347d6cafdc62c0bf87e2aac"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "8bcd1ff6c45146533514280a181d0721"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "41d4b5e4a8179cffeac3443e979d7138"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "9936fba769c5fc4128e617f79c80d79d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "ff7589e20138cf2ed8d33d867e2efbf1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "ef1cd5847b17c60f4780d60252e5f14d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "de42e5e7da64cc3449d0053cad0f925e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "511693a488caaf6ac73976410fbe1e2c"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "540b631a46b30c181d314396eba72b50"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "06e5aef0536d868d3711247f2630f7fc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "c305bf6a6082c3ccff7284aede929ba3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "8e8fb67f491660847a1f00b71aee890f"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "88f61bd14d6db34ca26a663642cc3293"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "1eb425b54c96987aee2ba643d26c959a"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "d61f6b7a8df4a7f6cdc1097a2edaf0ae"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "f7561ac7d254a60e9a004e6e39073060"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "85d31bcda17b749e30b32c77661c7695"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "8eb4d55ccc8b7d4c2aaf2842cf3c219b"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "1d7a59b5f22d4a6c6bd29199352300f1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "1a604d40bc8f9948bcbc33fc7d92adf2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "c72cf1f2a3554324f57eb1508ecd8eaa"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "763a2f6b3499f4be4c79f1f70c0dd1b7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "bc81abfb968d00db19c22e4c17c42cdd"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "59eb3a5fcc654df6651aacbcd26ff7d8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "38e1c28e61dcc9aed6b31867f0ac24b5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "86078b7e9960a78605d45f2b724f4d64"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "7e3435d644c5e352f3c21ee34025509a"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "2b12bc6f326745915b353c34673cc6ce"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "c51cd0514ee6a8b5e96444a848a5a309"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "a5704bf0af106779222e485169673234"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "e794908e74912e1afccded78f98f2121"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d60c58aebdb60acf0230cf31c6685aba"
  },
  {
    "url": "categories/java/index.html",
    "revision": "a98ec841ea47e380bdc5eff4ce15538e"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "5baa0ed1759ee81045caac42ad8792b2"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "788adf4a06dbdbaa73319a055dda99c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "6ae65991e8eb9144c84577b4957565e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "c1d2f03f0fb0bb0e989335068ffed208"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "80f018f7e7f8d4640e2a17ddc5055738"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "e41582a83fa15c532a3f3863412fe49f"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "510eda0ec9fe81679891c57459f21148"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "d2724b71bdbf5c43c5ae0c7e31423031"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "3b652a87863bd1f9f068bb06cb0289d2"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "a05e628de94f1f92fcee66bb45c500c7"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "d77b142dfee3debaeb2b5f47e51638b5"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "7a4d7f3217a62eea3d338827d84f6f4e"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "25bde57e74e95e3379e60f68222ab5f2"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "62c7a92615bc61c8cee29cd8fe952b30"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "dc61eb566dbb4da87a6cd521dca4b480"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "b71532465ff97d2f5365ccbcbaf353da"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "5b5f740f235116e461fb3b079a90b43c"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "32938838e8a07f9c489267b26fdbd5a8"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "37470fa697c8d3e0e12d70de30a44aa5"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "6ef10c9b37067e496127df716397a868"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "fe5a4611dd214123e0a351a75e616d29"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "b3b6c6e744ee415553e4cd6bd7071981"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f2e61f31683aaa9df6596c05c6ad5597"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "17110e5dbd3397d1d29976449513d683"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "4954bb4847147d54387cc8364e5daad1"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "c963f8ebfee748566c104be4869ad1d0"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "91002fd4bc675c650199341075954b6a"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "83f960edecdc9d7c5c409f8a65778bba"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "95c1e052fcf9b582d0174c8997fc76a0"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "9609d2a463dc32184685bf8e0541bbd1"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "21e72577e59885241c5100221f6a52b3"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "a15f9c8f61ff2b09ffe6614a73a0e49a"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "2d09d2489435679c59e98413b254b909"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "ed163bda18f368b8c6db943a5baff5bd"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "51f56964cac9c2e9b4e9ff9cebb4a494"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "4db28eae9ef256618557bb82d9853f1f"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "1ee810b60cc1b3b27331592548cfb2ee"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "3d939a9fc3eba440a583b76fada6c71c"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "536fd33256d3376cb2a952eea8d6f8cc"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "f8de7fb01f7f0da0739b7fdfddcc4078"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "d19841c116182d79ee71f650649973d6"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "a4e73183533fe6e1e04ce15b8098a158"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "9a33e6abcd99a9099c8153b9a6ec535f"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "883dbbbab57b0d6e8e9b5254a877c693"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "7fdc9d5e7b07044e96b8b048dbe4a72c"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "a774607bd853e708392c40acd7052415"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "22597fd880ab219eaab74fb22b4557fd"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "70f27371afe8af2aa56570773d8a0f9e"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "0f0003d05bc5d340ecbdca3b3097751c"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "4837f15243a00254f91b8cfc68bf5616"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "2bbff1f500e6670a2f7ed82cda34922e"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "b0b80ab09bd76d41d89163cdfb91ae33"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "162b0f32cf75d9eb08d8d372f7b8a836"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "9f6a2659ab7f95c09c50982ee1bd9830"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "1614cb6a2673baa25fe568b66907b47b"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "f0c7810aac41929af55ff0ee279034c7"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "3c06f05034d0a3a3f2551728d743af05"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f72993a277bcecac373a265b75001745"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "a687e1409bb494d05915c893b8ea4167"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "a8faecee3d245b47d36604feaf715ab5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "06c22dda62bfd7554527c73a636745d1"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "8b47884ec85cf17f5d33523824895c0e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "61a97a68694abab45a18a31c6f70e5b6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "f6e0bfac99ca8a699ee9e7a3d7b18252"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "af861bf319ef519b4fd83a200feb48d3"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c4568094d7ea6658fa2f34291e05d696"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "35bf4ceb9c2585374b493e7e57c69176"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "50d3ae84f7a0f35cc8f28490266b511e"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "f9f0c5b51c2128e5b32f7fa7af98e78d"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "bf7ef2b2a6d1627f83cf8b81fe63eb5d"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "f1edd32a96d09a3d4a4ad621e2944298"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "f3fed7e469e137a089a11e112d98b9bc"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "6bc0a0126def43b464ec9cb2b445b2e5"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "323be1a5a78edb9ae1e6278f86d7b1b7"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "a3c64ca464ae24e8bdce06844bc3121a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "68d98fa299b13034ae9cd25f1569431b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "4a6a321d62a45af7328e2f287b27732b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "6113a5e28795bcdb3f1d855a01de0cd9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "a1f2d7c42309c8b478dac1894d59e990"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "92a6e8d14efdfc28707b8340d53d7cb9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "980dad35dedb49aef86b8fe4bc65e73d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "ea0141f9307545ef6a1b1f7a97d7af2f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "3b6323b8e05bbc5d5f90d587589d15e8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "5c2d39b65a3e15601b75aeb6244bb20a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "41a1d7b207cdb1c3c19bfa70fb1fff63"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "46bc7069e702e1568e52dd8092abd120"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "d23c5c7c7e6a42098f2fd80c1f6fe0db"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "496bd5ec84f8191d9818b776e4a6445b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "30b3609690762e68db063fce5bc34f9f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "06e9c35f50e2b1516fd085b28af31089"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "11127b13aa98530b1cd1e6511c0fb4d2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "6099214a7237b9fe6afad7041db2d960"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "fc8ae1ec3c73f492d134852b188f0464"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "cc5ab613a22eee71469249bfc4e01474"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "5902261b5954d9af0490790930da38d5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "2fec54fbeed5c861a8f20184b18045d1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "56f5b71b80d4601b2ea46de113032685"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "3f15df7c5fe7e5d3f5af2615b860721c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "9a96420a0958beb91fac901d2c69e887"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "0ee1155bff58e4fa2ec200194ee53f9b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "4b054d04e99fbcba001c3b2ddd2c6613"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "79f214bfb1778d6ee5e883302588390b"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "cc2e782fbd62286175b3d007f97164bd"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "28a0163f673be131d1b1531d6f66a8fb"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "96a5ea0512bac3959c5bc2ff70b5163a"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "a93962671ad24dcf02cb8aaef8a19254"
  },
  {
    "url": "categories/os/index.html",
    "revision": "f3f3cdf1fde4de90b4c61b2d45d3cc41"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "125d9cf0a92609515bbd8cb0c6c43149"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "801982411d4c1f437d618f0416707323"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "553ea69e47b8b968b0e01a0e01e08e2a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "a6e92210a94d265fe46dba54cb529ea0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "c911ff88c5d9befa52ab3af766864bcd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "065119f762e9d65fc34bba623e339099"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "ae52e13eafb3e03041b885a2e0297b90"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "7fdac26b6868b727f61336486e0834ad"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "b1869698ceb6d413a40b52b03e86d259"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "12a8edfedf3b1e74c6fe66bc1cdbbe23"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "7f872e52d02bc80a81228b87442b418f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "30630ebbe7d8de2181ce4c119d8ce535"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "61e481e5e2100370708347239ece3c37"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "68d52d4e4d4d3c00c5f185d3f7181ea1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "14df8433befce284a25ae68af5470d74"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "2fb6cc7d48ebb4974c2f9ce5aab154fe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "1929f060773b6528e59d056e76f402a6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "befa7589c2cf5b62531da119eb23d797"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "e6818070a018e0f0c81bb36c2057cd5f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "f36708903f8432bb686bdc32d4baa224"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "5226f7a821262cfecda57645ac6970a9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "fdbbbdf7e8762dec7291b15fccf7da6b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "a644d8034dce54878cdca36346218070"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "dc529d53e6b944afb3ddc5d071209045"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "a8876cdd412b40ff6857a43009253726"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "8ba095f755fcc8496f7b3c08aa53f3e5"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "9ffa9421b8edac13a0e1bf348e69daa3"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "7e2e7ddcaca9dc9e59d4fbc12e4ab79c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "f1a121b4a602f3ce05a262e844bc36b4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "4d9327a8cf0ca92bbde76fffca92f72b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "770aa16e49d28b18ac5a0b0325244552"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "3ba29eabe7cb81e975f52be1a36f8f08"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "4cf9eb310b91b080084103a8f6b10e5e"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "126c09b508671fcd837dcfa5caa697ea"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "3c325c4b68f5d8223a4ddf35bda0a957"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "c9b42ad91d475899497ee77057e35c2d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "d730bb3cf15257e17ada19ccac0e271a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "f59032b8cd7a7ad6674a263b0d94e5b1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "878cb15f632641c3b9f6690f856317fe"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "c083b7aad47839be26397d01e81bbb67"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "32278a8acf40380e1964ba7fab33a138"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "89bdf1eb6468cc9fc7617afe4c4d0b12"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "c4ca8d6479a36be3bdf6034cf857f0df"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "c9679df308d499cc41db96c155a5c2c5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "c4b02eb70e1dfd93d0ea64a97e7ef02d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "74424cf8c5987f39107372383cf20f1f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "e3b5266c5f43aebdaac81910dae93eda"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "65fc9f1403c5c3e476cbc02ce1ebf051"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "736b68282d574ad54f181d4df8de1eb4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "5ba49aab8c5a10887351279b5359f483"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "5d0d997e1f38774baffd1ba5247751fb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "7648450267060754e4d7b0a0d612b0b2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "61281e572aa5a8cc3688789644711a1d"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "71b4171a39237b076ba003a8875648f2"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "09d9cff7c3d5e696a49960197d29dd89"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "65806465fe912f4d903b98219ea7c6b0"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "4edf2d8889dd5ec609c973c8badaf6bd"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "095358bd33b0605e906cd8da488c78ae"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "56780ab11144b45a31b8ca330676caa7"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "eaad5bffe3d4df666398b86e8a0e0835"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "50926894c3426d4fc88fc6237500e6c7"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "8237c98051daf3d07fc892e55c3e9836"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "41515aabafa15bbac72f925a209262d9"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "abde65f7bc1a2c588cbc6d82a93034af"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "66f7081466ea8f961f4d31b25abeb1e4"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "1a57d9488fbbec485dfda8095b5d7511"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "bd42505b432a4460bba51251de3595cd"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "7fdcbe6230f450ed3d413e6c2be9c199"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "f7c91ed675f1016ee4399461d93a8e37"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "eea5937141ef86a65ca0163d952e33ee"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "58d14d42487148b6baed7dee290a813a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "059041e0c20e924a413897de70fcea27"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "bf3e32ccf201c61c46fe32b79a3c2a54"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "28be9e7f32993fc1076d625ee28df606"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "b626fed0a207005b478067fdd8275e86"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "6e8d8c0b8b12ff25cd7175ea30c107dd"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "577e88b1eb018b8577706a0061eef711"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "7e313296a77ca48c8e5d4c7841dc7df7"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "f358bc20f4d23a00e664c2de7ea1a468"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "103c05b23c3bc422c030b9a967d3fab6"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "a26b3400545eb51e32db75b378f11d0e"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "b7bf6cf52b01f46f7a31dcc60e40ecc2"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c6eb6ec8a5248ee92f262e96f1b50af8"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "8c00e6f5e0414eb48f2683f7b33d9593"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "eab3015b3e829ce4a09acab6232fbacb"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "db455178ce91a028e5bb4da550d68305"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "7ad49570642d122e00f81336ecc8fadc"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "6d124d680216c29bd6e7caa7e92d2169"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "4115d54e00920d01439df91fc81d9187"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "3974b3fd9f46973dbb41264d9935fadd"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "0f2118311959249f9b3f25b9829afa89"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "80351e286e7646d373ff8c94c9a54087"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "da4f064cf38a43649c07a969858b336f"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "5fd74e860589ce66376750be1a04a21f"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "ff4bc01ca98e111cd03618b745a06255"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "6e7ea8556a509d9453e4f5652713dcac"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "69889c4695cb2fdd226942f257c85995"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "f71b0bf36daeaf328c0f82c9f471a03a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "2f4948887f70f7a47f642dbbc19c65f8"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "a3ad61892232ee23d3ad5b93cd74c325"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "78939beaaedb6d569d584c4602d561ec"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "61e15f89f45039081a156306f670200d"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "806b98288cfe34b431742d099e3da6c9"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "5bec09d96e2cca16e6e04123c6dddfb8"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "4dd52077715600f3c3b9feb057bfaa19"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "b64e00df0590c8346fdbc89a2501c26a"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "fac7c9dd1b0a953e46dc880a5c44fff9"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "d8b5c0afd259db97a3111d2d34c44387"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "93e1ee211361d86b66151b6a1c455b71"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "c9da8cf7bec15f398aa9421d6fcd441d"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "42b816b27e08f11300fd7f9a0b8f962b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "6f1dd27c7b77d13f4ec8856793540c90"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "d76c8ca5411e0a76d4d65a00f4ef9be8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "eca2b668d66dd9c82c1d9f5f2c4161e7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "bcbbeaa776cca7a7fc46db96aba158c4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "eb0b0f0afc334cae97c8eb57771501e7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "dccee3eae22b65490c42d8d36b7112fe"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "a15f243ff887465166882c35fe4f826a"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "7d24fb609a0f4ae0800366d323924b46"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "2270c4c787eab3bbbbda5c841b510a27"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "028070e84648f25bdfefdb1ed245ae17"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4827b6caedf1955dcf5b460c574e7221"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "29fa7c58273023cff00f432fe3e51042"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "67f5c6472e3befe8c40f29575284925b"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "6456d519fd02c9fd0ae083138c3679eb"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "bc7e65d33136438e55b3833905b666df"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "f3bc3ef1c22aa411de908839a85dce39"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "351523c6be7d582be22325cd7bbdc53f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "5197eca2d39374759844515f20512dee"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "8ae696de418ec326ff5254645029274f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "539b506d8a3f0a68e17ef26d876e0f34"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "8a027e32461c79dde23a9e87b06644d2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "1ab52c421450945bc1c66a11696830e5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "cc1dfc5adc3b2f5e38b8e9e078f1d3ee"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "8f393d81e8a8db8c1c4fd891b890b7dc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "5171070e3b556659d4f35e4b1b7e2dba"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "ac424e676147cf2bbddf54abb048aa1f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "41eff28e5eb4273301f10bb560737b1c"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "09a51425f947a298a389bea7f7bc1f43"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "e60eb2b84b9a06e59e330888240a8909"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "e7a1494e1f4dc955b693adb6a1bc4cc0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "83692af39cca10c6336ba74833ca7e2b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "d3d4667914949d27d6f5b25ce8ed0e05"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "7593541d2552eeeec7abceed2b8e3df1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "781ff76fbc60b485916501c70bbd3d94"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "b10c9f194c1cd0054124d2935ba2f29f"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "42c911ad5034d386634d2b9c4e8f3391"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "73afaf690a4441a52538d32bb4f8b38f"
  },
  {
    "url": "categories/php/index.html",
    "revision": "5ef21c85a961411206c648d5671cd514"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "d5f6f8d94fdce4acfe8904d2a7a0f286"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "212b6a9d51f07fb8ba657dad2a9fd187"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "3bb34b66a301210e16151985e56a4567"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "3733aaeea355c4369553bddcd80681da"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "f8edf6134857811c0d164542860d879e"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "341f9e19995bc62dd0ef277bf74d808b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "ea8bb01df6fe58737ab9cb9238883ad7"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "929a07b06374ca7d8f106fea1df23cad"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9a0b8be4eae70c3859afc631ed3bf2f0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "dfc86eb8db6975c96cbddd347e5bf4c1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "e28eaac253b5d0d9c1f5e4eb496d1457"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "f1d0e80743f6e3b60112b49a46bfceea"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "c4b2f209cf47f51e24ed9692d7e82146"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "4af044e92cd50212857a81b1a8b9b776"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "cc4dc90dbd63298b78f29e31b47941d6"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "a4487071baec3b25f8ed17d17be9eb71"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "7f27f1dd756f8525fe49a79a6c34f839"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "60b215b6f8c02f2cff0382a6a78a8098"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "c439a9ceff6fa740722156939ee62b0c"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "bc9f7bf73934acd939b88a761777d253"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "4f798c0008fda3df7ba903c0d6192c31"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "de713c22a68d6867ab4fb520ad1ca861"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "a64f355a8a680297fdb0352d824040c8"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "2053e22f822912c12742bf7dcb5967b6"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "636d678cffb78c3f42a1e3ac4ea96811"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "ee7474ebeac8ad5f2ff2b32659016572"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "a4869daaaa1a5f18bb9f774136d08acc"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "f4cfc58c7d69eb3f5b8e10bb78327dc4"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "9e35c06eacaf46ac6a968bbd1928b624"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "bada6650c82efd3825e1cf8b856c4f41"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f1cf85fbcacac21fb4fc63847d8a4844"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "0525fe5366b9589b8cd87fe539125115"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "fe2b69ef6d0bc3a879be3a469f7ac961"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "c6f49b4f9a5dc2b1771a446142f0ba90"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "9334b5b5066625f649515b4973ab24d0"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "d8120f4f028970058bf04f077fe633a7"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "410a484864d8dfbfe0dbe7c67c4470c6"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "ee1686035cb9c2f247df5d889643e53f"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "3b2a27be3612b621f2ce0652c4fb6693"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "6d1f697dba82b8a9a0cbf02cba31bb28"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "737efa215f62629e84aeea423b111148"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "0e12a85d71aff31b5f2b440fb5236293"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "1b3de0aafc58a920e9de5fed71aeffe7"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "5f1f973e889f38e96c2dc335b67d42dd"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "0998289a2644539607f94341ae8e804a"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "484a895439299cd806b65d2c6697bd34"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "62d3763b4f84bc2a1fe19a617cb8cedc"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "2edf7ec661e41cfd7de7fc0029af9fca"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "5ea461d1864d8ede933060541a5b3c21"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "5f8bc45938d588067842242000fda3cb"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "79fa381ed98a8fc525750ff8acb9514d"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "368ed2ef7847251a61127d73c184e527"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "2b12557ad6ee36e3bb06592283b9e502"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "8d84027ab84caf598e77659782ad8a0c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "72167ae03d7f12c4e087f752cabf3e8f"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "a824a143976d29cc0e722e6548c78f69"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "b2e290cbb1f1d5c077cfb03b4da9d6a8"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "8552997192839f5dda6a8ce99eae76e6"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "414d4a3249a62aa37f6049be8ed2dbfd"
  },
  {
    "url": "categories/python/index.html",
    "revision": "2b7336bd23abce8941f7d9ae1568de61"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "f2a3cd5ceb7eb9e6b8b3e5ee3c864aa0"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "f9834a6f9a7af09ef577020c09ab48d2"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "5a9b5fce7bff6c576faf6c31e2064906"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8cefab7be79ad03274919a2424f060df"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1ec2a38f13c3142d24907db118b16d02"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "638a2666819b247cc2f4d2be784d6445"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f5e46ef902f51e588d4de8a054b92b1b"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "74b68301d6e11de1ee23add94093748d"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "706bb77eb00f826c0ccdf1f131cee465"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "c015b85834aa8d78aadb9e18ef767ad7"
  },
  {
    "url": "categories/system/index.html",
    "revision": "0aa5220519e01a6cc96add47ed226ff4"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "06266ba68f72ace941d51d851527c9cb"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "154dae156a70aa86a564f9ef6136495a"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "dcb432bf9e11fab5f2636620e9b94519"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "f0acf2d646691a1db01453c1e4d941aa"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "9d071925e364b258d13a00466e064701"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "b5debe42f5c482cde1ce285225479f47"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "2dd93eb001982047604f09a24e98370c"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "83b7b650520a66c568b6003a2c447d0a"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "4a8c8467510d49955b0ab3c0335a2051"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "d9f04912d500dfe6088ed3f99051dbcd"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "b1d9256165a82fc121d79cc11bc2772d"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "07b2e6e33715efbcf112d8249ecafd16"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "765c51a38bffbbe69b949db003101e03"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "e664d2fb4312b5bd30c06a50d4c2a983"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "8322a2e265826ca7bc1f46e18b94aa14"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "f083d8cbfee0f793330aaad38f316d03"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "78c847f111c74a2edfb6f00e259b6b09"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "9c3db43c8e382f6e64343d883c945bc5"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "562957d1c3c70dfb7ed98fb093c3733a"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "25d49fa0dcec7e7e6dfd78aaa16c3c74"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "ac4aeae466280956cd91a8bcfc9d6846"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "2169ed49243313a8b3ce2a000e54085e"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "154294b1b7629a8ef832b3194e5b961c"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "d905e63c5cdca02edd0e2bdc04daab24"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "b73ecbd8b8ca040b25d97ebabbac6893"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "0936ed93ef0e430fcebb63c14039c537"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "8cb3aa56b21d1e5470c225eaf42248ad"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "72abd5a0fef51737aec3eaba70b9ae84"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "8b096c12e9cc0cc886b74b6c8e4a03c9"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "a91541fec69885b9919d4fb75ccd1328"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "eb3d10aedcde9a0aa9c7287951689ec1"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "b232591d462e1300a520ad0ee8483ee5"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "91b9796c25bfaaf38470a29ea438e4fd"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "823e521d43b3a75d24b5395ec15711eb"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "07a1fc491f24a77c5a7ca2bbb89c099e"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "e02e3713e018205ac9776f52f114eab3"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "20c4fd49a71b481cdb49aaa0b0c704f4"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9f184603ffc917a308cf066831635ffd"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "2cd72449bf5912a33d88004f8c503a30"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "749ba965d1dc9c55da8a6bc2546e571c"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "bb9b64d8df828780f43957b9e39159cc"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "2dc3bd50a747cfd0b0c801507b4bd3c1"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "33460beab32ae54ff5fe0c98caa3cf19"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "68e7feb59a94f1cdfa878a43700021f7"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "4c38f4d75e4bf1c2d79d4d0ed14c0057"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "929f16e9df02729a786858c74e0efad4"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "4ce24bd9c8ff9a02c9442df8e72ef311"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "84cf702631f26928bd4b2e9315d060e6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Config.html",
    "revision": "65340eada19bdf3e75cd1276e1e268a3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Database.html",
    "revision": "0e015c54f8c950a6819fc7acd44272d7"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "16a3656fc512948b6f9bccb03ec688cc"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Keymap.html",
    "revision": "6076974170a6553933f040df2ed5ec1b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "4bd0b3372b31f761fa76938336046e11"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Usage.html",
    "revision": "34587c87ce5fc7fa4d1fe5e8c422608f"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "f2af0654a2a57514dca63544454dc623"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "591c55fa88ea233bf5112df4beb5e95b"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "c2da34fef280b715632aa16efbba3219"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "ddb7f6aef0387811464051756d3c23b3"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "f2bc4653a6c36a715766a07e55d34124"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "4b3124c709b6e1ceb15da8b5b38888e1"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "849051ee4584a954964c6898195fc8c7"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "074eb797fccba42f955360d3d230e48e"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "d5fee0e4e3dd9497a658320e9e71f7fa"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "8e27c268edebe690657183af1489a9f8"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "cfc2b59b631ca738e4f31c229b8fe735"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "c38a85744b960d28201e6f2a6a3740aa"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "222aabc1207a336b6305662b59ed4f44"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "b3899fc2998ee9a1b8b8e862937adcb8"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "661bd3ff36521030896782640b6d8e86"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "61caf64cc242335f28b74e2c1847db4e"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "ef1603e79001291194af7803bc25a862"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "0e886e20f846c235b1bd7b089e556def"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "76121e3ce0e00f7780ee9126c0219b41"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "af46ca2a94c2229e4ab39803acdc38b1"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "7bfc95beb290979bf40334a45ebc796a"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "8f58dbaf7a5961635115228fb6521784"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "025ceb230f19d861787f45b4fc249d73"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "9bb3ff59ffccbc48e74742bc28ca0634"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "cb4e8da44889effb421eabc8c3d5900d"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "ff012c900d1ac411f0ea3a1b0b6d5bb9"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "cd22d1b4c4ddc390f14b25f273822b14"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "bde61b5d6093fad0ea0ff6da0282ced5"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "c79678b952c559466c705a7b8c409e3c"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3f0f8ca3ac15e32b7f3989be67659cc7"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "e47cd8eeb129cbb342d18e5646ea13aa"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "0ce4f6055a6de440cd91a61a55f7d8f8"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "aa54c326f47f805c3a13237acf6a8258"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6fae4f269074e5127edd558808eb83ed"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c40fd3c0f1107364e27cd8c914d38b8f"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "b24e156e0ee2aab7daa7ee3e874f364f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "7fc8a74910cd3f1fa91b8ccf7d8c53bc"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "993d6d3190e0dbaca323cc2cd05bfe88"
  },
  {
    "url": "favorite/index.html",
    "revision": "8b8f04fce3d8d4ee3c14895b493120a3"
  },
  {
    "url": "index.html",
    "revision": "5811824a279980aa15d3a4eb9f1f418a"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "1f41a0123dc5635ae516a5f90bb156dc"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4ede880fe15f33956449518b36e5ae7b"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "cc0d345656937189de045ffafcd37ea7"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "080689596b47a4ee470763935644964b"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "dfb549596ad1d3ba31f25832fe0cf353"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "df2d225960eccc7f49cfff17ec13e3de"
  },
  {
    "url": "note/index.html",
    "revision": "3d6775c0896f5ec43deffa959062f973"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "e04386f3215e58171270787db4bb3beb"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c48de650c272b3205f05eff5f8726f23"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "05ed04e9348109040e40c51af57e8b63"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "7e470753e07196956ed09f9d95572929"
  },
  {
    "url": "share/index.html",
    "revision": "d55450de71115623faf6dd18a0bdfaab"
  },
  {
    "url": "single/about_me.html",
    "revision": "96860dda7d23c397cfa7b75e248b3dbc"
  },
  {
    "url": "single/all_article.html",
    "revision": "cbd12eabf7f80c5b7dedee07093dd754"
  },
  {
    "url": "single/welcome.html",
    "revision": "100f10a50f352819173b1bc8c034bd9a"
  },
  {
    "url": "test/index.html",
    "revision": "2ec8b3d54724b945221e2d48a080092b"
  },
  {
    "url": "test/test.html",
    "revision": "1636e7ad8974d81688a3334a3abb60e7"
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
