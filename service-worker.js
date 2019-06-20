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
    "revision": "85ee1263ef13b8a1cf10344bcb8fae09"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "78d09f5ecd034208999aaf6edbddff92"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "aca49f51866553e647efc4d12e8bdea0"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "fa4786d23191079793bb46f17da38f24"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "3ae6462a1f931ad940c6ae207ce4865e"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "3fb152504b87cda59ac93da757338893"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "2d27be4e01efd073477106c137e9f470"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "e112076ec5de5697807713404027f87b"
  },
  {
    "url": "articles/index.html",
    "revision": "4ee72fee6e989bc8c9ce2ee84ee25fc4"
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
    "url": "assets/js/1.378518ef.js",
    "revision": "21a47daae831adc21aff27e397e39faa"
  },
  {
    "url": "assets/js/10.04cd7e5c.js",
    "revision": "ba8f0a580a768df05ff23353ca902d00"
  },
  {
    "url": "assets/js/11.e8f650f8.js",
    "revision": "89c2f641104f6b770f087cb2afdacf5e"
  },
  {
    "url": "assets/js/12.3f0a31f9.js",
    "revision": "3db4f09a1d62ba8dbff08cfb841d682d"
  },
  {
    "url": "assets/js/13.dff829ac.js",
    "revision": "1d6f1b62469fe599abe058e161fcfbe9"
  },
  {
    "url": "assets/js/14.19bd0264.js",
    "revision": "4962df71ff2a95a1141e754c84fd319d"
  },
  {
    "url": "assets/js/15.cf438027.js",
    "revision": "64f78cdb93cf18a90f33b4af6252e894"
  },
  {
    "url": "assets/js/2.a9cf2e98.js",
    "revision": "2913e74cead42a677a1d2ff332092c04"
  },
  {
    "url": "assets/js/5.23db9553.js",
    "revision": "b348ade8c67a8ec658c98eb2d3b24381"
  },
  {
    "url": "assets/js/6.c606b4cc.js",
    "revision": "53a0476dc08e548f20d3915439bdd100"
  },
  {
    "url": "assets/js/7.13d14a62.js",
    "revision": "549262499354e5fa898e9e3678a8756f"
  },
  {
    "url": "assets/js/8.c73c0352.js",
    "revision": "bca0d6062f9e0b149f800facf0ceb5bd"
  },
  {
    "url": "assets/js/9.96b745fb.js",
    "revision": "72cfbd3989e10fed566ef80fae032d51"
  },
  {
    "url": "assets/js/vendors~docsearch.d9627615.js",
    "revision": "ce3d1946d1a9dc7d06b37d1972d57b61"
  },
  {
    "url": "blog/index.html",
    "revision": "d64b81f78152299b5f147a11c8478a5b"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "c5decf8d21248ac64cfb87621101abc5"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "fd25044c4881531789cc1c82a019f372"
  },
  {
    "url": "books/index.html",
    "revision": "2c8a13e646ad5c086c8c6698cd9d3fba"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "e88619b33d99b2a35a37805a8d43a580"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "70a072404b2fab945a9779e65eb38320"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "14b8754a7c5aa83aba2d50a13b5b058d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b23b65a7a51fc6bd7bc4acf8176b60ef"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "49488f95eb89ff694b0f6e0e098cdd32"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "cbd12f6d89254103a36f8e01bbea5854"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "6a0969f588e1a2788ba92a52ab2d2655"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "212b3f5bd3e84d7f387b5208d76924d4"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "c7803f0d4614db2915348e6037c9bfda"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "ecb612a2209f1199afa9d2cca0f4ff7e"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "4f736df391b13e247d0a2994169f51d2"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "686884ca79168ff48d90194e8b5f8fdf"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "c193433c432697b0bb51dd094c058374"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "57619f7868a13a4da4cbe357ec4b4b65"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "03f308752b9d4c0c4d7229fabaf70c93"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "760273d43410703634c7b03e0e473260"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "c37bfac45d280f2f97eb0a155e41d983"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "bf925195619d8438159744158772f702"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "92cae824e7d592477734e8f4201f9ff7"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "e882ef8faa89016fdf42bb6d3aed149d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "4b533e28788a6ebcd1bb88d4041b3044"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "4d150934236fdb5f8af2cebd3e540326"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "e678ac939ce157149b09d79e149d64d1"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "6e38237c4f9a42c217f81dd21c0fc111"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "a8ad32ca4724c533ef68be817359b737"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "8f1dced7762e1ec1e0986fe6ce33ed82"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "898ab4b3db20d2faf91467b2e2a5d4f1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "190bb0185a4299e0c38894bf34e93907"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "3440f96cf9dc80912da187de670d89f4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "9ae973cafb1a6e1f47c7f3c63842c172"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d709b35875582ba1a5a7486b0e8e4b80"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "2702e71d1d5775675dd6d1ef8b3aad5a"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "239b251dfafac1a54efcc262b3161211"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "1b0530938bf8035e4b6ea14f6a850601"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "7ba4104f64871bcd1d6d3d73d53f5f8f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "c3b81b0bcfd3790f258d86e25f1256f8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "9c5d94b571d4e41bdd0414dfdbe186e1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "cf5326611529b8d389e2296edabec962"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "d069475c8a15f453f4bd51855349fb9c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "724890de29debdce5aba79646e780520"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "664f842d958f072728fc31039c14f51c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "05c9c4f78bfcd6153bd1e1c6a41ee0e6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "6e7b594614ea5135ed911a5a6f88d171"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "4c09699556d36b31d902a8f144eb9120"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "cb9ce2a93aa55ec462b553742fc674db"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "5d5c222ae8bbe2af75ba5e50870479a2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "b6bd9749d9a3fa0830fb66e96d901fe9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "bc2e86b70d4bb76b94920ade273d0212"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8871fd9eb58266bd8aa3970148f26744"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "b83a7fdf481c8d24426142759dcbaa10"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "5d6e9c053acbd5a4169d8d5a7dc8119d"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "0d1855e1f32d8d40519aa932a2d6d5f5"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "303d9d3d5e1d349daef4826702ef5ecf"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "98684b1f13b9fb8144cad689914d9e1a"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "e2aec6d18298eb012ece042e879f3d87"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "304f9b4de5bc1893d28228ea9298a3e8"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "e37cf6c903af456736e19f85362e99f9"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "8def4fe373045ef4cb6729f65a7c3335"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "72a036cec8423d1e7e54805ca1ac9243"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "f7cd87256ba9405bf7c321ca0ae7f007"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "c14d34ff3b75b007099f13d5837cdfad"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "2427ec1b4d3ea3f63bedbfc4bc1b4ad7"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "a264721b65d301ed18657e0704373b2b"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "c8b41d8a5b47e2bff2f03e21620d5fa4"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "d650fdb74168455fe4788151e4e15365"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e55dc570d64af9f5beb5bb2bc1ac5bc9"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "48cf8c80a108443151d6c3d42bca2a5c"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "94cdd7ab7e809d8c19f452d1d0bb53f1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0d0951335533df9f5448a0fa1844e0d7"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "a3331e942601b60bfed7ebf95218578c"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "f9729c75cf6301da9cbd7261e010b3e8"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "d437bccbf974daeedcf310eca7d493e2"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "f8774bd808636e961978d5a664521f6b"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "cbafff6cefd8f69240bf5746ad129cfc"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "b953bf6f93e5c3a37780618007d24ce0"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "a051821eb369b62df20bfdb180b620a9"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "ddd4ee4e7bb35617cecab56a820fae40"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "8b186c0b24c7cc5b20586f354707da52"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "2ab23bb57698174f34870ec28770d7b8"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "eeb0f62ed4e3cc28d8308da0150db9fd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "f3b34701c0220ee20346da0d483a4889"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "7cfe871cdfdf54f122118c65ad910adb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "41b29d69150cc1bfa2b37546422ce121"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "a4089ee69c922bb7a7f2380318f926a9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "b2c845efdaa5f6abe1a905726620cdbd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "3bed18e732b3a9f961142b3ca3470579"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "2515285bdb71b3c15815303a6b0e7b18"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "10dd404e9461208d092bf7711913aa7c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "033fb14ccce40a78b85851bcf0cf78c5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "82a638f0a0fcc5a4ac96e4282da91a37"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "5e3067033d8b25ebab08f48c75e564d8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "5e562978cf1f41f03c4fe27df2e40bc8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "36b5173e04629a6c160526b03e16d94d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "53bed164775eed7d3f72c34e839c28ba"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "c71363e143b77b3edfeeb0769c045fd0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "7e9b415e538420d48a7813abeb590bd0"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "24bbe5c84f2d1c8153542ee9e4cda41b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "f1a1ca9f85f4e157598015eb06cbcb97"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "78dce7e9bf6ab93039a4e7111df3b946"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "a8dc58d408a09feb3dce9f7dc96c41db"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "4dcd8716d18c30f1600fea2d0d70573c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "9695993a917b741b44e063162b393066"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "5907ae8d61fbf0bca93a2af86a36ef2c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "6949776d92c622a138f8106ff9352f7c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "c3c8bfc2c8bfee5625781319ffd16de2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "fda0c7c9c83ce2ab768cd1ecd893c48a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "24f95dca6bfe82c5bdca626d61ad75bf"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "005e9450c8d69851d32967a879ec821e"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "eb5a06300aaee7470b36aee66f4c5359"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "7cfb08af44aefad9df715129fbc26009"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "a2136c4700a492cde50e85cf67d0061c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "4b806b09fbfd2a931bf2236e6ffa8917"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "028561bae77cf2583267f8c4a80fd498"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "c4da60695b56d211bb1e9e70dbd4b42a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "62945e98f8e3a123c70863bb3b29e3fd"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "ddcb17106f8eceb9e5f8276b3e81afd4"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "35a5270b32557009c166e152324f5eea"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "ee3831455bedaf78a10ab4b1de113b55"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "aabe8755d68ae81d04919311bf15937b"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "2cdbb4efb0a5443545610f51468d072f"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "6a994fce73c08fb5ca5ac4a688a3ac43"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a4b2c3b320e50f5840a02f1985d66844"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "a857c21c4070cc735efe4c788812c2e6"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "6c22bd154aa8df77107b56fad83c0700"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "43ca55a8699bf04f36835673c785c133"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "93798cee665c4b1a8e406af4795dd393"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "d4f7808fd5cea4ca737185301b6ad78c"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "da02644d63a333174563cee2ba5ed7db"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "3a90620d5f47e1e665b0ca6dc018f496"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "9f426fe74900629acd216fcc7fd5e1f8"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "818bea74402c9ceb6b104c7fcba1deee"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "4329b0bd01381a525e189c3704406488"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "b53c96428930e0d77b1079c769114cca"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "45f57b325809bf3a3484c9b983a4b288"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "4ac7ef0a4e0c52f1b97a66de9dbcad68"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "760746e0052e647508a38896d06725cd"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "ba4140c8217cc997f1012a9b6ddac510"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "5996c37573dc29ff51d50ce4064bcd57"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "3ab70a5ccb0d0016daf1113b029eb8ac"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "2685288e0dafdbf3333dba1ed0fa431e"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "2df999c3f9f3ac721cd8bd1ea11a180f"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "8084da37f7498c474bb21526a7c2dca1"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "c5b83b6a7f54fb2e4c4e79d4c5700073"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "295de9ff3d5e8e105ebdf5f31b26da9c"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "4d677e46db65450c81801588e6a87793"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "5cd54bd2abc35739fd5f6ddee0e77124"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "30728263534b943433b1f3e26222e927"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "320fc0d38239aa45b7892c85a43e6789"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "d30e671d2cccf93aac9c958b0a172576"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "ef299a78322fd2c87522c8e8b09b9d13"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "a33f6255250339e2ba95e1a2af1a4c62"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "dcde6c5386dccc695609f2adf20c0332"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "6682a96d663055b2920194a7e21bf1f3"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "1b98a155d53721661a90a245b456ea88"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "114fba821d95a20d127b42ff0e5f8f1e"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "b1c383544d8b4358398bbfdc6b620071"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "8d350112402ce5ab3c93d8ea8c323ebf"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "57cb33a038303e4a8823d7bcb34f34c8"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "0bfe9be7391f051cfca46d74a6f2b7a0"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "0f6ae432b41a76f716fbba82447b0bb5"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "cf90f5605ff4d8088f2400cfee7366ec"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "bd016a21f53e00e5d3e7dc21f2c35823"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "f11d89df631076ef1486ec1526f8b216"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "f69b4198f9e88735b5141842e3a229ff"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "505e18a1e370c1c5920dc842c07d02da"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "afb9a4f456bb72eff784b5079b09fb4d"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "b819fad08eefc1faf1016a45f82f7694"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "2ad779973326b1e6d5ee14caa414dc0b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "94c9add4d1bed7d657ed236b40ce3757"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "482af687a6e4834e674c531d62242569"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "e65a6cd28751fe74f829a40701328a46"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "c3a9cec06cf7e429ae566d11e71c17f1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "06f84e647c658d53dd1ed7aeae7b754b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "b9cac1bd9827068fe58b454a442af875"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "ffa360484079f1a6cb5ad91767779064"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "5eeca704f83a8fc36503708a115b61f7"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "f3420a3bfdd4e9e97ee00c3dd4296d4a"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "dacf9e76277a6a056d37806040fd33fd"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "6a06970ae7e63b96c4afed644386dd23"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "34a2615936663ddb6803cc0fb99d1ec2"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "72ec757d2fab4fe8b6462421c587ad2b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "80f8d65715657ab55c8764017192f48e"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "6bdfe75a4f525bfebf4da82e80c3f17a"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "bdee655d20d435261522dfb1ff045df4"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "1c5e7248a5fcdb0a102ce50091afa297"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "099b64f1a2bcbeabfae041633842042c"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "b347019e713aeb324e96fd2670073195"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "bc364f026cdd52ca7da0e0712e81e48f"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "85b5af2a9593f12bed68d46de00c74ae"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "c5963dfa574d9335bbaadc11a45e9ce8"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "e6d9e8596040f8a3c25c22beb87de377"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "85381256f02885b626a885efab2ab5df"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "3335ac0b0ad3d19d366b9442b56cbd9a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "8aab6e94cbf78da51be26cbcddcaf930"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "40bf8aa1e1635e668c653a5b3d5158e6"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "909f0bafe008e5d9bfbbe07f587e7c5b"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "ad04459de85d4663f1a2ef3020b699d7"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "9d4741b3465e72248ec530e4dc95f351"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "beb928bc4650939749a6124e425945dd"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "538ff33641d3e01c85af89af07cc8c25"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "cd64a2f67ea666d8563665451c8a4f7a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "1d38b0a5c7d6d7a6c07e6a1cdf21a9a5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "a3c1dd12833241a9fecff12aed1db780"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "daf8fe06e2bad49749a6d355da9c418a"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "c7f0c98b3f01983f8e4b08bc88c9fe7f"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "2c6e0fc987cf78e6f6d3c18a6623f96a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "0b56165be8b8cfafb0e65ff20e95218d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "ddbd2cbe0331e74e8117c9f1315726ff"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Container.html",
    "revision": "6cca8488ea49140535afb16131e19401"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "4624d7c3b558fda066d8045b97bfc4c6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "8560f2b094fa8deb32cb7cf5864ae57f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "b005b116805c309f3af02d249378d0ed"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "772d40da47126e02f70b5034a6507c5c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "725074d9a3dcb13730be6a6dcdf8670a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "ecbfecf1ef4581c6d5638b58e4c93d1b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "fcf9f3d01b45272f49ddd0668b81123c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "b9f0ea68ab721abedf9365716e0fc8fa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "98d2d2dc4c54fa631a78833352fe1b9d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "d552c90d6befafce856733e5ef7fdadb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "116c4d211ac4aade97bc6fbe3837d164"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "7d4fd26970b675cff229c75e5e7e91eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "a1ef98b794ecc58f4befbc1fc016f806"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "68c148ec00b60c7029b15945a88b989c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "3047f0d4050384fb5da8b3c67ec5b29b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "900518193231ab218f1c837a59803b07"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "80f4ac1c0091722643d0c55928a3e1d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "ef0a342db7f1f35c2f495b019ff1de91"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "5d9655241704e3b8035d1ef6d0ae987d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "d2ec84d27f866a4d9e995a06e2534e80"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "b9d9917b1de9aaa1ad5f8c93d8cadf8a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "85478c1c07f1d14cb0b07c5fc4ab8af2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "1c6593d2cc7f3809d6187445ef49c336"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "0412c371d51faadd2cf618e37953ae97"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "2a4cd9bf8b825592da843303c340f4ea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "3462a83276e493fce1c63535405cbb64"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "56d93ff49a72a76d7e71432876a54287"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "0b9f3d36696121c38483ce8e7b97cc32"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "436a5fe79f87bb3fa4b209c2fe9f4a7e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "7bfd0e7d7ac4d43755a61de171516f95"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "e22f889a6957ef09d21d4200d176fdca"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "5941577ea357ed6a48cbeac67eefd14d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "e521ebcd86afa2486152c8f4dbe36950"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e68172709d5ac7ace552661895fa9bfc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "c7e7a77062be7ae9eb4a7cc1d6663e93"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "4dbfea36a034f4ce1fb1b0506c0dba4d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "f71522376fd1b0aa5e881d4c00e8d466"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "d5cae364b54e01b7f3c13580993cdf40"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "6172bf7c8951147afbdaae55ce1c013d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "a8e4e280039f57949990e75dc3eafcbf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "3c70fdcf8d882aab9010f421e0591a3d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "4b3854b15cc45b556de366a568341c5e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "c33cd36087ca8c6dce3c8169a89e2aec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "eed3f49a0a41622ac27fa9eb2097474c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "74c53e1f022963a77997dd75876c86a0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "0abcc923550f0363798109e9aa53a07c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "1427c5547c22eaef96d7ab36b1cc19ea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "e9f3bf361f359ade598b44086332fa28"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "46fbffd6f067c276441ea5e552d8c93a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "45a4154d83c8de22831259e6bb41dbc3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "eff638afc967f3603c566539ca734f87"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "bed7b0eb49d40e42430b662d2dfd9fe5"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "2c5986c00d2bc43ce64cf3d3dc66f6c1"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "a1ea5219a10752bbb2468d6abe9bdf17"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "89719f1ff80f3e79c2febf740790e00e"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "acd1a065750e73cfe814be7641009022"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "abd095a397547716d15303731904a6c1"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "05e5aba5f5e4a5c649455426f3464c1c"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "3c6f138cdc26ade164fead0ec6a5ce5f"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "3de5ee169b5e50000abff5b904a02db9"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "5dc0b3560ad83b41e959209862cf1994"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a56e94a82b8fc9f41b8c077fecbf2c21"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "3d2e6dd9b8c17d36a61d1e452cedff47"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "0feb1279a19a18de94e7582a5233016b"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "f93232fe47e447f5718519faf07b336b"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "9903f1742631de8cdc11449f951396dd"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "42a185b97f0ae918f903707e06327ef7"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "fb27b50d578f7669883a4f923df208de"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "73181af482a6891227b7ad5362f00018"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "5b5efc1d8cb2bd8e6e48ff4c6c17346e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "d586c108b3dfdd92fba0585affc749b2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "336ae495ec035f874d4e76e47e66b076"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "e06e4472003edafa53e7dab829a709b2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "d26d387daddd645ba42775e79ce6f4d2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "f23877c9e52ccac884a3e2b02442f799"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "f52651f9fa9b74d08b1a3e20d2944d16"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "d8587ece91720dea480fa9779ad6e87f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "85b32aa5fc70cac4dbde80881c85f301"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "860504ef8756c49e68138f0917bb7a1a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "1f521d0b8052cf71c1a2f6b63a299ed2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "a6c78b9a6706357ad588e1b0d9e4c9fd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "da85bfc2b23a9f64e58fd0f4f1e374f0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "47a43332a644cf63d7845cdb06d8b97c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "50be4527c6beeb6a85326bfb423d5326"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "40e25318d61005baa76e80062908ecda"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "1639da49c180b4deb5d2d3b1164fdb71"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "48afe107f2b5f06094c7e0c86305455c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "069c48693152b17d7ef19989e793ee2e"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "2dfd8f3117c8ea428db67c59b244de3b"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "bc26b987a94dbb85532ecb801ba89fc1"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "7c99852003144be8b86baa553ad3f27f"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "3a70ee797a5e326d35c902b73d818764"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "a2bca98c0ceac0c3dc514d4621e5eb88"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "cbd6a4fbcd07be826f33971f7c8b9b95"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "d7ee980344abd3ca7c98999c263a1d6e"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "f2fee6ae3487cb8076d71cc46f020c54"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "c769d48da91ca4dea1194e71b9f55892"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "9b95499f8a7e137f07147e3fa866127e"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "e51c8e98bf970b695baa7e27e6cbbf94"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "91dcf8265514bee27e14ca610129614b"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "9ceb4590c19dfaa15c09b8f90361e49f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "b11ae8bd0d98b8fa504fa61cad1ae621"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "ed13714f44f328d31af8da1901a6e105"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "13866abe991a07f2ab5aba542a10a267"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "700b29a644cc4d1494fb1e30fe2750e0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "9c110b1d5f2f614f7141422860775441"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "c222460381fc3c08907e31962363397c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "42d9a57205796336a057496a6d408e22"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "f829f8e0282e0d88003a152fb28c6101"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "91aa23b5280c31db4820942272d93910"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "2cb63161caf34414fbc8ec87e88932b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "76d3c9aeacecafaf8b177fa7808891f0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "3788f1e21d443e6c6df2a14831217963"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "a79c06cc6354649117ff34a95a623d6b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "72660bdbe5f3dad115f4c1af38b8c8f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "5da1ff5757d1e9c8b60b36d73c1c60f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "21c932590097fc7e4841dcaceb292260"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "83872ac63234ba4f043cc56d79b4b6c9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "7fda9f14e3766234eed6c412039a2ff8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "f7a8000e0134796e4a47548ab9b5381a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "6e32c5d04759a3b2f03c6e69fb32c937"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "af20cc772de30e1bdecab5173aa3d8db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "1074232d2249f37b55f9bc2c0854a19f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "053ce1393f63d301a2af04dd176f6f29"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "789af6075e7dc394e84ceec2f356d667"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "1d5b62cc467e13ad1c7caa9c5447f84e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "044ae5a982c21322cb75ad8602fbeec5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "a3584279a8de2ed05c539475fa176b22"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "2c9a2f70975746eaf2f794f7533885a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "8811fe14dde9b5f18aba5d0fcb886106"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "9ff5ffa5e4bd77e09477fa3f0e5954b3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "c5a12000be48065c9915cb2f21b287cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "dcd2a311aca32aca6da42852ae021667"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "1061e7fca2be5f3e49b4093ebf176ae2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "c0d05c515349ecaa00fa62d770eaceeb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "967c04b84bfda726ce40424f83125883"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a4bf86efcfa1b70787186996dd947274"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "6f1e82355e97a62371864a1910446683"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "d9c06bb779faa056b27f0b3f3373b2b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "1d68faac8cd98a837a9b11859d176b2a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "c658f6260f69fe6570afa31c723ba2ad"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "44af6641f6a66c57131b53d6f63d9544"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "f48407d5d0d1bf905294b757b355d753"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e00e49c6a963456edbbdcca399506fa1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "166ece037277d764c79dadd33385f5b4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "f2d9e382e080a868d959f72a59d87b6a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "1c6ba6634362651c2489e7c0ccfcc7a0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "b1b8066d555ab413a9423dbe4370808b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "b910eba121c3b14e83609a1b4dc5c207"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "65c511bb02a3e6781239aeb6e89ae80f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "56a242fbf90a9252c37af9f7cca1d298"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "cf1add5b662952d2ad24106ee90a1062"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "ec2a76df97cdaa41c4000f615b0b558a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "8179bad438d2ee8d26afe9f61f1fb625"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "57826a09e2035aa10dcee0dab46071e7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "52c6fdc642414fda013ff178f38d1276"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "922035f947d12d217145c9d7ed7270e2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "7dc33ae1bb0a543e88abd310b46aabea"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "19b09418cb7065e0224e6e911c14d2f8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "859f686a5b2b7c2e4e7a0ed9516d8f42"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "8d1f97ded7122d5dd9dadcdad49c3fe3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "ef893f7e7f0ed1bde2ee310615a01bf7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "e5aa3c304fba2d3d8a340212869395a8"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "4cabba34ed95795853b559e1a0ae2f98"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ca673996b5ea9296a051cdfe1b546e26"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "ad75dbad6654b551f96a0144be02379d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "cbbfd2293cbb58aebc76f16c58232044"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "cf5e1bf0d287673bc4ee247d9ba72ef2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "ef932ce349806c7059809b2d0a296dbb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "3bf4e40a6ac73580d873028a61ad1e98"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "bff32d99d70cb0d100076919f03d2e12"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "313d7b4a502264a2ac657123ad5cf36d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "80f1273ac840d9e390b5032cb15e6202"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "366bbe842eafaebd2ecfcf386034cddd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "327116dfcaa06419e2e98fa525931a73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "1bd0d4b45217a789092ed9a902223a6d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "2ef75972c03aaf8096dfce767f581dc4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "2bf2028e3c5428193e66a03ecd539061"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "b7f7b22f6a64fca9e734c40f08f0bccd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "fcf5158c375231db1130645efc79d6be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "4869dd5f48c3453e31c87be71c3cc03e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "b6ab8568d89e745bae04714342e3161d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "001000587fd4593c401fdfcd4411cb77"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "ee9bfdd0e755477fd0532e7916f30612"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "702b2a7dfef6ca4dd4c59576ac9626fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "210f8b89bd26649e958072299e131c0a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "a8ae95c903dd846f8bac8793c90ef7ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "9ef5856acc9d11f373a09d98bf157024"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "821e24f9a499c3d13e49fc97c4fa886b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "b8660f6b77006c89564ac9e625887cc3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "c513e7ffaf50dc82071c3ed78c329885"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "42404faf825d8a30e39ae479e97e0ec4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "5e003352e1bd64bc1e8e353e9af7f549"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "0de19ae21ba7803941c58d11ee080448"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "b810091df321a56c49c45fe9ed4d5a92"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "37fe25e237698a1d28e9ff5ce2fd59fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "9d934afb6ad11a89d16a51178ce284e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "1cc7591a5a6c8fe43125cda102e5aadd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "a8a884c33c41e314da2ec40917790491"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "0be0580c1ce9f95c03fd7f3e10604865"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "b95886d7e53d671fb5ddc92e9f69a9e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "47527ecaf75ba41fb6962bd2a9291422"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "78addbda4c939c231db8a3ac6aaf1fbc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "f271ff6aecd30bdcc622170699ba540f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "48d02002b5f12d22710892646bceb263"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "5df7cad288f785c28076912b9284dddc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "c3226dc5b2168b65834932a8d2e6080f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "6694990997e93589fd6a982bd57d4d13"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "5e4cf6103c66a040dac279db555dd7c8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "d033928c0e371b73602a159d41b1ea1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "155b0d1ea1a170a9c8f595e4302341ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "6e9e02ed07a0bdc67baf82317abefbb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "aae3cb95b34fefbe61a74a548de39da3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "500f7d0c693501a583fd03f7d2e07cc8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "2e6bd33edffe1c44afcccefbf6eb1fe1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "b4c2750d1cfb8fad2729ba9b6feaac3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "b377589d8c3879dfcdde1bd580ca52e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "1a97afaf52bca79f80a5f1006651d6dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "7ceec4c4b44ba4fe0bf94fb49c335a96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "cc3287b6e755647636a10b7310f2b482"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "261724d6b5e135ebd134feb4ac14653a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "cad20f107cded10fe7c4b3d0dc67d8ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "03d0c4433afc5505233e25229301727d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "ee82a2df934c0ac591d1530a648df331"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "f349c036968604c7fc39aea47e84c21a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "9f22ce1c50566a7274577d35bf45aa27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "9ef73f4064f952be51ecf5c73261cf1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "6af41df2174c25619d7bfcac3b02ba94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "54d6b60977a1cc6ca1a2e243b9b9c879"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "a723574c4f53b170b163b876cec46c3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "dab391738efbd90bb916940e1101ce8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "97e08ea1b38fa2fcb5e9c9c96550a4dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "d3703d45b8dbe3191325ba694d2e70b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "47a5838827ece9f2b51e0c1b356fe451"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "9c95a0322020b1866c24b111d3bcf9fc"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "d57b612e0630e7f314b056ad090de27b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "e9bbd4fefbbe07728f07fd469eb5834f"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "523b7eff4528ff957c06354924284423"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "2776db6654250be0fc3efef3915adb43"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "23da5d14668ee7e00e8adcb5d12bb9a0"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "e8b452e197083cd26c4415d512395ba5"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "5cf13ffd05576c34fb7273ea5f11f58a"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "ae00f87a666cb2985d8c473754783a57"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "ca9c0bf242a033f7bac94afeb5692b57"
  },
  {
    "url": "categories/index.html",
    "revision": "c9b64962cb486ef533c7af531345be55"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "3a757dced8a3bd62f4b8817214ce3b2e"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "4fbbebb9e1382ccd9a8a7d691b1f5063"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "e229c5c14a8635f1c3c434d30a285315"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "6da20a427646510da53913b286bdb4bc"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "9663aadf3c56f92c01689d0413935341"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "ea9875a24a1b87e92a80d96b3ab16082"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "ca8df39a0a8179875c052ffa7f6b29f4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "8b714298fe75bed870761afadcb3ce41"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "60e99823f89ae9661566249561019110"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "f7f2f5406e64d21dd59e4535db454551"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "f9596496c54356ffef7c099dc563d4dd"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "46d4f317967f40aa1faba215a85c2060"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "42e996b5bf25f8f65e98606741ba8282"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "ae872193c682074298c9e92a24168359"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "23913895cd4869c7f4e3f83deead49c9"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "c63168bd7ee2db87d5e1e1b478215047"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "34b08cd4ce34e94b51244936140f9876"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "1d5ebefb82e96cc26b277f458644dfa5"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "c8b4a89985b55e95999328b7ee4722b3"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "ba5ce0a235ca01748867409180454b1a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "37f61ca1961f89f74ce908f6d3bcbdaf"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "682ebea88c0ae6c59518bf3f1a237f85"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "e671cb8d981d4ca05c9b66f94b275f24"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "806a460ed83d910df5140913f1d6db54"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "5d725e8aa69416c5df6c5dc47d8e9266"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "1a5c5083e7ebc7d02f8a084b33a906bb"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "bab81f5f6be771dbd4307f507f5d2931"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "f08cd6c2cbda06603996921c57652d49"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "142d34c0dcb4f4113b687b39ebaac436"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "2a85139f45bdc652777023fefef90d31"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "b4831fe0b1d9d08fd2161350266661c6"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "957712d0fd8ff180f31196e288159615"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "f57cfeae70943d656ce60462985f774a"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "4c98ac2682e011ecb9389855e5505694"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "754953d971d1cc9112312b76c8f42ce1"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "618fe29c3a9e91512baabafe2147e435"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "c49de592941d5ae84df980ff6df13dcd"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "d5739e0beda92121536f9b1c80a450b8"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "94cba041a49fbcf74a4dc1d145ab0e1f"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e7efae54c776261f910b60e3d0b32dd6"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a9cfc86de7a616f64cbc3f2417f37818"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "283a6c7e5d3e99373224dac6f7ebe849"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "bcad63f919a83d38d803ba56c095826a"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "628a67badb3e625bfadc95dc9fb0c878"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "41900925376d5e81c64e3187a229f166"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "4b39d0e2c27167fcada4e06a66a57972"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "3ca589cf28191df837e8ff110a481ae4"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "92bdbe2eed52600d618775b7a7a14ba4"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "d309702dc9b6d428f906471860f454d3"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "156bfd9d6c37746f0f967930db5d5b5f"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "2e8bd9ada399a3bb61b1118b439d5b6e"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "6effc6844ea472b86990ae0426c5d8b1"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "9be9f80cf72abaa82bb65da73497aa1d"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "85890aaf122880cc16bbaebdf8f08c4c"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "d247b9c4cb433294fc74c03f65582af7"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "af8004c5b4d8656ed648858ba9ad2e1b"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "00d938c58627820c56d74eaeb430d3f6"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "531afd404a04d17ff7bd32579e71be17"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "04aecbd3fa28e09eecad075065b81a2b"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "cd3d704bac3de6cf697ebee32b6887ea"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "419dda6f8fe54df50e01fcdd5b2e2e98"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "aedd1ecbafa26b65dc4c81a1534e91b3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "382f0859af5dc80ada85ed8885fae375"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "dee101bdef423374fc483a60b6903656"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "ab6ae7ef5466d8809a4aeadc7054d377"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "c7ffbc93a9357fe4fa4530b79a58e48f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "9672e0a77ea90d6ff2baf45d338cf2e2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "3478b74565686639a4e2619c8ef36938"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "2e6725644ebc1236d07a72c5ca80fead"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "8f754af4745245031d8ee1152d84f3fe"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "483913782ca23f4ef7dc83d457249e14"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "4ddc2565cb4b5bbe1c23374f508478ca"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "ab48b787e460a59a2ed27371541b8a91"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "1903fd3c1024bff8ec24ea7f0456683b"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "521732f9daa3e2bac7319089627ac5d3"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "fb732dcc56fe4c19ceaa9900cfa8c20f"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "f5093a34d9f449acbee7789f0c8e73e0"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "ae6fa51b7bfbfc6e011096c7575df889"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "56f96acdd9206a7b06d30e9abf08e6b1"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "46afa3622b5881fba350e4ff02155ab9"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "8d53706eb341352a58bcb348d7d37027"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "fb41ed64696f59aceafa8d568b5778df"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "feddddde169d475157deb731e9c4e4cb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "d09b525a8c2e4d22c451b8e89fa0b113"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "a981e548972c61bcbe43facee717b8ef"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "309aa18eb50917b9288cbe11fb0ccc1f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "21dfb8e4fc3e17f5b928a2084c3b8661"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "f6bc9a9f5580e774098d45a3281ff0f8"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "56b6ef2c670bb680cfa0a00524caf345"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "d8e9153c26d92fcbc22d195a81283754"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "c805291b90cd5321826148878d99f9fb"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "376c7f712bc4185042b16fdc41b649a1"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "f606c7875230879de2475c94ab11885c"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "f816ac132de76f0a48bcbd14be62fab7"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f5528d0ffbd8f074f77f9c4359f36fe6"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "bc645e392a7e17f9df403cffdbe9c738"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "8564e64548475c1874a9b29f00dcb7ca"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "d89dfb9eab960f351b67109a0c853e85"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "f5390d9c763e5dad235fd5d8f0d29e17"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "026b3e48529781fa915fc060512df997"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "139d9e18acd9e4ee8e9113660c256099"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "d40e8429be2ee71e43f9fa2417017a07"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "faf2684333aa8e07b142f06f83fc90f2"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "6979f79fc84e8f37afa5f81c688ab9bf"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "c7087a7440c12d3ecf8db502bae6fbd3"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "564752759d9244bd0314da764a77eb46"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "358af5a2fbf76e9f2d08808e5b6776db"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "5f3ddc41ba623e000ca1f58212c95eca"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "280ba6798d7ae51b487b21b0ff1544e2"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "cff94d2d1cdede148db8c9bb8a84f407"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "ab6e92c7a7d64c463077d7172fec2de8"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "4ce5a6a4815baacb5c54e0aa646eb357"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "ae077352e60162ad19b241188cb52d3d"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "c648c4e20602ea3a796154249c44e9f2"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "162ef648b99e0b1970133f884c3224ca"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "61706a826efd1e2942bc8c1949a6e945"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "cda19f74d995f3804750b070a25d25ba"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "5dbaadbc8b9ab7e0094ee4c23933afc8"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "491af2cc82c3cba83c53ad2af49bbeb0"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "6fccda4e8309d0451ebcc94b931ccc07"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "b3883f405dcd0381a0ee47ab2def5aa2"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "a17cb766d1c3cbe3c6630a65624dc886"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "53842bf37e8b72489dd5c917a460c434"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "c7c951d2d764aec956bc5912095a0939"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "0a2927501badfe678b69a1a0187d19cc"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "cf360101afef4951685029ceaba3e70e"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "7c1f1fb35149b1fdf96c77be25e1bfbf"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "931ffa168c68950c1db69fe538a17e5e"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "dc9cfc2d6896f8a23d2e6e288f53bc6f"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "6d2dc8c4629c4a1ef58d9d288b4cd03c"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "0540c0cf8a598015ff219f96308a1055"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "0ef06bb0ec0586e4975cf580d3ef5dbd"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "d1446f5ba68f03182363a28d3c7c22aa"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "13372a838ea47880cb0e6c2eb27dcc40"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "8188ce3a32591edcb5b561af3e128867"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "a496247b3001a536fcf2c9c187651dbb"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "7521fe9501ed5988dd5186a3b60cf53f"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "be4ed9c839b182f0082d1840fd898bf2"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "94d208e387f9b276506c3a8396632505"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "833876c142cc69500107bacf001eca08"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "fe8c0b446156e239cbbe51b2c3adb44e"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "7a2989300072f73d9139bff1cc3a5529"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "cd687f4e38767c747a1c5575829df138"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "ddf86161d21987709dd1165cf07184fe"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "a169ca9b8fd81a23e7d68f099f9b23b6"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "f958fac86f5bb6d176ed21fd22bab0a5"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "05b1ee99ddc71a1b8afc4f2bf685c4f7"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "7ae423cb3d89ea1c0ec3ec018de73cdb"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "6310f61abab06bc08ed6f10d6cdc974b"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "ffe3bda53d8024aa8622701166999655"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "7c09a8334d6ad6c32f12a86f8b94090b"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "c9805061ff7bb924478d87fea722b987"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "f7dfe79a98def850aab0bbae11bae61a"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "499ae6b67642ca8e3000f7494c7101ec"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "0ba82e2f23107ed9675c44ad93fbe393"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "838587a75098ed0d578881c994b13a2a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "ee306636a39842d52254176d613248d0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ab738b523e58dd817985d0da12494e32"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "9ccd40b3ef3856dd697c1d62c2b03978"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "79f4bbce03ecc2311ba352207a6f00d9"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "bd761ee4d9fe9e73ba0419d675441ea7"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "6451b672f3f740e0c6ab6110f1ea198f"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "a752d3fc3dec0d75e1b7c8c3952c830c"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "f58ce4acee890b8d68c54d73208277c8"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "3f7659171df793ed714d659d17e5c908"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "b29880e3b5ade5adc7537bde83bb2077"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "661beb4c74bbe58d8be832609d66aa9f"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "391c9994eb591c5affafdf9586d93102"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "16a652221e3f8bff01f71fa3605b2215"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "afcf7174bbcc36d9524ef56f8bd8e3f8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "e56bb86797ebe7ccc89afe0af525eee8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "22c80595e0962f8a897a40c1690af4da"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "cd820df9df95f873baf1b4124154b67a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "cf0792d2224bc889cf414980789155de"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "f49ff3dfd31aa25c93edc4da040d518d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "ebffa81fc0580d36434a05535a816109"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "57e4373fdbcfe3ac6ab8897f9b6cae34"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "160e827c15a09b5c94bda7fe15dcb379"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "62028e6fc4ae984e86e011ba1b24b32f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "8d6e1b4ef283b9c3fe0d3a5dbc7752b2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "5cd13a4a4d8c029227da1a09ca552e96"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "8ef82dd46b3e84d72811045aa61268cb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "f117f43c75787560a6b8cd8686bb218b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "4fe9d0682ecf450ba9e9ecb0f964f15d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "210a11a67d1769cce16b0d50120fcb87"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "d2af6acacdebe5d991d2e5ee7f79996b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "a154a539b6c22db67d96fb25e2c265a8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "1c9121234d37023c76d18ffc8218993f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "e636d8a3d34fb9c7b293405696980afd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "12aa1b4384f84e66abf2032940f979ab"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "6d471e4651e6a71c43d5de5239df7f53"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "3413f3e6c0cdcef7c5b6259a722f15bf"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "220d379be1a258c5edaf0b740a871505"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ab89e977219ae32aeade7b2ade8ac033"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "5a4927cf76cd8cc7295090ee5dffdb17"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "41472b311eee29c88918e7954adff501"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3072ac140ba967e21ab4cf07bb506691"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "4a6739a7d9f98db3e25ec96f29724630"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "65b47093ae8d486a57d9ebc5678d6cfe"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "35f216861d711e2fa3247fd64a350782"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "087db96ed1d76af411b2389ae3c9eff5"
  },
  {
    "url": "categories/os/index.html",
    "revision": "7cb3337895f26aa86d5496f8f2cfe1fe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "fe3ebb39597f6da576f5fbf0ac819d75"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "dcfbb755787ccc5a79adf43c3edb87f9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "95eee07314b7b8185beff7d65d6b811b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "ef58da0b20e9d6ef7b5bca2fb6585899"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "37087057eecc5a9d11a23a3a3b653647"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "b24d2800be060e0b155e1b4e3060d5f8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "9a294d4245a4723e953e3bb412285785"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "f840cf85d54048754df7faf9a4f25606"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "0eadd589ee36392b797ab25c22fcc2cf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "955dd1e5b7dff76cf1da7c18489c92be"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "6f19fe45fbae82a1601dd025ea0b5555"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "481879d5dc92751fa701e976db57cbfa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "d02fa55796da94a9a39e5fe4f511f7a4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "729f43704d9761d845b5fdf507745102"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "c5b5b356c1688d4a487ee73e76e95285"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "25a53b2ca2fdbccfcf7bb8cc0db238d6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "196b387dc64cb666aae8fe660796af10"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "dd1b4130a34273711aa4f4f98ec5e978"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "d41f570409538ab5a2ffaa3b4e19233b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "24a10cc9472afaeb3d6c01a5ed739713"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "47eef9f6bb981e55d1fe52cf7acb3ada"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "db6957fcad076d28f95ec922f6c74331"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "42960e2f5374dde89936d3f993f6ddf0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "c3667e5eccc7d789da96abad874d4f20"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "d99eda2d8a4642edd9d04df51025fb08"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "9023492c69f53db8683c1ab5c668e103"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "f4d7e3c7900500228315b121c838d874"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "e02ffb116ca0764cd295bb1f71a3a2b1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "13aeef9095606e26e26b1342d1f4dbe5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "5554695d0666f21d551cd460a813b1fc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "b8f4947eb98f35dbf2b60a0447d28409"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "a4b48bc86f0c7a93216504939393c26e"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "a8e1280e87e06c48e08ebeb0ffff0f70"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "3123457c2839854f4cace43631b3cb56"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "204ab8a23b00d5d480dff0dc8a9b69fb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "eb22e7db237f84a980ab3acd88a8445b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "b81f5657214cbc86b9efbf46fdfbda18"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "08ebf3ee262ef167e95f084d484d0f7f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "7383ee2c1eaaabca538b987b2275fb92"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "f27e5bd607cf765943e75a0346cd2ed9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "2428cfef90933b9e8193321f57e2e697"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "038589a9f82920bee805007c020382d9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "caeba0bb6b1a9caf771763a0360682a3"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "abf2ff0d018e7a5b0279c791d4a97418"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "0e610f0156e0bcd169f8bfd87d8994fd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "47daf59d41b4f385820c64c485fa2677"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "8e70e508bb2dbf0cc2af4d67d42baf72"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "e571f234d0d92f95c53be7ba8a8b2e96"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "c8a5cac9a329ff01e58f978fb8ab6913"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "b27044b15376952cbf502beba18b00cb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "06924bda4a844fde38e3c83484100098"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "396c67f60d4091a543c23e6146f7f12c"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "3af2e16769bb28410add85d39280cc68"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "576e45cc0325e7554bd304539d946e77"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "c7dcf6c4cbdb87a437e19de87a4b70a2"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "9ccf243b3288210030d49e1499172de4"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "b6d75247df6381141ca1aee26e8c731a"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "2afec4d732844188c0872f7edebcc020"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "6ffb3eb3c2b74d96b6f9f567c86d074b"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "068736999145735bc98ded00fafbf339"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "f91789945e3f43f8a767f4c6c88e2dd1"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "266871b9eff30a90ea3ad405c1ac9742"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "317dc1f6bdfbe25039d61014ebb6cfb3"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e58f7e82693ff2dfb8f87254b4aa3ef6"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "b572c86cd1edb5f7fc42653fd96cd4ad"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "b3b951dca52ab2d61e70857717b91756"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "f6c66effda30aba3c44c18dc4e7e2285"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "17f20595f5163d2469e313ed18620fb9"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "c661602f84577c4d04b8d8b79e07dc61"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "9fb60abe8e4423531fc43dd2a9e31fa6"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "f9891d6e2684d15694588ad8c64ac0b3"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "b7016f2f230cbc193374e396f8692329"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "88dc766c5bd1fbbcbf48574cd0b155c1"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "c0f8474b529898446805794b37615fcb"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "d57e593f83ce6e60f971fe4cf7ed2d57"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "95065c1a25444af2c764ee7eb1e29952"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "fecc4bc6bc146242ead61cf95ea56df8"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "3e9f4d40cc842ffd537eaa66da221135"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "64c1ec6abcc62e538f53d99fd0e5ff12"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "696c01fd89dfeaf5edd5c3cd2dda8a83"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "5609c9e7f2a0d2461e486c969b576d5b"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "2d31332c5eed2029a3a2cf14d2edbd66"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "8be2c0817d36bd7d6fd89c9048a20eee"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "4359c3210ee1852866793b37b9972749"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "fbd694ca3157bccdc7a4b933400bba1b"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "9a2edde169850cf96f17c947f2a48773"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "3a6ee5fb9609d5679de708c708831829"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "cc40cb980b3524726128780b8256a239"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "3bcde822bba6c512acef2c23a8b0fe51"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "555ad95db873d6708d0543732850d921"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "def54e80095615742bf3d398270a5780"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "d571e75aaa24de14c8d5939d5c2c3af1"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "965d102420af64a0f2e4d8e82091b0b0"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "81acec335131fc66950726a440b02fa4"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "7cffecd643c0b41b7664bc06b652ac72"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "9fcce79135ba7848670e2fc96fe4430e"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "8494e5b3f5e345753a96118829c3c489"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "d1be2b20954ca08ba5b566173c8f50f0"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "2b455e57aa152fb8c19a42bca40ee71d"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "a0a53eac3049e687bcb8ed0f12d5d930"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "b00e8f0e38054b04abe60dd46916c320"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "918b1899654aecc5590325e93ba9b760"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "c4a30bb309b92cb5fa9ef119e2182469"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "52b1a5c4db9dd325b42b268381a63f06"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "7c9eb6881354eb2d6ac89b78b2a8cd75"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ca62efa3dae1145f5e3332efc3f4528d"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "a3f3bd96726bca3b7aad9f8423d51c5d"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "9780e0b817ab83cbf0c7ddc6d946dea8"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "81b342e6dab1795e84b920f15b452f1a"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "45db1edfdfa1bd6fcc577e5c5c2b8c82"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "b36399d5aa4f2ca4d536ede8df85e0a7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "7387f06e435fdf8947356fe2e8d5e7fa"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "0f33279d8050c34aa5fda3175048eee1"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "2b62dee11d9a92aa909a180bdc148bd3"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "fd2d2ba414251db3216b2a1e069f3f50"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "2cde6ecd936c9c85386f7f0868cfd746"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "512bc3d573aa5b624fdb3bbb950b8651"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "4c4042ade3a885a2f55cf6486dd9c19c"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "3d94ec3df8b61d572fd3d20284db81b8"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8fc6d46d461cdb460a020daf80b44aa7"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "6667466200a8146d8d295319347cea33"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "4a71fca2e2f865a10d735eaeaa84aef8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "1c34a2b20d968107387d97d11eaa95b5"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "2a660871c8ca32e4b17090bb42b7ef23"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "3d5817d48358be5b2cfe1dc4c4c45dc2"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "28f20dfbb61ee553fe72daa7732c902b"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "f411c887edf82b9beb53e5f9bb98d5ef"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "513ac4c1a550db1da0f75ecf7927b204"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "aaa7ad670431b5478846bb9e4842ed46"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "600430f270ff16eb8889cb8ae877681e"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "f266778a21d26dab47d782c64d49705e"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "33affcdf31537ba030582b07496e5165"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "f185378ab6f3287392f74f8cebc6ea4b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "86edc70a38d7a1fb6f0139a2c1c5e06a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "4881f2ff0cdcbf7332c014d0b4c81b67"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "f5b46fdd346f2924bb037ebfcd2aa2a0"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "d67fdbfb9f50df058f91365a3c36ed84"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "8f270ce36d7a2641e0e10c33b5c61014"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "fbe1d0094db116c975340d53a269a192"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "fce9a242d732144bc7cab44ea9ebc573"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "d4b9afc2ab45c426cdd4b46da20b3c2b"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "e74a68e938e7ff60a19d162903743859"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "c80386a5fa8d5cb675773d96053771d5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "ac7c04de0b9320ae181ecb969a6c92c8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "3d6dcc200bdb44a2ece9fe6f7176c507"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "07d7d3d8566e5456cf78f1168090f2b0"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "b5bb8d888f0a95c42cb3686ea0470c8d"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "0eb33c049d911124d87b8d1ee7ed8ad5"
  },
  {
    "url": "categories/php/index.html",
    "revision": "4ad783245e6ba3312038d7de42d9f5f5"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "6bf01f5450f8d79f03fa1eef06df2a40"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "0873b668ed96c9e3ab2b3144121aaa3d"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "eeb1ac97489a86143af7cc39ab4ab80d"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "fe2f5586f6e1995b843a65df59e1cf52"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "beb4a9354d5448996e5da5502859feed"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "7c5828406a2d10448fc6f58771db9bd1"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "5c8f89e43c24f7d1695fd9816be2caea"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "b03e8b84ddc2cff0fe16a881dad710a6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "9a0e66393b9db9d0684eac8466ad584d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "dc83e92872ebb0dd70911b5ca3b15257"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "2713566778eeb92b6ae753fd3ae4cabc"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "049f3ddd02b7c2caa32fa4d65b3d89e3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "86c252685578886d39e77078cb7bc148"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "805ea9d3cfd40dd3e1014e7bde72bf23"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "3e5b73a5a403c1e2ff7564505b88f3cd"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "490b67b921ed7a2b997681468e215496"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "c53d793f160f594f641aca26597b1d4a"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "c880f583623265eb6ebb0c001d7b9309"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "640808f71afc279da5cf93a574cc184e"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "01284b88fdb37a5629d1141d9a46f064"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "6279fccface51991a003eccc7a790669"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "2a0b787f2c1a5757f0b64632d304c1f0"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "a148852bd40cceec1696ea01edaa977d"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "0fbf223646a3bf55695580dd6e2a85ce"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "4d1d4d9442f5d194fa23ba23c63803cf"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "231e6e09f6f66d5081ff9e8ae8a7239a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "de6951dadb896dfdd07c73072e479dab"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "a585559d0c978bfe6b809b2d12e64298"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "cd792832c6cde8f8ade892ba7678d05c"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "fe16109e8aa85d178321bdd957847fed"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "7ca76a0fdce228f426ff6885b5e7232c"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "e159759e38298eaa0cf42b813c04cac6"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "a3e96c71b6960aa7f611cd61b82cbc61"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "94657d4acaf9292f93e4bbdec58d813e"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "713ae0af9018d7f1363ce5da4e74ae35"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "4deffc071b6ffd6816e53e5abaa22184"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "3693da233af31d04bc0526a9006e6532"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "77c60dd14fcb819e06014f8f81e45791"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "1b0a26ed2babbe1416b0eb4915521e15"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "0a71c6f4e771c0833161251c23154323"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "86b24dcb06d6b2bed8ae711fade58946"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "33fa566bc05027690e0632383ab2b6e6"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "86eb41b7a1b6b40112e0ec7c84ad95e5"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "9f088e8daad1456747b065ced74835c2"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "bd61028fae794bc2657bf8e8cd7ab659"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "7eadd7165c3b963a24ff8dce09afa019"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "9208e69377d186700c572e8143d9a4f3"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "6ec9f9fb197b2ff8d6d6f8a4c7ba073d"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "d078baf006f04d8e0daa5b90b0205508"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "38ab7160ba9b5be4f80fbb6b18f180a6"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "b1ba46ad440285cc056f86f25ccb45e7"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "c510ccda88eabb89db83efe9c8385524"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "031e6b0f33c3d7ecd308b57a97c153d1"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "13d5f08942095658673c944141d250f8"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "71c6527cd5ff56493670f82bb6e4a5da"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "65e9f9fa7c0c53e4fac08355860913f1"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "f7247382277dd0e44df761558446e99e"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "37ff812b90c6c1a56c09df997b92ce3d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "380550c7917aa0038aacb1aec060f888"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4c9bd445378d26847d0f1ed8b645b0e5"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "56569a4551cfd868ec18b1efc8e16075"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "59f6813cb22dcf5101e24d83b2a130d5"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "02d05f876fb0e4007e5c94a3d27e1f00"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8b1565aeec10d4ae00b91771ecc76d75"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "29fe7ad416b56adf39741ade44bf9b0e"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "6182247608873b29e385116343586e7d"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f19cd77d6e5c656be89b3a6217a9ec2a"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "c081f96655e0346f932545696c7d4831"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "c0ddf20c947e4d2a3e6828e96b3cf986"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "c28fd868260cddcc57026a0f258839bf"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "cd0e205f3ca086a1e7d07635f58e5d2c"
  },
  {
    "url": "categories/system/index.html",
    "revision": "8019f7834dd5d1c55caa1b21f4d94046"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "6e41ba002ec5f4ac4e2f61620f6beeb8"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "1d7bdbdf9e60b68af320af30f73475fa"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "a0fa17c7a115352f10b29fb73b3cf4ca"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "72d47c25f30f314bcd3b9d30c871ae61"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "093c81788ff5398dbd887d3a43801a33"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "129801f0c24fda1a866a657189f74148"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "99ff532d280062eb7221337a5da36d15"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "9c9d6d8455d06c54cfc0906f7a77539a"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "cd14b4df22ed03f8ef3b0f62ea9008e6"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "274ad6a902ebe9b1c68ce13f5fff61fa"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "b3c62b9986d158c9ce860a372b2505c0"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "71b2a3d455530cdaa1f1822e8eebbcf6"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "6ef87bcd32dcc9467a77fd8f93c94508"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "8eb076603a9e56627e3da1809fee9bdd"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "2ae8e3e35abbcd678366470ddf878a03"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "3fb5fcd73138e0ebc95ef0300b951f89"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "af523fa306aca2bb725ee33f2e703d56"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "ad72cea867cee4e0e2c02bd1fd7bf2d1"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "18a7501939cbfd73bdc5aa6bab2eb1b6"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "a93c168147ec41d5de12186331728ac3"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "e866bcf1197bb46fd82e47d60300436a"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "e36fe4a1dd0664621d1d5220601a65a2"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "c6851a33fc2b0e9847bd4590a5310d4c"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "4e1c4e111b63eed29d8382aa5404ac3b"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "88490acaca704d747b0c14991acc5ee0"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "3359eb0cd7432328050bb9e29eed6cfb"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "61c05040cb6c9296b81539742a3b6618"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "8777ab7b898cade0c197ee47a97f107f"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "47eecee420fc7f322119ada68a13ca8f"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "fbe3fcb5727e662023af8ce78a7a3756"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "0c0f4c04ceb5dfde3a8b886116d56e6f"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "0c3d0b77537b6d5479edbf03af50b797"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "75d9ca25a477024b96a54bb8b8b0960c"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "69b584b327bc57a9c97421a37620c249"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "c902845f2f19e571bbdd8626ab5e6928"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "df5ff1174cd0d6a349b0b240a5896d0b"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "627ff338a24e62642c354dc73e4dc627"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "79877115192ad332613d39b0950e66b3"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "f6d4e033ec5a304975c77239e6b56798"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "7392dc44905d4f7b13cdf91ce02ddb0f"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "a8b0afe71353c2311fdb56908f0750c3"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "280a77fbbc110fd04ba3ca7404494f65"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "fe162a58f538cdf179e595ead2b63c9e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "a6ac0353ba6c99d5afcf93a85e13cc05"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "de8dc63eef9e4d53e7a258a7404c77e4"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "6eb3bdf3252355b7c1d2ec318ee7e6a6"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "aeae3923cc888769d290f23e238c1172"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "1f89e72e38b963bb795edcfa7e236c86"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "72f3f375c6b14990a2965dc1869e9a79"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "d5024e2f4188262a754e395338eb6eb9"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "e151e44f6f48434d05a46a8a4ce703a9"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "db8be7dabaa04d3b2b18c82120e331a4"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "83a54e5b599632f9153e534a626ec6bb"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "62f2aa7c83764409df3f01c856748ff8"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "8615fa64d2c8f4c7cd23d14681e40bf9"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "bccaf7c7f4bc193f155adaad2e4b52e9"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "ec9477135c5e895d19f0bf961fda1b8f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "fac704d8da7506cbf2160cf54b949a33"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "896c7511a5cc5871ee6f2e8b59ee68e3"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "4e6334015009c1f66c48db0d470c7187"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "0d5c1bdb74598271d46e932e5658accf"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "ecce8d0f08f45ecbf806375b128a4b85"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f7c912924b7b807196eb9fa1bcce8e7f"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "bda5598be67a1350c08b1f9d484b88de"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "b4f70ad3a13be3be24b1b6e6b2a43831"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "f03da56318c88c4d00de45c0be1debc3"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "cd9f651552acaa36418564c0dfe9c134"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "6bf35ea87a7cd4c631e9c0ce6f519ef1"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "2f571e9f61940402dc7d3ae4ab47547e"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "ed4ae60c991499637d2e89b6598f93d7"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "c5f31c6ad74fd7b63bc7adb17b6c3f08"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "e902c373c930cf18501dd76cdefa535f"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "becb4fa32cd7945aa026bb8ce3ca04ac"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "6ba6e40f1a30e8d039fe86253169debd"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "ac08823b561b28e89ad2b8acc49f765c"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "c4f7c8aac8323cba3424466bc87461c0"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "cf8d0484271a5057d23caa5c1f97c10f"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "64b311e5fe7157475657d500c8e89607"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "4a95f5e7ed66adf8e59298f338539b9b"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "5be19a2e8e4118b41c63ed148207b66e"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "0de93c8f8f92c02ab577fea9a6676eaa"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "1288cbd703cf11c9839261975a4ad9cb"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "bcf36fe8b7d4e2559125a3cb815475e3"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "8ef4cc72ba967b9ca56c7a122cd0f79c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "4045c37e74a5ec32f4ca0a311462be76"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "0d3c51369e6e0d47cd60e6ee502218ea"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "c82cf593e03a6e275a3a2a113ed5f298"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "9cc0c2537c67e57d7daa9307cdae8bb2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "24f2d477bc635218772fd93c5add6ed9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "1668296cc2cd9ba613f92525ab188cef"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "2b895dcae379201fe775e0bc2d77036f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "08f264ed39523cd856c91871005fe79b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "eb0fa66c2747a4e0f66f3ed36f8d6e8d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "cdb071decc93bc8d08aa5b0faec3ea0b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "c8969746695042e6575aba433c3a9f86"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "52d71f67b2f272bde110b7f21dccbb6c"
  },
  {
    "url": "favorite/index.html",
    "revision": "6dcd86a806e0be5a317ff2736b39a8cc"
  },
  {
    "url": "index.html",
    "revision": "7c401f56980b0fb5b00e94cb0e33201b"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "a467290ea6022701cb9fdf905363e149"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "979b66e58744b8b044bdef9cca41777e"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "882ff99dddddcd1c33bf3028d8f4a852"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "a89928a99ef2e0f0d501647e414f5c4d"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "c3700a62bd1a2370acc7eb09ce203a36"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "3ed30f73531bdfbe7a647de53fb783b0"
  },
  {
    "url": "note/index.html",
    "revision": "0d8ed89adeea985ebc2dd0d9b2af7e30"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "dbdb2ca346616f272525043e54957158"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "ae648de22de4fa350c1f30d881b719ad"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "bfb9e3d309210e16e0d21eac94b6218f"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "21bbacfb7d437342e5f6a80ec41f409d"
  },
  {
    "url": "share/index.html",
    "revision": "3de5e05277d72f7250d88a2eb0f83a8e"
  },
  {
    "url": "single/about_me.html",
    "revision": "e1c63eaf055ee41af9fb1452d99e5923"
  },
  {
    "url": "single/all_article.html",
    "revision": "6d4d3bb6f11736e4521cb801accac812"
  },
  {
    "url": "single/welcome.html",
    "revision": "868022a5a40791dc9d1f51619d918036"
  },
  {
    "url": "test/index.html",
    "revision": "34f783e36e276f5e97acb82a003d025a"
  },
  {
    "url": "test/test.html",
    "revision": "7853af717fc66d3e1ce10bf85519cc37"
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
