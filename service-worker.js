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
    "revision": "ca25312df92156123ea9ced762ca4fca"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "0754d88c79fc3156f5155fcb6cf7ddb9"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a076df5f61f85ce8f158becaf555ddb6"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "7d382f8a97c38133f32d027e35eee4bc"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "31b64a7bb0709be3636094c73d692c95"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "4ea96c5c7b43000cf4a660021b4049ce"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "ee81af24e923d1282a3755e576b9e625"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "751e364a9df14b16039346e8b8e205d7"
  },
  {
    "url": "articles/index.html",
    "revision": "4989bec6c169d30802ede870d504584c"
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
    "revision": "85efad3cb5dda53d0c016186a08b929e"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "9767b9361a4afab94f9960ad2582c058"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "b16836a889a90bffa404f214092e1ae4"
  },
  {
    "url": "books/index.html",
    "revision": "fb52e8a4933b568b6e4f6d0834a438e9"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "c591449f20ec953e029d36a40044d9f8"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "fab29e1a9be7982979cdb0c6f7f4c4f0"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "e81549bddb65167d59d2243519b6177c"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "87a622b914596ca09f51c6ef9b0b81c2"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "9d5198a450187461b1b7fc049b267912"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "7afa30127b9160224c06f6a87b94d421"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "f1c2f06a3d51870a0e39bd9d15af93d4"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "6fc80bbb6876cf5d11c3bbd2902ba3dd"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "e193d72ad9c6e8d340cdddd1c862d041"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "5c5eb194856dfbeab84f8ce91bc0e745"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "f1d90fcbb22da591edb85635a2b91258"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "9aab249a47fe37c244d3253954ef023d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "e0002b102bc5525994931187529ad487"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "4c576cee3c685d8c16a909510f35ce63"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "06fe448d20b88e93a294b01cec5951b2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d4d85a1cf3f2057f5d4135a11e5fa822"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "112efd1b5c24de8bcae07272da2da9d6"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "e55541f1b02285e711c357df06e1e6cd"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "6d6da017149087caf9dfd89af8f99eb3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "7f542e5c05cb9fefc185bec14327bc0f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "9b11ef4e9011d069d1bd06b35d6945d2"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "de8ccb4c088957deaf3cfa0fb168cc40"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "8e840c4c8286ccb7529079e652a6bfd5"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "313195d976228c40fef54624104a7797"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "4b865ca701efc3029dabcc82f8ec598c"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "d675c82663958f985cfc80bf2728fbfd"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "47afbe09c9817e434d65639747961d70"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "936e532b0ae1818d24ad551fbbffcc94"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "a559d53a72c18742e4bdb019af86be2b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "f6249ba53b21d8aa39c164a1ce5de39a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "7127a0401b6da6c3b5c9210c37f79983"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "358b326b769a52f429c509ebb9af1092"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "004d4a2d866406df80cb0b947508ddb8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "3c278f527f595368e6a7ab513a2e3d31"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "25dc4f541e6ae3f4418135c1a3294bce"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "2638edc9e7d1bb3c71ad00e76fe2671b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "1d978cbd4d1f2a75acb0a2fdf221913a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "bd275a1c398a58353ffc412b0524a4f6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "79b8bffda2c214425aa86c4ab4abeb2e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "46c6c16862048589e07b3b89036d0a3b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "4863b1227cbf9b350affa5f3dc17cc1e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "cab2f668c18d65f452d2c079791da100"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "dd0cf37d11ba3233dae6723123e2330b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "56c49512f85a1f79b5b58c7137d67a90"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "8cc058c3f67cae13d32e8694b926f19d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "7cfceab79bbb0868698c8afa47969dbc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "d9e9b1a5baa1a535e3f8067fff137ae4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "d698ab63a140cf51e8c6ce564bb433ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "a280b544135f6ff18b05cbbcd7c14481"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "01962d3cde1b2133557420bc543bdb15"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "f9d769b2df908b4bb7feb57c27487f60"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "5d14cd2bab3e67f9f5db5eba926b8c25"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "d60fd134a680fdb9b8b843765962bb4e"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "f0db7a8f75021d372d9cfa9d13857aec"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "fb229f52920dbb02faeceee3e644ce4a"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "4e35b21938fbd8b35c1a2a5d5bb8b9c3"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "d10a7e295f46beb46fb2aee428e3c215"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "37e4866738ef8e690f0521aae840810a"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "4eccd8a34785d6e7f4ca80f3348a844c"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "a098af7596b26fd1c559b01eccb5f1e5"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "7208d7cf5d588e54db68206ab094d6d8"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "436a23abe3589cc1e37d2b92f13ed49e"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "7f1b7a1804e7c28f45ce8625f75d2db8"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "689be589e1fc7de9ca02a0655bcb7bc3"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "e71e09f045e3420af010bd8c958ccbcd"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "b0db79eab4b38ad228c3934ce8daa45e"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "8a4bb926d4c867b43c31cc91f467fe92"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "087135affdd902e06920fb694d4a4e33"
  },
  {
    "url": "categories/database/index.html",
    "revision": "a3347581cf508fe2ea6d89920527fd90"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "f113a2a3b56376f46c105afec493f85e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "c0657993fc36c206e82d76475a979b86"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "9d0d4c164deba1c73a9cb7c39c841dec"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "d34752cd422ac9fdbb33c7981e2c6cb2"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "580a0e06db1d0226ab28606a7643d927"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "d786e2aa246ceb116ed4d940ed0ef3c7"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "08a95f24e88e329e8c529de5aa8a993e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "7193210961f3e128ca7e3ea18a92c5bc"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "c02aab23e71f74102e48d7908b7ba981"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "7ebcbaa0d1a97e71e9998d51fe5bfec3"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "def4a7b9d0bb83ca2b25cb5ea4028263"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "10672a4b4efc8dd3af6d34054c68ce55"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "5487ae1f12690bc3c43eaf648b891388"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "3f237e12687210f44c69926359117fcb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "922a9870393841af2bf9ce25c85359f1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "bebaa7d5ff929bf38cda42c12a80c24b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "8361df0334f9dcff2da0a5001e74a997"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "9be24e16e874e09e5b7972fbc72bcdc8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "004f28c97ba53a1fc48a17f92945e035"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "b746dcf7e5f7cf02e9fb26efea98a55b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "ebb81f4b40a6afc042e869af79f9ce7a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "9486f19e9a2c4b1b98bf317b41d60d7f"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "49bebb7101f4004d03375e4de8d1efc3"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "73361635567079700c11921b9c4d71b8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "bd21cce86357b258b9d46c9d20f7644c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "6f87ddca1dc2e4f210e2c7c2d34ddabd"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "e8895e8fb3f1e899cb1a262d0f5e8dc9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "6b7fb74fe7b29fe25abe498958604438"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "b04a6a469a6fc16be248d69c0d827093"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "68f9e0aaa529629a67479fb074794dad"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "51d9c2ca10759ada0a6b76a6ad7db288"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "a2913c2ad70b426bedda7779949c92c0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "eb7c21d6ac75153e1d68a71b5ea9b295"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "0986e0661fe7723c79f56a8d031979ec"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "8bd330aedb60fea229cde5e76c5b022a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "99f0e2fd174c4b862bd3ef1e943d763e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "f2447c55f1f60964eba3e9540553bafc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "8e3af352ce2340c3d09b6c067b9a2428"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "0c16acc540f2d6abe066261481c8f94c"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "dec95b0bbaa50ed25e0aa8201ed3c901"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "e04caa906273015a7ee99d9f38dd4929"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "78396ecd0e54b582c16acb1169491cda"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "9fb9ef29f4c9dc42faff7713196bf539"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "58e1fd2664d8fd7dd976b4401b68e590"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "75709d257bfb247efe40c096df053db9"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "6d2b724cfa6a199604538314688b8727"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "2977167f0a3ffd6ad53d778ad131dc61"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "b39358c90a63932db6e4b7137b08ec8f"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "d7c271f267293f1acd8d262a295c9a99"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "19eeb19ea9268ea6ae130a847a3a52a3"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "486a1308afb2f2a83005a550e9bc167c"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "80ee5890d9577c7eaa012aee16671d6a"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "81c942d7379dfae2e6992e980bcbd3a2"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "2c8bdb15156fcf16ab5c4db9029eb6ec"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "6cc1e2c9893838ae05097a03a7f95893"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "d5fc66116fdad54b9575d447eb3d24e8"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "fb81af5d276d8cc79ade994f2f6a3b7e"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "c32adb6431eb40e3779d0139a1e320a2"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "0cd4a8dca4925caa84596865bb563d32"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "660d9f0e72dd90e1035eb9b4ab4ec613"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "5d9caa1bb3c6354525ddc42f7079fa05"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "dc4b490f5b317eb31346adba66e611e0"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "62562512b08dc67ddd7c105a509c56c7"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "4b49f20ee66207e2e26491eb0f0fa658"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "a1d6d91b3608fe4c7d3d892b03de5389"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "39a893c99f6e3241595394bcefbd1cd2"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "fb9cafe370e88bd4424d4ba27697ca0f"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "89dfcd506e464bb56e9395e11f2f0e76"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "93dd8b7723e9502a5b66dd4bfae8f8f3"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "abb94b03a038e8fb7b8dd37ead86bb33"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "04e372c8945415bb9bdc1a0962673f83"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "193123dde508af168ed7c166b094438a"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "b83cf6a60c5f193ce804f7c4861e170c"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "d7d651f3bb593911673145bd21978a65"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "75b1ce8e7361d172866e5bf1b28f8d89"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "b53199928ebda711cf35843bc23b561e"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "fc649c9af7cbcb380cd802c335cd89d0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "6854a9ad12a8ba02ce22f65170a84ca8"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "f9306b0b756db035746a175b4d738f98"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "109f763247c2dabf40829517fe2d318e"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "73b8f5a962658702fa0110b9f9f4ad83"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "d428bc5e15308bbf61ef9476f613867e"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "4e5ef2139f745651738b2720da3a0649"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "783ff96726bf0002b6c6fadd3b9beffb"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "7e3522297fd2d0672e3ee148bce73e71"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "6845223e9275808023f1cec24974a1cf"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "7b437fe1c4cdae6fc9a0f7358be2ebc9"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "9c51197dea69c3cab0cc8c20be7c7533"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "66a2e1b5832f0e821cfea6387179c74e"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "ca333755c978e2f2c10a1db639d2c723"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "291f2a27382d8cdd44768d661ea0df39"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9b38bdfce7a1e720fd4efeed2fb5d8e0"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "7c763f4aef6c98c2d8eacb9e973ac30c"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "dc05bc0117033b1ac96175a8061fa15d"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "2764a46f1780b43ab6af7443cb033ddf"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "405d342935b010b42e69ff652b06d4c3"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "ed042242350e2a25901f1fe2073960bf"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "561023b199e3ef8d3ce430d5ac5862ee"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "f23887d11586e5ace6456f19ed17bdf7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "cacdc835d7ee143de8d00b1426579f30"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "a54ffce56a4b414505617a4af442a59a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "f208ab66c1b3432d301945d4d32c6e36"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "390c284895e081f91c0a3a8caef042a3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "69e0a144a03eec67e23b232b7bed7d70"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "467dee43e0146b1da7e1a109576c70a6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "855f3fd196c18c771c628cc5c30b3753"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "9c3f4050537dbfa3ca7a969024683903"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "78cb563888e371d519b26576912e9889"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "4adf65e9534c52b94efcaf01c3feaf03"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "2d507113ac3d8da68e0ff6172deb8bc2"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "ef487bcbccb335a161bd617559830ff4"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "065a30096d1df4fac1ab633daf8071e8"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "dea742ff1d0a9ad1dc2f2abad630358a"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "f99bc5eda34359234b0ed3517f894b25"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "6fc17b07e0b91bd63f3af2cca72d0fa2"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "b4c9121e11061566643885be4dc19115"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "63be82e802cb997546e07e97b3b3db84"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "692028b804ac4c24727f470ce6e3f089"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "1736de5a327467ed0b01097579c0a062"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "78520db7d3c0f62c52681fe0b367d862"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "d733953010d18257e3042999a0872c26"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "b242c2b407b1827a26337e3480700140"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "cd8a6fe3228cd7ae36900993aebab292"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "0a033238ccc7b41f61de69b08c99594f"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "6df8acad8d8041c656ab458dabfa099b"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "dc18a6bd97a0209928f045c87562a4bd"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "4d4ed4d670f0dfc84cd3753c215bcd21"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "f13cb1c494c42d16e95ddebe11a9986d"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "387342d01dbc09e2354df1c4f26c5172"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "68b852120b47b351895ef7d2c5616df3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "765d19087969fdb4fd19f21859936ca6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "abd5890df363628980a462f641b3d2ab"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "1bbfb58c08a7298cab2445fe47967017"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "94ed89457efff76bdda201cc33ce08e6"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "8c893f03731d3278636d80f412f508e5"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "f61f199817975c99df73eae310dae34d"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "3123370a4525081a29f7bbb9e0667ca6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "c9776769328c6bafc451683edeaa88c7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "f1d792c0b2486cb437b00848f5b153ae"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "692cce7e972044b0f3db34baf6488809"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "d4a2c69e47b64b88635184b6b6b8aa01"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "679ff8c2a1da62f8918f105f7e5bbfa6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "e3721b3dbcc7ea6912c601d405403872"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "f98cd6fa45688082f0163d3b27891b0f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "9121597c2f1c9c2d71a0650ba8dc6cbf"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "0fefccd33beec58d097a01f4b477ebcb"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "b9df5b070e157acb43666debcde241ec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "b2cc08273dd5fc5357d14a06dbf8e17c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "af9ecc776fa9de9de61793ce5713e4c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "7eedc2f8206fad803f7941ec8e51725d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "344964be0dfb0699b6edb9662fad15f6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "186d78822d88f1686d9788c441d2cf54"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "a3644c1260b8040d1653d19fa9aba32b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "11d6995e7cba7dbcac3b16f5b5c9a84f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "7f40050cabaa5fbbb74749f95f4ff3b3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "f8f7856938cfd8055b0902f31dcfda23"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "6400dd3714abc6eaf26d214a1161b493"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "f991cad985563d0d33d4d1d775b43142"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "0b4f0cbcb7fe19de15c9b915d0b8b5bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "a48bc2396ff2e1382fae9957499ea9d9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "50a6bd24a7ba46fe48aa14102ad362ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2136c23c9b2506a28adb32f9c1f816a2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "573fedaa3bc31b902597801f9634f8cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "fcd858cf9709d1ed727e96e4a877ab7e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "62174c2b5558f852a6d6b15505e10c96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "7802a707eaabade7d6eb8688e5b420c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "937510c1ef9b3fbd0813133982b6b3bc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "9ec394a86a097fe4d4a5ee99a4b4e46c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "a19a7d779d56d4969477c4c6e1c70b99"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "1ec084f4313dc7b83511e0a57d8b58a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "f646091c8ce413f1949d475d63082008"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "4cff55cb862b40c89678e51094db909d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "6e04bbb485fc574896ff53b8ac2d662d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "7417b2575c7d6aaa9b0eeb8c65baffd6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "3a5d370e9275734f92ac6e180ec8b7a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "62563478fd52448b8d07bcb014f65d56"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "b6515e086eeeefa1b375f2b4f2b161c8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "5ffee0cd49a5aa70c95fd76211179d24"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "5ee0a822fd5fc65d2c41106ae0d7264d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "36ce9ba9718699f4caff1b088ea23785"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "8a6aef29c439bb43698e46010c5208a3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "58ad62a92f5a27b384fc9014f6226141"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "f673cebf4f0340267b9a1929c8d28767"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "b43a06f84a4f4358754c51b7e9284bd8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "bfd0dc928fb9a44e7bd832321e64de8a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "046cb9dd4624902434da0dac7d6bf28f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "dbc6a3f699cc88dbcd0eeab4e5955da7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "de73e2324397be9f5009c9e8b6fdb2bf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "1a16716527c87f4b73774d0d4746c848"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "6d0725628cb145a3d7fa8bc51de79274"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "14df3ae2443408c53002cdd497f3da32"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "cf32a2854e9549b481878de3b4ec357e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "3c06fd0e8b47e209d8ece1dfd5f90e35"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "68dab72282a764eb0f6de60c04273efb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "822df593e4780890bb5fe8288aca0f18"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "33c7728d2f193388a50f1546268fef7d"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c1867f506c75a04d5d00c674a58f48bc"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "3634a3a69dc85917d7f3184cc19c4a0e"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "4f3a810617b1af043c91a69548e12698"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "e2df02817c73576f6b9463e9175ff008"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "bc23b7dd3e68a2eaeff20526004c2936"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "f50ccce97dfbec67c39767384ad0fd00"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "27f4324b55f5359339890f2847e1e02c"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "03618236324b5513bd6e8d3510aab056"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1674fa37177465e8ef315c7069f91e96"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "121a3031a0ac2678f0a2fdaf5f246ff4"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "a65f14b9c4b1cbdd07e41f364bd1f8e8"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "28df7f7ad099598454637de3d9629df0"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "45a9b47b6433ef68f0b141b11c08246c"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "bb24de17a3537fb4fe97fc5b6445a76e"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "147a3aef57de908d5126d80e75f568c0"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "cc36438ee878e4aadd95cd49ef714dd0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "77111e7f6ac39e8ab317bc39d715cf3a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "d8d21a42cce98db93a99f4817153c5e4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "b51fcbb8dbece02c17eeaeaa997dc6af"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "8b0621bf745cc651b83a9e2bfcb86efe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "250f69b57b1af71e374720dcc791c9e1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "ca2a63a2d4bea2dd7680a2f325221c1a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "c12b4f84fa5a2daf98a333a0c955f06a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "c290384f2b873497be7ab58bf83c1451"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "e7d680212f6f1852f184b4659637f913"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "d5ad6e445c516174eb30fb249192cba0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "48adb2f455ef6fbf57302dda2348cb16"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "dcc7f0656473e79d1ac343aba05ec348"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "d59a118bbf1da7bc4094a47e0fd4b075"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "6a185f7b7a64fce30573bcfb23584180"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "49cee43b3eb29a075ced3cdacf9c6354"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "9b6a60297eaab63c69e71f1cbe90e245"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "e78db596294a5e57125b21b510259ea5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "32b7dc4d3a9c057a69a24fd7a9b21887"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "ae5f2fde4caa9517adfc5f7ab5d95752"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "b66218b4d6f401c6ea6d0c4bdc2fa23b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "568c0a52719bb51124ddfacbe6603c21"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "66bd1ff70c384b60d6a2b36b0376ee82"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "7b95730694e4be1b4a2d65fc752a5ed1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "dce50682697f91df94cc3c8948596802"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "55ef1e418a80c63b8216a562b091f336"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "9cec4a04b28339f6fdc98cbd0716ea4d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "7009c48f0dfe70dc1f308aa1c3cc7a2e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "dd87d751a79193b56ec9cddbb68ee95a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "39b0b1d061f3da28da42f30e5535e715"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "693f5f0fe314fcb3cf243cfac84d716c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "7b13d2ae41bdc6fd36b4f4b686733041"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "455c2dc26725dc803e47e2912ad6dc0c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "0cd4e006bfb22aace3d9270614fe0ebf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "680e497d4bddc471592991b5facdb953"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "b0a73908925ba65f4d35ba30a7f00e07"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "8babc527c46fe408acb5c2142d6e407a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "23cad4ae2535686dfe4dd4e8bd8794e5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "39bd544d95f2784b287186d9b0e3d5b7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "6d5351f8df4d6eb91cc48bfe02dd8dbf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "83a6f2ec7662aa318455a1a455a8d2cb"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "a428553bf2d61468847a38e069e36887"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "18286700e3adbf0926f3d97c1e444abb"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "eeda47c373f57a6c8386d416fbe2fc9c"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "7fd926a792dc642cd5909796d43e4a6c"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "681f944d01e8511ec01038f3b86ff0c0"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "a00e7d27982db0999b75ad2e3ae1c973"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "7678cf4ddd020aeedfc0a33e7ed5530d"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "8a38e543697f07338e4285438b92a45a"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "0d6416e8b34ccd65c3d21f9371c8df9b"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "f8570644219d736d0da54fdcae2568c9"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "c669007e1e57c90f54978326398839b8"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "886d6ca2ebe61dbc2707ab52973724e8"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "c9c777c228bad4a9b0b328b8b0fab97b"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "82518e9984202ad9d388812b8523b107"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "b5d6a1109a0c5d7c4a4c6c50c8e0d144"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "64312f6cbd7979fa1b296fbf5afaaa59"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "dffb829b29c4e6c240bf10ac9ec58607"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "84196a078028bfbf332472cade2227a5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "ff062a28bf94650787e51e11605eee81"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "783c070e1efe5e998a8619ac6c5bc1b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "3e56075d8bfc6d577102c86867718074"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "b7ab9c7edc61b864760f0828394ed644"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "86239f8c1df5dfbf8b9a352cafbefbd3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "1b8db7fb92fbd20cc22794adaf38d5d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "96b30d85cb5304d823ee1c1abe439ca0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "edecba9f36ab9f77181d0e0aa060e22f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "6813eea0a521370f8247ebeb379fdd52"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "3e573dea684efcf7b13f1675fa1a7528"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "9fa25c35ec8d2b152ac846d5c29a3eb4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "70f0911820a1f63379e384a170cb8b83"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "22764e0d912435a4fbec8c224d96cd6f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "af8244fbf13d11b51d435dd3a6ef438e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "e34dec8bff8fb6888a1e4ff83796be54"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "5c675629bc3b1c6eac584069254db9dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "d69cd17c7bc78fda2d5d7245998f2a92"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "e8107964a2e97a053189822730c95078"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "ddf321fcba427947f9b14e576e2f24d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "7200a70fa38c036fb2714e73e7b9995e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "577268504eef9facf33a8c391d81ce99"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "6d75b278bbcafca9490e4cdbda55cf05"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "7f2bad1fc6e24d97b7ae835945b554ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "7629a8502fe6f966590328545c5a7384"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "1b7f4dc9359cf07be3bdc25e39cd0a9b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "37a7c92cf45b3149548f4703bf070f04"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "504570cc5be38b83a9deb2f44a574483"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "672b5a8abe355fbf6fc55bbd3cfc279a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "528dc679149b4e3a922106b3795cbca2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "98fc9a3a02ec8dbfedffb422f2dee285"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "e2c8e50366b1d3c7ce49ce228a25c85b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "e9e0dc7d314c361cf33316eb3a5bd603"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "9f1fb583faf408c7bc8db5f311d11f69"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "563774ef5e826ed7163b993ada740271"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "ac4d5bc4a8287768d7fd0d346e1589d2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "058ea6b4a2bf2b8e594861a8fddc378b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "d12c1dfe7571fe8af9c975e91c7d77a8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "b354005862b3c4999a6d86c6f97bff50"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "3c2e0ad1c01c6c1f276da283a149de0e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "626d8a5a62d65845c80205664b76ba5c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "5048949b73fb51ca2f94a6174a8ef050"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "014cf12da78e2151cd3161d894ac9fb1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "7e248267ecfb5d47d0ab9a78072b38cb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "898c640ccc09e4e40e30d7cefe486d54"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "88676daf650a6b36d2122ba08b880b84"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "09ea5fe14e6a7dafe143d89c158c6946"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "c4971bf832b8063d2105f63ae2e9a1aa"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "728534de2f17bafabb5e996405fe421c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "96b7fb8348161841607d64dad6d5c3b9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "5dd6401c85c5c215be36588a94dbe889"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "2b1f98b4562886d949c021ad81d917e7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "e75f651078c6c238caabb60992c277c2"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "a5a11512e684facb3f05ea050e9618d1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "84b3a189875a1e348fd2fdd63d4ab901"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "484dcbf4493bcf5068f10f344854648a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "080d65b0e9f2b8933a67fdcfc9f2011d"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "4b6201fc23c0e862e90e30589be1f720"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "8a49c55c39f786c3c22d79a9c34f7cd2"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "017d9424fcb0baa8233892ab9f67f3bd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "495b13f6cf1bef05416d8a28f448f138"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "8e76b20ce812519575c2d9f63731eea1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "90d277fc1dec3bf97549f3490817b388"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "9b99f8d9802351a0e9bd33958c4dbe4b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "485f544688862f19672049088e495c5f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "e21dea9c303b2e5cc6d1b8a7bc942b32"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "0dd210b9ee0dd4033f0c2154dfde4e48"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "8ea80afc6da1310223ac2f93989bd995"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "01ee40a5c49c7298a0e68216e22b1945"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "b3c2968ead5443c876b4029de315b3dd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "6cf6a11783f06af2ea072591a69e3e93"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "9a0f5cfc22f042dee311ae23ea9d34e0"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "a742e480fd95dfc078bd5d91e0e505e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "66d1e481db6d0d0375b55be7d8b41c2f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "57adf887f7d36741e1c96f7f7b9d43f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "24982b8459c82fd6c2a89dfaea5aaad9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "86cf6ca28921420f01f836a07a160f27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "73547503e56b4aa2a65e89dce0b1f129"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "ca357c7d32382d58453f005edb23a7ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "cded541debb0cd2a37db72b385dc2408"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "1d97817674d6019e78ea7056ed4ebf65"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "ab75e942c0f9dfcb91dd95974df78c43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "bd028921ce47d48851a75f42fb9ee4e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "43100b2f03cdcd0203da00aadcd1c847"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "5ca52bc1a1dfafc046d634819226471e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "c593d8354328ccd7c3fab50f5cd3d8fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "70593b59a81666b4502054e575b80575"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "96e2d13b6c7e4b3bc061ac2c3e856ee6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "bd950311ea9baf42fa27d4c28af2d641"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5b0b110ffe09f2ec0628d7f67ffd9b49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "9567588d5c875fe8773d8cdbbb608a91"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "92c4499d32ce9cad3d4783d18a9b9468"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "0ad67a4b591f6191879dec9bf148d922"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "5f0fc425a2f939417a2aec4a93b01f79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "9418198fb827bbda8a741138b6142023"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "8d9eb7e8184645c948451eaa5bd53b31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "dd723048eaec951143083447f84fc4ac"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "c10e527971a993f0cad33f75b8cf58da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "f5f1acd09bc4aba0334682d9f39eea59"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "62bd14100cd25e9641e0175a078f9855"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "496f7ccfe51e2ee3dee50c08e1c87471"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "0934d6a0bd886b8611ac6c54678437ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "4c1b68ff696f6dec4cba6330d7ca1908"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "0fd96faabf912656988e762bd2d9c7b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "09ce56e7b2d2c31adc9c1a2854c7a89e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "6892bfe1041d50ce4ae7ba7949ecb9d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "fc43de747a1c308831111dd1d5caf200"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "0bead56bcc6dadc73a856efbf66a87fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "16ce483501bc058b4e44482f49b01626"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "07d1633589555b7ab8c36f3a0a888731"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "a5b3bc4465b49427ed9d468cb9af0f80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "31961835564082a5b018517865db16a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "e96cb5d4627967c72cae4e0fab046e5a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "5325dd29281f0c31a7f9e18a35cac60b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "7bf4a75b970e15c5ec00b83040eb2486"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "9354b11e7583fbd26a8da95360bd991c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "572e55a7063e55696a29be28fff3dc81"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "daa61ed1a8b74784646e1c05add66316"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "cf215a3986ceb63371be2d9502345542"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "f7ec55a4c2b1b6909213dce5b3c2564d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "c9b91d4dbcc4b75159e2987e528006be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "7f8cb797df81d9e001b1f7a44c2f713b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "a145fcbdf312816c2d1220e912f18fc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "4a4dfb772b1dd99728fd15d79e0db23d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "8a9eeea4ae89ca37390034322f6c487f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "2beebcf1e56712eb63adc69c8382fbb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "0b119122d369627b78391207c629feb2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "4e4a0ae5e949d6e038ec104ecc037bc1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "fb401d1b17ce0405419b37af32ef8b99"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "dfd4b7bf3a1b27ef198018ce1d423e93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "8dae35253b33a280bf5daaa3bf0ca59d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "1400f189bdd61b687b49041206a1f445"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "cfac66a29ebde9c8037f0aea245dc04d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "ba152ad0e68f18d77d4cde37e998504c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "d49bec086c0811bc219e8e21a1590dee"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "95d6f453a3b634f1015582fa97cfdc8a"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "f05c5ea57252a7ae9d2eea151d1a31b2"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "9e639fc97ff7c82ac447d04443395b01"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "1a757f6413b68cf9de7c4066753573f7"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "a9a252a556568a98631d83cacd7a35a5"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "06c11491702256013bfbd9ce00a54b08"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "361c12796c96c9231c84a31b9261925a"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "5666a3f3e34aa9fb5f356c62cdad1879"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "cde12a2ebdfbcd0996f3f93338d2071f"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "59fe4d0df26b10b4b4e60c0b51e1d617"
  },
  {
    "url": "categories/index.html",
    "revision": "aa37a00e77cd8c4ec4222b5c4c8d7cd1"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "9f78c83fe6e24c8a2137542236075fc6"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "2016e5bc5ec017ce0e8d849dee65df69"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "70281c44645fcff50d5e6a985459fac8"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "1b5c7e34b505d955f05fec09ba5fbe13"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "31e226e4377f6ad2362e9c0d49085f1e"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "8ce9bc078fe26160c910fe0be884a765"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "c0a9f8932e7769cf1a8d8e145b492942"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "3ec0a3ed71b5bb055882ea68fd175d30"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "37e15e965a07fb435b3a21f1d6e00a7b"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "8bf74fcc9fc1a6d825d55076ed59b182"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "e4822d52976e7ed93129607b8aece5ce"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "2fb746a972ce2bdb3648997082080c4f"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "f0b237274dfe578cd72e59bf761bf1b6"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "f02298702cd0fac55feab794bfad2956"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "e939aa58c86599823f6c30a40fcbf948"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "2979b7af846f311cb42dd85502e3016f"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "c1b4f120a90a0e10c67ed22d2933ced7"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "aa29f231f751f2733019cf5845dcc2c1"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "4213394d63c052cfd4519b1b145fb06f"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "1c8291cafeeac921049b038c9ebe7dc0"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "1c3099285aa2df4f764271956bec5619"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "830431d3ba8b4062009ad948a1247293"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "1ad708f34c15df3bb8694e4d15f35dbe"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "182e3c187388ee606f4c6d2b43ffa2ea"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "140e22e27fbbe409ff19ba5cc61c4534"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "6f03366dec59ad31080b63921a5b405c"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "990d208b70958caaa941f3b408e9d3b5"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "751597e4d1a22c6961802e665aaf2539"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "e8f50393f4ab20414c94cb8ad6e4af39"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "732dfaa6374f7bbc2c07c6701bc8d790"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "5368d4b9dda4063c32579893c3c4644b"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "5b9af7b98f1825daaf999bcb7c80b54c"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "99cc3d14c57dc9b44ee58c2a45766d3d"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "f26c3ae9a0b5a04233b2b022c80443ef"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "e127f5800f3a42b1ce980cf111e6770c"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "b3306ee0d3709c0e4faf7acebe635a3a"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "d3838d58270ad386b4a7f384e9f7cae1"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "4c0bad0a96f9921ca26849b8e6df4c71"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "1a148f4189617d7a39c451cddb9488b8"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "6a25c7c1822683b10c7c68686ad10538"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "5e139d9ae4b1590e590dd0a7925664c6"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "3add1e4f60e00b8442e5b70e05249eb8"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "01c98682c18d200cc82be97d2ca24544"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "ea23ffb9bc9e6eecd9d38fe6c2230bdb"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "73462519fe8bc092ed41fd48db3355d8"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "38a730584042e1da00551e0e01b18efe"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "a71ad6d4f38aadbbcefe9db6d4397c14"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "858b41591940b10381eefb0d800c44d5"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "b6d9dcea6e4e71041a6439053ae71d63"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "35bb7a53a78f7810bcb9af59abd06302"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "8e49c11e8c68a26fb5d62dd3d139eba7"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "fbff6162ec057e073c2e0444d7dfe4aa"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "31f7eebe2951af56c8f2150f678bee6d"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "e70ec8bb49fb25b716dd27e792c81200"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "376e37daa48e7b1f5b0dda964b7a991a"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "98a92bd35f65d4a64ca6a1984e79cb8f"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "4b261dd19f18a3be3bc121b12093988a"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "9b7ec33a8eb48c311572b27c03f059c1"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "9c95a6de232001469a3ccf62c59df8b8"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "bd2c0fc6da817a295ea3183023d38e1d"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "2930f1cbcac0defd21d612be8723e940"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "787de2b1387975b6762d2870c0ad30a8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "28c3a4ec0ef8daee5782df4614cf207b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "a5940304d5c1c52f5b5e3106d14e79c9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "e7d6a80418b2bda1aafbdfa5df62da79"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "5f76f75e68688acc4625c87df2ad484b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "2eb6d0d4febb0dbb8a2e7cb77e1ee4b1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a6a1f1fea1fee05f17e8cae53f7e9b7f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "f6f1278fd1a26847fb40ed3a9c5953c4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "dae48a0265a5678bd7c921f59dde34dd"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "8ba9f614f1b04b5ef7c17dec7cecfca9"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "bf61b95f6c9990a840eb0b6b4319fbff"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "46a6878f626c891918ab059a984a5d72"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "9d5a638a2111a95f9a54fed2b1f9bc22"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "becc8d649a887cfa89336041b431dddf"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "44b8ed039da9d926de8c816ab9c04d39"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "243dc7afea7cd269cffc312c06861521"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "850e6ca60bbcb42ff482f557e6cf185a"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "405f34afabdf9a35cfc7f4e2bed16146"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "f8ac683d5d9f08dd9baae91906a17b1c"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "6a7ce6193ec79bc9a7b7bb3d65338baa"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "12ba85f3b47f953c3047a88ced988be8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "477c281c235c833288bfaf74d4e5b339"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "858895520a0b377e8cf2b91c2d3b472c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "5685047e3a70bb24be9bcabe103f6d00"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "81ed5c9ac577ce6a3c561485297a5e81"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "65ea477dfd0aef38e841b57d14811245"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "ba10b0e5ae966d3efc372964a5de41a0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "e2dd7bd29e836ce7248bc4a6240e0549"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "8ab1452a63836a66afbd46a939286456"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "83ea7d465b8045d9916b6a5f8532dc88"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "47572979ec1cc53b7f74f363ba1ebfa8"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "65517bd4660f8768143e15f31d0b59e5"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "6164b89ee7314d3b21ff48dccd992bc1"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "5bfe5a6ef0de6e0c8369e61efe07ec93"
  },
  {
    "url": "categories/java/index.html",
    "revision": "696c5a523664f34268a324ee3c3e9b56"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "c02fb89221f56a6c7508d114de49285a"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "9dfca4e6bfd778636f764caea6e45c4b"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "ee9ba802a3964eef9622e48e81dba8bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "b3b140f8ad59711e8925b20dd88ca5e2"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "6ae676aef95762ae39b26867b78c5bd6"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "7aaf9d80c7a309eee472c31b73182a24"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "c888fc26bf053709fcbdc0cdb8f7e4a3"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "8657c75564928800bc61373ed691746f"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "bb0a08d04f7506ff613c76c526259557"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "f7b389e5a259ed9935217c57b8d6c443"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "2f018d5d81d9dfac3f7229bdfe416a9a"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "02a06b2c6f38bdba0881d56348a8ae1f"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "d62c376ff66f3c2b9c8084fca4087a09"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "e151690f662cae6f674a63dc1e66a091"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "54d5206f88420ca5984317240104cbb7"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "2b84294ad92b720e06015f8f1b0adb99"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "6dfd235b6b8daf5421aeebc6b0eb6dca"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "72ae26a7761cf58136dd205ed08ca8b6"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "b106a9ffe173562f9aceee6df9741cbe"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "5df8ce834057bb6441196eeee28c87b7"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "586b4b5fc4e608a7fc48fbdc63432aeb"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "2aeeefacac986899bd72e3c3d80204be"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "35a4a89936b87a094087de8b310a4907"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "b1ae7c62f3cfeb691c3c74cc0933a472"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "c0ede047ad6fd163160623b345900674"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "de58bb4554350b8a39a400f469080e6b"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "0794fd38dab432794d969245c714b248"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "5d029d5c449640dd69b027666b2919ac"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "65834ee519ba912b2c10615b21f9f334"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "3e340029dd9fc0f84d00ee196dded097"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "e08a1eb06dd9fd6f328ccd54aa202f94"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "7a1d2bba1a0f6129921ded9588abf826"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "03004c0882d6d5b5aa6387c6b60e06bc"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "41808e4224311df0b5d3e2a482dc4aaf"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "3c877e75a739164ac9e62ee1755f2c3d"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "fdea90179eb4df0315bd4f35d08f562b"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "d86becf4f76afbcdd2c9179644b3092c"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "725d3783bfd7e2b3b2be7a089631f47c"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "82ba11f6e1942b79d3e08a682835c8da"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "d0a39d1f00f3f6f59a1da34d506e0fd9"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "8dae59efab05a9a7f7b3aebb06e844d3"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "8f1ee6f55597e4b80c0389d86513a0f7"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ce6be9a0fbdd277458defa32a124869a"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "378782ea922acf41bcbbf018b60743a9"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "d780bf29a5fddbdb95b4a541a754c3df"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "bad9025706fa1ab6b883b841d27ac95b"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "9e3bc95dea074e09546ea42e2d7437f6"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "ada02ae17afed77238a84f231f904bb5"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "beb2ca75b91d34a80bd94963625049f6"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "eff154bfbb9e50c7a570308b037b00a1"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "99c5062c494c9a3affedfc96f2eea7de"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "ebf282f8c36a15c395787e3039a73894"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "b6c922e810853e697b6aeb95fbc3e0c9"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "ede96527429c576e1c69fa7a262e929a"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "d9a344786fdb12d1f0e635316882f0c6"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "b6e186fb6ccee645b737ede202d50abd"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "6b2567bed44f4a72716b46cc37e2f68e"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "45b79bb3eaadb50066f8e08d4995659b"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "10f493ca4e70625f2833c9aba5a4c4a7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "a87f3442eaf87f3fbb74db87f012e2d0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "edf911526886864e0f5d4a8201b8d4f2"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "11235a83451c398c594b7d7f9212b1fe"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "0a5727223286db7974a9ed1e46bad306"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "720e7f9baa1bf5e4d3cf92b82a05fe44"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "c05b046d6c4bd9097e0688ad24021a80"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "806dc833093ebb9699e707ab53c631cf"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "efc48fb9488518d52d0f733a8a2060a3"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "c98f43f4e27e1e33e6d3881112c2e62d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "6d181dd3c095c4a26281e57f29d99d7e"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "da216f8a68302a3c6635bfe42a166be9"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "0e88ba8269020d9114f20def13fdfc73"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "f50836a9f8c7f70697134f3e300abef1"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "708e148d6cbf5e45ece6ae5e421c23ec"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "d33e85338dbb66c0401b8a25432bb502"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "6ebb0f47ff150ad8da85ba2ac94a91a4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "b962b0857d30d333c3595f68a62d4076"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "61bb64464f5346780c2af507ed6f3fa4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "512b2034f5f3d28c9a17175d6e87fc75"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "288648764649e3355cf1304bed2202c7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b9e09631c0219f25be5f89d2c047460e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "dd4d26b24867a2721a41359ab44c4e96"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "c63f5df47f9ff19c8cc7eeb4427d9ea3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "ce418aa6afea47fe4b2fc9e1782d7244"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "011f752515f928e3f430785f967681b5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "28e767ba2e108b9be8a65c018fd660c6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "55d07036951c8564b3ff781989b5d03e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "90741a89fcde8189f0e9899c4d2fef61"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "8611738e11db9feb2c2b50701806869b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "d7cab8cdc104c55d4ef20c41120e385c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "49606b3e3bbf80414d2af5cfd58372bd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "bd61ec08d31de262815f37f30aea02ac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "8e7e2bbf1ca05f435393eb7317c58c5f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "679738ba5eb25fab6c7fa3937d8b9d13"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "ca72de26c01c245b34f13551203c20d8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "36819fba66865c60ddd2e979b386867b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "f50c6ac42e834cbe0dfea2b3ba7a2461"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "9ada0f6fb97ccddd1920c744853a2f38"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "13d296faa4e378275ff31b4a240e3835"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "9ee031921cfea00436683cab52795a50"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "39a496c42b48f6f5339d126b8ce5ef67"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5f7a5ed554bfce0b3345366366947eb5"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "37a181a180e1b845e182f93705b1c365"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "a84500f2807c925b74598c06dd580c76"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "77ec5f0215d5618bf78f178e08be0296"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "4770c0709351c604e516af32ec3162ef"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "0f969f6e70c5fce62e7f2a504998d5f9"
  },
  {
    "url": "categories/os/index.html",
    "revision": "40203239b43b12796dcbcf3a75f0be9c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "28f52565aafc77f860649584747630a8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "94e631f8af51520eb8b4a631152cecde"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "1a4699d8183ae017154cab8d80502af7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "67a5a3337d8d2b0102078b0e5bb35b34"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "92a77594e358a40ac1719e8ee17c0485"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "ecb9b5aff7407bfeb3454299ae161ad6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "9dd772bc1f1bc445c95059ec9dcafc0e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "973d7fc9d98f3e467b12e309e0defd1b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "114613362d1225164e649786cc2b48d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "07bd6295baaf7253b547f2ee3fc8f87c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "df43e3e9921b7cdc6e3a4ab643372326"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "679b469245898249a4692c1b8b4b6a8f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "d852d50beb1243ef3cd25898036bd2e2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "f5228e98b543688163429518840121ce"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "dad5b00cd09173bc852ab37a811ed39b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "5a9cf78d74961107413a2189618f8f01"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "1989a6ecad561d2541b9dd94b95495a1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "f227c8542493fbf82e834826ef71a64d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "5d89b30acf4bea7ce72b8dd077cca18e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "2bbca35950948b4c70600a76ff5c6992"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "7b3e926586beb7812e417f7e7b88a789"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "fd9cbe242c9e4c9a457a7709d1096169"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "be2e073085dfdeeb76efbe904b8ad591"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "f81138adc93159c42ccc0c0c42fadc41"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "c3707b000c0f96b232e51b79e780534b"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "45b164e12593ef238e23ccc617ad04f3"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "cb07a6d8a34a485376de545c10f33596"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "9cf135db1ee86f83b85e857247c8cabc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "df7a8b65bfb3ff62a32cf6ea95c2a28c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "feb413ef2c509dd18fccd68922571330"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "90ad12d7c2d4248952a18dfb1f2ab4a5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "c3171d9e47f971a4ecd2c98d0dfece55"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "84560b1c5cde8903213d48b2c0c2cdad"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "acfc2589ec746e54c5e95bfbdda56215"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "6e483f890d7125c71f9a8131ea8ba7b3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "c469745acba4062192a5b25830a9860d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "4b8e3cd7fc709d3300d907c94457a0f7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "faa2899d849302dae976bd13fe11fba3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "8b68ef9d9652fa9868082a9c4f0c41af"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "0185220cd35a83f0d9c53f3391c563d6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "2bd7291b946427ad6f654dbc97c4a0c5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "2db6bad27ec6edbdb26e9c4d43b1ce4b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "ffb0bf7f10d84861f6433058c088728c"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "34784eb7547c56d3947875d1458152ff"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "84dbc7773db74a2c1696a6138baafbcd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "b3250e22731bfd848244165bde9570cf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5929a895e47e52aeb211d433e8f7e6e4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "ad55c60bfa5a51700a193ac49d0f4f9d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "8f23de47a9c7f42e7ebdc560063545d5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "b24f93a167988caa96c871b2ad20a451"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "fd6987949e7a209dc3cc9ad9989af6ce"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "ce6927f9c035d3832c08cb047278a911"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "9b2390c0841a66027769c5432837dd2a"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "b3d3e8beb14b28cd3fd37f59715c44a5"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "e0ed68785ac73a1e36db36de2870895e"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "22663b53bf58a73f0a5afc21d73e6ed8"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "820a5d7cd8a4cc2bfe4c009864088467"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "f9863e689e5642776b3d00b2cd655425"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "7c6ddaa4e739f31d652767d7a821eeed"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "91b535f910ba77c64683a8a5179c1571"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "18ad919ba5710e75033ee6d31bf71c15"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "476e126cd08261fbb3394b07c45faeec"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "dcbd71c82af09ce7c6c8020cd7c62666"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "7db0a7ed859575b26b0d0c1a75d00272"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "c26fe8d964b9cfe6049f42f3b31eea47"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "37130374e94b63f02b187555230d9318"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "0e9e3b324f826da6cc4bcb40fffb93f6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "e09f842d11286f9cc95f2911c6af9e73"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "088a981d926e73f4d61f5bcf39517183"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "f9b3a414101ce3b04cecfa8e4ab4190e"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "020b72cfbcbb8534c165c1e34bf95746"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "71de996fc0c31df9873ab4e067830028"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "91d10dbbbba87829e0e84a4e43ea4cd1"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "efd65d87334ba6744786fd996a4fdd93"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "c06cae623ecbba6ac6694a1dbfca323f"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "b7e77a99990b9e070ff34adc9fbe56a2"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "36922ed2bee21d6ad507ada282be4ecf"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "799fbae7a9fcdf2124ee552ff6ecfdc1"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "625e85be86d22d2a7f1a0dbb86b9b676"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7135fafda80024daa95e05dd9d376c45"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "7da79da46625ea5aca2390cbdde124a2"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "0757a35b39635ea0214bbbe1605b6d5d"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "2a62862055e94f4e1eeb04d54dafeee6"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "21615e228559fb53b7634bca4defefe1"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "e0866220342305d3db1c56bab7828798"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "2c9a7efddac5193a3eb320f0ad16c12a"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "ba32906259c528d61151c1abf4ba013c"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "875b6de3ed4dbd9d29ff067962994ab6"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "f68ade79b7966d76ac2b80e04cbca706"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "820df1d7de081e1d2b787bf79eadaff0"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "69fa657d7d5b05327bd56016ad325b0b"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "39ab7e61f895031e116607a3366938dc"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "bc7f74fbf63bf9ab523665f16b53020c"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "30f7b0706162187680e7065d5f9d7be6"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "1114d0dd641e94fc2aa769ef6cd3169b"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "4a098fc423947b8f462627190ae3c277"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "cf028de280cd46adef9286e152abb14f"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "4494ece61b8866a8a93f193309f16e06"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "193d06d02bd9be5c949a2d3ae831da54"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "60e83cc0dee0846722bb60f0413ef44a"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "f998049b3d4a8dd6bb8f780cfafc44b3"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "6f2163ab0d0e20ded44d8047a63d2baa"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "cfc920af2b48a3dbc48cac60d4c76712"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "d6b41c4cbfe0fa86d1948ba63304b59e"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "8fdc5826b3c0c73f5889a38e6afdf65b"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "1f20677b87446e3e4f06d12ce33e5a2f"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "dc46a9b8cecb02b8fdfe628db47ea0ac"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "7420c2cff72ac0b12013cf6d9fa6712c"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "1a237909e87e3afafd8b292cfa5d5a04"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "5865590ba388d07aea3e67f6566254fe"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "c87653bec9fa92fafb03064b15315237"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "8b439baa68e2fbbb609a4a996c3be4a3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "09489ff099ad9b5f7138d07774e3ffbe"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "17694dfa44dfabcbb3f736f719f165e5"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "2d2fe26d5021ac115ffdab51384b97ec"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "0e645fc4d1d2c07d04efa69cbca00ad0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "8069bb49e7bc7a3633f0e10e93619cdd"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "e2107a5741bef4a0e45ad7040fbcdd4d"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "f1d96707af965d9d7792a0aa2e7c60a9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "080fa4f60138b6127fd28060f0d60358"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "323e33fbcf3fe0bee97c0e600e96a474"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "2ddd6139fece14064749ecabb1d02d1a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "7f691f705e28574958c17d0389072eec"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "14e7583431df27698d99cc3d41d04e66"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "60be6ae23ef5635d18535c7606c2fbb5"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "560119254debdb97f8dd5348ab92bb15"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "c5eab7c089d0b896369493574e970286"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "a0ce73d2cc13f3e2a3e85d84f2fc4710"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "e3ed699e04e9233f1b8909b2ad7bf340"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "219bb7a5bdc4a98a13d7387c44946979"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "6739593ae80eb677af27d8c7d975d3bc"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "8ed873fc234bbd49cac3381c748a7e24"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "7d79803f899480779ae635cdebaba7ab"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "b27bcc2ba7cb2ab6e93311888c06b29b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "18cd30e78a4e55b00cc3a1e12edbc214"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "73f29274004aacef562f284d9951b727"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "00de08ea5344c4f799704b798d7253e2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "88d98cc8a3d98d90d60962291487a332"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "c9a825ddc5fe252f961cff56b5f91b45"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "2fc422e2eeccb428038b35bdfedd0868"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "8ffc72c080d417cb7ab6a2ec5badc028"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "2bbd4c3d66a51dfdc755dccfdcb1527f"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "5a582fde89fd7a43d78119e7745b1336"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "abd0a6eaaf5af54c7a9f90e10f79df08"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "6082644aa03ea77cc052999f1c81696b"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "ae2cbc54797eda9c54552e6ce8bf2a34"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "28aeabb55fa3d8c4988a11fd6d17963e"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "9b11a00d8449603827388b13771c5075"
  },
  {
    "url": "categories/php/index.html",
    "revision": "c99805ed3961453527d607cc6b283804"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "194ff7b10d60c41617506f349f65cd29"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "72f6ad71a03e449ed36c0e7a27a1f2e0"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "6d24cb9550a289a8a95840727d8447cf"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "341f0dcab0544aef358b325dbb09a663"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "0b36993e92e8dfebbb39fe7acb18793b"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "bc50e58745df608cdefa75f8a039193d"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "733a8c0dbeaba6cddb61528c52f4e918"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "7027e53d0fa407860a3e2f5f6ed98525"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9044cd6498c58f03f2f1448efe21a9c5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "6424f4462e03b085daf45ec55200e503"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "c8633f54735704418e98497ad969f060"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "bc532484ee446a5e378958a3748872ca"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "51d197920e75a15de11f04a931439a99"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "7322804ca605fb2cf2a578a5618721c8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "26d05ebbc212dea9ef17bff97fef461a"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "7c308bccf12e55b0c8f5c34a2ea84580"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "c19600d3862146153b73535500f9e634"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "c90d51d6ba814f7490fe056ddd7ba084"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "2fabbae487a78df85d5b95539a6d914d"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "a07e926085b09952cd10d03c68af6d1d"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "5038ea844549d5dc1b3a33ab1862814a"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "89bb877437fe37ef61c5299af4a0be2b"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "35a129ea37430444991c52b430f3f73e"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "924d90908e9f90a7347d43c26a24cb18"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "b97fec4a387111e0fb43f9d2a4c57a74"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "8ffc6c6fdd30c8db1ae4d874acee673f"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "90e92da3a2db223a3a1a42f537a38b14"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "5bceb1ab400547315c392b3a31c75b70"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "f302a8f6c1a236a4bc8334b9d63137ad"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "3828715d352a9c2f90fd9359e6a5903e"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "6f70fee290b26df90fd8efe6d39e8fad"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "268438caf37ccbc55f05451b763c3e0a"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "a07f9ea7f9f93ab6b4004a54d0a605ad"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "dfcd0f35dc21d286fcba5586adb4acd3"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "bc3f4213ec19d047a5aad21291d28550"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "866e90cdab93ec7b6d3d305f47a5f557"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "40c84b7dfdfd0243b01153c1c816c7b1"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "57a0d2c47dd1a67c130a60483e5231bd"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "9ce0647d998bc76837a9feacaaa57f76"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d61fdb44b458cfbd0a2b9c3b8087df7c"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "96523c4c9b6e5cfa6adcac1cf9fe18f9"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "d4bd6a2f0a45f3e60eebe11464ceb9ab"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "74177cf2b4d82d6ac0442f3e7ea808f8"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "ec1162ba9eca346c490c2871855f8212"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "1d46104a38cc60e7ab59cfc00e081599"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "722125a1fb4855ac085d803828b3da38"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "37f8a582fda071699bb609f7f24d0a3b"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "73a3e9ee5a05cc462216b50f68320dda"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "92203a9a62dbdd1b54e06e72f496e5ef"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "8e5df75266bbb0dc4b97f1f18e475022"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "e98db839d28f647de435f66c5110473a"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "35985ea8bb8030573a762c1dcc855d89"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "6570b3e72c03190dbe6a8c023164d323"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "618e135843527bf57eff9d534ed27eb1"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "b3db755abeb0102be58406838ad79e25"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "859fa1b2b56b483e671d8c663512d531"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "d5e5a159a98a568622405f898269b116"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "9e59bd45ec30f18a6cd87ad317deaacc"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "cc797af1e6774a840729dd0762d6f84c"
  },
  {
    "url": "categories/python/index.html",
    "revision": "c78ae39401cac6578bf941b42b2a8c5c"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "11b77dc49ef6b0ada5384e9c94d372c3"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "fdf8a37bb086d389831547c0a4fbfa5f"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "cfaccf6db399c7e176210d03fe6804ab"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "b62f4471466a025cff390703229a3a42"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "d71071964b552d37bba5ae887003d326"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "2c92c8b68702188e2b87ba191a11206e"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "b5609c4c205e763fb6e1308545d9a9bf"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b6134d94d0b0c25dc9b4d112aeacdcc1"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "a128eeb9014340e984d5a1a62de43b76"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "93dfc990b089f33d6b770d0f1fd19d26"
  },
  {
    "url": "categories/system/index.html",
    "revision": "9eff56b31af43c01bc89086b98f78fd0"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "ff70d7c7cbde381f68913ad354820400"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ea38d88b5b0bea45cb441899e3560e75"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "0ec6c22502fd0945b06700844fb557c5"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "878f6300d8ad51f5ddbd863d51159112"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "44d9a1a3578df6e5b2ce983c6d3cd2bd"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "ce115c31608c5717dd33b0c84109c8fb"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "c89f308ca41c34624893fccde6e70c99"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "11f1490950d0f12c14a22981acd6fa9e"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "ae1358f251a0acaff3a411797969abd3"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "47a10ebbdae8b870d06aee5b0aa3501e"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "2a17bfa0b5ae732fe384f8805a24380f"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "d70756be8e07046ce2c53178444a4830"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "26285679fca767d09fde255ff35e0c42"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "aec67331751b53966a8ee0401c148c9e"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "d9ea8f25d7dbfd41cce38f1d2a6526c3"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "74a659aa071f6c0c15c4b619eae4ba7f"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "bbce98406e29b1e6c3d383a73617d41b"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "54341de93b6f03af7f225b901eea0448"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "c505ead3b894e7cbaf64d55ebdc5ae91"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "a3f8ed5066b2a74586b04941163a5c7c"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b1898227ebb5273691570ca73237ec68"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "3ae1a6b0618d77966f25aa5d5a0ed61a"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "92e72d0d029fbd3305e85ba579409465"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "8345e31d609971fd9bbbee1524b82228"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "f9c3f3a22596e791c73df6a8bbd785a5"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "584fed691b244bf64d3da54d2d9b2589"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "7e40e34509ab0bc1d8e27d15d4f54df0"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "cafc8bbbb572cbc7b07084d4bf8a06c4"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "f59f2b6bf753e65be252a659faf31261"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "ef0611e04fac863c174dbe4a83d46e57"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "1f9b6ea8aa6fb9c113763aa270286ff6"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "9fab6685711bd749a2aa6e947cfa5410"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "d48eaec9ba24335b8ee99ebfcd78c45d"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "9a66c286e6c90fa41fb0025986b785c0"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "84477a9f56938be48951a5dd453e1516"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "4e057135de4236f28c5f2ba672662848"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "295b6b24b2bbaf08c8ed339f300293e5"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9f39156ae1dca42eb9bce6fbe9a18e47"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "f4c7cf00b9bb3fbec560612849508e50"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "7ce56c630a96dfe854190db23394292e"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "6d2e4985146364f788159556af833c5a"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "9e2dbb799d36d56d8ce734277df7d2d1"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "4d6283a1ecc1c68522420eb71c96bb90"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "7442e901fbe84db62852c5cc6892f42d"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "44fcb329a3baee53cd1e820641c9683e"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "ebdde39876ec9c1192b1af30e1f25ef3"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ba084c2929f74c029ea49a361241b39d"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a08c47839ba1574ae0f8ed58880ab9a3"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "6f31b6c99a5e5e75f432d83a6505de69"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "c5d3d812f4d3a26a8f85279a2ab0243f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "c5c5d740fab7d456db2445dacede4242"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "11b79a01d5645a3e15b24d4b648fe883"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "3dc9a0918458ab8ea4e28d5dc8767299"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "bf85eea6bc51230a5f58a6438a7239c2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "3ac7f3f5a324134cd1c10edf04dcb091"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "33fecd9defc538c9b921366d42a3bc8a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "a86f88090f0fa44ce86fe3135c6f5b3b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "2c8226e295cefb768c84a1935cab55be"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "d40f495311f3468d53ea164c825b2b72"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "25520e98a9ed7d38de44c86cce7500a0"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "298f722f348bcc4b17478664a11252b0"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "d15d532a562555fc78f87deb49f1e697"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "39638817e40c880a3ff2015483b7d7b1"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "844c4eb772ff1f9d648cce2705b8dc13"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "c10801414ffe6271d786c474482886e2"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "9d773ec1acff1f41d3558189e22e980c"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "3fb0b3f28ffffaf7af16dbdec67cc052"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "dd47befc081e589799ed908e990cf015"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "bedbf707efe71b9a5769e6ef70fc7f6b"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "ad00577fe17c96062484a7b79ca769b5"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "243366b073823ee58c070c4660a89b2d"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "609eddda01677a3390bf346365b1b3f9"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "2882f193c061f62d97b142f2fc6b77c1"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "9db1b3df849f316dee9fe8026269eb4f"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "c1bdaf36d7440880dd950fe1fc55eb9b"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "0017610d2e8de29d7bcd60445febd335"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "095c5ba4c6379e24dded69be11c2c5d7"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "d1faca7d89202af7925eabed56e567f1"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "31c04b97a307bccf6475322a1d32eb3d"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "84e61bc09d3fbf2feac97f274ccc4cf4"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "c857d55c2a98e8d67df87047256d9a93"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "d0feee901c9b8f3c524a5ab732223e18"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d3145334ad6193bd83773050e3faae8a"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "74afe034aa86cd8bb7af9c8943ccaeb8"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "529d9b3c4ec2efce8cbe5e9396fbe2f4"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "6965cb7eb93028d4e6865693e9f40289"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "82be2f26ee6ae1eaf9a82ee5338d1fc8"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "71fd0fe2435cc98ea73e82bfbde212a4"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3898b641ef696622efe5dc22132c4e2a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "2bd6bf6610a4c71316fa212b264a7126"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "130b1bdec9c9cf41e5ef03d8ec0f3705"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "35d69352340af3c28865b30859b14b8f"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "3fb4e3d2c503b1608d1299918c6323c2"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "dc2145f9739a75bef679e0c578328194"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "7c0910d90c25aab8858b5da54766bcd9"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "378c221d90fe69df10828aef8f9cd48f"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "3c6bdb2350933827b72d31323eed2894"
  },
  {
    "url": "favorite/index.html",
    "revision": "49721997d5e1333099b852b80915f119"
  },
  {
    "url": "index.html",
    "revision": "224b4141e062dd5953cf4bd62c903849"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "4db719ce8e93322bd9a0f927035510f0"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "ca80f943da4afba317c8bcd24a1113c2"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "1b00afd71270f6236b3fbccadfda99a9"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "14a2e30963d9e2b85fefcfba0367137c"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "55c58c772a12da8fb3b0c3701ebee545"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "433efd2fdf3784be53c72b970b696ce7"
  },
  {
    "url": "note/index.html",
    "revision": "6149898e8965595755df87a0c43aed4e"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "3ba6dd551e105db85c3f3ef601add97c"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "ab8c3bfeba1ec3173bd77fcb5ec32a0d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "1dd3ae725dc0a71b41db4c964e37d60b"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "2b86b21fe29d656dae3c0b97090a7cc5"
  },
  {
    "url": "share/index.html",
    "revision": "c1bfad99e6a3b45e552c03233394d776"
  },
  {
    "url": "single/about_me.html",
    "revision": "4a59f462d73dbd46ccbd0b398fd05f2b"
  },
  {
    "url": "single/all_article.html",
    "revision": "6def5c1e44ecba895caf485ad8284478"
  },
  {
    "url": "single/welcome.html",
    "revision": "8a7e72175334764c6c8bf5e9cdaac1c7"
  },
  {
    "url": "test/index.html",
    "revision": "a5783362b8d47d5579c823c12b2e46d8"
  },
  {
    "url": "test/test.html",
    "revision": "75ca638c3e8625c10e1c1a1fa20e00e0"
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
