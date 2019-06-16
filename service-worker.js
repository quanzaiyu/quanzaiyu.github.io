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
    "revision": "b85d4098a2562b7753ffc7f7ff5ce3e6"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "a86e98e6380c3773b5e53da334e13a00"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "a17ebd1522f9c53118f7b4c788a99424"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "6f05c9a2aa5e16b0f45ae84f4af80841"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "69f13ef2a0b2b01591e97f680bd25e5b"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "3682f5dfec450398484b150f2a977ce5"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "9ef8f57c06804b2469f1c231f975d009"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "ec8a8f222e9c0b04ca5e97d6a1a853ef"
  },
  {
    "url": "articles/index.html",
    "revision": "39d388cf87041b0765399793f1e24ca2"
  },
  {
    "url": "assets/css/0.styles.24fc6e4b.css",
    "revision": "e5026005fd9f2b0a4d5d0ddc59c44131"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.dedaff9f.js",
    "revision": "db08fc9f604cb1543252dc1c2707d72e"
  },
  {
    "url": "assets/js/10.169e23c5.js",
    "revision": "ef39c1e9ffdfb96edaa2bca4dec3906e"
  },
  {
    "url": "assets/js/11.a1b22419.js",
    "revision": "1fcdfe5c0d9cede8f3eea7266707f5ac"
  },
  {
    "url": "assets/js/12.d6660583.js",
    "revision": "f8fd52c3e22174192bbac70f004683dd"
  },
  {
    "url": "assets/js/13.9f9b9f15.js",
    "revision": "98b096b3e015cd0e5960e53512801c3f"
  },
  {
    "url": "assets/js/14.778049a5.js",
    "revision": "92c269bd240255aa88c3428551b84e02"
  },
  {
    "url": "assets/js/15.9fa28897.js",
    "revision": "c2a7d623e66f06cdb34653b67f6f6868"
  },
  {
    "url": "assets/js/2.dbca5474.js",
    "revision": "09aa1870902cdf67cb73c4f7937f646e"
  },
  {
    "url": "assets/js/5.feabe54f.js",
    "revision": "7b2f0a98d13401ae992848b995fc0aba"
  },
  {
    "url": "assets/js/6.2d94c0d8.js",
    "revision": "837adb6d01e61056625cbd99c67b3e87"
  },
  {
    "url": "assets/js/7.c1decb98.js",
    "revision": "9baa180dcc355873f4522c765eab3c24"
  },
  {
    "url": "assets/js/8.b2f9135e.js",
    "revision": "f31d89b4c91b46c5b9895d2d5e12ccaa"
  },
  {
    "url": "assets/js/9.e91dfdf4.js",
    "revision": "9312aa519dc277ed70f287e8f22e6c55"
  },
  {
    "url": "assets/js/vendors~docsearch.c321be08.js",
    "revision": "9344ac47c6f7b92d44eb29d88b56a203"
  },
  {
    "url": "blog/index.html",
    "revision": "93d622b02f6fc948268479958250dbdd"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "e93580bce33c8a80086347dbc05b38d4"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "65ef1b6af34875f084b7089aa2aaf74b"
  },
  {
    "url": "books/index.html",
    "revision": "16e3662d4b04a6978919e107e18bc340"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "b9781d5b609704bba3bcb4da169bed85"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "f69fd332f4d43eec3554720a48d6be50"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "c7aaf6035cf01696bb4d65587cae2c21"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "937d0853ff8d97403277b1694f619bc1"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "5a98f65034a6b920b9a98ceae0ecebee"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "64252222af1f0755f6edfbb185e34fc7"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "c079e6a4b9f855ba90d3e21ec1d1a127"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "107699ae2b5994b23adc127db8fad4b8"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "cdf23e4f2a49a3d4aa7a24791486bd0a"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "59c01b58c51dab56225f4cbf7b100e31"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "a38a5b9eaec7008598f1317961cd4d1e"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "979548fa4d6efdb6b55344e04566686c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "441f2b88f87678dddcac54440e73c1c5"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "2bef41f5da73da5f92e84aef02513ab9"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "bab0f66d1446c725d41ffd5484326155"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "56f917b5f2a4287bd0746e881e849e10"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "38939c167d6ca7ed723232269faa5dbf"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ee68a7ffa2223404454dec967350e142"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "a4ccfe6d9a3478fca440c448c32becb6"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "c2494ac93a44f8448fbc65dafe25757c"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "82a633373f845e4828075d93de608403"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "75ae9675b01e0f1b0f381938a150677a"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "3309f5dee5c844255564124dacd08f45"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "fa4390007cc137cf12095ff656f90abb"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "e54a3a587c1763dd9f2804d29a38e2e7"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "23ce040b5173473614d53bf7a60b78e1"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "9ae8416081bf1367d366ef8b00862c82"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "7df4489563ce1f9469efe8b496786e6b"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "cc0dff9b1982081f70c377ccf96db0b8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "f32196b6162f408a159bce8a4eea68bf"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "b700f74a264f41465b104bc8064da776"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "f5ab60cd8bf80de1f81d9088164ea0a0"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "994cfeb5311308826f0beaa5c597f13a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "b80f52bbe1069db9194235166fe2b598"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "a8602aed854a057715b5b185f24104c6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "255173e227c5e39cd73192c37c8839cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "e56dcae676ad7a59cbdabffee0b4bc0b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "89a39df2c33b1c542e79615f968e17f3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "68ecb3722e9cf213b77ee5f939d409df"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "d7654ecd871a125e1ca9d60b5f198e8c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "06296c2d8048b8896d9f7ce4f2a9a44d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "6cc43d9d32d7cd74cdf19458d7edbb5d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "3b1b72c2151c3efbddfc6a46c3cb9fa9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "0f80f7eacb703ac1748b49e526eed258"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "0072cb79c2a31269cb9b0b038f2704dd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "2c3921ed958775f8380ffc5d976769aa"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "1af20ce7746fa8c8c8fe3e49c577bf60"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "cde9ea0dacb63970b944968eaf566f4e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "06bbd47d1cfe7eb534306b5986a055bc"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "3dc94a8bd8d2f50e07819284c6c0163d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "9a744f6ff0edb6ff567b71ed18bc512a"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "5778cd90ed44258a5222a96202a85035"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "af0b41a46e98966bff72dd19fb79fcae"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "e54506128aeebd584e6966c363debf5a"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "e4305524609c448408bd01d8ec560fde"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "8259a86d5766699a6ffc2832ecf44261"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "d0780107fcf9a88ff108b05905fbaaf2"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "cdf5aa209a6c2dad57b4748ecd947076"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "462181ee480bd62e6550701063acda25"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "1092b2a31d90350cce5633d00399b45c"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "66dc52bae707f52a2b662d6614e99f81"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "44578bc6ea2428fb08196ce601f7c40b"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "e31fab038e98799de568c76be91acc87"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "5d5fd182482908eee875748b3c02cd17"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "a6b92fc2a1e7bceb08c78bf8577f096e"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "e1ae90de58aff903160ad23216c9214d"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "9c87f4f5d136778ce491c04260409ad6"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "9c28ac28fa40fc22eff91c6f41b53e46"
  },
  {
    "url": "categories/database/index.html",
    "revision": "387a1958a9b83599f1db34c18cc05b77"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "11962c4727340b2260968d1873d7f6a4"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "e0d44032474c78e8e1b4245093cf5e59"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "f1064dce6fb88ccff55247c02fe263cc"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "c3ae4e2a07b4aa67a2f6736e9b7081ed"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "232ac9d5273e1b5b49f5cfc3f0c1c3b7"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "6b2fbeefba0a0d28d9f6bc1c2a0281d4"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "e0ac5f100666b2131c6f89da1c24e4ad"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "264f54cedacbd3dab4a3a482aed08312"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "d7cfea20445acce557164588071957ac"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "85759cf7dc90696725d37645c77bee77"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "0381caa91a542ce6f4761c1ff69b8276"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "df3f27054d5200d69474d866db0f9c40"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "58209d7c4500756c7fcb283160b41ea9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "3c92bcc8748c2881a81b15516840360d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "9d6c3a94ae1819d74a8d6540feab849a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "fd9f340b0ce7e24b1e43015b1952a0a2"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "fb2b35598e0b98bed76db9f468d9eb9a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "e6d254c0325532667ed9e2ffee128a9a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "7b5a397c46a4f1037b87390b755141bc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "a75f0411450a8610568003e62bfeb8d8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "3e91bd36abf007129f834e42bcbe45fa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0a7b268a2f347c07d374d2b1eb27e1d6"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "603a4f0b4c5478ac935132fa901e0f71"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "b73a4f979db3615ab0b4079f87a00524"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "e4ac24ccf0b4dabc12c3a33882f836b2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "a9748ca7dae737507a0a9054df053951"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "d3411e302b25dbe7fae598f876b08c80"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "0598caf14a56afe448cc87fd92f8d443"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "077502b704756a9067893e4ecb206629"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "2855dd9490947d4ead60a0008bb3afd4"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "74b2975ea318155c57d4524cf8acc1df"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "2c501820a377f941a7ecfb394c7e515a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "aff34c90ea8fc788efdb2f7a56cd43ea"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "c39367a8df0a63c46a9c8708ddc3a834"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "481b3719c20bd12c05943ecc64a4a14e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "65b2f05d269b8f24bea86f36dd89525e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "5acec34ff94b5bea245086bf15f4cb71"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "0ec2800a63782bf1417fd708a6165308"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "79e3656376d874bbc4504025cf534de2"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "dbea2a4869c1da26276c00b56438d141"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "966d77b92b066aa3ab6288645e8802b2"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "0b38c891200387e1ff7430f60dba8136"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "32569a484d2a3ddf9f9cbcd14c3add4b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "86e9f530801b383da0e429f2f6924be9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "b870450d14307d2197fe85d0364d47eb"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "826f28063c368286434e67c9163fe57f"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "e38a16a3a23e313f0ddfc12c3de12048"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "72a096b54da21a9c938e5971892c4690"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "81447a4d688dc8d4493aa25841c1b5a2"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "4cfbfefa813fd8e894bc86d52e2265ed"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "61b55c0a57c5509ec07667f18a108dce"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "3b8025634c3e1028aa786c039991de3b"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "73df960d28e71c677503dacf345297b8"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "1be4e3a7704cadab12570e0c512d9189"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "7a084b0a64bc1bcba9c78c3bbdaff715"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "136f47ee01fdeee8cd356b68eac5d2e3"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "8331dc6c82a1c8e33fd4723e2d785abe"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "61b96050e7b5aca6661746330a7ce9c5"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "7954ec2a0526fdf1a57839543d8873b4"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "81e6f8e15dba863b6a55e8fa91567356"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "4d5014396a91d8bd2e0de85974e16005"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "bae7c372d9e38ecf1d1255d15d12f3f4"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "4efbcf25f637ff9029a5284ebbd3cba9"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "9c3011ee973b1492c85dc926355de8fc"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "42f485acaee0cacfb6d0cd6ca6894ab8"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "5302c08adca2758df4fd5b55f260f95e"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "59d3b1ec547988f70bfc54285676f064"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "60146d568289ba15a635afccbbb5aecf"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "298c3118f82d349d88791de0ba2fef0e"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "230d3cd4698045fe8c4a99e1e0f54c29"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "d32c3444dc43231ab8fd0fa733fd6a10"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "c8d0b0e39e0dc9a059056e09ff9c0fa5"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "45424ef4f13aade934b51b61c688aba2"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "e2f8bc64f412da359ab1e08dc87dc247"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "5c0099d6ceebfb72e6573bc6fb309fd7"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "2592f61d86afeaa2d81131a9c4a01f17"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "a7f92b8cda5467a5dbca7fe61d764793"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "790d207e0e90e6963c981dce41b8fb8d"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "34c65eaa555b387e359e7316d829acb0"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "c863099e0a56d5258cbf138458891c45"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "73b7ce549417266abce6118c2aaf9dbc"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "5e321ece247f64caab743ec2341e6e31"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "b70ac17f3a8dd81068d99b3bf09d9cb0"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "5a9c2628abe6a78a8e5a32877082a881"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "3e02819f33d6ea4590985921e5a43483"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "7e44948048b542965eaf8cdc2b5a3723"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "079585ead595a1d5d5373bf270ffcb7e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "c55f3140989146023a6ec0ca1ca23fae"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "df544341d4104decbb95f609e1144e74"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "3d9cce7088291bdd658e35f0f237c786"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "d6087237bc29c781c16a0774417f8c81"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "849e8cb02ead38cec6d0c4f40b7ac94b"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "78ab6e5db79aef082dd665d0eabc37fb"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "9b6e8e19cffb34583f5b02db758f372c"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "fb6cddbeed773160ee2394170d46c5ee"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "1ed8df81bf7df207303908f52b7307bd"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "844a931d7e9c863e8bab7dc1c54c7688"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "96d3734dc6063b374b33102f04e25a5a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "1f18cbb53ae79e65663eae56b1ae7458"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "bf6c9dddea91cc1a3b50173130e823df"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "4c113f45c03d028e38807656b9dd9b00"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "b4ac958d0caa9527a964169dcf8474cc"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "411e638f5d0b34efa5063f42ce741ab5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "4ebf27de5c7bde9098b0caef35a00e6c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "ac16c0835f19b1c402f8a81ba1ad7f13"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "d9e0c4ef5d405b438eab51db07f001df"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "361552018c6199adf4af18985de063b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "211f9d9693850483fd977baaeb15b674"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "50a04f810068639ec658496de9f4dd23"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "71c556fc9c7dfdbb3e36f1aebfacfe5d"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "c1990d0dd500761e15c7edb7b4c80dda"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "db4cb0366ed39b6efae683281f73f7b7"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "a1e6114baa598ca7974ec86523c3b2c9"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "1d5f45df56403c8e751bb76842c6f622"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "b91ba94ebc5f9afe791202f3a323987f"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "78e6f90c7d46d16d910c078a5eef85b0"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "c66dc090355054741c50f98e5c7c9cdf"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "13345a104f89bd00dbd2d85ad382512b"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "f8136876735807067f19f5d47e8ba427"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "bc29295a469ab3d783516357ffb6b7fa"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "20d84f1c377bde539de4625d7d41870f"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "7b3baf9da96e69b11441cdce2688a11d"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "8227dd26486052c6cb44b71b05fbe874"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "8b9fa046162e04a060f34c1bb77476c4"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "4469e1d61503ca51dfdc751d98e20656"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "13bdeba6eebb784bce2ef61140514627"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "75c441cd7b712c667cc74a791d320c04"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "2f3da34358d5d53135a0917a40410230"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "f665f7a4861ee71471d62de9735093af"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "5ae4bc88d0e9b9ef89af4c6fd1aee14f"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "406bd66d6ce3badc90c23249d9ae8aa8"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "4b40dcef6c660e5aa5172a2d2c2926d4"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "e327c80ee2c6e43ad2549e2864e26d35"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "89f754440fd4efa9728e686d922e95eb"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f81e7c39ed8b27f5650f28421bc79b61"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "d33b937018a9c7d5c789040eb6eab7f2"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "a3c134b61e323faf2ee5ccea69c5439e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "473f717e027abce86bab3687ea36511b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "65a60caa71b893e7dedd9d1a9fab5b2d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "cfa60ac53278f540dc5d62da4995a6b8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "e01db661d148a57d06e9ec8eaf47280f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "46291609ef6563cc3901ac16408df175"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "f7d429f166ef9c1c67aa39faa3fde4a3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "a02b8ae47d11667b2fc70d7298383b90"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "68eb24c2f8fe7bc94bc54b4105e635dd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "62c4466a57d8942987eadaac70488330"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "f93c0a39fcaae6b463bbbffef8a083e1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "049ad3ab24213dd5cb98aa034d980a51"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "e2548d67349aa4092ca38100dab33035"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "1991b6ad8ccc8206466a54a29cce9cca"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "80293531d6bd0f50eaf74a9bd24400b6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "eec69e637dea1829aa6dcf7e3c3b7d96"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "336bed106dcddd678143aaffdbe02947"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "e3f3f17ba9478598098efd5975bebcba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "6bb8c6aec10a9cb34459e57ef8789fc3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "815714bf2333d28b58f57b4cd6edfd98"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "b3d7158c2df5408de7224786d088e9cb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "e0c5db6414587f953f9a40ce85142992"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "ae5194de016715bff50acb20d3e8d68e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "84205791b6d311c512a9d570fb3213b7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "60b275f33878e8a931d43aa7a04d2216"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "581ee23d0bb5440464b81c097696d23e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "26907d6acf6d526b04ef9c0c6239df19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "5c43f38daf0e2ddf345603dd2b5a8053"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "3fb97464b2cd848a0875f8dd3f759d7e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "32589b21bbd41f0095da885d347b3b56"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "07a44741e922db35c464ed8c4cb5df8d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "23121a5c2f9e2fbb3df39e4ea25b672b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "1c3527e44bdd1cc3867c452f73abd29d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "3e6c62e614f76971cf3c9de854f2bc26"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "282b2aefa96a2f6e80c49ac4c10b280c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "1e1f10c6409358c105f0c49debafca8d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "6aa3e610f9895b05e0c13c46a55afa93"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "f84cdb43382e743b18c682d53b9ee102"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "93133b1b7eac1f54fb465caa234536ce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "8b85750b05dff126872b4a7f77193fc9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "7ce186af7498d36af051ed277e6bd551"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "4fb0eab7e4fb410f09055fb2efc2077e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "176c0ac8f35e6f3e19754df0b7e56b55"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "7404eef86a999c26008973224b68f15c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "36ce7820cc48e2be8b99f48e56328eeb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "542c96377a7b69694d9dd7bfe8282fce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "759db19b786cf82f3e76d2758b74803d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "22805941493628163185084718431050"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "95b720a65a86c4b97020a3fcb19bb8d9"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "ca5890b8bfc2480f7d381c9817320bb4"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "1a2f891080bc7cfed40a3b9b79467b4d"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "5b8de16765588ba7dfec727ee1b6ff74"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "c88461256817a44d42e2e0c24fcb36ef"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "131361a9c1bfa7114475c7ca52528b61"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "ab10f02f421113aad0b56981fa8b3c9c"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ab29d8ea74e7df9ba5a3edfe8005b0e0"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "dcb390003f0f1a948953e0278a5e2c7f"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "c9c7f9bfbdabe11a6e818a82e04da687"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "1ae780e57faf20a664abaeb9b317a995"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "038ec8c8821e8f5248c24b9f6a088fdc"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "acea88c031c3823af63d2fc5c9586e88"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "c786b6ff3807ffd2868f70a252c7e8ec"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "c206435017b51cb18fce99ca77bc54d5"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "fdc3524f4737c705862ae6b1d5e24e7f"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "4a03ec9d5b8fc68dfcb65854e4984a61"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "757c5964bc108476a948f50d98ce18e8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "e27351c2d182c6842b66aea58e51ead3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "0c53c51cab30c66c8dd649a7bb084d34"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "e4697b3387c4618936f6f335416d5c07"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "daa3f2da29f0d58ae6dd6af6544c803f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "e529617774ef9966f558f888c85959b8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "93d3e11f57bf282136404c25a284129d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "beaf8bf1d8e5086a8f939637a23acf93"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "d9befe1d215b308a1cb665835a2ed320"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "4f39f57accc06829e8e42502940fa909"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "d6df72e8793aaaabca1c3cb34e598964"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "8cd59b13aa0273f079e741c5f58d348a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "26b36007ab911440a69127976989f393"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "cae80b3fa186bc6ec51b6648d8f68ba5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "d1e00f9e1434c8d31abce6d3f9300a29"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "99c7d7c0c9fc07aa02ec7ae1a9771762"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "a0d2568b72a231b12e47201dd83080e9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "8384397dd30b472c5f2a547229987c87"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "19840c13c36d8bedb18a48902a5b57e2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "2725b0b35c39db6a108a1940711c74c4"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "d67b32b67e2df20fded57686eafae2dd"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "acd2fcda00e7c1a836d27360b2d2b64e"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "f6b8a67cfdb6520fe0569f02568a2a40"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "ed37ba703d488a74ac3ade3ff85fc4d5"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "c3fc97de06165ccb05a18792a5a98c26"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "8ec26cd0b34260bca0c9587ae45c662e"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "2b1489dbaa18b7d64467b7044326d6f6"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "3ecb7cbb63f690fa7e559506e505b055"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "e6c0695be1ce44f91f54887ccb7661c3"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "612366e9d58f2b4c4cf02c805335849b"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "7978dad55e849b00953e584d833dce97"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "4631e8915fea53c959872d5289e46ffd"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "ff724978f52e5bbae11759a6355e49d6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/advanced/Classes.html",
    "revision": "31301b93c589213944829cde1feef7ed"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/advanced/Interfaces.html",
    "revision": "73e28159394994527d94c696af047cd6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/advanced/Types.html",
    "revision": "c5bb754eec2d2922d83a10e269d04707"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "c3be2499dcfe980c5dc778224fcf9670"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "557a91e4a9ffbc26c0d4de8bf128df2e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "3f7d59fc53da5fba787c5596227024d2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "53082194ccd24c3907bfcb072ef2323c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "c592d1f2971f28679e1df6bef7c9e66b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "e168ba555194b429489cfcb11b696e34"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "aebb4359d54ed8af00306b905a5e384d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "4868a7ae761a8d574c92a4dbf86c8e07"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "fa5dca6e80e4b4738ab871164bf63288"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "10f08c1c3b0168fb85d6262a9eeb859b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "8f920e416a90bd0a9cfceec2d44963a7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "445615abd8823072b18abf476e54d7ce"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "da476503aba6e34ed26cc08df6317a3f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "e5358c16aded61c091fabdba4781931d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/ReadonlyArray.html",
    "revision": "d8c913217974dcf5cd988630054316b8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Variable.html",
    "revision": "99887b977300130bc77895e94b23d5d8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "d2dc1b662026d623f027e43eae38c47d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "547e28b90953f90b509fdf1d4fcb957e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "1fb16efee1b5e520fd0dbd8ffb952070"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "8dbd3547795e579c8fc16233a5b62a8a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "30b5159bda4b56171bb4da813df94ece"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "a36c218758418dcc4ec8a34cedf3607d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "5a25e70fd3d735f15f67fc2c3512d110"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "65885ad5813b4891893bf851dc956621"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "1706960fca99d3cbc870f651c8503b11"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "744b7d8305e30d47509e8f91d2e2dbb6"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "0313be88db59245b6a5d2a788bc783cc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "b332980071e57e09ff56b62bc430a80e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "976182d04daf6a3b023ade3da24e9db3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "dc75db47eb78280c40b2300af98a63e7"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "d59e0d7a321cff181d1f6d4d8baa78dc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "a3cd57b3b5eae847f439937b0f5e1870"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "e3edcde329e3e37e74939b458327eaf4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "5886d8737bad76d9449f56a7e07f428e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "07ceb13bcc07a099bd29e49d6ca343a6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "97a594968db968bd7821a4acd2f922d9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "a7c49d81c1e3e3709c2aa4307334c6b8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "3e8e106510b98f5644c398510ace5f8b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "126a4c069d9a069a91c49e27116a5be6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "7924b4c7e4f27f8190627966f0386435"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "079868a53854406df2089798e57f33b1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "04eaea8ef54144d26c81ef3caf2e103f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "59a5d88935410f1bfd26148dc8922c4f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "c930b07e06ee8cdc09a0f3c1d5129bb4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "e9a9bea007a66f14f1a8e1d5604d4c41"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "edf0b39eff057fc75b3a6c563c682a93"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "22c490a325233c545f8bdc1d1ea7a6be"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "7f84f4141da516fad5bf2d0285a30935"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "b58efca8a26177b2378bf0943c28b268"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "fd09677fdb730fe3b62a85536d0751df"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "02f69160828ecda5ebbbb6186499e65d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "678ca8306fb9c0a95c5d442311508d53"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "e3224e806affba0cd804104b05c3ac3b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "d69ca60b42caf87cfe3a992c5959039c"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "eb03893c74437909dcc06d2141634eda"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "903e9b2aba43a141e8aad776c72bcc09"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "74fcb48c5cbab34c6059944256d0f465"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "4fa113caea6fed377b745ea6ad1138f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "6dbe0ba64dbe21d9a1029169737f8bda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "f64c9129d0b2745c1a574077267cfa3e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "ad66c4ff986e12170ca8ec2ffebe498d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "3c63535f6be11dcb9dd78f30451e4429"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "6f16bd5110f21d6b15273730db46fcf8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "df2ab2098e4655c41e4bf34e289959ae"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "a78c02705f99105f0d784741ef8872f6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "ae99ddfe0dbecacbc18a7ce076b74561"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "e7ea06c9fcf391880bdefcf9107cc149"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "76babce56801a32d3fe87069f9eb8326"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "daaa254f957909a38fad64af6ff9e456"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "81ab681848826dd417496bc7bd957756"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "41511e0e116ad11af59e771e61398c17"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "191054196583f9e9dc97b076788d334d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "dfad2cd1b12a96756bf331e1d1aaa63c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "a5723f73f3c27c5631dedcd965d00609"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "a94c79d2f095ea44daf276bac27cb29b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "7ef3b378adbb91e3bf3f45beb068932e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "475106892f9121d534e8fcc3d927c55c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "56372979002c5c3bd5e3904050dcd5fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "9e35e6b2f321d7d1086e6b33a3d6d52a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "dc56415d42157632676c25d4cd68d9e7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "4219e1518bcf5d88e0ad9511d2bb33c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "ffe0d02d3fe4635fc88e0643a5ba41cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "f204490b4c973d49ec0f7d420b140626"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "799d861413704a3f7279bd82eb31f63e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "5e9c850109e3cfcc17d2faa3f639522b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "bff2dc995ec617e23f07106e9805fd27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "d4b3825e927635690d08ec2c548b3234"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "0658ef662f67126664f40538db1cb80f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "cde1bc309c97cc2cd0a0f5d81f4f4c5b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "1cf928f588c7954b8dbc0bbd8d9672f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "71a5cd81e60c5711e49798be6452ee4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "289ef068e598cfbf23a85e1b3f67d1aa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "86427070022aea83f5bcf3554c772b01"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "c9e4d1e0ef57a6f204d529b7390a56e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "5f70ad5a95a6e10782e4b18c9125c747"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "fb16b9f6dfa4c6d2fd92958d030c4737"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c76c35eff1f18edb7888dbb70c699296"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "90ed92941a954b22bf5e095dd7f9e740"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "b099d470631ec8410aabb3beff186c20"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "542e570dd60211bb5c03a70eb6ab7d15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "15ccfb58519d7c56dbb280329e09facf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "daefd268b90b1ce12399cfd4f4afb282"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "d55fabb70d2c4a3398f6a7dfa40d52bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "3b0f0296f7e7ea72ded58a8feeb7e1cd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "27567b2b3b4f1b3fd78c05b4a298cf88"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "bcb3f11660f1c26b2303403806d49962"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "dca545c3e1adf2871d1c4dcde8dc2705"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "c677b44d9fc0c9d47561ec3deada3168"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "a96feb58499e577df5779a3f968923be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "5965a45e3c4566306f1603858418ed3a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "86ca6e1bb06b4570b23fdbf5a3453504"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "67b4421c2a745a6efba3687f9c4f19cb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "dff2168db5f450e99509aa224347358b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "a08b187b792f875a4d764c9cb2621683"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "f297b4f72d19c142f601c3488c462440"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "59ebb6871e7d8d27ae31f7521703d7a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "faae9ee27594589e7bf5e587c35f423c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "faa1550286a889fcf9c50733d41b412e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "6e8de739bb7a72d0dfa23ce863f6ec03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "014b1118ce05c6e74e4c44be4add5f66"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "dcf669bf134a0e98f6b8a4a1ff549426"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "1af142b38bb9ea52491fee3c73cc3676"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "b1f3b743880f979c6635dd805e031d7d"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "e5c8c7a558e007feae8977fbd6e6536f"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "b9a35f261de4f991921930f8805e89d7"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "2ee1b1a6528181263b6d06ef41e0725b"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "2b0be88282263983faac355bfe835ad2"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ae922db78fcd3fe691f175b4401a5ebc"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "ece77f33799dbf931eb9a5c22dc242e2"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "b166eb31b71329cbd94a48e1a5931df0"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "2251104110933a73b9a39233281afc48"
  },
  {
    "url": "categories/index.html",
    "revision": "69e8a4cf81439bff6524c00a121a1029"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "2b6f4c4f8cf56ead52600b4707fe7dd2"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "247a439e9c6367899e97c173c42bbc10"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "cfebf1a37f1d58b72eb10dadf0610ec7"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "d42d645295c809054bd5126769cda43a"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "4a23cd2f68f504051fc8d7b665ab3a72"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "c8e46fb3a0cf4c2cc8da9adc3cc71bf0"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "674099f8a1158e0fb1ce0444391d32da"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "2f28f46a25dd4317bd3d7d0808beb01e"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "abfc6761c2b4e3c7bfe501f382fc5017"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "b29b6755f9bbbd2a454ee4ec5a04c698"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "38d86a4c715f54f101cd63628d7bcd59"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "a6bf952df47c2e0e071b3e66c995770f"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "b34d86355d4bef20c25b4f264c668332"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "eb40807e5c299fdcc466e89074d4c0ec"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "a1efc18259a950ec98cc11edf0207623"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "acc084bb39f9d3d0df9a28c9feac0026"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "b266dd4e5bbcfe425643d84f90f5fdee"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "3c265cc358924d4aa7e3f0b2cfb1c363"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "813d4fd28eab89384d1f029318117625"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "b9d885544147376ed1c4e9567170cb4a"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "7f406cc98ca1078ac314ced701db067c"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "f675ac9e4dfa2a1dd91cd6112df9e540"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "14d96f281639421ced5547e38801303f"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "fec9a9d585274276568f13eda3ddb54b"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "a21801cd3db7c0bbe7823050e2bf7df6"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "9d579603be301c53565be4f73dd0bb8c"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "6880352db078afbef5b0259513fd456b"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "6e530256bc4753381e299bfe4e7c7fea"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "5e09935b864c25af3391b5604da984a1"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "c9aece9674bcef81eb33120f07250754"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "6171095bf15348be47acc8670bedd191"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "462d6ab4c15af9930f6a70cb62c3fa44"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "8b888db0ca56cc8f5ea3af8a56a51e8d"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "a13cdc85d62b2ffe6bc7e592554f664b"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "5eddac9957e28cc0284f9aa5b507eddf"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "c7e5b3199b4464f7710d5663f1747591"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "e4607eff0063cd52a2d1b3127c27c3bc"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "85a3e3b0da8c94c6b921c699e730ba70"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "e8d1eb12d6fad373c1e66d179009c5d7"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "39f6a166d2823eff551e7d534241ad86"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "85f34566c190678734e349b07bde5a32"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "20ac980d5568a352387ffffcf22cb3bb"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "85e17832dec0cd2200224f04cd888a61"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "62f83e9e596a998ca994db660475c684"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "4a35f49fb43a51b84cd2b79654d3f9c1"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "f71fb8b4ab810cefc87feae4881c9717"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "de1cc3197dae42310dd6598b341778e7"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "7439272cdd6fec35c843a17bc2b7ded1"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "053dfd84eded3667bae3a1b45ecfce22"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "9346b3627f8ad08bacdf5d8c5b4bf710"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "e042835d589f6384cb619042a985c653"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "8129cdd2edb5eeb0f72309560be51233"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "d192d1b35895a1f3a0b95b520fcf08d2"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "02e3a98b092856f5180be9f980aa9c3b"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "c38ded0c0cf3ee46f89fe39524a58429"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "935b91833634bf2a52ed8c536e7b403b"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "92aa88bf94cb0eba38c0b551b465146c"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "508b0aebc7c8969b646e91eb26c4bc8e"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "bc60217cdcc0d019130fa662f612b38d"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "622738ed65fdf929724a7aefddd98b32"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "af54b147e37c02752107deac3293b38c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "2404baca462da6103b28f348986896c9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "3faab03fce7b56b2ef031da074be709c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "dd4ef1a7a5ac1db3fa6e18e65fa133ba"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "60c346a1650c7eb925b5c8aec6d4cd69"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "5c17e4b2611d255c1936ee9e4fa42061"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "7df2b39de736938ed6c398e1ec6beb1b"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "1bde20e5178905f2e84cfb48d0d73c50"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "8b221be43d1212612cf2e6072a5e270d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "42625d7ad49ced62e76710efdf3f5ffb"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "ab19ca0ac234483d005f15d628769fa3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "75bf6ffd68098fb48541237803b519ff"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "8fb22ce76bc6d3c6825d2ee4a69d44fe"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "1c3725d3e4f3098987a4b89794efea4e"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "5800455e43b75ae35d427fd51c2d1ae5"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "38af1f857361343f550757b95eebf923"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "b707e215441a528c2d6de0d855d7c028"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "f31914189191941a80eb77f57a7101bb"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "08b512b54a41f9f042c008ace422e51d"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "4e8de3672538038102b9cd2dd4e3a9ea"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "4d452cfab6b32a22626ce75e9ad2188f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "bb053467229aebc002d23621252c94ab"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "b38742750a4d2cad778b2b862dd9cebc"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "7536bc758025c73dbb664063de197d61"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "b2774e18f17b2d41846c6e5509a2d434"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "fde07c227be01cfe4fbe63a837c6eae5"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "1348cbfb938ea89f35f33edc75902b6f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "6f24aeba3d2e21d9a2dbf89e4a8d488e"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "e951a614edd0fc6e2810b5f636b36dc0"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "feb3da8b1db95deca2bf5ae4bf9da13c"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "c885112328b2fa244c2414dcd3b65a3e"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "1dc07edb362f719d4ab18f8272a93d30"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "5e62f55cecea2abb2af5f85286b5080e"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "7aa03f54467c244fe8ebe2bf6f79cde3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "cf1e38273380b8cfdf11a5f65bcb3056"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "4768688af24c9527d6616ca01970dc47"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "fcf07036afd2e7c0ce626addced71f9a"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "759a5b3319b9bf6c6e21dce72330d348"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "e87430bf695d01e2e5395b4d8b57ea85"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "697db21a0ced0f8bf12a6fc19d51ad5a"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "905e5c666a2de16d761425b57859e58e"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "49d98ec215a1b2255fa412133efd89d0"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "4e06fe09f861626f4024ffba705d4c72"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "476fbacbeec07d897cb6608a7d0cc072"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "bdf48df41dc2b3ccc9ffb7e2e03d0153"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "36e31f3b29d1ac334fa0d734d50cb5d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "c577344adaa466946f4d98948f5443d6"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "74e2056681affde61c270bdd74a5ce71"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "09d3e91bb83b806aed0739936b9bbf94"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8ff59e80433fffea5c60fcb6f8a3a1d2"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "e38305ccc9acc3bd3cb00057cd15253b"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "686d5d5d6d3f6dd7d1ddbf0357143bce"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "cb881dbbf37da4d95bc09c6422895f99"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "48692801891d23ba61805c367e162c78"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "7d16509f42e16edf2ec414b6f1f3370e"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "fdcefcc0d8eca80524c0a2898363d044"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "2f2626ca7c1e4686e3230b602b5a1113"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "5600f84a2aeeabdb16f41e28e5b3b74b"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "d6773833f58c8237d892d2d02fb58b4a"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "9432b04d7489cbf03ec7a8a87686d241"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "460f9a594e5ad6fcf55d474c639ec7e5"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "780dc605f6f321e4dbee769ccae0bac5"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "b78904a1ec499e4240c844142b9fca15"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "26297d187fe970b0cc49d89dab852765"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "e0f4dd40c7bcc10e1b00d02af262c97d"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "cfedcca3bd3abeefd4f9535b3b1efee4"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "efc3460ae4b9d56afdd9c14b15824b38"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "077f009fcee0b64109dda1d3d95bd3cb"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "91f92095995d7f519aa50932784ad774"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "f410444b581672e02b85166609953502"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "2ec79a050b0b0152d4c790ef160a261d"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "8fbd236fc78a4616c19e276d83bd7260"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "9110dc9bddc94122d1b61070831c95d8"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "2dcaf3a32edce6966ac74b7ef9b51501"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "8723faa06ef56e3ce11ea5fe9b08f844"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "6bae55b3c19de2df92bb32c92ee3d973"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "f85e8be9aedc2c07730d210995a52507"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "0a12541b1af4df1afcb2756fc588e218"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b0b76735ae99749dabd519b7cc43191b"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "7f3924c132cfe273d40ee48b31b74a13"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "13fe8ecfa6cf22bc800feda9449e07c6"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "bc35b0ad1ddadab7f699e67e44ce5627"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "2eaf25fccbe4b79e86d96a4c7b1acc99"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "5e2917ceda2b453219d98fafcf16e90a"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "8b035765cc414a1f25711aabc91952c9"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "439c6fba2d5fb304cf81288ee37a9b83"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "6e2206525505e871a8facf8d54dd1b32"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "b344df6ca6f220123401dfc83e0793ea"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "3fdb03ce3d05f16a1b8bdd2c725c962f"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "3d164a888e22336bfb34e5006c4ddc3a"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "b1f69a52c6e9167ef7a440859d09cdbc"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "f415d978aa17b663d3ed95547fc9ef9d"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "aba8544fed9c3111cff28eda53c8cbbb"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "2dff86469849e360840ec1217fe2a877"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "a2cb1b323e9cb566085c7b76813924cb"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "5ee6725353c87887a51bbad30b70a22d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "7cdc5aeb72b6529b5d609141ee0c1541"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "bc00018f2f8e8b7f3f421c85f53fcd78"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "9c5e80ce72b7aaf448525e164e32e36c"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "4bb91d78f4f0a62e27dabe17f44f544d"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "d72976dad42d6906d79248dec3052b3d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "4c7728873b9449b0f3d9b3d19a6a2f55"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "b18e34e8e93c727b95f3e8f91b260326"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "efe0d9d8f59441ab24f1fb1428d65748"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "775fb1d29de95703c2f797a1fbf65b52"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "3ef6c55fd5c4cabd3f38527f040674d7"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "b0b35a139b54ed0f4394c0116dec865a"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "dc79ab4900ee43134d39e5ee198bcd6f"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "4785faa2717549d7d2888cf35f262fbb"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "b86f51292b5b1893c9344a1a1acee24d"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "e39b31fc7abca6d46a0bfebd0f033db9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "dcf686cc06eaa5c1cc255d6f081b6c05"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "7bd1cb498e92cfde6f72561f7847f80f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "74b33e6d2e858b42640e36f8ae34d584"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "2ef26c7b433e9e3e465a7e80e038c1ef"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "bca9623ec8ab07992f9f9ca49a8604a5"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "190f8a7dc925f2cd996ee123731dd417"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "8aae321d7077e66402d34cd3d6d439ed"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "f3aef6a54b68876d4d7a4abf9001f667"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "b5970cb1cf3c120d9502df8e101430bb"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "91cd6545df1098a4f142a4eb550f1a50"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "b3225bab88beb460b0cba35b01e1aec4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "03ea11e63e1fb8664ac2f04df1e54dd2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "d777d9515c71585d0147d2453bd541d4"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "5dc2b31d347e4c8ddfb5b247b33c7301"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "632d18aead396a9741f909f8d540a57f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "6a9c115ede8020061207d5c921ff4667"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "1b19490d16681df4db7656b620fd7ca7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "d0d9ecf22e1ac20e946b31438556f85f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "a23412085c833711c92cf5f2b5aa9087"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "a2bc27f264913bb8e95bd8b07a604e86"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "f6fb67937e24fc6d8624f07ff95dbe28"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "370e68bbbf34b6bc4afee220adaad347"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "b3d5beb4d4b2fefc79273baf7ec084d5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "2782c7c43ac24a0e77b13a7b72a14680"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "f26d64c8c778ff479da2c987c2f92939"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "7ae0667872314b4fd2cdb4a980c754e1"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "4295daae6ea3462bfe64e9502a162f22"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "bb8b70dc708a29bdda223ce4fea6b19e"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "8b0a5bd948066cf641d8e54134f6e5bb"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "eaab9a80e09eac5a7c981ed8c0b54a6e"
  },
  {
    "url": "categories/os/index.html",
    "revision": "86f6823614bdd9133f6ce0716fbc9c97"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "fc418be32a488762b38b0e1f1f072d08"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "fc99db7401b7086487a6f6308ac5cae3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "96ffa41cd55dc6b2073a053bcf7d16f6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "9ad14c47fabdf7a320978832c9be5d9a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "c7ef90534960505784d6885168ffc774"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "7669caab7f3d0623c776170c3a5282d0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "469bb0d7413f60fc26a8f2dd9432abe5"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "0b3458c5ff0b53e14794b2c6f209d776"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "639b78672ad4cd65e5d5ff8e3f215b9b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "fc2f25311570c0e7bb0fb4bf4a6eadf2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "6d9efcea265bac6dbc7ab9c8fc376eec"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "0a905d63f698a208445e7dffe909f21f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "5da8400b5ef8651f926064d1185958bf"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "9566455d105b158327cd0978049e941b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "513dae79ee9c2e35cc10d6a52f1f8d32"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "a9379cf7227bf966daa752f02ce4629d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "55ac278eef5083f7bd498d638070979b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "e0320e930e4f3d5c028d0f2e1a25bbff"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "e6b38c42ba4ed76ac330b0b47a629eae"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "036f0c0942376bb40f0b5ab664f3c13d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "82d4f1f9e87fe4b6da67257b22249673"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "3e6857318628589289683d7e2443e31e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "44c854f19c319d9ede4c88ace5816f84"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "044fa6bce0868a182ab65caae08ae02e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "b47393d5f15922d98b3db6fcd350d05e"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "9a0497a62700198de7e591a85cf9b222"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "d23ccd6538e82913a9303082f1be738d"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "c1bb31c2e45b04fab208216589d4cd7b"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "413f8c67854829bcdc7a92bd2f2a185c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "bee2f4dbb3943f9ee27b89b45247d75f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "19b3755e2dfa7de196b3e6bb2102ec5f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "1ce9f7ee9b44377ef2bee2c102d58362"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "2e061ec91ec30e412f5cebd93e28c397"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "e96d215db367d5fb0441b2091ea476ad"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "bca35bf7bfebaf6c082f8bc6d5cc6fa7"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "df41c2880fe71873e8807aee7531256c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "31f14c9c32ceb72a7a5258dda809e590"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "b27fbb6408c2c469dce563dae316c3c3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "6354ec8c12a7dcedcb9333dc3af0504e"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "52c5b47e5a64a97f3c22352c50aac242"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "e6d6d4a5b3e66235d7ad41fdb3c7ec59"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "5aedb611ee2464b290363150fcfdeebb"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "e307e7d905e5b0807e7ae026d119c8f5"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "e8815d3066a8155e7715261e195018ee"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "4f2b3c1ce84fd3e716888183cd8d49c6"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "95f31a217a0eedddcf816dadda5358c7"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "8343946b3a762ae36a7a093b1f4fa840"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "e5b6f2d4a50b471b5131322b68cd1827"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "b3df46a0066059e30ae6e840f4f12459"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "0c91d18b1577b7bc640e005aac297715"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "b9daef8a32e9ad1732f406a2c2b6b65f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "37eae694f40a7d665a2ea9257e3c3360"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "c1ce1193f055bcd4b231199974840c15"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "fb8cda1208364e61c96c3d00c4ffb2b1"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "ecdcd8aa42ed5226d9a896d4f3ce7f41"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "558962351197f31d2d36c8d538f1d3f3"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "773cd6841583467a2e27a8e34787acdc"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "d7f0eaf783a5ed9091e1066248c82056"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "a601359a67e70b0c935544b28ee90618"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "0c624d059219ba89767ffee44a745e22"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c9263e1e2570b5edc85b0f1ae0b534f9"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "30131cbcaa4254fa020f66c1fbd56f6e"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "fc95b775093cf05a99af5dbfdfe52cf3"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "b62cfe650a1b1ac2df60452cfb265811"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "6ae9514fa446e6add34d7f2f6341be84"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "04d9c6c948ffbe656848571d70e305f5"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "15053ffe57423321ffbca22dbf8bb4b7"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "22dcc9a7e15b65c548f05f98e1274f53"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "c518563aff4a07d81b65c6436d332e22"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "8f1d6531e61681527d73dc138c28bf75"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "757accc5b51ca95db3c5a2dafbc03cfe"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "2031a727b5565c66920122b1ad13ad5c"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "69decf21df6f98642abf42378225c7cb"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "cf21bc30fbe1cde3f767f0024e941c57"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "24ce879c252f0e31b06953f808f8f3df"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "1e8cfa48dd591f8cf73f35e3f0c22fda"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "f358ecc57dd3c3e5b7bda56b71a3ba5c"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "57ab41d94a19eb56baa1209bbdce41e2"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "7e34cfc6d32853df660c0daca090b06c"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "43098072a428fc04da365ebd70142286"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "2de6febc6a1393a223a210e72b4a89d6"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "cf848d7515f3b3ad687b035ce0e9e22b"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "a5bc8a5a4651520f0914bb1b42db511c"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "317e7fd125a2f93819cb04574fa09c44"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "b5d3c96250124a420ed231a2b2a1cf33"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "a958bca28ae5360182166535cd0b22b8"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "f129052d4a2a316c77b98160f243702e"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "0b2b00cd61f6a487cfc2173c78aee203"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "83b2288a624de72db47eeaed091231f9"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "17a1046600dd12007cb7b278647d9fe9"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "dbd32a20c1000601687f21485a5594b2"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "512e369c9c0a6907ce8507445f3ffc38"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "111c554b77c6763bd9357b7c97c7161d"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "02e8da45f9f499b69240799ca877d0a6"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "a44c79a2eaabfcff3773a97549401830"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "d276cf4bd73d090521566bfb3a6d1cce"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "bbdacfa0ec6d9be6672d2666002655eb"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "ddcea50909426ce8b48fb3a44a49f782"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "99537e250ed3605253e04b694e18cf97"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "4461704383bc0416a105a9fa2e9523b9"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "c39a321637776bebd3e258d84bc5e785"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "ee2d97473f7331033ddcc2997db47083"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "c8f7489d4c168f15be32e928ca97b452"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "aac789ec3dc6a8d43332b7ec418d9e6e"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "8132db0695beca8aea2d17ecd97a2217"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "13d48110905123cc5cdfbec8af116aa2"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "b945a8102795f1bfd9a870d0f4db352b"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "7692432f2efc9669f48b299091bd6c8b"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "077861c43a0e50725f886ee1545670f5"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "8d24218cd5538f14585f6a5c71f6b431"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "770c9f7208b17dea4f3d6ead40d2c987"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "910e3f44705efc1c7580465b5f43fae9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "6b112b70965475ade16b0c4073ead4d1"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "bf4abb6933e1ddf02b9035a680d67a46"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "a4791c0752b42b391b1bcc0d11f5e4e8"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "d4f95dc2ce4a132818eb8852ccdf1e2b"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "109abcf3c349a06bfcd48ac957ad57cf"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "c9a6d8d3ab4cd47d12ceed64c75bc2d4"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "babb04b9523378a93614baa50cd0f10d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "a8a1b08e2bfed6d5fc8828a5fc9aac53"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "4d0ad1506831a9848a29eaa62d6c830d"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "0625eca53170676526a492fb919ffde8"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "b1e50cb3aaa805756aef38b28473093b"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5d3fae0f2b0500de58fe0c9854777d69"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "c3c2ac897225ddbeb9e6d6afcb573d51"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "54e9735f4ca6b7be96e7c397a238ab13"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "a23e7e4a1ef800e82c2ee1d348cfe0ee"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "2410d9a63aff3aceab6c88fa97b078c7"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "dd8bea8ea4afb3d684748f9d7605e1fc"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "f3ea357152820e3e62e458f482b6708c"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "38d034bc0b39427476399cfe71a83842"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "c1ba8b2830e8a0e5c5644c70fc8b0242"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "b6c2eb62c70d688a963629ad83730582"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "3eb9cb89ab499043bb9c254bce1eb8fe"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "aa066fa803b9cbf565cd812fedc69cda"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "631eea6165da7b0ac8e103ae1874988b"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "19598b96f33748dea70b5568ff83beb2"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "50588208555c804e9cdccc31a572f6cf"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "cd151dd9654d52532476900055068685"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "9ba043a0c6a1b990deb26b10e9b39e3a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "bdaba8d2f6552450fecee87878b35029"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "b3ec4d9a4d7df208a6c3b9ed36485a8b"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "51042168e66efdaac5c124482e6b68e8"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "78eb87bba54f1baddde65bbab5c81d95"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "80d380c6f566636286a101835b27fb45"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "ea10033885739b11e895e1293699f8c0"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "49fe7fbd627ee6687679a74287c5e68f"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "0c12fabb27f7f0b9eca7c21417a72e66"
  },
  {
    "url": "categories/php/index.html",
    "revision": "535f65745e8ddeafef12b6d521ebaa71"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "7ae4dd6d2c6111403ed42b2e5e7e3a1c"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "9670f891218c32e3504292489720186c"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "a9b05f3193b9bdd2be77f4f0a84e236c"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "cd8764db9543f32d16a289424f3cd232"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "8ce0cf80b02f1af62332727746aaaf40"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "989ea3ef34f7126a567154ac5a9c0a65"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "67ad16c4b1438f2d11d493b5ae1ec005"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "891cba501003329fe6f4c9a3a06626ec"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "932aeb083cd6170e70582101bf412e5a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "d3da35bbb7ed8f4d05531ccd56da9435"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "3926722543e09a1a5a4254b956e80836"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "f386de08cc7e693b5d3d5628f5fc088e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "40d0cc9c74e234fc785de625fe61e2fe"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "73166263b8641d98ec45ed861bcf489c"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "68fb3f8d7ba234c4ff6d405b126e98b7"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "29d1f067a6fc6c55330413249063de7e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "09b9693194f2c581fdea02761b6da665"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "2e367e3dbf8d31632847c53047cd7079"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "933ca70e80f538c3578d22e1aab8ff35"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "91bba70f538e64bc7e95e98009cb169a"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "e83aba4cd7461bd9ddbecc33194c876b"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "dde65c1c53c67881c2914af8f487d700"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "232fd3ec4073afb769ee9dd72ef92f92"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "4d9561555f0d0704d6c52eb892f2aa4c"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "167f3b278e52100bf8ea32745f5d4109"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "87e200590f533041d0d222b50ec5643e"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "9b7f2a985236c5a94f11eab06018d110"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "d6f3aec22e5865645fe61e2e7faca908"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "2189a3ca3d574e49a4274281c82a24d4"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "fd8ff30c5bdb1f066881165b06172451"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "b08bf887fbbe006630e9d7f8ce1d6b27"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "e517426240d3d5e24881a98d448fcb9f"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "f3cb41024466ae46803e1de39c7ff9c0"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "572d21796e4fd6bc847a99a3b3caac1c"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6a33a319ca081b83ec83d8d82c6d76b0"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "2fd6dc6ba453cb16e332720b436ef970"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "54ebb4fba2974009a35ed774e81afe62"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "e027ff6e28abf1263d70a589d79f477a"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "5ea78b627c6f19505b6fb354c35633c6"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "1f88ddbd93313ea743b4688fdbcce4af"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "b4210551f78274c97974c646677fc61d"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "c73926560cb5115493d5bf9e07a12c7b"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "74f0f894668ce8b5963bdb6823a54cd9"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "d24f87a212f3314528497a7193e198b4"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "f894148b994a7eff576cccd9d7c70258"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "eed55b1072af095bef6513de48241a91"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "3c79a519869ec46039d89daad8342649"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "66dd50735b0d278be952a215f12e7d30"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "33676a9b906abf7c26b2be3d5081e404"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "6e5bc431480c10a4416faa5f875400fc"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "d4819b1c7bf264eea63b5c4d8314d57c"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "e9a5c5e01e47c4eb72ee8a9059f45b27"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "4e744295ecaaf56f98bd0d1c42c478fc"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "371ebffd4a7733daf9d0e4e5ec6ffc45"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "22ee7b37e19b1ea545c17b3221fc86e2"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "6e3a8ff005c4d55add12590043164466"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "10bd25579bd5e1a749df57844854ff9c"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "9ccc5af036e6b434096209f2b2cc3990"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "9ff7aaa63ca9b59443a347bdf01038ae"
  },
  {
    "url": "categories/python/index.html",
    "revision": "4c7a17f875de22bda1a0a1dcbbae30d1"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "52f443d6702762549caad42c77098876"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "4dee7931fdd5a680ef28e4c30dff04bf"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "cc807f1d362a5111a4099de372e5cc52"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "a3aeaec6964e920f2ca4a2fabaa296b8"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "28af21eaa1677f7b8046afe9b82ba2fd"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "81f1d426866377a6a835c005652e1114"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "e2abf2fbf961c0a1164587bf6e45f83c"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "f956c7d186dd116770d6b74683fcbfcf"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "a9cdb7028135386bd3daa2a82c5ee11f"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "eab263f6055e03c2921b4b514adc74a3"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "7dee8579852f957d87bd751373787c73"
  },
  {
    "url": "categories/system/index.html",
    "revision": "c051488bcc7b72c7092096641710d1b7"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "b3b9dfaa9d638c2af79477950f4d9fc1"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "d16eed4b0d42d7017db27c6493956a38"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "6a38aacb2db5d978c12e7572ec4997dd"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "0a74fd8d821c7d79c998a49cbfb7ff58"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "af1922aa2ec9a4871897f13e11d20e4b"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "6a04825783d23356ee2e9f92f0aab9d1"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "be54cd869c1f8c2620366a912315feb9"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "333159b41a6023b7800a7b52e49be3d9"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "4626e525fad00272c004310effd869d8"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "2bded864bf7285adf40a51428735c647"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "162eb0a5fc592f949c17aa3ef7765d3e"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "26bc3a71655172ce21cb84a31ffdd311"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "a32bfd003c57e7a1bc29bfa8f0ad73dc"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "dc7ea7def706cca588da8f2ededfcd76"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "0f16aee3fec3f63c20036280bc63645f"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "8a130aeb8cd8bc82020535d5e3c2b819"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "86a64ceaa9093007491e45d6c9168b56"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "7b45e08281db893507b223f4208ec95d"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "0b299eeed87fd8464476a3b5f19ae92b"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "27e6e357ef374dfa4008bb31ed8769ed"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "c78dfb3f6bf040a27592b23f6faaf539"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "36610748d81f8e29c0ec33c72f987878"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "3cecaac0cecf5f4e233a91f6f6c8c4d4"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "3e1bdde484d00d97df7df14c94a58270"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "30eed66dfda401d7b32c7e37b550cb40"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "78d13864032306ff7cc74c0a6498e250"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "8fb203404589497e5ff605d16954c396"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "492cccd8ae456ef322e5ffdc5b2a90d2"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "0c5686c51e31ce7a6376a48276e5c01f"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "213ec8b10d1042155a88644fffa62520"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "f02aabc79c871c1b17a8c54ea11a0822"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "387d64d7996ebc4b3997d196faf3f451"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "fe2bd52b769d4819c77f2fb7f97e170b"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "7e17c42c52b483e374c001af8bf48616"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "21789b5012f624412086a90bb5817d89"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "9a74699d8393108c89ea0465cf03515d"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "4da5031d4512e071c4b98ebdfebf5439"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "13f9742329a7b4b2c6f9041d51a8aee5"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "2bbff5af79aea9ade98ab888adb03aca"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "5258be0f6f9cbec48ec18962b929a42d"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "e7b3eba7cef9de98cef662e000a72935"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "daea4aaa827e15254ceb925848abe651"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "bed5f3e359a762ca17e7b7660dd14fb7"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "fa76cd0446ba9d46cca2f523b33e9afb"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "ec6f08803f71a02c21fd8eadf96f4581"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "a38c672ad4207dd17adecf318fc48c76"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "ab75bea7e0c8d9b90881fc8cf939e0b3"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "6a2532c8be10ebb4d87babd04a6dfcca"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "31f44298ac1fd520cfa686cad1ca65fe"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "4cc5984663742b96c6345fc2e7da7900"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "b10c3dbf747f40b523dd33f9c1dcc1d6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "e438a484a58ec0758c542be4882612e1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "cf2ca7bb421dd26e31f196351a96d2b9"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "09d6f96185e4dc4d246166496e01da93"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "f0cf96b2fcc2650a4654f0a37059be4e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "64700d08ece07de1f5a7e0f20a61504c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "c3ee739ad3cb7586073a9ac8cc3fa769"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "a4df7d6130896a0619d108e1c9d17a64"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "c7bb7732c74084912e4c02d4e700c8b5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "255a01e4421ac056f9449e1050f2c963"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "3e24545a75e7c82bfea33813526da5c1"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "144b83a1705e6a2f629fd8dcee715417"
  },
  {
    "url": "favorite/index.html",
    "revision": "57d2668d7557add68cc8ba477e150b1b"
  },
  {
    "url": "index.html",
    "revision": "6a7529f31aa4dd9f42f6a5bd93943084"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "1a91fa457da70f74a6da192e7fb3e1b9"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "f8dedfb668f8aa15731b430b009e55dd"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "fdc61221c310051a10f837851e7e3761"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "fa02a7e65a0565a8bf8129143cbf2d02"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "741c38bb2f541e3d6b538f7daac38b8d"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "a01766ceb956bac15e30ab2efceaa1e7"
  },
  {
    "url": "note/index.html",
    "revision": "159e10a170fe557673da000db67816d6"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "827463454002ee31160ebf430016c915"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "133982c3956a0f159d2724dd2e38e308"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "057eecdf3df35e273b56d3ea8697a894"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "bd167ba6d7dcbfcf6cc66c5e104dc64f"
  },
  {
    "url": "share/index.html",
    "revision": "ac05002d25da3dddbaff2ea47948010d"
  },
  {
    "url": "single/about_me.html",
    "revision": "586adb59767c0701a789a087804e3496"
  },
  {
    "url": "single/all_article.html",
    "revision": "ec7395e513c8117c0f96bbfd426413d1"
  },
  {
    "url": "single/welcome.html",
    "revision": "cc7be9252dec2445f21372acc30b3551"
  },
  {
    "url": "test/index.html",
    "revision": "d888b5f5031b47c1e1e150edbda28f5c"
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
