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
    "revision": "deed8fbf408da3eafd9c5756df288604"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "9f413f551983a1a091635107febde04f"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "e156ec8e55f0e9d62d7cc4805978769c"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "e99cd88020ee57c9aa18d6ac6bf79517"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "fbe76871fa215372f78b540a362736d5"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "aaa5763caf15ab8069537a90f5f25cd2"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "7d577a4068a848a1af96104def65d052"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "fdec8ad892ef3c384c9e544a526c737c"
  },
  {
    "url": "articles/index.html",
    "revision": "7158e4d0beb5ae0906610e30adaaa5d6"
  },
  {
    "url": "assets/css/0.styles.b5359a37.css",
    "revision": "24d3750aa69042818ed90959de4c992b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3530781f.js",
    "revision": "102972f516c4d38e7128488eccf298de"
  },
  {
    "url": "assets/js/10.11dcbe7b.js",
    "revision": "5c0648b5b7e7f40f3dfaf966b89e2834"
  },
  {
    "url": "assets/js/11.e1ed45e0.js",
    "revision": "d9c064afe5a32ab350dbc963a79f0b69"
  },
  {
    "url": "assets/js/12.511b711b.js",
    "revision": "352f1f1d12aefbf356ded0c920e6de24"
  },
  {
    "url": "assets/js/13.776b02ff.js",
    "revision": "3db204985d6b2bc5a05608429a0b90e3"
  },
  {
    "url": "assets/js/14.9bfac5f2.js",
    "revision": "fabe48fc75db067d2fbea30e2f120ddc"
  },
  {
    "url": "assets/js/15.70a29f75.js",
    "revision": "aa473d0e0d7cb9b621aacc7033b1557b"
  },
  {
    "url": "assets/js/16.866ebf81.js",
    "revision": "4ac08b3e3caad0a3fe2b38009420b22a"
  },
  {
    "url": "assets/js/2.78c40e8d.js",
    "revision": "bb29228ca81fc8458359a5b435aeb4dc"
  },
  {
    "url": "assets/js/5.9e615a5d.js",
    "revision": "1c7a7f9066040c5b94fbde1ec17c336c"
  },
  {
    "url": "assets/js/6.6cfd8194.js",
    "revision": "20438969bc504f382001f7ea7c2cc592"
  },
  {
    "url": "assets/js/7.4d7e86f5.js",
    "revision": "f630f9cfdbf7aee783dc666106ff45f9"
  },
  {
    "url": "assets/js/8.af207216.js",
    "revision": "b76700060a7e556461ec14cf02df3559"
  },
  {
    "url": "assets/js/9.9ceb6f45.js",
    "revision": "57e0f86f7799ebecb31f950221f2d2fd"
  },
  {
    "url": "assets/js/vendors~docsearch.28d51d8e.js",
    "revision": "80a28fa993fc2e64a560467ca740504c"
  },
  {
    "url": "blog/index.html",
    "revision": "7a91c11417fbee60f9a201693316aca4"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "7f2a45c6e12857b2ff476d815fc09a94"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "b5f9fe3f3b8790c93afe74432d5c8679"
  },
  {
    "url": "books/index.html",
    "revision": "3ac262b028a63b67b9895cba6ab222b1"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "be075225d562cf09e65b9d6e3aa24039"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "48b70fc676167137744440406fe6e71f"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "5a0f753e6c9566ee7c6c96253746f35d"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "2c63fda1068c3df0081f7be238278d61"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "506289a898e69da8eb902735af151361"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "df278929253b85cfd194dd58537b140d"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "d2de059ba86ac5605199905c74099582"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "3602d15d7f98791b432ad991b05b3534"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "fd63da077ab2e4d37b4b61d178a314d0"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "2bea362197e16acaa3a1ac3ba1f30484"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "dc66c82f70c96b252f4eb97b27bf17d6"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "fdd0e7f6f625fcde10d740902516cec7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "769a551aef6397bd09596d8ac3759524"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "5402f385f5ed31e059023339d741f733"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "ec1ecdff0aabb346f6737d28fe47fe56"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "a6ed2b47b59a5201272933668e86eff3"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "22a6e5d687fa9b83ad8d7535c6b79e0a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "7e8d208e5118afa81129846c10da8a04"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "1d2b01105933677a51cfe15bd69ea82c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "acb14ef663f13e9a900ec49ade4adc5b"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "734a0102b690135301ce89f2761f26ca"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "92209ee59ea36b1218d0fabfeb945cf1"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "b006f22ae823c4ec25599d307efe686a"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "6f9dc53e0d9db0c5a3c35d11310ce740"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "18e3aeb6b9b1e7a14a2906a594f331b3"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "fce384f760b6b81c6a53b457cb22a3ef"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "e9468d9284ccfa6300115ac1bae3519d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "3ed67239c29f9127a2dd768a227eccc2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "c8501f392cf4782801f4b92119334826"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "9950244f436e6b1886f79ace661122e1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d19135a606cf59631b0e5980d2dd6d0c"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "39c106f65800411b45c6fbcf6ec37b05"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "9fbdcf319ac68d89decb3741935736c0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "646fbfc2e09bb8ae670940251c60b5fe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "9b006786b6d23fc42e55166935bff7c8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "35f7102b9c622637add61d89dcbe8d02"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "f9b7b45f9c1fa5288e31399e35ddf36d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "afb0f96de2635eb9ff30143369fd87f5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "3b160da3cae0198b886dc1785a96321f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "12fc798346c16f82aa62496992e7c231"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "ca9d54b71acbb907272d7c263c1d5855"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "a841df7d0afd6544de24ea167b118525"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "28164e61ec4307d78bf544eef963d1fe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "b5493937cc28bef534a71079c1c0d60b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "b35179c4ca3a66f887b4b3b58f2e0224"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "b71eb3758002d5828816e06d2a637589"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "b19d0fa16067baa894cfe38ad5faab08"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "a978b27ab3e8a06641660aabfc8c22b1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "4ab53e1bc8816ae187babe223943f4d4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "2dea7b9c157c5bf3c1f3bb43c2fe116c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "6950f17b42bded321e4605e9efd7a6fc"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "b431b53726b1a5d187f5438d7610f17d"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "f60b9fdfc0c011e081c74466cef1e6c5"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "1d2f85618ca9dd43080ea869dffeb82d"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "76af58b07df7f0c81e1e88f79c9667d4"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "dfc0d20e91ce466fc6697ceba8d37cf7"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "5f7337545fb717bc8aed9a1c0e307a5e"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "6d946e7aae7e4195962d866f698a5f1c"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "4522a969ef5f6b786b075c71e05ce012"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "be570ec28f42ccf3c305c42f9dda1851"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "08bc47d364197ae2e8e71e27b3b56d97"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "ebb364d741cab606f5ff918df712b69b"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "a6bd07faa991172c405975f2e95170d6"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "ce1241ff346f8bdc40c6f12eb523961d"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "966ce46e9525d857284a2e12a6eea5b0"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "4d888b466388c148559ed658561ea153"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "1b3d66397ae60ab875455d1cd9099f3c"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "f39d5b7eff5d784e017d917b520a7aee"
  },
  {
    "url": "categories/database/index.html",
    "revision": "768817063fe47739fc49bc34e383ec40"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "65494668eb8873810258a01d3636cac3"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "1171423560b01b46713ce11ab14259e0"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "955c9b94318dddc05f0cc8b368147f77"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "2c6e395acf424f93e11afe2c403e9689"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "b80f91a40e1af634ad238c8c875b488f"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "03fe56e1f6ec38443c4d69c4afc572cd"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "219b22a27eb127f05cd9891c24828617"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "4bf139634506fca64608eca917a8c2d5"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "18c30da3c86f6e1b33a7dcc437015a14"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "e35320609eaf7b8538ba27954686e269"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "f18adab3593b69152cd95ebd380fb398"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "23541f210d3faa56e9c8d81067f2be64"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "5185e3a0b9e32e37927839177b8a7872"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "02b6d973c88ab64981719974f12f65d4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "e88614b90af5f1cc434f9749fae3d87a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "b87f7b657f6ea5e52655bc6cea761f04"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "cc1d58db2f26a0d4a5b0d787023d6a09"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "f2776cb5d2cb2f011b080ecc2bfb0702"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "dcf4b6b4433e42dde85bb7c3baad10ab"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "9c888d789021ee4ec39ab92d865e45d7"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "3997636c867d49e6de311cf9313597e4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "7da82d03f3b4de960a74aed8c445db33"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "43b3e3fcfabc44d37b29498a154cbea5"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "a34bd0dfdd22025ccc2c9bc380ede512"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "a9b67e666942dec8621c13c08c15a7bf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "3c6ceddb8bdd20ebdb2d34c14dd290b8"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9c386882a872145e9940f41a327dc0ad"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "231cde764c9e54f2786e74d794d95c0b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d3516fda0e2e7439219bcbd525a9d448"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "ac1e0a9e40f2fa36cc36e9cd4e4e988b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "1a6bdcbc01a2c74611ab1444a30faa65"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "fce2dea928101a3da8510e0028684cb6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "d890813f5864a3ee135f1794c891e02d"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "b1a9008fb43870aedfb12b91a30c08b0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "61ac19e9a1f9104a3091b1e915e3b86e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "ea942f9f1dd406610e902e14d34bd489"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "53671800505ea57dc6bc38b67c8bdaf6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "f4c2f51c978da867a9a18296b63403c9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "a1d44ecbea3e1741aaf08d220b752e7f"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "997080f36bdefdc0f8a51e6c50476dc8"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "6b42be99de4aad4fd087bd14dfc176fe"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "33a04998cf99eba51dd57955232487f1"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "75a431321b86ca4098c9346fd89d05b7"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "069cb6fd99edb2ae6eee84f2a1a5470d"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "6c910c6cd6cd84c7c564f4474b029c54"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "2650b2229d2bfded4baf4d071b439768"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "1167bd239eb7ae8f1663ce79928ab36c"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "a9e1c8be349574ed75c51424486e74dd"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "45c68711dbcd4c6561e24a29e03f255f"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "f021cc938899cb2338506f2d06eac16c"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "0c00515bf77d6df9f7806e1f1dcdc4f6"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "ceb95a8cf2a251a2637d2bd1123e2fde"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "0b8e323253b128ede3202cceadea9cc8"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "4ab52dfb03d8abac420030a4f04494dc"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "4fb14a046174ef4a1ae5d734be7c7546"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "9197f3d269a28c76cafad358ef6d78a9"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "1fddf5217bb455e380b671d10f8d1466"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "b8cce6e359fe0d38c6d32f8f3822534f"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "42d12c178601b83f8b6af212996f50fb"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "a6b085aef8cc373d253f24a5c0e9521a"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "76537bc093d983be5c53e30901c8d9ff"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "5859d4497aa4acb8aa52baef6850814b"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "0828862ab8aa4a897b147bbc0efe5efb"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "0a9463b9c61c3b3c95496f11531f087c"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "df421db5c07bf410e6b0a8cf2a2bcd24"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "5232b409b26ada357830b02e92f47e35"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "8b1bf5e1b6a98c0862b4f5d761abea82"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "d30254f30dec8266bafb832398279438"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "89bbf31efefd913a1e32fa0e89261d61"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "c6b8c905684801dc0740939bad73d820"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "f148e615a8ed1351e75d585f42ef65df"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "e24eb6e710e7cb6e6362b1b508d9fd9e"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "fd19072aeb3240ee2a02cdb8c5f5f183"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "af185ceadfda3aacaf91236eebb019ff"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "100839bce973443dadfff1efe829ae7d"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "920d65164db88106b8b66e1e9914a638"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "80bcaa5bf77344438a5d5fe47cf92f50"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "fb5fff720e7887755b8a6d0abaa00396"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "a7d0a1315e2e5ede13e83559fb8740bd"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "e2a4a26ede1c71675831ac786d4b740e"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "bf7137904d1fbffadcd477e800d0f875"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "0a2b175f8c532fe090f655f9af4ab86a"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "88a0d1f2ef277caa417a63c17a95cbf4"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "917c265a622e6cc3e3db95d6db73b8c8"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "69430071120696675c87e4fb5965f6ce"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "d35328238b02225f94f4dadf63b76434"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "1acaeb9dedf031a4e6a31e030118ea5d"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "a7342a450e2dc6b9af9684b39fd4e8a4"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "feee24905a467bbd4881906b332deba9"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "2787dbc2303ba1f9e8ec1e6dadecf1ea"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "2d23407e7fc79d4c14af8be1813200ff"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9e3b7a5a29024c41281020f9bb8ee306"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "8d071797f3adc6ef6fea0d7d40672c3c"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "4bb50985e703039a6231c102faf5dddb"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "faa2764adfa48207d20a0438a8e00ae9"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "c13dd35252490b2f69e6001071062b5a"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "3592b0dbcd7d3adbceec50439544892b"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "7e52f1f996619d8f3d3f7f98126f5c7a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "5c12bd1829a63991147da4b12e60862b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "077aaee82249da38d56eb00bb5d267c7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "4576dd9fad90b9caaba7b4509a43044d"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "c7b2f3de5a3bf7aaf7e8e3b76abc8414"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "f8e7b6c54632438f6010fe3c51a1971a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "3abc66642e836442a08360005b7786da"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "417d05346007d5cd0de226cc4b8a21cd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "3990c173e3fa7af20edfde6edde39bdd"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "0c6fbb8222db0c359b13563bbdfc9c75"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "7918c6347bdbfe715d8e3bb6461c9aa6"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "9d30af460c8a4e8c52fff0bcf50ca3fb"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "1d3560be66d4b23afeeb41827497d40c"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "fa5f182fe20ccbeea50c531e6f8f0d8b"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "aabdabd9029b09c50443f3833c0f5a8b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "798d5d2337cf090383e3410f96077fc1"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "e15481c0cca4a7cbbb77d2b242cbff26"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "c01fbe42572504ea9758deaeab17649c"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "cdddf67ea79a9ef52f031c7fae39c480"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "d5c994d2fbfc473c0cca64c35850cfce"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "0bae07e26166a9ec6fb4590b6fa0a110"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "dfd5e0e5afbf5b8e6653e00d36af8f8a"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "efa3f9b7198d536e63082c7f67507463"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "0a8cf46361f74c620246a38b474f656b"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "83d9ea2ecccd818cc49ac9e96c8c2a4e"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "1c10d352e646af5c608668b3133a522a"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "8ed173b87f0df53f66677ee4ea23461a"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "56afe60f891e1671ed61feded0243a60"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "36ebbdb1f882be25ce56ae6c5d6bca72"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "d7afa3d9fea6a1b535cf28aa595d9649"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "6978b4e9e858bf26a0c7e4a95cbfa799"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "8854b52a5535bb3c2e54494cba0f3d35"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "db4f0b92e6f904b19ce7a38bb2fa2798"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "1cb8f6abdc042399cc61db0da75b966c"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "9e6179f284bb55203d3d16cc35b3c619"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "4912ec98f15dfbf7905b1742622a24cf"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "71be654cb1f496b3917890d94759dd26"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f02588180a3c9465a609144444130e5f"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "287876507442e1c10be0ba417a780cb8"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "b140ead9d3e9940ec52f61dc7f00a3d5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "ed17352c14dc5e46ac08f9980702c1ed"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "3ba460b71fa574a540daeb7e27d6eb0b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "77fb712d81226955116b7dbe0babe0e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "b975926b3b3078055a5cec4c150a23db"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "f289d547a6f3b832f93a76294949ad3c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "dc7763fcc352b39b2c9a7c9c5115c825"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "2a9cfc50b19a2437836602bc7459dd06"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "e5d36adfc3a508db3121a9e6f6da92ec"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "b04cda5c8955641ac841dd260cf7cfe1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "43b11ce95300bb9c0a73904326ccc5c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "cffa44f686bad225a9c5e896ce5f3412"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "31a3ac2198db2c2b6d961b647e2df25e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "d57ae80e619ae259b0845dac056b6c40"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "5a25a085ff5c1db7cc8095d30c8c0b3f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "dc37a35132c6a40ea13952043276cdc4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "ea2ce671d88a4a7295ad8cb5967b20ac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e6714c29699c113b4c57ca241e3df633"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "d2d214fe85f63f382b14400ea4170c76"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "0930c4a8d14bfc1811b42ea8ab95ac1e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "b51f1611db600ce2b6e7b7c5764b63a1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "01f22a70501ddd0d8c02a8697435abb4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "79251f89b6dbe9782206055a4cbe00b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "e22229a6561a792f200115eeccb97084"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "3be2dd0064c637291d045e06245034ac"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "f50fff4453d7a21e3b3be912fa2b03fb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "c27e8eb9377a431de4b7439852583bc3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "8a984aac97cd67f20ba99ca71141e8d1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "883261cbee71505eaec83099fba82228"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "27e1af8b5dc45ff1be5aec096bd1c637"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "d46cc608dd5521e572a0755685e95e82"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "2bbcf3ea5a7ee37fe73afd8ab385bd6e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "dfda09d4ce3fab87924865fd1f16dcdf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "f5dfdbff83366996b427fab20bde097f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "9ceaaaa81dd89c584499d19d066fb72a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "6610c11cad3d9857eb68f8f579bd93b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "7aa06c0c8b07a1cfe36923dfa251eac1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "b8013685dd87dc4b48022cb30c210fb4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "138d10d42bd3dabc0bc4edb853191de3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "89efbceaf4878cbfb407b728c5c960d8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "23a475c8bc62bc7f6a3a43df3e0beb38"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "68e75da53b453afdca450cdfcdb1906f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "3582caa175496d4c03162ed5362e0940"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "2ce75f34408c6b365c6e1621a4a25692"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "c47559a37cded1801c57a70409c55d4f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "f2afaecff33fec72ef54f7e6261db959"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "2a992ece0cd270996d9c31a1472e78c9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "9bb24d0068af31c945b63b662a09f882"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "a57ef658fcff305c4f8477646d249169"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "b4f0850538f2a26d1ac4c2ea1b14fd04"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "c44a7b1783ef551ea32a2d5ff3c34037"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "b0af8bbb381f937e8b32694798dc3066"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "9a0f168378ec5196a8871be5ca4eb6ea"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "6bb881b979d58aaf69563282e48c4456"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "63b77f3b15038359be297c40b9c172b3"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "da9d91fcb977267c2a80a7bebb3cf514"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "0af3b7ec94a0ef9766bcfb8f27e03d9f"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "3a5014db73cae72e03d9f2aacea6bb87"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "da917513d4361356cbb33586dc06d128"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "200617efbaa350462bc5d2a639be0e8c"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "e0959d801396aebdc6883912b3ea9f4a"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "191c662e691f06a5307cea9571b63cc0"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "eacb4c160d4eb4ae51769a9ede95ad16"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "2772afccd3fbacf616c8a284c262f471"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "dfd4a32c94d0aa67ba6554db84efd661"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "8f3b7c1c30520de40070dac4b5148a24"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "6b95151d6cfe0ae7fc18f969014dc9ab"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "02b8aa14738954b9b7c09218141c722a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "d572434a58197a1bbf677c8f08001a50"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "4d042daa04d2f58a6985eb4774c37555"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "eb27d1717a19d2374eed4a15e6d84c95"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "9aab01ba3f6aa4ae35956fa79f43a368"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "0bae8b959abc6d63286e895492971f60"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "35b0dc4f80c5a3d418cc5cdce230c854"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "205643b357a2d74e34b7f7f7db9e089f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "f1c58620ec96cba87e896c0e9eab0a58"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "c82c92f53053ad8a4c4fcec0e01ba8cf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "76c7e6c71e197d31a08475edbf3d3daa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "f4486a1038901be422675170a62971e1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "53b2e36b81049f04cf5c6b6a443570fb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "dd72941b8ae4aa57e09fff82c1c00baa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "5ba3f4dfcbd6fd8f65694edf995b15c5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "7481c64ea75d1e28f78766af1dd2836b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "2927bd8f35cc2ec7b6de580ce5cb258d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "d9ec7db087faa5cf894d6f23272e2305"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "7031cdc4e3b808f12442076649428d89"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "be776ce4e3a359f17aa81a470da5dc24"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "fde2f60e93874b6371764782dc5204b4"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "e4e4bceb3a7aaa080bd169a6a1c32c4b"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "a73d81e7a0cff3be606d45dcac3f550d"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "2a33d16fd9eaec7d9b3eaba8172d2ba0"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "e4bfddf25fbe896fd90b347fb0da5cd8"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "c90b8d36dfba28486ca22c28ceb48a23"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "1cbd2dc4c7f79af611bfae0b3fe9f315"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "39281b5606844f86bf90eaadea92771d"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "d0a8879b9356f43bd191859b3b9f6f72"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "276bffe0b6e3b8514dd29a0dd75a4669"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "09c71c5c147c05cfab6d3fda86abdfda"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "4d33b90687943496f0e7d9f22ca43173"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "edd3534cf4ef2baeec52007033d4d33a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "dc98be5ba21320ba85c8fd5d22b6b23d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "b59339ad470cad54aa918289c63a8bb9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "612b84fe70398914168d5d6b91deff69"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "0d8044d391f6e8e10f6856427177e121"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "f2ab216a0714ded1d38661984cffb4f5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "56a14bd8f816d5fd8660beb0a8c6908d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "08dc1c6a102890cef48c65a0f0908ee8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "7a79d776b4d75c37f0f9da0dc8cd81d9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "854ace8d5c9ddf1eb548b4b1f478545b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "248c022ff5e766dc548b26e497a7aade"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "82b6fce01c1ff640df8c835006f29b28"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "b95f8d0e18c0f2d073d7125a5951efd3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "e37e8e5050be6ec34bec3d5811219057"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "388a90b7b7c17d3c792f9c605153ec0d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "abe1974fdff02a5e12bba1ae40a0011f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "d0311b9b85f627bfc5325428f5272e4e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "a4d3e32583e494268d5c94e4ec49f072"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "f93967acb89545dda5c17a2f76db7192"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "399d659ddb0da2f605dda900ba49b390"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "6db49ab6827d2956a53e3ea5be2d9275"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "698a773d7171c3a12375cb26012db218"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "ff379ad97023c2746011cda9c88b5036"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "560232a480d3a62c8b8bc6d08a1d6983"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "ed9512c9e817a1b0502192ad02e9a1f8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "14aea4a5f2816d33d8131b8f9d678df0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "481cf63f0779946ecbe8ed71fe8c0d2a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "6b3582941154eccae841207a43fa625d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "a472719651673dcef8d0eb6d82c014fd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "896add1e5840844b9ef2a6090c8306c4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "97675d6a7dca7ad2475e22a974e3994f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "d07f1c12a2666c8bd12c2a2d322598df"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "72d97ed780e3a3997d850e19d3ebe2b2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "7905a832f970c11c5b1b576b3224cb9d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "e1df238ae182dab5b6e34740c218cf04"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "70b2cc36723915c727afbbd4b686ba28"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "4572403a7d279d98d5c5f1ebae2e198e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "ac7d883e9e9f3706bc0960187aa10579"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "11415a15e9a3c675e62a6f9a86b5d637"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "01f553f565e9e303e59daa0a8cd336eb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "eae960458957324ca683f576c930474a"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "b9cac735234d27c799e1decbc3398b19"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "dc0363768d3f263417ab8e5bf3042f48"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "2e0b2d590575335ec960f26e6a63c932"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "e19d7853e666f9c118513d3f852403cf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "6b80cebd79d7b13cde2edf6e01c675c1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "7830da748493f681b48bc345647913be"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "0ba3d6ab1575050427ed96365e7befad"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "0e12d519062ee95012a5de8bf3eb4489"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "be6986182b7641756eda9ef40a5de3b7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "2f3e1dcfb931c120e975649a69304724"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "c1bad8fd9f2b8b77c0f0d439bfabffa6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "7c9fd492893e9d249d8ef64f1b5884df"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "499950a8d89f5f5f5655635a6625d9be"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "d032f824008a5b6e88cb680820b9d571"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "51c4fbc36200d37c1f5992c9de2b2a55"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "21bbe763435827b0a5bd0e642a66551b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "acb67f45578923450e3d8c45e0b59c7a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "f983cfd3eed3224eddeeb785cad08975"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "bc7e02ced13c89eff538fef7786e5388"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "a6e16abae4834c1b18bc077c6fde2850"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "20dbfca9222bfdebaf170d9b445e0ffe"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "c6c962f5087a5ee333eef83df9a9215b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "9713caacd9b68adc31114bdb2a0e28cc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "77d9a6c4364a9b68f90be086601a52ca"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "f3e3bd5569f0b343fc6a86dcf76960ec"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "426585b8db0e78ddcf2acc1c3dd4e957"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "4a2f1bd64d615b5e81471d014a99a66c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "b03edcf4bebd96e59a15e3b61c87da90"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "4580934fd553d1de544c3dda93bdfffc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "d7276920117cbb2f5ff2b8900eb00f15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "90bcddb78ead07aa70240a5d91fb8ca0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "6c9e63c61fec0a1cb333a21649462500"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "af1e2dd523dd52a7d93a1f477d9c7cbc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "cc6c42bcc119231317f0df45c318bc52"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "000e5b02d153549d51f18c8b5fb0d859"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "87d31132e69472c524a5492b3073905f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "5329228e3b6f384d316f62896aa76ea8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "049c637213f0d036fa1bf847111e1e7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "1be9fd3f741aec7046471a6b170459fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "a58e31113c807294cf777768e277529d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "791beb46708cfb3e2d89e44945a934a2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "1544a81ea430108b3022b290d388f789"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "806a16ec91386644bbe036f92ed98572"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "dbd3d909ca06ac8994a96d17239b7c4c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "57fc476cefaff0ced32477d532723955"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "18f0041d2a9bd420105527fa3b454ddc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "b23dcab428d5c6496a5196c5b840baf1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "1636fd424f8b24fd34c979bead45882b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "0e8443c86bcb3d61261b65ba83875597"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "db1dd096f1782090e5db20f5a96b8279"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "5924c82fa60960b33cad0af8a6c394fd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "bb013f826f8a0b41cd255456f9e9b32f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "dcfa31a4d6790aa15ca2e144d8cb43bb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "546e24f1bb5a3283990367bc217d94d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "a3fd53541d19ca7f2343b05578edda6f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "b615df2e5e5aa264d342f8ac03daffa5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "76e7867a07c0a23c67da4b29248a490d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "e7043262df7f56b36a16e25a510d1f63"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "d00750f6093bf5f65873782d4dc123aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "707ed15bd8846dd54a2ada08d14d9a98"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "3f99b082adb2bc774863eb64def1b0c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "e4f92df3052df58e32d451ea8f2a74c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "2f338d349911b71420d5588de66711bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "a2473bf398691383f1dd6c24775b08e3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "706229065d2e85d0920b79e15fbec01b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "b9df98a2bad2f027350c28ad7d849dba"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "b68247dbd2272dfb18f759d93c061c9d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "27b15a940e30310e43b556bac57a702c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "66f4ddb601ebc06951031ea84380fc8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "3a0cafd23d1d64d3ac66a1f547acb3e4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "67764b0fc86d63817d29762e8f3f9434"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "33036588f9efe606622667f9c4cd7e19"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "efe7d4ea503bcbd7f1765aebe1dcf954"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "69833cec5497cc87fa78a22214d465d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "649cdf22f81f2cfcf0788ecaca9f5f18"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "1c32f0e63c4d7d601e1a799b589de960"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "117ca3588c08d18ee089c0c29f35d5d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "e70eb4b8953af16926c9f3b5c2e397a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "613e612cbd5bdedd00e9d0bf24bc6574"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "e7eda92a665b4553a22dd45b242f3c01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "802772c50288265235000f216428960c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "d80370c590302c531aa3b6d559fe0076"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "e5895864d8a3eb9a2b41c3163c361d84"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "b246dbf78fc229b217613cd17adc1962"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "0ffd31f64ab0eb0b38ed8524cda27048"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "66721ce524b10b59b41a87eaa40e7474"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "a0b122c46f248631096cbc68833f9eaa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "16556334e0e63e65194786b066530b99"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "76391447d8dc5da05f2298b28d739fd8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "863a01a2b7937c3f3e8af1e4c109a1eb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "d526c550ab17d26e4fb105701ed2f473"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "b9c5302373289902c82fc1ff1e5059a1"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "5fb315a9911539ff850846f0e43de75b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "bc7e25a6478de300f1379b3204e08d7c"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "769478f9040a0621ac808d698df7b143"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "76bdc98458f0932db4584c40526578b7"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "c837d0c903b208831f3827ca04610410"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "f41eec4669066b72615e5e0bfb5be8c2"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "1eabc3647cc3d9493649d29d8c7d48d5"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "0d9171422646f6aa6c422f5147c5fa77"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "80bf62bcd144d8dd5e2072f97d1b7230"
  },
  {
    "url": "categories/index.html",
    "revision": "e88f4d0ba52a86b61cf05f93880f6591"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "01ab004961e4b0a8ccef318d37eaac88"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "3d25f19d2d583ef4d73adb842ad9a1b0"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "bf374df568a381aa8799debe82a3654e"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "b20d323755a59197d1637e5dd8f76d8d"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "e1fde0a37730cd079226781d8f7942ed"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "4247250234f06e951f04fb10d12853ea"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "17e445f159ffd2a033c968b5056e54b9"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "2375c7d510900ee0e54182335b55a691"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "a6153dda064272774cb29c4c0d5eb1b6"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "5b8017d5e3bc649cc22ec83332d9fd4e"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "e6ec2e062fa5f4631ed64d472aa42e89"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "79134dd009e214bc3c875c70b517fa5b"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "24da09bf337b7cefcb83b718471f9acd"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "f895cb28c60ffa0cb0b0b1f732859c33"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "c5f7fa763db2dd85c65483fb060e5811"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "04aff82c407e35def426e92868edb5c0"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "a67a52d9da4fed2cd478993c2fe43cb8"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "6794735c08ae00c21a4a2ceeb234e3ee"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "cec46b6991a7558e8b5818c05a4790f1"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "cd5b2c019cc93a3259c2281d9840d906"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "2fb9e9c59ff009af2ac3faf498a9ea29"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "7ccdf0f959b2d8116b42a5e2881f6470"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "3410122a3d2755bbe7521f1e5ce1cf35"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "611a6af376affc134a7ef4a443d31957"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "1800c21fff76c3995cd579aab4f217d2"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "23a5ff6fc402bf949b1d71ad480344ba"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "931b05b3c824f820a178b25438884ccc"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "f99f6c2b68271057521f2f27e70afeed"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "cc5f869ed69aa79d245e9befad9f255f"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "dc8f6bd4e0743e86bc6cee290b34568a"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "7106fda93197c04c0265d42f556c1902"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "86b74010bdb67fb2a735bdc278dae4ab"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "8d507d2798f4f001f424ea0e1120891a"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "6477d4f89735d739a8a1a25b666b36c0"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "a1efc98a1cfcd9178344fa4ff89c34b6"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "a5710c2f851aeb15004ca040ba5ab62b"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "ed780dd9e7f69e1c3e78c714b0fe23d1"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "9d9f98c1c5ebb9ef2d4d10d7768ea191"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "81bd2584a94521caa8d3c634488f6124"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "4b94324ee918ae51ddce81fd96e999da"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "13d0e7584c8db91cf5e7d95a9661e768"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "e0ff4e0a2d5fabfbbf208a95d0686579"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "4bd94b8020dc8b4a03b5f8468c21e354"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "24ac285c4c7d4be88a41e815b2485614"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "6307bc9f75ea25bb8b3cb74a2ad11ea2"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "075929ce0d05ad5e717ed75b77cf596a"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "f09ae91b744bf589746b6a52788d1a1a"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "cfe154560da84f328d3040e60c20f72c"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "87a374960a72ae97402474945439c644"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "67c818e955b2ccec9066a58b1b31d475"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "2dfd263833f91b6b62e0fb14c108a173"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "602c8161a84f7e5e3547591ac0b0a728"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "3e351e54883c9c5be44a904c9c77368c"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "defb22992b8e01acba1d914a3d27492e"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "f8106d76541d8153753e8772361dfe73"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "26096987ab856124b90f58137b53d324"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "e34beb3109c4ff46992b8af492c16d1e"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "eb15adec5c44cf710fb8d67da531b02d"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "2a361a67b35f88b178dfb7ebb2d12703"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "e41a52d27409994af23f7cbb9b3cc9ff"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "b25e66f59b754a23bf986fdc2bb7f9d6"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "d5070de769531629633feb28303dae81"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "cdba673033aa293b883befada3e820d4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "e0c72c949eadc888b9e3ee1a2399c43d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "640666db248b0ef248d97f98022f811e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "95676257c5d2bc1935186ea6fcd70bd4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "163f472b29f4b6fc0c8308929bca4c6e"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "d4dddc769527efbcc3a30115fb165944"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "65e7d06cf7e343b671d3febd834f7913"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "6c6450b1c45d5491b736b0c5e120829a"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "b92511418d8ed7aa9ddd2f5c6aee65c3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "1371de1e813adffc36f9e167fb39c7fa"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "6cb06b1cd796fe221bfb937708fe3bff"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "ef9f8d79a24eb13bba046b230104d4ae"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "c5fd3ca48ac1eabe802043b42c4114e5"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "9a55b5d743b432c0cd8b55f3b5a57af4"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "cf1435a7229a1096173eb1fafb0c1b06"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "25d1f61c99404a6f23a5eaf6098d8ce1"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "bb8fc64dc6eb2890dea5274ca986d722"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "c010163efa54482437241a93f898876c"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "f8ddbb2c13ae046b904451c64c74f2e0"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "1650d6e044204b5c3fcd8e2e4d365fe1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "624861ab8fa424edf241ec173958430c"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "c5b8391f012ed655f076a1a1a7903765"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "3b78eaf2a8a927d569e46788b8b72bc9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "88555d8d42d6574663ae381c7c52f2d9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "29f555b7e0883c0f11d889bc9e80054b"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "963cb171d310f05883907731f2c2afe9"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "cc7d416d217475109b88c378f70eea6f"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "ad698ca22adae524d5f254a1eb3bf459"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "5da1b6b08b0893b0bc8e5c17c975d1ad"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "bf6a6d3056e425eb7e56820ca46021e2"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "bb5f0918582c72f02805b414f2a258e2"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "d5c0046d038a83eb81bd25a5ff8bfcb5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "6b67cd29bc1947bf40e2356dcb97d675"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "742157bafc7748264e8985f063aa6654"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "cee220e2a010c0c59a62e8ff7fafcc35"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "ef96936f14b112d4371e454d6e312cf0"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "676bc6524986133cb89a9522bd54d737"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "8cfe7de20f592f0c35705c53a0752c99"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "d3948b4eeddc988ebe20df4ed83d4125"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "4e11dca0b80cf57f9c1dc208e4bfa6ef"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "11d57aa4317849cfc7621e7f1e30d1dc"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "328ed5bc37a8738e8aa9940e796cb0db"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "db6618d35823bb08f95f5758344f8f58"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "28f86de4102a4ac4f89e5beeadb5c933"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "a4e95e6c4b16d62f0d04c98345f37cee"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "06cc4f3f92e3b32875ac6771eb8e828a"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "42dc25340c824cede64fa13190f17ed6"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "ecc26bd28c24d78cdc68997ca7d12886"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "7dc954d2d449f168add2bb077f7d8d18"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "a4f26097f355141c118c1a974d12b5c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "9ebba373d0b4b2b9cda715b30e549af1"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "62364c8d94a45367938ad10d2f3964d0"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "1c18a8e9c03b40dc576a0fa086b9b92c"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "89295fac7c2f2990b6991158f18c7948"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "bdfd9a14e3c242a238d985c8b5272775"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "8400ee888c66c7dc019ada6e3f669101"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "45e9ccce36416fd9c94788d7335f4739"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "cfeadff60b3588a2a7e1dc467c71a872"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "cb8fbf20ed84547543308a787799e873"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "8101cae109d960e2cc11439b31b55f06"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "d06ab21f9fe97d743e2f2c491edbcfa5"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "866e62e310de707d984937492fc98f08"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "f2c65cd125904d21a880697041031c33"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "9c2c630bfa573c6e6245391b5ce475d1"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "ec4b0e09ad9d36d4ab7c04d7392d40c3"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "e6066c913fa4bb555a5102b14bbc3992"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "2304b84086e18e5c0a480fe4f89fc4a0"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "940d98eea3dda7ab2687d494a48ba92e"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "9ad38ec83a7cc67de010e10feb2fe476"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "08268c3db9db839db51134857219a8ac"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "7ea2a54c0059a5906f30163f905acf2c"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "1754a6a1e8e06acd3f1495c413d51ddb"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "3e84f370755f25c3820c4ca2f2bcfa40"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "fd329263cfd8a5cec522a17b4f86ba0f"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "86c087d56b6fba54b5a3b7516e665998"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "b9a1ccf0d1f53deb38e144c9e053c9ac"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "bffcfa91b28d57519b06501b91810a9b"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "e0f461646fb917a4d538d454e6cf8ad8"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "b435dcae5e141a4e52c4efe2ec84bada"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "e1472fbe6d9142966cd2696bfd4746c8"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "01dfd496c86f672e8bde9a827487f08a"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "d5c66bce3aefb9a11d83a9bd0d75dc9a"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "bac1dc8d027727e85f6a19abc10e4d08"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "63a8cd2fbf6b362a92cdbd8bb6f2abd5"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "e729395c61a2c375d0678f27346c051c"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "c66e9a08fc25fc5621b17fd4f79ef4b2"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "5841d125212bf3dfcd9d408b56d1eb13"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "aa1c1eaa14e5ab9e1e1c80e54bd68f18"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "695d2127df796ceb6beee6b1853d9418"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "d39fc069650f6654317e69dfa966fdce"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "17a55d3e435ee807b31adf13073dd654"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "0b898ebcda1c074a989058f5d440fa41"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "2821243257cc4e6aecb51ca2d459f772"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "d7cbb2be80cb1a28ed3ce3bf291453ed"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "279d1f6aed4f944d1a09f04f1a515bf9"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "8f9e871b7b280046952b64abc6fd241e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "220762200f12a3b6724735bdb1fbafd3"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "9b0541d8e5a1cc2f2ca9084ee1becee1"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "92930dfcb325f13477565c65e16c3b7b"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "3138ec08c64a939c680d4a40bb4f0706"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "5e0540be3e8a6c51ec56bb12d80c270d"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "6dc28d4b14994cea9833a512c1d7754e"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "4a26f8111450a52419a4d6251c05a73b"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "e81543b54b0d3d98d83bc1619139f85e"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "13c8c72bb43bb93ca28d3f9a907deac0"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f5d5ae02fa31c3f1f3f69c002c6e4270"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "8b6f738dee6d0c5e702f035e6e93ad18"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "be99d18ef9fdb073a2e56923ff790a78"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "8124298165dcef25a166fd6e6d193674"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "3174ddab3d3eefcaca427e730d9dd5c1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "960ea6b99ff62da7de1eac6fdc6f8455"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "19b411ffa42d4753811052ac065dddf7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "0980fe87938f24d987d6cfb1216f6233"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "067bcadccc96fe4957bd5dbbf6ebbb03"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "1046be73864ba65a8e5ff3f16716ab10"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "efd023758eae0e13441c57d6b33abce5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "1f9c31c34270258de5586d7832c4356c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "113bf8a4221134dbc22118e7ed283648"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "889769b0fef92b39599860f135fad9ac"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "85b0101dceeadacf01e5407beee0ce34"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "357318823fada5d848430c5f0ba3564f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "ed0d49dd9c639d1334c2fbfb507fb2a7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "1b3022585dcf251c0625fa33c57eeb05"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "3bc8beeee671e45ab0e7deb12fd72d2a"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "0ae2cdedfa1180fc31353c122aed2232"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "a06fb839fd4008d8bed744bf600e5180"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "0c01d5335295e0d447f47db7cb3a6ba5"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "98230c05cf79076a2929d252342d17b4"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "903d565302ff3073ba705e9cd5ff698c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "5a050a6dc4565d8a015b76556fd2ce71"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "e1368575e025a644987bbe01c3738246"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "2907e273fed6381a88d8c1f5a8777d13"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "8599f0e3edc9f9efe418987c1b467fb0"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "0e435e52b950b977bb55c9071964dee6"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "3065a046f7afb2a32384ecc207a9ba45"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "c3b27f8f9850ea94cbf3efe4b7cf091c"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "892feb72eef94c64afcb579624c7630b"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "6b82afa6d3bfd5a0e873cc846f855e42"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "724694e139a31d0489bac842a0b1fa50"
  },
  {
    "url": "categories/os/index.html",
    "revision": "ddd9b845a02bca3f82c01c52a0736002"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "c0c5857f385ac7b6a3f9e74bbfe1104c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "2f502c6bfe855ad50712e6d9fcc7121b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "5ba4072f4c52510012e3ea19c41b7f21"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "cdb8d6c2272942f9ed41e4e37bdfab74"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "0cedea4a95e4a0f210984ec832d38961"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "7eca726048da1e189c73e07c5d3aafd5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "0ff5239097aeb4e31cf37fa5e8bc2acd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "ea2175fb206693680a32956cf9055fad"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "84966bde7ff700651e30bceda7844f29"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "a4ff326ea86eef56c76bdd926df6609f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "5a8bda483eb3cda58eea2ca4a76a298a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "eef2f19e5fb2ec1bef747bbb7057371d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "690c2fa2345d0dbeae852a2cb2f1e6d9"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "ae5edbcf2687b5137c6018aeea9ac298"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "2e19d2d231083f66be8acafd0afbbc3d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "cf4b6bae978942d0dac888add7ff0063"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "1b5f004082f880f22bbc0e88a5d97e0c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "b54796a60e77a71d8ff5f5a745375626"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "c22e3baf737d823697faaa309852e417"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "876154f7462ffc63b83f12d994d6d38c"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "722dfa406762d8bebb6b9d1b8a5d64c5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "1797d0154636c8c15e9ac349ce2b8e32"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "f640397ed666f6882dd3cba3863748b8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "23a6d99c9e315622c8726dd6c8322892"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "bc45351cd119ff55dfd78d3235507fed"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "3574f7fb033ec1dd73578d325434436b"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "ccf6c58386eb034695dba41009cd85d1"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "ec38ea9809282838ddcafb6edca25940"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "86740212078ed34e51683c476a7e0bae"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "647b142038b527a7454fffc59c266e42"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "99004f7ec4dc126030b3d3bface0a67b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "706d0bc95b032a258f0f3c878cb8ede2"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "265928c7c509c573f573852aae4f1d82"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "599e2b28849064fcd95e6a1b970bf8ae"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "254f2a6575894de5a50dc22a94dcc4c0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "07ae6e09f5418ddf65c16e77eb774d2a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "4b4c2ed6d8c74c978b98ece1f91a70c2"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "4142f9cb8017f40e452b4999f7b931d1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "08dfbbbc52b943e57cf7b4bd10357a8c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "a69f7fce0c0d74e3cf008031f3bad19a"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "b5716e3c0b16f7dc437f5bcf7f537f12"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "2967a55b4e605b43cc07aee382fa62c8"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "72e627408b7960d1ca29c78f8a6f6355"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "74cb6e8726039b178d1d1d1e5e454809"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "7d5339426d01cf8bd8d88d299bea8782"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "dfba3f1f45c60ff8cc0c063d986b190a"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "673176da224ecbe3114fc81883f67abe"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "6256ae1123a12cc31751f19ff344722b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "b47639a25ab8a9799dd98a87099edfce"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "551fa6530063e8c7d841fda1fdc98e3e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "2fa6ab62ff1a0c0c169aa1c439f6b61e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "74da4438182c46a76aa942a7e9666671"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "b8d324e4c25a36835062b5f24f639162"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "5255cdfdb8e8b4a553d1c13b14e993f5"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "2b8e57b9a1e25f7893d2da9c5178efcd"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "e1cd01013d692a9b36c8654b7e0a9075"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "e136cb43917dd3a2f71c8f5350c5729b"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "8ac33a7d38db7deaddd13eba47ef859d"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2e39a230548b006ed8d8bca9bca1ca45"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "a76886d560e1b6ce69808918e81d29b9"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "1fdeed8984f89e22e73b3c7238183484"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "ae9bd2e29b7d3d8c07cd0bc157ba561b"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "e167563033d8ccb0fc1d2876e34ebe62"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "cd04dd50f2f61399590776a62aaaa79d"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "9201534ac32460d7ab72e71f9593afa5"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "b3a89acbbdb8b70c5565a030f7c3a0f6"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "5a922db0705b0b2874f59808cc573370"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "d50a2aa3635ccb7b520630a517b813a3"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "b929e63fa17e55f5bb368ae5f1ae6fca"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "00d760533e069ce0b4f9b6129e6dfca7"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "9c369f3eb23375af004c679c6824b233"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "664df0a2f5ddf3e54170d5e319bbecff"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "c989791a3f1c28b97f48efbda676f1b4"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "4b68fc7b92f28624972e5d0bfd6061b5"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "fbdac465fb89bd1e4363af41e266831f"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "4a16f2b6d9193fd31d6bdc03ca20643d"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "7429937b55cfb3e5001a84e7ca98ba07"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "d7c89e1cd4534e9bc526f87fd1859d2f"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "5a9204cf701e03b7be99cba1ae789f58"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7275b62071c9149bc0d10aab11d47a24"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "f2c5eff065c78c6ca6c1f292c670d8ee"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "7af4f500bc631b58ad3e98236a831467"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "0c9a0f1f6d8aa9715059a15f7e8ec486"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "e3f314304008f4567ddf8c278a53d5a2"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "b1330efb619e48b66350f9e9776d6832"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "422dc8692b3045877c1c340ed227ef6d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "ea8eae2f03154c31dc8cc2a359fc043d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "82361ec7abbc08409c8dad47fd056176"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "8b257ecd52e32b831003a90bcab683c6"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "0a0a9a44784c3493029da0980a871820"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "7797fd727b445210be2fa0157c0e7b99"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "98c9ea4528b23db411b16f9504ceb2fc"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "4513687924ab60e6676fb8121492c909"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "4bc9b2f4d0f71f7f8646b6ac27b26988"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "eced05945b78e80ac542d4803f265861"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "c0906af80989fe37adb1a92f1a0aea05"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "f138a17ecaaeb75c7fe2754c79c19b06"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "083392ba05a951ef312781ead40f6885"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "a5487b2736f1ea8a89434a132610fc21"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "75ccaf8d87b7c33488db71da5f2d64c5"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "fd67eea771be3ad76876745a1a604331"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "57e11ef4f678639a3ab9136a5804486d"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "afa567fdf5eb5f345ddeeb568a8a7403"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "23de5786fe0a96aad101b1b18288c31c"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "01fa17af9432d17e759d927503b9c313"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "119699369c1cd52726ef21b7c4e15220"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "7647b829cc693ab1f9da073588f49e59"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "dd8bef3284acfc7d9cde8e02af995ebf"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "712c955573458d899e237689aeb9f413"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "f62dc04e470c1b7482ad95b5e3f31b1c"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "a5c1b8015119d729f6fb512540718cbb"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "a87dd9e7b58c9a52e8ff4eaba96eef67"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "7836291b7ea1c1d68cad58211c9768f1"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "85c0413f3f8a1202cbde895b7f2734d5"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "8bf7b8c17d0421ca1f68226995ee7867"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "c475d432f983c7468759d53de957923d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "3795660173e86121a79602d70220d5b8"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "3722abcd07b1f665559c8238afa75548"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "9cb1f745c0de36ee86efc2c80c2df757"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "67816f9e2b3c72a077b42f96bdf494fa"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "967ed8573cdc2edff056e1b8d62a3245"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "2ec5c3c98662fe06b1f3f502e35b9583"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "81c30166b71391be53991b8b1fe79366"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "b48ba289fa677c738b11264a2dfdc709"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "1d83c4ddd953987cf79f7e7c513ada9c"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "e664533a89f5cf4cbf096a1e5a3f2a15"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "2cea1f8c43433e69e77b3ecf4a1a8a33"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "1ced4be03689cec98c4fd6548af7212a"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "3f6816d1e2d3fcb9b85350402921e7a7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "8e3e493c8bad844ada3bd0a162250c16"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "4bccfe0625ffaa53f99eb5e2fc51da2d"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "4e525dc1956a13196f544c28c1a7c167"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "f073851d45fa503e550d0f68fda70fe4"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "a8357603c5128d1d3794fb15f0b52828"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "5a0d0b3da958b47a588a3a8cb969554d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "21b681b16ad5d97fd5c8e74748c3a1e9"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "de5404057d804af9fd7fa58de13d3720"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "325a9348150c539392e3d71a39754081"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "0870311e7f7760e2ee6a9a74f574f8e1"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "d83da46d8f57485de2b0ac75b68a60c3"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "5a2581b83ff7201eafc55edf15466416"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "a29a92d7c9117a32481ead2ab5924d5d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "4e106281a21227661f28805a14d7054a"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "d2bb0f7bf80369518b8467a1f1b05a06"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "9496788da9b2babcbd4491363d572102"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "16c5e3eafb2516ac85ba6aadf403575d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "34e714371aeec3705fd70f70c77c5f76"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "e6dea85ef2f2d483edfef2962bdfe5be"
  },
  {
    "url": "categories/php/index.html",
    "revision": "febe075482ae68e59b7414594a2b590b"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "81919496294616c20918948c5f944682"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "12153cec1ddb05477df77a59b4c874b3"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "d43c30967ae915ba2887058641646f11"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "72c894076f7f6eca33a336b2c2d577b6"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "533631248ff855c97719bc6cb78c2380"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "46064447d44caf3f6ee3a60b003360ee"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "2b9be16a4fcbfe5b9499a191b647bd50"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "8b7df13ba82405da3c83c8f2069831e9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "fa4493e777116c6d5600faf5ae4340a0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "62cc6934da154da4ba17aac2901e798d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "b097b7091e4c491957890241aac25819"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "e53365f921f18b06bc742c8539502fc3"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "0e1072a7f846d929969876c2ba8a778b"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "f41fa80db5b336fa6d7149b9619fd5bb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "aaff21038c09703b3e97aca0b7c277d0"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "406d1f32993237851d9f9a76cf79baa3"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "ff3f173d4672852459bbdd89dbcf04bc"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "9ed86fdb0d8bdeaa913bf49dae6d296b"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "1995c974f4d25d440de40d90c1a2636e"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "56b1e904908333aa87078591e89fb243"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e2f51ca2716ef2bbefe9d8f11d8d2f06"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "d4b502726f60c8997a60aa6112e535ee"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "a0df94c820a89dcc517243ea7d15a923"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "47e0a33ffc98faea413a50edb943cb65"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "9929d4894a207126acd988f55b573ef3"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "de54fe7ab7adb5379cd0fd3bd87e2f3c"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "103e5fa65761616f7dce532adaa149b8"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "d23286c3e8ff3c507063e1f51517dbc4"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "019b4bb364aae809e9ad43d865bcf725"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "805557cab669540ef08da58ee343df4e"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "2ee204e74ddb4237dd010a74d511e2d3"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "9e55ffafa7eb80f4933385f888289668"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "58e8d0c3d22c61c4d0d9403b5e184d66"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "1cdbbe4e27512204b823a42a30122bae"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "b69fd5d456eee31731033c9f2aa62576"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "a12eb35a12ff30195b43a88dbf44bd5a"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "2c2b28350cef5c30a4687fefbf60c51d"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "7f0b9912b1f0c4b4ef5d310810b9c111"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "1a3a02a8b5a57db72c61d7017b7d82df"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "5fb84d8f7a0a756ad923297bdd615226"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "c8e5fad44141e4f530c624062f1b4014"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "b2d82bdedb11a1b9c4e90982ab2eb747"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "792279d5cc6746a3164ce6538163bb08"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "f3159f9a388473eb661990c8b0389826"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "af751f64ad19d4ac8d1ecaa6183e0b47"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "5ace4cdc53c7dc18647c986f2516915a"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "ead58e510376ddc5f3b74c6e207420fa"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "6baafece065d4155d76e432de4623b70"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "26c52f4fa18614be8de21e2ccf555680"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "050f79a793ea9ca6bb7ce8997f1adc11"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "a7761040b03fb63ee46b75650be8f286"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "7bc951a9010c7607589f7fc0ae2acb99"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "b47b591c218ba39eae10f9bb8a0e4490"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "99110d66f3e073bb22f185f280ef319d"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "356f04b8058e49c96176b83a7ea4a58d"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "b6ce7ac6e1cc04ebd32923aafa73cf2d"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "4d3fe3e22116f14b2828539bfdfee136"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "5952146084ef0d064d1ec9b14d28c014"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "b17a51211503423bd0736660d4a95bb5"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b0b27f713d898413e17b4027eae62ff8"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "4e8768a0d08149b8c24fd083f8c4a383"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "57c9b6d73f54bccc949d887d16d187ea"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "acc0b07f1ade7a49959a8bdd5c583719"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "809fd1312a414caa97c337d73481e579"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "61a47432ce59d77b981b883d39b682f2"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "de9bf50b4fb69a3d7900a042590227d3"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "f341bec1231b0be4e27c6b94e3f944be"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "d8fa25d3aeb24b284729557fd607610f"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "653aa79b57380efcf026684addc84a7c"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "a2b813c4765be47b1843700f35686da6"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "b47ca11b5a2ef4364713784f01cd0545"
  },
  {
    "url": "categories/system/index.html",
    "revision": "cfe59a1c2d45e3a55d52af638d3ffc36"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "f562f6a64711bbab1835bd2b454b2a75"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "9d80352ce156664860758de8e830429f"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "540f055f143613d880fd6afca3fcf18f"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "e3bcb9f5817b521fb74c300e4dbd78fb"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "77b7829cb7180378a3c9bc679b3cfadb"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "1cf3480405fd3096423d62cc9aceb51f"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "5d42850bbc9054fe8dd237cd768880db"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "8b4a4fd9f125ed8969fcb58f631a356e"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "808c8109bb9edad20531846c7bf85a4c"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "499bbd083642d91a4ea9ab001c348dc1"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "98b93dd8c64bbb9fc72aad3f021db11a"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "fd81f3c844d1123c9b13173dbe07fd48"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "ac7ff617f238d5fe6d3e770fa617c90c"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "be89c07486d4737e5f9223c5520d64c2"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "1608daecc99643b095076ff28e77e6f8"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "73eee5575447b05de3c6b8777f193c2a"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "7ef8d09741fa0f0e73db94180e6b2b2d"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "db9b66bf780ee6b388d935355a14b5aa"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "4ec9120c4dea85edf56e9e40598ba5b3"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "c6960cbd5ec311e33db2e178abca4f51"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "a74ff863aed7fe580403cbced5b32ca8"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "6c5381ba538bf8f4faf4b3f5c6ff4d56"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "6298fcf4216a95c7328546b713687e06"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "e4807440a42cfc33f91f6922fd489818"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "b87436190390bda12afc7d7b6f2cebf1"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "83f3465f7d3d10ade48ee55c1544578d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "3ab6e2f4a063ff4e145410788982b8cb"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "3853c15ef69dae382b31905e1e5dca17"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "cb8e52201a46981f3e21f506ec12b1d2"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "0d5ccf8b0ec81364e746ccec1205e66d"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "8aa58e8a5cf819424d729d35adde32f8"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "4e79289ab3987f5ba6385ae251a86019"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "89c13ed89f9c7ce501692318ef80a56d"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "f4caf84502a6ce3573b914874ad60e2b"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "2aaf3f668163e8d428c94006967e98cc"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "412d33b4bd417074d5b99832de80b001"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "669b7ae0d464d4af2d59da8cb5eb711f"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "8238ccaf3fb27f99dc739bdee6c3a8a7"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "42e9680d76bc6a0ee3b9fabc5f92bca5"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "d987fb8340530dd9c3bc53b940b5fcc0"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "353ae3b4310fe2ed7aeac16b6a771abc"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "30d7e6434c2c4806e4dbe7db6ccbe075"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "fc65adc39465d178fc584312298db99b"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "04a0af3b2521c98474849689b0084ddd"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "9d60676a7fc8e7dfccc3c5ee2352ea02"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "7f6c08942eb5f9e112166c24e3280fca"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "3bab523f4ed8485ee7107253be45b08b"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "b7daf5339b45619b4f5b95967753f69e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "d08dbcd0d42499361410f9f2543a57fb"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "9cc07dbaa974d5c8490c7b13c8f3beb7"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "ee544f3e3d9c06f31d70c33a1accc0b9"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "9965dc5ed5d2924e5ae5a22ef5d8c3e8"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "ddb3e0500a75eba0e695021d3462c426"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "e1853d412056ba400e00c59088a7cee3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "dfef0d6844b6513f7a05b3c82c3479f3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "a3f007a596fc4959107da4bd5af0a4c7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "2a09a6d46cff1650af490c10c53808da"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "20b187be88d1e8101087d607c1991017"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "b5a4260efb5106737f50ccb1b95fd0eb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "40f1bcd56bfec8a9460ed9a28d75dd62"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "e235ddbd802c14db35dc10cd812a4f3d"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "e92558b6787e079131cf7366048edfe9"
  },
  {
    "url": "favorite/index.html",
    "revision": "19d076aaff7d88749f0955eadf839714"
  },
  {
    "url": "index.html",
    "revision": "442bc095b743540f0768504bc7fbb025"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "ab6fcfcffd25efb33412814dda6fe7e9"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "25ee83d0fd5041991b4c4bf133f4677f"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "fb78d0a207b0aebad769cb7ab0718004"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "a120327bc0b056aa1feace12e152ae06"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "d2689bdeb945aec04dffe5f5d8804fa1"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "b746b141bcb7f23fc75f1ffac98d9437"
  },
  {
    "url": "note/index.html",
    "revision": "4bf1196b8e57e97187b737f51bc45e33"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "8326fea833238e389f05327eb8e30a03"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "7c6ce1c954b6bfde8f3fff0f71c0f33d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "8a65bead937bce565b4411adec77371b"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "1d487acfe7a51c241c1101d65f44c86a"
  },
  {
    "url": "share/index.html",
    "revision": "af956976097bd581a07ba408be31b69a"
  },
  {
    "url": "single/about_me.html",
    "revision": "a3879dc460d718fd657fa62c47c9be79"
  },
  {
    "url": "single/all_article.html",
    "revision": "35154f347ed4f3d22dd816aa58193c7c"
  },
  {
    "url": "single/welcome.html",
    "revision": "1a5906e1b46283b79df4155d36e595b9"
  },
  {
    "url": "test/index.html",
    "revision": "76d0f19d37589d6cd3370490e026f3b6"
  },
  {
    "url": "test/test.html",
    "revision": "52bf8040958c8d1f0e8c806700490cd9"
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
