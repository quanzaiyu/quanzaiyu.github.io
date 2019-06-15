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
    "revision": "153a7ef634ad375f2ca3f0a950e5e2c8"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "5324b9ba6a563690a5f818d59d952b06"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "4c9f4d385a0857ae47880d0c28167994"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "1288aa4cb0101aedfbd181306940e97d"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "c3d646c076acc66021f88f520b80de7a"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "2be21057ae71b160dc0e19fce24df8f4"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "c769358672d2177e8473733a58adef55"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "47491db9f40ebf2b151c2dab1113e3ab"
  },
  {
    "url": "articles/index.html",
    "revision": "74ae6e7c055117b0bf40fcb426273224"
  },
  {
    "url": "assets/css/0.styles.b4f00dfd.css",
    "revision": "d5126b7ba157bcd8f4c4360edd240d21"
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
    "url": "assets/js/11.f7098bb5.js",
    "revision": "639df80cdfbfd0cf9847ccd5a6395d0f"
  },
  {
    "url": "assets/js/12.c76caa90.js",
    "revision": "ec342aaecb6985c680dfdfdab36be3c9"
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
    "revision": "2db2005b68ea8c2fa635e0743930883f"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "149fed8634c85058bdaae56c401c8ed3"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "d5e3c169cb154df22e498ef0adc21b03"
  },
  {
    "url": "books/index.html",
    "revision": "7b8f41eaef63a2cbb56627d16109b2ad"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "400006ccedd9e13557e384083a717537"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "2263bd7fcfd7506884f4201a85927de1"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "ff8c7e523e33fa711694262b21c7ade0"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "dcaa04c52889963a687c161ba990067e"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "bb35a0dd6f3a5614d7d12e16a60af6f6"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "70c57a8aad4e52a061d83bb65c5eb987"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "4c79b9229405ac58a94f6016e387c84e"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "c8afd65e8353436166f079dd2f950b2c"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "97b38db4eda97e52d6336022a14ca27b"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "4ec98b6ede6d159b546cef116286aedf"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "be30762de1a70a6cb665b0b020a1baf7"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "a72f323a47e6593216b4eca82328c300"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "8d69608b8d51d37d8cad311b2af88e63"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "d540c690959d4aa5f44a83362fbcfc48"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "c0272fd067ae277ca1025a880db2723f"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "0458bee4c2c96ab393e8d07266bd5a34"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "bd6f0c73bd778c4a6a923b33ecf4b685"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "8e23ec7e40dbe721c9b6dd8bd898daee"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "0eb9494297eafa78d8495c3ad0504bf1"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "59f056b1bd425ebc8e7764c9d1cc3480"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "8c963bf8237b68f8531b5a0c66a13de3"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "90c8a1b4da109c32af275d82082e9388"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "23f1624005bf27c1ea3d790ea97dc8ac"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "a08dcff217f0a165e2dbf9204fbcf46c"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "876dfecfc195481cfcf03226ce59cff7"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "52c7c0874677c53bb4a70226a6db52ce"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "d1a6131e9d5ebd59bdcafe5a882dce59"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "ff4d48ff5cf66a775f3ea6ec25542833"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "5d2847ba7a2cc5c0b70028965a3ec9ef"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "91cec7256acd83ff746aa9fb2910a111"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "121d42425fd0d14b53ada5f99d31cdfc"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "dfa06845306678619d52c98d1a7992e8"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "3442c511b1768845d74f1636adab8b70"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "53cca73822938c3a084c585bd88f3a0f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "0ea2341b1cf944ff8446f0249e413c23"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "f56dcef44abc952bad0966d3c5200b2a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "c645c308a6d334f437bf2425d7a90430"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "5f61313c9907ca6ce840583449c850d1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "9e9e48b2f5d04aa1fa8ca715efb01710"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "9d6d9da5ecedd4a929d349abdc666c69"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "5dc3dfeb8c9d65b3315a94ad2327c39d"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "3b10c3fec6f449bad71aed33dce59b45"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "2053b5c07fe5f67cff98a2a18985a467"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "e5b53fba4f538ace95c48884df3fe96c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "c5090663160603f41936a639ac548b0f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "4fd7c7633ba213c90259542ed5fe48a1"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "c625fe883b75f505a5e8dcead725652f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "72e8270f3a0c9e2f53c91b5488af7e1f"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "f59d3a7ed7d0acac66f476c6e843f4bf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "a8fa95909752bd77a05b4a1dbcd36429"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "44041261fc90ead96f109f171fdd759c"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "486c2f51ea29b05f06cbad5948e3c1a3"
  },
  {
    "url": "categories/database/_books/sql/Common_SQL.html",
    "revision": "b6c1165a01e3cd6de2f6b0f720884523"
  },
  {
    "url": "categories/database/_books/sql/Create_Table.html",
    "revision": "33c2ffa1a0a048efcc6e73617a24248e"
  },
  {
    "url": "categories/database/_books/sql/DataType.html",
    "revision": "b0f03f7e5abb81489530c30cfd41e40b"
  },
  {
    "url": "categories/database/_books/sql/Function.html",
    "revision": "11403ff778c91b7cf87cd71e4e2102e2"
  },
  {
    "url": "categories/database/_books/sql/index.html",
    "revision": "7fe06ba1f044489def9ee1783a03ccad"
  },
  {
    "url": "categories/database/_books/sql/Join.html",
    "revision": "8f625ade28a8d2ff845937c17c2014af"
  },
  {
    "url": "categories/database/_books/sql/Limit.html",
    "revision": "9a7feaf5e82e2a75ae1263ce378b3e22"
  },
  {
    "url": "categories/database/_books/sql/Procedure.html",
    "revision": "e393ea73dd5b1f6e07a0ce433de74abe"
  },
  {
    "url": "categories/database/_books/sql/Transaction.html",
    "revision": "f2d221ce6ee458bc60e1d531eb716d38"
  },
  {
    "url": "categories/database/_books/sql/Union.html",
    "revision": "75bf15e3939888f957cc29a389021b65"
  },
  {
    "url": "categories/database/_books/sql/View.html",
    "revision": "73be6f84465c8f2a17abfe45b67dfa97"
  },
  {
    "url": "categories/database/_pages/Charset.html",
    "revision": "df7ae013907489bca955451b4db75ddd"
  },
  {
    "url": "categories/database/_pages/Command_Line.html",
    "revision": "92dba6a2a1db8d15e94c09dca3b44ce0"
  },
  {
    "url": "categories/database/_pages/Delete_Drop_Truncate.html",
    "revision": "1762cdfb7ded3c48c4c232d08977a3d2"
  },
  {
    "url": "categories/database/_pages/Model.html",
    "revision": "4d32e8137efbc3cc00c917eb7d321cd5"
  },
  {
    "url": "categories/database/_pages/Tip.html",
    "revision": "c83f4731ca5212edc7d3ba35b3886739"
  },
  {
    "url": "categories/database/index.html",
    "revision": "b8bf2d0a29f87d4ae4bc47a7f10592b3"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "8f072e734982a9730f77b3660a2dde4c"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "db2b4aa1062e47f6075eb55b176287b4"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "0d7e4d634df7783f65be98725ae774bb"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "3b5905b03e8fb3d8bd135e9289ec275f"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "3617e59323b29a6f61a41509f83d3606"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "996ed0978cd691d66b2a7dcf501785a4"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "f1963dc1d5e35ad6569731586cf193a0"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "394d45dc30f933f0e5b2458046763fe3"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "6c756f7ecbbac81431b060c52c67b761"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "b552d15b2efbfdaaab8db6ca902ea947"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "268f2ab8a8c2d6cf5d5056ec96a5e587"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "d9bef2bcc6862602c2fe816ffe3f40bf"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "219316e7874a8568a74c760433d04088"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "87deebaad4921d0181d75fe741fd1ba9"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "9167e6fd7b5141fa2e4046015c3c31f4"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "4d7e5591e99b09c715ba3b2a50dfaa4e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "dd3ca97b64fe4544f01ba95ee12f6029"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "03f910660b201e798087362b52ccc69c"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "f37ca384ee7c801c028fa0372802fecc"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "b47708af07d124c5fb05bd8947f40628"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "850fd3d1a06061fcf41720929b93200e"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "66cb5a0647e114f105572dfc2bbee85b"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "6e8f343fc7798c012dd32d727743367d"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "0a0c733a6a5b38a8f1d44b46666eda47"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "0f451de021daa411f17f2a69dfbcd07a"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "7690d24733864197de4c4641fbf79dca"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "b45ac1e4d12474657c5548a9c48a9fd1"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "a0dae25f99f6b7f2dd7cd9e130414a88"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "6d9a058bcaa4b42e10f93d40be801e5b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "b0a8fcc2335345de22b7435669bb9d83"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "add77c66a09c01f72ff979e5f71406b6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "f478af82e00ba98551f94bcb07abda78"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "701e93f5636c225fd554467d87935843"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "d45ced17da2867a05945a5b2490bc8fe"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "1dc8ee1b7de1a75bc290cca188d7ebff"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "6497efe0aacc5e1a6347e811656a0e12"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "c8581ea2d34ced23c5341644348cd4b0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "ab0c99285d7e06b8dc7595b62a036f5e"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "2d3f689220a32007e51abe36fe185451"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "eb2428bb64c2d05083bc24565397315c"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "fa2b5c7f05c5bf65a68db45744f4b8bb"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "3f6248f36d6a16d2e1f4eb464eb1906b"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "e83b81d1074257cdd55c34f6d3dc09b6"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "be87355bf08e58644bb37d6f23d7d1c9"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "0a5b1248da1c9a1186682d9c1cd729ea"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "ab1d03310363fc5b37d196af7e62e3db"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "404b0680740b0299d00e5be768a018e1"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "913ef34d600140feb9c5db8c87d7122b"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "a21e28029a1b73a4e1ac08e128e236d2"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "9dcea94e6c2d3f37d769df1f7145becf"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "c0323da5912d4b6981314eb340e81b6b"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "318327a36b2f6e863b197207fad8fa79"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "643deebbc4acab459eca0c653e09bdda"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "579ce82c6df4365544b90693f826487c"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "7af84a15c0ff639a4259e07590dd20b5"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "857c86ba2073b2c679cfd914998a6ac4"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "71a1c0bf118cff6fc426c7922530c9dc"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "ccd2fc63c6f153b8325af58ddbaa86bd"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "26fc2b71d15e81ece58d927d96ee59d8"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "1dde25605b8b46f6692d3f8f8c57dd3a"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "aba61568be86e0786243df3ad497f9a4"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "39858956725659a8a7e000a410508e21"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "311af28b8f07dda06a40dc17db69ec0b"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "53fdb1e51c9d6335a2000bf0d60d5699"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "7f9c26a78764a501db70c82100c38493"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "77a317e488af7ff60184e70c7dc12a27"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "bdfb145db467ea1bda68e4f6e5d78b58"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "17586ab82ed076fd8a4a5e6678a1c9f1"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "2250e96048c2b2753a71a57fd547f0b9"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "fb56095ccff3b9fda757e866693a1e47"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "7e151f3d9af32895be85a345adb0e6e6"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "ea5c9a31be82b04b02218d073c3df2c2"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "8ee086c6ddc353f2296549480a02124f"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "636798bb26c3a4ecbac77567570bd45a"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "1fc5e8846158b8a84af8fb9d826abb81"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "1a1226f525c9e68caf3e1a56fbcc4a3b"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "fcb1c7dbbf2f567033fae2d94b4dfb88"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "7a354daa4f23b0dde8a815ccac673cd8"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "42e14a9b336f7b38e29396c04cbde199"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "f250c77730eb7118090a01a8f845089e"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "b1f8bedc0fd5723c6e6d6e37ea5613d7"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "99d03772fd633d8e41104a211169c058"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "9aeb15a3ed533ce04b974be8bbca1305"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "b84b038b05f229cb74412eda517474c0"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "6e662eff1634f70ab83ad8dec5bd72b6"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "86d1129e5dc27c4daa42445d82dc947e"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "30800b6415e522b36eca96fbe0ac2eec"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "af02c9cb9777c243e3cc8022ce107236"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "dc0974e488466ad09f1ac68ee4de0e9e"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "796bad259bf2d438b23110634ab18d31"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "dfc63e367dab83aab789caf653d4686d"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "9c16dd14892244e8fe84286afd0882ea"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "390496bd78581f68636d45ffdca54dbf"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "39126cb7704af2f23b9c1205e751de78"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "4db955a991ed1f85dda021fa52daf242"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "c7fdc20979563e53d5ffa5265cb4e471"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "01ef94ed579751d291fb1794ae2c8d35"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "e6639f3cef6b325a2427c798fd52edfd"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "bcaea6ee2287bee48ac920dec76cfd00"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "f2b8c0e9ca66277765daaddbd3159551"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "46215901e7513af78ab9555ecc5a9af3"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "afcb9da4dcc70eb63d84fcd2ae97ef80"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "e2e45de2b16f9963360df1ac6871ac97"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "0fc3a781ad036b822107294c200c666f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "83275ec7894b49cd39f5cc2920d70125"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "64cb0935e0fd4b656197d6efd616219c"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "11045b03d65234eed33da05eee399d36"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "210b7aed1f42f677016b12da4765d546"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "3bc02549286c583dbe317770c8a0c5d4"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "fd65085abe89f8b3ec99c95d21e5a6ee"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "36f08d9f7d15913c3b3797126514c4f6"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "07f7e1691028f30aa26e5567451196ee"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "0ec61d98a0b32dd9d4ad3ae59459f6ed"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "9f16a755d88069a47fc8824429ab11e2"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "ebdd0e22ac1b8b3ca584263588aac252"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "b0c1cdccb1b199832b2207a40c9ee8cc"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "80c0172be9145e223a0daa82ef2e8f4d"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "44a80b9d17845f17228b3c8e128b2c90"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "163852f40a7ae6b07d3d094b29a7020b"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "ad816a50a32adea7ff5ee0408b2355dd"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "b66dc9ebf12e67913b72a49f5a7ca58f"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "11bb5ca4d3860dea31cd9513a57c6a07"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "c52f95079b64ede412b8b9089bfc9d1d"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "9068293ea88ea3f2e932371ba052005e"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "5cb49aa54a9b1497e7c556a2ffbc3304"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "6014626b2ad119f8576ebf47fd0998e0"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "1dfe8b1fe8703ce0cee550aa208c14b2"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "499aa8a0fea58b618b755ebf344a29b2"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "105f030288058232dc3e8ce731812273"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "cb00a307666353ec352eb578f9be69cb"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "e667fe7d460956d9f55b27c441ae08e7"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "6a93a1a28bfcdedef798a761416f42bf"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "070900f866920659bb67af202641092a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "5b22198fc9f060ad7aef138f1d0f95d8"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "313e8a624328299c9d3756f89f507601"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "69784e3cb737a677e4038be8e8b4e3d4"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "da62b19a9f0dc8293a63daf0409364e9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "c883ef08317e8f369773f05da12248df"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "21c577151885be608d1c52271cd0efe3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "2b1ddb4d746d9a0aa74f32ad500c567e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "40b2fb208f950193015893698aab45b0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "5357a3c6f83dc03ae1f95b1d9acf9b4e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "ed16f642caffa330a5b461854c7a7132"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "54f9884208e1ad4f4e9acbef3397509b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "3b821e3919e56443de7721245df51856"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "c527e5fea5ed6cdfc06f3fdf5daa1d12"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "aa22718072f8b90d877ad986427d6aa1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "a5b62a0a0db9c4795b80d66ca4b1c422"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "d9fb0b5bdfb7d6f23ec5b549d12bb7fd"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "0de1e0e05637f93d8c9153cb653ec236"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "197711aec02240b1af0796d8b8f32ec2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "0d971c1c4981d2c7fcff906209793556"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "e1a3edf0432a477f54d4cad1ff202921"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "999bd4b4f5b3c46c0fbb1d8b53407df8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "a47eafc455a0a6f4ad9fe8c8455876e5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "79dc369700af08ae4f37a369ecda7500"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "cd73a9e293ca45728cc121a205f94ad0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "56b1e2763cce3bdab65aa095f002e4c1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "2a2c61efffa92b06245bcc4d421d1665"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "c065db070af31248c16b6af5e17154e4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "f0728879a05a08e701fcee0f77543e47"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "434a927da94cbfc7d327b6d271bf2b32"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "3afef978870fb18c522c39f4bca0924a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "a880845202a82421dc78df7bf81ab9a9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "d768636e1ba771c49a44cc02f857f444"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "f2d4097e4b3287cc379ed31566e75c1e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "84baf758589ad139990875fa31eebf89"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "7b5bd2660a7024c7e2672c01cbe328d2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "efb9cd46ae72702ac163152575b86546"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "e80480f0d8195112df62a4ab1162591b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "0e095ff641c63fe594dba71ecae50e9d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "53dfbe10efdc239faf1c158b7bb34e73"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "689754846ab5012c3c3ad41ab7ad6d53"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "ec0de4c18ba444ecd478184d1ecd42d7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "30500633587bdf4cea1339d163ab87af"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "dd7d5ee92db2fa5c6f87521a0d5bae6d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "37ee9c260a7c2e5d68266a8431f0331b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "8c24eee7f157c1502ef9fab4285dc1ae"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "34f33cda7027fe1b95919c5bd6b9c0f5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "7f5de1013f4eee042d2b42c8243acff7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "aaf3b4ff105282896a4006748e27322b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "5c8e5cbcb4dd44abd2c042a53ae8a501"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "b63228a80ecc8814bd096b2ff8a07ab4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "0f9e95109724eaedd8cb428dd44b1b60"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "8b3ae7aafce3f522a4ae234125719a82"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "08d0bf6de1598c6e6129407d78169faf"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "cd2b1b1d25475ffd91fcfe50e07c594f"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "be8992b8ddea0d27be7e085710ff3314"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "292d7f800549281c91d3fd97eae351dd"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "c696d9d1dacd513de449534b373b267c"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "870265cb8004d3fba7992a200b1110b0"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "64a076530faf841c3e167b020630f20e"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "a7f786e388b0f352769810f4d704ab81"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "dd62e1e01d14b15cae51f99c018fb254"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "51e336d8e820164cddcc326c28e94682"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "a399be11278aa210e5067f3c33671ab7"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "5679b4aede5ec12b83924130a1b0715a"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "15f5b1e591d9c3c5c68946986d0b25c8"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "fc2cb434c553ff483b1e076dfe6d95f2"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "b86ef7c355307c61f9b5962e255a002f"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "322091908410c39fe12a6003797f1971"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "83ebe45a9794bb7c5cb32b0a0ed653ad"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "b7bc89ecf9bb1ce751d835025dd4feef"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "d86515b1b30a10cdaf03755294de17c8"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "c5537fe202a55a36a326596f43de6ea6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "5d254225d03885e4355ad17de9011d4b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "5d0b6e55f4153820aeb8c8de87d719ed"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "a98fe225f81adfd52ee5fd20901686c3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "48442f245fe8b56785fc7ae4c82c22ac"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "e84480ae2443b84bce2aae4080efb82f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "fbc90aa33ff34025d5c142f10dd41037"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "669ffbbab01f35f8fd957d3419dc806d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "a6e61e6945e95f08912aafce9d59069e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "add6eb6b8ba8fb21a12c59787b7255e1"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "e12bb5377f27af90f263f4e87cf783e3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "c36f9d27c0c390603cbf8bcec3d561fd"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "fc27b5ab0ee25b1eccd6a33d216267d9"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "a6e65b26efb11123af5b65459bc44c6d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "8b7944122bb9bbeb7b2308ff8668376f"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "23fc06154648099c039d5275b3233055"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "7ca17a94decb28dda6df5f2e271c6f15"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "476211e51b6bf750f344c2bca7e5e4c2"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "f46491fd69630bb4430fce9a0632260c"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "ace3fa63519d982bf618a2cf1925de3b"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "bf5b99211d5c4c20aec3858c35934a2e"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "4835538bfa966d836ba6c027d188a366"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "3dad30f427ba70947e25d6d776132acd"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "7e4087bf14d55676cf7e328dc1c508fb"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "ac562ed53fd67752dbef3f9836d8305b"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "f8645e2d7372092f00f15404205123ab"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "bf9bc572bbfd0bb09f336da13a67b254"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "d2457f5ea2cd64ee9cfee2e9dc3aa997"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "8330152c67281c1608b755f18d5b55aa"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "f5e171f086ac4dde9a82c5631da33627"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/advanced/Classes.html",
    "revision": "065cba7eb3eb4a554374a98c2771affb"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/advanced/Interfaces.html",
    "revision": "be275827ec7f940919369d84482c2861"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/advanced/Types.html",
    "revision": "11bb834f98a2a3aef68fb24482dc67e3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Functions.html",
    "revision": "98a3cb7eb80fb6386be627fe5ce6d4b0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/basis/Variable.html",
    "revision": "7e0485d4d8ff57d2e11a22bc9c523325"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Accessor.html",
    "revision": "9cd5df6a89bdd65e1d6779732359a858"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Attribute.html",
    "revision": "fa7c654238366f5937796b79a85b9b16"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Class.html",
    "revision": "f2ca239509787ab1f160d4dbb996a736"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Definition.html",
    "revision": "96627afdeee544b1ac8605ef19c69319"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/index.html",
    "revision": "45f9f24a88702753528ab15ca8321bf8"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Method.html",
    "revision": "a34eb71eb21d703d35635040877e3ba3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Params.html",
    "revision": "3eff4d3cb3667d975131453bbf0d9635"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/decorator/Sequence.html",
    "revision": "e20ad4fe33c69c8a386d1e5091f89081"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Classes.html",
    "revision": "2c37fa2a54cbc2c127d729ae67b00fe4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Constraint.html",
    "revision": "d8e4baf41319e84ab936091741ac7cca"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/index.html",
    "revision": "e64f8cd92865e3e41ec30a93ea6e30e4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Interfaces.html",
    "revision": "2424997549c19f74ff00d2863e5c37e4"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/ReadonlyArray.html",
    "revision": "c81fff6279f0a6cbf8599d59e82e64ff"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/generics/Variable.html",
    "revision": "830bccfa803e6ef9174e38d181abf726"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/index.html",
    "revision": "a1d7f0b7d67364adb68f4755a0d89802"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Install.html",
    "revision": "cceb4fc187a4cf276aed001c330173a1"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Intro.html",
    "revision": "78bd02a622ba3a1e953c53e52cab4da9"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/Reference.html",
    "revision": "52ce2ee89b7d234ffed862023273b05f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Any.html",
    "revision": "26ed246e6c02cf69778a64c664aa988f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Array.html",
    "revision": "d11d8ec23691f5c5e83d4c64c5c4cabd"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Assertions.html",
    "revision": "bc37fdf1c03764bb4cfc320c197ee334"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Basis.html",
    "revision": "873231675f240c17d56ad821950f7c96"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Enum.html",
    "revision": "dc052ccc10981559be85d82f682e952f"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Never.html",
    "revision": "3231cd5f202fce28a5bb9fc0bb6d2ec5"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Object.html",
    "revision": "cd09d8ab388464288123215fc560c8d0"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Tuple.html",
    "revision": "6593a5ba1fc2f7dff47a0584bc7f1ec3"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Union.html",
    "revision": "8f7ffcd3da6281a7dff861d8c9e98276"
  },
  {
    "url": "categories/front-end/ts/_books/typescript/types/Void.html",
    "revision": "527e58d8db901936da2e74cffe3e607c"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "44ab58d40774edeba2e9be1819f01b7e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "e956681ba0e78724ed491aef9f1a9144"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "59ec81c0302492c9a5629d517412dc2c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "5232f07713eab04587d6a502a1ef027c"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "206d775c8ab26effacc63b5a5f8e60d1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "adeb2599fc2a8f021688a59209e942a3"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "09c519e863231e52d5878838467ff15a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "a72d78f6ff25831526c451ced239c839"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "5a77bc0e78f851df3764311c7d50efcb"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "67d245d5243f7a4b94e6ec293be5739a"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "451f45ec22c963572a3ed2dd36967cb2"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "5a923a1b6818e556fce0b950e7263acf"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "8f1f86c87dd97e2520bbc92b622fa530"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "8e1101ff8d633ee9b30cce384300e39b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "ca5add58a311bd8c0af501969886b6f8"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "df8d861b56b0b23ec09468c6602145f7"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "a69a686118dfa50ccb88e17d5c8c225f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "a810cc0a795c8ba4169bae00de5c84c0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "f80089bb2fc4dd955ecd7613e8323cca"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "a09372da0bc80a786efc0c29d0e30ff3"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "1668b3652f43991b663eee5a2a4d7a90"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "cff99daa565b2797e482995d100caa90"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "63898c34d6193ce02769c4decf5b232d"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "af81de472f8c9280cdb2efb46793f805"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "d015175784a81f59977d8eb3033526b9"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "024b4925727515d8a5c32e6b62cd840b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "10d588b1e1d8bde687ecc6c6a9bb133a"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "d37759fc9b22a82e7b23c8dec80c23b5"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "c10a7afdeb25a219595d0f130fb6220c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "25db049d2de74590738e8e18f9b1fcaf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "85ee64acb29464cd10b27cbc553e3729"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "f24943377dc10426d968b4c6317e0c9b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "328eac87f244dcbbf9a81fb109133abd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "b44461300ccba758cf2fc36a45f55d41"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "59996e295c0c03e0e632e0a8b8d7a14f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "196225d698ec834aba19bd80baa252a1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "94c4aa35a86bc053deb92ba1f8ba584d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "f73b964ddb655c10b9d7540bc44e176b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "0fb19fd8cc7a5bda28327332c05e0a89"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "6798a92185292bccbc597562e384f6ea"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "1a22240a9fc033f456eb1b97ddd93421"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "b052a81c18976612bc305080d5e45f8e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "159815c2b26ad8f3e75a4af9662d7178"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "f5c9108c4d83cba0f4586fc2a7ffd988"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "c3282dec7b87ae4f2c796f617fa891d6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "86c518a7ae2c488a5b751f0032be142a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "3b71c2b24761b3385a9b174b9136c61f"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "8b8a40a1e93dc469b291a9120397cd81"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "f366b9bb923b169166239726a485ff15"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "e55876943927b864170cc31e6e90e714"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "d07cb5ade7969d609028f6c4b6882957"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "062bbcaed940ac1102286a621b4f2354"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "5838a14a1f2950d056219429456581ce"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "a451763b96725d8b4f462c2c8843d5a7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "cced37f56cb02286ec1949839df4f2c6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "ff918dfe72fd6a1579fd41f01876a3b0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "bd4a41187fc4e4c2009caf8bdc1f9338"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "80c054dbb92a535eda4e9ff6f27881c2"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "f6620272c18abd3730b9df1d0da24ad8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "d331170e12562342e9bbd517e1cc95f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "a768e9912a681761264ce977a6018575"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "9713d11a0f61c80dd8b6bed85d1bf1cc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "5c56ddcd07f6dc9e742bc90f63544375"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "24c846f1d345b3d7a9e79d8aee631819"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "2f1ef8663ab6de56b46a933984bb8f16"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "54359f6d19d19dbe1e14eae0be1afd44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "5bf923630e63089ea63566f2cbaa4bb6"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "6da9a42a54010d034e522196dac909cf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "b81b021fe0aacbe0ef6d767252e3cd5e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "243714f8284cd0fac7bc3728650c2d95"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "3de4b58a98e6e70aaa615cb3e83d6fcb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "ef45c488c4cf7e25bdf4dda848dc198e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "884a5d7a5dd67dedc061aecb78bf5fa1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "4053c2799dd33caf4fe2b68fa2eb5b1c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "390d71e46073a9087333bfd33ec8ea48"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "d3ed915bda20752608f530f8a7ffdbb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "fed059073947c2e684fe6e303f8d9201"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "e2d488271990c9657a175b3347545f78"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "806dc2da854fe9470ab64a4fea1ac6fc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "6f0a5ccc293e65246285a0643b9d8cca"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "7d08eb4541ab722ec20fa1488248cfb0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "aaf606871360631914736ba2102c03dd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "cf04441ac0287824e914576b83c40059"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "a9e593976eed714a362ccf6af84be940"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "2657ccc19f1c5ad955a1c1a6d35668b8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "85461ae523fd16b756d4a28a11559c11"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "815d793e3f0043d65c1c33028ec6dacd"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "0152e6b711f2e4c209539c922d1af7fb"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "8788f265aee4b07d3b1fd0e29a8bb91e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "1d49ac0a0cc06c6b36cf78296a6f15c4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "3e7ab2f0ca20874319615218529564f1"
  },
  {
    "url": "categories/front-end/vue/_books/weex/index.html",
    "revision": "11f013ec8d3f18d60be4c1e64e4e6c39"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Install.html",
    "revision": "61ba95a4295361361c85b1e0069e5372"
  },
  {
    "url": "categories/front-end/vue/_books/weex/Intro.html",
    "revision": "bab2a8537f88f91a169fa2be4aed6d6c"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "f6a62e72035c05ec555a2e8a28ea06ed"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "d4923edfe74a4e520986434e6cef1954"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "cad09ea290ef69d047ccc43ef2c23ed3"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "c708a28d054e3fadbb14b7e305e277ec"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "a9a57d05d9ed017f83f2c34069f5350a"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "4a6ff7cd1ea4005bfc74616420f234a0"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "500a836ffc7c426f39d36facb1d856f3"
  },
  {
    "url": "categories/index.html",
    "revision": "d0266b92384a360c05db01736265cb4f"
  },
  {
    "url": "categories/java/_books/android/index.html",
    "revision": "0899b8c4a1b37f086ac3948de638f17e"
  },
  {
    "url": "categories/java/_books/android/Simulator.html",
    "revision": "acc18055b64e701c6177dad5a61dd063"
  },
  {
    "url": "categories/java/_books/java/advance/Generics.html",
    "revision": "ffe0ffb283e1950207ca9c2c324f8c5b"
  },
  {
    "url": "categories/java/_books/java/advance/Reflect.html",
    "revision": "2f82d2fd55dfdb77fe8516fcc11df07b"
  },
  {
    "url": "categories/java/_books/java/advance/Stream.html",
    "revision": "38a79e858a846d0fc2439cc0abb30deb"
  },
  {
    "url": "categories/java/_books/java/basis/Box.html",
    "revision": "76939d0e9e3204e8b47aee74575e4491"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Circulation.html",
    "revision": "ac46e5da7d281bcbfa8372a6a46598d5"
  },
  {
    "url": "categories/java/_books/java/basis/Control_Flow_Condition.html",
    "revision": "12005fea05e20c32832c939a48a27e5a"
  },
  {
    "url": "categories/java/_books/java/basis/index.html",
    "revision": "005c721288df71f516e3b6e3066de8a7"
  },
  {
    "url": "categories/java/_books/java/basis/Method.html",
    "revision": "8bbcf1a2db44ad4740d4a2e2e1bcd75a"
  },
  {
    "url": "categories/java/_books/java/basis/Operatior.html",
    "revision": "c2d4c3ced8a379ba32d6edff27550e75"
  },
  {
    "url": "categories/java/_books/java/basis/Types.html",
    "revision": "2ac67fd56252eb0dfbcd6b15d2d644a3"
  },
  {
    "url": "categories/java/_books/java/Command.html",
    "revision": "76f7bca6f25b17e5076d5350a2965dad"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "be02774de0a449e69029c7c60d59bde3"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "1b44088a69adc9903e5db16c8084ac95"
  },
  {
    "url": "categories/java/_books/java/Intro.html",
    "revision": "a6b7b373dc0bc7301affad27939c56b3"
  },
  {
    "url": "categories/java/_books/java/module/Date.html",
    "revision": "b9401c6680d5fdbdb6ad3fc90e16809a"
  },
  {
    "url": "categories/java/_books/java/module/Math.html",
    "revision": "dbb28265b183d465a93b2826a619db51"
  },
  {
    "url": "categories/java/_books/java/oo/Abstract.html",
    "revision": "3e30d80e0228ad0f9e8708711721a413"
  },
  {
    "url": "categories/java/_books/java/oo/Inherit.html",
    "revision": "f9d1dc23d55df29caad9545d8a7bbafe"
  },
  {
    "url": "categories/java/_books/java/oo/Interface.html",
    "revision": "ac0ebe52885c139e1de8cfff657d9d4f"
  },
  {
    "url": "categories/java/_books/java/oo/Object_Oriented.html",
    "revision": "95c875fcfc6d8303d0eb7e16e35e1dbf"
  },
  {
    "url": "categories/java/_books/java/oo/Package.html",
    "revision": "1079b4d1dc3aef0ec36c6d2714920e21"
  },
  {
    "url": "categories/java/_books/java/pattern/index.html",
    "revision": "56a3c2b2d127439f007beacf1cbc1499"
  },
  {
    "url": "categories/java/_books/java/Reference.html",
    "revision": "c4b2160ca99f5ffcaa5707e532fd1470"
  },
  {
    "url": "categories/java/_books/java/structure/Array.html",
    "revision": "e8d2f9ca4802b9be873f2a1f0f97c93a"
  },
  {
    "url": "categories/java/_books/java/structure/Collection.html",
    "revision": "8d21964a8189b5fdb285792d1cf02e3d"
  },
  {
    "url": "categories/java/_books/java/structure/List.html",
    "revision": "445a0df8d4dbe65d6e042cbf7955ace3"
  },
  {
    "url": "categories/java/_books/java/structure/Map.html",
    "revision": "0f9d6f5222df98c2a036c49df04711d1"
  },
  {
    "url": "categories/java/_books/java/structure/Set.html",
    "revision": "25793e6153907e6891b6939873e1b0d1"
  },
  {
    "url": "categories/java/_books/java/structure/String.html",
    "revision": "f8cfaba8bba6747d5067ce77d8fd50ff"
  },
  {
    "url": "categories/java/_books/java/thread/Callable.html",
    "revision": "f6eba571d8eb77b64837011c51aa2d86"
  },
  {
    "url": "categories/java/_books/java/thread/Current.html",
    "revision": "ac3dd9f6c83fc5380a359b506a4ebd94"
  },
  {
    "url": "categories/java/_books/java/thread/Daemon.html",
    "revision": "2526c5055ecbca5ec410f087106a1723"
  },
  {
    "url": "categories/java/_books/java/thread/index.html",
    "revision": "c172ff76505e7d82b4c4cb99329abf96"
  },
  {
    "url": "categories/java/_books/java/thread/Interrupt.html",
    "revision": "e1171f1f8ef04302aa96665e08f9e1fd"
  },
  {
    "url": "categories/java/_books/java/thread/Join.html",
    "revision": "7bc87ffa6ad7110d208a84eb835c86aa"
  },
  {
    "url": "categories/java/_books/java/thread/Lifecycle.html",
    "revision": "1bbbc11eeba6a28aff4edaf113900fc1"
  },
  {
    "url": "categories/java/_books/java/thread/Priority.html",
    "revision": "63fc9e7eb268a38dccd025ad1bb26ba6"
  },
  {
    "url": "categories/java/_books/java/thread/Runnable.html",
    "revision": "558bb196fd93974f902ed17b14626385"
  },
  {
    "url": "categories/java/_books/java/thread/Sleep.html",
    "revision": "b79301a8604ffa9f69cb0d5ca9eee7ae"
  },
  {
    "url": "categories/java/_books/java/thread/Status.html",
    "revision": "4af86ae9480a9255c2d852f5fe69f871"
  },
  {
    "url": "categories/java/_books/java/thread/Synchronized.html",
    "revision": "859dc02fc0c9896b6c42f9d1c282008f"
  },
  {
    "url": "categories/java/_books/java/thread/Thread.html",
    "revision": "7e95d507dd24d74ee61aafb62f0aa21e"
  },
  {
    "url": "categories/java/_books/java/thread/Volatile.html",
    "revision": "78c6f1c7ede82dbb694dd688c9dbe34c"
  },
  {
    "url": "categories/java/_books/maven/Build.html",
    "revision": "54ab511c23dafe1ce9f173071858f790"
  },
  {
    "url": "categories/java/_books/maven/Clean.html",
    "revision": "e90c0f3f12feb6dcab2055e34ec166e0"
  },
  {
    "url": "categories/java/_books/maven/Command.html",
    "revision": "a7ca016a1da696167bf68330e3c8d7e6"
  },
  {
    "url": "categories/java/_books/maven/Create.html",
    "revision": "adf4d79e7e09e7ef209491c49d8f47c2"
  },
  {
    "url": "categories/java/_books/maven/index.html",
    "revision": "0213567cb317701a032db4dd9c13aeb4"
  },
  {
    "url": "categories/java/_books/maven/Install.html",
    "revision": "dc77cd04608187699737e966d77fbee8"
  },
  {
    "url": "categories/java/_books/maven/Intro.html",
    "revision": "1aa7464af8cf2d5b0ddcd6135a3cd98b"
  },
  {
    "url": "categories/java/_books/maven/Lifecycle.html",
    "revision": "7eda78f81a5bd27e0acbe88021272885"
  },
  {
    "url": "categories/java/_books/maven/Plugin.html",
    "revision": "aaf03a4b140299f3383a6bef7ac2a8b0"
  },
  {
    "url": "categories/java/_books/maven/Pom.html",
    "revision": "5fd06e1959115432e313bc6304c15bac"
  },
  {
    "url": "categories/java/_books/maven/Properties.html",
    "revision": "f17d1522eb04243c0dd1f33709d6e5fb"
  },
  {
    "url": "categories/java/_books/maven/Reference.html",
    "revision": "b7d2aab39790a0fe2104489ee0cc0af4"
  },
  {
    "url": "categories/java/_books/maven/Repository.html",
    "revision": "cb8c47671853c063492fdd74a15c9894"
  },
  {
    "url": "categories/java/_books/maven/Settings.html",
    "revision": "eddfcda3a0f565362df69790c56dfcfe"
  },
  {
    "url": "categories/java/_books/maven/Site.html",
    "revision": "29cda48f18a754fff04ecd582b48b982"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Bean.html",
    "revision": "2911d49b1a97eac40955fe0dd27220d3"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "c5c0616ae541725ab57b9a4a428e0019"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Filter.html",
    "revision": "a5a93c6a03cf415680e4ed4f91df66b5"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "8f912d57b1ba22aa32f543c48fe94c34"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Mail.html",
    "revision": "1e53e2725ce7efdf4dbbfd4eed8b55aa"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "5af2fa5e7f365b5611093db9e108998e"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "5f5c37c83c986e236ff709eefc50f129"
  },
  {
    "url": "categories/java/_books/springBoot/config/Config.html",
    "revision": "a200a5999c7bc930641d9b9ccb85fe81"
  },
  {
    "url": "categories/java/_books/springBoot/config/Env.html",
    "revision": "e2e9d781855d8e647890feb1085c1f24"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "6c130c73d4b49a005aef155588e9e603"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "96905c0ade40568e5c4c085f1d425dbd"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "187ef2670efac72211b14c425357e43d"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "85e6016cf8c87421dff17e3b8be8046c"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "634d6e749e2fc067fac620be46d60c8d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "26e59d28bd164881eb4a88120423e62d"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "c65dd95042b571d8983f7d0e398738a6"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "d778a3b1e9a3c1a2b7fd900553d78768"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "4c657cc3407875f31225560ec39e46b1"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "55ded586c81dd3fa4076a3a766c443c9"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "8e65293f675713edbe78c9a9ffb7cf32"
  },
  {
    "url": "categories/java/_books/springBoot/Reference.html",
    "revision": "7c460c617442536cfdbbb75f0f814451"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Cluster.html",
    "revision": "c96d628f7a2c6e047968f0d53e356665"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Feign.html",
    "revision": "03f669984dad873dc993d232d9a54407"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Hystrix.html",
    "revision": "83c8a54641b959cb6d62bf9d0bd6ebd1"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/index.html",
    "revision": "1167e2b476d7da613ae67f52068ff606"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Producer.html",
    "revision": "149aca076d499b6ef447b1b8cb4f3be7"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Register.html",
    "revision": "5959554be6d4da8323f74ca180b07142"
  },
  {
    "url": "categories/java/_books/springCloud/euraka/Ribbon.html",
    "revision": "8d5ef489dd1cc2ed568980bdf1763264"
  },
  {
    "url": "categories/java/_books/springCloud/index.html",
    "revision": "631022c66aab9c4402acbd33520747c2"
  },
  {
    "url": "categories/java/_books/springCloud/Install.html",
    "revision": "777be468d66ad9732cf4437805d3fab9"
  },
  {
    "url": "categories/java/_books/springCloud/Intro.html",
    "revision": "70e07e9c59be3b8412e92b7a2f710dd2"
  },
  {
    "url": "categories/java/_books/springCloud/Reference.html",
    "revision": "893da85ce65a2a481d37115eef9c5f6d"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "f0bdda8d466b631c2b6d332e65854706"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "3f9d27e25e70d0960ea897fc12d0152e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "259bb261fff566418e24fe4df1602b8e"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "1f316a2ea57287766604fd3230317421"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "8a4dbd7ff895c7613d78ced5c21500d8"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "5a372a0f0651672585c69df8b240d5ca"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "c5e9cb9df8c88c954ca5c7525053b661"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "144975e03606f65c265f1b9d6d57b388"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "153002b071fc36174033d7bb47def7e1"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "3308021737f1bbe14d15d0e874ba98f3"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "a3772c8a6e8a7e076aad4fcd2fe179ee"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "6d9cdf6cb95c021f2c9546b6cfec672a"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "2981bcd64ddda0b9e766c9ce27145c82"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "8d6b2f41d67815e2fde6b1f734a41478"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "8ed78b27425e7b0d810ae04f656ff9c4"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "aa54873ba012c0b471aea1b1c61ec51f"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "e9d3bdbaf0a9ec70b1e6ff931a0d4a74"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "db8b1d6e69cfcd628ef2cf9a1ec60106"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "e606fe52880279009b92102b44260c23"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "de2598ce126ad72372eeecd03f1ee7fc"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "79ae4076bbc364f6ee9a10c6a50b7e86"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "e11f9a75482201891424884aa325afc1"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "1b8df28a311545bdb6cfec1ddf8fa48a"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "b5f6dd4dc451aff0a2fddc69a0d260fd"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "62eb1a34917e295fc97da024624c70cf"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "7366b5016d72c85d3eb5739ceba74c8d"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "616bcfe5ba5237e2e6cbc1ddc511436e"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "5187612bda202d7f3c3464592d6ab8ef"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "9769fcbb88a7e5ed46328e73cbaab676"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "41c781a6ec89df00e3d26bf55cf98d59"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "f3656f7ea04f56cd824fe2d2c0afe25d"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "d4ddff99b701b469cf124236f8fcb50a"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "3e74076a00ba703a06ef9b6b21defd50"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "9922d1c7e73db87ff3132bb200d45a02"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "57adfc38e708159d8281c5e23db7558e"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "23181999965dc8426a9c39979346f41d"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "dbc0536b4fa8051f426539a34713efe4"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "962be17e8e7cdfeb29ea03d7a615af80"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "fcb5151dbeebc35c427ee7e6cb9858ae"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "b3c3a6ae70f9aef9af6036599a0b8a95"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "649bbd92f65cf45fd2cf9981aa60fef4"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "353b2d658103b16ee66c104642b1e75c"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "dcf0d6f6ffd33db44f2875f02538868b"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "9f79c284983e83df98aa941eea06ef3a"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "c008e4e7019e9727e74298f1473f6033"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "ba742ca600621c4876881749e4c733d6"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "b6495dfe5e7e49c8bf963fea7d3dee1a"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "2b38003f5440cff9b07489ec97a0085f"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "061a1f09c6785d82a0a65325ae39d444"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "7fe218e48340e989fbedaae1acf57de7"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "50de9c4795cf5fb35cfb87cf6f9b6300"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "80363ac3e8cb252ae0d3171ddbc320eb"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "d9b6ad766f5e1d0883f666a7a50c032c"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "67ed8f452658bca607b9655606fa1ac4"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "db25a1e5b0a85239adefefb2598b2c2b"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "5ede1bd48d3e3b6fdaf3704ba98a3dae"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "c9d9a20d5f4b59916f9cf70900402ce4"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "24aba0977cc42ff346c89d26b066a4c6"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "0c7e224cc9b562125772f8e4cb47f3bf"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "3adb8e2c6d512dbf1320cf593a158bec"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "e2fa87b08a6c2232ac5a602b51e2e480"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "b2e438560482152750ea5b3eaffdbf47"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "99b68ac3d910f1b0fa56b66b24ab8c58"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "bc1cbaacefb0d243a85ea062ee321123"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "ec102978f2c1d1284c4514846cd236d7"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "72c06452c93aa5a61ac314ce99e86f50"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "35875beff5256a2d88d564f921a7f070"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "3b121d2274257fb0cda3ef4eb26e8433"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "369a654f70d07cd0abf1c4895a69742d"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "1ac45be2948df8289b611b650827e0a1"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "8c1a5836e5022d52a27fb058bc5c5644"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "460c2b7a095618be3f840543e1e2a866"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "aede7909fe20d10633a1062271295aad"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "d77ebfd3db069c3392135b5e2a2ae372"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "0a7e2ab49e5579a9d2387701d7588466"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "e9ac5c1b0d440d65c8f97e1493c408ad"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "4f1de5f2748b7a90dc2acf49f78768f2"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "cff12f9ad04beddc56ce4f8ac0482b87"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "51342e2cc34097b41fa50a0e230957a1"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "8c0a6a5bed442469cdd3cb1bc1e187ef"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "f9ed2983ba99c30fb91109fdbb4a8025"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "0502e7235fe25055c1f1befafb337ddc"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "9738c5bc94cb28736e40e7ea2586e1cd"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "9e07de2aec96d3a38a2c0585dc0e4faa"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "339141c38c5998bb50880db47212f4ae"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "355306d38e005dd838087faf8af34797"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "c0186c0eaed6b3f83b28d46a62c75562"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "58e99def8a9a343a59bb07d643db975c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "91ff4edb4b4fc67fa7b8bbe37772eb25"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "0f17c0fcdbe098fc105f2a336920444b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "7ea1b77f10f169dfe43807c80d5b9a3c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "2f8482b313e027813283db781d8e2451"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "6d0136a558f6cd66e8249a4872a2f82b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "79f74d03459e3bc06e5875e8ba7d3e34"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "5a6b1b0c1014aee426534c6e2c19978f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "f9b0482b204658f09212d377d8891942"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "51d6f2dff62fb36bbbc3024c297e1b6b"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "6d507f2d1076554f217ea0185f5704e9"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "687c0c17b08ef09c9e55623825519b7a"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "9c79f30e91ec5303ef07a9442c676a66"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "40e8cc0ea0dbcbcece55a57901b25b75"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "d3df3c20d481887277171be36faa7f58"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "23aac33498320e98869a8fbb14b88447"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "56f4daa72df5fc731cdfc68013093325"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "617906ac8c8e2e4a6afe4db8d3aabc11"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "79245826f7c7c7dd3d99ec6f763d54fa"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "419709dc89aac3ecae8089828599d93b"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "884ad35a1949034fc6cbbfe383517a13"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "501bb3e6d4478030aa5648e8ce4ef19b"
  },
  {
    "url": "categories/os/index.html",
    "revision": "3c34df98f4d9456d6d27de4f84892743"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Compress.html",
    "revision": "90e398b4f7da78bca8fd697335b09ffa"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Curl.html",
    "revision": "232f1e4a1c3048dda20254e7782ab92c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Dir_and_File.html",
    "revision": "1155b5628809a28c9ffb69cc5ee3ae13"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Edit.html",
    "revision": "aeb1d998cb088c87a7a00e7b817131b0"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Help.html",
    "revision": "6d965b0585edccd485bd47d6cd4b3fb3"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Link.html",
    "revision": "499a0e76af8adb17c75692804af50b33"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Other.html",
    "revision": "78e9d90ddf02bdd7c7437ad6c2450318"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Scp.html",
    "revision": "31810656f795a114b27778915948af98"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/System.html",
    "revision": "d088167ec752e76e535890d4640e9f91"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Vim.html",
    "revision": "0aa0c1a4acb8f30ca90bec36f0189643"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_command/Wget.html",
    "revision": "b1ef188577c1b79d5641a15ee89cd73c"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Alias.html",
    "revision": "625df0bfd1ede33b6cbcc2750f1e9730"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Env_Variable.html",
    "revision": "c7178c4cf2f4ba77bcfbcf66a0387886"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hostname.html",
    "revision": "33b0c667ee897f53bd8252976bf71870"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Hosts.html",
    "revision": "b96e4f1bb5d42ae3581e565598240deb"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/Origin.html",
    "revision": "bda86939f7f628b906aec96f9394ae89"
  },
  {
    "url": "categories/os/linux/_books/linux/basic_config/System_Info.html",
    "revision": "71f68af3caff366bb5d2b0d2429945dc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Format.html",
    "revision": "08c36656e67beb4695ec2cfcb401c1b8"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Fstab_Mtab.html",
    "revision": "1058fc2900367fdb552175ae37bb5725"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/index.html",
    "revision": "e1bce8b27c03b455b96539b64a93acee"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/List.html",
    "revision": "1c198b10d49c8eee521e92326c0f657e"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Mount.html",
    "revision": "f9cbd892d3c11e61f994a4c0ddb61574"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Partition.html",
    "revision": "014bf28552afec06f214c693c4ea04cc"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Reference.html",
    "revision": "5151b5a8b0e2ca47f3dedb6e40904ce6"
  },
  {
    "url": "categories/os/linux/_books/linux/disk/Solution.html",
    "revision": "c78813352ecb4fbd3779360a72201157"
  },
  {
    "url": "categories/os/linux/_books/linux/index.html",
    "revision": "2953e785c8709b3d5b5c4fc5edbfca25"
  },
  {
    "url": "categories/os/linux/_books/linux/Install.html",
    "revision": "2d9c4796112332a72352af316a90beea"
  },
  {
    "url": "categories/os/linux/_books/linux/Intro.html",
    "revision": "4ce8f7ed2578b535d2e613db4d76a9f5"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Firewall.html",
    "revision": "12fa2bbbd5f1136b25d7b8f3570516c4"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Port.html",
    "revision": "14f44774bcb9e1fc0d9ceed5e873bad9"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Setup.html",
    "revision": "2759f0294e13fb36655cd25ca2ad1547"
  },
  {
    "url": "categories/os/linux/_books/linux/network_and_secure/Solution.html",
    "revision": "4446739019efbadc9bc088e4e1ebbad9"
  },
  {
    "url": "categories/os/linux/_books/linux/related/Process.html",
    "revision": "ee2aff244e91f3b8f57cd328a5461ae2"
  },
  {
    "url": "categories/os/linux/_books/linux/related/SSH_Login.html",
    "revision": "6cab3eacbf1518c3fb28f6518a096d37"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Escape.html",
    "revision": "156851d468e384d7b23999abbe0904b0"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Find.html",
    "revision": "f3e72232439b842f71f7095bd838e785"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Grep.html",
    "revision": "f07a8ab7f3a64c759ece91473a6a49b4"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Pipe.html",
    "revision": "9cbae5d7c0d8c20f41d62efa9140708c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Redirect.html",
    "revision": "e027b414a173a4c32445b47053b4fc3b"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Sort.html",
    "revision": "12cd3afb3cd4498959b6bd274ecf00c5"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Whereis.html",
    "revision": "3221af68a49b35f8141769dc10c5216d"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Which.html",
    "revision": "12e734192e477f680a7a9fc041c51f1c"
  },
  {
    "url": "categories/os/linux/_books/linux/search/Wildcard.html",
    "revision": "9beea99561ced92a42e4601d5640fe04"
  },
  {
    "url": "categories/os/linux/_books/linux/Shell.html",
    "revision": "2683f316a576e4e6489b1a475fd20a16"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chattr.html",
    "revision": "2bd378a5ea0c3bdda1d313f721bebad2"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chmod.html",
    "revision": "9acdd251f305cb0f904b78166b7d155f"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Chown.html",
    "revision": "276bc08015dbec05c7e2b634b86a3739"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Passwd_Shadow.html",
    "revision": "5af0efa96918da927e5ec5bc5a5a76fd"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Su_Sudo.html",
    "revision": "b1afd6b29e39d731e777eb0b82c15c2b"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/Uid.html",
    "revision": "21895d01c854c001cf2044dd80150459"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User_Group.html",
    "revision": "a0305a82599f3b2b097b988d9c734eef"
  },
  {
    "url": "categories/os/linux/_books/linux/user_and_authority/User.html",
    "revision": "7521888e04841d69dbe1e02e9474a7ea"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "2c4e4ed948f517f3f23d79ef064dc036"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "bee1c5a95aa34b85bf5bd5e00d17df4d"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "8eaf61941d5c0628742452e73cbe8953"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "d1f19c772877ea0a14787a6e0fcf2a1c"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "52d854e66a8a1ba55239094b5b3a9dc1"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "f40b147a6e6322ee1cc5837db256527a"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "85c3ceb5fcfa39fc4373cc31dfef80f8"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "e3a4db1b13cd6cafbd2aa94bf5f67da4"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "544cb607511af1a50a327b2f33301f72"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "878f4c239f884c2cc44b6c9940973623"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "90c48ed8260a837a00466ea45de59549"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "01efa7f7985ca52e96156f2ddc020552"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "4bbd0e43199c4f1fcbba981958aa8f19"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "0ab62e58d5f6d35aeebc9dea4ad13bff"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "db24e485b261fbe2f07a32ea139d1c62"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "de45e8c58f7a86465604e7f5a1374ab8"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "a440779bdc9be2d229db80e689b98aac"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "b360bedb4b04dd3b6b6af1288cac1d95"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "f146f2ac00420bc40d83770fc076f890"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "79b7b8240428247f8127e82e52aae629"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "b0702e7d03969ada168e3cb4c330e4f9"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "884b18c8efe31a21c8091eb0f5db82f5"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "348e6f95a2f8e37408bdf723fbb1cb45"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "4e8cff00fa651138c8f9877f038ba0d2"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "01d5f1600ec910a122a5cf0f455c8d84"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "bcaaf915710af4bf3086c447fc520de2"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "fae6b91730b5c4917a0e7d1f380f6032"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "3023e024d2f44fc0aa6bb6daaa47cef6"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "c824711310f7d5a1ef0f97c342430e46"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "a97c69fb4a0adfecc511f8e41fb54a60"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "9f44bb03da5042ec556ff04e1e0ae442"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "9f136c83f3903aa18d70af2d27f9c2a6"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "26cd8f3a13070e85185747fca76ab613"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "1630c53801806262b95b438fbffce531"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "6d1c60aeaf0ba92234b5e2520b17b76a"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "5c7448c517eb9a9567065a7ec4466d98"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "eed209f411648bbcf63dc13ac896bd97"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "e6483d0b8db2b2622a5550d0660f8cce"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "76b6045ffdeaec9c3d2766d3808ee1f5"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "456fc321c80ad08efb7286aa6d437bdd"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "5ae9260f6ed54d528c15982ef947c10b"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "da8de890b9a832a2c46c72b4e868c6ef"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "35c56b282ea01c268c46bbb88de561de"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "b2e3a0acc64f724f005e4157448d94a4"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "673d45d7cac09a4d9bd180b99b2ece39"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "d3190075f543e04517ee648b9b000a5e"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "b191033078fb754a453ee06b5933408f"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "f75ffdf0555f9db12810f0f0cb2da38b"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "fc84c5765ba05453726d29ee2974589c"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "198ae95fe05adc71a68d0078ac43669e"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "164d5db721ef8c1fe57ddada00f0a2f2"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "045346e3b8aae077b1ef968b22f4abd0"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "05c23fe83cd1a9d99772d86244e3efc9"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "c0555b9c28535a7896c607d82e2bd874"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "af389daaee449cf3be144dde2430a207"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "83553463a951f829678d5f8c3727a38c"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "ac4d058b4079e8538718e26d6a1f4d66"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "64e912351e8909bdead3fae3a0c0b600"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "d51a8ab972d4667d877fc31dc2bc4a28"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "a3286611d68517e2ee7a545aa8cf83a9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "657409584fdee80fdfc94f45d105b488"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "2d190de262da63ffbbb9fc71c431248e"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "f9ea998a7e68228e343eb1f7c4a9b9a6"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "dfa99c9e600cc3a89f0087b91c351d09"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "7d24e859c8fb7ee115455707ca540714"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "9e3ecb6d5ce5130824594d37894769c6"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "f4746c2fbc6366bb37f6d706cf87bfce"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "b03b877c790cd1416e9d47df06d15e03"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "264394745a374e982c88d9e43c1d6a57"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "f702649b49fb6b42e2ea2e9d38e0911e"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "32c2775ee339bbba9778358b7b0cc5ff"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "6f1adef9ad043d63d1880d899597ab0e"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "064e7f6fb85f2fb3b5534a61da5baaf5"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "2cd73df975d56cc1c8fd32631aace71e"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "dc9c6b4eddfc9f8a4e26c94f5773d4c1"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "4815614eabf88fb08c77fcba87c58ba0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "8aa9a9606618a7ab2b06f92f2931ffab"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "98288a75b0c70101b77407b79bd43bb6"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "6d0ba6d7653c17e843f3b65334cce312"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "96da6884b6a08f47feb0a550fd6f921d"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "553b04782c4eb8f70547faa52d3aacf1"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "e9dc2d940f3aae3b1a0de3dbf19216d9"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "ed8bb1edb5d42f06f3596dad07c2f839"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "faea8da4b7faa2e5011ba76089eae873"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "3649ec3cf18525030cbb33cb634319dd"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "e924423a3509b98f008449963197b786"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "d036ba33127e4ed3e9c0fb9798ad4c33"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "43a1651e67558f30b97a3531fe51cd6c"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "b15aedca5a8198c5265a28b629db3b48"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "d014a8e20a6c0f24c3528083a138b35d"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "f27c7e358eea0e086737ee6aa29d3303"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "b9be42eb5ffb82d92d5857e92d9858ba"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "af9af8f783a0c153e4c96545fdc05011"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "bc0d2ecd8cb485f293c4aab2d261e0fd"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "e4601ec5d1b371c8d1ce2a236e396d81"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "ce5dd2d6fa324c25deacd66b16a6f80e"
  },
  {
    "url": "categories/php/index.html",
    "revision": "60b34f643a12b657349e9486ca992303"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "fd713d1d9ff17bd4a076432270273380"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "e6eff223533bf5fce3b0921a6ba8e06b"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "8e6f0ca8486fe378b782fabdc3e149b4"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "e89a594f1cbe27ae3a79c7b75262c532"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "6af72604cb20314f7fca2868ee4a7ec7"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "b944f67665109467c57c0115a216c5bf"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "e2680890363543b2af7c4621400ddb53"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "c22c10fcb563420bd789319cfd9428d0"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "24a22a255b2351bc5a0fa61ba4c2d1e5"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "f7155fed0a8143fd4c319f2fa3b5c9a9"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "035c5aa97c6725ae24bd2f2aa67f21be"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "820c7f6873a74079a5830af94c327694"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "a42bee66cec931d49cae758a3ade8e71"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "5ecc9cc99bba7b7777959d6b5d916f42"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "4862f23d9bcc65ecd7cf87aac6f1d037"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "dace635e9d8d226122698f9ccc47d59e"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "ecf420c272992d6adfcbcb23debc66e9"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "007be45344018d05fca6d544f26a4512"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "4c842b501582c19bcf1bac0ec6fd8bba"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "0e05b89c0541374de439186ab00b7457"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "fd4c9b20df299ed3d48289a47bb1d4e2"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "aaa531b766370774ad2b55a71403b502"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "fcd8875617e0ac5d7932e33d5c75b4d9"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "29d9273b8059d4d60e3fb190cd8bce50"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "950d233139cff5837805f75c1160eb24"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "57460a0a7386846ba63f500378091dec"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "e106b92001f7e8bd77f916ecf7b42d09"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "d3960eeea979fdfacc7753a19ae5a2b9"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "5e58c93fcb42173e36df577778fb474d"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "3585ca3881e9d4997cff4b8831177212"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "e152730c0c0a8a22cbfc6616fb265a04"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "5644d885bb92c0cf36f9c53ee1401019"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "95d0b9c87c55a41416d59416fecded4b"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "88de6d85f38fa2f01da2e7178f27050c"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "7c147e7af17977672a2607351ea4d4c0"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "5f6024762623e0a1e04e4f72efe1f9eb"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "a285b9b58cff3f45ee0db139be2a1a8b"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "ef641b0676af376367c9dba7e1af5d5b"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "aa5539c2c1dbc6f26deb7f20ceb382b3"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "aae79491511c12215f9e148b25365415"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "3175dfeaf62b9a9dabbe97c0d1c24363"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "d5a54dc355747dfae5831ce1ee9e9aee"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "9fa6bc7a6c27991ac71316b74701ad7a"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "d1c3b5d2f87abe74dfac98b9bc02b5d9"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "6ff0fadc958c004523eec7d9dc8c75b3"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "b49124ed66a343eb62a59d13c9b6208d"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "68468e880dbcf87b14e7f10182e68424"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "45c4958b667d57ff5250d173897efa0d"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "bfcdc2cc3a3cdc4c7dc06e11be9a2d08"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "b3fb90b36fe46e75afd2b95b79211b95"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "70994b4e21fb3c86229bf5c4490febed"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "fb62d300803047c54be04d2b98f0ac32"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "c85ebbdef628906fa91576dcd7525936"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "6c5a48afd592735a2c7adcad2e473e63"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "6e1dc17189f7d4dc355d1078aef4c754"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "184c3aac9e044630c827443edf5d8a44"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "62e29f26c3e0a6dce72ead07aa8a3a3d"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "2c112ad5a4772f26e11bb948ac3466bb"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "bf3140777a034b4e573feb23d7eaad37"
  },
  {
    "url": "categories/python/index.html",
    "revision": "9248ab20a0dd129638856d266ea462ab"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "432f32aea966bf8b012f898edd2171bf"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "8c91d31005dc7ae955d5d322c4a11d19"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "2abe015b8d0e81c8811aecd08af1e8cf"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "2159a894b7943f9415cc33055dc7471e"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "484daf88468d48b200a52b65b146cafe"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "7d8e1a99754314813c1de55b8fa8b69f"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "214ae68b8bd62dacdf75d4359d2b0402"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "b62adf1d1ee827dba4964883bec2b274"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "e25b50341b442e00276a2961a9d859af"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "eb9e7deee871b65ec6f49bb34f4ea389"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "b416a9dda76a25e1a4ce0f38907f1fb7"
  },
  {
    "url": "categories/system/index.html",
    "revision": "3080d09504525d1799a7d3d909f5476e"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "23533fa01cde4e76260361281bd407ac"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "95fca3feec5720a29fc09c00fe696b69"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "09980d792c452b2f7168d69a94886cc8"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "a841a7ac98cfc84a782d2e4f3b4c6fe3"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "a97a55fa299ea5a6827bde1caea9e2ae"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "69b2531b452cac35802bb512ca3e179f"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "993b8e6ced8400c308a72382e3993b83"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "5e70fac44fc3534c189fe18dbca95181"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "5191fa84c756e71f0952c25f892a2433"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "e70e4ecdae7d2de0c152d3539df4a844"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "706f7e624705c059ec4ec0986755e382"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "9853bcf7453b749b4dab2e3fabdfde73"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "135bfe4525796bddea4bc753e3c8d17d"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "83fc1e951c790cf60e198ac00183bab3"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "ade672e0dcf1933d237d1daed4b0b50a"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "cc2c603880a326d935df72be7a488b23"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "f6b42f1d05e87048302059df2ebc00b2"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "08d51a0bca1ae24121efa678756dc09e"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "f69808c7138a4ec75d6074af6fea145d"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "defb52a4eba04c8028c5bc01381502e6"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "6d4c0ae013c993b8294d38b056b639e5"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "2e2969d7a077ceb3264e702e5d328e88"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "bea2fe8c43868fe19f9d3e6f62c9684f"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "38d5ca5d0686c716e024f5a7ce609ab3"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "774df3bc1aa538f56186fb36e2262e51"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "a1602c3ae05b49d94602a558a2318d38"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "da478ba228a5cde1efcc97868e09efec"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "4e8cd9e9460311f906f5e7b243832987"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "b3241b638c695c3de0bde43b1c86019d"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "d1a647026335259761e56194bdf18c00"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "af0cf442a18072f06fd38fe8f724b1d6"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "865fbcc7bf4f7156da11acdd7c0b75fc"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "8b7b501a4143f151475a8add27248cdb"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "4b34b46bb1f259b57a04413a2fa08e76"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "ecf2e6aa0a683c1bfece0954ead9a4ca"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "c3d547b6552a5733d963d7e102e3760b"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "d8f0a66c44b41050b975ff049cd49749"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "7ccb586d86486310600a18bc7407b64c"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "65b8e3e0d906fb04795867c50eff00ee"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "54217f46538be56b7c9a77c521caabd1"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "940f63140e70ae0f36541009952409e9"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "759eee83dc16fc9ea370b69c13259b8d"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "f105e8fdb341667556a2f95dacb696c3"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "1c1a1821c5d12d839c7ade21c58b403c"
  },
  {
    "url": "favorite/docs/Tools/Idea/Config.html",
    "revision": "242327e57c1c940c926803399321ec59"
  },
  {
    "url": "favorite/docs/Tools/Idea/index.html",
    "revision": "67b91f73889be1e0eae6bda4963d4ff8"
  },
  {
    "url": "favorite/docs/Tools/Idea/Keymap.html",
    "revision": "d6bc67aa83faa2174cb025cec8af74b4"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "0927fff813403ce7d441a6879449ee15"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "f54b67aa7acc0a9953561585a5d77714"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "0987043a0a77fc4c6fdf2b4442dcae89"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/index.html",
    "revision": "0fa79a0efac350cb646b9e3cb1a7f886"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "2aaecef869828744c1c9b959eec7498f"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "90cdec3262bcd0925c60fa0d072e4245"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "7357bcfc206637f75370a7ec6ded7961"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "12378f4dfc6bde6f86f3301b50cdde7c"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "68a62dac5ada3f1bdb268126030d9aaa"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "d2662ba575de7d767b692a907bf758af"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "c5f71ebc38c73acec2829988115699a6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "63cdfe4221d2c406afed310d100a3989"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "3b0a205623ca265aaab3ef91cd953e37"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "ccb2b86ef1b19d3fc11860969c0f9013"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "35aa115874c9470c64a2a1de88e404ea"
  },
  {
    "url": "favorite/index.html",
    "revision": "ee8db95cb8b524879a5e60aa293ae14b"
  },
  {
    "url": "index.html",
    "revision": "583cac1a2e1a38ca1b681a9103f29eef"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "9032004ebc17c7b4819442c1e9b1d730"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "ba2d762275607c73b724d2c083428255"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "604324a41eb8b17aaf699ac38d77d517"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "d7000b142051e0df992b93c406baa00e"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "28dd47bc0f15be82fc573917122f7719"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "1f1b4af9247017e9880080ca495bbc3f"
  },
  {
    "url": "note/index.html",
    "revision": "bb58f8acf176233d33e1a779f9145d7f"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "9834112eaddaedb9d81f5fc45cd9a7bb"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "e35b9dd85c5c192c949ec1da083858ea"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "f4710e115fd2e705d50fae29afa2e451"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "745dce98dd23cb31195796c3fbf018bb"
  },
  {
    "url": "share/index.html",
    "revision": "d341b14f44839a675cd1359d85ed1f92"
  },
  {
    "url": "single/about_me.html",
    "revision": "33a9684579163d77e5731b54eaeb5ae0"
  },
  {
    "url": "single/all_article.html",
    "revision": "b4ab03a5cb991f6b33582d98bdf73ff8"
  },
  {
    "url": "single/welcome.html",
    "revision": "98d0eb711cd57f04fc156bfcb55babaf"
  },
  {
    "url": "test/index.html",
    "revision": "4573770322040e9c25a771a56a6f0501"
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
