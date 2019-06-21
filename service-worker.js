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
    "revision": "d7ca566c081381f8962d150f9a23e120"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "6d3aa64662a97c67c8ae023405ac106e"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "6892a2809a22a091b3739bee470054f7"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "90a9a06dff987e666900479c06be465c"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "a197304aab174d0a76c67fa25e49021a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "1cfbe1b1e52ebf98bc99a1e0339c7271"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4e5004d4332648e04384bf531dd7c4fc"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "63721f8d9709d91c5db16bcdd716aa71"
  },
  {
    "url": "articles/index.html",
    "revision": "6568427b0f030e2be93ee503efd9006a"
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
    "url": "assets/js/1.2d47e53b.js",
    "revision": "b011f44d5117f840dafe03d0674b3277"
  },
  {
    "url": "assets/js/10.90d8996c.js",
    "revision": "176b6c3d88adb2fe70f68df884b9a95a"
  },
  {
    "url": "assets/js/11.dcb10fc3.js",
    "revision": "ab3c0dbe2b6b4243e0369dd1edcc2091"
  },
  {
    "url": "assets/js/12.76af0b83.js",
    "revision": "fab72377c579eab1cb642ee633d7ebc7"
  },
  {
    "url": "assets/js/13.d29d541c.js",
    "revision": "cbcfb4fbf5dfbd4fda5502d081d970d8"
  },
  {
    "url": "assets/js/14.7dbb0e10.js",
    "revision": "99aa632e63200a5213d5ba8e8d70d6c7"
  },
  {
    "url": "assets/js/15.4514738e.js",
    "revision": "70462f2d37e857ab889cc0c75af23c2e"
  },
  {
    "url": "assets/js/2.f0c186c6.js",
    "revision": "a03f306d40f20e4dc4cebe8b36d87d36"
  },
  {
    "url": "assets/js/5.6335082c.js",
    "revision": "216ca92972c305143585fd9602196d3a"
  },
  {
    "url": "assets/js/6.440c87ee.js",
    "revision": "71883e9564f4e1611282a4cab6327f2d"
  },
  {
    "url": "assets/js/7.b2dc231a.js",
    "revision": "df5b5a6303c247829239ca47908b557d"
  },
  {
    "url": "assets/js/8.11f3be4c.js",
    "revision": "c08b455c391b3d889c9dd6bc69b60c84"
  },
  {
    "url": "assets/js/9.949b3689.js",
    "revision": "1d16085421ee06e4f6090cac94130c98"
  },
  {
    "url": "assets/js/vendors~docsearch.e1f08eae.js",
    "revision": "ebefc8772bd4cf593d8aa2a137501c11"
  },
  {
    "url": "blog/index.html",
    "revision": "adf8f8f43415dbaa4e079894c6bcb9e8"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "26a74c266fe5cf11fec707da42649bf2"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "1a6a1429cc8e03e2ca79549ad3129a74"
  },
  {
    "url": "books/index.html",
    "revision": "145918219b2c08ea5270f29c7af7582c"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "a516630ec581a72af4af433f1ab2253e"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "e5dd933065ee0541d3fba99d8252f61b"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "dea97295a85692712b3214ba720b4338"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b3acd861f1c31c6170df85489b5294f1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "67e86a8196e353388c27e419ee7714c2"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "3cc406f13a66d070e6c0c3f2b0959444"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "a2d13921e33fab2871e445160f865cbc"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "51aa93b220de264fa8ae49a5f88550d4"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "72ed7b60c5099d0b7647a851524c59c1"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "43da394a811e4b73814490a11cebfb5c"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "acb1c96cd554218192496cf142b25b35"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "96cd21eecbee9339e034d2567f57eafb"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "3aa64ee9c4c6f02b6512c7bfffdf27e5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "194a9331d958d2754d6138dcd9d471b2"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4ab8d752ad0635fb0440790766de09b2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "a5d61a0b8ed984f9b07b7062db2b8ee8"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "b429c8a6af9ddb0cb2b0ec4f3aafa522"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "4ffe409b04e7afab0eaa94bea4eaf269"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "d5ddbb34c03810a0803756bdb36b9a16"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "d6a5d4b643c3b12798e6af01a762a894"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "982903726d57752bcfee8043f02bb432"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "6aa8484e41d0ec0923e0deceb7c0f0bf"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "109bf27560f7fa6c92e1f8c4e28e93ef"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "72bfd4a5faad2f7cfbeb9bb210ef7ea1"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "6483edfe36a8c47c08d189cdb9353c83"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "fb1da94666dd78cd8fec5a76e0ba455d"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "21de0f88afe345364a7663de98caf1e8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "e369ea2eb77f4da5e71edf9ecae53c02"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "bc37ccbb15123220c72f884062ab4110"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "3117888ed6a5dd6cb61e60953ba7724a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "0e6d34cd54577e7f8c04803fd0a6349a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "cd98dcd13064d771bfe0fc8555561626"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "434d9e7061fcf9d585b8c1b65ca5d541"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "f74d38162b7df12a6bffde610825b311"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "5dfe1c4c3a8583b9cb497889f9b98afa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "38a6a0030dfc593b880450f05f17b3be"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "a6f1f1879ca7cd8a0ac5ceab99c7608c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "1098cd387214b59e4b087e5ad2df1d1a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "4207410234654526674d76593abcb186"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "8ed353e674a1f5fd5c43c9849e242ce5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "4f7a606bd72f9ae5c0f6eada0f2bbe5e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "997c21a2fef01e17add341a29cc75c70"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "10f9e27e0388d544c30d7acb51036e29"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "12c2582306092ba9f123a78cf3f0ade0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "d5c72de38fabea425e3fc3ab13ec6ca5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "9110f94dd7c9042e82bb60eb9ee63555"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a3b783a173c4997ef3189ef4f1f568e4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "a224140c2c8bb823e3ae1d855d2f06ae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "49ceb060006df4f047f2d93369b75263"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b727bf6e869a66a899d4ac1baa8b0099"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "a80031d534afc6ffd4f9ea312cde82b3"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "285c3c7aec9e2a2643fc5cb03a6432ab"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "86112c5547068650566b6ef7388f3374"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "b741681b613366726de0b6cc5211f757"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "a67ce1636a494c85f480c2becc96f737"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "8a0af02bf1639c4d1f113b4924f3c24e"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "a6f9e26f55312912bccbb5d814d83d7b"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "53909145af7f699c48564897936366f0"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "776e06b022512cdfebf380b0a7100485"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "d16777cd1e4c9a7efe5105759d75b172"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "ef1e1c9af18ebe8d361c4d15243277b2"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "b51aa82a15973a8cd1e65a9cfb4de70b"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "b44f8d187d212f671bb1b1efcfa8c3d9"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "01912906a05eccda56c700f4457d539e"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "94f2d4c3962c978a0f2b143b001706b3"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "8fcba4eac04608245f572e03b2b89f91"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "535aa54f8adaaddbadc099b3df17861f"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "d234936398c3ca7714d1e2dd38b958ba"
  },
  {
    "url": "categories/database/index.html",
    "revision": "93fd41632597cf8bec22e58752f4cacf"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "172183f0597535a73f059fe22b6b399e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "c0f638c32a79d86e208dcb6362d2bc42"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "5191644ba99b923e1939704035b19381"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "c776a14fd3cc7a742fbb0228b39cc033"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "2c54aff7116905a9681c197b4e96d6ed"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "de6e424faf357e54342e0d54f3393dd2"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "b9a2c1a807f43f4435cd0fd14f9f5c87"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "f1032bd8d0efb66c06b9ba0502ebe739"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "a4df5c980de927a8b75908930669182e"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "a12507afb90b1ecccbf7420a12c37da1"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "66409acd91d31cb1d79d35409efc3ae2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "64d4d22cfbf20e679b65007068c61996"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "85beb2871611da10936144d0818ecc32"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "d72d0a4fd899b16a605113c0259083c3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "b33c6b3c4b9f27716ea2128a14df469c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "eebfeca2b5fe1b4c53afc24d23d59643"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "d91780012f40886bd4824ccc2dfba0c6"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "c8a93e6f27631cf1bb2a1801daa4b848"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "6f4890ab194b0734069358f950354824"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "e435da5c0bafceac52ab14de2ee5a9fa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "8445795a86117f012a823cb26181d05b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "3d243ac3ca3826c8b5cbc5cdce7ddd1e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "385abc71fbab8445003a9eba831e0632"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "a49cd894f4c76a9ea717762f00bd72c1"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "e597c6be77be16121bc2411233bf87e8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "e404fab37db1f2458c160cfc6df3a260"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "4b3ce0437fb56d369aeeeaa1106e7a1a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "61fab21edeba8faed5d8c29ffbc08f21"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d7b07efeff97d3ba1f3a9cafa91e944e"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "f7e2333276663e71f2e7b6c75a8cc7c3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "7e937b640e713788ee3b62a517eef94b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "4fc259882c491d1315b209f62bdb63c8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "0d0b54d77ec44bc17faed6cee2476127"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a7f0e70292f98b7dae4692745bdd040d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a92bf49c0ddc96f2c46f3ea696f5fe30"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "c38e5be115fed947d81cb6a2e7cac0d9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "a13bd5063149be8d4b9b8899f786f6ed"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "73332482f199e719fe7f677dbeb9fd66"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "e2996cab0c17c8a1309881206e8b4cd9"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "adb06a13bbb807315d81bb2f12f6c6bd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "b12e9a35729530dfe45d01c667175b9c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "18dfca2fc1384d11d427c266a2883acf"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "2afe30ba5404c382d8250123b47fc557"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "7b46678a62b26d1059f15fb7237f3801"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "1cf37f69e97553ee4c00a88a881a980a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "7972f4dd6d5b43b552eac1ea74d33990"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "ac4616264ad068cfb332ee80f80428d1"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "708fc9c9dac1b90694c917f949cdadbf"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "d53863f12bb014ae8117aa956fa639bf"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "8f8fe561f480a077614981ceca629fc7"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "4170ef20226e2732078b815ba1c117c5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f8edff1cea994db8119ca7b95fea763b"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "65619d134149bc0ec3bd8b8c51efe7b6"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "cdbfb6cdc5a25f06c1e7f23119cdf924"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "adbfa43f1482e3560460cc05c158e21a"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "c4e88367af68aac23434bf78b1721dad"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "2349bd330734d521ef1718239febb92d"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "424b48fcda51dad4dff227bb6c5fa17d"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "28804661ca04445e3a0952bd0b91378a"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "717147ebc31e57c4958e19c3db8f1442"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "0f761297d259d55b98d2d04a657e6017"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "ebe70103311379c6e422af289740d62e"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "4294fcffb7014769014e37e5ee67a5df"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "6ff0eedd94dddaff62bd5311b70d4882"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "b2a3bd34d649c9a3eee794c6e626fbe1"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "5c7ffb14eadb8c7796ad331d2dde5c39"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "2809ff3cd53d6fe13b01ee0e68f4d673"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "cc825300279a0ca9f4b41d491baafab3"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "2b7b0748bd4e4827544ceac8cb89ed62"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "8d1a94025a2c7bd08eb72b979454927a"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "1b1ffdc6508a8d6e3a6a14be9fb351e7"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "e48cd771d00c2a2380139e2935355b4c"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "0ad7c70c4aa0794297c50d16a8c88bfe"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "4c740447f20287fd0739551020fd6b77"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ec6ce540561b4fda0609eada57fcc2f6"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "cc5045863ae32f6b84f7c8ca92c7263b"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "dc82fd132771cc34c836fbe9eb89fb3e"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "8323243fa8400a29754e534e61991306"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "1cbda5fe2d4222f30545d985a4accec7"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "01f940dbef2fcb9bc820800398b13364"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "be82dcdd42e7bcb1463ecd9f9f78ad64"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "f31a90fc123a46d75da3d3c5fe247c57"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "5774d972b384117cf68ac2038abb6072"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "55bf09985226c2b1cbb14eb7a0b36232"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "9db643f8aedb8b923b7a99b9d5045e5a"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "c089d0ec03019685052c1ef21ee17274"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "c2e2c50e5c34c337959f5268426a8189"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "bebccf2995962f7cc7b1fc190cefe727"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "e3353b3f982a861a602096a4fd74f060"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "05581b103d288bf6b2c2bd37581c0acd"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "16c3ca58537c505d94c1c45418dcb812"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "96e1918016681e196ad6b06ca5e6205d"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "387330d0f4e1aabc657331bc94a6854b"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "77ce1aa942f9accc6057ed8cc8e3e08e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a1820ec206574dbdd6891ddbf37950d3"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "ae291314fb4b041fd871e06122147a05"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "d2e34c2cc396002cf6e5419f7be89114"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "19ba8b2cb0c6750b4bbb98a85d7641c8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "07841f83017d89bfcfdbf3d6df482591"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "e9e0df7274312042802b9859350913f4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "8ded32624f1fc3256b629d3f72a44532"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "e54cb1560854c0c3ffdbb3a1ebbfcce4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "7e172d6bd5665c6069a4a2ef4c82a6c3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "7050b13ba125d63bbbf4c36159146ad1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "e7e9bf351d78956921a2deb8e5e26f0d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3b48e6c5e07c14754b62f22dc95d5c36"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "9277e97327ef6dc5269bf9e789e50e56"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "9b127dfd2c66f2d72e379680e7e6f5be"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "80b7f0e6baac7e5b7945b17e2f7f4bbe"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "5bbb8604e21ea89d09bef39ab36b3b30"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "7bd47b1c7bcee930452efa14b3d508e4"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "ffaa2aa4fdb74b7c21545c2ee9f9efb1"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "bc7c6a2cf177217979558c66e42b4b5b"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "3b88a886530f00ccf7d6d46fd0d85270"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "262a976a8de993b151f47e2901335b90"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "115d8ded71d7b9e1938d8b2b665e42ef"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "b9fb31e391fb7059d4d9bbbcc580541b"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "de3a87f459ef76a96ad9d8a2cece40af"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "0936656d6cd851ab2be4e7860d7b22c5"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "3bf5e752e665564ec7fe94471fbacbab"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "a44f0cdbe6d86fc25835585c337c367a"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "d83b86cbe2bfc7f6fa985a9eca2b1128"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "d3d1117f8843004d194ed096dbf7291b"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "2bca3bcc239b8a7e41beb1e088b55d50"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "1f5e8165286c2aaa25ea259238252f22"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "ce64de5b6a10439164690552092acc34"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "5884d481705ee4b998fee05cee27b72a"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2da53f23aee11c300d46434388ba1563"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "624a32dbfb57429eab67210ce266d127"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "90ac11b902f2cc772d00e6ea76a22190"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "ed62396c709c46782780b338ee167ac3"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "3ae18e159eb4b75a08b18a2fea5b3a8c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "13fd0348de7c5614dc0cb86f45c0c86d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "9575223e80d277dc015d530b4093da30"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "6b2c2f63a41b5ee0100372dff22bd5c9"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "86f5de8d639c07968f21bf3b000c9247"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "9cc6bc04c8ad27b7d6372938500cbd5c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "05e98a064d4c448aa338fcd79f0a8c54"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "1d757eab05ac775798deeb299f780772"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "250820f8fa5c14670c52adb5caadc0d3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "89e631b5bffb8d8e4d7832247d72658d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "c4cb9f369c5dd659b6f088c694f3f0f5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "3818006eb8918909c6c754291b557c3c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "b1d17677d8f0ebf393554f8586ebbf9a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "f2927578faa19a961faaf234e0cd0671"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "291f9d756b4ffcf26117652278f2516c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "c5cd39d853bce577ff4e3f4af81fd5b7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "094450479a344702aeed0aa2f6917580"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "6e266a3d7f5081f813cd84c62b258df7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "256f749ce848f7ffab14c657e92e87c9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "190d3dccc74dfa4fbc247b38d053b604"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "788552c8099916ce6d925cdfe374394f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "6ee40138d56ee9df2e1dbb21f9801dd4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "d4bc720b5bb62f200a8a683a6f7859e1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "e1f840641edeaaa713d3c8fc545eb65b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "992bf1b5a8ba81d5615401295e4836ed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "c43a012ceaba45d19c7be4fdebe5b5b2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "46c22f4eb1082fc2164eb8c0cb330fc2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "109a00a45bc497a02f864a2d1fa89838"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "54428f4de2c84ca1686fa553c81c4fc1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "dd905a2f7b18334149b8a74d51772a15"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "708e1ec1a05b9e64ff476c94771bc634"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "d3e549760079c470ba8e084b569f5427"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "5cfb958cda68de970bb0e5f84affec98"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "0ff1aa82a42e7d85842594c6c44fd7eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "c09b7dfe2287a16fc410c86e74c084db"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "3b47e5accfc0f129594b4c2c5065fab7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "1002b6d5d65b54eae6d991e9a85f4db2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "bedba6e5f48f0169ac02a822ca2865b8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "593da111b06ca084d7e95faa0968d671"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "0a0bee2339338fbcebaf802669f30424"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "6b8d9b46ab5b30cb613a4af470827218"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "0c94d0496d09404430f2c29f8dc1304b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "df93956f6743589df0265c2929e8080f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "b651b64c036f3faa9405b94cd4db7014"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "8c49562531338987bc82bd4f0798097a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e729e3ff8d8604befe16dc9434ff4649"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "1cd8a3098f44011c6282fe2b41252fc6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "0caef6770d313f452418bc38316b087c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "6e39394a457e94da85a553ec761f133b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "354466eeb1b4fc09d1f10d7f7cc1187e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "a745782fae0f03ebe9cb5dee1e54befe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "f5e6db3c5cfb0caea37d6f45840b599d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "29a46224cecee7df35e5527f663d39ea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "5a7f48f33fca5b8604fa87c9f34c873e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "a7c6567e1c2929bf310e95cec7ac7c1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "1f66b5bd7a42b25f2a4a6a0a0b29402e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "e8e88081892a1adce59e818fead02ec8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "d92728dbf04234a436a40554fc18cee7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "60a8e5eb3a815645cda63394452a6be2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "223437f161a38504c6ff98d327275413"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "b5a93fe18ef63ae25be6b04309f0b95a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "a739b90066ca9e368e185e0d5a4fcfe9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "c71424fd5442ecfeb447c4d32e60b03e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "b728561fc1443e49c46decbc573fde38"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "7c97deba94a2f887817bc958b5d280be"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "930d69e599bfe6088921f165c81678f1"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "3cf9b05dc82722e2d7cab91b481ea18b"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "d986a22d2cc26f5e71d43e4ba965e2ac"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "0fe3d3a54830365634edd907f6b55df4"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "e2834d3cf6ea95a6e96f333e257b6b84"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "78b8172c107959a0d1dd08c5d41ca6ce"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "077e9fa7b1e08d128df67491b9781ffe"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "f18023b74c99d5b7d42b534c822953ed"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "601057032a388bfe6e4eb91f7978fb79"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "9cc0d6bc9185d4874532ef50ee4c047f"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "b1227af8770603ee2902a02cddc06284"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "e989d8d7e0182fd1cf913999a85bfba6"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "1d9aaf59fdb3f3344ec2fb5f0dc59387"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "ef1461009ac3fb387a64214ec52348c5"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "10a7e374f88cd3ccb3692bf8f50995ab"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "9657fa3470f1577c644ab08d41298737"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "8c9abab7ef783d94ec4eb8edf134f65c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "e5f9dc405fc2aec7acf24ae6e5ecabb7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "e920fb7acda968a41d5ab3d424ecce1f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "935d055ffc1cadca25d422601aec61e7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "aebedc683e2eb3b261336d7fbda13146"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "65275ce217535919fcaf26a0ebb7c50d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "73fd3ba8a25b58cea2609433ac04bef1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "53cd2e5a51f95a3efd9b55b3882ed202"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "7c9fa53f78a1d06a4f034ec47fd29147"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "a7b66c9ce832c6d8d64007adaf7ff81b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "4a27a53c53c94d54f67ce1c568da64b4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "d30346f7ca64776c38231b51feb2141c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "c5a78d05d81aa40d9ece02e50391a371"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "c7bcffe5b50cf33173ec0b3992d3fcc2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "64a4b98339b56bf69311c8c16d78c1b2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "4c79aa76d83159e8abd1f400f65f337d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "084b471a58f9625a9d215bd94c8cc54f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "f5f0f895a289509ed0f148dc140fb192"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "3e1ce8a8cc0871b565ca73ee2c2b1fe0"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "724850dd9d0f1d897b67faa46ab86a82"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "ba7f21dfa4a6cdb4de8040aafb343e95"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8695b03d935b667d965b6fd1d78308cf"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "0583a8a23ed146264262e223826b1246"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "c330b5709cf93525584867e16782937b"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "05fbe8f0d0559a5a9c050c650ff673df"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "ffd610f0533cb6e73ba6dc52d9491e0f"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "50b9c39ac1b602a69c2026782362251d"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "7fbc25ee799c895938c6f653759af685"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "bedcdd5e6a8e7d6c7fbdb8f0ad0fcd99"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "5b7f228893d686b2c2c91e691078c110"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "2f4b359131270501fdaf8b79a5517049"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "efff82279ad4dbd2d15a175c79402f9f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "3aeb1ff86235b231ce8ea939c8bf1324"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "c78ce5f0b2dd90661bb0eb4c624ff7ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "ecefda91ccf2a3e4dd6133cf91c6e5dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "3e0ea6432bf3443bcfc9a749e9c6e571"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "a855cc33c64d639a31e59c643b663fa3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "6247da83cca9d779439b07e4a27b12da"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "4d9e3fd5c84f7e039b693a40c36c9352"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "bbbb85bcd06bc13bddfaa0f021fe5624"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "f7f63d14c3f1fb1d4c2b49837dd49189"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "d524f81ffe00517a9d7a84a06a3ca2b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "493ef7f64ddde3318e80180a4aec871e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "9bab9183c2df2b333e610c104bcdc7a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "cb6c58d2f0bf9e6b70543ff3811e0623"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "81f197a5e6f9c2997dde0d2b111d0af2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "4e4c180efe0566482c2c706fccd87347"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "819dd2bce51f8c2584762001c7300c46"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "fa0b5165229391ea91766b9bc2ba7c51"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "ba27656517759263e514412a42fe6479"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "b350532a102301f3da4cd188577d3fef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "9accb1b85feca79cb7799556abcde07d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "17fec26ca63f59e645be19ac69046f4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "2c3665f2d0a43c1c855a5163077b0079"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "5abbfb03904a6ef281c2d486ef39827e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "f5d228e2616c712881b5ad46f354afc0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "3b6dc3f68698ab73c68f0c7a0982f857"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "d4bbb1e49d25cc32079e956d367baab1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "2fd0e2381c4dc4a40a0868bbadf97bf1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "549865ec8fe568053518fc7e191d4675"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "227cb19b95d119e72a954a16da1b4c66"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "a1c4d05c610462d895d408f2a3a183d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "755ae14406a1378563f356d2858ac2dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "16c2b5675bddc88bccd7d158cca66b2b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "e25c4d8603c4871f4eada59d97a879b0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "96a0675e468dcde84d4c375b8c324886"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "52850707bb8be73f85f03857ba82dd57"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "f51173b8ed12a87b7f2913d8df0a571d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "88862c721b87f9a4b0db1612311ccbda"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "d59262b72f69fcf5d8df2dfe5ba99aaa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "f0c09c09887b1522e5a2bde92aae9d9c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "09298f05d38866a031b25234795bb997"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "e9f7a0ca8d09d5a00159c168b5526abe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "930c4381744bf1a1fef1fa478a85d6ff"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "c0125cb07510faa1703e9d3ab00e3460"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "405654f9271079947ef5857ce95a37aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "0f2c5f72664f43fcf9ceed461d205728"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "8b5e989a494d7357dcb98dd9398153c6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "f3aa262fa6669ed26acecd6aca136b9e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "b71166f7db9373d01263598684cd46de"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "348b153446620516bbe9a8f4ee7d5052"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "a4d679a6c354b3f0a9abc3d5f91e6785"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "9468a18ccbc38d705fac32bfebc8eb7b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "4e19505fd433393fa4318466f6d2b63d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "f6ed40f7e1c107bf256485f443d59fb2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "a8b100bbc8e1250cf5f86158f19425d8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "b123793f3d8705540d98cc52baf8a95b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "3d1ea1433a16bf9f91a3e9355b693031"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ddb33b17cbd55e53d8d257e08463addd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "f614ee422aa77221eb7ed20476d35251"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "757f466e4275cbddc95a4cf24f083bc4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "91fd85aa954b4d200252187cfd24e364"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "ca2cd7a0f5186920102b7f5a725eb6a5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "c576b0844564a52da8e2fde4e8e508a7"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "2d95eaf996cc5fafca4e5a833cb88e72"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "9592f8a3cd18e420c1e5d73022cd74ed"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "52df3ed83013cd04dcc5d64e57ec16a5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "71910f65c847364fb512c9bcf7142562"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d2ade88745267691f5664dcf5d7ecf2d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "eb481c9f6a71310dadc951d581d33ffb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "b5dc2cc65bfce403f3c579ed811bfc3f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "32dfea5a1c2df154b70c1ec241371319"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "37d5fc4b3a207192eac1bbe8087d6c7c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "511fa3172bb74a50c10c5a6df3ba2a25"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "133c3594c1fc997baff568d5f118ea9e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "0d9cfd9387b215278b54cf1c7769a76a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "e73d58b81ce54f31c8bf8115d35dae9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "80f28c72d7f073697d729c323d49704b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "eaad96f5b09872d85b7a64f2d9d7f155"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "db02ea27e3495e6406dccfb1aee47c8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "6699f0813d0f659292bf19885fed0d79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "1646b2b7d4adb643bdc9c481cf007214"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "9dd7cceb2553d9df3a746a58b92cb406"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "8423c6d07f773b8f16570eb1a7812182"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "ea756ebb0b2c2bf0bf29efb866e90d07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "f6ca4f312efd93ec71d1e2199b639d88"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "0ca01f2ebe8c0adad46fe729df52001d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0ef957be60e31b0e281fd76ea585c58d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "2515f7ec350a543904429388ec446063"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "815138abcdebf36bd59cab1511752b15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "e1723b09bd5f42d78830cbf90e6102c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "ae578e7560c9bc99876c991872552e6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "515387c711729bcfbb7441f6d3232f9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "d0bfede04923c96e28b094c7d30cc89a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "06ef99e403a648fd21946b5c9ecb5191"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "dd8f3d1c18b432c96b04936c9c266428"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "178feee83e8f39aed3751859445d0246"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "2f2dc5eb92a0d4aab2cc2c4197a471fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "9b716ddea3d2c923eae02e5497a4da3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "627ce693759b9bbecadb1029f83ac3d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "50652688f0ef28177907274b31fa7686"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "239eb1e9a0c19689648cb5f3ec56033a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "5011077fd011850653e3de21a8978a0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "4a3391cf1206aff4147eb7c9aaac7f34"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "b809a7fa37cc9e9a5c71e20d829438f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "74729440088889ea73594ae293263582"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "29590fba67ad9636944107b830478a0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "0b9456852a0920a245a68c743d4f1868"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "526e323416d0342fdc680582bd6a57df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "f55935f01429deb8bd2ac584c0c7f510"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "8d6b01380fd0acca61cab6bb9544c819"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "9a6d437282c2316a3a72c6fb415db288"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "f5ce678b7587121f742164ae375ce4d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "52b5f372e3dd8fd9bc7e9e0226a074f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "d72e88185f1a4cb9635d9cd8bbd3a137"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "6fe0ce1e9b62e527161a1335ff9beb0e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "0b1683732ca0d3cb4f9933235359df43"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "a271e4833a352dd108507eb805cff630"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "b65e1d93dc581f457f394e547ac48c69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "e3748d260f0febcc9f12a9b1beee9ec7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "8da5cc71d92813de6ce0e18482ae493e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "5d4eec86134ac16493f66b918999a8be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "843fa2d2100e72dd70e20255d1cb926d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "51ed438bd0a5b65a8633fd3ae396e7a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "10d05743744a5e9b4c94cdaf4f1378ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "0ced4bb97ab35aa50e584f076cc06797"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "25334728688f511626b00fda804922b9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "1cd1f036c6fe66511812c719cf372958"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "54641f9b01cd87d65a81a995315c7906"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "71368ef89af818d40fc68dbe20cb0a27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "d2eaae45c4bb739623dbd8228f3f1e69"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "5eac7d1800693e301e15c4b5f1cfd5ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "bfee815deee63a03c03e9b32539c8e3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "7e222da1c389f1489b59c25da67f32f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "82c7b8e6ea74223034d696c57fdbfc14"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "701b18d77ab97d08783d63a208536205"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "f2569897dbf4fb58721d53992534b08c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "5342b17c6b6f827734ce894c5802a590"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "3bab5a3c6362e252eca68f4bcdaf4934"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "211b81afb288f5292e43ecddfcc3dd2d"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "5093e9184ac5561b194f1de13a55bfa5"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9c0dd87b463bd0c8d7a8d42e33a2dcbe"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "fcd3a8a19a962f3702c3c0648632d96c"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "e334b34fa5a093f373b4438573a7ea6b"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "f26be88bc7681b1459b22071f98afd3f"
  },
  {
    "url": "categories/index.html",
    "revision": "405d9d6bacbb752e9a275c754c58490a"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "e0b6563ff150efd8a6a997d58e000e84"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "02117c2a67a46bc2e29faa8c544be797"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "7318daabd60dcecd953b7858101ef8f1"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "e2d4de32e644260d64b776987461f910"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "e81f13508e011a6307467484eb0b076a"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "1b551c617fc105223e07046f5e546e81"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "df7b6fc8ebc608d2d952fb17ba8967e9"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "4ee47d7357a66bef4d7767c9238ffcd7"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "b488e2e76aa5e1efe66a1e30c181c01b"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "686e4acd71e85b0a0028976e39d954e2"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "f6f204e409ef30b4687016b6e9c68f84"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "860ea2de3d63dc89ee1450aa26f136cd"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "5c2b0249ecf131390e52e7e9c223db43"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "2737774222245dca12ccde2e87dd7e51"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "a430dccc5ffb7222411045b54635a2e1"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "f40f7cea073d6cfab3759f429aff9b0a"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "eb8c2b800d179fb06e8383ab25cda3b9"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "9b6a87eaffea0b404f5d1e79e60e04b9"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "1588282a3c09646b61c80f86f71337df"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "2fe9352e6103a221376b4eabd3b742d1"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "41cfddbd2d67e449a9a085cd2a31a849"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "fd4133aa1548cdc06f539a2638d3578b"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "b4e382ebcf3a2d16835637ddddef688b"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "eb0ebc8f6fad6e5b20fcf2597e655ed4"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "438b89e6d92d3146f44baa0ce09927fc"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "5f456807a5e5df9811276a4d2e29ecca"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "37cce20b1bb16694c101c3ff843665c3"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "c5496f361eccaa13c54439864735f6db"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "f47f449cd7aec65a9ec095ea4ded1036"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "0519ee7d651d6783a01cf8246f8f217a"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "5f3d82c1cd52c9a291d76d08341d0a6a"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "64ec3a1df1c774018ab4c46be9d4e6ba"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "094487211c17e2d06bcb13a13605018e"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "b14a09d167486ea77a62760c4c433413"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "e79321563160e369d535d6437dd3f576"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "d0fd0219583733e5c2044fe1e152670a"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "655b27e423f7e3850fa08236e20ff5e1"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "56ec8b2ebc89c649f155beef3d0f2230"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "a24f23a0db3d82ba715f41d89e52467a"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "6f62ff47db7568251dd58d7bde09dabc"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a15e631d23b999195168c0e11a6cefa6"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "eab6150b2ba92c051400094329fafd74"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "b71028693ed696f7ecdd2608e917b266"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "394db49a91682ac261ab974f555ed397"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "6bcbb059e816af187245c7e5c7f9fcf4"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "a4c933436ccfc10af5f15b677ebeca1a"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "9c16ee1b1b0dc6b4efce17fa57e46606"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "b4f78d587d54f166b7e7ebd5adb13b29"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "b175cf01cf4090f2a1c39945d73ffe84"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "086d5c865a1b6a32fc6947695114db64"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "a8d0c346a5b6a6d8c2db079421284d93"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "2f66a89b79f4919a203374a3f99299ad"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "3c2520f3f95e30f70dcf7e3b63e2a7c5"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "bc38f11f8ea2ecdee774cda5f2df0703"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "a2e2cff496dc97e31ddcca308058ea56"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "3f187a38d2d1084f2a856e9771782ee6"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "b502d1d3866afe021b092ffbfe3006d4"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "1f35115dfa159a87be8031ca866acb54"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "32f184f0f0b0cdb94b96027aa5e48398"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "a09f02570cda6528f3c2bfd391e3378a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "77120d5ac1cc1cd5954375d1c9a9f555"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "dfb95cfb58ac541f79021d96ed251d24"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "04ac070ef5d1bac22e29f04955903c49"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "1905c82b48f2a13342dc9b03dcc78403"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "e707753d0794dc091899e5bfc59857dc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "4aaa2445b8812b5db249c0cd4b2d3162"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "871197ac219f9223f0bd70ee246abc6e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "95e2c78be958ad2a6f352b11ef03f194"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "3a5abc1b3149aa04f7e9218262f9033b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "368d5f03f5c4d4150983d7c552b4bcb5"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "0e468978bdd9bce3acf01c335643bb25"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "5a73d9068ccdc55fd38d325f876b8440"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "ec0a7ba217495aceaaa8ad549b169559"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "24323358ebc508d8f7e1fe5fb77f62b5"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "52a3038b4909c4b1d89bc8ffb856c007"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "27dc1f38dd0aba95b14f00effab01e83"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "1aeb03fe7a1b99309a2913cb81a72487"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "92572785892f143643caedc78ef55304"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "5de8310444d50583b3787d7e55986de0"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "ce7e223e06475e45fdf2319c367facb2"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "c6d6315c4390bab10906f5e4a06f91da"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "0a2d16167c434acac74e0312df24f783"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "8d9e7b24f290017c4f96bca2002de0c8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "39a6239d4858a83f20c35f2864ed8068"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "5dc2fab15f6d67126eb3eef5c2393b14"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "fc90ca7d58c6ce6b0e4248da11c4e255"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "a2d385145dacdeb8faf145376233375f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "e72b58a58de352af71658720760ce6d6"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "a224b76619e1f073b989fd590ef8f4b1"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "3011fbff648ee10876059f8ba8f0ca6c"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "2801c8712d862e0b7bbe4d307b1ce18a"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "08affa36d5f4dc3664f6993699ec84fe"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "78f140c089d8806dfcde0da64d79e557"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "344199d35fb96dbc291dd650f0e7acaa"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d370ef45bbde7f6b60a3326212d5eb4b"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "ce68daae61d1db7096ed8c6c50a9c6a6"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "d82e90e90d9789f189fde5f7d642d2ad"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "be02a03895f357454bab117624f49d4c"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "843e41e3abb4273ae212efb73eb7607a"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "4fb53c9999a6cd61f407f2cbe1334683"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "a767c9c1351d02b94e7889ff703d7019"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "c7dd1db467d39db56d1cc28f76055a93"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "ddf91f007ec61cc1ff644aec2ce785e8"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "98147db220137291ad514c202057a663"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "e698326b7006ad65617797919177c4eb"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "5f1c50e8e660d76ab90ad8f5148fadf5"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "e96294e82688c6eddd49cb46be7b47c2"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "6d4e24237f25579fc021f299d4789157"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "833031ddccb237ed850d06401ca89f71"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "89851553fb3d1459eafeefa8eefffdc5"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "0432de635e1b95a57ddb3a8e581ecf70"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c0e792df1f8dcf699a74f15152960b09"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "27100c15be2f542b8c5fc5b0ee7ed7bd"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "3278751d70f77ea26236b5356fb9f27f"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "20d0d8b3e21656bff1b76a5e3a258de1"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "62420991046d3b31da67d81626c3a214"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "96f7f2226d1f898fefaf0281422f3f0e"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "e8ca3e26a7340e0f9cb81ab82ff8a2ff"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "5123a9b9f3f49d7b860e5387dafb1b3d"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "aab7c05a7259c3d7076402f0b8705103"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "c6ef61226123897f24f5516ef929f5ed"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "f16c6688e9f064c5a68f9fe0c7fc31cd"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "6f39550e25075bfcb6bbd39a81b49348"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "5c33565302f7c017aea27761b4bf1ab2"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "681e8fa2dee7ead379f3f3b652a08ee3"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "a332abb5b7a5b6a08cdf1970ef45fa9a"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "561e9e5c4caaeade1ba18a2a2320b27d"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "628319ed2b244e1c0b7397cfb0c93577"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "8708c0d2b1eb80adc1fc03b074306831"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "6d7dca9623f23b250c4307d31ddcfdec"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "32bdc40bf9bc04e88cca4060862d98a8"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "a5d926a78640d2607744dfb39a388ebd"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "67ed0692406127431a9610ac387af9e6"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "f5a3ccf05cdad88e5f81dd7cd4427f41"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "3119025dcbb6e0eb3e91bf0beb57c0fc"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "ccfb769f2a795234239244ff5204ec19"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "21b5dd8bc17b4f68eea3099b12ad2220"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0659461b5cf6dcc06aa0159339b7c0c7"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "d678f96635513256698e8a579cd09a22"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "6551eec9f15030d0853632469780bbf9"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "cd3453c22c8b6d892bb03b70df60c4df"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "be8c4f3f5a0db454baf39294cecf9a83"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "a7f0b895ec5f7d0295884b392f92391f"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "3ce85c469a6b792e15825e834ad621cf"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "94e6cf9b3e8dac2a4c16f151e8da81f8"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "e5f397fc278e1a6b7610c7c35dfd773b"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "91795978a73c2c69eeb505c317117de2"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c30a837edbd1b1cc0e8205f9c40b5e27"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "9fb8c84e6e00fef32de989fb88c9944e"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "dacf8cfcfef6dbee933ebd5efbc8ffb5"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "d0c5e882440caed93b4a3539f37a8a23"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "b0de1f3b4341336e04b8637d6c04afbe"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "d6ea9a751edb142a56c2d26ce78ba479"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "4ffa5f7143fc7844eca5f46bb8a971db"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "732d48ac9fba58ec936a028b3bc22eab"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "3657befaec5607704f949cce0c6ccedd"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "84a16c938f96f2028e934dcaf353c5af"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "e145cb784ee4abed6564896bdacb0f87"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "691031fccf5e555897759ac4478b3bf7"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "38c91d26f390794e41f2fad638424ee9"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "cca9f9e31576643735587a393713c065"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "bc97a332408c78302a7e6802df1ecd52"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "a2fb1102820e859e8d21bba56d28663d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "c024b88bcfdb8e4a897fa29a48a5e7d4"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "e15afa9b343a1fa7bd60c6a5a8d8ae6e"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "f0ed50919c61b4984e6a05c1460311f2"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "6e6b163b07d0f2f519e9b563c761f836"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f9556b6da1790108144e2d1bb6e97997"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "9dce48bde568ea4c20a28667eedcbb1a"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "69fa9bf366288fdb0181839ce4af5418"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "c1f6a2f046afa16af7c79e2489b407fa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "1f8ea2c284d62fc2b49251c88cd23d95"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "cbc58583f5342a985ba376b6ce2b16d4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e8236e88672e5448f6d9163276a0bd87"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "c370c46bd98e2562d7160b07e6db4e17"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "561b133e16d3450f144ba4bb9094c6a2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2ca0188e2bb1ecf8a45d0531502ec4c2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "7fd906013cd0f31d97bb3f02ac8cc8b4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "de2e55f7c1053b21cc90ea706774c70d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "27585ed303b0369411e8dab69bd57f3e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "5fe6372f696468676c3133c93946c231"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "a95b5c72d7bdae1364fc4b70bd6523d8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "72f6bfa05cdb8255d94afca302a91951"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "b35d65b1fe5088779e4c9e667e5df977"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "d36b86a9c2c47a79b2058719b7a9298d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "168c424ec3492bb015e2146e37937ecf"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "40e5c942db97adf23bb61e35beae6966"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "57f5e72c6cd4ceb01736135cc4834f31"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "979e78c12d9bf669c5c84a16d264fa5d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "96e74d6513d7cdd213361d778a8dafda"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "cd79eb5f9578bdd4984dd9b16ad708a2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "b2cc4e66914b565050af6a37e21273da"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "4d853bd08b958e723c2ed232cb092164"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "503ab0a75494707f6129f8009a70b779"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "9cc45f1a9a0843cf8233af4a696bc0b7"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "3b5851d75194d50d2739d7311955716d"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "537a19012ee5abe2e455d3ee7ebbd4d1"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "37750e28d223adda7b9f1e26a4f23b6e"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "8f8f1ea4c68117f940a4aa9297361baa"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "5f6503553ab1eca4cf0f2cf1c515cd6a"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "8bc82ef01a5d35ccd65aca30b0021a0a"
  },
  {
    "url": "categories/os/index.html",
    "revision": "08165c0061b283329c6a9561e646ceff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "e5f9bc1cb7e445d2b479da4226b54c3b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "8b5004462822efca2b0ec206d4b37c8a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "b21135d7426a0e83723a6fa2f243541d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "35d89795600a5cb3e63aef1823808f56"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "78c79674eb74dea47197d28654176d43"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "5bf718eea2eb3a1c30406c74cb28c33c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "f317ab27ec5c95f74f851d3415fe65c3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "fc5c9acb4c69fecff8782fa488233c01"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "a0725f298708bf2b2c0893563fb410d1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "05200112eb97070a1f41a8b066889e29"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "7c0026e41bddf41b3d259851cfa41d1d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "86d5842bb3dca931ee487b280852dfea"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "04b0d4eb698c80e98205d43f22e795df"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "30f3c5d4d24aee205e65c00add62b5ae"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "23cfb7e154cf3855f3c44a0626f05386"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "d14998a1a4744a33201054961bc41860"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "54f23cf06684724c822a065f3bdba887"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "8c8f62732faf43de835496cf28fb4f34"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "3af671296d7091c2fc7ee65e9d08715f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "0a8bbbaede18d76de4b544e45254db7f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "530d29eaf319c3d6ce923d2437ec85b7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "a2811cb67618de0ff0f9471dc186b43d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "4574ca19d56c237b3a500dbc380f978b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "fc9aea0d17ea65594a8c602e19d57c44"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "238772c9308380c14058723306d2016d"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "f1422e52a58561a7eb31d6f913fab1af"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "965036829bca5f1373e384283537381b"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "9df16cf92c0a5ffb6db39613d4d75112"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "d74150e6e23f82226ced9c483f8f1d8b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "f277c215acb60f6e8f685fa2129eb1c0"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "27075d5657b9ca00d7bcc72f358888ad"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "901aabb287e86e415a093ecd60c574e5"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "98c09a5b5c44888f200c41075c191b20"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "f821579dd85bd6c016547a417d124761"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "144caff6340d70e1a8a33ae1117f68a6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "1937d5d53951a226ca9eb3a0f48b327b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "63bbd948d93c5248c87c15f3b4dde33d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "4ad80cf50fc7951d2141f686f32b6125"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "3f221a16c1bab0987e50d3b4476a89de"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "a2bd72e4875882e12fa1cd07ef5b8f4a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "84f40d8a3451bf824dc65a12e9cc4faa"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "0a4b98e37ccc5f8b9640b81f42e4614d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "dfcdc9f36ef2baf06f7a5dad6c187b6d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "ce80de46bef64998d47cb4ed048af5d5"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "17c1a2c1e7d333c14247cdbd5aede60c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "78d8edd4cb4c4926c0e09d8ac17c366b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "ac1125eb3e9b77043a1fb6c085d55f9e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "d4b27388e6fe5adf6e8dedd60bf9f122"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "5e94026872bffd7630a097122831aa59"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "48a5020a2c7d6cc6c9cb6f6abbb76e48"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "06de02ebee9aced6e9edafe96f629fb1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "beb277959ec1505409e7e11ef76743e9"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "484cd52ee6fea5b7a0180ffc69bf275b"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "5fc223aedac4a8a41ee73a7c43db6b43"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a4388aa0a7ac4ed142bb967b0a7469f9"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "e3a068ba32a6caa5351e1fc5cad4e6fc"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "c9a30534f75fa6e202be1ff1b64ac2bb"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "e9c2dc7a5856f7f22b93ebba2e451f22"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "0af0dfd8ee8442c10dfd1b59fc069e7d"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "bfd8ce5564ea9fb25c7d5f31110dbf2d"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "499a6072d294391d4f627f4942b3674d"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "8f26b0f03ee9a8118e516ee873fa83f0"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "19aff335429dd93ff97c0ac34030252b"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "c3b0a6e586563186b0de4014121d1a7c"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "a16b93b33f0971fb9c7838208acdf4d3"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "046dd682b2395d70bd1c15549cf9c9e4"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "ac99868f723cd953b7ed5eccd0fed1f6"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "4805ad14952658965cf4bfe36dbad47e"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "9ea67c0a5f2b18416af63ee2dc796843"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "77c13699e4c9a59fb1c24e551df7bf77"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "fc26f00a2afb847b1d9bb21fa7df3718"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "f85acb834a718c03a9a2e0261c85b12b"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "49fee58f6657331a4c542598e3cf96d6"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "b8b1be9b76e19f2e045f9815a21baa42"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "ebe45f08080c0faa09de761e44126208"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "6a47a657bc669b95a002a3ea52d27a1e"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "e65ecce6bffc5b746dc9ee5b445f0ec5"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "3fb416802a27791ef9b0bf9fc238493e"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "3b01035577b4608f39c6cfbdf06adb12"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "5fa8f9b698b8b5789bde14269f362295"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "5c8c4dd836f0e01aa69f9918c7e4a3f7"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "1440b1e34a20a8f405363fce37fa3045"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c740d9c8f95ab347f67f352067c0aa51"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "ce46cf60b5320c85ca4538104b0570df"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "18487568ae7375d5815488a018f7d97b"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "1e2b8025a54074ced0ae98b98e2536ad"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "db9ab7818cc29652712517aceadef470"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "96c51a6cb927f91c4ad2af388e2e91a9"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "e2f023b336669b09f29613ee8534ca7f"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0c1ebc0353e8b67fc553e9f9bfcd172d"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "1e4d55a108bcc33299b613d7672fdf6a"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "de874e3de9a585756de97ce8ffab1d8a"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "5203f0d8693242fc92a01758aaeaab74"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "7082eaf325f20594d73fed01b3aa71f7"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "c6772b5bb33da88eb064ccbe51700b20"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "a4ec7bbd3c04ec2043095b322f0abef6"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "9cd2a4062e0bb7bbce0fb644d3dac68c"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "d8652c7255d8c807593d0115a2191a73"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "efcac57f6bc2f5c54e97c14bcd57dc4e"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "5ed8837efdea12cf092343502c7520c0"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "2f67a38a6dcf7c54d604877ded4422cd"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "75d5ff8f0539971fe5909262bf404983"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "2b06233567403a376e5a669763da30a9"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "b434355f2cc929e4fc02160d0f7a2eb9"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "247b55f79686f6505d09e8ef123a904a"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "d16e830da9d03dfed9a15a3f11bca38d"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "79c06331a9c0680965ac6a3de47ea632"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "94affb996fdc538af7576b742bb0bfc1"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "15ad6cf9cfffcc507c581808119346e5"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "2fd15dde34b0480a31cebf9d2efd3e0d"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "06dbf2e4e7b2fcc8cc3fb9cf86253aa2"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "14519f67982275757fa5a25a0dbb9129"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "47ccdc67fd0a736ccc09cb6389462607"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "08e615f4e18b8b99b3f84379ae46b45d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "9ddba67d1eda53ac1d1c8d8e18d9344e"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "fe0d6715f81c1c791688974b44040961"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "c615da2f20a4cae191b74a54c6c17fad"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "c12aba8d9ac28c2aacb3dce5138a8681"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "f528b31b5e21eec6fda75ea24d4ef7b6"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "429d683c03468844f4cec7bf9510d0ef"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "f8f393d7ac5f3229af80ba92d538ebfc"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "c08d51700ca5252812a41599349d6a6e"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "4a1d09168afc1a96ddb263fb248f5c0c"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "f6b0aec13f140cd0b368462152b2d677"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "4d7ff35e1d9b017d50092ad54d8a728e"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "13585cef76d33c6a861fd2329467dd18"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "1473987601281b312fca749661c8a494"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "aefe6166422f38227422281adaf66655"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "f88cd80954b7f1345238a91bf3e7b6bb"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "bbf087777ca342ade36a884168627d3d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "e2ed38ff22fc146f6dc8eeb2c4d5e54d"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "d172d45d0f7c8aadf2e73d60da1d364f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "5eeb371dd57b7249e5e32b51e0f636c5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "f8b14020abe574a8da33acbc7de2f62f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "2681fe094e0191787cba803ced1f0998"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "c8f8a8e34106f0ebf027ef63c32c4eec"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "7b8336f8229df7c9d4abae3609b4b830"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "3c726f56f5d2e71fc267762eaeda880f"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "b1433439ded9461e9372a99484241fd2"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "aa7d7f4a6598838bb1ad7fda4ea2bf88"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "dd7bb33a5fa038a36b08737e163325fe"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "dc2a7b674fdfd1ef2fa4e1390ad74adf"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "5dd8e2f2d7940e2091883c03c5a608e1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "974aa0a110743201135a9808075bb089"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "c216ec1fb6fa81c7dda3f50da27b4e5e"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "757a641680df6aaa0a4d61d615fcf331"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "348b2e3fed307f7c1527c4df3f246ad9"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "99067c3c83aa16fa4df10ce8fe7d11ce"
  },
  {
    "url": "categories/php/index.html",
    "revision": "39a62a5fba4aac36ea545a8b70bbbd5a"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "a50498cada163b3578c2312e0e826221"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "1d01ca3db1b6a4ded4c5e3bed02d59ca"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "1908690463a068203cf8724ecb3d8adb"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "f065b660224465c6644d2d54b6db7e0e"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "f7a05a7812ac19ddf4ee264a7db6670a"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "461f4ac46d86f8f3888e2e82dc1d6eb2"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "0db154c7db148fdcd2e3ccaa690a4fb2"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "ccad0cefd001b9541cbb67144e552eab"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "c9684d1a1d26a6e016109773d46e13db"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "5587aa78334026699e9ea0519df01e64"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "454738efc86c9aa7b1d6dc560ca4b09c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "7820419b583c3e6ed25f48f1cc080c8c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "fad231ad2d8f932d9cbbc1e4e7d082c2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "c170bf2950f7b0994e9d18093e80d5bf"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ab8c1ea9ca1e6de4a5fe529539820aab"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "20d45277856760d6389d3efb8b3a0067"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "a560a2fac5fe47fd55b56b26e67e46b4"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "7d052c42729b5d5de6dc7444b29008db"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "26a7193f1d0b2014146273bc28d2ee7c"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "98de6087f2065aaae7735730c37a1bff"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "bd39aad7a78fd92e59dd0787784490fc"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "3356d81ebdd1af3480b390c3431b5fff"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "88ffa53de14238e874f7fc745e8812aa"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "0dbe646bbac51c1de9b0f5408b6e1a0a"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "83670aa0c70aee5fe3a15ac866385f1a"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "41649bf13eb606e441ec15ff94cd6a80"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "27828e975db5152c7a79089b9ddaf6c0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "cd5cbf9d661769b176be9f735f12bfd5"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "f706226abef6e28bf748f35aef7153ce"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "9fbb8ed8f57a69168e91d970dddf0041"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "0be6bb71560479436ea3f868a92c232e"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "88ac486681d7e397dc65cb53cac3128e"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "3cad72f92dbbda9fe212e713d0ac8f97"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "3d77a4363029520a346de9173da5b1b7"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "e5e4d344fdc8f192850f45c7666e3384"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "3616f9be79778103c7b6f54be43624ca"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "ac6cc74392edccb62ba90428f9e16742"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "e6ecbfceef487be8aec8e97c564a89ef"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "9272098b3a418b996cf6f39afb3e8b87"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "7ef683e4201b6d7ff758888954315413"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "f59e9131bcb16eac7f1a3dc863b2292a"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "a19001cb18192f14afb0f85ee2ebd0ce"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "9bc6813c1e94aecfba367f5ba48d9898"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "1db48fdd5ce7c1f0f78bd70b4edf6aab"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "2b2ee02e66902a02b778edd96b0c7480"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "f62e07cdaf24192fab9b947c2639c431"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "88bfbfe408e96921c0aab32123347442"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "cae99fe5c4a0cceaa612c729506b3954"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "2750279d0ba8ed0380b5f2cccb8657dc"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "f1c56f5707716acc27c3c16966c8730d"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "05a2c9659102fb95513fedf05f7f1550"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "de9490e0a6300a17d135786fde6e48d2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "f14bf1a354b43244e0c0f13d0a6a45db"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "fc70d8bfbe67f8f99846e3d21d8709d7"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "c6653f059e7acbe2ca1b14a4de28490f"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "718eb9e8b860dfc1286188bc0f907579"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "800fc58b2b3ab87c486140c69d4e2352"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "6d3accda1e575689476304728daf0725"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "a93506d9617c830d5e79668cc4f839c8"
  },
  {
    "url": "categories/python/index.html",
    "revision": "328e6ea0ecfa06a77da223ef2227b4f8"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "c3ab18706e8e72f2f75cc8a26754881c"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "808f4acf7c8d5bd0aa9663ac30abedfe"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "6ad8ed750ec2115178fc3f6ddd1ff856"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "9ad138e7f3e0465f67580c0a4c47703f"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "24066c1a8953b77250fa932dc5174607"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "3605347fad96d965bbaa28d569c9e810"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "d2b750046d5275f195dc4b1e5783cb91"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "4db41da31b78236dc113b6fdfe2f4742"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b4b368b78723b34a0c381f3a61551fda"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "f405a8d6e63778041384826a6cd0b3e4"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "8a0a4a9d619c1d3c4f3a836b1b2ca5b4"
  },
  {
    "url": "categories/system/index.html",
    "revision": "6fb7cd1af0731ff828530a5049d4a74e"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "7d34864ced43c5bb5a607616d355dd81"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "4bdf1f7060507dffedabe56291f6ebcc"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "4394f40756b8dcd99119ed0f72e77313"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "98b1e73b198ae87e8417db1637264fb4"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "bb7eece1d33f2980f866dfd0f70034ca"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "ef7fe3e0f5dcc8d4d521bd09205266bf"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "6765da9eba191418ff0943f8bd013b85"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "81828f60963805509ab9adb820a2a3d6"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "c06e9f016a3dc31e28364fd1f5b84357"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "d96d2a994957f041338ec565d25da837"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "571ecc0a71aaf265e82f659a3ffdb802"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "9af9ead666cc1efe20fdcb492e03111e"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "40b4932aee79eed9b96d2efd006697cc"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "f783ae5980339c117f9a7f97b25b415e"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "0e24ba8a735c7d994b5dcb6b207085f9"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "26f53aa75fe765bb740cbb220e9c6de3"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "8f75c5585faf4d034c328e2216b25d33"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "1583bfe9acff46662c596e5e21a6f0c1"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "2f15c40a35dbef705489dc23a137e591"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "488a97cca28a37a6a61ce40c7b34a08a"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "d61618b86c2a5036292bad3f90b1971b"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "6f2e9c9a2f6eff68501236f2f6c24eb1"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "a203ef1c42162ece7bebe2b0500ac68d"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "b59d56bace2c9fa71d15ea91632d3ba3"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "10425dac28ffff2a759d17b72df532da"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "9e63dccac18026c555abedca4195baa1"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "75963de5c60aa21411d1c6018e0b4007"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "d1e29f83dc06f0fe059e1f467f1e1065"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "6fb8a3260365a867db988e43a6d9fb5f"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "eb5032a8c13bba951f3da9db10720589"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "aa9ada1c93c6470b24d272f58961e398"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "9896841b6f2494daaca811d66bb066be"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5988c6e288b014521348be8bcc9ce64b"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "35aa0626d44c83557b275780e8d789d1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "b07579f07261ee9ee32fab64db1c513d"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "0765175077b040402bb8d8c2535c8da3"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "99015cef98268772b255a398395e12f3"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "de048d672c933d2cf77d1dcfe2d49a43"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "35466c380c7345b2fb886ec1e97f976c"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "0ac0cf50c23447b2507c3b6d247188a6"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "aeb26966edc8c8b4a438c785cf24063a"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "aaf599fe4b79d1aa6a017786d2a77383"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "22438c2b8f3a9cf4853ae66a6f75f10c"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "63cadace35a538fb6d2e38750f5eba9c"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "af71101e2de7203783339ec7f981e5c5"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "446ebc24a374125c94d67173fe28de7f"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "7f203820420d12f7965c19bc29740ec5"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "8f73e617a0cce7a862d834d69af731a6"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "cf09cf757b388c5f53d5e689cdbb3a7a"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "5ea9981db84394244149cd4535a32f72"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "4a154278ffba1ab89af17c29251e53cb"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "e77834d6778891e236b5bb9aaf0691a2"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "9be8e710fde1d2cd748cae1b7d8aa2be"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "8b2883bcb43170370f327d35d2fb539a"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "059debccc98d8a65a163505ba8520445"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "f3a151b8ba3bb5c33ab25536c6485d74"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "ec04469103353d1596da1418e3642f93"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "765d87cc16078067879fdbc5ec6989f3"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e11c9276214a6ae5667c2af12f23248a"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "12cd510d91599f66238d8672237bbee0"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "96f26b96ec53a8964a31b67a54fac5e8"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "1586ca778440d575925a3cb1a22665b2"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "6b560f69331464969cf1df477ac9c832"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "140617a43bcda12c87c85384a0fede88"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "1ae798c390ed6494a0e8671cd9a71a86"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "33a957002cab65a3eba5429f97ddbd31"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "15d6dd4185de112c49edc9fdcb7a4b49"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "0a5d16e6793976d45643f25b4690ad7c"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "1fd072306e087e246e6a8341b257404a"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "edd61126d6af79bd2494d0a3f5f3ea73"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "d632e797b1d180938aaba18342722219"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "0662315b2d07aa5b4043e69972887a2a"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "7f85435acd090089095790a57769291e"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "bf18f0cfeeea942110f3684bac26a71e"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "53ba0a27d552c4076b225fe9946eeef6"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "41a97797181b0f658171c1a1406ede6e"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "ff942a2306d3ddfc8fc6a349f14939c3"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "b5120024d10cf3a3c1746b4feb92191f"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "85807a4be614623f25170cb21e380f77"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "3612d77aa67bf64921831eb7fea2448f"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "f3be7f5a9add6b263d7f3d02ad96894a"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "f064b749a1d002e5c4974bc80014458e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "f955019689f3d479e1653869fd366336"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "434ae420f04d6e0fb1203fe218033ec4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "36c005f4ca68bfe8cbbbf704b3b906f6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "7806aa2d17a195594d69e9c9d340ed45"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "4cf5ffa884657700b1df6b2ff3f74599"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "3dcd3a81f87ca3276e2d55200cf3eca2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "00799e4154c7e9c8483691d48c29d824"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "315e861c3e5238c7f616355d9756357a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "3cabd90a185dd449325e910bbcf48467"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "8badcfc447a4b61f91d860ff6cc8a708"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "5b22fedc84eaa68059086ca8414f3107"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Settings_Sync.html",
    "revision": "c0d9206a931d358e602e0d4150f97dcc"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "e6fd56acb1eeccb98adfc173b22ef4e2"
  },
  {
    "url": "favorite/docs/Tools/Webstrom/index.html",
    "revision": "d64b1170eadc87a34f630d7da7a57936"
  },
  {
    "url": "favorite/docs/Tools/Webstrom/Shortcuts.html",
    "revision": "7a807d351c2c6fbee0c56948556ccb0e"
  },
  {
    "url": "favorite/docs/Tools/Webstrom/Usage.html",
    "revision": "186c8fcea73c386137137fad2db5d743"
  },
  {
    "url": "favorite/index.html",
    "revision": "3d18b6616a442f6d317fa35092f014a3"
  },
  {
    "url": "index.html",
    "revision": "b9989dfc55f79c1fb288f48500cf4e7a"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "f387b8d74e9b934ba17245a08dd30353"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "5f84d7ec8d0123204fb5bf6e64dfc5d7"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "c4f6b7e3f5b0f584f8ae39b583887e98"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "4bfb0c20c254e52ab8ef6884017d0e29"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "ece2724ce38df680f855e6b2d9f9d7e9"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "9481c7709046270b3204dc1a72f8c88c"
  },
  {
    "url": "note/index.html",
    "revision": "90d31c305dc3685adea69eecdc5da8eb"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "bbbd88a35f7dbd5ab76d6652dddd260d"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "64c4729d2b30dcc8431a4350df74f3e3"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "dcc815b2472e3230362a28dbee43ed6c"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "1d3dda9bbb67dddb903014168a1c520d"
  },
  {
    "url": "share/index.html",
    "revision": "22cce93d9265c97c0d65c18df091a72e"
  },
  {
    "url": "single/about_me.html",
    "revision": "48162642b9089ceb70082515ae15d6b0"
  },
  {
    "url": "single/all_article.html",
    "revision": "bb8c7cbe4a70cb2b23c1cfd533954f16"
  },
  {
    "url": "single/welcome.html",
    "revision": "36c97aa22ba0b05505c7deee328aaeb7"
  },
  {
    "url": "test/index.html",
    "revision": "1de89a86babe21275efc8aa2d6d97fac"
  },
  {
    "url": "test/test.html",
    "revision": "48ce95340746c792106c3c238510b598"
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
