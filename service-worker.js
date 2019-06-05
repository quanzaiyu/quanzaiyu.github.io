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
    "revision": "dcfa569ecbc334d5de9748382acdd626"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f749283202018ee3d7fcda278dd19e5c"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "59e5088486bff7522a1c193e73381a3f"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "cf4f70002b448f988916291d3ac8cf98"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "296fe7175072b3115d9c8ac5cb58d416"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "79c736301ef535ae228f6770183cd3d6"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "6d0d14781c46e93e2cf2bb00fbb73f5c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "de49329bbc27af82151f75ff859346be"
  },
  {
    "url": "articles/index.html",
    "revision": "08158d871e0b7f88e35d1a9476359e70"
  },
  {
    "url": "assets/css/0.styles.7327e2f4.css",
    "revision": "e5026005fd9f2b0a4d5d0ddc59c44131"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e02ab4f6.js",
    "revision": "5ace0dce1d38fd2bcd186b0c8e3a6eea"
  },
  {
    "url": "assets/js/10.25c25552.js",
    "revision": "e3156fed9f5d77b78cc1a286fed4a059"
  },
  {
    "url": "assets/js/11.b86e807b.js",
    "revision": "f32542e5b3631da187fc1c3f26bf4961"
  },
  {
    "url": "assets/js/12.b64a559e.js",
    "revision": "14559de3b760c340aedb8bab20da3974"
  },
  {
    "url": "assets/js/13.0d4df230.js",
    "revision": "167fd3511379a69f2e3c2333468b2816"
  },
  {
    "url": "assets/js/14.f2ea8d61.js",
    "revision": "d18d4ff4a1952f1b2e51cfbea3b7ed9b"
  },
  {
    "url": "assets/js/15.bd8ee295.js",
    "revision": "eb99e393d8b12b1421683720d96c45d1"
  },
  {
    "url": "assets/js/2.7493b84a.js",
    "revision": "ac1111ec50b608dcf2632d99683e347c"
  },
  {
    "url": "assets/js/5.30627c12.js",
    "revision": "ea8f2cd4baa56cdc1960c9ce70cd736d"
  },
  {
    "url": "assets/js/6.4044843e.js",
    "revision": "c0d390e5fb7a083d82996ed196143ff9"
  },
  {
    "url": "assets/js/7.d96afe03.js",
    "revision": "c2d9b7ce21ef2a8b565ceb5bfe6fff7e"
  },
  {
    "url": "assets/js/8.35d4d3eb.js",
    "revision": "710d12fc5f557ae5d9a99ad511b2434f"
  },
  {
    "url": "assets/js/9.d4c08c0a.js",
    "revision": "7c6b81ddbc271b872c1b8ac757cb0987"
  },
  {
    "url": "assets/js/vendors~docsearch.cf43117f.js",
    "revision": "338876033e8b107a767acad13b7c0f57"
  },
  {
    "url": "blog/index.html",
    "revision": "493c2274f20b20cf68a30e0f9a0c4dcb"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "e6d202d22e94904fb2061468270d3a9d"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "9ef1fd5a0673cde1371dae2d74c459c2"
  },
  {
    "url": "books/index.html",
    "revision": "c4062032b34c3c1d54aa11d33dbfc99a"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "f6414425fa7af4a79c5b84968577e8dd"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "636c4743ba99c9e6863e9cf38ff71245"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "9c8708802092347b874b9bff468e7625"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "6048f8ae950a898e43026a15f5f6d126"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "9d235bdcc18cb655833e8b9517d41bda"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "ff8e3ea56bcd99077813c8c2acad7a97"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "179f6e3f1690335009eb60b5b6b7958b"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "f9a04f5f6d4a1b42ccdd3e0dc6e8cd4e"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "7854398439a77cca1fe9f0f9b8fdd096"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "a8f254c21fd88eac9b59e6f6efb85ece"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "851dc95e2b77a7f6a62cf18c79e919da"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "71df41e58daed545bac8e3b43ae45bb9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "0ed558a350f0a1595789be32cae88883"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "e393dbcbfa97d7c929f2a482a727fd6a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "fd8a4bc28f971cc20c9c19cffc884757"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d61914bc69607a5a482b573089031479"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "33a95642d03a44e25f7cae2ef742a836"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "03086bfc76aebce87863b0e69bf2dd5a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "23c312fb8050718977a90f20d288b155"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2975aeb78f730ec14d7fb42f40e12b15"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "1df051307867df60b2f96be72a0e0c8b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "62e6c5a67086a5c7db2d6c513193e49a"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "c118ac942bb1e5085e72675722bcc935"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "94ab8be10ca45d84eeabbf4227814793"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "93ab4318df302d2781d1d6007a82f495"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "36b96d40d9d0e2678b551b20754c6bfd"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "f1aac136030e2cb5cb254b87a05a6596"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "37aecd29a9b87a94c2010b998971e9c7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "5fbcc5b93241f98b23d124d9fa81e650"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "e1805fffa4f935ec04001075a774fb54"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "3f7d677a785b1dd62f32958a8e3bc138"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "37eb7033d7a01e28936bccb30db1edcc"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "369bf40eef0cd7320ab5092fe94eafa5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "a32ee7f539b1e121fda84304b29a0c95"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "5228522c92f80227fe48f36ab88d9038"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "ee6603a0ac4bab25b5a6d53a7a3167f4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "8136407faed8669607b3c51809c4ada9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "9575f360cc1be154212737789b264404"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "5efd6cee27b1ebb028820ffdab8c9a04"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "aff4201dafed99fc246edbaa741786d7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "2872604c1014edbf8002779e2e2c41f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "122a69bb5fcf964d07cbcc9acdd6ae17"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "7982b2482e9c30c73b1af1d575ae28b5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "42d33b35ca56ac06eecf62f564b1900b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "c4f1f1c034b94c1685285d4b1559795a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "e1e6af63c71e5615a9445267f62828f0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "9cec88463c2e6c568d0d3874ff937e3e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "ad0e452772a75856427385d44851341f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "f6020028c4c157fcb7093bc3f0c5cbd7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "88b4833178e3c21255aae77c822db5f3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "ae177348559b9b57f4f4b8b63d38fbcf"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "d2f5b1dc999fab5ba58cf1177dfcd6b3"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "441235ee278d5d39ed17174636bae673"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "f2ef1402d3f6302c941167efdabbf4c7"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "2b741fc832fb7dd3ec759863bc46d8dd"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "97fb02d212b576da0a05ff1b31d787bd"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "c78a7b19ba951dfb7b3d17986584a16f"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e7a71f8ef0ce740b782c374f2ed89377"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "afe6cdefbe111b131ce1efd49738a050"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "ea12513fa6d2165491d7e685638a23b6"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "ed3ccf8331dae64043e8ba671095db6b"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "05e3bc4ea6e70b0e3a9acdb1e5ee1105"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "798e5dfaeeaf3820a8c27bbdbedc2691"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "9dbe027b311e69993a160d96298d79ec"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "e40fcc005898016a92aa135e5395a26e"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "5348dc8e7f7a55d8a9480c6f5adcd976"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "91b689ca2023e6f59b7ca12ef9c55d73"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "1bd047ad9907938b81e29d0a935ca1ca"
  },
  {
    "url": "categories/database/index.html",
    "revision": "fc9f42a8d3527795011e00a85bdab83e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "00dbeaa5eb9a6131628606c52280a95e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "ef1d02ee97e01503f4b20bccd2caf1ad"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "11715587015f9f5348556c933428b8d7"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "73ec628f08b717ee5e715ec7eb574e60"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "5ad39dd0967151aa85f6f0fa8191a241"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "74531b236872ef182d546246096cdeb2"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "8971c7793121a8928e3152ae7523bcdb"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "f4680165f6aadaaf4499cb36216c8fce"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "af5e8124316f1d0c7ab982fbaa89bc5a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "52c8f4180be8fac9c011b5b42ecb5df0"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "f228ffcfb486e66c26add19a9666d9d2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "4ac550908349408185837ace22ec8118"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "acc996ec8db72d6458293d75e708c850"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "e9461f678c69d2b01b83c5b312ed33bc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "07c0770e62fa716c7598787e63b2f7c4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "5c3781fa441ed8b6e5c1cd624c1163bf"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "bb91ad2805c4d640cafd6b739fff2b34"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "d1146e405f4bcf28da9c061134659107"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "b8bebe288b8797493e51ae93cb65a1fc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "d8756b6a5ed1cea5fabbb4513f22783d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "8e924d72a9dfc79748685c023607fd78"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "f7cc011431bf64e48e206d92331dcd65"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "8bc47336acbfb89a6007eb52d846def7"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "2eabd1a683fcc67bb271358b131d4851"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "1a2b6ca0ee4672c575dcdf12ac30a907"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "677072139c1d8c6e084bbea34678fc59"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9f4820073b8ed17087a5637361907993"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "516fb95bd21913762a276f4ad8072a62"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "5af4e7aff7f613caa6273b9bd4101b56"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "62996cc4436416d9c7d8dcbc52efc808"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "d5a70fd631ad18949c58cbf89376c2a7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "413bb5da5b39f561fc9b66c05bd54c18"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "adfb0536a3c47f8b9ce63790fe1f3558"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "76bd3cb335c46cc14d2efc71377a4c3e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "4941c58ef839da1560700bdc1f0f9127"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "a6338f7747661bbecd2132c33b1a38f5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "3b45ab4d0f189538c6eb35466f236cda"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "ab57314a4fa26589fcf15f084f927474"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "5d5e043d740a6559b9a91c5d07bee550"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "4e130e1a04f4d18e35c137e0570dc18f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "6fec521460d8a9cd69102804fe44da4d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "b1950e639a5d43c7d06e1226a9cbe764"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "effd6a7abdd6aac2539bfdf6ea451f39"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "89bde962a56cc7cb63f006033b8f3cd1"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "f6416071a30226b0d6c89a52d5ce6058"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "2916688322aa4b9a71ea858daf627896"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "77deffec896ce0a658acc0c4c09caa3a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "a5a8424af8dafdc0736b7e0233714e25"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "3376372b840efb776e3dfbb421861036"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "1355a6213b41092ea3c68e22b249811d"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "8e444d00aeeb6b192c1280782f8f0647"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "ad21a2f49648338ffbbd2b0f1a671775"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "7cdb4c3a8aa55b4a12b276a253ac05c1"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "78bd12df8aea5311a07b02774e2e4049"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "b93a416f9654f6ad13441fe973c42569"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "3c09bb90e4c34b7b17cb0b7dc8537da2"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "3a47f45d43aa88f41ce0996f47bd2cc2"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "0c3f01b87884a1fcf27007ed459d0639"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "b7c9bba378b8bad897a64e392a563d82"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "3d55661a2ad7df2bc32ff2165d25733b"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "3e331d3e3635e785a50ef33e381da063"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "6d4560e001447f29a49d563f1d988349"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "1da27962339c7bff6f874d23d18f1c5e"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "b3b2651dd15d8c4ae126239300597cc4"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "750c046cf3ea1a273dd5a95444778ba2"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "4fdfd084ae196cd6ef45f98ac5f7a1a3"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "11f041725ff84548e0cf4e5e76c3d1ff"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "f884f28630aa78e7ef320a5899ec96fc"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "028b8784c17d9f7969fcebe315d3e515"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "5a4e88de99446ad7c972da34b4c4d4c6"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "4a28d20a7adb32f528817edd29414603"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "91f75d1ac57c5b4b282bb22f412e0630"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "8f296a9189eb5feee2809ad824d4a90a"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "70c8d9305cf858558d2ea2d5bc5f6559"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "e078731950e2b586f38c362a78cc132b"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "f69124db305c4859a5a9d92cbed09d26"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "1bb08c32861b43ce7298e8b6f8cb5cd4"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "4f6715c5faa32f22b42e6ea1df00564f"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "1514151732d2f8d4897b541d64a95ce7"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "802fca4c6038ffe1ef8f88ca108ed9d1"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "d652c8fd9a496b0bf89c35827a8d3a0d"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "0b617bb1ad97df296d873d3c7054e45b"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "fc63c5eb55c5fff1d75c0ee5280df7e7"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "78e6ddda48328851d5163f990f20c74e"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "70c70d1685d0015b0dfd9a8d461050f5"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "816a83ffb137c14ca78955fee31a4cc7"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "f00a7c73dfba4a6f936cf09e5a101fcd"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "e499d0b1678e0ea854f1a559dff1d8f9"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "3088adff3f294760f4a9c7407c5e09ac"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "4dac343de9310e2ec861707eabdc9a52"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "9304d4cdf385f6abdfcb4d9bde75101c"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "071d8aebe7ca23aec5c7f33eae25416a"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "2edb3931f6b08eca252d5c52ce89d500"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "bdfbfb7273e9059efa8c99c75c58e3c7"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "56969a648fa1bfbbda8290507f48984d"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "351eed1de802a7b770f9a24c87572235"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "41490dce7d977a8c9346c8a54d85e62e"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "cd012ac7e71c6cc6187446491f36e1c4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "232439146ee2c18c35a97a7a72a1ef85"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "334454ecd7b3a5b3d8f0a9c4ef01c970"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "7aaba365396cc2285aef7ea8d7c583d0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "f7509c04e0fb30c59589a4fcbb3afe13"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "397c4b17aa1813013ca4ff8600c5fd9a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "efa26f98722c21114a586ccd4bc4a35d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "d3141629bd743e96073e9a0ef20a706f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "da4bb420e67ab85d1ba885b42bbf96c9"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "28d9a9c904fcb82dc352273e251b8d33"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "e0388f79b33808359ea747cce1fa3310"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "fc54f92ac3fe58464ca8ee3386357ec7"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "6c8409726f69ee45d599c91a8dd944ca"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "1d83de61595e630f85431888023703bd"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "03a0201dc7a961bde9f49cca52ec7953"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "f2c9f10b0fd369b832fd60c955e61433"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "01b20fb88c359bc0de4cd0de064b6477"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "409500b5503df270dbb66f234fed3ffd"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "41ffa53c6b383f13a34409539a1448b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "76b909e71be76a832a41b310751b1980"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "0519523c2c39b4509d8891150f919663"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "d60546003da7f60c9ae30b1a9a6bb2f8"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "c349c663b92032aaac607d369eb615a9"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "b92e9b2e8dcb2a559b9305e5379f12db"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "48d37ef05fc4c4f0db766c05bc5d229c"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "17dd13d9da5585dced13ba8d07dfb4be"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "d1aa97ee409e0a2beb5ff9eee375036f"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "10bc2fe375ee4b9cb235e5577296c5d4"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "94482fc44ad2772a2b7a3cba63943beb"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "57cff63908868e7dd229dee6a14be498"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "159902195648c655e3147a5bb1d745a7"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "6708bcbc11aafc7ef9e9e9066d161cc1"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "faf24f5bd0a44818e1f6bbec644a48a0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "ceaa03300f8eda0f9f47eead80a3da99"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "090063f89865561ab3d2bdbfe93cb211"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "00ab2734e346ba5b820eb330ecc35e61"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "4743d723f66b84c12a17c0fc9dfba5d7"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "6aa1bb4e6a688e824b8f9a07022ffdd1"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "cf679978a9400b46d91477343cebcd11"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "9e3134955da7ee78490aec5f17fb45d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "a5cb47edbb04b55e724663ff6987dc1f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "6e3d02beb026f00b4aed37655c206b19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "c94e25cbfdf2ff0f154e27c8289b0cd1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "c02a3b676cb323e41f21092582cbc012"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "983040c0a4a65e30c9a0da5acd5f7bcd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "677e526612de0c899ea0bdb3a99aa8d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "78d57c82d25212a5b17ec8a6208f7d33"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "60e80d3fe43dd410fe6c1bd181e2c906"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "e630cfdea7ee46a68705755ad257c1b9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "57f96bbbbc754e586c62dd1abcc299fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "f4e67d8b602f693fd241753c6ca6df04"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "2774385c58fe0353d01cc02373b20196"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "ce6e0a83cd408125c6a77bc203c6d3ef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "2665401c433c306bbd051d63349ee806"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2a38e794bf2bd14f66939969291f0ebc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b79620125b4d3efacb4a92240377e691"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "f22bad46682050fe644c4bfe31d65615"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "4659334b2820931393335a4c8c6820c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "5499d39833addc31668ff0256443c9c2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "7d7ac1e5940b18995b71bd4e5a34e7ef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "565dea13ea18c87cb01685b4d281224a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "25dfec341f29d9fa20ad2199aa760ce6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "5d8017bc20439b1f9c62669a11c28344"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "6e1e3fab6b394875244a210a2cd56d96"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "26db6fab48516a6e0a2aba3fcd2e71ed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "39bf96c824153e0a1969f9e97dc10b5a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "70b6d047b790ef33086f108edab44b99"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "e4fe10dee3fc60d57062945df71cbe78"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "f873ec693b15e8405328d5ded9222644"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "9a4158e99cea30eb2653e1664c522d52"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "192276e0a8853d56f523edb26878f4ba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "5a879a5233c44f761983a866fb8962ec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "8298b9936b3358a5c07a9b35e518cf19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "de762d93c687b6da1b571f0707efe0c0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "2b43f7d4ebb7ca377172fa6fd40f7a28"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "fc53f7abdd76562c9ccff612f3234d9e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "2ec153ed56e7a9566628aeef6739c281"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "91411f9f154f052443b7a31080cd042a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "29ed98b73d845f106119534ab884c9da"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "9bc149c7a730798e9e0b2b9f8b8e806b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "9ba8415cc3bbcd33a5278f598502a8d1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "bdd64443d62195ee23728e6d7e6c19fc"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "5644c389d2bf19e97dbe71c27acf1068"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "851666fe23053f23f957d215433065e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "ba8410886a99184b58644876dee8c569"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "af953e7b6cff65184f18f0e61646de79"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "bacee28104eaf265cdcff9dc76e6723d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "0596da9b5c3ce9fce135a99e94c6d153"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "d326b35e28d387800a2beb445df3affd"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "9c963cd7a91a8e040b9e29e3c5d242d2"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "f882f15f518a7ca647716843c69c9b73"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "28e5534490b7ebf0c0ddd9d79a589b46"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "86152fb159887dbb95ced3fa187cc5a6"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "b212e016c539b1904b023ddc2be36038"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "8b699362f38656c3e45cffa7622a6302"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "7c73bf188df3fe2a727be2023499c396"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "b4084ba4140c5445b93f241f76192c75"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1753c7c42822bc46a41e1a32df9965ed"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "06a18e439ebced0563ce2812c1d03e72"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "96b4ce25857c002f9598fde847a309d8"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "73928a0555f28f7589a6c036236f2af2"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "17bab36ee78c8f5a5330deb76492c15e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "051d15bc317b39df5a9ab4a960b770eb"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "d9cba8bfffbb1feed6b57074a71bac91"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "6eadb8a8e7b58625bf9424991c7000cb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "5d8e13c016e6f14f52890d70c1b9b9b2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "9b503d9d1c10d9d8d0cb89d8d7ba51f7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "3259bdc233515d3ae5147f7bd82d5e4c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "ca1f95d8e078c31839a6cb9a6a5ce110"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "dfe667234e1c40bc19a88eab0e6f3b6c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "58bccc621ea1bffc85def2b05bfe2c19"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "d733277f8eb392ede0ade738ee625f8d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "39d295d5bc09426617667510c357f395"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "b9dbea3420344cea875906250860d08e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "1ca28f5173eeb4e048fd087f95eee9d3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "cb755e1144ef1be4adbf2e923d7cf2ec"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "97511644ee8011f302db31e8997a5117"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "d36635916453c66f7d514c469d8bcee9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "3802e1a7ae681fee841800b5a6c28701"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "2697ee7b434dcabc250409cdcd99996b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "2da297753e7863764223fd1fd6902ac3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "a1b6b50bd83d4cf29cea5247e09a94f8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "3064e5ea80e40ea915fa6369e02d659a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "264c867426e692deab417ac15d6f9fd3"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "f71020c68c06f0fc243b5162095da75a"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "58c5e23d97eac37920f34d719cd6c4a6"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "91a973c7e406621cf2d9ed05a5ea71fe"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "0fd1a3de3395672564edd8177806fa3f"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "568ca7371b9cd72661b26d350d9231c4"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "12061928bff5708e07ef19ea8b178174"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "3129ca0ddb33a5e0534e2f2948e747c3"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "70c88002cc632fae630fbae7d790ff1d"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "2885ddfbe43287ee321270a86295a757"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "55f0dabf27790cdbbb45adc247d26116"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "d71d96922cf13a3896ec9c1a3128b5ea"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "1672716e6eb4d7d634726c9961d65915"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "50382674a6907a098c3b8c8e4e90ef95"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "6ea734a6d3decf03c543377c811f1522"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "aa51dd407facef214810c9a13b857bcf"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "632f19ad4e27f9b54f2f4af982dc6196"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "62a9b412e551ab062697e7ce9c99f9ee"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "43636c0d855d5c583f3e928a69dfb7e4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "90eb09edbc59c0d1bb9acd8022bd84d9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "1d659ea49166b86de85b44ec6b41e5fc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "4f4db186232c1cf93de78460b8cd9c3d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "1da39e3ac791945519aff30c225fb648"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "c3e3f7c44464f8bbd8ab228f1500f622"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "d302405d2aad81088f20eec5c79fdff9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "9136cfffe37b7f107d3e76b32e99190e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "af6177df67c0a6498be1fad015b093af"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "6f7014b2c10d61b68c41b70aaf318634"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "857a612078a5705dadc6cad3a14439a3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "58ef0932b4e733d6236ec07b5ad9369e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "df74fafdd83f628aede1cb31c35ad9c1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "4a77ac6ce5869518c1a6f20a1a87f7ce"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "c83d9e3de089c653dae765c8b7c99bf0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "e747eb2cec9844a18ba0b238af686784"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "14ccde3b697383d29f26f811720d5d74"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "dd77d7fc6e8f31c01f1f072e97bfec8d"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "9372ecdd9e45fd16d6c7f7ec1504c7fa"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "a8d5e0ca7648b022ce55ce31e322f439"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "c9a6e2c00b9333e527110939c88a916e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "ccc783bd779c37defdc8ede8e65302eb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "7b29b5be631f72f268b55396317f0c06"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "64767655370046d8b5c4af1640b4d3ba"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "e207da965e97b36a78a2c47f6feaae04"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "385a76f8d8d67874c225368ea9e6d94b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "16a6556751624dd75184c45536d455aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "068c10977ecb30b9ef002054e43e20ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "31b03f73663134da015f8ae4ae38a3c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "aa7ce5c25f79d61e2504cdf259febc5d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "9b6bcda42936849ecf87ab9d1cb62683"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "4190a7a1d37282932e7b6d33faf125b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "953dc8fa42da4c4cebe2c63192e1c562"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "3f5abdc12eed38602ccd3de9803af945"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "aa66471e7a934218974ebd66dee01c30"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "a45f7b565e6350002ba45152e60c3d19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "6aa52e846909791239e65730db1e4418"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "31d1104732b64d370bc531d4cd2987fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "10843a0f2cd0a0cbdd8f6fcab63d88c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "e944b1e89351ea0f26ada2461860704e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "63e9e7bc0cb9ba0f58a9870be99a8b84"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0470fa1c1692d8418ff96127b5817a66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a056d6894bc5a9aa4cc4d47be97242e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "c1a803786e19c551c4fc6c7d18dfd1db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "6432ef8ca514ea043077f6ff3d05e635"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "8a880495c4e71869a15945fb50b06a75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "58dfac322cd73abf40d95dc7d5f2623a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "48124dcd74d2f437828fb474cd02b356"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "ea89a94bc791807e49027f03ee4cbed9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "7dae50a3a3bb965b96d0e8d66b024957"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "fc15bd4d6de922486fd61344b9ffcfb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "b83e6fcfab04fc6f8b94ab92ceb1f918"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "7634469ea00a996a7b804cc3f92088ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "27c3778bd0fd3d318104fb7d56233206"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "0be9d2021d76ee590788dfc0a14869e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "0d41b745f9cf1f16ba6bd328b9e8b2c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "4bdbd28c22039322b962286a3373eb6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "467adc5fffd3a23a36a61f93b22399f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "fc558346211be16ed3451d16052ad77e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "208d9753ac3db93b58c92070b0e311f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "d48de165ac61d01c82ea74221e2f6222"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "a1718cae1bac4c11504392318935a310"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5ae12aa78be0617cb95d8b31d29d902a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "78dadcb8b4cd3a2decc2edb22127fbcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c81af04c1182544d72f5a02decd2c4a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "a9c1ab37a51a0655a450dff4366d6bd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "113955ffce48da7398c66911ac489079"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "56beb131c210f781c555f981d8dc4115"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "af7e08531ccf27848f0ee5eb32ae21b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "ff3985b5d30e9b36f6a00c71b52d8ef3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "40a87b6d3fa3bdf96f1e037f074296fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "2596c61b8b861951a061811450963050"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "b4321fa1f0df7123b49972ec4bb6b599"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b368816863aac731c55a267cea374357"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "3e3d1f6645540f97d45b9ef11d807e36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "7cc0767c45b09fac32eee10d9263d0d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "029023b342257087f0b11275c24db6b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "610f67ff6ce4be9b99e061c5f7a81b0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "79247928516a2b1c51cb3dc295472aef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "853d831ff14434d1b8e9fda4d409ab6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "2d1a1bf1718685512bbbbee517db0f40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "ffeafd7896ba1053df934a2b814ff1b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "b1c6c40d78ba23ffa50fcf54b87afc0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "2c6bc1a497bc726d765528579b3cd652"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "e79015a116996fe06cd4a886004ac5f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "9977cee4e36317002efc80ab74dcf653"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "8f05475428e1e55a3ef4f43cd5ec2a49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "8d2127fa558d9df0e3626d2baf726a85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "c1e2a70c1aa10caf686dade216607c55"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "e3281549a5f451da59a215ce593c05b9"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "69592bc0462add844a93757d4110ba8f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "f766b95163f36bd8ad0dd8d681159e2b"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "55ddb28b2f6e233c5a680f28b4dbce7f"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "f9f22070ed077c90ee691daba6a9a9bc"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "5a6fe897e43f3a4b1e59320c52057323"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "07973803cff47da116941decdd1d9210"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "3d8dca14d8e4b5f367575a186541bb4e"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "bd573dee4bde44027a60112a97f9e3a0"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "8751fba714fe4cd620d8dcd9bbdfcbda"
  },
  {
    "url": "categories/index.html",
    "revision": "8ca9eb6b67d6d9ab84ae19719c1c04fe"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "d2619d01abf6b3bb330d757282839ca8"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "ab6942482b5c29b35cef3e82259ea9a1"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "2970cf8cada98c56d709c033dec69e61"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "c7bbe7a0a7c0654b7ba1a244996f1f6b"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "0e6fcb5f6a8168cb3b82c58faa9f7989"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "e837d6999f60fc7dff7510e233cd5bf3"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0aa7da5126c4c90b09cebb0a4a3993d2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "21a6e60fc48ee0c7cd761a7d726d9e11"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "590dfcb0b10e945a9bd6a00f3ef90e22"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "fbe666ca945c3d941a58178dfba3922c"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "bf989ca2d7bf33e5c67f3a0f5e3f327f"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "b23f7167ac1709ad7c945efd4c80eb14"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "4a9eb532bc484cfb26b97ed338fba7e3"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "7cc7121e3bc2c4c83a743efccd77bbbb"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "fb93272956b124565a2761fe4d770f5f"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "0411b26adc74b1ab7531561c5e89b4e3"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "7ec8a0cefbf2b8aae1128a6f79157a5c"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "d3c011934a1d9343ec5443a6d130bf1a"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "1088fb3e220d7b84b405d892683300fc"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "982fdaecfe465853df985af414de37f2"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "8670f80c644283e143ffc3d19332eb1c"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "764746f2e7d54d1aec177fb078d0b26c"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "c7eeeafc1b9bc0490efb82be45adfb30"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "2ed7fa88c880b7bc8a531276f89203aa"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "e858d43aec46472172608069e4f6316a"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "6d89a791b1f63e4ed1baf3ab2ecb4090"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "dfc652712969005293d56372c2226cb3"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "c904301e8f7fead85041f32efe95a115"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "24e11ee581f39a4ec3f01d8b64460771"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "e12eb84821a2ade580c254f96cfe5ee1"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "95f0c7918584e9ac2502d58a24e11507"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "e0bf700992646a3a2d6ab2cd746006c7"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "4a8105cfff6af5895269d0fe81029037"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "b03dd916b5c33020517e1efb01729946"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "3fcb5720b6d166bee5db2762e1e8059a"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "faf8dc8b7c45a08c92ff0a93e432c53d"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "faa7f9021ca5c88b5c4d275eaba515c6"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "3dd7e9d69131399af297428caec25724"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d3e1eac63bfdb1925f3e1cd8f2a625b5"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "6e65042d937bb7a4e6b8009f63b228f5"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a9131d05050260071adcb38e40c655c3"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "551553e52b0089d78ebecd865b4b3575"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "d2f7c84228f826273740812691544603"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "0ff0166ac8215c2e8d87cc1eb37837b0"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "b51112d52be6bac2ee61d684338e4d1d"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "b2aa7f665585012de5fe186875017209"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "a23410eb5bc640e0d5ce4c22a95ff76d"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "84bf73b3d6a283034e2a9fc164305d6e"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "e1c9fe26ab424e02979bee4cd370bbe1"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "604cfc9fb9ed93431f4d382f9666a2e9"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "4bac9d968c4d52c8be61c5722ad5f06c"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "b177aed5f79f8511bafc989f5bc31140"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "3a010e6ed0810ed611c5e3f169fb919c"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "286bc3e8f2b711740357cb8a7d643b5f"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "54f701bf7b2d269d9f4fa457e3fd1309"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "8e083b45e1a6b2011806ab2f91b09aa6"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "d7a02a1f244b42d6c75cfaf4709b371c"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "6dc121a02fcfb7bfdaa3a42a7127927b"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "6a2a68e1f71e3e8ee3187a8a58c46729"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "a91911c7e269eec7095855c0217421cf"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "6cbdf3d55b40d8793ad314422b0877f1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "01fb35661ba1995e29e6f6ec96e1fdd8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "585b1f0f34207a2a08634f2117c5d88f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "7ea5ef5705620d7434c4d960dccf98e2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "2bfb3e5ce1bdbdfbf29efd91e28bc401"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "2730d25ee9029b9b8acbef292577d164"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "463f12740bea79be9d2c7bb4ab3b076d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "c099c907ee242e13e24c17b706f999a1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "cfc8d248fbb084b66fa117dfde30035e"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "1a6ae755416810e3d53ed8713538f5bc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "0c2b7b8cc778d1ea414e143b749fc242"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "00d23f1696472cc5a1fb69724c0e9966"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "96bebf11d90a0ac378f214adad38e447"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "da98176d88f52127704cc23af79a6780"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "8f363b409dc71daacc63616060febc2e"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "52d1b01bce7efd8e20b0951fcbb38fdd"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "2e9783a99591e55201b4fa04559ba2a6"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "ac98946a8ba4e7a4421e4b7005da3116"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "8f40d71c533263d019fbd2e2d4c2be11"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "fc2c72b2396aab0ce8d8c575027e8453"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "54373c411ed0625173ad1e640f712d6b"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "5c69beef78ba58162a5f19bed277f1e8"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "78c85efe5497cad3ed7b2e6f0779bc2e"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "dabea70f03239083321bb8d337036071"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "286b1ee320cab49e4e578a152f4d65ee"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "3d88d0edb788c9ea8d2b6b84b6fbeec4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c0cada770fb69a3d9770f28c6a13118e"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "007b077b0c743aec406a2628128fd125"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "293cef19726cdcdde309be97b8116546"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "8bd80cc84ece903b01b785618849ea24"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "a349117ebe48fa3965671dcf3de047fb"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "f514f2c182494cbd3286c556c79525b8"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "ba9be45f3a371433af51a7b687199beb"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "790776ee9500fba01276a1cd075a7244"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "20d5f59f559290e857972b9128a4c59e"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "21fac343bd00dadda4d4f7de8572dfcc"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "b3519fe1b3b48bf1ea7bae2982cb382f"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "0a9de9910ab937d408ad16613dc666a9"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "c16504fa3fd0f6bbc80f03161724e9e3"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "afe51f3579ae96b9b988af94f9918c4b"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "76e3c1965f1774808fc6bb68027bf2aa"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "50b3f8316b222541a1aa1de41a1ace37"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "6405623d6e0ce2d5e3f1053e31f2588c"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "8f10e402e1ccd815d5449f894274e42c"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "11e777ba3914e2de45ef06168d79c9c2"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "5d3d541e23d0e33ff6cc82353b340521"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "45f0f84e5a7672ad74516d0322f07a03"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "1b99fb79dc63666ebef4c9e1bfd1153c"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "fb84f24374c36c0ed790968077150881"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "cdd1f1d0f76ef3b30fe8f3df6e789964"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "8d601df0dfc0ef393c6e2d95db681e86"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "7d47414af91dc1343d58ca66f5780252"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "f14b111846e015d3f9c3a8b465bd5db4"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "9a9a019000dca4cb26179dee0d432cd2"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "7c1f8c5db8324735a18eb4f07950afbb"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "91447975515ceb6ec385686f8b7ca6fa"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "d6a098b73bc043fea623c0ac92071f00"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "28b4c644127d246a0320795e96baf637"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "f733e41feb406418d53dca4ea3474878"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "a80af0d2a3d47b81a4d730d111e7e09a"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "a7943c857c52c526b09d6ba9bfa840e3"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "69aa2fda25ddef5d605971823c18fc25"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "798a4d410a2215d99dc6740da67406ed"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "f306a0fc881743df4a63731cf1090115"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "e2d15ee6842f981aaf6acbd842172363"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "a362a408cb9b5adab0ddb19e917364f6"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "ab1df55870afd61c5b8e71abf0a8e2de"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "9b6bf191cc9c99cd789704a73e5ba708"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "a4e3b076129f368c74e0b7170c1fa97a"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ef2924691c53570ea694e0f846a19db1"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "cae9c22888fdca67bf810bcd40fd778a"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "f45bf4e261c47b5b692ed2d1255a0d7d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "00bf9bcf604618f03b2bb784d96ec82f"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "96b6f2ce31596e6f47e8974928d6bcd3"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "61932191516b0bb86e35208b54d529d9"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "b9d35b6e82a27d86d811909a197e0a0e"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "fe1fd16dfb93811a0be5c26d7bef3ed1"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "956a827b67fcc995eceddd6b2254c84d"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "ef235284897feba948701680436627bf"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c2d59304c36df322b1c79030a00d43e0"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "00bd4481a663d3e2cc6dc51a292b56e0"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "18bec79019a9bd3a1545563afdd1b3a6"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "7276082dc19ae33998ef7fbc9ddf2093"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "d8c4b340a87571c8bb71147857ede6a6"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "097168a936431b23ebdc2f44e025e0a7"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "b0bd70bd5edc29b4aeb96175d188c26b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "f0db120759eee6b0dc8e8b14021172f5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "74fd65ed771000f8b5666919fbe3a418"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "87b8b3c65c8fcc48c34548b5ab6e150c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "a4f1d97cb30583a2620c21906e1066b6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "a39871b7ce6e7636ad64d98e263d5252"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "55db76dc343323fbbc8bd0c17c549273"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "d703d2ea815e016d73f137f3e2be41ff"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "fd2af6f9dfc1c0c4d28a580caf8766fb"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "06b2c53fc2e8f004b4f4d167d94d00d9"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "8756fdea73a71e70d57021530b80d651"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "117b2887e5af6a4642822f63cf4be63a"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "094114d28b3de73c77211a01c4cfd3d7"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "3149cd43d59bbffea296f696b11d33ae"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "597e80e46c3c247c7a0323366b4de132"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "d778419ee4ecd54f1b80ad8ad2ac4d5b"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "8f5be8e07fb2214d5b03d2e81eddf78e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b8b1979e5612ccf1a420a5ae1548e9d8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "3b6f96dbe1d6dd06f454870d2b2a7ab4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "b0d2f8eebb882af673e16c7435b07994"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "d76d8c82d5f713fede8e85ec3e0460a8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c893ee43ad65458107b45fcef5a97c62"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "5e28261baf4e14a11c263d8d5e3cc9bb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "5c7d41a7fa58b81bf3eea9a94fec67e1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "fd7322ed2cccbf8999426c2974e8152f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "8b5a28c44834aa98419165014cf9fb30"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "34529da4fb341604f4a3a86ce504915a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "5f10656857bc50447fd781e8239431a9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "43dcb1bfd20426493ad7ccc2528c4d64"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "569f0101dc6e0f9a185e021c8abc55a6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "db840b25a80d86607c17adafdabb1b47"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "1e3258df761f7a285b5a4aa81ec53c03"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "45fe1bf5339a82b7089f8b9365ef4f94"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "3c322e1562a028f8296607ee3b0fdd0d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "f3af9c645ce5801a1233ad9a6c81241a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "e56234995217907da1364c3e6ceae19d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "6e8cb9095e9e1e8025985f24f795dacd"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "230e771e07c94fb869cc09b91a3d54f0"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "937b1b0e51729434c76b725580be95ab"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b8e5a3387fb9a9fb9763397b79d5273e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "9026d2de9824797c62c52c86af3ef64c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "eba8f863611e33f29430599474dd59d2"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9fe7a0c79c29c7e861364d09d1138210"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "f83ecfaa3668e6c4730a87d6c4411609"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "2115b3a6c46e98aafb420e8ebad7aedc"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "18623936075e56bfd004445fdf1fe04d"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "e08b3d2f3e9299a42dba6c3e3f4a308c"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "81357775bb67f95f3bbea4c76d5be79e"
  },
  {
    "url": "categories/os/index.html",
    "revision": "b0a3b44b5294b579266f381ccb649c68"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "9373189ad19d1c776d5b3cd6f668d262"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "f82d58609a127bc72b727ad17b5564bb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "6477f29c6defe6f0be07b5cf7a8dc858"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "98771ec47165f9589689524141060bc4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "c2db86c499733a9e3cd94f869be7031a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "77742b0957e86024c640c8088f7bace9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "6b694c2cfaede3383953cd5f9b567d91"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "2788b70726fd6ed38f8c381c0df7e71a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "4ac0cdc2c73addd530fad6ae55a06ae6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "e5c384e2c7854781ac3fe86f003147f2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d32fed9022a307f25bb8c0704eabf8fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "1ffeee05cae96dc705949ea2084849d7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "24cc952acc51884b61098576d1db73e0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "bb06d91b3935426b67e0d219b4befc0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "d5c0d18955175b79779430f6e552e68a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "d1fc35d7d78288f513a2360aa6f8b186"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "2368113992db0f667f1cd4a8306c2028"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "25ca58151f9ba14d503e8383080d4ae4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "46c26e7f651d60bba86fb867d9369479"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "5c5e66fed28408e67a11f84effed9ea5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "d0c70f100c1fe1f8d8ad2964038675c1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "38b448a306942fa7d026be345f07dbf5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "64c91f0563c51be812e2f338c460c1ea"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "cd5cef694904e88711a2d637f8fde5d1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "3b1f3885851603f71f194c5b39e2c778"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "d5c7a0e1c9c93548a353b2b7732c9e89"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "d8909ca5e0ad12b92c302818c7ea483a"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "7aab3d4d0d4d847a8844d165be1f6a28"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "452977b699f8cdf7a47edd1544f07b3a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "8952458eef5093e80613a3e03a7b3a8d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "e8b6a90c8e7f843f715fec614501f788"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "477b6f520041a875a37c6bb9e4ef9c41"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "b1340a806047390d71d5071ef8fac9e4"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "14080642461483e5edba84be67d96bb0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "8431045e00e1569740a073a91cf31854"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "9937ac8745d9873529018cf0be637f0c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "a9efbc0753ef79504b7049539755e6ae"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "5cb15aea161a111686c5b871e97b6bef"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "79287c92e2e4a10f05e70780f9df16a7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "f10f16bfacdeb9ae083ef0d9c66e0191"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "9b609cc46f9bcabc4b7b8e7225e4b110"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "e927c31c112a23b93cdec605bdc99089"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "8aa28462c9f6c98ec30af22c5ff37d97"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "bdb177b7b48f418064cda5e011724285"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "5c30b83baa55a838f803e7ab70a77392"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5f098ae9f88912c301dfd9642e179dbf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5327c5cb8e9a1e9cac9952609d4f435d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "4e5e63f800cadf1bce001a5f627fe76a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "07b639e489fa3ab33caea54652f84342"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "8984a4eff8f1da7c3df2a82c4a754e85"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "561bfac1bae8b29ccfd9aaaa4edde0c2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "1004736dbf7fe85d8a9837189237a0da"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "a2ba4a0df344e3eda75013b46c45966b"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "186b784d4e704bde16470a9c83df9ec8"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "452506d23d6af83963a5d319ecc1ae3d"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "d439d34c0b07c7e5f226360fa9d07bf1"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "14ba505963a7ddc6d3d588534015e35d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "fa32f6cb6a207d926e57d5377a07dbd6"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "fe33490b94479dab2dbb95980fcb0883"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "5f0f800d45c7b9d1340ef07133327ee3"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "47caab086008eaae950baee224a337bf"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "bbfa2e403cae35868c2cebae33fdf48b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "81b53a1a8d107ecfec6d750e422b5480"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "78b544971ceca1fe4563e9a7cb5795e3"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "da3a64834a088bf126467274e008be6c"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "333e392baf4091a697766198453a3608"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "c87a37b8c800795392ef005adab3182e"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "b614f4f2e88684c87b3d71b22215b9ab"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "d02b5d6286f402f03cb5edb30a8bec3a"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "4f78902a201d3d34ad28d69f9f97109d"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "76c0c60accab85ed8044164483d10ba9"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "3b4790f7e9970932e8877d3da4762620"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "808f633181db2c31cddaff93577408fa"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "b5d9e97eb210491d0275973fa88c247e"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "cfa3215d20dffa8eb8f13b21079b0791"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "e2bcd748936d798a47f4721517a2aaaa"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "d620a2c0b74f15af5fbbbe8f6bf80de2"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "2b056549cb5ae23fdfb31cc6026439de"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "56e3c341fa6c9c49572a80ecc7879bcc"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7db1714effc0b6f94ce2bd8a3083a6f3"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "7eda34c2fef011b0f094f0be699039a5"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "22ba389c49e7124c44c1bf13214e7998"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "444e791b750730972b1e88b3ec5fdf2d"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "1dfe75ed27a9504327dc41b1127c4aaf"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "9cc9d1cf822d5adec42d2b8202a9e672"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "335820774a3c75fbbd1ef5ddd83be9ec"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "6a09c25b6f209c33b506c02b82ebd605"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "4b4114bea1e5c1a18d2785d22a48d38f"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "24efe10b1155682e1b7d573fa8aa4642"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "050d6c3f3fa3ab1b26e4e5c6d8f4c4b6"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "ca3e43ddee76c991e139436d89e3ab68"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "639bb1deed358e9426692e52d0914206"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "effaa603f18bc77ae792e9466ae24480"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "eed5bfe2435fcc10f7a3782a2feb2afd"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "4b679b9d2839d787b5eeae5e96da64f8"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "654408ce8dd46986907bd1408dc62c91"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "cfd1285e13c1ff39f65c794ec69df274"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "18ac1c3ea89bb048efce20459d68b8ff"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "9b522e04f15e428d6d1e3ae5a0f71f9c"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "8907dc779988db519ed03a14f0c9c7e4"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "670da00fd7d05389533faf8ef9765602"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "898de7d573af81ab79d65238e4dc1274"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "b3f9537828a2258005d3d69876ebab23"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "d50320029e53e08276f6a0a1818db857"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "49b02c4375b01a92af6d78e6a3c52898"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "2c0510f7e3701d6d3a2731df2bace7cb"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "7036fe68bbbded0291f901f2537faacc"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "3c8e64f096d70e8f0299a23e6d929118"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "006a605fcff44ccb674ac4fc07ba1259"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "e8d11b00dfb85be6ae412069cf227c7c"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "4c2c7d8e51c1657e5ac470df6409b22c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "87839a85e823f7aca6ea2891e7d2c612"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "76daa7a3d8f570adede3264dfb9d5020"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "68bca9e6b50fad6d70c870ae333827dd"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "1a20cfc967c2a17ca174815fc8cb611e"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "f81db34da66c48c0ae7c3b18fb74dcc6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "316944b6e6386dc0053a875af435a133"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "05049c7f9c40ad83941619a094fb2efe"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "7ce29de945e252b70a9a0a325bf4f822"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "530a2658ff477100a33ac75b76c66b76"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "099216253b26a62944c713734f9543fd"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "0fbe4f28cef39c3c81777b10ce5a66d2"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1e57ab58728726062e3ba682c0742df1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9d9142716172da2a48c0794a248a1b24"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "a709a2f91446d0a6198fd8481d329386"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "c8b3e4752c01963e60db7604a300b17f"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "0e486fe269c4af29b8e50a8e95fd0643"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "4bf815ef99c8370458a635284dc172f6"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "5c3b6a9b07624e5e1763286965abbc7a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "95463de7d33bf98094f2037b0fe28346"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "e83eac37ee89e55acf7ccf780b6f99f3"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "8b76ed945f6db5ac85861e81b16cd7fa"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "4f9d7e89772238e9b4f962589210aa47"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "acf58f0d01399d4394263d779810bb2b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "07b909ad055049ebf3f34d7083365abc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "c418d933a9c9067cc61b4eed583f3212"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "43b982e85b1f856265949692fe7af4f5"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "6e23d62e18b9a545a0d8c188949278b1"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "ac7e071cabd13432c8ad9481e89189ef"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "688475144b89457ccf3ae7aa2e834251"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "a38206e6500478284abf5abd016b742a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "1fc6c6bfaf2b7e98617dd3e4e874acc2"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "b989ad0323f6ad17ad0c8f4282ce0b9c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "97426cf9e4ffb96aabe85180bdf95e81"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "30cebc5669753e6216b11659c5dfba51"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "7de1e0c154b5d3f14885d796fe4b35c6"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "7ea57c3f65e798210c1f231b7a65002d"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "4aa69fbfde56d7220e1e5ef31e8bf662"
  },
  {
    "url": "categories/php/index.html",
    "revision": "fd1f297788410fbdeea912b420399748"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "af9ad8d73cce3156f805246e75467ff1"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "28580b86291e26f0a30adc108465a8c1"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "82103a60aa2fd2924f3b8f42babc72bc"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "038e1ed784bf99e2969346e1c23aca87"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "4d123e8ca5c44f8f4a122701094f9190"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "8d682809ab25af516ddb9249a980afc6"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "22bb1c88fd310f49da79cdf2c3f0635f"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "a8180d081ba1d8896dc305c72098bc50"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "95648c22c1154a7d4f9794da281a5995"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "cd5c6f4a3d38817557d269acb48049b4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "1ee40477b8c7a7b92eeb79ae79093b8d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "161f97cf975938a9e5d16db72c836418"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "f175dfd603236239514f5d5fdb081437"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "ab7ef3c6e86740d70d329dbeebfff387"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "7dbe8516d891d38774b5209403d900a0"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "5fae5116c00dc50e0b729b8c1117d414"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "2348bad45d3e1494b77d30fa27233faa"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "a109fdb97f7f7e51ed90a50f58c32088"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "d1580fcd9b958f76ccffdb325cb179cb"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "5bb56af3cbb63fe0373a4f2d06cdfd37"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "f65e70d5327a4a1f6eddba9e07250c2f"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "93253ad650e48cb55adb9950e7c7596b"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "fb884d745453813129f336090546d507"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "ae6174456c99f022abaa03fb5f968131"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "bb9b81dd7f6262bed274252aa0a06bbf"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "525bfdb379257f7fa0f62ee0ef8673dc"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "8ec611122cb116c1d06c83556f48fac0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "b5669cfc75b87a4f8ab7a8ef51ac575e"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "73ebf52e98d95075d4fc733722fd27d6"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "62f33f34cd38c0b05d61cc7a071e7cb6"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "44003345ac1a98af70f81a4a09a4ea49"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "f287ad02a881863b633bb3f90a9189a0"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "1884389bc10e01b4d98d1f929d2d641d"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "8bd5b5f87df9bb6c93b39be0eae4860b"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "d10735dc48725da54b17403b85c19315"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "796fc049a2144ac554b1fbfe26c9e048"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "76d6fe8d1fb24c2d3df267015f3dceb3"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "11b3bd3bce1997fbcea193abe3bce594"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "666a2c4c2a95355b63b9b62efd807695"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "b9774e255a9a80a56a8f7c41504dcd07"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "a13c614ac5cdfcfa35704708781a2cd7"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "2f02462587f1f8489828a1090776f30a"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "cba1f04d0005a081d880e248a2dc851e"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "b578f164543deafd39387042d4870b0a"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "a58060ee1083f7716f3a80079ef61f62"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "96e041da875cc619f0fa68be37bab1ee"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "642652187a34a9d071932529badf902a"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "93f04dd93ef7695473b10271d9e31ff2"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "eeca9ec0979edfc15df0c2d6f44dbb4d"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "70e2caac80798c9e1d3fd92b13a7be78"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "bb6dd43cccad3deb469510212d79d810"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "59ee882cf796bc55144b2701cad42b07"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "f60bba70e88272e52415744fd93017d8"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "241742f89cdb730393af2829c3eff0a4"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "86fcd38d785243d1ef292ff73878c657"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "ee156ba3d2dad9f747bb9197540a44ce"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "20e4c87afb3d891d6cdd11cd5469f150"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "41ac05f0efe29449a0b01ee695113e5b"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "bb5e0bfe3315dc22bd3669334c97d7eb"
  },
  {
    "url": "categories/python/index.html",
    "revision": "40da17ae9ffcb12d18e462138f6a95fb"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "2e162ad7c3e511c424c8f866b8c72fc6"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "f23a96cbeeb738a7d0cdbc12d5fc5239"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "a6ea492fb9e6de955e8a86b3965c20aa"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c226ed68657a964f0b0dc33cb9db7d22"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "f5c49c95d17b4cfc0260199fb502df4f"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "7fc56f2a5db5f7281bed1eb48e230234"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "20b7361ba78973131a434a0e2d5dce8b"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "3c290b92934be15d19df355ecebf797a"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b066388d630a8c464ebfdf032ce46068"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "4d7bc9c8676f9696823242264951788e"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "29381f2183001a324cf8c2f9801a3691"
  },
  {
    "url": "categories/system/index.html",
    "revision": "c99030d5b6d62f6edc9af56c98d407ce"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "1c7561ca6fe4eff6b34f948148eb3633"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "792bb219498c666ad3aa40d25e5b01b4"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "7d6c2af9f4630ea9a4e63ac82c0803c5"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "66c2ad5d194b514f25f97660c94ec6d0"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "a41fb2569179d2a1f049e402237efe54"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "3f5dd9b7581799e31baa203f504536e8"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "272fc8d6c69a2aa132bd91abef00128b"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "5aaf745f802fb02f9ff24b478c80b157"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "27619cc43c0a973f4f0308de9ac68a0b"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "ca5654e8116dea9fb666edd052c49066"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "dd787b1f39254aa7c52814b7f141999b"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "6727a71f72bb3d67d2aa3c651cc2e5a9"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "31d9259bf87a5d74811b009a620151b1"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "bbc75ca8e25ae03b41f3c5c0931f69d7"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "205e07c8134d89fe665e17ec778bcd83"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "5b7bc73e012185735f8894205aabc87d"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "fd2e4da30f4bfb191de46671025fd0c1"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "cddf723c441a83fb68009f5e3cf635fd"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "c2fe6038ab3a60b7429db52de53cb494"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "751e92d8708b43a9d0670801b0248ae6"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "d67625b9158bd805e05890d4077caf2a"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "407ee4c45118205e5770617fd24a9aec"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "a329d9e5872a7671df95e0ff27f5464a"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "edb47e02a0b21c15bc88174b68cfe810"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e624d7c915753a659efc4f844c243847"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "7fcf62677f54e3c780fa6d6a3935d29b"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "2d8ded568449f1b45a759faef416e7a8"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "3246e8aa196a732ffad62f76e0e35c2b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "5e67d632be1512029d35f65f1c6df42a"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "14fd92ee43db1684d9f8240dbce11a37"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "17e1fcde40d79971047e3fa2ecd2cf85"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "23b4d1688ecb0ead98cec79d14d10bc0"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "17dae064f9664c83f42ce60d79017d05"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "0248fe3717a6a6c8f9c56f8439cd406c"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "7929b8559c662d2202d7989637ce7deb"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "316ff071fa7f7c6c90cbe7e610715401"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3a81202b23a5f933eac3234ae68fcc28"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "bbc007c3fe821d102c7849795423f0c0"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "24615b4fb80e36750adbadfaebe60248"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "c47f98650834aaa43c88bc7ca940e8ce"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "52ed8cc639a0127ae16f225d250cd533"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "84f9b9df7983696e28b85cf7806cb723"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "14786cc2438e0a95655d843d4cc06681"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "961daf3807db5891dd0eb5d6564baa36"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "5c6dc0f98f19fb4acea00443ad0e081d"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "7f491495fe033cc9a457bbbf5a1f1f81"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "4a0c7211d60f532609108b870470ef7a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "25d2fbe1415d5864a1e1aee60c23ed23"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "be74c97ffb1437affbd6f547018292b1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "26c5862d8a321c5f05b168356c197a58"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "25e82538fe724ec849abe7dfdc549dc3"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "c08210eb9df36906bf1ead10b536eb6e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "e2c219ccd87f2bf10f2c892543d1db08"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "aae69b70a354c2e0ec28c75572ba0487"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "0fc85a29c5d9ea73bbf9e7bb2a32543d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "027d854dda8cf0b0da52c0e6c98823a7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "0a913962bf098205531e11710946cdd8"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "ccc31c7f225beae5dc55abc89f2ab949"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "14c11ffee8633bfa5bf460e347f7eb94"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "bfb87918708f4773440fd2dda0ab0c14"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "a90f2d245a7331f12522e7eb066f144b"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "9c81d3fa3e835a58940d01720ff6f4d5"
  },
  {
    "url": "favorite/index.html",
    "revision": "775e45d9ea5593a33d7a9152cf1fc54a"
  },
  {
    "url": "index.html",
    "revision": "be10887e354c4d4a7edbf755057230c1"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "b0f99e582b147c28f6b4d7f866e3a3b5"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "2cfc7a6a229babcd77ab33c159288bfe"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "7e66e43b2a7ff5db8b1b643f7b568076"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "7f3c5f6a9221ca897d64310c95f357ed"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "7f0a2d4021f1bebcad565591eeaa4e31"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "7ade6a6e6affc9698a587c74e2449a83"
  },
  {
    "url": "note/index.html",
    "revision": "4757c3037c2754a582f8c0098240667d"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "b58fd5789af813523d0c195c89d7aba7"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "daa3c11b1aee5c7849fafcd1ab773022"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "f9a5e53c305d38cfb0090042bbc79912"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "368dcc96bf8ed7253f72d0fc6e9c394d"
  },
  {
    "url": "share/index.html",
    "revision": "1834c806a389a39b9bbdf9767d5d0e39"
  },
  {
    "url": "single/about_me.html",
    "revision": "392ec787afd854866055388740a0ba15"
  },
  {
    "url": "single/all_article.html",
    "revision": "0f12f1f79d03a205bc96e2c54300f02d"
  },
  {
    "url": "single/welcome.html",
    "revision": "8412636f5a8c8f4077821197500348a9"
  },
  {
    "url": "test/index.html",
    "revision": "3ecc70efed6bc9d7b18f86347847699e"
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
