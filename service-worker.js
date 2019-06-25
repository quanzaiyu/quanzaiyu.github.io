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
    "revision": "461af252678fa5c4dc696124cc3f070d"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "c7849e7bbec3a55418e6085624999a93"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "48cc6dce718e9b56a4d0ade26869d6b0"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "60a5354d443b1c4281c1bb9496db21bf"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "07185054bc87de188fa00f0f96615f3a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "07c9e981f0fadd12dc3e3ef96ab01407"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "4f5e465d1892cec8bc0e87b56cc88bd2"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "8ebec8c44261c47daa46ba923c8b4961"
  },
  {
    "url": "articles/index.html",
    "revision": "00522d2cb0d1878ad5b392ad527390eb"
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
    "url": "assets/js/1.498ea54e.js",
    "revision": "0eaa52741afae9e3e145cc497124466e"
  },
  {
    "url": "assets/js/10.5199bb3f.js",
    "revision": "43f4249bb710c9fa7a98e7121a740f31"
  },
  {
    "url": "assets/js/11.599ce28f.js",
    "revision": "8b0301fe59cba5d27ae4d1277c3ee146"
  },
  {
    "url": "assets/js/12.70e406bf.js",
    "revision": "15d461054122cd6354cc94a92b39d551"
  },
  {
    "url": "assets/js/13.c1f37e97.js",
    "revision": "363252b855338496045cebfae9817543"
  },
  {
    "url": "assets/js/14.35572a91.js",
    "revision": "de1a93952d6eb64a2e53698907b7e0cf"
  },
  {
    "url": "assets/js/15.f9b488e1.js",
    "revision": "4adfd2f1f8e42529a27dd631e2ca53ab"
  },
  {
    "url": "assets/js/2.e89ceb0b.js",
    "revision": "c3e159b85cb72a96cc8737e6c31077f8"
  },
  {
    "url": "assets/js/5.fa2f35ee.js",
    "revision": "903e6ac8bb946d849faf696aea191ff6"
  },
  {
    "url": "assets/js/6.4b7a4d72.js",
    "revision": "2524fd8e2d77858e7c917af9e5ffcf69"
  },
  {
    "url": "assets/js/7.3a442e8b.js",
    "revision": "37311065e17809803ee8ee71be9f3c14"
  },
  {
    "url": "assets/js/8.49a9e85e.js",
    "revision": "706192408c4fe1bc66a43b542ddaec08"
  },
  {
    "url": "assets/js/9.eb8a678c.js",
    "revision": "0e4ffc7b0e9efef966ed334b080b6c86"
  },
  {
    "url": "assets/js/vendors~docsearch.12823743.js",
    "revision": "2ff0beef836d9da13ecbc107ca4865cc"
  },
  {
    "url": "blog/index.html",
    "revision": "0db97538063589f7db4b2de33ffa272c"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "c58206fbd86a27023832f5abea8b26c0"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "a4d75e8786dd1b709482eccec4e78e4b"
  },
  {
    "url": "books/index.html",
    "revision": "91a05d7c1711a302ce33f229d5b50459"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "affa35f0ed89a0d01ad7baa9177bca11"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "ee82ee350c4a0506c4da542726705243"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "6860b8f18c9e7c7bb1b0a0edd1f0ffab"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "cf9a6b9ad0872234b1bb5bba6010f8fb"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "bb027c861a5a0ba3783c8d3f01b064a1"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "dbd74583b6b35ea23fd581a2ad73e6ea"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "e61e418ccb8e78324a60c0c40b12fa3b"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "4d6a006eac5019a42f7031c23c7c53d3"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "e1a7e3425ecfb098b81689d346408e10"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "bfad29eb66dacb411614d86c918e863b"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "f703136b5b57a336d99dbdd7af007b98"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "c1b6e3c6c80cb929dcd6b25ff17e1340"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "84bd8071ddeecdcc00fa514ca059f949"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "67759e0a5ae35c86263f22dcade3378a"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "145b6041b161517584929bf52dd64c47"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "846e2fec5a4919463f2ec6d318aecc7a"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "64524f4448dce1b3bfdb13b5fbe9404b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "74525edab11a768aaff4953352d6f787"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "9b04af54367ca4f87d33fe959b34a2d6"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "6ff367c72d69f3824e42028938666acf"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "9dc788a5ca9946b17b1efa91ce1e034a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "54a7d82eda267555cc5b449136ca81d2"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "72094dcf0254b438000bafe81e0b446b"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "eeec6723ffbee657f0c7b7c444a87dbd"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "876e028fac15b665f396b8c7e0cf7f0a"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "e079135efc65683c6751a94b4021af1c"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "6f20286be269e0f371da9bdca36bcd39"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "18ee45e5cbe1246e1d1c7866b296f5fc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "065877f0f99d16031c27586bda59cf44"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "2a9d17da8050c2595fd7b052ec378fa8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "779a7939574093f3d97f92c9bc9d2af0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "43f5d33bb6604abb493017596261901c"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "3e7d8bdd127a5729918d4a5682501aa8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "bd73c6c110bfd505bc1e4e222efdd961"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "76a474024556989b1f2c39e8fc3ef0a0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "3b601ea3c9a487896b90b35eb0485b74"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "cabd362ba2439dc9a84fdeea8380bd2a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "abf736e5233c983de5805e5149dae6eb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "4f04d57dc07d2d333ea46cfc33baad2d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "57581c1657150cf6818e7db594337d4b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "cf60019e7679bfdfab632385d2d7c486"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "58044ccd08e1353c855a574caffee3b5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "707b68f629c44ca4bcb404425c49d65f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "b0b2518e5eb0d505ea9ad3691be92c43"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "146ec34593b7e56a465894cd2c386246"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "07363dbf158e40fefc9d4f700f065417"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "c069afe70fdd499e00df24766d503a1d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "0e07e1481f5a1e2a265dd912dcc7e177"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "3588d217c1b239ccdc207fd843e75008"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "fa175ae6453edd0b3fe3f666ab248729"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "d6e750cbacba5f8d2c4755c2dd5263ba"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "22c64884e5f831765fa864afc2b472ec"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "61db890d91f5b9c2e1b75c4229f9039c"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "310f93cec516e29b9c54dd8aae69c8ea"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "e7dade2b8d7b6fc6d1af31eb5c2cac33"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "7018fca38cffce0af129529206e0711a"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "3789e8bff91b28a5008f48128a6be2d8"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "4bb4ec27ac91408cdda76812d895860e"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "c522429beb49f135950ef7a2f543062a"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "59feccded7d7c71d81a98645d5ba6c24"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "97442da8accef7a7fddb6f5a491421e4"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "aae4f363d89072d9c33818445300705d"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "477ed126101b9ddc248855c804190164"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "ccb194a0f3c31e52d992d38a68b4f160"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "4ead5c9a93d7f6f8e496ac324eb7bd6e"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "42e94c5e6661e634ea8b3003097c8e4c"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "55239287441783521b2845854be66c3b"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "2c859782a1bee5ec00011ac7ad91c827"
  },
  {
    "url": "categories/database/index.html",
    "revision": "093ea5debab2aecef894c100d5db1c0e"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "bde1a72a4be82ad5d8f7bc8bcc5681b7"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "a6cc4d973d440a1b23556dfd483cc9dd"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "f9c991fd88bb370c07646c14383e669a"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "b387d0947c0d47d5ccbde263b0c01f2b"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "f376319835ef138740f946979022fc2c"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "4133ad6ed3610e3ff29a4a8a40897b96"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "01466d74a3cb70b45ecd59fbcd9f3434"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "c1ea399192160baf4a18a61178194c90"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "a5ddc91e13955c198dc6bc0f9511bfff"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "bfc78861d410ed6893cf20e9339145c9"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "e88621042ec5bde6fb5d83a86d2d6e1d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d5315c29be17fc1717552d2cf5997e07"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "0775c797bd8112d8c2c38d5b99b49b18"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "3ec813acbba69e04318ffe0394c217c1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "3a8b75891b0af32d63d19c5a53da4497"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "faacf51c8e1e73df4185df27410af1c7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "21ec9579c68251ebd8dff410369653ff"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "2d87887975e08279b21669a325a7aee0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "d2dcc989e9eac99ce8aca2b7f338bc3a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "f6c1ad2d78944e711413871a7a7f597d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "ad9fb987ab873a05d06ba52832d8fa85"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "fa6c35e824c1d2a4eb9b6d6da2d9a645"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "17a9b04122ac788a1bf2d1716d431558"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "1c0a91234fd667d63d4ceac54909fa4a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "9af52f28db698b458525783fab8e3928"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "98d7d597a498cc2bc86fe08d19e5c760"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "86fcfb02d493bc332135d0d2ddc5a19a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "5df48e5f0220d7d434a558907546fe7d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "9926d9e98f2583d87959d3467c82a286"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "38571df1d12cb8da38c6c9fd4daaead7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "8c23e2ea468c8949400e5539fd5c6adc"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "6ebd1f1785f6d0f203f1ab38885308ba"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "d93fa4ac23c2ba931255cf0b46666ca2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "416e7c22a3b9a8c363bfa2b5a911aab0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "52c9fa039ba01da338ef400dd7dedbb1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "fe3bc6013e2c00a2f2a8fbf496be562d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "a035cd2a6e1dcf6f0cddced98746f301"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "9c117d4f5460612de141e13c76cde76c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "244f3c10fd6c7a5d7d13aff95c0e0011"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "0bfbe85c441c551b64e18b26b54e3d18"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "fb8a26c6a2ba60764da9d99d2d251773"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "c818e6eb8b29eb2df58f906068c8a19f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "66a5c5e5d023fdf3a323fe039ae5acf5"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "6c27312d41180676fc6ed91131d6f8ef"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "ab3ecebabb3cba1f6529ee38d16f4cb2"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "4b676d71b1bac18afc6e42c4ffc499d7"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "be030376da38ed89ee74443542cf548e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "9605f477976cacb52e84d59be97d07d6"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "b65dfdd6c274b2d67fb993f939662eef"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "9bca31cd794106e884bd7218b38ad383"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "c868469f5773df3494a3cb9f460234d0"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "4cd5904fe9052ca8f13f56fe48ffc8ca"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "92efc239df979be567430a7fb36b2c9c"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "1e61667f814c06b8c2809c78c6297277"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "b8eb1d8520ec2f1f9030b0ff3947f101"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "375bc00d1b8aa0f02ea131eea3eb9785"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "457e50bb70c3c0564584e812d5301af2"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "69b1e468117ccb115fc13d0d8b8d892a"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "7bf2089798ebddd37deaf6b1e8b9a736"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "bb070a7be2cbc48fb084681c8898aea0"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "8135309b971342c44b647f5fd1a072b1"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "59dc1111da68d1ebc705ede6f9549aad"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "f38053ad5b32ef99f551b9947be341ba"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "84c69ebbc6ef6b9619136f800bd5a6eb"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "378d1ea35f0298dd8e411184fb6b4213"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "f1a112f66b6818e839f62d06d42f605b"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "2623095e4b605a4fe6fef73cdd581ff8"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "6c0353071482325f491e60ce9bd07efc"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "3ca5676811c230720f75a0090cdebc64"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "7037a8b165d5291ab6762c33da7e48bf"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "27173d5eb7ab71e83693e8463aa52655"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "087c5dbb20e6b9642d11e95e263d753e"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "f7d32e53e9780c5441cc6f864812574f"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "9eb6872c046e10ec6e503da561f7702e"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "f755f9651119b0cff76343f3b8db2611"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "dc5af5aa2182cf3be3818ad7e1c51172"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "917332fd9c7aec5d7a8daeccce2d33d0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "d240999a67709e560029979034d47cfa"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "b26f72ffb5c309b4e4d48739228aff4d"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "413c4a866ccdfc0041a6e4edc331d3ff"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "90cda4370ca4e593a4acf98cd43ccfb4"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "ef45bc9bb479144a75266e5c8456b231"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "c4924bbdf5ffc0acd558b65a0bed2140"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "9c298a185173e7d5c01f3f1000f20e61"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "68ef712f50b955fdfc0b8512c56d5048"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "2e2b6564dbb30213bb6a6e1d496fe99a"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "ee2ecf15f73d8d8fc42d0ff99ae3d4cd"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "59702bfed69aab6aa54fd4e2d9576aef"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "612418c3d0f23a89879f561e99d6502c"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "40c3fa0acd72339b7f8819d9050fe3c1"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "52d5db36b25698ce4f4ebbd89f9d660a"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "216f0db0a3f90f76161cb5f50d2124c3"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "acca29a2a12af86f904152b5b167bfd6"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "6f5479fb06a79811c063df17e9b7990f"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "afa66c03683a8a87dcccbe0d88562b41"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "c6cb7d4a4502fc600a20bf54ac496c59"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "583191fb98ae09cd482252a2c37732b4"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "a8c12aa296c1b0eeb6ed997df5dafaa4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "d013e44bda2815f68ebf31a6e6cfe492"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "35faea8ee17e3ccf63a982e09204fafb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "30b85e84c868380f7fb6f5faec10cd1c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "864dae4e980fc3d26475ba85b2f99c3c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "372e2118932f21f31e460968347308a8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "d75bc7a30d9f2247cfbf8c2ce4468837"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "6fab246880cfb66a9e89f9feded4084c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "a6648405d39c607b4636729dd77c1e01"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "3acc5ca77a643ebc58bf2a36609118d8"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "70a55d53037e97e8bd032b2115fefa48"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "d295d1b86b7d806560c2aa8c706e59b9"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "5ba10b5422129bd787cb0fbc3f193673"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "9426bea181728ca293d50655e1b16834"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "3b5684b9bbba9cb759ae274b7a04a4df"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "dd74429bd7cb172943d080692353a2bc"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "456f64536e408ac6efd0d85a0e7d8b03"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "7e493eabdcce94204c0d48b4d94c0caf"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "87626b0e141e960163b6d9d7f83f580d"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "18f8fd855c31f160559e2e9042ca779b"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "18e604aa86165fa2c0070eea4067f884"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "b9ec8f1cc7f6cfdb6821f74f010e5874"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "b9138e2d2b0aee77e6dd60819f6811ec"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "f9b48364d6633a8028c3050a3ec826ad"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "1756e47853ff4c8525638f498b898332"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "694c3f13db3e65e9b00c0160190eec58"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "297c55cbfd314874c5ae79be95ed6ace"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "6b0d1dfdfea2fc13f66263df97f986f4"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "cd5e2627e4309c06618da2e497547263"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "18f5b07bc06f9440c8d9d0daf457a6b1"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "da461a5d294df14f81eaed74211bee05"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "95bef22f262933a2a536815eed2879e6"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "cd36de2abb08a8b6b62270d2bc0d15ef"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "a2d4362ea27035d4ef6777d06be48149"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "de44c568636cbd706665469357720fed"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "4dbaac71bf10adf03f68d340aec52331"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "6a71306e70329d04b6d9a23d120841e0"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "78342a55a18609e1a7f79a6208d19f0b"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "37731827377627fbbbdc06eab7b10ab7"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "fc8cfa1d80aac9844f062454969f50ca"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "35c614a6dc2be72adee7a5185ab2213a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "a7b6a71e1cb379525aaa46859ce63544"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "01c726aa3ebd2bcf3f80e81e7ef106f4"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "7e6daa3aa3cc753b1f35cd2958ddeec6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "b49bac9dd3649c07abcebba378b4b444"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "b01788cf4df8d9a0d32116df90ebdd79"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "f447510da659f1a500af1f82b5d0afa1"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "729ce2bc6e6902c7844167a504b31a8c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "26c21eff9f5cb3835da59389a8576686"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "6653d66b34362d509cd16abefca2f6a7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "4fdab6e170d0a870e82475b839eb3f1f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "5003de1b641725fb33fe24057373f697"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "7327299d7521e2db6cb57e1a4e81375e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "a42aff8c98b85f620a38ad9a47300897"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "8e4c48b72dbe9850c03888df43a28ca0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "8a41a76d0c44a017ef009941347463e2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "7903d286b768093747fda8f503003c9b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "aedae5f943c76a054e3b2e56951106c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "9640334b717c701f5f2d85cd28669183"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "3baf0dcf55169b5d05790be8629636a0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "b3088b246e348a0991d6a4702805c784"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "addce57bd659abdc3a014f8edc1f6125"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "cd0f5da1fd5dd068e599cb65258600df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "f17b40fc9fc1d4bd2d9a2e57da98e878"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "775e27c87afcd7caa3f0e30f94bda370"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "8a3edbf6ba3db2f06559876099e5a57c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "01692b09368166f21f2eb5a53b7fd8cc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "82738e0c7c9e118539b2036277c72f82"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "b61f2b9953265eff01b5e5cf6c26393d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "bfeeb7613b60d052c16df5d5e1ed087b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "256d3df1bebe3d056f884c70d98a16df"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "233a607441f74275c0257f1703722ad9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "47dbdcc53a57a9772b35a90c57d027f2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "72f244cbddcba5e0f3ac64c8d11792fc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "fb416304e26d50222ffff0e40960402b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "d3a647e05283f14d0ac9c5d3f900e955"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "bc6c55bc776d86f34b6a5be45a0509b5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "b075458a86657237e7b633a22fd10251"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "eab0566988af6d48770e40c1ae703a61"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "25395c7d10c1141f6eb4956e375ec05f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "ae067394f0d5c5b297cfb4ade2ddaac9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "3f1721544a704d1912eea65e91d64f0d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "2ad851ac37da5a9a77b00d2834e73ec8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "c71faf77cd8f709fcd3968cba000fea6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "3b41063052761c2b1071d3ad2b068800"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "0629148e46565ca7c588b002f9c52cb0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "326c313c8d43a5e31b1bc48fe37f74ab"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "a7b4793fe48c9faf6aca5a3caf29f21a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "ab62ee40a78929ce0472870733c4b43e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "ad0af64cd6881bc953b804d8c8804d25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "a948da07f34481606295f2df1bf11a75"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "69257d7caf81ca4d1b335532d3d2170a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "d30d22430a46a31780a97960dee009c6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "7bd19c214c850228329bf1b282c016af"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "8427578eef57839e8be087f6afe43ca1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "9e1a8efb01822d165d0863474386284e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "ef073aba761c6279d8078dedfaeea7f4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "73348a9f1be53ae8f99c889b3f7cbd29"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "735cf8cb83827f8caa7d1c054e8be415"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "e8be674d74689085a65cf580c8ae3d11"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "70e9cee6df9fb9f866be60411569a19f"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "b618eeb0bfee0cb97c1fcec38255f99d"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "017c56ebb7630ea26e2a3ea4cec565dc"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "f59823b7830649fa1882731826850aba"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "344f0d902a7904ec1cd4eb5926cd83e9"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "0daab2c9c9d227b9074a2fdc1c8365a2"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "7453a03fdc976d3e0348c4376df0bdd0"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "eef8895458845a2291877481846fc96f"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "1f0e34ba7fb79b9d57cae37e090427c9"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "85681cdd1136e9c6f472647ed161ceb5"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "42747b83c7b4def7bd630804fa8153a7"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "e50bb0a24c55d192ef97ac00a497a742"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "91e4db7a1549e72e29ae3d2709a168f0"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "71281f93d46efccea6bb9e1b77c5b0b1"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "c05e285be9c18c78e4d5894e3259fc89"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "3c35a593d779e0b7db8f92242735ddba"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "8f4116fb6b0b4f035a3ba36456409a0c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "ba2c38c8ddf9c598ab4aaa6eaa3a6ae6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "f27fbe6c5265e8f94d89c7b4f2ab9dc6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "9faa3777d6ae1d73691a3eb4bea0b931"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "c7e6762fd435c0e74815ccaca7017cbe"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Audio.html",
    "revision": "f7cd088ca5bbf107fae5af13a73f3120"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Button.html",
    "revision": "92c96bdb8eb689d60178c412b9f48beb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Camera.html",
    "revision": "bf71e0957d01ed56ead4f253fda3ceb5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Icons.html",
    "revision": "b57779080d99a044681b8d1f1b32407e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "b0f0f219bf6442f51d440e088d92abdc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Video.html",
    "revision": "8a96bbb7377051e2178378d619c3d020"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "1b81f66336341a41136cff1f866e1bbd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "c993fa4cc6951f21b51ea3988f0abb24"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "036ae0119ede1cdf26d4f799969dd276"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "77799f245ceec9848e25c62a61cf0059"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "09ceba74a078aa98ea213daac720de24"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "db8c12daa5fa6d8e416b6792a3bad133"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "13769c3eb6e99d47e9e3b9b27686b837"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "45dbb233e790c06edb75787dbc3374a6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "7470c2e582f55307524b8c4584eae59c"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "95c928ce0ff48210f138ecd5ccdb1e00"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "d5cd9413723157c52465032c68669bb4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "34058e46523fc2f4a135ce2d8a8403ec"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "cd9ea77985293ee0d3c4a3dd8b3160f0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "80ae52ad9b49d4734d4831397c82636e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "87ea9c709201840fd6f96e8e430c2077"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "d9c21a5d07bd6f914adf58bdd937c0d2"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "a1aad3ca11a6b3b0772343f183a17705"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "fce49c22ebb54f91860c688530844f13"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "2ac045ed1e03ac6be36fd24af46b04fa"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "affd6a91d910ab43e8b641ced0b2ad95"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3a54b5a9762a10c1801ba8218b51f487"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "620710b8aaaac0a18ea17415295c416a"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "4056d7a6085477d71c6698716d396999"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "00e6ee1c8e3641b27d90a68d44256fc1"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "ce7edcf44a21661be6262cb4cbd613eb"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "39f41379e3eb629494f19f68b0e8c27c"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "7ba5a1e05ff2e1ffe15b7bad498843e3"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "5898909e15f45e114e09e5735d59214f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "067e2a20ecdf1a2a64034422fcc7e68f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "1b1deb1dd665470194508cb9f99a2adc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "817057186836fdc9c4063ad1236da5ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "544ec58a1cfbf6800d5ac3ef43557c60"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "fafe812bfcc8ba0974a89e3e5d0a20f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "150f3a3ec7813f6a609e76367cbdb96a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "cdfd9b1e8952755c1ecd29ac330e5cd1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "a98a45c74949bba0129973763864d7eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "39a112f7574aab071081c0895d3ab6d1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "acd7fd24a4beedcb8957e16c60f90bb9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "252d0663aad0e91e0754db46996dd012"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "ca0605982758335c8d88747776bcafa2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "23eea34e55d7c3b843188debebe25ab9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "6a803fce680b16303cf45aab552205b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "04e0ced480840eead86e6e0eee159cf5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "1838a133767b7d60708df055f21f981e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "18f19bf5f56919a82c74c7e5a41496eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "52b8f216dd4995a02e5261d2f154fdbd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "d3ecfa0a2fc3669b92a11cdf7905a897"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "2d1bd00e3448b7fb60bb05a8653557d0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "aedb9a6e23f968109e661ff1bac57f76"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "562af92152e49678cea7e4550332299b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "2d2625f11cc4c122450b3b8827115fe5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "f248893b424dde98869946e8d3811bcd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "9571421d40186a30cf8d21e7c53872af"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "da5781b1976661a4386f4b1f503d45bb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "b82f2d37371c52afaa1b20000d977bb7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "77d9ca9c12b70332bf4817172735d0e2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "f44cb7ba5b708bf2d62787b29702478a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "42bc9805c2057a37c89a108034c52681"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "06010829c4be6ca8ac980bdfc852d10e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "71aa3d8e312c9c8d11af67f03fba53d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "e2bdecfaf646be26cb54a1cd840df3fc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "c6604883d82e57a5a96406cbc7112f14"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "c56879c92dfcc369e494a586ed875836"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "289a600339ccb8c8adef7a96e055d82a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "84079cdb8c95dc25c818658663b5bee3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "9a336309c5f029a495ab2cd0264f1158"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "e5172fc03897c5ba93a8e06f07006e3d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "8f4f677157c4f941a50c9c188f51e03d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "d6a39d179fd143885a8404be0f3ce6ad"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "d60e14de21de8092ff0486918d965f81"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "778b129804d0bf4a389296b5fec7d190"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "90e3007cb2eae0f814a10443fa3d606e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "b0e52f387074507c0f567a675633f717"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "f65eff4e6ae27297ac130b1477c328d5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "a259faa49b744d45f897a272c76e5d31"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "b916d791793b6a6a84acd0e9c57860a3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "6cb06a76324d58b4d6fc713aa65563d1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "82c99aabd4edf47bef961324505b6c08"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "7534a1998859a72233fa6e686a886951"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "0c0a626d839c79be4bdafb6202e96512"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "d3113374fd98ce3c6e660395ad26658d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "293cadc57ee0bc0d84b3a7dc7d76e666"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "7f82663ef4126b536f7b34cbe4eabf56"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "47072c80df10700f25be448ad4a23f82"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "9323e10ee2546a7554aac4d260641dd7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "e6bc446338a0eb7e80deac5e25957216"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "95f24e77d610ef1361cffa0ec8b81f88"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "13a5e37d9ba4b8f48e1ae6e60941bbf3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "67b157545f3815740aa0403cbf703c87"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "58ff820b4401f9ca8285d2f9f0b5ceff"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "adb6dac1b0527c60e1f23c66bde7a304"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "b0cd1da0f2f6f939f304e737913ca91f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "557a15217e53d296f0d0770e3a38183d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "b662686b2df41ed633e8d97e88c6588e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "0176ffce245b8262fd448aef87d8fa59"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "125870ca763b91b6e0569ea310864d6c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "bcbf5a5225e4075e21e23a8f22604b56"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "b973af1609197b2ef95bffee3f531b0c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "6515894c020019f48ca27547aebb91de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "de84a0ba3749339357fbbd6119add4ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "1360efad86d92f3bd4a2764ede1cab3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "5f851afc5e30922b516f1009b34861b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "cdc7ee5e9ea7f5f7a7ee0e37f4ddf4ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "c8e6e0d99c22f23c7dcdf1efc60ccbf4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "c668db38598175ba7c25f868133fa9b2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "8f50f8e8600d0cdf623c89c54bdc9ec3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "a1555f7800e06df00cf629c35fd8cd57"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "f648630f000381e83e40e25a7eb8015e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "94d6804260a60bc1deb1682bde8233ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "79c1cf55a548f1ebeaeac1519564bd26"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "96c2cd052853f08b118015dcc4393b87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "950bde9d24b78b9f85ba6be9033f2dd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "36ba6677b1f6c40776923d7b64a25c87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "1295f1b9af0fd6bd66c04326561aac3b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a66522196c6c0146fe7a4d6d95a47926"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "6abd376034b51ae5d2537978cf530744"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "250794b8372355fe240dcab913795e29"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "2cc2d2fed8f1681e78aaf2c6af37125d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "2682cd9b0a06e4b402e4233ad6f8e3af"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "7bd4db521e366bc7facfa0da13ef1481"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "85f280034ca0aa0d6005813ff4010b0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "d438ab92c9e9fc95d3600da08d037e7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "b579b9ebd22df445976fba0009c03c0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "8d34113db5dc3d26e3128ff854f842b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "a3c08537f83dbc1dfbdcfe45294f1660"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "24db02f37111ec3dc768db42d9b58ecb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "141402dc0dc3bb1f996451174fce6c71"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "fb331e097af8856b290e388d623b6fce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "8da407dbd346085608fd1a221ffe3f1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "8a9ab69f18feb4e805ea8f977c412dca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "ce1e64e253ca52a08d90034881888778"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "408bce201378c7343402a8ecd0fa7d74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "2799990c9d52a973702a1dbe7fa6f96f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "e4b5c0b39f824606db252fc56a991c94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "50e32d309e005ab43022db821bf077d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "4c97fe3d6fadfdd5922b5b23b5bfef65"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "78ab53401ed4c586f738f94dd8f297d2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "97e7bb8717e85f29f74a042d5b8402ba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "3f51ca8a336830612374e2e1748f629b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "a08aa55733d7bb9482c0851d6b5dc1aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "3723069cbf403ba12f38d55c4ef0d880"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "3efebc1e337ad0d998aa4e2313f2d881"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "f57240a94e7ea3a354214fa581b52441"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "ff0055c0ab005ffce7c8adc92731e9f2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "ace8fa0e3a054c5749fe679d98ad518b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "33add2f0becfcd0def3fa42e084470f0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "57f16fe4c9b04f5c96d7c6fca2a47927"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "6312b50ffd5641e8547b4a864019f7b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "63a6bd80067eca79926d8e742f05a2cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "370f1675a3aeb30389adb9441d55bb87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "699f9f175dd57262fcbb82d66d6db7dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "f1a98b877bf84567a9330627d00a280b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "f1e66393cd7b904478dea38a5629e293"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "f570ab5c015e01f050d4c8ccea464217"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "0e962fe2ffa626c547c992a0d7dd5e7e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "b4d1302a6f5b87d7113f5bcfe807fdca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "50677b2f9927297397cb1059650850b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "7733296fd7e9fec4c372cc8e53a574c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "739589fabcc36bbb83c7f63eb7c491de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "fa8eb285fcafc139332ed7389a007388"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "9166addce8427d2ae3ec71513b572480"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "9910a69d53ae3fc506504789bc1a535a"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "3e017813a0dcc0403e6740115c564497"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "26c1ec3c5a5dc19c20f2d22c051a59ba"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "f88425edaa5f99c30f6828774d9ad302"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "a15d60f6c5db2bde2acc683be6bca93e"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "23a99688d5200a48126e8b94afef4c2d"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "3706f4bfa61e4f31872023e094384997"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "a6ad9ec252af372f1fc250dedb829a54"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "fd61d02cd3c468993a9c95b1ee3d913a"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "c403a0bd235c770e33d772cd40c894a8"
  },
  {
    "url": "categories/index.html",
    "revision": "e905c5310b68915a1187e51f44988ba3"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "2c94a235522c3ec2f1d4fc79056e517c"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "215c214856737c0f106806c4165e7e67"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "2a8ea15292ec808f88db410ec7c9b50a"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "597037afc168f8e2733a81d9f60c770c"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "306ea8f92ed800378d73bdd1bd3c04ca"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "8e6f86d41eb276de4f7c2efa0da5a06f"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "52d7122dfe315f31b14727ba27f8a7b7"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0ffbff4ba4e30a3d311520cd8a74b0d2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "2299cd3f61c4c0e66a1553ac9c30a6b7"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "cfbfc4eba23b86068134f35cbce95872"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "75b9e5652feb76839dd80d2c723c36d8"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "1100ea00fe16dff3ee45efad1fb25c6e"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "24d1772ed093c1a3e82df7aaa2bcdfe2"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "e15cea43bea2c47a78bcc5ca17b71c7d"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "635b2f10a2cc399017d0abca39082188"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "3d963b00da0be13f62d4c5238be99331"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "9905d033c9f2f4e6b22347fa9c39a0b9"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "5fe4b80db1170215e46b0397601468cd"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "03461c04cdc9893b902c2e5127045d83"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "7a38c7c1cfe94a08adec68a1dc3a6429"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "b732bcb6058ca4fe4285044bb24a2917"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "77a6a2f9c9cc3108e81e4a0328f6a421"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "a6b61654ee7eb6952f36c03db0dc643a"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "cedc256eae6964cebea46947bad1d10d"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "7ff0ec4ddcaf3e2b952c6e078f23e2dd"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "4e5093e41808e02c7283cc69ccab3014"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "8160baf8d4b465cfca0725bb79d848c9"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "5866d239de6b5226d01f51e3be4a56ed"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "db9f13a0f5a96ec0138901c39499b660"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "01b68229cd1f0cd7d192b425d52ecc98"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "12b0d9ca35953b2bc105a7c7cc4c7704"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "03ef31539169f369a62800c0dd068f8b"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "4103a6fb4fa60f2b8e77c8eb14337148"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "462961a1a28ebb28f6cb3bd9be9a0263"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "58a7f28337bf77c3110d472c2eb8ff7f"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "249316f9d2794ba14280550a2e685130"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "3f326f8e6fcff03175de6c2020a4bc2b"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "ab294808ce4eb2ae1c586ca728c23c29"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "d5f3c835f2d13fb3a90611116bb53a8b"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "4718e11c713a89a089fdd8f5c2f91726"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "c3004183fe69441d72743a6a2d3324f8"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "b6475a336b5aeaddd4aac31b7cd90106"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "5e38309e5b1a5c6a85b8fc7d840cbffa"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "86f91a4cef2c9472ce5c40a97687feb4"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "836aceb373830d5e827f59ed39d41608"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "f24ffd4ed5210ee0ac73ddaac0d40c0f"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "bbadeb436f93da6b3d2fdf3d8f0e6ea5"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "a795aacb7f67d40f044f814c1a7672e1"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "80996aa9958614e44636285e56890c3d"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "06ee6d6e13697c6165b8716c4a993c41"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "d681537cdab2bcbc0854d2b29b83fc32"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "6534f2d24bd8d27bd265457c6392553f"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "d691fbab71a904c37476562ddcdce383"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "8619334ae380aa856bb69172a50c24dd"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "84feb7dfcd3cea0f8ed44038763c17f7"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "451a217f081f95fb8128349ee07108f6"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "e4afdc95aa6442324069736c246c3e2e"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "f77ed40294cec829e83a32257402879a"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "299f3da0411c5d42877caa3bb57deeda"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "6e8dbd0eee07aa736970515b6e65dbcf"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "b1af42d7957a52cbf828595bbcb6ac9a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "68c856974ae8cdcd3daf23fa43d4cc2c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "87a0f54ca89f902725e9cfd9750f7b32"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "bab9cba47e013792694b1c21a8eb6ac4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "51c0826816210862d93cc5d6c1f9bf75"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "8166b2eb4097be6b770be8518c80cadc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "77128ccfb3dca0c80d736a2b54ae1288"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "1e3df73b16f31189b06329f00c30e523"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "b7bf3a5cc20071bf7782c20b201be136"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "ceab830d858d42cce987e4173f1c783a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "c47d596b16c190c313031d08c45d1a17"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "420047704b2d25051494735a3dbecf98"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "4f60b3dfb15d7778c9d9e445d6b850a4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "0474861e3b10ca52f127652c1f4bfd3c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "cc9e7f02fe6f14ac73ae042a876d1249"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "ec6b18cc700368ea5ccce9a96794dcd4"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "a617d466d21e847be075a54b3561664f"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "a9765c22f99122ee490507a3ba962165"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "43c22b19e23a9c869b15a8cf5c3a19a7"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "e37992dd1dc7d91b93eefa0de2168cf9"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "c91113a0c444c895f1af1dee63724b4a"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "45c5a2fd4fc5a770a9d4bcae65d5d797"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "dfd4f25465b5e956a245253d9a9d45fe"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "156305486341bad05dd1ab306c2c0114"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "89ccdf5c960f12e8ce545568eed6f8e6"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "81618c31d502b2ebb509332e626bef64"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "bf46a16c2a2920b18a46e68c87948a6e"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "ade8ce9f2f8bdf79c57f1873c84d9857"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "d4c10d02c27dc2877d254c12634c3f19"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "e9b861f1de97212a0cd588f1adc25562"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "baec5e5f00efcf321769d84c132565ef"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "d585254987dd2b323e9c1f1c60a6ec1b"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "0e5080ae73d94b170066e7f55bb9b3d8"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "4b1d4f47b998ff083543728dfd28b4d7"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "93fcc250075f52effc195a0497cbff28"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3c5dfb6d1364800cc3e08c1ab934b821"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "0c331281bf56774448a803d742e1dee4"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "9a89ac4edecbd910705808dd5a999e9a"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "95a2de28f05c8e286431ab5f5adb66f1"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "4b06400c72ff01fc284e3a035e06a8cd"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "cb8e21b246d7f0fa287d155982b1fe86"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "37b07ba67630a1edffb5cdc15d7283b1"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "17b55642a6755374b8c8a5f778364590"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "abac2b0f5901eaf953c62de36939f8e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "4d87a639e867bc07cdaacb84d1ce4c8f"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "a2900113306e97c369ba75515f3851da"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "2d0da0d08a99f47a97720e2f27ad2337"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "0c163fc8ab209553b19afd8f739baa7d"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "81581e71179fe9c23962abcc15237352"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "bc8befece100b4abc9e845023cd252a8"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "004895cb7d014a5f8e14ad11048476ed"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "896b0a769f78ae92334abbcb5ccfa0f6"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c7f455b18adbe81b8904e6780da4fb8e"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "ac6f81163e3a37386ba4b6f6746b96b9"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "53230228e605d3e2872f2ebcae82233a"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "541a9cf722f0a642dfcdfa520fa9add4"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "b55d6e11e3df028a53a3b2b0a2f25583"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "dc8f016b5deada488550d375383bb59a"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "80bfe844cbd79c1cdcfebbf69f50e392"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "4230e2faf10c9fbcfa0b6127585484bb"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "57990c56b1fde5c093a4aada0cef8e42"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "5405ae3236a5559678cb6e0dc6ed8401"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "088c667cc2d60085d847430126be9f4e"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "df3d878e41b77e8d560316215fbc28ae"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "d3b2b7790972de39f94a6ca46369890d"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "4f4609764ab88117e3590b60e2b4662d"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "444649f4df9a8cadd7d14594bf53c0f4"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "d54836f3a9d26a95266f44a9723aaf34"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "998bc5a687f1693b89eb27fe7be7822a"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "f968a20e018918ddc1fa91b9a12c8b40"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "3cb56f03562141ec51a8a9c490376be5"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "b75abcd8c68ee5dacb409c0d2e6472fb"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "72947b1238d5007976c89e5952b5d405"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "71421c1392f442146c6c5291a1bfdd43"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "b771d912177abafd078832cf74825bfa"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "5d92a86c507bd0d428d12277fe520601"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "c3975f9fa50cdb5acc0d3c7d5e187021"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "dd782a14e7a6872dddf99928b1ead8e4"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b24f3cad2ff5fe1d70ed4384602dfc94"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "a62319bab5f8db51a6eac5430323f39a"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "4efe4d0ac9b00094626754f8f515c27a"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "c683b94c60c4ffd12f60f5f0268477c0"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "99db8865ce0dbe3757e78933a82dde3d"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "5dcabcc52d396703e842cecf0284df18"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "7e1ed9037caa733c3fba175ae38a1428"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "69d6f7c506bf08894380a82796351963"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "32806071c11f8ef4071ad21cadecae8d"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "f0fac91c9b5c1f133b8c4e428b3d0b0a"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "f5d56a59f9eef14f98cf8e2088786793"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "1dec7a8b276e16c0ee6b985db7254143"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "767d2e692d0c7f46aa524f7bebf4a007"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "48e59c23584ceaf05b79bccd803740c9"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "ff133afb3f15649fe12b7756f7c3ed9e"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "9bbd63bdd37b1ab58d6a0f45c98f6824"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "c149e155df055961edfbde9c2a00485a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "cb3aa4920927d87ff2b3e1809798a21e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "c9da43176a9ac96ed866aa2670367e35"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "382338c3cdcff26f3aafc2f96528e41d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "1e948e16e0eecda6d4982daf70dd124b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "74df047fc5319704c23419f2f9f073b6"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "9641ad3df652c9ebf663d2fd60e14afe"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "9b504f8aaef9802fe939189cdd4b585d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "a3c43aa0ae94d1fb296e3eb56c3f95ea"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "f54edc64c2d74938c5b6a7ff6eaaaba4"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "91b7c8ebd26776b9a02e2b663e9dbbfb"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "d2416309876595b8d9eba5fdcb89e02f"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "7a18b1a01bc8f7445b53371294254567"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "2cf6b034fcd64ef98dc892031da1f534"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "0f532df4adb1e0c8cf81ec6cc345f7c6"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "4809499ea0573a601a85c135b97b5324"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "2e732cc3a49c1c5c191e2d8ee450fa9f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "d214749da8721825b3416447d52a1733"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "7fca6a7f3c442ffc91b004f9a6de8716"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "ff2c024f9d6d16bf7693f82c1ba83355"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "d1730f9876556c6bd894b362a9bb60c0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "8fa4a15227b6bcde6e0e1c3df107e1a2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "134a7f855baff9167eae208204e1cd0c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "2a2bf6fd9f10581778e881269874ac14"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "71b9e7d7c925ab843253f52c69ccd359"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "198c5409292455daebb7b23616d6cbb5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "babc8dc840706c2600c2f74099aa4712"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "15e1f8722460e4d002468bb7dc5a7d62"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "c515be9de0e5cc0d7d8f5e8406765582"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "001a4188733284d8387f99f3f948a8c5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "4bc6e94771553678e9b099a1bcc103ca"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "67e7b2e2616b86f89df3aba568a6a853"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "9939e2b6c4275ded3a0c25b46f394652"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "7af0a80447791e6409b91794a4231ec8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "4e69da2b33ad4379206c072783f5e987"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "d6baa0fe7e67f8848025cc4d7b202a2f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "e8209302eef53c4c16734b8333aee712"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "f897f1ee8efa241200527fd1f708de40"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "2f99e9c54ee9bcca2820c7df4e60780c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "79c4879b187a8326117ccd44f1cfefb9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "ac3cc23420b70b4ad40a88d1de8acd3e"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "136d513b67ba0df92f1dcf3d1073d0f4"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d0fc0bc6abb2b9b79096089a4af2756f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "73c781bd830703a35ea8f6f27edd3a7f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "1069acbb6e4e130c574a20aa0af2e4f1"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "12971daf923aba7226561eae0104bed5"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "6c462a409b5c815a4736bfe43c39ce35"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "7e87368c36b91e7dc64d0441a88d7109"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d10d238a1b2ba60eeca59d229571e58e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "056f6d4040e11faf834e3b0a77f3ef47"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "e16113ec99f17696bddf1c8d607ae8aa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "be335a1c320327aa724212684565561f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "25fdad378316ffc263604388a99d9103"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "62066061797d3ead4b364afbad053d66"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "9322cc28761f5b327d60a824b8f2bf40"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "7642d52cba84b6b6a719c149348a9a48"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "a08a33686e07e6ebc71cf91b315f77c5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "711b4b2b4c12266b037d6a9c168ba047"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "20aee62024016317baa2367c8d781d6d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "d9b764c85047b493b98963e19812ee64"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "4c5376fcb66c0aceac4ab209e1037412"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "80033a189341a5efadc9092f44675d1b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "93e02aaca0b3e7a08c2c5f8214e6378a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "636f6b72a7273b424610695b746b1c00"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "7210a29a167d2a25449ab7344aee831f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "a852bb22710bee1f7335d1f7e6db625a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "41908e76d7a1a5ba448d284113f798f8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "fe375215677664d5611a3d088b5d429a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "8cbd280f00dbc97c53bd2a95c0b5ef12"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "f70038511317ad394cd87b66ec880b49"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "9b034a6d2cfd388a52e9d189c8db6326"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "2973f3331e38284c5ad2b3c094d233bd"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "f0030ac06c5622724657bbaf9654a217"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "2bf64bc17fd4282fa959825ff0f59c15"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "4982b5698a13c403f5024231c4833b4f"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "c23a40a522c9394b6e04a56680d5cb96"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "353bd66cc031d1b2bbbff382e98ea963"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "e3b1d5280df32efa7bd7064e751978a9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "346401d0b10f30d0e33fe50946bd0cdc"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "3bbd5cbe1f1f349f503683380ed9df62"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "5ca52343fb025b26e99c8c027066da85"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "8452c073fde5a8f097710c712d26bc41"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "da587a7996db3ff2a52eab380f85cd79"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "cb8bc1457106718842954747cfcb0a57"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "0d597a27af0e70d0bb463b689715c6a8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "87ec8dcf134119b6bc10631866439d21"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "69a46e2ddd5e0c376325d506d27d0c33"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "aa9dc2ff5741ca1a3edd2135e17c243d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "2de3403b919608e050f02da7bad8b3fd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "44d3ef722cd9a9d61bc33b44f5ba3066"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "f347f61c5b09dba230fc865bacfd8f5d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "4a088b9dfb121ed06d704db4c2bc76b3"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "7fb6bcccc420e5a75981a6c5e8fccfbf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "3c331846625d3131810c3502d6e02450"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "593c373a66110617987165966567801d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "61743f024e2a06267ede280b692be4fe"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "37ec2696eea4e75eda0ccd60f4b56521"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "46a44d0ee150216a39691cf795cf9d73"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "480db86beef5efb5102a0d65101b1255"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "a927f2b47aa6f5a052bebc7aaa6c5a6d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "68f8bed57eb1afc9b375ec2401d9fb54"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "6f7a3aa6df0c891afac5b52111d48a55"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "b6548db88e516a2c1aa4cc5ecb6d0fea"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "92e0bdfe9ae318304bf5ef5e669bdb8d"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "b218c1ccd7ab12c59efd469d556346c4"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "910fa71f07706da46384d8adc8546c77"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "662e3dbe1fcb080981bc7fb7f75080fc"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "597ca6745b68e2f819bd935a09adc475"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "a934d50fcd76a01bb91262cef5f43bfe"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "d8cb14bcb6f1e8155b64862a68667818"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "8ba6389bd83d15f8be78f497e9ac9648"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "6131be65e4f9c8db160bf6c7d1c73200"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "23009c53b1e35fcf56cab49ff4a1c13a"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "924be337d03596243922cd0c21e8ffe5"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "9141ead86bfdcbf613ec3f1ccf643ee3"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "428b0ebacb0d337d4e4917fd6272902c"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "b57670e3476ec2dfdc063fa6c8d8e352"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "2c81c5281f76aab3cd31de167cd65fbf"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "febbea6bc1849da0a4815afd4a32324a"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "605a904db2594f9071a89d3975a79777"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "42f18e5888fab5dc833dc0a2e3b6d640"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "a9e072cc8bd9b5337f1369e00943b632"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "22e84708b47492b333d05d7d8005abae"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "786472fd5ae6dbdad1904840e72982af"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "ff1c7b52f1649c54eaba32d4c42eb56a"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "bf609974deed6b05538368a3465ef816"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "170cfafe27cfaa9513cee49c4993a90d"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "da023198ce2a99f80bc0d9e3c8aded92"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "085fc3d5e7d65244cbca4fa27be09c4c"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "f9c5799fd774ed86cfd531e8cb5ed610"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "3e97be6cd636913b5b0ce318ca000843"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "c02e001189a899c098081bb0a8234cdf"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "5694188513c59f12345f5cccc2b83b96"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "7160038b86aac330922e56e7740f56bf"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "89f17e3c759efbbb8ee4ef05a268ed16"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "50e2b426d7f0d099985c234433f93f05"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "f8ad069385533c37961ceb68b51839da"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "0b9594caf87a2dd07154236ed6392a5c"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "1fff5dacb645965bd1bdd0cd94ff21f4"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "5948fdc17592135eb7f0c707060e16bf"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "88fae971462fb427de425d16dd73ae27"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "e1344d248fde62efa414144df258c77e"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "8e0f1b0ffb3248504c1a7f7ea5a1db9f"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "6deff5e0d60f2d63b9502ac53a4402da"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "a7187b7652893552399004fff46fd181"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "856fb60d7170f38df5b33cfda3ac69b2"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "f4a4d6aa707e961e8ff405a9589e9327"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "457ae03808f770e9bc3072a170664b46"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "8195f0611673f0d91e687ea6ab524c34"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "a750052669e7c5bdaaaec2a8f232fdc8"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "8b4efe52fbbbf0c47ac71d20c23563a6"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "4ccf4a02e7b515e232283a1e426cab29"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "cc6e7d1fd0d1fcd908e17b5c3ffff62a"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "195d28fce3d66b7ca054e4959adfd9bd"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "fa88df98ac1b2cf426807d4b344b083a"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "39afcdbe10954db2cb9763439b437a62"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "375282f48305c4ec5a0565e8ddede58e"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "12df7fc210d55e0036d15950f2b3f6fc"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "d5c0889cc64a0b8225d83ae56db27035"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "1ef9d46993c23edffc5afdf64fd99e7c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "774868ec4a2d8a9b09ff7ee76c5dc8f8"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "7e15d0c32f41715d2d462abc3354adef"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "399624602cabcf0a31516d478741311c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "e1dfe1173cb7b3c22c5fb61b2daaee40"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "5542b00362cd94b9cf87c9e2994f884f"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "6cc3d28fc427c93ea6bfe8faa79fd0e1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "279367deffe8843c04604cc5f2ee6e1d"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "e9579320a88fdb588df0f33a62152188"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "bcaa7a71914393bdc4596386634e9d81"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "ce511815dc2597b342b252d4c7f14235"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "47dd057dda56cc4261e3ee3b821fb5a5"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "b72d1e3526a46e644d3375415c74a573"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "24b7e1f2c408b6139b963d87d9bfde2f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "4cdbd68455e0acb53cf5c28124dedc90"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "17a36c07f13f1126e82e0650fb82c53f"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "af974736f39c4a993cb01e87f46bda91"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "64cf32eae7a46d652eca3df199a9bd8a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "8fccf33a3c0d84b79fc11c8518cf59db"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "55c9840dd3210fb7fbdadb51e7f48f5d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "0e864ba7004ba4de05a9c7fe01ff02ff"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "04b4d07e7c580b0c183ea4c28670d76e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "96c3e825028e045d5455d06a4ebd0184"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "a891e3660f5e831ae505484dcd2ecf85"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "dd3ff96fd5f9d19547c67309e45ff3fb"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "a7b96ce3c55b58dc6625878f1fcd4abb"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "a6f88c49f65dcf37b5f73be960c18451"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "b8c1980f137fbeb956d5ee7b067b4f95"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "3a827e255823810b3ec13255a2a36d5f"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "8dbaa803543a1422cd4f818decfafabd"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "d612bfcfe1c8128050b70473ac8b904c"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "ea6b57c7199f9210e1fca9be3f46b299"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "81bab34f1d02e45e460054758fef7601"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "62aa7452a39ccd6239b6468c1a97dcb5"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "8b24ac02857b3ce9cb9db0f56d9a5fbf"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "70f436e1d8edf445c67a0722a5e743f0"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "9c8f588772c455a657d6873d87a41fd7"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e5dcde9b56374bd28c8953b9fd00e58c"
  },
  {
    "url": "categories/php/index.html",
    "revision": "1b9100e365dd09805c5ec3a7ed567a99"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "260d018239de18d24b848c562b0ba2ba"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "da51ee8b4a41e8130ac0ac6972cedc28"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "192c045855d90f2c4596e07543d8a0ca"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "ea5d70cc56e0f640365283d01e4999c7"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "a5320946846fee18d63c6081b54b360b"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "ef0707ec1823c45f935c6087b73e2871"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "9b539aa6436f1b7ba0ed30555b73a94a"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "a2248119821b33787711f3cea27f21e9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "6d99a9c3f27450e07c04d07f28e8cac9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "bc638914b5dc27d245928e1ecde5e7c7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "c2c7ba9a2eb80eea9ff456c391b7518b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "259a7d4537cd4298e3b94f0d6bb097d7"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "18d9f7774e62445d1963cda0167e80f1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "4e0b5c7cd64c8eacd1b46ef546aebd63"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "ff6c0e1718934491c8a12a147018b91f"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "e0df14b6bc727a9db72b7ed02930c7cd"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "f9f0be5d7cfbbaae1a86c7f6d587f787"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "4f4e5f2ec300222b09559f98859dc526"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "4c288835394f002bc86c08c7af4e96a2"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "f7f914d828851d6706c5f121f10d5f6e"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "38166785601ca0e948fe4c7acf7d8f33"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "ede5165ba34cb5a96f03862336e3a515"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "609bd8b7b48152523cb5f1a9bc6b5adc"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "7eafa286964c09e29f7bb69b99fda1c7"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "014a1e886c779e8a3fcdb41d7b79a64b"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "0a555143c2f0fe41b344cd1b398ec655"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "9bbadb98199f393ae8e8bf8ab1cd9628"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "bb0b3b9ea404300edf4c7401068a84bf"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "9530c8bdd712d8191897b08454001379"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "08646ce27a97d7a008f444c65eff705e"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "d69e71ff8f92234bae1c71011ff6806d"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "489fd3f64f5cbb1e5c38ff85d175d77a"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "746b746cef27a5f2a1d353c1a90f1270"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "79c5843524d0941d8b9273505a356466"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "d77b5661a89282f99914041cf7155442"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "8a7b8b0d4b17548c61e4af4cd5629e9d"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "c900d7fb49653071168b3d0d3d93c184"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "a6b5783bafbbe414d875918155683bb4"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "889fa3531280669b45759c6fb2da13d0"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "1509963c46e23080a7d40d502f34963d"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "e07dfcf9dfc17d9b42c1467c139178be"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "dc1c6bcd50d85e1cfe1908f54db6e33b"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "eb86186508b2cfc1e6478c1e3bada57e"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "c30e997e3589e30e2e15ea0579f10b3f"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "e5d5e71b6ec2e7348f77cb1619360d15"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "ef91331fe794d48f8351a946c182a38d"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "36b4bc3ad7129b505520b6f7ba6979c1"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "f97fea87a9b22ff497bbe8f360725e84"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "1d13d4900849b933a3e88cc1b23d3ed4"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "d7eac3418f8072d8cadba4e69a5376f8"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4a876a21ed177b2a1999a14561ea419d"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "0c7cb0107a5fe4456ab3730c826c912e"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "7f03434786000f63b5e312e76c253049"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "ca90c9c1179396a90daf0b678dae26a1"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "bd7b8291400367b023feb4918135fabf"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "7d9ee3979abccdb0c1b91a594d22493b"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "faed345de4ac5d75b948d847ed4ea4b8"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "e597cc72d8d43cd1a091b2f9b8da5426"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "ba0771be1053a49cc2fe8ba56e32a989"
  },
  {
    "url": "categories/python/index.html",
    "revision": "14593e70ff8675e792b874e2762012f2"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "2bf4a920bec13c4bbe82ba0d5fe5ae28"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "a0db98e8a0e2f8f34dbc3f78000f8d5f"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "1d080721eeda4fc8c7a20a1d71a07c96"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "5f47f26b285aa2bd0498209892d864a4"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "450effb9c9dcc4b230424b950e7fa875"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "4b7c6389db94f82c70efa59a31417519"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "6144fcb8530b05a7b6417d5cf489f630"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "324f5fee5103e8dc64a1936bca991572"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "9b58ee101b889c45e398f155443fae03"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "fc5d820429ad39f4f6fb5ce5bb0a172f"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "068b134f7940aba4a05919a0c73ca3ba"
  },
  {
    "url": "categories/system/index.html",
    "revision": "4f53c91541f319960366e1fdf9ec4dcd"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "fa82f4f70608bdba3822764ae72bba8a"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "b192315258f37a6b599af5648eaa22f5"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "b5a31b4a4ae2713151d9170e0bb010e6"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "70d0285fab2547f91f1d5c2604649378"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "c8e351720a0ccc2caca4f05c3bbba440"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "df5e615fd8301bbc6d15f7000d2e5f2c"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "21f1a80b0392a4d047f57cc3d09f8608"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "a761454b07b487f4a7f1fc5e1b4274fb"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "138f649a080006b160980d641276e086"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "afe42a9083007dcbe50d1b8348b51f81"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "12c265f26b60145c6153942835d27fd1"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "8573803d543e11ab4ff4db85dfcec378"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "72e1f1fc52544ba4a19445f48532ab78"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "b8c9543c2b2e8089f3cbaf34454ba410"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "df047688e5ae363ff033e1cd92d2b560"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "8de2e1a40b87fae065ca0e6a57eb7d12"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "831ba08d607e605d3ee1725b86115cf2"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "56f03fcaf28719e918c76b21cc781b35"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "8b6e4714f20dd434e51d4d43d5376e59"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "fd6b794ba01c7bcce5691107d0c96437"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "eaa63cd10bca71ed769f1bd39dbc5a0e"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "fb1767877dead801c12800415278a3dd"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "eaf2d440fc384fc8a83e088c4dea8bcf"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "6107c2231dee6fe70448ae9d43d0d7b8"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "da21e6a8013e0cb7849b8a57548df60d"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "256caaed8d22166ea6172dd026de806e"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "b33619f657e92ec64ed166938e3cb7c4"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "cfb03ff7a593bee01f7e0e8fe9148a47"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "dcef49a677ce28faa26b85b9df015471"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "795d742cb5c1ebfd2770a7479a6af27d"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "3050a7c9fb9e0c4546d1e53a8d8ab347"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "ba5b8bbdbfcf8ec959d3e8528f2752ef"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "5d5c0f70be25fa152041ec44925b82a9"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "7c2cb54d14d22d49afaa7660856357df"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "ae5e9245b7b02c69e35cfc7760ea5f51"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "d10c1ef1c07a9d3e16550a03f8391edd"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "b64ff70aa5b554b99f6d2ec30d9619b6"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "236a788ace1184998aa08fc3d3b8e820"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "6c62b40cc3818b65f20cb27a42daacd9"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "2f5ae406a8a2fe35b71bbda0950de6b7"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "94c2c76ff205f7fae13daaae2fc5db87"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "be96eefb12d4c009b401372c76e3a880"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "52534ff956bd80c7e8e15b50cb3084c7"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "8499e67b216fa31f74306f9dbd63d145"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "adafcac8015032830b88429d575ddec4"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "53196abd44f00e1e1c66cd5edfbe42be"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "31e92f2a094ae8e937e9f9b81e71f352"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "d22ac7aadf171dfe7bc2ed3e0c181159"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "e47b5ff0dd50065eabd292aac89ac097"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "d7269f515fc47ba7db14c1e27b18007f"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "ec6f952c69d15d1a930d571647666681"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "cfa2c010f6ca1e1ed4427aeb38e32508"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "cc2ca4c3d4a5005d0475d4a750f74002"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "09442fb1024534a41e4a3ee5faa37727"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "614ae1ba35c33afb5a2f02d27c85d0a7"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "0e832d05a29baa19ed2ef28545224c93"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "004f8ccc23e5fea146a6b25304af5b0e"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "0ce626e8693f64cfbda6ac3dc99eddb1"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "866928f1f47f667e1ef7c1d140dcef63"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "d954f2facb6fe37cd62b6839fb3d8036"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "5a3b88800ee852eb6e7e38521966387c"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "9142096bbe0a4358dc9b3d7c5f1550f3"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "ec0bf7ebf83cf6a3cc06fc0e509a2376"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "b36c92dfdb60f3e6348e585007b49f07"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "d9f72e4250199635f314193ae049dcd9"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "db35f43c2c9252d8f7b385e89e37c37e"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "3768acb25a0b21e02f451d90fe80679a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "20abee11b4c1c6d18f989673ef927bcd"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "37dda71b453ecf928769aa33d21ea5c3"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "0745ea860db8c0d830734343ee8d5494"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "16fafa9ed5105a1dc6fcc58257b6ebcc"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "aba2710328a68e3737aaf54919111419"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "b9f88e9590a8db70758c1c4f6347ea11"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "cf7cd9617ac12d19d44e0d5a38f77c10"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "fa707852192a5c83798782640ed496e3"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "037ed79890a550971b3c5d2a78c46e4f"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "11db356e0127626716530e6f4d9f66c5"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "e1209f6146dc3dfea2454237c48c360b"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "9d6c7c077dca07c9f3465ff5872a8ad1"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "25b4c665b466a76e31476aecbf091847"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "d5444ffb439b0fb1e2cbf470754214a5"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "abe6fb1d949cf01a59ad1373616503f3"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "8410b5450084c11c328055c32e370b9a"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "d4cf667f51d64d1d1651c0f2de5dda64"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "79b33170cf4d4292d9cf310716569729"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "121837688551bf41ddb462c71e99b7ad"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "fc82a61781e6827acf3cbd86166271a4"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "bc20de71d74ce4b339628778504adf7a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "9f095b381769db6d5184ee368814c968"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "028123b102119d35fecf38f997f155ff"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "a37ab6f8884c407adf7a67ac50cc18c1"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "0c383b75020a8d045fd19797b6a697fd"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "62cee195d1165ebc705239125ac0c64b"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "e4f273d6635473f678e48705757ab5cc"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "269357c30038c7f34db185a8edd14e95"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "3ef1b9828751bde10f0def00b4530890"
  },
  {
    "url": "favorite/index.html",
    "revision": "a007609f9e5cb039d63d906462075c0f"
  },
  {
    "url": "index.html",
    "revision": "688d8509a84caa6ef1d22f0fb766e264"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "a781d1a9eefa6151915ad221bd7da59d"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "2872d3e52fd6431569b6d80fbc6b22ed"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "7c869fbaac86e04e6f389701cb6fe3df"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "db75fe141a565fe815d276ce76268205"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "ab4ce55317d384b66cb6b7d84affc2a0"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "ef05c4b08b2ce44f39eefaf9971e6523"
  },
  {
    "url": "note/index.html",
    "revision": "dc69f7658bbff7c141b1d7cb685f4367"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "4b1dc67cc2c0f9af49c92eae32963733"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "9ca62ac1ebcb8211b145dd45eea26e7d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "deec1a048d5f16157b92c915522e9744"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "082a0b9a9db294859fdadb0c15b228c7"
  },
  {
    "url": "share/index.html",
    "revision": "5d7d8550bbf1f8d8db132f2592d6138e"
  },
  {
    "url": "single/about_me.html",
    "revision": "8faec301acce7a14102ca34131a0161f"
  },
  {
    "url": "single/all_article.html",
    "revision": "7c62bcf7694b241df6056cbdfaef4875"
  },
  {
    "url": "single/welcome.html",
    "revision": "3e98d67348bb34aba0256ac8373d399f"
  },
  {
    "url": "test/index.html",
    "revision": "2e60c30cbe02ef9794c9c2bbbcee4131"
  },
  {
    "url": "test/test.html",
    "revision": "b0d845c17e40fbe21b653202a6ef92a0"
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
