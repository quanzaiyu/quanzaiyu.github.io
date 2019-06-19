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
    "revision": "8290e5c73ac36e7b046b29717d9c18bd"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "536601a42175d4ea8a5f3f561ac59e2e"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "64b9efabf61b6ab297205cc9b09d526e"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "de9ccf6d020635a473dee49ba23d3cb8"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "9b06e79e265cacb92b094170d10e60f3"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "478c81b97b254ef3f5bbcd71f061cea7"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "55c87e09ff76787007be11878f1a3fa3"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "18de51bf26363c89e6804c9ba9876494"
  },
  {
    "url": "articles/index.html",
    "revision": "cf745b7b652e7f9001417df2b111a7e0"
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
    "url": "assets/js/13.6eb93682.js",
    "revision": "ecfed83a5c1434a4a0c9345e2736af0c"
  },
  {
    "url": "assets/js/14.79c3b3c2.js",
    "revision": "346238bb8ef613e90ef1debee5052b92"
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
    "revision": "f8214e3bb4ed97145f1888d470668eba"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "8d8338519de41544e54013d0221c6ce6"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "591222bd31c6358b98dd89c30728718c"
  },
  {
    "url": "books/index.html",
    "revision": "69e9cce32fa617bfbaade13653fb8ceb"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "9c6b9bdb0d91ef3f71f0829be103d1a3"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "02acaa27ea63e4123c927fd11d32ab79"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "cb8e3aa233ccc20bb465d5e6edd47216"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "2acaba7124f58d0dab9ae70e9b9feb6d"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "3b32b6915ea7f96c95c7bd23a814a2aa"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "b2cffb9ddd383817b39ae3177be10b2b"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "9519ffbfa8564308024df76c3e63bdc5"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "4d4a36d7df13af4375fa46a8aceb9a2b"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "595994fefe7de26843bf49eca5066313"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "dca56d2b8a921cb71b33ed42bd5eef90"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "6477a6c7d2a93a6fce0b9fc73114c13d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "de97366f96de8a67d7778d3b679b58f3"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "40b89a907d198944d9b3875989353e06"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "6bc787ec92cac38d8bb508eb8e40ddce"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "8988a24b909d7a062c6b1e878c37ff8a"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "d5422af694e6d0362ae45fcdfbdded05"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "a32f08992798087b3aae51c7648c1c31"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "dd5a7dfd33ed708eae2d56dcbfebbb3e"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "698e63afd66e22aa4e0788513d5b0d1e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "d8bb9fec664e193aed813b136a6370cb"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "08f8e86b3001d41fb663953ab7404267"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "dfd777ca46f49e9defe21b7d502ce710"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "053b402d677e47a815bf128e3fab85dc"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "5b96f27d2565c53f30fca27542fad585"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "79b21396bf0deff0b7415fac000c7181"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "219954144a63257fa95aa34623e19857"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "36b3da10e11f9fc25b6c8b57c3b4f403"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "655e7f03f7143ca8c84fbfacbea31631"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "ecd8eeda583fff95fb158438479062a4"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "6d1f42e9be9863804bc287a78e257fa5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "17a713eaaf51e000defc3942bbf5382d"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "d96e95ea8917e85926f167897001f31b"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "1d7ab1b68cd3d6e374092a6bc18339cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "18411bb156ac158a5de25e791528347a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "2306f1e9aa0504aa06c679b143e69972"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "8ee7548917f4636fde39a9471c950136"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "71e2adde49d8f8119b8e52af92e3a631"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "6db5ec1d1ed70755a664dbb80c5c734d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "8cb9b4aba4428a1c4de11d08f9d230d6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "a1065254b3be16f6e35977772a3175af"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "6ee929860cce2af643009acd4cd98ada"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "ce5c700ec4ee903e0c93e338448e7c4a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "531684c00fba790793e135df6cf9b808"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e1006d3adeabd3023aab6283c6597ec9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "10676e257fb198df3e30d0e8dcfb508f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "42d27b9c44988248574c1892823db5db"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "7b60e3d1aff353fad10db56a039d05fe"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "7ce148ebaf9224317c34a5e538a72b60"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "b0e4f7c5fbc8333f8d3047671e396cc1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "4f4a9c4a4a1a25a684e175e10f21f5c5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "8067d06e00e77a2da8bfafbec6002342"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "378f24542891f0d516a022515fece271"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "e4c2c9dcca39ac46ea5b250faf4dcd8f"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "54236461010b0fbc8366d3d5712b7f79"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "8242e5780a7a2b20adf3eef7d4fadd3e"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "6d6507d68eb31d476a162f87a4b8015e"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "b5ee5da1efa119e0fdfeaa77d52ccb9f"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "c9aaec8bf8ea0b2a3ccf98ddc9a5e6d5"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "1957d41aef3e51326784a398ce4c4c11"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "466de82a9f80cd68977fa93051ffd2fa"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "09943425b9f546bd863b946ec4ed2dd4"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "ce9507fba1cdf7eda30dc1d4c0984860"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "97ef8b7bff8877fce2580507ee825073"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "49575774345986981c2286a81711dacf"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "6e7e6513d3ae23693cbba20949bb15ff"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "9f717a957001d6c00794898ce011e926"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "3a62a43f79bace37c2b3356e0fd85df0"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "850272bef2bf328308f86cdf4ec7da46"
  },
  {
    "url": "categories/database/index.html",
    "revision": "ee4c268fe3ff2202cfcef937901a7632"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "b5a2691df059e4dc3c293f7fc70506e7"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "a1efb9ba7610a7aa18837278858c7006"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "2d4c274ecc2bf35ce96c694fe686f913"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "430b6a18af1d86f8ee47b38dda5a7d39"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "02a592014014bf4c07e4b4000cb8fb49"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "e0c815dc016b0de15f5fa435335a2661"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "b7ff46750a905241e4f7508661825635"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "4ebf75949e63c923117645734903440f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "e6367469b25fc68864039bc0f66c8333"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "4e47836be03bf8fe359a9f6a1de406f5"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "0040f60e463f33092fe730fe9f72826a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "73a6b5d242525c9410cc192c22711fe8"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "038fe0a43aaaa8165651af6cd1ada5e0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "2fb6402f1496f81e9c05238cefacd50a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "853c18e3e7a4518453651ce7398c19fd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "74413c917d83a11c83c1fd5134ab8b80"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "c223a196c32b50ac7a1484ed2a7826d5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "d2c41b62b89e0830b8a986edf20312fa"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "ee5f87455cc2b55e5672e0058c415952"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "086df1f71b5d529670f2db6547eafe9a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "64a436e4619de519440ef6d5fab0e9c0"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "d71f3475d7fa11903cce90ac65a4a224"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "d682e7a1abb0f161e37186da3ae5140f"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "41e3d330122d0b14f3314541a6fd7fdf"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "4cfd01d71a3b1641d3f60bc2957abd97"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "63840bf07c2ae481bc92f35617f86898"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "9d0b5e15d76bbffaeb0e9fc619520c94"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "66da435f793e9c8831c5ece64a1c5b11"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "ffee22b88de8624e564af931abf6471b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "df36f592142bd165a638508e8ca82d20"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "e6f1872555015b2836028cf99e72c086"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "8bf38870be77aa0330cedd17262a2eb5"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "ebc57137c23f85bf87e65a2f3a666cde"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "8bbed7f4620047022abcbdd70134539e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "a0cbd841b4f8ebb1f41106074e9077fd"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "56eaf6ce99a395f71cb04a697e34b563"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "e5ff180d74b7ea5b7ddcce08adb783c2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "e3cfb028eae8305d6197edf4275b6ba9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "5aee806f5754d031bc6bee1532e22845"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "642a09aa405119adf5cffeeb068941fb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "63c4d93628cc2f0017d20f33e858cbba"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "0918b64f175f819183e0a7f447fd5467"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "4c1cc72d306da8458a0263f097c705cc"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "917dbcc133d831e8b8549c2f39387dce"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "ab4198e627e3a93c2820460615635f59"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "3229f98e38bf24aa9b7d30b5a37f7f24"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "1018eada867e61ff6eeed68e151f9ce3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "24225711d861045a89f70f39e3714682"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "cdac0b2789c93db61cc2da3e9c7acced"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "58c5fb83afb24ad08f2f868914eef5ee"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "b78b6d679e45b6ebf273331ae46803e5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "de178ee7f8a3d7cc2fab5e6353146536"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "c5081a1b8c59cc7c7f24109433da2243"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "fbe2162d23e7545be25c73bc090b212b"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "31e3173caef8be4a21de9d1a30dc1c8a"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "43d93a4d09e65df6e0242284fa8c472c"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "3c8f469769e5c5d47addafae77d999e9"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "bc21490c80f164b20136e2a0237fab6f"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "e34c802f9fc438638f73491900c6cce1"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "5fde80d6a2a974761181cf7402c407ba"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "efbd0dbc8d10ae87164e64729641b609"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "c10bc5f8d70357cf775da1ab047109af"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "c03f67ea342766d32faf4f7409c8b268"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5e33f17520251c507f62a23b5917b878"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "9f5187fcf50a112e016fbdd2fc465d4c"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "b7bdf96c0f09fef092f51aa05d393b6b"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "1035b5644681aab807adb305ab84bcdd"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "e8a6431db6ade171cc6177f6f4e5ceb2"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "819313422b1e7b444f75f2e83e1fa618"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "a2835e33b8d29b560141c716e843eace"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "c51eda93a33b01d9015a81e661bb9f2d"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "a274f9e8c5304c3b484ba5b272280940"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "28584942f3320f7e76ffac388fb2ef89"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "222cb43f50469ebc619d3d5dae1117e2"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "e39cb0d5a252246419ad2083f934b17b"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "74a19cd2641e28e3bcb54ce405a47f20"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "95426ece86e747a947723ad499572d66"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "e79c0010ec85200115604cfa76eba6c5"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "1b72b1ae78d943509fd9593c45abf4a5"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "2d1dd692eb68d766347f77319d97ea40"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "03fcc4b5570964b179c825980d78dc33"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "3d0d4fea416a1b1f7e70a1de697d51a9"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a29d9184e17dc4671c813dc178d30d13"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "b60f8eecfb64bf58ebfb2661f33d5881"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "444ed03b9ce736333afa57b8887bb3db"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "bdb68ea8b27ed725a2f581de64aa4262"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "15e5977a7d257063617ee6835671d509"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "dbdd6556c9ab33d07ef18a621980d552"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "b52a77160f9ce2160e427d54d9cc4ece"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "f347f44227cd401c36a871f0d758642c"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "dc6fd79b36f16fd3d631c87011f06731"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "8bc7a6b368442cb6921c6e935205535d"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "9f32d24fe5f340b030abd195416e2e0a"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "a82506b0a779507c31a3ec6bbca548af"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "49ce04bd23043822457323fa0a6434d5"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "adcbd3233cdb9ffac7d3fb831d9c8ca3"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "7e31e7eb59921c142737674d7bfabcc1"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "2e5768ab77e8bb8ca59119b02f02a225"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "b5d70418a2864caf0c61773fb2008fc1"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "cccc942ffcf386d59e81ab3b990fef12"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "306a962f6e71f46b284c35f99bf9d076"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "35dda1b7afa11887030e8357ea2daa61"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "70874d5be185b1422f72697fe258e9be"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "8b7bc07a02b944a6df78a97229ca5018"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "f3efa8764b4b2f2ee8cfea788d49e929"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "c128241b150a55f01eecc5552d2fa9ee"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "1bd9f221441ef2be0a5b0f8f13eef576"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "95f85c9cea01002dbd634d4866f36be6"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "e70a69c3755e0e51282d5a44437144fb"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "07e6efdb15332746677a5854b2d07b48"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "cf8ee70de26c451b935d4fe663763f1f"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "95cb503963ce99d4a2d169b509e20ba8"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "a9baaf186f2a2229bd949a97c1450e71"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "9f0622fe03170a74b70826fb9474e2f9"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "75cdab3a8cb5f8907b417024e50c956f"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "e2a4037ee3cd470ccd2cc2b422674763"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "0f4ffa6309f22bd7294452cb90a1ffa0"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ede1ec4cb6e411d2a61dc4d18afb8292"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "17601f64e044c1d324251c07a7a10c3b"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "b5a63cec255092a75699da834e949a3d"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "0b9dd25f9817fd0e21e133aeb76d6de3"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "382423a74900c93f3f34d31264090a84"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "5b9a1e4e17466de1145d47b2ce4bedb9"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "f6f6ee0d120ffa9c77e9fad3a565af30"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "dfcd8d1aed962e8db60ad55a0e1f5cdc"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "35f23f262e2701ef4d232a9c149422cc"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "992901412e9a19df6f4cfaffd08f0fcf"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "c67ff24c83a454347d6d77cb103745c0"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "3a78447841fb3f386a865993004f846d"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "1f8945f618a08e98493ab90c0bc6a69d"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "9652023beb3852442a2d28884d2d75cd"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "3fa6a9aeb0f41599493346d056960999"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "a460d90210f8fd4e47111299af85b0f6"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "03245637c405836f90a1ef004adcc755"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "e411caafbdf3b1c1aa85470053575dd1"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "a95022a98c8dd4e5165c2decb63f347b"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "95ba447d4c8daf4ce28efe855adfb112"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "ff6523b8403c54186cf5810a4555b9de"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "fec69e157ec04523e2a7ce71700ab9ad"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "15c023f88b6a26e6326a0027084bf301"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "8687152a9393f612513a4e8168a2faf7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "432377bf38de5f33a5da25fe125106cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "cbab8b374021591fafaee1e256117d7b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "a919dcf56416956f7ad48abcbb776edf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "9484e507a267c68157822463e59f0a96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "e280b80065e9fa20d7d2d337d68caaa7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "fd1470514883edbdc023db5489b76230"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "f4dfba924779a1ad9dd09aa22b15e502"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "72d2366b732bc89eda25130e403be678"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "801af5884ab60b4840c3c0ea2856b8b1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "25d87bd85a26e59b9520035c9771da53"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "0c9a18fe44043a5b87c968551566f99f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "b8ad5f873aac8dfc117ad363db3946d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "6c3e8891e71639d6079253b3ab17ee89"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "51c36197f998952444e5e79af3a24deb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "2dc6077d1e72899267881a49f51dde10"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "0cbdad7e9fbf5dc0d42d3560a2142913"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "19a34606113e8721cd281e53f2e7d2c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "dea024cdb1cc0e3ad018c888c140a2da"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "ea807e25af2f56bc128b17094b9f31f2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "84d8167a7335c30496d4133a15362953"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "7c5be2f7f60560b09a471b43f1f3cb1f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "9b5da2a7b817c9a7de206b900645df25"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "c882048e988e177a62c56e19f6f88d75"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "d4a01e3dad4bb2a3ffaeb82593c44bbc"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "b7b559c3554b99541fee7b74fc07f6c5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "45bb870b59ffba0fb42c8e9ba4888b6e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "3ea83a15898d95885a55f1a5736267cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "bf1983982ebf240adb881e9fa13c9c38"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "6d3984c97a8f1723155b87910b2e0190"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "d9c81b183a69a76f679ed75a7d59974c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "991ff6f91aa6a10aff594be93bb9b2a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "1babf048b293a3ffe6e0bd5079dedfce"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "925d774728e8232f95eec9c38adaa313"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "54f02878e460313682d9a116820af18c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "74ddf70626829afb48e7755eabbe9060"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "8c6cf36ea5aee1b7d189f69f64a6df3e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "198817980efbb9e33eed514bba57009b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "aeb09d71307709a7603c0896098215aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "2c6d09dea969cc10daab4b09906770fa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "fa224f979e112cbbacbea590d0a0adbb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "03a27e1b1db9d9682656a167e302d8ff"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "2f91feeb3030eb894c5f019910d1bb2e"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "5011b66e839734bb5855ffb748cde6d2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "1e60cd2634847c7df4ad4a9b82848f41"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "7d962ac3ad99c01ace9257db1f49ad67"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "819e057d459a6466b77fe9ee0bdd0cee"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "3e990f88b0345cb9eae25d9cb6ef85bd"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "fbb190cd8102eeece495cc0885246267"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "0b1f14d4ec099fde746e6d56a27cb8d0"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "9aace508a34d12423ab316ce43d912b9"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "f96548e60c41b35285a513aab1a202c6"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "510866ea97603f7e64f9e0b861865290"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "41516527050df7406464c0cfc475feb2"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "4ae5e3823b99c5b2c19b657d8f7e10ad"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "ff51a9a21d80b2b7a19119a68332d3ad"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "0c25037d647bc7550689303841ebf01a"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "65f13ed76b7fd05430cb29bf92b6c084"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "a7e0433e8df87e8341cccd127a37a86a"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "e846ca1315b2d0503727b65ebe5ce38d"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "fc353537085c9da2eed9a4627e97cb58"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "b2d552119953418a3222baee4c532a94"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "72e74ddebf7186fb9406774f677852a7"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "67763e22ba39d9fe6b9efb1440a01743"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "4951725c9cbb3a920958f0bdcf2578dd"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "bee392ce0e6257a14009e19304a4ba42"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "ae250a5270cf760691a4d90a3325e8c4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "40d810a929b7b76e0263cf19a8a92837"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "e0e1308941959b6e849f4c3176b2b5f8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "ade4805ce60ca5824ae8a9d76754d362"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "1a5bce13669cce5237908a7d2619362d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "15497a067d52040b8434fabe0c37884d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "5b574a581f1fe48b77ea44d8f509e13c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "a408951dc0ac0914c3f6a0a838d70a6d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "5d72b1d923acf959aa798338044275d3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "c17c9723877ca07721a9aa8d8be58abb"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "e4b78a768f08e2936f64d84264f136bc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "63e5dc431ae1ad392b62921727a7b032"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "4f9e362a35cfadc77053cf1b380a5851"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "79ee448e1d726f57b8ebf1f1864cd99a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "f7c128239f4a2bbba831c55e9e168755"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "47ba78129c3d36385ca00e738fecbee2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "cadf0666bd3523a16d347b5c79640169"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "73461147d4b3ebc8cf5c86e143fbe795"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "534d5a10ff9314d1bb7f0b22492d4d02"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "200d0ef24b79bdb4cadd0c66eed3530f"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "1f8a1fb910dc3579c2daccafdd162754"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "2b94d38d28c9437511925b009e0fe2ae"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "2c9f2508541e7a7967478390572d6cd3"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "6cecfe800278dbddb9bf39f6b2e34e7a"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "5e677556961201b9e25fbafdb8a1c843"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "2701fc6b04455a8cb2238b2fc8bae3de"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "1f7c9445a51c470de469d162a99e3181"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "fb9a68df9aecf17098eb32b7f9eae985"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "30a4077ddae450e5667890949151a6ea"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "9a97f2b6345d20e475ea99deb4fc2eca"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "182febf7291226576ec0840316d86a13"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "92f7a37471dfca732adab2fc5768e66f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "c95c42bbe18fbd93a4502757b218f62b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "282bc99934c7af87ad1f0193c4e344b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "901085dd0ba7091435d0c599a1775041"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "b68ced27c14f904877c55f8fc55f5e8c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "79ba418214b4919495849e56b44c29ff"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "62403143e0cf0f04e3667925b555c3d7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "6506338aabc545e4de9d17ee17ce2e5b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "6e080b220d75831d8d5bc7b543b4dc3d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "704b4cc196a48ca601c89b668dadb01c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "0027676c822b547ee6ca4b405c6920c2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "396c91ebb30075ea0e4a7735ab2f6cf9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "97635aed138b92511874528088cb5654"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "ce529eb2f8f62da22b1b2834948e8e3e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "36adcd58c02aae081b711166a756aa5d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "0b7a5acbe537fdbe4dac44f473d263b3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "3cb9a4331dff40d7ce58ca537738f7a7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "d6e81c25042cd8d9c3de7d3482a3abf3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "a5bd8590569aeca5f5b8387a467847be"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "5497325b2bc0d700fe7601eecbbc99cc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "2d88053fd308316e042d17fe6913395b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "6c7ee862b5f62b7b55a2fa6c86022702"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "18b3fda25a01d34dac430bf71d1757ec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "9a796d1e8b4920763c408138ef0e6743"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "0012d031dd83d7323b7144bb4b3634f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "91cdb376cec2ff4dbfcbf66ec2193ba8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "c8967a782c91792b652d93fe067e8c0c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "8a63fd087861a3f7a9c66234ebc42f66"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "16ca7889e9fde414f25e2898381ecf0a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "38bc530ea7cf0240b8e6f4d9b4942bf2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "944598aa09a0bae1182a6218e6436cd7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "014d23705419c46c52c9486d8918d3f7"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "cdb43774e7f33fb60a45a551dff74447"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "b3627dddc8ad032e2b80b26557f1f82a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "ee76cdbe5ec99ed503b637a2836cef4d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "9c78766d238b693cdb663670c0d653e2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "62c5b7d983d8bc79de746e44c752c6b5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "b0f3d6b32759e95f3a96ce326a489b49"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "dcdc0779b8cfc065094b9bd3402f59b4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "06a78cdc0b0a9604d23618d0b0ebd55e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "233942886ff2ac6c8c2de249b0d34504"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "b0451804fd423ac0ba4c49462db1b815"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "43594d3fd302e4905aa4a0d473bdb1f6"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "7128757c6ead0045f53d52c7777ce52f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "399c5e99cbba4d9bab004ce26fa17ef2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "475c6992af0a9f7cf0728519f9d2cf15"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "3de70ca3be41e285a0beb68c640cb638"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "62ecaa74bd5d208680bdb4d97e646f29"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "59fc73059549b3b69521372d28a6f2d5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "1a02c58e5f89bd31ccfb41fa37994d0c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "91bf1c96b3ef467899c97f53127753a3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "5f1b379e9750573e135b0d36010d9f3b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "212d75077659193e2819cca469247b50"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "e99e6c85180ab9d6c3aa6202dd50acb9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "7d5d4462b330d40dd908c697df0a7432"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "a6f7170a09893f3ed522bf0876d94e2f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "980c1e138273ad073749464a3ae13155"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "2dae14b7b0e9364181814281d4ce379b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "7b76a38d4bf94d75c0240361facccf93"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "f81266a71c88e8fce12d03e26b4a31da"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "1212dae133c900ce2a61a790032c61cc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "dae1fb948b2dc2ea2aa6fdc6e98107fd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "ab352ee50597d5239b83fe4f3dd4a703"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "580e39adfc582dc18ff4114aa967d3d3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "a1ced890b7f66a1d7088c1e61a608ed1"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "4f962b7d3f51bb75d79aa7ebc11ce554"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "5d5ebac169a49c393757a19b87ae96b2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "6845d4fbffe216816da00efc9289e052"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "f2be5175cd6af2a9ffbc31494b945954"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "b7561293da98da068dcc34fac7cdee6d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "da091f9fc4c0a5b99f206030b3a393b0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "0d7297bb7295a37af03196231f364beb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "bb46aa82c78110e1543188032d75060f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "c171af0fde3a56fda35b840034ea80a5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "dda8006f288982a0280daf33c26e613c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "2dda9091698616620425eb464f1b2492"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "bc5ac169ccda084645c67e2e53536be2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "1ce3756fe72d9f7a4f41917c6ea3e2f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "62a5bc0f5ec85708f2c2e6838c557d8b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "93289832364cf956057089d8eeee4e36"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "f25a7e50eafc9ec7a34769031aeff8fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "02dabb39766a14302cba3c00b62bf06d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "2f46740cd26f65fec1876a3533df5263"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "fe7cd60f733e302181359bc093e6b00a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "540654b384a5571989dc6a5f8a3ff4df"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "ccade5d3160a1c4b46182f41f460dc03"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "079b122fd75133e0b5b33198aa827978"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "21663b2f6e39a8a1fc0ebf4d187fa12e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "f876518768997ba140cd3ef97d711063"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "7907fde0b29d088ab1dacd4523d5bbf1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "2353ddf850ddce0d9d415751825a3f1e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "737d3bc138610b0c6454b5112395696b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "8f087e2ddcc55d4f131bbda4f2468a51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "6b6235b63aa721b350444ca3fadb76fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "4a0310ab957bd5637a3c35a5395c6a2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "0148cbb9312de9cd3b861097ce82dbd5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "33775e2e9004e1106234fc675b51d317"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "0bb5f794be04c9f63c319297116d9251"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "a8caaf3d0176e84ec085767634562238"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "7bf248338895532e3265e1f8f040d090"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "3458a87dedea86943dcd6407f1faa6a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "e18c0219c283056bdf705a7aadaf0e6c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "f95d90af62cc37a46bc0b09d82eac173"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "25005ea998afe8d5a4ed761d554b522b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "0e18a2fc53e85a61803192640491e922"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "22011134299ac64dfd2adec9aa37dba6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "773bb1572c49abc75cc347f641c42038"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "49a01f865d29898364eac942662374d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "6594c1533de806995dea112978e77698"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "9efd5f72222dbcf9847fcd084861434b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "c15de6b7c3037b10c712d9be7293a831"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "869239a49e94f93f8aa31bad3938c611"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "8371966a55273751797596158cd4e714"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "44df55e5d2bd7f7032a91a59a3418ead"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "e2dedd9ce997264d2d79366dffa83783"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "803410c7bdad2677001a6eb320ae9751"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "fd661c39254b5928061cbab893c737ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "6d3356bd1ed64a652ad1d9c9e41f75ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "1fb0956ab636454e355cd1379e5e65db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "89d8310f256d9ea285934998fb84824d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "af3b7a7ddb39f62fec0a6fd16a2472e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "7d0fe4564cccb855bf7ae232ce51c2ca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "ba5e19846d9f7c2d830c433c39d80fbf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "254366f53b5d7ea835bf96bb7b8119f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "94fbef2b39c5bc47b3ce8ea5e6629c8c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "ecdfc5de0644551a96c798d4fa3decf9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "69716938a808bd78cb9508665fc42796"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "fd6be380e0ffb1bcb48aa9087767da87"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "ec8e9c9ef7ecf3c688b2a8b0bb0ab599"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "525111dcbd8c4f5982182fd1a366ed2a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "061ba146405f29d5addc6786422901ef"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "91cf473245e9f60e52dffa81fde1ac86"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "bc49be0eb09db010ca5105f8661e1afc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "f3a8798525c29ed2cfd4bc25d8c5077f"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "81a36ba38c8f8114486237f945aa488d"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "73dbce5446e72f0912ea160fb1952f47"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "bc4a21a575bc5e47a35d98f2a8a10f69"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "91cc7134d5b0eaf2b2a7c878c7e4f663"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "9fb2ee1ebb7899bf2004f2d739441fa8"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "26830aebc1da872adaceba03912a0477"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "ad125d88c983c9dc041de35c16e91cd0"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "fb4c6e016b1f59a6ef4b3f2854474629"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "f1be354ba53a388af1f75b32ec636422"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "139a5c5d52a0e12a85515e7f31f7a419"
  },
  {
    "url": "categories/index.html",
    "revision": "c9b2e2677e33519f1663fd9ea74209f8"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "64e186c3a42951be7c1e59c4ce988aa6"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "563837dd5d07e157c9395752ed039638"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "404537d874eded15a0668bcccc371747"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "979afadb83611d654b3c11ad857008a8"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "c81c2f9a2db8beaff917be53cba9474c"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "2478207fcf66d2d8e66b56379754bf9d"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "0ab3b98941cafe2ee83c4da6beceb6cd"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "d3767287a950ff714ed2029ef7841a6c"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "268cfeb6ddae47356f9aca4562ba96f9"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "ec336011eae51dbc962fe2854b58a224"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "14a219d410ab55017ad2430763cf4db6"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "59ea54f2f099ba4352277539cb469e5d"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "68bb554c6dc06a3497c8c0e8d2ce4684"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "bf8bd6533cc96b2fbba55d5619a6fbfa"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "d783641225889c024092aa801cd04392"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "f50aa1e3ebc5a2ea75be3b085f6c79f8"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "ec08fa2035ad2066a540fa55ae702314"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "1df6d635e0ab9838c492a78602a36191"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "41c65aa322584972d1dc862ca70b27e0"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "a91008ab1f201a62504531953f6da71f"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "aef88ba7d56148a9cda886b74320c0c2"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "d6b93e9d9db10f7a5dfd29ce00443455"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "caced4fa7e8f07a68a5c2aa822d71879"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "db98b7597fb67bd12a8a8e6be7bb91c1"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "71e0948d36cc55580bff697813636da7"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "8b671d3f0ef73627080c9cb14ff96227"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "a401b1fdc8ab9c6deaa318fdabd564f7"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "7f12b40e7bad0ce79d12efa8a0ea6478"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "118525a41130c5f45efa5c5bda842b0a"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "7b7ad06d5ae9f44e43b3de633949685e"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "181799700aea0bd4be219108fee457d8"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "be326bdcaea7b76252bbc131d3500b1a"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "5385cf573d0416d9b73ec3f7dbc0cfed"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "21ff68bfaee76ebcdf46e0e51f73943b"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "9e04b92f27dbfbeefb8bf6511ea930b7"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "5f6f66d2662cc4950143e11f379945a9"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "611048a91af771286c3c9bfb4efbea41"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "b5cda8776600e5ad5e545dbe7b8e077d"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "63fd20d1e72a8399ab2a01995cbd6c03"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "28244bc7654a99d68a8f0f8589181933"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "683e9870cbe817708cde64712d3ba69d"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "f4a8636412c5b13f49a67bebde6bcfc8"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "4837443f2479d270ab863f346f7cf42a"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "8872240eb7ab1b5791c87a853833161e"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "69dde0a0e2e767c9f8924b395ccd30dd"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "db0cad1ddcf53ead6ac2216878ed94bf"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "08ca6cd50f8a773ece8149e68c2a58fe"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "9f03d31bfaad14fa775e623763e8f15a"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "c7bcf0b20055b0aa039a743aedeab742"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "1885d6d2faaf3eb3e1015f81f221a5d2"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "cdf47c42fa9be071eb47b14b8b50ac93"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "564f62bb94bbe93bfe9b2106f7d6f746"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "6ce71acbe851d075acd74e1137090c82"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "61dc8ac666b37354ce8e1745247a831b"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "c2d6ba0627e846ebc123dbfb40a28590"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "63fe847e304b8e24853e2631231a4e0c"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "8fcf97df4df5ee1450d982fc37b1bd2d"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "74de8116c93fe4e9d05b0b6097d285fc"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "a6e62643a3e4e6fafdeaf53b7f251618"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "2ea8e76e179adf234e582eeb3524f20c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "5c8580c0f34aa4dc7e318402479e81dd"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "d3fa79dea7a74038f8c2f03bc97eb912"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "2fe7bf7e649c978e42f6a3164bae6462"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "6fb9c3a1a8a6133bda5054efe056feca"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "df88763cc07231cdf578c459addd711c"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "ccc7edbb9cceac633d572986c549f21b"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "a7cb52a0be5f98af91e9cdca56312b69"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "09e049dd96d73ab6c803cce2ef975886"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "c0a4119cd27dca88921647786f673c70"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "1b9630a85b729c9d1c48e9fed3e9973b"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "060ac2599ec59b0030b5bca58d7311c6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "83d16a14d60a032bb6558c89c87e6816"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "ce77484cc92bd46a0edef4f7849a7ed6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "3f8804613dc646fdabe9023183d38f48"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "a0e3790ecd80fffd4caa8c951c8c5e05"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "36bf7c1d4441ce12e83c4a7fe4e2be3f"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "54d67a4ee9b917dc34cd03e17dcd8aef"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "12be0938c91fbf9367c7333273f37a3a"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "d25741063febf5e88e2d7a1ab5dc97d8"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "c692c7f77a65074060a4c5bc6b7da318"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "0c7e27b5fc071a1e9ad88aa8907f94d7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "3564e5a2bef05bcc859e302e995d8069"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "1e22565ae2ff26a13d83fb7c31f913a7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "2393872dd235f39ebd43fd9e21f06c2d"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "8ccbbdb5d3ee782e5f08fe9de42417cb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "45d724bd24f06c90cb2546370073cc46"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "560f6180c02e0f395ddabc680d4e5d4f"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "f40359cb5740796058cc5ca5caebd601"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "15fccc3ac705d2fd118961243db16ede"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "aea68232d64a20208326a30d35f9ee28"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "0ca9510348bdef331036e6574091fba7"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "0c8976ed90f91c8be30ebceb0c707de9"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "2d88ece4c88b9df0c49f33bb61923dbc"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "0d90154de9ab7fd7cc4976bb25703c4b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0cc09e0ff84409c284a3068860c9af9e"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "456d104405198d0f9f052e1e9e98287d"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "8c85cf2c1b457ecce33dd4f621ab0879"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "335e9d11be543a10ed624c5091c041d9"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "6d0dfc00b256436adfaa05ac4f65e4e4"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "974fea283c9d1bf5d73eba54483330ac"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "b9514f9afa83b13fd34009eb5214786b"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "223a234567313f2db1d258cb83d7410a"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "cd89348a37609a9fdb50d0cb9978ce99"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "f22ecd94a5c059cec7eb4af1b04b58a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "c2f46a20f6d819fac3e9de3b6e4383e4"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "c3e99e3ed30111e5d4f94d0bba3c4387"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "249acb49d9224ff79508b3812b15eb76"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "43f6c76395c42633bc10b4010d5c05e6"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "f36901411244720db00cb5e950342d85"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "c4e488dcf0883e51bbd5f4f8c8056dd2"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "3dc5bc629cefb7ff0c461ec135ddbc47"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "c96beba3bd560e473d97ff314e83ed0d"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "7c0fff1372e56fa7264a52b39c8e9b47"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "e667f6c04ae35245aa76011ea81ec8b3"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "eb3a5f3a8207c906491b305a4dbc8e3f"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "8c83819ea8326ba733c650ff57d0287f"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "71f1752d2c78e5e00d4dc216f837cbdb"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "fbb3e85a8e63979b0a53e4b2bc775b86"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "134e4c0e41449da48ab732d7fdbabe50"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "e637bbf6db65118fe774c728ee3fe5a4"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "9c376857d8beb88d1fb4f113f7db5971"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "e91674f168defc63c22fd4cc6558970d"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "4573b3afcc112c9b74f9cc776d94152d"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "f088258848407bc3747026a7ff4230a4"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "4eb93fa6c141d10b01ced360512ebe13"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "cd7cff79eb325f38808d2950f2cd925c"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "8bb453cdd4e8924c141e1d1e9d780725"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "d32a2862f90e6c54ff181f5ecc750911"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "898ae869166f90c4ebd18f0f3914a414"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "68d513a30d96dc37766b31654c6d1e5b"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "88e2472892d7d14e144c7139e51ee449"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "74e7107064882c812b762f9fedbbb7cb"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "02611b6fbb8c527999685279ee1a8fc0"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "13c73d30af1bbca0f849716f6eb10adb"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "72930c8d3c352414f660d35aaa49b339"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "329708e572b5c1340d0b5f38df68e0bf"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "2c006c2dd3bcb75269e591a312848852"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "4ee45e054ccf492301a326a101b88a82"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "2987a8ef7c3db58da5fa49e3dc013ec3"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "d3c04e2af6340351f69193191efb14cd"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "625fc26c401e1d1101a05f7483fe49af"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "4530969a33554b5945a81a54ea7c14be"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "c5568e3f170e6e17b68829234e512464"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "8f5421fc4be3808278abd1435ebb95a7"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "0b298f741aa3fbeabc7f6e7c4010d285"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "3fad2fce9d81ae1034a160d064688cb7"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "48089863bb96dd4508851489137c2b78"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "65f1d0fc256dbe49b74a80b10dbb8c3f"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "fa165c2449dd955583a0fdb874d1d011"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "703816c01ec6d7213ff45e5f67d91e59"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "9424491b9de6b63a8817f0150c186266"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "92421e3a01dae0d0f82bd9b8fcc6452c"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "6d1801a18e05963d657b51cc25785eb3"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "6a70628c24d378c1fe41eed4b37f90af"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "db6f340409f213baf9b0961c48953100"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "f686b65a6426bb9fe5fb9eee5832230d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "023cb267176b9af10d6370e5ff16d86e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "e2f3b19e3a8a33ca2425beea1e58f925"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "b30530ea633dcc1f5dc895c0996462c5"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "d10fbbab6f87914c3ca981894a1b1d30"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "f7dd2e706b336b33f54fbead451f301c"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "0f6e17aaea147570b1c94f95d817d556"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "b4d64bccf1318dbf5207ddcfe838183c"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "68407978b028d85b495f9d7580c8e78c"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "7c3a6c6e17d6f74ef23329b2a4839b97"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "ec376bcc2ab094669f692e99f44256b7"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "dfb969fcced1c68b603d58d3430d3eea"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "cd56a93f3ea2b8019439d339cb3a1dfc"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "7ebd5e37b625f73b56c71d12344cf1c4"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "24b1de5a6e751ab5df8d23658e0cdba0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "1610c7b513480fb4f0378480c7a41ba9"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "80e7d34fa499fb5b5af916ddd2f66b40"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "5aa98e194d0689abe58f4aff6a609c64"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "0b1bacfadeac23b4c0683a8fdfe96395"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "447002d988f31b5afc60ccd71fd923d2"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "400d4121c41cacf0133bacc9d90d4f34"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "1e6fab14ce21df836539d769190d2aac"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "5c18eb1a15528adb8c0ae6d38deb7b45"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "8c07d3e1213079e7ee51561e4de7f88e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "77a425cdfab0d985ce6426a3c5184b91"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "44e455b6dc7de87c30e8d408ffe8feca"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "732d86b34584d7d4f2b27ac323859c95"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "666bf052d538639c88666dc24ae24496"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "fe656ed40f6da1784f3228900eff5080"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "13e3dfb6fa7ffa3372cc7593d6635787"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "58303addde80804cbc465fb67dfc68e9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "14c953781248f94b4a1c78d5ad59fb71"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "d508fd7e2b4bbc326fe7df0bbde0f46d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "b0bc57d472c76681e4cf9995c4937ea7"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "665b8bfb75353c84c94dce4703f62991"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "acd7aa8d4a07a0dc644f72fb646df78d"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "dc87968234b1a6474eff81e9cecf9cc6"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "b645485250bd119d2d521b22a633dedc"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "a837ca7995bb392f3e4dc12ea237ac59"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "c9decf64de2cbdf70f246b6de6893f27"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d3783653f8a8632a8f3e5ef7c45861b5"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "1763dd6cce9f397c036c03b759d7a97f"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "5d48d2a23ab2725fecb96bffef0de406"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "a57b53d159db5cdec466cc04b1322c94"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "19d88d5ddd1c19daabf854b49e225650"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "6c04b65d3152d63a191a65879b38d552"
  },
  {
    "url": "categories/os/index.html",
    "revision": "45cfee8efd0a426ab5da3c656c918292"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "dffa923cb8c69bbd3f1bd26ae465da38"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "6c2653aae220e6a1214a94a8ee9f97f0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "8a9a9254eb51fc483030d7366a88b761"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "820c35c334b9924563d773f938bb3ba3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "0143631d7492705eebb42cf706d05a51"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "492abeed2728ad88e4d4286839aea9dc"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "4ef6c9eb48d582e9e5d7977675b3926d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "f55d193a27bcedb53bd5d6a647398fd6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "0c130ba8da2c36499e50d557cc3fee2e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "af4c3cc06533bde5337506d04870f9e8"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "a637cf0979e0fd65369e08ad36a2414f"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "ec3387619c442a536ac1f0e06eadb55c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "6a295b58e54465ac5e254610e9209447"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "3c95a5d41f9ca41852ac1ffa7ae473cb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "788273e0257cce2970cb88b71c26ea34"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "25aba648bdd716397fcbc162b11145ef"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "64737703aa37385079d4a6395f4f856b"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "84449a152d04569fd3cafc2fc5b19762"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "11c7c90ef677fb82f2158a9e984097d0"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "bc1d073346f73295b969c5a1cacc5577"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "82dc999ad53141a07e4f43abf5b03b8d"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "2c2aecfdf603f651e2343b309cde4f78"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "828cf7a7956b8210b32fa4bfd5548ddd"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "f06d23a812147c59044d5e245b83a9e3"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "a86b19b706e812ee5860ec4c139af8c8"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "5d84f09ed1cb19eb9228c08546903993"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "63e70baa85c02a38912599c502dfc371"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "25c5ebaa5302d9c395f9eda46e9f3c0f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "fa30d9b4dacb775eeca882cc21603d49"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "7bdf3c107f2ee7df206ed71a138bb090"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "d64b93bb2f23f65c22dbe367eda8e4d1"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "49c04ac90838789c7fa840548f03fdb0"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "bca7ae372dfcc45a0764477ea9d04932"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "39c62a949db5d0b2c2fbf3ba63a53941"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "4d6155c671714319fa999649dc1d7f61"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "ca7a9cdd20b84a4eef759be77ff75574"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "3896bb9045a6e3f665b0c6b57876eb42"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "e9c670df0994aeeb81ef944b969c83d3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "73f816edcd2d7b5335240f0711bf4dd5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "1ccb57971ac77ce00eeb477774602ae9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "26bfcca1dc944ff4ea308a05c1016857"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "af191f1e8428c6eaf3cea13623f1dace"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "6ea24eda96a9298d10dbe0dd863a6614"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "6fb65011293363cf927b4c6aca31147b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "da79e49801997b641d6e10398844d9ee"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "000e3fa0868dfad9178eed6a0e0ab274"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "701262cf30cdd8c70ae131e06ced4606"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "92245351f6145830d4f58dd4c83d11ad"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "ff466a5f99dee53fe13c5513a050c70f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "cc46f21abeaf8c0e56b4fb1fe188e464"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "437c135d295097c097ae4df32f603975"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "20e24eb4437fea0e620d7a6954502ff9"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "d9abbd508f17276275d8dc83c0eaec10"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "9aea445570e5d59baa01acecb8c0a0a2"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "fd6a0026d5346483e45ea7b9350654ce"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "054c645a0d46946d570aecb8cf2aae35"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "d318abc32e29a1ad19f2c5ad4c81f4db"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "e7beed906b4f151cc77a8d78277a8f36"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "f742b5caa30890a5635e734cd893623d"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "9455e5f6430873f6ae95860ca0fc42b0"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "6f995a10f37f35615fc4b0a640708632"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "f2ac5cde6dfaaca0646f536d7207bc58"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "d636bb7cf5b053cb3e37246fd3c2d8e8"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "a00fcebc2595616fb5dee921b51e72d1"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "478db66687bf38446b2abb4c33a4b361"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "c64a60174e99526ff8b11f82eeecabc0"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "ed36bf297895768091969e2c3b96cafd"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "6a42ae64c86822a674cd970f7bf3c241"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "bfba1e43c620680861215fd965515fd6"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "87510d1819d0b76910edada937389ab8"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "35e0bba171197644dcb8cea0ed600423"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "4221f2c76aad8c90614c3b91891e9ab7"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "5c2b79a21a6e4c44ee7b9c55e1c4efb1"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "f9d8e81e881b87ccba0f33592bf8bbff"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "23d481c5ca672c1b1a34391e9f03a62d"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "0dec2f59ee824d85aea4ba349f2a6972"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "912575b16fc6be6d7560045b67e75772"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "e7d1eda0bf9b73e75735b856bea8b7e3"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "cb3ab72ee5abbb4efb82a635eeb38fd1"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "7f38f15f37788980d36d6ef7d8116469"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "a96bae7ff85741795f6235cc35919595"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "981425a5f970cf2bf0e11eae6a1472da"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "186d86d02fe703eee4d1b05c53f98300"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "5e4bf25d6b15c51ab160bd0826b62903"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "4bac366de88f1e292d2e6a97004abe01"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "85b44809521af772e63c833bfaac2dbe"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "2e68ea76a76f03d7e5145b495d131318"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "5b5101a5b5b0678d01819c1985df3a49"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "01e0f467616065ca897e8d2b2edbebd1"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "974de0e7b1f9836d0744c1e78e318d63"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "9252a10c8e3a14c665f5dc402c0b53b8"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "5f37518ce955341ff6447bd6fababcc8"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "af28e428382fdaba62a1d209d0a41065"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "35641365500045f818aca3f8b036f804"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "4f3762c66a7da8dc47a993e59701c5d4"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "2b72c55782928db6149356c086f63720"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "aa204200df43e4bbc981b176e76579f4"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "6019956148d457911f290b58ea1102a0"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "1d63a19358bef509925482c4d678b350"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "f392cc81ddc7949c05ae78ff998241d8"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "beed2a03ea1555a635e3471991732530"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "fbef9780349d9b93c2493fd22804af6f"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "ba87ed772216b910e8a30192b7e8ba9d"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "aedb3fc43cfa412c8a9725ec16f06552"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "fe80ea5fcf789dad2ba7703f3726c3e1"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "7d4d296906ec9ea9b480438ff9fb09c7"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "68dea497beb153d9748bf40025e1af43"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "80f04b07a30201a1ba531d69cf39d0b5"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "32ed107d02f75b37593cd77d65d75153"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "d2ca7eae0a173d87d7dcda221f3a672a"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "1f09118c7eb11fccdbe64e56e7fa9c58"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "c3e91f9029b99095c31d0ef555c5e17f"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "1fd8361e4d011eb8f4e89591b40ab547"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "fcfdf6a5340e0d6504b59672b1b9976b"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "e51d60c52f291f679db884539e37856d"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "80e002ef2c291a0dcc4ffc6519efd7c4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "726544d7aefd1a940a5151410ddf80bf"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "3bff914d717f5b9602a99118eeac207a"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "b7196323859d946e4315fb870c1b9ba9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "f7e070fd50732ae9baf244bd67898b7b"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "b54d6b8c6cea502bcad101e67d8530c7"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "658f4a99c82e6bae3c414b2b9033c195"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "40bd851a756b72be3f908efa9fdf9908"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "5b3672034bd7f97c0d6aef5d61616368"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "32a7b0acc4635d71105b905c4f3bf024"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "583a1657a3d93785f1b6ee7aa9a349d2"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "8c9b9a0a5695c595fbe8c57189b633ab"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "2f70820a7b253e15a9d742b36310ba40"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "774ab2a6ba3c1b817623a3fe520ea68d"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "25ee1263c9705d9801001dcd27e86c51"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "f92474892be271753165ef9db201cf1d"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "e80a89cbb7483284f7edea3eacba40f1"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "bf59011ac138f5de1c32139c96c544a7"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "eb81da2783251453eb0091fb3e6f3379"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "7993ada3f1daeaf7c0c98de0c7c62fea"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "29d80744a7e980191d514ca20fc091f1"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "8685eb9608679231610fe09a8246b837"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "b94b67874bdac2042d166002ed9f53b9"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "49cb828194663828043dfb4d0a9222d7"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "767247ef43279bcd393e989431d8825a"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "75288abff5750646552b47fa90a41232"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "ed57ebbbebc1d8d54615090454b15d5e"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "6373929858ae5ae21e40d72e65e41765"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "bec9e4371d33641763166cac877c2eb3"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "ee25764628f0ab5f1cf797d2d037c2ef"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "8e7c109ba295c08c5a89c9776d2c3e4f"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "138164a8694c59919a0f924db51348a3"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "b3965126e0ad8ddafc61066368e8a496"
  },
  {
    "url": "categories/php/index.html",
    "revision": "27e960970a99ca5364ed3c218532c4dc"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "b53330b5eb903d2118c1d1bf499ef2d7"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "68534a22c1be71b08a50d52539d0e87c"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "05fee51c5d58314572738970bdf94b87"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "b9284c757f3e9d83172ced8828805755"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "7b0d4e5caf2d795f7163d97e43305cf8"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "85108ad5b393e21947790ddde7083ccb"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "3158e1f82ba65b3bc4e346d38b2d7412"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "6ecca55e5d135e5f9f4564447c15c125"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "b627566fa64327b9e5968f62a2f8adfd"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "ddd209825f36f6c5b8f6c9c0dae2ba20"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "728c7e1c27fdeb28f7cd4f9423e25bac"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "162f8f85e6c05e1ca663993c1f5aecfb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "426896c2389a1f3e91447e6c8f8b02ed"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "1b44cecbf8889a1522a73db2065e27f4"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "61e88e8a59508033a9f4d487df5442fd"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "f3cfbb6ce2ec16c491b9218e85cefd9f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "e6bfc1ee3f925f5d752bf83a83e0a091"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "88e5dd8984c9469644786d3f69bd0462"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "447c14eeeea16c3131e0e2da69f94706"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "1140b6c80526683c694b9b3a6e039a42"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "2bb8a61af6c6796da6dd863a8cef2a3d"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "ea88a44c0e778eafdaf6f1dbc91acd79"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "dbecb82b6edba8de6211a9516c0c653e"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "294e54f7b22a35288831ad28b0d7c764"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "c048103d0c113cc8d2ffd97d775d7c58"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "1ebcd417fb4470bb9ba666bb5204b771"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "47574f9f5f04cad8172239fb384e8fd9"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "481591bcdb442382c2b27eb262eda8c7"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "d0756ba03cea7a78e449854d5264a880"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "bfcb5c7cecdf961b3b9324d8cf17f711"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "102af4dab608ef99f95f5ece22866d54"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "91c34e4cc3600692ecc51b0fe13f85ab"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "1543fce3794e35ca2c160b38e0a04815"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "8e94e5f41f5eeeaa026327a7182314f4"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "d40024c83b5ebc0cbda6faf20ce0ae64"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "a3a96b2d06de19366d90d109d0cc094e"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "5693e7b50d5eb22a920ee615330e837b"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "07195cf9add26b9f0123aba4ba5536c9"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "328c910b4101685b6ba74e4c22dc1a5d"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "2495ceb47aea1c5c933ec1973a3a021f"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "acd920b6e8a3a62c0920f26e67b0bbba"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "de41808b9c9e53062cdbe924e6c9b295"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "e4bfa71e026c6c58f12ba4d8168e5a6b"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "38d0921d1f88c2cef1eab177e1e6ba85"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "0dadb7297a26e601c70ccc2c8b68bfa7"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "c2054a7ae47dd85b0d683ea57251a264"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "8a8581006347bdc45a6bf8e617f7beea"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "1b1b797eecbfa80469e9571b2f4d0654"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "d55d5909acfa522708b5365ad6427288"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "6569d1b444285e7ff82125933008aa24"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "cb3da7489eb8f19de184ce9f7b81d0e1"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "b90fd0af20f15864a6ce56083fd98804"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "07c7594883899bd029aed4b0c3b08fe4"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "f84ffb0b918db486c19b481d2dc91dae"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "69d6b1a7b54c852b08a94b5df9e4fb33"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "8b648c1f06cf1548a6b108daca0f5937"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "60c3c9eec769bb5b87e84b6f6e7c5e3a"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "de92e3683235a4cb0de2224978509b63"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "b53cf9aab19228450f7a386c16acff48"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b31c07eba63ff585dffa16d77687eebe"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "cbd9f45198a7e682729ffb5bf92fc9c5"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "b9abc87c104fa4babd379bd9d5eb4840"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "ac9a70d97e843fae6c336e58bd05c3b1"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "74fed924dad0215722ef6f9001be32c9"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "1efcf59e3664eae6733376d66151dd1b"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "1a2a780437f11427cd7325cbcb27564f"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "e7227e83ba7c768aeeac82c066073db6"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "d3e108cde2b9226806c9e76cc770fc21"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "8968b6d4e1fff9388210d3d9b73f6c88"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "772e17bc820b74fb8b1f83c57da4decd"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "907b84be986a6343a2cae424a7d93b10"
  },
  {
    "url": "categories/system/index.html",
    "revision": "864470db6aa6c9966ce1b9426ff1f8e4"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "1b2432bcbadf6d89f85a0a56530fb152"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "adc2b1b03b5a3bdc0e4b8a957f07fc12"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "8e0a2e9c8a5910ead58bc6fe1f856e20"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "fb34d9528f91ceeda42eb71b31ada5c7"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "292eb4b6b299f5a73f8514e3d1a47f77"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "9cc49f97540a14927945fed5413782a7"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "63e7008cd55924f4dac5559445843238"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "073b5a04903137a4b923cdb3da85d147"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "ce9256691db093d2115e7bdf2e202804"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "a289058121f9ab39d29e21c503833e3e"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "b66afee563cf4653f25110619311a009"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "a944d683dbd27730f70d7bd50bfef20a"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "b74bd3118afb35c379d02b03bbc4e4d1"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "3585bb7a3eb87adff71b58e726b7f2a9"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "e7eca82a1f9cc4dd98207cbc83cfedb7"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "a7fd6a71da2406f3c14eaa0059ac3b1a"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "4a4e8087e34c5346a929e8240ec750f5"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "19eb0f380bac2a6b2b647be3386d67d1"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "92857a08db6502518286a3bd67fbd690"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "d35c3a0ce29231280272feb820241cc9"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "5fb2a0d4b7d5baace037fedf95ca3468"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "c1a23f5e4bab834a5df27417eaa3c392"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "1c6d028a06df169e976d14548aa3c843"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "d113a65726f398b1a64c19d6ac79b367"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "cc8ea38b85393fd5849f2c3ba9a3bb12"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "b8bfb53dd40972c7e5ea2ce9dab5aed9"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "09a8eb234229b1cb78f0d86f4abaa9b3"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "632cdabf66e23052ff83a14e0254a292"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "3a6073772b30dda3f908f4330fb47835"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "2d57fa849dc3cc0926d35de8827b4fd6"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "599d16d7df2cdc59a49a52a21f5531e5"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "2a6c38739eba4e0efb100fba23b524ae"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "18d73d89562944044c8b4d71f05b3b19"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "a6af05de8e8942646b548b4251c4bbd3"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "d73e96b757e9703ca5ade23247c33c87"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "c56ed7fbf3842292257c13187e9f7065"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "6e4f2ab7774c90e89273eb409f38489b"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "d3814604f871dab6f91d01fd4d8ff1b6"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "4822bcec8b54c129f68cdbc4c98babea"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "e4e3fd12e42a2c3235ca8fb12941f264"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "82a9ffda4df84aecb6603ac2d3c1886d"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "62c48f1eaa81fda92955d872d769343b"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "d28de3b5da0cf0769a039205b9a8bfda"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "f2af3173322f8f8ba4e5f29c71bc6b86"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "aa653a217175c868f4ae83e1634f8e59"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "058c4f6cbaa566e2eb88665ef8a1074d"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "cecb02566ce26da884578300a1ce6091"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "d7eb791571ccd5f9606041a0397bb568"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a27194c98d07594dc46a072359bd292a"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "c30355e3ebd34bcf47ff7d3a40b62667"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "dfa7916953189c224ea0272d27b914c9"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "5407b9c5b7d36ea9e37cb6e94b79aa40"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "5c4d2f295bf620f7a08fee5de90bc92a"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "e77ac7f6f0830548e2c6851194a5bb97"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "280abbe6b3185d306e6bd0f519e35944"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "7c3e14c946208da90dff2e2214ed5a21"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "362a3ab4b548979e3bf6e6cc39f3e761"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "9387b8fe11b8109e0c68c3b633267e00"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "47ddbb9304fc051b878044dc58cab093"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "8576223d94d2798ea0dadc057f31943d"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "6e62c9e8fe82f15ebd9f82bfd2493753"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "2387ceab8966051d9fb71483d1fa154b"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "8aa5f84fbc95a59ff291e3e47eb7525b"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6e9e39195ade120d79cbcf81d1b1d581"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "3b6f3a190662e947edb70e2c4c7ea60f"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "1ccee1b649552e7b7a7ab2c4620ee690"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "e6aa2e0d07646859ec4db7c35884d187"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "1b0c62265d94bdf6bd798fa3103a3168"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "c03924340bef01edd691781421633890"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "b93e859f95c6657fa2a8583bd8e776ce"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "5378f70305dd586fb36fdd1e4f3abe9e"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "d6f1e10eb657a3a30c9323db5281950f"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "157f50a181e6c9142ca5822982adc701"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "edd265488acee6b9c5a2ba6361f10211"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "743864a98ffd6884f4ad080182a95c26"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "2b3989a95fb9f0558e81beba71a228c8"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "94da23739c1ae054f34a34d295d428d1"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "5c69b149de2c74fb97b5f1fd6827f1d5"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "0218c85a3961132d54ba2d1a84e677d2"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "44611ec527587ba846b71d389882b5c9"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "5c254c2b9c9cc5bcb9841a329bbf7cc6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "adfcfd73b6db09cb67da0a8f0b5d7a38"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "57bced33b9f08503b162d34d25d258e1"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "ac078dea30d1b80e91b20decf4e31555"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "1ccde4095466f6efe7c5fd7eb992bea0"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "02f201d2dead84b5bb9b278ee63957ba"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "840777fed5a533b7dbc7ff4d7deb0d59"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "d9b1254cf59db1ad599dd4a6993601f9"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "e4917513e39e17f3bbd72780bbc978b2"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "0bdfa8fba2d420c855047b2b39b06774"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "2737fa7e7d3b8bd380521fd17e70a9f5"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "9293bd68996b890986c1369d9dc4ec9c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "dc96fae179dbc55bd9e7592a24201d31"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "e1de728e5d1f8df3283f68ed0a3f137f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "80107bedcda7713b2aa8822007cf73d9"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "aedcafd0ff94a8b34b7d212c9bb83ccb"
  },
  {
    "url": "favorite/index.html",
    "revision": "6577522ea6ddb4ea56daf38182e34097"
  },
  {
    "url": "index.html",
    "revision": "3e72d60f4388d34e2ece60abe621925f"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "8d2e3c22a0936d0b5499193e07d1b8c4"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "120a49c75023efb515dec1716efed281"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "7fed79a9e0e4c3975383e7f5f5aafd2d"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "67fb4b2debea87c61ddf3f7e6576f721"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "06c8d54f355503dcb9036e4029356072"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "8099dc3f83b08a683f18710d9173b65f"
  },
  {
    "url": "note/index.html",
    "revision": "e4336123bab8c98c6557964472171640"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "7fa9ccfcf9d56c369cc037efa6bcfe4b"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "381aabdd521ab4a6debb4968ba536a8f"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "ece784d3b4a051ad9441d56deb2ab09c"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "4ec7e4e640183a9f23254bde3f9186e8"
  },
  {
    "url": "share/index.html",
    "revision": "02cd8437252f35ddb785390a28aa90bd"
  },
  {
    "url": "single/about_me.html",
    "revision": "b83f16e0b5cfd0a6023b511e94658916"
  },
  {
    "url": "single/all_article.html",
    "revision": "fea8d730c12ab6383b318edebda46722"
  },
  {
    "url": "single/welcome.html",
    "revision": "7749f0972f29740e025eb9ab7efc0834"
  },
  {
    "url": "test/index.html",
    "revision": "d2378fcc5280a6b0c07e65b16fc9dc48"
  },
  {
    "url": "test/test.html",
    "revision": "9e2ff817ebd2bd113b766c5dcf029462"
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
