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
    "revision": "8ddb46d327cbf88ae74e4e4420208736"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "b1a4634f734fa6992e8d8ab96f87af9d"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "015c5ada878a66b1f99e4be369899a71"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "c4e42d07eb5a634151dae2f76e8828ce"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "b25a3417cf7977be08b72f81f0b64d98"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "86d49eeb5247dae3b215c4df330e9e85"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4ba04725df4b9f5ea53ec8b08d594b5c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "d1c9615b6f8498c719f30650b81d932e"
  },
  {
    "url": "articles/index.html",
    "revision": "83aeff978db13a9e3afca52e19270c99"
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
    "url": "assets/js/1.37c6db61.js",
    "revision": "1125af33692246baf46caf83a167da92"
  },
  {
    "url": "assets/js/10.c6697a83.js",
    "revision": "1fed58a9886dc54d2ed03129e6fe7dbb"
  },
  {
    "url": "assets/js/11.30d0fb14.js",
    "revision": "5fe4a2c4bdd6e4a0be1104350505c3a5"
  },
  {
    "url": "assets/js/12.35383a99.js",
    "revision": "ae2f0290b2eebc584625b942e6c7e7ea"
  },
  {
    "url": "assets/js/13.cab284ca.js",
    "revision": "89cf1d329cdf4bcb3aae175f52679b3d"
  },
  {
    "url": "assets/js/14.aa206105.js",
    "revision": "72d611cdff503370fe9774969b4ea53b"
  },
  {
    "url": "assets/js/15.200ab00a.js",
    "revision": "8087b45a49c09c0f592c08e68d13978e"
  },
  {
    "url": "assets/js/2.7aea6445.js",
    "revision": "e673ed9bcc1103ea1c44bb7e1338473d"
  },
  {
    "url": "assets/js/5.7338e90f.js",
    "revision": "7dbccd4f13d41d7439ca8e164033e2b1"
  },
  {
    "url": "assets/js/6.72a95c93.js",
    "revision": "2d4bb54edf953e174dbd2208dd44f321"
  },
  {
    "url": "assets/js/7.d933d206.js",
    "revision": "21c116d636217b50e744c916022ce48e"
  },
  {
    "url": "assets/js/8.1725ddb3.js",
    "revision": "64af6db24267ae9b02a49c77ccac8d77"
  },
  {
    "url": "assets/js/9.3482dedb.js",
    "revision": "efb6efd143a4a264e78500d862faf8d4"
  },
  {
    "url": "assets/js/vendors~docsearch.d06a8798.js",
    "revision": "092206e2aec37366f14247ec05997b4f"
  },
  {
    "url": "blog/index.html",
    "revision": "408279fe8068b75c3c682f52628f7116"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "6908f0aa646fcea3c9923adfb599454f"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "ec1bc27c01360df513a3a819f3d0e1b8"
  },
  {
    "url": "books/index.html",
    "revision": "086c0f2c7b27d1716ecca939f9880a28"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "3eeb3f6db5c2de799e8112d7df1b986f"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "fb0987862d6fa00735fdbf837b492278"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "0893f48e1349531db2ceb2a9bd18e832"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "97fc6adf482ab8afd921aeb440a1a25f"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "c70c5f870097b3c8682046690435af7b"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "1bd560f28700bd4f5dd832e38dca8c3d"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "e6e377872e33f1eae8a68abf4cd0f8f4"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "7f8901825c132408fc37f8d40a6809b9"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "2d3058de06cb4c45efa0394d9b47ab01"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "5bcaccfd80369d94b231cf026d0ba8ac"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "8e19c2add963b511c56fa96aa3cb1a43"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "28e93c6d2110c4430926104897edbf15"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "93e5100855be8e708f10642f2d8d9281"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "b2f7837ea30c351fcc1a8d0d04ca25bb"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ee9d351eb2a2a4b75c668511fed34947"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "fb56cf65bafefd36a697007975b5a6c5"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "6637a7fc0cffef9fd7d7c0f9893148e9"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "995f38f33590ff764e4bf84b9dbd26f8"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "34a8b40da82c22a47436041aa99e256b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "e7500fe58f44961e1eb404cd7080f831"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "aa8e9048b002bbab770b3fe236ebca7a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "b89bee66eaf0dce74358ad30e9ed078c"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "9fa0f0119ca81dee90de01994fca4963"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "875104cd8da66e0496e6a162f108884f"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "c399396a1e139efcad211db89b04af83"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "1dd2d0c78c7961bd44211ec8cbee6baf"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "95a09bf1ffd38b19d103c5add6c95134"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "2c1bf305a6e7041b54ff5c1989736435"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "3a9b07b9360b3714cb6cfb4a45bee3d2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "bd22a71b541698c7566f5ebf2bf87196"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "b68e47945934a8750093b5e6b6666b98"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "d6d2ca2cd8b80ffd99fa7f79c56bfb3c"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f3d6affa6bbfb5b1fe8c1e117164fe5a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "cb3de028f0d3ae0c545d4dd9857a4752"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "377920105ddba5dc699ac972877a1140"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "56bbeaadce701bb15c00df55ddd66f68"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "b24119952b778817b647ea63a05c3b85"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b87105f2d495e1033f0b408ed50c727a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "2bfe1ed7c003828a6e051207df4aa89b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "e92993bd49af287368296f86de64c474"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ef9603d5f5933c6e7d9b437324f73269"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "f3215aa061915ca38efc9637314dcd0f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "2b62e213c6dd7ad845396590d5bfbc6d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "c523a7c3aa3e803bf8b72e3bcf92a72f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0cda4d660ec42ee44d8e7bf600836659"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4b388fbf06159caf6aba14c864f3a2f0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "d99334b90a90583f03801ec0d2934ea5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "d0fed8d7cc54e4cb5658f47a66fc475e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "e3c6ec382aee5f543956167c6cb51886"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "a7a06b98db14ed979d8d21a79ac27d85"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "8eb8c9473ed4a68f21a28bab77388d98"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "a795b7a5f0e8ff25b60f28356435081d"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "8da68a3554a8d92171f1d2da80e51b60"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "af3032e0064d0f01b52ef2c5d9223d01"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "8d7938ba4cbb82f2479750aeaece3771"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "20afbb0650aebb087c76415689a3b612"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "9c24de4814f775e8ed876b1d6aded39a"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e4ef15ce599e6e74976f4b45a226eef7"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "041cef90c0190ff82ab038c5e15965ca"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "fe67da500f3e475fe35c93f3a3356513"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "fdcf96b644292e6ad462b8db578fb35e"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "0743a676e8d88cf9305fed19eb4db2d6"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "a488bd4711e973741f3016cebf12d140"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "0a80f661f73ba8f06b2e0586619530d0"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "359f82b3f7d8039fddf0477e725b26ec"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "acd03ade279d8ee0fe43cd40d4f0b2f8"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "458738e70645d8d7584e47cea2d9684c"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "fad1ff704fece2494f515c9e7b779f8a"
  },
  {
    "url": "categories/database/index.html",
    "revision": "1bb528030b15c82e158f5bd1d32df64d"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "f5613837ca3be8e79f78f8a3725cdd42"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "fa4ad8af655e2e185e8df334d10aeeaf"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "55bb61c19fb29c684c6312797ce3bc66"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "687a39669a6a6cac24b4c9a333c73fd9"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "cee2c0a01d5b18725a01ab6f1db425af"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "712948b80e59bb5e08fb656645e0907b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "edfda606c3f6eabb7fa2cfe6de6b6c83"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "3ffd18d1dc13cb870ce7ee63c428ef19"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "343abf8dc18a1ee4ccbd1d3a90ce984d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "8c1742a38c597616ec9c075916bb3c95"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "fc87c7adbb3b98a36e7fd804b78e5f80"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d8243721105c609902269776252d65db"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "1c84725f5ce1914d35c72ff585ca50a5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "645a526d60be42eb904373259c73dcb1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "d51f48b6c2c6be86e0cc7933981d8e80"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "59bd334f7a6e6b8e485ab40a451d87b4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "cb27e46c2f66ae6ed02c8ca207fe7034"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "52c4f044885f309975f44f719e3f923f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "9f34097a834a5a90795a0f8614cddc57"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "8bd9d78f420c669e9e1598b707eb974f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "422da6cc6a2f5ffb7d539b43416bff62"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "1f0e2ce95c65e51f6ab73edc65bb9dd5"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "24bd1e12b7e68c7fe68909221ab4be13"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "275c24fedc4e4c275ad97d16c3b53d39"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "8ce32170ad3b7ecc7c2dae2cbb05173e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "3440421cc494fc4bf1ca9b5db5df539d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "cf3998e1c39714f66729a0894d6bff1a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "4f7b0973b85969cc940fc3cd8cecafd9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "e1b6d8d0b5d0b1c479f2b8b283bb49ea"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "3a68d5e726cfb93ad7bd01cda2153104"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "31b42606a464adcf5e6b71ef8f8fa1bf"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "74a30e98e02a38eb65318365f4a38384"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "43a811c4e48b27a517706bb95ce70fd3"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "1f4e560deafea11107b4f614d57cd723"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a1b41afbaf6933d78e2fecbde6d93209"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "730178eaacd2c4fc48f34859f00aa205"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "3463f72d5ec7234e865437ece2417f09"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "6cbd06e1aec8c61c6dfcf1eef0fafbfc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "cf3230a650916808bf8240a34ac68438"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "54d890dbb902f06484ba38d28155eb22"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "b5b4b8f6645c2d9af51dbaf29a3f0b94"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "bbf28fa87fbc6464c1a1a34174577d0a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "e5881f6042db886b9b45c01a957972dd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "048d68eb348faeb932bc869268ff7d45"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b6877db4f99acc8b244991ed0b90113d"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "0e7e1a3f8a64a9b16a4f483abd32e532"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "09df379b52d7b1d9ee7a31be0ac11680"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "2c10104dd9418fd9da4c392311550ae8"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "ac0725b7fee4a2c976d130826a06b4ca"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "4dc21e4206cfb43a9891ea1c8b3b0bf9"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "7fe27a437e52150477c60ce7dbf5f59b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "6179cc01780992dcb6c4bd0443229317"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "9e3ddaa45cd2368a7305d0162df63fe7"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "ecdfc3a382705f24f7daa4a67cf562df"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "1e01cb8e051d7d4c6b54972de58087e2"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "6a5c1171b5e3b0ad4dbcf1da1ceb2bd1"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "f4a0e49b95840406c57465d37ee18705"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "5afba178e10ec1245b95733d37b497f3"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "ed208c0b454fc8cd4505e77dfc028dab"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "82903aa6e37cf32276109599539d2997"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "be93458374a124d56dd591ea85987a3c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "8cb169d9ade86853a7e2814094db5c01"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "285fb99d1ed002c2bdf04d5ae0c64499"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "0e5aa917f1ab600f009e087d0da02055"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "b06d78063424eb5d90361e8fe0fa2180"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "578f919bed1b1bf92df8588e1d47cfc3"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "8eec9aefa59cc879228eb13692aa282e"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "2cff301715e4c7672e8bf48d0406aeab"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "e7b79ee551ae63492fbe9004ebe16458"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "b6fdcc82a53f4cea1ba433ee1563f13a"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "5a402d5ec553e7f1d027a5e88082dad0"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "2909ffe112f26b4cc71ea0ee8949b21c"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "e5523357d6223b7f627c2ca811b0daf5"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "b92abda7e2be6fa575285c404dacaf3c"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "bbdac15434ecca34e2e0aba63a06bbde"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8b21205ef01d9c692b306733e02d3131"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "4d761d342d911e155801793a2cad6d0f"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "025b1bef6e73f864a713d6626d17451f"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "cf863bda86d953dd948897a73abe27e7"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "5052a82979dceea71b7ab1901a98d931"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "c6c320c0543890b97358cef50b6c487b"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "808da9ed373800d76d4f81107635eaf4"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "3945b5b71e46b287cc899ec94314df63"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "102fe3e4d732bfa20e50e33b0f406bac"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "0b0830dc18f895cd0db62e7a20bb8f1b"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "b7f21d0fd682cdccef644d19d1b4f510"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "27cbec43a7a8a7be9d1e7b42e485a853"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "0fc59d214a56caa7d50607987520da86"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "c30729dafd23527eeef64ea320fe4f27"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "3e8fd004681a30d7015647e478992fe0"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "becf307892fc1f1c604c1ccbce5773d0"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "6a9460e4b8b0cbce58f7efbdd4c0b98c"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "28edfef0612a650cb9a2dae03377b8e8"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "1c2634690f0197f3e175d47651f884db"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "7bf278c236f3e5a5e267393b6d5655cc"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "69c4ef9c08f6ace0458718240fae6f5d"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "0c5308d53200aa67471fa283238c1419"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "4da4209f11483a25a29d7bf167b4b847"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "c0852ed97fdef406b766ba29a31ade52"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "40857f8d642ccc34c207cc2cce3cbb98"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "731321e5bf6d7c780dd128bee1b23a6a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "468fe1b9a2522cd5efa87ad324e4871b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "9996fa57b401d9d9ad6666ceb0a7555b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "8e70546d2e8a40eaf9f1b32cf7816fbe"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "1672821603960e78e1f1ea25a5bd222f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "460fcf5dd8e14d92391a64f889e452ba"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "f78bf1ead194cdadd50e53b3b08a9243"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "9d159edb602dfda7eb004a477b8eee4b"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "d5cf8dd49fa7899af60021ce7d0e83a4"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "94af69bd5035caf64dd05cb367708acc"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "1793bdb885c3472c58d1efa04eb0086c"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "90c0c6eaf43d2204b3a29bd80cc25455"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "3539daf7d8969b72cda5107b27865ad2"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "962e2800492ac0e1e3f38d2fda619d1f"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "8c9b2923c9466393c6c653688d7e0c8a"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "35bfd7f54609a454308df6a01b51e879"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "2aff1793c48896b4083f6fc683b5a2d2"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "7f91e0f1a1650d4e875b9e10d99d7cf2"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "86aafc002cbe7efc94132f27e0c5dd3b"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "9b64ac4ab4b6ca304e997a685a2e5f20"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "49e2bf7d70a3e01f9bc87665d8b5ce42"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "722c1278e289e6b27a2caaafc1184335"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "7f8cfbe00fcb7899b6f5602620fd7496"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "315723bf194be59096ee0d3f19df9e34"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "aca9fdd62a6041f43353c886593445a3"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "7f3789701886844f25f84dc215a43dd3"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "16e00169ab53c0c9a01d2966a8367c38"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "fb97ff5ab3ce0cda2a0afd5059d29cd0"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "7eba26e4a11b339cf599adb9835a55fd"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "7ee2fa36aa3db0112ed77d8a50c77a00"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "5f51817ad4205b0438ba6b4715dbaf8b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "1e9a88186fd48e8bf3ff8ae0a67d15a6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "cdfcb3adfac1eddf12f8dc38cd3c02f3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "345c734483f2f1375e087e0df8170a04"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "45db53a8ef384c2828c1b42993b42612"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "d01ef9b9d8ec2f2606508b38c2b3cdae"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "76a0d171af18a8cd68e27c5939913e21"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "0b014fa559e349a1eb748e00a22743d7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "233fd32577e79603067ca670ffb3ce11"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "cb9c83484b9dc8f32419cf89419d9cb1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "d873128db276ad308e251267a8ff2f6b"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "baa7089d18ea7f98141767a1ba3a3638"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "dee63a6188e939180079bd0e7f502b47"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "de214cedc1b9f3d071813085d60daeae"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "dec8a4fac5058ce6eebff97881ecfe74"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "3e95a56a74828afc4fdd5a36273cde74"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "937b10a6555c8ab1b63103d51465a03c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "bcb379f278804b99d73692ac4a205fe2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "5c403bf08131ed18dd65599182d8725d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "acaec9f651aa39a2b772c06d89ae7101"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "4f66c120c5bd3774f6437fd96353f69b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "298d84b1a9a6abd22a5f7728ef23a4a2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "e94b0c9ef4e3b2c560980d0c89fad1ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "bad9ef2fb0e167ba0d5242a87612aa4f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "6f7c44fec86ba3603d701b97861754c0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "59013a79bcc3894ce28feb1ea50e3ef3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "3cb0339eef2087e2e91ea4db34a72c01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "db6c3db801213165d4eb945f03cda1bb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "1a03555cd2e065eef6a32c63869865c9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "a3e15115188a54de878838830d5f2267"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "f037225f162ea76b87e155a142deb0f8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "62cddee4d360e568329c2b6bd0f52da2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "c05d925582c65749e929a8616813638e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2b8022e901b5fedb8c13c09810ebc119"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "b0c822a7fcda4ead2bc127e101f6bfa7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "db2806108bff5e937509c05eb1cbd68c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "347ac83bc8505b269ffd17dc8cd47cfc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "c7a699fd88ae2db06b26494a253740a7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "fdcabe40d18cc48fe84fb9144aa4060d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "3d3db912d97955695308cfe8b7516881"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "5874ac1ba7fe642caaec60b3788e966d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "6cd6d5d8b7637cb0f5e121d6d8c61a20"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "bd180e05f86d10c30228eec0a1bc2d74"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "77ab39f4f58384f66a96940c59d7fa34"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "ee5040d49969af906e8c02a2b883741b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "fcc913eaac342f71d381f8c28126456b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "ff7b8fc34102247ac968bdeb7c581dad"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "53b926729ec660e360398a0d44dd6ea7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "07c2eedefcb1b05923c56d66a7b4e8b9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "f6bfe4db320fd4d235c2a3b0d81a6266"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "842b729b53ea069123e90a22c2df76e5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "57f5cc3ad4a8ac83d5157363a62d9088"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "a09ff94144ac1f721c520d8db2968930"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "d893f126ae86372636837f511283c878"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "3d17ae0afdf1116c887e7bc0ca9442a8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "6257af283c045946bae079320c3f260b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "9f56f1345c5d4253124d9813fe68a434"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "c5f514e3dbe3d4fe969453728076f640"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "074da5aff01211043ddca9847300443f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "a04cbff8d16c8758e42ff5b53f6ff67a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "f33b939cd14bd72be4d40946b7af2a87"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "f44757ba289cd4656854cbe2ac9745b0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "ade9c5c0d0f540377e2b1c13ee0ea506"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "348af5893ec67a55bc40171860dd01fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "7bc6460e8b5f7a33b620786307d348c8"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "02b05dd58ac4bc6c81e2f5a70314f9c0"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "cc1065a298d6b48bdd90bb021b495044"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "0aa45d483687413a0e7d0c8a3bcf9bba"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "d0cc89c65a96fd0441e478142a98353d"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "3319e4a004733eabf3d0931afe670e03"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "725a07e08672e92fc557982447897a4b"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "2d440a8a4d0b17d4e6197eecdcf95ec2"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "7857f5082d7dba4eb4a7ed8f1cbd2d6a"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "a8a1afed8ccf0a8f743ed5d9888e63c4"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "594edc168022e3d6cface71f91217345"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "d27eddd54c5504ca05160bab3b3c49c3"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "21a6d190067bd4405977687647dfda01"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "41a5139a708363d50182013017ba26d1"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "acec433623ea0240916956f52b11c768"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "0acc9332d2f4751394da7708571bd52f"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "8ef87b35fa404bffd92eb3047046764f"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "cea3f25309c03c3c673ef87b4a64c440"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "fccd7552e2612f4fc6d9bda353272bd9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "69032ac4c4bbbf3faa223ff241e882c1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "9c89d3f254b395488ca85f29174b17d6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "2d2154c7128ebb356ca45c893644a348"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "681272ae1f54ebbf6cf71d6c455fe6bc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "a96d3e097b1af4e2bd8d71371a4c1eaf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "a86639ed6f8172f02cc6055f83e3695c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "d3e5430fe58ea0872268e3e8fb692169"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "b35d3f5c00d86966a7f42c6d56057db4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "c0290f69924bded591f0ad78c00aa5d5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "0ed891107cc21ade7444a6009600229c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "8e2280ba5792f46873a5b1b73219508d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "8509fc1161dabe91ff56e92b56713583"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "d03d409aa824551a155bec9e051f373a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "f585712e0fedd0ec9bc610e1cb8c0a29"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "124e92506da39f158a493a5a524e6bee"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "b7053f5c3d631e26b3a6357a60facf84"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "c4b18294b834298a549766e828a1a1b9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "a6a01861fcb3fc7b3f8e566b32c45319"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "497103ab48b35b1e8115f159e7b9c682"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "c08fd2bdfe60ff631ba7675fed68ce1c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "7c82263c3ffb8159ab80f4d438327c19"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "8c0498c4c94514fe57faec196c8f5af6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "71c500d2f528fb7ea4b410f56619b55d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "394d49af39a0d5a5102b57d1815e6fbd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "63287762df30a11265bd425836265abc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "7c018260710a4e0165740e24f34eac3f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "79dc63fa1b7a7126e9924388f3b8bd50"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "5e7c2f4df355f3dcd38872c3f2e785f5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "9cff83bbac8bce6d678bdcaf7196055f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "52bba6809226e71f65f70aba222314cd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "2deba80e785b4e8180cc518283b39853"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "7b7ee5e220873af35f7610ee6d18e078"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "07144ca78796e4d8ac356c90b4c4abd8"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "eecbf2639ea17562b30fa94f48e88974"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "73ef42022fbb5c451ff7ff1199214739"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3cc028bffe8866a1a69163946661e00c"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "9223bea1366d69736675b4cde1a3b636"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "071f4788ac27278580ab1f85d0ca89a0"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "ecb4aee59ef09bb7c4cb298959b82b06"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "a8ce956a222d0447e768d7fb66251324"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "c0a883ff7433715cdd8ea2c584675ff5"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "1327028258794e0816e79055f955497f"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "45ce4e35afed08e00c38714c2bd8331b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "c7728bbe9ea262cb580b91f2a205ca55"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "e50dbed15772663292163d4760f2606f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "a7afd2adc1148b54e850d96a2edc77e1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "840a52cfc6f91f2a4146e2cd245eb250"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "2b753d28c6d44a119f09e456a12aa243"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "77c7f8c6c3e29a7d81e6152f783aeff4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "1c8c0faa9e71b94114c8bb98be28a141"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "b64d9363c715703395b221cedcb18f4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "6fae5babd0d9233585f14f4cecb8203b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "ee7bb7aa70c64e88037e1f98296d2854"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "6e5c5ebb38815ad83dce8ade4d8488db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "0a6ce1ec0e95c129f706d34462b8ad69"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "589d3a9fec35a0b34a81f4018aa8e6d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "11730d39704a451dd4742cbc336ad98f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "cd52aae0a59c419821d56332623fca87"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "877840b64f740c3804b74827b4de6b11"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "1f6ff8dca6b7331c8227a5284f89eafd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "e100d22327c62f18bdb1e5490d1b201c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "9874eca68b1332d0e30c856b5c3576ab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "7919db856988f4eb22800987cdc6f843"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "bfe3592ae8c4c40648383d9e429ef07f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "7cfb9ec091485b08e384fca3acaf189a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "c2e5e5ea0cef833a0fe304b754548f0e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "5dda5a9ecbd62d5b52f5067df9f48c37"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "1401da286843df35f30237fca2412000"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "f26bf0d56760f233f2f2f855d0589b72"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "d8fa8db3d727112de014a451929130df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "d73ffe018ccab5d775b7c0fdc8ca2cae"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "6a9da7f3c99cd5bd42db2287be325ad6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "ab6bc9b8d2ac5b2daa566504909da3b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "6085ef8548acc31a581cd702af899531"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "03614d3512175a6e237063e49f923137"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "830842b90c1d89b262b4c3073a53c388"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "4f34d952c668e2accdee850fc4489300"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "57ae6c45c423dc78b763ba7202a30df0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "aeebd7c6e16b2acbd3da3e446e7ba558"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "c6379cf6ce42fea9f828a5fa9949278c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "4f3072d9fcc26da926ced5708145d04d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "37e4ea843a446b47b4b126cc5574cb69"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "f30a7f2e08ca25bd17b6c4768cc97b77"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "231c7ae3e2c917859707a42612ecd459"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "9459f3db8a575f6d180c370a07dc5106"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c4d9ff624733f09c0c9a109bca741879"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "9eb0c9c83d3b34c836db2869df9a7d88"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "9c8c907db0816a917e7db87264a884d9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "758d883732c485036c588876f740833a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "e5343eebd425f9a632c929c39a2311d5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "48293fb251c27662345a82e96b5543d3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "53358db40ba5f17df58db68a21783d92"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "fe266a390d84fc3283a69a3bbf93d308"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "ddea72e3cee21d1b25de7b0242d298dc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "b7a3cb473e1e730b7bd8bdb4ac643302"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "fb010377711a85c9755fc1ee7542f14c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ea7462545e0e4cfae2837b3a5a3184a4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "3c193e71060c41360e22857e352795c2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "b9426b0e9b7ced8c92137466a8cdba7f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "4d33b1afd303850f03815e088809ec25"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "81651ece431efc317cb8e155dfa1a821"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "4cc9f1f0fc49f9c5dfd01b9b017e55a3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "2327bf62e2622c8786f26579e03b4fe2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "9509382773be515cff14c142f118f8cb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "b2f5fb9f21a324c31211f98996f2694f"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "cc165f1fea403d427876bc19d7b59914"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "4269600c65bfe08a6e99d62ac6b535d4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "15271e07a1ddb62ff1b9f59c65f530cd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "4d25baa856e0935dbef1171720674819"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "af89d3566cbf7ddc87069d3bd8379103"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "cd8c2326e76c9697fff16018b596c19c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "29554bc76d689d4e16b26e19be1bce83"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "218e70bc7436accf830ec43e6f73ab5e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "bcde57df38d37576b5c84aa5a8d4a0b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "92567f1f6e2cc40a472092a121bf30db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "5aeb6f271337f54840cf2350fd7164b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "e78ba2f80690af3ec96a1aba15dba4df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "c5af2011502099ae667926171ee90199"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "4ad7ed24e64218fb269572310c20a973"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "6cac3d7c94f37a01a7b894de8236dd3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "8ffd433711a27a846b455d172ec7e9fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "942c4feae449123c5591e3d5dac73aa6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "27bc4111983cf04a4c7e5c097552dddc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "d3bca30d1648dab1e1338ce48f424ced"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "febae7cd5e34b3676842bf5ff40df9b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "bbc2df383206556a278cdad9873dda34"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "0831a0050e4d920d3b34f773da2566e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "2f42aa18ac0359bd9cae2519505a55c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "6fce41a4e2ea15695e4a450d144cf850"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "8b6393d6fa856ac17436a648be6a1731"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "eaeb6667df010e27c95a33c63933a69a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "ac73b0c7d6f449040a3c8d2832d56c00"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "1481b4300103f308c1801b848655f4f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "c2fbdb8d542dd53d7256ab07c908b72a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "0c53688c4c505c4ef78c72e191cf3b29"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "72f4296df92564cab71c178867c9bf67"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "0ea6b42b78f56643bccfe30ffdccc3aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "c44140d3bb13f0f66eecb5c2906a78b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "4ab071aba24ab9aabf7e910ee6bea355"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1c4e388b977ea9824b82248fe6cce51c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "7e43eb95ac25cfa77f88a586e51d724b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "a6a1597ec075fc036a2d88fb0261a15a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "eb645638facadabb5de12bb65baa6ed2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "0c9741ccdf766f4daece27b5ad6fe089"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "3d01cb5d39c5d786378ece0c92657131"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "09d4babd6025f58bacdecb707af4b9aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "50bbb6de36877a7b1839cffc7337b92e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "0292261c41978148579adc27806f0ec4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "531bef1ec7944ff4e341ea717e2ac2f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "1f97701d3dfebd857c0f384952add627"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "48b6e49fc80346d9d5f40c22116ed608"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "705290ff9f45175666975a967827c202"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "0c97748b804feeb631f0ae17dd13c940"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "b6964bab3e16d1177e68a91c850bd4bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "d9b4e180bb755951c0e6416c71a391e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "7db2e33d9096fae6bc328b47c912fd85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "3ad837f1239c7ddc9d79f59e2a6c59e5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "e1e8b08ec71c4d2a72fe12509007bd69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "3897e72de3a7a5cfba212a2c022a719c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "847836d460c07852e23445524ec9cbaa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "e63782c9fae1f7e0bed11daeb5ba0abe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "27e3928da8c4ec08e4b7d0df38049eea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "46d85517bd8695984dcee1f230f164bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "71bf6cf2f972940a436918ef6bc95c54"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "bf3c9719ca41db2bcb64d87b2dfb3fc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "acd47c43a69af6427b4c96fde4bf3a9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "97a69b0fda4b24ac770a27dd127941df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "ef888f13d44a7cf74244191dc4c73da6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "1c2a8c6ea8019589576bf2c8a19012c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "97467cc4df4d49589a0141c730d40dc7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "1ece82671d453d8f20e9b02292f83227"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "a73fee3c707474fdd3d60c062867ae11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "c97b75d36191ef2755ee0a3d57d2e2f4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "b22f7a042c766e94a4ea66cec4b51693"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "bb22606f162740e42305468bf37d8f2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "3ad67bca1c1c3a01eae321f85472a8e1"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "b295b4052ba55d70695b4e4b25e981a6"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "4c854361da59f1340ef7e16de7f2e099"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "c2f06d893e4230ff3b8121d8a9c938a4"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "556b70824e6b40a8269d91b22cf27460"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "faffe7d8d23c3e35c48cb9919963f30c"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "728d2fbfd93e1e89dc96b95e4ad17c22"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "5584e8c169f953a4f4fca6b87cf738b2"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "3a7a43fee9040f2dabf994863064d7d9"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "154294ce74603fd52a6cf64238a10936"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "63fe564e99975f02eaf4055cead1a57c"
  },
  {
    "url": "categories/index.html",
    "revision": "a85de96d3f22d3a6ef0e29e8e8ad4983"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "7a49a47d01966f70c5c0b94f07b2fe81"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "eb35a87e00198c3e1babe4e83e7b893c"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "5430f7271fdb34818624c6cc771c20d3"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "4333f7bfdb4463de27fd9c4bad2c15ad"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "d00e63e90b3b38ea3455947c5be7aebd"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "a2eba7b45a63398ddfacbf7e55e9913a"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "f1d6a60d0351bfda010ce5f4149252de"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "390c00800beba266520cd4f36ae5569e"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "20deb1082a189985b5a89b4d0f8e324f"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "3e1f4b960ce6990f5a38bb0dbbabe617"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "d71f513f629ade8ad616d7f7caca447b"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "e987252d377ccd9f67843599870b2483"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "119a188a6ff87dada666f9c5f1800920"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "034d5c17c5c7a5e59d09f287ba476169"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "ebc85badc3b0baacb1f5fd36e4729445"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "f73c29556901f73e08c6bade9a4c676e"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "a0077241a7a02ed7a5352cdd556ee506"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "7193c8827c68115e9dd79f61f595b5ea"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "ae141409385416f12631462fd2fc4d90"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "e2bcc75faedd08dafe14d42adb3c5db9"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "13346d7b5206b479890096c6747f3862"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "c375c02fe9454825cdd97db766b9d26c"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "ea9ee5df46438fce40fb53c5ee48f88c"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "2f964001207160e4342c902872de2683"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "edc630dd9a7d81052e7afd70c26c6636"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "a3542bda5cf465d400eef748b8278a06"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "53cba5bab46df2e3625b148702d7f763"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "8a98e3021351c491fa451aaa7d880938"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "8d45c173a785aec0a81880b7e0fb73e0"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "d358236a5d866a60438a48a7c645b3cd"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "5b841b8bb1e57fd00c533b6ba012c5f8"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "6a4cf959f6dbe7196700a73393294a3b"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "1947a5bdea90867e23a2b0fc46aeee2d"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "27eee4f2970b74b162225b41687f802c"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "f39f84bd525a46b403ea9266a2a2bbd4"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "a48137cfc0fcbf32fffa99787b58e623"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "41158874b8c6d848e080ffe432a10244"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "2cf47d4e4d4fcc907fa43ea5c8bb77fd"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "3e981dc406e0b2ae510a3dcf414197e7"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "7fedd4b4280089928b3263ed8fae28c1"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "350f9b48fb98a1c22d3327adffa1395c"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "989ef2e9f8436dd2758213731e20db9a"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "49b4d1c67dcbcd65dd51d0e9474eaa90"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "2b0ce40d23f3f7d597f6d2c42871f78f"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "0659add1cb5f4f10ee9ac312e76d4dba"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "668c50576c90d62bdd679749732b1ce0"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "175fd11587cf1f3a912d2bebffbaf777"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "2cd9828b7ff1eb6e960209ae4abf71c1"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "917d7b54af2ed8d8a65012a77690fc7e"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "97f64788ec055898ecf4d760cadafc5d"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "9425bce7e9fefe4709c09560e1f2828f"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "205bc0aeaa3359b229da87c5c1f92d02"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "901f43674de555fa349e09cdb79c4c03"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "7b31e98b9fd51aae57cb32e23e935090"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "9d1674222e12e20bb6eafd4a3c38dcac"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "15a222f504608186000bfea628c51389"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "32195c7221c744d8df4a2f692a34641e"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "ad5affb5bbdd9a51c6aa5c2bf7adc191"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "cfc43e5e35a1e868a92c9c28bf6b405b"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "02c14ebea078a31489139662d37ac755"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "c838afe33fbef238b849bb3f74e332b7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "8437c8828e7bcec82dfd6687f74a5f0f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "ec6451a54eb2afa9861d73e062fa7a03"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "9278c9c8c20c841cb2c737cbdd29a80e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "4475af706b1d06984e21b69a8286d29e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "67bd4da808de596aa336452f9d994dcf"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "ad186ef76d7f5cec0691f0b9403b447b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "07427e3e1324a41412741006bf89042b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "61b9de46acb01eb95d79881d9f23396e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "388f60aa73103007ac5a0341792212ff"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "2971302ed5e845b1c746257e6ce38f51"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "61059c74944ac64b64e10b5c48faf0eb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "ea4abe953229483fe48d7e0c0791cbcb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "334c2f538cb1704dddac9f830fd964fb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "46514ee5e94a40bf1e8ac7f71bac1333"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "24bdfeb1dade1653441b78bb72af7d0b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "c2caf11300953dbf39a7523971b0a775"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "41599c56d5e14e568847215210966fbe"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "598a488edc988f5fa0add20ec984b376"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "af7ac38417c65dad75108771593c1297"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "ab876ac7189dffc8792994da80bd9b5f"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "8071198317c10258ad71a071496f5390"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "a0dc1931114200fb28997ad1eecf4d3f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "1344fe41528b43467f6cbf675d31c11b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "67dcae8e77d0754af4e4785f71baedac"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "4aec7b706169e5b32d5f28bc3c243653"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "e27c93053bcc095a921b70de540c660b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "fb12262aaabbe5997d860f32890d47bc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "168c1274470347487a1710dc6db9bf1d"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "373f975eaa795616469ea27e698a722f"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "c0c085d0c58480703b8f73cc8fd1e404"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "2856616f4c1a08006839e1200a5db525"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "a46840bc3531f828ca4f07a60a0f4098"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "82a16e87b22f7f6123cfc8f0fc424953"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "fe3bfea16f4b4e7c3b5184eac73d5cf8"
  },
  {
    "url": "categories/java/index.html",
    "revision": "08ac1a7052a7b8c494293b34a79173ba"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "cc4f83d01d36ae24fb525672b2d037bb"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "b5e9002455f0d7add5e4396eadd93e2b"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "42b34f6addd8ef500061b2df68352cde"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "665d88b9c7859a45b218a2b08067c561"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "55629b8094f14d0276a3582e055ae59f"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "75870a8d7e49798e998eecea8205e1e3"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "ed964811c1299964fec4e71b1984d9fd"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "4e8096aca2454a5ff6a8e7f0279be702"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "fb4a12dacd7fc32a84d588fb3f24446d"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "e837017311b58ffa305fcf534ced043b"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "365a9d38cfb6925cf58793eb2d3a4909"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "cca7d40663990b62626b07eab7bcbe0b"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "e8288be77b844552cce3810d485c9d0d"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "884094cd241868516faa1aaaec16a189"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "4a4e0065290adffe780fef34f4f1f2b7"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "450ac83a79ed7129d8c04bb54a707980"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "d9240f3aecf97bdfcbaa6d6c7f97dfb3"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "505319e0707e9e8f7c1644267a2c984b"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "90b65dbb9a1b6a7132305496479a98b7"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "37136f50034c85333eb97ec1fff8885e"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "7123357f5bd369a1a3f4cb04823d67d0"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "4a5ae2f044d22a3e92c2346e97d4b97a"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "f194ce53a3426f742e51cd361c0418b9"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "273a12d47670e85a9611d7d0223db521"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "a4c16f85912a806e2688052e84c124ed"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "12f9d0de9720f0422ae0be847ac89c34"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "e91062ccacda4b66be51488ab5326d66"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "a5a84e4b77ac2d68a75c3d5a81783d1c"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "34edd8a3c0107e6f55371f887105de80"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "89e8d365670c81598ed7514787fbc104"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "f5d793076168e63d81892c6772327e2a"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "0feef3f03b499201e455524b875e50f3"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "2b617260febe9b67dc7fcf761ef71e5e"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "46326079ae1114355b7a27e598a884fc"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "66b1247ffa1a21c0aacd35f85b0b76d0"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "0160923ad16613ab375ba2bacc370ece"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "8a299365d67652679aa0c7cd1bc1a17f"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "f33a9897332af86035f83f066aac88cc"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "e7c1e7766aa645704bac60abe6a9edb4"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "223d82bf9f967e55279bffa57badb987"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "546596b78d14ecb64b306d4f3c47eeea"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "8d9cbfd4b1a6b4d3243efdbfcb4414ea"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "7b0e3f4972d908b9baaa1cc3bfc043fb"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "e9c1426bb9d385f9fcb6f1b6a6006783"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "67d2b3509f5dc9a8b5235d83ba04097d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "ad20bafa02b3c907e87b8ea2c1e5008b"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "d4ee3aab616023d251faec81ed658876"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "bed640a8f3039132091db613c3ab9bde"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "a3953610201ad43fa5e3e27608198b51"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "2cd7d3e23285efbf7bae449eaedfb409"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "762b6197f7c90a5284a832934f652585"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "2d36e71c856bc7279bd4ec6a259d26c4"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "d60e37e75c3705b57eab9dc5d01c5aa5"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "78d6dc7caac97744ba0c2865d3790de4"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "9e1a3e567fa5ca48c9b9fca5bc97c339"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "8f3ff7999ad4423b9260aa613473df5e"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "6deeccbb60a87e82f6f9756e6f32de36"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "88221c97fdf642fe1a7fab08a9d2fd07"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "d3171e82a377c48be4c2dab48df62423"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "8e01f6b611cfa90930c96454b7b9f6cb"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "dddf70fe94ea8a46321a4a5b001db1c8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "de1515b505a1301717813d8082d36044"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "38cf3ee6481b8ae47980227fa151d2e8"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "c9677c21a4bff69eaae3eb8849c7c429"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "7823c5c27dbfa510d1cbbf2aa9a5759c"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "5af131394c53ce760fae7d0695a5368b"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "57d83db049813336aa1a88396e3471f1"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "0f6a8283e258c059231f44707d96eb35"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "1006fbb6e1990d32dcab16703a326704"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "1758f420c759505d69508748dbfd461e"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "c335891a835202501dd0a05e2493ed76"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "529c9ae69f67cc39696e4dca3a0811eb"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "475b5885552d9995cf64c150f42bcd9b"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "a23ea0793b7a6cc3bfffe164bd14447b"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "a249dd34e0d9574ae2a03b3adc74350b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "5b8e14cea408cde57c054dcbeb0aa39c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "ba923a7b1e2841e89511bc7042f715f8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "400b92f041c08eadbdd72118dfec367a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "c57de151f92aebe195fc21b3f036799f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "0d8aeaf3997753e7e3cebb684ca49aef"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "251569f533b279d375a65d238ae75c20"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2418d5abe1deffce581f00e2efad4298"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "5f9ba69fe80501fe7fa3696b92404ce6"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "be0b9d34ae2fea7bec0aa000bc9ca788"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "3e532b50d9cd5f3bf033848936e4b1e9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "98d3c9ceab8630f31c651f4a90701025"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "42a8bbd9007f8bf096ccb0bd7e08bf06"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "af3f7f881c7a9e53369f04059738a0bd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "668521a117828059474f64e824dc9e78"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "b4aed68f55e9efdd0431217b101f5f11"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "214b49423c2c5ba5c306d58aae23bd1d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "c72e6a3a61b325b2b6189643e5946a8f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "cd536bd6ac584144c88c0ea258a9f72f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "3ca7f4c985b4224227138290dc057137"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "ba86eb63841798cbcbfb95f6ead54542"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "9c048137a93184914511a220747c4b94"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "6a8b519934f41fa3a1585a09e8862d80"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "777d211b284edc7e8b4e338f6f731830"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "96c6b58880c030bfa0b967b013ef2a24"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "6e1e2cfb5b6357a4026f54dc3f8988ad"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "622c4f727e32be9aeef7d0986824533a"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "6fda1c5779072a9ada9309944f5661a9"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "89d4285ce8d8ddc2d7e35c5b86af0935"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "5d72d8dab709f40e14a9817bdc02dd88"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "2d3095052722651b511f410f5b2a4149"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "228464a82fd0cf4500cf81e7febdcca9"
  },
  {
    "url": "categories/os/index.html",
    "revision": "57aec1fc7ce23bb685a26c1eed7e7c0c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "6aee9d6a6f770b7f9b5042e99492fc38"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "1f637029f8f17b7c67b1ae7e19ff873b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "1a668d81aec434273f625878ac9b6d67"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "2e9230c130fd38e15a272e93bb7a26ae"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "3a4ee785a175ee188a93233f12633f8d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "cc25911ad436c5cf3d49430264504b06"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "ec63e82dba9f31dc4bfca6ad9cf45d80"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "c2733a1020c03a5d440d075ec5284e86"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "e6c6e43bf47ae3380d79fad57275bd3e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "b31a688463f03bfc04ecccfed3523fcd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "ae0a1321cbba523c55cc79dfb67c2746"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "db34b2a0170901ec2e09ffa9f7209b4f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "3e2524b59cf809cb2958c6bc8711d6f4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "ac55b14460355206610da09e1c213d68"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "34de98aff49aaf3d6f35c3d77196029b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "c0b5ffd3c3314e92bdb853c9ede28971"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "2dcef903d732ae2c320a3a557c47702d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "3f5da87fb22e6d7d0ddbd844fc8891c4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "178d9dfe0b3dee088ecb76153a86453b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "a2f08cd098a449428973d69c1e4f11f9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "674c83446512c554b86ee2360ee39421"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "d4ef9f4ca2a64e318d4ec2caf019eb6e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "6824c83c720f3d9497d49bbc8fd81077"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "507b08faa428637c0d21649c7e88e2aa"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "a9ba8a56d7e83326896c21549e544d42"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "b66f99581d3a9bd946a453c45a72bda1"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "fc387d30a043254e7775c66906c7cdca"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "ff2345f06f6b2500679ccf38342ce423"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "d1dbb2d607021ffd7f0b6d2d1a47bb59"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "8a0c57f0bf71b187ce090dd9acbf2e62"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "d01aceb9bef46241a98fefdd3536e80e"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "020ee954b5bebd3da91b3982e7c47760"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "775de69c8ca1bc0ce588105ed9ae4d9d"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "a0b1a920019bd3d6461bc53c5f41a2d1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "46abb49cd840e9de2a71b5fad5bda4b0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "315d4446ec5c5564ebaa7f1fa482ad94"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "c4af91c3866b08ba0d274a6e88b0dc7c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "479d7644eec9f188289c609f90b2e23a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "1b6e7f7f45303ceaa11bfd55b0fb8596"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "7ed06527f9c40245c405f723b006a88c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "467c1e20437e4e268681b4313effe9dd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "b8aeb9aa552f6e809337ef4eb652c29e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "10d0c1aa105789303634f926ce9bbd9d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "fe032e18df4079c68f5a707956d504a1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "68cb922d37116ac9b9e5bb2203e8ffb1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "87cd689aadcf701e8d80300e08ee13db"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "911161c4f48905f1b96e780d05718549"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "619d62a743a867e9850aefb4ac33df7d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "2d456efa7ba099e85e07667bc658fea6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "26676edf5742217129066a71327acedc"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "b1054929a73da7b729463752370148cb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "21d4a7c9235ae1954ad41585015b057d"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d763306aa1a82cd6cc4f9b5282048676"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "e44cc306a3333ad50059fcf6fd8b44f4"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a49bc9feaffa19e029cf534aece96a3a"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "54b102191cbcf2447296806f80f327e0"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "c4d96b77d26c7314335d0f0da297f416"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "e63cbb7ee984eeb5b775404f9e1fbed6"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "06cdf17154e676eafb6576028cffdfc0"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "11f7f3ecf974d21c53d0bcea59e2d6fd"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "41ef99733d1e99ce5731caffa198fed6"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "3266413cebde01e4a5ed87bc8e60806a"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "b47dcea6707b9c952f633e5b8f5e1dde"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "83baba07b9d0580125441ad44048d5a6"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "f17fb8f86c1185b43ee3fc5152f7a26f"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "e9311e833b893b0ebe75dc71cf097282"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "cd7bf9e564607008ed35908d0de5a4d7"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "8d665268be32080b90d20691d80c1c34"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "97427033ab6191162f42fb027006b7e7"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "62d92aa54ecef6c8dbdfc2a6301b21bf"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "ce619565e1d0d8e93f64a89553d2a355"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "5b3b0effb6f56add1f8f870f450be1ca"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "2f20f00ccbdfe0b821396a074eb19801"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "35606b8b4d9a9b945a22eeff49287e87"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "00c13c0373d421c2a0bb7dbbd317877a"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "2f970ec15ebcd3aae7052f029465b4a6"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "ab6fd26e59d0247afb0c33921bfbaf76"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "338664edbe93b405089d8dfafad546cd"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "22c2a119d6fc27e2c76bb66802bbabea"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "b5d9bec253d80a34b116b70c969bbeea"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "51783359a36bc11ffba46165323e836c"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "9599fb4ad2515989f3b07ac7578d70a6"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "0c274aa9fe24836f0c2e732cdb5425f4"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "13c85de1137521cce328f4fe5c82a515"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "d0573ee75e35dbbc3de01a846eeef288"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "d3e02d7ba021e0a56fdf0b0a3861d551"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "508b4efa0f92445a7ae947d1b9990d1c"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "a8163451be272eb777aabd861fd45276"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "be72cbdd0fa711f4eb2f34b3b6d453af"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "4361752530e8c061e7334cca4d8bce06"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "3271d0b80e062b3775a16c5a02abdf47"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "4c6ed4aec7bacb9b50037c54121bf068"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "579bbf96ff6134c81eac14ee4970f5e5"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "350e00812f07c74cfc985996a199fb77"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "f6079593210fc8f486a6567a3fb743dd"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "8a880ed77ccf490fd55850b46c228b4f"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ca55cadbf987e26437e31f45f500f538"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "957382e0f7ee08d7e1846724ce2c2742"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "9dd02b7ae00aab2c8e84a5c0e07e7c2f"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "6a13b499b79001d861040e8a4c6fc7d1"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "12d128731012f604bec52f9cbf9c298f"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "4668511c622f3295f96e6f22b9b25af9"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "5de47f6d3f59e0ac42c0a00984fa4a25"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "7274a9d39de9f9e3121823cdc80e6796"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "e58e6278fa5b13599f6b4c39e33a2bb5"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "42b755e81284bb74cdab71b1e8e09abd"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "fa7da7c2fbd0c570c60dedcd549227a2"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "e798e09f5d5413d02938f7b63c84f05a"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "35b614f08bec0afcef9ed35c2bf081c3"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "f93fecd1bd51f707bdb9576decbb9a3f"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "ba2e768f98cf21d1e6635f0287bd1b00"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "b0fce613028839bb6b6665e342db00d3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "b176ebf15adacf97c2c5f0038a074516"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "d058999e4a500128d7ceafb20a978de8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "ff806991c2e54247c1463297c717e639"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "b9d9c71e2c6596ab3052d93f02fd9ff0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "4b961811540fba25c4ca15fac235f65c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "d1cb453fc6fd14f3fb93a158d284dde8"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "ea5d287fc405f264d7ff51bf261882c9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "9ff0f2dec4439da3a123d2974b347bcc"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f6bf2151c2a7d0bb4aab7ca179d1d75b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4c74581710ffd4a3f55c1c2d52946cc8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "cca752f9b0a593b705ee2a1223522fe1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "ac84b6e15d95e42ea64064a011f29402"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "6fbc2d1e40bc497ed9b2a37a8803944a"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "46b03779c33324408b4110c3d1de4dcf"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "6327723166b44f6a34688f37c613bf54"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "7660e75d49cdb02f4177b55cb6e69132"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "88f9937216d41c0a0b1157cd08457a00"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "a75acbafb0a3a3a7101e08ce99365ffb"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "0ad15d8a1e885c2508b62c63d2b730f4"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "98cf64d05b57d771db94902cc3c4bff2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "ef02fbd7b18d3778cb0b71d78b8d1595"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "635fe9e8e41520b4fbb81c94da8872ca"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "0f8e9de29813148d9af1bcb816ee74e9"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "6254f5be257988465a00ff2f84b9a9b2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "644540fafa1487c6f3ad7594facf59ea"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "2edf79d7d418d172ee78c12329b4bd2d"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "dea1139a47e888fcf1d583e4a8ba1390"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "aeea2916b482630d1bd94a727ab7c241"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "22909cfa78c4c4482ef579160919d599"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "bf4665291cf619b8786a0b0c0b8a5711"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "6483ab09aea76a12e2b1a5fe8f64e4a2"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c8b89875ae8b4cf272aabd785df4f3e1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "f4bcddf2ace6aba0fd8ff79b7a186f67"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "3289e541678f1ee2f6c85a2b934c4764"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "1f180935cd1b09e4330b1b27d4be7b52"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "317812d2cb01e355df9708e91b7ad972"
  },
  {
    "url": "categories/php/index.html",
    "revision": "1adc27fbdd9f0ce212df6a3ad1f86894"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "6d4e99e6d86f724bf2c19db77709989c"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "582d2f34c1c569804d2bf325902321ca"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "69fe502efefd0e49aacd09ef378a71a0"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "44fc407866d0d8e4ccc45aa08a77cc6c"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "62d7909e09cb795be7cf8afc2ad0f607"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "8f8927a601a2231678eb92637aafba71"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "b103aafd44bc7cc6be37dcff5c790928"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "51d254e640fa60ed361e540e9ee2a419"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "b2b7268fe6e7d4b7a0f3ea6fe5b41063"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "2becc09a6bdb713e13effb418a2cfdb8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "dd9f3f482e066b25127e489cdc493749"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "a95bc9ffeaf213a07da8a2953ac43bd7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "340cf153e3fcf282665fccf2b36ad63d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "610f9a3e21b0850e4bd6409f87e9bcd9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "bcec203ec4d4dbe65e5dac1a2ff568e3"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "32fd441a45c119e8db202d3545f107bb"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "de0ec94d67bc8cff87c95c7a4f9bb368"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "abb6daa3d2a0665a1dfbf9e6c34d1b1a"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "0e0abc778a671d68f1a4f1dd8a8b62c2"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "e8a8b0957820ed987726ff8667cf912e"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "6dde568a6a842fda97477a609eeafcde"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "31957a6f12e6c88323ee1f7c73d5804a"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "606ea3c53f9360743c8f5460c3bb63f0"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "2953d7115ff2373070bf7bd6a98ee02e"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "9147fcea4a0e99c5946498ad9244595c"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "2322fa13dce98eae2bc217c6d56c458d"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "04f414381c9246cbf2ed432668bc8231"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "299806501402e78b55ae86acba17e6b8"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "8a566497c94367dec660c6431f944110"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "00722190301f1bceca2bc7c04e542068"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "abf52dac262d9da6ae076faf0b929215"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "3f29bb40f2bdc6f9f792d424fed94c10"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "f5919eeea734cc4b455180f0caa913a5"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "e29eaf2821f0c41624b65736776172c1"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "359e683c68e6e6323c36775900b76ca8"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "efdcbff9ca6f2eb551bfa73c1c36c354"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "fbdbbb645ac88872a74d6ba847e10600"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "9333919d399c47c5e1ec97aa38b07962"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "bd1997c84d3b61c30c915f08191fd93c"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "00ed6255f7b37dd4e2dd2664bf8a4cdd"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "8d6e55b144d1e517c87bf0edf36fb214"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "e016f4937a4127adefb0f68d2fe8758b"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "8b0c781c873614606dbcf123b7c3ff2b"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "21998e7820412f0f15369fdb57e8d92a"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "599bfc10d6825c3949ca534394f7a0fb"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "7df82eed3a1a003bf45bf390e430048f"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "88c965c674621b61ad67305d91888054"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "fc3f1f66370509b2761e73d79ad95e97"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "b18faabb9e2c1d276c9f3b949c9fafee"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "a545957b6e68ee9f0cadb066771e9e1f"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "922f6743a892a6bea7bd5dd635e8d753"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "e7b236c75358bf82e2faa3bd79de0a06"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "2d5fce1d26979cc359f85a4cb73335ae"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "053251e3cc5ca10c39f8a8ab0a69f83c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "9348aa1b380d8a6a556c01305e2fbcb0"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "a762f3f408cb2ef4483c8b63f5879b91"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "48cddeeb98865729be58d2e103995304"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "71e61ad417a0153941d817a7634ef471"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "0edba13a90ce9c06ebe796e21eff7c7d"
  },
  {
    "url": "categories/python/index.html",
    "revision": "855659a4fece1cd87ed148c2cccd576d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "759c99ff965090bb1db3e616bb049b46"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "4911d1a063191490fafb3a1217a6ba82"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "dd765910e53d743e96430fe46e4cebd9"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "005bfc3763bd1841b9b7041946d19ae6"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "2997e329fc8e1c12754397c782933129"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "c863d5de0595b0a26b1afdc8e5d94b52"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "11b7d8643649a03f2637f61191577dfa"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "67e920880e0f807d5feba7390004bf6d"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "03f8b21366071d654dc93b26e8a1e183"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "322bc5182f76b9327c2740e4ff6b7b2b"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "e20c04a50084190ebf3b73226859df35"
  },
  {
    "url": "categories/system/index.html",
    "revision": "8d0b9d51031052152e99e2f790c410a9"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "d6b539497cb57e6c6fdf83ca852254d2"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "45b84a875541d1ea42f49029b07ba0a6"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "e289156d54a2597055d7a36896ec5a96"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "614bac570f4dbd6a8c78e878e282d711"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "38f367c453c15be0d09dae68f755b7f3"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "0e7e694520337216a4ff0ea6c71ecaaa"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "d444665e657770a49fc3a493c33dcb18"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "f7eb1dacf486cf80226cf37fe9e1509a"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "b531549782057db1dcfcc6561e6277cc"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "2da57da2fc11f395e2529979b1b8c9b8"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "7161e914b834e4defee2625104217cbb"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "72880281fbf0486ff409affde520072a"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "12cc8b204e1d12b63f6238e788500614"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "a233d5492ca39e238649df37e63ef7eb"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "ec92c488c64e9349ac7a0908cd20e83f"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "b3d9b9003f215491119acede9f2e5080"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "f716c44710e724fbe6c3bd65be890038"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "baadaaa702368d70741a5a63f7221520"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "5d88cc74edbdaf28ab086f6fee31e641"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "e0b6bc07499330befc5b3b31e7edf5d4"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "343603b97deda1d497488d02f152b738"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "7459440c93546c4d7e0a7bd68f2de092"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "74cd9bea3ebfe3aa6cec588c15ff3bb2"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "69274eba36552a553e33c090097cc108"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "b45a6f3641915d4b9f0a0ba0cfaccc72"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "ee328a271ca5eb4b786a1902154839c5"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "4e8ec73d44f13223058ac53c57be8f63"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "772d719c476aa63c28ef896f0baab7f3"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "0152624c980579759a0da6052a94ac96"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "01a3457d131a1661ba1b664ff44b0839"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "21c1d73abf4bb497705e83664dd7809d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "ecaf817222fe891e279fb514fb31cffa"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5cc4377cf51cd844875e38c2e4e4a793"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "16e2d70e219300abe77e685f86bc783a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "5cc8ae46221d2ea30e9614c26f9b9767"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "4a104232880bb1ef8313f7c8cdc79665"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "06d39043cc2770ec4ce8ef0bd3464b89"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "5f8202d9d8c022bf2e657befbd998813"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "6acef3f4a1a8dd3b7f5a1cec3941f9fb"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "e011e6371d1a289f233eb16f7c82f3ef"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "0beb0cae93c1e536e4580465a5d46924"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "be347d08a762d04ef7fc0722c2215683"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "e7d1411e5a65bb82c9d99f32967132e1"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "823625a09f90b78270eeb16dd728d830"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "47c4ae20ba4f5840402ff4a82dc27c26"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "1a45dcfaa0b79d6313336563d3531714"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "23c877553f8be7fc48ad5cd3e3b9e2d4"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "6df4c6bcbb3ffb8f9ec9b8ebb47a7678"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "3b9d9d4e5ac8900ac21e8c4e522759c6"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "ed883814fdddeb15384cb0a4ed1201e7"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "2475dcc1f0f36190d17141e2197b8c27"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "1e52e77c208da8d0fff8d7d3d2769087"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "224f3d5d14da9af34b73adc0426b8636"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "99fab8c1c2612ee7c62a4c86135a15a5"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "fa29251a25143067c198b3046546e26a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "44309256af0b81e36c3a6f56db1e7b91"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "09c4eb7835bd159a5c09b0e2035a9e72"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "3e81a79a9f1d34f3c086557d9b11bf2d"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d254072ba5bfe4ce143f9533bfbdd749"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "20d25f73995700393ad24b7641eb4693"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "825992431eeeab8be360185aa1f73770"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "3595324803867bec13b0b444881e38b9"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "3d81f7150cb6a7695ec08e75e9a0e850"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "fa5464fa136cdb63a2f6b63f7dbb68f6"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "fe0a8415d8204e6dcdd72065cfd0dacf"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "778fea9cc46765cc829c625a7d280f31"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "f85afc0252c1f16f8ab6b7e4b8bcbd17"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3a2dcaa539bb4aa267c91f31c9be09b9"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "809487e30a548f493f037e6ad2d7a772"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "975275c84993e3cb4fc7543bcab099e9"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "081c19be68df8b1b7eb8a100e5e444af"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "0eb9cce0e3366f27ed717a020c2857c1"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "5868b5e333dbb7b51e13315cca81853c"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "0fd27d95baba9c21f0ee55c42912ea44"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "c4afd698779be9c1bac1a1aeef8f98bf"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "6af5f0216bcda2511d2faab209e76dbd"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "480f0f512315afe075453b56673c2a4b"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "1a612c5a17790187604747acf0a7ed33"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "50f3d81fc0d7e3c9b0163985d2229ebe"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "30c26a7a4f972b6b53cdbe4a357ec16a"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "a7915adc7bed58facb0c103a2634b5da"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "c9768f941c9c79e9a2442e3367f2344d"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "19a19f88d2a4f5bcb03e97e3a1a64124"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "e8887d38ff84288f8bd06b16e79908eb"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "7c3f945ebebbca3510982a937225ede2"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "55e0cc9a31de0c9614447f46c3ee9fa2"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "ce855b5297933343a14f9e0d71ae9540"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "b5bc0d2d4ce8ff52c32c5b608e16b7ea"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "f5f089639d0c73d871140f7be0bd7ea6"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "6c58066bd7fc69ed674567d8a29b6139"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "155cec43ffb68feb4be58830b4a7d866"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "e76e4c39aa9e73ab03efcd0ea2984888"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "6e9fe7eed5f63a60e707d63a05261ed1"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "34b089184c48307192003e89825d1fe5"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "18ef8063edf851b052d7763e25674144"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "00a5206cbce7525e9ea22e05ac29bf9b"
  },
  {
    "url": "favorite/index.html",
    "revision": "26eb24937e695cb9dc2d9b961939f258"
  },
  {
    "url": "index.html",
    "revision": "9a351433f7b6510a46d95a355b3d882b"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "8b1fe6cabb14700bd73be314221787ac"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "ad2ad785e7815447367a0ea5a502043e"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "c983209a1434c44f67ddd07fdc0c750f"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "ec2e6bbfcebd9f8557d429c534e070b2"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "3a06a318081b1e07d0534675c444640a"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "5d510e4b472f827bdb6a463792698d32"
  },
  {
    "url": "note/index.html",
    "revision": "c2b10653ec2aeb7d82ec89295a2a4503"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "4c5d726841ceaa794cbf9743bc03b6ee"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "6e60b38b6b7fb51388e49e997d5ced0f"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "d1a3bb18029004a4d6ba7eeb47f929ec"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "79a2eec61c1b954273a5e7d1fbf185c9"
  },
  {
    "url": "share/index.html",
    "revision": "2b755ebd445975edc5b51139a220381e"
  },
  {
    "url": "single/about_me.html",
    "revision": "8d5ef3c61ee98f18b61c6906a75d416e"
  },
  {
    "url": "single/all_article.html",
    "revision": "ce6e6c6dcccd5bb88fe7bdac7ad8ae39"
  },
  {
    "url": "single/welcome.html",
    "revision": "c254dead5d4649c34a34c2f78c4cbb8f"
  },
  {
    "url": "test/index.html",
    "revision": "80e44be6ccb0f944c20f01e2718e84ba"
  },
  {
    "url": "test/test.html",
    "revision": "661cec53e28172e3742a6436e58048f4"
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
