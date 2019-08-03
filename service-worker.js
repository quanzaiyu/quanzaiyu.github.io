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
    "revision": "124a0b2e8f2e000beb601e82cfc15ca9"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "461638fe08ad76f744bb084db7c5a09a"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "5bfa85139a4b2fe285a2b3f3bb5a1a6b"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "4a126cc7b60fbfcd0bb02f041bc8001d"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "6f8eb162777e0055f2a75f732e90ef8a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "4316ac51298ca5ea3183c515dda37060"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "fe27995c63a1bde84dda4068c6326615"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "d488fc3dadfca5b9a858ae7a0cfa3559"
  },
  {
    "url": "articles/index.html",
    "revision": "79498edb541470072d69f2d6cdd9a890"
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
    "url": "assets/js/1.9661ddb3.js",
    "revision": "daba3598b04ea26da81b8c9b5101d729"
  },
  {
    "url": "assets/js/10.730e6669.js",
    "revision": "fe3439f081c89fc76b1f03301c919f40"
  },
  {
    "url": "assets/js/11.03a3b555.js",
    "revision": "2a7ce7e6f0bf65e82e6d390dd0a68568"
  },
  {
    "url": "assets/js/12.dea4259a.js",
    "revision": "b81c9e54cddd8f7a36dcf7b2ba0d7c4f"
  },
  {
    "url": "assets/js/13.017d0ddc.js",
    "revision": "a3072e5b22991ced4ddf3194de95675f"
  },
  {
    "url": "assets/js/14.1aec49d6.js",
    "revision": "3de1a5ec6501e2c0361733f2eb61209b"
  },
  {
    "url": "assets/js/15.54ee861e.js",
    "revision": "241adff2f543520e5bfd747765548738"
  },
  {
    "url": "assets/js/2.6b7127f7.js",
    "revision": "26579809f8a12a5b45a6e7f66e82e4aa"
  },
  {
    "url": "assets/js/5.314447d8.js",
    "revision": "62149a8ef69e24be7a8bf7d56b777b01"
  },
  {
    "url": "assets/js/6.398530e5.js",
    "revision": "c19ceebd7e62634619080a6f18497845"
  },
  {
    "url": "assets/js/7.b1fc2793.js",
    "revision": "6f0bd63bd90c8c6e1bf78865b1a6677f"
  },
  {
    "url": "assets/js/8.46eac014.js",
    "revision": "29a143886bef54011dcefb431282f372"
  },
  {
    "url": "assets/js/9.c4f01555.js",
    "revision": "ab856e3be3c6aa7162e7d1519f7ce069"
  },
  {
    "url": "assets/js/vendors~docsearch.1d9f8a8b.js",
    "revision": "3ca000d6d42f20b8cd33d12e9070e15d"
  },
  {
    "url": "blog/index.html",
    "revision": "47345d13b5c8b60b9464fdc780b54a50"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "f04373d8901d342466ad244c0102c64f"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "904283b3bb533fb1fce350d8779958b5"
  },
  {
    "url": "books/index.html",
    "revision": "a7a22acc37f52ef2f5f68e1cd732f046"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "b96fa593b53112606e199c41f2e4ce99"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "06f9ff0896190e3c813393452d4f4e38"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "f1df7f1f57252a75a22f7ab9727c9789"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "e87425e497a56e1b652a715716ceefa4"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "98be88f23e34fd0878555062fc1bdc9c"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "55aa02811a9b6949617dd81a742774a2"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "2f29daaed049724e4a077644bb39f588"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "ef2b8fcd951368a91ff76c2ef866c985"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "5d558b1619ad87bcadaac58124270e24"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "8567e9c25d2da1e282ea3adedb045d24"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "01700afe7fc7aa6f182ec8fdcf097f69"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "d03ea5b3e7983cbe459d814f3b475c2d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "7dff1b80158dc48fb61a5c0c4a706805"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "6c69f564080f478945e3e439ac986b97"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "fc9448304a7bfb9dabe9adbe41f15c3b"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "ddc8de37d99a792dc5a3c812c348dd8f"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "b513e83ba7b8db2bd55dcc309281357b"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "7d6d2c4afaa91b2fe6285e871e208e88"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "9ae48e4e8732f09e5c77ba793eff7f6f"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "a8e443aa4424a3300fcc23ee7e441020"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "b5ef74231107434218a81f3512e9b3c2"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "7331c2b80dba61cd5b09859213c5c54d"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "a1e343a662665b0cbf8964ad5327c6fb"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "fd86fb691b6b991a809fc65ed036efba"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "6ad2a01d8fe7bb0c7decce5d695803c7"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "0732d973e5cf410f73b5b2723680542a"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "0f9f74f031ca21a69c6626d430d96902"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "bdad12e5652e7e4b0b1e3c1bbfc48728"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "c7e768231e103417c65a027e28c99f9a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "cb76b40807f4d51e8f657896e4784d12"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "bc376f45594b3a40bf91c17105eccf0a"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "e7fa81a2a0d603eeb18fcec7744c1164"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "17719ace9ca1c7136877acdbe231d37e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "ebc003aff479acfa9bd96b34ab97f658"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "c640e431ad3c438ca786f5f2d39b38e5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "1363e12c271d0f91b6979b46a6c63dc8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "96d8318f304d711b7da71daea4af3144"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "61e92caec863fe103a509592566b42b7"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "ccb9f21709c2e111a0fd79cc8bfcb8cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "39d4e970ad561ecc7b385eca7260dd02"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "4fb590640e452f0949acb76d2fbf1591"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "4d26613067320a3861724deb1c4e1b1d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "f7ce0503c54af0c24689a2d226d7e668"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "81f4c0133f4ecf641e80a03a45b25de5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "a27e34cd4d925a3a1a03202dbcbbce9e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "afec6a1fcefe3217c6bd4338570d84a5"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "af245517ebc08e76275878a9fcfb702c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "fb6a3c7e230a40ea87bbd351ed05e55b"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "e20408ba164d86d9317f4b021f26502d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "cb9b7eb35d33c2b5c441285ca4577e52"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "9bf0ef2fbf7e27881ceb27f4f14de22f"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "4dda70f818ece84ebcec0e96217b5034"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "0a566ab32d2e886885f22e8e56685e1a"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "a179f152b5ec7eaf533df81d35ab1fd1"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "c2a1cf7fca6f1fb3e6c7282e11a028aa"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "30f93bb2fc7af2d9d4529dc76f0719d9"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "2a43abb07f7df8c22eb795dbd48701d2"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "dd7ffbaffd3ea453fe69ada185cf4e5b"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "adbc69d553b49e7c868d358c37316b22"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "b4f61bba455f21b928bbea96b1128102"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "995debc914cdb13daf827aeef6b24e55"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "2c3f960d5440e9baa1e2fd7a99ff58e0"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "88a1907a0b988fa01916c5d5ec612fa1"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "cc1b9f114bcfef59675d7442cb576389"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "1a95429fa1261d3a8432d297652b50ac"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "6d24edb61a631a77c7bce59240b17a3b"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "4254fa0b058488e00ab186fac045c05b"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "11e6c50d0bf690b257582cbab7bb8294"
  },
  {
    "url": "categories/database/index.html",
    "revision": "0b96190b2b71c191e43997b0c6b86431"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "560b0508ebbfacd8a6a0edbf7fe8544f"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "df21dfd4d8fd8904b530c4b2f591a082"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "5ac2c43a8910a1a559adcc119740710d"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "ab5b10727869e94ba9962f1c1a218298"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "13b11028bc5fc6233655eea3728a9c3e"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "cbad676ad84c59766007ab7053815d9d"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "fc092141327f6b958a8718e9f776ab42"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "3caec62857a6e64a8d6a92f923a59765"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "58df224d7bfb0f2b1d79913aaaeb893f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "fe5fd1797ad4f49e31f05e22ec4116b9"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "6b47b956f562e097979aa35af09ae9d1"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "e593b53f4deeeb82f02d4a994556cb52"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "db78f704e9dbbebfe90152c751576d53"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "61bf3b50c9850cdb0b0f4713921e9476"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "3977a40abb61990c77799329ff73aa99"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "5b2f807fba4db15702c13a5d108a366e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "4e4a107b03e66ae51efe61d33b008d0d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "e3938337b0134ddc844cc43bdf5b01cd"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "63ae2336f10e4f19329853dbde48fd36"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "c6d410f296ef06e2cff0f7e023fa5f15"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "446ee27f8ba1693531b809e32721695b"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "a1fe96a1d8b4f868dcacd785c33eac10"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "11df054aa91cd10602df2a420731fa60"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "aec414c46dc1abc1b39b546bee6bf371"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "08c14310127ec9f866c9f8ebb6664fbf"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "442239cb8e9189c3b5b08977a77bc0a2"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "d1955899a7d9e7de89d115e67c960a64"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "939b5f3244d86a7d47f494a3d81cbdd1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "5ed7688c89e210f576db5d2b1ccc97f1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "fdef4bc53f04b0aaf11fe7dce1589e6d"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "abe004fafd10a8a5c4b5079a4d96d135"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "b5f7bf159f7b8fcb3ca532a0997f6efb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "c7b296fed645e13d98e66f27345a07d6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "8b6dc1ab977a34119294194e59562ec2"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "f67e330b80cbb6bd76dc795e4f3efda8"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "291b6a111efd6240f443572039563de9"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "8c662762d7c7d051f8425e814bceb025"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "39e3e29f3e5d6b135147757b6368d481"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "4d71e6f70539311dd899508650c3cc01"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "464b596439f06b8f51d225ad7e6fce69"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "02fd29157cd79914c028a91983205283"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "a3123e740f774cb3f93b6f7df2954be0"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "15b9223ef7daa07a187969203c687d79"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "d9565670f9ff82f265704d86fafc5e8c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "98eb9a8e228989171666307361dd16a3"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "ffac0e97047c8d9ad4c8bbdf675dcf35"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "961125b68f7462f1003b6933a695e005"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "fa82a7e6aea2feb398d18ef0705e49d0"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "d49b0a30f5587260edaff753d45b015a"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "c053ddfe89413c04e925e1422ac37319"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "b5e3116d8a7f0b0a67279691a4c18239"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "cced9d23dd575a4ab9ea9d47ee7832c7"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "8b9ccea20a24af681b17927f1ce7e719"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "a37d42783799e20de16ca9583080027b"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "22f1ba0e77eab5946a308a6f744fe84b"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "e298531fc1cf0e0b5434bb4827204dd9"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "c60642e41f0e021202e019224169bb8f"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "07b1ac4553cb95c16ba9191e0c670903"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "a41a268f77112415b43c4b60e70331dd"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "fdf2c948d9311f7184a1ef64fc8f6e50"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "bc189d104bd1d1a37fec0dc8e650e86c"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "4dc7204a42cdccef3643dc4959f861db"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "40f70994a6c984c6aad7e31fe17bd341"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5f854e971fba96610524fc3eca06ccf2"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "4c7e18e586ab55cfe291720bf6e58fd6"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "6aa738cbedcaac25d735df58c50bc9af"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "a254f116bec16727f60802d17052ca70"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "c01b10930e381601d9072cbe2eb8b632"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "f62f0d86caac79f1d45e1fd9f7733cfc"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "ad47f668880ebe46d99771090e15da62"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "cee0b64d5dd94d0afbf3974b4a104389"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "8875fe22f88867d0d57ef1b0edfeef70"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "f3b9c571b4adc8b0648b4c9b68061df2"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "68ee87a3e8f69f1005483bd1b51f494f"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "45e6874762100b3358d5bdbdfa2a314e"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "cbdcc87fc4ca603d338daa05e7f70aba"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "ce2f66944ea6cbb7d099e7d248314c7f"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "708c11cc5c98d4ed998e5114b2a09e39"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "9d89e7262f473036188720e99fcd7de4"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "ed2382b04478f503c7bfbcf3047684d5"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "2ba5dd1cb5720e9fa3a77319581cdcc1"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "5f1753075fb6446c1cb7e8f56277e9ba"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "df57f449da71081b4f095b6ea7783b47"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "d47369607e6c719d8a6cdb8cb3267d13"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "5f7ed880f8f82af5ee87bd548b5969e8"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "29cf588881c1d960b82199d9dc3825ca"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "fa99dd00ba68392291f9ca93a85f883e"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "5d64fb322b362da34fbe1c8e2d7119dd"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "b174bd8d1b19ee996651334f733a6efa"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "b2670263b344b277f2dff8ab35b62546"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "b2561d8016c8f1be28c1ba095c83935b"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "580ac6f47af26f95d3c6ecb9cd429f8b"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "97d40ebc2d21740bb5b4ba2da4e6059e"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "d6ac9dcac5a60e83019e444b9427c5ce"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "6ac5dad566aa5be4daf0f53e25c881a0"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "651c817e7d3088c37bb3ddf67e79ba01"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "946e3f06be1117282119adbcffcda702"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "c6209ada9154850c2d24cdca733551a3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "370b87856e258c0fc28f7f87d0a0ebc4"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "d0b6f5e1dd54eea7543cbdb7e2094ea7"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "c9332d867fdd8280ff9f3429b89e939e"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "30c3908db76b78ebc30e142db3d0bf35"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "9a0cae4fb9f3363a74d1e12437a47cc6"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "04b9004695acd5bf7317a31c798c13f8"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "0179f3b30352b7f06c25f054ebdbff22"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "87ba5b230d7b1f19d15df074812b2191"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "21f934bc44db7f85cb8115348705a74c"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "e642d8dfe9017b4d21e379e09376a073"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "6c090420f6064f3025c427ce48326e11"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "bc1c3ee86d4cbfb30062f58defae2478"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "9e5680b57484074417f0be72f79f26ee"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "bdf8dfdbe9dc7128855a176753af363b"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "d89a7167041b3a6191bea8c66be1d07d"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "873d1d462f02c87d640b9feca7aa9710"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "0abf71f3263365b0476fb333233b1b16"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "b6272b4522946c2529ddd6bef4aca774"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "5f3570402a7d7ecf765f9f6ef84bdc3f"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "310fdd3188526748f8b334ef57d478b5"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "e9ea4a329346fac36c79bb958de97300"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "8538ab82143209fcda0669c5713e2297"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "dcaf3632139d7c87cb3b2d63d0195470"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "13aba6d02ac2ba39ec9020d7f445ebab"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "a60db6b2cb2317ed9ea7b6c3a36757be"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "47c94695d8844f3adf03a259f19f99eb"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "028db601d9b2144c9f703d9772618fb9"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "dad329cb0832a5a39b4cd46a938ba824"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "955a31d85b7f7b6369d82dbd41176f26"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "41082369480842de011a42e2c36354f4"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "3f63c4166201418c2dc6abb9d4890c8a"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "a9e0cea05330675984bbf3e05e4d4497"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "c970a5bc0bb31e1d71d207d172debe69"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "0587122f4f68418cd355a03c148a32db"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "c7ec2e0aebb3e471f425a78b718fcc83"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "14bce9d9008db9692715d079b7565a36"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "f83799af7673c95db3e8f420617973a9"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "805ce9c126d4d02b81c1c8d9351289c7"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "d5441e73f45b18666119b5b6283afd66"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Applicative.html",
    "revision": "8ee50d2512e24f9d1e6ef856d8ab9144"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Cache.html",
    "revision": "65f7f5122aaf9d1570073abc4cfd71c9"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Compose.html",
    "revision": "d923c2973cc6a269c44109f66d1af8be"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Curry.html",
    "revision": "f175bfb761c28b25b3c590c2e1487e73"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Either.html",
    "revision": "47d8589e5141e916efae6144f1e71091"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Functor.html",
    "revision": "9c350f79b328b4705f41c48230ad5c55"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/index.html",
    "revision": "4d9e5868c147d2b128a13b41b0104034"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Intro.html",
    "revision": "5c33359bcc19cb84491c2795af8ecd24"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Monad.html",
    "revision": "512e2ba884c689cb508ae2801654c229"
  },
  {
    "url": "categories/front-end/js/_books/js_functional_programming/Reference.html",
    "revision": "1f6651242ad86844d6679053bf66a4d1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations.html",
    "revision": "84181b31a4a0655245f85602bb3d6953"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/condition.html",
    "revision": "e3188130f11a3e7ddc1b5fc89ddcbb96"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/es6.html",
    "revision": "5c36ba3e0960e788bb95d63125ce4d97"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Abbreviations/short.html",
    "revision": "c20d6f982358e59edcbd464f67149b40"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Array.html",
    "revision": "f5c72b4fa41bca6cbe1468da74de4155"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Basic.html",
    "revision": "970e4fd31e8f5c9493f7b92649ec0dd1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/BOM.html",
    "revision": "9b51d1529993df12560ad61a147dab73"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_map.html",
    "revision": "f41041707b314f1657118e8c2b32265a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/array_reduce.html",
    "revision": "66511c44bdbbeec854d0981884524fc2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_assign.html",
    "revision": "9e2ffc6ba00922ff4942cd5c006afcd8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_create.html",
    "revision": "331634b55b36bae6b52ece22774d56cb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_defineProperty.html",
    "revision": "e51df918f47a0ca6bedd3369db2a1af0"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_entries.html",
    "revision": "98ce1684f854af19a211a417f55dab74"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_freeze.html",
    "revision": "0b1bb34b848bf0d3bfb73b9a9d6219aa"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "495721a1c43cc7d2e18514723e60dd69"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "3652a7ec788ae2f97c73df5c4e499aa2"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "88b8e60615f90fe80efc9b5b9094ae6f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPropertyNames.html",
    "revision": "375fd7aa9aa012aa052cb3e18c04bf5d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_getPrototypeOf.html",
    "revision": "5789276e5945d8717e2c89d1a47c5ed4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Comprehension/object_keys.html",
    "revision": "a55e08907b57e0f71634a747c5dd49e5"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Date.html",
    "revision": "9722605711b5af456fef78711d29a787"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/DOM.html",
    "revision": "ef8afe9215cb0e8fe19d198ac8d2e9d4"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Function.html",
    "revision": "815d1b935808e0cb9ac1a52cfcf8e747"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook.html",
    "revision": "862f2aee5ecbfd4709dd574f7950b226"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Handbook/array.html",
    "revision": "77db1d600e0b165145ed438b382be022"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/index.html",
    "revision": "772c9f6b6a61d90522c50a3f60206cb8"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Library.html",
    "revision": "8878152a491f1bfe5584cb44f2c327d7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Object.html",
    "revision": "e5ffca984afbd79c035b74be1dd5bc18"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/bigDecimal.html",
    "revision": "445999750fe07187bf27cb15f5d59a99"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/favico.html",
    "revision": "a2b999ef4ffd9b6b89855bbfcdd69f4c"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/jquery.html",
    "revision": "d41b3856084a48120ed419feea5564eb"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/moment.html",
    "revision": "7f0d4f055097c6ed62c6024c12404cc7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/move.html",
    "revision": "d246f17e87a39484151ef85916ab25a9"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/pdf.html",
    "revision": "d41dc47ad733e7a8b1d3408196b3720d"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Plugins/v8n.html",
    "revision": "5612dd7d414dac5c8c684696dacbd8c1"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Reference.html",
    "revision": "20fe5e044c4b5d08ad3ce379350c6125"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets.html",
    "revision": "f88c0dccc35177de15ec57dd032299cf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/array.html",
    "revision": "53ec43ca3f574c0c3d1aca02b4a2fabf"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/color.html",
    "revision": "1b2bb00fdbfb3f493daa345d174ca2f3"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/date.html",
    "revision": "43a6373e501ff726f459441476032ff7"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/detection.html",
    "revision": "835fb234a16995ad4e3f65f2044978a6"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/math.html",
    "revision": "5eb2feb875bf99e20bcc432858d34683"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/regExp.html",
    "revision": "3ef219ef36637f0df6148ba59f310621"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/string.html",
    "revision": "b116783112698743e334f50bee84a12f"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/transform.html",
    "revision": "1d7c586f72fc7fb67be2fde027f6692b"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/utility.html",
    "revision": "1676e4639f6d833096034f5a4d92857a"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/Snippets/validation.html",
    "revision": "b87807c22c8e7d15193781acde89a828"
  },
  {
    "url": "categories/front-end/js/_books/js_you_might_not_know/String.html",
    "revision": "859bfa5b7d9fb3c2e3bce9f4a0e5158c"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "aea245bec0dc6581459d67ecde63d91e"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "1e5bff954bb054d0a1ebaf47ca733910"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "c084b5d21a0f0f61f693610856decec7"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "0ede93bfebf4a28cdb18deb6794728cd"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "8a4b94392efe06102dfdd1e7e2c53df4"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "687831ee1f24bf4fe3a9cf973ba06953"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "569f623b3900e1b77c9677a273fcb2fa"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "2138a288baeeb3982a735aa662ea1219"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "7a69586bc9a0e0391c5bc8b55cf7c841"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "896d9dac8276724f4d33c745a6ac08fb"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "1c4739fe09cf23dd8d7ccdc1d12681dd"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "8c9ad848b915339309f27d9919c5d764"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "fb68e56db0043faa128b5f12b7be6e58"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "8683058f0be4f85497d7e91c89ce6acc"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "339433108c4066dcf335bfad6feb7e49"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "c9d45cfe0ab8ca309b08c37ae7aec870"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "7d49b01ea5bec372f04f6829b74c2ad7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Fetch.html",
    "revision": "cd77f4b733fdd501ffea8aec3a3861dc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/index.html",
    "revision": "5dfdc918453c73e882041e333bd291e9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/api/Platform.html",
    "revision": "53f7d9fd51b28a5c8728cd2737416fe4"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Debug.html",
    "revision": "8d62fa08f058619586ef24b27eacc932"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Entry.html",
    "revision": "f6df43f2159ad9e4fba8e9ff1686dbd0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Flex.html",
    "revision": "d8d20d3e9950b2885df2eedfe58afcd6"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Redux.html",
    "revision": "cdd5f556a02c86ab58f00de6cfdee44a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Size.html",
    "revision": "fc7b3e82c4346e3c1b8403a0b5b5c417"
  },
  {
    "url": "categories/front-end/react/_books/react_native/basis/Style.html",
    "revision": "b95da761f41d35fbd9f67ea8d55839d0"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Android.html",
    "revision": "0ae58e6bdfdd9b06bcc7595309d2de39"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Image.html",
    "revision": "2dcba29700bad282c9f4d67c6b8b94d8"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/index.html",
    "revision": "08c196a75281f91f3f6ba6bcb3d4624a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/iOS.html",
    "revision": "d90aec908767e41af56dae97a0089528"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/List.html",
    "revision": "96e309a11aa4e1d914f6c7adb73ee832"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/ScrollView.html",
    "revision": "9f016469001933d2241634e26e9398e3"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/StatusBar.html",
    "revision": "8f1720045810f32dd737611512b4fd71"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/TextInput.html",
    "revision": "e16673ff6c13d81c6278713a21d63051"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/core/Touchable.html",
    "revision": "2b29a90c7c7881d0338a02229206480a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Audio.html",
    "revision": "b5992591920d8a1a3404a73dffcb5c45"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Camera.html",
    "revision": "93990c326f6d9090a85a84fcb00c220a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Gradient.html",
    "revision": "5e0c1edc9f679c5a84081a478ef3186d"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Icons.html",
    "revision": "adf8c0324b644e1a7b997a3d297d61f9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Image.html",
    "revision": "873ab5d996709d595228dc99e88ea44b"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/ProgressBar.html",
    "revision": "94aa25bd0b8679ed2cc71c0502241fef"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Shadow.html",
    "revision": "ca78853ccff54c12320c1d1eac208f5a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Svg.html",
    "revision": "56bd576fd7277f4432760c38180411e7"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Swiper.html",
    "revision": "c82f6b211051cc44ee84209f52457803"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Toast.html",
    "revision": "022009b2990ea8e0a7543e5031336aea"
  },
  {
    "url": "categories/front-end/react/_books/react_native/component/extend/Video.html",
    "revision": "8a827a1877383f746b5b32864e0a5f28"
  },
  {
    "url": "categories/front-end/react/_books/react_native/index.html",
    "revision": "c3cb2980c33215d6a662aa517242bc80"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Install.html",
    "revision": "69bd82e4800fa915500932d57b728e39"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Intro.html",
    "revision": "4c36c11fceb60e1501151581da7728cc"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateBottomTabNavigator.html",
    "revision": "233f77d71fcb55893dac9e011907e550"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateDrawerNavigator.html",
    "revision": "10179d7157f29285e2bdb2647aa4077a"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateMaterialTopTabNavigator.html",
    "revision": "e0e989e4f825532d550f2e3df5af4e0e"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/CreateStackNavigator.html",
    "revision": "00b1041e234d335491c83d45ea7d0a72"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/React_Navigation.html",
    "revision": "5c0623d6f1c14dd609f46001feff11f2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/navigation/Redux.html",
    "revision": "87853c66db812d6ff910b872faa229b9"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Reference.html",
    "revision": "cdeda798ebd5fe7455bb9c089d879be2"
  },
  {
    "url": "categories/front-end/react/_books/react_native/Solution.html",
    "revision": "f5e476759151c5e93af9a74ca6dcfef9"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Component.html",
    "revision": "617578ee0481de07a7e262a6990cb45e"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Event.html",
    "revision": "9e4fc6a48f12e27ec545524e7d9b7790"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Form.html",
    "revision": "6d9195d692b8ac8498f298e4d4c8ba72"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/JSX.html",
    "revision": "093336f8d837b54928e57de22e360924"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Lifecycle.html",
    "revision": "465b072c0df8c0be0df11b65a2d9eb92"
  },
  {
    "url": "categories/front-end/react/_books/react/basis/Slot.html",
    "revision": "6dfd7f4f67efe85537227ae8c9bc08be"
  },
  {
    "url": "categories/front-end/react/_books/react/index.html",
    "revision": "6ba1dd82cf11e8068b1134f738b85c5b"
  },
  {
    "url": "categories/front-end/react/_books/react/Install.html",
    "revision": "9c811cbdb0b17ae2797c2fadae8fdbc9"
  },
  {
    "url": "categories/front-end/react/_books/react/Intro.html",
    "revision": "a47cef9211c4feabc4da7614cec34068"
  },
  {
    "url": "categories/front-end/react/_books/react/Reference.html",
    "revision": "a4b564be50f4840d650dfc6a917dc3f5"
  },
  {
    "url": "categories/front-end/react/_books/react/Solution.html",
    "revision": "d9a7a03ae2eca9b379c32f7849f54956"
  },
  {
    "url": "categories/front-end/react/_books/redux/Basis.html",
    "revision": "06c0fcf081bad3e9a3433a134e9d0910"
  },
  {
    "url": "categories/front-end/react/_books/redux/index.html",
    "revision": "f00be43a796a04381cec7abab73e02c9"
  },
  {
    "url": "categories/front-end/react/_books/redux/Install.html",
    "revision": "d829935ceb9ee877cb60e0e3bcd328e5"
  },
  {
    "url": "categories/front-end/react/_books/redux/React_Redux.html",
    "revision": "f663ea6204d1148c9cdbf0d775d20cdd"
  },
  {
    "url": "categories/front-end/react/_books/redux/Reference.html",
    "revision": "b6a5db6a6d7d3aa4a6fcfa2e4e0ec362"
  },
  {
    "url": "categories/front-end/react/_books/redux/Render.html",
    "revision": "5f2008ecc520c66ffc3263ea56fd1c67"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "e389c4fe0a6c8d152147c7b3fd9f7647"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Built_In_Objects.html",
    "revision": "61dd3fa4fa5f2faef4217a79f40f1891"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Classes.html",
    "revision": "d55575a2ff6b4fd27a2ce8696d4a0040"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "7f7a6125647cb7f83b636dd6461fb51e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Interfaces.html",
    "revision": "65be82ab5c457f649c5ec7e8eb0eadfe"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "8691ba449d5a5099671381e88a3b5681"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Auto_Generate.html",
    "revision": "1fff576a5ca853d51d3e748336bab1dc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Dependence.html",
    "revision": "7e72f26dd6d708615763d51b4beb4f46"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Global.html",
    "revision": "4e9f4d35230e2e43a29d37b9e591796f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/index.html",
    "revision": "d5d3bb9716f946625a5cc6093f22dc1e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Npm.html",
    "revision": "fa350aa6f1eeef7395d3a88b6300a639"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Plugin.html",
    "revision": "6f0edac2b6f651a41b348f641308fd12"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Publish.html",
    "revision": "2783503c4445759abcea31d2b02acb70"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Umd.html",
    "revision": "2e01f873965ba3ecb1eaa91f030136ff"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/declare/Write.html",
    "revision": "96011bd8a6051d23d0058d0925c7ac9f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "60bee6304487754248bbcdd9b0a8e863"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "49706ede11758863f51a4f6c9f0f32fb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "cff6ec5639181e55c19f60809a65c752"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "f0e4e447b7937cfd1b51ed491788b69a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "f55aa5c9d358442aebeef380df19f44c"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "52f1e30226ac116b591e1e2fab3061a4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "18bf8b374ca97486a19865f78019413f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "30c54b2c68598b225c50d9daa3e272bf"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "d6a12a3979aa8c75ce78cc37891a7c45"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "fd4a38a206c4c52b3eb98fdc320839ab"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Function.html",
    "revision": "2fd8d75a36e558a5e38bc6bc1c232c1d"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "a22ce82357cfcc19f47cac881a90c0d9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "945bd5138abc5c5facacde870d1bdb49"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "98e02fc36608279f60b0b5a429e1e65e"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "961d2bcc6290520eedcf058c484a8f82"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "31d7bea0eda3a1121791d7e5798525f8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "3c403067ea2b6f393be34fb13b57f87b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "c44f156359bc24f61766845dc18b0cb1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "bc70cea72d7f90ec2fbfd1fc87109fa0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "a856dd4c499897c2bac4e416b3d0772a"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "31c0b8afac4a8f8a3463709c03057470"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "c14ebc960e819db6224bf31aec3e653b"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "e362c5ff2fa512ab8ad7ede08e7cd7f2"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "c4477037d9a753c5465dee6a4c90a879"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "b663c514b2f7000ead9fab225f591adc"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Types.html",
    "revision": "bddf1b957ef90b92e2c68cb546f09745"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "5ec5df5d4e98e8917af2207ed9a3f6ad"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "0437db704c899cd20030c881846a740b"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "cbea5c1bd74bd931b206cecd54991723"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "796d5fdc39e4f5df8cce17a8e9a53f1e"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "ed46c233090fbd12dd374ffb1ce00ed6"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "5ebea5e25e84955d003809961520607b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "508d5e46878b25ac85909f7b3838ec41"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "e185b4841faa0dc0efd263e4eb63175b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "d5196ce38c7f82b55979e57c4ecda474"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "c8d7eeba94e9660f38c3f9f8037b42df"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "bdaea9cb65436ccb71a3e44e8ad0ef93"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/Image.html",
    "revision": "6cdc704a8700ec3850a47bf348f9b9ab"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/component/index.html",
    "revision": "fb2b20da73716c9473535b3739b1207f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/index.html",
    "revision": "98c056e7140e6b7ee3530f9aa8d803af"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Bluetooth.html",
    "revision": "75a88c8dbdd61229e5af53ad5da91858"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Camera.html",
    "revision": "8f18d10af70df651e0e0ac00233decbd"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Device.html",
    "revision": "59f1ab747622c27bd663048abd2d9363"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/File.html",
    "revision": "cb38550addd93c6d64d7966a2c55db60"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/index.html",
    "revision": "6708042af646630c2d3c3d2999dc492f"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Location.html",
    "revision": "ae352f3cafe9d1b1bb09a95a32d0c29a"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Recorder.html",
    "revision": "8e7814c2854acd5877af4190a9a54b38"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Request.html",
    "revision": "1e30ff4bbc2d945a98c2ec40ff9a7743"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Storage.html",
    "revision": "49e834aa4fa3d02b1084529d594560d9"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/interface/Upload_Download.html",
    "revision": "9be326ca6a815e0ca9a0fd4da7682d29"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Intro.html",
    "revision": "b9b2736ce5fdfa469fedf00e9ca904ab"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Reference.html",
    "revision": "f975faaa23fdc20e2e917e556412e1b1"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/Solution.html",
    "revision": "1ec7d3cf8d47580aa50a68e595cf836e"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Lifecycle.html",
    "revision": "9ec4188f9620ab9c50eaf9e9f5819cea"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Page_Event.html",
    "revision": "cd4f3a807425d46e89f46542d59c21d8"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Route.html",
    "revision": "5b6cc8f498c2c52e671e1e54e5513417"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Style.html",
    "revision": "9137553b80930134f6fdbfa5f21c2047"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vue.html",
    "revision": "7a6c6b1ac5878d849a3f7c049a451e44"
  },
  {
    "url": "categories/front-end/vue/_books/uniapp/usage/Vuex.html",
    "revision": "f35fd476fe15088028084cb1f95488ff"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "9fbf3df0d0d5541de84489818cdd5f47"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "ecb2649d02d04c85c09ee985fae34a31"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "ac1c04521f473400aa90badc28648e62"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "f1462b463c9bde47684ae7e18a30b119"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "d6e39c4a18904d85a5cf01d6bd66d880"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "3268990f253964f6523f60b48a02d4f1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "bf8b6edda96d0ce4a73046351aef8bcf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "cf900c24eebc6e5885cb9ac067a7d0ad"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "744aa4432a5340e4464f4d9395fcbaf9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "1069c228eb4549e1adc04f66201572dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "bebaaef50ba8b8f2da5ac54196396ad0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "dd2d2787bc0427a7ae0148cab8a92511"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "1438963133f9829cebc81b2934baa42e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "0b883c55c5ad3505930ecb9d87d4a065"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "adfe4c348a7aff8c74bc89234afa4f24"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "3b95c2b7506fbe4caf7d12b0f7f92f3e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "bcda674d249016123875a7ea72763a4d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "729b841a263d7dc1cf4f1f1bc77fd806"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "414d8f6482d0e2d78c0d6e9c11be0128"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "01d29a49ce929f68e806d250e144bb16"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "7ea80749efc7d10ec49a0b037f15e143"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "325e3e05750754cb1d087cb6d5039cbb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "eb984dd2761f22961c8e0626580e732a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "64e33a0c034cddc2bdaa075e6df04146"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "6f94ae57a07d0a81dc423b2cfd28afd7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "2efa67609ef51cd669b51ec91ab5a922"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "b95960b9e2ef3ed0a2bebd2e1544d0bf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "6089150b7f20ec1c5f94b705fd860be6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "77086bdc2ec81772bcf0b5f019110db2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "2a812dc1d30b8cfdd7340de4a068fe6a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "40326c2c5f65459977d8fec6f9ca9bb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "a9483da003506c85fafe75cbbd004d77"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "da665a316eca490f2284a2dde98ba93f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "512a7d3dcac18490f4d81eb2f286532f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "fd803fa6beae1932151fc5b4f4e2139c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "bb2d7805ff4138f9d5157d61c1257518"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "30f7e2a8ff2dff173f1641d4ab74bdd1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "4e955bbfdcce96626867126b4d04e9e9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "85a00e521bae5003f07dbee688b766fa"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "db48a20fe66f81c30c5e11a837588e68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "9bef7b3a5bd3cd033f17203c309c8d94"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "aab7895e410d58582118f832bc230833"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "d12682c6cccc41b6f6b4165fa9611c3d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "f674036ff777698a79efd95de93004f3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "30e35bac944c07b43e1fd2b842d8e983"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "774e5bccf023b868d5e30d14c47c05cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "b73ecccf0676eb933eeb22fdd154bf23"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "13c4319d3b9d5ee7197c27217b45d498"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "0274e0b814c1ce84042e18394bc11ce5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "6fa0bf16e8d55613062ee1b51949e4bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "1c95313d4f812e1a22262517c3d20c0d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "286ab5905a8e76b96bcf889e533afcf1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "e43ac45beafe76bbab2f61220305cedf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "209bb30d27a2d4aa07a0e51fa84e6f8d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "cfe81ad47c2e53302f4827a7d01961b7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "af70524e5ddbf6bdb035f28e555cf642"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "aaeed972e229ef756cf9b0f10f3a3941"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "5bbed322171b5e84980cf56f06cd32fe"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "4efa86efb752bf8ed7b4dbbdda4ff79f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "82f6d89e4991a5d3dbbcf62cdd47a37b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "afbae4bd37bad951db515c77c30a0dda"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "fbe5d7782720fde7beb3fc9c0dcfc114"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "a051756f3bae425325dbb08da6d294a2"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "58360609588771e40f86e17717bc1b3b"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "2dcf425f1741bf02b924bffe3932f56d"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "d7d126a2e8e1f386ef86f19b50ea41f1"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "1ee3f81d8cc09df8a1bf0c535a22cc61"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "5aeaf455c4da60113de6290ea3cba362"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "e92312f3d99cd875a1487ed541ec6b6d"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "94ba9088baf8b99185a368b4c17afc42"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "e49c673348ad0aef4a1cb1b43f27e121"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "0db889f8d86a18051122c07e912e5282"
  },
  {
    "url": "categories/index.html",
    "revision": "2e89c540796c7761376604b2885593d5"
  },
  {
    "url": "categories/java/_books/android/Adb.html",
    "revision": "369fffb4383162c761dfae418fe24789"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "6792ac8b973baa32fae73551085d2fe4"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "f3ef1588b04363edf3c92f89e55678e0"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "07846dce2f20b2243a8c321d5a5cb795"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "52fa2d990335a2f2f421da9a01b0b090"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "334c26d21d5a561b850f8293893f7f70"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "25f064f18cb59f91f86db206bb31c58e"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "c52e34ff96f1e3ff3172bb55289cf609"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "3cad9748eec423b0a16e632e229138ba"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "59254d366b066ae1d792953564597fa7"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "aadb5d8d3016d0fe1b30e2dc25675dc3"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "243d4f4f32d1972d8cb1f35891995c09"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "8ca4c2edef05de3d079885ed84a68531"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "3be717ae25c54fabc562638299eafa62"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "d4ecb7ab6422f0c1cc0b6293652b3a9f"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "0a4063f03cdfc105e0a54f355dbcdc41"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "31e5bdbd2a8d102ecb1adbd3a7cde6d7"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "d0d3b0082d74883d4d3e0a4bd6d53857"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "9715065ae0fa2c89d3f92f887c9e8f33"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "012a576146a54b5b69e152e81149a36d"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "2639986d7aa6722557948a84c7a3e813"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "154c6b0f0fb5dc38b354bec60f80613a"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "f3f189afca05796f9352d8f385a644e7"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "149c30f1a387da515859c285b73dd460"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "1c6eb67dbb7a3e859a920cc5e40c1f96"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "6d40759e8c208919732663c6ea0f59d8"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "092cf852c969db8d1a67cf4337e469e2"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "16795faedd60fe4f1fd76dc3d7080451"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "c5161555552e9af99a73dcf2ca999bc8"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "85298ece0f10cc5278a32321b0b65488"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "3833df2a92d28bcfc050d57dfc23912a"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "77bb3fdede6025c80126332891628023"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "fad5b2468797d05af7ac7b2bf2bdc317"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "bdfa71332f0b90a07122fd88b5957e3f"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "5f68cd2942fe803542ed284ccdccf1cb"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "14aa23f80911a55f58bcf66c579af798"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "6b26a23c1aa54c0c80fa75c579cda43a"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "71d54f9055cb045e007cdb003b49eca9"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "c0c3e9c3073bdce8e4a03a27e5422eb0"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "985962ffbb1745ecdfb3782ff6acc7d0"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "e56d30f074ff01ef557c0f810feb79e6"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "a8c37c925906228ccfa2b7da076d94fa"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "21fa9bc236d84b65b69e8c39c23f6203"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "2e4356eae048c999e0bd858a8d220ba2"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "b8b03dde7a3e416e2c57de188d2b0790"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "4d3e1a23d7d72575989b6ad3585d3c06"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "bef191ad1ed4243376fe35b6d6428ab6"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "9421997b32fd024c16344e36e687e72c"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "ab7edba1e532fe85e083277d48fd9c5d"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "8be4a82b7731161823d064b143877974"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "53fdd4c4416a8894da94c4981bc05ba3"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "093805dd6ce911ecdbab683baf6c9c8e"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "da9dd3eaece45133bd741f33ba0375ab"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "fa5d2636e40c3ec94cc976cf1ce4dc97"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "4f6f8d1317679e231fcbce7f1ce4f126"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "03a00f497c9d84df7db380dff27f3f73"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "0f8eefa7b0ef7779186d406f5b394d9c"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "8347cc0b1120ec6988fa8c591d8b717a"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "fc7a6789fe3b53afc278db5a71c43bdd"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "c9803e75b4a9871a75899ec7c185c12e"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "cd6bc79c1f067c12ab0b32b85236e578"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "ae73fb6f66c9b5e75cee299357a998a1"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "1fb58bc8288d8c687f8aa1fd999b15e4"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "fe14e31ec0285de2ff47af3a52e34141"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "a9b5f8a91f7f5e82243f55c82fe73158"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "4777d5fa0cc77a63686c86a92443d3bf"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "1f53f9126e13de9260a9a000d98925cb"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "f3a130048b0813e5dc5c66135ad2943a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "202730706d655d794f0a1fde10dde517"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "3d055854eef7e613c93819ad9ccfbbb3"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "d0f33ebbac42bbceb70c71f4a8c4fcd0"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "6e4ea742589387798737690d37f0efbd"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "15d2b3d6f585263c439dbf987864194d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "8be8b44d40e3041271c5bec8c2894542"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "0fd52091ffebe133d410eb03ad1642b0"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "ea0b2636dd67afa2efbeb6f2e074b0fb"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "2e3e11a3975819f20c78ac751a4ad665"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "00384fac84236cfe8dec100625128596"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "8dc1fbc8cf3877d53d0e1135c3aa6d99"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "26f6860654c3124f02035c7d622a05e7"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "e44e476fb1beef3819ff944ef0e6bd49"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "d95f30578c7fe3e77a96aed41c672c01"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "2453018166076971238bb39e9d74fa94"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "38261c4e153389b66e2a954e3b4f72bb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "332fdda7f15f9a8fb0623b936fca14cb"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "1d9b077386f3b68f6b79c193237444e4"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "c2ebf781bec27619b3bfda9808e1fa91"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "be7e24efb225a6e4ce46c8bedd6d0007"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "07f2ce7b3a0e577f91f907be40fac23c"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "c94ffe9ec97c99ed588cf8be7d906f07"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "e9309928094bbe29950ce0cf3fe9f2be"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "786cc590456ec1f5638faf033a082194"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "aac016e48e9f205057d42bd3ab1450f1"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "77ceef834f1a9c71611adf8f01f81331"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "33d0a4f8c2c2b44eaabf800189463976"
  },
  {
    "url": "categories/java/index.html",
    "revision": "3c94c852d1d2d75c4b9d2f222d4f4ecf"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "6a079d5b871a4484b5fb154f93c1755f"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "6fd98a6a263803c3babc229144175adf"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "6ce910644f1a38f18064d2de77211517"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "819bb63de51c30643bb93e6217cdc0ae"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "6b8702442385e3fdfd4ebe18db967928"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "11b8b2a876c67ea18ae272f5a343238a"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "caf8782c767775e154bfce6f504002a4"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "065a0d33679ef0a3e56cc385dd179222"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "029b05fadc8ac61bcff0f87b57cbd7fe"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "8636ebe1637564c34efab780e5159406"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "35ceb19be10be019acd3a457739a846e"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "27d851a57521792a91ef60c4367507ed"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "6dbb62045b2a375da16e0cf5ecf79e81"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "5d5b2f6545ee268a485367f359f0e6c6"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "e871d86e7c467f5f03a55ff8b73e8536"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "37a7993b491ec334a368d44143f5f828"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "b70fe9b410f9f5b5a4b352c5131aa5fb"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "723c62490a279c8579045fd7bd2bafd8"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "1675274b87b2a4f6d42e8ca3d144d5fa"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "cb9923fc1e3ec8cfc7659d1290b03fc8"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "11e016690209bc54ce6c99c53fb9b605"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "bba83e87be74bcfa2d6dae449046ae1b"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "c7bde3e2f92864bbebb12c1cab2137b6"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "3046a7242972af7261f50a0b5c9fe5d3"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "378995bcfde547f2ea1e5982d0fa5703"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "20cc9b9d0af4a9fb427047bbbf0e0ec9"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "dae0f39961f05aca3e87ea3a822aa503"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "ef627c46ec5561fdec1b759a4c736749"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "96eef6d5e90994631eb450e363f2449e"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "29e10d43f3365c5b49d5fd93912d3039"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "230681d64fa0ddc0f5d81c31cb90ef5d"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "3f459a31828e46f01ea8e4e14fbfeb58"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "2f39844ef86aa41184878d1911574af7"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "4481432a69b0ed7cf1ddfb8bc3f73e4c"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "38255c48cd28d609857d06c721f46856"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "e9c1c3ee73b275467f935c322a7c91a2"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "f96f5b39ac9feb96683afc36d456fbd8"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "e03161ab33272eadf535c5e01ab64858"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "3aab98b344ebc0f19f7b375876e7d8b0"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "e9679b5cd930e4ceec3c68e2d470fdb2"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "424f18ebc65edd63540094b5d0d09123"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "e42751378177ee30be56e1972dee18b8"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "4dd354f46972fc2bccfb57c774e12c54"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "5cef4f8bc7ffa10e3cda3ec2a676b728"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "6de94bb58db40d01218709a5dcf35164"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "05c3ec5eabb27443bbde4b377eb3b4a4"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "a09f8c9a3e9668d5c9e49452f58a1b35"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "a4aecf445698ba1bf7d8f8b839b40ffe"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "bf4ba077318bce1210d1f0d66b5e1968"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "13e2acb4adbab6c15e01a7eea5f4be62"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "4f09aec29e34c7c0128c9ece1938b469"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "09949b331671d7403ec07741cd4ef2e4"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "b4a9d8faecbd4d87dff711b0066607c8"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "8d6575c9b839bd38742aecd83ee1a197"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "d384892d4d8272c1e8af41c8c7a854d4"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "5ac0444804232ebf5c6807d15f05573f"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "d58950589ea67d4dbcafb770fce8c107"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "b0c8edfec1ffb8196b8ed76d6ba17794"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "0e33358f73c21fa9a0be19d3bc3e8cca"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "65d7b8d396cf860e5b7986b1c0f82742"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "55ea6a7e56c323b1ba8529ccfc2b8eb4"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "0cdf5a01a1cc040d860347dff77b783b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "262b8b7fde383b96ff9906712967665e"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "57bf5199dc511fa76d3f41130e4b6b14"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "ad8770eafaa92ffddeb7c80e35f3d8d8"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "cdcbe266c53c8ea162411ff73e9629d4"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "462192c34e0c31e24d9a8e7fdf703043"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "87eb4f7bd4f4024bf7b5cb410cd17c22"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "ec0bf852bb7f4218a06b9d7cc64b0153"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "52f343c52cd7604cee06b967655bf317"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "571fe368e5aedc07e7a0f6e1463327d2"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "693f5be3b24265aefec014a57c8cdd68"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "fd17428bc302ef11f074f1ca7db43fc9"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "abd5a18b66714da9601ae42c6c5bbb90"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "eb105856cd39d58391540b4e97c346fb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "095dbf3c6d147c04fbf46e197688c5b1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "2e778f96807c4f3919822df46448db27"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "9d9abe5b686e1fd4c6fa15053931040b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "e0c170181f0a3495f6c08fa0540b215e"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "d663b219ff8245151185978049b0a47a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "fadfb1d10834f15cc3e459b02276b4ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "a5d93886655a5e3d4a023609cfffd396"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "fd65c11ed05449ee4a12a6b8ffe9d198"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "5922403487d787df4c7506caf2d3b427"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "a68d1b133b43e77f17557bb7f00d547f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "6b3f9dc94b598326b1b5528b21d8a63f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "39732515979c825ce3bca265054b5855"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "3313da9082020876a482704f6ab52cd9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "aa08cb1c96db7f4b1067d3873ec06430"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "7b4177a6306fe684baece4a5b0659570"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "673dab32bb497a797ee248f0b4f8ccdc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "f83a9d42e916b43b75a0a26463a1b481"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "0c7befac461ee6c8f76392cc99e4abe2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "f052a48c82ff25af76ae56c15dc7ed54"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "7bccc8c407f54600a27893a0291aeef5"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "c2ac9d02d7d9f138397f4e244cb5094b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "e9d21635e84de88d1b441eb3c1834f0c"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "55c10549aebe471cb843ed625547c891"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "d1e6b5f1b177427bc8a8213634bc2982"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "93d31e6c38c265446ffb32bc9c270709"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "7252de83a7cd9e7644f7ac3d0922a830"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "1375e7b313e9e7bc006aac70e6ecf367"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "2151a2a92d0877049546d6d6b9a78810"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "a8b298bd4e76db24c44a84ecfecc27e3"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "2cfa1da99cb014f72daaa7828d6a1e0f"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "c8c4421fb7beec298141b987f96f7f96"
  },
  {
    "url": "categories/os/index.html",
    "revision": "118f93ac9ed22a7cba545710a1fc84d6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "af83c49e584d26dc8fa4953a29864532"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "0508cadc247980fd1a3646e6f0686261"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "e35b7888c3dd83207f310d1997aac593"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "3236a73a6ee9c4b91bd77e9186a18f3c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "7f4d9bf1409d270839211e0c46b9ad00"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "e99269933fc4ef752fb8be565f463d8d"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "447b1388d161f967faabc295874992ff"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "111f8ae3eca5193860bda9e6bbca9440"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "74ec440c65465cb62868492159c339d7"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "9d01ce4eb80bd9990356a048ebf8a8e2"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "92a366933df29d7d2e8239bff6f612f4"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "ecdbee6e9e35a6a7f30a6784935a6b38"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "c2b8d83227f7e488372e9f0efb212075"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "29835e184cf2a7f0efabbb7df728cfb6"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "4c4805278cdf9aa562f33eab20eb7934"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "58e2210c23a520752eb70b0a045159a3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "7dea6bd7c985abeab965149495a33a28"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "81da4b7e6165c8c42f57aabb3416dff1"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "2ab1afb5fb24875922a693ebb26df31f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "850ab5bb9b79482cca5c1a10aaabef40"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "4690c8fcfecdca531d09e475e8bf373f"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "53accd80be75c4c46b6d5232e19b5c04"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "d6617dabf6372efa82266667a27159a5"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "a1e3689ee7b58f1f6c9d969b728a7575"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "fde215ae585d8e061ffad6fa976ccd2b"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "6f32e23855b40f24580beac7d3ac2afb"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "5f0d4ca980e9bd86fcf41150178127e9"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "4a417d5cef6dd9ed9eb2a70c8f0e733a"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "04485772932bdb1deedcdf82df136c02"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "c26da7d49826de35f9140b9d29763c20"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "7ed7acaa1dd3ad4b8bb02e964ced6d0f"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "a77e724a51d1d2de45b5daa15e1ab0a9"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "1e57be08e11d39ae12416db571b5147f"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "0753dd8e4b3e6124f41f877f7bc7cfc9"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "ed996194ad3b23c239dad81758616b49"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "9860fbd4def78a919e5a462a71755e47"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "d136d52325e03e119e78c3f474116bb1"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "c397d3938f8186d2d551fc3f1c411a24"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "5ef3f696d3bf8ab08f7219f35e0650b3"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "df6e5178ff5b5f88e157fe3073e77673"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "46c8a77e7d2775d05bc5d20c612512a5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "1596fe549ef00a50853986874e0d2524"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "6711e131647881907dc42d53e74cb0e4"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "11669d1b232e9a98020a76e609444c5b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "5ba0f19405a8c606f904d9e64af6849e"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "1f28b0c55c57e1fbebebc80e1cc07c37"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "43e5397668da16ba1d0a77b9498bdbd8"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "c151c3c002c90fd543aaddc573002796"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "d52191a6d0b702211471d77f58f9c096"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "bf5f2ce417ce28f6d2a454771c007603"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "9e21a65a8968e8628b9608995110057d"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "27f5b504dec95f8b9ef59dfc299fb2b3"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "ed9d2e7e069dcafbe7b82d26e6f71d54"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "d78cd0bf830c24685eb387f359d0757f"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "79f214b2f5638fbdbd236dee79bed750"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "c9bdad5b573f8b06ba425f6279e025b4"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "5535cfb5c6c55ca963c6931b4bacac4d"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "c800960308004a4df4d86139b4bbb8ef"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "461ed06f67a56f7bb9bb194a93c70905"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "97fbe5a2591e9d5b78943961d3cd33dc"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "696c996dd6f53c8e15f5202ba95bf261"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "5d9ce5196d7dda8ca0b5e3606e3ff063"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "1c5c5d13371d8472d83ae5c599e846a5"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "913f2cbd29ea4addec9565ff03b619f3"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "53e273a0b4c5e2210d1d7e42de24549e"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "34f31791ff350d9910d25772d56a9dc3"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "4528e707f86e45451dfe740f0017e6b0"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "902776b38a40771128cce7b26ee89039"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "2db20e0a7233d1151a0d90c8773a6b29"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "50b31cf2b29a8ee492de386c9695e6aa"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "6b148f804d2a0747195bbd314bfbb76a"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "0399163a4ca39c3ce2b7e64419097c57"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "a70750f7b8c7a0e12cc396e362a86685"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "9ffd81eca8a5de0e60db6f2b650f85be"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "e503ea70c4f387ace815a6f6185848e0"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "8ff80bb733c68817643119378d606c05"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "c7195f68994c146a3f200b708de72b2f"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "b58a15cdf1823bc14175ecf670f2e7ad"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "791218d250fcfd923d20e7081531a1e8"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "a7dfe03a46df98073eaf00e387f77903"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "871fe7d76777987ffca505a40f9a3976"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "30514810b4c2e71037a64e26ec4cd162"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "1c4e8d945c2bc1471ee9dd64ea5a901a"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "a33fdb8ca76b7172ded74cb918e7d803"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "64b157e99607d70c8a469054bd1b0c41"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "b0f43f9900bdb78df7a082200d34498b"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "dfd874ffd365bd441c5357e7efe30c2d"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "b2a58f013fd178ea7c6ecb1a7b688e6a"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "75692eca3bce479243d0a87852f95767"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "33fa2579fcffdb066a9b63c85df55c14"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "a8baae56d6609aca98ab771f9b43bb08"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "9f0acbc68fd748e12d9c022a927d387f"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "b859b7bdb838b1a4189cf94887e96597"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "da3357146d0ffc7ed34b5cb8d89fa450"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "6af090fd839a29d6936f95ed58c8bf91"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "67e5aacea3b34c84889a181118ed86ec"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "4f8c437bd90ef021405fa1da39dece1b"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "60b89dc4b2b245d19f429a7522f4571d"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "b0dec9f9ed88784d77beeaf1597e35c0"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "1cc2016b90f91b0d25037cc9adf108d8"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "a527c958f74bbd83be1d613170e77187"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "71c6c2a0462b73a6199358f9f25478ee"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "beecd143a0d88d61a456840196f31c5a"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "4b3e2d5f6c98970be511975d13568902"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "b696a2e37e2fbc6a17c20b25f62cce53"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "8a0e97b53f045aaeedf1db4fb413b4e7"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "e10ab696f810f7b4b4e8a3c61b3b5c32"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "3a0806c33ca132d8f82a15883d93c73c"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "fc4ac01b8746237cd5501c14e95a6c28"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "0d59b355cb9e1064948dfd1cdbd8c0fd"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "ee60e62ff3eccecd992ee540fcd758ed"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "ed4aa7e5c0ac08103651dca9b044544c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "046ec44568099045f011d6aeb4b9b47c"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "d7e56ce56d162f4866bce716e6196613"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "f5fd10a2a4c4b7727c08e5a5757bd243"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "b84d795b86acaeb92087bfc3e51b7776"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "a97e1fb248b579f8fbc1e7ceb89748f1"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "2de671a3f264a9fb11238a8ac8a398dc"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "2100fc31d38f0945f1187da4af066938"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "6f5f3877969f505aa9c5691f25b6f12f"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "24a20fbd9d8476269f94a3ecc6e9fdf5"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "ddb80eeb7bff44caaa6a8117ad57dbb0"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "0f0e6a7ffed4ffbf69a144795215130f"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "1ca130d72b9db15aa709241a0f230e8b"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "6e80b1d1c02ef9295879a33037d69512"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "0a5dc185621facabc440f4fc27a75d7e"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "fbd00afca7358dbd9967a2b7e18c636b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "fd2d736c1ad1539a91e90c541bdf1433"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "7fe7f1f61bcb8956fa2966dfef95caad"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "6bab9b3071795f9f78c8e53ea55466cf"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "4f6e5297e0b229d4915299b65da1386a"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "b54a0f7a84412ab60192018202f27ac7"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "286a3bfa10e23d2098ee22779b48cf2a"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "db420575a3b9b989f90712cda609017d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "86d45f35e6ce2a80ec34cc33b8f5fa8e"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "8ec56ab865d24aaf08b6b75697ccf172"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "8fe14aa30941c1f60177ffd4f1341ee8"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "6dd0cafdc04c391933e4e267fa4ccdd5"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "0fb0b2c1cc3ef50e27f12b21b20753e7"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "bbe92e0b2e2e74eac1f2ed33added618"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "8fd051f50ba1fdaef1628285a1309a72"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "b0af7b595e0bf651a475228f1a2ce205"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "cdb115a5c64bf40f1429f4c42b556677"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "f1c02019b0b2663d1293414b0bd7718c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "5935625851534384aa8fd68370486b6f"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "47903cad00c48cff1e2251b0d2a11e0d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "1cb09aab795fc64a07432474f8c9b584"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "9f6e341516e2a1c3c6ea7521d79c9125"
  },
  {
    "url": "categories/php/index.html",
    "revision": "e7037e5695692911127cb9581cc1418d"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "8098a8b969b6ea65b12c862425367e8d"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "acff87fbc7a45444fafb3c1df756ebca"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "926738c62cb197ecfc9cf01d9c1a24fe"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "d67a6a49062bd4eaf676ed5ca2365908"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "e97fd54c62cbe07af8519802acdab6e1"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "15ebb0782e0d23270d3f42a6f98ef145"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "686ae7e6eb82a4218fbdd36447f7c5d9"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "64cc5ac049840543f6c756da2bb1acfb"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "46fe82dff76f9ef980ece8e5b04cc7a2"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "6a9823e8f9909d57c54eb3d589f616c0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "bdf1a3f0550cd595a6820b50600309f9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "c38d9a9ac2c30655edb1257c2085f86d"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "5d4847b0292da6bad5c18379c1c3ac51"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "766662258d31d292c243b91d188479fc"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "8b4aa3c45896781d201f6f0e5822c0a1"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "677c1e6ead61c660f16f4f68169e3399"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "d8715b029a09c7917b0c392d80098193"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "c6160dae45a8a819c4577a011e04b1bc"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "8fdc1f5da3c4a1adf5e3a6071acc7e0d"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "3eb410618cd1cb793c366a5f3b8b8a73"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "d84e092ca9aa175f368eb1499f8cf5c2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "1745f72a8b904bb3805c7e529d5aaca5"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "5962108db2922e95dba22e70054f8a0a"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "2b21351693778909792d88dee6097c79"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "ac74df831797e652406dc2f31e492444"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "0c415936d532923bde0c059c441fde1d"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "f7777dc0c455b55c4615f4b7ef57f127"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "076aea8bdc80d2a03e8535540f1ef996"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "fd97539dfe4878a7d572f59fc83a9918"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "552619763c362a2f2bc57533a72e8945"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "adb446e71e892072f1d47cac91d96442"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "1fee822492a4cf35b7a6d03f7ffe96fe"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "c7de4e2b84c24394d8594600e1ae6a04"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "75b666f6dbaf290f4058b3d61c6e91cd"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "9771fb9e06eefc18102e9fe9f1717391"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "7f2babbd09b645550be7d54faf7a6c93"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "7ef3ed85fb54cdb3da0fe82cccbcee87"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "73f14487d5b96dcf7a9b9090ec895c96"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "710a0ec99c1f027301429ceb36a8c4a1"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "d46b24e3e755f2b71278f5ff403adab3"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "ca83691cdf514837d8d271e87aaccec0"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "782d3661369fdaad95f4163173e0af4d"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "52686ffe51f7aab61936949fa6840b88"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "b0d754dbb56458828b68e40928f7bcaf"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "08f82061cae7afb8f38ffc51ceb064cc"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "d5e4ec014b90c21cda78fa0fe365c157"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "ce741197b9afcc99370842f78c6f6d88"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "10731279c18cfd4e04b4ec1729fa7af9"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "fe41dabb566eea159a004113b52fce4f"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "7da2906eca268b27bc997e7e98dfae5b"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "d3359dd01608973921e011f36caaae05"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "51dbdd082670e37645b185c927466ca0"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "b6a417312315d23ca65bed158bbf2da3"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "f9a15d3b6d7b6575be7937f350456fca"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "2bc85935db1df26c6345106749ff1afe"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "f9365f131f2a0a5f4ddf3e63a005765c"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "51adbfad0b3d66f1468b03ea86e65aa2"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "625169e8d20a1514fba417f0fdbdf754"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "270b44d0508e72551a0f07e9c317f134"
  },
  {
    "url": "categories/python/index.html",
    "revision": "8043dc988ab39fe1032602b3cb844b61"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "ea714008ebe11ae1e78c868af049f447"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "c6361e8ce4208214febb99805ed4c3b0"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "1ad02b7417697fc51b27fca742c637bf"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "717426275d7a5e6c7575480bc5ee4cde"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "a0328a3cdebb6e1f0fc6b905efd9f730"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "5a1fa55135bef8cd84aecc4bcc9a9547"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "1bb5d917f3300d54be7338e76149ee95"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "fe2ee4adce3b8be8df990bb37d8ababc"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "7e6908240e2bc1e151d723e853e862cc"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "d37abbae71cf5b6b6616f2a38c4d5556"
  },
  {
    "url": "categories/system/index.html",
    "revision": "2efa69aa9fd979c305669cfd11a52b38"
  },
  {
    "url": "categories/technology/_books/git/Add_and_Commit.html",
    "revision": "b40bb203ac9af98c890bc900c5564e24"
  },
  {
    "url": "categories/technology/_books/git/Basis.html",
    "revision": "1fd5062802a5f4110e411a8e5975215a"
  },
  {
    "url": "categories/technology/_books/git/Branch_and_Tag.html",
    "revision": "360f83648e776898d32ab541ca2f4147"
  },
  {
    "url": "categories/technology/_books/git/Checkout.html",
    "revision": "2c04f81b5a845cdf128206f9eb86dbb1"
  },
  {
    "url": "categories/technology/_books/git/Config.html",
    "revision": "fbd00dcd9a308bcec1a9a6829e005662"
  },
  {
    "url": "categories/technology/_books/git/Flow.html",
    "revision": "bd98ac42e9018bd55959d90fb46f3550"
  },
  {
    "url": "categories/technology/_books/git/Gitignore.html",
    "revision": "d885d746e596e5de2da24069797eef41"
  },
  {
    "url": "categories/technology/_books/git/index.html",
    "revision": "df717a8be0cd3ded49d6ef151a83c394"
  },
  {
    "url": "categories/technology/_books/git/Intro.html",
    "revision": "717be1ca45dd65a26b3c559b8fb32813"
  },
  {
    "url": "categories/technology/_books/git/Pull_and_Merge.html",
    "revision": "38f1399551412fe422d863263699e645"
  },
  {
    "url": "categories/technology/_books/git/Push.html",
    "revision": "4ec81acf6e1fb4c223639f05c9a2a615"
  },
  {
    "url": "categories/technology/_books/git/Reference.html",
    "revision": "542b372041113b4deaf89508a3d0ba8b"
  },
  {
    "url": "categories/technology/_books/git/Remote.html",
    "revision": "e08291bfd97f03f70991be8d9ab1876c"
  },
  {
    "url": "categories/technology/_books/git/Reset.html",
    "revision": "a742767fc08abb98c85b2cfca1edecd0"
  },
  {
    "url": "categories/technology/_books/git/Solution.html",
    "revision": "cee895f04e7611aa2594214ced96c5ec"
  },
  {
    "url": "categories/technology/_books/git/Stash.html",
    "revision": "150c62ebe9f391466895cb4254884a45"
  },
  {
    "url": "categories/technology/_books/git/Status.html",
    "revision": "3190f79d48ada8e629cad96ccc2bdda4"
  },
  {
    "url": "categories/technology/_books/nginx/Cache.html",
    "revision": "594fb972929aaadf2218d31bae5141e4"
  },
  {
    "url": "categories/technology/_books/nginx/Command.html",
    "revision": "1e911821a197a8e71d6b96fbe85ee5c2"
  },
  {
    "url": "categories/technology/_books/nginx/Config.html",
    "revision": "70ad620a9a128bf53262523cc6df2437"
  },
  {
    "url": "categories/technology/_books/nginx/Hosts.html",
    "revision": "6d69a7790e6990465def5fa9722b2e48"
  },
  {
    "url": "categories/technology/_books/nginx/index.html",
    "revision": "af45e0766c0058a53559190918d4dadf"
  },
  {
    "url": "categories/technology/_books/nginx/Install.html",
    "revision": "8d6b47430a5a1fddb93b2b5ec5df6d46"
  },
  {
    "url": "categories/technology/_books/nginx/Load_Balance.html",
    "revision": "151a7d2b56e1ef9961b671dc05f37ba1"
  },
  {
    "url": "categories/technology/_books/nginx/PHP.html",
    "revision": "2f4df400adc2924340531c3f4a1c51a7"
  },
  {
    "url": "categories/technology/_books/nginx/Proxy.html",
    "revision": "8f1f514024ca5d25584d00df90b59c9b"
  },
  {
    "url": "categories/technology/_books/nginx/Reference.html",
    "revision": "9d0f10bbc41a2bfca328416aeb3d5385"
  },
  {
    "url": "categories/technology/_books/nginx/Rewrite.html",
    "revision": "5a88404411148dcb91247806daa28dc0"
  },
  {
    "url": "categories/technology/_books/nginx/Solution.html",
    "revision": "b5afdd25f78901fb12152ba42a4c969b"
  },
  {
    "url": "categories/technology/_books/nginx/SSL.html",
    "revision": "15597571cd717abb4aa07facc313dbfb"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Basis.html",
    "revision": "f814a78a8a91bb3b90e645e295e3e2cc"
  },
  {
    "url": "categories/technology/_books/vsftpd/config/Detail.html",
    "revision": "bc8f0881b5be733193ce8c44f62e3cc5"
  },
  {
    "url": "categories/technology/_books/vsftpd/index.html",
    "revision": "ba378ccf98b2864c126c4504ba8cc85f"
  },
  {
    "url": "categories/technology/_books/vsftpd/Install.html",
    "revision": "575e013e9660772c41948c1367ec5a61"
  },
  {
    "url": "categories/technology/_books/vsftpd/Reference.html",
    "revision": "15d50fd3de4de7d456b4f4665c8a3c92"
  },
  {
    "url": "categories/technology/_books/vsftpd/User.html",
    "revision": "ce10bda488d57638d5315068289ac845"
  },
  {
    "url": "categories/technology/_books/vsftpd/Windows_Command.html",
    "revision": "0476905eef69c606092a9422fedefd1d"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "deea2103149dd0becf5ee220e5501247"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "969741556fa50c6b99f39afe5e47df9c"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "903212150ab2d955d246d58fa406d258"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "fcc26521799ad5c7237d6192eb44577f"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "e994e5785d215bbb7f88ea26add353bb"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "550070f9899872f4ed69800df3fa6b16"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "92eab0eb44605f88b5cb1f864a448ac9"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "3d1f4d890ef26539cdc311de49da3ed5"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "f72b09a10bcb70878c35d4b07728ba26"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "b1892dcead6eea2a4ce6b1ac76a5dfb2"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "a63ce5b8ad8be280c9d63e2941b17e92"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Config.html",
    "revision": "11cfe1e1ca02d025c89a23eff501d1f8"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Database.html",
    "revision": "a068424a764afd4f7f6d88d05e76dc93"
  },
  {
    "url": "categories/tips/_pages/jetbrains/index.html",
    "revision": "12859adcb52af928d6759ed1c177d81b"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Keymap.html",
    "revision": "e47ea96e93e69c6edd5c722b8a6211f0"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Solution.html",
    "revision": "91109e0ec022d2bbfe4661f20b7f6542"
  },
  {
    "url": "categories/tips/_pages/jetbrains/Usage.html",
    "revision": "a57c707243ededdae7336e128131e553"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "87b9e0bdb531a08428a4f95c337b7b44"
  },
  {
    "url": "categories/tips/_pages/vscode/Config.html",
    "revision": "0138786d2041fb2208d08fe482ac78df"
  },
  {
    "url": "categories/tips/_pages/vscode/ESLint.html",
    "revision": "8dc9e0ec806d3be3cab2e67ca58f6b0c"
  },
  {
    "url": "categories/tips/_pages/vscode/index.html",
    "revision": "0ef376df168bcc460cb33045dcb198a9"
  },
  {
    "url": "categories/tips/_pages/vscode/Plugins.html",
    "revision": "e95a0ad24a760e1ee22d7d461b10078f"
  },
  {
    "url": "categories/tips/_pages/vscode/React.html",
    "revision": "2d7be7690fc6daae8e556ff16cbfbf36"
  },
  {
    "url": "categories/tips/_pages/vscode/Reference.html",
    "revision": "ece6815c9a44f2088126aa545b30ee7a"
  },
  {
    "url": "categories/tips/_pages/vscode/Settings_Sync.html",
    "revision": "f60b6b95f54eb978107c596c9a92603f"
  },
  {
    "url": "categories/tips/_pages/vscode/Usage.html",
    "revision": "813b283e8dcda0cca983c59337ec6a3e"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "847e7628de4f419c5028adfe6d1efe77"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "d1dddaa606b024a6192cfdc2aad21a50"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "037b28a201cd968bf33949616a466eef"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "eee262a867bb18c304579c06151f269d"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "26aa5d84810398accc6a726c2fa4fb21"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "1e8f5a3a2efdd24ca8f979b87116ec94"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "890112ec84b9a54e6b4613ed3a892f3f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "cf8b566b69ef8619e7e38344b6dfc710"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "e14f2498dcfff0a6cf36357c379a681d"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "fd3cff40160aa9d8a44c82068a1adfa7"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "e1fcf2da2d987075ebabbb0db18661d8"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "00134a42f4891383e1ae4bc2fa7c41f1"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "2948243d640660642fff6364fbdb8374"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "d6aed8b95878b87841ca0e24f58d98d0"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "742428795f32010cd77edd0745a64cd8"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "f5c0dbd76d691da8394d8bf118266f10"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "3072ab12fa3527c67e9bb0a3c48dd65c"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "3adda3d8a2681934b6fa08f18598eb73"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "5719b027b2bfbb7c60c45204dd5115ac"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "132e81aa99261004b163bdb221728d8a"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "0b1507ad0fbb8b867cffe92a521bd82c"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "19ce615c55bad83dd05f0eb18d8eda82"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "df0d1039df4cf4d7f55cd15c0415fa6a"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "f467bf9105cc4e223aa12c3520b7957b"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "7bc177510a1eff7bedbaeef0dc9f25c1"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "0a5fbdc84be8f71b1bf5cb69df0853cc"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "b82d8d96fa010fd55242d2f7f216e31b"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "29a0a652b1304130f55d5febc7d7c68f"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "37e09626916f96e4d4944272359fcaa3"
  },
  {
    "url": "favorite/index.html",
    "revision": "9e435aad7290bcaad0456746ee4b21fd"
  },
  {
    "url": "index.html",
    "revision": "5c1b6115cc1b2efb6b4b6253cd379dce"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "747e3797f37cc14b5b74bd30e0c94003"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "2996f677bffbe29638f8addb95c02acd"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "b03764ff41e07eb3edaab30a6ad82c94"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "1057aa948621523c095046eb8c87fca4"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "c5048c650fbafe946e712574ae82e2a6"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "94d5705ac2c3c69a1c268b8c6a834a41"
  },
  {
    "url": "note/index.html",
    "revision": "9e2a1ea3072afad16e5b9c2b6c730b75"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "bd2175173744743b6e3eacb70e374cb7"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "c9e4eac64689d9a8c1bdbefaa2c4e9e3"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "7f16cb3f8d12ff489544bc3e038113b6"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "31accce552b26f071365cda9f229bb49"
  },
  {
    "url": "share/index.html",
    "revision": "db5329f7869f18cede1819433f934d4c"
  },
  {
    "url": "single/about_me.html",
    "revision": "7011a0f5e3dd66d3706e2de1ec1fe11a"
  },
  {
    "url": "single/all_article.html",
    "revision": "b75568e28601a80e597c3e1f3688b88c"
  },
  {
    "url": "single/welcome.html",
    "revision": "349a4be3a45a9cec2c482af8811abc58"
  },
  {
    "url": "test/index.html",
    "revision": "9b3aa1eb875fb17ac139b8f95be1db56"
  },
  {
    "url": "test/test.html",
    "revision": "43ca2b6489970cbddbe3517d5c99ddac"
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
