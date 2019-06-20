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
    "revision": "89ae1a65f71800a4f1bd22e0e49884bd"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "2742db93d530510abe522b8a65a573f8"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "30da92fe7cd032faa23a3ff891a742a2"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "e21bf31d112a8974b609b9177914a294"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "e8800409857078753ea5b19dd1cf6694"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "8359f9b5ed977bccdb953ff83b711def"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "d174856ab1f91a51acf2d6c7293a6af9"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "b1e24b3f3503a0382554601939828b31"
  },
  {
    "url": "articles/index.html",
    "revision": "851efd06dcfc763c02dbb913d2752216"
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
    "revision": "54d34e2796d5c8d520c5253e72b75493"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "894e5468c8d7dbff0bdcb70a439f0091"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "4af3718d484b1f8d05db8dcf683c8b2a"
  },
  {
    "url": "books/index.html",
    "revision": "0d2968fb72eede725c23ad8936d63554"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "3341d500c5a17c9fa8ffa8d949124852"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "0104fddae40ff46e002d5573b776556c"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "a56e0c23bc965b06f706d497b8d3c49a"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "9785e24e6e6e7a0757e38b80c93976e7"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "d19e9ef8c4e7614a1be1f0c16ef769c6"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "80c97a6973f25610568f7109a0df643c"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "6fd80401e6be0a7157e26a85980f1c39"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "61cddd410460c710a236ed85a40f401f"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "f3438e50ed1be986dde4a6de35be0958"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "3c91926e31f9766ccb262b250f115c74"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "9b7e8248400e3a1c72ca8e946c0f4c1b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "f0a699846e27601f3a588bf385a5b45b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "21d12eb01bf2e54b59807a4b737ef42f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "1a446d846745fff3ab14f99eeedbb6b7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "a81811b3e57375cf0f55d30b5440f358"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "b229cd37e17eeddc0171f30e061bec4c"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "f9d58630ded87965a99b2f3a0ba88f66"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "8280c95e265f7d7875d4795e0a93a5ce"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "4cf236d92a7d77aee77c6667cd662236"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "2a2e2aef72ce79c3b90578310d7b62b8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "7cc3cbec44a3d30fe5c70fd03839f058"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "2c8bb384785ba259c04da3fc50dfb4a5"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "6bb96378688660baeeee28b5a2b9c9e1"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "cc43d188b7fceb0f04e13ffc6966547f"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "e2cc240452f6bec70d6e840f90f6875e"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "8205a9eb1ffe102edbf502288a1a4760"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "86e7715df85e24de9165c169aadab15b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "e3f5e5e82bc7781ec0e8e0db94fe14bd"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "0fbe5c470f387f5f36b9a3e58764c50c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "2a60d544136653c57d294e0fda1e0cd5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "4f4f20ba46e93f2d295226ba4628c971"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "85f23f869500a4566bd7eab722c10085"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "337bb3e8068b52ecb5f8b70ffd15222e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "0365af128825d22da63e7fecf8292649"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "7a6697d086f14118592624d761089999"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "dbeb3210bb86f08ef405ff8e43b653c2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "6983119b7128e385845749de04d24f42"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "b0a0781c07bf65ce22f3a40c2e4d4cdc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "19885b6c0c0be8749dfdb6ec796ff7bb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "d86f3b3832e8b6c386045f7aa7755f4a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "2095a8fb54b59dc5db6017e46b79d2d6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "7dc950cb7f6a610a8b80ca9a368f1fe6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "b529f0aba13885391542a65816989432"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "d10a0db2cf6fa2213f5dff9a20323597"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "c3b9c68a244d526c707abd935b42029e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "2818209eeb17d98a82a121381a48de70"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "f9d57d47328316c3a696070fc3f807d2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "bded902146b9a6a177fe17aca632635b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "1ea9cf5129a534b71f08ae47029e8dbd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "e764082050b05d54c2e0dd2a66c0a679"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "4b94b61fd34ed9aaece65e00f19e31e2"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "e52d301069f959e2ed611382e8d99686"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "1ce1c0383bb440a5fa41adf057dbad52"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "3a68a049a3815c2b26245f3a9de45a7f"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "8f9d4aa4fc2e3b9472856251209f856a"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "6e7064a967686a07586ddf3ccb85ff05"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "2601ee1ee55d18d62daccb8174590702"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "8af5d29522a54460d69788a7dfebc38d"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "ddcb8e51710ec997f248ff8a44393714"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "0644d5ed152157312f797fbbe629ef30"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "6aa192c64fc640a77d16f8644d622ed7"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "51a67d3b369461e58abba448c48b47e7"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "a0e494adfd97fba9ea1dee643ecb3a19"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "0f7dd04ccedaf9054ed30c3cca3f57cf"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "6365448130c5983de594d56dc1860194"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "1ee2d4639a5cb7b2a2e0ea2bab1a6bdf"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "3231b3ceb25455ce8c7a10ab8096162b"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "897cd6ac68d9d41ff558b4fcb72f4312"
  },
  {
    "url": "categories/database/index.html",
    "revision": "41af4906c71726dccdd671a463f4d590"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "51844e0f786dc6ac10d801fd18fc68f7"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "cce602d242f2f5768fca24af137e74e1"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "8ddd357073611fdc0571ccb1346884cb"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "29bb9d85bf213f81036d437336559720"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "bbfcd5f055f26f0f41f0132e31053021"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "cad1d66de4be3c2f32cf74a8e1460514"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "a35beb06b07ad5599cd17c46838af348"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "ade1e2ed5618ba468e0ec984ccd7452c"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "0fcd543f122e82a1c3c0ad485cc4d1df"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "e96c0df127b2eec7353985397be58e3e"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "54be6c9a243387b7eae8426edfb5b02b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "388d3fae9b8d3a73224890a52e5d56f9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "7829698fa25ab2784182521d939ae799"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "c158ea0c7d202e75956d861daebf78e5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "6ae68a3739af501dc0c2b9e8024740ed"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "025664ec6a44232533f79217c0a0cf60"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "a4af3ba56da3ab11263f480005e5364d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "0576577fda5b6592c7ded6487d772258"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "8aec80d844df727dc5f0c9558b1c9596"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "6953bfe960be32ea719865b8f9773557"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "9e1a6c24d3f3e2df235dbc6e0ecec1a5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "a2023db2211c613667dc8f2ea58ff6e4"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "0f29bc7917a86108a0b70dcef9670f55"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "e261899f5127e304eb41812ca2568321"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "bf7daf0d7df4cab26618873820faf33f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "eeded36b9757d33b423632ed1bf2002f"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "a75a8f1a66c53c8689eed30da7837b44"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "66096e034ba538277d1f92ede46130db"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "73d99988a1aeb085a30a58d66b91eaf2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "83ce1402103eb254eb293cb53228db17"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "e0147d7bc45549957617f9f737890bb6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "72379831147f5ff8dd1d1ca9b2259fa1"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "1e6a7f83129e524420e1977d7573cf42"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "22801b2a7d9eeb7e4c81ba3d4d8421f8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "93c4f9208b6564ea772d459eb0e8e3ea"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "86ed7be6893d721358c5e8fdd6992598"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "3cb6d98fab7b2ce106ccf0a6df23bfcd"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "ed62573bf04a3c61ab3776d4b35982f5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "a6e9bcf15cfe81f34ae3e9651d7bee95"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "ce30ba4613ca253f61b64b705a0067d0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "31ab2b59841765b70a41f701ff94f149"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "ba335664b989831a26175b8601966abd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "9d726ec9581845148b0db724ef2b23c8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "2803c002565a313cd3e92ebf0e758faf"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "aa2f697663f8ae97b173e12a0186658e"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "6cc575681b4b66677d620ab75b189108"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "fb1d9b6b33f6cde73e4dd59b32fc65e9"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "23ebcdd7ef243c49cdbc02ceea333955"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "399906d8fc695ef99c10db538abe58d3"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "6d9e42d6b9dba03322dbe77e0030bcb0"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "02cb19ffccd031076b62fe87f8e1a114"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "668da58f2e762147589edca49b553f15"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "53190001fa4f1fc143626cbad56568f9"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "35657ec08522dea094e17793a17961e6"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "885031b8c846bf07bea6ebeca585f401"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "72c9b7bb8f0043006945db117725d2e6"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "77842a8625c4e2f4ba0c2d1e6cf2b479"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "9d867df3a20345c8883e796e9f12c036"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "a0433a37e87b6ec7832d012b611ce4d3"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "8550a02e053b4329b250672af50663de"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "adcd621a704609db77ee6347ffbaa32f"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "6f7b7bf96284aef524ccc4dd779c5ec3"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "8e599abf035c619bf80feab96fa91570"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "d49100a6fc4d8144c444027e9db886d5"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "d19ea30e35cc8eb69bfa2a951180bb01"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "cc607e884ccca0d0386e9d05b692b21b"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "29e9cc4a48315e8b37309fe4049abefb"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "8b73d46504ab1f65af5ff4a41f28d83f"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "eef8f1df3d045e3e2b661b59c6bc6855"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "e52778c0fbee090ec4c490a853238849"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "0af510435cf9e92fd06259d1d6e467e3"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "af5e9b13b466c4eb3f2f1f2f90f68c87"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "732fa7120ee8fc7cfeef1bab452ac9d7"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "4a05941c999b3993a433dfe5b0beb66f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "783124aac076c424fc4779825661fb17"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "247b640a72f155cd3dba965f2c54da00"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "b3a59dbffc42b30dedea3add563140a0"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "b5ea5498e0cfe7005a757624ba4abc3c"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "17a507d6869db95c3555d9f7e581e235"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "6b38bfc9d28746c090568fd0b37fb066"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "9fa1199b9073947205fa2f40fc407616"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "38eeafd30232717025b1d3b8ff6ca96f"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "6d6cd7e140a684a6646200d7a87a8c4c"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "581d87ad08f8674bd1734bbb191e6f96"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e35c4af66c56f00e769fbd90df692364"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "c9051237edcf1eb6c3e4e221362c02d2"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "632fd560ac4e5d23d449fb7fba9eecaa"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "d11dc90a509a44eb757c3cc10add6702"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "d7e368831d7bc1586d448bd4fd3c7083"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "54fa10aae6458f01f1d9c5ee8ee7f575"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "de171ff73430c0b4e927259d49f9dfc4"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "71a4b07ce62941e7c84e428e644b6d33"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "8dee3e2e82492410af5b697358e90c23"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "a11a66ab641459fb474e30b1bd691083"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "62a44bf24ec70d2d81e3d840d5865584"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "dd352e4e42d441ae65843c8c37e8561b"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "5418c8f60dfdc8b24bd425438bcafadf"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "24b82238aadb40e73c893c49421b8301"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "d622bcba593055696765e8c90eb56ceb"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "f9091abcb8adb382dfd213d5948066e5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "25d5d939091409ffb5f05965918711db"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "c8704f1810ccf1383f2975ed4293ec99"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "0a1198c0e2b17524e86f67bbae9c4583"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "a817061a151f3ec317b945eceb35e00e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "06f3c30fc6b1d21f23f4eedf22b02a33"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "65eb6b30c6e4e822d01ab05fe70f77b0"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "ef34742113b9628f5a4d1533cb21e781"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "5f0855cd36217eabbff76ec901aff04d"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "51c2d72f470424f40c8eb5ad99644267"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "91e6e4e6a78df9281bc72742a1b5ec0b"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "9c4b9cd31302cd2408f0169573b96983"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "2903b241b609f5c64802066708b6616b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "86116a5b4dded54f8c93bbcafd2f32e7"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e19779242663966a95f255e87ee85b20"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "e9c35a3d3d80558e9d054b4a7c46a63e"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "d0bc42702b51b597138d45a817074211"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "d74c1345dc95e658d0f409441525b08f"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "fa7882852397f9c53d1ec26e8f242b39"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "d9431503a8d8a508972ca34118c72596"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "749da35190368c6f63c5c69f639e466b"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "ce9a89b946cca04b929eb24116cb76ec"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "f07227b9106748407a48b4ccff7f929b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "f619be4fbf56c4e01781cf96723e392e"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "53a1d18cdedbaa9fcd19cf83dd75277a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "1a252e722a266904afdeb56e6876d34f"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "99304835620c4c41f7177045d6605b5e"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "050ca636eaf399ad755465cf81a20a47"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2be6be13ac7df4e3965897c4ee0e97a3"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "895bd757fd83a3826a3797cb58734abd"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "fc66e6d7ae3ed9d3c771af21c91fedbf"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "43a471c8ec7b9a2935b1820104ce8166"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "184e63f89f656c71acaffbaf658cd4ad"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "83174b18580449c5358c322af9175de0"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "de407c302608b1174c4c5340ecf089b5"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "cdce7754a3eab9304de00d3a7cb58b11"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "82b656033bf73f8d14310e13c981b81d"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "ae6d97914b1252c3166f025556d6ed70"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "bcbaac3df5423225ce574e09a2cb091c"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "20c7d6bf22841caec60bc9d0b882b33d"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Container.html",
    "revision": "e4e90eaa90f4185bb11367bce6e399d5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "3b22ed4aa0c523a65ae5d9ba5065c72a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "513fb5ec7b7cbf34b7190c49980a74cd"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "548118cf86a0c1e4c412e42effbcf0b3"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "2a8766095f1baf136388e8928b354636"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "0a9d39b5cb4e7ff69560680d0e5b5e90"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "ddc163744eb61dee9025983a8ca76512"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "702a6993138145e2e0d0276b721f75a4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "27599dfc027d7aadd53a90761783e141"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "8271044a0790c271e51490f18615b5c0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "1d4176e1f10b8e67771dec30955fe112"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "ef9a39c027a4ca2f05cd047df09c9955"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "de7389d28638b30d4791834553ec9b41"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "484436407e77220f6c5210ca22a8b495"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "1ec19d86f3b4aef46b51cdc404d7516c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "7cadb35daf0eb8a5f095f302776e3fdf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "5fb3121e97a98ea1cd4238dc2258c50f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "f646860680561f47edad4fbfd4c8ac8c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "4a07ebebce2ca88c76a063c58508945c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "a8b96a78a2311d298c4591faf71fdd03"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "4c9c7d4400250388857e33ce43053afd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "b007e5f919a48e2770a4f4b66615f73c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "b7d76c18b538971930e7f37604b8e67a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "65caf1535f91c8b425a51ba81b489a92"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "2f03a0a736253aa840638d9b3e976b33"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "e11dd5449fa2e412728cb755254c6a8a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "81d36f82d87075eff053d70c738b1fcd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "32928f98ad8275d8a6fb60d642d0cfe9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "ceeb420d86077d9553bbf3cf45247efb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "672fdaf01670e29ccb7135fdfc6b2f7c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "18089b5a4e0f0ebb2e4be0ec569e3a50"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "866f83c2b2a8a8b4e9455e67ef8f59eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "9d3081feb364b1013c468442208e525d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "29696ec927d33dc7fd5d3a19c875e70b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "e72219de0f7cad27106fff827ca2c25e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "bab5c8b065c64d19ad8e10f381c8b851"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "8a1ce1567df79bff0b64bcf9762116da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "b5b5ce12d12d011355edefc228b6e453"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "83bcb4f0260ca97fba5867c5d14d09a8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "b332c250806bb193dc272a5c76406638"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "83803ba374051ac527b36477d83e5c98"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "0629205d0e6f34516b1d5bcb31023160"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "91399ab503960f2afadf948115cc4973"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "7609346f301be4ac41b8b28ebae41689"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "2ecfbea1315f478a46ad4109dd14424d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "93be9339591fe63db52761052e7dd4b3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "651087e11a4dac670ed8ccd87f2d8cd8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "c4f86d0dad90d978003ff255d95cdc9c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "d7060e4f8a4b9d3173f7587894122f19"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "ba4f5ce5a58bd4a6d9565ebfeeebbd9b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "a7e91ae31dc7c83ddcb7f43fbec90546"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "b7bdbd0a3b55dc6e01e8d2153bbc1abf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "318dfb1c8d3bdc682605bb628278e5e8"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "7660642c0adc42da784a419c8ac556af"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "8a490d1b2897c7dc917648ba60ba166b"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "be35416a1597450cad9baab89b5bd851"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "558a121c356396bde67042cae93c7e1e"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "0ec89f424cd9ae84f8bec40849858d9b"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "7298353acd554bb8a620ebdc60b328bf"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "950ca48c04fe729f39a9661f9a096313"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "f3a0df8c3a358a80e7c5c7b1fc86736c"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "9c2acc84a07d28be62b6448b3a05db77"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "ca5aed6811a700342180fb69cf0d972c"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "a50f5f5c9ffcc328f074c968c1e3cf3a"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "24b28c49c9b0e39fddc4e027f0d8192f"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "e8779885379f7c1fa435cf44d5556842"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "381aca5419dd3342b84f8bbef39c01e1"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "25523e47dd4aba5c14d07f8f36149426"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "8186213e3610d528fb45f01af6174044"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "753cfcbc5818f7e9c45b506c43eee4ea"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "82ea2568f7349b508affdfb73f2d9ee6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "bfaed630d7375910a29f43b7460e17d3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "1fca2f347bcdc48b69f4285bd5dd2733"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "997921c2df151d6429ba23cc77281942"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "afbcc20aa21afda593b74f13ed10c48c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "e83777cf0a644bd3f39a7cda71aa717d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "7f9fb719629d7d09622c45b110230c58"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "2ea171b9fc28aea1b4f8038e279f3fa4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "5bac570fd66a9e393a29d14239cd8652"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "88e572ae00b215a36a7621c2111ebd9a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "9cf02e698bc27cf5f4330381873399a9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "ac5dd6989f1cce91b32b17a6c60745f6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "d780aa874f8c40cb7e4ad5ce0a4fe901"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "180431e8a91d5008c855b7cb07d8a8e2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "df82c1a659e7b8b63c9bed692ef637cb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "295baf601c9afc91c9351f0e62906cd1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "94388d1fde7aca0aece804b8f7437909"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "282751e3cf973148ca399d9c6a5847a2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "9e25ba1952b176315420a66abf13b0e0"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "9aadf7e3b2000599c1f3a8409488ead9"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "bf041e30002c7305767f6ff4fcb938b7"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "1151dae25f5643010dda55485ff22620"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "50b3b47fbf6fb237e154540f793fcb61"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "cce6968346b21576120da66fb2b5b49d"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "9e5b2196fab3fd3b8b381ec2be87f484"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "9bc9b223e30ac48cb240e5b0c8a37409"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "090549988de54f3a0e85c01f4ed8160c"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "801e99365b86697a3e63f6f1c93c2b56"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "a121ccbb68fe971bf60b937d184d36a8"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "3398c21f96a0274cf3b8bf575e446495"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "e4d1a17874220ebd47e6ea6cca363c77"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "e741148908c3ae852011db7dd9bd4558"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "515928f34447fd03f2415afec81aa973"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "17570c26597a85a7dd9009fdca68aed4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "1ff8867faeebcbd5f32ddda43930f734"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "6cefc126b3293aee6c6f5e30ef97cb07"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "39b6bf1887b3b6b7cde2a352b62d792a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "5b6769ddfc87c3249132ec659a61cd4b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "e48a25a53a59bcf6d4cf80d4df31a18d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "316a88a22fba16d9a7c54261b569bf42"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "e0dc4bca2d691a434211484fb8cd81b6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "63de2f9e2ccf04dafaada5c26fe8eef2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "c9ff1aaa9c945315281076d500e0eb48"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "a3b73cee9fa2907a458ebfe100a6d864"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "2d405d8fb3060f8d5d5c6913787c622d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "3ad6f7ef11300748793df40cc8d4cfd0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "c91243818c06adb99c6140d45a0fed89"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "229a9b1d53fcf2b44e7e9bd8aeb6aafd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "676201329d02aa8bd3bd1cdc5b505b22"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "bebf704266d2f7418d37cd972a02b10c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "8ae7f92b7970cd9356ebebfc85ee2477"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "d962625b363a4c6e731653f9df729a11"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "00df99a5d93c7801b6afeb8358acba87"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "19b57825aa33a42a9f816a1db3729a0c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "d69d02720639903f31447b810ffd2d14"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "26fd80f1779084c0fa7f00ba52253649"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "b786840c89d22517bf701b2b55ddb2c6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "06b9364c053798e1ffd06938bc7480cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "8d7d455c884d7d3d4ab08cb6d76564aa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "b638f61211c914e9b22aa79a3b9f88cb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "5c002e9ea6b580ec00f598e664d45034"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "2c5be0366d74e48e22308ff402813587"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "b0b0b60b59f9f2e70aec616ee984e9ff"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "6e2509edd6614327599853eee256ade8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "529dc05a6cadacf072b220c1fb23fd8a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "24cfafbd0e81383aa6085faf95e0594b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "38f3ea58317882e6651dbb4a31ac044a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "c1bfc33fcd0e0f86216a09884b1a8f35"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "8c082ef6b5d6aad0076eb1a0b3f82f40"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "4d8e9e591a7ff7bc54ff37fe2991b3fa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "ddd3942a6634ee52f3145e05c507d50a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "ae43baf3565acc0ec89f44e6bc9e24b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "b23360295e36e7e1affbdff01a20ca45"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "3c1806bcb54e48be3ff73f1c5700d86d"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "f9043b366d5b7964adf18b60dc23a653"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "c2154716446369f984e251a124f7c0c0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "5c5f030bdab92e14323b6526919dc168"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "c813bfa61059799f9f4dfda5c36d2735"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "bd1e4197354bfd7bf9d865c752b8e594"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "020f0e6dc63b95d50e900a868b97a651"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "653ed3ce721d59709ecc8181367f2919"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "8ba6e46eda469ef2c420609ac0560118"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "e66fcccf978952d957499130c4c7e83b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "8638af9ae4bef1c426e43c34422b887d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "599215c77e075b95ee96cad6ad648aa0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "04e14728812a2ef496c5b8fd8cdc9bef"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "e1bd7002cb23ebdd2c1bdb7552d54714"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "c4640c462ccbe941a073fd7b071004c8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "f7b7a7cba05581d5dd1cde7bdb973410"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "e61355760dcd2ba25f81edd277775083"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "d9a02534604e9aabdc683dd015e8eb5e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "e807f51143458a4640afdb06462997e5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "0d55365da281baf7b4d2c5a584240363"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "8a66d78358a7b2b4034e815ba41bd221"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "cc952b92898302defe1419603f6299e6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "2922b0abf4a26e5276a5d19259490a93"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "68110c106818d4f571b1ba91768ea132"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "3934fec9404454697855313ad503a1ff"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "f0f772c45cd49cb8d5c45edbe337fbd0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "511cb3152e33f45902be01cad5b0a8d4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "dcb47f1ce844e42b60f43588a312e1cc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "7a676b52262abbb65c1e57b643848ea0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "0fe3dcb80feee80eb95c3a0650ed98ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "7396a112aff74cd06f067cdec8190986"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "213f2f16dae2e6d27b13798914bb5449"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "cc17929b6b5f8910259525d7aa66a2d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "096f961268c3840d6e8224af513f23fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "f85ccefa17b46c7f81d98395c91ff666"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "ceb4d67afe68bb9d1d466df2d6f9d310"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "524978f4ca6bc8bf26a1d1f4cfa52c79"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "a21b6a36eca27c83abed8550e5688e8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "3a261d2bc0be74917fd9f9b96a4c9186"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "7faf26b49124f47967a82da20fea2207"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "08b6d1821704c0b9f589c580de1e8afb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "1bb182b90adfe15798d7823fd4c22de8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "3369a2e466c6a01c30be3f90c5e4719b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "e910d01e1d52517299e23690cf7d66a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "1361966127cca86f4eddf4e5a5cd00bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "66172711bcc0529cc839c9945bf6e6f9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "750551377045fbe607f503a1780376c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "4c40ef3aae9ca6964be70ee21e35a78b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "38241782c531575dac04e0cb566bf6c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "b6fd2fe1c4681741e01e5f7b270c971e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "926f02cc7217b65552ee8377de69dee8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "096bf35efdd01df239825c1f94fd493c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "0d0baba70c9d808fe53f785416ca4b35"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "711fb67a95b4c9e71b588b9550997b3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "576e772dc4d60999d2f38b25980d7d23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "173881251f7a57ece084dfa86f4973c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "468107819e593787fd7f4d150c2f2bd9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "ef46dca7e6ec6757cf13046979a58d64"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "ba241106afc7b1f01a8ff1a8ef7ae5cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e5537a04869d978140dfcf24a5b20188"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "8e2984d99634d0e44028a57d45ef74c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "81df7cd83c2d40e0857a58ec43d2a7c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "cbc13987c96421095efa28a55079888f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "f31bf38c39c2967d2c567d71e8887285"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "2528363d51c8ad5180350374df860988"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "3f98fff791990f48b747d90a900ec979"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "82418288bec26a1f6caa813dc678b93d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "f8da31945ae4d5c17f75aeaf6536a6d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "e234cc189be88fa2c1ab7442231a76d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "e64c467b683a08bd1636467a541d57c0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "45ea5bd3030fdec47da9e2dced860529"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "bc24db9fefef167475f3f2bb8d6db1fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "12ae89b89d9c99a51fcd6b64038577e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "f5a1ca6ea4ddcb3e95d887ca839b9c5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "75274f0160fa9c094842a23800f55945"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "dc09ebe1d5c0643a48bf5e4c64d0260d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "7dea2bf596157da587abde51803403c7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "c8e90762854cc175f76287e7ca9e6186"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "150db686aeb2205323a3d8dfe9fd2dbc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "d5681c9bbb600389a33e3ba3e7094a9f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "ecd54170b670486f829d92d35e383753"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "fef3f6ce248eb64971ea36422172536b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "023849f93702deea3bef7bc0d5086a1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "da9ea4dabdf2da018a35ad97b53f5d5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "a136f6c6378e5a2dbf1ffe24c9f507d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "11871cbd387212c95d5ea7ebc71116d3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "39f6abbed9a46051a9e7a567e31c81fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "b541a811b9f87dd7dcde6d04ee743160"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "233e1328126e3011d0194288f055153d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "31c94eea40e51735af0a5824b5b31f24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "ce1d53e95a80de98e6fbe991a51e7a31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "a17288e7c12e1fa1f154cd22d7612c0c"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "ba25e99fa59f138c1c31ab198b5ecfef"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "c9fd26251d79000b8b948a2530492198"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "8be93f42e102312e12e6cd617dbc36da"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "c75f2f197b7e3a39a9a3940923265ebc"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "dca2e44f9de3e56a9071c077408c3c20"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "5737830107b189bfee7ae7dfd4430d61"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "1b74ca6ca299ade961e4fdbb73d0dd96"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "e102af8c4718deef7d973977ae35c444"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "30ca7208d8c9ccbca3dd015334b2c0bb"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "6d247cab1a16f30119daddef5e81083b"
  },
  {
    "url": "categories/index.html",
    "revision": "b0a9a3fe835f5a72ba2e131fd1143db1"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "db0b73c312533151327205b5282f8cca"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "98f9a4f9534e1cad4da7f478a1dac994"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "7d870de6bc6be9611de0814d5eb3307a"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "47231b0ab2ed33f726d4200b68ab5446"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "cc8bd481443fdcc6c6cd93d25b665d7d"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "3a67be1a59d08d754dbe1ed9eca3cbd4"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "de4138f17a811c63cd5c9094f74c9a04"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "f8621c9f99319235e962d4881cab08a9"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "0a6d25778cb73726ee93242c5aa4403f"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "30ea2738b1a5692ee31c2f24d0e3b0f5"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "439ec93ab91a99a14d3b5b62c96a3d05"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "ad26ce557abe5421bb5aa749d9677e76"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "95164523ad14bc1200f3f417b30d2c0a"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "33f8a89593c76598468e43737564e744"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "0a3fe12408e7a6afd41be84ac6b34b63"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "39990073d40f8349e61cb514f0e6c1db"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "8ad7f13b76ec4e7c62487046cdae94c9"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "d0b23fe5ffe0b0776879c85383607b1d"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "684315935c7496a9752a99a9213b3541"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "9a72328aa3318b4487ecd64f8bc4bfc3"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "66445085154fed51fc171c7fe40ea32a"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "532ee518e8f053aa5e8df3193f2b5443"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "f33af926921d38c874d79cb610142392"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "24cdfb6e055d6896409861a9552f7147"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "e0b73646b6f81c4626d57d4792a84dbc"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "9bd40f900809a9cd5640b624a6c63693"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "04b91ad0dd57ea105e89cea29a2e5c25"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "73998fd9b75ca5b8125343031a188526"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "80c2de0d76a7cb06a0f700b4e716deb5"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "91b98169d3b38458256ec52dfa8741b2"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "17542826e0cebcb2c3bd3299800230ad"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "c1a61fc424f37a592d3090b6c72d7cd0"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "bb1b8cd49cace62dcdadadf334aa57d9"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "bf0ea49e9fa8b1cf12898cd60e0650ea"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "da741a2c51a518bdf6a2c0c229a2f4d2"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "a2100d109b9a78ad817a7d3847e1b0b9"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "5f82df50ea6a5952a66c5e445feb64a9"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "4274fa1a17bc169723fe97b0a27c3191"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "01076d6adae5af15cc10da7fd4e1a0a0"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e8290e50fc6b8da601c67de28f89274d"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "f960b9257973fca2a1f7c5281a12d85f"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "120daf104546537053746a462f52b5da"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "c38a8eda2bbfa0926f9a0a15a1680ece"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "079216aa4a72a883a9b000d27bcfb778"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "a98e2d51f10c1f2616aabb2623bd22d0"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "35c893f982e4b3e111739aa7c44d0151"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "c6b266f7355f8fc8946eb34d64309ff0"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "3d437d4c9f99a465b39d4768aababd9f"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "205c020f9d1c2e2fc37696ca1ab34659"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "b37ec28690ddb09ebbf3c66abe332b16"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "1cdb5080bd53cad6f995fab71ee97d79"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "41661c479a782eec8559ceb6743a4dde"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "44c4b816d3d4f12a070f5713ae5084e0"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "b9f6a1c3773af5d4408c775583e17d49"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "45e3bf21217ed317676a1cb1a83952a2"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "5e11b1f519453f76e2d7c1e5236f3d1a"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "721f27ac011b2a23b79e9a309c44db67"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "21398da2d7c7457129a5101e72f82d7d"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "33e5532e64e92116efb30ce9a9b05482"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "5ef9bafba5ccb21ce8c5c722ab037900"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "669891bd4296fd44fd3cfb39afb6636e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "812d51e5821e0d57ceeea39a981a6e90"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "ce60df09902d2e3c7acbe032c72941d3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "856d47074f057bd70fad705b7bc7d8d2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "f7904037f267af97b610aace064d0b17"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "13486fd7eb748aed4e6bb1fda7926a8f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "e4620300e5ac42640987ac4ce5348e4c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "a897c1e98bafe96e5911eeab571f1c48"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "419b47d1d95419a1e1b2b74cd75066b6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "803af2a4956e17d19cc05a68cc97d5fc"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "14a93dd6db024927892c001f88b4cf60"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "9882441c11cabb2c7f2f7fe8004e28a9"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "6c0909d5f0fd03746acae57fd1add451"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "730573d21d918a82fa9d7944002d510e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "0d623158a791186a3ce48a2ddd0c7181"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "9177d71b6a72e7bcebee82aa075e026f"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "ded641529e681f06f37df22cba05d27f"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "a3c9547ea7308ff4e3218eec84314298"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "fbb78d58968745a3baf687b05e8c28cf"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "a762c53e10c2d28a1f1771fd994c0fe3"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "6d7fa98d628fed8670676afd23396575"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "02e0704b8efcf81247796adaa25762f9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "8425acf1e8fbac6ef015db1ac24df1f1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "d65ad35e8997cd9ec84d37afd9a6b8c0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "e60256b259e09c9f67044c701366361f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "cc795c6cc5bcdd1c04cc1c01b65ccdce"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "af7177577291a4c53eca4e1b35bdd440"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "2561b1f24f86f2b1ce788997d0bc12f3"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "acd4a2c328a759385893d91793c60ce7"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "c57624abcf30a55955fc51c21412b529"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "6945372b9aab7f14595a01d0626fca62"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "864e89eb3f0dc85790135ddcd3d57ef1"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "0cb08e41a621fe446eeaf4d5eeb61001"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "56ed5ad5d9638c98587df10994f85603"
  },
  {
    "url": "categories/java/index.html",
    "revision": "eb765696de479abaa155ee894ac77913"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "34866d7fda1597a8e0a69d4bfdb52482"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "e2d32d70b6740ebc1bc46b779fc09f8d"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "bcf61d5e01022c650f9b741fe6fc80c4"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "55cce1ba8e5cc087ff03a4e44c2b29ff"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "10adfea86c1766e6f030fb829e45a45d"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "ecfab5e332a5c675480b5ec8d283d8dd"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "bea4b8850d57939a52e30f3c7f365116"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "a0377505d115347342c7b9dba8b2b9de"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "c3db45149ee2abcc326fb81be72fba7e"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "104988d7bc793e8a9598ddb1583c65d1"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "4925371d45995f073e629d9068df1614"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "2ea7db20fbcf1d7105c45b4360a74181"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "0d26d33877693ddb93b0fa472f16497a"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "66fee8dd9d68b4d2f4d7c6a27395e8d7"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "c3cf794b9f86be2b348b5e0c32c973af"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "888a0594405aab5d2da6f8ab2a14654e"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "edfc3f8c4cc949e270eb0cdf70e47212"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "75ebbb34783461bfaf4715db672ed517"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "06d0e8c33b4657443ab430b5e7026ad1"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "c44689170098f71f7c66f235a5205465"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "b917e520c5746019675c5002505ea9a5"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "bf22623129e6f22956b6be5c8827c2f1"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "d296db1539850c8512ed18b247b758c2"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "88cfe51a8409ebbc11e82f6b96bdb3bb"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "75fb71274507ea4dbfeb712faec577d9"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "f853ad40a1dbe0905817d8585f70679e"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "a87071c055631de7f5a67a441936426d"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "5d019c3c17d247565fd97b850b2fc94a"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "7394beaf2f0c3abb19d4398cd2a74a22"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "84f0e266352566a386b4bf0c0f9fc15e"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "830a1e8d448e0671a755a65674ae0421"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "64955984cf29eef2d74bd457367db7a2"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "2a1b667e534a236d22cceabd4402f766"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "aa772baa61579ca0dc46de42a1912b66"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "734a2869f56c6de8be15fad999ad2cec"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "484267a5e263f3228238b181a93ca4b1"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "094c489367950a6c10b1bfb432945adb"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "2fe06ad91bde25ec417fa1cec638ddcf"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "020c66fa7fc7ba1de23fc92ba2656bf8"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "fff8d0bd3793b02f96330033fa8cc4fc"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "3600be3ade1170ff04319d91f2cd8ae7"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "27e7d53d5f0af2735718c09afc3b18a1"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0f32454bfb2b31f77e54e1db8abb40c7"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "6cf9530c6ee0b399a58a42cae0283d29"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "d0a7097ca3049edebe699377897fb28b"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "46a2ee02c0dcbd1c510182c1f26aeacf"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "d49fe6dd605b1a16dce47c8734888be1"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "d0462e0d5e11e40fe84d00be266b72a8"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "9dfd8f8fdb0e82db1b098738dc74cdba"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "0f184d1ebc0c26acaefaa8f4e92213cd"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "950e01d32fe7c19c21b4f1693e564ab1"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "49faddb6c71624bd11990295ef783dae"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c0a019c53925e56711e30f03b5829718"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e70f9c53650ddce41a1e18b93c8c398b"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "6e4444c93aa053ec6202ab89926e5ff0"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "69ef1af145202b8ec0b461ce194c6240"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "b33876946e2010b94943d2b57ee639ab"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "78bb0d526259357dfa03956d5832c670"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "6014de923329094586162df03cb8ded7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "8403a81c36ef419437ee80237a750283"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "0e7915e505f0db0047df345cc3f1fd15"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "21dabd8993614a842a2b0e1c34aac855"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "7dc6378f9856464dcc3dc32426945ce3"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "5af9261e37723cb21b30e8ecfe3c7953"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "9e9f65c9dbf19516b5f3666ce694d108"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "0d665f504c2d56d2d589324165000ac8"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "bd54bdd3ed6316c8125a085e578574e3"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "56c6a6ed2dca283867cf48d58271b964"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "3b094b7d05cc94891d26fe43030ae526"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "fa1122507681c72e350bb2be806cf9de"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "d9915697ae02897eadedea03b102d5dc"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "a1201004218c42bfe1fc470fc7887973"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "47f282a14015eadc07e8669ef543d8e6"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "ba26771a1b2673968af44a99b4de4865"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "d016582905715505c19eaa610395e3f9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "2da48b8dced6aafce07fccc8d6a02eef"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "e95b52810759ab3d30168e7231f7b053"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "517f2600f12ea3106bdd60cb6c8a5306"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "8f294086e958f339706768b738875799"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "1c3190c288f7819556ff549a1544773d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "f298adae1ef9d8e4bed5fa4db3cce709"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "33fad7daa88499b6121706fd5ca5de87"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "c492498a00ed78b1a03ed8bfa60d8dee"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "5ee36b7d25122a4cac5ad13fa778016a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "19f9e1b02903793b2cfbf5b532ab1eb8"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "6f5ff55200226dc4471cd9762725f60e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "3d9399235eb25facc48e56e89ef1f9d6"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "6844af3d59655efce1bfce5583d13f22"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "1a2cf10637741fd28873a493681bc358"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "ded694f5bbaf53a850530139895d9dab"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "8456593aafd5198c437fe184a44da534"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "9949366f8e6cd7b3ac7668809a48f701"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "6aeda7436ca1cd2e8993e44fbb3e6c93"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "a87eeedf4a4becd64221a2902435ba44"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "2f85bd1154b8696aef172e951cdf066c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "f4760651016ce792a335d39d9a4c8db4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "fe437508b503db39083160db276be103"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "c0996b7a1c4caa8859a6efe9a0ae8635"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "d309976bc85738bc6945c2f8b36aaa8f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "ae360cdc4c66a234b0e09af8dc63cc7b"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f70a5273f838bde8410b3bbfa64cdf0f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "bb870afcea0efb09b9fcc47fc8c7488e"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "015dd5aeea675000b0f2aee07475d175"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "63f9d1452210cce37fc76b18bb3ad2de"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "d6713a8b78fad5fbc393e9be2eaa7103"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "fb381310642933e1db45c8d7328525be"
  },
  {
    "url": "categories/os/index.html",
    "revision": "a1025339f686a4fcea7b0999f023113e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "7cec9da1ab59ef9436137408a0b24692"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "5ca2faffb7bccef6aad901a47763d647"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "ad7e66e28174c418dad9cb2b42310cdd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "8fd2c0a218300dccef2e1ce35b935c65"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "b602055788ff546598e00e14895d7dd5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "f0117d87f50b95025db82599cf006618"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "a50712b7339b53b45ddc832d6eafc12b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "b613bc6413b1fb916cda87d4029e4bb4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "526f6d1cddcfc8f5c6839cc15f20e5d0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "b8e2b7fe11c4d0df45306b9ed991ea81"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "6e8db4f6f89c226f7052ed660a6be843"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "95e0624be19a97bb18bc505795c2413b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "2e76ba7410e44323cf34df68a362f46b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "5f29ff2f9f4fba896811640f21a94ad7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "374b718ccc437b9db5af2dbc0a9150a4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "a9d2eab4ad40d18c63c142d542b1e94c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "e630f7f662bf2d0a6c672ec4163d31c4"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "a8b87698c50cb65e2ccd437045c43b99"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "7167b7f3a16a28055fa8ea126da8337d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "e38fc6d73fe417b8008b149dd379c0a7"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "1fc47d30e5670dccb1b493a3b1e1be86"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "3042f3e23cff559237e7f880408cee62"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "f6e23cf92cda78031817786e64029f62"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "fd5137d43c0335e2f21748583c00bb3c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "98e3643333ed58e53ef9fb4e5d2bb1db"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "7a1bd5f1176fb0ef6ec45ef7bb32f78d"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "2e44cbe93b5f53d345bbef5e121e4ed9"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "753ba4da4b0ef9975999254890368a06"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "19b6a2a39e6967212368bc29682fa7b3"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "7da73e3096d8fc0104d0a06b1c597df4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "728229a4b7b410ef359de9ae0c774bda"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "f3b258ce12a08441dd0c0479cf36d520"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "f37c4c8509c9d1820186c1571007a69f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "21d81ca9ffab6b5eb965d32c1dbc2816"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "c89afe0cd7cb9ac9e4deddee55e8255c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "2cccda4859bf85b11e1a602e84236dbf"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "a3eaa58c02f2815bbb1e28f4b2cefd04"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "152ebcb8beef2977fa89c58ea9cb400a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "8c6de334e0351d96aa2b90c05b97e67b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "23b8787bfe82e03714e709133507acb8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "2510cc8d37e476c5e27597d9e715e46f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "5cb1518da0d9bd53c18a5a07157ccecb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "4fccadfa0a77588d3521f47510530407"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "b339ccf2134ecbb3d9cc6714f4aa95c4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "683e16f561092bdf316f2deb71799a36"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "5f50022b3cdbceaf5232f349e87c17c8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "6ce2d5dee8a6939066aa7160eebe35b0"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "b60e9ae250c9275bc164444f4554aba9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "7d7d67eb9e345304fc3685ae2554ecf1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "37bd9d06f8923297fbda44573e203989"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "e830f075ea9f1480bd8e04c531fa95ad"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "0ebdf8aabca460f3bb56c8188049c1c5"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "5a3e90c00c96313d0d0dfd79293883e7"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "0c5857f897a92dcb810d63c6356c698b"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "2c280cfb9c1559b236313e4c8391b6cd"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "5b20c21694d2340f90859953755f68dc"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "1b64b6ae3992ee3f640a997a8ce9cdb0"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "4e4e513275b459420e7e4ed3f5e361fb"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "5cad8cd603dcd157260b256f33740ca3"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "7fa8688de65d9fda732b36b525172934"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "04c37f54082492a43cc0c17c3a4bf8de"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "8740738b9ef00f531fbffb625e4873a8"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "af6d7c01074cb23c14fe6f4e190006d2"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "79aa50170a073d7a65ac55696386977b"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "5a1550afb844245308a0b38bc62ba345"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "d46f9b0270ca6886ade12e27434f6232"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "f04ffc5f64b829a73081768bb4779805"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "e9daa03d7245a8c121777304707cf0c7"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "d8a6dac1fe343b5e6204e730264fff42"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "ef79d4e4890acc89667b45b37e87014e"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "71b61fba6f36d6f95e7e4630b3004ae3"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "6d4076c2290bc1c453d4a7b9cabb9a9c"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "8aba100d5fed74c82ee23da936ad4a05"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "43b263babce06b5daf9a72b0ea6310f4"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "193bac0e5b769134ce08004fc2df3995"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "07fc81e313de3eefb3304e6cba594837"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "4055e87f8ed677c6561c8dcaa7e277aa"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "e615eeb72004d9fdfcabac66ce673eb7"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "7e0253671d3b3b7aa47f0cfa80319947"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "dd2489715390639b8417f6ebb19a6bc2"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "b6cf21166886025043306142e6ab47f0"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "5a49e7cbc70aeea5bfe9c2ec86d881bb"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "0d6ae095cceea26894257a89becdde9f"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "531bb4e53da1033ff1c7212d737b3ae8"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "ad150fdd79cdd647897a4c9a39604371"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "b96fa02561ee9245de3fe83b7f905954"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "b769f94b16d84b301f62d5db682f6b83"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "77d058773c85389288f8c2991d7b17f3"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "205f99bae259aea8059145681a17c689"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0a60c85721ef1bd78e5f28cafeb1d212"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "f5f517a4e8131791d6d31bf3113fb92b"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "9c5c6c48902feaa38a6687bd9ede3a59"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "09100eaad434bc0589d12cf4cbaf5074"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "4306cdefae0e023a7234ab2bf1b1948c"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "0d72c7599f7e913bb30d27b65ca1a2cf"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "4ba809aacd1c637dd3385aceaf03a27d"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "ff7368a5714de27df25adf26e86f35c2"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "ca396dc083afa3beffa9418fd4ca3382"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "328f3462bccf75e2078f2c08240cd9be"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "59cc3e9566f8c8119b227d6db62b8c16"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "275da8ae249f5a131d6fa04b1bf958b1"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "d7f29b049e66a3fde8c4b2f86fbea8bc"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "dbb3c011bab8f8d1ccbd8bb5cb6f1cf8"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "0c620bb9e1f59df8da3c3afc4e16b744"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "e68bb56c0f210b1e4e6070e0d5d68020"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "8d213f22e1328aa16a0e7a5dc9f1367d"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "32916d1a324d1b159a69764579e4255d"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "d7493581d175c8c4a8006e1feb9417bc"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "8564696417b685862a69d44743bb0d73"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "72aa7b661035113dc80cdff2ceaa5f1e"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "e7f11d60244c828d02a5417802657888"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "97d89db0994235c055f690e32bb885c5"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "badca9b25b50a7a223271535fe261cd9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "b9e1495f681ddd77b352346127de0de4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "4918bd36b77c61453e51b4a65806f984"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "79ff92f8bcb48e281c8f9d3859de37f1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "b13b4f1043a7be8411c2d3d850f2ef70"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "39f7e170084b06fbdbf9b4d99e854d82"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "2c7ee03afb4a5c1dca55ba800e03121f"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "99d7b90593bec7fae6fcaba2b82bf637"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "a23773599bc8d475ae6101cbbaf0816b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "8484eb80c01a114fb0ffec3962aaca0d"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "f670a1f41aa7346a716a5c7a6d75ecb1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "fe433184192558b191b66f554fe2aa29"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "fc3d8839593cddc2dfe0dbf400761ae2"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "5dfc544c8a30a1b5574c281210cb4b9d"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2264feb0e6ace985a5114aa7b23a2a52"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "dc0bb801f3c800f416513c4c220c16d8"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "37fce2434bb4186574ebf80dc78426e1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "fa251f6efc9e41f05bea719fe3b41405"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "66d1a14521b57836b13452bdabaef0f7"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "3646205e7f4df446b9adcd34219c0e05"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "268865d98bf8fccf25c0943eb159037b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "3b2f79047f659fe00ada60eda60185b6"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "bf8471df0bba55640ad90f5931bec3c2"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "763886f2bdca922daf35e1383d851868"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "3ccd027479a9b2dd9f2e1751ad412fdd"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "78ffbeb07c7e2a7c90d0488c8e475acf"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "7e3bd50739b9204119b25f5cd63545b3"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "443b7925026e54d426bba572441a1a20"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "f5f14f3e3d048d78a4249bf0662398af"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "7895217d3f320b31a446fa426c8c0e23"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "cd9552492ff9dc1c25e7f4161f9adf3e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "442a49672d2eb45a699517d5d1767168"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "2e9924d46a9e4e42e3ea037c41130be7"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "50c2c375bffc1331b86d371fcf692944"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "300357d9454f521684f9f05881714aa4"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "64cff8f6d830710d945e0a298809d15a"
  },
  {
    "url": "categories/php/index.html",
    "revision": "6d25e3d5284680790eeb9b2b6d52014e"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "0c47d616d5818d7ba01056b9a7d34e7c"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "ceeeb778a794a39c579d33d6ef31eb14"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "3fee46c61b7be2a65a7e0c392e1c51ff"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "522cfa8b1991226fa0fdf492306306b7"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "06e09e867be8c8d5b945389642ec66ba"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "8df3925e0f35ff89c59e9b37e95ed73b"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "034b667de3f3e958cc80700e5d8cab3a"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "f6308eb7371809a5c6976745953de76b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "2e7ece2dc1cbf106f8c9c3452b594fc4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "ad43c06d40127351166d03250933bf2d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "d869907cd479d3104e10137f94923dff"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "f6cf8e2529077f4e50ff4c0b59af8d26"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "16c4ba917bc1a7d358aa9da55d2f4b01"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a1664ed4b02d660c1b7123fb085337c0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "9e631a19fc36e8482b00583af1fb44de"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "873c1a8f1fd15e7fc69f559476c5317e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "073f405bca78d2d273bed5e8400ec10b"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "c8ce750023d1996483a645c12c0e1e27"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "cdb70c3cb6ad2bb3b52981ed91ec21e4"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "2f5afed9267409df5d8998b59d709d61"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "74914f2658cbd7c35091a81535a984e9"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "3e38fb307115b9d8240f1401773544dd"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "713a9e59f5c5c3a4758b829ef62e07aa"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "739de6de2d8db51aeac209ba29c84f04"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "f652497b8db48789012aa6fb27c02329"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "1ccff8e06b75a5c4edc98767d171940f"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "1b2dafe3cd8fbfb92a7af130e6c5214c"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "2d46b88303c1ddc0d4b694484f8c7f0d"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "8e29a84c881229d68dd72ffc9b1f2ba6"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "ad98780b5450e01e00c00d1ba45a2ce4"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "12ffac65eb534cd13ad899c42c6aaec1"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "385bacbee4e2ef7aaf185828fe9e4455"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "8d6edfe763c2e511cb5b8e27b6586626"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "c2948b56c4c0a3e25c3325772e9bb426"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "b81da9a3915721143ed1268e5b2d462d"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "569d37e078a9b9ea1aed743eba3c1e5e"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "d38707b307c01baaecd4c01cc4f5feb1"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "1be76820069bf93983f4ffe93e8e174a"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "37d81ab957abce783b3b7828a1b5f673"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "8621133be01432b66ea884a2d05452fa"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "fefdb71ffe1d66b0209737249ff82237"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "b30545f556aba42b70b7011658f487ce"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "c7709e5966987c8532aa5d4b529ebd34"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "3aefcc7f1104aa71e9d6a2037740c57a"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "793e546055e86f24852bbfb6a15b038e"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "5416833e33e3fc4e6328d862178835ad"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "b69c202627e04276b98b0cfe0781a335"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "8f6609031b1554e2b22b62b82050bd14"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "04ac20c60f15d361a0ae064f0154c7a9"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "14503d066ebd6e74c3a35a70ff0554f7"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "ce16aa2b20cda2767479ec00fa197517"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "d1de7944acedf158c7776c20c221d14f"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "9a4c4e7ab875492153e9fb98f9712043"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "7348ea83bbc68a573f0f7e0c81065163"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "a7837c51f5aaa3977233f2f729b2dd03"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "a5d78ad2ea8666764fd89eb426fb24b9"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "20e3abffd68d5fbc345cea6d1c0ffc4a"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "4317fb88dec374fd15fa0877f5ff12a5"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "b3937526c2d9718c048a103d714961ff"
  },
  {
    "url": "categories/python/index.html",
    "revision": "e1a38fdc58d823665b2cd52ee17acf91"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "368be95452f0c321626d55c08f35133a"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "8dd8d96b8d5a618f603af2e5b446a7d9"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "22583dd2578713508b01f207d26b7323"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "04b57a3c03335bb82952132280925985"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "3bf468d7244f8fe435396b3c2d1705ac"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "b16047ba10f2dd1613a1fe7d5462eef9"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "7c84a2b6e3a0c5650c6730af497bab7f"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "e3f1b0fff3a50e078b377aee422e738f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "7022b0d7b7e4a11bdfa549acec20d000"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "243deb7cb7ffc9f90e623bc21ecd7667"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "6bf3803b7a25fea459c07745f9cee7d8"
  },
  {
    "url": "categories/system/index.html",
    "revision": "86e879b0b6894daba1b24a9452d83db5"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "742c73018bfa2a152e48daedf6a5fec7"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "f20cdfafc44f4e960514b8d4e54983e7"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "84a27d13db787adbc11dc2cfaac65eeb"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "93ba45732cbe7b47a09237d14f337920"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "b72ffe818e41d8bc552fe626deaff1f7"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "c07a2fe9fec5c86e3eaa019eafe431b2"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "b4df8f76c4dac3879479dd7fccdf803d"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "20dbeb981d3a3cad385162514e07c1e0"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "f9aa40c115dc6f731f5ef9c49b24a69c"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "1129777de461e560dda8f5ae96a5bab8"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "b5d4d53edb75520a7505c82856e70f37"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "91026f626c447295ee033ce04c2049a2"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "8f163d987f3f8f398813175504e1429b"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "f624d7049e51905f1859f6ce0f77a89a"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "d44bc68d3e241d349ad23463180a5864"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "4efd03c886b1917793bab13d9b74613f"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "4ecf90bdf4ad514b26b7054987375cb8"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "892cdb937eeec52da960f4df839b05e8"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "197c97304ef4b38128e13fd9f8673037"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "b8aaa9f863854b683dd425fe74b7311d"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "d01de0ca266086f7b0ab45b7a36f13ca"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "89fcdfd795fc291e6ffc33657ed4954a"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "14180670ab2723b91916e7c7e43b5596"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "03909ab962c5e549bebbebf5f5a6e525"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "e1e2030ac4d2b3cd40f45c59d7ab5747"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "02da0553b8a1a277ac9f9caa3ec99a59"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "ed2db9a94b02c80285271765bf8e379e"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "5e01d1c0a1a84b06474a51f6ebc35ac5"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "197f57296603d59b28d7288c642332d3"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "6f55ae3dd92f228a4c3600e03cd0def7"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "22c79e6d8b745de80077f7544f3dcb06"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "65f8abdb513a0bc6338e158e4c342959"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "f5f6ac3ebfdc11ec463f15230c39c7d5"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "1389a2ea7dd5cfc148b7821374b28fdc"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "a4600cceff47049160d94a5d057e8adb"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "95c58c6cb076374b10a32856a0806e21"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "577f59877277b8eeb12572dc205f9ebf"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "d1ddd56593d6774fea78344372e37542"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "83bad710fb825b806a72b515f872df76"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "5fdebf53acee4bf8b55e6ee18600dfe7"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "aa221d17e0e5fa9cfa3011e902142bf9"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "545c6a00b0071b1f245c55d02f2b91dd"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "6c658956fd65ddd22a6ee721abf76a44"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "395d6304e4dfbd1b83f0c11b2593ac3b"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "25cc124b9a7c2f7ca6511c82dfbe4478"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "eb62d0a364054b2d9d189823b9a9551d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "44f2db5e574fab3588dc72c3e3760630"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "29d07f96a077738eabf33080c76020df"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "40db77f89aba7f865adb3d9e20f09a31"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "e819428b7fac49f2f473de8a01fb1a80"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "e38100cc608d3e2a6ad31a46b0a1aa32"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "3351480de2d7f470aa7d4c2a5277bbaa"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "76a07e4557bea1dce0a815247665581b"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "3feb4b9caeeff0c14785192f80d4eca7"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "dc9d26190b6f0837f8a93bcc61ea7311"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "1a0c458f5ad9120678665ea2468ec461"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "48461752df47f0b2d7587306ab405e52"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "caf65967cbef46184ec7795435d0672f"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "da43582cafed4710e4c93ff7dcc82d92"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "e224e49e5466ccdcbc34f3d8e7508647"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "2f1f13583a7faacc735430ec5331ce17"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "65bd1446182cd7d96f2a45bead327fb5"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f1fa148a8c35f13325b165640df73abe"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "f6c8aed7f0b24f1528e0baf1b2e13bef"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "74805d0a43543a6309084d6ca42d0e7d"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "7e8820115c233d7d5f9d93396e6c5c89"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "7cb4e9f3ffd12d6d1543c7190a593539"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "b30609fa0b66ce51b7bc1f2e6ce9a744"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "3e117f9a675544329f10dbacc41a3212"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "fb50b03770bd053b44b75a8533146107"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "0a09c5db6295f2618275c84fedc2a7dc"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "bd91aaab72a386863e37e09852b3a57e"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "c8b4b01ce09585af37017ab719d066ce"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "e5a2f131daba5af09f0a27b059a974bc"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "6aedb7da751b86171701c01fe10e0f13"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "537d0e437852db8c10bebd7c6dff94d3"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "063eadcb7400575de85e5c2446b241d2"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "85ba00611ca80e8201fdd818f0fb4b1c"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "e6acee3e3f03c3181810c9af57d44721"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "d7d4ae60f2b7268205c2c35d0addecc0"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "4f6cb81df621a692ba4d7407f0dde44c"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "fcafaf6bfe50b1d1dacca6503b740ce4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "993618ead2a4944bf0ce270925930ae0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "582187271fdda3409347ca3750a4503b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "499c2b3f6f771c2ce8013c3294d68299"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "12aef3730259a1cc8583e4c1c2cadef4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "61a5c8ebe1e0f375077e6ae1a13516d0"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "83e9f57ca147361b14c33ef069f2594a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "c7f4a5793a5b1868c1348e850ff923e4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "b64cf7faf2482c64d30bf86d15dd12aa"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "f346bcb9f3c5a0e263ef4241e0f34b8a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "28722ac65e514e8c596eb19175109624"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "8a6d502dc6c7363d3e733c88353aae44"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "34de1b7cd7ffe84cc9aae4c164d2316a"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "294a422a8332f0c9d7c23be080c3111b"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "5aacc9a696909b9e5dd916d3958b3245"
  },
  {
    "url": "favorite/index.html",
    "revision": "47095dc22a67062ceb2c3d69b907ca7e"
  },
  {
    "url": "index.html",
    "revision": "681c3ee9e22c25b8858e1923f5771eed"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "9109cec7c27e4adad637474005d1d3c5"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "71146e29fe6c718f4a4cd689149d1135"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "4897ca1365736988d0ccb048571393b3"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "67421794e6d46c68ddde87c9b3b8c88e"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "61e8815f230787fbced83594cabc46e4"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "c3e916e641a51c6b13c7b2c8f59dc84e"
  },
  {
    "url": "note/index.html",
    "revision": "b10110b1b8765b746f143140a5214589"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "8eac6b82b778301b1273ea20f25a7462"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "9348dc9ab469239e5df3240b1bbd7c41"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "61dc385bb30bb79f8b42855cb76b69e7"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "2968b85a357bba4e93b3959aa2aa7dfe"
  },
  {
    "url": "share/index.html",
    "revision": "f758429c1b432a38dc5e8aed123a40c7"
  },
  {
    "url": "single/about_me.html",
    "revision": "cb3235cd147ca0e4b3ac60eb6650cc9f"
  },
  {
    "url": "single/all_article.html",
    "revision": "df40d9353074813eb556569eeb334433"
  },
  {
    "url": "single/welcome.html",
    "revision": "64efd1bc87d46572fdc206e9bd55e072"
  },
  {
    "url": "test/index.html",
    "revision": "f63828acc21594c87f1507c91f1425ec"
  },
  {
    "url": "test/test.html",
    "revision": "e15fea513284129a638ecac7b946d8a7"
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
