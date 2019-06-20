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
    "revision": "612d1e55ad1d5675d325cfb9c23645b0"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "6f911ff2ce4a8f7473f0da967d6fac81"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "77499c1896c67f412e16c05183b0d770"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "1cca380733f65a99b3d7ec98abcf1f2b"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "88ef8845c5410b923381a5396c9f74de"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "97a2691bcbac2008f935eed7aa02a40f"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "6a789d12e3fbfd6d465745cd01b2dee0"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "666fca560eca9e177f1a06a6bbabf528"
  },
  {
    "url": "articles/index.html",
    "revision": "ce951b8a389cb0d32793d294af948d31"
  },
  {
    "url": "assets/css/0.styles.7e0d78fa.css",
    "revision": "84b903603202241eb9d9bbb67e3c1409"
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
    "url": "assets/js/11.bc403cfa.js",
    "revision": "cd810cfc2bca6d8789f15d8c17efeb34"
  },
  {
    "url": "assets/js/12.5160939f.js",
    "revision": "2df99839174f48e25426da269e124f6b"
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
    "revision": "41ecbabf40a3760c3debd39e590bdc5d"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "b8bb7f529557c4f3f8bf6ab1877a4843"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "fe9315ead37dff4359cbc9050d23f1eb"
  },
  {
    "url": "books/index.html",
    "revision": "b6999d2e1382707eb0ead41210f213ca"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "6770743e668f07aef00c93ff5b332130"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "ceab48043280311b380c1f6adb0fb1fc"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "bfa35fd93d59e59df3efe87ee3e3fd3c"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "242bd5c9bb3a583cd9a79b4305e6fd56"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "92e6421cd9243290b159f4eda4b5fcb4"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "cc27d73ccafe698adf9294e3cbf9aa7f"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "d0a03a14df465b66fa6646c3ad3f8664"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "b8348672e8cc8b2e531b57cde74619dd"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "5ce2b8921c87da3c0b632fc9743c8c8b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "5fe8060131333e5f05798876e746b711"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "a248b304d7a863bfc75466422219d9d1"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "8a4a217b63702f56b31397173baa9665"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "790373589340980cfc42f475ee0edf56"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "bb49a7d004a2c336a85032f0215f0284"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "de8851d12ad9baa9cd23c927e5b0b36a"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "0ef0729480365112472673fea689c2e1"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "3d33da270ce4387e487d804e079bab2d"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "77c3eaa0960c8aefd123b786394b9559"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "8f3ba6b192ae743d8fcf6e0c69f1874d"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "d54291c30acd21ce9db1958b8a232d37"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "281136ea6090474a032abdf49ffc6e07"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "89123b935477e779bb4ebbd9705eec9f"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "799154451da9d12336c365a87edfde79"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "8998079ed42a01322c780f9e0b99c8a3"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "38e0ed854a85b5493ce2346684bb9f4f"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "0f6bfc1a2be1bdd50f5e1538e144bcd3"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "81a2b24388ad114e9d44efd9817bec7e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "c0d7ce03976953a410b86d136727fb49"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "13af38615ee9eb60bfee3ab6fb977ac9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "274c614db462d69987b259e6b2129ec7"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "5a61dfdfd9471f04b6a90b2f9c0192b9"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "07c0e691f48729b2c4684a446e1a06f4"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "1731f10e9c6f013b062dd58c19cfb2de"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "1623381ad634a303489bfec7cdc020fe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "0d0646584172dbcbf70d80240a1a075e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "11e25caea360023d352579fc3d9d41a9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "246d5adef348b1305aa46b6c128fcb01"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "cee2dffad70c555a49a674ebac7ead12"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "91a45a8955f2198de1b0857c70ce159d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "b8e6ba7d1688610f40dcc6010e1827f2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "8daf8763f6a63ac98dd5f636d1fdeff0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "758b4d82b12d6f0f5c945124f83de68b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "8fed48dcff46750d8f19bbdce9d03f41"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e3a2c8ba03ea3a51634e1cdeea02d8e5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "42599180abf0e07115d2c59e634ffbcc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "881625a3b880716fc258fef1488558e3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "775a7f40087d3ca81e81f00e1dd27e28"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "b0cdf43af7f2688c5a4fddb74600aa5c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "af201d67336aabd3d84bdeeb6ba861de"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "93421d210ef07b164292901102bec886"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "74690bd196b102e0fdf10732ea6684cb"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "9a2369aa23119062d9849843505f9257"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "cc52d40c96c069d7fd3a3d4cdd9c685c"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "896106f0f5c57adc9fb76be1822cf45f"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "c712a2dc6f5ae0d628624b7abe828432"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "255fbbd501130c1d6d3d918dd5db7f49"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b0c0a4ee0b5a5d0293cf07ea0d73fdbb"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "e9be07d215b2742e44c86eac75fac2ef"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "81e875552b82721d2bd36090fa039b88"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "ede515891674aa0a25381cdbd4b4b290"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "955c1cd457d74b61a82e67b19498628c"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "1e2758fd45ba9fb5f7053cd5df80a45b"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "b78ac585c3129f4b338cbf185d19271e"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "750d8c038bd9226b51f62b051f8d1321"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "91d6fdb7e4ab6f4b4f40aa169cfca08e"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "08d241f5c17221259565b048069a7e7b"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "6cd38d925cfca28b41a399e1481d18bf"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "3872483e60b64ea298c2ac68a320e0d6"
  },
  {
    "url": "categories/database/index.html",
    "revision": "5784b73fa12e0d94af74b6b0d214c24b"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "0f51c955ecfae2c92e10819bd5cb7251"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "455ed0abdbb3fa3fc61e4ced8f428348"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "73659573fe7c6fd98bf8e4f01ea9b6ad"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "8d24b1d833de8b6548b043c518ed74e6"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "0e23383b3a3914b2fe0b69645363f8c1"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "1d011ea46efe99f51e881b72456e391b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "969396db8d65be377c0afa4042a1b3df"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "1201c1994cda747ce556994b6d9f8fea"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e76d63afae844e5c7919fd49b5f97f87"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "c29c2e7ca16432e9e6edc3cf3b57472b"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "3ad4c8e3403d5b451870d71209603f2f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "67a35b5c421f9e39933d59dcbf8bf5c8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "430f19730e439ffc02ab600426abb49d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "877659ba79f7c7c4efad32965556c293"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "049e95cf9ea66deb5556492c4df540aa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "f121a628d0fd2e3590645d3dd87d0c32"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "860b86fe6b97706e8540ea39e7866620"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "b4ed73b9799f8d597a2f3aa566788a60"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "4bb06e6714116f0cbfaf69f9480436d2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "b1e2749a8cf62ae42ba46184502ce0f9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "1304301d2e2cfea8351e32efa315f003"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "21d8cc9c33566f03e2ee78c31ed81397"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "3c32b83cb39da1be659191b4845e3eb8"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "cd52d975ff591b09b4d63dedbb94a3f5"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "29a1f4add7fbf8317c7ad04a4760954b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "5dea38fb565b734b526e6dcdf8804689"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "19628381e774d5bb3a36d32300f5a9bc"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "6af054af01ef3139ecb2df45e1fed7cf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "50ae1f74d95b8cc2d87ed2b0d0a636b7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "bd5cbe86843976399c61827420f0d2f6"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "d14c342c536efb28059554bcde9f0a5a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "52ff0ed655e529b457d840edea37b3e5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "9e6320f3f8aa294ec5abe6778058974f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "fb00910d9915cc9fcae982eff35ae5a8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "8762d27014764f7817b563422218c07e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "ff56440b09eafd08fd2b26596cbeab61"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "5280fbb7358864ed603b93f55174a873"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "b5d1d6b2285b30f371d89573393683a9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "e32871c139c9e9db2f77c2ff4005f086"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "ac0e5989398d3ce8b04ab38851d9fb86"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "3cc8955d1d85ee192a404130a973b811"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "182c6c8a6a078d9cbd60ed17a69a3f15"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "9733806827f9e80c782d9d07d9842ef8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "d6393e3c6f091dd8ea5603d891af1e7b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b2a33a1cc2f4308c8ca2cdeb391846f7"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "8ffc32e71b0015a4bc3331dc0745e128"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "bce609fa0cc21a7fefe17ae13d2c47cb"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "9a67904659e308b9ede841e254633ce7"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "4384f79fd53276bfa07e5fb38a26b37e"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "2c68f2848b52ee863c0a04fa27716a35"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "163c2c3f070d85c2c4011d133823e331"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "9e5e52934daa3129477539edd559fef0"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "8ffdee7776c4ef8e043882ac48059a76"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "f2d5cffbe41090004b65818b8854743f"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "a8d973b094c45969ce2ab0f17ecbd56e"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "449926271f412004a4e56197f588791c"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "eaaa30d85e9a6716bcb97f1df29f054b"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "ae9a4fea8c951b3e38c2d015f2f58bd7"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "49c8a55f62e03edc6d12bde110f2e792"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "8caa3bb293d9d587d7ef03de0c0ae361"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "ca8c2ba1dae681168281817a36b05ac5"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "c813ba992c1c94657471cb720ec68bd5"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "c932823ec749c9f4c1acf0bff4fe0764"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "572807fc19de189de0ce0e5f93e3653c"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "5fff0cd597becad2ba936eba66817d64"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "2d3eda018e951b06c7882c7ddd3e6d79"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "6c8060f798dc7df3a7d79511b58a601c"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "842253c11191ca8007e37894631c523a"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "7964ad3bb89db4e13442cf7a7e8217bf"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "7ba933ae12d32ba78da2cf5d58ca350e"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "a32b6c88eb6b44cab22006d16c06c4d9"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "bcd2f19bba26ce5736cb0377e9cd7531"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "3e6f24cedb19b4c42aafc939855a9a98"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "86ce0a27ae15ac92fc51aa6b9172be24"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "bc4c413f6e70f598294d81b4382a7e1f"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "a29d38ecb646d05cf8c22884dd22794a"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "04df71736b994243dd91042c59a4d1e4"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "9683005b9e161eb82e039a715578f4cd"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "accd2d8bf1644f53866dc0a68b94d14c"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "5fd0a47840ed939364758ed9bc968905"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "fae216e710eb4b392c5c55f52b200ee0"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "39bfddef29754524af4379797a50e79d"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "ab0ab07cb3bceda16a6d1538fd665b45"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "cabf6a35530677ecd68401cb7704bb72"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "727a91340c7b6e69fa3aa988168c254e"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "2c01f5fb5ba3acec8089026a6b54614b"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "34fd5866de8b3065d07580ae64183910"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "e36346aea29ba5b60dc25947cfc0815c"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "df670bb055b12e199eb970dba23af344"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "5d83234a1c88c46a3cf324211276d1d8"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "6c9f93ecc2c806acee3a35dca62152b9"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "f4b2cd3e5b014fddb490f3c5dc20a5fc"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "b2e81258360fb68d52a2dfeeb54839fd"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "eae4b21bd731fc67ff5589929f6a2bb8"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "fd69f717be07db63f4e61937bd410bd2"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "abd2293aa5c95dbb0cc03832e917adba"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "967410bfc34e3dc419c402470c6372d5"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "e571cd3b483e2d97d291d54ae2d86f32"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "10e604533b647735c41de69102119210"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "72a5c1bdc627e04027ef6b1ea8134bca"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "3a4fd94b9d81d4e54433d4f1debd2e62"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "93e5f244f8381e73746d236db13cd6cc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "69a8a5c3a73be3fcf10a82d37cbcd5bc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "2ab60d2ca08730340ddea609871982ed"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "07978f69865b83867bfc933804856ef7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "d9cce14f4f7f3c87f6bd75a29becec1a"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "6bf9f15a6a27f2a571f1cf9136d6627c"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "1efff94b92822591cfbed92c3be64b00"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "d440e994a9a4a605b10c980fb0fe6bd6"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "a5f542f8d80198fd2761ffd5bf3ec239"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "4cff8c48113e16e4a000bc6a9cd488a2"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "a08916e4f84f5b45418233dff0661fca"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "04073436bce19f1c348b918d28dbe2c4"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "d3660bf60a31277ce66ef46bf3376459"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "2c17513d8b5182d322b584160adb4fc9"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "748217e04d7c5b8a1848b0cfb0a5ac95"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "469522380f8a210d5665d93758e36089"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "aa3d5443879c74abd64fae9cfebe4ef7"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "264e5ec06ec3c989a4331ce6a26c1b59"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "4483366b3deb8b6bdb4906486ec453db"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "c16bfd732cb3f450cbcbf788f72c0fbc"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "c274a05412db6a14750358d90f5c4891"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "4b5877bfc638e4390eaa5cd16674263f"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "0a1e3cde60a7fa625a8032e4a8802aab"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "3a0f802247e5e0b74d5bd1dbcf5f72ed"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "eb4a2f11cec77c1b9e9410119d06289a"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "76032a8db6f1a4170036313a8ecb07fe"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "64d83d6ea3608f300355298ff3bb8a16"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "1aed045a447c8b0fdba3269f005d561a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "1f55cca30e7e1683427452aabcc7902a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "6b1582b0ea845c25b074f48ac6992f35"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "dd32fda101711fc92fb161206c82568a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "d0d06121266c64ac8491fdb1e4a8bba9"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "a3d20af01470929ce3ce57661b16d282"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "670e60cf88310c883f5673d27c219ee9"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "41e6fd95db19b27780fe6d2e54bb790e"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "c758a786def9a5ba55cacd0e3149227a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "6ed402510163b7b37b5760d463479630"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "ec7515abc22f26a463e33a4c4bd6899e"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Container.html",
    "revision": "2478eaf1df0c7a0500129bdfd6303e6a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "9aba94a6a5b7c049f1d8da02204e0bda"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "176b57eb763db88ce6ea8f0a8e791787"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "266bdb3f2d6dcd7960b82e00afa40d25"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "480f2d5877acfff53455ec91cd727391"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "a1e0b80925971b17245155b7879841ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "2161fdbbcd0c22d3b4ff158903a06974"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "8b0f53ea003412ccddfb502864ffaedc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "04bd0f180d37295bb2c966d94a947147"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "988c645a872ba33ad09a97a0a3b1efed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "841aa8ee50382e5f4ea1568f3a8b6753"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "4733d092155739f8e0d6a416574e9caf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "fd5c648057d9b5e7fe9e6a8d8d7575cd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "b24752e62ba4456db83da3feedcbb229"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "cb3464774afe9e1dd19246b3a23dd136"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "17092826cf0ed79b9386081bdbe83bb6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "c5e2374f86bb867c46b541d66c225cb5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "3fcc00ed96ae96dab24d6260200eef4e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "62bdd38996d05eb4967b3db1dc6e9cba"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "25cd224e24bcf1ad7c4a4a1512667b42"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "b7edc6726f81534b6ea282bc8671e430"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "b256383f49881e9ba6a65533a1638c26"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "1c38d6fa39a1718a832b2ad8935f533a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "0d555cc4916e315b720265ffbe72bab9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "9238131df3c3d94c3f7c8c02101fa0fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "6d61e8e57ce9b001670196b7b69aa2de"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "18243c73f79de323825329d051dcf825"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "09d5c94582389117417ef073c2378041"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "53860f0c59a6d845e4b38a1c68ef0e74"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "783b7567b0d0ab20d515bcbe5ae9881e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "f4f87c6e69f1565b98d202e9fb87baa3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "62750945ab4a5748f9220699c527be39"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "cb4655cf63c42d35b78ddebbd853d545"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "27cc80523345f04707c806d4b4776407"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "1116c664ffee5e0ab825d7280b3a4b16"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "2a2ab66d5eb9e5c60ef0eec30fc21420"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "58a448c70c34bb9d077fa688f0f23717"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "41e6e9b644606c6a60539c1f75853e35"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "f7b8b924cbdb1b178a1d1b2c733ff9ca"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "63ddb9b2e69bb060b9a9b790ab59b2fb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "204772548d29e5415916b36c90943261"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "b89023fb105af2750a5dd20fb68f3710"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "2ccaffc5d54c2a15775da731737ef42b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "78ced9c4cd54e7d6e2a880d4fadd09f4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "adcb2e8e135653bb90020d4869ef5677"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "21478c5c9b99c76d877d54600380259f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "3dfc8c67a3890874b7131f24a432ada8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "cfa476dde766345f13032f1891477fb3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "b0c174b9068af6b45bb351e229f4d85e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "e21443bb25eb488f18eaf96fc5f1abb5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "f213053065800bcedaae9c2d176144cc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "724e7a53978b869cdfada5bd6c139e8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "2b723d58a98604455cc7113d60fb3ea6"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "84d43794181687e51d335ac0558beaec"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "2f5f2bb22406dd52935945dd8cc89a6a"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "a413e3f18692a5096970080d997b6d45"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "13d344c3aeff973c112a78e77c85cc6e"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "f80672eab02f28ebae1513cfb3ac3104"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "706461aed9d3fe1150c4285b1f9640a5"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "1d3101cd18bf78af5b4ae08b76d81628"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "018cdbe626b0738cee0cd3d8d11b59d3"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "181a6bdbd6b1a1d5b9298b644b4eeb91"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "921875c15f422a439f4bc7abc84bf451"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "824aa3f34745bd6008f7227550498f71"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "f46fe238e2a913852b01bc6570593335"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "29357ac25885af24519c3c4b7ccf3d40"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "00a17301250dc4c4e686b036b86d18f1"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "69b5c2ba00d9d12769730244c0029296"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "5ec4b4de621884cc4f03956c7fd01707"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "84839bddf98b0afea106a04d38a33a85"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "fd544da813774f1ac5cf23645f73d67d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "46c71a3e5e19f47569c6ce49366c9705"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "ae2ae83036d6ca588173a21905dffdb5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "2772a8ac7cad5b5674bc13f86bff0031"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "04490b8a6e034be0c0c8a814d8bfa429"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "a720c7c3e5b2460f9a5bc365ca8c5cf2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "73e8219eb36aa1ad02b8c567ffcf246d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "b31dc3665eb484d11d7694f47a93a1f2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "b0bcc8b25d45683bf2fe0fbae5aa39e6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "b2b2dcf3ff7e0288b4b1b0598cdd1c18"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "308b578bfea241b0e8e824bab57c1e73"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "aa6dabb453e906a8c687945c6db04d18"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "838da31c315973d572ff93a9d5d577e0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "1fbb6b62395b56f2d9eec3fdbaef4afd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "6f7429892a4821e414cc6cec5138a2e8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "3dccd5f3b147113a51160d1271a6ce43"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "b1e67cb84d86e35267c89d5f1a1f814c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "a3522e9ca6257a17ff91e60f2ea124d7"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "222f0473759a56b0f5944da13dfa2a55"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "12493ddb767f23990b708af274e2203e"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "05c2a272e13bb225df11f8a878681822"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "6dcdc93d8a4da83045e279a4f8e48f47"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "2f6daa73a083dd568f370655abac800d"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "725f2dd8e2db660eb7e6730269f0a841"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "479ce9dcd3d97ae38d81c2b8428906da"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "0ad27d94761dadf4fa35116afd70de7b"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "b969e36ca22d7065a5394212c09887ce"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "0849bbbdc957a2464b118d2bb5635935"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "8dbb74dbc3962eac8669be11371b029c"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "85ebc51ef6da1e4ae774483fdee68c64"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "10bc36329c4add97939def894b614d5a"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "0885fef0eeda4838acc4b469ec523d41"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "1f04bfdba93551b309668cccc9c6ea88"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "922494dba999942d1781c512d1dd4d72"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "dc2cfe07c07bba82721246ef2587d3b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "42d648c6530c0f7faf8662cb3a8d5a03"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "a34a2ff2f76ddcd4ec1da290ac90b812"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "bb544c0bd34c9046f4415de44d35b8cc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "6fca17decf57377a4c502a3ab5627373"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "aabaca7c912fe70998f73274ac97f1b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "119880379d48059e72d467dc03dfc8fb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "f3c01aadcfec96bec77bb68f9547146d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "58ba7e6603eabbdae26ba7e8d95f63c0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "2fe8b20ac5e6db9efe24a0dac7ac42b9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "008b82bc31e96194cbbf8784bc4f518c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "0f5c21c79698c20baa4066c614e9c1e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "165966a78004484593f4561241cc86d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "cad2a90a57d7a697f3ad5a50571b3f88"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "c82cbb91ed64cda7b9cd36c62cd9ba8d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "1949e9056f29ccd168c9044ad751c7d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "9e1e4046e38f2bd32da5956aaedc187e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "d0fdace11ac403915d57f89df9c532ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "bf8ce2cab5115249060005e85241d038"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "b117166bdfdb038ba649019cbef2d8c9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "c51ce3629506d89c50ec35b99e71de77"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "151b0e5609423dcf5427ce330dc7e401"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "6d57e40f040caeb978f3f4c46963fe96"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "e8aa4e3682214f2eebd06c692fe2f123"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "b33dd100740b9df0c3c5d2fe39a7367b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "f84d4258fe5899bd191d40b4dbbc4d63"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "36cd6c7e026fdafc8650ed7ebe2e622c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "fd170639ab0a0c7e97add7c3100ce3df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "6734ba6eae19ca53960a28dfc7b420fb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "33422d1d1e446e12849b48706130e8b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "c7337e2edfcb6d361d14d132630da505"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "edd95652447f52487d2a04f2610ece5e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "a7c367fd5ee6651fe0c480e1aefeb0ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "b8df9b1fc1808fb2f8744d4caf75c6ac"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "56453bc9a36dfac7cb5907bd2586903b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "226d5e9cfa9338edf19a3cc918309d13"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "b9d4ba220a26c0dc1902611f291b7ab0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "24922a663f748ce3e12a81d5d369f75c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "556f41b154bb3915c1370e39dc6e189f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "d81fb18be53f1118c495cc49a57f750a"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "eca244e9ed1887fe686b8c238ea7819e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "e274dceabe973e360a75ca0505d258fb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "7cd0e6e9e044c293bff67fbda64c89e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "26d50c3383c90c84e53fa54485f5ad23"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "9d58e58ca33816e10979a737149886b2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "5cced7a9ad5b5abb5fe0a53af98533e6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "6702a5b162a80ce655b630e4fdb05167"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "1cc773815c4da37e27a42dad57c8d2bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "c8ddc6d8c4ff00a5f1760814392557e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "2e7b9d863576321be20570162d3670b6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "f70f676ca54fd230947e9f833bf6ce33"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "2ccb814630ca4ed04fffa529cc9b7f0b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "90c6b3b68d10b87a0a1c67446bad9d00"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "21414c2a0a8ba19816f2030e9f1696e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ca99b9a19e97a02310fb0945b4d70742"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "df297e64eecaba12e8a64539275c9461"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "b23d80106934a2045d78856514d028e9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "7a5315a083ce6a47955532334c1554fd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "10d0a5b18947ea59547d14adf083c82a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "7e53dd70b7f28f6bed9083ba22e11a59"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "28cf5b673d1054055a4d342c631157e8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "08da52d9421a9ae7c3418980063b3258"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "1deef2ef2bfb8b16ab0258743e2c6434"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "eddb0f6025da83969c9cf1885b7a39ee"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "7e9ab6d4af8f1bb44d265bd464e5a9bf"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "3eb95270c5e3c31082168a978ed935ab"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "2c39027d99636b19f8096c125735ba87"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c37879c769aab43a5ce1975478a89dc0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "4a03f4d043404f4768e9c1a6e897ead8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "612ce73af4330e359d868a7a20dbebfb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "f86093ad10ae7c437cf7f1d671f68850"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "895694247560a60c70527d59abdc87dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "bb314b33ebd62435329cdfd597751a71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "cf54a797ac3e3456128d391d17c6466f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "5f86f370ac0bb3056eb062870cebd825"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "74c61c038e9d51cdb4b8abc0d4f954b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "fe32860145ad58247de5f0f77ae1f234"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "8c04a2478eadf73ac482348fbe339a4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "08121a609d0cae2a712138bb6df70e0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "d596da61eb08c1761e602fdcc0292a4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "7a9a351e22a861230f20ab8d456e16ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "1296eb251aef6c6d9783cb94540b22c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "6540b3fa93e7344fdfa8bb8e1393c21b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "fec471efd1cc3425ff67eab6a438b1d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "5e3e0b008c5a9c1ad92a8f7056d2305f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "7995aca6cb664f028ffc9e943056cd6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "81bec96009c8b28cfb4a0cb93e9b2a58"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "ab95490eefa23670fea6f9f8396e47cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "05396c545e40baa847e1f8cbc79c83e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "4e28172fde1a997eb5633074f026ce9d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "a3cdcf47cc0e296156e2b4cc14157a46"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "7d88c82b53ae853f76e0fa53be82a6ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "21a8c794cecb0ad7ad26ee2eb2c5dcb3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "0e8ba2ffb5824464ab02dbb5c4abdc3e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "500c8f044ce26048e5202135d9517fe4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "f6ec8ac2fcfc49a6b44b844860b8b291"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "80411380dadb6fe03dd32b3dd906ff26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "86ad1d36da976cc1eee29ab9c9ab69f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "3443b2386a629fa559da4edad84fb3cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "78b6eda23ced699693fd5f0557bd0481"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "cb5a3bddb45cad464a2703e81db9250f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "4177ad9201fbf84e358ebd968e3528fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "108be018bfa8b6ebd6363b4918d83974"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "253f816072c566c45bd8ff18a13e7c50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "65bf3de2ef725e38eb15eb1c889e410d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "1d9589a91b98e193126a61ab22cc5b23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "d9416b7b215536b7e22d8b96b8af80f7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "9c6fc613493e218f3fb20cbdbfab5003"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "f03e602e206380f90f48e9dd8b21b5bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "4d5565d9d23b4e8846fa21b066bc233a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "ba5c5eda5d7b0cc0e014333d02dcf355"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "0943fbe48fe16a48e4dbf6c5e159c98f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "04a4a40aac392d3509fb6d8936f44cff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "d02e87327fb01b2cd039fd05e8577b8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "e012f98593c4c70bc4d62c77616e3417"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "bcb05e37493bb48b4b618ca503727406"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "d7eab92014e3203f4b48cd308dbf7cc7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "b5a0dc468507208895ca1ba310f01383"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "8d4e6ff45c2f26a1abe7464ed629ffcd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "449e796ff4f6014bec198f5a6908bead"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "49e07c73e8c2e53b907a61dc6ad749db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "ff4aeae70e2f93cdccdc14e4f68428a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "daf1f7603d422ffbc293bd18be7ad71b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "618c27be0432892784146fd343ce6de7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "badc6072e94497dd405c3013b11eabaf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "a89d733def608e090874732d3bfa713a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "d66acf765292cb6cbca5284d1a125c32"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "8356f3a631fbdebcc9d440ac561d2955"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "d9355e7b15b4dca4f3d83b186b9b5abf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "a6bfb243c1501e28ff3cd7ddce9ef774"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "73762840f11754a659beb16a5487c368"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "a890ae9927a0e7e1f820fab79690831a"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "d1ecf7c0318294ea09f566b9d630c8c2"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "6609de8b6b66d50bb73d4b61b0bad340"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "727d4811e0acc58e7f11c8cd74784d73"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "a1d26345d7c47398e608439ee524b997"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "7aa360e28bdfc1d851b19e7f79058fb4"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "d70b5b93d4625f761b5d08d03afeaf7f"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "cb4b15bbbea79b2ba8a731ee5df1339b"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "663d8fda781cabc4b15d15ede8045df4"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "51219edf31d0e66dc5effd33afa2c740"
  },
  {
    "url": "categories/index.html",
    "revision": "e9a400fbc10ff5257b41a626e6fd0808"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "527b73f3a52fab69568f16273173ed38"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "7212a4c00a6a3813103d0cd4ebc3f40c"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "39308e18b856734e0f182138cdbdefec"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "070a8466c615429bb36a2a8f104967e8"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "11e0760e5a1ada1262363919c16f7f65"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "7fd6be28736a1bbc83063008c66533cb"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "71bbf3e313903fb929e8288e84daa5f8"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "5bd582637eff265d21f3a0b9c8cb1f64"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "beb690d46efceef4a1eb89de0494927a"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "af5061d212d6744ed202cab25143d00e"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "da1242371a81dc918ca7489fba9b5153"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "5635451bed42d2a567bf5897abb76cb9"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "5da0d2bf6f9e4b8dad98cdd02d7096e6"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "04b389b496ac873ce1c72cc4a0488e40"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "43063422dfb1b28490d0945a042ed040"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "a637363fdcf46a6e4b797fa16709b32a"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "39edce541c41b3837907fe8fc4268aab"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "f14d0d47bc217dc02030b3d5621ef81e"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "47884f58b0e753d381b6acc9526d4869"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "b84e73be7709e2ff9d3a5197141a971a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "b38ebaeca1187bf811b4573a79518fad"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "3b805385aee88ef04a3735f44a1d7599"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "8a06f40c67e2e05cfa68e32804708182"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "681bae93019665739dc2be0b7fc29630"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "a4a030db1729fe83fc28eac689ce8b28"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "c0b458c141819109d0ae7916d883e8f0"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "da1388a4174c2bae50014be4900b0a18"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "269a7dcac59f5370d5a7d39c7a77b67c"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "5c1ab95b51008b2b32d71505709584b1"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "362877f91fcc577576a1c57ba9e889fe"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "a5ef295f4c379c6a79293d8868ce82f2"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "dc7e0b905619d93e4205c5798fd0cdc0"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "77bf4a0f687b23118f7995f7a0396e90"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "1d24b7e40b629b0d18a7298846f40c81"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "8e142e1f0ed8c059cc67f32f1a71577c"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "3338e29049820f63f1f9ead944bcf495"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "fbc6466db25f591fa7d739e6dc3aea4f"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "b6943a7f8019d27301852b6e200b242e"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "a19612d1918754fbe2cdb917ce8aa07d"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "c3006839fcb69681b86a37a7a6b6ba0e"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "178862166c1fab246db1abb5359c3015"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "92f44c3c765a550ad1ff5c6ccaa7b905"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "7a3249fa5b5c0ca7c5bc063e38bba06b"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "3f6bf2ead3de17e827211dd532dfed2a"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "7cc2981751e97b0646ff2ecf29f92b13"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "f619bcf585f5564b22b99375dd737831"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "74a3c2c6e6d9a8ebbdbf851934a60b5a"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "c0361d7a66cce52efc38b44ae7faea70"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "811f5ab03981156645a8883d30bb22df"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "d9da7c8b23ae7ba16a6e81c70d8316e2"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "a7995cedfe3ad5640e971f41afce3501"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "c51e7bd4130b78035572339020e0144f"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "e04be49ec1bfaeff5bf3faf47fb86c5a"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "97137e2f5fecf5ef8a133459c9730893"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "99d5d0a7e739d7a0734b08076ad5debc"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "f86b3b5fbff6e240419039c8dcb635e6"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "fb14e6d06eca34843ec6d65fd2029964"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "5569765fe0b4e30136d3c2e707a838fa"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "ac53b254c0a8ac3a511b5b8c491261fb"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "664bdb64344a9996cbf92f00636c4e5f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "0d36d0e73439ad538979e59941ddfce2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "89a54029ae4b8e878bf2fe1e420b88e6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "a3da77f8e62aaa6168e6005e0d3d16bb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "ae8e74535e217469586d6b36fa82b86a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "bdb91f187b0c87c3515e072cf6f30809"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "62fce6a2b59678554b9340c0c2210865"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "206c2d51ac6767830c57075af86e3c92"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "21f492ded0a3556d11ca8cec0c7a49c4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "ac0bd54e8f5bba2945b09b4d002d8ca3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "a4f1df934c0d28ab3febc3f3f7bdd598"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "b1729a67c7f0f1e911999ea34902ce1f"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "1a3adfb2ab3289c490fc5e76a211f317"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "d29edf3cd5f219eea8a2167c4efaab5b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "de5b8e35f6dfae314460469587c11cdc"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "3b961f1e097f5eecaa154b71345ceeb9"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "852cf0ec3aa8dbaa73c9e67877ac11e4"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "8aa78e7f4ec0755ab37c8d01195a51ad"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "9c1b2315eeb94cd0a3d4b0cf4ebf0911"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "fc66e7ca2343b24642474ed9f45075b9"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "5f8041b2e2b6d62a5b94273eaf7e914d"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "08bb7474d59cf11a49c11bd52ca17a92"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "e491bee5a6e2dc572ba1081d685b0b31"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "39a34e7803368110139733483eafea0f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "d4714b48e29f1f4e8f71697212da1334"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "70ccec8707db0c36456807e533028547"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "cc64512c17509832a78443bca1d58efe"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "177b662fdf698f2b8f4ea2fc4ebf20d4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "39d3ec3a0f3fbc264792ae86638e4cce"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "4a1e50ca318ddf44674d89acb12db042"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "d10baad6ecb1c57472e4921161bcdcab"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "8c0ccd04d1961f64ae986008f0347214"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "80a291daf674f953a13ee77052fb4a2a"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "c0102338fe02dde7c6982b9cbe634877"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "c5a9d69334152aa0c45574a8f10be014"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f66220ef8571c23b2d5e39a9de0067e1"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "35bd758efbc5555db2806584a021efac"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "ac5d2765b7f90f20ee67763b61666077"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "f96c7f4cd7799c8599a6a2a017465388"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "8c31079f1c4cb4c44265bd85668f36a0"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "f82abf9541bff2eca2b2b9f5aa0593d2"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "d9d7087bc5734a3362e9cbf01d970294"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "f13dd8531426ed2c58eae18b242e459e"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "7f3b84c97bbf3f22e2851cd6c174a446"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "04db8d51b5b517dfd308fa7186ae2519"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "fcceb09c3b06e0704c99b86604c18093"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "4bdcee070dc259a68bc82bb1c6176419"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "e9b9a4563f542ccce946e8b423dd7ee1"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "91a56a629566cfe893950a3ac42227cf"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "50ff45cebd028c99b2311d535a39359b"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "19f3a055b0b1bda6a09c20426d36b165"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "d74d96dfd28d9d800b174f4dbc4cf9e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "7b6e16c06e225da922deef388941ed3f"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "efd03a45e8fb04d6ab1decf702bd90e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "afce13a8ee0a41754e97d69776bb7229"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "72baa820762a45752745229b6d0c276e"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "c9175603121844c18d6066e808d21497"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "f77c6b65063e5f8f2807e5cc00310285"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "4a9908bb0ef4c732e40103776e90dd7d"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "2db7b79e330be64d03cf2860492f4df5"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "555972b941246d42908812437c6191a8"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "60ad440d3819b42351826340f9a27350"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c6ab2004d380a5076b4c4b6850e34824"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "791bddf57d6d2e7ed508817de00b9934"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "8f3b2dd364037aa24c5909ea3ca1f03d"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "8d85b1d4c9704d6ca5e3d0d27b6f7488"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "710bf29df19d91c64bac4e8dbbe4bf36"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "4747b0d61c7bf04c504651eaebd21627"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "48732d61ff0efcbe8542f7b4f4ec8340"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "178cbfb85c543617caec73d247ea4de0"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "583b509097b49e0f138dcaecda91b928"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "2c4bd565bf0450ddecd731ff426a6dda"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "a8125ad1de0b30f5b13791bd2e8e6b39"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "621eae8fa89783d47abb4590fc2c1b30"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "dce0d8c1790dbf9e0a537165093d6e50"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "1831210ca08ae6422a9a2b9aeba6c74a"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "d53ddac94cc3c9ed99cba0a1b3862207"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "fc4c3421c598fd4817b665e924e8180e"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "02fdd89a0e3a037c9f7f858e353653df"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "34a4a107b979a45fd7ae17156cfa7341"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "82039716cfae835432ec09bbdd858c5d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "4949e486c62f1bd7a67101af90b39fd2"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "05b9c1c70661971bb81e5c578bad208f"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "ea581fe7ec373ffb5850f0f96bfc6fad"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "5fa16144a35167094aebae557567a250"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "d0e3b29294413102355ab17097b4f63c"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "dbfd8270d8869a861bca15b522f640fb"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "9bce5674a0b7a0ad78f8692d3f7caebb"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "a39c29f23997a6669e233479fe9a999e"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "b48b5aea3e6b069f8ad16c3c6bbe8aa5"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "25d470ce9ceb2eb4ff1acd39fd65ed9e"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "90fe3ff4b949527c5afba4ca09c62fad"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "deb8800fce4f43055d2080a44c9843f4"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ff56698d82f23d8db06ef3766cf4cfa3"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "5028ee9e4a715955c23cb61e87c15c09"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "b338ee660f208ccebf2831cb7624aca5"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "03482bf337f667a2350ccb115d4e5693"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "505b23828ab0ce3eab03ced547f80b22"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "8bceda6676cc256e1ed7131d102162f6"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "9bda884c60b2efdb3a4dcb3aff1db20e"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "2a837c234c3f8e755d311e6fbb227a2b"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "efb29aec8a09ac57f88f6a4eba46c61c"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "1b9874cb05adcc682a55dd748f733a63"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "36ba950e2b3a440da6ecc712727c9381"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "a357f590c1396286a16744be1603e5ea"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "3ab74937ee8897653ba8e5dc22853a02"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "084c25dcc0bcf78082e4ae06fadb46bf"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "6db231d76d3769abfeb825d3e31cefb9"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "5a67d43c117839fa5111b144e7032805"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "edad9c86330fe0eb89c2bef74193574d"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "e4cdb208dd29faa46cdca70cd07fc7f0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "f9ae5f32cccb6cbd48aecf65eba3c386"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "45c83eb1711e22e56180c86af62fcadd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "8d733ddbc305b517c662329bf84976b0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "08e7c4c22cc8d211dee1c20f64144212"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "93ad9b13d00ef0b64af29bd7e5e69d2f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "86e03ea7b351060f813c0b3639923c4f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "6c1474152afaa0e1f21025c0f2eae242"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "26832cf0ada6aa91e7d18cf568232ca7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "aba409cbd68c269c3533cd80656f6db3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "6da9a0ac95ffb6f546c5f91fc63edab3"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "9650c3c3f9ee5a076d58bc8e784dcfe5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "79b8de451f0902c4de77cefc6c71b63f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "f188b0cd1db8a23e89edfc45799f452a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "172e4c6fac4267536637027ff8724e3c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "c5e364538164d7e50848152e1e2738b6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "d50f4f184387f980f026fe7a01d94dcb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "15ee2fc89a2f52ef6b9f2241e54c33a2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "e9e4cd10c48b62c17efff4002d1d8b0d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "7f119c13d5ea578464cdcb9173ed079f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "89daeb09ce423d00a7327f25d17fdd79"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "dbc2ce21682598e93160612032c8042c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "362db945296a4a4827ef2bf4e665140a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b6f59c202a5563d44658738c0e976f97"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "cd2cf15fdf38f403bb60230125c5654b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "d653ef024fe39cde556ab4c73f56286d"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "9268b9c7e9fc650d719c6d94c73c8b91"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "cda93010faaea1b49a63bf2d9a3028db"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "6640496919e1b50d818f99b7c29513fd"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "f8b5ef53a5d2166b726da6d37e33f6a6"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "808faf566ed5ec932924519b8b2a2be3"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "ad2d28cf9ac6433868fb2b235efe0ec3"
  },
  {
    "url": "categories/os/index.html",
    "revision": "ff2f17d94c23342ad3bcbd292b626792"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "0bda7f79824d4e70d1d7fea00b5f68c4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "2f3982f972e8a26b49334509e955da25"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "5ad3924b0eb7a46f564cb54e92b5b6c7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "9117a6044370ee447d777065f72033eb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "54ae2f0c09a0fe062757baae65a9e150"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "97036747cff03dbd53aa56dee87ce2a5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "c7dde8f430f987588ccb0dc5ebdd3906"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "8b55bbdd208fc2027ec84b4b73d45655"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "3698546ee8dc958507ab049cca52f090"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "c9669f18a3806414f326bb18b959bc66"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "cfd5000fb292243c7abd1505d374cbdc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "f0dc5e4e717912e79ddc6894895bb881"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "308b75681ccce4fd1fe5ec082795a1cd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "728611d7d4e8fa0361ed1d890ff4ac71"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "687bd9c9e4b7752fced6b8b9e25497e8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "219c52ef9eb7e583e340f753f993e865"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "5d06add440fc2ba5275dda7f488c70a4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "7e11701168695e5760c8bb4d262f412d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "cf9c44fb826230760dfe0701b8dd962d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "c1a0f474457822b76bd911b06badb6ac"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "21555fc45861d5acdac4e02a7e56306a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "4173a48483e39e6f37954691285449f1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "e7be51244c9f31aed0efeb63aea6e631"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "55388fd38416598a61f9518f7af7e0db"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "4ddd0cc9b56501e8b4e962140a0a25e9"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "16c92fe25873fef609ee4bdc9ce98fa0"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "55b4ffe4c66202a276707f82d233c856"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "bac1899f0434d5a593bb76bf3784e4d5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "8207b82e3fc596ebb0ac2aece29a4ef0"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "d4e006c8f6d9824b044ad436a8acf6d9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "4cb11da15d4edd6fe3a41f4601d9d2a4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "0047d63acac6fc3ec21855eaccd35166"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "e00a566417aced4ad8625da3ffddb5cc"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "6094c6daef2e054b449a77d07b60fe7e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "e5189cdc54b6c6ff0d7d354bb0ebfa56"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "bb97f6f107344e1fab09503738cc9648"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "51e52f7aad5f45ca96e09ae87a64a8c5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "e0e475fcd2ab363d067a26ef069e6441"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "87441a1126eabb4fbb06547bccb6a7f2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "136f11681916ae4f0fb6ff8e4c98b611"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "ee52fe3757caa4d7f5f5e483af5c752d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "3b5db7979e02dc702c466590c2e9050d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "74273fde5400cf9e3dbc949d1931eccc"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "903564b2fd8fe9f290b7b9d64fe1af8c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "d98addc9df60deb9fef509549e86d3be"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "775c780699e02eb1c8a053f995e0cd66"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "b5e6a7f1ea549933fb86e77223289cb8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "9f65c56ee25c1cd62b0b0ad48ad58580"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "8e4a27f08b86801cfac5d363a70358c0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "862f7058f22941eda12efcc042f27ab9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "0c57d3ac15f0a8e95a7edb4c47f49b18"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "0103d2c63778e7b570207fc55bd31ff1"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "56298d344b97ee521ce63037eadb6104"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "22fd4a9b3ca153920577b802f87e670e"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "cc3960c106d5337f62b6bb3c1a3e1942"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "6c2ef6cf523318587cf585123f913745"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "a156f0a269b4021be09e19ebbfd6b79d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "be3e3e02dd257e4cc0e5169492627028"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "46af23aba23e4970f72825ffb79cd76a"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "c5d03645ccf7cc1eaf2d73bc4af34a7d"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "7f249bee2ccc62daa575663d97176b63"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "65961819ce6f1cb4f89c699c232c81ac"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "6e1774642d4004af2219cdeba538cdb9"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "bc10d03ab90df65ea49ce0084f078911"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "0bea6c5d7b49943bac55f214992ef5aa"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "a702e98b15b017e5a1f874063fb0204a"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "984fb2f287d2c357cdceb8ea4992d874"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "e7659d416c097fc32abece5ce7c66c18"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "a6fef6386d60ad92e52108a0e28c82fa"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "cf718093e08657905f8cf90d91fec16f"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "6e906a06cb69c71cedc146df83a61c7f"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "ed541f91e235f56cd4aa3580a5a3e56e"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "06a13cc100e9d6a3d1bbc0d1446ecf6e"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "654cece6be18d1c9cb17f3f8bab668b0"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "063620dca89e632a0012b0a2e6a0af15"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "8ef60705c19c039154b859f2c1618ffe"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "bc5b2bb6d25da17f4c1624bcf5704b67"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "94d42b7589e88faeb66c71d59be3bb0a"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "e3eff8fe5c36c2581329049c56fd3ede"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "e02ac8b32284947a420b740934ac15cf"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "95817272d8c226aa153a4dde64d74a22"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "b99dd5aedc50dada8fd4830e3e9e1958"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "68231b2ebb821289abb0c1021748be36"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "ab4c7682e81a39ab9d55853c96fd3fff"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "16b215a77258597f3daeb2df11acbc2e"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "384f42e81e71111aeb187364c57e6b3c"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "790682a776a1384fcfd12632f14a4b21"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "62e7d636485cc7d4e16c47b828d75742"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "684147460b2250127b7e021b0556e855"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "f5584cecbf583332b193afb2adce8f98"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "1765fefd6c2649bf7e49bcb0c14f2e67"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "fbe29b898d3e9251d09b500a09e72c35"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "8daed999cf3cc0e138b923765fd334b6"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "6ce44f2317374723b3ecbb4b87b94026"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "c51b5780736ea86e5f03c0cf7c6464b9"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "0c610f0cc691f83d35ce776eb64708f1"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "74d285c1604a60e1a6f82bf059e15586"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "826bddcac728bcc2df542790410946aa"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "4599423f7f0b12272f010d5d77ae063a"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "adbe7c19e404c03874b89f7f7e27e3b4"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "4330a85c6545be9700803e8557db4f10"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9e184ff6df8f7dfb68842e517513a2f5"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "dfd3fd8b3465aea5066944870bc49b3d"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "ea6a7fb05a9e9dae41de439ca07f76a1"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "5c7f9d68e7903661b8487fdcc9b40e2d"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "cfb05a2224b45d5bf8a699e16b72a8e0"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "7ef3eb7147bb7547f0ad772300801805"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "5169ed399f44ea673833190e65c8df98"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "e7190f3ab191be0d1a6ea623ecc18619"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "77e404062ef7cd4cceebad2469576e55"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "8eba3386b4831c804e5e57f9cedaea0d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "bbefde321a01f348f9b4570b6f47a8f8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "e7fa6a60596b13ae3e1859951568a6c4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "0ae87fac68877747229dea032468820b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "7247bf68dc06949a1ca1b4cbbda6f277"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "a9962ed9ca776768bcb84a3c47fdd9b6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "2405a66c369b16d0431e636f623be62d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "aac57b5e01f2a512041ed2d1e82a5b13"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "0b0402924b540f15cb9dca30cb560de7"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "cc0e6156749d11d27028b453b916b6bc"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "92256dc302cb1c8916b8326ee36d7ade"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "ab2a5e0e74c70ca2ddf9cc7a977b2cdb"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "97a0e8865095766d69ef4f62a1d1fb09"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "3f210b2dd03699c44169fea4118e65bc"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "5c8671c38dcd53d22594e024e5602434"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "95460af0d3df2c23ab3e626ff12cf09b"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2a0d42f01c0f6d31cab1ee05e47abcef"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "5b09d13605b9dd3e60f01d46e7dde36b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "f3b42ff4fd376fd65d1984db558f9a67"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "1018f2ad4aeb034f27f28c0a9270a216"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "1b5cb0e0081bcb34fc20a0f72cef365f"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "26ff69973cae6365f6423aa62be6f864"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "d8b70b69be4198d87dd70a4687f9b9a5"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "ffcb302a96bfee571fb3940d886c624c"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "9f97f13858f5fefff0d73ac4981c6cdf"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "a01a5b2fdd20b680a3aaf3621c5d5833"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "2de94f51a53cfe5feb995a5bdc1b4c96"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "004be7637cf9b77316013b50f71d9efd"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "4f39f621a6d0b316077672f9848ef210"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "08ebf868d40752d413067515d328b0a3"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "c34caf1a86234b06df2259f9e950dcbe"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "145b29d8ddc66fd0c2b0040501d4bafd"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "953de3800c856c9f1001d81441832153"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "0af6728661d775cc09de95bf626fd460"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "01a47a030c0fc29213832b8180d4d8db"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "763532833727cf1249f33d39459521dc"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "6705b01c9cd7418a116850dfeb485b51"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "fad16cdcdfea15c82440d0c5c9a7bd39"
  },
  {
    "url": "categories/php/index.html",
    "revision": "e81b940f1572c3da24cb065c32652bc6"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "8fa0dffff86794d25f7db0b6332b3deb"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "1c00c836ce2f26c22939f42b79ce1e30"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "4eb10cc7892dc655cc8e6038abe3b7bc"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "e76d0dc05e88da66c69a369c56702898"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "85bfbe2ef8b2d77f50f511ec4e5957ab"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "378c04e0518de938e2a607f772a2ffbe"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "830fde2294fcd5010bdd03f40dc593d2"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "2d5a859c7da7950431d8cd2a4c1314fd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "0da0e44e12a134a6e02ef9670abf5f44"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "8866b84b3e7aea73ab81cc2b94526756"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "a53afbe254540302a90bf71bd3fa70d0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "4718c7c7821ec1153d8a52ab22883564"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "1ccb9d774e356bd33057a623c5cf465c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "f7e52ce56abcbbca3ff0aac08cc8cb60"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "5400c75ec8fa0dc57e30da2fc65a03d9"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "c5015b6783d6a2454ba0727cf708e798"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "62aaa1ea23ffd9a967e5af127f61732e"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "ac1773c1ac3c5eea6f93cac3f2e14b33"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "93644a751374e27fdb90966c40791ae8"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "1b0b2b1f9153393a10387aedf363acfb"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "7bcac294d7d6d3f7eed99114bfe6a235"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "67d5e86c9f1cfd557cde8e327bdf83de"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "2d8d6bc3d0e31cf82ef5efdfd93ac87d"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "7e1c0dc1ff9c2e9aa8ff8433f856e509"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "85869e57840a479d692ddaaf97888d9a"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "c920d6797467f3fd6655a7af4bc3bf3e"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "8fc708aff00262051db6de29eef1e0e4"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "8a1423c3d8fb94d4873dc7b5b17e6350"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "4c11157c926c49244bb4988d56ef0e91"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "51cd95b2402559981e45ff2c0b61de4f"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "229893dc4079a61814a472423004c5d8"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "50ccfdb9cba04723ffe57a31b2c2b37f"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "e3b322318e89d5e2376af049ae65d8fc"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "d29a317cad9f72cf69c3187074b8557d"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "c462e50fba83191e974a519a5b751a66"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "d1a4716aa9fabc30981d5252cda72fd5"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "5f3363879e89d2b12d3f3475a7148014"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "41f6fb24bed0fd8066626a3c10aba00c"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "70d9d4269fb8c5aa600a8058e386896a"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "9eb078eb23fddc87f3b9545fb2b86f81"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "0a322630f2ce6eebc500c4514d2ddd0b"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "74c49966d20b7d7767ce44fe1e76b5c9"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "4f5af66ac8903ffe6b7f8d7c8206b292"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "1aa3eec7db9706eaaed5e218851f3733"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "336c6facef04456c4143e947be83bfb6"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "34cd08feecbc68116b112485511d0e9a"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "cf85951affb622f7a954cdd620f69647"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "7d96434d4cab3299aca9916d032aeda6"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "78f51a969a677be5ddf5b3b68853a40e"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "ec1afec7fa19aadbc98450e5f97986e5"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4fdc95b00b82949424591b5c17e2b3cb"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "7d4c9301ed72c473dd974b93fcfd0aa0"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "bc43cf4ab34ec972cc66c2e555f53475"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "a6cce8e4bdba642d435d9a2dce3a2dc8"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "27a39700d42c96276592c4c64e3bef9b"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "0404882e880a68ebcf3d0d104ce65c65"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "d393683844d2d102691fa7c1340eff09"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "8a290c2aacfd02cf866db8331e28dd77"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "a3974743392dc46ba4a9802cde4ec413"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f6414c38a8c8779215d319dbb78d145f"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "4ea564734c54f93f888bc8f304a10fd5"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "1e999bdba58c58987b066f7882e56006"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "be137ce14e1900c3846f106d490b9616"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "614adc5035a1348fbd7f2e66399e845d"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "560ea95aadcc561f9feaf4fa7a712406"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "76c6953e60188368611fc19411085775"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "998bf026db5d45a9c739561c5aa4967a"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "85c56b1aa791f765128cebb649fed7b5"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "599627bd9d1e286f6a2ad554a0814238"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "fbfe52cf7bc5be6417720af630ce29e6"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "2d717a2cb75a6325aa26870631f8e130"
  },
  {
    "url": "categories/system/index.html",
    "revision": "5fdef1f32b1a913e9c107aefe802c6a3"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "d85ec3b321bcdf2557a6346da397f337"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "00344723f971daa4df96171bdfa963b8"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "3e9db6a71baf6deb3e63a5475ec65685"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "242d96ef52a8294fa7852d804239c22d"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "ee69520365d7a07e33ed5bdbac1e0604"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "57dc57c02738abdc0b728f55c2292c62"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "005be4f002b3e9a9a22b76fe1b32c33b"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "e6eb33ba8436d4f8a327243e13482432"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "29936925148dfe78137ef280810bb607"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "9e0c326332b818d564e6df34e09d6141"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "b6536a0f2b9d6eea70767e8376f47c13"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "8df3f13c4645252bebf4e47e67f9dec5"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "5a1743489d74ebff506a65872ef22d7c"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "12bbf4acde47239563813e23b8df58eb"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "5b0f79e93989d417f12d0071ad3ecfa0"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "262b7563d3572781a967ad0c7934397b"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "1e1671ccfcffc96288817f63b0fd657d"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "79de8ea399ae4d9894f864bfc4ba181b"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "ad3676cf1ef2909a61269fc608a868e4"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "74a14dd144fe3646441693e786f78ee1"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "3d80d1a4f18a0ea3349889d9ee46b475"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "50145ded9f799020540221a3baf1a9d0"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "1753c706c13093459460f6f0ddd91d5c"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "575b2b7231a7a65020b074b5d561884f"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "8fd15cc00cb72253fe9be8840d2d0428"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "deb4dd4fc3f836e338878a7b7c75c1ee"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "2ed4cb227bbfbb398f50f0ffd550633e"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "8ec36371f793cc74c15ae4952259ad25"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "64ac830f659e5e75bbe4550cfe39bc5e"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "7d386905a45983edd425082a0be4ebb6"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "275e0856dc294ccaea278efa21686b27"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "85d778bb35ba2592b9fbca394ace1821"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "271fdf4b5af692af4506fcad07336db3"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "758984d5ba3672d71274cc1bef26812a"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "a0810b60fd730876be7eb55bab8fca55"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "969158abb90790bfabbf491ed92ae780"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "5dc36b0060b3c4aa4a29dd045eedec39"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "4dff945b0c5c136e649972a1c886f857"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "bb0bbae52ce72f26d4e70621a3492c98"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "814dcbd481d2f619ae05fd3dd696a25b"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "5f4a9036a8c3f4e10b27661ab085bbb1"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "8174aa2638d2b29f983338ec651f1fda"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "74b480998a68ec781faeeb29786a8fb8"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "d4826a30980e817e202bcd4916e0747a"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "2aceaeb393ca7fbbd11f306526dc47bd"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "b2d18bb77f79aad80f1d9db8fa2382af"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "ea954282d7f8ab52f2be6081b5524e5a"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "d3cda282e9834eea76a2918f14e4a2da"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ac5d8c31e5db30d83002d44506651337"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "068e9076fd177fa5cd9347add87bf64b"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "fcb5b0f529da95595060a5b37664d4e3"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "2bd23e133dcc0e468218f38af06468fc"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "5c4a7d1d7d14e3f849586f29a02ca863"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "7a29ec427db9ece6768385e3f0ea884b"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "c52cd73386b4d7bdcabd15a169de31b0"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "a3aba4225a13deb87a057689504109d4"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "97979f8d64128da70c6cb538891f49cd"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "3f6e596dbfd4c57514b79b1752e3c87d"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "c20e1643294128bc7f3907e7c4f10357"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "9b283393bab10d771ca5830f99adcd28"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "13f46405a70d7e45b0d647021df03084"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "38a70e9d1bdf1c21b7365427b691bf5a"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "5aa7f17661ff4648fb89a94b5cbc6ce9"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "f318757c32bdf1de87c3f87af9e88dd0"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "d50c91efd09b00d08f50c44e9ef6a875"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "1b9e002f5a2fed27eece80c405cfca60"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "e8d48ed30e539f4b3c3dc3a7521d5a3a"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "bd34d9fa34cd44b0f193446183980e14"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "c710d70a4138b64317bf89e35f543aaf"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "fe6d201229dd7fff6ba77862c43a811e"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "4c308a7678cce4a2baad637638f2c57b"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "1e2ced7de9a563d51444f6ce204837cd"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "b0b56047ce5009c57b1730971f0d05c3"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "27b5ce0bdfed19118f7da7f5c5c12907"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "5929db2f4e1848ab5c8d1b3d8d2d6f78"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "7874907b7c4579472cf8030d60f33653"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "a955e0703faa360a506468601af718a7"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "619d0ba9ec909eaf5e52fef2d9927f93"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "85143fea0b2d8e6de252cdc742972600"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "fb68828286ed50395d4812f81bfcdd78"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "13bbcdb72d57af8360efd96e4a991974"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "8cda470e0fe632b1e436f10ca9bf402d"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "67320f5784b959489e49d27415f42600"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "d03069c2c7179ac2ec1e7f5b9dac3423"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "607633832f9aee072fb80e83f089c2c9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "dceb11166b4d6e338554b353ecb75870"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "2dc1a2161438a30c234f1569cae5113a"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "c7d4725b05c5d8a593583692462a0fe3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "382189f64e15ca31f7a5ab2109f88116"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "aa18460374377318d423e35fa3618023"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "dcc37ea7d67a5396916f69e2a51674be"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "b246cccb11ff0c08f8102ef32c833a9d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "1b61208bd039e0a19b448c4e1300bc4d"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "7b12bbf24c36dbfce9b430239e3e0756"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "6f8b920492db4008aab2c89eb2406cf0"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "cda76311284c675519372a7798f077d9"
  },
  {
    "url": "favorite/index.html",
    "revision": "a7299c346e59a4aa88223abeba23205d"
  },
  {
    "url": "index.html",
    "revision": "3c72f08267024a26706568477d82bec0"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "aafa677120512cb11a0488347dfe9b23"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "62dd0a9ca4e5ff019cfeb14d955af6f5"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "baf823d6d8199b8b58a93f9d81dce998"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "f3854f550f083c35a58d39d89f517269"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "43c7eec8f3749dee15b26ac412d102d6"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "f87feed2b79dc7da9019cd8205c387b5"
  },
  {
    "url": "note/index.html",
    "revision": "9345ac3674bcd00d8fa96e5b7ed09b06"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "64f92eee6329e03fd4d2f5729f784391"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "5dec9aa21044e249ef69a0b1bfbf3160"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "45e573b10f4890da44fba3cf5108cfb3"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "94510e7fe4644396e900baceb15ed5c3"
  },
  {
    "url": "share/index.html",
    "revision": "e0112013420066eb1d811dbda2d3b0e4"
  },
  {
    "url": "single/about_me.html",
    "revision": "47359651f29787361fe5a19b7c9326f3"
  },
  {
    "url": "single/all_article.html",
    "revision": "1960b9e348a85acac8126dec2241f0d1"
  },
  {
    "url": "single/welcome.html",
    "revision": "3e3ce41c7a0447ecfa5b998a7c75fe8b"
  },
  {
    "url": "test/index.html",
    "revision": "8d0e6045aecfde17dec9ea7243b8f43e"
  },
  {
    "url": "test/test.html",
    "revision": "d86edc44ca91d1574b944156ad8a4767"
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
