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
    "revision": "a1854d6236ad8a3eefe562c0327b9944"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "32da0eb1d3611fb86146b1acdf1b49ee"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "3392f47843bf59bf6f14738769b32c09"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "69e2362cae8fa6c72bc8dbf85b81bb94"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "a14299459a9f3cf8ecf4b082c73dcde0"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "bc663b07e000130008fa23e8bf2c2603"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "c213c41542bff48da5763e1b48062b93"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "29f1c3f74714dfb6d954043048942a94"
  },
  {
    "url": "articles/index.html",
    "revision": "63e7a3734dc2999db6daf7b1e24fb2fe"
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
    "url": "assets/js/1.97a082b5.js",
    "revision": "dce3829940d657932d35720b2983347c"
  },
  {
    "url": "assets/js/10.e58b5604.js",
    "revision": "cc22d3e7977a25f139365377958a5870"
  },
  {
    "url": "assets/js/11.8f9ef36b.js",
    "revision": "b0a020c28fdcc0bd8d8d780cce5f69cb"
  },
  {
    "url": "assets/js/12.45051771.js",
    "revision": "8b4c1f320d54a2a428ae0f0becd39b5d"
  },
  {
    "url": "assets/js/13.8122303d.js",
    "revision": "f10f892e2b255cdb46aee5b424d1e174"
  },
  {
    "url": "assets/js/14.5a9c4698.js",
    "revision": "4cca94b3bc04ac96d15e2e8fe95c242a"
  },
  {
    "url": "assets/js/15.43a1acc7.js",
    "revision": "f204502c0c031c06e9cc90960822d4bb"
  },
  {
    "url": "assets/js/2.c7d13e96.js",
    "revision": "2050f52292f0e2c7054d5a7aa353e750"
  },
  {
    "url": "assets/js/5.47210194.js",
    "revision": "d3a682733a2e38662fcd237f48c86093"
  },
  {
    "url": "assets/js/6.8615bee3.js",
    "revision": "eb2c2be040481b323ad68fabcb6760c3"
  },
  {
    "url": "assets/js/7.a70b61ab.js",
    "revision": "86bc1c6566e85892e95000563b3e3d16"
  },
  {
    "url": "assets/js/8.054d1528.js",
    "revision": "1b33219f850f3008aa81d9b1062eb203"
  },
  {
    "url": "assets/js/9.68938e8d.js",
    "revision": "b3335b1a04f5bb88770ec5f976ae1702"
  },
  {
    "url": "assets/js/vendors~docsearch.64b6bff2.js",
    "revision": "fe2351a5df8065ece61a412d4825d595"
  },
  {
    "url": "blog/index.html",
    "revision": "c50424afcd2523dfb815b1e134462bb6"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "1ac2c303f18b7d1695aae2e81722663b"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "8992060db53f0fa4d1f08c400e0906a1"
  },
  {
    "url": "books/index.html",
    "revision": "8e0390df63e4a40de08857c06995d3be"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "89e06d522ae1e68d18376dce2f9eba2d"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "03c5f6c69d710291694d9aa985d0342a"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "95c7e675454038313e041af116f5206d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "b7c87ae9ff6fe054632a1c07f742aa1a"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "9fb8a2297413d3f718efbe97d73c6284"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "a8bd53bbe3c5161593e796fe6b1983aa"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "a0a3875d3fd4d8ff81a3dff64dd281ff"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "75a88fa4c63a5485a17dd300605179ef"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "cde5033ed394928842309e953c106990"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "1fe524e337958393ae6d2d3cb7d5892b"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "aab28646e6d437779a54c6ec97f955bb"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "b81726d8d86b5f28c1372af2fcaafa5d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "330bf041b8af3c8bc60411cb5c68f00f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "ad05b077b1d49fc6ec24620c7c996ef4"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "2a2732e2bc41d11840dd5ebc456e989b"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "1b5ee3f867573244015a9d88745c7e61"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "c73e291a778d5aa8e3c91851b360f045"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "6e8e9a88ce0b6fec42c1f62960c0b96b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "94024bced0616d097a43a1e67137bd75"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "579e157c0bec5ce55e0a8ccbff950ca1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "c6c5e9d48d17a9d79954492e21904e38"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "f5214ad446bc728775b26ade635cbf53"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "0d67cd02fd8964f98b607b0d5c392eb6"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "01158db1a4cbfbd76461c585ba76b8d1"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "7647e41804b56c82f3a0d891cbebff99"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "c17db3d962397fb72ad4dc2141427009"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "924025f7b0305c232c49039ce1bf6536"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "ae2f8bd4cea4d91bc852e0326faabc21"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "9b1109287cc29e3f5e81b02d3d5a52e0"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "a98a465d5da23e90e2cefd4fffddb065"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d1e7a4ec9f3d5adbcfceb764dd976900"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "432307ff8d99da495856a729dee757e6"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "7e9acd1b1f1de902861f434c84e0a416"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "ea30d5e654d55806d52d9e5374456876"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "72b49289c1a670190463ac956208e95f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "3a88ea7a8ebeea47395659daaf16e9f0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "36aab2cf4d40d7795e9248e9d80034c9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "91b6b4f1d3fd521ee32fe1f42becc5b9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "2167c632dd759f67c3f3aa6f35578904"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "598a45b37cadff5551166bf067df56d6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "64cfca3794e6eed4aa38378de7565496"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "dfa90eb32a9fadfc623c092757e21f65"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "b136a817103b29731789498ffd220559"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "ac884b910a4da5288c68d9d7a9bdf817"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "1cb74882c24523602048dcba3f8e29f9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "1e78b73de294b7ffa58ca36a19d1b29a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "d1be4944a0ee17ce841ceac9ed1072ba"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "7e68e65ab774efe49d7e58d62f9e95ce"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "07b553a999ee18e24551c0ecf96444c2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "64370e74b1996dcd73573a001f086adb"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "cbfc102fb23811cb344fd3630f1b6fea"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "8edaeae6a216b7183f24cb56c2cd3fc8"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "8ff0abec605ab5735d23b9eb0281e473"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "01157e250f3912ec54f242c0f55bb6d0"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "c0339c63e624d0de3d37992c591e21c5"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "0b7d82a46d5cc2acfa6c6bbd4caab944"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "107747b62da8b5c8f89116c734ca729d"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "363d988e06713c18b6e623283aae7428"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "aee8558c426afca21f0493b8031e841e"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "e637580ff7ec171629f79f296c684ba0"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "105946d3a1d84a9990b979a4722b4fa3"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "2e775c4f07bcdd8aea2c99ee574f91fa"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "810653f1be7e751403380dd7b2b7a72e"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "f6c1e869b05e35995609deea4e36fdfa"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "40093d451ed9a0a510b55c0e449a4a3f"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "635647d5fc9f0a50f630e0db692595df"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "0a0ad3c02619ef912cf0040f337247a9"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "8a9b709b0d85f2fe707527ac9cb067fa"
  },
  {
    "url": "categories/database/index.html",
    "revision": "09dd10df915188251b96e6c07f774601"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "796340dae6056b887a39faf93bd7f744"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "d654a3cf6d06113cff459dcb2ec1cb08"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "3d9a93ae5b77775f7a2556d2ae1ab8fe"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "92f703ecf413315c7361b95fff8c60be"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "4a1eb2456ecc696b6b3e00d883611181"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "4aed8d33dbaa1ed3fb48709ea9b077ed"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "cb5c0be5847f75877e17a10439eb50ee"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "f54d921bf581b5aada9c8c3ef7d75ad5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "1b4a376be47a9db7a7a805fd5ab0fa0f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "3f68ef5a74224ea1ac39035efb057966"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "59803bd2fb3821f55f86f22f8c595d9d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "dbf50c7fa34748968b7bea3c99f22174"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "8a98d08b6f8845b0498ea794b3c1ef20"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "4551270725038065304ef64aa70b4bdd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "32261d6e7f5539171610ec4e2f44daef"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "3c76041ccca4a11e8ecb8df88190080a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "b41268abed1cf58e7d825e97ee2e666f"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "a172ac1be5ef32a8a7b72b728dc10701"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "787f96748f3b7c49361ab9666e4405c8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "e16b4014d1fb677fdcbe526b03e7a2b3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "9e0c4facc3215ae0ee686e06712263bf"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0a9f4e805f1668e42be3d018a80da6de"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "c08e8908cfe26cb6f8808895d419e57a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "d06d722db5b792c328f95def8186cf31"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "0d234d6477e4e6e686a3600cce7b60af"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "ba44c48c4ff3c349ee1f03f54b5a94e3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "406d54a16e25bfe3c70ba82d6b326d3c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "9743b944678db7ca55a58e57841d53f5"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "e4e914df58b2fc9535440debc2cbb101"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "0d111bc27808d7967eda332131f6d41c"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "2809e0cb0fd6ab4e9603e4ab6990ce7a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "7753a37ac604c8132773b0848f721a99"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "f7e6ba55214679c0f5e65da3e810600b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "a1b624b17ba0821658d850bbec3b8657"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "b80739ab73934d19dfb8467ea4cd7c1b"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "4a81534083cd949bc714b0ca41a65a3a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "7b2e96fe91a79658a2943705e8e2e833"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "bc78a3077c531f4c0f4b38a6fbc5e4c5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "71279f6908ecb3ce7e962a89fa224691"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "680aa3d41a179e1d2aa5391138b8ed12"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "64bf3ea522df4b06c1012eb631b4c525"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "cd36563c7b9731493fadc1d53dc583fd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "e41cb13851fce96d000f5cc1ae4e7bed"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "c9233f3b337ff35803c45bbad8419efd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "ce948b2746442ad93513c474c91e5666"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "5d8c4a5ed9526d252361a08e5cffca77"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "ff353eb607e4f7904aac64e26a5f2992"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "81a3a765819f0ebc0c4ffb65bdf62dca"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "3f578f5d83f2e35fc5243bafe59d8df0"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "6bbb9c5381273c44523f2a863ad556d2"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "2893b49782eb238771f1fe9dd8460e44"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "c5d60ea3db2be7550fcee5fee214baa8"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "a470c0d40702c899dad92b28cfc3da98"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "c2ce78bca85faeb9f3eaf655276a04eb"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "2ec0daed0483a2b0b6c73a208b7a2ca8"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "6e0758c6c883eaf0931806197e950b26"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "8d488e5a57a25a5ed8b4566b56993da5"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "e771f2fc5be7ac61f15eb2b3abfde3a4"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "38637ec8ee95e7eb08b33315c0e0fa5e"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "5a014e4cae6611a8663adba5fd536a15"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "91b3993fb3e22ba9498c295693916d20"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "a17c547f7af3bd3a82bda79dff39df3f"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "855452200319db28e879954e1ae1a3eb"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "70ccfeb6d1ecf61ca24e547b35af32f7"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "ae438f4c681c12d4688b3a4eea76f8b2"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "6be6f93e6133e9abfb0d986658e3a8e4"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "22fc5345572e04f539fbdb9c714c2d25"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "6ecce8922e31dc5fe387a5da6aefe971"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "1fd2cc31643469f44f51c46574e003b1"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "4d01b9d947b7e796b4d3c3d98d710a17"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "d07cd8822173ce953a9770adc1e252bc"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "ad7ffc517ec2e3f5cac87e1c77c7eb29"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "432618bcc085c143c8805327a43f61b2"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "8fed433946aace52426e8b68fb36400f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ab7c4b77ee6a418ef49b4f425f27b01b"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "5ad4c7d80140a70584ba77b7a1ac22b9"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "53f029e830feab5a06bbdd4d099a9912"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "beb4923b969cb5ef281526290dee0b35"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "add37207ef548ae73cc21a78bbff4ae9"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "fad180ae6c73ec89d40e2271256e2d79"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "4e0660480116eb34d17d97ca955f101c"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "80112367777a008774c4024b33fd8467"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "fe21d260326e59a581d4fa595e72dfb8"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "1b3322ff9850f99165f3fcabc1055f4a"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "ce4eea65561c0dbdc33a99dd6a5db670"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "fbcfd28182e7d1cd685b688214a8cc75"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "06bec6be106b3b0e20f850dab5c80396"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "82eeb3879e7a77528947b871e7393799"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "ae1bc241cc3b3ef891ca60234b1afc3b"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "b80c9a90c202ec94e8e09d85051446f0"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "4af6b025ed91d1f6623e9136ba53f4a3"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "713eed5474ffecc1fb5b299ece6c767f"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "01d769cc74411741d05ed0b7bc339bb7"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "0fac956affda40095766a1734921adcc"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "a8f4be356ab14705cf4085231e33ae00"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "e580b036c054c04df5296c2247ada786"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "b57b904d410b0cf9021b4968216e72e0"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "cbe479689dbbbebc341e029e6fe499e7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b280716231fd8f23ac315b375da64b9b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "96ca60d31dcb9d325e9822bbfb19fb90"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "13093aef603ba77b35eb16da20e14920"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "72993672310ca2fe29025904999be7a5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "cf59987f7e06fa6c30c67bf7df1e1313"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "c6d7ff891c73f21723163c7133a5b304"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "cac6cffa80ad41a87bc0877629b3a7a5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "feb940a6bf6d20e040e40a8a48ebbd5c"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1b6763c73d8ae4e4e4270b9ffcf4c8a4"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "458af0c44dab1e37a565cb9c84488867"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "63aa8d9bc9e916907671cd3e710d4e16"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "742b76e0b93f9f36b08c3ac0182f2eda"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "42a2ed8622b1c1f63f655bf6f35e7c13"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "9414cd8c5a0a86818ebfa3878d4c33de"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "0381c270dcdd6ec07509574878d486b2"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "35caa2286dc42aceefbe5655a654327f"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "d0501c092d0ee3a9dbf9cad4112cf0f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "bb44694a56897302a74fa976cd81a160"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "a7d25ee53306d899606ded3dda69c779"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "140be58809e3e13e5c82b97cb8396807"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "27225bd45a65467c26a865d1a9f1fa72"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "8b666c7b43dabb5b86adabc70bb1e2ed"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "2641ce8a59a5636f97bd6fdd23f63bed"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "6b516a3bf1a26ed112ccce7cdea32c5b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "91290f677cee83b0b8d5d88d33029f88"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "cb69eda58bc0f56983cb121eda973198"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "db888a7c25a57ba57c7f2f42f77433df"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "91a826808d87160cb05c9fc4935597d0"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "e9a5d3c7ddef77028de3330f2ca97d89"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "c09010d6b62139e7c574f529351032a7"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "deabfcfd0e84f942ac2b99955311cb7a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "5f59ee092eeda59ee0f27c85a25b0c9c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "b5b197914fc0e1a0559f93b1a2ffaed5"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "f7f53ffd0d668cd8cb0cd158252cf132"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "785fe7bd0e8fd759e4885a7949f5ed72"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "3a9090d75b508f744df1929d85531790"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "31a194916764201e76c57dadacf30443"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "cf946cacaedade5d668f230950870e80"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "1057c6c9e24a3a43d1b8ca09557c50ab"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "f96951d54b6c2db03402289177caba95"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "f6065f4aaed570a862fa80ae3b8e61ec"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "a25a82b2652929b2ffc90f8d1b5319f5"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "6903806b1a3bbdd6f15eb2d317fbc55a"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "c2143b5369d5f5737c73f9197b1431c9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "8bd8edd1f1bd1c5b9fa9b3b78a6f97df"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "ef784705b2daac379eae2e6edbd8dfeb"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "85d2349cb5385857f2e545e9723ddf8f"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "588596e8d9ac7b2bc5590e9cfce13093"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "e42116fb53a2ef9362326331e4edf3c7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "7e9311d1602c9ee96b7959cd5a06254b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "a7ccf07450832e223a7dc6d6130f6b75"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "26833774f9dff1b1a94b6b6badb99323"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "55135335dd38d176f2f3cbaee7190aed"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "754dcb5f5e8d7717438481b9907386f9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "73e431d35d36e0ed1ef7a98142de9874"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "6fe7683fa8aa4b3aa16c81b0bc3bb58f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "0fd4c8085fc917e5cc1d8f115d5955e3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "a5170e54503f366862934cc22b67f956"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "a4b559ffa026306f2a72bd4d52654195"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "9c723776e891e57f057b8c161c8ccf03"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "a0a1a8104eb8d90ab2948c90e8c86564"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "2d21008bea262729001d094b5e6eb905"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "f3eceec1f757bc72f38cfc416a202ddc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "1165ff2d2b65036933e28f4a344c0603"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "becdace5c74971342e96dab1ac5665c2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "0205a5b0b125e891be174f3b435a476b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "2c9eb3344dd03d0c75806e5418ddcd8d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "ee9bcea77f666a3469104aae196eb055"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "1aabbda17702525b30a51c457accfe50"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "14d900137c31fcf40eebd94b874f3f52"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "55aed84f2d484a5733b49e724f4310dd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "caf560a9ecb57c31c754dba257ee0d1d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "72cb509d7a591b12a5bab5fad529369e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "9484c137a449a10b5ad7af821c266437"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "6f8ef35577c2a77a7f86f53949154b5a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "5a26e61e0597947c215efa9831575839"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "4895dce927f488d38d5e1dd84bf3313b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "78e28d1ddd260c3575ddccf784bfb555"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "66ec3c66724e90a494bc1df45a393d8d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "c89b88dc0998d6252031b5f94d30b05e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "a8a7cda71c7e249e4913f4964069a508"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "91ccb6bb8d496f1a66c1addf749e260e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "f6a3a9b2c444633aca0dea69ef3e4527"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "bdf571d838f41345ef477244e87b9f92"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "d59d63b6cf7cec2e19604f0cc11a4553"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "4b6bf29011a39e612d753c2ae8ec01f2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "23e0f83b18e294ea8945bae8753f0e22"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "81da89b5b13328fc81cf244126681275"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "3975e0fc77f1af3f2ed8f7566d2aec03"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "c920ad067a00f368a335bb3f2f8ba9f0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "6ea303c4d44b0160778d455cf4047a3f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "649dc3e15962f9b069c592c4cd5d1e94"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "571c523042c27e92e3380fed28074568"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "2d8b6fff580e91c4ac4a0d2d7019de40"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "0aef405260a14bd78270503840708957"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "41a5ce9e01daeafa93503d5950c59fbd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "231c07e29bcf859488d3f86d4e7f493c"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "f731916df93ae10965261ba19cc3fd85"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "99492b3230d4f717d5c262fefe9f22a8"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "9fb6f1e601993b5464ebe9c9134be2f3"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "7faf97fc5e04bfa3557847375516fa7a"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "1a25af3701089a1f3882d77c5c6a748b"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "61af0d3c160c8c9195697b9d1ba61290"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "55d8d0022cfc7250ec68ee33ff275641"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "438afc9beb9cbf59f913d80980e60aad"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "1d68ab49593da2b959ecd1b3cc43d9e7"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "211ab28ef75463037d3f2a23249eaaec"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "fa07863b21717237f5b56e9a4430eba0"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "b968d85b945b30d3210a339c12d9224c"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "838b208dbde800fa83c05ce31f20271e"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "5fd88bee5ea26a023d389ac80cd632aa"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4f5c08dd832c1a487d227f92813688b7"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "b5ab109846e41c1c3dc3e425c0389209"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "de179f6a4ab4415944e6807d0038862a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "afac7f24f36cfcd1cdee0dec0390a05e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "64a6887045a9982a8bd906d2d6341ccd"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "aed5b5bbb29d3f9e8394fe9c9a9be548"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "41f51ab59f709b688575341ec8fb3cb7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "212ff9cdde7dd702be014f95d399b255"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "7f07ffd0ff320368810d68642f340229"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Audio.html",
    "revision": "73607043a423b2e2d4513ab87f9d2273"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Button.html",
    "revision": "4819731384f62c93bb4279ccd857c031"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Camera.html",
    "revision": "ff54f70f1e8acd1d9820a7ba9d763f12"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Gradient.html",
    "revision": "9f6e0f39bb60e654359f20216eab1acb"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Image.html",
    "revision": "978cdaa8bc3c526c5998c3262d8c57cc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/index.html",
    "revision": "c5f79f1735147f0f6b29c073dd2eceb5"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/ProgressBar.html",
    "revision": "56d2b981ac38c0d3d9eeffbafe04fd1d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Svg.html",
    "revision": "73a0cc42944dc18a3b1ec7e373bd726b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Toast.html",
    "revision": "db7953a3e027a79202070fca0f403540"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/Video.html",
    "revision": "df53da69854acd7450488cf39f8768b9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "90ef5684552d039e5c7e47da8ac801ac"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "404f023849f156a2314a553ae8d92ddc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "8bef83fbc3b6390876623fb14aeed2cf"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "37842cd49d0ec522ca7d217062171221"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "90ce57003390562b93ecaceee147a513"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "ff90790fede3ba41ad410bf94aa95145"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "b2eb5fbfb6f32117b443bca738ec60c1"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "3508c9cb02736c9d49de08e9f0e78539"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "a31d56d0258dfb3596d12a1153039ccc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "1b6b6397e25767122a4144041e81dfb0"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "2826cc67eb26405d947296dafd5c3438"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8ff289583ab32248d44c34a3efa7cbad"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "e4618a56f6422135d13edd12a132558c"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "531557e4758da79d2ee8cb08876e92b5"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "c44e650111b69b180c416e993b251ad9"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "f714035304356b58bc72ab84845ba34f"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "460548beeedba28885477ba8a631e607"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "1ee3d1468a67fb6688cc1d4c58d09848"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "8b9b143a1b6ca2b3bcb3ba969c579b99"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "c0bf4b39659c6c0bd6f509dda350ccb6"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "4b4950f905a895261b2d48bdf3f81804"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "eab6ab159b1d2afdf021d6789069bc4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "4853188e4badecd5bca783bfed34bb3f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "ad973090ee01d972592abcfe8ea20da4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "1e8135f4c4b9313d28eb39cd97df3a88"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "4e0e41645c9b62f59f7c5ee245005107"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "e94826c82b03ba67adab360e2522e759"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "8b23aa0ca68ec4faf376f353aa787f7e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "070b7e6dc2a98a180bb7a115d2731a43"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "3184d8ad7e0d2fc583d29ed958cc276c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "d8fb5573f20f6efd347d611d7e69e179"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "d93a01b626427c7d71514934062f810e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "bdf45f8beb520d956120f58dee17865b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "6caf623539ad168a4b950a99494b735a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "f3e58aea96d42fa731e54433a3160134"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "a1f88fc0ddeecd1e79e7c0424c4d2efa"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "d321071c9cfa784ea750c33fd97053db"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "a3d75ef3c6d81b62a02096e971510b56"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "feef75127a11545cdfeaf45bdf751a48"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "1831b0ab68897e7c84c13001bf811138"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "d7df7db1522fd88642642f432ce632a3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "ff9147467d34be2055bd6955d7d14a3c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "1eecc4567557ee9d6b5cbda98b11bb84"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "260a699059cc0d2c0bd675c8e7520874"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "c24660436a2b48a4cde6c574b7055f5d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "a0303ad045e88ce43feb6bb1d6769a32"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "6137371aa9ff1a51587d2eccb7ecf79f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "f7b4910499a18d59340a4e290dd2f88c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "cab1e5226d18b95d853ac47c555afe3c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "b8df7620c2b8e6587f6f31e90dfb882d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "62fbe035610207c7033187ff2e6d5b9d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "f53d7b658df286380eda6046eb18a129"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "b1161ad35bcb311e31f03343bef32b28"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "610d4b2c0babded19aa5049e18188875"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "e8554a446a72aaf3d075788c5a339a44"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "609332dc8ca5113dba2e01e86da052d9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "0055770b473eac6fdb920d8d366c5977"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a01d01a149e330aadaef1a6e6f012293"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "af682f15609a810214f7a4ddc1117e5b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "de77fc58e1627cd24425b0e9e85c706b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "26344ba2b163b997462dfcc91811546e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "6875fa0a0b2b933acda2868ee2479228"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "93c54fdcdfab346f623372d755b75f01"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "f69534fe36b5d086c15482eb72325052"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "7c156295a8885795a687b65784449892"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "817ad8bf7037d37e6580087f30b72571"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "ac91a9745b5be31d53aa2267b712dd11"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "1c31b1138571c3359b6b683e0b9feca6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "7ce06bc093966095b849d5cb3d463da8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "a44cbaf6513c277decb8ad4245eb57d9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "554f68860508ba10132b76a976d96c62"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3e8f0a39b459134745423d22b484b8a0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "b64cf4a5bf887264a1002a78ecd3a315"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "ee5dcf103bc835dc601c45ba237b7763"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "ffdbbad7ba10c52153c6d2e7a0db4728"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "f31dfc2070d8542acf58472093537832"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "87a52ba0a00003bf56d6f96244bd2d26"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "b65b409ee6c60cc09d10f63d0e2c5aef"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "9e930affa0091e7f222e3bc67a158825"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "3d7c4942f280f85584366f216baf76fa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "007a429343951aa7091fad9cb09a1efb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "622ebf46aac7b8adafa977f3f6e530ff"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "a68e3b98c6ec7d81f02e93ba40acf37a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "6d706703e002d26f72a69091bcae6ae3"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "3fe8dadb8b9f29c315461a07070b99c9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "84df5f1f36c5f81983fa59f8d2d3aea5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "97740775941a8093c1f0a4cc778c47b0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "e5daa299e83c5c7e4d3aa990e7448767"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "633dcdc3a5cf679960da27a25ba85ae4"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "76224560fb59a9ad9313d3dc29f75f8e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "f92340140bfbb19663be3f9aa060db04"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "4f94b50817bb050f357352228ef70c50"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "4447b3096c4dcd24b0a4ff5f46afbd0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "9529407341fb4217011da19300042459"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "a44480d613212e8d47c09c4b2ac90a56"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "b7d225611a4d7a03c34b31e65a3785e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "b42fe4ec3d07984eb2b2ba9f44cecd66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "1074472bc4f74034d2c02e906af2eb68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "dbc647b625d10b5640fcb2584d7f8c2c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "ee602380c990daf1ff30534f3d10e146"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "d78b5a426a5aaeed4b27ae6696f56407"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "367dc6b3cf2c4afc1b214dffbd49c1be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "b65a38f7e60a741a45a406885676ff6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "355a3928a7df9e7c0be93b76eb78b50f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "fca3261e8649d5afac4fc4d7652b65e2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "3e3655d524464f60947b8c808be46d8a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "a9ed332fc1cb50e4201adde58c3a5e66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "2f9dfb10cd0ae8e9d4cff73c1c0b5589"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "f89efaa9f7ce35e146ce7769932fe4ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "bb7f84e55ce480c6a5958e13a15cda6b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "b471126d32bc27e734a0627d87de3321"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "dbda9079368dab905c850a05aa4ac8cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "416982620d9324973a40b36e61cc81fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "96b83bce9220f4c6713d6f6d7e7da814"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "14b7d0d1ae555d03e172053f0fc6da22"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "fa0edb558b9627931b8b3d21621b16d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "ec7dc09bb810726195ff9bc9309a2d2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "83988e7abe73cf48ed275759e9d12f93"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "a7b408394797af8a15096684674466de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "8df6e9a24869491c7ee4eb8c3d242cbd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "3a5629cc5ae601db8e372e8c4854ebc1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "091a1f74a08d106842cc472dbe81a2d9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "f2db356bf422e6dedef1f867db31ca8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "e1103c5218707e5ca8e81dc31682b97c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "67136ce83d4c87e6584aab1f29749d0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "7f71569ec002b0e89dc9cebac7e5c8ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "7c3e577ec72968b9adbc0fa4bb78a78c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "2c9077d2020a92c425780c579ce53982"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "94674a2557510553d357392a0683d50f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "9faf9e190cb34bb11092501d4c461707"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "1fe7f660279a4aa1d82f9832b333a9dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "935993d6ae47eea164ff5b8d1b594d09"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "898c7a5eebff082bf5efeadd30ab06d4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "6beef926aca75b6880ce9c7de4a1ce50"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "01201c7ae34b7484debeaa756981640f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "3b082d6408bcf7f9bc71ed3e8c92167f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "ae1dd6565087e2810f7adf16af45ec48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "40fb5e0efd3b0790b8ce200947ba1240"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "caf69c61ec8fe05356792dbfe4e200a4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b94c0cdbeff5c2eb03e0ecd4a3b5cba1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "fb1c3e0d9c0e58cf02ac540aedb85b96"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "fb59d68ce716cb7a224b85d4c4e8b75a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "97fdd9675cd6fcf3d8472008965ae672"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "386c8a34e0d7932046ac6c90050b9234"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "9647b76d2369aebffd2773365bd38d9a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "4d9b4e5f10548522ff74d2837db5f037"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "87b6ac3f645789d036bd95083255209c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "67efafe6c4e69f27c5698acc19b143ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "3905f63fbe146916d05515408412247e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "437f5108df7694fa206e28c4a25f9e1d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "f9a33ddbc02ae9651b0a592ef12fa94d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "5171be66751fdff087460c6aa5ff6003"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "693d4d3cd2ec4b032eae3326209fd4b1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "dec896a8ba8586d41a74076eaa8e7927"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "0e59981334122baaf33bfeffa5626972"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "b8d27cac0b0a9baa49e093cb468c47ba"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "2a37739b247b1d13bc5e120b4fd300b3"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "c073f4bf9263e09399afc5ebf46c2af3"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "7bac8380123da224cc14f8445da1a6b6"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "c474a7a315d4f4bca55aaf3efed610b8"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "b84fe88a6a2f34beb811fac4eac5776a"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "8533b6f87149b96b84ea663b73145289"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "40c7cdcd7a60367c223904961e504af0"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "4d99786509ac87cc97028af3913d7e05"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "cbffb64f3fe7e5a1303bd1e805bb680a"
  },
  {
    "url": "categories/index.html",
    "revision": "b6fb01c26fcc038225f3c1007c510b94"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "f90ee33e662368f4a39b37629365ae1e"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "ba6b0ef0af76bdae1d32911b9bab71d4"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "01c5fa380a6fd37960b56bbd0a860050"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "d7b06b4d6f32bc3e1bff41a0cf179505"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "80678f76798312aa3ed3d162d8ee19ff"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "3a7a95ad53a0cb7895a75163021d5ae2"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "ac7428523e71e1d24cb8254b62a423cb"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "ee7ff4ea082068ffd0182807c2452b1b"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "d5c6bfdc0964c202cc257fe688645007"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "1aec1a1909dbe53c047bcbed6d9cde34"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "419ad2d8038aff0bd8d776afdf3ca578"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "1e406107c0cd3b3ffa7618b6743e435a"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "ea6bfe241c141975f0ea18d48012155f"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "ab56d54ca6fe2a42ae814819380c8275"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "e34087a4014639856405f86aa6de9f19"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "bc09a1ad2c1d9b769ad6ba0ba3667da4"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "34f58db99d4e5c1bb08555fd75dc6ae5"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "9abfbba9c058817a091c5d7780402942"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "4d0c354e3c82b6604ea2b22d1266ce17"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "64f7d5fe6ee12917319e47c41609a982"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "7b54af75beb60840635c84b279e9a2bf"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "53c5520b95a984995b1a9ad85b84d369"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "7ce00abf61f724e35478500e4b879fd1"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "306b17706cb80f816b69e8056a9b25b1"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "e5ca156db0b5341d48bb34aee7b1cdfd"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "34474495922522f96e8c9dc60ae2cf43"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "0c420d04a7e29bd2be70dda5e27a1ce6"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "80e4d513e467858cce2b5c59d5951694"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "440eefb0df36eee61eae1cf39ef1c52d"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "b2efdb1b9aeb586eb05c1fdd4e9e35df"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "2a82cf35f2d437711fefdef81b9e8e09"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "5a00cde6f1f8d6af3b58b847c5ebb684"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "a573340a514f64e9c17c7d3ebf00abf5"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "687ca6a57fb84b56b510bb5074e5beaf"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "338ad361cfb47647acbfd1baa1c1739d"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "886d226d49b83f1b81bd0c85dc644957"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "893c105ce615338078e806e7a2cbc7c7"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "92727339fd0c6afec92b61f48e23bc7c"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "fffd1089ce316ab8e4ec077d8e106d0b"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "d6955a0c1f410b985a5af0f6fb3feb45"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e87a9f70a13dcea7429cde8db3a27fc8"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "55165a7338abe65995b987a81cadd53b"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "38acb15c8f58d30ce588ce12746bb4ae"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "98c208655f4bb577cd6ab8f6bf15b3f6"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "73268d48debcedf1b16c3751dddecb0e"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "2a851af75f386a924c785ab9a1fa2afa"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "e5e7c70496e3930ccf434cffe9063e44"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "9cc7927fd08402de037eb9bab0c1e36b"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "3316d087ea16fef52d375d61510f53a7"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "8771bfc4faed2d2c5fb3237bb3383666"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "42e55c2b0536636547dee2531cad17ce"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "a280a3bad2529ac1fdc47f6804fa22a8"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "3bdad3a29a6d09ff7a836f85e87f1ea1"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "ad8651344304f058532926fc7e827a52"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "7fe21bcc9c09ba9a6c2ddca09df67e9a"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "bc2d469a63b44b0d20d2a1446233a751"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "a040c34e6807ee4a8c52fe81b1583709"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "047e734ee8f5b940f793dbd6444f6d4a"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "b24f20b7d857b13c587c65714b2837ca"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "e9fea22bef8cb99681f59105d9b6945e"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "6fceeaf412cc36dc7ba4c49abe4e7971"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "985259c9e6dccbd7145805aedcad1dc6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "0d62ac6360e201113aebaac7e16ce685"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "de77acc38d6850196a26deb19415b883"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "97f559e1a095e79c157d2dc19c730fd6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "04ea6b5fe65c14fed01d9f3c306174d1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "0c503f4cdee08abdde74580f7a405e1b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "54b3b57734636ed7fe0f03959a869edc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "f5a7590cea2eb406a002ef42b4a789e3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "64b722d26c18bc861ba310fb16002fa1"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "298bccb0937c0ac9a83be18eadcd101b"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "5b367a8387075cb95db9ac88020112e0"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "5f28f5f7b6c4141e90415fe55c8ee52c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "f6fd43b3116a4aa0b400f73f6aa175ef"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "286bf6366179d7ecb4113a8af35ddb78"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "e5eb23a50d34e4770062d7adc62813b2"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "d08fc8b0d0d30e41a03eb674f9a92f14"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "04b02120544721c16f429eceab780673"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "2a2cb2bdb39b76f98a6993563f52842d"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "12cbaa80b2233d5944b870e96103f24d"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "d1ebf58df7bbd4a64ff9f01a2b7e2d95"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "5359251308d4fdb9b17fcaa7bb3fa947"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "78d0eabb6e57c0cd33eac32e51c1abe9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "72c4ba73d398182b91259f8b90c85d93"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "194bf6a6781d673a8ce509b44e3c220d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "21e6db3347db2ec759d393b0c063e575"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "ce13b71f7406a0109e1fc70dd90d4c8d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "88d852dbf273e280055236526fa09d4b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "917c2bf2db05ee21024462df48cd8c1f"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "1e8f81e69fb25a0009746b45f7fcdcb3"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "d09108c61839d4fc68ed662de4c3c22d"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "0e2ef56592120e0c539e3d6835f9f63c"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "17245a1899168e007559b5e1c738ce74"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "954b031bf9c631b59954c3bd9f80f3c1"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "083f75bf6cf158f94e25f745ceef0cb4"
  },
  {
    "url": "categories/java/index.html",
    "revision": "acd048d2b7511f1a5365bcfe95e6a291"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "66374cdf653729a56549816708d239a0"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "b673488fa09e7148a0172dbc7ac6aac6"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "c21650a62f16dd6b3ea0c0b3a64db821"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "71123b4b60d1e985369e03ffd962154d"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "7b44e207c66cd006786d3d10a8e7cc6c"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "707988baf7bec3ad6da27ab5fdada4a0"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "938fda692d220ceadd8657fe10908be7"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "11e7efe1e1ff1678465163c88a4bca4d"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "16984df4551a915efb96c4c72f639113"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "e3ab08b7ad537db65f5eafcc23b9ab5b"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "1f2bab2a85841be3338f197fc8ea78ae"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "665f299f2e1f3c83ac9a9b55cfbea838"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "0bd693807aa8ec72ac667a9535a3d59d"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "0157e948d0eaffddd2dcc108ef7c3a50"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "6f8b3d95fc7a6b4cd1b9c220480e4313"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "2f658d86031bf80579e18b41e9bb15a6"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "27ab874dacb14e623ec1c39f7b0a486a"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "3e3bacc3a9c8a1ce1673de0fcbfb4c54"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "7ec1951f4c8048c54e888ce612c1159c"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "9052e9b7e67d0c1ec9ad71a4708a541f"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "3709271f3c7250645daa4504f5795406"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "6fa8f5167be47fd2dad59e1998667495"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "b74997325cd99954f4b31d46e7aa5b8c"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "e1a0b1a75b7a0695b005f8718b70b9e4"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "f6b8d7dc661f5e5e3a6180f3f44e6f97"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "5187b03d6348b6fbc20d0b9b94e7bd3d"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "ba03f7f9b464a3653810388d33b0bb1d"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "feb6495df20eb7a54f176cb785349d21"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "2b380ab3c69816d60bcbd9570f4b2560"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "5b485b56045895a1b621e31a9991d194"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "490e95eacafebf838664d41f18b204cd"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "9a6608207c8e7fcc32ff2b0e432b30b6"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "b789e688b227dd29c2fc0be714dabd82"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "79e8b7cbd8a1533dd07f05ef16ca97c0"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "665bbcd15dd8cd4c2497fa765eaa6d73"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "0794f2cc9b8546c5dae843c998a86006"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "101ba7dc394d2e5c2f0f8e4845493fa6"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "674666478baf1e7ba61cbbd39c365913"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "65e30b53f97e5b531851e71fc466d518"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "28dc795e927a48c1d9384787c44b0f4f"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "e73647b6ee8fdc9969f7b722016000d6"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "2bf05bf79dff39ab182567cb18e0b784"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "a4761e365e5cb09f64011509fb9021cd"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "221b8cddeea84329f546a9c16d9e6383"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "43be73826f55357f82e98f584b3a6fc7"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "2707df44b907cd303b18ba9f17fcb652"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "de29e91c976f02df279694caa7b8a2e2"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "aeedcc50e3bb672f2072c59008fa07dc"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "52b395e88c7b81edf6a8d5d2b426405f"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "a9dd9fed4f81148cb584842a693e870a"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "8108e72a1b9e087212d5529e81c5d598"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "b94f6e905da8ac38eaa08bfa5c51ac63"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "101a511df97474d914a3504707a2cc29"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "e7657347bd67302d4e7351a02e7a8733"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "3f74bb9c0090bf6761689537d870ab18"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "a3f5a531377d1424e207d04726e55a41"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "a02890a0b9e970eac457de419b15e8e5"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "557c41497a1870903af7f48c20919dc8"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "17006e4822d0a8b11590bcd073bea66f"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "7b23994628c18f66d986449a759c8ba4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "f28e81940c449d38b4b55b0e497ae346"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "40ebdfe86ba1cff6bd9187660b728d76"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "85e37ad8e509b1f0bd0ee6f7ec47e234"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "b9635ab756ef2a418b63c29fcefbbb53"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "a1439a2f7b04e5516a900294cbf2135f"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "66d3be1e46e797328ec5f6e130cd8772"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "b9677cc99381867218e4bd2e95ee7c86"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "80e7ecc58c3ed41916b1a8a23bf7bc33"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "6b7093aee8e26f8f89f53adafceb4439"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "b9cb771997d53302228dc83d76464766"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "3808654c80e87cc1002d879f02b48b40"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "ff84eb8c36a02fc0393463d14e143285"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "281680e6a074d832664fdd63f1f417ad"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "0f3bd11253347acf198d1a4427885581"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "84370002043f28829ee678a9a5766d2b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "ff8a5876333ff5ea14a12bbf4c2f8c7a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "d44f9f9706354954a3670511f0a1936f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "e48379c97352ce9a6bc682d82814955e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "150dc0f3e53f4a6d93f8efd22cd04ebf"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "3eaf143bae2b87890605793c43c50787"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "b0430ebcd411572339dba6f8d9edd7a4"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "e001cf3b4b0443dd3e7182d564f1d864"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "31e4c6a685c3bfe4709c1d0db9914f2f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "9b5c070edeb6bed2fed076cef2af765a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "fa2e18d87ffc306bcad6e890fa4ae23e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "1d1810c00d4d409ca604d6ffea9e9a5e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "c2a0be4811fa11d4b4826788a623722a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "4a7069e9aa32c6b882d0712c8dfb5c24"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "a7a9faee2f3f8a4e8116b97d1ada0eee"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "13d551cf524824a39d39f1d5c4701212"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "dfce45fb2c072dc85edb1ebfb938bcbc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "c75b1dbc4efdd6ce9414152fb6357bd5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "91eb011537a96ea8d82e8c08fce6fb44"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "6db0dcb529a43fe9ab7ace7a4048f1f2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "81f65f3e1481c9ff5d41278fffd84e8d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "a4ded60d393587e0881ccd365d22e05c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "d5a2775ed581b8eace080285c54a34c2"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "1c9efb218aee8c94e4fdac869e82936f"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "b544576d5be23dd674ce75cf689cfc8b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "f5309e8f495a5e61025449011febe7e6"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "a6c1bd3047b92c3d1570d623bffc57fd"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3abe24ae5aaa3553acd08553e4463489"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "f5905b0078b3c07ad2aaf9b69cdbeb3a"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "c0d2910d900341d1529ee782f96a96b9"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "add1c895d407fae1038619217b7a222d"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "c4dbaa76bb9ec915f9ccdadee2c5f087"
  },
  {
    "url": "categories/os/index.html",
    "revision": "d18a412eaf4ddeca4db3cc469d4db2aa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "e9bcd27a4adbe512dca605ee7df3bec2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "fbf08469b11e5e1395397d55a85ccacc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "35544b0433182e39b7c6d23754bfc4e6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "58150f0a5e0fe8764728d72cf9fd19d4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "9943e79f35697ee463f6bb08f6f7fbd5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "0a44670b279ebf4ff04f8a0f408ca249"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "989d942b65e5fa9828dc1b3f2a7bc7f6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "0261273af69a1cbccc8faa2531b447e8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "e27137067a913d60a67e83b93bde0c99"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "b95b1edd6b7b902d1e347251cb91eb94"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "b5da56d47e6d528bdf99f6dc578562d8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "2ef6c9d9c5037b126b6faceed1b4fddf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "049fca4dfd745bd069492dbb4696625e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "9833ad85575935a3e352cbf9d326d373"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "3cfb4ff15f23010d72c278c45f5c69fa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "eb62957446aa3f1a8822d0ecb7bf5700"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "108e537a3d3368fe9134abf8be2c90c6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "298a82b0f98d350018e0165350936c2b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "63b4a6f8690a0b26dafcf86d13bd0672"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "6bf13917707bf19f5d0a824e2712de13"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "45a534dc920f98700bde1ebd9687b0dc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "5c53c434d022a19f719dbbcfe04b5b64"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "4d249486104bec586aad2509bf65e19e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "96efe0e53c013d1f1c3db13f4853cbb5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "8c30cea1448b904f1700ee28211241de"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "9da76681421d78f2ccd84d0fd3381999"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "c304af04c6947dbb1de715f040cf7b19"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "1272e37d1cf1a1e534b7e1ddc6a77c3c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "133e3073d0f7cbbf5824e300f25f5a11"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "a23d66b13d7f1807ba4245a68376c1cf"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "f992f10c7735ed1844501cab6560b21d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "eb1cacc079ff96418ada90db0e6a847a"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "af2198e5ca83aa4b69cc3227c25dd659"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "2219981bd08966926f03a9c5de4ab870"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "7d59ae3266f25712578b0fc08dd76fb1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "a49bde4cc377ed84e1955861a481d906"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "21a7e946536aa8a36bd8a7804e96ddc8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "c75e597bb6d258e60c375274c34f774d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "accf590366724ef81b0390a2fb4f08af"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "ad10e6c78f5ce5e314b839a4cedfa3b1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "98ec33f453fd223558e98a655af2e0f6"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "ddc1286c558b66414c5488326f5b3de8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "e51811fb1c276a012c90ceacbff8bb0d"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "2f3ae499ce39c634c4d1ca924c7165cf"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "63e3ea9168ca3de969e52ae77981e00a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "bfad66b1ac762c5c97c92c7367b522d2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "cd872a34e2b55f88c2a9166ff839bfff"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "9fbc309459740fbc76883d1174b4f164"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "e565fe940a2f51d5ca3954704135141c"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "bb6bc5df79d46ef48e4eabad3c865874"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "5049fd7ad16c306e4d3a0d364ed2f1b1"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "f306a0d4592024730101478070b041e7"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "778d550c8085ab199511bfd14b5891d8"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "2598b1c38859f7eb3eabd24bf05fff8c"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "dc678a29f8bb460a0b0e00acb99327e4"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "bead504c20da629405297cd6d8b82620"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "2a7bda5652d8edc2178053a9999ff8c0"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "dbdfcc779b7f598e1decee3f07414a5b"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "c5d015fd7181e6b16dca7cff9fe80058"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "c96c4f635ca532a47bc32c23c2eee5a2"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "6e604787eec65125ec39cf287287a9d8"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "3c2e48206b5ae8771a7f200b46fade38"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "bb492e9d066c4b5f58a53f58d9853e90"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "e489b2eb6f989dd2c756c921ced5082b"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "27461f24086521d6a6f04fa03ff127bc"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "c21f7859c284f01839ee69c8c5f5c43d"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "7c1c456ea11095400fa4588e096df0ea"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "f7c34cb7c8d47a978c114a0e8534dd92"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "fcecde7413cd01c1193b5952cc6e264e"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "800645a8d7d55f69074da3bc0f2d0525"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "4465dd81836db7cebd22da464a861b59"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "e15855b1b00d21e63b0ad6282b4fce8b"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "ae092a9629d85d4608f78c1b91948019"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "4d6a2f32b6574ebb98132b29e57b5323"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "eeb0bd83d75a05179a092ef155a9a426"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "d2d535a8d5e88589e5e1906e7c0b3461"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "33fbf93712a5f9a7be8ffc07a67773e0"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "486bb84a1f95f1c6701256a84d6de109"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "d500afa256bfe55643062065e311de5e"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "6ceb666374de9a844592dbffee2a292f"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "9615651af2f18fdec4e80d51cc936e6b"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "d944fab5b51fe5c5e51fa05f9e6e60d9"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "05d9c39c48b0f6b82b913c8f1f672720"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "f7d195a5a0688ef0dc9190d948267f7f"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "3617ba3c153d3ac3a79ad2e767b57909"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "0e08fe97aaf75680f79783aa0f6c97d0"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "6a6aad77c0812a8501556f549d9027aa"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "417b73c535e68de6e214d9dce2c79728"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "c7547b02cdaac8fb15fce85ecfb1aad3"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "05edba03fb8b9a2d33f4a55c3ae5747e"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "d81d7993e43c9c277c70f78875bbf3c3"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "aff14d7eb4faaf82610b91408166294a"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "abb67645f4d8a814340b63fff7b6ef39"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "49cedbf27fa17c9174b6bc05cab4b64f"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "2e11c0383f488d9adf70935495e9a8db"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "e2ad8008c6e2da2969de051b12f3ea0d"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "5359b7e445269d80baf8821f0e24f2f6"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "10fe9c89fead4d0233ed5a82e586a7e8"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "e87fb0091cfac1a4b1efcecc41002e17"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "1afc1687a43b473418b269ee88008661"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "dc3ce2ff20fcfdcfc2dd9b16ef10b294"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "fc9893a415ac87371877dd9d1a066c43"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "a0cda4b20cad5c4735adb284dccb96e7"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "9510de873253af42274f1025f9dab0ff"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "81849207b18b2587afc9d08fa2905182"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "2c642920d426e6cba0197a8ec2658a9b"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "d8ba32cf6438f8c60a40bdb53ccbb0e3"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "4eafe9c51d00ffce840726fb803b6ed5"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "34b2d22d53d9c99364422f2fc8edaf95"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "e9d383109bc17134af129eb49be35292"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "6f22dd79727d8cf81dadfcc7f284bc84"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "1a9215c8c8e3d2a3ac963a881ca9cd77"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "29b841565f3580c20cea4719ecb0eb6b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "9b1564478c5678d5146357db214b696d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "da268fff111f1fad9347fb5b49d625d0"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "44d1e348107f716866676cede25e1d18"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "a8f8f8ce8f1bf0bad033702461677ad8"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "45417b325cb5d69aaa0b4e343b1e35cb"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "e6e6e649ea0e87eaf82812fc482d3643"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "8587f0fe1afbe6819bcb4512a0cc573e"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "5e501d0720d2db5f413d75cc50ef24c3"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "8acc666fbe3a7bf6f90ed1694b021824"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "db6bed20d0c83911eefbaad711040951"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "f74d4abdf039bec86230c9340e9a8be8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "ccdefc5ef6cba127f5463f968867e337"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "eabee6ec18f7cafee6da4e697dbb9226"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2511e86fc58a5b019d6e4d05cd01a75c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "ff4cb9b756435fa517c86f05a717184c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "8d5d5b8bcb2d64f216bb373801d34782"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "2cb03581e97a305d20118830245def9a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "bcdd2817db3f2e1bced17902b3bfdf1b"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "843159f3cfa4df95afe483828b62a84f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "d21fe6fa9f769e6bcaf2f1cd85461275"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "cdbae010b9aa6e01d6b08469453f2f3e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "44225c097144e7c5a47b564facb0ba0b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "443256b97910bab08ee711909054b175"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "70ebd7734017f3067b548c8092663b9b"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "161fce8a9724001016cad723a7165e8f"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "f26255f8f116e5cc8bd860002c946d8a"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "84b8704af4a610355671d53e5b718872"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "652ae77da0bdbb4f12ff7f5a4e93fbf1"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "570032507afef1f61048d083d48e314d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "1f559fd983142c9db953abc8edd01884"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "c2caef87d76da175c7c6cdd8f3dadbc1"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "da1a83a09ed3fa8b68abdb5f066c551e"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "70ced36cab6c1778ec6d796e11dae2a4"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "39c6c83ba877a43396a0800077558552"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "c0dd09c00705b3c438f3da9bac2404f5"
  },
  {
    "url": "categories/php/index.html",
    "revision": "5136c7214c0cb61dc185fa967d16748d"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "fc71f135c8cf712229521d21037cdcd5"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "b92c63bf31c2f148bcef99304d46b2b0"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "318537afa694cd70fd18966ed8042065"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "19763a2c73346861e16a9ae801aac6c2"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "d486199a7c21f2fe5742e325de6f5f68"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "0f7c413d7cb47ae0724c1041e9599829"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "66eed1312976e0c862044f65c50f7feb"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "08b14a4940650eef75890b058ac95a5b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "8057078d3be40c19ad14e98829ca544c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "7f74a76a1515e46a68c09bd9d1605b0a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "1a6b939b52f789f7cbfb4e05c329ac47"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "cc0179ccef4aaa5663ffe646d34aa0f1"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "5e2efef4e04b576965f53786db2b78d6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "a63e0109f5707de7afc24058960ed3d4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "17dbb2c90f21e7d10349980b632d8696"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "45ab1462ddc29331a5d03975e4158394"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "6115241ba83d96d8c18064e2d433ba79"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "ccaa124ccd17c645c8eee0715aebf8c8"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "d4b2050178e648f9944a42c0b659674e"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "a4cb2eb480f7a7738b4093b82beb419d"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "859227fcabc87fffe227616bed733bfe"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "0d261f7a33e2d7f05f95a77e66ab9d07"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "5345b26a19e0587a03d395b3ca9394b6"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "bd5d3f40da4e0ac791433daf0eb54554"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "b8ffcced8ef22483ae96cb5c6f30dafe"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "aacbaf2b600f4a4780ff8be5344d08b7"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "894bd023ced56b1a08cf9699c5dc6ee0"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "ac2f7b41eca90482125af3f207f7947c"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "64993a5a3fc4202032deab5a137c025c"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "556cced4ff79811b913c393ac443404a"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "0d2c98fa4d2c4338926518c7c97ddab4"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "8498b0ea4f23031508160fbebd99e7f8"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "3de239f353292d4b2ec6b3718b80795d"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "5f6f735be65cad447edb7ec05f7584a9"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "c8560f20904a6620a28926624ba05db1"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "ab58da807c66d957b9d2ec523657e4a8"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "e35b1ddae3ab8c92a72c53f282fbca01"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "cda25edd61c1f81d673c0a551a8a4ce1"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "f1ca7baf324f766a8662bae7ff016b83"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "463f2cc19ea40b24ff844085474c575b"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "c75b8e9e3253f0cdcb5f301f120a9dde"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "fb7b7b555e45e6d00a045aa681d67878"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "1b33fd6b0f6fd000254f45b06aab5447"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "c5b44681174e8dd335bfc0db05f1130f"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "960d42c51098a0ac688b41ff7b34e3c8"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "45a0029f6cfd39e87dcb323a3b56c8e2"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "74126f7923c8e65c71bdca75c23ea69e"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "7df6ad113a9ec4976e7dc75f543373a2"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "58574aa3adb7a5121975905380515088"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "a7c8758ac8598a4bce68f1001e1e2c89"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "ab2361ea2b6b042eae90e625a826c8e5"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "2ba4c1bcb8a99d682f2f14e514ced15f"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "4c4c8ad749ff4b076813606c693d0e98"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "3e114b72156a911ac61c791f57e03a6c"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "c569018c6cd950796d50d7612cfb7c53"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "6879c514d41d7e99e536be0bde485d09"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "2e52aeb5a6f81f4bcbcb5d1f6e0d6590"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "fb6ccbde5e4a78f186622701a03688e1"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "298f577266e15be87e1b562033a23601"
  },
  {
    "url": "categories/python/index.html",
    "revision": "5bc0de75f393293b1c3d8c3eb981b9a9"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "336428ed051b28e43164a55b7ae10811"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "30c3cc8df1bcbcde2ddfee6068b2e10b"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "0467858a44d7ab2f29fcc4649e897ef6"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "16b7407940061b342d4e230fba3294a2"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "0ceabde53a8a6a97027d550f7b28fdc0"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "31775e830355e197c32c6f60e3641bb8"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "c44c8d473846ad49b036c244d7afb5ad"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "53f8152dffd292b21bab99031ebba491"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "d8ff5f7f2e9767107002b77e1f150e32"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "adabb4367e4d7beda56dd5a17aa522f2"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "5b29dc31c58dbcac9a9358bb8760cf55"
  },
  {
    "url": "categories/system/index.html",
    "revision": "b8d0f25c0ec4bb1f2bea02e63ec6b43a"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "04853083220eb8bd63aa922ddf47e79c"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "a8a1b7e789fd2d195465123af16fce95"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "179ef75a71ffff1e561f4855f676a613"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "6cee6b7a0dccc7033741da9cf47bf64c"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "3b722e6d1cffc0769582271be90b31a5"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "f12d32b369e9f8e34d04d8ac78d04570"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "e1312bb0c27888ecd17cb49c6ef408b6"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "6cebaa06d641477f8a2d58ac7b2c15fc"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "2b4f05fbef2d628b0d6e5c989f8b4ee9"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "7bbfb5d2abfbb5ae49e0519ad65bb53d"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "212264b9fec6b7897019a0efc591ee49"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "9519df5ba492d6bd8c02bca3cdda374a"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "673a2f2ef4fedde411946d47b1904957"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "fed192016bef904a3bedbac1d90073f9"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "9ded672d156d9ebde9b1c3ed167d6810"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "65c6a49b1791659b4a72747037c4b167"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "4ef74c3bd3173521d75e88fec26b867c"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "be675668009305e18de3a3582154528c"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "c8f83cfe7db22f830488a63e76416e29"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "59efbfdcdd83b0bda75c73c66f42561e"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "97d67ef4dcb6480f7c58dcbc3022956a"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "e0cb54e6dcd267cd5bd3da82a169f6f8"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "908f74202c764dc4fb0a18d99637c436"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "6b0edb26a580339ac643debbcfb28e03"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "ef9c175fa2081dfbd4722490ed423967"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "49528b5e38e738de88501cc125acdbdb"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "2f106008247e23f2f77cef13f483a23a"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "fd67eca7ac1dfcd423dd1af105e71bbd"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "9e14474465ea2e8ce659949a09dca3ab"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "f66c5d888f6f510db927ac7fafd71812"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "44d3cd895668399fc307a398b7b14186"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "9ca7c0d701d291dfe3677c8c8aeff0d6"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "29bbb2cca6531a245a3ab52d89e96b52"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "8ebdf1a575f646b013f8c0fc7ab2970f"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "54d2b52f9275d81ec54f5298e1488bfe"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "e7f58d741a26fb3dd4617a6aec124ad1"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "9dc45dd62b1e81020264433d36e70bb6"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "c15c2b92857c46bcab1f24aef72af1be"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "6a30c7dbf0a692a056f9f9b14ff009a2"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "5741dae35e6c57fb34e2551144fbe740"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "2a58e3ff34d97eff86413a34cc0dd086"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "f396accadf022c5cd24c41cec7539a46"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f420ff314b88c7a11afead136113e5a2"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "d0c953e424a5031c3fbb215016804c5d"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "ac3d1bad09cc9f7125e04493a28f9364"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "aa5d72c328e0b6f4402df4cf367cb90a"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "609b5480b5f4363b52af64c6bcbea816"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "0c6896ca53ac4bf32089e53d246fd9ce"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Config.html",
    "revision": "46a4fb8c8f5239fa0795cb0beeee0578"
  },
  {
    "url": "categories/tips/_pages/jetbrains/idea/Keymap.html",
    "revision": "d59fa42eadf22311caa82a922f08daac"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "42020108282e7443087cd63adc5a6c12"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Config.html",
    "revision": "66e501431acefceb2e606434a1570347"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Database.html",
    "revision": "ef505bd588a66763d26282b84f59d205"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Plugin.html",
    "revision": "c81a6e5a1ea71e7427ef642a50cac978"
  },
  {
    "url": "categories/tips/_pages/jetbrains/phpstrom/Usage.html",
    "revision": "bda5c19cae947e14c5794bd1aa8330c4"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Shortcuts.html",
    "revision": "352047d3f5a3d73ae8262a8447a90fe0"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Shortcuts.html",
    "revision": "399a6cca73bb6754c5d2b8ed57264693"
  },
  {
    "url": "categories/tips/_pages/jetbrains/webstrom/Usage.html",
    "revision": "cb68721c9e334d983510dae8726bfbc8"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "b450b47c53ea315140bced6c16f06680"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "1acf5255d3eee238cfe3fef1bdd6c0e2"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "f8ec7e784444c0e910354b56730c199b"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "bee7f5fee5f9ba58c8bebe36570f9d76"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "b8128e19afa46be51a8a0e9865606bdd"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "ceeec162ffe4933043aa6b190f7ae996"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "7d2b8a9c66bf5d2285f0fb57f414bfc2"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "06092cbb19b755902052c7b9bbd81ea1"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "d6548b96a54606fc0abe0d07085138d8"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "440733adcb9d6338abea95790f16dcf8"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "e9972b44385cbd405665450b2e68bee2"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "4ed8522f86446cc201ef3d82cc2845f4"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "833c01d932a50baedc7a385a9b434941"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "4a824ba3fe4ef621a50949f7277a0a11"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "e5a4bd0d5ed340078e9b635331398b88"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "2f5d33fb0c7a30ac62c496e1a38aa190"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "554f59cd2fcaa3f7cd9952601527f19f"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "d1a21f1bfe511545a088e8715584784b"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "d1736568cbeefa9934330480196dd9cf"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "11acacdef245b8160ab9881123ac147f"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "1815710fb80b3d5765775ed255f52a0c"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "9fcc9ade64d148df403c3d452b80603c"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "942d2b6f757b5463b77da080a0a6d585"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "c3f6921b5209db4907b3b2881d49385f"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "bc41d3a8569e0147e742b213d26761c2"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "dfb691a308583ea698d4c71a018e289e"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "52e3d180b0a422727251e9532af8bcf8"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "b2d788ce23050d30b1d0ece94634c1f1"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "3f296e1770deac8b686304006f241945"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "1a15d7a610defb2e87297b6899254a8a"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "b29e60a34c02e269f7bbadbd9bd7c658"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "9f69f290209fbbb59643fe98dd1be232"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "2e42317cadd3f44fdd29334d4ae03537"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "ca47b8285997322369a17e53f55b3cda"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "ea786872fda69cafc14629b6c6a5a491"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "9dd88546e194526457d81a87d981e12a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "119d9652c0e2b02d614697d2ec00d27c"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "ee55a8e93f065b2294c496978f3a86b5"
  },
  {
    "url": "favorite/index.html",
    "revision": "239a7c59c5eb4fa693dde19c0290f958"
  },
  {
    "url": "index.html",
    "revision": "633064a5365bed756b1b8d39dd80ece1"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "2102603ad896b6ff546e9f55a2ea5d8f"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "55bd71937adae78673920b33ff778750"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "440deeb48308574a402971f12d985503"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "ecc05590bd91f7cb04c8c7b7ba51e5b4"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "2f87842b7690f2a40a0cc236ee3e9e17"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "a9bbee097b9d0e7b2252e990058ece3f"
  },
  {
    "url": "note/index.html",
    "revision": "5ccb868a2ee8e1b26f727788a97d80e5"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "3bbd962b655706e73394c5d5214d2572"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "1475547ccaa817b05978524c9f99f5a9"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "719b1b247a8df651c5bc8016003c8fd5"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "3e7243067e212ef558bde77514389156"
  },
  {
    "url": "share/index.html",
    "revision": "14b174a177cbb9396e39083d3c99460f"
  },
  {
    "url": "single/about_me.html",
    "revision": "d3c32f75719275434cd8f92687761169"
  },
  {
    "url": "single/all_article.html",
    "revision": "32c375cc75713234ce9a54a195194011"
  },
  {
    "url": "single/welcome.html",
    "revision": "b2fa2eff944c97c45c6ad64bbc2b23ba"
  },
  {
    "url": "test/index.html",
    "revision": "bb376e0210e123623f1dfa0e1e40c729"
  },
  {
    "url": "test/test.html",
    "revision": "3eb6ed072af83afc8e07262be71c8de0"
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
