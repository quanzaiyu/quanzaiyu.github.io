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
    "revision": "715dc16c55f81fe0ba7166f5e6dde072"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "4a53abf6055ffc53748a8bd2a3495253"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "6d50c67ba58c26c8f2582fedd76152eb"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "c3ca66b72747c250f818dbab7ccd9126"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "54ffd5ad25ee88fc0c661204a16b1ad2"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "54b0bf67b4bc49a823686bf8955d5af0"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "c0273350cb218b86e513c794a7cc548f"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "67089eb67a0a8956a3b8763903270c3d"
  },
  {
    "url": "articles/index.html",
    "revision": "4b0f3d95b2dfe786a540187ec7b9258e"
  },
  {
    "url": "assets/css/0.styles.d26a0eb0.css",
    "revision": "e3ffb476daa2afc535d789317dd2ab68"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.8d0c90f4.js",
    "revision": "376b598e6737076e3c9a551b7342517d"
  },
  {
    "url": "assets/js/10.1e044dae.js",
    "revision": "d141ef61eec0f1b70f9ef125ed1d986a"
  },
  {
    "url": "assets/js/11.a456cb84.js",
    "revision": "4331b3b1a240655d2dff4f51bc12731d"
  },
  {
    "url": "assets/js/12.1c3ca95b.js",
    "revision": "d2fe798ecad61fa6794cea712bbb492d"
  },
  {
    "url": "assets/js/13.c4ea4bcf.js",
    "revision": "622324aad85992a4b1fa53176f650c9c"
  },
  {
    "url": "assets/js/14.b1abeb6b.js",
    "revision": "5040337122a67521a14c93ecca904886"
  },
  {
    "url": "assets/js/15.c61be471.js",
    "revision": "51d192ed05c07d5cdd47a3d2a22e4f93"
  },
  {
    "url": "assets/js/2.d91e25f2.js",
    "revision": "896a1cdc7abbf4a1dd08ab9bb3c72ef4"
  },
  {
    "url": "assets/js/5.efabbda7.js",
    "revision": "721e2847c1d55da0eb2424ac6cd74aee"
  },
  {
    "url": "assets/js/6.6448af6d.js",
    "revision": "ec59d0ee468b9544019ef44cfd85129e"
  },
  {
    "url": "assets/js/7.f3de0c54.js",
    "revision": "6cb4ca862bb652f3037f3fee9ff57ebe"
  },
  {
    "url": "assets/js/8.98dd9a26.js",
    "revision": "e9f2154afb08a3d6c7f8921cd4f3f870"
  },
  {
    "url": "assets/js/9.3f005558.js",
    "revision": "d6d0e2648514ed5ebbf51e81873ecc48"
  },
  {
    "url": "assets/js/vendors~docsearch.26415d36.js",
    "revision": "ab7f7ee59d8489d88b7a9dbe743d9999"
  },
  {
    "url": "blog/index.html",
    "revision": "fa55027b2c194170bb63a09139389b56"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "3dc107e9ad2910bf1dc98412b38f9767"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "4eda7ba061b19c3a40d33d3c17833d80"
  },
  {
    "url": "books/index.html",
    "revision": "6f15bb3f6c588f798b26ffd40dde9d37"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "f5b91cc8c1354fd8c6d009adf133fd56"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "12e89ea53549305686291c6aedd010cc"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "ec4b21c738fb67a2b64ecb21a5c05627"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "4144e5f5107f3863c4a044eb9b46a62a"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "4d294ed0d8b5d1bbddb9426fcdc6756c"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "930f77b494e41fe27b5416e9d1feab72"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "a84c7ba2ff34d3d314ab2271b1a6e125"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "3bbf2e32704865606ece82fd57ea98ae"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "3c43f295615ae1bf42c89d43a783c895"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "3abd29eb112ce7d20bb662bebdfa4a1a"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "0293d97ed9ba7a6937081904d138eab0"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "34c995b6f51e1bb8037eed9f436b0d83"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "490797a1a7ad66e17009dc0841ed0708"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "f5a36c3aa4b57895ba71ad7a73d9cc92"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "b05585c4ca7a1c5bd0b0dc3de63fcb19"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "0e412aa9ac2b1c7bdde2e652d0cbaed5"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "07921736fd4701b46f40911955f99d0a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "a67b9451eb4fee7378bbae5e3d2ae1ae"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "732878eb2cb6a2db22c177a213a349a2"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "b1641e1854db4b84f142182bf260d5be"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "a8d10ee15ded9188cdb388cfaed28046"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "a2d2d35fac17fcb00eb6200e508d977e"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "3dbec6c2156727db97c8590467cd4f7e"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "91de7422f98542fa543191513739de18"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "c5aa64ae8e225d350d27a34a84c8b716"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "318789e355ee83e25c7beb11961c3f63"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "9843dd2d95042538e4d4338dd2ee0dd3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "7fbb30f3c51decf3c7228f61818b11f3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "3313cc15d2015230a796c8797df85e2a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "4f34c3cc8b6429ebfbc605c64ed5d8d1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d79d0e4de110939a48acb62f3441bf51"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "524dc66a1061eb555b4c13845dc37c05"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "3a40a64eb0ceb4665af5c4265732d03d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "2256e84b5a1875223cc4642e6f02e545"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "42a009eeb04c784e1059279c1d09eda3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "cba95552f843e6f4cb0d16509b980abe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "026a2a75c688807403e47e7a4f4e98b9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "e4872d3ec58aff4bfd45fbce0c430e10"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "1d587ce87c69e79bcd2b08dcc5adafa9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "a57cb0f28ae7f33fc306a8ea2583e362"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "44d3c140ee17d73c08568ccad0cbe192"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "84c5ec348741e3e7b955704f5aa95213"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "6821b220f8fcf052590aa7b0e3ab8cdc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "448fc447c812e62a09938b000ce3aaf8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "df041cf6b347c8ffcc76064b33950367"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "6b71164766ef3afe69d92d6e53f1eb3f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "3b8da9f360d3e6188ea21a41f707b9dc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "99b47d57e133cc00bb3728b81f68b44f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "e3b1810a9771a13bc54a76678c074a75"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "87a3522d44081cc3006d57dffb2c2cd7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "d64958f65b0ae9d56fc71660f0523ca8"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "5004913a874190eb8309a913cb511078"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "bfd1013adb71097afb2ffc26981fa5d0"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "e332a071f9b6ff7c6bd8ba67d3fa94f2"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "02f7d9c5d42b7f3288faab76b2309c4b"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "209309936b1fbabda43a5f35c45c3f0a"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b1310638baceb76f781cf0c26919acbc"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "bcb96ee867c938b02ee7daf84a63a89a"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "ef1c288faf35a95c0cffa14b8ce63262"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "4a9e58c048d33d2040f0717a98da63db"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "c0995aec40bd2a9d40b8d35848f79a4f"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "f7586956698439a7d013253d9a168be9"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "195333bf1dea748617be2f5696e6b6de"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "cad392444c6f729f42af96dc882b3102"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "66d09e3c82294998693b9ea05bef12dc"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "085d3d9ec6ab7d301fa89c9aa3e328f4"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "12e24f5c318ece4e2dd67e7e0100be9d"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "0f466460ae4beb15e5bb355e0fda7af5"
  },
  {
    "url": "categories/database/index.html",
    "revision": "83aeaac4e06be94a32ab45680c5c2b6d"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "167d8ea17f3506f12cbc65dfbac6939e"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "87bbf8ad802cacf1c638bdb9a98982b7"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "a36cebfac92c73b30973e6ffd4f2b8de"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "42a6c12f76aa7a4a6e0457450416e652"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "c3b8f345288be04e5d7dcbc383004c6b"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "f4944a7ea8152a748772b1f500fdcecb"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "275e0eb86ab8419834e44c8a82529501"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "48a620e45ad3d4a1e95f30bd302df40b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "a8dbbae6aef902a9dcef5ae4d1b22784"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "1191d7000e52a2114dd4b04d1bb5033b"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "7613f5c48e6a6d436e761f8470b6a9dc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "6005bdef01af8260ad14af5e2aeeabde"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "b249bd8fdb0cc42047ab6b7b8d03a307"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "60043e550180c20208ad37505fed9f26"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "e4ac674c5b263a22c447b47871a5e47e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "9449fe87445059c71dc43e53b6a98296"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "448aba6f0604f2d97e76b638a4fabbe0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "ccc28527a57136bf1e9da767b22a3b18"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "a8726496d9f23e32d17af527d4555017"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "5bacb74e9e7966b5dc6ff87d7436cd28"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "d96ce67cd3eb8acee5727c7a97715eac"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "74fff55a87556d52b46685c88ce1fc36"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "fde85b37385fec6f1a2feda15e2bdaf4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "82456277f0d9f9c8e1afbb86243f75d0"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "c6138fb4d1b706ebb6c47e7ce9f92fb6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "498ec072db0ff8d8a80c593bca5d2571"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "928d5942619ccf6ccc6c547e93e4bcde"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "f748f9c24883fbd8d93aa6d652e63599"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "b1ae57038f63df13149182d43f3a7d05"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "68687472fc5b9ae99810942328230819"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "35fc0cfe5f761ffb1fa57a0b99063fba"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "5707d4211b3cdda601f2ee9ccbcd98e4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "af79e72cdac58358ac506acaf74862c9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "f7299abcb58d0c807e13f30875d94cd2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "2271da00f357bcb9543ee8591bec8bf1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "75e4e8fa7fb1e1e5a7a6cf36f3eea18e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "16735c21da58249ed85bc35b7c0531ea"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "1c3cbdf02de62970f27813b36cc2d7b7"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "59fc38e7e6f2863336343466836c2fa9"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "5418c44398e11f0daa95f5e9a8c92263"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "558a9406fe13a78b3d1d2c5467e6f13f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "504bcca5cab3db60f33d75bc3c4195d4"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "40f94e4c0b5046f8dde68b74c24acb31"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "5b9d6060da96cdd50fa35825c308d5f9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "828eb8d80ba0cd6d69e0e6e1737ad393"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "4fe45db4f4405cc14b7a2ac2cfec8f2e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "5de2f389ee01c9b16ccd2976ed540c88"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "c2cb17580123fd3ce7ae8cc4ec97a41c"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "c0fb63dc8f48d8ed6c0cff75a7452890"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "c1592c94d98d9159489f9e7405f267d1"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "91a71ce003a7fd377ae67d9dd2fce7ba"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "590ec98d1494085f0109eaba3051c67c"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "b4ea14bc8ab58e65c120e8af977cf15b"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "6c286067699b9055a7a3ab9427021f1a"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "4f0dae5a7c565a268c56acc8e513a5a3"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "a6666fc40d3d1f68262079c6d3527c30"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "e8ee67433153001402e55a1a398873fd"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "04ef04b5233bc1c879271fcc77467e71"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "d40aab09316a9f1a69ea7735d1cfd548"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "771109f17bc280d091aa0fbfe1a896c7"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "1c131705a74ad72ccc3a5fd0c93bdf6c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "e4952af7dbe5d272f162b2f4b9a1bb83"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "84860e5b94e7c3a7f888b724f38bdb5f"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "981b14be55cfe611ca8db6fbde744029"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "0ba3fba8f7e4f026cd6059ded371a020"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "318185ef22f310486e1fc6907af720d0"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "1b4e81ae5f4a20a8d9e69f2ab542a009"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "725b7740ae2d7f2191bc7229ee13cb6d"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "b300c9f02409e7a863305754c710e82e"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "bba5efaf6e22b5fdda3a4b9b0eeec796"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "1b6e053cf967f0ce260f81d981984673"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "7a0ebf4745b12655a2dde4c86816cb4c"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "6a95d2687750043c1b91602324d4cc3f"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "81a7348323dfccfae4f3ce7bfce74b97"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "23fccacb6de33c4481002fd1a7b211a0"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "38b01cb03808e958d4f297bfc2acd159"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "2505200da72990276d7e46b61b42a293"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "fc189a131d76b8a7f6d07c630eb856a9"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "1033a048450a266623f1fbae315c1dcd"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "5b49b35675a6270d3abe8df436c331a0"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "99b3ce03f3987cc91adbb4d1049acd34"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "6da903d6b336523313c7160de8d73e6f"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "3f6c95e4043227a4e3570f41be4d4652"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "cd6b0dc612b00917191b81b238f61944"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "c4aac494b0d49513c1e4c33ad973833c"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "ca263c9a431933c896bc2fe5c6e04df1"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "e8a8c7c1e2ce7b91ad0669a85d2ed2d1"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "ee4de77f0042229e0aeb1f0a55ed0536"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "1e83677df437d26c2d29efc74ec1b028"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "0de7cb5b9cc3985d74b0e7a3d19a5f31"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "23b374e2a0f5de780703474657d9eb2a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "34f3c6ac98a30b5ac048a00925da0437"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "2525d87299073d2bd1bb46c3c8e7e5e6"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "096de39aba3338a3e1377ef78699a745"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a45feeea637e5d76898fc626f6d66ac3"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "206c677817e67b04b986ca74ba914c96"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "cc4a13a1f05a970bd61e72c4c2afc3c9"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "fe0625f4c69f0469e222de8aa3ac186a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "c2f57eaa10d60638e3ecfeb21aa096d8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "f7a8d2fb10676b19bb1ce43c5cd80c18"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "acde82696c1fd2fe54ba2a87c5dff206"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "7aa5e7a7b2de6b07ef614840bcdd9a5f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "6dc5733b1b6d69f5bcbc67240f69f799"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "13a2c59a89f9997e5fe659b8df296e21"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "784156a20c7aeeb4110c4d1dda87730c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "c6d400a311b57474c24f9dfc4e92f3e5"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "7dbce8303148e3ebc353dc224b00e2da"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "6f4bfe88d0218660f02c00d9c4e70183"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "9710cb6b5f540a465eb5a860b269b126"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "5b62a26654074f3a652273e7677942b3"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "a9a093e978277f2e8e61b3800a48fe96"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "953d71b6cadfcadf3854a084e61474c1"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "fb24556ca990bcd7646101017e33b0ef"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "5c300acfc6888493d8924ff5e74256b3"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3a4f6c765f63b479dcf1a6b31977b27c"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "ec7e7c7e24d4b74af766343fac4e9657"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "ac1be23c85b0fdf82a5bf0e3acff70b0"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "1bf54b0411b761bfdc8653a55104f916"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "8de97b32e5ff47857bf14259a0cc6b6a"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "badbd96157bbe28e84afd1e77a43ed38"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "87d7a2bf54797e13693f3d018e1ac33b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "e039423bfaad55efca873bead65482bb"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "f1752d600431e1fe73f9a5f4e8ae5221"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "7204f212fcc9650791746b8e4f3e84ab"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "7f42da86c85c22187a45c1b25f8c307d"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "ac3bd6e2e6de8bc156794553c2fd79c3"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "82646d094c57d6c6b2097c3893fdf812"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "f676997be280c21ccdcb1e79fced2b2f"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "377e0d61712f6dff2b8a2a9b1f8c80d8"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "300dda3342d6b60ac4c3d5b613ca4b74"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "6d8ebafdfaa029246fbd410f5c754af2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "bc8f2f6a322dbed1f04f1b97529429cd"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "2fbfd95acf82af02af1df50ce8fef1f6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "7ae7556d26fbcca943dbd36287faeedb"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "3c1715c0d4a1ca95a5664cd65fa87e8c"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "04c2d628b4d0a7488fc3055c5d2f6237"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "a45115434f3ae02a97d2b8515e311af7"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "027c5595ca6f6bd86fa7cd65fb78d5ed"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "a3d3a7e120108289f6d81c7229039d84"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "f877b80d09f4395558d49d2d085b8227"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "1859471ea0eaba13576b1d9b7a672247"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "fcadca84f337c1d4d502ea992cb221e7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "bb1ba822974d10e64023282c99ed38ea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "3069f597f924357f258280adad262af7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "2b17b569ddc5fc06302b46d6f087adf9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "57bbb976c796c77afc2668ae9f865187"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "48b89de41517974792fbe88b11fb15ae"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "999307ff12a0b88065249585fa96028b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "408df192a3b0d8492d3822e36bafef85"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "266c486d1bb6f0d0b50fefbaa1ba59f6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "e6ba81d81512e4fc834de70f69f0eeeb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "8037289bd6bf07a30c7311ab04983799"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "5d12fed2e3ddd90ada1d10cca12891ff"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "bb3cc02db7052ddfd847addfa2e3a45d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "579da3e0ded517aae7c5006c1439bbd1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "a775024658a4baa5d59cd650b91d9779"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "c5219090b43f97fc7a7b4e0ffd3d51c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "9bb25a4442f2cfb40c4b0b57f4b989a6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "91d6b0c479c5af25b414c682312aded8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "cff9453ead873a98fc70920f58d96146"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "c785754635cb90f0dfde942b796ad979"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "bf986d08fe74fd94af9fb291c26f5e28"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "cd5851a91f41526e353c34a0b88dabec"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "d48e7145f20d838e0f4426bd247514dc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "640fca28c60369cd99ad851e97cc46b4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "5820650e3f8363d9ae54955cad608677"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "3f93ae2d80d8e84e7bdd21410a1cb1b2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "d5419cf16dc03a869b0a58f75267ed1c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "f0171036eeb9ac6cdcbef33dc2133d82"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "e3123aa18ba2ef6b2b885059ed5f0472"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "28048bdc137c454a27e2ab00d17a2e63"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "326fc15ff61710bb339c567510cf2999"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "f623a4f1a2fb6b52c26904b16cef9fc4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "d03a9710bef5c205906162b277a347b9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "cfef88d1c586d7a6b3d7aff4640dbf0a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "acdfe43c432a94ed065e746f49a1608a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "011692d32bfb483b1c617c6c6a5eccfd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "2fb032ca0e264c7625a848138288e567"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "8c002e35424d25b47534efef14c63dc2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "935e4c619a19d8b8b71788504d3922bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "0ca32afb65c0a7c5c82ba3704fb71fe9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "9e0588cb5cd62ca34c63b074fdfa613d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "7e9fb95ce4c54f725fa1ef1814502c5e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "d2f5f7a05351849d34355711debd9c3e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "044bb870cb772f345cb2fed92c3d8e1a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "a2d7ce8f054927e99df87017e353f996"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "4decc5a1336da1550c193b5e2255fec2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "980c371dbcf26af87af72c9c26d7f54d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "b43806fae4bbb4ab3e6d22dfb27e84eb"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "54b1033726a72f47fc53563ed507c9fb"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "9bc8277e9c686bc671ac79176a73d7d3"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "d6913c0739337748b3131dce60ee0d41"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "7703f9234a7bee95fc6828781a03b836"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "b54b7291074b482f4c1017130b64e07a"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "b52ead565cd6cbd2067a151b8427fec7"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "48318cde9129f1c68e31b2dbafb500e1"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "7c731638804e14464e0cc83bcc3736b9"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "47d825f237294c727917a54a72b74ee9"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "29647fcbe5f2f3b7598a18131834943e"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "10c98a034c978b46fa1e9febbf050774"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "2f5d19fe8db53827015dc23074c6c954"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "d2b85874abd2af964d7b3f4d4b393495"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "5c8b4f24f7458e913d859b13d3349564"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "f8f42f808f2741896d0a7196faa5c953"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "593e2cdce9664091c9802482aa7ac9ff"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "262c0e6cf8d8909f24f8e082c0b3cd9c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "e9910e2b9e3be240a6f0bf4b7dfaa0b0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "e4e3df59f0a5bbafe1bb147f1a8e6ad5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "a9ba388846383d0721ea64637ac819a1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "1118ab5f3aa36b79ac4b15b1168f8ab6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "de09b365d355f12e2fb6b74a36158581"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "d57822f058b1e0a880e813ef73a0099f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "f1fb125f0e2158899c7775c188dfa660"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "3a3a0c83254e9f90809e46e0cd8da320"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "32cbbc4b2bd60c983d0ba04bdfe9844e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "36bf73525ee17b789a4c4cbb395a234e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "5d0acaef4b0bc45f3d3c0dedf4f2d08c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "7cef4b6b7d124ef48f3da845b89e4ec3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "c68b4f12a8e5ee82c89a2df30a7d21d0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "bc25c377d0c33b7a259b6d2191e85f2b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "cb620ce95c41f3ce591da81a08fabf25"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "d34ebbcdd92242ddf3d5a951a4ae511d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "1cb4e5b3ed7008dd5ab8b71b9f7f5f47"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "829d241d973c2c8b98d4a50612428049"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "f9c916fdbae66f656351eef707ba028f"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "c22819a77a5216e0d5df6fac3eec3d3d"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "556145262c9c20293bef9d47b8ff92ce"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "76ba62f3a9b8f108e7d65e6452866e27"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "4e0e402705d92a0759e08123b5e6bcde"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "eb8d4f0b1a8aed4f6c11a81391dea702"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3bb8d9bad44e9cdc67516f0a1e825612"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "11af27ea64544f827259cbfe4f478972"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "a6a74c93d7971f3db300070ca4a796ec"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "c64d3c14a54d11f86605a609fa3db2e4"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "dca9756466ba3ef90595007ef33b8d3a"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "234dc48555dc0e847fed8b3113b3d0c9"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "7b2a82db1e144b31fe96c834f6ad6b4f"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "7f4827f8a6d9b01651a0707d531578e9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "e00b80c2e4007aea3b2b7a02f1cd6e95"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "d50e5ef043001d4ee8b94b0e2c6bbf26"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "2131a363d73f1c097af23a4b63384087"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "b15b7ec3dace4d0341117b4d36a09cbe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "982bf692e83ca5bf23f956f3ff311d44"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "95399ac7931da575b1da46907691363b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "e3580837112742a45dc6d8c86184ae73"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "a069e6ef50982c8d04ee69e6210fc110"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "bcf9f5ebf753f04abe9b598958c7f9dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "95ab8128ac71879d1f8dec68d527b814"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "63b73f4b217f5ea569f3bd57c4cae0f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "dd1723c11c06927b62d923a171e41735"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "0e25ef3a20b00a70601eb2febb5f5b78"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "2440d7d6dbd7ed815fd258ffcb76ae57"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "77e44c0a539b48e361c7322f43c8c623"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "4d4e6af8ae7acb83d6f283156db715eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "f90c30486054cc04214c8edae4f563ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "dd03d6e27bec716114710330e6fe441f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "dd5d9a10babf14c4c4bb3539ef03607e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "a24b3ae5e5bcc65d48b0b3285640fe7b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "3c7e3f3b333c2c623c224adabf7d33b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "35df9357758aac6968926b4e4071f91a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "90ac52fce35282982d857bafffc88ed4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "40b7e0e4a1d07d722b983803c55c9031"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "75473a7a84cf4a687b781441468ad97e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "4f76299d44119f04cab77b6c5947a04a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "01910be25e80aa635cec19d7de5bdfb0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "def31c0c92666d85d40914f143cb0fee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "7970b3568635445489004e38359bea85"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "1af6edf015afa952abe6214bc6d25ca3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "734fe46829ab75e8f6241212382dddb7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "adb95e70c3a7b20e1e095be6a992092b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "ff00a3e5e2bfaba82db7566b7006548c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "ed814f0df6aebfa598f6b809a6111775"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "18f7f11e8dd91abab278c15683f4ab4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "702df7d7981ed8425a0ae15a31859b38"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "891f367c391fd9392fc157c22d9b07c9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "b183f446670621528f77f9e61efb12c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "417cca2904e30cd8a954572c08a1cc60"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b05e5890755c8f5d6833f2eed445780f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "5feb63fae102e17f292f1cb94bd55d13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "0c237f28666c64192cdc0ebab603f636"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "a71f3d17e37076534ba4f5600a643407"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "d89ec6bbc9c7e5472ed74a35b99bfa23"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "a4c65e2da195b1de4050b72f6a78acb1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "ed37f4a94c127814a29fbc4af2340d46"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "1775465ce119ff3613ded86adb0469bd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "1e4405ac44db7312b072e7c58ac30b2c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "1c9e40ba766493bba2afa2c2d8008b90"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "5c7b3311341a96a45905d38860dc265a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "4d47ea33ff0f04d7b632c704e5861fe8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "85da161b4aa8cdc8aaa00276c27e6a77"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "2e571377b279a3b55c273b895b6798d3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "39f4cfcef49a742b65b5051ba7302731"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "9e707228ed8f464565bb31a19caaaeea"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "1d04474a8cf93253709ae8601adaf888"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "38bbaafb01b7613f637397b55b1da8c0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "830a391c445d2a748f77bf06e10ddd21"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "2c1cee0464ffb0bce904a5bf015b81e9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "ab977c6909d24e57976d9e40ea7356ed"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "281ef2cf19387c456638fb0682311561"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "57ebd1eedaed7e8985127d24fc1f6834"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "7a7454f35725599deba97c6cfebc35fd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "002d0d65e01e154b405367be5abef876"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "6781fad446c594535f3e50284b47baae"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "7d5f29d577eb784bcfe481532f1c77c1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "8f984db34214dd8d3bfc50595873cbef"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "454cc5d8ee086dca81b76a767b37f1bb"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "26d2de1e797e4b8df547b9df1f7d1e0d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "402498a6345fb55c30b5e3d3a67c6d44"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "9412a3c01bbd700386d37f7344e6342e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "80488b9b9a4d4d468a38637fb3f2cd44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "42c127d7610869eb03689db6d094560c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "5598dd87c6db1a72dab06106da29be53"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "58001530bb0edf4f549dac20673e5669"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "f1a41e427f23c519a1b56054d1e6e743"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "5df5fa0236ff379ff31fddae47b132ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "7e6b68275ab8707b9283ef4a3e64c44f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "f0a579dbf6c0c0314be7ad7be1473e5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "f7dd0107c62bb746ea6573df3dfd0f80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "975abff15c7f6bcee9db7c1c09cf6fd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "da9fd3b334d00d2977b958d5bf6c1d49"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "5102a8cfe5c70b5778cf2b17845e585d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "b3ea1e9f6fc29eb119ec784a3516c1f4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "752ce83b9b98aabecf3889e34b3fd7d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "5c75c832cbb175dfbbe5eacf7ac1fb85"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "5ef153cca152fa97dcfc3214cb23a1c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "5f7c31c4704376285bae0d6600af8d0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "cf8a4427dcc9b5ace85ca8036f0c28ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "e2452c3cdaca9f40dac80380f407e6e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "84b6413d7d4cfca690c005947d0cb35d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "ce206888db320fb9c144c04d1535aa1a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "751e270be4391894c6171fea59ba144e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "a6ee20a99d0a47bb113ab1217269038d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "5ea33930b0d291c357e37bbe1d7a7f8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "86f7cb36c8257db93e2b4bbf5c7dc7ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "cfdb4d9693a3cf26bd1969c252e379ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "1ad5c1cc58948f0dcdafc6ecb4bfa109"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "f368e136c73f7a92827d72d348dd593a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "4af887ce76ab262a2825bd9a77d1670a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "52e15a05df8e6e74b84af48adba820b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "0a97a639d1072f811edba6c10b40947d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "a2b84cbffe136d2e5353273b7922e679"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "2271d3fec125881e52d0b9c0c4e0bf52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "1a0560c92f281a5b1a398d5e825a7eb9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "9650062e0b80720f5a044b764f6ce7da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "fda5885cb4ada2245310c5bcea1e4ecb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "cb1a508373e6969fba54d4e5d9478c86"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "a883fbe9893af2717a1cf386c3c83f71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "34e3027f227806e24cb5c5ed1149de19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "4028a20ee0f2e43f2ae40d5b8dd48e4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "d41d129a3d1d006df06f8b43f102c8aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "0c3604cbccc624c9e39a58bdac18bf38"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "621fb0d329f389f26fc435597a7c1054"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "00e442ab2e4538f25ebc39a7a093fa0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "2f9d1cb42492c40fc36df0c6259a4e1f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "7ae6b90c392094e65fdfa45b0c00c6f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "e6c4ee911e29c853bcb778b1046b3697"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "00c6e567ef9a0a0446b83fb1f01c94a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "5c119c1f72061c1783b6998b1da7eb47"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "20b5d148bf18ddd958d7fcd6645a6e05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "924aceabc5c591149b1b15cabb90867a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "2bad1bbaa7bbc917ba0d86f5258615e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "494b59c80f6ac435722bb84213c8c76a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "9c4cbebabbe9c12030380fae537c1a5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "31b7a29ea49dd09649b941006d00049d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "e5836604997f85df2ab600639044cb7f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "344a6fa3871e0be80ba7f444ddf231f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "95ebe54695b98bbc1aa2c7153a51f610"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "b0b7bf5683075f4fa13697ac79464a6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "218bec6574dab8f5783433b5d7ce43de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "32252c0605a7ceab314cab31b186a99a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "6dd0291d5d39160acda623cab681f066"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "e60dd13c977fd7ef21de71ac2c4a8de3"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "d070bf58834286af5f3f95a9674a50f5"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "a4df8350527c8b8488ab1ddec1e0ddde"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "df041b0d1c6781708977b20bfd85a190"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "ff80a66b3d37f475b02989fb47811555"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "3523ace0f8b04c1e4c65bcbf38ad8e23"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "f79974f7ef7ef7f9eadaa3d81e55b440"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "74f63af138c394b4a757cf37d397acc1"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "37a870583152ea4a3cc14e4f4dd22290"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "d342442625e99f5f17e09538f9bc226f"
  },
  {
    "url": "categories/index.html",
    "revision": "31ac438822cc3406f5840913cf1e42ac"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "306630451adbdf80dd1194e7fb375166"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "72a3ad41cb4bc92c81348fccf104f203"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "f8eaa5ed24d3f009511619ef3a99ea6a"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "969c1af2a66067a14c87c31aeb48edd5"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "2efc59f9d8d15085ae1414e1d5959e83"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "ed35809593def336672d3042d897f4f2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0fd94b3a9ef1ee9e4043c62d17f013ee"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "6a57cc4140eac53c0f0b8ea25e75771b"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "857cb99b0fe67f5d6988c69e9b42d5c6"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "7146e6822601733ad095ab1adf20feb5"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "745c70d4e03907dc061c2bf3ac2d6a61"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "eab4db3106540803ca9c99d53442f289"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "9520b15edcac5fc7d9cf199ebef206d0"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "97bccecf3f6fc97f2acde8094b460dcc"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "031c46339cd5d7d3cd5ef31783e7fc2b"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "55e9e8602ad8ab279314cb4f29aae58d"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "e79949451c946edd95341ab8600bee87"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "40ada3bdcb1a15990c7c98f1559f139a"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "a03526d101eeff4434297f146a62492f"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "9c4827ed655c83237e569ceb9272dc42"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "f34933485f96de9626d2100a1c78d778"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "f9af5793e96282c4100c468ce1135dc8"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "660737ff8f323b5e8e5ed392630b094d"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "b63fb02650631ff49ce36630356dfc3e"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "9bd9fa00e4448961c9836783d0267b95"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "54fcda7511d53f6ba53a8d6ee75ad8d3"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "d4479035f4224c82d744533c6efd85c5"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "d4c5dfdb2179ee99ad9b5ccf526379af"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "4c7a0774f7e706ef55a378572f44a450"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "227b3ab533ccaa9902aa0f0cb7a4fd3e"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "d49f7e736295abe4de8ea2ec6f28101c"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "69317d27b2b61259f02f1a7fc1325360"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "35f1a7e5e1014031181920f99fe180ac"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "37b906e43e935cc981c373cad50c39c1"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "0d59f416bc2354c495cbaf20812ce055"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "81fed18a07fb6055f88cc9c1b07288d1"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "4012a1fb2ca72501f47ab63147cd58bb"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "77148c23e5d3269eeab4ecaa30fc7feb"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d6fcc861903c4f294ac58a1ad93e64e9"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "b858ee1c40951dea1d23a71b70b0e5aa"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "90ecdbe6068f6a6592bd88383b77aea6"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "ccdaebd84aaf3c4c388a6aa5c30d4be6"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "3177bdf7b39bbce25890a64c62657c85"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "6bd66f997150e869bc1dd43e3d2d397d"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "7ce57123d0ec2e47ef360642ece47061"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "6c278106d15679b8c37ea83a388e4af7"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "537d133e1e5218dabea5e72ccfa7d2a3"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "6b0bb42afb002043ea35b0b1c9240040"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "4df757247fec03f311aed6f04475afbb"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "28e049099d55ea0504cf1702bc54588a"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "c5afd53c6d1f5f43f6e7d1c739247058"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "1bc3d5c84c78244738fc888db07edb92"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "f9dbf3d40424aae090bbd109784ef481"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "b2ed7c0ca492763a5f1081997dcf5bb4"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "85a32a5926a111de4b11e977bb79c6cc"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "4d8a27f389c33c279d435c5be7032c34"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "18d7ea490ef4e50601d3f46f1cb8a380"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "8d11ca0c4298b4b085a1cf6493850c8a"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "51ef1e9fe527a9fc47c1d01f4fcf7a61"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "37fa5d795e0aa42f6ae0b530337fc0b5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "03545ae25c7eaa180b25d672e59e0ac9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "354c556e6048bd1ee5181fbf0a49c65a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "10eaa370cd6bb2534dc2f6a13ba98f9a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "34698e907c66195dd3443751cad1027a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "f98c3f1de3114e9be70eb7218e438dfe"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "88542ba95d093fbed550b9b3fae59dfc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a6d5d225bbda6c1271100cd917c32d04"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "8ce64a0576e9619ff9677425863f6aec"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "4d7fc6e3763ed6bb68636384926affbc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "45b87f071cd720724f7770540a87b6f8"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "d16746a7850a09de37999f5722165fa4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "1ca4f0278f2da92a503453cdb154b1e2"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "9d9da7d69a2275b5684764f5b5a4a81e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "70d75c07bdbc5bc38298cbd0a7d071b5"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "54356898d6c1fe5bf51fa79d71e0f19f"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "51809df8db1a28c20e2a56c5f674d841"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "6dc912b80953827c5887893f17400fa6"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "8787f1807d0b9ce6a2e930841c7bbbcb"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "d3808e0b0c5d260b77be5c0d2a5e4cd8"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "af75b7515d6914eea3105d64125f1085"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "3e057246603c69204d014a1dd6be9daf"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "a266f95a4bbc6d5700e9409660c209ce"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "4859ba64c59030d91f188d7cf90cf7c2"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "365568dd47cbb2ddf81e39afb076547e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "9f136827178a1195b01289bccb965d76"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "f561adc3ea6282e19f3df967f694a19c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "aa728673a756b4c45e7f04f4dd7403bf"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "30ee0667774b8c71a8ec5481fe130070"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "700683651a775c4be3af6ebac752ae9d"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "05c40eca6661045dc28621c4a74072f2"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "5d61713396625b4c5209e15b3aa30185"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "2aee6e02c8483fbc2b9be93571d5818f"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "7636678afb69aeeea9dc8db9025d398e"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "cdb9b38d7a3ee13cd0cde6ecc20dd115"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e1b926af8137d2d349cfb8599d84d658"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "06391e4b28f4510b0991bcd2046dcff9"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "30a27d75aa5eba756b21f50ddb6a868c"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "9b124aec47a2ffdc527f6331eb034e19"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "40f6d552477d588ba778f28fe7b0557f"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "c514d6d1b234f289067482554454a176"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "929d4228ee8fd3d33fe1fa66f85e464a"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "93b37aba3035dd8013d51eda72517bf1"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "b84e4dae5cf4aac103eaec5ba3a36b23"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "49e53524fc6d08c86e576447351dcdcc"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "ccefbe409c99446d976f629187e2fba2"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "257889e43e29063255cf51eb862bb235"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "98c3a7755317bee519198101653d9194"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "b32eb61b018e3f4a0dcace5b592c0b29"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "f535560b043e64cca0cd87a35a4e5d0c"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "857971e671660430d13f02e20bd6b865"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "d00198b191542a54b48d2c0d59b7f7d0"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "e259e6a5d4d6bc38c1ad4cd1e24799cc"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "b6d5def330bf8623737d8b804032ed93"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "6bd2e2655dab12d6765aff44708857d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "b6168bf688f91112bb8f24e0af08f0bc"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "fec54a0f3814ff924dde90b47eadfd99"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "1201088907d147867f90f3d3d753caa6"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "187ee7cf57b1544278a4c33760345e68"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "f6cd7e90ac36a05f4c4c16985238be47"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "baab66f4032307e8c3cfe33832411380"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "49a3092d961e69066eeb46c0da0affbb"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "66798505632f86be7758be24abaa7eff"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "6023563279dceede79a46f14ebdab2ee"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "92f9eb4041f33945e332c445cba855b2"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "23e31cd7f9218f752dd7fd0a286c816e"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "c3dfb2e4b1cde59f5e081e038242fb1c"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "52673a5322bfa0d2cfab0e076b9818f6"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "c6f8722cb1d31e0bb0e9b458ad6e0663"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "b2cb71e314e8230245e8b2eb47a3c8ef"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "f6265a0e04fc372016984fd33a952634"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "a1b9a76a6b7c26a0a80775e321675c19"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "00f9bb14f7d29748bf921f88d1196bd5"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "6c7dbc83dbf91bf016b7f1b273f0fdad"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "4445299a4e7c3eac24f6d2d0454b0c25"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "ee4cd26fb7ba56fbe4a799e01d425705"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "9e477468f563b5f29dc081c79058b565"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "e8c3d27820305419e9fcc7f8c3b6ca7c"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "f4190d0091d5fbdf32c3e88a97d11c6b"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "cbc65071736e99b8f97135e063708261"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "b3924293444dc5fc206022dc05aedbfb"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "92d11d3caf6bac31174960a82fd53efd"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "51e23a65f677c46e641926a9cd577a03"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "cba6b482795fb60d2a22f2bd183576fa"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "eaec4a39bc7566979267116c0f6f8153"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "5b6f660550d503ef511c0ac76a285427"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "9dea0677b390d05021313023dadfe591"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "21e9695efc24b46ac7b02beb3fe9c457"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "ffdf3aef63ff0d82c5cecdc757385acc"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "a36224009f52cbf1a6cb6395ed53a934"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "1b1df092e566b216d19740a68f6dceee"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "61e50ffbfd0d577f5541f9b4545db097"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "3798e4cfe3b243105a221989f473b9d0"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "d313e166d63c6b762492c4ccd8ec2e14"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c3307444eda344af7d2b9fd3ef02e386"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "402325da09c040873164aaefee59a095"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "76d12483f411146a988581e994ab8f9b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "d002398e59b21dd6540f34994e07b97a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "34556eb67940477ea736b014d29337a6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "a24bdc51f50a15b6fd586f0eec23a6e0"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "4c50e8b035342c434165a4da54a77582"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "76e590fd977b02f534c9c082aa91dd15"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "c93450b0755f29ccc0d0caf67c02ca05"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "89c572acb84c7386b08777fb0db8b6f9"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "290cc927ce49eaac91d5e5dfe611a0da"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "831c23ee1f78f0784caae0ed0381d7f6"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "564a12822b3eabb22ff98f54b5a800dc"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "4d2dd06e0034b2429c275031a272449a"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "ecfc4349fa3dac577af2b807e40cf348"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "5972bd21e8d679080fc17b6fdedca863"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "7db44e5f01584261e3400cf1a7d81b2b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "227530e8473beb65f2270b4ad26d996f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "96d634d2cf72d387049e6f0db5d15162"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f101715270cf96cbcca4b682319bdf5a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "8f2f1ac0e7915ebbf83419d04936e3f1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "6fe0e3ca61b32e017c0112f7b91c1bf8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "f327bf2e656625741966a4e6e62f58d4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "d5cb3588cc2198e6baea4143f5e72c53"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "d69ce18a8fe574a018a6639cf013d4aa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "54de92051384cbc40a9bd218f6e12281"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "79eecdd8ed0b70c4868b5254d5a27fb2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "bd4e560dd290c539a1ba1c6cbbd4fad2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "aa1327863e15dc1eb0fd463b5817ea14"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "d8a2ca0e860d731c2d1807cb70dd5529"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "16c2d4c37e3a84fb8e4c3515008caf6e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "aba94e6512bb0fdb811324c7baf966a2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "e431464fc341d12219eec0821679dc01"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "af65f80243d75d6f69fca481616fa5b1"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "6f32d2e29c26ca2c53a3f051d777c0b7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "71807c5237585f9d8f4bbe5a7f894d40"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "f0a91d63104fa518e7b70e77bb40c1fc"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "e96347381dac71331182ed2ff902e18a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "0e46cca84c9de4751d02da5e02bb2031"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "0ec1a8986d7d677fadd690348e64939c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "4739067cf41a4d694a99b05ad537dc69"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "5522b4122f00e609a722829795475ef0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "193606265e52a438135abc65265a63ca"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "fb4c9d584d6494b206545af5d91fd751"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "ba143ff933c74ff83aad5d50bf566c42"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "207ffa90527777a78555f7bec1bd54d2"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "35439beabcfa6cd412e0df9331fbdde4"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "7b5917949c70d9676bc9df845b33cafc"
  },
  {
    "url": "categories/os/index.html",
    "revision": "db8c50b4bd7be799df7f9c7ce8a0a63a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "5dedf913b7198484386818d37434a096"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "86f71e7b95ccaf5ad63f1dfdcf3d5ed4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "fc1ce7ea4f2b2b6ed8f1451aeddf6ad3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "c10e4fe0fd6b19c8b70342cdb40bba42"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "a6763adb1fc903fe564207e412cdccb0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "4c55b7253f53f1e1656ade672ecbc2d9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "274cbde932394fe522469771299c2bfb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "b2d6ff31432b2f7a63eb35eebcf25f20"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "8d93d9843b05e7b95abda15dc3736139"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "62931ea7a5a61968772a8d18ac4fa1cc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "a2a8d56e788962234011c681c784720a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "f1b65446abd843606992b770ab004c7f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "70008e75a944189138c1a87bafa89992"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "790561d5a2ec13c69323027f0652eb3f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "7e5f0617c39c8668881554eb9e17e497"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "05ff3d6230fc3f81b7714c05c5c55ca2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "c066e85b9936b1b221141ac675693523"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "16d972b5f1b1566468c79c96afdf9243"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "32896d33681fe45ae23589b64f9f0a89"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "73738547b9bd654140a321c5523188d5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "55556b9ff07f054c0f590235136d5b2d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "37c30bee3ddb20a109908cb736881138"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "a198e8950a9b17d7cee36a3a8a79949b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "8c7497cab58b89e84aa9291ceae92068"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "2cc2015ed5b69afc52ede62ed498145d"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "32b6d16c5b3870f987261b754adacd88"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "f851206b9f1e9fb2347317bcf518aa84"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "d41af2a62e18d5cbb4a0468e36ee4217"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "c35e544745f3b89cb0b046740a665384"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "5c5d3a1d72523644737ec9eb32747912"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "4c10ff5f23d747434719d31cd05ca05c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "a1ab978848fef1d09406908cad23eafb"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "f2b619316b2404e1ef277813ab9a09fc"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "4f2de748c8908fca42481cd06c2a079a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "7a31a8625489d6166a91cc1066e7784d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "2ba50af2f94e5727eec06e4dfecf3744"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "29b372736464387b7338877b033e11cb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "89b215c2e8758ba6d41bf81fbb2c3af9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "9c82fbf7c6cd69837ed1d870065848cc"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "3c4da248f86f1b7247d8928fea268af5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "e9503317c0ec04d041ae6226533ae45a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "0d700b29fdc218d583768ecbe7ead3fe"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "357df9db612bcf03b17ba2ba1ad75adc"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "6086f550d580ffa2e543fe49a57c8509"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "698d0c9c0ae22e5156cd84ec8dad83c0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "c0b10aa5f6e1628affd2baaca0409bcb"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "316502c7b33c930d8389c8902ce2c885"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "e9ddb8a076ee41d3c41c5d2ad01f88f2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "3f7ba94c3e13d9f46cfac3884fb926c1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "f76198d000b9f06936d58b4328174be3"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "14ec9e4b722ca2197e901b45a13f5078"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "a0530c525068171e03e13bd5dff7b1ed"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "f1ddce9a0edfe8ec18fb4622e2fad3dd"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "4f382e865ff4d7b531028bfa94d83984"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "db037c0319936f1b8f3840ff1f92eb5b"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "0c8ef9694d852bb2871507e8325d59e0"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "71b8b7cefff4c055f71f269d72faeae4"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "28ead80fe26a65f2b37a2f4b49e070d9"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "421ce21a12238b24bee5d2209b0dda52"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "f6bf4a19ab1ea75f791a215215878962"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "6152989871f212d81758def7ded0fb6f"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "b74f2623951bff2221a9f9f2c19f836f"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "357ede62a1ab25eaad10065bdfbc1811"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "7a1a929cab3e755bb1f960881a6a555b"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "b899a205c7d78b1fe7755a844fde1009"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d595cae774597491174d234505d4a632"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "e4bf9461837bb9fbed7d5a15d23cd68e"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "ff40e59070f39fa517f5ee2105c87709"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "59d32639cdffaad5b664f0dba043aafd"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "eb3ffb35b6554c07008a46f01d62a38a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "b1a330198b92a742bbe05cd92c4a53ea"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "ca5d041b317f2f0e4f7e1b3e9b0d9542"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "e59fc575e4c45f83f7bc024791b3cbda"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "a417a08e05dc7b87ab0cf9b3d5c31cb3"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "da1c48a1760fc49bd31e4a0d4c0f1ef6"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "9979020eac73f2905730e92da5f33bd9"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "c73f490a2fea293cf845848ecec906d6"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "f1b96353101de864d4ae836bba5f5788"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "5ab832cc3ef8fc39cb7d07c14eeb6233"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "96049c257f49b597213e8fad017c10ef"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "94021d97c1c334eef74f9e7ffbec7147"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "22825344a9ee7c13c68e33439c118acb"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "0e970ab7f741e2f50d7fee67684b406c"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "ae5079b0d77acd5a842f3834da5b4a0e"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "eaa74da1991f70d9db9f758a53d7417d"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "349917cb648f6a7a958c283bfac46633"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "cb73dde42330bee0d1bd47e7925a0a40"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "9ed72ab33dab538b2987cb0ea01ad57a"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "0d768b354e455d40ded10db529e4c59f"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "93fd9e6af4a485cd511bffbc34e969e8"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "bdc0c3f85505d5d7000bafccc5556b5c"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "67921bb0f697cc207b95f8a4f6fb1098"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "276037d217f1107d325ad7ba7601acd8"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "517206d6ad95bc5128b2baeca8466e9c"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "fd4c8b1062ab5783d44fb9fabc8ab8e2"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "e070b0e3b701760273503db5e0377a65"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "131e721b31d88954149902ab2664a864"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "d0ea1d114fff40772b969d581c389ea7"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "696b02f7a74a3949047dc95aaa46ad51"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "ca01db97661772ee48b22d43b0b2e12e"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "3c915c0c3a10a6c605e790af927d67df"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "f98334c4137158a024636757443e3565"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "54fa9e08c312b44c4f0e4235d93dcb9c"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "7b690b02551b1c89ebd79a274501b573"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "c40ee51d44a0e1d34c3c3651cb2da82c"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "0424731a94829fffeb8f7f16cf5c53d5"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "e8bf345acf8a90f0aef886b3f1470400"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "588f3bfd1a323f7bdf255f01bf596b66"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "b5cf7d2eeee6edf5d7399afb496c6cd4"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "d1c5e97ea0374cb2cf0b73909b1b96f3"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "54d512da899c092abaa46d3a915cbede"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "bf689b38d5c4596d1b75e30f500a1f3f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "60dd95ce00ecd37d73c2d665c2151754"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "017466ebf0433031d3cc8251bf8a2a3a"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "463d9c0b30cc062f46f8b5696ec3f237"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "db0d1a40fa7661632912f45ec4087844"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "13123200ab75abae27f03afa1e11f0e0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "04f45a6a8507d082c88597fdf23f7e79"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "57621f4c3f7b34947666fd00e00e0a69"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "0191dfa5b012bc9536cf76092465ca72"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "b4974f081e09645d8f4ef4ac089282ba"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "6c39d02363b42b2be7c043f20f5d9fc8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "5cc1ec0d060007dce5fa4b215d602e91"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "e550d0a819206ebac5f984983d40e446"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "8463eab00513b132ecafb80d4a0fb94d"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "759ca8e571d5a1e2d5a281d389e02c9b"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "458bbc168ac24ef4b72532b4af88d5da"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "aefcbd7c880ce05645f30a16fb5ae460"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "975ea87ebc39dd19f131eead9e82b1da"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "bb57e15ae7cdc639bcffd9234ed59251"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "079453a49e46a5e25087e09f15b154e4"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "2cbd3003843b6171da77d84efca21804"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "c89db5b18d9d784febe02beab3aca4ab"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "273226ac0b3dec7b915c565863099301"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "ac9ecd07c06e606b21c2b123a00cfbef"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "b5796e3669dabc295df96921ca97702a"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "d01f59f082cef5a338b4547a7d2476a3"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "d182af840467f383f3cfe8ac426cc2e8"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "91796db42724b698cf62f121a5e3c70e"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "746b9b0df8b8ee65b7f2a7848efc7074"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "a481f63f969522d312c186d16bce769d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "220f45837eac77c504626cb88199c64a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "9eff6a1c176ecf645b3591df6486688d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "28854b373e742acfc56b552406b4891d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "8cc883a4e8bc73a32e5916de6f1259ed"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "b4a1e920d891410b0cece60f8aae974c"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "eaabc34472593b2bd16e4d9d77ed3531"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "db6be7147b6d358168253cc7e79e097f"
  },
  {
    "url": "categories/php/index.html",
    "revision": "2f9b46b8b56b15e29f96ece1ba2d61b7"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "924d1b8acb4e5663f63941e0e17fd44c"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "f0a85bae49440e4fce4c356092a1bbc7"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "5c7d574c5c02e06afc069657b91463a4"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "8c074ea1fe47c10466923f36ab9ea3e7"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "ec69902a1eb459971d0f1888b0d45e94"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "3e15bf5fdbb0626b848f92a090d78bee"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "bc6ae03782bd3117241f5864b102d7f3"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "db9acf46a21fd49bd98c7e7cdcbb6b59"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "fe42bf2aeeaf82b75326ade4f7535175"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "222bc9762599757425e9e7e159e3490e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "ef50cda9fe269bffcc41cf9b718b5da3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "9f166af512be3debcd636452b1677774"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "d0b6b5432f12749b832d48de119ade20"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "2e839a9f5f174cda43f5e3d43e19792c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "f9c16038aa4eaecda1b1ede3c4cae114"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "fac5c6118441844571ab0ea3b676fd14"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "ea218bac966f184d239df71698238a19"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "4f8d4450feb9f23fe28169c305e4f055"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "6ee4355e10544f1fe08d2808ec184187"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "1cbf05d4191904489513a152a8b6944c"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "fe1f8edad47c2e37e64e32b288939e90"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "309927612e0599a687f9cf0a06dd3ca4"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "48195c2bbb3f4306eba0623d1ecf1cdd"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "ab47103d6ae5c17c7465d3ac0aa68045"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "191c95862fe9a27d8ebd1b31f1836d8f"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "6d632fe235ad1fd079f8811a6b7cb25b"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "da3a07b09c5dfb5ff95c1712bdd44ec9"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "5aaf6b4d8ee29ee2f9327f28914de8a9"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "b58c8db2ba130f313981dc93d74beb06"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "a7b7158a7a333972e8fadc832c193309"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "6b65919319698572e568905b90cbbc25"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "6bb8dca719d272a75441ae10556b6f33"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "4918b5c5e970800cb02393fef849518d"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "bb1e81f2b397971fde169d74615f2d67"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "c7759958f53edfffdd251acaaedf884a"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "84e72e307cd9fa3ae7d7547a6ba18078"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "9fc2cf2c29977bb7d8091ad95ce501b4"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "85c3770fc4e5ac62650a8ed6b595eca2"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "95331d02a9a4473c15e1c6d247eb9688"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d38731929838dafd99fea754e356c783"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "95a0f9d398013dcc1a264aa368ff5d88"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "28d65678f2b9e30536751ad8fd127d54"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "5f1f599c6ca1207c1e7ba8a75a8ccd65"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "a8017c6997174d23d487aa50f713baad"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "ff5011f69dd64ef11d0d3e0eb77716ed"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "1472ff7592f83b82cde0a09af42625f0"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "c3e739fe4a2997ec2bca876bf8b934ec"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "7ac7de9c18ea7a1ee08eca79eef03294"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "c1bc8197387659adfbf3540a38eb7eca"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "39344371a77b31bcde4ce8a7007db2c0"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "3e31333ab023acb295f32356ee55bf3b"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "8c17662330cf855850880c7712ae3ef6"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7d142b507559de92e63b6c48e3dba758"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "937a503d9b3f97a5ccce32fbb7a8066c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "54bd0615bb0ae6d2f43f081923d8e906"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "12d987a678b1e3a04c2872dd90f0d8f1"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "b14b2a6ef5518283b6fbcc044bef410f"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "4de1deb4039f2ecb7b0463ea58564c9d"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "d60c8f97aec6959a669b771498db0626"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e73fce998de1e58cf97412356e618613"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "c62f25f9c14c826ef29a3f1b7e6790b9"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "a87a26ac94ce7eb216ca47f46355889e"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0f04d872d1374a94a1216f665b72177e"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "8714f495d08e0a3cf76f2e1051150813"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "c78ad1a73313313cef3bc0282a66e5e7"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "10948134396fb8b647c8e58558f0882c"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "6a463cd447e4f5f581eaf7045762d21d"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "4f44ffc004d84e68f77896c262265bc6"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "b76969ce32705b6607d9d26dbfe0a5f0"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "b3ddb42d0cc6fad2480603921b25b355"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "efc09f961462b00a52be0c585066d56a"
  },
  {
    "url": "categories/system/index.html",
    "revision": "65b34949efa8bf92530a77a6fe8e482b"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "6ab600b8182bb7cfe41f985374880c39"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "ece2f6efe6220575b94f0acb71f1030f"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "394d3efc26d9d92d0fc8cfe5a16958a6"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "32506420c1689d48c104331b6e0e1dcd"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "70a9e1cb593b22a7d0fa506284c75b90"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "f5341dc3fdcc33ccb3d4bf23252c4288"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "8189339aed6adeee8efbf9039d971cf2"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "0fd71904a93a72b9647eb5ae7cc2c6ce"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "298b6d74210c4f194bc1256fa8c52f2c"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "eba471e7cb49b24cb3b6e3bd44d39589"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "86c9471828a2f5d0437876360368b693"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "7370d1ed956c4b3ec28bf99c7fcc9043"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "1cdc4ed29eed3e2830a842de58884418"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "25eba60db3b4e54707de493b4d0da771"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "47b0e271b5e54a2eac212cb69828ca52"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "efa4a5343770b8a112be4c9b032e8829"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "e42c553d6a2236b929c7e5e6c39118c3"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "f707ac8328e0096d63999b50ffa4e45f"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "c2dee248d370ff406c88c96c5a6c40e1"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "98cf4035bc634cf72a5253b1b6e555f4"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "20c7307f8e8da736b5807283ebe3e340"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "4c213b7caad7e69f0a5862216ea509c7"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "977ffcf6ca6b7f365b2182c40f503517"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "fbeee3b0fb79ae5fb6db1670e277912a"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "4c8c1f5899061ec5bed622d9665c3b10"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "6025298e04cf16c9100083122e8f51c4"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "370383591bbd7f8c7b79c92ac8120972"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "7f685a9de47833570652646c229c80cd"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "0482cd9273b70f5440412ba678969266"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "7de78d2c94d9a301c33644e773219419"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "6993cc000695683cc263adb659504fc4"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "bc6fe7ba365afea2402ec8c599f7dccd"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "698c5a70734686c738614fba29afc74f"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "42b9f6343cc01846166ab0def358efc2"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "0b813901eaeaca550243c846f0c93a9b"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "9d710062a1c910902ddea59e119fe8a7"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "099ca5c2312320f87618b3b2fc2880ac"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "1fcc340baa47f2f7dab1fd905ea19e82"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "dd060c7632c537bb4d0d359cc956c97f"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "0a39fbd8a2f07e192a4336d6bd5a2d86"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "4cac3f972bf93c88376c11e94bc58fac"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "ecb2f1443001429eb51562d4cad43285"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "2d0079f973c5abc2da469fdcdb1f3830"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "a0be1fe79392d35fc84a62b15b6494b1"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "6fd6aaca746de69410d7a8dad6f14814"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "fe014154d0e6dc20d9fceaf9b717169f"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "c1aa874471a9e1f486f19eb4b450f025"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "2350a684af3c702428a4a08549299847"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a9047bcdf1907dcba4185246b70f534f"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "52b2f4c320eb3f663075f2288380f4b9"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3b42ba43d0892761c0e328d0106ea667"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "f51e17dee3518e024bb779cf3c9869dc"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "d1fa4141de43e01d0c1afbd2c4806c36"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "adeeac9a269b22a3d461dc8db3511282"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "ac0c8c4e8faeb6e6b11af0fc3d9e6479"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "bcf1b40934579ae598d53d3cf4e92bc6"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "69821a26b3e3836da39b8d594b1e3fae"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "f977f2852e64754ba14b75783423aa3a"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "b1f15d848b0f710a17c44bc6ca561c2c"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "2b4faae262c049c7a53d48f2c22a1bb9"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "a4b108b2c4f8b6f4e209de907ee4e1fb"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "670039bf90c12cb1dbb08588ff89a9a9"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "d5f87ac900ef96ea26d24b6177560cc3"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "fc3be1e26e43d3f37a7a55cd4a04b515"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "90867cc87ed60e7f28367a4acdc732f5"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "81478b8e92857575a526f96421b5ff4b"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "d37e27a28df0420fa079cfdfd990de0c"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "44d6242294d9ae7f901b1a703b9e2bbf"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "43e7e7007f9a89b9b4174b31c118e9bc"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b4be8ac034a4ec87996611a34b534bef"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "e14bb7aa00cea20f2d73f94ae173409d"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "f3d92a221b3ce5fc85336771de8ddee2"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "7ac5f069f632d778806b2ae6b6a7ad70"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "f13f3890000d8f0ee2628001740abfc6"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6f0037035dd0960e2d63066bd25dc243"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "51c05586e6243f90c94268e64859ed57"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "b8c6c375bf26b449d3f52969bf7a5189"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "6bfec1a8915239bee1c8de70912f60cd"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "83bbc298c27f819ccec152e06bfbdacb"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "3912ed21e39a30e7b1bd29a8dac0976e"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "767bef74274eaef1874eab9de14be973"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "01d3bc0652c724d1c947f165fba33f76"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "1d7e7584cc9c40db5c5833f9b6bac52f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "2ad2f3bb6bd39c956337d19504804944"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "19d1017a4bfacc234b4bdc193788fc73"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "6e95165851db86a60620838de9de9c9e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "38c98dd5c7c14a7e1987b5164f88a84b"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "eb0abe1ac788f2e2894646e9e7536ad0"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "0f4043fee3c7850bac961af73af6da36"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "5b13a6b05277aed409f9ff67986263cc"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "a2166bb6de4290696af0219482360ca1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "d718d253d1a7e6afae0d6cba29bce77a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "85b89b35bc03836c223cb487e64e9670"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "4885597dc8ac3ba549deef552695ca9b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "18feddb3f9998b5b15a103084d243fc8"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "e8de204d255f3febaa4b440ccb87a2de"
  },
  {
    "url": "favorite/index.html",
    "revision": "88947dc9bf32a4c2042bfacf345ef8f7"
  },
  {
    "url": "index.html",
    "revision": "cdb00fc2c087da62ae8a09ee70777bf0"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "20db07dabf9421e9e19ab15e13aeb808"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "c7a463b428d637b5083fde408ef80571"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "75930ecce964b215eae50482e7984ecb"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "1bb12711cd8ea698f3a064edc12e9b63"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "28ae71541e6508cf13a9955bc5785965"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "fd8c81c7a29c4c2bd93f4a73a655cebf"
  },
  {
    "url": "note/index.html",
    "revision": "69f7c1f86366eca91194b36e37d41cd7"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "34e55bde69865b57bfe65de0a460917d"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "b6ed6488429d4bc14699d8401408b7bc"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "a63b4aa5f0c9d4e0abdc10350797eede"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "0b2be36f131425a3ab14f7b68aa40b4f"
  },
  {
    "url": "share/index.html",
    "revision": "d76032115fa09bcf192dee18305035fd"
  },
  {
    "url": "single/about_me.html",
    "revision": "7f6bd6ebdec8fbba6057f2d63f3413eb"
  },
  {
    "url": "single/all_article.html",
    "revision": "ce6aa4e762a3f6a4f1ca554c8c07a45e"
  },
  {
    "url": "single/welcome.html",
    "revision": "6ae8c6bd155d10267b13b28c11cde119"
  },
  {
    "url": "test/index.html",
    "revision": "8b976b67be7189df21332c93cda34737"
  },
  {
    "url": "test/test.html",
    "revision": "5fd0d246978831097e51b1eeb43a4fb2"
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
