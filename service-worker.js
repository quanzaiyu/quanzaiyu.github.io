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
    "revision": "892b515619ac227e9690b3570452890c"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "31343b5c9554463e049d37a95b3ae88f"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "c2b0070eb73ba0da921b2be3af1f44f8"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "53a3e481236d3a0de36b127c9f90e483"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "27a30eec6a88d5157b6b83edcf98fec7"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "d1f92d67790eb861efe9b43eebd8e669"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "d60f3f90a8b616eef94dc03d55801fa4"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "babf11295254d28221e721587f0de536"
  },
  {
    "url": "articles/index.html",
    "revision": "b7e7cc6806ec126e357fc61f753edc39"
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
    "url": "assets/js/1.639bdc9a.js",
    "revision": "a477a1ff569252af77d1a7f03ceb9584"
  },
  {
    "url": "assets/js/10.e19b7469.js",
    "revision": "c1cdec6236121983029b51e2b37938cf"
  },
  {
    "url": "assets/js/11.a3ae743e.js",
    "revision": "532c6ec03a21943bad077130362c827b"
  },
  {
    "url": "assets/js/12.08b75db7.js",
    "revision": "f188b0f158c17bf4c55198c3cf7e1d4e"
  },
  {
    "url": "assets/js/13.f397ae57.js",
    "revision": "bf90243408c31226acb915308e7562f0"
  },
  {
    "url": "assets/js/14.0c1734d9.js",
    "revision": "e0357926e6e9a17a866d8c50946a7fb1"
  },
  {
    "url": "assets/js/15.4852bcec.js",
    "revision": "2cb5bf581003c30178aea771ca46069e"
  },
  {
    "url": "assets/js/2.86f54203.js",
    "revision": "bbffab4b093ab2826bef77e5c98e428d"
  },
  {
    "url": "assets/js/5.cd8054ad.js",
    "revision": "4fdbe4c5df44e620ad14aa70a2e4e3a1"
  },
  {
    "url": "assets/js/6.dd8cde6a.js",
    "revision": "73a55f50b44d35001bca2d7f0155b406"
  },
  {
    "url": "assets/js/7.49c395e1.js",
    "revision": "26df2df7f57c3f11d74997a820d78859"
  },
  {
    "url": "assets/js/8.0f4aa4da.js",
    "revision": "e2ee0e017afc80a5dda16c7524b27fe3"
  },
  {
    "url": "assets/js/9.73250f91.js",
    "revision": "0d3a56dd5c03432421cbc0569918c3a8"
  },
  {
    "url": "assets/js/vendors~docsearch.0fcdbc6c.js",
    "revision": "b76e2b686ed2bd2baec8c69a09088eb2"
  },
  {
    "url": "blog/index.html",
    "revision": "4e3e59f233e3d89cde3faa117fed6782"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "b1ef816cb180ac45462a60140568950f"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "059842e0becfa09c97646a57ed3daf92"
  },
  {
    "url": "books/index.html",
    "revision": "24f3fbb47c0d933890a16f7f09e0d27d"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "25a9cd55b9eedb02320ad2a44445db9b"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "abb5d1d6ffd8cc69f057442df928f631"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "8fe539ab1b564412bd3d03c180e57f81"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "6a68dbb7d0580719cc84ea65680d35ec"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "adb7b2f1d99528a7a2b5085d3c7fb809"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "4c110c29d277b43f13cd086e4e1cbf0a"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "115f757cb9c2296d1f00b8e6aede15c4"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "310a4aac9752b0497c000c857cc8c5e8"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "992ca70a13b1dc481756618045892036"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "cd4e8f2768c7a121932ecbcf8eb1cfe9"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "055d2889febc9bf8992a639aa906f79b"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "1d6eb4a88095210914629db62d89687f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "83f3d9fe1c295a25f8e5e2f0e4a8c343"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "289b68aa8b3a2bbde036b3b2d378b056"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4c1e9896099913324b975c040c86c458"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ce568d5c236134761edf0de11ee5aa23"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "7c0d2bc6b4ff6e222eabe18235e12c5d"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "0730ee3565a9e1bb25362658d70d5a7b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "e5abb250a32fb3264f9728ecef47f2bd"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "547e774363d14bae62df183a43ea8d48"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "73d127d0254a63384cabc7a5399364c8"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "bc8cc8bcd96a8bb5a9eea6c5dc174a2a"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "86921156bcbc14bd962b991b3062a76a"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "8cacac5449add7f9b136aa82bd437ab2"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "c63358618ffa01d4dddb7daf8b2b6495"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "f50dc228a709f3b68375b8ed47ea472b"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d562db79feaa8ecef9b87254165150e5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "1e6ba102973cb346dd41c37d6509a336"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "72acb109a8ee5a40d0a066d3b9674bb2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "3b8114587d6c53ee4a4f02b8d0f4b8e8"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "d1da97087b0f18e649d9be1d5595e4b2"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "f150a06c60c829ffce485a54e0dbb3a5"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "e4cf3ab9e478d86d83ec6ba975bc126a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "1b8db00d6c38eae1fcab86bb794aa340"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "3c925753c7415ac4f4824b3ade001e15"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "845779cf1781601efcad48e0f1d3a012"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "5b4acfb298a1b8186dca052a49c5efb4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "735954f0891689be1d08463f1ec0b080"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "38cfc858f4e2ce21b3355964b4ac50c2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "201cd18eee70c2811b97802abb4e1475"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "563f2d90fe3af46ef61de71ee7f7127e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "ddb29b27d27f59562344e043de2183e8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "fb6a13fd25d21f1f91c74b1b4324f4d2"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "ad4d4b19d314453730fa3ed7ed4c8359"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "00313acf6ea96b59e8c0736861f3ad47"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "41d3e83e869c09da4427e4defbe6487e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "57c9918dfc1605446a351cb3da837b7e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "11d9d22e26445ba96a210ba140bd251d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "224f598f976574e4db397c91b4683211"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "d4248148704fa3d909322678b61b05ac"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "406122684b6dc29495e6577b71c3526a"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "fa0735c73e9f130598f41ea6c61ccf1c"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "72195acfc6affd0cf3a5fd7cdbc052ec"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "5ae218d959de61d8381862aa7b4253d8"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "8b06dbf223f28f1abfa155a285985dcc"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "5b40eb8d75daf4ae03448c83bb4bc977"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "824b706d143735386fccb4d48a473449"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "3a440c4c8e2db6955a9b9acf917c2163"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "15793bf523918f9ebb0cee4bf4e5ebd8"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "29c57edc4151a55f0b26c99e72452119"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "14c8a27d4f4af311d28e1b3de5a7b3f5"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "9e9ed78857efdf343a04f1e87d670656"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "7818c50f5729974d985e13ddebcba148"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "287b3847f6e8909f8b59b77dfc177ed7"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "669c22d87e4f5e2d782bb9c17bb54dcf"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "ddf37abcb786c74f0ec9253a0cd77b42"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "71bb365b86797b24d148245dcd4099dc"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "76eb0607930212a20f51f3f018b2a848"
  },
  {
    "url": "categories/database/index.html",
    "revision": "e3711058ede7ef89c4223c75dd72acd6"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "bf3f79d5b4d2bf92081ca56e53d93ae5"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "cd2926f5947cb08af3e6c5b7e33f290b"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "7b1209a7b6b4af3a23d48a257bddf611"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "f7b9c4b97c9d06d179f3216a4f7e52ca"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "afb3e42eef3cd37e1243462248817c19"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "5b7525423b79e6ac28e44aaaff3c72c9"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "a17cd6dabb6295d10c25743147f13a9f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "06c4416047bd13c3284787fc0bdce643"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "6678006c8fc86b07a49feb3d88f4961d"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "2a2b91a8443c92a2e878fdaab329c36d"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "622672db4a6b4febc6ed7f99e1c505dd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "06703698a483a2be84e3d7ce1fc832c9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "aae775a1315fced8f981a723faa44609"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "1c37dfbe73c05a3b7392e6083a0f0c3c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "c2ee8e75d86f055ad23cde6bf2a392de"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "3563070cab15de2d5aefc82dba4b7eca"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "1abf0409ece8f01e36bbcdb3b9442221"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "3b950897607daef3ab34ea2d5e526632"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "8f82950c24ef3ef7761da1385e1df24b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "337b4890f4ccbc652aab668943371a9e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "b733e6117f730d1be55004153362f906"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "eb109207ede6ca39b0ac0181807082fc"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "0d3454f2386f61612545a0c9843fb1d0"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "bcf1f08792d3cf5d93a5f67bfd05185a"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "198f10ecd429e49228cd57d3a0cf0dd3"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "7a57cecc173014c0d52049c9a415b115"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "ce8775c1ba9f712a15470221037e79a2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "a5456e83e507ae4213bfa574a2aafd70"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "d7a3dae36bab06fc99b6a3cf02c78537"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "1c900fbce10d075edc35926a04a44ece"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "e693c4e8781f655d9401033c9c53810a"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "974bf27b15f2d376caab676a6614f915"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "4bb76d996a0ff6439e7e2cebf1abab28"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "e453264c053da5e6c9d6f09ef0712fee"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "3546df509e3a00b32da2fb41d0522172"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "51411f133cb00e2d08aaa99bd7e67ba4"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "a319e0a27297a634aca49aed58ada2e0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "d4f457978503ee639fd0f964465254b8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "e712fcd03c75e4e947d0d314b5bb3b1b"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "d8e08931a013a3dc5ba0b91b062e1f09"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "8443cfdf8d2236daf29909e6ab8b9344"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "9597dde8ec8c7bbaacb3d597498ea1ae"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "801a8563cb2d9dbe5347a6dc00739981"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "a82861b8b44b0688dcf76d2e09e9adec"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "a01f8b07978596d413392e93bc57e2d5"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "a82b1f5a3f5a92b13903d9ae522c9fb7"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "6134fe35fb26034ab910aca0c532de11"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "cefc47c45b0d1a108cc4b46343ea10ea"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "4814405d725c8f155a204a136198b07c"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "8ffd390edb61d149e3f9cdbdf21d7efa"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "ddb632f29755e8a472db30b74a9bacb3"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "77aecbd3cea35e438c52dffe55164b91"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "2d14925df8204bf143ece2e9cf1a9c14"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "05e5d3eb6c4f45d771fc4886eb136ed6"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "423f7697b22bb6ded11e3d4af59d53a1"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "3d4ca51f55c1e17aa99ee7109c46a0e7"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "f113c720a353a9b4dd275652b2388244"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "bd73022c27bfcb10eaaaf62d0b4225bd"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "96db5c1a608bf191f5c9674a01107d19"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "9aaca2b030dd66441759e55857b9abe5"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "ec6e2501597ab881f49b92970fff46cf"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "fdc4216d215fdee788fc89da612b1ef9"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "4ee08f9b75a6857b01037a03dce4f5fd"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "14cab9feb206587da176211554c08d65"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "7610b644ec1f17dab4d7aa1d3cbac20f"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "12f286d38d2bfc98f89e59d3327996d7"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "9b9b6c5c0a301dafc3580c001d9c74e8"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "1fa3547439474bdf30637320ca27584e"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "c5f2d4543c5c3c37b14899663ca46592"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "dc63c8b425e1436b1fa72b8734d1e6d8"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "c364bb4ea73ee3f808dedfe294510454"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "92933a5b2945ecf581b4c125697f43b0"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "40808a1959d03fdc4285e28dc585222e"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "58c32cf3f2b795f2640eb534694d5b7d"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "79a9537b27591ee48c9f85e0c631f693"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "9f20771bbbc7622d81eabbc513c0dc41"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "cd3fe9f459089b29d7bd9d6271dba098"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "0b427c4b524686cd3b6b71f26df0f445"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "276dc81ba699e09563afda83dc5aa07f"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "5cc5569bc045d56baaaaee56827f0ed8"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "a233b426ab0ca64cdc6651af4d8caad5"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "8cfb8c6b5d74c148eca19f8a52579264"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "3d89e254fb34cd408ef9959a70e494e4"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "2e1437ff1857c077b84a898582066722"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "e13bb64eaeb87b123f2af6c26546793f"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "c269c594182302d4e3a352fa8b3d356c"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "07bc1a8f66ba92715a256c787efee26a"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "2229726917127733c42da172656c37a5"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "3865c863a93fce9bbb65b7f701356e23"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "99580078a2b358e10876ec8e84ac5cc8"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "b43b393415a3aaeff6292a0764487962"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "261ffdaf7a3c058045d59a11b050e02f"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "6c81383327661b2d9aed6ea88376cbb7"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "0419f57b694d832b269043c75aa06d9e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "ff2343244545c210ce928b6ec78b3e2f"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "430e7f3834752a045e19953ad0238559"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "991e569ee951f280b475c7a0071377fd"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "2f71f07034b00066798d11c83f2e73f0"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "cc3e8f57e7299f2d0897e0da2e49c448"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "d013d4b7d27787adacbae6a9ead080e5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "62d64cc719b589e2980e99981db6e51f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "2afa74810947363f5a0e4645637d0574"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "b652904bed61ae189b30c361586404ce"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "4319fb5f15a4cf63b5acac1821f1bc0a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "45e3e5cde1df47c2c114b2c4fc7d0230"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "a4385ee239ee524168df24ca77712bb3"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "0525c0a5855c0de7d86a9009ab642887"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "98e6286c80ed49d95062c9f951ceabd0"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "22dd8e2ae4d6de5f7dc2a4ce9bcac491"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "0b6e73322886e0948139366719eb7f4e"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "0c558709fab318125c5ab11d57157fd9"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "498f859d990487ee1865ed236e7a2628"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "7827d8511dae973c68fb319cbe399452"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "847c6cac0c19ca8e89f66b2a08ddcb67"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "c52fc500bb221270505575546deba6d5"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "7ee4c47245ff4038b2f3a001188fbaf5"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "3719943b2d9be951ca5e67edf9d26ca9"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "3fab2a2c7a828c33383bc4693e1bd56c"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "e556992f6616b83ff47c8d6d44049baa"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "7ff7f213dee536e58d1280b01f13dcbd"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "ae8738e5c2755b88c2552ffd67f92dd4"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "195c05f4d4495f6d9f0419c6953c3b79"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "6e2e62c7d251b00d2ca3d1ce2435b420"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "16e123c242c52bd585426b78401a45d3"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "b785546c53c8eda3020f962686136b73"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "8162d2d627f302a210c23148b1403bc0"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "0f8a72367040206a97a644a01f8a29f7"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "8d334aedc34de930a7e7da07a1bf0f6b"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "e19eb94cfe49387290666b357f87098e"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "79e0261609ad55fe51ee0dcc0c940ab2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "3a5d689ac6f43a782d04795661feb043"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "e6dc0128d8cd90d735f9f77648a6ab65"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "8aedffcfe1e9d3bca01eac242550b4fb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "30ac16cac0a737b3337b761e2ceea76c"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "9e25977eba7c6e5a68ad6574bb54246c"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "86d4d8f7cd073655623188ead68e73cd"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "a3e09fd74ba90d3d1eb2b60a6e45206e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "0a3f54b8c0572e2ca82d013cbaea7352"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "83f7e862d99c4c2aee9349a5b9d27bd5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "435af40eb38677bf93307c5b40fe9317"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "295cae4c741d1a70f90ab7d303e27cad"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "3c962498a71dc34d7b2a66d64157d691"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "8e5261892989f0e74cfc2315f7beb427"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "402d066cf99d6a059529197789a79a82"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "5fea83669193f4e20e64fdaffcf155fa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "b1d4a221bbdfc7f728cb41c3f4e1d110"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "95da2e6dc9ba504c6fd842681679b9aa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "e82e6c80377cf5a2a6619b7982245e94"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "316594882119152db04bbd57220774ea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "186c0cb0f5fd83e4917e7b126ea33dfa"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "3e5d1795c0078d07e301f56c5069c912"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "50b0678c96ff5f88ad5f5150d3f4835a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "71398c9efb0cb4482504638f9075ed9a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "15a0792178c2ce44c6517cc19ad0a30e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "d9f6dcfdf57693c2b7486e5ba1e236ff"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "3c6055f4955c18bd907496ea3e871bce"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "e55bd9ebce97d5318514a6482400d7c4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "f6ec5710f8cc769487505b83bb3a8045"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "be8e3cd2c3a436f3bef70b4935b76692"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "77831ed5b240afa99f6c58b7e471454c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "473c1e42d3957d49f757a2e7fa9d0d67"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "0734709c53058c8a69d8f20164d273ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "64ad77e4e432dec250f893c0960ad955"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "821fa25ac6b323b4478d8af6d62d9714"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "4d4f179bb7c236fac22154c5bcb9359d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "5edf75ee22fdd7539dcb6d137d673bb6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "baa92f832ad99dc0884aa303ff01db7b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "69b0d9edbb4de5326a3d4d14d8e56e08"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "d6d9d9f881ced5995ced673ae229e4e4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "6eb075cc8e606d652805a45a0c91c16a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "89b65ad630cb62fc186459faa782df64"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "482d8e71af15737eab381f5da823cbb5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "c111098c7389fd5ff441bd8558b136c8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "762646694c1b006b51ce79cbed90792f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "64c166512f30950a0c6d9e1686ced468"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "3f71c0080e75a3e47537e4f4853b2aba"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "a581bac3aa69c90cf82395527abc8323"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "863d64f2c22030c417606229ead1788f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "469434226e37d563a6b0d8fa105b1035"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "9772ad16cdbc5a7f3f591d9ef9dfb3ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "adc0864651886d53f0c24d9145e9f192"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "659a064294b5fa457d3bb4477646518b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "ec2c747887d0a5ba93f664b0e8835687"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "07b5677d354ddbd1a8c2470709154622"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "2102ccc12c7ca59f344f2055c437c6f2"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "b6da769669bf7c3271e3796784e55b1c"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "4d5acca6ab798130c8f5ba62beefb169"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "00c61dff0f51080aff8b6055974171dc"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "9047c381135b7d78904457c5e6e325ed"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "df87035988422389b84dd273463d8dfb"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "0d790877bfe7eedc16f4aa371900f5b4"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "aee2d5fb35c4d056e0004d34d68ed02c"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "646e5dd2781b8fd2b5794f8e19dabd4a"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "ee8da93911a115202dc66e6eb9eab249"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "532661702cf81ffa4159ab2c14f6923f"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "556f4acf8b8d0d89734c8b7d54f0dc5f"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "f846d2f7dcdf492330bf6e5632c05fa4"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "84c197570f7a6e4d8d81bfb269b45c2f"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "4d958f7ea33f984d509252b833325ec6"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "35391327e61c5aeb4f40482714d89776"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "724a545b870283f3bea459221cda1fc9"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "07a1a8c5348b7d45506795e9b775fcb4"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "0593db4d12c1e1cb1467812c5f5b77b9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "30d2a5d9799b3d37fe3bf8fc7969c8e0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "d6a014914cc751000e13eb906f00df2e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "3c81c429efee85401b8e74dfbab470e5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "4a509bdaf8135aa056de2adff2b11a9b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "2e10b1542a04fa33daeb51f9cd0ff5ec"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "a4bf44c9e53a2a546f062c3386e46df1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "a13e1268a46a3d27e7bceb44e4511f8a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "274334ddc85fe83203dda2ea556b9f07"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "31bcf3d7b81abfff696563e5533fa754"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "8e98f38a7a2126d0e3a23cc979cf25ee"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "b30b9b24c3c9a1a12fddbce5d024a89f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "c58601ea83bf996e83491105e25f21f2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "d4fc6b5907b03f7912bdacb35df3389d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "5264dace1547772528bb94c3feddba4f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "25e318aadf3f83b8ee85166aa46b8dfa"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "94dc4c5ce909ab683f48dab0bd8333a0"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "fc5df5a97a7941a8b546c01079bf8928"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "f6c94a2a5b9b285641f7bd35c3a57f68"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "f3438088cf6cc93758c0bc94d8bb1716"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "d3d980c98bd7729efa181edf3edca65b"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "8b6c5917cf4ccb83355c51e68f15a66f"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "2c25f28c73082537a7f95752a6d6f299"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "4ce777bc97522ae5b74a3da4097131d2"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "eae39f1b7f7f30a0e0cd2f46c3dd7e05"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "e550847acd7ad4796972ce3ca4898026"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "aa05030273152dab44c5413ece611f7b"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "db159c44b333439586aeabcc651efb99"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "9f8db0e0f85d7a2333ff2b91f9096517"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "04c5754e378c01d0fbacff7276289d18"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "c997cc245f473466cef70ebac0d2901e"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "564f89d1cfbdcfaec5c9558be37c91d3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "088b82d706587a4f4b5a1146350c0eb4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "b2a1875735f517a29cd000a646f8871d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "dd3a9486d8377ca10730202dec505800"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "e0d20f4964e80cd81f3b5d518a7dc05b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "943132c2bfba6722a58b6188286f292a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "aa9c0b1ead6eb0528122b627ff27b461"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "2290b757f245bd1780ea3b8cf359dbc4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "86fba96e511b6d05d51d7a6fa793764b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "35bf185d7e635780bc0098969a2a2d0e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "f4052a7150d757887ecc1d9ecfad20dd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "3c5216ee7d3fdff6589a3a9c31b15796"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "220fde073e06a7b14d56a94b28943819"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "2e9c595d57b52a82595fa47aedd5377c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "9381088f20143feaffa3a3d8dcb7d712"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "b8c9a66735ef72cb6983b0f2d8c80167"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "11f4755c3d06928d33f87d39f9201bba"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "fd4864fab389746491d448957bc03dce"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "c6785a6fe8b7049340ee59c41aa0ed28"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "19e61db7a9780065cbf1da38870168d3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "81b58615719cfd7d41556d8d10ac6e17"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "315a53304c51888507b987dce024dadb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "f560ec5a16a271d2070ff56b871e26ab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "8fc4b33761ad64b11ff6728b90d7a622"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "728b1f011d714a177bbf207cdb4c4560"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "7c6b8017e2669b76fa43a62031c659d2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "1f23b7ff28130c3bbfd587ffd90aa266"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "d7715661f8b47ef13abf136e0a3b1528"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "66f280a6598748cc37e93ccd398c8abc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "514098eaaf8747ca426259f80b3610f1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "37090dd6976981fff725e346c900f906"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "97bd188570a8e9bbd37fda1fc646ac8f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "79223ec350aa1757718e39a18fb9fc0a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "5349ea8bddb5f068fa4d73baa323873b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "b3c8918ee2d5010af58bfc4fd8d873c8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "ea21e7343a6f37401a225d99fbedee70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "a6c436c0b9848db39eff398d812697a3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "4dc3fe16fa32f6fe4419dbb3aa9f6ca3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "698f72cde53ece6caf5702fb44f69b50"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "a13ad0c598c0357cf923af0aaf0a05ec"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "b55f16b31b2464b34a9c79e3b255ff2c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "ac1dcf4a3f61bd1f9b0468627012f097"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "7922998072b2fae09434b5a5fcc645bf"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "17928d957ecddc8c69c1fe3287891ad8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "e8f5153240cc5cd5f5ba9d5ae6b51178"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "798db0499e7556cb9f5d359383f2169a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "82e0e8ec1cf5b4af53210503345865ff"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "f3a4cbfaed24a93e3277b2c90c6ee700"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "a63466434179e083bbc35881468c6941"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "714a512b5be2ecda4f7918e482ac3f4f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "933f503e1dc88f67097c1bf7a925312e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "2dadba51807e7a4eeb962cc9d1037a91"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "a5fceb5c0da4cfe127783ca5fc6bd0c1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "1937afaa7e6427ee6463eca053683bcb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "ece592fecfadd8c7e3e9810a502fe196"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "daa70b0c18696e384ec72ebebcd21565"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "3935e82eb319059eb00e2d89708361e3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "24e38b70e569c18461116a69e2f02431"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "cb7433ad27287f2b31a266edbdd945d9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "866bb14a1a77ddc2a56ed6eae4ab55ed"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "32e70665cc619a4c2c01e08075d4d1bb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "2a41539538cdfc21e8423e6fd891da40"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "d4f1e8eb81d189d344d99d205dfc58cc"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "51c804f4eea42696ebff96734163258b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "aadae4cb497eb4820a5a0ab56bb740d3"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "4daa3a701f0a36b1ef651a77bc0483cc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "9832666304e88c1f3980242b15a96773"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "077b7942435e73724aa9a74183adaf98"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "d4d0d4e1eecfeec191aa8c4307a355cc"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "8e373d113a2c2b626ca8356347672df5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "b630fe5a48e06e874cac9fd90ee2cdbd"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "a59a5e093c7712b134f7932706587131"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "6d3a068962d35ec332ef615dfe84d424"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "b594e92c4c70f37ab69926ddcb2cb4ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "889ba5b525516e0762803cd67feaf6b4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "4aea7558241d2aab0dd4332738de2e3f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "e792ff789efc5137a703a9f396c1f165"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "befff8835b873507995acda9905bead9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "01737ec0f8c3830d7827ca523dfd5be7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "b3fa0c5167a5f6b1912cc10f459f580a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "92fc376a8abff6be937c180c567d5a0f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "a9e3624975544e0bdcdd959cca7a3b23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "ee87f53580fae77ee3fd1fff17e72d2d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "18a9f396166cb9308149f01607f41beb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "f39dadcc7b2d1a8840886d779bebdfd5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "56b80479fe096c5aa73543789138e671"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0dc450511d76a287d457e447f2e27ce8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "b0636a2f756bdc00d1a08c35561d1192"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "c55968f7fb99e2699085b6010c77d62d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "20f7f40101024236b30d83137a5819da"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "6fc62525bc59fc51b2667e60ee26ce9e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "3890109489d60203cb392404a1facb4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "caff1192e7da28358bc1fc965ac1f6e1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "4dbc77169781bb9357bc6ff0375630a9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "1251b5b3cebefd400ad9f5cf33f3b967"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "e70227779de54c5fb3280a7e465ff26b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "06c9a38800afff30bb1a269799e755ab"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "e6b65ca477dea7f1b6996ae6e3e4e775"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "b8219d1ea9e233688583d1f6a8ac317c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "1c2c47fc63599c3b0362843693f1ba15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "c48912bf7db422216514a9ab86eda43d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "382453ed1a56712a36fd1c23ab081cb3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "c190831f9a3a30a836cec1323a9a1925"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "049923915b1e9b2008d864f88c394d80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "fd51f70e9fe6e5e6286fa0ca5af758db"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "bc7ec2366891a1f3ff650fd4a2eb5014"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "a20690fb0faa66a21994f940e97776d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "216fbb7f8f8f5c90f05d7ae3da6e2c04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "4de5012c966b782968179eae314ae0dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "c7639f3dd73dd570d1830b57384d32bd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "ca32d968738614ab9b81e923353122a3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "2f7fd84e274d25a7e9b0641346a50720"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "25cc70ceac2f308da3ffd5a262c038d0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "d4f3d4f151e4ff0f8b290c00a20926d5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "8c373162f39676f86055d82ad5092257"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "1055a4b5a7447fbb45fface9ba49c85e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "27f16616685a9384425bc25ae96900ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "b2b333e5a4a7f62b7ebaa5ca6ebbb61b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "04a883ae2bd610f76f11bc0914660c80"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "335a12d053ebee915926f81f2575729c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "74fd8b010da0ba40c0f4b8b26508b31d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "42b240e1f264f688883beeaf7bb4cc5c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "6a2d56cd65af799063a0057c884c0a75"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "9c572942aa64bdf799e68da4df33555e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "9e2bb9884a0024cf47bb2ac95cd9b222"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "e044e74f23ccf34899a061ef28226d05"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "209775042f83e0c45a5fd05b1968bccf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "318eb3616710a2a975235fff64f2a6ec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "d3e41b8d9f54d6099d10f045ce989bf5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "3773288d6d62e55297d4a1dd8f569387"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "f40da85bccad414f00e5d35a9e5e9eec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "94047a3c8887fadece1fe0ac782a42e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "241ffa861eb119a225427d5165a6065e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "92dc0de29c434898654a7a03685143cc"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "d1feeffc95c7d713bad2c2bb71f17af0"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "30aa7ba9675301e0843fc6ec739e7d27"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "e874ed0170f82e843132bc9d492d7b50"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "71820052c7f6f2ed95367047bdd2a360"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "403a4458ac1c9c5ed3db2f431d31bae3"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "7fc06a2e0fc6165047f1550939532fea"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "1bf0bab25076fa6f4a13ff67c0151a5d"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "8a7fbc5e5db0f9911130cad7cd564332"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "03d8b64c52e871f6acf5a2de877028c3"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "1efde8fa1e80abaa3002fa522a276247"
  },
  {
    "url": "categories/index.html",
    "revision": "c99ffa6bec6031c867efad2d8322eb93"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "6856319584bb8de17285e06d09c5c1d4"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "7acd920f10467ebe0a4ef2a2ab8c9534"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "95c574a666bd94203b389961d5c02783"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "588dcfbdb8b366999d0fc86a5417146f"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "3c12fa15377ab2ce797385d7b1cb7860"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "2e048695f793ff9ce3e356dc75185863"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "9c308d22b0d8b0e111767d4b2ccbe777"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "7cce6263260df95ac702e961bc0587ec"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "a3fea689dcf02d971ad0c1728d9e77fa"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "f83e8094ee9d98c1ba7b8e6f90197fe9"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "3daac423203b4c1e314deae5662c3bec"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "b9243a68585f774a10a24ddc6dcb37fa"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "bb5bd712d84d7226fe024274c4af2627"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "174c1bbc54143ba98e39aeaf73a42e33"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "5c69e95aada030a7375f21ce70ba5cdd"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "48d3c0d62c624f02580bbfa7aade6c30"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "d7bce9756f1ebf90416897e5d0afd185"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "d8e76afe97b8d255f7e0a943442e7be8"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "423b431225cc097d0b164d57d9882e61"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "e774ff7002282175d1feaff5fa230793"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "aae9a1eed88f62665069d72bebed80c7"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "af495b55a2260e998f3bb4532f80cc3f"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "1197bddeaabe53cd5ca45295a56a1244"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "0474621eeceb319ce2995ab5f0151ae1"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "a38b9982d704ba84021ac40199563f2b"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "6cf70bbf31cc8552159f5ec86fb8a629"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "48fd2c6b4a882989cfe21b6d6ecfd610"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "91d855c2f225e5e4b65367fd4ae819b6"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "d0f04c5859a791442e8b54959aebc05b"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "4603d58c69a16676eaa09742a54059ab"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "9041fe32c3179c7d2c27156bfe531e97"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "b3869a408611ca8633dded87e0ad48d3"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "c2c426310ba9b3f544849dcad099784e"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "d5b854947aa64c6a753a2f46d87e828f"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "18f2b0b7b7f5559107c034b92d588dc5"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "713d01d99037e22309115040a16745d3"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "0d45634bfe40880527f3622e85d70dd3"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "4b0317e18d9652c8b5a0990d10d09599"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "8388639872b4050597b6614b7e453721"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "95b5072343a56844c88190c59f8728dd"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "0f759ddd78ef37269b9a1ad20260d1c0"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "7b6a3f772f41e4709e809d4f61bb6f67"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "0a53fc425fd1ed648243c6ca07e87164"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "c8efc50fd89e7f14a1fbd62e23994a07"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "1c991692bef9c9e1f5b8056a4605908c"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "65e6c90da85d2d69c18cdd493fe396b5"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "10770951b5ce6a0d7ad03b8fe56e0d43"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "01329ca6a627100390b0fe99b5cf62a1"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "9e5b3fdbf8f9a167b692e8237c94039e"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "a5e0bd9c2116348f8aee72573c67bea7"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "87cd938040ad5212278f221c716e36ba"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "afdfde52520dcf01f97cf931a65c088d"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "3741ebdb55df1c4fff6b289e90cdaac0"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "436b6e99c5289a59b4ba1d57c9b44e36"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "f1a2e9b26b1cae2acfec3ecf8c363640"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "239da7f29e7c4cca24a816a2587cf2bf"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "4541f47ab642cae30e78745cc6409be9"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "11bd25e109e6622ebbbbdbdd7402777a"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "5aa9e48c63ff7344928148c4dd9859c6"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "20a0b2d949323dac0e0f7144cb0e33e9"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "03f2a0ec08ec8bdab25635e8f31f2d40"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "82eb5e11ad564ddf88c585883b188ea1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "a2bf1edaf6d953ddea879d9cadc80fea"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "fb93fa036c4cc29ee9cf940771bea316"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "b4246039039504eecad29e3789827a0a"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "dee74bca6fc9d2a9acf2bebe47d8908f"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "f936bd754bd8b59518b1e6bed2ea7cf6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "79a58882942a77cbfd8610674454b000"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "a40d6061798552f347b6e518e9d8d801"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "0712ec4b9bb7c776e4d2e612df74b693"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "83648895775e5546aff151e8dced4ae6"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "42ed49f5889876f98e5034f5310fd4d5"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "f2972c369ab62a549f0dd070daaf2b2a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "f458b37b4e27ce1cdbd6d6001b61862a"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "0eb6d4ddf01381a86f87968e18c2c3c2"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "abaf6d236f2ba55aa6237f51e85c31a2"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "5fa728c8da3184c19b5b4bf4e62b541e"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "8f9a133e8d0c6a1d42f539ae7060b762"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "c12bc43e0c6189ae1f1d81163e416051"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "6cec24a79d4d99b739c3ec21127c6357"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "d6960a057d6556dd1a3b487ebf8f4449"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "d1f24aa90a7ab27b1419db0e51888f13"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "112de8231668f07d9ab87809ece29482"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "7553ba7fd67143d37df932615eaa63b9"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "f6ca41f0d163bf10e2fcebf80e410352"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "392481a9df5c894cc561a38842ccace8"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "8e4484642108d291133a4c10d42e5379"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "f931cde2afa1f5833fc53d25d10b5ed9"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "60ed05f5701ffde00db41b317438d130"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "92e0416aea1155448786502946e3c844"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "cfbb434cc15f6fd88fccea226aa6bfbe"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "839a66fa76cb2d3bfabb2c6f60f29518"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "a6a3f166018906c1a9a68871d4375142"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "ced1162167954d47d971b795b5b18bf5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5689adabe91215f1fe91caf0906437ae"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "429a58dcc2d5e0a2cbbba2ab20787a27"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "ba49829af37bea82bc03582071a716b3"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "8729b8a3a43cca71dfbc3298e9b088c0"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "ef1f0750c13b8265f12a0aff39f1f790"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "4bb986d77aa5458b042db79659340146"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "99fd060c6d4f36b2516aa577c05b9bfc"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "79f8b07d1ce19fbd36a93f390ecdfba6"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "0cb7b9043628532b98371c283a3c872e"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "08abac0cdcb6849ceb7afff5acf73140"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "c9b0c751b1d208fb890f7996b775680e"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "9b0c34a7b5eb72b2c9bbe5f2c9349766"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "9ca3957ef3ed32d61ec2d44dd82a0fa8"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "02cc400abc2778651cf2c50ab41f77fe"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "7be6fad0fa4f13a212cca3183bbbfa68"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "584e62e5e5ccef1366d072be0c2a06f7"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "7981b67e32069e896b1839404b888505"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "615d69c227d8fe3495ceb3da9a469d87"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "6520dd20818d7cef8663f1db8237ff03"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "6592a2091b45565945ceb0e516087f42"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "9c4a664be97307ca56d1742108098666"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "064eda8a7b4e362f553115c8caa27527"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "55fc4c8d162b275342fe5611c1f67216"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "84384311c939c05b455ebdb2785b5cb1"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "bb9bb8e74a9bd184399fd03cd05b549e"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "4a4260f71479a7977309bd796b99b848"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "7f1d5385bbe1272c2fa5e7c192c7ac42"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "d1d1b3c282d1bab638fc98f0b6e0f78e"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "38fd730d779bcaac09b9094f0a2c9f64"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "32c1a6ff5ba945bb70c11448a0070841"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "94f090b3915d86a7c1b0f52d1f405245"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "66de2fe8640e571d041cd190b3b64ca0"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "3e1f4c85687d38f75e732a3b821e0b01"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "35ec13234dd223a2f4e3d2c05d2121d4"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "8f957bf1f46be03a9fb4868373117feb"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "6c1c740fa0b61bf2a9954e5c2372863f"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "fcbe11406043009864183d484171bbc6"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "cff3ecebc45e7c47a0f876ad377daab6"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "8e5116b19582df7b082ac9ebb2778e69"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "bdfa1a8918bf1accadbb5eae6af50276"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "834e380d897f36b5f08eac4f4f09bde1"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "55af6fba3287060e07b5f1caf5588950"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "4f476e8d728a12c1576bd978293b4423"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "8ca72aea98ffeb3c6b4c8a2d11f77e62"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b2d5f14c73c7470240a9e76c989d2e2f"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "a490be908ced702a7fca3bda3d6f5d1e"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "9b3b333883e944273122e21d98125e60"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "d0e49df963cc13d46bdca562ad02d17d"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "dbba0aa1c04931aa7334de6462635e5d"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "31f1355e14d6dc3f3b8cf5145c8fd81a"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "08a9c6771259c3e4a5b02a7abde429e5"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "57bf4d7b43cbc8d6abdb953e91b4db44"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "c56358d10b323599b5552333fab96f3e"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "8e8076430fb199ebba44615d5d47b097"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "ea10f79c4c322acf194d52524ac0d4ef"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "beed85a9237ff3ce6e5a2867c05d1c4d"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "ebe02d41119123cabf6c980227c2a6ef"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "017d8ce626d686135af139a1b8fbaae3"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "2348cf19d60856a546b4a630f5eff885"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "854c6f103305ce60aed70e3a869708ac"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "fd131e3f33ee9c5607d4e5bfa92ffae4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "349a28d205a8f9246940e0b677560a62"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "4171f17d3727c340c24fbbc212c2f763"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "07607fa6fd0355adceecd6cc06b21e6d"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "d8f6dbe08d89c994e285d0b5dfb5fccb"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "29380b6b8aa2d79cc44fdcf804a257a8"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "3e73f2521c6efc107a0f62795bf14061"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "69541228141a9a1d2b3891793ff18ed1"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "e77598d9fb0ff4bd1c6ce00a7994aca8"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "6a9a37d4a9407cd57b5842639a755979"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "680119fd5d369d93ab64c551b3be6237"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "39c7a6d1aea719968c05645af42997d2"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "5b5f78513155ab899427df5eced890ef"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "f3f35c8892a16cba676502dac9e5bde9"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "4601e1377ec02078efc305283d5c8533"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "e901a940f4e5ea563ef2a4aba8248a1c"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "7ba58ac2c8ec75f93096bcdd39184499"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "9783e8ba86e52c4da44b66aeac845d26"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f02901ee797cd3292bc7290b318f36ad"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "d82d81e12a7bf663ae7b40b4e16b7a37"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b9e6cb7c3ac7ff2e2d4ca2c3f0fe59fa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "fd31c59687f394138b805b0f85980fd7"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "cef589d79f7093e2742706b12717921f"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "473d453d4939bab0fa225e5ee5c59e71"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "4859909bc23f1eb4d845457481c43522"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "a231b1ca016e42256728a1e0ae77b936"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "4c50c06685b9a315a7a0a8bfe95e385e"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "3d75a938c3d6317f4f46c87b8a578b5c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "e188026f5b48354fd2d491d3c151fd81"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "8c290babc43d2f49887cc3227d64d8aa"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "49b35e9532cc464d64d1cc0f22b498ba"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "43246a7f897cd0f6edba0bcb3527fc37"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "67901d1e301aea2e1ed2b3118081b144"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "c8adf20289a5879e913f1d94efb15db2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "429242146c11b5714f3f551a8d15e722"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "d6066bd4eeec310db088402155934d23"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "19d9239a9d2bedcb30d243ece793b0c8"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "a6f144a6f62f6ceb93bd31c4d445342a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "00577f0fe2c6221664b39bf1286caa28"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "5922f2b76eeecfa034af25b1a3891823"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "d6be37484eb44f406a38f41744d7881a"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "b9e714705a61846c1c02fc9a669e6fdd"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "fd842578b9e4103021f54ec29c1484d9"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "09bd9fe5369105a89de832012209e8bd"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "df5c4a41b3d13c67fbe852bb32c76e33"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "00f3b385793f68914dc2cc2dda10fd1a"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "75a8d08f25c5ae0e2ea4c3f99e79e607"
  },
  {
    "url": "categories/os/index.html",
    "revision": "b4c89feb0ca5d7faa524c0234d598798"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "3061cc1294d42b668f2f4d4bc2524589"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "cab45f8e3e9fdce37c80389247a0582a"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "cc58dde453e10b60f123e56f99710945"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "2f1e69b1319dd34f777676715d7ec298"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "09d2b0d0f4994db999d25a16acff0acd"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "8aed71de23026680cbb134e0b77d6e92"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "938a1fd858608f0fc6e00a8c76be5100"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "bd11712df8b74fe65a806082fcac4c45"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "552b4409b16df18d11e49f9ed2c00d2b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "ab50fee4c1fb3178e014ac741cd537cb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "7c32e5f0322a4921694b2e7fb0f8b59e"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "609f6cdc3d5a901f53ee08e37b21acda"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "fb7a37c340da4aab3ecb021bf905dc87"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "b1e285b48416501c2db11928cb57df9c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "9d13b7fe4b9b58d90d425452eed9da9c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "5684ecaccaf277a26df932abc17ea45b"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "4c5d7f9d17e6d631f6504f1493a78d93"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "ad4d04a79163cc1cd36a9875eea03128"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "123e1a926f81ecc056175af1facc4bea"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "1f21f3a7cf150bd82c077b89f155320a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "05362908715fe1e64968eec87c98c221"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "582db80ae892e8d8bb1e804e4a089ba9"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "edc6d12771e74f70171e8a2f2ccc3b0a"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "3a9e49e475290379e11c49e78e4f2207"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "ca3bf1c874f184bca8fcf1bf270a12b5"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "9bd7071e4d51df0f8b1adb5d8d7a5fee"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "27de766d7848483c65058bd72d8c2fe0"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "660ed42b7edc1466c32174c65f5b7291"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "b6edb86675b7021dbb1ad8ba7501c12d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "5b0e15eafb0d3b87db73def39506042d"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "f856e6d5d363a18cf5f1b0269e90ee2c"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "c25f97586aeca756ae0473f3f0b49ff0"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "6ee5153aac6d16298df73c2dfb85cb38"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "d32abb8aa9f123c069e5136ce42b285f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "95a876382c02bc1fdb755040b2dfbdba"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "23f0c247972efe4fbf9f011ddb80bd4c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "b664b08441a847902154f10feec91b20"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "de7d0f5a603b44b03a984737d2c55d7f"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "da653ce6c2283cdb6cde942f14d097ea"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "e23b90eab589da5e33fab78822f67914"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "ea880323185e57ad0a2c730dd4f60947"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "8a40520c96d8ebb0d49b5478604962e3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "fa687f98d57025899947b997fe0a6c96"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "8aae3d2c322848efe4500b80f4e1d11b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "2e83b24ecf8ba667d8348706c70750c9"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "efe1d95679f913039ba19a21be896577"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "5025eb4bceec3970caa23775f2a80489"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "1bb61440c2b93a59c3de76e36ac5b72b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "58758ed50f1ce9f174a1577c34cef0b8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "b1c85523a7c5a2a6959838ce08ddbca4"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "78d9191a520257c202fb7c74d3c91bfe"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "35eff84e545a37daad9f2d531b039381"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "ad4db2ca880cc92e1f764340f6831231"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "5f269f55e37ac0862045ffd9610c2b20"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "a0d30436561340c6f8734c60c9faaa6b"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "87c122bde60f1481f2fa33c13f303c2a"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "877755e018476db1ece89d502fdcd2a0"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "29a1550b37ea596801c13b1330d554b3"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "bc4bef139944a684a61fb09e908f52b1"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "8ba5142e67a7b65b07b2c8cb3c9cba0a"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "bf9faebb9740eb5a2db3a1ccdb31b29b"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "42cf6bd8bba4b962006d0cf9393a8db6"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "8d56d5291bf76988262fbd79da6e2e0a"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "6fd87458e14f57c6fb391b04b1206cde"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "54cf322e7dca187170f0b0fae521eeae"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "6b4ab3ec6433b5c17d0a3618d6eb8280"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "b4e17fc7b2f128f5aac3f6f41f5b8d44"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "3933032536b404f08dc836ba82a12a1f"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "752ab8e3c915da242bc0e20012aed4ff"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "33be4ed4135adaf9465d2541ec0993c5"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "5584a5dfb6bca42f11127652b2eccb9f"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "16835f5cf6c8b9bb89d404fa3c893826"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "93c9f4e054a5f0a187d3b1c4ea1c168b"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "1b622a86ce5811f1b8258e9d13afcbe5"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "a2d950a0768856894f28846961d1918a"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "23817f866997c00d039e6c1ef050c64c"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "511853e97cb57e3f31f888029afb96ec"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "086d85155225a76550edad0f50002f95"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "f8ddaf8e0f7e79ab772abc94786774b4"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "590481ff0e43c8ca3ad4e4c691afd4f0"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "2eceb6cb5ae2454d95aef293d96e082a"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "d588dd3502a2eeba068bc896af84264a"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "f306b65a39bb6ba4622563bcc01ae915"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "32debed539333e49b0d75a95b6b5aa37"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "f2986303983635ccf8a29aed308093ba"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "9ffdb3e14c0892cc3c2e99cb3d17e5ce"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "662cfcafeca1375775f75d22f04a86e8"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "757b4139909b569e2db15300977d317a"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "84dbf39f04dd1f777f891244e1f9d940"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "df946d9ec17f602b24285fa4f050afb5"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "6a7a535492ac40d5cec0b576245894ba"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "c700e5a6f0ee759bb9945d6dd92efdc9"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "bbc0d09b4dad2f9997c5ebb79ac3f864"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "99df7cfbb948f3a662a5a9cdb04663c6"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "9ca4491baf78aa46afbce27362505eb3"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "8227789014c1e0ac4ecd94ddd5d10be4"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "6e9b7f896992d7c93a45b42d1e873b84"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "0302bfb61ac1cfba0db370c81ed89ed9"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "3c92aacdfc14fb2b99643a16e4e78ef0"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "c6bea64aa617ce72f784d04d1193f731"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "fb06e5d013fdf424358a51ea45c8359b"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "41f622db7379c2f628b94981901fa5b1"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "74f4071e0dce2b1e06ac1a2dc37aca28"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "ae2202b0cda091c97361e55d71dc780e"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "46d78a8658aca963d5cc4791d098ddc8"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "9ad892bd3bae55ab7b1ba3f8ceb448ec"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "c068f2602cf802485f02ce2122b3b901"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "eaad12bdaad4efda716d02f7d1c0f899"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "8d8fcd4474e4dbf1aba6cea8e71149bb"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "8be323b7b2f0b35dd33836a75c33e730"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "445a17b4f07fe009a9e564936699910d"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "604a6ef9bf8897be35948e7c3f43ee06"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "be622a9d2b538fa5396a6af8ea719c0c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "7316575cd564769d366af535e96449a4"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "5fdff51e0387f82452f3593848d11ec1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "35502056ba0523663e5735f255f644f3"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "7ce6d260b778da64aa7182b70a061ac3"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "e361d18c865884fb045f2b9517cc051e"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "096eff60c6ed58583e6db039e159a608"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "7def677205be6a019b49d11f68e884f6"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "364049f32681bc40c0ed82b4d3d064a9"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "b46787c4e67943d2d590b9726749d3d1"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "6ce3c84dd97dbd40da602b89f86d15d7"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "53244ab6324922a8178fd0efdd65090a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "62233dcd1f537937b129858da96921cf"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "fd0ddf18a64c9d678a4236b7b56206c0"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "008044844a8090f7777c2338bcbaf213"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "6f22e8840794014e2b79bbebf375f154"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "3fba702aef79a952cb8c94cc29bef5ba"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "a41a354399d8b6abf199041e9952cda1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "2377599b067f55fa824af1ccb26dd40b"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "1be04f2f7f96af24621559358354a931"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "a026492e90ac279e5a0839d6a30fbf4f"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "d21d9ae3477294b3af3f54a22397e408"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "5451e8ade4b930bf85b202490327cd50"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "f88500f1f0591e47ca71b5b5682b5c9a"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "4b963a838e05c0159f7467eb7ed57eca"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "b470b47c8ad8234f3e21db5f1292a52a"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "42a202f9aaaa23da54705416af65aab4"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "0a54095d30a2e73c45a8e10c7d125fcc"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "3ce34195e0fd09e61db962b5339961db"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "c0c1f55be5433b540e3e5031befb05f6"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "ed907f95075e572e92dffe6c2520d6eb"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "9c2dc30c279a540648553756889a0738"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "57a17cd80ee0622c22c20f04af15e48f"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "b33a5232b8865cb396bb3ce1c08affe3"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "eb7497ca7cc90ad855705919e3abcd9d"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "76c9cc5d7866bb4a9f7cde92fee1fc19"
  },
  {
    "url": "categories/php/index.html",
    "revision": "a1c0f4bbf3d37e7c869b0c9ad207efcc"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "5a943b21ccb7d4a716ca681b466f7aba"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "bb4d7dd3414a05067edfeff5d5c4a82b"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "17e64e316e143d6bc6f10cded5a81b3b"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "f4394aaea37fed2bfd4b2a53000a982d"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "becc86f4a7c692f116aab3ef1abc4dac"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "d19ac0a68d3435c4144b06c0fbe99cf6"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "5d68d4b02dad7ff71d02ced8443909b6"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "d3aef992999448b40efa410292e53986"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "100c54da8baecf0dc67193c251b53139"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "53e3b7e0a25bfc6424cd17cf5d3676ee"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "0c5b59f71b050576bfcc99a687ce5688"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "e173a5bcb52b89ff8c85c5e89592ea08"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "2b55fa7f4bc8e1f16e9a3970e088fed6"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "602f370262fd684780e4ae05978911c9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "2511cac4a6e86018b935c99cf0b3abd1"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "4de58b162ddd02428de6e87278fc4591"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "03adad4781beff012b335c369b2775a1"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "f061204bbff3849b770228acfaaa53ce"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "f928500457b7286fae2b769559a2c504"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "98315dedfff744049aa84e49af3eec62"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "621bbc37612017c75fd016629d673ff6"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "48ecddcd0447574bf133aeb41cf7f5f2"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "ca0b1c7d2b7b758018e2e0e2fe71e9cb"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "4fcf56b867cedec5e0a91e46edeef9b9"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "769732148298358f7efdabf4b3f13034"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "ac0fe0d6e57ff080bfa434447dd3fd6a"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "693b173e6238991b535bfbe2b1d6d043"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "428b1a068850857ccc131181c96e8e5c"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "d42fe56464248f94529ca10b28e1063b"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "fb579632d446f69a72972aa5a0608274"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "f5cc248997bff79e8f06e789dbd395ca"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "02ea1fac44a61bdb458ceb523fa1b7ef"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "b15a6c377c5dc1a4fbe803106d6a3f43"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "17fbfef617c864d4a2fb09b7f147f3ac"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "6dd60be13eb8b59ab5f04a73225cf607"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "9a98d69aa9adf21c0b5e0b1865933e5e"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "3821e6c42e53799e713a7099f2707a42"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "6335fc9bcb6820d16f836532eff0c4d4"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "f1ae7a4cff16add2dc11efb1e3c0fbf1"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "c39ea9834f8b4c8dbf5ba6066709c4ce"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "93a1882b24d67764dbfda217df1add7c"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "571771b8a2426cd1fcdf3aaab16d2e8b"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "95da9fb93cf4e9aa80a23dbce83281aa"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "498a4c6a9c4969a2f81559714a4222e1"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "121823cdc53cb007a10c51a22a810f60"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "c37603a1d9f7951601d568c67c2ec9cb"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "2d5765c34d4bea4b0ea1c094234f9fa1"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "7527a863dc7ae3ff1671a4b501672134"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "c08a73393bb95066ea4e57a1d33bd535"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "4d9cdadf34f47bf58bfc0e9fefc95c86"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "4e5dc2f634f8b86a7580d0437429936f"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "7daddc098a8d5e12129a0747547e073b"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "489b3b5eb0920feeda589051d45d0944"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "27ffddc5732ce927b95d9dbd03908999"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "56f14eddfc53e0b8bf94521bd41a1c93"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "06088ededdca5667d83fd610a63b0b32"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "4eac24a9fb709482cf0af8933dad31b3"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "d05ad99c1f4f3d26eebb9cfac8b8aec3"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "2d162ce910d5e416e184bbd45d43b436"
  },
  {
    "url": "categories/python/index.html",
    "revision": "f3298ad0c7cd56979aba6b4c7c2c916d"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "98bba522da2f8a99b34ed2fbb84c60d3"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "e0cbf1b61c1fa79e04ac16a654d90216"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "fe0523d21fd2466012807aa342adcb47"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "f03a65b6459ceb5bec64afbee0508c1e"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "3251f54f09528e67dd9784805d108477"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "8aec5b1e7e933a92d30e47e0f8a3dbc9"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "b55ee7bfd682a54ab6602da4d8700bdb"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "40d4ec8b6b4fda8b105d0c11f8f3d7bc"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "6e10c82143711751cefb6c8418e10596"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "c748c3bff9cbf397f6940ff57bfdebe5"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "3cdbad3d5b7e0b77aed6ce9f34493866"
  },
  {
    "url": "categories/system/index.html",
    "revision": "b3e5ee106a14b3117af208eef683ae9d"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "e65f213e4a765ee3005e0acde0d6c606"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "edf0413544d3495a81684cf08aaece15"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "2f0ebc9bb9042118f0453bfbe697a940"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "cc40cb8bdd232f5d86c6448e84698ab3"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "a04a34633befb42f0eb982d879ab386d"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "654e3b18febd6d328e5aa2d527aa3b84"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "fefbbbbe8d4241a1b54bafead04bdbb3"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "caa186797ea2ba718accb2e16424ffb2"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "da19decbb377f03c4285efcf1840a755"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "33479bbb6dfd59b2731a3446f55cad9a"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "4ec2c8b46787097ae9954838f30e370b"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "6c66bb1f7852bbe952cd710c65bf5b61"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "7d85f2223a33ab0ecdd484143d5c7b02"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "fa46812ef9e803566e6a0943309a8e17"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "4d8325dc1f8614f82f58ae21e061bdbc"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "4b2aaa8a96ae02f196ab54d56d24ea56"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "7349016e0ebbc355cf480e6494ba1b57"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "5675e94e6b007a450bb0d379ecdf76ba"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "9114944c73d7b1b647064893711bbd40"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "d12b5f2bb5cfce0c69f5fe6936fa3614"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "3bb9bf4cf944e8f6755da042ffd82dfe"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "ea53941f3389403d856c1469e0b855b3"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "ddbfef01148773fbde0e8fae0352f36a"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "fe822e9ebdfa87ea26a9115a98b7582c"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "0cae7304289ef99989528e2bc498e4d5"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "135d5f7801e4bbf2ff342603fb99c84f"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "b283271f2fa8b80703a939ee4d1efa15"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "66f8157a460250245c14cd31823179ac"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "f89e75bae0d60583e410da4f59a9c962"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "aa2dbeec75f2dc238e7d4877144e2608"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "dfc1dff4e5112b0d18975b43be8bdee6"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "9275b28cda10bed8e52b858b07be5f90"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "6e678461f3f9975d77f42c01762ab7fb"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "c772cf40fcdf0e91b06b1bcdf82155c0"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "843f62f0448084615a204fceed764080"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "42c8efc483c0f8239848c77afb9dc012"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "3d3d21767c550b439e058fe70da6695d"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "79ec035e2b6c8524e8f50a320417be65"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "51d81ee23ee9b9c1f26b2e3a5dce26ad"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "ec6cb120c41b9780f97b606b2fec4afd"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "7180a3b2e3f4afab764c10128f03cf83"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "462335008a31f571ad1ddec15d12fe79"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "21967c49382f041c3b02e81ffd96e25a"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "c772d44a3a5a712a52f3b6607bd48e22"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "43171e28d0dd36f840ae3270ff3280b3"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "5eade82fe86df98039caa15df076d22e"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "59c7c94530e3a227a5a4c14405c940d4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "eb402d32d400a89c00abb94dec43a62f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "5f1ceeccf828a68a2cc5c23ea674babf"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "a6025b2559859138b360b516eac3bf45"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "d09c1baadbc5a1572f26df7a9e28057e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "87c5f2d9ef18d3ff69cc72e5c7ff4822"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "ca1076e8470ff6b36574c47336358a0a"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "3165bca3632668c8d0cf750f627cb077"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "73499f1c2cd8c7f142bdb82c60914ea3"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "2d39d40a7041099a2a203199ee97470e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "d3eced2aaf2e3c8ca6f52735a06310eb"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "6e58272ef42b02679d6b82997679a38b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "d8237a94ac2b8281349bfec872bbe7b1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "17681fd5ad655ba5253c9e2e8d9fcdf7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "034b294fe5cd758be3f789b18f34d898"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "e5de7beb272cce009bb9460f9df95cbc"
  },
  {
    "url": "favorite/index.html",
    "revision": "c5a550770d96c599e323494f2fb854b2"
  },
  {
    "url": "index.html",
    "revision": "de69ff0e2c32e3767b928f1ac8cb973a"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "a38976ff472a383ba964be619e364df6"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "f5fde6a4fc22cce3bcc8110023e97b27"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "743c4a83f49ba0b0174ce42258c653cb"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "b33b68aea80ad398d042d495c6237697"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "4b0090617a1a5e111632fbecb705fd13"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "6d056ca9323802a5e4054a87aec8a78d"
  },
  {
    "url": "note/index.html",
    "revision": "bdacf91c0f845fcf4430282fbc49a4b5"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "c02750111f7e9ca576f24f7b6c66d13a"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "fd9e0d890275cf723db27b3f779c85eb"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "989e5354ca348f3bfaf3d4c5d7d19f6e"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "1fba832cb9482f03978ab218d994e510"
  },
  {
    "url": "share/index.html",
    "revision": "293a406a81472b3a60be21c0addbb3be"
  },
  {
    "url": "single/about_me.html",
    "revision": "70f603479dee0d7e7ad345cc91b6faa6"
  },
  {
    "url": "single/all_article.html",
    "revision": "940adb149b30dafc27f933c8c2f9a2ee"
  },
  {
    "url": "single/welcome.html",
    "revision": "59c70c30c823057513d01ac795edad62"
  },
  {
    "url": "test/index.html",
    "revision": "0894e6db871016944038ed30807791e4"
  },
  {
    "url": "test/test.html",
    "revision": "c927e1b2ceb25ce896911fead2e034df"
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
