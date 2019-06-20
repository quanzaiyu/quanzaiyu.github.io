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
    "revision": "0e8b98e57aa91070281b17df38c413d1"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f151dc4df1be6c59fbc71ea554acc7b7"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "3ce49c4ffd790c12b7ac0c1e75cf8e8c"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "ae15ee9d8ca6fb13259f25f874407400"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "c05cc27fb4dede27bf1d41a789bb1b6a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "d0bbe4ed0999f1cfe131b5d2fa059f14"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "8027d09285aadff98349c6ead26cab58"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "c901aec35052d33d8721e9a0fbb2b831"
  },
  {
    "url": "articles/index.html",
    "revision": "bb9fbae600d95323d667ee008054d39f"
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
    "revision": "a91f5a72abb06e95eb46a86b2bc7b523"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "4d9ac271433ec0a333a3ff2f2bd60862"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "3d7584edf8c3b8e63eb789336911526a"
  },
  {
    "url": "books/index.html",
    "revision": "73c77193864f51a3ba9f855ac0d32e15"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "f9e1f06d2b22bc246cf18edd5b7a8c29"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "3f69ea981545a2a870bfa6c2b08ca064"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "b9b24dad1cfe4df67e2354aafbed59c1"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "d742e65906dced58d69d4d25525e793e"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "bc41911535c13ce9f2422202c8beb165"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "556bdfc71ee5cd81d7eec2567b14563f"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "653cfd1f1f91e8832ce02c552828a972"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "a41a09d4cc59e144a060a084dce66dea"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "aa87f2339b15a6978791999b7bc070f2"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "6fec6b049dc82fc6ec1e70fe4ece0cc4"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "13664f3ab02a03e7086bec565d650891"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "0f512cbb5a9e0ea140e9d5d31220c4b3"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "a46f5d5fdaa95045d4f11e94b1995b65"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "2d921c7699c94e1c1cf71d40a9cb6426"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "27de35055af88f34a0c36f236718d107"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "463f5d580e270498278809cb274dcb54"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "97fa5dee6dcc713507867c6bae82bf2b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "306456dc56878fe79ab03f4ba5d54f31"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "668e17976a9e0ea2d162f1cce2b9b4f4"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "abb2ee00d68060d3c3a062c7d5a56d70"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "bf3e61fc13d06a35b3fe0ec9eba31b01"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "a040da01e5c65946e98a5dc696a234ca"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "86b9fc428906f5963650137ae9e7031e"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "63899c6f3a0a6ccc8a9f566c191e5755"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "6a9eabef706e0dbacad8185510167196"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "116116ac5832bb1dbba442278ce4c7a3"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "60f84acd3ed8fbc8a962816e04153651"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "5340a4e47d1c63102797b0ff59939f43"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "e4953cf8510a2d2d76c452217f07a23e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "47b3db5c777efcc1277a1f378d323421"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "231a241f899a2561df1fa2966778fb2b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "3b3e8010e252596c38759edcc67c3e67"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "2ec131eeab157ed4abdaced7b9d9852b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "ad35ad3894516164f6e61500e8a0e914"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "dca627845dc9bfdcd5bc962586d63511"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "b0b0cf18c911292653cdb9e497c4bc8b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "dd633226ec1aea49dd789a1600111e33"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "50105b2fc37f9248f55d3c4719f7da77"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "76bc3c20e5fc67beb1cae46eae4f86a7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "4ff27da28efac21e3a88299d721738de"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "36db3fd76c3f0a7b9d2715b3c4330832"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "1595d81d8ae5109c1558f99a7f306efb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "45b4824925d262f80e3a98f11290cfa7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "a197ab6b864b008b4d69639101403490"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "b142ebb8e6ea4e389f303acf339cafd2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "c94aa34835d326c7cf88492a0b0d17e6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a20a21e11dff31a0e793fa58a0258dcd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "ac90c0a0ac9869e51af50db39c11d1ec"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "9eb10000fb290a4d49846c1ee23cd210"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "77a278c8317cf58fa15bedebbcf088e1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "a85555f2156cd70865ef5e479dddcc09"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "40a90bd093f0daa9e77d90aa0b445030"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "0c5d4095186d8c8a6bdf8483268361df"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "63f16d0bcead650684066e8908039949"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "78baf6dc63309c5cb9f21123f5f62c32"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "70c3c696604c7c7eb4a10bfc84247b75"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "825daea6292c1dcba04c9d4ea91c1bc5"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e0ef190fe3c6d1243db2983974c85838"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "d902e503bb9ab43a5db0483bbb92053d"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "d1c96d74f4ae3e9b0a350987c482e2d0"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "2bacb928b24f966a5be92936d8b859dd"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "b183acaad08bf3a5de832e6c2bd942ea"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "fd2b1019b5ec144546aa65a48f6772f7"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "72e66c29f6bda7388c219a0be72c81ab"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "a10410e00d72a9ebe5f18e8981214455"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "b349f4b009356e593b2eaf08c31ebb9d"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "0414e4e341bf8be5e9030dabab50161a"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "6544b5baa4112823e80e31452c835a36"
  },
  {
    "url": "categories/database/index.html",
    "revision": "ae55ef462ffcc1ea538ae5464e3a1875"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "786937ccbebe85ccb168f97e8bde06f8"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "6576adb652635f3f9e567688ff2a583d"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "a6925945e80a2eea9299ecf7402f8f2b"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "2ebf71afad334742eb502e599688f31f"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "230401da1ffe81719d1ff76b79801eea"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "5130a41678be057429b42ac922c5e7e0"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "01230e13491d9eb8e74a55e686a99d1d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "f9438cf6158e76b76009faf1ac8ff4a3"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "7e61bcaea0736d22c9db4fefccf5bd60"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "f7ffe3043182e187ebd5d81352009274"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "15658608af0a2b3d95749e0b66f3e99a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "bffe028e22fb4355d76318137954f42a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "fda691bca37cb5ab37c922b6e37d7f50"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "00cf1c3ff4ed9795c575b0b8ddd57aca"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "8e0e6de3734b8dd8eef23292963fc030"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "5d2f3ff13ebc900a52e1386bb6e9047f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "38e59aba26a737b17e5bbb19adb4be5a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "b2ceb6623869469d1190ada161705148"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "b85acde3dd6c802aeab391dfc2d9a07f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "317403320b70f0d6e9351a15e3521651"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "edbd82bf12f6c58c2a40ba3efab61f83"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "2af75140889e4f76ab23ac8075d0d4d4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "be693f04544c56edf3f613180499bc09"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "89e78c6b52bbe0b6708e2a9e6fbad21e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "0cb330cbcb61e661b4d73275da902228"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "9db7b81eec4ba1f3f57f84ccfb394399"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "be5824be1fc5c3152741d6d4842b7a0b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "d4b2e2d90b9ac5ba90eac994d79468d4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "f15040d63799f576ef9bcec683b68d17"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "c19290300e38f8621140dbdf3d414db1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "b0cc5c0ad3615e8b9a354a6d829589d6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "cb474855784d5ef080c565b6f901d893"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "497a1ee2c4282d0daa4eb48737c2ad78"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "c71447e317d3a7534fb42ee5458143ff"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "8a3ad7cb7497538832c6edf1205c7cd1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "786a00238361b1aacbe3b269a3011dfe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "cd01c9b1b0422edf907aa35051424622"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "bb316261eff7fc9e468193a1fb4025fa"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "486fac4dde5849088edaebb43230197c"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "f09dd2c8f5aa620d59cadc80b62185a6"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "db7a56e50106a405fbccb64b8a671410"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "38b7e74721cd964cb4f9117a06613201"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "d466da61dfcbab8ef3bfd30a90b9477b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "4c71fc721a41831f0b4c9a5a85e7c338"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "979e1eb0b922b24ec8d6e7a3afb3db6a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "761057086f6321e9f33a55fa54330af0"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "8216e115e5e7a061f54b70b4470e537b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "22067b4ca1a99db89b31b07dcc62b9c7"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "3695133386578f3ae599dd6d97fa679e"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "288ebd6d231306cc2f977925ac7981de"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "1fda607b3639f0928bbf87347eff3683"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "f1d56b2be5ce9ef842474ceac36b0b78"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "1298623ab5b71a3fa5c06822b5c301ff"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c03711c6b4ef3f30f6596fc4100a2795"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "1e7f17d977859e0d5048bbb1761c6ab4"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "83ffea04029bf853b800ee0192d90dd4"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "d85cd48b9162ec8cc86f78d154597a48"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "250b2f2e867d73b502d03fee0cb2b31c"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "2ead25a5d07e736c9041ca40142d8d60"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "1cc46b619bffcb65da40bb5eb8fa4d4c"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "29053d8b76cc54fa34e8790318794051"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "c535ab85a7002b0a3d3968ce01646d23"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "30d2df085deba996316d22dda9184ab1"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "24fcf3809b28efb7e965165906f09702"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "e25293c3643f73d979934705cb306617"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "b14642dba200ba33f00fd3beeaf46fc2"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "2d976e77f21e5168478654a513a2a930"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "4cc670626f00a6f2fdec6ad0eabdab14"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "cd36dd345c4dcc4e1edb2131510abdcb"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "7d690a22caf33bcebccaee170489584c"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "3cd1c3a91bd6556c834b7be8722507b0"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "d0ea92c86ec759fc06e53f7e8cbc58f3"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "4ab9da61e53be1439248c98e390d2796"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "be5c2ec81635c63d7fb7887b5f6e081c"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "84dcd3cca91aea21c1bc417f8c2bc9d8"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "6e133ea5fdefe051ac5027c5f97fb676"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "82d04a2323961989618f64d7e66e055d"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "f9746029cc348b679032d85f4eceee38"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "38aad8dcc46dfe4121584b83b071e380"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "78b0c7a92f370c17eb2a84a28d26ed8a"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "71625d5c6e9aebe7eb0b07082af0f4a3"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "7926f52cf7e2706b1fb240dee132f3a1"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "454d69521f82569c7272caadda953c7a"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "8028d8a7b9a57f40aab387c449e56e05"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "2bbd9d7f6dcf65415e56ba12d090aabe"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "f0a997ec04d178ac5165d43089994487"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "2a1bb69ad44f46709e7acc57e00e71b9"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "e66dd2b7a1ef2dd05d0236138e4a4d80"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "cb66a9b7f1f6fbf0af6ca1b4647e06c6"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "749bcfe225d5aabdb1d862237ec24092"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "c286912e99f7e12d861a99c56a262544"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "0206fa6612df20a9b604cdb42f32e299"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "ea796bdbe82a8376722124bd2da5747a"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "b6840f1b9f5074349fdbe36c937c7d79"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "4e5f5f12e1f3739e6f07ccaca70fd815"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "0a0342127ae05a8810bae4c13b4bd800"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "8701879ca01625d4dcfb29844c5603ee"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "55decdc97de8cf1d82fdc9d5a6b694ca"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "ba44f6b124ebaee36def3ee7641515ef"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "beb2ea71d1332ce9ae6ace2d63fb352a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "247a7f195c2564ccbcea9ea213c50098"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "954fea2d9bd41c873404e0b6172193c1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "8d7b5855cecf8cf844dcbed01e5ae593"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "fcf528a96f6e14dc604cf63cb3c86d75"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "32ca6be0999dd29a564dc7fd1439876f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "aba4570d7e4ba223d6c0cf50e4e3ae13"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "68b3d09136c0d6d1b4adb8b7577e3333"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "a09e2ca3ad932122aecce83b4f56ab25"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "300844b728c69e69933173d57d7ed211"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "80bca13991953b242b45fd4b82fe5696"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "69a59d90c404eac1ef7d075d4df16513"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "7f5118d26f11196c5f67d8413ee2148f"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "8ddb537f04fb8dd98432a0fdbc86f7ae"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "90a3259bd1f4d37a86c53d55705b2e12"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "da5eaf53b29d81d192fb04d54f83c1b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "b928ac43497b372fe8622b28d077541f"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "6f0506cd337452b6d5c6747dc66bc848"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "3125c1439f2dd23228da17181c51d97a"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "4d8b209bb4dfa85cb6e49e4f27c25488"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "38bfbfc1058315ccafb0a987086a2489"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "99c7a12f287736f41509ec68b4166bab"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "d5649f65dd35f258320e71df818ecd4e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "169915fff7ca3a3bf9bff44f6f409f0d"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "8ae5be3daaf00027517a4bda4758dfac"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "6af3ed6bbcef45b94ed7106176dd39f1"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "5ebfb1515605c6f4281277f369de7cbb"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "6139d0cc670023f8eade1b62e0d26ef9"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "b4257c7650aabbd71de1c21895a737be"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "dc5145d62147c209dd7d926f46971158"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "afdde601c2b0ab2ef3181e36e823ef0e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "9453831bc53c1862ae3142929e0aad44"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "e8c63e99ddebaa4862a5b6500070865b"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "2f15ca84cb5e44dba810cfa803f7aea8"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "af69cbb10d7dce9fec0efd32918b883a"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "a4db4976a4535c05ddd0af3b52e0b195"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "2542e47817463a04e20049afad8f1dc2"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "c9d417b5f7f66610ac74390b62715d65"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "c661c620b39a45f4575d7490d8bbccda"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "7007cf66112b9ffb582a96943a34a41d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Container.html",
    "revision": "fe44e7ebd46ddd34a65805b07dca177f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "7fa792307ac235dbfb11c2a91f8b26bd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "719a312facb3d5305b0624e03836d8b4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "6e81ba88e68a3fec64a5d359b1098718"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "d83c93b9042a90fb519eca0e26d3175f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "0960ac3856bcc09a51319b72774a15f9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "6a69530a7337e94aecef251c314bed54"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "ff41f55d65a850aa29d4ae58379974bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "3d316d779e2ad83e30404e54a48f57a5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "6273e34caf172fd647baf03f6d822b33"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "caa6b660dfdf7bed7ff0feba088271ef"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "61d3c2d110f8204e7bc6ade431e7c61b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "b293898ef155652b25f74e8186810cb4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "339deefce6b835f0f04f789aa8cd13c0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "86571396cbc6c2d538d325eeaad3e719"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "7fc33330c381a748e8246e60b82ba919"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "bb5c8e6682c84cc2419f57449d52e2be"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "b6198733c25054e660f05fe11aee3a8e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "2fd1b15ba3e255c1bce699b320287c0c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "4ed99db695d7095a1d66486223af7558"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "e092d9c0dc2cdbc543ed9cd1bbf73279"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "2790d67e46189838ff6d30a0b5a855c9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "63573134eed3e58298579d4e099978aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "671b1227adde0e70f838b2f93511abfe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "2ddb4a75354a4893a2dcedbc1f35f52d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "337dc5474358ceb890adcbd18cf6c8ff"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "493d60c2bf57c20114f226ea1685dabb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "3baaf830f629fd02919516f1e7f16819"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "cea527f68a8ed3ce7c60462d606d79c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "aa876c226ccd9cb02ad6c1c132e9fbfd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "3a6a46bda79f43b3583f0bfe22264211"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "cc2ea62a1f8ba54f8e49abca6e1c51c4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "33d204d9193a4f5cb914352c7639dcab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "5ea2538c44d22547ca436bf34cbb1cfe"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "a5404971836303b2a249ca4838664034"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "576cb04e79ec5093065192902d68b2a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "2834d94fc278aa41d9ed9c6100a38c05"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "7e972f3c04f5a63e7dbc5213a8e412f6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "55cd13b969e59c2b735550659b4a10ad"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "f739ba3edee3dc235b665c11bcf6945b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "ef575d33b28befbf1f7f92079f5cb3cd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "4cad29bb9e55e26698175da73d0f4c00"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "79250834b988b5030d59a6c5d82395e4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "96ba5bdaa73cfc97c3c4adf1a1cd709e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "2c4c403cc6f7a25caa84d226874499af"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "19c0fb20245d3dcb22aa0e85f9d3ce12"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "0d9d4861033ba123f4760680ad0da863"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "9815f6afe072294d61e306c972e262d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "3135e3f4aca53b935beaa2a908106960"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "3048d01648f283da67632f0f69fde993"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "4b9bf77a5d5851c3cb6b3e5ea1650db0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "25dc00b78ceea187530ee342354d4090"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "84c9b7ec203c2ef29ff49c9b449c9d9e"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "fda286ff379ac78f033d9a691d62002e"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "b7ee3ca70b315e752d86caf253f8847d"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "94d7fe2175d06b58a323cfdabc037e73"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "6f8fb8d73daf77f5f656d51d482fb963"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "0c7a068c96292e27af8d88e1a82f3af0"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "29a77179eef86ce70602cb66ad8970f4"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "02bc1c5d76af98461fc1147c55da4c2a"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "beb472723615eb59e0561071a495c120"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "2b5b23d5f70917d0dc895fe933842674"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "d51e25887e36d084af7c8f97c13b6e41"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "0a68767c0fbe71ba6bf2d3b3acafd92f"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "3587050232389f3d19d84a58852bfb2d"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "07fd91bb3388306e27a04edc5cdbfa84"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "9d8477b92425e4ddfe3a504d714e2cd3"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "50e3ccbc5f60ed9590d62260d8ba73f2"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "0f8acf198711bc77b8e409f1625a2001"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "4be79df17d15db10035bb124603489fb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "a9d85c492b5a07b901d87b973ca831d8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "3d93ccfe0ebdbbdbffcc8e7edc3ae4a1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "36e08552265d73b50a8447282a21e10f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "48112c1d8104910b1d46348ce1d05b54"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "5bc3abe8039531acc563765cb6d94243"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "c4620d2c075d43a1fa1564e4597d8a24"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "9d805e041ed44022a1fc41edec49c982"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "8ffecc13fc61b6610e72b1ec05fffd41"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "5423fa6c4f78d2423158291c6fc7b415"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "71126edbfa9ae6ec84246a03fec7d16a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "33cfa79b498f671b26c2f2b59a50639f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "adcc008c156667a848ba062da77e8653"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "b947c4b98c6f63bf26224dfa41732867"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "f86fafd8482098d8c147792deaf47817"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "2d73a34b338260b1fc8d53010f9d0066"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "5b346bd6ea061af6b8cd73e43eed9cc5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "431e454865efb2f6b6cb5096aee65eff"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "2d6286ce33c520bd728a62d30cc0743c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "de6bbee20ea54a55bdf1e6796e098a4f"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "1e7f6018ae3393df9042374a078c1f60"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "21ad26141f1185ccded12b6b6121fc0c"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "cf9499e7c28732584458f1de9940ea61"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "ef572ebfb036bdae5df25679562382f9"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "27417fd5b07b0903e8cac1c744273579"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9a3bcac737baf7e920292beb218847fb"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "b3f611314efcf5ab8c2b3e8580c0ff4c"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "84f58d202605802754d0056b2c3c8531"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "d0cf61d969a8fe2cfa250cd1547a1e60"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "153ddde493e172045980d747fe1feaaa"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "214fcbfbfa97a6fb4db08b4cbab92b55"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "c1bc1923dea99e4851abb70e777b0664"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "66adadf6d70df364f3dd9571ad616549"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "cc8387b7e7398c5fd5df6fc08f8761c7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "2aaaf16bc5e249e6f3923708a4d370c7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "1342de8d4cf63827725feb68b178a797"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "01e8e0ace7ee64827cd98653b16e0633"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "45f2cab09d635b031810d0526f1d9884"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "7b64a2638bf0f2e687172805a7f8475f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "1048ee16748f3926df9d96dd0ffd21b9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "e06ad5ffdf1a69432f1da0fc43a185bb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "c3f3ddcfd74417df9ee4db559cd39f5b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "a64cb6d5ef2d179ab77d577a398cf076"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "cc53786e1dbfa9c6c4a931ead086d3a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "fe1ff615ed78205870ffb857f4c61f88"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "9574b94c2c6fa73b88d9565a6ecb73a6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "7321d3ecfec3db13a0636a804da31b70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "f6304cc1c65aa4f120de237e4f93e055"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "88d12c8526e91a7eaa8c98f95bbf89c1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "89d69211ddc56b62c99494bb4f641c5c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "1f7f945f7570cb41fd3fafdba544c449"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "69f8f52e395a0754fc3e57e58fa5996a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "835e51f9bb5df12ab371f31112fdfd8f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "df2b3e96347f3161c900fb09b619cd8e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "7273a5a236f7e65a9693e7c26eaf33ec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "e8c2b96435b456afe146589f4f052dcd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "b5bc83efa37d4963c0d321f275dbd122"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "a7e21caef1e8f0648798052a564370b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "d7fe45313d8ee52bd7e774b18f6a9a82"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "bdcbe8c547670cb507655958c4b296f9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "17b1629dfbf589998308eb6632048d68"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "753489aab38e8728a83bad09b9906807"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "a98f635c309cb730abb0e0f3a2952c95"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "2b6cc71a66680d81d149db868d31cd32"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "4cd7dab8f157659ad92a6a7d5b5affe8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "d013459a9a7f42560d129e59b3ef3a23"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "ff6d5e3d96f4603883024d0850bb8be3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "99396edc90fe1e8eec15a4cd0ec2cd62"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e45bed48ac041584998970c82482747d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "72b272cf10365dba0a4762a201427641"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "9360277eedbd5796a08dd8a3e6d43d16"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "5fcaf316768819993dc22408cbf32007"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "f512f80186ddf0d78248b2b444d48872"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "642ff8c5e8fcfe262c1821740215405f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "20b05e3c1fead03dea171314917b78b0"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "bb9fd832bf45165c2d73db88ccfc4917"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "4c30055805e61cc17ffabbfefaaa5618"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "90246fb8118adb1ad5025d481eb5bae9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "a0cf48e816d433efaee8e91dcdc04528"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "8700b6fee57b80c52d83eede30f5237b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "ae87c7b74c915fe21a4c4049fc3b37bd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "17214577f3ab5c5c4be3ec213dacf672"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "1697d9e5e4ba691d395dff838cc16637"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "c349e4d3feeccb0900efd4bf4dcd1143"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "b3605c6d76dda76dd7602312db130624"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "3b9d638ce720168346c70eef6bd674a1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "7368b3520ce46e76338e1e490c06d7dd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "e2c96557e9ea2a60d464936ce536238b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "08fe00406c08290f19427d280eb92c7e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "9e9a89df60e8b7691fef840b135e5074"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "64aa55e84af061a1a034ca551a53901b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "feb86473924a0af050642c82c1c3d94a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "d7ff76e9083b9e483b21df210c46f74d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "ce1ee7f493b19e4bc7e210eb68bfaecc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "fe776d1fbc8432885f66a0139c4c9fb9"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "f2aeb948aebf737a5df5bad591857a8b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "cdbba1249356f381021771a7856a6f35"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "51061e4dc91d9d93fe9c77304f790611"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "624db2bb36293f43d6d6814de6bc421e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "22bbc2d2a4a518c21853ff057d16cf0d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "bf9cb484a84b1c6678e59495052a38ed"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "7ce31459abc73352aa51656254ae0f88"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "86b2048d533207eeca5ff671a1ef43e7"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "42020262fb76327683b962c97e3cfdb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "8f5ea2a88af06e2c6c019462d76812f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "bb6560c896c8dcf0efbc5576e10240f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "1a0ca612ee9056a3b3689a14fb90192e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "75a58b4abd853b06264c59165d1f8000"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "9a5c7601c8104c3729bf0843ffaec9b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "5e8309526df2e61a4871f6f7d89676a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "c12959d21d843f73d05c59addff5b1e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "7bc2f0a1be524f74bc4eb540215db6c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "b7ff8d33ca2053e434e7364e6f639d90"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "ad8c945ee3bfdaad7d4cda1149d0f347"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "4a1da6cc748528a7f1f8e0e8bb4f5722"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "369ed4385c425a3922f6d8f29ed92687"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "6c8b619166bc3caf2ea3bce73da3b753"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "2414d5aa954681077a7100e38768cc74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "3c9f1b16233a580984ccfcac64f9261a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "9ebeef59da2960016f079eebe0a0b76b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "c9b22b774fde4726d12051c9e1491287"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "b712edeaf3f365d75314a1b9f09a4733"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "3ac29b9d72eff4710b2af6dfda901eba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "fd46c4b17c55878045b5e006add6e2c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "7e2d9373f1a85717a1087276c75e7830"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "ad6f3ceeb492fe723f5834519fe00ada"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "94c2b47c93f29842123ae54e83f26e4b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "b30e0ca020fa385a66a54e95b5f24244"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "f4e56449fbecccbfa9e4896d86f586d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "af338f23bd69d3f9d42d5323e35c6f10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "167c65afdd416e303952419fc3871110"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "0c64e0d17dff3251cd84e8211bf939c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "79f96c6a8dc9ea2c79321bfa769a400f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "003ce8d55caa62c51eda98969996d697"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "29d387a8a4c3a9122083f525f53fb154"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "012341ab9ff08c4999ff07746807571d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "f37fb0541a708d5ea55c17f35b880a01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "740badec31d154e3dbbbd9fd99b4aacb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "37567a1ab092c04a5db2c7dc07eba5ee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "992c947712b75cd1270e49f22677dea8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "bc9c3c487fe1f8da4cb5f9e6c4e3cbfa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "f87e170bf7d5ce694d505c1206b49cc2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "bf1cfb5d95de4b2aed93650d1130b735"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "0727e619f587a70f92d485ae77ff23d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "a95685f01d65294ace484e49c97554e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "4a658987fe24e7ef4aabd2e0c5f97cd7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "de06aeab8b17c35d3fffced485dddf75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "2e8b504c4d3c0a22aef9d8e9fe3a7e15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "d6fd15fcdee059fe8128a3e527f867dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "28c00300b14cac9a7fcd829481bb325c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "233375b50e05c3294bfb634eea5ee42e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "897cda6c6fea7ea656aa5100626aa81f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "61ff24b1efa6158d8331c2c157b03c7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "cc18a935418d367129497de622c6fb80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "899e55efebf362db88528751d61366ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "b9d5e0293d5e504f21c47355c72ee79d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "7292ea87338ccd7aa2282fb7b88f9b5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "9b1ca1d52dd25594e8791cd1378af79b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b8c8de7685f1f1b5e026762c5c6b4a7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "65cabc608ffbea34f1ed397db23f78bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "a33e1a84a5e12a70ff474a6e2bbd64f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "99b575248564c19548de9c7e8729b49e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "02453d4438cf6786859792b242fc1207"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "8c8285aaae4cf96aa3b7a8f4912ced9b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "44e25fc1bf4f5cce40219726b4d74add"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "1b9e0ef3cc7305bc62ecf90c39ad8d7d"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "88ea366e5a0a11aed26d0b80258a1cbb"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "de7a58af0e5e57fcd0e40c0f63673de5"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "410c89ba3739daee54b07d69d696bfa1"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "460bf8bc7c68c88b5869e255313e769a"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "a391fa77bcf1b95fe3822f289d954e22"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "e47083a5f2421bcccf78101bd1e04fba"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "5a181193d69fb5bd945f57df2ebb8c17"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "4dee7050b834116fb424ed7d0c951c92"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "3d3324bd1fec2524b933b29eff295310"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "c1909f6e3d242e7854e2ff10e23350db"
  },
  {
    "url": "categories/index.html",
    "revision": "af40e8b37f910135f3db1f295d342f88"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "4d21d967e6026301001d552ece3f3d95"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "7243cc803ffa4ce2c31f38ea3d3a580f"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "8dd091650d001d0bad23506013c9f2f1"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "8a500feafc590d92173cf5001efae375"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "0ddfda26402d738c4eb658b3b25eb966"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "ee4ac2323b41e8c89a374471882f73fd"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "484654bb031a2474bed67da788d7e2e1"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "ee356049019dd0eb1401d43d328979c7"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "53e6b4838f12b1888b9dce83cbd9a634"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "fc742e6acd832f703304bf6b72706615"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "5648ae9a9bacffcb720ffbc19cdfed32"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "f1a0a4aef70ae0947b895b1ea37bfbe5"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "f5135afd353fbbe8333ad7b052ef48a6"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "66d65d6d04dcc44b9fc121b4e4045c08"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "87cb3db479fa563d7a3e48da57e0f6fc"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "6c84e990168ed4f6b543444ead4ee5a7"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "0d455800ebbba2bc5f5760b76d3d1747"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "1b997c1bfbfe1c9d77912c5ce10019c9"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "de0820b3204aacad344d5ad67602a3ed"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "3df618c5f36d1f551b8dfed5206564d9"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "3299ce21c79adc651e177fc5eec37a9e"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "8890814438ded37d79ee455ae45086b0"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "57ce61117aeaf3b4418f1f4698455cd3"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "27a057fa3dde8599c0db5e344644d7f8"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "a9c15a6b40fa53c993b10e317cb329f6"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "22f7c535aa78ace26d3723ca604d2221"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "5d6cdb315511d80a4799d677ef31b390"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "16175e99a1bf17be3f9752f4cbc3bea7"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "ca35cbc51151e7cf0084c523e3cb49c8"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "0407735c016786a2d04de3a44e9acb4e"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "d97d5a99d4552246449a354cb7421fc7"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "8ae090cd357aa5fd6dfd8dc7d2c9ebe3"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "9b8ebf35202e929177acc55297dfed6a"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "8b1476526a08d74fa1740fbd887780b7"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "3ec271d8502d3198ecefb56539faaa60"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "8a98e43948c1366b3de59c936e763f06"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "4c1fc2b3b1e910b8ac323aaf9d53f605"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "a404b4f48e6c45bafcf4869aa7a9d7e5"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "ebe22b9d8219d3a61d15b0b94f665690"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "bf432a02d820a8ad4d1d28d289a29c45"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "ec69086fedcfd66f3bbb192bbd2026b9"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "63e573e3415ab0b322ab982b2b949e2c"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "b2d654368357afb15c52e09ad94f244a"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "2234c7e6c0e4bed0955bd79691b18657"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "d63ebd47c20375b82ebda4423c58358b"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "71e4226b17079dc370a8591cbd6d9403"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "4dc6558424460b21b27ec513b6f25d2e"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "95210a6bd90b7f6574e415eee460a80e"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "52b6e287066583ae0b10184c7db060f1"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "29c5ca597233a064e0312c6df1678369"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "2787bbb131b72f561412abb64fa78420"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "38e735c070f7176deda32ebc9a687d09"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "942c54697d4d0543b497a9f6a848026e"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "7e6b742714ffa2fe2f9fcd9d58f62652"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "9751b4d73d39d962fa195301f902fb73"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "2be9427c75766344cb998691d1553ba3"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "d5df1eee4660e8c36e17a76e680fc085"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "6c602f6f0480deb74c839ade8492ceb2"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "83c1f533e8aaefd5c56b71b9d737b532"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "151dd135375f53f010894ae7dc243a0d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "e7d73fb01c2fb38189569b6a30fbe623"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "449fee621249f73bfd729c429aed437b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "3f20bae6a09dab715e00e07d6afb1f63"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "8fc2938f4048320d296ab41b2dc81623"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "469d42d49bd05e457080a5f4246cf297"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "061dcb13016b338faeac549ed8971a25"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "6d73b59a8609a1677419ac08ef088e29"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "a0633df15c57544aef40ec11574b9aad"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "6497eb74bfa49b2e2c9481cbb7b861df"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "f0fef40219009e25a308e50f7d961a39"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "431722c8415bc7bf30a0d37603bc6aea"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "769450f5b4141973459f75c60a03c4dc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "2df9cc65dc843e057a9488ed723b27a0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "2e80b20c01bc9055def2dd1205e5c6c8"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "2d7eee5b6d22064dba85f4c39510ccf3"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "b972e157d2c9edd5edac383cfff428dd"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "e678488240651326e7e3ef470d4c0bdf"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "b2d73e3c664093d881130c46fc98c7ae"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "3e8d793f36a28d9146c3596052dbf676"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "27e86794b8a12ab31dc2e3f6b148aad2"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "39b2b5c5db4b7211159d3be06a4a0a6c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "d6d72d4573aada935a8781e2a4d4e851"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "126ca0ecd1d537c1c55e479cdda712f1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "59fcc4c56084d13f8aa017e4dd2307f4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "064bff1d4ad52fdd8c343111dd2d7a57"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "dfb1a33bb6bd1cf5594ef356e7bd53d7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "0573af4e1650fdfcad6cd7e803e5ccf1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "c1bc7657ee7871866c676c0f924b314b"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "5602302d6f0bc37d067192c6206a93a3"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "c78d0b2341765a72c01e7df7730940bb"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "b18c73aca05149dc126a20a77069cf20"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "71bd99441b46508e7959ad19fdfb3a50"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "e7172e5a3cfef88a190c9357567fac58"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "96757b1ebd5ce5104df488191d7a31fb"
  },
  {
    "url": "categories/java/index.html",
    "revision": "81181e380e472325bd81884f49da3ca9"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "f0b4d083f59406a6122ffc5e0b8241de"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "eeb4c58cc57c60c4463e11de5bfbe962"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "477ab07f99f105289b42ce7c0d35694e"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "b36f163a62f0855c0395ef3a7872d43f"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "5626c8def58efefc9981714cab55f86c"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "e4ed7a26016c25fecc33ec86063a1ac0"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "e58491f008bbacd37aee4e993830539f"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "0a4cfebbef54a6f73cc3db6ea557ac1d"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "5cf6a5dacd204faaa8d3d2ab05a70ea6"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "91a6954148267f7aec4a3c7e374e32d2"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "c8ffeb55c3b76621dbfa1c9e58af257b"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "6803963366d877c35dedd6c01cf435a9"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "dad2f54797d6cbcca2e8b2c48eaad993"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "a071567eaddb97392bd477c1e530a2b8"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "07be1d729941ba3b7c1996f25b29448a"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "f149597cdc71536c4aea8cc5e7da48ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "de0cf37cff8436f8413e13142e038600"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "92f2e36903aff3009e559a2ad96e5ef4"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "071073354c7169f32e37d3ad6178f6eb"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "cccf5af3d8def596a00ce0175a8f6f4b"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "1bf3793986d115fd0fc59ffabb4bd470"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "b2f323c728f298b48f052bc7c02e635a"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "7a778db5d0e3bd79fb65bb8c1481263a"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "2ea77ed83749d97d579560da47daece8"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "ff8ea85ae16977d268bd61b9b90be7ec"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "73f2213c10d728a5298eb42882cf4d26"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "308f596479232272738c8d09cd743d05"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "32ea3762f72df9785074448fefe7e6ee"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "14fd1e45b5d74cd877299614b72bc911"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "948dee3615e04a7cfee318ff2d36ce11"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "62c7fbff1540805355fa5a45e0e1ffba"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "057836b7e751aafa27639d64236ab6c4"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "bdec823c622c42df5b8122c5e5a61993"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "467ea9f1c03b9e236032f9da78cbfeea"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "c6e5b823d8aaad56150b84cdc08216aa"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "3ae8ee61f585389cb797998ec617adcf"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "cfca11beb853c7f5520f8aaeb8778ed1"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "f817696d8f51270e27f873d115899e41"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "91f215132a40f64e5735e965723ea035"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "4a2653ecaa4740b64529473388ab6883"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "4be1ad8b7429156cb2a4865540977340"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "dde12d37b7f7e92c0d12502465814b60"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ed3ee0bca730f1a3a0d1479844018332"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "262453cb7e3a3c242a3a0e477d265c70"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "2dbdb86e0bd836f2b9d8c988945e1de8"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "bf1d24b96b914f676fed213c40c01694"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "142e8da64da3257c893119d6cdd7b578"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "558852b1c84f19686c077b8aff320294"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "c07a171907cfa861bf1710c1b02a3b99"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "84a291cd5119b724cefecf6010279a69"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "52fdd29d3179322e5c3c65a2a3f0249d"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "5da95be7de4eee48c36ff183d6e392da"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "4db1a72ea423260675516283e245bb40"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "21f476607b965b6cf8eb3480bfb2acb5"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "b77de5ab338d85c1613362c0a6a92993"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "8b3e9a1ee465e34e28bd7b175e3fc577"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "c52acf41c2807be9fa980cae595912fb"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "2fcf434e20b82bccf54e9ee1126d7071"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "7abd70092869165217a397f81183d0fa"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "2ea2e7d0ca22068a4fd009ff282d68e2"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "f3207e0aa2e1627108cf18d63fb6298d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "2a31e838e8199a27c07fb324ac4aca1e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "d420e95646d78d6abad209ca38fe5ad3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "4da066119ec0b52286e85862d01d1359"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "f6f6bdb9e2ed3653ffdcfd15f097919d"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "fdcd38bce4028be52ea68eb8db084eda"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "d46cc17b1e32f60f48d6ed10812882af"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "14b8660b5f9e34b5b8cedf84f7bac952"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "306d1a545ca7c0b20888a1f6043da18d"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "fcd0049860878fc25dd2bf06fe497cf2"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "c8c786bcdde257194ea950f8f8d9631a"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "bf9366c06d50f8edee579ea87789d0ad"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "eb54a17e3a32eecab0755ae47e1ac003"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "f93c3ccd3aacc44ddfb701abe000af0f"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "c0f63b823424b1c69de2a330169d04e9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "ca9d10b61580622b7e4cde3ee074286b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "db902f519e3411f56738d5d77c96bfe2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "9cb6ca4193d6fda4486ae90a45d540c3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "8d66db7a3f8cab9959e877c14a83eca2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "d0171bc82d882c7d87985852ec7ef6b3"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "00f5a1ce5d1ba702ecabceb99cebf883"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "108e1a4b6232fcb661a6cc4ab3d9a38d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "e582d59021143dbd64bd3934bbf13139"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "46b8a7726e150e0e8c5c64d26c74fc36"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "44df946dc3c54b02ac40cfe027f4ccb6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "0d75e98049caf8c173e07e8ac6f342db"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "0e1a8c9587457a05d3ccff69685aea00"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "22c329f89c9ec21a58c1dfd2cbf3df89"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "6c7db4d5580e04f24451125fe5e490b7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "69d252ebcf44afebf926464ce236c902"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "61237daa0c0399dac376404f6d508dd6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "ad9dcb3fd7dd797261ac4bd7d899f899"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "7888b8eb0cd7b342e7cd1ead3ef8a8b3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "37fdfa0517b0f80af011a88b94b5dd14"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "6b90f1898599e0b4d7ba58ca850e6ffb"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "2355854bf768b230dc941bfc20ed587e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "43be0128ee6b14f67756ced74fa6b6c9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "e98c8d14eba23fdf549fdc948c5c1c52"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "dac888fe68d34268979ef6b0b13e00e3"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "2993180690b0e25b0e44dd4b8155c4b2"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "49a32e58115a596667e70b3c7a4a6c3b"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "ca4a14f4b278ce47774e6aaf2519ae45"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "a78641e8e63657141a7ced0eafc0e3c8"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "59bc8f2241d7b36292df608a63180940"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "9877593a5b6c68aed2a76d7f0b20a993"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "bc62058b97a4e593f80af96b925900cc"
  },
  {
    "url": "categories/os/index.html",
    "revision": "23a9aa672aa8e8104fc086311a3326d7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "82a70c0730b6a4aa3615d4830f2c85c9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "d3b1107f518aa2d0d9b43553a254f2f3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "364a32211489dfdf2dc4d31a0552c177"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "9d333a1c9a6879d465d43f1fa21411c1"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "3f50b81a0a706c9750d5d2230cca5abf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "c632d9bd13eea5021018c2fec14ca18d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "3e3a9a0a5bad97a8dbaf1390a8b12efd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "da1eb1014a485ea9556af3151b7ea286"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "52f5b8e556df5ea45d2f4194d9d69f5d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "a21b038d54d0098f2f9ca36dc832d144"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "6ed618f51e13979b8b21d6cc4dd90534"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "2bb4774ce58faae2b95f71b7aa28a2c5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "362a3a3fbe95ba6f23c431e4dbea4fb2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "27e239f326ef567e20ff3d68ed0b5764"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "06df56775025bd963d570471d1eec7e5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "f1d015ed460566f370e0bd05e13de79a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7759881b9e9ec84d90690f9ae55d099f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "20fe3bd096ea20a01e85467ddad09d32"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "30d3621d0ce835a72a80eb5fb6908b59"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "434092b7dfe37170de00e94c4fa69604"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "efae35b2e871f768f4c75f9396c2d32d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "f3d2c789f8e0a05cd8f8d229ced90019"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e913d91626d4373e732351e0eafdd241"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "eb45fc13a10594e1ed2e07c053055bc6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "ad10783ec434ff91efdb28b2a6c5574c"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "b04bd627df09880c8232bd587823d0ec"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "c3591df346dac05b85018f48dd23e604"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "d9ae6546ecb8c07e777fcd9d5a655597"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "2a1aa495db4d7829354643db76ef9913"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "43fe5b1e51fb7a28b1209ad63fbfd0d0"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "9a0a7ed287d73a0aabee2446418555aa"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "71f499f67629da3c5027e7b759fbb2c3"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "87f130a2e7b84a08fffe913e986777fe"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "201bc4db389f506ae68061ded3dd8d82"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "66cdc03a6ca4d9785c3e82daa3f696ef"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "b1bca665343a62b8c0cc90fc481d0b25"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "fc8d35dc55b8b5d792e9be761fbfc017"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "f5852a97161eefec2ff18f714f9a214c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "69a87c971bcbab82764ad998af61286c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "8ae6bc51aa5ea889b6ea31014a4874de"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "925e8a88bed90dc69557bd5b789cdfb7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "3af283234008a37a449fda69e24420d3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "ddba39a3755f50bc095048b918675e15"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "9f5e587352d990a80c741785515fd85e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "dd61b1c9fa7f800c4cca8f70e2932569"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "f9adf4c496be55e2d3c317fb16a01d76"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "d9c64030f2bca705789fb5c7b1592a4a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "75b7634a8edcb318d38331ecc6b86a57"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "c5d09f09d607c78c1794978aeec6492e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "d45792e0b305d595d351eaa751c86f49"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "1a1a4e64ff4250bd5e69ae49321f964e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "a8156f882f2fb6138cdbdd0a7e791125"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "6eff97e3bb8eea5f91672f8deb52a448"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "4fa30d17cb09f39b9ed47f24c263fa38"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "c91dc7156c9be68d578f9ea346fdd4bd"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b4a821f34ff64fc1e7108582a4c3f9ef"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "c23e798505bc34cf22e19885d4d5f0d8"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "28d272804bd92f5fba994d69f061d20b"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "b753f1904f257df4174c6c38fcc91757"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "5b523c6b8e3e45b3115192292b98e6ce"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "90846ac510aba42500e9c9045c44f038"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "4d1956e3f62dad5b9d307e19574ab60b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "94055da8522ed1bf9d4d4dee814e9e77"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "6631730323b9b30918a28d9ef8cf72a4"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "7c17aa28879b72a9b939d426df25021c"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "849226790c4a5bc8e99dfd437771cf2b"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "52c16171c0c2a7f58a17204591a672ac"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "a1bd3de4b319a380ee654fa7972f6e5d"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "89559c12a5eed6d0d91f22b06be81f19"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "194dd57dea1a2bacf4c89df8229cb619"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "58b0c5455ea9df4598bfcf78804d0810"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "1416d82d466ceca474157370f9d96c2c"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "188d47fef19288eb704f0a85975bb6c2"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f497fa39a07d390e445091e29856986c"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "8bee536258d5f78984e9ef411df79662"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "485591718bf0ac272c71d2cd25ff795f"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "36d6eef8d64979594b50717f917c4c72"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "3d83ff235e6be48d0ab006bfa2393899"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "e570b41c7a54317366c9eaa712270fa6"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "0c2f9c6238873548c53dda638e6d5e63"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "947ce5bbe53a5ce1c7cc578522fa41ac"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "f4059b22e5851668bf891e483007a1fe"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "327823c1bc3560f366b5ba9052c1d71b"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "1105559665bdf1ecc4274a4b679861a3"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "10d388f0a7c7445359e029be62a63b0f"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "caf6317d2d16e0fe4ec31d1f566c2a56"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "9235792a07fd8365e1e6d4f6e3758469"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "ab985d1e2b02fc50f7c8f653e39a1a57"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "de40afe3aa054c7533add6e81b2fc754"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "bc9694706dbb81a038a3087b20dcbf36"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "bbfba313fc6a483a50595330b56ac038"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "43ccb33c7a7ef5f003b5eea9101ff4d7"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "ba7fbd4314262e8e1b0211e3808d6424"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "8153eec4c4e8314ff3c91bf9960e613d"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "a35fc9d479fc60be897cf3cd38fe23e1"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "6fdd5295a0fa5737e42bbb6a837329c3"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ec43655b96ab9168c752e881508d3c39"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "87050fbc05f774245b5bae3884dce57a"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "2c27de5446f9ace27d698b985a675afb"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "7dde2db24a3b1d6e54bd436f6169841d"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "c0a0152736f786c2e0df060b9e16fd98"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "2e0c7b293ab97a48b00b6ca51ccf1bd0"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "42570f4b7e961d5f8393fa5ad132874e"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "d8541f8e989c19514863a7cd16642a2c"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "828f110fc9ad9a36c313d577f93557e3"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "2d35c425bd3d8b3766246c792b99c119"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "ad7330f30ef2a66eab5eb1a436261f3d"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "fc0d13a750b1a742174f788eec0c9bda"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "0dba5d40d10c7229d1c96cdfc9017a6c"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "300f8b66501aa2947da153b977d5c35a"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "5a4280d50db51e2815ddfec2ed854c58"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "ad228317e99434d7b87b26793bad7c7a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "c12ebc8f83662d25ceb7f3731c5a8a83"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "4a2bfdcadcf1454aba2baacf5baa374f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "fbe0de2c3125d8e46b66ee3be1036918"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "541cf0755b6e8e49addb4193e97040b4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "cb645ffe7c4ed9b15796ddaa41934b46"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "d1cbdaf8f7465e4a532f7360d7107764"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "3c7a1e990f228323744190f9c18d8bc9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8b05122617229dbb0c9324427411e74d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "608c3db71b2c40c03141b265556ffe7f"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "13427937a8ef4b4ad7c218b0081a75d5"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "02f86f35be5403221a6dfe09b16983c4"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "d342b908cc900e1043b836934ab28353"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "99be43cfd95aa780384920710f67ea07"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "a501fb85f0e630b3b4975b5a98a81fe1"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "7bb5b850ac9befef2bd5ba85688db3d4"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "967a45bd64067c53ecf5640bcea3218b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "3aa430cd13db473463a4cafd30140932"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "c58f98bdf9a4434898cafc98db851b95"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "fca3558891b1ca0a13e0d0c0b51daf50"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "4cb598ec7eceb6349c5074f8e2727a73"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "52ccb75d5d3084347390fa0ce4ec74e1"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "2c6c1ff356d75b0a63c00ff7d4dd6f5b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "c86cec1a77364aebd01c8f6b3f097ff4"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "213a48cb0e452e21a601073e60d44d6f"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "f6cf50d2eb041df7fd8e8fc60a11efb4"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "c57aee404843892110c826fc6007dc21"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "708c5d905a32929be38c9b355364602f"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "882bb10668764a410dc7f89eb5bd5a9e"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "a8de1b1945a18fcb394f5cf750fb842e"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "711c8ac91b82c5b37bedee177613e86b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "197ec475a20dd82870bf5c6e91c34282"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "b5e9dd8d2a18a45097852df425c3d33e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "0b5c9fbd860004c70d4d5031bd82c94a"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "4e76dffc2a205a864e6b412c67ef77ef"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "88b5a6f3b59420deafff8c7b33feaef2"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "46c29eecfde03c33d18c8f4ed65f28f1"
  },
  {
    "url": "categories/php/index.html",
    "revision": "79c2b7e11a9b2bd18efc851ad239acdc"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "81f8084256f282772d6cb46b79f44c93"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "bf6273b78e06f3d23b6d6ff20510ba26"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "69d01f2b6acf055d153209493068ef8f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "5c3f0fc971b50c9d54ef7bb3d7773c73"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "5530f78339d608e548cfc8f079ca9ca7"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d638dd8546057044953f7d8451a7ed14"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "de7f5cf92ea002013401025423e35232"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "15689e5821a41be27c2281babaa29323"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "cc5c9f0c7f3d9497a95a061e1d2ecef5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "0b8653daf6c23686a9cf75576fbada65"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "d10bd240f1b5813d456699ee7b2cb4b7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "95e06c276be6fd2cd7c17891789d2555"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "ebbe354f2870d9a63a1c8bab1a735d6f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "0ee0b1e5991bcc8e0bab3f7a0282c4df"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ad4a2ba61bc08c8ddedf247855f4373b"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "0887b69481f9e482f38479138e9173ae"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "6711e0c9131e524578c803f77a87b274"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "079c2acf985b0ca9d1836fd7a2650dce"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "6d656384624eee6e67e7d6844f101d69"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "fd21fdd36f0cb35501081af133393473"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e54e82556b1751a147f39466bb6f2f75"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "20bd729adc33d1903e75c300fb5f7ace"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "88177d2e85ce91f9676f7bfa1a333b91"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "18dce9bc5b0730a5554c48163a22fa55"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "5f342e84b857140f7c43f549f6856f47"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "ca5a6fbfd13ee678830cda74f4726f39"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "c5be1a081215ac495ee33f750ca207cd"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "aad9929c564df34d6d79cc5c5ba0e266"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "83f323b32c15ba902250e2b4827adf86"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "a0aa68af0f512274c7d2867194d35d6b"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "0f62cb9aaf940854924769d9bf163a4b"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "216b67b667a7bc6dbd647d149496110d"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "c6f21ca06c15ff50f7b1e425a8d48743"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "6865ec01920a3299f13fe3c4cc7a63ae"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6a7f649885d273d8e6fbc915583e7218"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "112b9a705608aea33da55f1566f9f76d"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "df9d00673a384599d279a9d89750101f"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "6243ed3b9f0fbba802e9c33464c05dcf"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "ffb3c8c0b3e28e4093d24a8300381446"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "8cdf00b073a693b61023f81cce87afa2"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "29548413a755597829530e275019ef37"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "0516854e0f583328cc847e2c767fdb8c"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "1b2c24638bd26e5cde96d8c17d28c4af"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "92a90b85e4548e8e8b8bae8dd1cfcef7"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "921ff31c82a32fc5118e5c9ac3c28dcc"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "6497368778907433808cca5544efe9a4"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "fbc81e800773571fc866973f9bbc7bb1"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "847e2206f06a0761a2b383dca3562793"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "a950f4af44b3bf61d69008ff47aa35de"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "b8c4fabee4674173cf1449d1da303d08"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "8fe545bb11588db2206240f4b6fb6a0e"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "e827579c21bfc2f3b7c7e1172c1b6de2"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "16425c3b14b4df207796d8441122d263"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "69bc32a1171276a0df2d569608ec27ab"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "2351b5c96655f7ade5bfc00fc84cef1e"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "3d5c976a70695398c71e6ea94f9ca5d6"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "3c08441c28160b2c4fa7e47ceba91370"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "549702dd5591fb0caddc737ea22a2b16"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "0cf7ea65b5228ca36d17f8560cd037d2"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5007a342f3faebdccbc328708ded5201"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "96e286c8be7097c06abd3472e9b79f92"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "83590074e37207a94457c365815e9d72"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "44774b8a66d3f015b17b2724bc9c342f"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c0427d3bea59f785508a5d8a000a29fa"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "0611d78842160a0cb36368f9bf76f200"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "2ac8ab821f5a6d8c5c47367dba053b83"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "26059f5be917053737f074be861628c7"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "3e81304ba0872d1c3107a4968f7dba02"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "3e8929282840876763d9583a9d662185"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "486643bd071dd37be0a8c9efcee73dd1"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "7adf12a76054b07c53c3892380b1a60b"
  },
  {
    "url": "categories/system/index.html",
    "revision": "fa47554bf18da6972238f6aab8fbb5e8"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "5b9b61096afc87453cf19acdb766078b"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "e580e0966fd196299dea4aa4fffac775"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "67160f6aeafd740655689b3f0aba0651"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "7926448b546e99864c3d153ef35cd00b"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "82174c476bdc98fefbe303023816e74b"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "451e8112f96d54d080011c6cb28559a9"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "04659e9247719c7e91380ce942192dd2"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "24d2bb3fe339a10e41e65539922e9ca7"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "202c1e1c6d287d3bbf682843a2ff5eed"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "f30c66662c8443125dd32f96d4802602"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "f7383a1285e47c465d1312d433b6fe8d"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "2f5e2d4f9b4e7529f61404924b3ca959"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "29c4dc62645787b2af694debe7a311a4"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "43560e8fdcbb37e8e65e9165abb61dcb"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "6803a44ba25b69f7075ce941177308ec"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "527bc9e51d5828dbe51e8bd8a1d15574"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "cfda38ec212a8b3d550656a71c685a1e"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "d15b9e2c8030493c03ec562dc45a140e"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "99e99525fdaddd77924feb5afd577f8c"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "8c7f7d61578f33cfe3dd0f0bb6e600b5"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "9534db50840c1a0b768024edd59e386f"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "29fcaadd92c93a7b56cacd4183c4523d"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "c32e259291c9f6bbc743c9e3d163f60d"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "56482bb38bfcc8436bc04029668fa8fe"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "6d86854d9b513d2b73b6848a4d0643db"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "cac989396f279735bd1e7abc490901f5"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "fd341c9bab13825783d24a3345e2744c"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "7aafa2498479290aba13e9cf7339adde"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "9c2ea5da825ef35ed06c8feb140158f5"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "0e7a5a3e7b983657062d3be346698ab2"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "84e7a22440660c55ce72003fd4e0a599"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "272a707055ba3a8471d9f446ea78eb84"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5c7186b3b6c9d3a8da49ef0c78926ca1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "df968f3d62b6fe810a397a2a65a37abd"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "6bfc6f10dfd6fc83e6cf3ce28f47b9ad"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "280445c357471d9dde322cad3a767d88"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "84b5a1f21e7fe53ac438763115782686"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "c764808301638585e074c405826f982a"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "dd618c314e73c6982e40b66bcbe4f90e"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "17832cf1edcc3e36014183ab7b91614a"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "9337b9d78196048d9c2500f9a1a215c2"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "c5ad7a8b41c2d795982bac7e57c1ccf4"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "849b3a8e30b5953a5f386fcd6c41296e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "a6f93a0bd402632ffcc35793d33d5a14"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "9374e0f54dd993efc81671cf9bb9f54e"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "137eb9b2e1ba4261b802c43bb5963270"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "072ce83ac71ce7dc74a2a90683346467"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "a4c91280e2ec2f3e65a052e36adfe086"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "84e0ad196bd68e7114885cd63c03bab9"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "f0e19761176d581dd09a78228b71636b"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "313e84dcc9da4c5f3f7d141fd94014db"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "9fa385d1c6d5819992904a317cf529c4"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "e6b07f09dd471e0845cd83d686d2608c"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "efa765b087f5e88c4e59de604e088295"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "d9a06dca011e6cc0ce7705aa593a45df"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "a442389dea00ea684ad3ba60639be8a7"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "2e97db4643970214d2b26b02da251c98"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "41a0492811d9d08be1d7143f6764a412"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "c61ceaf9d615fd3504abb54b9872728e"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "14200bd19b6a43f3ba527ed29063799c"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "59815575941328f1be5cac7385cdebca"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "ebef78bc335b4c0355d881b959ec27cd"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "d57faac35b6dfafd6e4411ccb573fc75"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "ef426d6d47e9ac7e8b9c459e924cdb78"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "3b537cc2d0cf701dfed809e9b923f457"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "666ec20d763ec88a89859d618e7dec28"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "890c13767a003edf4c33a03852eca79f"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "b44972fd55b3b42e977c98abad5e6ac0"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "0118b32c1a11368689caffdd21c5f4d6"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "48b57a4fd13d06134ec55d3dad0ce60f"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "1161e8a6224249f4b4974a4ed43ace1f"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "16d7d1d44925910ff235efbc2fb434e3"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "326ad693aff31bc6c3ddb5f37b1b3416"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "589f42530898e9da02cd70f4aa6d1dee"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "b0c51bb4aba67481089690c4aa21a7d0"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "2f11f149e8e88c95c3f0b982f3a111b1"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "47d939386a75b53fce6ed72ac04aaa96"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "61742b51721f38e99f239c1bf0f02797"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "e912cacebbd01fa19aa6ede6a31ec946"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "d580a458bfbf1f38ab9c6d7b566ea9f7"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "b6746e574daa8ac29b50467cf7e58b89"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "350dce6d3d92797306bfad2f9edf1347"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "2f50ae3167564a2167bc8064f3b2ad03"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "34f3cebddce7a3bc894a2d49193714d5"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "f5aa9536f362e00c3fde97a65de3ef21"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "2a110b2ea9587315139c0fcb8f2678bf"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "63194f1c2f570372158f0564a5901d91"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "c5f1b23cdb5625150266dfb63303aef0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "d7d0cd9fc25d5285c5b52d92b76b3331"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "d397750ce8ccab0c9a86ce310e56c5bf"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "4ce0695cee9073cac98656bef59b68ca"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "ce54d895bee2ed380f8ff743e2151076"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "2a1e177776f38868af4e50c9f49315fb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "e927e86a9f35588a40b0699ceead0383"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "a4331d851d4c9674aebfe286e440ae0d"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "7b00484bbb0ebf47fed4fbce24583564"
  },
  {
    "url": "favorite/index.html",
    "revision": "130e15a43d83e75b735d36904f523aa6"
  },
  {
    "url": "index.html",
    "revision": "3274a36e1bd50ec3805fbdffe47e740f"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "1a4bc8192ac1ee5d42d065bf2e1f17cd"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "0b7ac8852095469e850bc70e72050585"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "89c1154084861fe4019c50c923441c69"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b2e1b19c4ac5f8681ccb21176d9cecba"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "a162ed2a162a2dc40ebfc4b11027d6c8"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "d1f70f80daf1a84816dece3e4e1de990"
  },
  {
    "url": "note/index.html",
    "revision": "3dca69b2d28dc2f7f8a2e3b8a370f8e2"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7c9f43f3c0e82a7147d39bf36dc9c218"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "328fcbe1584bfb05c1d83869a18eb768"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "04719f2cf744088cf056373fc64e2815"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "f34ff0fb8167ff96db32fc966979a949"
  },
  {
    "url": "share/index.html",
    "revision": "abdd14e02c4d5e61f8e314d91f1aad05"
  },
  {
    "url": "single/about_me.html",
    "revision": "c09937e5b78406306be10b0b09112adf"
  },
  {
    "url": "single/all_article.html",
    "revision": "ca13c420f62b213c2060787af884f416"
  },
  {
    "url": "single/welcome.html",
    "revision": "1d1334dbabfba73538c21c7b64828e8f"
  },
  {
    "url": "test/index.html",
    "revision": "dd7872c75c90604cb8989c12d7b4a5ff"
  },
  {
    "url": "test/test.html",
    "revision": "4abd92cb159c0a49ff3ffa15021e504b"
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
