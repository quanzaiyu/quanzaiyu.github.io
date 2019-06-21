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
    "revision": "ba5b89e83a5c65dd8274a7675eb18426"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "d054a389b8313a95a9fac2718773310b"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "65ce1392f0cac9e24abf85df3f34bd80"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "5c91dde060e8a59b420955c8e0ca44c0"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "12ebea9cd8d261f8f7fde8e6734aac1b"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "3dc8bc94eeb3d50599986b23d658847d"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "2f89e64b82683192d047c16500f6596d"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "449c4c71fdf4c055e3e294d41606297f"
  },
  {
    "url": "articles/index.html",
    "revision": "01794851df50118b03057701cd1b857f"
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
    "url": "assets/js/13.4b5c24d2.js",
    "revision": "16748c53823c201bb2b2dcb3415d42b3"
  },
  {
    "url": "assets/js/14.ea0e7a13.js",
    "revision": "f118cca09f788c3e585335d1dac3f7e3"
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
    "revision": "186db91c7ff9dc87b2ad771dbc2086be"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "efb980822aa2f26a34748cc212febb08"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "41494a356c7cc2636ed042a5c2a21101"
  },
  {
    "url": "books/index.html",
    "revision": "e8c1c46846d6213b7cd6b70fb831e375"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "18ed823b93c61d00fe0695647f2fe4a2"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "cdfdd80a7667d32793d1d4d370c48e1e"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "f2d95b978ccfa35a9f47bc491b443515"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "1087ab46b127d27091c5acf994011b87"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "e6483eccaeb9f93e0af717c5fb824f93"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "de14be43ec27141e42aa0b83a5f61f9f"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "71b2a3d7ba9de51b0518f29d707969c5"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "6b8e1c51e855d49a6176b48ee905cde2"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "93f1b955fdd0f68b8c0cbd77c27cf921"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "008534bd937515981172bbddaa4b8c67"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "7dc3ce34ce645f2a799445a726c748bf"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "dea316ce8df754bdd8840ba415700447"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "ddf503d371cc48a480cb903bf30fe754"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "dc5c0cf03da8097e1a607691e78f6454"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "95f280712e25bbc51e6fb3dc70f92073"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ac6fe4d762eebbc1631c82da229e54f2"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "80eb766d56ca729161d028d05335e2e9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "5221445294e3cbba474f8d5db95adbc6"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "9fde61513c35d8048ce3eb3ac77830d0"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "765baa35db2c688c3c4727a757fa27e3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "6b913992b7f05c2c5abb03c53c0be2e5"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "c6b20cb378b28eec2052545bc66ea456"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "b6e6ca3004901540554dd1e3004a3e96"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "474c939cea384dc69e886948f7fbbb07"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "3477efb277c4d69d8c2a03b6cfc00793"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "92fdf5d3b62ec657f6183381c19d0fa8"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "2ffa16648646ff2ec40f59814500c1c5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "e1f8a1039aa4ef8612feae3c670c8f99"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "7c1e2a6967bb28aba037698ed395c17a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "9d289f8e234b1f9d75c3ffc48ddbd66f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "06f93c31a6f70aedc7cc4d5354d49e7e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "153f6794c23bab3b2d877c074c39ad30"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "54f8fde58e45a797847017174b16def7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "1b387222023401f9282e09bd9befa372"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "58ed7bf330c7bcfe7ba4f7939f394824"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "d6b299acd57631d2e2bc956b0cbdbfb3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "bca0328b75baba7a375ec460de401f92"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "089bd3d2a503552426b2231b666bb694"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "34ecbad24b3d5c58beec8ef539bd4bf1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "27db2297eccc76e2f703dcdbbff803ea"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "15f76b9bc79d307eb7510c259ee11733"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "993bbbb3da714584b30408b965f3f1dc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "9bbe1728db1a628b0443da8ec6eb3bd9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "a692cc2b025aafb5ee70243210a55d8c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "24ab812fa7ab5491039e53d3646afe9a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "3dc5f9ea9a340584be0ec1aa18870cdc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "4a40322d0d1185664e1e91153659c74d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "2bed7e1b8283fee6a660da2e3f3c7eb4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "415c6e3fdfe0dc0b9f65b0cd524efaa8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b1795559ed3318984ef8b1d10f4d1bfb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "4a653299a059ce147bce05ef1232d6a7"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "9098a4ca7c89f5938a91494a3b5974bd"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "af40d46018c0a083286547260353c582"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "8c089f2ebcc45e0e6dcb336f67ad1634"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "41b98060875a218d939042316f05f61f"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "0bd4ee3d10ca0c3c14faaf660b05110e"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "49e3103c3f90f91fbd268a0f2dda481e"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "8f3f7bc14b5ccb429df9e698fd5d7ffb"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "e3de5df2bc6ae7c4048c4c8c18f206fb"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "c4dc6a82dcffaeedbe2e8f2f03a9b523"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "5980097ad080d629270d12247d112aac"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "b00ded1dc06376445f5b5a5648bf032a"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "7ff02893c4d79547e1bbf799be844fad"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "5ba17a7915655b75e52b5c037edaa83e"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "55040396933af4e1cf78d18a9ec4daf1"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "914ef5cde95ddcef782490de980e245a"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "6787bbb8ffe75c3e00167c2070889c1a"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "2522bb11d2e44b32a5d167639b66d681"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a50b07843001063cb63358f96f509277"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "5e21091a0f05a8e08a24ad552695e8da"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "c6be65da98cbef5c75c5cdb2ef800933"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "317ed08f9027768c9670a3aa1a1a2ac6"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "c83f660a62f00546cbd66d96d720e40a"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "0eee5d3f44d35f33d92212977ba18126"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "543ce15a9686c870e0b1b32fac42e2e1"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "180e9b9c7dd080bd25cd4c9a2ab8cc8b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "86cb39c591c84a8c6d2ea4ee14553a88"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e893d57a749dd44737f5522ec0386555"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "b9ce5d5d88ec13b8058bdec99da902c1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "654511e5fe12582af16ccc711f991c4d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "c05340a434f5944153b9073a08243606"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "b800c70e3416ce0c3c5c6a6009351352"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "176562a8bc71b7832c0f0627bd87f9ca"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "67b5983754f4aa15df38962bdd88e213"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "438a611bef74e931e34f55fc8660ee52"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "3ef6a93cd4558343d197b3c9c3e48da2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "c85ac65930fa379459b4edd0eb2e9229"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "54fba9cbc6a2c548f260b461a6d54f56"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "f1395c0797fdfd93ad1394834b281485"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "8a4868646b7596f2e8220e4c42e4ebe4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "6048246947ed6b4493a62dd1bd05e6f8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "8448fc7084b5eac38b02a8abcb94e516"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "c7fd289b2863bb97fef4265d284a997a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "89cb094e86ebc93db6de5cd79dd5bc01"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "0b864caa8447e9cc5c4ae669df937e77"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "bcb8eae814738897a8534553918bb104"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "897ff5e280322bd8376ad3bf767a8c0f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "4319892155dcb2b9bc4ca7f67f39e94f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "8a0d9962b7ddcf55faf6487b64789828"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "3c38c50a5448b312dbb1e5beb3ff4297"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "0dc95c9290d7bc9cd4e8fb447293a1e4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "c83e34b2f587e99eebaf1ad22889c9b4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "3b0829f77cdd973c4f562e0776997359"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "1f887b1ebcf01870b2363c065a6cc970"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "364b3c6132195da3c6b9ac55a289e827"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "18f7a1a67da7fc5b6a59c1a540f82c6b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "f578a22b137d9d3aadf1157e0ba3437f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "ddb33205319c904ebca2bdab56826b2c"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "2c872bf089182c59698ebd3b048d789d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "a967801aedb49ee7db270b355855c90c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "f90bb21c2b8246228eeafc721d4a0be2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "5779c417e22c174c560a6c86beb9e323"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "fac142b90ee82e1bc27aa791bb414a36"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b5dc5003a4b89072785fc3a191f5347a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "ca5ee5682e077babeb6434ec33ef07b8"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "743ecff590400825a2385cc0060501ad"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "7f86e92e83562bd9a0df8f387bfa7c00"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "d8f02e9de0df9c34ed5783371f1d2f74"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "26cfcc815198c0a4daf0fb2d036a0b1e"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "c9eb5d43be7f73f69f8d9b0f36fbf7bd"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "d724bb7610a3feee4e689ab5c14daf01"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a8c3b0e2e663f47b62292ee499fbf531"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "07ad4764ac5ddd4e2b445380733c32bb"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "5c3a79f42cc1a65d8ed83afcf16cc8a7"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "1d7880be961defa797b388a0081e34e0"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "1bf4c858269cb8e1d5f7f48ed35ea7a5"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "2890c46a7751180b7296fa2387505aea"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "28d044b92230dfa7e7092ead6c2c55b0"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "26db7f2a886ebcd4ecf495d069b1b7e5"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "0e9d851f4b6096d5d57fdddd4e6f67c7"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "4ef3ad3a3286bc03fe52b9b3c85705d5"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "cce2323d5384c983f675e42222b6a6df"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "590cb9ef98233e5cbc92939c9575cfad"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "520433a7abb36a21a1e28a58750a732f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "84d3b538fd285b6c6298d52a5ba752d2"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "6c0273a7be1d7640cbdc927bdce0ca4d"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "b2ff21f61e09e884e7e9e99c35fd71cd"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "31e4e89b312bbcb62e1ef648ecf3a5ca"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "681e51ee561826690b2430de2da26031"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "cd2908490007cdc030464e4b526078ac"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "4a5087cd2cd37a10063e93367a309df6"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "8a7fee14772c4fa9c552757f76f94575"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "5b7840f292176d70aa9c29f0d328d4ad"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "b0de16ee980abea08e12749c57f58c9c"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "91b7dbbf89cc39faac575afed4874711"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e0ff6da3b9f6cfe949e89ccd79a159d0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "f0846f0a2f97228ecc178439a3b1bf0f"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "38bbd9bfa51b26cebc25f318c2826269"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "2c658f8e1cff6d9e33028c2460f3a1b7"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "4bd30cfd256e1d65d078ea68875769fa"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "9307755f925eccb9b3ad89ebd42bea09"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "2ae01b1a4df18dbcb073ad21128bf500"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "ccb1b96024a83b65dbf25a94c025d0d0"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "a6bdb1b9dd57043c591b8565a2a011a5"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "17836200b3d9b775fac67ad22f407763"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "484ef9779c67264ba58cb720f7e35059"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "77a897eb6bd1bff74289f11210ab54eb"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "34b44f6ee92d98b37a9544d09f78a492"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "e447f8f502786902ade566ecebcc52ab"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "099089adee8eaf8e60ad33471a4e5ca6"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "1e68021315dba0167e1fba4989d8484e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "15609bc07fc00d168dc29fd8820bb348"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "9b6cd0e820e861115bb346e4f4f7bdad"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "7da6817bf73ce1c99e78f068822303a7"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "9ab6c4996e38d6ce6fe5c9917cb78168"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "5e9ccc4f834630b0e8b5a816c24d05bc"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "eb8c223da7de2618a563bb6838f5f8c3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "e583834f0c3e7c939584fdd5648ad3e2"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "c643fada416ff53bda3ed0697d9fa733"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "f8f9b7c2fd8681504dbd52e2e15c00d9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "4b067784a2b0fb70576f09dce89a0943"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "160a30998188f5790cfcee0bd1f4fd8e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "19f5220054d7963f5e9727b957027f1c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "7506763cac9427850d9f3e4d0eb4d9be"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "8c7bb1a2b7222837c5ebc47cda2f8397"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "b7e86e5973f5a292ff7c468813854b1d"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "d31c77fea49b00c0440703d9e0169a0f"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "863b5b6b4cba4812f52e07d019fb1ef5"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "fcf7cf0b4fe4ab109eb6d796493cb9b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "7d01ec6e4ce31625f61e9a5a69d64246"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "f6a9344c1dbc72ec4ff464cb64878bb6"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "1b47963279082ec409d1f906d22caa46"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "59ef08c34e1205cf041be6ae391d0654"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "9f549acfc4851753696aea7b205331f4"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "66ca3711a46da51ae1016a26380b875c"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "9a97ddcd986ccb481c4ad8feeb97a10e"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "aaf0b4de0068019374b14fcc93c208d2"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "a6f5b85998754365ca6b5d46c6cbb5ab"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "68aecab01f723357c982cc1a444fbad2"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "ee436576376901289e0a00a1b6dfea43"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "bb528845b064b27f8378072e7b72f528"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "06fdf724b78fa6751643aad72a72d517"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "5fb8640c0feb1e3a958c572c241a8dfe"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "25d9c02cc3813f77e1db3b0f1a6db43d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "5f4bd3904d06ad8edc98184fefc5d2c4"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "ccb67d75f59936e15d5c2fb14a81bb61"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "9a0cbb766bb592f8d6dfa53e8e9386ac"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "9db645519ab3c39a508a82774097bfd2"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "9ef4dd7b13a845f8bd6e0efd85cf4ae9"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "e4ed13b82c874c892a442cd0e93de0ab"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "1542488233cb4b224532161f47ab3f0a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "f60ae4a4f384a9672cccc9f59f3ddae0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "79edddfaf9ec9c418b3b9f73cfe6ffba"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "a51d0eadc84cd7805cc151018186e292"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "ad002f97fe10181a9f0d5ab4dd4854b5"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "18af8f77b9175a47ae9a0f910ffadfee"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "07934f5596e6e811f9dd82a2f252468c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "fe1240af755465c1071280af73f2874c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "fcd95a5ad965d8709fb55b1be9cc801e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "35587eeabe0f3c9ed74568c698f8e312"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "136e3bca74cccf0c70609bb3c3f82bf6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "c68db95108c1da7039737db3ab714a9c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "5da2d8470ebfbd5ee14076103f694b19"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "b1ec67ab11f6774cf09290ed5863da69"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "3e06edbc892aad616c1ba5fce7c02fdb"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "69db7f8732ec666930a57a11bf9f32bb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "5fb7ba37037adac5ec087d85d6831f77"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "93357195e017c677db181d56b7ca575c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "be2bce12ae57029896bc0edbb6ce28f4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "5896225f808d5126278f498a9538b4d1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "361a09eb9b4e149ca534cbf7559d24cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "556a037d5561ff511131632f051b10b1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "6c73f3e6c2297a6209dbf3bf48764f58"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "8076d0fdeeb5939f981b6c9ec719d15e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "5907b5dab92429cad907e2dedaa5e5d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "8a0e40c322d89004573a41f146b8370d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "acba8a099283d08b805f3c5fea4565f5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "ef8c233cdf7cddf18f04edd40552b4a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "0e68e04ee3d4c328fba10c93d1ed47c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "02ccc42316e5bb3ea008378eb18e3ce3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "7527a580ee3f78127cdcd6f89368e35f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "4d153aa3e6ebcc7b7a412b75a1b9c17a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "b700bfd79f0047bb5d96ea8dc5b4706a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "31fced03103f224f3862930e60a49d53"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "d0facc3181c73fa6472e106b3980ae82"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "5eaeaf07502ddfd4e10e96ffdc6a110f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "ec5314a7701fba0e4ebf518626b54f8d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "af2025400dad243187d0387f3156015f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "9fe59741948dfee4727f08993ddd3e25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "6aa3f2c3ef65b824e3587bb6e1e5c7de"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "ad7ceba7507782307936fea5c39f3bb5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "80cd4973492ea4a29232c31ea45e751e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "273e72ec75768a76e7a27d149f28ec01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "c64d4f8e58e04da453e2234aa16722bc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "7a4746342de56f058629d0ac49a59939"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e8484155daf0be49a631a9c014088ad9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "1174f2c2bd7c22b1f6b3a18a9b9561aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "1b1b958489c3d221a79aa41c872392cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "5685ef9978de2854499f07a0321aa17d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "0850994ab07304ec2efe4f96c8e8033a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "5dae5da89a5d1395b0f5dd5cf24352d5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "676c9e448689abc8a1b217d4c4aa790c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "27d81d7345cf35970b8a764a78c2c7c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "61770a8a25d9536c257b92323432e958"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "748ba44613c96eedb8973fd709aa6a37"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "d7a0122b13f619828acfe07ea1a0d74c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "61c5b38ea390a22c8a464cbc453d0869"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "88c0fffc49c128121a340b972484aa01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "cbc8e2cb7a471d03d378653f2a1d1664"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "cbce63f08ad8cfef616d5e1787a84301"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "e3ca9b873e88b8fae012bba0460597f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "bb1d7e66713487b3ceffc89744ae73c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "05400edfda7909bb3350d69b6ac276a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "9ce68f1535a082e88978df5aca2486ec"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "61c15fd3894b543e5695a20dcf221178"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a682b0e1164694a1d5d7a2c0f5a8de69"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "32b68ca1c088a399bd831b64dae1d2b1"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "ee2db994f616af696ba869eb1d42c173"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "e5931eb2e77e1e096f6976d8ca23c132"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "70b43d7ba31f1cdc0e4d6f629d29fcbd"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "d7bfca3a0eda09ca14af8eb03d59f0c1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "76c5c8f284fe3ee0cddfa04b0ea17749"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "c1ba8064f1b9db4762ac34099c05c7ef"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "93f0b031604a961f303951e2d2407259"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "aaea37bf19ba8ccaf9e437d3ba685ce4"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "307b5e9649f399af0274db8ed162a077"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "41ea3ddc28b45eb653414d7b656fca4d"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "3a4a890fbe53b89fd1a38f0e2562ba58"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "5c30737741ab8bf50e3e05bd1b79c200"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "2fa28dbfb78bee32295f9f478e84a735"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "1ce627a219bdf1eb2ed503ce3a741a95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "2b9eed2be48894ceb3f0a24f71efdcb7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "c9468c105d2d55dd3eac19c7f49f1c4e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "b01bfa42080bda67fdf4838fda7795b9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "c0b253662c29f24d3c5a236061117707"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "87df8b9e5057cb18265280ddf6a088aa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "5567361b00766fe8546fc74abd0399a7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "c003e1a84aae541c1e4061299e4fd0d1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "c042aadb17bcc7e7e0518e26f12e9352"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "90ea3900a90f2582161353c279b4e5d1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "fb5769d548510944fb05729e940117f6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "65507f60b1f019ac019fd1ee3bcf35f3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "aeb9e92d9ef150df36213bee84e43f73"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "33c99d82affe1ada01278e1a24dba4f1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "f05cd330b6c4c4560aa74df266fcd431"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "bfc21baf59b31c3ecc44f5dc29e63bb6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "01d5a8fbf3bbc9411510672728f87f19"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "5864bab53944b89ca34924e13428e58a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "1b95d4a8fe2fcc010ff4ae47741a80c9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "992f69612050f4b3442008932409b4d6"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "7027366108351c9f1bde558c9e747a93"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "43b809a1df50a8884d55cd5808c614cc"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "1eefed523a04c81132639b4f6bdf607e"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "5a1c81f1761e598ef2c91a92535ed92a"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "281612cd2248ed132dbbb977bff2a3b8"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "1bbdee069664767a9fa94bbb79973845"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "376dc1c56260969ae5abfe65906e5f62"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "e4a11549e1610f4a5b528b58409ce2f2"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "ef8af993b0a5ce084a1d615ac14a9e41"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "9d33858e8818c24f09104f99b15178a0"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "726824ab61f97310c6d012942d40e7d2"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "4e349f9d6b52f21f513466fb648dfcc3"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "872b1e5ee8cef0c59c0d3e6714846c77"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "52c8f11436b6d767fdd6979b32da2e75"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "b03dfc45f972b3d563553033f7de0175"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "e63b334c83e716c25a5e7560ce04ab39"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "1fa171ec0475a7ba3c9689b3fd71afb3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "348facd1da9d9418fe466513b24f6153"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "fb2275b88e946ad933fdc99133ebb365"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "02d7882b58e70d1cbfbaeafe6fd617e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "7ec1ad0490da0ab992bd782b3c625536"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "ff1713f873e8240d1f183a284ce9d985"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "ec46723fa34b37bc8716f5a31e92ab24"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "c2e4d78d3f6f5fef9146a28e49a00cb4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "6143d6f4e1fa14d5a2065bcb23a43ec5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "d5ce09636d61bfc8f4ec44d7ca6d3e63"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "50fd12a9851a943620852864f11ea0dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "b49ce2c001b7fb1c3e65afdb1861f556"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "95e69cb68b541370de9fcdaaee8fd61e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "962a06546c0ae8edb0e41d013c96d119"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "a31aed9233edf7464a1f6b3cffa8f9da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "313052449aae434140b98f5a26bc9e70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "730c651ab5efafa10e21432df9ec32b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "64f1746a03bb0a176f4365d3560f6ae5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "41c96b228d6342941ef535aba768d59a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "44d5bb9c3195f150f17428a7157bfff4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "f54dea3076e5caf9cac8cef6216e516d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "b98b3ccbd5d8251e49281c74af2a0dd6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "2e79817b40dc2cacfa8e66ba2c16d306"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "5afb691cdadb8669d575c42fae391438"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "613915364bc7b62e7248f1c8d3054727"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "07dc30de28ad569130112ceac4bf401b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "d161a6207e07c8585a91a153b8bfe4dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "d0f98fd928dd0296f2e134334179aba3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "7e67351ce56e619f2a80c186fcc252f6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "b8e9b49292f196a2ec0a75bca470c4a0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "8eecccbfd287a58592dba292df960e4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "532bda2bf8ad07db6e8b951ca4fc162a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "05ae2ba1cc52a7efbf9d90982afdfed9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "ecebb742464ab6024a8500f4a0343b6d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "0449418fd858c8db5daa897c4e7c8a10"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "1ae1d14e69c03b1749eb195d888e0773"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "f721c8a1a584d29fb5e6ae958bbea44f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "5aca84dd0aa41de4febb69b98c735bcd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "9b79c922188fcaa90576965bbdb3b1b5"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "6d93b7e3973d87bed6f8d9ce487f32ec"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "bf8417f04d4d1273804915acbbef8602"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "d6c2bfdb5cb4c361ced419d4d78473ce"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "d7a270788c5d3101fbd602f870a64257"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "2cab86cf1ee58de591330fcb22c42fe5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "f6d3f21c0f775b37fbfcf4a9404c5a7b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "d581f84939c78497d210b7d718ed0405"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "fbf879a6154a31e51f5e3646ce55ee67"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "15c6c86bb57eeaed222f19f9171c3785"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "3b0f61bc1ba28cbde625a9114ca5aa2d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "632ac30be164b04d78b04404b73fc357"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "10149314df43e4e50dc95575b8510a10"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "2c99edf2d4589effb0c6f212439cb507"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "2e4466daa45277f9ad51961f89cc96e4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d5a94a132349a6ca6be866de88f9ec8b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "b54e41c8f7c29ce637640eae5c936964"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "e38a6e61a9554f5d76f9776c0c4091cb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "d08b6126178e1d9887b2433897dd3105"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "e7fddbdc68090525806d73e9c483f5de"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "1094bd306b89012108a73ab280f41971"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "14266f52e6b4a5362ad0dcf0762facb9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "134c16bf1c84d4455e9162ba22cc1155"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "b436dce434df006a11d17a6f24f95487"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "9297c59988d58b6ebdb9a51d5ecb4f95"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "6367b272d410e4186439f970afcc9a30"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "5c09710e2695b38f538310324248b91e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "302ecf0a9fb08202d5fbbbb171e0c142"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "d9f42269d8136a401bc713e173b7ce6b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "ad012dd41131530c7d81fb92bef07b56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "13432947f02bc77212d1235610dc05b5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "6116f29d7a33e7a71955695b6e7487ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "3746463adf2b352d33033681a260ceee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "8ccedbe393f25f2a25c6f1b1b26fb476"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "b2fb99cb82afc16037da0945bbe4ce36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "daeb22a4ad7ab52e25e99ca7dc70a0c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "63653e796eb0e28d72d2e4ae16a19520"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "40abb2b56ed4b16977316d8c24ed04ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "908b5c06ed2013cb67dc7c6287a86127"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "37fe8307b8de0cdf98862ed14bf497d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "d931959f7d122cd6e0fed05c13157c8b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "fef1510afce79746900d7d73e0b5d4a8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "907d833bcbada432cb5843549103c012"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "873e6f93c81e68fc622f60df3eec368a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "1191b2c909625ec734e6ae71bf9cac7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "ba1b2599b6a8703b41a4ccde846eb209"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "1532d8bbf5f424f1b2e6dea774329890"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "0613a88b7e8643ca607bcb24fbddd428"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "f1745232587175ec0448ead58938d5d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "30162cc0b7e11733315b8f746e70b2d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "1389c52eb959caba1b0bc1e06be29ad9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "ff11ab6117f2ff4d8842ce767358a5df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "a14fe36446e429b8497d12cc920f839b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "417667b36347ed103b3f443f836e175e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "f930d84b4db4baa6a43c637183515ccb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "c61c7f4d80cd5604890335be743e5933"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "156435c0d754bb7bf505dbb4d70f8f8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "51390a9ef82e14919fdb2ef4f8ae8f32"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "dbb5b370fc73eb81595d3dfc0508e748"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "f6cb7551dbd29f0c2b6f80e036509cdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "bb869e4b57c8053b8a482cd97d2920f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "366755838b63df589112ab55279a5270"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "1ed154644650837fbe93e6d13c9ccb9d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "9867190dec6872920bb49f760d68d6ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "78782d7c5e13c7ccf747fc607e16b839"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "b4aeab0ba3c9a2d2ff3b27bf788761a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "2975de6fdbc363f95bbd6004927bad07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "bec9c7d800ccc09370b2112057efa6c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "69584b891e6e59d6dbcdb68e6a60a104"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "39968ddeebd917413e64d0e2d315b5f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "6ac7e671ba864c373cca2d0f1c3a8651"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "865056986abfe836add149d7bd14c25a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "ac515f870af4da60d1ed19c145b8c56a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "5b1a9fd850bf43a141aad9b984dea4a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "41f6d1359ea80f3383da48fd6989c5fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "8ec527dbffe0991e5ac34cb90de15096"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "16bedd0a7395a4632e0914c8b8c0cce9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "5d5ba1e201dcf123c1903e63360cfcd7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "ada1f25603d034ce7eeba776654d3795"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "8a7290894f8226b7a9c8e30961190ffb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "fd0c54a1d58d8423ef655a9a3c337062"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "58884a6ffcd1072e0495a44351dc771c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "80fe6a1b99ddaad8cd509cd604759e70"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "49c3e543b12c349acfd1a3565822a611"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "ef466646aef72ee3bb0dbf0f99b9dc42"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "c8b9fedf071247dcbf433b354ccd7fd2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "3cfc12f53e96ec22aee959fd275e2141"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "f8e95319a8da362503dd8e99f856aac3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "e37de218feea093f2e72b59bdba25289"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "4af7289f513de2314ad0abc7a9d6cc7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "8b9c3a8dc1d8550fa8a481f35a564607"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "2d97dec9184968690eeaf3e0705d5a66"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "9eec13cb3b2f2ed67546bd1fd9eea0ef"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "3549902ce29b26be296216135368d825"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "e607f12dd15f94e897a23b68c1e56671"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "fa8d2fc83517187771b1ed2973e6ee7f"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "fa15ca02f53fc9031769d9b0f322aaaf"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "189301698b9019e65c6813cb7b887b9b"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "2d6dcc8370dc2e909087e4355ee7e0d8"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "e135016f2fc871db5a5c71e9caf4335f"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d4a1eca312fd5b7f216d8cab68fac30f"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "60574ec0112a359392da9fb5a7ec6d5c"
  },
  {
    "url": "categories/index.html",
    "revision": "9056bffd0da63b19b88995cfed464c08"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "04da6614a08924a919ec2c1310dfcfd8"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "065560211fe14e7cf011a9cd959c23d6"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "7e9bbc02274414dd7382f7fef70a70b0"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "9a9c4989ab5cad69e01bffde3f119873"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "30e528e81c61128d892a208e904042f8"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "3a3b308916ee681a097c7dd403a46a43"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "fce54796a1caac0228f4877bd6331c67"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "708dc05b0224ada57488e6d6f57bd184"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "cb3278cc5149a7ed20855d5610aeca43"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "68d5a19f47808c99703aeb383a74e8a0"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2f9234515c7f1013c6f18f460df02ee3"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "3c38173824fdc5ebc311e13d17cec557"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "9311ac663d24538cdce1e85120536a7d"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "87bfcaf0c233c53e49376004fddfa41c"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "57d6d89ff7df55995debd308cfc2b630"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "c1f775caf4f43ebbbb0ea1f6249d43e5"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "3c7ff396d147f3e180cd1accd0dfed36"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "c05c67d8974877d5c5bafd6f4c485c4d"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "e7c9ea0e6b0ec1b4aea2f7db307a27f7"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "ababab028650f40dc3d0355bff575bd8"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "1048e44193d42e52e07c06eecd878994"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "d7b6deda8f67fe11f9eea8cbd8e1627e"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "b4ca374806ba47200e3538f58cb34282"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "9aa7676b1e33d4db1bf014c5c6aefe39"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "ba8211683c3301dbe633a1632b76364e"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "35833e86c26f56f0a10584c6291f58a3"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "f761c6ffdd67d86a604311dd569cc978"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "79955018a348ea2073528b664192de7c"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "45bc9054e540ac18a15724c9e22a237d"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "641d134ec292d83676693f3262dbe3e3"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "2893ebddf144ebec4472192bbdc67c74"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "7321815eed9eac9848887d0b79d1e5dc"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "7dad1e7bb80557af17a6655708a32dc4"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "7f1fddcc53d9c164f3b4d43d22f657a3"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "747d89fa893588ee587643d64035ae30"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "3265d848beb287196ce47120ae2be13a"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "ed362572aa246f547b0436d4d7d67d10"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "a45346636f86ace8bc7395a458d608a3"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "2b11130c2bd0933f46362d23e21ae6ff"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "bea1f403b746cd552d90cc741b772d3b"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "055a6499d4a2d290ed00965614b589b1"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "15cb3a45cf3bec65426af0029cfc839e"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "71ce39a000126a7641057e869735a28e"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "b2770d6acb84faf413028b2a0a47ef93"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "3d6e65eaf8671bde5b46adafdf5597b5"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "9c9333648d3231fe4f10abb4632bb5c4"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "5200232920f02cc6fd81d8821461ba7e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "605573c10c2d0a6d3696a3a3307e9990"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "54fb443ebb4aa5198964d9bbf1d27f34"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "a6948def55e0c13fb7d256c2f8b90895"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "f422f8dcd14041b84568a5995a7d5d6d"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "2e9c7ffb14cbc6c7130307c511e885c6"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "081032c5804e0ceeca9ab0b0f67624d7"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "25a525edfd5acfa35b859d692b4c7128"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "9d6a5509f8c5ddc68efcc4a245de80f2"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "cb2082cf6595ed2a12c9c71a0f78ddef"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "ced81610cb7cb2a5bf36eeb4990ea3a3"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "49a1ed499505578f33d9dc7c31649327"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "27d94b11744b060198b64be2dca47aff"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "8e29ee57bacdbc202415846518649bd4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "46c76888f1f6b9d1ff26e3ac7f87cc69"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "c37999e10b966f237f76fbd86299fb4f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "518cbf26ad84b78f844e2b983cbfc090"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "0856a71237df37b95979be8a77c6f0d8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "13677bc71109ed465f11c14cf84e474a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "b2c1c3fd5ff3e5c2d20f2fa905db1d5f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "31d37521d25f99dbb0f9dd99b0458fa2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "9fd79f1c69c3c32e730c3b81d7730602"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "2e843c7b76bda04c74f016464434a02f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "23cec44feb97fc484946d1dcee1d2407"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "5256728265eca7e3fdaebc384896c47f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "8d259481f416e7af467e9816b414551d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "2517ffbfa3b8fb2edb5fdbcdbf528416"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "b8446aa7016be3cdf51cbe52235a7600"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "da26f78f7d6e8387c4ec69c082cccb35"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "cc46f4762a0bae4e8af1bd694c19c505"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "d52d3834f48b9565ae172a817fec03a3"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "023ffa206a38417dde40e02913b1160d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "5c19667642c01285cc66b6bcb8ba95c0"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "c0bd09b7c9365116d15cc04fab7b4cf2"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "0c6064ef141a3e4fddb05b034de7a26c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "a56a21c593b3c2f2e7871f5a5b57184c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "bc0bf8be6d10736bbbd70acfce5a8d22"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "8785b6ca0265748ec7985c2b9b4b8380"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "dc8b0c67e73734b2c2fe11ff7eaef432"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "be290b42cb8780364af6b3c42f68cf58"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "a1cab3315679814d7c0e7a50cc0f5a75"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "50ca8d1adf73c23fc06606616827a396"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "27e5f86be8dd176f2e0935f1c0162f5c"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "6699c0d88ca735b9a7397b5ee0a10505"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "77250da073a4477289787153eef5502b"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "b1fb56e59aa6073d1dbd8f1a228d6b41"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "39f2bea68f3a681cb3e89b12e622eb19"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "f252c3889b1287aaef2741c2f967fe54"
  },
  {
    "url": "categories/java/index.html",
    "revision": "238f7617fc7108348d240d5e99e466ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "558c67dde51ed98d7aec56601b611bd9"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "44785cc8773cc6bf64bb6bb461376b09"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e37a0feb4b80e8bb9e6596164f052276"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "b623634dee444993237b68aa84eba066"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "3227713b66611470f32e82f8b7e898bc"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "59eb644bf98d8a36c37025ded02a322b"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "18521fdcf82e4cd11ca1373a18d47349"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "66291caca8fa8bbf26cc1ccf618b4e4e"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "8b1a1ed910f9654bf1bd9ef987a4d06f"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "1949fb87f6c20b2c1127443f0f6126e8"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "ada39701d1b9476c52102662217950da"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "eed2423627fb069c5d1fe97dfae78090"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "55a45b335dce5464eb8992859d5cd748"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "50707a767dc6897444d68d837ff50a5f"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "ff9123d62e1b4ee19eda610b90e585cb"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "ae6f1bf51a5a7cecf6e86b69d08a0ac2"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c91a0488cc695b47824ac872176d4337"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "cab401d93f8b3727163ffa575fa3048e"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "297263bdac2f9d9e1f808e4c989253b4"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "2824ed64e4799b66a294d93879961f6f"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "5170c1549416db18591147c38daed26a"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "28843766eb21a889bdfab0331b6db152"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "82845ed327235d91e1a9fcd91f837709"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d98cc8203e99054e426ac44204cb72d1"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "ecfe3b16e3858fcffc9ea97c032e73ed"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "4ff0a1672ca5264f1d3118fe304ac2e4"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c2eddde5b0ff91b3209de9469df18a3e"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "690b9e08f4cb2b4d4680a1a4f2297320"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "3148fa2df0ab980a9e7647b52fac22ad"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "dbfa8a836f60a8184aa8f3f2a67ec9fc"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "f50d4c9819e4ee3ea388d0b9c3ad2581"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "2ca489ed9d2d53960f8afc007366d612"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "509b940686e88a100d6e6b07b7d7f070"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "90ec4e672e8f6c8837cdd9122c0e63a5"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "65023bdb5658fb3276ca738c8c22668c"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "c4414036d74ca98f87419a2a3fe12e63"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "60008d21d8dc221e096c6acbf700775f"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "74897d0eebb7ea0d5d4454206cf0371f"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "338c7382d10f486ac705c16237ed3807"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "b10992ec7e1f5a9d80f25174ed3f005f"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "780d51b076db6475e6629de266b06e6f"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "998ecb46b7f6b083d07378d7e8a51a33"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8f3272d75f3e4a5695c87441ca0f66db"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "d183968f2de5dff1d4be95e5fe7638fe"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "129f7494b2669ac0b4e3864f71b9805f"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "96348f30697c166b1f88ace120d7d4dc"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "c878ec078d3ea162efdccbdd4918a2e0"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "d413f8ecb15223d9eb4990f8ab3769ee"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "8a958ec79238b8205c140c3d0bea0660"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "4eb44b5ca9248d32e7c5f2f3002f9649"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "5f56a5f3d5ac3de48edde829a1301e9a"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "c778a81062d4ea952335a83308279808"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "6ad62c92b0fe3b9a1c375b8e378935da"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "54fb43252aac2011ff7e263c91816185"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "60de076e56f8238e4bdcaf3a4372dbe4"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "5fec10230aa3eaec279883507de1a68b"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "526cf624510873d84e28a5c88462b8a1"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ceefaf89243e1ee12cff71e38ae51da0"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "0b7b6a8f8262cf357a3885e24446f635"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "769c67212df2e500f69c46f520654e0c"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "4f1e9ec0bd9fa011de65e564b0bc82f6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "cfe0321718739efbbde17f1497706750"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "f5463941dc722a39680965dab7c57d3d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "72c461c1586cbf57b07061e42e0714a2"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "110fb294e55c75e34169638c10b4c62f"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "96d9f3290011bd50918906dd47a302ae"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "69d972b3cc4732fb877e348e0e3acfcd"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "67835c3dab6dc50944fbff878d44f75c"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "22d01c83b670e705b4c970027efd27ba"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "5b29fc6dc0159c81a3689ff709f7d251"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "c331cd25ef14eea3a63ea2708b4951ac"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "49723c861546c34c63b4d21dddfa91e0"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "e645b019a01c971ec2551996bab1870b"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "3f0440667a23af0b952bb68aa4e0354d"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "de63663682a6aa48551fa80ba0585ecd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b3ef34c722dec6b10777cabf47e1536a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "fb7bf1b92eb7b8bf3c228ae276786ec8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "52550376079241300cdf27d6088a8726"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "6361535fbdb5af801bb2aae49e789150"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "d799ae190bda80d0b2f1b747876f7972"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "2d3b6c63804bc6585b6c3486097214f1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "f7a7a1b1e97594c884b5f75d1c7a4023"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "02715fd76f0025930c9ce470a0753c6d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "72653c8a149be06c97cb84b8234ec7ff"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "058c67c12d1a8339863eb7414b1c099a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "fec38c2400af75ba581ec8f6488273f1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "3bdb16ebb729d58ddfeec7eee73b7583"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "909f1b3a96944b65142330a1c6961aa7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "dd98954190b824bbc48372cd5bb2ddb0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "8d3bbea4d00379c6a81425f18c31027a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "3e794f5168da2173e262029cf4937365"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "de4cfdfd535d37c5479dbb4dc2b7a29d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "e6fe0ff18e968c897dedd2cd04722c66"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "9e07f93b309b9ae0b2193097817ef15f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "4fa034e2a0c39585e20d7f6896673417"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "4d5cee5971bd525bcf765334ce4f127d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "8bafefb3ba76499f94e8343ed703cbe7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "791c420e5086e1bade79370d561f6e56"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "1b5876c4f017ef72226afd6754f6f65c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "50b783217f1d7b65dceb4e19432403a1"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "299cb684f98565519db1bedfbec0f4f2"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "e26062bb23d08e2e0467d6fcf1de68e0"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "ecf4717418e95b60b460a9328eb69c0a"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "f17040577aa781078502cf905a700433"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "2663a170c2fcf9c5bfed0ec588dd75ce"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "461fec6a203004acf1e95a18abf41fdb"
  },
  {
    "url": "categories/os/index.html",
    "revision": "6a006aeae1e83d968330bcea8c50755a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "a38915f406f986034bb38f76cc063de8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "6282539e1cf1b1de9440aa87a78ab3b5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "694b78204f497ff1493bb5c34f89f5a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "ddf51c4e0607ea6d312f1d75ec23e89f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "3a886e20699bdc70796914eae86b6f65"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "c645a52971094bd19a2a8ae2ab9f1af3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "02f631bb398d78c9bb3e8f429140593b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "9fd7af9193409bcb5a88976ce0dac010"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "54d7f0d2aa3322e89cc0e477ba24fc59"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "aea220f20102ef6835a6ce90aaee3ae0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "f31aaa8197f3c6b031dc756118c26a3d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "616e57c1ddb0c15fc68049b18b879b04"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "720a9c2ac4b304b0f3dc7adfee44e2e3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "0d32eee9e7c757e996acb560219bf70f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "7011328be89b08ab579700b531d72b87"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "eaf92e346018c4b4add6a4b9d3c013ae"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7af39d3088ab31e0f3545023a8055f7f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "becee70f19c9f537824ae3c87f4c0297"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "62634a0d10f2ede0dae5f427724115c2"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "bbe0fa5b37886195602b6d48bb6a2b1e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "b57152dd22885e0d5f8554151f120d4f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "8384c8f3631e1f1b92f69c3495b0a5ba"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e18f09102afc7485bffd022b31f45bd1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "b99176f184a53e44b317420064737736"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "94d6d4a5b62b6786086883efcc766535"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "db1077d3cdfedc3405e8934e8c952c02"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "3dce5c366c425f8be0ecef9b8b4cd874"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "39fbd7d31bb08f78fa38234222fa25b4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "3791b659ffa670e96dd97c39fb07778e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "40f37005f64757e4287188e3a9f3ba11"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "3c31e501a8ab8cc61eb26cb0d9934954"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "0d6b6ebbd218d72450c6dccea9529f6f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "5c8121cca0dd9013b1da0b7f21dd009e"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "d5c03de61a6eda38bf9475c886468df7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "c28dfe0eb3f7d9b5c66af4bad25defa7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "4a9e9622d5d52894f9b833d897f61c87"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "d0509310a72c022ec8d92c380285a913"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "85bc17faa696d19a8d9652555f0b2813"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "2d5c5e32a46d2df49e1c4ab14192f9a1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "d7714513e411a9803acc7cd1e9655464"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "8934aa83af9ea62371f14150f246df22"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "bba6079e3910564c26e50ab76ae495cb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "ff634163d793846a51fdb5e7c49b7b86"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "b91854c92d1df5892f143af2a359d8d5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "3ce9325039c3fc35d556e61cb1c7f96c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "aec14490f4dd8173a0dfbf4ed2ea81d0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "2225fca19d6ec9f50170729e7aaa07c3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "7f72257b25f89bac1ed81c432900a6a5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "781c9eb87139de731da21816d405fc3c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "df057dbf7490dce79d13dca3c1026c57"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "cea73e30f759fc71b59909c4c7f0e279"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "29ad4936ea600fa53335154cb060e590"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "7f15a0ef73ef1db4b62fb83cc2984bc2"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "92e6e4f0b0b51f6e3941a00bb9c44758"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "d0b77087f35027c4c98d51517da2cdd4"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "7ca04b74ec9f9298dd475e148768b1e8"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "ee6369c67a5a2cdf58596469415d13c2"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "ba5316fdd13c3065c661c3f00a66801f"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2a2fc9927f65ef1939c8d8f9c908eea1"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "000479e9c08be8e7e554eb6936cf750b"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "1a29c344494d9883f04f1e3c05d2a284"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "42caf11fc00c7992e0c2b3e4cf6ee07f"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "de086fa95bfea6a4d82b52181b3c83fa"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "b381372bc47fa05721eb03a2c554ea52"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "49b0325502e5483c72feb760367c42ae"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "aea774a939bcc0c6f1df7ee73dfeffea"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "76fe07ad1b4f7604b1a279357d33f2e6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "06698bbac24848902b5610848659dc6e"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "48f1e2fd1ec5808b2a5e3fa69e0092a4"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "382a2ce91b7ef5a3f71a1d9f823efa4b"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "33270234f9d1fbbd343c1f3b4afcfb7a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "3e90be02b0089c0d966ae26936a9f432"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "ddfaf4b44167f2a638c626fab60c909d"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "41313ffa7530191e128166dcd25f81bf"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "14dbb92dd909c5a4703877ece00093f2"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "66da89985c7864069e1deb02bd4aa65b"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "1dac8148f3d23546ee63b0aa114a9f26"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "66a39ca5364dd354c9be397e34fbe94e"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "514f8069eb320e3497ad78ea34c02d17"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "cbeb42b99d7b770ad3c6a63103352835"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "1d21ccdaa6062362d7d08a816de3f6ed"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "6fa7260b859330fa3cf6569e8b730514"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "7e8ca6fdb5659e61b7faca00944fbd28"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "827ee2fa7dfda16dea8dc9e4a5f23d16"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "c44822550d192c5e4b4da17bd8be9f22"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "24422abe0d688d4d23d95bf968d99d46"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "351e72c223fcaf3d8850d0f977ae29bd"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "52ce1b9529a3bd67c4f043bccbd5fadb"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "766620d664efa9df2849a20db49f5d87"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "bfbf43453df31abd6599eb93f6180122"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "49f2f4d0398bd0e5ce14d193c835080e"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "e0ce8ed82f93775d1bbd80349403d12e"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "1ade1d40ce22b0d4367daa64b1d02048"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "71767c24cc569c5427fa6aeda75cb510"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "7ad07d0dd5374f43915f33f0feb1e711"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "c22a15d451e1a52e6173ed30eccd72e9"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "2d793cb08f90d43c3484698d4727086e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "74110ec6d48be61a1aedf207d218d653"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "baeec3b08a07b22d30a6d4361a0f959a"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "72abc2c069617dba51419ee993e75b92"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "a1813411c936748edf6befb85fb0ebb6"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "241274da4c2e0545c2fb1482a51acb6b"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "deb2b5c712be0066141797eadfdd6c3f"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "1af7024fa14e3e2b0dcd2ebb6703738a"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "b75b129a8b9382275e316620c90e7ff8"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "c351d288b15977627dd91f35a4976279"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "20f5eabc652b6daeb0cf857732589e64"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "853e4b3c67fbd2a29de8a173956f9226"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "82c9a6e568b3e18afc8629334f9d3ec3"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "25c21ff1e77d22fab25a645ea23206f7"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "56a3d17eda3f77b87e3ce0d63f2c9162"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "3ae75adf877157bd08fd3d327550cba7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "74d2786790c7ad5f25a0c0e06f1dfc06"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "7d4f35087ac665a7516a7f80bec8db7d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "afdec1d87bee1d527126261f79f0897b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "ace3181262b47d13789135fa88f1a4c8"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "3662d486811307fca1edcc3a95d5d07b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "f160ff2d71106168f565c73c3b3499ff"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "40e20ef84ab13ed71d533195e2e750d3"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8cdd02793db8a31c4314b7fd20eabb44"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "4a3de11f3fdfd1657d581c154d954524"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "f65538e68cf0de7adee30b4091dad1ad"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "f3d8dea78f4e5f80b638b131f0281ad3"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "9f294a3116f5d1652640c7c0f267ad26"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "bdfe5665047147a7c0955862d626b31f"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "aaa176af478be63af03363244ee19e0d"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "13817ed125b74376292804329dcf7dbb"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "c904562229c35f8d02e11cfde9f60802"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "1bd306fe5a7ccfd236466643360f7890"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "a7583ee7985e36c190b12037077474ea"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "351cf7cdd3d1215f750895d7f93c77fc"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "b05422a3eba3c0ce4df2726833c31c9f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "a436549288c4baa3ac9dc40d03104581"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "2681be61467d876c1041fdc9b86a688e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "fcd85a3988d64d74b36df032ac12771d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "11058aaadeee653bf9730a25066aa064"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "d2a35dd5809fdabb2a6969fb3a6a5342"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "5c560f6e6d26e77a48a0d038aa536ae6"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "ec9daca20f58577e876a0eecf0a25197"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "c1a18e6be6f662400acee62cc8a9b71a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "a816310586184731cf43c1329d28f8b4"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "f91c77b40979fe7c4da2a1e08c871719"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "1229e11c9eb200e73756ca810c4ca960"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "21b61c1b6de68929a4fa186b119c24c8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "a7d3c9ffcbb2258368e40ade6c2099f6"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "c38254298543d9655a330cf42cb63aa3"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "5ab804625779746770e2875d83418635"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "c0ac872dfa10d50fc2b03e35c5ebd001"
  },
  {
    "url": "categories/php/index.html",
    "revision": "6fdc2940d14f1535b236a99e45532dd4"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "4c353fa27c8a35033bbefd523e0d3745"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "728c6cdeb59907f532c7afdfd18e4d4d"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "18931977bfff55806d2439ba274fd6b2"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "f49081279937cfa688f4b00617790ef4"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "b39db6b2981c27df25e712a5ed8887cf"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "10d3588ca7a069f48a67459d5ae6cf65"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "8f9946ff21da48c96841e86a92af9750"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "236de55bcbbcf824f1cf871f4051b774"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "676d86f1d68731ceaa32fec2c56fdc9a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "5da460f210486c8c57f84f03077027ae"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "b09aa453b93535b026d5c6527a8c828c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "8faf0d5551cf22169e7de4b931d9b2d3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "ae7e10861ee7ec069fe18c50fa88b27b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "89472ac42b354d6078712173c108c57a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "e7dab2940d9ebde8f86e7c1c3ba4c5f0"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "3f763ba86283321da6cdada4cb3aee92"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "15b559af5a4044151b1c4fef2e55526c"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "ce86847bd0bcb3ec3f2867a8620215dd"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "2431f9769ae017e2224bef07630f2aec"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "3b90e434f3cc67f398b8c8cdb2466ad3"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "8be53dade988c6c884142ed16623fdcb"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "291aaac4824e41f4dc76dc173f0cc9bd"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "b9c473d04663734005b88929b67d9389"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "616f7c8edbc5120ec1a50aab17c9f95f"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "4072268865fd0971e775b93cdf6ba884"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "c54a91dd0454cc69f65ce30e07230803"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "7c5d656f343eff396f37a9d6dd48f490"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "495b114c524239ea1575ec8489f15939"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "b1f5d8b25285e86f006182cf7333d9f6"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "36cee7a68f22ba4536bacc8e6a040b76"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "eec2c6bbfab41c43ab84d72ca9c0c5af"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "7438d030ec09862932e0ef95976e709b"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "2352f22fa5ebdec3fee6f8d9d9d2ddce"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "63bd2521879ab90f98b6408d2798a84f"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "fb00228b6eafcd97bdd33a7ac360e9fc"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "aa4a4d962e1bdfd2bd7811511e9a514a"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "f1fb807d3dbef82c479b339f527a5e57"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "331a03a0f377bfe120ff4e42d73aea53"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "7cb80e1abdee88be87e97a6b4f45d4bc"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "83f80fd242cdd4ad2f26d0d9f1cf5aa0"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "c54981bc73c24c18774ed6ffeb976d4f"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "91dec63c2bf3f544557f40855127cea4"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "d134646caa80d23b56c0572f7cb55bad"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "6f9db71348e6cfb7eb340b8ea2f4874c"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "a097ebd64c661b78c564c7e8668b5faa"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "ba0baccfb4626aa04edc8d173838be20"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "44b8a2c3e883220954730f75840dac5f"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "e90e8b121498c5540a45ff6adef3645e"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "5e2dde4a60327d571744ac1671da0170"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "8bcd8878ce0afe1c0d5520bca80955ee"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "b8e8f741cbea537cd248489f806773e6"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "5cee5e62a599db7f68d2ea9d17523192"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7c4a13b560b790a1088510d5822d0265"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "b99e0854797a6f77ae061201e25f8688"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "f4e910ff59e1162f712f9814715b0ab0"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "9cb37e30a6065d4e15e02747201e319b"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "b3d6be52e1e62072ae8b56ec919dc4ad"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "5d893877ddac531f8b8d8990b94ee2e3"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "c7e04be759bfb13e34f0506b4153e664"
  },
  {
    "url": "categories/python/index.html",
    "revision": "95f5952371fafd39fd632dde5b334e8d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "d995ace0dc3a9bc7302dfe13d07a18f7"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "0156dc935c0806bd708f9612417ae3c5"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "ecda747415b21cf1ad241000275d06e0"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "e5c19d6b53fd52121f489f4a67156f36"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "e1a3274b4c2e83521ba30b67944b13de"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "29eac7a1bf23db9e9c5f4ab90373142c"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "5d0733b7812afe2113b9929994acc9ac"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "aa75866bff7dadf552e871d4575936ec"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "1386d3bfb4a49bc2fc78329ae25c8847"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "e62ce5cfbe298874c53ab26789fbf2b3"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "48fedb35d65023924945f271f160cd07"
  },
  {
    "url": "categories/system/index.html",
    "revision": "43e0fa78efdaab6fc99fd0c793d8fa3f"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "49a148167280bdff2713ef98bca51e65"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "e4e94ce8368cd027feb4d2dbbda6946a"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "8368c680f1fa6c30377f6b49369b0a78"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "28a8ef1e748567b6ad513c0da8ea1df5"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "f150b479aad816958d12a22ce8af6a8c"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "a9d276208c044b5264498bdd47e43b71"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "ff5d1edbe2633a9053af069a78d59db7"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "b72dc433646340a7299d187c36b7d40a"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "8a760483e827abb25030b724fb3f4ed0"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "b3b8915ad832160c6771f1434f7041df"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "4cd713fc28d4994b5412f7203ec46131"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "6803fdf692c27e407ad7471cdeeb13a2"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "6c072270a5657e44ead629f7539536c6"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "2ca5a5b0342c217e38fabb83b8597bd7"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "8d91fd8fe52d55a7a32f2e96fe489dc4"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "5e776dde69bca12e25712ab880f9cc66"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "5effd34835c30f03fdc42438b8be93ee"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "1cfe21d7c838a036c02544dd076bdc77"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "82fbbb41375379f1f771de3740d821e5"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "e078c2a69c6ae24a8f0e7ad7d8d136b7"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "694eb0a33d8cdf227c76b88c52b8296a"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "e683817f88f54bb3be10b24dbe97e9fa"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "4baf05766f2a03983af7e66ca7b7e2cb"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "1a8c3aee94b8d22c9990f0efb9ae71fe"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "5dac6a85e7e9644df71995f188ae3bd9"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "088f4a31733bf0d7afd9ef6b219448d4"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "41fdc1f3e51d17cff8d10293ff382a6c"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "3ec328175b233659a5baa436c2bd22b3"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "9a659bf640f0803eec8963ccb814a195"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "3be9acbbc27ee872611a9e2326ea6367"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "54cbcfe7c095684383fbd00073d4e99d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "6527702ba7f3567e76dd3aa80e74f0cd"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "19f5f2f876a10a261e815d08e4cccba8"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "81f06b4ed66688e50c4ea0ce7e0d81c2"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "ea7a7c4ca63c5ffad6b50d970ee0733e"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "45a936d9c9defd0f41761eead31e5395"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "a0dea11fad5ed88e941644ec964d4831"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "903ed93b6610e6307eb9727f571f2756"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "7a3c909bf91a40c039d879cf997a41fa"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "772268464fe550cd876e235b0532cd58"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "2d5d15f0354c61369cd70452caaf85aa"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "548ffaeef30bfcdc3302a6bd636deaee"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "5d1501c9460e73c7b89c3de0df30e98c"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "30038cd8c7b1ca4d903f3b6a410b40da"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "41fa3cbd5cc413b9190ea2326759c85c"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "8f0516878ec364f26ffdea86453c5516"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "7234012a37d9ffafab08e12362f51ccb"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "233dea6b38ee6845afba2b310988209e"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "c787a1cccb0f019ce2a6e35280424b99"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "58235c7244f1916eaf4ce5098a5e7208"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "70b0327fc4835758ef7d7cb414b62d2f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "eaf1cb6abc1d10cf62b2ebacd5c96525"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "8ebc58a1b25879591ad4461cb150cac0"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "074b46ed9185b78f4d7818bce1b4c1d3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "2d567e1b3f3391a1406d55d88ba6d3a4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "67fc71e1d01d1a5da345a023cd08cc23"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "145908760086a9e6b5722509615b740d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "63133a9870dbd0c6c80f7760720319de"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "75eaba21a0fa916c37b04327c4a0a8a2"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d5371dcc452faaf781da05d43b2109b8"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "dc39dab04a783880cb9034f8b08590bf"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "a7fb61908fa9e702bc7ac064000a4a18"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "fa1a519c6a683587e9013af62556e7ff"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "b9701fa14d12dd62330c9f98841458e7"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "3730e15b249d5429b343a3f58c6b5a51"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "4a337fcf3f4bb773772d6907712ea3ef"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "3a1d815cf44ae854ba292b51a387ad0c"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "cd258cbc2f2a071cf49ff66028fa9e68"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "f2ef5c1a705433653423bab50b454db4"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "d4dec2c2250f7f877e483f9379fe1354"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e787ee8fca5c8745206c7db8b147d80e"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "3a75f76650537509851415805d361842"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "a4387352348de619b832c4037bf9f56b"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "d4750532dfe5a58d10161f8351efffff"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "0e4c98602427e135db4ed9b856b6b136"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "3a7914b93bffb62998a691f176aeb487"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "9e45c42d95e58c7d9f3d83443db914c1"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "d6e121e47bf90b6e8e6417af8c597f3c"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "0bcec6624ace9a2b678d919b723c7acc"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "c1c0a7ea69752d971cc954583c3cde6b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "e736e3035822202caf967a52d4339fc9"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6576aa2db0b3bb4e76579dd825e153e7"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d6e0685fc32ec7e30288e3926b427862"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "ca95e85c2ef2f5ebb85c46a832319c27"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b1daf5e27cc2e8cf38efc52f55d5f7e8"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "75d418eb830b8ad1cafee90e23919759"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "22d9a39664362aaf32dfcfe694e031eb"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "31727485857ef285e01e2806a9878c33"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "09cd335aa8926b07f1272f5b09245498"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "2b87cc7f56d36e419c089fd6d434879d"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2b307c45cc1441fbf65159dc09bb4d18"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "b561eed030ea4b5e5e954982291cf00b"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "62040b3bd594fc1cd405007c798d91be"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "2242d454fd69b9c2d5fb660c0c74dbbb"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "42cd72f1b2bfc30b3d931a11c9ea5d69"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "19c32c95ea443b34a1a81efb464369c3"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "8bced0aeabd5d73d686ee69f8893dcbe"
  },
  {
    "url": "favorite/index.html",
    "revision": "21ee706a2551a222f52f4d1b9deae430"
  },
  {
    "url": "index.html",
    "revision": "11f32c0fab9c59ed8e0dd913df649c99"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "c9fc1be492c599316560a68929b75bfe"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "7e26829b0295314773da5d51be072ac0"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "133f1e91191712815666b6489a6564be"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "d6e1f8ae83c1af4542d47035a1f3e5b6"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "0a03bd457bf90f4dfda2341d86692ca2"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "52e069733732a9e22c02ef03ada02eb5"
  },
  {
    "url": "note/index.html",
    "revision": "b4d95b8ea9975ed24606315466a3ae9c"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "034c8f9d65943186f7780868a2488716"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "0bce992f4f2fed337b5905e8358a40a1"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "384a8595e5781f55fb582b2dbe1a5ae2"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "bd7a29057cb2804330b39ea898658628"
  },
  {
    "url": "share/index.html",
    "revision": "2e8436cf3e700e79dcabb0dece9ca71d"
  },
  {
    "url": "single/about_me.html",
    "revision": "aa8bd28b11cfc4f5ea0f12156c14808e"
  },
  {
    "url": "single/all_article.html",
    "revision": "044dc6c09cc6931010203f261746b3bd"
  },
  {
    "url": "single/welcome.html",
    "revision": "3bb87a34024ced05d71c7eef97d76401"
  },
  {
    "url": "test/index.html",
    "revision": "579f57951fcb763e7399c0dc2cace7e7"
  },
  {
    "url": "test/test.html",
    "revision": "9eae1a785aba2d1dc65b77e976dcae9d"
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
