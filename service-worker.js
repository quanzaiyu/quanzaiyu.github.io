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
    "revision": "457abefb20afe0d5c654759d5316adaa"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "f8fd7a65094794b23c4c156a65805c3d"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "64c35f715ef780d937c078a4ab1e4672"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "bf95907abf03199e739caa980755aff6"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "b2ab0643ad83c8d553866d1258fc5068"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "c61c2b453952607206fafe991159cdaa"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "824966a84bf45522b2778fd6320c0e8c"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "c3a46b6d3bd1317ff1e15147be0a2a08"
  },
  {
    "url": "articles/index.html",
    "revision": "e3ae08636157f22d1181accf1b30eb04"
  },
  {
    "url": "assets/css/0.styles.698e100d.css",
    "revision": "fb4fc0fd2bbb321de12539e3487b994c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5696bc34.js",
    "revision": "ad2a85015ee092c9d31663dbbfc09c43"
  },
  {
    "url": "assets/js/10.148f1025.js",
    "revision": "13c18582037569baeb2cf1d36b2e57c6"
  },
  {
    "url": "assets/js/11.b37ea789.js",
    "revision": "03f4c4e5941c3002c837d01117490bf4"
  },
  {
    "url": "assets/js/12.a9bb58b1.js",
    "revision": "dbacf67da058e4e024a7de983ea25804"
  },
  {
    "url": "assets/js/13.f4e45062.js",
    "revision": "eee57a03b88877293c647dd83282eea1"
  },
  {
    "url": "assets/js/14.b5851d1a.js",
    "revision": "b5110c7f213e320c5fbfd611d527187e"
  },
  {
    "url": "assets/js/15.15634fb0.js",
    "revision": "9a2cddd838f290b404a6caff39834f3b"
  },
  {
    "url": "assets/js/2.18f6eb9d.js",
    "revision": "3dfabb37cda81da87d1b4a7334a2ed53"
  },
  {
    "url": "assets/js/5.3d48ac25.js",
    "revision": "7d17a108f04277cc026bd166cbb2f3a0"
  },
  {
    "url": "assets/js/6.8ac9f7c0.js",
    "revision": "41b89a9f930cc0192cdbef9461f940be"
  },
  {
    "url": "assets/js/7.980960a5.js",
    "revision": "3dfe446b23114f98435c84f301222aa2"
  },
  {
    "url": "assets/js/8.84264161.js",
    "revision": "aca6cebcba6294e24b7a801a96961c8f"
  },
  {
    "url": "assets/js/9.0e8c0cba.js",
    "revision": "20e90692ded7bca4f5301b3b91aae1b8"
  },
  {
    "url": "assets/js/vendors~docsearch.382d340f.js",
    "revision": "86c11c109d7935c452cba77904dba19c"
  },
  {
    "url": "blog/index.html",
    "revision": "5381ee4a1db9b9bf3d2ed99fd6a58c39"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "e8f08c2a62d4a0983077f63edf98c3d6"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "4a0053c9b912f9ce09b4ebbfebb2b82a"
  },
  {
    "url": "books/index.html",
    "revision": "2cc86ab7bf2871082963981f09791aca"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "4bd0dafcef4342e546da8588965c1c49"
  },
  {
    "url": "books/Kotlin/Basis.html",
    "revision": "a42cfd744d9b1379d9599b6175473ad6"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "0547cf4fa0b2f73982b76269138ef725"
  },
  {
    "url": "books/Kotlin/Class.html",
    "revision": "ba7180dcb96c12f482f86521146a5fe2"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "ec96f10135c29786ef993d5d254346d8"
  },
  {
    "url": "books/Kotlin/Control_Flow.html",
    "revision": "45ab13d0693ecea203d8ede11106843c"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "74a3664d10973bda42230ef8f59d9571"
  },
  {
    "url": "books/Kotlin/Function.html",
    "revision": "b5725970b8f5917e4b3d51f37a213be3"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "b0af7000c9a7601478c1e594d0065d2b"
  },
  {
    "url": "books/Kotlin/index.html",
    "revision": "0a843c652021d65721d98dc27b7ef7e1"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "e3f88bc5a437e74ea3ffbad16442b180"
  },
  {
    "url": "books/Kotlin/Null_Detection.html",
    "revision": "58f83ab70f38ffd4ba064c4e5156170a"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "ad9afab57ac76032a18747423158f7af"
  },
  {
    "url": "books/Kotlin/Reference.html",
    "revision": "6be72ab1fbee0e7dc70237c51e245513"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "f5b3aee054ab13df1dae912700cc9857"
  },
  {
    "url": "books/Kotlin/Type.html",
    "revision": "6be8fea779835a69e899772e4202fefe"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "12c4d667873e8f73697b77d8f88d5a2b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "2da2e7a771f7e04913efa33d038e1efd"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "3b762e7a409fc6f8225dd77d75ccc518"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "627862c04a2f83a35d2d9b34b13eed2f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "11d251bd5c85b7bd1f98b6671bf49119"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "4062bcaebde3c6f53c5a69951305908c"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "b043e6f53be3ab25bfb1e5d769c91290"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "fee8e8a07c5578f704ba73f63cb73da1"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "0bdd6eff9a748683651177c48e58351a"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "ec4ea1d9f39a7eb09eb3a4951c56c3d7"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "af15b7b953c87325cf580bb83fc2dae3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "0f8783cfeb5d01c1804064312c6b57c0"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "489b70bb5a960d032ad44f248925b693"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "bf4859c098c3fe8d835da8fda36ccbf0"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "46d801ac153a43ff3d2f965cb9133435"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "374ef11a6274581e2f08442683ce4d9e"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "e91bbc95520ef080b86b663c11812146"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "ef9c09ab8afc2a3e421c0b59881fc715"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "93aa2d72452383cb8c3347bdfe37469e"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "748873d6317661f0730f84805d346bb3"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "29d1a9d55a7ef00763ce8f3709543f02"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "da1d42c02855ae894dd7f1fa07506409"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "1686d8be55bbe35bcedce3594d801fb1"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "c79629cb252b626722d4a0a85e49023a"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "f8d1c40722c41b1285f07127a45ab0f6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "b3a4e6a173e598bdaee5d2e90b769456"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "eb4fb65d0f3fa2ff17108cfb2b0544b0"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "58677691ffd58e4ccfe89ffa58c101b1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "c1f74b77fd69d3cd5db19b116bb4f011"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "33f975d6a8fd3c489bb3214551d1ce14"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "0cc64374b145fad7ad055b3b631ac634"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "92a10596e7297ee6cd34501d388b44f6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "66ede16d9a60400a6b91c7e4808b0267"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "83a69e0b651b8b33a0d774081b073a87"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "d720ec7ee9257b6fecf5de6b4e806400"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "20b12fcc8d1c5bfc69abf743525dc059"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "fbe4c7b5d6611a5e99f6fa3e957d4f14"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "74a32ead328208c98b935eb522e93216"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "6efecac97b51d7be81a197ea423a27d9"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "53ecf0976a80bdb0b5e5c44fcb7afe3d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "d54b83fb41b39f79907354a9a35f069c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "1cf0a791bd7e243e7a7acbadc890ebae"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "215b0ffb8a69e1224645226d420594d7"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "76f46a75153a860b291940b6a5302b9b"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "3f7796380bd8d0163b192703a38ffdcd"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "15fd605d2e7ae0114c93506c1af28f6c"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "ce1b892dbbbe2d81cbcbfb1e93a45815"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "3b1b1db106ff413ebf1ec76060c08eb0"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "8370f0f85badfb6867aeee7da4a6afab"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "892dcb523c407baf7e64a1c165245f2b"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "cbe2a5cb48c5e12d055dcec0a40bc672"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "0b678c13e14f907a39de363d8a50f066"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "281bd7ce12ffa3cb6eb8589923a37113"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "08a650989d814aad9ede86b5a3ebe2db"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "8c3141c927d1e359172d2a5b1462e902"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "d979240941b7c016230acfeb568b00e5"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "b76f095cf4292422f0e0e3fab96b813c"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "fde47d299fc76fe22540244464660451"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "f69571fda075a16ef9fd5d989f156186"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "59bdac56b4691fab0e9ad7a3f1d7b3dc"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "0c7c153640643326766ce5d84e3b1242"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "9ac447c5fa171cca3e02775cbb982286"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "a4459ffe00922d4aa66d4f6c92f1fb75"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "1b1a225f18e4529802a91f5a0fe56a6d"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "e380b54ce1a9fcb9cde1abed258ddb6c"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "64e4ad6ea8be036f50c02188390d4531"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "5e03696868d9cbf20ac1c60b9f366252"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "0e9a871147285aef8d2ece1e3dad35e9"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "8491c4023c6a9d07818a1a345f33d5ca"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "68dadb6b906c848a0c7f164b7c42dcff"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "15b5612f704a0df66af3fd0cbc346336"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "1a605693fad391d9062352cafed008ed"
  },
  {
    "url": "categories/front-end/_pages/Gulp.html",
    "revision": "af5a94a300af40876a0b849052b80076"
  },
  {
    "url": "categories/front-end/_pages/Pug.html",
    "revision": "4cbd7efe33c4b79ae0920fd13cec980e"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "046c50baa91bac16a27e0245877d8dc3"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "86ebac8a442d880230c7517eae79c151"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation.html",
    "revision": "4a9f150b651db63e4f8b2f9d8ddb12b5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/example.html",
    "revision": "692d42a9b532a1cf0264b6e5104763d3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/index.html",
    "revision": "6ae00f809457871b4e771b0f50aa69b3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Animation/reference.html",
    "revision": "86007603b3aba2ad4a52e97d89db2330"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basic.html",
    "revision": "2f40a6ac1b7fc2307eb16d3a170da231"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/color.html",
    "revision": "2d7b56ceb9e423ea4e26acbd7d4c4ec1"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/create.html",
    "revision": "d8b5206e84033564247ad3bd218dc1e7"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/image.html",
    "revision": "f6af1faa368c66aff99d28e9de090855"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/path.html",
    "revision": "1994d23c4d26031fc62a9a53e4afd178"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/rectangle.html",
    "revision": "c81aca2ba51f71ee2b50810120636b68"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/reference.html",
    "revision": "0be72a446a20b02cb02d6fa714d4b5c3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/save.html",
    "revision": "8243e7b18a5f4522396715732a88d04c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/style.html",
    "revision": "935303ffba5d3b275695e35512a54364"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Basics/text.html",
    "revision": "b55b311da9d5431c4597808f547c5a75"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Clip.html",
    "revision": "6cb193453a8e9a3c5284499f261a7809"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate.html",
    "revision": "ed5e4ee6454d44991f389abe0133075c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/index.html",
    "revision": "dbc3dc1f1308e5ee1649e94248f4e5ec"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/reference.html",
    "revision": "60b7c05f0a45f9e81e2e3a2538b61426"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/rotate.html",
    "revision": "b9a3692f94ffc5658c620423aa25bf9f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/scale.html",
    "revision": "b3c3beb20c18237ba6b46dcc8f2b3960"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Coordinate/translate.html",
    "revision": "d613d8351118e41cfef1bfaaf9731d52"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawArc.html",
    "revision": "ff3cc951ff100f0df343bbfb0be157b2"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGradient.html",
    "revision": "9c7e05846c5a17caa01324575a9c1b3c"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawGraphics.html",
    "revision": "ba36a2caf6e5085344b8d00884556c3a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawImage.html",
    "revision": "c0694f3dc7efd75633ae211bb13efcfb"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawPolygon.html",
    "revision": "86a87b94a1361201bd8d9d0b9ed85268"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawStyle.html",
    "revision": "156567a3baafe0df50b9c73acad50ac0"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/DrawText.html",
    "revision": "753dd880bf63a2c4a780b71ea5096675"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/capture.html",
    "revision": "6d127e0d8612d6009d0ee800dfe9a5a2"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/clip.html",
    "revision": "5c142aee4463aeed697f1d3cde63698e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/composite.html",
    "revision": "aa380c30600b5e24b5c64f8aa3085020"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/effect.html",
    "revision": "4121c7f47d1759e98373178cf8c8a232"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/pixel.html",
    "revision": "2295092e59d54db1f00c900f3a011960"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/reference.html",
    "revision": "fa8b38e3817b22dbd93e505c8aa89773"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/scale.html",
    "revision": "8f1ea5f1b905920482532618333e5f3a"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Image/waterMark.html",
    "revision": "17fb3fd216bf5db51b1afcba23787149"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/ImageProcess.html",
    "revision": "aebb91a27ebe0031a6ce2d05ff48927e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/index.html",
    "revision": "2a1743968be49262cd98ba6f8112a5e2"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction.html",
    "revision": "86b1454e8b3b6bf3ed15c595fd68c444"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/ball.html",
    "revision": "8dedf7491dcbce121b0c0dee8eaba4f3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/card.html",
    "revision": "6672b0dc5e194d00a4d9c0787b341d75"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/element.html",
    "revision": "709f8e6f879341845da9636201ca2b0f"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/keyboard.html",
    "revision": "c61da4f7102224e019329041cffa77b5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/mouse.html",
    "revision": "833f0f38a3ed202ede91cd88e807a07b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/position.html",
    "revision": "acb2d33e221eb70d8c8e522344f87c28"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/reference.html",
    "revision": "959243e97e6a0a7d268d1200dad09817"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Interaction/spotlight.html",
    "revision": "c551d3e6432c370ff552711563ed337e"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Matrix.html",
    "revision": "13d35babe9390e5a1ddeb8708b739f9b"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Point.html",
    "revision": "82093b865cce7b19142184d583cd2fb5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Reference.html",
    "revision": "adc7fe7cd17e6dc451f2773f41c786c5"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Save_Restore.html",
    "revision": "5ac31f6054a6905a739410e3f75a8812"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/coordinate_system.html",
    "revision": "581855e12a80151b962d327ebc201a76"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Theory/matrix.html",
    "revision": "eed2daeb902d4c014c49c2b9583011d3"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform1.html",
    "revision": "fd13dd245341f30445cabaa1349f74af"
  },
  {
    "url": "categories/front-end/canvas/_books/canvas/Transform2.html",
    "revision": "80d71bb805caebe0ad7f05eaa17e03c4"
  },
  {
    "url": "categories/front-end/canvas/_page/Scratch_Card.html",
    "revision": "a607d198788ee036a95fb3829a07c389"
  },
  {
    "url": "categories/front-end/canvas/index.html",
    "revision": "28a5ce4c72482508a52413d5e102aef8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "5311609884f362b61287a86dfa8a5211"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "3ae57d808c465fb20ce8a8a2fbdf224c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "86bd4857344fe12285768b2fc76c183e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "255da4da0b45f343e77146f48602bf46"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "c6799b9835145bf53acad5ca36a9d3a9"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "a7bed4aa63eda74318de3c8c51ed874c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "9ac210750649768f5f49c539316e570b"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "e166796f3c3e23f427d7c0210783cc10"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "8a987e60d86282add936da7677c756ba"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "119961322632ad30aa385dd9fda750e6"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "6dcb370d89f9b1ca51fa0c7093f82240"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "dde994dc45ce281f09d15ee903db0af1"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "7eb3c05264fce46c56799271366574c1"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "a30fe1bda04b646d114e053a149282c5"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "6a7563ae8bef0a1b1d282dade892c35f"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "fc5561b52d53a5773e2d03844053f3f3"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "3da5ca85f79e845da0e3fe91560a5612"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "a6aa8793ec7685ec68f95b1eb3a9cf93"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "d3889cb6180fc49d900b02f9cb671fa7"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "d3e357c919c2819985055c457bc594f1"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "896b66a0e2834223b98cc9418dceb3ac"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "6c7bf77efc7675a93b766b42704f4d61"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "7c374c08fe92822105ce8878dd581259"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "67ebd1feff7e33172ae238db3d8a7b96"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "3acb9f9028315c33d27fe78f2d5df764"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "4208b04d016e00a6bcff3a0c913e7b70"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "4ed0aa284e18f54784296559be696190"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "5c01a6cef81b56db1c0b866d1e5ce0a5"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "10b504c21fab4366bf982390a2ca39fa"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "80ea393a3bf5428547c81e348df86b15"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "07ed514421345d3a3fa07ef03fdc2567"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "fabe284d5e1531ebc5bf6894fde22f61"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "c655fff155a3fb590435f046a5011687"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "6c7532caf9d4163f88ed2513bf365c02"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "1892c3dc6ca96ad4db0bba3020910748"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "055310f3d994aabdfaab1d3579987e15"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "7ba3aa69ca24ebe0051cc69877499a03"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "7045f4e413ba25a331ee64061d4a9f40"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "4612081e01c473ee3deb0b2d34301169"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "ef5d7110dc55f37b274f46f30a22bd2f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "c27ef5194b90262048f11cb5cec0d33f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "36f62c062090f448ba93e0131a5b6558"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "177c1109b9d5a0395a8a989e261f5614"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "589ab0abd4f91eccb5db9a1f91896a53"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "ec439cdfa936b1e60084b7eb072288e6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "f2f5b317d07e4f86da48a78721f01e89"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "ea526fa242c9dbcc922872b70457d30f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "c54ad2f6c8f19febdca22c298d628af8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "2a398337b35625e5850b8a532cfbb077"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "00e2c4539b9e83c4acabb4f22de3c6d0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "0a75691b40b9f708b28ac9c6d3ecc536"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "c2195cea43be891dc29a1022d200fdb7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "cd9de0b4183391f69a92fc3b25f9bb0b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "f1e66d0165eb6d11579b0393629b249d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "0c3aec8a475531d39453f85eacb907e8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "600c48e9bf8989efde8c6cfec6cebdb8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "39b2c59bc8c8b609d5fd49665178c018"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "4cf72b587f092527a6de463a09ffa11b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "923c98421c36ecbbe51735cf4382ad89"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "f475592ea3c90f5c73136bce9ce99944"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "890c3c77ff5d1a5f636a2fe43206f62b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "9ec51234bd9f1cc6ba21ec3007ae5b0a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "c303f541443ddb947b76bebfef7b3c68"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "06b35e43741be37908ab2474c4132ae2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "82777af5e290109f89aa521359fc3624"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "3132700c1ef3fd06f6cd715efb7ae570"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "6202cd633e872fba094de0627de2729d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "29dbef78a3e38524164d18309bdcf7b4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "4e2321730dbcaff06bab8d2873031805"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "5f18aa33191b1f597cf01ae240196973"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "c9c259b9765d9b605f5c3f708f3cb1a2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "6f25c308895e746c1af77bce86bd8900"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "6546be2814aab796c05064226ee7814a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "b5a9d1112163db0ac3ccfaf9c4e8d622"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "e5cbca645a447bfec3999ad56a059b19"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "07e4d8eb44f6595108719f80b76772ea"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "e5632595a0d24620d8cc19bc1b29b3a3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "0017a2f685bd33cac149826fd997d032"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "e18f1954c0cc70d8f944815837604d24"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "078fd3da7a62b5be14faeb2581d0cb27"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "f0011d3dd3f13c13b795b69ff4192ae9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "df9556fe5abfa1842d0b93f22fa3ecf0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "ea1ef6b5782c0a7ad8b03554ffb6b560"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "22917f91a9eba25cb2b1c0c275975d35"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "bbf94dea18cb952502ecc7920f10a61e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "fa8369b43d255eb4707e23eb979e10e4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "a98c283dcb1f2ffe759f47c256cca498"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "b6c1976d192ffa74a7d35d604e33b3dd"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "9d6f33effe5c359f60d78ce3366e54ab"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "464abe2ec13b6e6db53fc35b598ea66d"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "49bb35dfc19c039348d9e81e8af5e75b"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "2676ed8d7b5bd83142520f179ef13f0b"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "ca2454bbe1dcaf7866484ab6e3c0d54a"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "6ee129aa75fb314ff50acfb928b155fe"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "ac1c37c71c57a429ea394f2dad773328"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "f761f542f777420f368d28a37390083d"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "2a5a70d1e2f600977459b87123f186c5"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "e437618b0a1a272f95f5d5f51fe9ed9a"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "e3346bad2b07f5ed8ff78c1bdac42747"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "947248535ecfd951f1528660b4e8e45d"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "b3867ea6629d56edbd0d6f8ee95088c4"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "390aeeffd0a8688bfca5e8d5492ae082"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "b7584eca5f29e51249378c579d64dffb"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "b1a55f93a4e37f04b82eab0aa09c7237"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "befd45dc0fa100f9fc47e1eff4b76efd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "ac573fcc514b714c74fc8e841e8fea7f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "8f02f9023c8cc3090ee1f6e92d99365c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "ed0f22b9910aa638a198d1a5b4aaba83"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "4f48dce580ba5d4b47405582c3b72abf"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "e92781c5960c78a95cd1a2109d44dc0e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "dd1b538fc1f7b1f71d87ffc434218ae5"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "1de74497cf03e77def002c9197dc0bc2"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "1998d3e90008967f99126b3c76612628"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "a6aba16991f8b96d63744f73373945b3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "cd58ecda8fdcf791ef1bdfae5e32e5c6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "73a608db34244f59af9c8dd07be25310"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "4867511703b7df45aaa7cac03f312ccc"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "ee167edc5f48a072fca8984497b27769"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "ae1144effcb19b87990f41758cfe529a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "db4d5b48d40f688265eae4944f99f195"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "7959e43762d3ee27023181680509b37a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "9713cb191ef9f26f7d6f5a52bbeff957"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "0c5ed35a776270ba89a6b4261bb18549"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "848bb1fa6d088d52ffd35a1d63576d70"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "91de4030da52336f508cabdcbe4d9cf9"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "72ea4e30d3e30e7bf8313e10b3f1bdb2"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "73cb0b1a4abd56830f1b40f1875db838"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "05a739e5b8b4b0bdd1ce4552c3b57455"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "23b2c9e1dc704555159f3807ae147785"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "08e95ce35f2e93cde5ec17fca0356a50"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ab1474a6a87f09858fbacd160793f304"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "a386ea47f3332718fa2fa47528b1318b"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "3cef7068982791d3ae4761b5b53c90ba"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "bc46bb859e0b9adc43ca100dc75e6e37"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "cde43eeb5cc582ec93d3be39561dd32e"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "73e1299bc88f7424e77f64bc65385f69"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "7baff4452bdaba373df9748004a6a9de"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "6be96a228f62d1b10459594b218eff99"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "06f4b47f92599157d919b1b6a2212a9f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "0f9a889a027e00a224264f1cc2505f62"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "e819b96b422e0e10f78d44a54d758fc5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "4ca98e1abd96916bbd3528f255e95c5d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "04f0b5c93c7dab2358d28842fa86633c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "1153115671e582ec35c59d301613c7dc"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "5bb78e39f1a6ee405e267c854d8df06a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "d6ed11ea478a7e6785e7bb74c8916ac7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "a11a4239ab1f1aa9dd0c33b8134df651"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "ada980939964188806ba453e62c7050f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "53ea56c016cf510da06bad7b213031ea"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "59c4500eef22bc62a74af8714cf4a3aa"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "dfb61429b465e49ee4da7ca9b825176d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "bd156027979ffa570d50b09299932da2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "e9e8e7b4e6aa3ff6481b3853ba8060b7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "ad31880983952878661e649ef5edf8f6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "daaf5ea50c3347ed9da6506a613eaa1f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "e59499e9c88c15a8ad8f68cf3b48a277"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "d48e41b39d585cc20ec8b2f0eb75c4cd"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "bed6d59850a1f9942f70ebcb59a4809f"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "c0218812e51cefbf25bda2a8f0808755"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "98f26209905d994e9e0e615a9398f3f6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "48751fe9881e498d61b377c2931d7d16"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "ca8dca3dd1d60f1672d0e537391a9322"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "ef353c3413cc1d1e138d0f1d26445d02"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "f151fd97e03eb1e5253f22ccd382abae"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "ef58e646f01fba55f1b2c18666e4e472"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "01c619ae20db73c1d89097380b294d8b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "401d518217cd33d59c659eaaf7179e5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Directive.html",
    "revision": "769d7cfa4f38f6480a7bfcb82ba08e4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Filter.html",
    "revision": "760f37f23d0d2793b6b75c195b9bff27"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Mixins.html",
    "revision": "80e5a125895f8419b06fff8831c71bfe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Advanced/Plugin.html",
    "revision": "90e3d1b27d1f1f0f82cfa5a22d016d10"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Dynamic.html",
    "revision": "d6516259e48004cbe6d484632b49f770"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/List_Transition.html",
    "revision": "db5c96317c9d954cc8674adf60de219f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Component.html",
    "revision": "5535b776379474770f864169187a99ed"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Multiple_Element.html",
    "revision": "a8e859d2b9f5c7bed6181e36f569c134"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Related.html",
    "revision": "80f40267c943f4ae98d7c1ab2db9f58e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Reuse.html",
    "revision": "590b88ba2f74b4d2d90e6b2a913a31be"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Single.html",
    "revision": "9c2edec003201d72a40f54e556805e7a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Status.html",
    "revision": "f9de5790922b1bb67ace9f0e444bafee"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Third_Part.html",
    "revision": "ec0c603f62b2c66c87617d66e6b6a5d8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Animation/Transition_Animation.html",
    "revision": "a7d9515d1c63a9b565fef8891ac47839"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Advanced.html",
    "revision": "2fadc2c757727bbbda1c01fef7008d1b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Emit.html",
    "revision": "f4bcffed5ebf7d66aa8f91abb21cca31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Prop.html",
    "revision": "269c01ea1d44ea98ac71f69fe87c55e0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component_Slot.html",
    "revision": "df561bbf76455b99eed52d2bfc711961"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Component/Component.html",
    "revision": "76bc8c21b94bd54d3b67d630c35fcdbe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Event.html",
    "revision": "fac3e39f17e026ad54b837094da8d64f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extension/Flow.html",
    "revision": "aa3400709a0c0ed200c193382a46af40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Extensions.html",
    "revision": "4769baa380217a8cdd59d9607f3cc730"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "dfd3c91919db7227a62fc343f1da6ed9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "39afed78c8a99455bc9d02ff9edbaf1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Instance.html",
    "revision": "ad1dcba9d461c5c8d39b3f47bf1d468f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Integration/Axios.html",
    "revision": "f41553f660ce02407d865cc3f2679dd9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "1a2d5c7b355c229862ac9ab60cae9427"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Lifecycle.html",
    "revision": "8581605b1501a30099b22fb2eb9f554d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Optimization/Injection.html",
    "revision": "cc543ab23d796df0eee6e48cfe8e0b51"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "e3d412163a2b41b2772e30f14bfd25c5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "febe9471c0ea95fc310bdeff635eff4a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "cbae32ade6b8b06e48079e0ff971695d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "ce033e286f9c196cc6ad71a9a7303eb8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Question_Answer.html",
    "revision": "b2cadfe5d3f8102ae00ebf8ffe6d1ca7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "b6b2f9219d44a5e5731526abb512ef4f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/Data.html",
    "revision": "0144acdffa7c3ac52a59c7f68c7c6af4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/index.html",
    "revision": "c881c99940ce3bdaa1cd2eecd27e9a02"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Response/View.html",
    "revision": "830e2a55e6712b1facfd42d4e1516278"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Responses.html",
    "revision": "05709a0fccb3634105295c977fd64029"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Style.html",
    "revision": "969fc4d04bcfe0cf049a198071859434"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Template.html",
    "revision": "fd9269a7b45428bf8a0c34a61688ef73"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Update_Inspection.html",
    "revision": "7c0d570fe3cf5ac5a97311ca89afea3d"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "3062372e5465de4f5699d8cb3dfd59cc"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "dffbb98dc99d09436630643098453438"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "7840c1a83989c98ce79ac585f21046f4"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "22ef0c46b79a56a76417f22d53fb2beb"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "595fba3a253afd83e117c8cbf7561fc5"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "dc8c8446deac02a00d4200d3b44e7987"
  },
  {
    "url": "categories/front-end/vue/_pages/Vue_Router.html",
    "revision": "5b7b4f1dcf6243c80e1e6ff8b8751105"
  },
  {
    "url": "categories/front-end/vue/_pages/Vuex.html",
    "revision": "9016572f43ab5e8260a3d2d3e90dda02"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "2d87a833c54499fb24f9ac9c148c45b8"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "a7a0e802018c5529b3bfa8527d24736b"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "824df1a385ee7595fed2cced02df5458"
  },
  {
    "url": "categories/index.html",
    "revision": "1d713d18191089f4efdbe2782774d78e"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "29c7167a868e19f1b1c340d3c7a35a34"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "581ea219fe7d881549a9f20d6d464a29"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "71353d3bd285637c70344bf5567db4ed"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "2a88b9839966bc0fa31922b99a5b43d0"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "4fb7860300c0a944a561bea74993d079"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "659d9c668a7ec8a8fbc5ff67d36894f1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d45a55e179f742ecc52bbf35a28ac9de"
  },
  {
    "url": "categories/java/spring/_pages/HttpClient.html",
    "revision": "97be8ef709b3e30c6bee26d6c0a10e02"
  },
  {
    "url": "categories/java/spring/_pages/Mybatis-Plus.html",
    "revision": "3103bf04599540a7df488d58b273acc3"
  },
  {
    "url": "categories/java/spring/_pages/MybatisPlus_Usage.html",
    "revision": "cdb941f7b32d642bdfa7262e57b88f75"
  },
  {
    "url": "categories/java/spring/_pages/Redis_Usage.html",
    "revision": "3eb9b92f48661e044ec3023ccd95abfe"
  },
  {
    "url": "categories/java/spring/_pages/Scheduler.html",
    "revision": "5ca083f7ea513c5ec9bb70dc4115aabf"
  },
  {
    "url": "categories/java/spring/_pages/Spring_Boot_Install.html",
    "revision": "5557984b98ec7a31006b0295f687bd17"
  },
  {
    "url": "categories/java/spring/index.html",
    "revision": "d7e52642a4388cd809c6e2964c7470ad"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "63e4668c3f04660866873a6c09e52bc8"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "1c428bdabd9c5d46409bc1b3974c3e8b"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "146794969e3cef414fa66dc973732d64"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "4f3f2f358843ddd49c4fa5c621065224"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "a539304273a7c3d46d8efb5890112891"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "5e5c6794122a98b9607391453ad80179"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "19a91711633f285173318d9c9b3b66f5"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "37cb7ebb5727f803e36e245f5af3f2b9"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "dc4258554696b538592615d36be991f6"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "ee1cae2d0e1a159b9ce74b5a33e37e70"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "2b27d1785983b701e986094e88280b86"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "21d1dd702a40e4c930519c9f5cc5db0f"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "361330db9dff8b4da8c1db593df2eafd"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "fdc82afaf7488ce8d813da8d76be4bc9"
  },
  {
    "url": "categories/nodejs/_books/node/Basic.html",
    "revision": "8352915f7c752b4787ed0ea19cf1e2f2"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "154ac49d2ed8fda7269ba49cbc5da967"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "7ea56e25384c20ab3a34ecb3dc19c0ac"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "08319a6d8ce9f1118bdcf5b05a47deed"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "3e17cf32ab1363fef75deb38cfe810d5"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "6bb5537f62c52378d5c0ad6298a79595"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "6f00c7e89b48c20f5154ec17bf5e7d99"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "1c9db29b09b50c1aaa6c35badc461511"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "4ea6c2be338136888bc2c06e70a28f64"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "ddcb41a849596a4b63051d5bd809718a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "2faa5cbf77d7a4c5adaab3a9c56542ae"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "8ffcdd817adf8b0e89ccd9de96b049df"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "3a831ca0a8d5014e7b74ae8427c22162"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "c436a6d1e371dcc8f88ec507a6eb5084"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "43b8a4a1bd3e8c969ebcfc4f043e0e93"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "0b551c066016dc1163da09568f76ec60"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "7c5db89d1def71c9670cf4e2c7792f95"
  },
  {
    "url": "categories/nodejs/_books/node/Rekit.html",
    "revision": "33763c08c6767f75e6e8a0bd6f6cf7bb"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "98f87a5d2f28b8b0c6d3ebcd7a352662"
  },
  {
    "url": "categories/nodejs/_books/node/Solution.html",
    "revision": "d884403868d1467fba0029a0ced06ec6"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "65a4542fd8604f5cc3976e692d3fc4b5"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "0d26dae39938ec320a13dff95d0cfe79"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "88fa8addcdaf4dec6e34da465263fdc5"
  },
  {
    "url": "categories/nodejs/_pages/Express.html",
    "revision": "9caa276d7ba43f9ad20ada686eba834a"
  },
  {
    "url": "categories/nodejs/_pages/Koa_with_Sequelize.html",
    "revision": "56ff4fed3c1c7cc808e6ab285e47a2ff"
  },
  {
    "url": "categories/nodejs/_pages/Koa.html",
    "revision": "e34c1f4c0afef57508ba5fb4b6033998"
  },
  {
    "url": "categories/nodejs/_pages/Sequelize.html",
    "revision": "fbbe9a16eb84015738a9f495cdf4a11b"
  },
  {
    "url": "categories/nodejs/_pages/Socket.io.html",
    "revision": "d2d18fb6a08d3f2b40a1946176390813"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "7068822064d7e95e658470fad28eb777"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "6a23eeca0dc3d4e85c9848f6138e6077"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "ea6f84738ea8cd9cd73ed0e06099dee1"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "df6974beceffba8177e78a05a9bc656c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "11a39e00ce40259317e1157e6d754557"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "d933d447ef171c297ec1590cd5f1c638"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "a0b1d24b976720eb488d3486b122839c"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "9e68b00cd8b4508a979f27a8946e35c0"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "3ca8db21d5d8cce63e4fcd7d682aa604"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "61553ce7e0c3049faff806a7816fcbc7"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "2cef9dee6d8114c4ed8b64dd56f17c67"
  },
  {
    "url": "categories/os/index.html",
    "revision": "0a1088047e54657ffd4910832e00bc13"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "b4bc82d0cacd3bcbbe25868677ecf56b"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "d7f26fe6271533be48ab77e25f18f8cb"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "6f9bd0bd3752ae00f1f6260e191eb6c6"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "16190fb12a720f999606482055af87a1"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "de8afd0eb67bb766b6aafd115d9d438d"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "26954649b318dd93d10d2524ce932a6b"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "49a61ff2026fcf81b73c17a29414b9a8"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "0e17033e0f9b2dd3687a7c058b6a3226"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "b4f999b2342ad300617de9e739f00513"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "9afbfed721ce366a01484107d45975db"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "2ad98ca7542e7f090185f36364748651"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "3173310cf2500127c8e1b526da7484c6"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "9557db48cf1a9aaa4f737ca7fc001cac"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "067cf16dcafae7e8a7a4c3261ee6e89f"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "2bb72391b3982a1a9cd3dd444cb84e08"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "520c6a185c4b31a9509b347e52cf5236"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "94ff196bc8456b5f219cb406ec194fbe"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "7e71b49ad9ccc9fbbd2fa38b00b835a3"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "bc6ef9a359e089809092f95019c53751"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "784c32cf54c8ad449d27780a491f5b3d"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "bf5c45d52e62f58f2bb7a32a49dae75b"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "0af979e5f80ef9d38d9036df1f443148"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "97228a99f3b77b8bb291e8e834fea516"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "b52cae3fa2da52fa8d24205b82fd22f2"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "99ead804563b880a8eab37c21467bf63"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "ebdfc26ba32e0140d8783df74edc59cd"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "783a6eef7521e08700bf79e4143d3ed7"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "0c06fdd5bda52e2551ed51528f350195"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "e3e03f139ce0cbd794b8552efa91248b"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "596728e16cff0b01c2bae548ec2f6c18"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "af80ec409b7fd150f53f5f3a1fe790c3"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "e2ecb314354dd776cd87a629935199e8"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "262f0519c3a698c4975a88757ac40fe8"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "eecefaf3e2bf5b20f4e6af9eb8a3c097"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "128b2667afc6a1eb58fcc1c4f8267bee"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "209bf8cf784bf2b714695f01ed7a9af0"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "839573af9c4e284384641f85feddafd6"
  },
  {
    "url": "categories/php/_books/php/Abstract_Class.html",
    "revision": "1b833bec2260a26bfb2d102607b98b66"
  },
  {
    "url": "categories/php/_books/php/Array.html",
    "revision": "cdde46271cd3aa6e58929426317732af"
  },
  {
    "url": "categories/php/_books/php/Comment.html",
    "revision": "f51fc363ec677979e7803644cefd6296"
  },
  {
    "url": "categories/php/_books/php/Constant.html",
    "revision": "f395bc2c34997cf99a7f794dc958a354"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Circulation.html",
    "revision": "c4f63cf004bcbeb690216867afaba8ce"
  },
  {
    "url": "categories/php/_books/php/Control_Flow_Condition.html",
    "revision": "44bfccf1e7cc2c4eccae6f80d1e00467"
  },
  {
    "url": "categories/php/_books/php/Function.html",
    "revision": "cb60426047428805bc21d18a6b4b87ee"
  },
  {
    "url": "categories/php/_books/php/Include.html",
    "revision": "397cd3687b53569e864da6cd0782a220"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "9ffb1b927661ecbfe22090ecbf201f81"
  },
  {
    "url": "categories/php/_books/php/Inherit.html",
    "revision": "38e0b5bbdd776805db18d3d4dbd530d8"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "2573be6738e8b295a0c0dc40dea59c04"
  },
  {
    "url": "categories/php/_books/php/Interface.html",
    "revision": "fe542b49e6e00846799c129de56865bf"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "33fd483d85931d42950fe6663f70521e"
  },
  {
    "url": "categories/php/_books/php/Magic_Constant.html",
    "revision": "80def9376217dd15da1142f334fb1edc"
  },
  {
    "url": "categories/php/_books/php/Module.html",
    "revision": "9ae5435d9ffbe5fb0cd5774c9391abcb"
  },
  {
    "url": "categories/php/_books/php/Namespace.html",
    "revision": "6fda3b7a3b50dd1a991c3a8d6f6dfb10"
  },
  {
    "url": "categories/php/_books/php/Object_Oriented.html",
    "revision": "23fea666bdcff0d6b7158a6ffe2ab0c8"
  },
  {
    "url": "categories/php/_books/php/Operatior.html",
    "revision": "03962e8402f13ac5a65ef6f1c0cb6c50"
  },
  {
    "url": "categories/php/_books/php/Output.html",
    "revision": "082f66518e8925a0f4c68f4e5eebf0cd"
  },
  {
    "url": "categories/php/_books/php/String.html",
    "revision": "b6cfb205a7e8f08551e2bbef9d3901ca"
  },
  {
    "url": "categories/php/_books/php/Super_Globals.html",
    "revision": "b6fa88b7418ce33316ae85a267cbae43"
  },
  {
    "url": "categories/php/_books/php/Train.html",
    "revision": "58dcd72b22052c2a6007d81b4aea0c40"
  },
  {
    "url": "categories/php/_books/php/Types.html",
    "revision": "b59a566d60efd1b840f42f5e80202839"
  },
  {
    "url": "categories/php/_books/php/Variable.html",
    "revision": "f0327e3a286c6ed1de008a9d1dd7a901"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "dfd5bb3abd71086f7d1811ad8ca901a1"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "8d0ce5e3c985442c6d2afcb287b6f447"
  },
  {
    "url": "categories/php/_pages/模块/Datetime.html",
    "revision": "b58ba85f47722f238ea027e19c1fae6c"
  },
  {
    "url": "categories/php/_pages/模块/Fs.html",
    "revision": "73d65f6542759a27d6d333f2cf89f819"
  },
  {
    "url": "categories/php/_pages/模块/JSON.html",
    "revision": "6247c2e9194114b89700663f2dc3f1e1"
  },
  {
    "url": "categories/php/_pages/模块/MySQL.html",
    "revision": "33ecb78ecb37625ba2f03fccf547198b"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "3c3cd1a5b663e28e28a8a7f5c970acf3"
  },
  {
    "url": "categories/php/_pages/进阶/Cookie_and_Session.html",
    "revision": "2106133a25405adc5f6d6e20bd7a90b5"
  },
  {
    "url": "categories/php/_pages/进阶/Exception_and_Error.html",
    "revision": "0eceda6c6a105ebc4e33dfc73109c44a"
  },
  {
    "url": "categories/php/_pages/进阶/Form_Req_Res_File.html",
    "revision": "0eaeee3a5dafefe6345c34595bb18488"
  },
  {
    "url": "categories/php/_pages/进阶/Request.html",
    "revision": "0d8ec3e1bf15a7dc16ebaf96bed1a750"
  },
  {
    "url": "categories/php/index.html",
    "revision": "30c6f8d972a4a686a1eb9ac75c8f73a7"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config_Detail.html",
    "revision": "38d131b05883458fcaea0f94b1a03baa"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Config.html",
    "revision": "a86ba852035b0c88b14f4837f3f35966"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Container.html",
    "revision": "d8b6e2f2af6cdb16db0d31a434270505"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Controller.html",
    "revision": "517a8f70569b3d933aed3742c0a547f7"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_CURD.html",
    "revision": "46eee2b355676c661b1553ff325dedd7"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database_Query.html",
    "revision": "f1319cbca3753c02955c8ff2d3115edc"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Database.html",
    "revision": "640670df71e915988d3da7552cd93040"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Env.html",
    "revision": "8649a2d951abf66b4a954cd55bb1d7dd"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Composer.html",
    "revision": "d1021c17d0f5517c8f9b5f2353de9d8b"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Function.html",
    "revision": "f1a2d83e4af938abd8f1e4c8fb0a6f0d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Extend/Library.html",
    "revision": "54c7337dfc1ddfdea747c389f8c6405c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Facade.html",
    "revision": "f75fe29764eab1be4e00f65733ead81d"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/index.html",
    "revision": "14fb8599d34f01837d3fa99774d1b0df"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Inject.html",
    "revision": "1d5dba2c751f46902efdca1bc0f50a3c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Advance.html",
    "revision": "a1f87926a578995904ef3697674ebbfb"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/CURD.html",
    "revision": "7251d23d60e7fa506f5e791e4e5df986"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/index.html",
    "revision": "796e24bf00181fb83d2c32f48f4e70e8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Model/Transform.html",
    "revision": "79d372e7da805ece847aee444df3f63c"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Namespace.html",
    "revision": "b047a07ae3c2be8e7976c25caadceea8"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference.html",
    "revision": "284ece5cabf2d09f3ee05df6d5cefba2"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Assistant.html",
    "revision": "ded8d70bb57d31c3bcdbc3285748f6af"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Console.html",
    "revision": "ae23eedef27da7f94dc6e993f231e276"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Constant.html",
    "revision": "3b3eeedb7e89349168968ed72af3226a"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Reference/Debug.html",
    "revision": "aef1192e7bdd96eb14249bab16ee4bc4"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Request.html",
    "revision": "e87cc6d7b60d50c715f2d0f93b7cc5cf"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Response.html",
    "revision": "b394c9e45c6a0708b6b69b0476f9f91a"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Route.html",
    "revision": "c8d287823a3aec03fe4d0d5c9ecd59a7"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Static.html",
    "revision": "ec7061fb7f45ae5e2a38a292b145f646"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Template_Engine.html",
    "revision": "8023d99696ff74abb2253fa61a43ad03"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator_Rules.html",
    "revision": "e2a8a73e806b31084fbab6c65426d124"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/Validator.html",
    "revision": "b9b681087b3b94f32fe01c60eae28732"
  },
  {
    "url": "categories/php/thinkPHP/_books/thinkphp/View.html",
    "revision": "5e4c8929e6cb4fc5c9aa000f95d29723"
  },
  {
    "url": "categories/php/thinkPHP/_pages/index.html",
    "revision": "bfb7e3217d34849d9abfef321af8c7f9"
  },
  {
    "url": "categories/php/thinkPHP/index.html",
    "revision": "1bfe9c36bfc66b1ae2b5dd6a7cc3bc70"
  },
  {
    "url": "categories/python/_books/python_spider/bs4.html",
    "revision": "c42d16ec96c1807f5ea726227901db1d"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "552628f613683d023d5952b94788cf27"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "09c7df65a4f0bd48d60e6653f4d2a7c0"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "f98693f8d27ab090dc03ea13343a4455"
  },
  {
    "url": "categories/python/_books/python_spider/pymysql.html",
    "revision": "a2fb3a1042635d0417d3b83e3ebcffed"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "416fb817e2ab48b83ce98de5491b0a69"
  },
  {
    "url": "categories/python/_books/python_spider/re.html",
    "revision": "7bab3012794d36f5feae5965468b9d1d"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "76f77b28e65df1336ad556abc667efa8"
  },
  {
    "url": "categories/python/_books/python_spider/reference.html",
    "revision": "b20f80ce1c970ebd9bb979c38be443c2"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "9e376702ab5bf4583a2826a01a33ca35"
  },
  {
    "url": "categories/python/_books/python_spider/requests.html",
    "revision": "837657429b6a6818344923faa1408f27"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "0a38c6e9cbb0037e1e97b9cf18b28808"
  },
  {
    "url": "categories/python/_books/python_spider/scarpy_basis.html",
    "revision": "4d72471386004aabdce35e09b9a8b9a3"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "136142c35f4fa8be866830b451043596"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_command.html",
    "revision": "6e5372a22abe7fb5893db415fb2a3020"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "8c0e0d2779e0e0e391b7bbb01aa09f7f"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_file.html",
    "revision": "a715256cc846d9277799fb4f9b45ff8f"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "344a571cdc2cc3dbf0e99c427e527418"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_image.html",
    "revision": "b58113c15ed6298584427a78a92bbe99"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "b6bd53c8758d4d7e18e5d842ac4d7cd5"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_mysql.html",
    "revision": "5f0d9318c7dc70bc490824c7859fd4b8"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "cb4f7585049550978a244e603725b6e3"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_selector.html",
    "revision": "fbfa27f19acd810822c22ee848ab975a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "4e4c29be6c2ac9dc86e90731414f2a73"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy_simple.html",
    "revision": "18165a84f39bcf2e6cb9bdd2b28281eb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "27d44ece3ca40fe6d63f813132223a71"
  },
  {
    "url": "categories/python/_books/python_spider/scrapy.html",
    "revision": "05d3ff230f6f00301ad45803c948076a"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "01ae36a8c173fc5e866d3387058c2640"
  },
  {
    "url": "categories/python/_books/python/Comment.html",
    "revision": "1bd982a207e7e16b0035d7c0bcc5dd88"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Circulation.html",
    "revision": "1e06eeeee5536385067043be0316d76d"
  },
  {
    "url": "categories/python/_books/python/Control_Flow_Condition.html",
    "revision": "14edde1942f53f21c7415384f64b6062"
  },
  {
    "url": "categories/python/_books/python/Decorator.html",
    "revision": "792bf1cc633ef76dda14723a8400076d"
  },
  {
    "url": "categories/python/_books/python/Dict_Set.html",
    "revision": "5243b002c33f04d9ac65731c42b6f828"
  },
  {
    "url": "categories/python/_books/python/Function_Build_In.html",
    "revision": "b156c5e6da5950d514c32aaa26ab12a1"
  },
  {
    "url": "categories/python/_books/python/Function.html",
    "revision": "e0a9d7dde65fe46e3a5caa6b96d9a114"
  },
  {
    "url": "categories/python/_books/python/Generator_Expressions.html",
    "revision": "fcd2f1bb230a67987e349cddb8a2af88"
  },
  {
    "url": "categories/python/_books/python/Generators.html",
    "revision": "d671485e782fc765a7812f662dcecec5"
  },
  {
    "url": "categories/python/_books/python/High_Level_Function.html",
    "revision": "742290b0d604fe657f6126b6c161db58"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "b119d2fcba463644a34964140389a3d3"
  },
  {
    "url": "categories/python/_books/python/Inherit_Polymorphic.html",
    "revision": "666a5cb6eb01049ed9c109b0f76d2b95"
  },
  {
    "url": "categories/python/_books/python/Input_Output.html",
    "revision": "21a6023ec8b3e5c26850c86ee3f3eab1"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "bf484cc0181940bcfe0d2e3ed1872f24"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "8b6f48eb7596be87c068906655b5f800"
  },
  {
    "url": "categories/python/_books/python/Iterators.html",
    "revision": "d71839cc2b7baf889f9d31b8341c9df0"
  },
  {
    "url": "categories/python/_books/python/List_Tuple.html",
    "revision": "3db8d4b22540bc6a5959616bce26d496"
  },
  {
    "url": "categories/python/_books/python/Object_Oriented.html",
    "revision": "a799701f37f303100a3c2c937c878a99"
  },
  {
    "url": "categories/python/_books/python/Operator.html",
    "revision": "6c17c9a09a4a1f5d4294abf0be23de47"
  },
  {
    "url": "categories/python/_books/python/Partial_Function.html",
    "revision": "3123cc6ea7a354f609f98d65365f1516"
  },
  {
    "url": "categories/python/_books/python/Reserved_Word.html",
    "revision": "674cd1203a5ab152681e505c0b20cda0"
  },
  {
    "url": "categories/python/_books/python/Slice.html",
    "revision": "bfcc14bc6423a83b01a999d6adfac82e"
  },
  {
    "url": "categories/python/_books/python/String.html",
    "revision": "b5f01ebd607546f872cca1e488d9d0b0"
  },
  {
    "url": "categories/python/_books/python/Types.html",
    "revision": "cba859f08a4fbe2959a7a49908a259af"
  },
  {
    "url": "categories/python/_books/python/Variable_Constant.html",
    "revision": "a54d1dc5ec124608f468865d6dd8be39"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "2ca5c92bc1deed2a469225997daa71b1"
  },
  {
    "url": "categories/python/_pages/模块/IO.html",
    "revision": "8e09ac80c51b584b7771a3db2e6aff3d"
  },
  {
    "url": "categories/python/_pages/模块/Module_and_Package.html",
    "revision": "3a6c486270e9c8b9503ecdbb6e1e9d4d"
  },
  {
    "url": "categories/python/_pages/模块/MySQL.html",
    "revision": "2165e5debf99c617dcb0db5532b90c8f"
  },
  {
    "url": "categories/python/_pages/模块/Other.html",
    "revision": "da4f726719f7fdbc1305c62e5697af57"
  },
  {
    "url": "categories/python/_pages/模块/Regex.html",
    "revision": "73c2c5cc70915820bcb95a1e54465da3"
  },
  {
    "url": "categories/python/_pages/模块/Socket.html",
    "revision": "6a8e8654c8c853960b4e6117350955d7"
  },
  {
    "url": "categories/python/_pages/模块/System.html",
    "revision": "095af212273b49b2a11028acc1bdb835"
  },
  {
    "url": "categories/python/_pages/模块/Time.html",
    "revision": "59c4059f2e6f4bb49cbec468b1393191"
  },
  {
    "url": "categories/python/index.html",
    "revision": "24543d82e999c8ff6375f0952cfb5c0b"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "46c1fe81237ae1bce404bf0e8ce87f79"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "315f0e5aa93f59842b4cefc05d6773c6"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "83de7c6aba0a217a5fbd363082edb4a2"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "e66e840dbc4b79d0c9994e0628361f92"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "db683f42c1bc0d668f573f2c0e1ced4d"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "0252dfe6b7610cf7bff000f492036a34"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "69e192d4bdde2547de1555610b8458de"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "3c9cdff08a56e943234667ebc1abb18e"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "c8f81c3d7f7e3ec7799b82679e5f5602"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "d53a8f63ec5b23a298786485ec2821a4"
  },
  {
    "url": "categories/system/index.html",
    "revision": "317fc29a1ff5964ef3666e9b81da9482"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "234c659f8a4b3de3813bbcfdc292380e"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "8fd726b894cf44dfd222213538439a2b"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "5f6873e9e8264d1a1e35287a47b5553f"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "4d6b2e516e40cadd05b1818ef52b7d64"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "02bea6bbc91e96e60b67b8c932e90e47"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "77faccbbf06d6d7a30d967c08ad04899"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "66fcbf267f59663bf8b81271ad646551"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "cf86e1afb4a93cbf2bce6b29b11b4561"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "e2d2f523926e8bb9186836387885d4b8"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "d203dab22679ba44d1ce63fac080987e"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "f716ac9b880dcfec9bc6f403acfb94c2"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "ebbeadffbb5e2c81276eee22df7b5742"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "630e1d4cd42dad603df8698f5eca07b5"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "ae75a38a6068d140ab5372cd7eb57814"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "c14aeaef0bea6d01280ab1372874c942"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "e482e935d45a1b77a5977be8c6512797"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "610a8d8fe227e66ffd7bc889b22d24fb"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "562a5e1e58c73dde2d8f28a62541580d"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "a921433c4de71f77fea544ac339664bd"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "bb39e5fd16189dc329130d32c0f79f5e"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "85f418ce508be7ac31c341818f54f6ba"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "4fdd18269cb01924ee0772846ffa01f4"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "93141a22f790cd8cd9d0545172f24c69"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "875aea09f22d3a1641c6730de9dc5369"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "5d717d26d84bd6657fa142470c435f8c"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "ad701e20c75339ca32b4bbf30d3d0edd"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "a19815e16b32532c072efc7064abf2f7"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "cae274465cdab52c0610d24b577905db"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "3052478d7d259069f3f132c4b52e48a4"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6ee20a366c94a0e4da4947e296d6afc4"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "22357d92ab87b2cd0aae65680d740946"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "d378fadc4adef45ccebed31986eadc42"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b4f218c0e47b5852a90cc122e96d8433"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "b73539f0674feaae881acfe47ee490d5"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "99d8bf033b1d186ef07f4c386737c820"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "57d17ebf751871ace4d345e13857bcbb"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "7d6f5491bc055376e25efe5da92b427f"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "98b313b272022eb51d6ca55c484d55b7"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "6df5415ab6615f7029fcc5a5b39d0243"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "a84edbb9c27946276fd3247380dcdbf4"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "f0d78b5a87d0ce72b757a1d90e48572a"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "a4767c2a680cc0a812fe5e106acc1dd1"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "d8d66bf2b5d420da8f505f9547aecaa7"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "2e7899bec97c8a1b04d3699a35ada3fe"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "0b845d81747492add5cbf5c3f8126c82"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "e7f1bda2c980c8da547f2f74ae3ae0f4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "c0f15e989829963d35001012a6965afe"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "02dcd47abc33dbfff6cee7078fcd6a39"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "559e4d34c5f05dba64bf9394fc0edd5b"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "9a9acae67f61056696453326fff417d7"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "4ff74cd406dcbebaf0fc3856fe205581"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "8d72a0993baf2ffc6fd52ed216993c34"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "80b683229798d90d24426832adb5e47b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "761b92c36d2e7d9068c583c91a762fdf"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "bb3a52222f809fcf1bf4fa5fe982092e"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "b34d743f2b679cf2d703779996de12d1"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "23b91bf349f6d2424d052f5ef41584e5"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "3db201638e609f3b55e93604cf575d5f"
  },
  {
    "url": "favorite/index.html",
    "revision": "f6992a043e348bd9b7a1ef1ed7706e63"
  },
  {
    "url": "index.html",
    "revision": "5eb5be53815b4e707a9f6ce5873f711c"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "f853e658784b482ba943c99d2262afbc"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "4c05cbe2eaf6c9ffb7fbf639bb6b8cb2"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "4335c18fb7f75541578ca04e65a2eed7"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "8bf54af6ec410dd2d35bf15c0993c0c3"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "3a5a39652c71e8c6606518e259df8176"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "77a6352a5c46f681a44e9c12e04a70ac"
  },
  {
    "url": "note/index.html",
    "revision": "2230344f7af411e74f21bfc0f092388d"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "1e98b250131abe6f3fa121eb23dc44a2"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "0b2e6769ea4ede1f6fede5fcd7922dae"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "918f801199d971012510ab2fa1019f13"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "f4ddf818e3ed098f405030e7f5b03a75"
  },
  {
    "url": "share/index.html",
    "revision": "5b7d04d4d1f5dcfe7aa5ee744ab444ed"
  },
  {
    "url": "single/about_me.html",
    "revision": "fc5af0d007cb41f808f69140947362df"
  },
  {
    "url": "single/all_article.html",
    "revision": "68b1a50d57280a0c8c9dc97cbda72465"
  },
  {
    "url": "single/welcome.html",
    "revision": "6e3d4c74eb06bfd3dfee3de7a27bf54a"
  },
  {
    "url": "test/index.html",
    "revision": "d62ade20d6af70e9492551b89fb30740"
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
