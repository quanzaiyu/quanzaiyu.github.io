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
    "revision": "6c6562e612679ebf670eda79c6e5eaad"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "e6266931e1f2f7959b8024a92fbbee4d"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a3aba93eab75084d1348785f42e12dbb"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6f4708a959900f9b7b3d8efafa6ec065"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "bac8fda14c2665ee8d47da1f41e2d096"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "29338a0a3dc682a5e4b993e20cfab797"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "fe42c54901f5309718e71d47e67cebf8"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "86040fb8258fb89b64308183840a9a56"
  },
  {
    "url": "articles/index.html",
    "revision": "3fd0452913c2d5468188ea41d683a485"
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
    "revision": "923326c399acd5ffc169769ce2bbd58c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "f8a6abae27b2561b7ffb7537a3fa63ad"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "d12a59cd6fb7b4261ffa64cf647434f4"
  },
  {
    "url": "books/index.html",
    "revision": "43bbec0d063e357db2b20a94fc56d88d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e87429bd094ac1cbf73f339a3bfc2cf1"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "08ce9f57ee55f811c8b552f943b8b356"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "b6e25be464343cc1468119ae8d790ffc"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "2824eb6a30a061f6c505a486ec7b85d9"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "6a63fdeec3ab024ea1b53311c2f72c8a"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "72aca57dfca30a93b8e3aac5cd7ce972"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "8ae61a062cfb439b9491986654d2c474"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "4d4ce036ddd81b976a63e6f0148ad336"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "bc57ce0df21ae3cc14ed954729ac678e"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "e7a54933c3f03fe852468962ac5d40c3"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "1d258cf00c972098ed0ebff8de84f72e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "63b9dbf2596f7375804b75fb3f990376"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "6aa51a1137e45f1b2ac6344954936854"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "f80e2e6845601b82203f23dd897e7337"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "12be7f4f7fd8b115fa7a099202fc51b0"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "2cdb406e6a4942616d6a0a91a0f23308"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "1d673382963b2599d5af1e18c288bf16"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "bf160f1f94d2ec65d2b3bfa688670b18"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "be6ae4d22ee7b6497df6b8cf38eb4cf6"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "3c4b6b96b696025e8769d672d4ef34a1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "5b31216c56a1fb7f679e8c482a676d19"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "2ee34a5bae3953323c56988d86814211"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "c992f374a4b1ef62bc0d5be72a97fcf8"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "8d68dc818bc5172945c43679f2027f3e"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "28798514c72b2325e5d6904b0c91e7f6"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "dfa9773b6aef5a60f9a0d85de7346267"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "410b309f57060e21cc7b29edda8b365f"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "1a97b555795b6803512ed9891ba5ac65"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "fd38a1246c306af2f419b01d81a5ecc7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "572e98ae6d8a3024cd1875e7caff3aea"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "a0016305c78b05274b2330eb80733575"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "1daee480d5dd9a1d6cc0e47d84209279"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "91dd3a4159b1b675fc4dd43b1c222052"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "29a37e1e86bdfe7ea829d5f40e530d80"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "6d2d3759b4aca7c972f6edf8c89f059e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "be71395cd2cc92867059071b17ed4d1a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "cb72bf4efba8805de9f1258ff91a4835"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "f02677ab40c831895c05fc5d79d30cda"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "76f5cc25d9ec006299bc8a7629a79f49"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "56c2ea012eb2951453e61254da553b33"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "310d177d00c129d6d896e53056668506"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "e7ecaa7ff307757410c700b17eed0569"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "c0b1c3c9760605594c4ca2bc8cf253a0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "29b4d509cdf1c7e9ac0991b3bc451abc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "a875991905b26531098a7d09e881af2c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "eb9abe5b5a4786b686626e201d407b59"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "22f75743864b378c09f3cd289aa16331"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "1b9e6783d77e195d179aac915b35cd55"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "de969bf2ce002b6b817bbbd034b20b50"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "3566642fb443b6c36422fc5b07a109d2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "a2b22f7ec6cabad6964bdbb8a9ac043a"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "442ec73a432027f3de7dfb261573c036"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "8e68173b12687dee09ed46497a6c9ade"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "3758b1d4fe17e1bd4ab471ba58d92e56"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "5c5d531a1eb39c249bff06a0878eba6d"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "42a54bfaf8488e7ceb494edaa82ab77e"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "e0edd40e214b396572c2387c6a61d183"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "737effaadb44806d8ac93cffe8079a0f"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "0c1d5feb80570fb2ade20294d2b7e062"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "0f9bedafd64947e39e08244f0057f1ca"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "de3a0eb3115198285158a3bed7a67908"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "a28d4454a6736ab1a9579bbba451b088"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "205d381f56464211e71199b3d04f6f4d"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "a7d429a7507b4ec3339e36903852062f"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "b8183af2121a73262a86b31cea589b44"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "18ec25cdf59a68874179d1ec82058196"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "814cb693266c722f9a303b9d3543267e"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "6012f8707886ce74abfef9f3323c5d76"
  },
  {
    "url": "categories/database/index.html",
    "revision": "4ab341a4e9b20e25d0ac990afa435e5a"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "7c18fcc9a4741c5f2f4fdafa3ef46139"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "534daf544c3bbbf449ec8dc522a754c3"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "588dcb2ce94b01ebc6c59d0c57e9c270"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "657aa0a8899b7ff745188157d9d187ca"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "e5e19f645edc7c90ccf7010d47673373"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "33cf4330921775639daf86db8f03ce8c"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "9ef88b14f1e7616f4a14ee0413140b23"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "95ea5372e94524d59872f2b72b957a73"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "d63c35c708c80c0f0aaefcb9cf6bded6"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "97715fa1b1a445543865732824cba96e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "d28d8ff7faa8451f0aef8f59a48ac987"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "4d4c0b2aac563a5c72b7065023eceb7a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "3fcfeb27de7c9bdce759941b0849a674"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "8a8fc89ac55107394047c8e7a5ba900e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "c0673a3effd958f312db095ea5e29f0b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "6b3f50c1e9d14ec5e23dc50d934c9a40"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "3391115141c0e37166378f8461e101c9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "ee7704c9bdfea01c1ebe69466ac03970"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "10607e3db0bedd853a0dc8e13c213fa7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "23f0f6d3b2dd552866289736eb87f8f1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "314519666f2907fac553e5692e3e46af"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "32404bf0a7fb9151c34986375af52181"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "1540a01860ae487cbcaa968f651ac161"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "4e844e40ae113a4d47a7ad7cdb214767"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "cbeff87dcebb7d5a4ffae866992b2d2d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "71fb99d4c00e1faf631385098eaa1f1f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "3191ab8fcb2909c01def8366b79d87e0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "1e69e5e8e07b3daeeef864451bd1499c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "99403968757e724065c24115f343c0bf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "f38a10e30de242ddc674d360526af31a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "fb5c24dee068b48f03299b9b73f7a648"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "b14d49ac6fdeeb89d27f4fdb97981f25"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "300f87ae9ed11a1cb2d90705be164adb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "7351ec700aff5b20a58666e081c4a734"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "fc26b4f4d2345075b8a2319526890a3a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "2345c5ef9e00fcf96f7b9253b045fd6d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "ec5315fd2274291db1c5ddc174a77297"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "bb61b81f431e2a930558240a5acda52b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "4209bb90f9ce522c76ef532d24fbf669"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "b7f65a186fa9eefe2c3ed1adb52d6d46"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "7cd2a599aaf9f41a9c2724b54fe8a8f8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "c85f46405a406bc14483777cbf0d03f9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "5d6497c25765956e7d2c00a9dc24a62d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "87870170fe65860b99fa5b9f0d4a6e46"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "3de9646d79f9ce8a2cd7be6b0fe94f94"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "1d43b2d9cc8e703b603d345875449a90"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "5f994eca4dd5c4925fbd9c01727b8e37"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "8b7508d8d8439ef1a9e89153f0c233f5"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "64c8f55d4d94c8614d4b2b98bf03e188"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "f621d5a5ffc6f5d6c61bdf8cf83313bd"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "1c89af12ccf72dfe33cc68709c41f3ee"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "715f60a1103024363517f86cccba37cf"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a9a44e51c264f163bae7bf826d7ba856"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c208e55032e2154abc37f3743c1ef33d"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "f97c07350e459424545a7b7430acf06e"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "5c3e447cdefda2adbf1f854c15336752"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4a193e5e2331352d98f0b19879776dc3"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "75f02812d8c4e3df95a2acc9896e9364"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "5fadaea3d352488ba92b9182a7ae664a"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "99edee187abce959e4110dda9655bc91"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "e645541f16ba6e9c4dd27e0de17eaf2c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "6b35c921a533290f3f91e0e279ccf803"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "5c282a7d759b49d0c24fc5c3b67d8898"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "9f3db5f4c4f517d21029a89fb57189e2"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "86dd5ec407942ea99f619f907b57a46c"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "a14fd3f9ebe75aad2b4cf8a4fd730e40"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "747b0da4513da5a9d2761fd364fb0e57"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "d599fa2e1b287b97c02a019527f29ae6"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "f135bfafa216b69e1e81774a6dc8ce34"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "103b73fd003f3941b04f3e62eeefd4b2"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "29c68a3b32b14019e505586187ea270f"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "ded316404deb24d11495feb7df806a87"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "1d1de0b20ef2eb4ed6dae3dc35dca1ee"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "98b9442f7380405ceac4ca7294d3cd56"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "b7494e68eabe3eeb2de25d68a5ab39e4"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "8cf7875307dc7b1ad7f332a373dea44e"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "51c883c135f42078ec8ca0ef4c813ac8"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "5b83f30370e03c3fb3d2a4761cea24a0"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "5738f6ca28929aefd02bdffb3646e817"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "9f5f66814ac266803472bf1bcf2a36ac"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "884ed3a2952ad0f9a1bfba685e5a1b53"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "5ee81af23d58bdc450e851f602f56970"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "324135422b56c8dfca86af3e95df52f5"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "fbdf8e3073284af0c4e6de23490af5d4"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "f20c939d3b729ebd04ed341a77841733"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "74e5e1a93f43b23981def96e42c76e2f"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "92f0de621199800304035be3f7e676ee"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "d459bedab0822ed502618fa0a1810a8f"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "4f3c47aaf53b2531eea79fb41c2c0aee"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "78459df277409cda79fca3249d36bfd4"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "9c820877c968de339be13e79a27d171d"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "90cd47174dd96b789aa82b0255eff08b"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "a345f7233bdc4600107f0924e0154937"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "56cc1d755c4f82638cd15e2731ec6ed2"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "d4baa334c026b18724f4fec65e97e3ed"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "65b66b847077ef7e487d5294bc5c9c52"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "f5411f37d9307cecab5d1add9d4f294f"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "6d1cc2ae22d5641eb659f1a907f1463a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "e169e0cb0936e30d1673f23005f35bad"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "66a4139f245f61a8b1c64087e8565738"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "c37645796d52bb5afa624696a3de0b61"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "97c29350383b5952105cc8b3c9ff03e6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "04cc107e0efab321c611b2364bbf767f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "0abb2b7540f86d1ef51ac57deed6785f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "d5ce2c216e444ceecac0d494eb330076"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3a25a3ad6784a25bfd4f1dac00e97c16"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "54093e5bd05f7f2546d7dbe24138c516"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "5906b8285df9823656f531d54f98881b"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "f3a132ce706bb295d8827c4a356ed417"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "c1877f5bd3ba00483bb06166e7acd2a7"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "5d28aa5ac3408b0a664b1ba0b5a61b24"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "fe9307c5e0393c719b17347ede86176d"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "a94db6393c2862fec762cd77b486a06e"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "32d8c1d0dceb8535b2c8adbaacfc163a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3fe48c522e966a1aca0d391d522f4c30"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "23bad2ba8e974d0cc11285b80cc1fdc1"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "804b7ab6d953b44deed7b0c1759f9151"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "868f3c16d0007949f40f446da016da46"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "f1116d9f06156fb50fef22d0f20353fb"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "e9260812a41647540cc8f4968fc86d92"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "373bd50b6588d53513956031ca9b90bb"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "fc9e38f64e2e23e4a7892a80d3258477"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "19290b7b47fe19b5633cea76928c3488"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "a787b1ea15175847a7b9286a3a4e1758"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "08574a6f534b8e5a66accfedcea70378"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "c37ecf162d8a99bc859845d7afae7d9a"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "aa74bb02a2b674aa35a7a7c2d090d6e1"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "6c4cfd34fee1503419dea0a019a31622"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "2773fa787a2a107c3b8e7097c7357ebe"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "c70c6ebf4c6e355703047ba8be3f546d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "8f6c518971ee31de689953ac3d8add44"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "de1a03f2e7b022a1985a2adb5ab3d9f5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "61beebd93e72bcaeec24842494910731"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "b1043f82ac177260dbd65dc368f682e5"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "c533a7fbbf0e647e087bf2e1753036e7"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "7f0c8dbc0408767e3a306384513d8bcb"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "930c16f671a59678d6aa11edea76b158"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "a14738c612f6f864ba837d75bcc4c5ee"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "c06d18d8323a1646d3a4e132ac009364"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "c896cfa564e86842edaa9a2232df1539"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "1b37f898285a5f545e766632e1fddea5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "4076d2d749288132e4bbcc613af3f31a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "904c29c20ddf214f955e3edef253d554"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "587caff9b6500dfb2bf69ceb67d41b3a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "7a083a42e1e99fcc3e43fc79f7d80fe5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "bd9530120ee2e8421025eabff06754c4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "a7cab4e2bb4cf03d42a14d0097241a2a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "5c58a4c722e2e4ce20c552d679c8640f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "fde1b2475f005ef6aa499ead65db1cc9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "57dc9bd502bd34a13737bb59c2e3b993"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "b0fc2852125fecd4e41cc70c47554956"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "434d43e8a84e57b9a6a52946205ebcf5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "4a9c073c144a8a34e94ad924cb4a83f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "f21c6290f59b76535feec9c7dd37af37"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "3e7f0c7d3106d88d70057e87f32651cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "dee7d82d85f71abde0a4bfb06d5240a0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "aec4df9ce9fcd6e51c33566ac7339909"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "9285526503cc8e02e613d05545e87fe6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "6bb2a1c5d3774b8aec109d87b87253e6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "27210301ea62c253c64c4c7424fa2820"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "e7a3894e0f4c267f6e420ba7e80afd80"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "37d1f0d0eeb8ded1f290076161461dca"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "03acd5a45d3fd02598c6004a478a813a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "64bf5f930ba2db60c081f388442a2428"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "946bbe204720c23a229b87661db57af2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "bab920b7fc87360781175e6f41708841"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "ea12b554d995b9b4c9259f18681f876d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "09564aa890c9ec73c67b0d937a1bfd01"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "b37e91f028bf58f039538c020d360283"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "4eb3979a6222654c9188fe0a7837be96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "5d9d2d97a22d57e7fc47211040512a4c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "fb0113282f659372d0e7b2e2552cc186"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "fd6a8a6d4f76c825ccc5c6c9a16ed77b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "4ad131f4660cffdf591ea2200a35db3b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "5f2c113667fa0b1432de8d47fe8626cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "c947ae332c87f2f71f075faa2e91d8c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "13e37c8b3764825b4e2f385d8a835146"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "9bb84b39877199a50c3e219777a25688"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "4fc6001c085fc4313e8ecc93a3e21608"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "ee6c1c27f074830f08b8b34d1446cf16"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "eb0774b1d53a5345945f1ec3a1c65d27"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "45f9d0211a86f9171886d98818731621"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "2247cbdd74cc60a2a50ab650a2777616"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "6b175c456027cbe3a9d2703dfd1e9c9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "2243de217a340fe7f3e4eae91f991e09"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "57f126b377b11949e13a837f5214524d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "34baa17161568b08355a3cfb81cbe88b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "0d6d2a192c50cc4f642e04048001462c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "962a740be1e2a8704dbdb81b355e363d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "e4c9ceea70354089fdfa7ad10449eaf4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "9ff53b69473dd611adbde64a8a902455"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "681dafc2f3590198f6688369671aa537"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "105932a0196cbf23a06dc348ab155d62"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "7b3c069a7587c62deee9870ae5a18f66"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "0b24536bc32920136aa5ef0303cbc57c"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "f939cb98e6d91056ed2273fa9b5feb3b"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a9da6e80cbf14757aa893bf76016a77d"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "f80b714f82e1c7b57106d492c5472261"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "b2b0f3ab3886e6ecd31c6d00c2b5e032"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "2a2c8775b73f534852e6f254568647d9"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "a27886060a90dba28b1ed232ba502570"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "401ebc250fd17ac71d891f2d9c9be0d2"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "0cc25a96633f4445ad88779a8dd9bcc7"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "08060d2e7897ae6bfb2171e4ae48d5f6"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a362efb777519245f2537be13e98b28d"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "c69405a029eddff025cd81a02a2b31f5"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "097f527f508efb36c74f056042a3807b"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "c9fdd0ef89e92bbaab598f05484b11ed"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "9304671b71835c2560b8c826cbcd371e"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "e02a0c5ea46c6abe959d1a4f52e77d83"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "8db0f644978b21a8e8473b746f8560ea"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "24c6de38f57ea5bf1b0df626d309f8a1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "71182be30648b7c1d950c617b19ca394"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "2214f7d9e6213ff79c4b16aedb3af5e5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "3705741885a1af9cfdc4c87b2c4f1b66"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "5a3eb50e350a6824621d0bc8ba4629d7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "6d2b2bd0ee71f4e0f9fca08d30728ee4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "c702686824e0cc61fcc27ea2be061854"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "e35afd7f7587b70a33a36e427e0c3983"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "4756f11796e1f5a608cc36e040f8d699"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "d4b133904d13b3d103089ebf659c2e8b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "53d526ab60c31c325c233acfc0b98359"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "ad68dcd5841f019103ecb0846731faff"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "ecc756e332978d49aeeaf7c76fcfcffc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "30f65fa7674f91c1e31382fd1b144d5e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "ef5c217847e2163efb20bdcfc92f590b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "57eb8f23eff5b6baea10cbd8b8258e0f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "a738d3e747a84966457052673724a103"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "6de128c0821f8b27a0dc6567f24a398b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "0803ca844773fbd90edc6a48e9e95e58"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "803195c127987fefc6f30f77778fd23f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "38a197db3ad5e7657e1d1c48824290b8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "df80392265c37d10fae68eece9d87fe3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "e6fb068217838a721915a693a67b796e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "8fabd906c2df8841a5285fac7aab2973"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "6665a33f286c07361352bee3bc6908f3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "396a14380fbef70711251bbc4247d685"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "c30c1828b3a5b703460614daa02c815d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "d893de616aa3a7b2f7fe10e343f79ac0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "97c6e42492e5c5f703033879bd706561"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "3e1cecf045f35a9630d407d5aa7ef837"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "bc9de9a11b9ea80bd07af49eee2b7664"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "3d381c06fea42adeeeb16e07f98b6c48"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "93ea713797b2fda1ee8fc8491d1242d0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "bc780f33cfe15eb40086a394a877d7fd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "2935f84a1d4a41bb08e7240d323682ea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "57ce9229b9c28e2828922d542162c649"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "e83634572989cf47ddefa1e42d2072f2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "e33ad3fa9958d35383cd3be1903cc686"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "ec8c4656f9867211947fb6c82315c020"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "d6031ec5d83a9df3370d417e8c505fda"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "a4b3ed9ac6d12822a146161b00dac15f"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "19fe62d26cdabf26d63e937772b371bf"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "6684b0b1e3dd117512b53199bab9c9d1"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "19edf8e3dd5c5cf35a1899a5dfe3bcb8"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "0792343f18e6d80e5ef32e7c04826a6c"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "176d4ac94d9d0fb1e0ecdcb38eeefe73"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "a0f49ccdaa968a11e135206d8bf4dff2"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "90344d280e83999d4952519aaf165ec2"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "8317d13952569f157f70144ef45289ab"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "aa18c423aacc3778d22f4c25bf253b92"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "e1b2dc97f6c271d32d5af6ca547e047b"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "803e3a35e74bbc7520591593aa83fed3"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "2293c4580712f1a89737937fab9271cc"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "cc554086fefcd6471cbebdf7e0fd8b18"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "c617e1ee9ce897089a22e56a8e6a439b"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "a6969e509e7235cbc139d3d00e9c6291"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "ca0703135aaf39e1b5a6d9d4e18f6835"
  },
  {
    "url": "categories/front-end/react/_books/redux/Render.html",
    "revision": "93a5a6770472b016dcbd628df903a08a"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "1a3bc4e8721cf97f61e68267e15e8082"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "51415ce3c4ae8f79ccd24a6fe7e6ed80"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "969141fac93f985f5283be3494e75e88"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "055ca9dac9e828ab5060083120666c5e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "956dcd130589328009c752059475dfdb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "ef5615b8af474842236bfdf5e7dc326e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "c8a2e69c15708999aeb2b40b3aa45dc3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "74a78d361f52e575e8c4631b3e0d9423"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "26efae9328bf7355445d45f2355d156b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "d2f72347b80047c44f2c91c3a9056b29"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "94790dac585e17c03ab0f8e5b9502f50"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "5bdb5b0831cee986981975681bef6a31"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "882426c8344735fb0af7f208ccced1c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "1911a8ca521e1205f750bdba19658010"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "6306bcd4fce134bbab4b09684eee6ad9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "fc9f317013c47493cec92ef534abae84"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "b53324f1a1aa99a95f45d26355d2e8f5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "6593994b7c15c03632cd8bc133673e7a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "a56c480d4168710a4e551a2703b429d0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "5abe8b1c9f605152d92d781ad86ade46"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "988d2b186dc157a9845331701c2f511f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "acda216235745b8f0cf0d6cab048fc1d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "7dec12fb75127d7a0365ad11f1d53e23"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "593b631948300eb69cd1252054162602"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "09072ca614ea58463426a94a45e031a4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "e766e6006befecdc2916dfea2cd5612a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "e918eb74c9824e8ade62ad8ffc75d954"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "1a8b965202349baf10d6ec12091a5e10"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "a556c11d2d903219d79ba61cca6199eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "16026802e3974eb66048fe65ca0d5ad7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "ea32061c51571c0f558875b6e640827c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "e86d6d629be288a36084f82844a23cc7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "3debc0853360472958cf2146882d652e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "3601d0cecce195140a6c6296e4c90f7e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "cd4594ac7b2fe9adc48f7a383b38ec31"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "0971588aeab2c6ed4445dfdfd5f18a1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "f0311b7d0b935e43bb38aad9a02a1229"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "dd7056a63713313e100339f2cf60b418"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "91e344fe3d0ec8c9012f60d169fd1025"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "552397a698186464599a6f87ddd02f10"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "6ecf5b30099e33105ee15fb6347569b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "d7f965d1c2d674b3c10f7cd63b0b29be"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "664cd58361cc097c80b0bbc687e477ac"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "79838771c1eb7c03491046a3e829e7a2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "7505e7732c24d6d943c08a41875f9113"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "a88908892f23af4a82fcb11685f8ea25"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "ef837161c02e6698d2f74402194bc684"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "caffc36ebad060afc79062a99d5a859b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "60136769fe3614331cb76165b09a24e1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "76165e59e0972e8ba630da2ba1b7d5ca"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "6b5efe1c01921fe7beff5bd8c1e27b94"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "365e8df6b27634735ede8e50fe6ae8e7"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "27a8f29bb7a8cf138837c7cbecfe68fb"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "1a08295d13226f27c51605bdcd324198"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "2b22c4db8cf33423603852a4f88f75c5"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "d8b16920fc135de2a579998764322e01"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "0481c8a2bba21ba103ddab9e7932647c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "664d604fcb195b8a6a4f06c60f47e9e1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "f925997deaea160db0aa0d81fd05bf8a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "7231c40eeae8f4323fe63cd4e39d1c78"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "24d3ab67a85301ba3fef94545a9b8721"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "108257a4016c312cc4d864bce493c85b"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "c1bcac2cea77d6b7952429cca7b1416c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "16d8440a65d11685434a57e84a874634"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "a4aae710995b3932096af3644f906dd0"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "bccedc600870dbddaabc707ed2bcb3c9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "75977be99ac6cd286496dd511f764c9c"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "3fe276a136c2498e31f8cb9e37ac04d1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "650b51d31e2127a6ae012bf9a06c9d24"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "e6ff3fb07f39a8ee1157ee69c6049bea"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "d92dc23a04a24e0540081f10550b6470"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "79cd3a9ce4e73ca523705445b1e613af"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "8b8240d81ef069d5fcbb03cc55601593"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "46be847b7fedad4b4b12a1ce1ba9eec7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "9630edbcf3867ecc2265d3331722cbdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "edc5d38af913bfffb7da47908470ec20"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "8dfd6368f7a2b562bf8bacaea9ab41b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "8c50506a1cebe2ce4ac308c69c706324"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "8002039937f8a37c48e994c7dcc24821"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "f358797cd8861ea942b9af4c0c4c40f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "ef12cf322b6d4b98527fa14a116c328c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "bec11d86d4de5325d336f4e811ed7b2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "ff23d47df541d5973e3454fed37a8e0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "e581285d4d0856b6058722405dd1e023"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "920d0787e545994e8d3ca0a4c2013c8f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "2baf95a8d6fb54043e31f55cede48298"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "abd65520aa42ba5e71edfe7ef7788a56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "756b0f284bf51e0d1ebb9e9377a1cc45"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "7d80a056f530a8113702479a519bcefc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "e1013926541f172a523051a9031be440"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "3e7bce564f576980e5e499a2e0a4affa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "3c4c81bc104fb10fd2838895962e9249"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "bf94488324cb2b5f2c55af30b04b436d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "6b31c7999b9882f037eb16573825cd39"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "897dfb8ad3054651d64c0ebec81ea039"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "34ad9cfe724d472155a61292ce640cfa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "b896b7379c01e2ab4028d6eb2d71db08"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "685965c04f21b013a4c60e636aa049cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "2f39761f17e35536d752f4a7aea93d07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "c01724e4f416dcff76b5f212c0ed1c55"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "00e63d990e570608247c0cdadb896184"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "d62d38fe3aed8eed18123af7120b7653"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "7b1077b3064b2f494dceac3a488682a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "704f614e47e52b920d126930215d68e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "a53eb04c48eb8f5a22a31a411cdfda9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "2a51abfc4b1f4ec1a3cb8f7000036d3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "78200d2458e408099e7773a52c47ae6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "9db24559568a217810bc8ec44964e863"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "cefc987f9458742553a903d39f35fd72"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "e609b93bab1e2e42b1051159bf44fa4b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "22a3769993737e1f928dd3cdab34286d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "6961873a6d97d605a5f6f3639c64541d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "194a2658c48899f2011f55384b3abb45"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "3cf74757fc0622dc4795130ac141ff9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "28fc2a331bd2d236567d32da4b23d46e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "6883a5b76cdfd1061955b285bbee4539"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "152c1730213905c2573a402ceda18bf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "cf573fa39f60174b7e2ae3c97bea1894"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "0c669fbc62c81e9768823b78e1904762"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "08ada7b24f457c389d58cc395d5053d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b43aa4227860aa853fe9c5822715ec4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "6de24071026c422d7ddebd40c5d3af36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "a775683ba763438a0b064ef4522e557c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "9b579964be2d32f2ea2e6676b70e010b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "dc5bd1a68493efc39b2733cf5bcb2b45"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "cf2812e09ec859a74c02e187cb108032"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "69b874d85b9af11a96fcff9be32a6eab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "683ae3c48215d556ea3c0d00bb7bf4d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "1ffa6e89566e4d7747fa4a84c65dd6f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "b8a742afcbeb582aa292aad2511292d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "4b94514e86f5023a309f8ab6776dfb29"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "6c1d40cdf8193a252e26ba9f8e3a0498"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "67bc2e29dc3727f934ffcbea4be5218c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "67ea0f5970947253a5e48adfc1f43631"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "9847250364137afe4beb656b2c7bd4bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "c3569bda01aa01d302e65158ab7c67f8"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "3a9aff67ee452a7a08901bdfe5ffb043"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "129b48e242b7d408410eb4db70d8cc46"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "b6bf8b33fc0cfac19647ce06ceb3ec3a"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "8cc9408407863a329bec995ec28cab77"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "990f2950c88dc4df8a0393712fcbfcfc"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "1e04c54e41fd3a3ef0091d4469dbeff1"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "9a543b1fead73a066b435b13d2b954a2"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "d9344bbda14be43024452a5f6df633c1"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "30ce6ec43459085e49909eac53c46150"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "fab69133e147df0360757ba2c6ac43d7"
  },
  {
    "url": "categories/index.html",
    "revision": "550cc3f65fc86350139960f720b1033f"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "d075b8c08942c121120af5fb0290f1d6"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "4941a235e00fc317d3488df0f6b8f2cb"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "a50e21a85f98e8eaf0740f64ee084d03"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "fd2be371b87e166de01f0911fee33fd6"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "3ec498474af1dbdca44beb51866440f5"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "f50ff422421be37b5a2be62a52f9e58c"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "40a093decbd9f1c0e918cee8db28bac5"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0490b756eb85758ef5f3ac613d56f2f4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "c4d01bda3e2e40ca7ec0fcc1482f12bc"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "b43a85f73c7afaac3f58a6e0287ecd78"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "eadabf5a73b8acb1e9bd3fd4b0627147"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "6c6a1c4d35772236a7ef88e5d654273e"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "91a904439a7a9c9258e9264e5548514f"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "5c7cd28d4e0afa78aaa0b196d6b13661"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "54278bb0622f7a8ccf7d566ec2ac0ca6"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "e64490f623226276f973dfa49c5e07ed"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "25f98f89b58972cd4d233baa3a529daa"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "c16f6768f367bad0e255407159720c2a"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "fe136943a6bd3ca332c721f231175913"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "a584f2780ba7536705d0809e9bee4917"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "4db28756e69fecf3987e59911354fd42"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "df504b0e302daa25ef78cd01d6989a5f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "a17b33dd62a455d4628ae5442127d981"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "99452ffdc347b3c77aa51a12133c4ce6"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "285e8b8eace4153a306c7c375d29187c"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "2b6bddadfbce8deee79d1081a3f0f8a8"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "19fa40f58e2b67b3ada620f9c505a02e"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "cd4cc36f1695cf7d325fa2b8ef935651"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "a3c8aa236a0e13a897d792b0d9b77c45"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "5904ac44a64793b9a68b11b44b06202d"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "f269f6167cde7c28dcf58a89e1a23cc2"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "97373aac622c40ff103946ae2d2f9bdb"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "b2bd7bc14cd3f025460f784456ff363b"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "0043c1d18b4bd735cee35a60498400b8"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "7ba9599247d4b4b8f1c4431cb67be703"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "eb8a8a4d970d538eeb0e566406af7fa2"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "2f0e70a8d8ff53100cceba8fd5137c81"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "21f3cc9e34e23fa671c101508aa64c28"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "462258c381b8e70f293d1c1095281499"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "f1284794cadfb185d3a493484206ae47"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "1e68afdbc45ee64f2d62cf2da7330848"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a7ed6addd8c34ae8340815577b883acb"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "b99a19c7c63af6bacc803fba1e910753"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "d7eb1a9c48a66cacb7af29c6a771f810"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "f3df72ec1910ae97a43a17e1ba114efc"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "eed9f7dd94afa66a60ef5e2c0bf9790c"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "e9a3885d440a0edd9ce759bc0fa72080"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "1320858e83076c94b7569170e5806b91"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "27fc88c88d44cf12e2fed7bf0f890105"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "75061b406573cfc79c39aa63720a5f4d"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "5d3b5b859ff17c0a49eb6ae175f690c6"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "ab1860e438b9c7521bf317f0283fb7f8"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "5c2fafb899739237207394ac9f5bd0ab"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "22c9299dc42a111272b3f7b6ffe14b82"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "d9e63b14397c9609dc83dcb10b9334d3"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "71316b68299ea9d8cfe5bd51b4a165fc"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "92344c62995573b5e13050fde19a8ec0"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "eefeffc93ae324fa96edfb8d60137fc8"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "b984d2ec927c2267a0a7c80780b47d65"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "685f7cb9181d6b0e237d40643d32d1a3"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "a495dc7f6b38c5a6ab10cd479b5ecd6b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "4c24251682fd74bb3d792241ad51d69a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "fb15bc9994b3c2e2874676348723bb7b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "e861308af89da755425e8ec0b66ab770"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "5d042109ae761568dfc1b20b83e8c3ea"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "c71b88878ae0762f3f3abaa37bb5d875"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "6f31d4190c614acc4723a743f377823a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a385ed18e86e07ba087d62c13f026701"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "286118ddb823cf9127bd6661f8e26ad1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "eb5d42ea2dc1d55b2de2f004f2442dcb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "cdbd4a9b9a7c009d671b484443adf3cb"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "fc521f6e544ba1b7fa187ba54695d862"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "c0ee864e302e134f5405b3bcec69d455"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "045f5605d3292d626d29c598d6dbe2c9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "7950561e311a1b4a071652b4a876c793"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "14545509af3e257102b1ce2858cf2305"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "8a3a4711f05016afeb6a525705062cfb"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "2ad4cbdf0ad318748e887ed8cad6a13d"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "cfe0438bf1615e8f1b3094f4b88ef667"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "f985443fe88e9833dfff3a4deeb283b1"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "a81e74413d4ef79772ef736b9e308f03"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "d53ccb8147a1b6b67d256bd5c6aed4d3"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "b8e4f4137fe1c1d3e78a8f0722f1e2d4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "8243acd0ebb7d5ad47010b7c911766b8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "f6ce98dc1ec1f39616d0ad6d67450bfd"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "9caf985aac3d00befed9edef1378c4c9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "9548721f2e6ab482319e81dfbb5d382e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "071df6c6781ec0901257dec6dd2618ed"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "36162e2a01ddb06b34a4e1e5859dbb58"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "a82318bbedf052ea3426979fc06cc30a"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "5f37fbf8181e499cf80368391f4f78c6"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "c5dc4051e81b1fa47796b627c495b6e3"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "6605a19422d5e896184c6acc5ef0e7db"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "0a2b1b62e4080c24748aad454298022e"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "c798138f955944b08943e4b09155008d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c79a882df36bd69427e08381898ac8f4"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "6b659b1e3254f7fc72e621d9f55ab486"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "df586dacc4eaaf26da1ddf4065464e65"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "028206b5fad224cb17ff22e5aa967d42"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "1aa0c8433fbe24635113968a3067a8f5"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "a2d28a0929df516fd84106128b5aa06e"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "bd12ea7518756db62c69189d373bc217"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "977f187a32b03008a0b8d59c77648c75"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "20f758fefb74bf776098465684f0088b"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "83e72967e9fea9ed61c699108fd7147e"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "2f0fd1ea131acd2aad196fbddec9f931"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "6ef36c8876b8d7c2f55d2c5371e31f12"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "3237a9a4e1d01f024a183ba762adb108"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "359a82206892f2132ba063f75bed9c4e"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "acb79cecee63ac1406b31725e1f1ce0d"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "c27aa0eb7cb41036fcb8e356e40a0dda"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "252ee2d25bfc1824b2dde2b0427be5fc"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "9d2c87c4122f6786ecd7394f7ef5d2d4"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "768fe751906585c395199850a5a8461f"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "ff335ef5632366e6e9bdea81ebe59552"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "f78d633584c4357244eb54654874a99d"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "4267cab453ff6b92295e79dc02816a09"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "7e28618429c3f33158f66a862e787a6a"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "85f6b2d8e42d78a8fad6fda3d6bff5e3"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "0c38437db706b6059770beeaf2f1490f"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "8e1246afe5ad548dc6c4aa0ebcfb0a7b"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "0a0eb7f86b376f1626f365d93b62c665"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "74a71415466b4aadf787f606b8b7ffb0"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "d2f4cd8f0cfb9017d0f91dc7c3011e22"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "208d691ac9c41496f2cd317373bbbe60"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "bf76d7442bc5cd38da2946d86157ab34"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "38f446f66d1954049547d914c1ab0643"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "b3726347a28de06325553c2b08c30742"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "96cd142c931247cd0ab90313a9f84fee"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "fe02c5843f5c8ca869a21a7edec22e77"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "4a6f326f6a7dc90fc054bfcc8557e911"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "a742ca629e4273ba0575440fd84aabc6"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "4b6adc6c94168170ed7fd1e2072a162d"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6db14a5a592c65b02d1b8b5d9f4667d3"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "80d6d9f27f5e1aaaf1fdc9981f900554"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "96556c821efa3fcba9c98a8027d4ee93"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "9583b9523224f642a2fa09e2a03f77ff"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "b9671d5eeb4cbb15843f59c9477d87da"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8314b2d267b939030a5b847c111030a3"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "4ff855f4a1fdff39b53448461e33c201"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "8701938d5174a7eaef138f9e1b815cc0"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "a25abe842323fc95c6b5c5685866aa80"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "331acd6308e1ddd1fdbb82b045bbada9"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "433d16c1ebb7e95a476a56a84159914f"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "edfede253049d6b087d307eb193d9b4c"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "1cef367f2ecfd99c39059bc638c1013d"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "ed13fe3a58bc0c24e033c40c21921c49"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "4c54d2d6af9103a4b6094b80cf47c20f"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "271c82e0d4db09dc8253cd73cee37ba6"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "9b902c4cd6c866674243fb5f186ab9b3"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "a7cc685479e37145a99d8b4bce82c7bf"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "4f1389ea4a60dc7a58b2c91d3557a14b"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "206e0a3a261ff84c46eba357406382cb"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "3eb686f5bf465daea8c3ec23adb39ae2"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "e1010c0c21d26f3f631c53e40263ed5f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "ce2325fc6a94abab8a9d0b028f34ea18"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "3b0d3a007f06c9dca65a9e24bbc6cb85"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "febf0f105d45f4d251171aae140e34fc"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "3e8ed0db22588430b032742fbc1d98e2"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "c1a60bcd4bd9c5c8e0e2809981377ef0"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "cac161340925c141783ae1e05ee02479"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "ade103d764682aa6724c14dea5c5b253"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "0732d6d4529439bb56a7790ed244a6df"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "6e56d3677b2f00a768cce66e53463bce"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "67daeb4194217443bf589b4fc4cb4981"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "b7318ab1515dd38e02c3cca0b0cceed1"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "05d8682b1d9727786036cdcdfc06640f"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "be9864266b39911159d0bc6ea80c6007"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "6bae8c9640a5648d5ef4de6729369ac7"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "b3124d305ba17d1074a589aa9ee9945b"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "2f0a7242e1d0f43e21f7305bcc3adc3c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "8e72d8c46972ec0f37dc3210b5f555e7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "f23574943a3935ce694085fdecc334c3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "6ff9ebd492a594e8f906d263ef205125"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "f9f8727e709e2a2ca580f34fca81566f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "61f187388b8e40e724570a87fb36fa11"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "579b3832e0f9077f678bf34e5b37a7e1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "638e1773c699f07293bb19f633a94e32"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "d3aaa26e5a97c57bad96697346ea08e2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "580911a4d7cc7ec92d1341b14bac1f7d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "d7c67dd5d872f7b810b278b79a0ea072"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "86acdb7aef9d0ad6cde6cec4c12b7956"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "fae6ccf900d55e07e81ecdc0b24bb3d0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "1b1cc7dc5bec87e352b1fe1957409d70"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "1e032510765b530954cfd92ec5da8a1f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "e68282facf7d7044f95e919659a0546e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "1fd26b10604a84911670b120b4583697"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "a0d95e395e470c05c42ad326ca8721ba"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "0cc3dcf51f4fb238c54619777dc75771"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "232b302123a0a8db1d992dc6e6b06066"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "f3a6eb97265e18ff8639e83823f35d30"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "3141169dbbd522bbe55dbc437948e999"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "dca1ce6b3e2ac490dddf500030a012b7"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "175f2f9def45bb67b05ec907fbf5528d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "e9b91a4fce54b50dd0766bff356c8009"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "93394fad6f65b2480713330dc26c412c"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "ebc031feffef525ce63be684cb76befa"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "a02e064f4eedc6fa73c06019d1019896"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "da7bb30e36ceb2049636839b063777ca"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "365b8073c9994d93206431210bbd4f8e"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "ed503a21f2289d1b30c43b78e3b27a61"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "e06103141474172a7dedce118f6dda3c"
  },
  {
    "url": "categories/os/index.html",
    "revision": "c5213e21ee53c411246136b3c6e199dd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "d4db86d9ec0d4542f667f5165e3fb0eb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "67fa3376458c1b6edf0c2b18a25819ff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "cb1fff6bcbc87e8c6bf8873bf439dd6c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "f72c6e892001c9345827e76d0e750944"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "7d81f00731944742a7846d3507bf0415"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "ee0233f14e5589b5b030605314fb858a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "79286c1a841378818abd4c768457525f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "7df881fac536e11580e2b4d7859149e4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "6568f3a87c37229ad6ae34fb150a472f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "b28289e8cf1ae9089f41172a368deb26"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "328c903862fcaa5cac7dc0d464240117"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "dbcf40148efdee44abd04136bbcdafeb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "de6ccd099625f9695c29e62744ba038a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "7d1ed8cabc1e3d4e477ec6fc3cf5e7b4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "521edab82c52fa4c67a2bf2537c13137"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "4ee1561b62711bb3d28ced2fab829761"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "b579a050220e9e949555bdab2956f9f9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "01f9b3af0a146130494c5de4760241ad"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "35fd3494fdbd7624ffedd07a8e9628cc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "9325a0796baccea38e5477ca9e12d945"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "e9002870989ade255fd78d824458850c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "77b134cce02697dce1ef4441dadc72c5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "c3f7feaf31a566eb236c0fbb271836ad"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "778ddc9e27ecd6edd4f88fc7aea57a19"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "e9149a16cdbfceeaa9a8aa541cb41a0e"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "02c7014fbd416318718fd31d80186793"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "7338df068818f537af80c24b802b4639"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "4845dac424726c4b61c71deb0d936aad"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "1566c8b13200b5147b3dc5ef0e82ec68"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "ab949cece3c2735114086c18cb75a31a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "5050bb350c1900d4d49674710e8f028b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "477fc95364d5c5d48b28b79fe309ac0c"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "de6b49d232299d5a53a34bb976e2464c"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "ed9f026fdac46ff4f2f76a6c611df97a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "b7a0f0bb088c91ab9e5dbe612c4da525"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "d330cd3ffa4801231e256f104c73c2bf"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "26e6b457c78b4a400293fe2706626e46"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "bd8d2248a851928407e8c052bfe309ac"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "24d01288feefcf7194accc56b5ee7479"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "991ebc63f8b9b4ebed867516f05ff759"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "4b8c8c3c16903a0010f16a7f8e1df78b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "5bcdd3430a1403136bcee72ceec7013b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "e12b4558689f6837145879b11ef46147"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "833f6613fa672615f83da4d8b4ab66ee"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "ae8fce4114add730763360e9cfad8a95"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "ed65dc1a32ffa17df25f42b8b98f41d8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "ed1756a7c6a56a73cbaf69acaafb423a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "687a5d968019fe30d46393cf0ef67a96"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "8672b8f2d252d17b7b821ee476780137"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "1c130690ac8e3dc9a87564be9273a2bb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "d61c69462556b3408fc90d7734b8c76e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "ddf0420e5e91d92294f4f6d57c26b8b2"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d32a2f7938cfc33abc9751af583e14d4"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "e9f420d1cec5648e0bb27f56d86aea0f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "08966bb437630f0ebe736e5e35b2baee"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "dadfe7b94491553f5c4854b0b5f5efd8"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "95a95684aa452959c2bc1563d0dc27af"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "ad81de9037c50aedc1ea2b9ff25da968"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "6ba31954da3f5ce3f9ad8ef97b42648f"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "97ca058e7b0663585b6af51e89b2c006"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "d77e81ed0fe729452dcc1157bd4b1f0e"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "5765cbd7322b1c1a79370e13d71d4728"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "4cf2c2666754f350d1b10976ea308e17"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "06cce5ab261d4454538ea2c2a50e4877"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "1b283861591943d088bcef8c970004b0"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "4a9fdaf5b1866d2383f32b7f503de14b"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "d17d0c7af73a9066d4cfbce3e77ce75c"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "7c0f0212743142efa4b9526358e8fe70"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "6385c8e2f844549c15b6e62f0af13c47"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "6cc500bb040f90017abe8da7be790ef0"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "98c0da972d3f3f3ed77ef0abf3127f69"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "f2fdd5b28c543003fdb560e06ede7be5"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "cc17896c332f5724236aa9c165d8297f"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "c8b47daa6e5129b1432f401272321309"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "b280351c45e5525e7ca331c0d40ba529"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "9145b0e7eea5c0bbc46d1ec4d549fa24"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "2dd8e02b5575fb55dddecd7b2eb94eb6"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "b5daecbaf131a30dfe8374f33ab596ff"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "b3c4913e78fa15055e74990dbece6db8"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "054583b2383035f842bd3d183e62d8cb"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "d8f74900e91c9f5e7db827fda52ca156"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "66b34c6cd45a3f5d2692a1c1285d98af"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "ae8cbe0e88350fab697dcf951c6a5e36"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "7cde020f257c4a1abb2b2c3452a4a348"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "a4c2fbd8cedd2b655ab1579b17ddf330"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "e45ab25e144033e4fef36ececa5f8595"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "b6fb739526bae9d3839c932ee93c7d4d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "1ee008581da0b9a5b1af30f1d5a7afdf"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "f86406521fb8b415a80ccec747035214"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0664b000e675f10c4a93ca0cb5bfa4bb"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "2bec6a01bffa39532239e8f5d078dac4"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "7ff4dfe05ec210848bdbc66d28f317c9"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "3df980997497c07d038b5cde6afdc37a"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "e888cc283849f32916e5744dc92c814a"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "781d40b560760a663e010a381e23cf71"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "1ea112b8c95bd46c498f0c45363801dc"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "8388bf296c679dbba5469b8249bfb0ce"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "873386f459ca43e7d402cc8f4f2bfeaa"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "7c8f1320e207958ec9af4d1dde38befd"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "2706150b9b7cf398ac079e26e90ff431"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "170cdfe4b49bf600380fc1b645c7bfa7"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "91b4c5e11d55cbc85d19a444d849fa11"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "baf4aa2f59f054fa3eeb8a3e40e268f5"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "92a8b0795b91943e54c09f533e7e7d81"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "97dae70b857479945819fd9b8042fb96"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "5332c3dea5548ebd08240ebcc943cd79"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "e9d0d3825003069cfaf510c4b444f621"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "ca37ef647a462ecb87e3dff12937c147"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "3419fa82d1f16c77d92529fef5b54026"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "7d8b14dbb0fcae5e008daf511a1360b2"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "148a605b5787553b50bb7a658bf67a85"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "8823ca43177baa76434699dc85b6b82a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "4b1332af2e381ed7219ffb6e41375b97"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "aa082715fcc10451031326f7e6083bb0"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "eefc06b42064987ea8e4ed2b114fd3d7"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "48b50e1c57dc34e82af2f96736ef9641"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "232712a7c75497963191a927433f77ad"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "5cdbe5a5e73f66ad7e2dc06383300037"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "65be8764548fba0e7278a51d1452c86a"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "b963d75a04c297611d50d414a6d8df82"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "fe47f24b1c33808ef5d413c1617925d7"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "1692845c089ba3d23be6e72e2d2fa422"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "3542ef850eedc2138e202e60a4079677"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "11f3de4665d44206cfeccc642652c85d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "04486100312328b36965208868d269a2"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "0736470d608af74b7d710b5592163f0f"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "e5bb057941dc8104587e87a7a129b08f"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "a01e83bf20909e6db908dafaf5486cf2"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "cf077a7dd228f80904d3c9c4c2289936"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "9399bb36632ba924e23e6ad91356b214"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "3d7c68b17dde2f3fbebc7072c69c231f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "bc4002bd01def14bf1cf6d3b7cad58d1"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "67342259e863c7ec49a1245f808b28f2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "435b573dc6d738f9bfdb6ea567b90825"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "b79b8896bfa59ee92c8808dcdca571ba"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "a97783dc91b3d42b2e23c59fdc674e40"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "5748651224af74823bee607bf5d6a6f6"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "69ace1fcc66d43c61629d68a9e8fa647"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "19d307fbe5b83781b3daba1a11d5be78"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "87d8f2f73970093cbb3765004ea914c0"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "4841cb54a405f88b20e71196a2cf3052"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "f96578d013de79c2ed09d6584af6dd51"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "6cea31afc3aa6f5bc5d66a2b3fc8d8f1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "a2faae971a032d07c866e6421393f260"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "bf6d1bd2b121f6c8a4ac24ffec9a7325"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "c8e69b1a33d4514ff6c32ad8f1a93c2e"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "6691b60bb0bdcc12167687f8512e2077"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "bb9199c720ef449619711995fbd767b5"
  },
  {
    "url": "categories/php/index.html",
    "revision": "67d639b03041b4c8b4a97cb2140ca276"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "40b67f90ccc03d13b56f418b3035a256"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "ef9d56bc80a0c22f1c209a456ca6042d"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "65dadfd3bcf8f5805c6efe60b9b7c334"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7fefdbaded1f91b377eec58c4ba5d080"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "8e9d73dfa79fdf86976e12f83064078a"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "93c651f738d2034ce2563993f8534e9c"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "6b29781cc41e7aafc271e5e858211637"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "52f13cd6754858a54fb53cc688fafae3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9fc00bdc9c1a85095b637463a829746b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "f236b66e73a8126a773e36e17215ab02"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "686044dad9a316fa9c9e08d6e39b2416"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "98f75b4b678eefac53619bb7c3d01fb7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "03398df9c0ecf7882080fbefed985a85"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "4c115da0969945fe33cb29095ab35df9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "3bb453da4002640e27974d17fd6a8032"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "5bb9c1c41cf5010d92f9724167ad387c"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "6cafdaa20730d6822d060cbfd6d5b4e3"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "832f3d5e040e2ca8bc58d6cdbc7b95fc"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "123a65e082b4951e29d1e9525c0e8af7"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "a00e987a0657e25e1329090bf8e112bf"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "ff5f2728a6647c89e5687cf52d9527cb"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "86c06ba68757be05e430ec5bf4c7da53"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "d2827a7f5db9390b24735b4d353b7df8"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "0373dd2efb7f78c35f46cf02643d9b4a"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "d1030bd48b2f14214057c8dc704d61a7"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "2495f8f4a0c3d905f5f7c2b4f5beb81a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "f8dba8a312ee3c4f715ee1bab8415d7d"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "9c8f68ca087c2daaecc4d940a4c144f7"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "b1c5e7690064ec069019361283807dfa"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "59ef6523ae0ec9966e287ee8bbc52636"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "9c25d2452a8af30cf4925ff3130a8098"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "36ee47b9e330632df372f89f0e7b3d30"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "6f31dae68efcf1a2d81f3bb758517234"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "d5234c426f4e4627fde7fb2ff3626025"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "98c4a0652284c96ccefb8ea3d12f26a8"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "e8e71db87a9f92b2dd7cb4282719da6b"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "8d4bcb635c9e109ecf4e96a6ccc9273c"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "da1ce7b6097c73187a3b439369cada16"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "5ff19dcb3e513bda16e82fdc7f0c6934"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "cdd657757c48f52a8734b15b03a2e15d"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "2b5e34175f4612bcbbaad5783215a059"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "05afef81075b5a14aa8f49e2b5054d7a"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "e00fb5237421b8e7dc5faa252bcf9e23"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "9da87cb68821f1097a6a6e37ef066338"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "55c9265335a8cf8d2c78d5a72453cb7f"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "118a5b36dc4d3961f69237dbe4e08e9c"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "19ff930cf1ebc5a354a3737631ea629c"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "29edf212f96d51fdb89d32997c89b051"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "90914334358f7f97175f8f47e72b4698"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "fce5dd6ce81171abaec1d7007221145e"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "42dc2a2cf1a202c4f210f6a141a5f667"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "784360c9634c4229f40e9407585f4769"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "25080db48c90e45f0ebd7c28c1e6e107"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "f0daadec48c3872729c9f69227a335eb"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "69ce9ba8acc3223ea8ed18f86f813515"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "45ac4c9301bda2c64e25b7240b0b0e6d"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "834c6b2ec85b8950d5cedc709c179f64"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "b09d993d9fb1430a05c13f69bcfc58bf"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "f015d1d0e7fbd5dcb2292a9f99803030"
  },
  {
    "url": "categories/python/index.html",
    "revision": "cdb63759da250d85d66966ea314d9778"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "68937cb338a57c8e2f3d3f9cc816ca9b"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "f04f48d7eb787ebdade1453e78b7a3ae"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "b34829bc8e266feb74aac5bb77c134fe"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c1002092bf1b0de173df6090f5ea3ac5"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1c45f5a359309639e44d5003f426c49b"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "ab166d2e234d9148911880c12a4b8342"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "42e64876d11031504083faeafdfceead"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "9a6d3fa826a5ebb197be3891f6f1d6af"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "8691ed110ce7546889d676c92231e57a"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "5b3631eebdcb3387c3418eec0e174c84"
  },
  {
    "url": "categories/system/index.html",
    "revision": "5b1b816a7dbf38d281de5bd6188e0601"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "0cfbe4dd648e5b7d22fa27e9c54dbc59"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "f1a652c89f7fbadc05d53bd52569c004"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "436e2f80ae25a14869b09444238423bf"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "9d85649d7336f65108cb54cdceaa21fe"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "4627a7997968e299fe4fb1d9fc26065c"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "7c11590961e433163799aa45379d1b76"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "87ff6b36b4faf863ddf2c6ce3e9db741"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "90cc23013b3633297fb608d471f83540"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "66209cea24dd4421a760655ca9c2e64f"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "65af889481406a2bb43ea80325130e6d"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "caa3a3a62bd94616bea9b2ef0dbfc30f"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "668b22936cd7be2e244624c98e05532d"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "6c03ef75c99f6573b300d4b3b7c3400f"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "7fa6e875156c285373db286df5ab3eab"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "439efee87f7f0afe807b001af892618c"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "6025b6b510b9ec88496f99a28e0d77f9"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "6f8359fc02764322c86baf01b4c30bd3"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "da9866fee2ddcaba4f65b06559f96242"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "fcfbbf1555ab54112fd351440612d82b"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "f345153af0a110a5aad33d9a1575e537"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "b5159baa434768eec70cbcb3164ee96c"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "6533d242e14989767cf35eabc08d94ef"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "7b6424e947097a1f1417ce98830d63b0"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "de07f72a7b1477696eeee5bc06e8ff55"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "5909f3b806c664dd06b517eac8ed83ee"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "2e0f976fb72664f7d51e7494ae6efce6"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "5039fd58fccadcec040f0a4eb4344a87"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "1d8c5160b6772c153f640ebebc5aee23"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "8effc5f5ca9f5f9f2fdb8297c1144b71"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "e54ac9f498a30f095ea8f0e1d1a1afc8"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "399af492fa5d7bfd3398f3848fe3977a"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "6505e82d22c5fe6b329c9a6d15b4b6dc"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "8fb977ee23f69467819b412d86cc207a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "24843b1d33d6e0a774de3008eb5a3c7e"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "0ad8a920c6e4d7e874ecde996b047ce2"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "2e299f0933e9880257fb2c428579ee68"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "d547c56a9dc1e0eddfe18ebd1762a19e"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "8c74811bac245254180b3a2c76cf4e0d"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "d082ba384caa838fedc56aee74373a2f"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "08416fbe62ad1ad60f7e4785bc5d4cb0"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "d4eb6ad58cdf48de16c1751a2b742589"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "efcfab8ce41a236586f76b8ed2944c2e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f14eab97a69954ddf91ad4d5aa53b9f0"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "08502319c799e27bc645269dd12d2725"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "f84ed0d35b2537c2fc00499dcf931a10"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "69800476bf69a9e6ae002e398e2489c8"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "adc1b74128eb8ba32c81815fda1db6b9"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a9d7543b0e877df8418c8603727dc59a"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Config.html",
    "revision": "7c853be247f76a4d22e6610b7ccf0af2"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Database.html",
    "revision": "27d5f3e3597e823c015fc056a871e61c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "b2bd80a1ae1d5a0bed000871e9ca78c1"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Keymap.html",
    "revision": "da41a6496446e72ce1cc068ce37a5f78"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "734d65b44777d34c7a445e3feb7a56ec"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Usage.html",
    "revision": "40f078960cd50f411ed03a2c6af83489"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "f64ad9c3a587102f86ead42f2f98c17a"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "c6068558e308934f4b5aaa3137042b5a"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "fa7c04105cb46695baa2f1078752c9e0"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "14838b325f431005424bcf3f7c42fa26"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "7d724a24a00439b263a7ef7f19b8027f"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "03bd769d1825510f91904f3c57ce1f83"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "25819039fc5d8cf5c88b237d0e9afb7a"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "ed9f9b0dab469b89f8d87252c2910498"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "01af5ed758829968becf7454f2c0d2b9"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "1f18708c15e7563e6a6b9ed24f12c67d"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "2b669ccbbe1792295725a6d7030670ed"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "21b3de7621f448bab64dfe67283d3a5f"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "fb81fc74306d05c3bc2eaf4a0461347e"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "538e8381d3c832540c7bec38cd957772"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "eeccca54a986aa4dde21cdd5e0062fca"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "58e4a7d6c5db965cc2caea80630d08c3"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "41de9ecfe3228a9ba2b5062959d240dc"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "93fe13762ee1eb828c5bf1dd9222b853"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "44cae055ede3b2ebe3f83e78a4fe4de4"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "63fc3252253a3c00f0be338e0bdd6948"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "aca4a1be5c0ef289f53b83e160667d5a"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "2cfcd18a52cffc2a0731551ff62c19aa"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "5eec3c5fb139fc07da2c980932d9d30e"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "9ed69afa0dc2d65bfb3985461fed03be"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "6a066af30753f6c4fd660618ddcc5f55"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "e6bc44c2302c789ea0f279c1f57456ca"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "0f5c597e36e8637a648b3feff8a81d14"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "62abda0c4f8140582baa9df737f30d12"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "311368fb07dccc8ee3301a6e2805f68e"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "2f6577b5bf98e53bfb6f41bf2293b476"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "aa454763348ee80c7d7c7958a7d15f4a"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "0d2b1785c82de23e38a711fefa9d2558"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "18a2361d5f9c98965ad18030a3c8c640"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "77d224bdc76d2d7ee47afb7987e740b6"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "e8d056591b2b5c8c21b4d2b8b496004d"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "406ece9d2389420167141f231c4f355b"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "ae05020393e5d5ddbd6e429fde1b04e3"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "27b58738c38ab0ff5e81835f704dd7a5"
  },
  {
    "url": "favorite/index.html",
    "revision": "8572e60e01f1a9a406a90889efada56a"
  },
  {
    "url": "index.html",
    "revision": "65902199c4c9ce1fede4be61295ee70c"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "a07021c3e5e9ca723e42b23cc04dd0c3"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "1031ad55ef93630a8da65990459f549e"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "bdbfe3864bae2d3cb48c2e79b14ada1f"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "9382fb34d424fa791d65f75945deba99"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "e8abc85156ba0cb86e0b525a25beecf6"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "e39fe64929e54ceb75d57c4d0b4e5577"
  },
  {
    "url": "note/index.html",
    "revision": "c6671b357d41507b869182e22d32ad8b"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "38d7db3ccb3a20a2d546a3f4c033740f"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c2f6bbed0f99c4d1cc17bf9ef73baa56"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "5ddc95462e7985053afe7dd5871f39a0"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "3094b35a8d1baa6644f0b490d700d930"
  },
  {
    "url": "share/index.html",
    "revision": "875d82ba37883eb4bed72892e4607c10"
  },
  {
    "url": "single/about_me.html",
    "revision": "6382c2b789a358f2e0b5868ddd283b35"
  },
  {
    "url": "single/all_article.html",
    "revision": "a9030e90bf9b0c67321c016786f20360"
  },
  {
    "url": "single/welcome.html",
    "revision": "bdc26cac73c48b3f2ece8c7ffe58a3a2"
  },
  {
    "url": "test/index.html",
    "revision": "4d25c64780ab6553a92970e5b9a5c7a0"
  },
  {
    "url": "test/test.html",
    "revision": "efcf88f39f41fd65f32167b86173d9ad"
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
