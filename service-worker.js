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
    "revision": "7a391c6751b74b51c5f6c5f4da4661c1"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "35d0ca634ba0e7e5efd0f719b55eff0e"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "92cfe235c44bd860e29cc639bc7e1405"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "1b13ebfe6772cce6dafffb4192e7ce0b"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "d7f57f3b441f2fcd448340cdbc1f49da"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "446fffea0b6c9e8a86efc241b8812678"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "771e07787c3fdaf45a5938de6c519e10"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "859c57526968c555d6a5322c1a9d026b"
  },
  {
    "url": "articles/index.html",
    "revision": "c0a03c1c4dda4bd1a6d9bfaf5efb52b2"
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
    "url": "assets/js/1.1cde3da6.js",
    "revision": "63a5b691f3518c2d297d31b2746c8b1b"
  },
  {
    "url": "assets/js/10.0cffad4e.js",
    "revision": "a2b44e0a04dc6ef7a149fd0b9868a086"
  },
  {
    "url": "assets/js/11.26adebeb.js",
    "revision": "340513a73004b93d4ad6b3fe414593a4"
  },
  {
    "url": "assets/js/12.835796a6.js",
    "revision": "1762243e5dfb2d4906d4bba7766142e7"
  },
  {
    "url": "assets/js/13.2a4ec82d.js",
    "revision": "0954907a734bc1533663180d6f64aaef"
  },
  {
    "url": "assets/js/14.a04075c0.js",
    "revision": "6a1118ab5f8925785814a2aa3ac2994e"
  },
  {
    "url": "assets/js/15.fa1c2504.js",
    "revision": "baa61c800c6edbd8e8092a207c0df975"
  },
  {
    "url": "assets/js/2.d005ce1a.js",
    "revision": "0c8838447c1966120ba10aebfb578286"
  },
  {
    "url": "assets/js/5.67563ed6.js",
    "revision": "254805897722d56e7cafb868a3fc6355"
  },
  {
    "url": "assets/js/6.ebe32158.js",
    "revision": "f54ad2ac385250d6e3bbe1057fc31edd"
  },
  {
    "url": "assets/js/7.2460e416.js",
    "revision": "e2e46652a6edc274983f95113bb0def4"
  },
  {
    "url": "assets/js/8.9506d3bc.js",
    "revision": "883b4e0cdd9c52a2cd0c4a2eba7ccc45"
  },
  {
    "url": "assets/js/9.9481fca2.js",
    "revision": "0db461114fdc538ed14cc5e6f469aefa"
  },
  {
    "url": "assets/js/vendors~docsearch.1b248656.js",
    "revision": "3d0bd38561d8653a5584fb5d5e3ddd40"
  },
  {
    "url": "blog/index.html",
    "revision": "ac4de804a1ca3e8b2f144a97d9d2b3c4"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "7c7ce6bbb21dc9a60dea6aeff0918e1c"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "0ad7c20f443f18449b74e0af1493074b"
  },
  {
    "url": "books/index.html",
    "revision": "b51ba8dd85873c9e4addc571649ce2cf"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "0625f3e9f01bf1f5f676c486f9a2626d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "3d4e666cd71eece55a159734a7c98323"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "9a2bd9342b68b0530fa8642745fe9529"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "e9ce7cd38ec0da81367df66c77cd5eb7"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "80db253926f2fa47f2cf67e316d40524"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "76b4133c59f6e2726b3eb2df28043bee"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "5867b6accb70988b38e340c41afabfcb"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "5ee29c8027e7dbf45b640e5062bdd08e"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "c75d1ea8a9105cc71d2af51264a43cc8"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "1c44cd4383df7e0621559caa09565f92"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "b4f9bca13ddb2fef36d1b0bb4753977e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "0e019ec410fc12e26a8bf05c7c8958d7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "a5a6e35d9f7645e4524d1684dcb5eea4"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "685b9289edb7ca37bee13dfed749c326"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "e79d2bc9215fae4849074d8507b4e9c3"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "0052e3890d181e080d09888aa19569fa"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "d817ba24caefa7af6b354eabee341806"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "f6e44a1884a98393d1a9f6a14d54373e"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "c1af09292145235e4ae396746998e89b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a3659b972da0c6331d910cf202ed1802"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "8f968aff4baf3f3b34e116ff71497b34"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "07a06923b767ca4cef95fdb854b59e35"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "564293018e2f27201829a8ce68d4a87d"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "2f16403fb5f5dd652e09d31d9c06c4f1"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "efa044a3366f8604eed8cca3bbbf73a2"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "8f64101cc29c14c41649b0c22e73b5a7"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "84304d51b51447f92993326add33b961"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "61f856bd252b7a264bfb1303ccb2ccbe"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "b2016001a22a8c558fbb4d18ce4685e5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "163f18ade5c4620273e5225a227400a2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "5d325dd0e98a2bedfc26b4475730d704"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "ca96c423323c2bd4737135f6b453f017"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "c18f4aacb99b73c623b9bd08bac6812f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "e768b2bb60d91ee22e48f2706c5f67f5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "a0206cfc308348c6c1828bc1a10cb16d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "95bbf2b4cd4238b6bb14bd04531fe927"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "990f3fb6f3f0004e68e0970997273f98"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "67f31f489589ec0f2b6c1ebeb5d748bb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "a9ea3c5fd1445f6a1e9e1073f610c188"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "61c062319f8a924545b09aa8bd707d1c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "540217a646794c43714489bf2ec46f14"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "80073d06528e6db0b4c80145ab352f11"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "e3cda96c1c6e6a9b50e694190fd58b03"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "d86882f1726b53541722f6515eb7fd54"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "784e684123438bc6439fc729f1f4165f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "154a35ee1253f0cf8e5a2b03524ab798"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "a0ea69a4ce3ea6bc483a61675fc81411"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "9d1ac6fce8bea04c1b27d659ea3f32b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "cfc5c71e2d3f1df8e4d83d5d65a55fb0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "eb292413630e9a11e6fcb2cc3e075fa2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "90d24cd810d200f23fca7ef56501683b"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "6accb97599b06d67d32300cfa3692e7e"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "09102e70cd135b770231652388b51cee"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "d0fb643e6d0abca77a589cb344f08390"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "3973e17e3af05647a57bca59c54cc0de"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "43a3691646325800e9f0b9cc656c00a8"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "d172d5d7b1c32114bd833eaee30c2212"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "ed4b72801292fad4d762f634b2900b3c"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "15e776b674a03e8ab9b88e5951d6f522"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "cde7a617de67798c8b1691d32b760373"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "ea90c884a6f2df5797c22d2fa99bbad1"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "1896f4b645aa92ccf05545ef43a52d0d"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "e66eb6f3b757c886562e357da22e6c4d"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "16d93d1b406b428991b8a5468167c748"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "0f72b4c369e0f253b5d8e81bfb149306"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "0232cbea0003074608134b55806b8e48"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "5a2307eeaab986cda17c34fc858a5d40"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "1988a7f50b46d89131a9b35bf6eedaa1"
  },
  {
    "url": "categories/database/index.html",
    "revision": "128cc22518f924acbe8e373fc4a3f986"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "fbf3b977e63fb5e7604bbf7e899e5714"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "0bdc10954edc73811243e033b43d896d"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "e0dd046dfcc3d5a4334381ceb8088052"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "0c01361a130c05bb3eae7b82b5620e82"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "76674400106cc1ef720b96295c4b935f"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "58d7553a5670bbf267e10d938d0ef98c"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "aeccc23818c039a04b03d00eef6ccd8b"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "571638db79229ca9fd1bbc91a07bfa80"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "860c904180693adbaa718f337d5aa2a5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "3ff5bb8183d3c3031bb840eb54eba2ab"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "b58ff17bfc56d3bacc6c64ee028704de"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d899acdd247e9d727befe13b95f06459"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "dc321d3c50aaeccf2f921d313f11916e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "8031835e11cd3b4fcb84f2a464eb1311"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "c9702b87c5c070255a94f6857dde1e57"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "d835a971f7acba3fb881ee857296328e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "168e5adc8819558f60585cdbf18e2513"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "554c2de4f442f5cc78e7bbe611c4c7ea"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "a156904fa49d40bd8403072746d4f209"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "88cbbdec24641ab5a1253068b6dc85a8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "d35326f234e7c18ba43b22485c15ce47"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "72c37ff6433386abc4d291bb207a611e"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "29fffa44977df8ef5f8738e17b43cd00"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "ba556188d4a640df99df879f5b1085de"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "c430e148f90bbbdd3411a265e4fb99a2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "7406d98a2dc14cfc5be95f57ef3aad83"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "14c1e8d3ca5c646567b25df797b648c9"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "3837ac1751d247613ee7e908eb41b4f3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "80755870579684eee64f2e49915b82c7"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "a517d3e43a70313cb737cecd9744faf5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "b37aaf63cad67df69b64d3dd1966544f"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "c6ecc2fa6e1d7c8bae91bb7ec5aae2b5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "fc191007b2dae2483a982b7d52e4cb7d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "51babbccdbd2e8f4ce6b24f6b73d0dd8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "88c3ff58d699a92db9fb8f7b41b2781b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "d639fb4586b58a6c3a503afb10eb8d5d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "ad34f5b2e8689e892f8b2dee1f418f48"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "a2072026f1d4e51265148629aab314e1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "4423568145a5b0b3455ddef36d3351f7"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "2c30545b56332fd5f6ae8002ef84210b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "6f16f9b1d7db1302f95c5f0b3209004f"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "a8d43e7da4c2f32451ccc8799ee88bb0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "7872f4d395ca4c95d4feb5f2d3354623"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "5d23e1d02a53884fd7d6d422fb777241"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "27c61fb12fc73c4944b9990e2394b2d0"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "c1b1207b99aa241b59f0e9335086aa8b"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "a0991e302367cb778b36f68de1bee27e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "1867e98f745718540e39fb8cdea8971e"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "f6dec0b1c56ba5fef979bafa106be857"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "eb1af1a72f44f6d86b2dbfb023710547"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "1e0b781ab921464a42dab2220dd3a665"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "1e01312fedd7cc1659b7d8b1e9fa3f8b"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "4ec731fe596f87f1279c41252ed01765"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "e73632f17cd4dffec265dc1b6e943122"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "e3150afe4b2ab4841f4021fba255e5aa"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "790a28dadd979d74b422a932bdf4361a"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "89717ee58200a377f833bdd24e06448d"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "028a11b6795a73a187b3ac79ecfed4b9"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "1aa74bb7a8db326432171002bab67335"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "3eb97b1f1e8b68f680db1c05367222bc"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "e3af2440ec8ea5523a3650f39b2a36eb"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "8626c14561878d0963d3696aed8ba650"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "cb524924a7bc9eb5f170b627f8fb5c55"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "b331c5a79b2ae326055e66c2cffe203d"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "b3560cc9cf8a6eedf88215df8974abaf"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "c67c21fdbc888cc3d192288f6e12af40"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "c0be69b22bfb49efe5b71783dd06c1ed"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "1c151c3e84752c344975b04abff7d588"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "5989de11e751ce5c555bb09a311f0eed"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "8965be8dcedaba5df34bec90f8ca798c"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "55e45d3b1f5a324b907bc90bdc47ee38"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "a94eab0ce08fbedbdc7bb5c0df87da50"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "ade44c6d1c961b9a6898aaf592b71da5"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "a7eb52dd97723d9decca55d086f986e9"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "0e96ef19613d33a2288a39d7baa6a0a4"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "72b4593bb210a165812d76535fa6accf"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "968c49d0eedc7cd428033cf19fa1bd69"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "d6057b76749af864ed0f134c62cc0a00"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "64d730ca88f1b8e67deb7867b5895c37"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "2c69664d4e27621bb26cbef1a88066e8"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "88cd8a1216faea14107049cbd1de9ed2"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "5f764836c4e3ca0f7d87416af0663a9d"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "99f129e2d8fcb639d98ecd1caa809eb8"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "c92e72b2b8d5151eb39ff5eb5f9d16b5"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "f1094c7cb9934158f4e47a2bb58a9b56"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "2488fac11310f90d1c53a8ddb361f3c0"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "1925df248a23d2be1b39239cdd7e357c"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "083e1c505f8bd04d7a25e085526e6140"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "5ea29d413c05105df9b5db187ba4cbaf"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "db2f56592e043aa56306586d41042b06"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "0ba27b0040353bc8e9c659cb3cc9434c"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9ab9801a3881907b344a266566ccd44e"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "aa77eb8f4d9aa32cbe02bc4d59d96dba"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "33189f0199095804da61c08e5e6a6c50"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "befb0b4f5af585a308cbcac31c586220"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e1c63210b4c8d25f5542c1e3e5601fb6"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "5da4c4ff52e2d813fe4929bf3512d499"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "a278f227016d9d1bf46b54633cae976c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "88f8c4980d2f7cfdff0217631d6e8c9f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "e028611b10bba3641b06ea4fee176c25"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "1deec8d69b958a164fc0acec51da19ff"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "303b598e08320890932f94210b2138d9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "ca084fe68e2efb93979ce24437377fdb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "b867de59d5fd5ca2f7d53d002ffb11b1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "e1a99fae891e25ea00220b0c1244ca70"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3c47a19aa0f0897fcc7e3da9e016f946"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "764f48ceb1fb2819aebf0fde1e46e5eb"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "53ed2be713ea29fd86269400824c97bd"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "061b24c160f959b34dc7fe4c0b90a26e"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "0f5d53e0d64a203e6a934a7322bdf386"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "5b12f0eb329f19519be920ae8f29e3be"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "e3b91ac817dea38a7f8d0f4509944d6c"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "5ca89c6d4cd8a4f72db4eedb123da7cb"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "869a0949e04a9b3cfb8e5418525b57ef"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "f8339991cc4a10757eb7e778c217ae1d"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "72d8badd5595c0566d5ee674f6b2fd71"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "0ad64c30eb5b41b0bdca84ad385983a8"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ad9877b56e026ba9f39f2d6ff6015841"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "bf7ec909affde7cfcf3e61917a3fb1d7"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "d40af906db843416be6f6b2660697bac"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "94f3c083c0f1de07f5a999c92ebdbb11"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "6b45f55652dd74fa7efb3dc916baad83"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "8587d059c87ab68eb6fb495d7a74ba5a"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "e59dcf127f6b5944886809782b0ac4db"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "08bc80065b79e6c0519e3e8f09aa79cb"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "a898e6206f669d3f4028c90e1f498acc"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "2fa684a54a3c840c9244b967dca5b4c4"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "f73dd3fac7719b6fd78d1c90c6dd752c"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "ce905421a52a83797d03532edebca6cd"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "0b4b9cd39c718d0828a7928a063ea47e"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "ecbce8a185be1a848e3095a202ca8f3c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "866832144358406c4613896912494d6c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "8153663774e113c60a1726810948ec85"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "6ef9c93b729993834aaf20aeb7950ccf"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "d2868ae7cd7c96cfd86bf36d3238ab65"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "3d1a59e712fac55719999bfbd4b9adc1"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "e6e0332cf866e25112fe1ed898d43c9c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "7d2fa21dfd38a7ca2e7550284c402d9d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "943ae4f0d45428ef13efe8aa7f24afd5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "e3d829209fd13ff78a9c3e3ed2db615f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "9a4266e43cd516f6142e5b2f51d1c775"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "4cb1db01c7e1c357d5df84a65fb011c6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "7e6874a9fa2ea57a27b74d1eb9e3283f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "659a10650edd80bf31a6a4d6d570ccd6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "b82285dbc22387ccfeff2e53f980f502"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "6f819e7d33d604bfc4558c5aff9623e6"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "70d80f64db47f4680c85a92fda5882b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "a636d72aefd45c2701037ea5e1c8a8b6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "36c79cb39ae19dd133f9abd723a63da6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "eb819d318df3654d46e0912511b834c0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "4c112ea89f08978d2ffc70fab7c9e3cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "7b8a004b458d1f02a85ad44685858eea"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "d9154e29cd7273f62cca840acee24f17"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "25b2ae90fa84b115522a8cd7c5e921bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "b8bfb8fbff6152bf3d1591277e000b37"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "ea69df7123206885017f0ba0dc9b5840"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "062e8833d8e740258e6f0410161d6bb7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "c6879f8d51e715e284dcb906939957c4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "e3383d39755e835d329e15bee172e8f0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "d5bdbef354610ae4bfa5dd61367f93f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "046f94c2b428ddd9700e03f24688e2a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2417b13084bcd2e578a5d24f6ff753ce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "0f18f091fb59f109ab18cd61f3ffa1f0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "f2dc750c959612c5cff8e93b3c535c26"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "24d0908de76c566fb3228ea08119ae12"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "955ada62ced2ae07ca632f3f39bd8387"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "63e00a04de5cc82535aa007de62d57dc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "7453e86c9441e39d2fe008505f47b378"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "91e4d81e18a8fd36aaae7f0cdc1fc39a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "3b16644bba169f4a99e39c6f19e16f87"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "0e7b48bb91bc67cf5f2ee6d584a19b33"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "a72371e762595b1b70df52850c9c450b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "b257169692e873d28ab7a5c75bfd64a1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "2d86488701002cee4858a0b588136ccc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "ce69a18ed8edeea14452eeab7d108120"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "d8b28117459e6cb4a18974792288ec1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "910160d6a9465a7784a0a2d584872739"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "73a5935327ab23c8f6caf5a1a2fb776f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "987bdf67c3924c52eb6533622fd9074c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "63b5b89048cad35c3d15e6c3052bb83d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "6098668ff083545a2bd60d3286682279"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "2996d3d5502b4d76c64750ee9bc56951"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "25b9d295dbaef1975fd182752d81a9d5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "f8e28a65fd85c9df23b31853d33907c9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "2c02d35a724d6fd319c1c3d15c432375"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "eac7474e67fea6bd46dd8cce2b2e1ffb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "fea6ae831989d008052aea3b6fcb3bbc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "74a8803ce33048ff7158809558539633"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "95f89f3c37ca8eddf46ff450c1b6dca8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "80784cd6cbb780ed427a667cc1e67f6a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "bf68ec2271fcb4797229431bcf757fcb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "5d9669f28dafc78a5cb1e05cc82fa5de"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "024a9591a75d42e0367a52b1da0cfacc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "b524310808b1ab89126c4383ad2a35c4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "81900e1073ca84ba7718a535667af417"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "e38f22e0f4fc2bf78422d1c85916e89c"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "67a47cdbd35884ca978fb9743c3aea6a"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "aec44788efb8fb25b5311241c7e32774"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "f74e44bd2d7d2573cba87e0e45788e87"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "d6ad9be34e75c7032c5d035348c18f5e"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "7f2611dbb97f1c9b4681ce6b2308a4d2"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "9d8650aa53309dc7ed78632f3c993d97"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "1f10840cc122a059402177354ba1f13c"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "e3358f0c539915091a0a30179c1bed30"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "21b3d0ec9699fbfae3a0679d80ac0ff6"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "685b635a6528140a349e6c884b3178e2"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "10442af9568ebbfca4358b2a2160d8a0"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "0b6f5c00eb005f1a2b4c4782a24f38b3"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "fddbdcd14ecd2ec02743186965ca8b5d"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "e191dd3ba7fed717bcbff4413b60d34d"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "acbe6df239465f2e0d439e74e589219e"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "a2a9ed4ae9473d7fa08edc310ef2631f"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "a90b63c581e7bfdeff06b0cbedb05e4a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "8f819ce7034277182e7854f4fa5c2d60"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "8a40a68d2b565e51514bd1270da6bcc7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "f88a9745da37a92254b784c81de6cfcc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Audio.html",
    "revision": "b1aea43b778e7da889697988b4307bdf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Button.html",
    "revision": "5d11fd74c9551e477ce14d28bff3be3b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Camera.html",
    "revision": "79e33a61caf68417fcfc8c1767ac5b1a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Gradient.html",
    "revision": "0ffa735718b0d3dd9d0fe89c95e6eb05"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Image.html",
    "revision": "2615963cef080190928a8ff76d84ba09"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/index.html",
    "revision": "2e9348091e626513ffd160cc0d0ed0b3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/ProgressBar.html",
    "revision": "404f93bc7fc9b1e99f7fc190e7df0f80"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Svg.html",
    "revision": "b57ec597b38d6a7359a51939a62e63ef"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Toast.html",
    "revision": "ba4d7da2f0f1fdf93ce7bdffcd1b48f4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Video.html",
    "revision": "cdb003472766a94307dd1252a4f71ce6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "9024034e6ce6f9262dbdd2e794a9f5c2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "8313caaf4e12113564f2a7a8424da5b8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "11621105435fba18d933d124a9551086"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "12869f155f11638babe195a268504b23"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "035fb2216e2d83013098c8373e03bee3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "088f1d9809bc676b03aeb7bc6ad97e85"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "8ffb82eb1a05ab5c3ddcdd8b19867173"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "9eeecc081ee1493947b7bddaa706fde5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "77a51ea1756da65adb6a4e0458ba0dac"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "056a6d0e6d6720f318bbb7dff8c676c2"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "1d9703cce98e268177871b9c98d1e76a"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "c6d791c74000b9efdee7d244f8f9602d"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "c272ebe67457028065120fd986eb993d"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "a28303a12cea5940d193e9ff43b62a25"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "a776b93f5f0808e0ab706a349f0d04ce"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "5cd18b7b4a91ff91295c129a3a972553"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "f402c38778c7d067419d4eb47c971250"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "2cbf5b3d42a7c087df29c3be8eaa204b"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "cdeb9d7d50de3ae14c1bb04aaefd0bdf"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "429625bc6746b1e3d7d57c5c95859fef"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "d553a7c38dde16d163868c789b4c95bc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "45960378a8c65e8ef8fbab442b2c096a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "8e933d2d99fb909e8ecb865359a198d4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "69ab58f415161e820cb25a2fb48d05dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "3d36cf711a61768a9db169c988fd09cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "2c1ab3263621f4489b0de7022e76a5cf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "9f2a3bb77f9c2649407d89c292b91533"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "2e93e4cee322ce82ffd49c79ae9554b7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "b1e26e30869459f2be19acc50d869548"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "8328cbb2f7eaa56ae7de7e044f58b3dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "0e1a9a519e459c4d28cdb261dc462dc1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "1a20c81c5287e53966f906d38ab96414"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "3988bad206f019268efc2a71daf136d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "b923b05f5db443b0bdaaa9336661dcaa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "4e67e41c0adbe3a42cf751bde00a7252"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "67e481dca9167a6de0c4515a9f3e8b12"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "af070e8e36b996eb9ca0ef5c1b70fa19"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "e1ab2e51d6b24557357ffc6984cd6546"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "8503d6081416b0946d0a35b6c839ff07"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "3e39f78504a1925c25d5916d43a2cd97"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "88418551d9c3ac6618ca8f5e795ecada"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "de05b67e59b434a27a14e8a2745c23b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "0e1c9c9cd27199b43b8458776ac7d9a9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "98e2c40fc4ab249c5adaeb98ea19b198"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "d949a6cbfd9f13ac32bbcd3e77027c94"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "bedf3194cf8a02ec1bbd4164e0e61d0d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "60e556634daad11e17b6548d497ef4f9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "ce171e88c1b53183b455f6a42a403560"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "2b6955674558cbe6969d4a7b8f87a112"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "bff1560d913a5d0e3db8762d523b9298"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "83ade1b08b626120eeae3dfbb7570cbd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "0252b206d0cb65cf768d46d43bb6e7ea"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "c5f6938f64b73cc54582eac032fe725f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "eeecb3528be389ca9aa84310fc2ec0ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "6985d19e2ab04b8f50eab52d98b4c3ef"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "8567a2d19c5b546c14ec4ec5697b71ee"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "7f806e45ca6bb839ea383c51de0225bd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "80dceac429ab4eb47a0fbd0f0b11976d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "87778edbd0384821250c02b69cc85989"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "f1662e2b3c3f6a4ca4c6fdc51588d0c2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "0b9bdf0ce2a5c0947ce1ddcacc5400a7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "b1e8ac967f098b51ced5ae6cb49af0e6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "c8984a9b1a9300aeb2e286d30589596c"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "e355b82423bbd9547559a912e8a4638a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "4fa52b06ef6b01de7985aa62fad1f2cb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "67f5bcae9d33ef3a88b8221a4ea3772e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "f05281da197fe6a99b5a32bb5f432122"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "329a4d8c899b1e67c43242e1426e2659"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "863cf1726d07a4d4a2a2ba7560545582"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "af316c0052193eec1d3266e83fc10f6d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "a23f77078a8a2ec5f48f94606841a3ac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "b162fb397dbf187c78ed984ef5dd98d8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "7ad085bcd9f8aa3982398309a9a5e365"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "684936599ae920878840736e3574ff5a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "0537e86bbf248eae64e584633e0e099e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "80bfa1cdedbf91b61f23cab40cf67345"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "3a0d62ad5b7c8f99cf1ab3c0ede2343a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "d48e8ac8b73d2bdd78c49b4b355fb40e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "a023c8fb7e44f3215597c846cf7bb604"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "5ffc43cd9a3a194f8fd77a0ce673dc9b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "f0c0c8773a36e1696023ca482d9a139d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "7b61308d3c604ece74af94276319ef08"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "9067358b5e999855089805698d60539a"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "f2340cd6bb3518e13be78817ec6f6238"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "76ad6621f23b945ae1ec7edd94a81907"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "13532a4242db3ec4dac0be01955f701b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "294c2eaf0159ab13feb2e43b9fd72f57"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "1d2de2fd05284d177c4a37e580f17e8f"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "926baf9264705e630a2144e9e9a9beb8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "2236e6d9b7c5960ae3d5573323dfca0b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "be6c6ca61059cfb12920014f2050da42"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "e7b7ce6d71bc0ceda9a69d2096081430"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "5da28107d7cfc28da072b49ab1f765eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "d96f69fdf9293d908bc23503ded910e6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "7e04ac20a115fbc0ba891d19dc7ea317"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "bff66669b2e2126264c8014d65627ac8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "343cce4a7e3c33987cdf919501324a83"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "867939986c1555c4fe00a199a0a6bf95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "c8cf45fd53d7a92fd37af3aeb1a8cc37"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "b5cf05bf4b61739a9a272df659a75ed5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "de40d5a6e15cc307a9e0e600c7cdf5a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "4d6d2ef7fd27d8426c238663faf9d423"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "6bc05d809254ab8e3684d93557d9a4de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "873ace27081ee38aea6753a3ffa79dbb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "1c7fdaf1617fce1b40b1557559361464"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "1400d59d872cb7139add1d0b224f83ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "1d62256f9c01041758be785a2260e4f4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "8326c9670bb48cad5c6fc89415918cdc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "b260f630f9610d49a0d8e49af26249a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "197c56b1f8c2bb75b3802f2f9eb88161"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "2859e9979bc442324b6fd3ddbf35a23e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "9ca8e6aa037679b19157f00314e9e837"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "9a081f6befcf357b920190a6f3f731c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "3c99799a297b95eb9163342719714a48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "dd8d1cc567241e231f21b6c8b1f8d8dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "709b7293b0f583d4c9fd1780d4fb38c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "6335f4554d91eef778a257fead1ddf5f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "e4b6d1cc0621d4bbf6902883705d85ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "e8126544838b87a38542dd15e16de43d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "a87ca8b6ef0eb4048975595fde975c30"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "a07fe58706ed0acdfa1d531b319b6a27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "0d0576f9c9ea3f296462ef3f5c53250f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "ce29b701d97672a95ba761018390e9bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "2f1aa7fb59b704b5c8967734f5acca0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "5f968326608a23edf0e5c5baedde23f5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "ec0e7f1308e1bfb937de19cd0c104db6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "efe80b9d0e55401a2b48585284e7d359"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "164fd3535a4710d7511c1bdf64a356aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "0d6d1f7fa979b2e228284f725e73c21a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "03fb42cbdc73f1b107c49757fe376015"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "3078d2c7cffc02ba6485cce6815aebcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "a2cc0618bb6f5a68daaabe1065b61013"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "af934f1c6ee17b19834a6c658eb788fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "b8cfff3e4cb8a12f35dbb183651691c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "4c1617d9aa95697081d7f9a703147df8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "2d8bb1de567d44b02b9c71d45d6cf277"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "08104b960001ce8085d3c50f31e1b628"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "f60e68e2bec298cfd62a814843bac807"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "0755a2e29a912bb8c909cdafab5f74b6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "c307b0b6019fc6b82fad4a3a5f125398"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "8e6c2bdfb1cbf60ef44598febbf142b9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "c11be77432a994dde983604bf84d7a6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "a78b9a88a405cd6ffe697fb9e5941b88"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "ce9264c6c047249cb3be9e55fb43a8a6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "0b9a272e360a464a7b714c5f98129acd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "49f001e32d19a457804a4fe3c093636f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "3017cd41e103a5b448a55e2260750817"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "5ec4315d116cadcdcdb978f61da07c24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "c4870da65c31f64d39b4333633b534e8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "41f85c161865cfc4cf997cb89edb0409"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "363b8a842c6ab9db73090df72513fe78"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "11851c2d6672732cbc12593744b0d11b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "45137ea264f908f9f18ca4f09abafd97"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "e1d69509147d84a182dc9f372702df9d"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "1ff59c25433c82cf96e95f922fea28ec"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "9525830032997978226edb2271a2d904"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "1f45ac0b03815d5a286f5a2e574c90dc"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "75db0821c77af65280c849b026a26cec"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "27e268d0dd313c19709c77e623417f47"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "a20f37c8ea71574f9089389f7ed4b204"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "1c3b91afbe95dfb75d92753f06793b56"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "3af814aaecbf6308030171e245ad2423"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "cd04e671e3b69394e2a3e0feb9c6a755"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "5617db516d975662791461557a39dc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "ccbcfd321be8a72f1d4c4d4845a1aed5"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "0bd720ae1f52dff744d77176b8b8cb05"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "dd557a10a86eb391202f1c1e9cf006f9"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "d72b008b30ba2c252b2ca63612c63214"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "3fd68d5acf894b8e27e2b997b8826d59"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "712c1f71db6010d69ab1d845493564a9"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "7e4e75e9b76bb6f02a89347d466167c2"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "ff64da2ee0e64c93500455cde5e4925d"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "bd1ede2f82bb1f01c2ab62e46c1bab7e"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "748479e2034435ee74bb310cc8cb0a82"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "41835bb1ca5b3e420aec041cfae8beaa"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "072a35dab4c9b705b7d4cb74c118fed7"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "a81e92c4961c413fd2a24dd5d5fdc48d"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "a69dcdbb9176a9b76a670f3a4092b035"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "63c7a9de96d5ba08061720d1dffaf162"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "680829c04d5a22ccc1b8155da95fa545"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "fdbca0b19b687b30616d3b209631f1c5"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "f3f98bff4744420668e5db70e8cc2b92"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "032f522b991540cfc2a41bb48ffce81f"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "4e3943ca81cf16da27303eb529d8a9c3"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "4ff8f18262515c0b7349e2f392e808d6"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "2f1a4cf5db657eb2bd5a17b1d385665f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "b161bf7cb6114fbf9526ff6a020877c5"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "ef3aa6694870472d6797a2b3c4872982"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "9270df6f7e032be89ed2ea45b0887d50"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "ac3fb61b245bbe0810b72bd38ffcd875"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "2d50e3366cf16639648d1aec959d8b24"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "26026aab076b2a6b86b49a839ed1510d"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "38cb02c148d84a55f1eca780df95668e"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "c70395a2ff77779f215fc806a9af87b8"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "a218272dc4e6a855a90a7ba1aedf442c"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "c11c69fffb6fe24a64a6ae938d581179"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "47535f7a79c5ae281ffd5ae7727371dd"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "66fc3160cff3213ae16906300e576d6a"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "24a3c05f9dd83bc68b9bb8cbe306241f"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "fa83466997d493a9789f102bc13f6c65"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "e0f4a94aa0fe2eb04e0ac0d00848ae0c"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "e1a3f055b8881f261b0744bb59323c3b"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "fca9bdadc93b55a06ab0eaa026d2a706"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "251325233edaccf7964e946942460939"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "7d0872dd6be4c4c3eb1e13e9fb636c48"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "4aafc0aa07ce3724fd76ebeae7337bb7"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "7357aca2117a4bfdc46a830bb8c59a98"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "77ede53154bbf62895a211834b7d5d89"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "7c5740acff0d8bb875aa2c936ac2d6de"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "a558c054ea43c3c8092c90343b4d3f93"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "a609f4f81d650f098cb9c7e714f63743"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "a6990c448e365502b31a07524e557e48"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "ef41529da6f508dd0826b86a47adc5ab"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "ce1f6622fd5618fe9d0d54d1ae984a1b"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "f4d9ccd7eb29f07004a6098136a5dea3"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "68814b7e5fa8d24cdfad831f5a17324a"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "978ca2ab163a3966ec5a76909f11a7f0"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "8e4936d7467b2e063ff71af4b12fc134"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "304d4fe65e8bcb242387a96738445519"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "3449040b9d114d2a7a8d958196f9f7b7"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "30b333501f66fbb37041df9dae4c05ab"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "77445130401d4c54dfe97871b82829b0"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "4d511268f675e20d3017bbe025875e7e"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "997d2c028503ab7a96a385d1d17aa20d"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "8d61fcf131ddfa42722220f00a4abcf8"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "9b8e46394c1b60bcddd69eef19f21be4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "56f5e65b0dcbc7c90a80b4a2b7da6037"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "3ed452abd4f97aa197688d1a512a76fb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "00e22c317f930c9d29f308f1fb47a289"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "781701355450be7b64c8661bb516f1fc"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "de13d12d61080bb29b38cd7ee828f123"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a6a625a808286a0a43105c1b4a7178af"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "5fad64c02b1f674e9e5e140949277212"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "fac95b1cd0ec7c3f7f6d16ecfe945649"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "254cfa81577f885efe4890a61da70f0b"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "56c68972817b7d040a708b23969127f4"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "7acde73ef868cb791f09aa215edbfea1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "4935afdc9db86578fa49cc59123b089a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "5133539a72637a5fa7de3edfa59a41da"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "6562343ba21c9ab5b3bfcb29ddb48294"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "0e508ec5156f79a298cfa61b8a1f419d"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "44ce0d2f40c07d5a87a5e2460d7a5e4c"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "8220b7ab36524896e9b965bb096a2dbb"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "b988f2b602c0f4d7bf37574a564c30e4"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "fe2b0db0218de5f14b8925cfd172ce24"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "4cc75c7870768dfa8ec8d5c02e55f572"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "29d1d8492b69c7260b5fc0e5aa6b3f2d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "31fd2cfa8cd949ef093b183faae50c3c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "f3e2db4a4cc00ae1486bdb4bd1b93f76"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "291b7263bd69d57291c7ea6358c2983f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "b2f902b6122d1b46cb66e69452fa3341"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "2f56cad9a919631d59a5dde85010c568"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "755388738ebb6ba54982b0dd525bdae5"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "de6cf10ddc8ac683a462f7c44d9fb271"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "bb818e2f2530dfde59ceca819f9d3d8c"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "c761014f9be2ae5d7eb8f006bb9cf789"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "960d5107e2705566ae984fd996c56162"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "a43a4960494772fdeb4c68c8fa610ccd"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "513f3db5392b3b7c4c6f29eced2cd9f5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "952de8781e8ddc781e06b29b509dd49f"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "6e3bc13fdfb55f174f01f8c18d2fe0df"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "e519e143c31668fb05ffd49fefddacc1"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "6b8c6c7588cc0fe8c22ea509ef82caf7"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "a6ad963d17a2747a9d3078440f0291ab"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "77f578fe63b5e026410975d393376e2f"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "d743c2a038f3fd3fc6d65b70721929a8"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "d0ec16a200bf493062c3f7a6487ed1ab"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "3fd0388500738d6e45b2718380f361de"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "bebb39bf074c14cea0a241b1598ed9fd"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "ce5d731067a57dad74145d0dd6203fdc"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "cea1549bf52f2f5921ed62e4fccebe7c"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "a839d2d4e5919f26ce6d812b9c910320"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "54c637662f99f01787deb6adbe8762aa"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "d57d38ef86b0ab48b9e4f677ca9479b5"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "48c9d575e5603e4f7e2900d3a119c9a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "1b69077bdf623f155456faf6e4aba83c"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "4c63693d4662dbe22d41d6e945415360"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "bf905ad22eaf4672a49291efcf7ed426"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "c523fdb6ec37028855e218eb168e3f4a"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "6553d052bd66e2019972aaeb3b0f5ea8"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "8f01fcb77ccd70b35c4b46ef8cb39424"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "b9588ac4b26e0b5317e44304cbec8c6f"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "679a4c47b899eb516600c0fb8639b6f8"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "249126ff9e6c797e688e5c3145a72574"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "cf111ad4dbc3ad83b4d414180d9e06e0"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "b18901344559389d67d901a01ce1d5a3"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "c660f27890c46eb28154aa29b6939eb8"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "25136b1c2be5aef90229a1c09434ebfc"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "72b32bf115b8f4d1cd5388100ad9ec68"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "e125cefffe11d2f04d4bcfad9f124fb6"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "acdb4f2f94a4929c8388955e9cb6bef0"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "71ff0b8f1870d8b79af8706da5d3c6f8"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "80287c2f16dfa4a1a4ea7f940963fe66"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "d53619e1dac5c2ce1cb2964f8922c64d"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "6b2b4f44b59b3a6ada9c0fbbe414d9e9"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "188ecb8725c84c02702abe13e154f04b"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "45d323b9b98b9646c688818e56f5394c"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "7ef1cfa5079d7607dcc03b9a0fbbfad2"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "8c7817be7314b3f2f841c63923f78337"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "a204633b0669e6c84da554daea58fca1"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "5d49d040dd442388adf733b16b64bf03"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "31ab066e83a06643a58ff24400b841ff"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0b006248ce8d61a63e2ab0e5b12322ec"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "5fd43f869b0fb4de67ae43c3acb36dfc"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "9745d0df5da0b3175c54f5390b63d0d8"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "a5d9422331a11e1393b2dcf9bd093408"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "eb058a93c87aa871b9d919d3b6cf4f6c"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "6a7fe5cdc34f96e4c2906a223608a4ce"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "28dfc9eeb80de06cc0db0e68f69ec986"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "8d64ace40decb82a3e16b61d251051f1"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "cc2573ab109fd302762f6cd890ad7229"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "5adac91683dd1bec9410dfe8917bae2d"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "0992b62972a59bba577ed6a402e2bff7"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "62920e667fbd308c8dbb0c10a03e7449"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "12b4b751a003399aef71b2383ec04e97"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "eda3e52d96146f89e3146d5957be0cf4"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "010ca32dec2483ad9a0688346a06e087"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "5adf35d93ab8db9556a90b345747b9b9"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "3df751ac6fb03e3913bdf58408c81097"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "d67968e532a3e4cd15ae828d562c5550"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "c29a830756c90a336c71f81ec6f98b92"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "cc06241e1291afc26c37d889df310bd7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "ead521aafc6e8587b32490c0ec1f7df3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "225ef61a4651015dc4ffdcc0c739faea"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "0293c144b9eb72f07465e86d155bb2b2"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "a48817768b8070d50297cbaeafb6b759"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "0f7dc1b34ac4ab14471e3aae87b4097f"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "6fa6928c4d910aec98d2b1376255ee55"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "af16c37fd023aa0a8ddcb0e0e627735f"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "e99f3a7190852c09c0ba351e7ccb44de"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "39fe15ea37f57ded52b623859c3131cd"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "da0cf334d5d37f02a0f0aeaa0d32b9a5"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "dba7ed8508cd0dde5b98544015d1c2f3"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "b1c9ad1e18ebe650b3ef88fa511de1ad"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "b3ad4711e09216070a828f2629e283c7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "7886f973f3543aeeb7f5c641c172e976"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "31ca39324b723063f3e3745427b4117c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "b8c2434e58ef16d16bc1f27955b27ac1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "64b98f8b2fa995decc0f7fbdfce32ce1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "7b86f2fc96d9d1d017aa24e3510bfb8a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "020fbcfc0000825a27fd5cfed6e4b24f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "920c1b1603bbc4c279faf72afe57a198"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "5dfca762e608b1df4ef05ac429848eb1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "0e905a3a3df75d0e376812ca530ea7fc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "6b7d29a0508286fd7b1d8eb58b6379ec"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "43ed76b108595ba8174bfceeacb4457c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "3a209b34eddf8a20dcd7293fe394d553"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "ded1573dc80bafe0412fab7a66fde6ae"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "ac5145e2b0b22825b222a31597127ca4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "441073b1beb9813024b43fe1b88d324c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "c262938a2daada1f1889b6128a4265d2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "980d79713c28921f130520200cbdc426"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "29ce8fbb98d122fe29dba61b287dafa9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "bbd8ed122d51a45018a87f40c6b21b69"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "3c6121a5974573cf84bca1118342759c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "3d5042c4d456298be0cd03a2dbc880cf"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "bac45df0443efed3e80495f78da23e2f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "030e6ec4323a3344f59dd84a3a9fca63"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "917c1244f7db6cb3e75a05752e0e4a3a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "4f23b394eb2ec49787838e9aeb03eab7"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "6ac811fbb883cead2af7266abac8a11f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3ca2a81a925c8fb11c2aed4dda09958e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "2663b410f88082b642c783b5dafcba64"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "fd208d9a3d990b1b71c7000a317b12d2"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "720e1ce500163e7563be3c8d1522a572"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "21961c66c30315ecfc6d37ca17123422"
  },
  {
    "url": "categories/os/index.html",
    "revision": "9381b62cccc9c4e6b0be2ccaf9d16717"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "b1f3d512f32b3608cc2311014757f182"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "b584a00937e9152c463d90bb5890a84a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "f932cef66e862d9451877f4e794ec6f0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "c640fec2c14966ce149d3cf41af431fe"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "ec5489a11bbda439de2e22e14c793c83"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "57046b2d8d900067ae8428c89611f717"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "aa8c9672ce06f9adbaec9e1608ec64f6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "5e7abd4952cb986924385262f3aa90ff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "a8b2c01fdbd2dbe6735919f1239fb8db"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "18ffd41171d26a906bdc2d2c2dbe3301"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "29cee911ddf2900dc23e4d8f9542d9c0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "ec6085a083363dbe51e550b56f5e601c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "d0b9e8b75cbd7b4cffc0ad625374e922"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "cc1b613b4ffb72e9b17f60ee1de5f4d2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "f15d561cca900200c2beb8c49db266fb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "ac7accf45965719597176269d0634d42"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "89ad34887d1c3b5a17a46e4c92e410f8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "c265c113852340c1cf1b63709a521210"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "6c9964e6bbc1499504b6bee16ca4579b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "859e3d11f6af5e65d7ddc61b079474e0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "e4985113f93dd424fe26b98aacf79246"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "479a00799b0b918a4b83a8297ef85d3a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "b97d580d2aa2a998a2753e9b5162100a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "100adfc59900eff7e2a0a81be6d6917f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "a3b88ae52032c88f792f1204bc8156ef"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "4065b92dcfba11ab6ac371092348a590"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "6a541f7799b68187cf7d11bed5e37cb6"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "88397e175e29db6e1436bcf3a6957437"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "c59002d29babca6bae8e007458de8395"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "eb7189ed0a17504fb3923ea7c2b0afb5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "a78ec29ebd4e1f6abfaa37c2ec081d34"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "ed189dcf2d4a52e7f5375a036cb6bdfc"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "0e4a083a853163c1d2c4f850d020f6c7"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "0ab76158807de4f5f2209f7966204be0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "5c0e9afa2cc85c1c4c96f35117399114"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "4de22039f3a69c388b7a49c84e2cb08d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "48e8ef152ca638b8e520e2335a19e38c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "082e50abe0dcb5a02a145454fd477577"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "4234100bc01537b6986d9b855116a51c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "fdeea92bffdf7ceb9fc9c337e0517f2e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "9505528ee6dcd88a2a17439e17290ddd"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "b0c867015e28d86c67a87bac7c32d7bb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "c9e5d9c6813f0e05d6a6a4a1e947464d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "c2143632e26fa2364b248b1ef0eaf2ae"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "f4b5add2adca527860b6f9f3b199d141"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5bff086b6573605aaea6cb4403a1aa1d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5448410a296a8f68e856b3551d1d3cf1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "d3358363f432edb8d5063b8e1ff20ac0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "1067df71bbca0a7a625135f74572325b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "9a5de2fdaeab8f8ad3163985e460a34d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "e15d71a7be189b256a77b0d3be0fb1ce"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "6266443fb5767d2c8c8b43010b844b87"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "4b54941cd5f70dc3a5ce9d71539e2326"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "99694f882782facf4f5fdfa6a3f14215"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "21df93379509e67bc0a9a1c4b79e7405"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "4d0b4e04d09ab0436af1977e387dd8b0"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "d6db8135961f0dcc36b0c32a2538a4e5"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "2e8af8e80176074f05854bea066d0d68"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "68bf8a8842b24190ffe34de917b4871b"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "2d1e84f7eec053a224a7a9222b2b45f5"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "9eb8b3b7e02ff2e939367090b8464f6a"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "a6b142fc4ff86dde18dd8a5a527284a4"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "c4651a3cafea8234a8f1e101b1d93d8e"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "034a535498d541833fed4158b520dd80"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "533a5cd2fe6f40554be9106afbf4e8e7"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "ade1ce7d6afc62438a3b3d2547d240eb"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "a1d6b112e21816ae0dab2bebf620d13d"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "a951e0d052acd7828b105fccb0a12c49"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "1944904cc429d46fe3abc67609c32cf5"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "697f696d1acc6e2d64cc137a2382dfc4"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "6f126f896ec9ac0282a7cf7775814b4d"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "f469645955879667b1fee4d2ce540524"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "0d9807d2109264dfef68b0491fa8eb2e"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "b701f65048c8a2a49883aa1cfbdc442f"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "eff869014309d56338dd4e45d1fd713b"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "ce7bb3ca3f683101efe8b4fbe28a24f4"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "639f087c09af6b7d0f10f297b9b04f93"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "90133d82b81529e65f8530b464228ada"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "43d3a690466e7402955bb178cc978f6b"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "52912c68f611bbfc92515ed9782dcc25"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "23d6cce2efad24c5d86f5ff7f2a4a28f"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "8e77320926806161cfdc2ff0c5607ca2"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "724a3d2d5e5a70cd1ce26dd47709e0f6"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "e47eaf41998e5fa25554a052af07877c"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "c653101116c2b45a7f074689fa92c86a"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "2af0e1a37e01870acaaad776eb070e9b"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "16d4bf094019e2f4a93b34f2809f4066"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "a0152d7b5b7d4889972ee3925683ed6f"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "a352510dc04ee2f9d11f8609ceca8bba"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "9f81e03a72c9d7c3f268b67f4f01701d"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "32153e371c595976ec435c33fd56cc56"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "94121a5d2e3f5f40b8553bf02f34e0d2"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "07be882e4a38c90f0e32f75abec4ace9"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "e3bf6a1ee0891de2ce48f64d8eb023f7"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "f669e0ae9e0f1699dff18e5a89db014f"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "2015709504daa0b37ecf0366a0716353"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "760cdc859a7a5ba26e493c49b6f1f060"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "803cc13e79d8c497b48790387a6ac45d"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "373206967819172ccddc622e651bab11"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "1d755be5330397f298fc820afd76cba8"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "b6799ee8b410344ba4585b669bbda92c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "10b18c7059517b20b44d7abe06be973e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "1c8623c11e6f7f14d97b26ba8e06cc88"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "a306daf2ce014cf30db48f53d5adcaa3"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "f060d6842244c068d402869a932beb89"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "773b1fe99306ba578f7883628d69e4aa"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "06c1ba4aaea1829ea7ed2fcbc7c01ee0"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "99a04473f35f4649a5cc0c83abe39747"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "d3ebeb556a686ea7de520d5640e77e8c"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "962b370d07bbd26edc94b6cc14a434ed"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "dc891bec1a90ece54f141ef385490cae"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "50b743e30dbe5484fb25c9f8bb8f49bb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "b62696f2735f5a82fddb5c631d78bbb7"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "728d26076fda886a5f9d8f3b5045a8a9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "7f2d6bbd5068fcd830c96c9a9068c039"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "c12d7d9f7d0e97887f52b1aecf004802"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "61b13cc799cf4c5fbbf565f8a5be20dc"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "577d1969139a3e2713d0313d465186f2"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "54b20068ff485274747ff4ca94cf5ca0"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "46da457a47e398a138c17d6904043281"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "eb7d4856ad6a809700fbc8f8a328f886"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "3ab5dff2b265befbe64d4f4cdbc95aab"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "67f07616179ede4c1a00a0e95db0e066"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "eb0f0935e6719753ec0445bf5c043416"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "ee97a78c452522f1e33858e61233e728"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "6bbadbe7d6c4df856e3ac2af2a94a59f"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "58874bf003c94de2b5c9800d38fa4859"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "d2cbede42ac37109a3b69880914ab5ac"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "61059360d6121cef7b9953800b946b53"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "fbdf6a51893257b76e192baa537a3f35"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "bf44cd19fe86040d77a7e691d410cab9"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "a37ccfce0d1826fba803c6df497da85d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "6e64661e331a44c1c359ef15b450b080"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "b1ce0ceb2db672ba55ffab6a3f08bafa"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "569d6e5e1141ffc56a4ac687ebb52edc"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "3d6598ba1946e8274dcd3f604e0c43d9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "81cd939d4dcce2e83bea0cd8f7a918f6"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "cee4390529a9eef2da8419d04f5b0253"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "daa5fea44cdc9f26165a847273144bd1"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "dc5257cf216f1250d3839b3021d1be3d"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "dd637f317fb52711b4469b7cde27b219"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "f81f300a4af4bafd23e2d9735f834245"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "f9c7a0675112ae1815a6caa0b961bea9"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "dc913fef873df0bd86a7b36a3ff0fc99"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "654a6d747687b07f45c23f9554103320"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "1540fe16739d965fdba4e5a42c8661d2"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "43aff18b496cdf1579da15e9b1448261"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "d4fc45739d41dbdad8340ce2ca5ad0f5"
  },
  {
    "url": "categories/php/index.html",
    "revision": "4b8c029f7d9b839adc2d9c697b7671c6"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "65dc495bc37fc28a646b95361f58dfdb"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "37c4eedaf15614dbb39aa1dd1752e3a7"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "597b9e07b1f74c31f3e1d6880f7ca99f"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "7db8e313c9d66cf250120630a1b084e7"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "9ab4d3fbf74e5f6ab76b6f8a7e8b7362"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "063665322af0cb0be2dc7a769f915ce9"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "ed822b4eaa3066e98863020c588b36fb"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "b24773a9598b9269138d9626b954e1b2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "7081c882096f2df7c7a5d5868d186e53"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "4424a741f09bcf59095e0b492756ff7f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "8cccd50f76a41a392969a5911a07c50d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "f665a7bda63786af2e7741f5f6543b95"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "5b8f6f1f3bda39e8a05912070ba0971d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "11d4e147f0db9c39090da242a94e0f5c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "9d227bb48ebd6b47ae3012e747c59dca"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "15e8748accc1364141547fb13cf0d08e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "e89bd24fd3a5976a060cceecea0e6ba1"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "09465e680312d0db3c8207c40706dd5a"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "d24a8d2213a87e948c215ceda436e182"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "ed48f4bcfcd01e675136699c11165cf9"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "8f126e4a7b348eb11bd8b8427881a33b"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "e8c0e57533edb7c4b9230ed0511a2eb3"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "323344a76fed2a7f5a067baf624341a8"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "ae6d70d0c968938b9a3c128c378f04e6"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "d319c901bef31cd11b223b4dd9bfff97"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "a3e5a62dbc19b39b62579b51292ad4b4"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "0d790fa7f92e6a0ddc7a913fb8912acd"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "6c942ff0f15bcd81dc23fcd7d668834d"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "4b9e2be8efad7b7987019d4631452c1e"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "4486d2e9364e7558409e76b7d06cc210"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "7106791e258a12c69a18d8ee24e2dd79"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "3b3e65f90b20238962a7cc330114f2b9"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "6ab7a560c4066962752a42c662b631d3"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "1c10f05ac71fc902719528e7a8fdfe0e"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "549f58a78ecb6486d23820d66cf64fe4"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "ab45eaa1d29126ce7f1db2c1b82b114e"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "aa3eb4f78a1ac9602370f86c2613f214"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "d8e8571d81ff73f1cd92d9431484d45a"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "18e3c95ad52919458d8423b3764a4c68"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "2838938ac42f3c337562d35ff6d027bd"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "45db6cb8f31cb3ceb604a62d9f4bba5f"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "c3c8d5676df936afb0aafde422025459"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "9b9dfd137810c4507802d38f0dabb453"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "faecd78188f10c5087e3604c505ef142"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "079f84e6910caf64ddcf17daa1626a27"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "67d607d71d12432c69265a8fe42e5b6b"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "220ad62782183765488a5729ac63ecde"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "62be14e18ef6e8382a96d34a4fdfd461"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "0be157b73c6c717a4d5171bf52c95d52"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "e5c06fc54ef23769492430953b0a1102"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "42296a9a5ffe308c3a922b22e87eb1a5"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "8ddc7a3b0556246391d37409edadeac0"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "6269538d1aaa35b9679e9b6420382ca6"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "e54559de50a6a79a2e66a0ab8609da83"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "f3fa352a55f55725c2f9e4339abddbcf"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "48ff0b3b6d05d68b1a9701fc7d662570"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "955aacd1270233a2c56a4b139f430666"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "b8088af6195aa46f7d7c8da53923e655"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "16199f017ab5b53a9c3962d1e63e402b"
  },
  {
    "url": "categories/python/index.html",
    "revision": "6f0f185441aae4532ed222fb8568c6c7"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "ea5c2a3e0704fcd6b980da173ab36ff1"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "99dd5d686c57544eb05ab03777215f98"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "25004eee4db625dbc8721e414f92d5e5"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "febf07c017e65466d89e6d4dec8b30e9"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "268c752f6beab176f37e183ed1d42667"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "fbc09209dc8057f2ef103256850f29fe"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "382793691198f47db804cca784c1cb44"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "726cbd9c29b9cecd8af14a01bde7c025"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "c0445eb80325be7935ff647bb0f45151"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "7f56a96fb05166c09c66fcf1f876cee6"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "de98369ea9bbf71f43da7099f6af10b9"
  },
  {
    "url": "categories/system/index.html",
    "revision": "396b53899fa183ce5b4e21b193294e7b"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "ed3146c682cc20db62383bbe04ab9f69"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "dc325d1fde27ba17f66528af760c5972"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "6067f482859017ff5fb65b5662a9ba6f"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "138e43ccd7241b5f9ba90a23052c0fc2"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "b802ef4d2ce44077f241341c5427ca88"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "f65176241fc9cbcb077b9ae9c64f094c"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "692da0d2a10d33c5d39c865fda53f05b"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "3f1fb1f5879ea133e07f25f87f762ff9"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "af7290656856cbf6db021f23c1763fbb"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "c6e059d6977773f01fdc18c1f94fd8cf"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "6366282a24f13b1b7eb0db6f27031340"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "1e3b69b8b984b2c6e59c71bf8f54b3d6"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "b3fa28157a6523ac2428d9e5d94fb437"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "9fd5f2927fc8b52de872b6888ead8150"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "d7cb621ccaf313c26645ee7342882798"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "37f0675e1989018e18f0e243603f4a02"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "f9103200c23a12b2f7c983a32d5f0a94"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "1b6af0b7db7718ff52503a136616be86"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "f3c46a142acbb0d4cda81a4cbd33455c"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "9c6d41fc7f4c7b4ad61d568f383a2ee0"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "0b97b3c32d4a2ff46675d399b38372d1"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "844ab263552882025a39fd783755804d"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "5db5ab3c29dc096102cb5d763d7f10bb"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "f1ca6c07ba206b87c09505f2732227c4"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "24cfb26d23ff2b11aee330839bcb6e51"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "09446d9017b1b07eaf9d318bf5d4c95a"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "cc3fe5b90e8c1b62660d66aac40d6fba"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "8dd555a21a80bcaeeee27a52eb3af51e"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "f2061c5f0e187ed90c0980bf33d89aef"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "3d6be83705b87dd414171d8ee1481071"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "36990b86c16c388a551e942ab3f4cde8"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "b469f9b1be5e7e28480d2859cbe8f6f6"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "48da33dfbd6bb0ae5b27afdcb5a788ab"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "20ace65cc03e9564308db5bfc3c347fa"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "d7396609efaaf2fa148d28f61c9838ab"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "69e339b941f3f417957eef7379b50244"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "8c6ec3cc7ba5abb2be5e15b48fb9d49c"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "286946748e5ae7b49dec2f0a8b83edc5"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "ee527a234156c1bf4a38217c0e1ec56b"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "99f03ba47b51c7000672846531b8e31b"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "f1256e148f2195df7b5768ce872fcb32"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "a6dd2d1eeb8a073e51acf4083cc7bf80"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "bdea558927953d40b6dce1c215683110"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "448cd4a4a95c4f60906e25155e35b250"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "be8eff7ca427ee4688e897eef1be2bbd"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "8da8932c4254e0e5b735937068d85772"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "1ac119275f337b31c7c999d44354a400"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "0b4de72bb97f14d6bfc427d3d031bbba"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "80641a3215db88354d6a543874507b5c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "fe1b9808358053d504182d9977f24bae"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "afecd27a8a8bcde68e0437e7eac2eb05"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "7becdd9c4266ac96b6bc06983dd80c54"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "ddd001bc728152bb206e4ded8c405270"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "2f5abb313586be0a01f0f9f9642e593d"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "ddd8653423329f83c0a30109f1094c50"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "5d3db6f7589664a6ca34baf7acd39013"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "e58b47eaba80f22164e131c6567e85fb"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "1d460abbc73f9a566addec2ae51b988c"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "6665ae9582682af24f0af404f394f0ed"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "b1638e5c9db8290783d6da47cf1697ea"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "72a87fea7e82d19471301ac9267f30bb"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "ee9f69eb1795e91e1043876d1c1f1614"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "13a30e7b0a1bd28f5cc431e7ad20c7c6"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "dc21fb41f49297dfd16f6102b69e0b42"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "8db13cf71c9d63373052e0f5a0d4ca99"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "3168460e97b226159e95fc218a4be65d"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "2f4514bf4bfc528f1ba3f1a65d0a7ce1"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "1a340616fb10fa60b03d95df5eb99cb1"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "3c23347680c04d5a43a7de4ad7a28da5"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "c2900576c565fafac2fd72398123a4ff"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "0d74c71fa682fe10e32cc0ac6512da2a"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "48ce70f8df343439c88103770cb1b3b8"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "d2471004e7f88aea4c0b104730fa87d5"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "297fc9dcd5227020c9ac932c0abe6509"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "028948d50132d858edb6edbf9d75f812"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "a8c545f2cd48565f88d35e0461da8661"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "18e58b46a47acfa4130a9583ca6f2288"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "cc3ec165a5c78f2452fb091fee4d29b9"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "e00a80d44090bafb740a6d2c862c23d6"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "49540df64dcc5b2549b0d8dd8b3aa526"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "bbf7ec53f3f45288094ceceb24588cb7"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "302695fba17869cde23bdd4c1ff4a5f9"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "b8acda5f052be37f85e8b209c5755b2e"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "b04befe62e07b1fc04e773b9cb413118"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "587a3781a101a69c08c9dc5e3a85f18b"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "f71750aa32cd20e14253f95c3531fd77"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "76b4f169d3809fc413ef432da6b27f0f"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "71e8c20a9aef1b977db3a32c76627c03"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "4d65b115e59315a6ff32da18dd86df9d"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d0e148e6e887b4b98e7158291822d9ac"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "12065f8e6d38d82652e044a74348ebea"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "ab6b2fe017303949039fb0928eadeebc"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "0c88eaffd1a4f4b4285cb8aaa699b496"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "61fa553e43fd88dda06a5f5883e2b09d"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "6dac39e254d9eaed52883843873c4c19"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "953d428dd7f1cd53fe87fb8fc960cfec"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "fd28e600f9a75ee004f0d3bd2a4e7597"
  },
  {
    "url": "favorite/index.html",
    "revision": "8de7c8d884bf04833f4221dae8bfdaf9"
  },
  {
    "url": "index.html",
    "revision": "2dfc0ef294f528eb21192f9418f68009"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "89a72bd9e9e14067dae17c67344353fd"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "9c451a2d12fd26714d97d4dea0c56567"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "f28465f34acb362c37e6b5fc1d530e4d"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "dc32ed9e3e4182a3333a8050d5cbd6dc"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "41593282aa26e95f2707d959632cd711"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "ea22921d06615b69db52ebfda0b30c10"
  },
  {
    "url": "note/index.html",
    "revision": "6d67a5badc07f8a29fdbe431fb2da02a"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "69e7ef2b68ebc3933368f8c1fd6b34e6"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "af450ab458e96490b31e2a1ace3321b7"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "7ee23044bf10b25fd88040a11a7e78da"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "2929cb11087999ae178ceacb5f09e5da"
  },
  {
    "url": "share/index.html",
    "revision": "65de5342ecd08325fc4eaeef0a87a114"
  },
  {
    "url": "single/about_me.html",
    "revision": "af5e0ba2a16aeb69f80c16ac6b4daa03"
  },
  {
    "url": "single/all_article.html",
    "revision": "034c5907d6cec9c3a00d282f7b9ef492"
  },
  {
    "url": "single/welcome.html",
    "revision": "04861ec3f618b2e880d50bc81e8f6168"
  },
  {
    "url": "test/index.html",
    "revision": "b2dc9b8968c6b0a36dbcf223925de046"
  },
  {
    "url": "test/test.html",
    "revision": "8106e655063ca0f020f905fcb0def434"
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
