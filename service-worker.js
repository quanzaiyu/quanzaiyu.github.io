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
    "revision": "adf24da549c49dc51aacb4b3e95cc29b"
  },
  {
    "url": "404.png",
    "revision": "ddc90d3f42c6e38e1f208711c30ab4e5"
  },
  {
    "url": "articles/docs/A_Year_After_Graduation_and_My_Choice.html",
    "revision": "77d24551772583493bd1e82ce012bc1d"
  },
  {
    "url": "articles/docs/Deploy_with_Different_Platforms.html",
    "revision": "2ba7d4c9c2a8c2188a451ec8c645472c"
  },
  {
    "url": "articles/docs/Love.html",
    "revision": "71141e1403430e928f0d34b253f0dfe1"
  },
  {
    "url": "articles/docs/My_blog_journey.html",
    "revision": "4e8b1707178aeee57556e0f5480aa4ef"
  },
  {
    "url": "articles/docs/Some_Advice_on_College_Life.html",
    "revision": "853dd04f1fc0d1bf6af25cfcc4e511ed"
  },
  {
    "url": "articles/docs/Tips_for_Issue.html",
    "revision": "51323e1e129a9f8a1c36f746448a9061"
  },
  {
    "url": "articles/docs/Yoyo_Come_Back.html",
    "revision": "5cb166c5f3ce8364912f89e0915fd7ff"
  },
  {
    "url": "articles/index.html",
    "revision": "b7c07330b43a100513750aae31c3c125"
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
    "url": "assets/js/1.a3dcb58e.js",
    "revision": "d61ca753e282fda03ec9001b9ac13296"
  },
  {
    "url": "assets/js/10.ecd1419a.js",
    "revision": "75bd8a6f32087efa28750c8b48e6dae3"
  },
  {
    "url": "assets/js/11.a0f7eda4.js",
    "revision": "fcef0cb0bb9631dd3cd79ec738775609"
  },
  {
    "url": "assets/js/12.a9f191c5.js",
    "revision": "4346db32e73e6ccfb5c9b8b714452565"
  },
  {
    "url": "assets/js/13.34f3591b.js",
    "revision": "95a48baf71ad914374959d15229a2587"
  },
  {
    "url": "assets/js/14.d0f490d5.js",
    "revision": "21b389ffb6c75c098c807971486769e4"
  },
  {
    "url": "assets/js/15.92eafcb9.js",
    "revision": "ef9ccc3e2b5858feb1658287963ce2aa"
  },
  {
    "url": "assets/js/2.b87d5e0b.js",
    "revision": "bba3faa5f6e2b2b0f6106e2beb2a2805"
  },
  {
    "url": "assets/js/5.7bea38e3.js",
    "revision": "91b056db1f9b9b134d081404a677b12d"
  },
  {
    "url": "assets/js/6.fef674ae.js",
    "revision": "cbd99c4476eba531bf4d97e9f464e784"
  },
  {
    "url": "assets/js/7.420ae82d.js",
    "revision": "6270d7605bd8cea650f62b6337f26c75"
  },
  {
    "url": "assets/js/8.ad06e931.js",
    "revision": "7519bdeff7157f7bfa6612a04d75bcbe"
  },
  {
    "url": "assets/js/9.63a23b63.js",
    "revision": "bfa562254d756952708c7b6eaf03ddf4"
  },
  {
    "url": "assets/js/vendors~docsearch.3953f9da.js",
    "revision": "776a4e90a2828032477234e3ed0fd706"
  },
  {
    "url": "blog/index.html",
    "revision": "08d88c62f0c0d59503143c53b49a9620"
  },
  {
    "url": "books/c_c++/index.html",
    "revision": "a93812d64e095a0d68babeb4baaa9c25"
  },
  {
    "url": "books/c_c++/reference.html",
    "revision": "31ceb300d6b74f23b4b6bc9efc0901c1"
  },
  {
    "url": "books/index.html",
    "revision": "13826ff0e3714966f485a6f8f1450e3c"
  },
  {
    "url": "books/kotlin/Basis.html",
    "revision": "d921688e1f2497811e90491858528232"
  },
  {
    "url": "books/kotlin/Class.html",
    "revision": "47e233f5c36be0f026b31eb60bd36f19"
  },
  {
    "url": "books/kotlin/Control_Flow.html",
    "revision": "00bddb64097241266e8731ad3836c97b"
  },
  {
    "url": "books/kotlin/Function.html",
    "revision": "620681ea6d77ffcd3f4d5b48102f2eb9"
  },
  {
    "url": "books/kotlin/index.html",
    "revision": "788558504729a5722666589c49adc2ae"
  },
  {
    "url": "books/kotlin/Null_Detection.html",
    "revision": "1138e0b8f1b3e03d124d72b61b7e4fd6"
  },
  {
    "url": "books/kotlin/Reference.html",
    "revision": "00f1ac82e9acba13bcd80fed00864c32"
  },
  {
    "url": "books/kotlin/Type.html",
    "revision": "4dc11286d3da316d2c47923422df4100"
  },
  {
    "url": "categories/cloud/aliyun/_pages/Oss_Upload.html",
    "revision": "dd84e4201871b5568d66fb6e071153bc"
  },
  {
    "url": "categories/cloud/index.html",
    "revision": "3a2f60eae6806306c45554733d3f93bf"
  },
  {
    "url": "categories/cloud/qiniu/_pages/Oss_Upload.html",
    "revision": "ac12c06da0b1ea3a69d3efe2d4ed368f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Jssdk.html",
    "revision": "9ae14308d9111164dd5ce3603f87d68d"
  },
  {
    "url": "categories/cloud/tencent/_pages/Miniapp_Vioce.html",
    "revision": "0ab2b70c2429a7f1ddcd7c3cd2d9ea72"
  },
  {
    "url": "categories/cloud/tencent/_pages/Openid.html",
    "revision": "d1c65813164475cfe366bd2d67bc0b6f"
  },
  {
    "url": "categories/cloud/tencent/_pages/Tencent_Map_WebService.html",
    "revision": "4feef178b3e9a39601d47d36ac3cc7e2"
  },
  {
    "url": "categories/cloud/tencent/_pages/vConsole.html",
    "revision": "1aab3f6684096cfa90855d0fed24adff"
  },
  {
    "url": "categories/cloud/tencent/_pages/WeixinJSBridge_is_not_defined.html",
    "revision": "3f39dbe7d6ea2eca84dc6342ee4219a6"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Node.html",
    "revision": "4c495405eb21b3556e8f6514dc3283af"
  },
  {
    "url": "categories/cluster/docker/_pages/Build_Vue.html",
    "revision": "576d41c2a69a85b0e9648085d9b7cd18"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Compose.html",
    "revision": "4dc9cddffa9144b9e2f554e1a0ee744a"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker_Network.html",
    "revision": "f09580b56a57569ccecfbb24d377a57e"
  },
  {
    "url": "categories/cluster/docker/_pages/Docker.html",
    "revision": "cd3a0c58a11c18e3645a4ca07085a9a9"
  },
  {
    "url": "categories/cluster/docker/_pages/Dockerfile.html",
    "revision": "6ab40dc906891d979c7343eb52b964ff"
  },
  {
    "url": "categories/cluster/docker/_pages/Registry.html",
    "revision": "bf6aeda0038b7dd9f8ff6ea08fb7c835"
  },
  {
    "url": "categories/cluster/docker/_pages/Traefik.html",
    "revision": "27cb4c6ded04d24626c4385301dd4b79"
  },
  {
    "url": "categories/cluster/docker/index.html",
    "revision": "c2fe2479719afbbb263893128c34835e"
  },
  {
    "url": "categories/cluster/index.html",
    "revision": "a1600bb742ff2bd853771f85a22a47c6"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_Jenkins.html",
    "revision": "d963931319438aaa413474572a4634f5"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Coding_Webhook_PHP.html",
    "revision": "5f3420f6e808b3b8b9f9a03180f9cb32"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Gitee_Webhook_Jenkins.html",
    "revision": "8046c1aae25d7c70fe0efe559d0cc1df"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins_SSH.html",
    "revision": "37471fc12a803e63e3a9cae2cf5b7e38"
  },
  {
    "url": "categories/cluster/jenkins/_pages/Jenkins.html",
    "revision": "dabe2bd2793cd7781db878d6a9b4bedc"
  },
  {
    "url": "categories/cluster/jenkins/index.html",
    "revision": "812f4c75f18600cb438bd6996bfcd5bf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Concept.html",
    "revision": "27226fb44fe802873c4d9e116a5f58d4"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Config.html",
    "revision": "b9f3af5cf9d0c701d72aae453619430e"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dashboard.html",
    "revision": "d1dfbd02598b7193dd068e6f1812ede8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Dispatch.html",
    "revision": "debb86010e4411201154a39149b4a2d3"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Helm.html",
    "revision": "98b3ad3468ca4f953d9fdf1396bf85d8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Job.html",
    "revision": "073a47b9a78768fa9aa1cc2d9a0a52d6"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubeadm.html",
    "revision": "6333c10aad45b59e7419aa5131b698cd"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Kubectl.html",
    "revision": "a6000b170dda1fd57200dc7872252d07"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Label.html",
    "revision": "9d2fadc526af86447341cf731fb004e8"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Minikube.html",
    "revision": "56c4608bf98272c27b8710ca6cd50cff"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Namespace.html",
    "revision": "f4c798ae31107a505783c614d2dba93a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Nginx.html",
    "revision": "62625a90263c4c2d72646abbaa698caf"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Pod.html",
    "revision": "8ecf8e7ae7a2e7928923d1058c545c3a"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/RBAC.html",
    "revision": "1ad4fe730c7ff7078dcb39a35d34eb71"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Reference.html",
    "revision": "13a245113ab84e4e8673eebb309a8977"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Service.html",
    "revision": "8c6494975d07c52eb004998677e5be3c"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Storage.html",
    "revision": "00935727fc2250ab7b70816e02655957"
  },
  {
    "url": "categories/cluster/kubernetes/_pages/Treafik.html",
    "revision": "da23e1b33aa559c7a50d229baf0afba0"
  },
  {
    "url": "categories/cluster/kubernetes/index.html",
    "revision": "edc7bcacd1160e930f65ff23d45babbc"
  },
  {
    "url": "categories/front-end/_books/angular/Component.html",
    "revision": "eabb7ded435fce71fecf4adf2718b031"
  },
  {
    "url": "categories/front-end/_books/angular/index.html",
    "revision": "da74bcff5fe91b92103e82d304a3c136"
  },
  {
    "url": "categories/front-end/_books/angular/Install.html",
    "revision": "8bed763a100d28690eab9fb94dc13721"
  },
  {
    "url": "categories/front-end/_books/angular/Intro.html",
    "revision": "2d98f9aa220ccdc8a64e92ae71514393"
  },
  {
    "url": "categories/front-end/_books/angular/NgModel.html",
    "revision": "408608dddf2dd5fd5c61906e0965948d"
  },
  {
    "url": "categories/front-end/_books/angular/Pipe.html",
    "revision": "c9ddf883d8b1974e5bb85ef7c537981e"
  },
  {
    "url": "categories/front-end/_books/angular/Template.html",
    "revision": "61530fb5c0652b778f14c33a6644317a"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Example.html",
    "revision": "5c648db3c5844f810d6bdbe133d2df0f"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/index.html",
    "revision": "de99b94f356277a28e7ababd63a19f77"
  },
  {
    "url": "categories/front-end/_books/canvas/animation/Reference.html",
    "revision": "6e282ff87b7e2a6a0df8c5f3d1daeefd"
  },
  {
    "url": "categories/front-end/_books/canvas/Basic.html",
    "revision": "24f3f0cbfdbb8ed81f2df855a3d57a26"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Arc.html",
    "revision": "c262c55409403da58f4c316a871f70d3"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Gradient.html",
    "revision": "a473eb8e23ee230adf930576dfe6021a"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Image.html",
    "revision": "9ad3da10527ba5c4ecb1b0a0c2899a50"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Path.html",
    "revision": "105ac54e98ea84e25cbd4bdc7c82bfde"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Polygon.html",
    "revision": "5630f7f494388c439beac969f2b112fb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Prototype.html",
    "revision": "8bfde8237318d7f35a0fe3d41e531ceb"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Rectangle.html",
    "revision": "b461afd89f9ab031b9cd38fc1531b771"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Reference.html",
    "revision": "483b6e2239b429867df03c068387c332"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Save_Restore.html",
    "revision": "95b3e500235795044d26370eea86cf7d"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Style.html",
    "revision": "21b98e2ece721a421966727770603be5"
  },
  {
    "url": "categories/front-end/_books/canvas/basics/Text.html",
    "revision": "0b13c3928294fe95f3a42cc00e52d0fb"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Ball.html",
    "revision": "94ed50dc063f7069cae84717df29dff5"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Card.html",
    "revision": "b8479bd40d751a2c65011d43c19a4649"
  },
  {
    "url": "categories/front-end/_books/canvas/cases/Spotlight.html",
    "revision": "8a8c14624dd0a0756859621bc0e6710b"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/index.html",
    "revision": "5a7021c16fa8bdbf03f0d0d299b995ff"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Matrix.html",
    "revision": "27c1872ace15addc96a0ec820077f310"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Reference.html",
    "revision": "4c3e23f8149950ab26eaf960d0f9e5aa"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Rotate.html",
    "revision": "3ff4dd83d7df922cf6dfd511cc263783"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Scale.html",
    "revision": "0f64919124435bf8ba4b526343938e40"
  },
  {
    "url": "categories/front-end/_books/canvas/coordinate/Translate.html",
    "revision": "f824b3e5c45bd512ea9b029ad629220c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Capture.html",
    "revision": "2c6af1fcf745982742f328947f03bbca"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Clip.html",
    "revision": "c002b7371e7e873616cde7875aa231c6"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Composite.html",
    "revision": "da2ca783fac1c868efdf789ca85a5cfb"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Effect.html",
    "revision": "cf9444d169d3feb83b058f0ca54a45a0"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Pixel.html",
    "revision": "34e7051b3182860992336ad3d3e59008"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Reference.html",
    "revision": "32ad2ee038703f7e42d0539896ea763c"
  },
  {
    "url": "categories/front-end/_books/canvas/image/Scale.html",
    "revision": "943a0977301ff368289cab2f4526ad35"
  },
  {
    "url": "categories/front-end/_books/canvas/image/WaterMark.html",
    "revision": "feb4d607c391f43f1ff5b866f5dfc5ac"
  },
  {
    "url": "categories/front-end/_books/canvas/index.html",
    "revision": "3598bd8689b49243065e42f0daa418dd"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Element.html",
    "revision": "0277d2be922aad735fd8184ea58ee24a"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Keyboard.html",
    "revision": "4f86a45018477c6cf76719e6cd1bd862"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Mouse.html",
    "revision": "ae52108613ddb22092bf4fe6d33cee55"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Position.html",
    "revision": "2bc24873bad2cc2a0a7a0536d276f952"
  },
  {
    "url": "categories/front-end/_books/canvas/interaction/Reference.html",
    "revision": "f00b3ac172915537b831f1978cf0f9ca"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Coordinate.html",
    "revision": "1cd66daf8946c99ab830ec888b9c5f53"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Matrix.html",
    "revision": "a55dee1e335cc4787c315cbb30ae8d3a"
  },
  {
    "url": "categories/front-end/_books/canvas/theory/Point.html",
    "revision": "8cd7a26d0b49cd63ed7a69ddb563caf8"
  },
  {
    "url": "categories/front-end/_books/gulp/Dest.html",
    "revision": "eb898f9a5d0e6d17d0aee8f6efeb1c17"
  },
  {
    "url": "categories/front-end/_books/gulp/Gulpfile.html",
    "revision": "5b01d5b00b3efc92e4198bbb0d0c6c69"
  },
  {
    "url": "categories/front-end/_books/gulp/index.html",
    "revision": "358ea561e1d99bf118e35c1096940cc5"
  },
  {
    "url": "categories/front-end/_books/gulp/Install.html",
    "revision": "73b3338cd6023a3a798fa4a8a94d98b6"
  },
  {
    "url": "categories/front-end/_books/gulp/Intro.html",
    "revision": "259decb79cc3e5a83f38e54222f9081f"
  },
  {
    "url": "categories/front-end/_books/gulp/Pipe.html",
    "revision": "26cd9e99db616987aaffd6e4c3d62ff8"
  },
  {
    "url": "categories/front-end/_books/gulp/Plugins.html",
    "revision": "92ca148f4f0492ff0ea1779dc027686b"
  },
  {
    "url": "categories/front-end/_books/gulp/Src.html",
    "revision": "af4dd999bb3a5d42ca7a4b448f9e3f5c"
  },
  {
    "url": "categories/front-end/_books/gulp/Sync.html",
    "revision": "4825eaca43539672bb18fdf22ebe34ce"
  },
  {
    "url": "categories/front-end/_books/gulp/Task.html",
    "revision": "ff6b0f78fb737759248a8a4a84648f21"
  },
  {
    "url": "categories/front-end/_books/gulp/Usual.html",
    "revision": "e389b3b3c5be9e56d4b1622db0fbca20"
  },
  {
    "url": "categories/front-end/_books/gulp/Watch.html",
    "revision": "5275f4c409c3b7b64eddd24c61e9942e"
  },
  {
    "url": "categories/front-end/_books/pug/Attribute.html",
    "revision": "73c3dac61b091294a6a5592a2507e75e"
  },
  {
    "url": "categories/front-end/_books/pug/Circulation.html",
    "revision": "15a7efd1808d15d92c686f397430c952"
  },
  {
    "url": "categories/front-end/_books/pug/Condition.html",
    "revision": "a6db7f9af1bd2c9b25a35f3d01daa397"
  },
  {
    "url": "categories/front-end/_books/pug/Embed.html",
    "revision": "5df6db743aca9a275c5df27503c41bcc"
  },
  {
    "url": "categories/front-end/_books/pug/Extend.html",
    "revision": "fb1dc3b2358f05dc183baa376943ae13"
  },
  {
    "url": "categories/front-end/_books/pug/Include.html",
    "revision": "984077b3f070b0720497582e823ae821"
  },
  {
    "url": "categories/front-end/_books/pug/index.html",
    "revision": "2ddae79930d4563625405dbe885e1666"
  },
  {
    "url": "categories/front-end/_books/pug/Install.html",
    "revision": "c0016f7e1d5ba1f924310355b140dcfe"
  },
  {
    "url": "categories/front-end/_books/pug/Intro.html",
    "revision": "66619989308c24dee146ae845dc8b258"
  },
  {
    "url": "categories/front-end/_books/pug/Mixin.html",
    "revision": "1599ae91594060d520217ac3a67e8e1d"
  },
  {
    "url": "categories/front-end/_books/pug/Structure.html",
    "revision": "78118aa302d8b1c01b71c0554b7b9505"
  },
  {
    "url": "categories/front-end/_books/pug/Text.html",
    "revision": "4cc9db4fe0b2a3722fc7ac9bb2244297"
  },
  {
    "url": "categories/front-end/_books/pug/Variable.html",
    "revision": "e7538a2a9d6c34660e5ef3f362aabaa2"
  },
  {
    "url": "categories/front-end/_books/svg/animation.html",
    "revision": "8cd9f20cbaa9f3eeb2894489f2a96871"
  },
  {
    "url": "categories/front-end/_books/svg/basis.html",
    "revision": "ad50baac5078003d93e03fbed303ec54"
  },
  {
    "url": "categories/front-end/_books/svg/clip.html",
    "revision": "b0bf9d9eca16368a05f6e091f8c2dc09"
  },
  {
    "url": "categories/front-end/_books/svg/css.html",
    "revision": "e312e0d6c3158b4339aa726fa06ceb70"
  },
  {
    "url": "categories/front-end/_books/svg/filter.html",
    "revision": "d7d0a0c29004869cd03bdca146b08fc6"
  },
  {
    "url": "categories/front-end/_books/svg/gradient.html",
    "revision": "345bd4b01ef9a89683246b464c5d892f"
  },
  {
    "url": "categories/front-end/_books/svg/group.html",
    "revision": "ff70e0519bba24befca5e5257a1a199f"
  },
  {
    "url": "categories/front-end/_books/svg/index.html",
    "revision": "53f43a261edc1155f44bf24c71bdf07c"
  },
  {
    "url": "categories/front-end/_books/svg/Intro.html",
    "revision": "dd4eed82caf9b33e41072b8347bccfb7"
  },
  {
    "url": "categories/front-end/_books/svg/javascript.html",
    "revision": "a4957f76c2aacda5954f834e6560c77f"
  },
  {
    "url": "categories/front-end/_books/svg/namespace.html",
    "revision": "d0b474c9d0d77f1996ef29d856cbf647"
  },
  {
    "url": "categories/front-end/_books/svg/path.html",
    "revision": "55c947271fae8b94087f747c2c9f7267"
  },
  {
    "url": "categories/front-end/_books/svg/pattern.html",
    "revision": "bce53a2bc27cc7d80f87c66b28f15bce"
  },
  {
    "url": "categories/front-end/_books/svg/reference.html",
    "revision": "84f22cce7690756c66fbc2e9f5dd0a57"
  },
  {
    "url": "categories/front-end/_books/svg/tags.html",
    "revision": "3e88a4d5f8f654b4ca755e4304d9dd25"
  },
  {
    "url": "categories/front-end/_books/svg/text.html",
    "revision": "0c7014ba7f8657569571028b8894fec7"
  },
  {
    "url": "categories/front-end/_books/svg/transform.html",
    "revision": "1b8720f18b4c52df0a4e7246719f91eb"
  },
  {
    "url": "categories/front-end/_pages/Best_Scroll.html",
    "revision": "0a9dda6d3b4d31e4b3f220eb113bd88c"
  },
  {
    "url": "categories/front-end/_pages/Ejs.html",
    "revision": "2ad9ffd934e4bfdc1511907e86ee0c32"
  },
  {
    "url": "categories/front-end/_pages/Frontend_PDF.html",
    "revision": "8fff262ba9c823e7a858cfc81090897e"
  },
  {
    "url": "categories/front-end/_pages/Gitment.html",
    "revision": "6967286bc2b35313c66c6c1c51a652d0"
  },
  {
    "url": "categories/front-end/_pages/PWA.html",
    "revision": "e078a7d17a03596bd2aa6dcc792ecec7"
  },
  {
    "url": "categories/front-end/_pages/Rekit.html",
    "revision": "6d441fc0704b5c41c925967052ffb23c"
  },
  {
    "url": "categories/front-end/_pages/Request.html",
    "revision": "e3b0edbd746b6683b9671939b7b52805"
  },
  {
    "url": "categories/front-end/_pages/Scratch_Card.html",
    "revision": "78cbd6793c859aa714419405cf251d7c"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Blend.html",
    "revision": "a4d7fd458be73492fc03bf0cad9a7484"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Clip.html",
    "revision": "79ba1d00af64d78b8c7063010046d297"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Filter.html",
    "revision": "472f0c9f8f057c04bc77c23a1de1449a"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Gradient_Application.html",
    "revision": "25d2c94c11e4417aaf7c9479e351b173"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/index.html",
    "revision": "231647aaa33282f06ba44c2521f5e16f"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Linear_Gradient.html",
    "revision": "03d60267d91f183b9256a5a5f283a875"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Radial_Gradient.html",
    "revision": "a07e979eee49a52f771ef1846cea7ad5"
  },
  {
    "url": "categories/front-end/css/_books/css_picture_processing/Reference.html",
    "revision": "02bd57c8e024ee407b7c4c33dc1b5427"
  },
  {
    "url": "categories/front-end/css/_books/css/Animate.html",
    "revision": "62c4baabb42ef8624707b0fb29e0db13"
  },
  {
    "url": "categories/front-end/css/_books/css/Blend.html",
    "revision": "127815dd63c262aeb531b182cf8cb029"
  },
  {
    "url": "categories/front-end/css/_books/css/Border.html",
    "revision": "0958fe0b4a71c473af3e8beda92b0c61"
  },
  {
    "url": "categories/front-end/css/_books/css/Center.html",
    "revision": "9036982748f5e7a18713c80d60c6a040"
  },
  {
    "url": "categories/front-end/css/_books/css/Clip.html",
    "revision": "b86aa6f6403e60bf0d0de1c085257026"
  },
  {
    "url": "categories/front-end/css/_books/css/Dialog.html",
    "revision": "0e257a0e5ab953d7e2453a96e21a1ac6"
  },
  {
    "url": "categories/front-end/css/_books/css/GradientText.html",
    "revision": "583998513eec309fbf210b4314e23ba1"
  },
  {
    "url": "categories/front-end/css/_books/css/index.html",
    "revision": "160218d4c84e9ed2dff3864652397339"
  },
  {
    "url": "categories/front-end/css/_books/css/Line.html",
    "revision": "7d0593acc0d07e09c3c943f9399ed69b"
  },
  {
    "url": "categories/front-end/css/_books/css/Reference.html",
    "revision": "adef7679f9d344a707e34b94f713c27f"
  },
  {
    "url": "categories/front-end/css/_books/css/Scrollbar.html",
    "revision": "be882c3b03abe22c6ed28aa688ab3e48"
  },
  {
    "url": "categories/front-end/css/_books/css/Snippets.html",
    "revision": "ac328fb9a51868f8031cd2e1d1ce7dbf"
  },
  {
    "url": "categories/front-end/css/_books/css/Switcher.html",
    "revision": "966ae211962bc03fcc6c7acde682cdf7"
  },
  {
    "url": "categories/front-end/css/_books/css/TransformOrigin.html",
    "revision": "2cae05dae58957fcd1237d1d3103824f"
  },
  {
    "url": "categories/front-end/css/_books/css/Unit.html",
    "revision": "f691c84e115d0acc0dd961ff9e6825f1"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Angle.html",
    "revision": "84181be1d1cef6c2ad6f80f51419c4f5"
  },
  {
    "url": "categories/front-end/css/_pages/Effect_of_Text.html",
    "revision": "9405c402ef7c5958b2567dc93ee62fa0"
  },
  {
    "url": "categories/front-end/css/_pages/Flex.html",
    "revision": "cb6f5cb585660062cc9515e57f32c727"
  },
  {
    "url": "categories/front-end/css/_pages/Font_Family.html",
    "revision": "a6a522c8d6eb857a9f84060b73a0ab1e"
  },
  {
    "url": "categories/front-end/css/_pages/Grid.html",
    "revision": "69e88359f762c9c150c583fcdd91daf9"
  },
  {
    "url": "categories/front-end/css/_pages/How_to_select_fonts_gracefully.html",
    "revision": "7c5ffa996d09b0b14dcc0ab80a435005"
  },
  {
    "url": "categories/front-end/css/_pages/Mobile_Scroll.html",
    "revision": "6d2dbb42829a9b5de4775c95d3844d5b"
  },
  {
    "url": "categories/front-end/css/_pages/Overflow.html",
    "revision": "543bb719c24e3e5db07568c13ee862ad"
  },
  {
    "url": "categories/front-end/css/index.html",
    "revision": "026051d0b867479e4e2a9c246b159964"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Dragable_Elements.html",
    "revision": "b39450820bcce3425f61dc66bbd8bb38"
  },
  {
    "url": "categories/front-end/html/_pages/H5_File_System.html",
    "revision": "c32a3d226487cee49dcf966ba0ddf0c2"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Local_File.html",
    "revision": "6153840008a263040e41828f4647e82a"
  },
  {
    "url": "categories/front-end/html/_pages/H5_Media.html",
    "revision": "3afd7a6e010bf18b8229efbc6f3723b7"
  },
  {
    "url": "categories/front-end/html/_pages/iOS_Upload.html",
    "revision": "3c210362bd98e14bc6122b0c4c44502a"
  },
  {
    "url": "categories/front-end/html/index.html",
    "revision": "7ebf4ea759220334d99cd0c824b64cc8"
  },
  {
    "url": "categories/front-end/index.html",
    "revision": "188ca4c0857e3b027323bb1838497ed8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations.html",
    "revision": "8c88029c764a8ee10f8a438374671357"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/condition.html",
    "revision": "8c604d7fc23d7e17a75b5c507608e758"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/es6.html",
    "revision": "c42476f24af2ebf946a77bdf9effcc4a"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Abbreviations/short.html",
    "revision": "5a6bfc344277e698068cb83d96045049"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Array.html",
    "revision": "c9995f3159d9580b89eb0ec5d94deec8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Basic.html",
    "revision": "693b860373bc8abf98640eeddb2ebfd2"
  },
  {
    "url": "categories/front-end/js/_books/javascript/BOM.html",
    "revision": "812140f0aa4e015c675518aa1bb9e07f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_map.html",
    "revision": "8382e952ca7394173debbe5e4f2ff9e0"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/array_reduce.html",
    "revision": "bb3632dfdf1c90629f955bc78d582af9"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_assign.html",
    "revision": "941d74a19f467c26874359fd30492721"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_create.html",
    "revision": "7e4468ceebb94c7ae435422f8839dc3c"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_defineProperty.html",
    "revision": "a0eb882edb313573a09430f166588d42"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_entries.html",
    "revision": "3124db4ac75372358be10f5503be6cf5"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_freeze.html",
    "revision": "6809caf8a609995d858bd2e2d4899047"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptor.html",
    "revision": "e7594721e42de05f6222231042c0b2a6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertyDescriptors.html",
    "revision": "348566ac136e02f7ca759f56f1014370"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getOwnPropertySymbols.html",
    "revision": "c0aaec0fea023f11aaaa12bbf2ac3590"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPropertyNames.html",
    "revision": "7cd3be5709395ffd9c92d8bf98b97ffb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_getPrototypeOf.html",
    "revision": "17774bae73db13d8615818dd0136c4e7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Comprehension/object_keys.html",
    "revision": "f2b47252932d8fe333eb20a74fce91a3"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Date.html",
    "revision": "3867c48bfe2230077f66b3742156bff6"
  },
  {
    "url": "categories/front-end/js/_books/javascript/DOM.html",
    "revision": "622b38cac92fa9c92354939b4fa03dd8"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Function.html",
    "revision": "626568c21b46b384d8dbdb19c4564fbf"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook.html",
    "revision": "ad28009765e20d7363a9192b13205b20"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Handbook/array.html",
    "revision": "edc2187636ce9c925072b314bdfe1371"
  },
  {
    "url": "categories/front-end/js/_books/javascript/index.html",
    "revision": "96be20c78a476bd32768165398450024"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Library.html",
    "revision": "83c993d748bf27128f78347981f4b845"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Object.html",
    "revision": "9b07f81ba779a18c7d5c3949ac3ad62f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/bigDecimal.html",
    "revision": "80c8a64b2303399784fecd706d246e7b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/favico.html",
    "revision": "d54706317195a7521073a5705ac80761"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/jquery.html",
    "revision": "1245791bdce1e0eb400817054b32e6bb"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/moment.html",
    "revision": "a8f3c8bacdba4c7a0b3271ee00721c60"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/move.html",
    "revision": "643c0d885b3dc9ce37ecf00feaab811d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/pdf.html",
    "revision": "60b367926fcd3d101160c12fc06f79de"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Plugins/v8n.html",
    "revision": "04b6eab301d8411753c0540c1c8365c7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Reference.html",
    "revision": "0057aef0010fe11932c0307d960d5ba7"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets.html",
    "revision": "381820a8a95b559f69df664149d85d08"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/array.html",
    "revision": "068008c198c1ebbf55e8da73d053f146"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/color.html",
    "revision": "eec28ae4a0a51d793cca2cc5ae406a77"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/date.html",
    "revision": "c1c50c1355566b8a7a3c17903942e26f"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/detection.html",
    "revision": "b13dc2842cb54560c5599b57c91b8150"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/math.html",
    "revision": "d407f8a212b75bbb61312685cc836fa1"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/regExp.html",
    "revision": "7437a43bc880145786f6b972ba5eece4"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/string.html",
    "revision": "d5102cb94d1401539ddef58baa21d58d"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/transform.html",
    "revision": "7daeb6c81bb5d12da3b369bf7d780a5b"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/utility.html",
    "revision": "ddcd3e55b8d28e4d2a55180cd8fc789e"
  },
  {
    "url": "categories/front-end/js/_books/javascript/Snippets/validation.html",
    "revision": "f2b2199eb63de19f8477628eaddbc5ef"
  },
  {
    "url": "categories/front-end/js/_books/javascript/String.html",
    "revision": "8602e94fbd0ef780446259e0e48ae9af"
  },
  {
    "url": "categories/front-end/js/_pages/Async.html",
    "revision": "78f71517e05328a5a6e3940ad729e5b4"
  },
  {
    "url": "categories/front-end/js/_pages/Blob_Base64.html",
    "revision": "cc115033ace36d0928ffeb781b1563a3"
  },
  {
    "url": "categories/front-end/js/_pages/Call_Apply_Bind.html",
    "revision": "53d9763384df09c35692e8996e78edad"
  },
  {
    "url": "categories/front-end/js/_pages/Closure.html",
    "revision": "82db3f632e2c48d58d9eaa4c7c0abab2"
  },
  {
    "url": "categories/front-end/js/_pages/Collection_Objects.html",
    "revision": "1b734e3116ca45a537fe562a51d13cb3"
  },
  {
    "url": "categories/front-end/js/_pages/Copy.html",
    "revision": "50e3879e70bc81ab53469854af3cea76"
  },
  {
    "url": "categories/front-end/js/_pages/Encode.html",
    "revision": "e00da70ac25999b69476b9344e740ac7"
  },
  {
    "url": "categories/front-end/js/_pages/Immutable_Objects.html",
    "revision": "a78f7607ee6eaf6d5f0b203001ad0b73"
  },
  {
    "url": "categories/front-end/js/_pages/MockJS.html",
    "revision": "91d101ca3a382293985a60b21f376029"
  },
  {
    "url": "categories/front-end/js/_pages/Module.html",
    "revision": "2f17731859bc35dd7b749478f731a498"
  },
  {
    "url": "categories/front-end/js/_pages/Object_Empty.html",
    "revision": "733af827d79d842bf04007163dcfceeb"
  },
  {
    "url": "categories/front-end/js/_pages/Prototype_Chain.html",
    "revision": "7b325ac224155ef493caf571468a9846"
  },
  {
    "url": "categories/front-end/js/_pages/RequestAnimationFrame.html",
    "revision": "db5bbc8cd230abec9957c841dae4c77f"
  },
  {
    "url": "categories/front-end/js/_pages/This.html",
    "revision": "aa9219091c6545d3ae5ebd4eeeb7dbff"
  },
  {
    "url": "categories/front-end/js/_pages/WebWorker.html",
    "revision": "4b4882f7f5467631686d8800996ccb6e"
  },
  {
    "url": "categories/front-end/js/_pages/XMLHttpRequest2.html",
    "revision": "fcc284e4ec3ed6679021c285da372156"
  },
  {
    "url": "categories/front-end/js/index.html",
    "revision": "4fa37e79ccfbdfc033f4636a8690c56d"
  },
  {
    "url": "categories/front-end/react-native/_pages/Api.html",
    "revision": "b0fbcc6da5735c56b05db8e26811a0c3"
  },
  {
    "url": "categories/front-end/react-native/_pages/Button.html",
    "revision": "fc2a9c5d46f1498441a7b3555254ad60"
  },
  {
    "url": "categories/front-end/react-native/_pages/Component.html",
    "revision": "9032055085a4c7e174a6e53f4393759b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Install.html",
    "revision": "8916e9de90fc011a989257869eedc745"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Audio.html",
    "revision": "696513d44d8037fc08754285bf30f197"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Camera.html",
    "revision": "831a90567782d8ff52f4d3fca504cb15"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Gradient.html",
    "revision": "4a1158db5fdbd4cbefda5323f8726a71"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Image.html",
    "revision": "3ccafc41eb0f82c54f6a1b3b7493020e"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_ProgressBar.html",
    "revision": "0cb718614a1a8e2b06899f6e84c952e6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Svg.html",
    "revision": "a4329cccf3a0f85553887e8b6b4f2397"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Toast.html",
    "revision": "99703c810b26548a9a1c0f53f79d423c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Lib_Video.html",
    "revision": "229f1bce94ccc2a17be2d4710c4f5868"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateBottomTabNavigator.html",
    "revision": "7b1cb62d40cf39f57eb4c01e501947f6"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateDrawerNavigator.html",
    "revision": "f2252f3013a29ba415036567c75f52ee"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateMaterialTopTabNavigator.html",
    "revision": "916696e5a9a03048e457d7ee78b3957b"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_CreateStackNavigator.html",
    "revision": "3b60864f83109fc8266227884d4b847a"
  },
  {
    "url": "categories/front-end/react-native/_pages/Nav_Navigation.html",
    "revision": "cc5ed2e4711fe47311cdbdc6e8752d2c"
  },
  {
    "url": "categories/front-end/react-native/_pages/Network.html",
    "revision": "e182d1375e0591049c4a266a75f6d760"
  },
  {
    "url": "categories/front-end/react-native/_pages/Style.html",
    "revision": "375285b5d5f6a9a407f9e35c86284867"
  },
  {
    "url": "categories/front-end/react-native/index.html",
    "revision": "af7752682a8bcd6bde0612a0bfe17a24"
  },
  {
    "url": "categories/front-end/react/_pages/Component.html",
    "revision": "cecbfd13150425ddbed72570eca128c7"
  },
  {
    "url": "categories/front-end/react/_pages/Event.html",
    "revision": "55f504c069ff087cd37449ce25786069"
  },
  {
    "url": "categories/front-end/react/_pages/Form.html",
    "revision": "5a3bf35cbb49238586a6927a59619605"
  },
  {
    "url": "categories/front-end/react/_pages/Install.html",
    "revision": "b8733fd71e289ebbaf5021810932d2d2"
  },
  {
    "url": "categories/front-end/react/_pages/JSX.html",
    "revision": "2a42807e2652272072c160eae139248d"
  },
  {
    "url": "categories/front-end/react/_pages/Lifecycle.html",
    "revision": "aa6c7075350df4fc580a07dd16cf2a12"
  },
  {
    "url": "categories/front-end/react/_pages/Slot.html",
    "revision": "b0f5d544316f5eab8a8e7fa2d2caee20"
  },
  {
    "url": "categories/front-end/react/index.html",
    "revision": "af47ea1e56c8dc759125c60b79c81e32"
  },
  {
    "url": "categories/front-end/redux/_pages/Basis.html",
    "revision": "9182748ad943518cf5f65da9b23f7946"
  },
  {
    "url": "categories/front-end/redux/_pages/Install.html",
    "revision": "cee1987a1600f9ca367ad975bfdd1bc7"
  },
  {
    "url": "categories/front-end/redux/_pages/React_Redux.html",
    "revision": "283b2468c55d8c329547ca9b9cf10562"
  },
  {
    "url": "categories/front-end/redux/index.html",
    "revision": "29caa47ad2c035b2df30ba86c61801f6"
  },
  {
    "url": "categories/front-end/ts/_pages/Basis.html",
    "revision": "54701e983fba18786d63a2b714a15125"
  },
  {
    "url": "categories/front-end/ts/_pages/Decorators.html",
    "revision": "b20ebab515319fd286ac8d7fe7ef0c43"
  },
  {
    "url": "categories/front-end/ts/index.html",
    "revision": "895a70e540b9ad945d904e4156990ca4"
  },
  {
    "url": "categories/front-end/uniapp/_pages/API.html",
    "revision": "c580aa81233aced49962376d0fda7352"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Basis.html",
    "revision": "3d100469bf0808c9492ce7d7fadf6d4b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Bluetooth.html",
    "revision": "fa7545da8ccddbb698cab3c2c9e452d1"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Camera.html",
    "revision": "af5014cd68c45c73c7f4d9bea7fcb4b5"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Components.html",
    "revision": "5d1405fdbd942c86af5a448427a85771"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Device.html",
    "revision": "8c341ffc7fc836c2a4f6c4597c8a4fac"
  },
  {
    "url": "categories/front-end/uniapp/_pages/File.html",
    "revision": "01d73b4bd35f53267b2fbc286b7e752f"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Image.html",
    "revision": "c2e9cf80e849227d4489e7c8fdfdd0d0"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Lifecycle.html",
    "revision": "16b02057a78925ae8d7937dad0a0312d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Location.html",
    "revision": "dd17a3236577751e0e5f0553338e41f6"
  },
  {
    "url": "categories/front-end/uniapp/_pages/PageEvent.html",
    "revision": "e06edef9cd623a55254e364564a1022e"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Recorder.html",
    "revision": "87930d915984574df1e9e65bee5440a9"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Request.html",
    "revision": "f38db1d805dcc43749520e6729630e1d"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Route.html",
    "revision": "07d8d8c3e6a3a9e3dd4871db1d71cf5b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Storage.html",
    "revision": "297e769d5cf83bcb165b157c49919bfe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Style.html",
    "revision": "a9604220f930171307f89c99d8fbe2fe"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Upload_Download.html",
    "revision": "a19aebf483b377a3950fc73b3c371a99"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vue.html",
    "revision": "a00f57fd876f630f9365f896a1b0136b"
  },
  {
    "url": "categories/front-end/uniapp/_pages/Vuex.html",
    "revision": "31f8b302661baa4c4cd4c7efbf9563f8"
  },
  {
    "url": "categories/front-end/uniapp/index.html",
    "revision": "e09b1cfb09320bbc36ed7b6b99f99999"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/AsyncData.html",
    "revision": "ab02b591aa6c200b090ff6d7ff5f47ec"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Config.html",
    "revision": "3dcce90fbc637fdc57882471847ca3f2"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/index.html",
    "revision": "b2115fe45d3cd200925f20daa98c6542"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Install.html",
    "revision": "ea847adb76551617435dc810b3827223"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Intro.html",
    "revision": "2ca5e12e1ea5ee044b0453b367c05b4b"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Reference.html",
    "revision": "ff5a578b55ab2a3273097263434f13c0"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/Route.html",
    "revision": "04157c8f324e4e6445d15302d29746e8"
  },
  {
    "url": "categories/front-end/vue/_books/nuxt/View.html",
    "revision": "8731a83469e5a0e9e975950095c7ce0c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Directive.html",
    "revision": "34717d5514b78c4acd9ed86b4ea59fdf"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Filter.html",
    "revision": "81ecc6b43a7e316679fc7c9942c06f2e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Mixins.html",
    "revision": "b6e1779e604dea6695267e337b7641a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/advanced/Plugin.html",
    "revision": "9b38ec15da7aaff2bc56f3ed8902166a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Dynamic.html",
    "revision": "a00400613097a2f98c0574301420247b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/index.html",
    "revision": "3e96842b27d9a229bc70c27be38c3452"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/List_Transition.html",
    "revision": "b7957c8415627eb693bde8d16b5a5687"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Component.html",
    "revision": "cf71861da47f434758dc74b253f125bc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Multiple_Element.html",
    "revision": "a6d8d51c8c71f434352e4e8eb579883e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Related.html",
    "revision": "4d50eb7db8cad72530406b4a0b33efb1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Reuse.html",
    "revision": "4ffecf53fc9552404b399b738a401799"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Single.html",
    "revision": "f1b3a071f59dc64119e00da44b1d5d0b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Status.html",
    "revision": "bc42b95043e908725a41b46fd3b8cc29"
  },
  {
    "url": "categories/front-end/vue/_books/vue/animation/Third_Part.html",
    "revision": "579b79c6f7eced6db744d33e3803af74"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Event.html",
    "revision": "0132bb8965916c21ed8119596cb53fc4"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Instance.html",
    "revision": "ea4d4dc42d0169c75665bfd72e50049b"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Lifecycle.html",
    "revision": "f4c96cc035322447cc9fd13105fa7c30"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Style.html",
    "revision": "8270447a29cbb2eb8bfa7a9b2cf6404e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Template.html",
    "revision": "1e34378169154ea32bb91f10a4a7ecc5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/basis/Update_Inspection.html",
    "revision": "60d4cd1510edeaf5dad5e2fcbfc8d5f8"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Advanced.html",
    "revision": "d636aaa62c8c308f864984da69634622"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Emit.html",
    "revision": "628be555ae1f66bb52a5953349c1c27e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/index.html",
    "revision": "d2deefb5d0e2b440d6f6552704ca0d6e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Prop.html",
    "revision": "7bc5ad24c54fae03cc03fe61d575854a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/component/Slot.html",
    "revision": "29c1479942a77eae9c672ba9d3ecbad5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/extension/Flow.html",
    "revision": "8a67f138d00530a4ef15405bbad9812a"
  },
  {
    "url": "categories/front-end/vue/_books/vue/index.html",
    "revision": "f7bfb1550330e7d2fa6d13ec04f44a04"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Install.html",
    "revision": "0185045179668cd4bf5bfa9ad03efeec"
  },
  {
    "url": "categories/front-end/vue/_books/vue/integration/Axios.html",
    "revision": "077dc050d709cfbb6ab6e139182648a0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Intro.html",
    "revision": "dabf3a42e9af1486379f0ec47ae3b94c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/optimization/Injection.html",
    "revision": "b5cfc093a1a03a8dffad06e4a2651de5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Data_Update_Views.html",
    "revision": "7f17a53b0a05669bd1d0a5b42b3ec9de"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Deploy.html",
    "revision": "3dbc2bff87799963f65ab38c646db330"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_Issues.html",
    "revision": "c6e917420aed4b65d8f08a1b2d15b576"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Q&A/Vue_No_Refresh.html",
    "revision": "81235ad8655bc2dbd0af99235edcda76"
  },
  {
    "url": "categories/front-end/vue/_books/vue/Reference.html",
    "revision": "a517716890f59ae1d6afe61ec4255fe5"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/Data.html",
    "revision": "5372c1095bf79863ef6427d5a3e9f6c9"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/index.html",
    "revision": "4a5146be20506d041382460d4271c900"
  },
  {
    "url": "categories/front-end/vue/_books/vue/response/View.html",
    "revision": "c3a32adbc5d6427d9174cfebe8143dd0"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/404.html",
    "revision": "d49a4133c90a32d29536ac85df05e371"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Alias.html",
    "revision": "edb45d2f144837a7c176153f91e9895e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Animation.html",
    "revision": "e42ddfd153a9a3baa1264f42c18aac40"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Data.html",
    "revision": "5f0e581590de0b307f1ec6a99d533c4e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Dynamic.html",
    "revision": "95c4e4519045797d3d20cfb4883e0b77"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Guard.html",
    "revision": "6d734d1819b5bc583f5a400d5ca10c07"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/History.html",
    "revision": "a1d4b9cf4ef4fcfdb135b63df6a395dc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/index.html",
    "revision": "a79615faab74c83c330a4be46501922e"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Lazy.html",
    "revision": "ef06b9aa51b0a37cd21cd92bd857a589"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Meta.html",
    "revision": "9192ec251cb5c27f74647eb4ecf057c1"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Nest.html",
    "revision": "2092558966abe0c34bc52e7aab5f5b68"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Params.html",
    "revision": "5f877c2feb030c43283de3563b19e701"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Redirect.html",
    "revision": "2a7b8c5c18712f70c988cabf8d1875b3"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Response.html",
    "revision": "ecc9bc571c3c56c28e428950af808b57"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/Scroll.html",
    "revision": "19fc4b510cc979ae9a0e05a97793dc7d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vue-router/View.html",
    "revision": "3414f7ada825206a365c25f78e4d6f44"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Action.html",
    "revision": "e23eac2400a57abde3bd73a36381d371"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Getter.html",
    "revision": "14d8d90e0ee257ed13c7a49b03c06547"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/index.html",
    "revision": "da46c29cbd867221c22c117d617b9cfc"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Module.html",
    "revision": "f54182b7551d7eeb576bba27d1dedda7"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Mutation.html",
    "revision": "4eecc996506bfb4c2798fbd04c7f172d"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/Namespace.html",
    "revision": "119633883b35045cb6535ea2f6a3626c"
  },
  {
    "url": "categories/front-end/vue/_books/vue/vuex/State.html",
    "revision": "88ed4c8d5b94d9f537b86b1ca72e76b1"
  },
  {
    "url": "categories/front-end/vue/_pages/CKEditor.html",
    "revision": "84aa9069c3fea07249756d8c1771edec"
  },
  {
    "url": "categories/front-end/vue/_pages/Element_UI_Tree.html",
    "revision": "5567234a9a17c21281295f920d1e6b42"
  },
  {
    "url": "categories/front-end/vue/_pages/Flexible.html",
    "revision": "f3952a338ecf58f558c4a0b8b6864215"
  },
  {
    "url": "categories/front-end/vue/_pages/Loading.html",
    "revision": "aad7decdb4b3c605e7850d76ec985d4f"
  },
  {
    "url": "categories/front-end/vue/_pages/LongPress.html",
    "revision": "776bd87b426b2eec5abce82c82a32f9f"
  },
  {
    "url": "categories/front-end/vue/_pages/Typescript_with_Vue.html",
    "revision": "d735e97d262c2d3350b1fd5d7bc9a46b"
  },
  {
    "url": "categories/front-end/vue/index.html",
    "revision": "e492815bae7960a5677a5684c05d00e1"
  },
  {
    "url": "categories/front-end/weex/_pages/Install.html",
    "revision": "6c6fd19b650a4912308e4cbfd8fc2c43"
  },
  {
    "url": "categories/front-end/weex/index.html",
    "revision": "b248a1340dc2a9af98f640c9c3f242e1"
  },
  {
    "url": "categories/index.html",
    "revision": "f4597b287398757e95698a5cc237bf42"
  },
  {
    "url": "categories/java/_books/java/index.html",
    "revision": "4f9fb9e7fd785cc19dfe2ede41167824"
  },
  {
    "url": "categories/java/_books/java/Install.html",
    "revision": "bac381558d906338329e02d3f46b1f6c"
  },
  {
    "url": "categories/java/_books/java/reference.html",
    "revision": "7086f85a7d57926bb8164810b04b2ba2"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Annotation.html",
    "revision": "997215433220bcff0f81d28d86a5d26d"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Controller.html",
    "revision": "3fa431b6031785d91d00b4cc1e7a58de"
  },
  {
    "url": "categories/java/_books/springBoot/basis/HttpClient.html",
    "revision": "8ba98eaa980e2ed1b98ac7938fe077f7"
  },
  {
    "url": "categories/java/_books/springBoot/basis/Scheduler.html",
    "revision": "b86a04de9c53e86d7843042c0932ddde"
  },
  {
    "url": "categories/java/_books/springBoot/basis/UnitTest.html",
    "revision": "96093f277dba421b19dbf31e08e904fb"
  },
  {
    "url": "categories/java/_books/springBoot/config/Cors.html",
    "revision": "b04e24f5c148b2930e6e26474d4b35bc"
  },
  {
    "url": "categories/java/_books/springBoot/config/Hot_Update.html",
    "revision": "a7c0d9d800650f961fa3593e184e761f"
  },
  {
    "url": "categories/java/_books/springBoot/config/index.html",
    "revision": "23378fcd0cc8b2f1420d290f442fb7e7"
  },
  {
    "url": "categories/java/_books/springBoot/config/Log.html",
    "revision": "db6a4eecedc7db33039758d794503495"
  },
  {
    "url": "categories/java/_books/springBoot/config/No_Banner.html",
    "revision": "08e273cf70d3746542453f5507ea6008"
  },
  {
    "url": "categories/java/_books/springBoot/config/Package.html",
    "revision": "b8be72de52173c24d793565fc368666a"
  },
  {
    "url": "categories/java/_books/springBoot/config/Structure.html",
    "revision": "eb3ccd17a2c9ea3932d33cca134279aa"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus_Usage.html",
    "revision": "d784cccb2f871e0f70191f44a4709888"
  },
  {
    "url": "categories/java/_books/springBoot/database/MybatisPlus.html",
    "revision": "593fa40f4db1bd01e4e9d0200c2133c4"
  },
  {
    "url": "categories/java/_books/springBoot/database/Redis_Usage.html",
    "revision": "04382a3228596a81fa3e18a48abdac29"
  },
  {
    "url": "categories/java/_books/springBoot/index.html",
    "revision": "68d3eaa10a7564d3717bf77f3a4f0136"
  },
  {
    "url": "categories/java/_books/springBoot/Install.html",
    "revision": "ea8383487c4a4cef350462106d62b734"
  },
  {
    "url": "categories/java/_books/springBoot/Intro.html",
    "revision": "331b0c369f21e63759d7c0bdf127b5bf"
  },
  {
    "url": "categories/java/_pages/JDK_Install.html",
    "revision": "0739cbd9b674193bb98e60d55f5ab009"
  },
  {
    "url": "categories/java/_pages/JSONObject.html",
    "revision": "25447d7a453d8403e338effad778fa1b"
  },
  {
    "url": "categories/java/_pages/Lombok.html",
    "revision": "c2ffeb9a28d18bae130accb0824d944a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ac3cdb4bde455186e40a181a8fa9f3e2"
  },
  {
    "url": "categories/mysql/_pages/Charset.html",
    "revision": "b6312232bd1543bbfae1b84fead984ee"
  },
  {
    "url": "categories/mysql/_pages/Command_Line.html",
    "revision": "9807e8bfe9286030530d90ca40ac130a"
  },
  {
    "url": "categories/mysql/_pages/Common_SQL.html",
    "revision": "09209bd595224f749e9d71f8409e0c1c"
  },
  {
    "url": "categories/mysql/_pages/Create_Table.html",
    "revision": "a27fb5b4e64b488c6c6b297afec46876"
  },
  {
    "url": "categories/mysql/_pages/DataType.html",
    "revision": "493f74da8bb84d46405349501489ad9f"
  },
  {
    "url": "categories/mysql/_pages/Delete_Drop_Truncate.html",
    "revision": "1b0eb518277bbce533fbc56563399dc6"
  },
  {
    "url": "categories/mysql/_pages/Function.html",
    "revision": "9d21af684b0b9180bbf27f4fd0573a74"
  },
  {
    "url": "categories/mysql/_pages/Join.html",
    "revision": "179fec2bbf2155834e6e8d7bab4c8486"
  },
  {
    "url": "categories/mysql/_pages/Limit.html",
    "revision": "71ba79024ade86fc9e25035fcc2d49b6"
  },
  {
    "url": "categories/mysql/_pages/Model.html",
    "revision": "e5bc8437387bf30a16879b41be4615a4"
  },
  {
    "url": "categories/mysql/_pages/Procedure.html",
    "revision": "11bf468654890656b5c2e49248a35db3"
  },
  {
    "url": "categories/mysql/_pages/Transaction.html",
    "revision": "8c7bac944bcb2d7b9a4e2faf4a4cdf26"
  },
  {
    "url": "categories/mysql/_pages/View.html",
    "revision": "4466a14affb47e95f62ff6612afdfb32"
  },
  {
    "url": "categories/mysql/index.html",
    "revision": "7a50a45b81f34d9e7521228a92520a85"
  },
  {
    "url": "categories/nodejs/_books/egg/Basis.html",
    "revision": "53edee3b224a157607a58dece84d69a8"
  },
  {
    "url": "categories/nodejs/_books/egg/Config.html",
    "revision": "ec7112fc4e4fda4de65f261a37c46580"
  },
  {
    "url": "categories/nodejs/_books/egg/Controller.html",
    "revision": "e130d0bc220926f3147d09243a08caf0"
  },
  {
    "url": "categories/nodejs/_books/egg/Cors.html",
    "revision": "1ce0f0f3b377fe1a5a7397a64c67424c"
  },
  {
    "url": "categories/nodejs/_books/egg/CURL.html",
    "revision": "32218a2f399e9e4d413c02fdab66cfdb"
  },
  {
    "url": "categories/nodejs/_books/egg/Extension.html",
    "revision": "3fd5509f4e6d589e47738a4a324bd147"
  },
  {
    "url": "categories/nodejs/_books/egg/index.html",
    "revision": "db10de6e003d9be613be317dc358d441"
  },
  {
    "url": "categories/nodejs/_books/egg/Inner_Object.html",
    "revision": "63014c8d287a8162043da7d3642c701b"
  },
  {
    "url": "categories/nodejs/_books/egg/Install.html",
    "revision": "08012ec187948ac24395d523e7f25912"
  },
  {
    "url": "categories/nodejs/_books/egg/Intro.html",
    "revision": "cbfae4188ddbd061ddd7168a8d1acd1a"
  },
  {
    "url": "categories/nodejs/_books/egg/Log.html",
    "revision": "00f87234f90c96c7187ab455048e79b6"
  },
  {
    "url": "categories/nodejs/_books/egg/Middleware.html",
    "revision": "4361bb21f7e005f27c023bec1191f463"
  },
  {
    "url": "categories/nodejs/_books/egg/MySQL.html",
    "revision": "0d7c9e228c470b6e83e02dcad71d399b"
  },
  {
    "url": "categories/nodejs/_books/egg/Passport.html",
    "revision": "b865c00b7de54a2cdaa04b7f7b64fdd6"
  },
  {
    "url": "categories/nodejs/_books/egg/Plugin.html",
    "revision": "8065a96a4a48292df87d7da4295c4bff"
  },
  {
    "url": "categories/nodejs/_books/egg/Router.html",
    "revision": "75247a6cd7e4f4486f241b6a1a02d105"
  },
  {
    "url": "categories/nodejs/_books/egg/Schedule.html",
    "revision": "e65b9c03ff0d6933031ae04cf7ff5f35"
  },
  {
    "url": "categories/nodejs/_books/egg/Security.html",
    "revision": "0c66ae82c82009009bd1141ddd78b6cf"
  },
  {
    "url": "categories/nodejs/_books/egg/Sequelize.html",
    "revision": "efe05c13a18d98d71b9fe61b5ff60328"
  },
  {
    "url": "categories/nodejs/_books/egg/Service.html",
    "revision": "500b1b5e6a393c3241ebc39ff0dae057"
  },
  {
    "url": "categories/nodejs/_books/egg/Socket_io.html",
    "revision": "59fe5f24ca0345eff0f91764ba511370"
  },
  {
    "url": "categories/nodejs/_books/egg/Solution.html",
    "revision": "b7f55addd478030b16033aa518da7973"
  },
  {
    "url": "categories/nodejs/_books/egg/Upload.html",
    "revision": "28bc8fcdd269c21d92ff50c8a8fcf04e"
  },
  {
    "url": "categories/nodejs/_books/egg/Validate.html",
    "revision": "32fe815e61ef8dadd37a6e88516461d0"
  },
  {
    "url": "categories/nodejs/_books/egg/View.html",
    "revision": "adab5503fdace2a90e9d769f3ebfeaa4"
  },
  {
    "url": "categories/nodejs/_books/express/Cookie_Session.html",
    "revision": "040d62fd4bc0ea0127e35f39caf07c39"
  },
  {
    "url": "categories/nodejs/_books/express/Debug.html",
    "revision": "9a1840dc9c56a5dd284b32dbd452d63d"
  },
  {
    "url": "categories/nodejs/_books/express/index.html",
    "revision": "003ebf406a02b4859fdb2ac1ca61e75f"
  },
  {
    "url": "categories/nodejs/_books/express/Install.html",
    "revision": "73bcee6d337beaef68f1f3525914a1e1"
  },
  {
    "url": "categories/nodejs/_books/express/Intro.html",
    "revision": "deab68c579a840e446fa46e937b602fe"
  },
  {
    "url": "categories/nodejs/_books/express/Middleware.html",
    "revision": "916ff281a9c044407564b6c39467ade1"
  },
  {
    "url": "categories/nodejs/_books/express/MySQL.html",
    "revision": "bad6b766c362a64ef5ad356ebdf246cf"
  },
  {
    "url": "categories/nodejs/_books/express/Proxy.html",
    "revision": "723425a14d5edb0a338781fce1f7cd51"
  },
  {
    "url": "categories/nodejs/_books/express/Req_Res.html",
    "revision": "8572337fa372f4374078c6c9b17b3ac3"
  },
  {
    "url": "categories/nodejs/_books/express/Router.html",
    "revision": "cc4b0212e1cf966c68c13e9ed05cf7dc"
  },
  {
    "url": "categories/nodejs/_books/express/Static.html",
    "revision": "aa4bce987273d0b538a7918ad0903560"
  },
  {
    "url": "categories/nodejs/_books/express/Structure.html",
    "revision": "9bdad4a0169890fee6386610d0b0c594"
  },
  {
    "url": "categories/nodejs/_books/express/Template.html",
    "revision": "ec1d2b317e0b68cc637e494f54866c31"
  },
  {
    "url": "categories/nodejs/_books/express/Upload.html",
    "revision": "f403bbe8a03bc871c0ae2e8230da3dd9"
  },
  {
    "url": "categories/nodejs/_books/koa/Cookie_Session.html",
    "revision": "796710d487d3a380f71d9c7059a03923"
  },
  {
    "url": "categories/nodejs/_books/koa/CORS.html",
    "revision": "d6e5b96a771003782a645fc2481b63fb"
  },
  {
    "url": "categories/nodejs/_books/koa/Exception.html",
    "revision": "e0b437373c45b16308f6437e2dee5327"
  },
  {
    "url": "categories/nodejs/_books/koa/index.html",
    "revision": "91b0a95b4a4bbcc3cad2f6147abdb5ea"
  },
  {
    "url": "categories/nodejs/_books/koa/Install.html",
    "revision": "e8e66ef5a1ac31edd10e161de3419fe8"
  },
  {
    "url": "categories/nodejs/_books/koa/Intro.html",
    "revision": "ad41bd78e0642ca3becaabc2819acd0d"
  },
  {
    "url": "categories/nodejs/_books/koa/Log.html",
    "revision": "e12cc222a4686935eb33192feb4fabc3"
  },
  {
    "url": "categories/nodejs/_books/koa/Middleware.html",
    "revision": "da6eddf35db46d3d8bc7c6dd3c8b26d5"
  },
  {
    "url": "categories/nodejs/_books/koa/Nodemon.html",
    "revision": "600c985f97170b2b9459998ddb1d1b8d"
  },
  {
    "url": "categories/nodejs/_books/koa/Req_Res.html",
    "revision": "5976c677bf2e6e2d4e94577a2335c861"
  },
  {
    "url": "categories/nodejs/_books/koa/Route.html",
    "revision": "63fbd9f29f8f8879cb70e81bbe46e7f4"
  },
  {
    "url": "categories/nodejs/_books/koa/Sequelize.html",
    "revision": "c0e6dccb3611050714e28a80e28e0894"
  },
  {
    "url": "categories/nodejs/_books/koa/Static.html",
    "revision": "d141cebadaf874f689b1bf04b68a73a1"
  },
  {
    "url": "categories/nodejs/_books/koa/Template.html",
    "revision": "2d68baae9022edcaad9734f2a8e47de4"
  },
  {
    "url": "categories/nodejs/_books/node/Class_Object.html",
    "revision": "492c9b5297afe6f5403cd0ac77398f00"
  },
  {
    "url": "categories/nodejs/_books/node/Database.html",
    "revision": "5b57bfe99089122fe1c200cfc69b0c6f"
  },
  {
    "url": "categories/nodejs/_books/node/Flow.html",
    "revision": "e807daa125a1bd64bc49c4101bf095f7"
  },
  {
    "url": "categories/nodejs/_books/node/Function.html",
    "revision": "64634209451d465d23a4d8543737f68b"
  },
  {
    "url": "categories/nodejs/_books/node/HTTP.html",
    "revision": "ae8308dd8cdf5eb3aa96152276fa8667"
  },
  {
    "url": "categories/nodejs/_books/node/index.html",
    "revision": "31ce7ff1b3d18e4465aada711b21cab0"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Console.html",
    "revision": "a853664b0e23d03e5c976cb5fc41b05b"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Crypto.html",
    "revision": "3d12e23f85eeac782fe38550adcbce3a"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Global.html",
    "revision": "d84022cf5b034ef91cfac89d13490c90"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Module_Process.html",
    "revision": "f7517a48b0512144c9d547a946284466"
  },
  {
    "url": "categories/nodejs/_books/node/Inner_Object.html",
    "revision": "c7e29556a96061e7a3895cfba185eab0"
  },
  {
    "url": "categories/nodejs/_books/node/Install.html",
    "revision": "d766f71f5da8021814d24b388df91b28"
  },
  {
    "url": "categories/nodejs/_books/node/Intro.html",
    "revision": "5b3cf9edf2ba611b6559987171dcc7b8"
  },
  {
    "url": "categories/nodejs/_books/node/IO.html",
    "revision": "4a2b4af6f0b14d6019fe9f19d503a390"
  },
  {
    "url": "categories/nodejs/_books/node/Module.html",
    "revision": "750d1d24b4e61e0f988d99438681b5f3"
  },
  {
    "url": "categories/nodejs/_books/node/Operator.html",
    "revision": "daafeac43b9b03360ad0891931c6834b"
  },
  {
    "url": "categories/nodejs/_books/node/Reference.html",
    "revision": "1a42eadfcf4ab139ee2eb4ddd6ec79da"
  },
  {
    "url": "categories/nodejs/_books/node/Scope.html",
    "revision": "a7c16d4df4709b8c3602ef036305bbec"
  },
  {
    "url": "categories/nodejs/_books/node/This.html",
    "revision": "2359faddada34131c8ff0ad9e7ed6a92"
  },
  {
    "url": "categories/nodejs/_books/node/Type.html",
    "revision": "edd06831d164d5b1abf23e4c8e1674aa"
  },
  {
    "url": "categories/nodejs/_books/node/Variable.html",
    "revision": "9a9dbb1e68d5ab70d107b667985141bf"
  },
  {
    "url": "categories/nodejs/_books/node/Versions.html",
    "revision": "d7b5d7dae8498758a9fbc586311b39e8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Model.html",
    "revision": "c40ea5045eba7139a81bd239cb009c28"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Class_Sequelize.html",
    "revision": "d90fa8389c829e337802fd633a146d15"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Connection.html",
    "revision": "dfdd98254327ff07697712c6e47cc1c0"
  },
  {
    "url": "categories/nodejs/_books/sequelize/index.html",
    "revision": "d0ab6c7e706a21a846b08e25b73b99fb"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Install.html",
    "revision": "b74a2db3acf060d601e3340bc0015083"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Intro.html",
    "revision": "a5cacbef185a54ab2dc2cc3bee74fa3b"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model_Options.html",
    "revision": "57bcf1a8a14dbf427ae550c88924282a"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Model.html",
    "revision": "875e2940878971c4fc9c8e890b43dac8"
  },
  {
    "url": "categories/nodejs/_books/sequelize/Query.html",
    "revision": "a16daabde8efdc19387654867e44a9d2"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Boardcast.html",
    "revision": "395f1c82a2c0445d669149fe69864e96"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Engine.io.html",
    "revision": "625f9d65251fdb272c14687eccc5fa6f"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Eventsource.html",
    "revision": "7683f4fb2f8f0f00f6999edf5a56aca0"
  },
  {
    "url": "categories/nodejs/_books/socket.io/index.html",
    "revision": "aa1550043844525fe979ecf076d8492d"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Install.html",
    "revision": "bed9a4c7ea006596d7ce494f8cb6e435"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Intro.html",
    "revision": "da30e9ef835c05fb7b7f3b7be413632c"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Namespace.html",
    "revision": "65a0d55c3a5a18092b51d6fd89c16d76"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Reference.html",
    "revision": "a9f47c13e71dd658010c6d18aceefcbd"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Send.html",
    "revision": "355a5922733ff37827c735b1ff79b9a9"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Service.html",
    "revision": "2206413a92c978cabf72f910090f5dfc"
  },
  {
    "url": "categories/nodejs/_books/socket.io/Websocket.html",
    "revision": "3333a5acce8c168889f37a41509ee189"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Issue.html",
    "revision": "b38706cc8e7fdfbe6fd6da1b9f671602"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Node_Origin.html",
    "revision": "b940297716c1e0a8985ace5d7faffa4b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Npm_and_Yarn.html",
    "revision": "c8b945f037f19a2691bf9abccddd266b"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Package_Management_Compare.html",
    "revision": "481085a5c05af1eb9a791aab9f2d0f77"
  },
  {
    "url": "categories/nodejs/_pages/包管理/Pubilsh_Npm.html",
    "revision": "993f4c89c26ee51e2086f6dde1c05e43"
  },
  {
    "url": "categories/nodejs/index.html",
    "revision": "5f48b5b6ef015011a302e7b2a2042234"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Hexo.html",
    "revision": "a0f2b41117b95e54d32cd6880154afbb"
  },
  {
    "url": "categories/notes/_pages/Blog_with_Vuepress.html",
    "revision": "9a24f7ff93bc26843e14f42b8c1eefec"
  },
  {
    "url": "categories/notes/_pages/Free_SSL.html",
    "revision": "95dab0d96c1bf26d7ca3f1899ad77cb8"
  },
  {
    "url": "categories/notes/_pages/Interactive_Command_Line.html",
    "revision": "d574d862b4e41543fd2584984a6a7fc6"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "1a81c5a9ce100c73e3853df5b908757f"
  },
  {
    "url": "categories/os/index.html",
    "revision": "6abccabec7218aac1fda8c4179ffb947"
  },
  {
    "url": "categories/os/linux/_pages/Certificate.html",
    "revision": "5c0e79672df4b877dfcf0177878d62f6"
  },
  {
    "url": "categories/os/linux/_pages/Command.html",
    "revision": "9a3e567bacbbd8cb0ca29ff0c5916891"
  },
  {
    "url": "categories/os/linux/_pages/Config.html",
    "revision": "2c3f6401e6a56b8aeaf69a86e7e89d6d"
  },
  {
    "url": "categories/os/linux/_pages/Cpp.html",
    "revision": "a8de46f24a66b19bb610c8a38a896346"
  },
  {
    "url": "categories/os/linux/_pages/Disk_and_Mount.html",
    "revision": "8e797625134c4614d9ca5d63bf59b42b"
  },
  {
    "url": "categories/os/linux/_pages/Firewall.html",
    "revision": "7908a86548d19278c06d70319fd24c3a"
  },
  {
    "url": "categories/os/linux/_pages/Install.html",
    "revision": "5a4e6452791e18ebacc118513ba1610a"
  },
  {
    "url": "categories/os/linux/_pages/Intro.html",
    "revision": "eaf23e66686fdc62d1c69d57701e7b1b"
  },
  {
    "url": "categories/os/linux/_pages/kali/Nmap.html",
    "revision": "7f252eb436fa33853c6959453f3e2a89"
  },
  {
    "url": "categories/os/linux/_pages/kali/漏洞扫描.html",
    "revision": "f25cbfcb1cda4e919b3e687b53be68db"
  },
  {
    "url": "categories/os/linux/_pages/Network.html",
    "revision": "56f71cd18dfd63280bb8a2781e2e1f57"
  },
  {
    "url": "categories/os/linux/_pages/Oh_My_ZSH.html",
    "revision": "46412825604653e091dabb355292023a"
  },
  {
    "url": "categories/os/linux/_pages/Pipe.html",
    "revision": "5efafcdf0c99343ae6e721d345b561f6"
  },
  {
    "url": "categories/os/linux/_pages/Process.html",
    "revision": "0b82f260af37e9c67bf54ef98e6b2fdc"
  },
  {
    "url": "categories/os/linux/_pages/Python.html",
    "revision": "f9adc9ebf3f2993686200a77d03f3fec"
  },
  {
    "url": "categories/os/linux/_pages/Request.html",
    "revision": "777b7ad31f76de774075259d98c65942"
  },
  {
    "url": "categories/os/linux/_pages/RM_Trash.html",
    "revision": "855928da9852f6d95bffce71385fcdf0"
  },
  {
    "url": "categories/os/linux/_pages/Search.html",
    "revision": "7e4ae898cdff3bdbf658d8ab74a3096b"
  },
  {
    "url": "categories/os/linux/_pages/Shell.html",
    "revision": "95bfa6393f3d71810a674e5a5ee41159"
  },
  {
    "url": "categories/os/linux/_pages/Source.html",
    "revision": "4de37e0072d41880afe711be9e863059"
  },
  {
    "url": "categories/os/linux/_pages/SSH_Login.html",
    "revision": "7095f04ad9d786032dd8b636af2d80a1"
  },
  {
    "url": "categories/os/linux/_pages/Ubuntu_Install_Notice.html",
    "revision": "c6cdb98c3fee4c16d12a3bad0ee7cc2c"
  },
  {
    "url": "categories/os/linux/_pages/Upload_and_Download.html",
    "revision": "933d3fe5848c2745bffa9a7984072356"
  },
  {
    "url": "categories/os/linux/_pages/User_Authority.html",
    "revision": "afe912e6ba6d38c6f0a658c1a4af6321"
  },
  {
    "url": "categories/os/linux/_pages/Vim.html",
    "revision": "227a2c2ef43f73b20ce76f3ad75603e5"
  },
  {
    "url": "categories/os/linux/index.html",
    "revision": "bd4da2bb4124189318f99670c5122dda"
  },
  {
    "url": "categories/os/macOS/_pages/Feature_and_Skill.html",
    "revision": "4fb48ac69c2fd958170c9271865f4a00"
  },
  {
    "url": "categories/os/macOS/_pages/Launchctl.html",
    "revision": "a4da1be8d90f7e89972fdb65ed2ff01e"
  },
  {
    "url": "categories/os/macOS/_pages/MacOSX_Environment.html",
    "revision": "ed07e9db712d5a3da7090522f6e871db"
  },
  {
    "url": "categories/os/macOS/_pages/Shortcuts.html",
    "revision": "85a5cbf8707751fdeeeb49c8a2f38b14"
  },
  {
    "url": "categories/os/macOS/_pages/SSH.html",
    "revision": "9b1e74f900379e27f500cf442054af51"
  },
  {
    "url": "categories/os/macOS/index.html",
    "revision": "21f56ae8dba21ebd66141c8f89811fa1"
  },
  {
    "url": "categories/os/windows/_pages/Alias.html",
    "revision": "ef8cdd315d1168621102db3d172bf292"
  },
  {
    "url": "categories/os/windows/_pages/Feature_and_Skill.html",
    "revision": "e5356d34e4ad6ce6814e171dad5ad906"
  },
  {
    "url": "categories/os/windows/_pages/Log.html",
    "revision": "047f80620890dad4c33bf83d650e55b1"
  },
  {
    "url": "categories/os/windows/_pages/Regedit.html",
    "revision": "c2dcb9731a37034c8e7f600297ed640c"
  },
  {
    "url": "categories/os/windows/_pages/Shortcuts.html",
    "revision": "9ef23657f8ecc87fbd3b07213695250a"
  },
  {
    "url": "categories/os/windows/_pages/WSL.html",
    "revision": "e789f8ebac1808f6883228e641b46395"
  },
  {
    "url": "categories/os/windows/index.html",
    "revision": "16247dfa0bf2776ff2a3d014d4dc1549"
  },
  {
    "url": "categories/php/_books/php/advance/Cookie.html",
    "revision": "350ec0bb8aafa1245da6a4d82f6fc248"
  },
  {
    "url": "categories/php/_books/php/advance/Error.html",
    "revision": "c4a3893ec1ad1fb86fd80f56f9d58572"
  },
  {
    "url": "categories/php/_books/php/advance/Exception.html",
    "revision": "be415565873d69ffff3047dea6ec94f4"
  },
  {
    "url": "categories/php/_books/php/advance/File.html",
    "revision": "b57e2c6b39cecba7f140bc6fd708da0b"
  },
  {
    "url": "categories/php/_books/php/advance/Form.html",
    "revision": "d4fedb5ee28328b76a5a0f3e3c29de20"
  },
  {
    "url": "categories/php/_books/php/advance/Origin.html",
    "revision": "99c80c2e1cfa4a82368e1da020638c6d"
  },
  {
    "url": "categories/php/_books/php/advance/Request.html",
    "revision": "a5fba5e403d8c4af133849cf1b7fd2b6"
  },
  {
    "url": "categories/php/_books/php/advance/Session.html",
    "revision": "d2f30ff3a3bdfe7433a390bbc2c6aa17"
  },
  {
    "url": "categories/php/_books/php/basis/Array.html",
    "revision": "76e1815f948a0aa6ecb0813be895f214"
  },
  {
    "url": "categories/php/_books/php/basis/Comment.html",
    "revision": "6a11ae4fb7ff840bf999ec56861e59c9"
  },
  {
    "url": "categories/php/_books/php/basis/Constant.html",
    "revision": "43d6423bda31f137462b17c4e7867f1f"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Circulation.html",
    "revision": "204e1ecf693582f7561f417bcd2bc53e"
  },
  {
    "url": "categories/php/_books/php/basis/Control_Flow_Condition.html",
    "revision": "37d0d095f8f0b4dd6f7433f059ecb3c1"
  },
  {
    "url": "categories/php/_books/php/basis/Function.html",
    "revision": "2deda72007fa8f29a49a75133eee0fac"
  },
  {
    "url": "categories/php/_books/php/basis/Magic_Constant.html",
    "revision": "27670baf706ea26a385fdf00959d81aa"
  },
  {
    "url": "categories/php/_books/php/basis/Operatior.html",
    "revision": "99da94a69316ed55007b8e02e7141d9c"
  },
  {
    "url": "categories/php/_books/php/basis/Output.html",
    "revision": "3a6bc1053ed85bc2eaa00ffa1fcdb713"
  },
  {
    "url": "categories/php/_books/php/basis/String.html",
    "revision": "37700bb9aeb6bd48cd97310dd74a1cb9"
  },
  {
    "url": "categories/php/_books/php/basis/Super_Globals.html",
    "revision": "705e97353da04862af42f05c9b28b862"
  },
  {
    "url": "categories/php/_books/php/basis/Types.html",
    "revision": "83ebadb6bfe6db955ae1c203187a931c"
  },
  {
    "url": "categories/php/_books/php/basis/Variable.html",
    "revision": "e0ff00fa4e6227c0b0fbca3cbcf1172d"
  },
  {
    "url": "categories/php/_books/php/index.html",
    "revision": "212f9677c3bece5fed00ccd56777295f"
  },
  {
    "url": "categories/php/_books/php/inner_module/Datetime.html",
    "revision": "c5bac72e1292d6aa8668de68de0eb58f"
  },
  {
    "url": "categories/php/_books/php/inner_module/Fs.html",
    "revision": "8c72766d0a4691ae3b55e6c3b9fc5fa9"
  },
  {
    "url": "categories/php/_books/php/inner_module/JSON.html",
    "revision": "28aab9ee6bba296da3be243bc63d2066"
  },
  {
    "url": "categories/php/_books/php/inner_module/MySQL.html",
    "revision": "1704e91850bc8e5daa2feb3de5d2a2d3"
  },
  {
    "url": "categories/php/_books/php/Install.html",
    "revision": "9832da0115c9ea99eca94c88f5be2bed"
  },
  {
    "url": "categories/php/_books/php/Intro.html",
    "revision": "979daeb398916c914e7115c1d1077231"
  },
  {
    "url": "categories/php/_books/php/module/Include.html",
    "revision": "2a1a897d2653f776f67416c7f8928cb1"
  },
  {
    "url": "categories/php/_books/php/module/Module.html",
    "revision": "286a27dde4e10b8f77c5de0ff3080039"
  },
  {
    "url": "categories/php/_books/php/module/Namespace.html",
    "revision": "ed5115cbb7ab3a4d3fc1ca69895229c0"
  },
  {
    "url": "categories/php/_books/php/oo/Abstract_Class.html",
    "revision": "077f727be8ee841c7faa6dade3cd4792"
  },
  {
    "url": "categories/php/_books/php/oo/Inherit.html",
    "revision": "4ab6def5b2bdc6cc9ae6495618795c5a"
  },
  {
    "url": "categories/php/_books/php/oo/Interface.html",
    "revision": "d296a33bf982ea76d51c118308208f01"
  },
  {
    "url": "categories/php/_books/php/oo/Object_Oriented.html",
    "revision": "03d2bb6964d1be8064b043ff815e2f36"
  },
  {
    "url": "categories/php/_books/php/oo/Train.html",
    "revision": "ec10a5ad74d3f02f7e9855a64bb7fde9"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Container.html",
    "revision": "da1f780343adf50a3d7913ddfdaa3411"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Facade.html",
    "revision": "0814e57e74056a167143acc2c5e71d08"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Inject.html",
    "revision": "c2b5142f3a75043db4d2dc856bd9e573"
  },
  {
    "url": "categories/php/_books/thinkphp/basis/Namespace.html",
    "revision": "91163bbe276d72b03b7045d4d90d4cb4"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Detail.html",
    "revision": "fa45a57166228e71d21a2af5a6865583"
  },
  {
    "url": "categories/php/_books/thinkphp/config/Env.html",
    "revision": "8dbcd433d35a4cabcb8c30087b40865c"
  },
  {
    "url": "categories/php/_books/thinkphp/config/index.html",
    "revision": "7ccaef9a61d7f80aab00658bbd9e4c0f"
  },
  {
    "url": "categories/php/_books/thinkphp/controller/index.html",
    "revision": "5c3e02964e045631dc35726ece6d02de"
  },
  {
    "url": "categories/php/_books/thinkphp/database/CURD.html",
    "revision": "725e6b1c672269273639603d5ff0f127"
  },
  {
    "url": "categories/php/_books/thinkphp/database/index.html",
    "revision": "9114a94ad0eda9a1fba0122a70fa23d0"
  },
  {
    "url": "categories/php/_books/thinkphp/database/Query.html",
    "revision": "ffa85d28d3f07e26bedccd7c5179e9a9"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Composer.html",
    "revision": "2ee472f7e6e002b11d42cf7eb50bde93"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Function.html",
    "revision": "459cb6467f8b8a185c2ba104e04b151a"
  },
  {
    "url": "categories/php/_books/thinkphp/extend/Library.html",
    "revision": "ceadfea818bfff0c02b95dd5105b0eb8"
  },
  {
    "url": "categories/php/_books/thinkphp/index.html",
    "revision": "4b221dbc221f43826b7295a7baccb9da"
  },
  {
    "url": "categories/php/_books/thinkphp/Install.html",
    "revision": "41f30b5891de983a65abfbad8d322d9b"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Advance.html",
    "revision": "8572e6cdffccd6d45a1a4dcc6d1fea69"
  },
  {
    "url": "categories/php/_books/thinkphp/model/CURD.html",
    "revision": "7f2b07c24df7b8dc79ef6679f600c6d0"
  },
  {
    "url": "categories/php/_books/thinkphp/model/index.html",
    "revision": "cbcc747bfdba5d666432f96f4bdd6d74"
  },
  {
    "url": "categories/php/_books/thinkphp/model/Transform.html",
    "revision": "438c463a45955dc5df7b07bb7f8a3352"
  },
  {
    "url": "categories/php/_books/thinkphp/Reference.html",
    "revision": "7d3aed01d55165dd7b2e7331ec3486cd"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Assistant.html",
    "revision": "14e0737a3a3ea6004c9ffd4cbd22d8cb"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Console.html",
    "revision": "7d0b61e1ca827cec7c9d268f07f89253"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Constant.html",
    "revision": "43ec0d72c18f39c50246edb0757b9f7b"
  },
  {
    "url": "categories/php/_books/thinkphp/reference/Debug.html",
    "revision": "53332808fdcc6e781a30f32e0a39d63d"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Request.html",
    "revision": "dce8b2af819960e4311c930c79990987"
  },
  {
    "url": "categories/php/_books/thinkphp/req_res/Response.html",
    "revision": "41c9047a5e1f87624a4a797a2c7de80c"
  },
  {
    "url": "categories/php/_books/thinkphp/route/index.html",
    "revision": "80a45204ea1df551d28e71436db70d84"
  },
  {
    "url": "categories/php/_books/thinkphp/Server.html",
    "revision": "5b524577c42371d8e3bbfe12ff46f034"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/index.html",
    "revision": "06fe2b7120852983d78307500b149a98"
  },
  {
    "url": "categories/php/_books/thinkphp/validator/Rules.html",
    "revision": "78b83c632f724cd021c1d95a00dc73c3"
  },
  {
    "url": "categories/php/_books/thinkphp/view/index.html",
    "revision": "d7e88c9fc02073e7c4f0ca07ec70002c"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Static.html",
    "revision": "81d44fc9136ea56d473d875ca9b88252"
  },
  {
    "url": "categories/php/_books/thinkphp/view/Template.html",
    "revision": "2c776f6e3822197cff0fe4955a8006f1"
  },
  {
    "url": "categories/php/_pages/代码片段/Idcard.html",
    "revision": "6f4e680a784115280f88fffab575fb9d"
  },
  {
    "url": "categories/php/_pages/扩展/Composer.html",
    "revision": "a734a7db70169039024b7800c7874af6"
  },
  {
    "url": "categories/php/_pages/设计模式/Design_Pattern_Register_Tree.html",
    "revision": "1c80a45293ff3a4e0e6979d777f81086"
  },
  {
    "url": "categories/php/index.html",
    "revision": "b36fc0c366fdcd1ca8211e9d2bbdbecb"
  },
  {
    "url": "categories/python/_books/python_spider/Bs4.html",
    "revision": "6d07e540e99298775bf50d7be68eb96c"
  },
  {
    "url": "categories/python/_books/python_spider/index.html",
    "revision": "26381c6eb93e1001b3f00e05288da0a5"
  },
  {
    "url": "categories/python/_books/python_spider/Intro.html",
    "revision": "7b59abb0c81b7dfea177d8207b3e2dc1"
  },
  {
    "url": "categories/python/_books/python_spider/Pymysql.html",
    "revision": "40fd410082cf8e92801bc8b54397504a"
  },
  {
    "url": "categories/python/_books/python_spider/Re.html",
    "revision": "33afe87fc25cd511b4551be89b8fca34"
  },
  {
    "url": "categories/python/_books/python_spider/Reference.html",
    "revision": "eae6ca7af0002f15f7174f72b70336f0"
  },
  {
    "url": "categories/python/_books/python_spider/Requests.html",
    "revision": "5bf106a5913431706bb6fbbacc4c5b12"
  },
  {
    "url": "categories/python/_books/python_spider/Scarpy_Basis.html",
    "revision": "973379f38ede02bfee1db508e97d0591"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Command.html",
    "revision": "6664fd9fce71b0975ddde3ecbc3da2ba"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_File.html",
    "revision": "badc9b98d228fdac110419cacdcab4ce"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Image.html",
    "revision": "d97c9f25a8e432a95cfdefeb519e0d02"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Mysql.html",
    "revision": "c1a2c98853ff4ab3a81a98b89107ca8e"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Selector.html",
    "revision": "d894f37fadf712f7725230b443d7ea96"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy_Simple.html",
    "revision": "299945ad434e7f8379a6ddd217a7b5df"
  },
  {
    "url": "categories/python/_books/python_spider/Scrapy.html",
    "revision": "f466ee0dcf665688adda9de05090b986"
  },
  {
    "url": "categories/python/_books/python/advance/Generator_Expressions.html",
    "revision": "8432bce817723573f49015786e98da1f"
  },
  {
    "url": "categories/python/_books/python/advance/Generators.html",
    "revision": "5e2e373a7f31af85459d1ed2b373833f"
  },
  {
    "url": "categories/python/_books/python/advance/Iterators.html",
    "revision": "da3c210b060181d11240db13515fdf6d"
  },
  {
    "url": "categories/python/_books/python/advance/Slice.html",
    "revision": "1ec03e7bd6dc9c804b0bb66677e55d6f"
  },
  {
    "url": "categories/python/_books/python/basis/Comment.html",
    "revision": "6c97727c5ed7b5f0f30503002f448b40"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Circulation.html",
    "revision": "77bb802a98b20e8e04c17d8a8aa7a166"
  },
  {
    "url": "categories/python/_books/python/basis/Control_Flow_Condition.html",
    "revision": "f8b764d9b66fe01632580e2efdb9756b"
  },
  {
    "url": "categories/python/_books/python/basis/Input_Output.html",
    "revision": "2c6f716154d7d8b27a46de34c7de6a3b"
  },
  {
    "url": "categories/python/_books/python/basis/Reserved_Word.html",
    "revision": "57d34d321bd296eda200c445eb02cb46"
  },
  {
    "url": "categories/python/_books/python/basis/Variable_Constant.html",
    "revision": "f134b9a6e5a0175c02ea72c7ab0005b1"
  },
  {
    "url": "categories/python/_books/python/function/Build_In.html",
    "revision": "adf0d6f305d4aed93d0fe884be5cc9bc"
  },
  {
    "url": "categories/python/_books/python/function/Closure.html",
    "revision": "e1cd0545a32486b6768a910fbb5c7181"
  },
  {
    "url": "categories/python/_books/python/function/Decorator.html",
    "revision": "188d6896f462af4125565a35799821c9"
  },
  {
    "url": "categories/python/_books/python/function/Empty.html",
    "revision": "ed0e20c532e89336cc726ed821707f71"
  },
  {
    "url": "categories/python/_books/python/function/High_Level.html",
    "revision": "76eb4f2493997f0f3697e2f86c67e347"
  },
  {
    "url": "categories/python/_books/python/function/index.html",
    "revision": "65b5c91323fdb94baaa4dfd27f171069"
  },
  {
    "url": "categories/python/_books/python/function/Lambda.html",
    "revision": "2ba67d18b90655dd222afbb1a273fee6"
  },
  {
    "url": "categories/python/_books/python/function/Params.html",
    "revision": "2b531d529e11306b9b11625f8dee49ec"
  },
  {
    "url": "categories/python/_books/python/function/Partial.html",
    "revision": "77b758161082ac3d7a9426537f712daa"
  },
  {
    "url": "categories/python/_books/python/function/Recursion.html",
    "revision": "46e7e0da97068b9557922ce69df7a2ee"
  },
  {
    "url": "categories/python/_books/python/function/Return.html",
    "revision": "23e55e3e9be1c15c33875a89f73630f6"
  },
  {
    "url": "categories/python/_books/python/index.html",
    "revision": "14be19eb9495ed9f3ea25a3c645437a5"
  },
  {
    "url": "categories/python/_books/python/Install.html",
    "revision": "a6f7c502a77758dedc793a22ee0f2a43"
  },
  {
    "url": "categories/python/_books/python/Intro.html",
    "revision": "2714682a2a09079c3eaf892de57a635c"
  },
  {
    "url": "categories/python/_books/python/module/index.html",
    "revision": "9cbb47de8b743e22d8413e90b11b2cbb"
  },
  {
    "url": "categories/python/_books/python/module/IO.html",
    "revision": "99e6763bcbf7385d527572129814e832"
  },
  {
    "url": "categories/python/_books/python/module/MySQL.html",
    "revision": "3aedb0a6e2231104058f451abbf65b16"
  },
  {
    "url": "categories/python/_books/python/module/Other.html",
    "revision": "673d9ba4cfde530dc689a7aae1ee039e"
  },
  {
    "url": "categories/python/_books/python/module/Package.html",
    "revision": "1c31a4bad74034f23e9cdf385072f0ce"
  },
  {
    "url": "categories/python/_books/python/module/Regex.html",
    "revision": "2f6dc26e3da3ca513f65952e45a47b96"
  },
  {
    "url": "categories/python/_books/python/module/Socket.html",
    "revision": "16d8b905bee0786ce5bceab86a7556fd"
  },
  {
    "url": "categories/python/_books/python/module/System.html",
    "revision": "95b44014b1593e051148fb5821e1dbfe"
  },
  {
    "url": "categories/python/_books/python/module/Time.html",
    "revision": "46c68e104e47b82703d129098fb4d238"
  },
  {
    "url": "categories/python/_books/python/oo/index.html",
    "revision": "61919d0e9660a839609688af89893907"
  },
  {
    "url": "categories/python/_books/python/oo/Inherit.html",
    "revision": "bbabc9a78d346c38cd199d7fff8aaafd"
  },
  {
    "url": "categories/python/_books/python/oo/Polymorphic.html",
    "revision": "edbeb8d1d4056f21a6004718c35f09f2"
  },
  {
    "url": "categories/python/_books/python/types/Dict.html",
    "revision": "cbf2e3b5c76cb4a11ddba6eb215f2a6d"
  },
  {
    "url": "categories/python/_books/python/types/index.html",
    "revision": "368d3a893e9cd99c377de1a2fb0f2e56"
  },
  {
    "url": "categories/python/_books/python/types/List.html",
    "revision": "99e238f39f0bcfe24de867d316e103fd"
  },
  {
    "url": "categories/python/_books/python/types/Operator.html",
    "revision": "6a2aba027d5eedc4228579ab89030de8"
  },
  {
    "url": "categories/python/_books/python/types/Set.html",
    "revision": "0a1c78dadc84e190d893f5ae589c3b91"
  },
  {
    "url": "categories/python/_books/python/types/String.html",
    "revision": "b9fca452771b83830014f753d30eae9e"
  },
  {
    "url": "categories/python/_books/python/types/Tuple.html",
    "revision": "7fbbbb7413e3dcfb7b9924976abf54f0"
  },
  {
    "url": "categories/python/_books/python/Venv.html",
    "revision": "8979b4b266c68527562bb153cc723149"
  },
  {
    "url": "categories/python/index.html",
    "revision": "b0ee92be32e719822d751b0d335bf5f1"
  },
  {
    "url": "categories/solution/_pages/About_Split_Database.html",
    "revision": "43de60d2012bbdaee18a54746cbf9cbc"
  },
  {
    "url": "categories/solution/_pages/Cache.html",
    "revision": "5734ae67c1fab14b4d5831422606c89d"
  },
  {
    "url": "categories/solution/_pages/Database_Solution.html",
    "revision": "c8a16be4f5e713a9ae11f7eae1a099a4"
  },
  {
    "url": "categories/solution/_pages/Frontend_Solution.html",
    "revision": "c0c9e6c2fbf03ec79c7189cf3efd52b0"
  },
  {
    "url": "categories/solution/_pages/Iframe_Slide.html",
    "revision": "3320afdd8979692b600418fd1db379f3"
  },
  {
    "url": "categories/solution/_pages/NodeJS_Solution.html",
    "revision": "d76f471e8a2607e1512cf771b76bea53"
  },
  {
    "url": "categories/solution/_pages/PHP_Solution.html",
    "revision": "d7f40e4f3cf8be29895665696770be87"
  },
  {
    "url": "categories/solution/_pages/Uniapp_Solution.html",
    "revision": "25f2c8d88048c9056c12dfc98d2558ec"
  },
  {
    "url": "categories/solution/index.html",
    "revision": "105106613f446ae57c5d32f982cd0fa8"
  },
  {
    "url": "categories/system/_pages/The_evolution_of_large-scale_website_architecture.html",
    "revision": "0d97e6744545f031946833973fad0b0b"
  },
  {
    "url": "categories/system/_pages/What_Happens_from_Typing_a_URL_to_Loading_a_Page.html",
    "revision": "5b8e72af1df504d97dc4be5c62d07c00"
  },
  {
    "url": "categories/system/index.html",
    "revision": "6cd1b125e5f8d92c0622b88e60a84b1c"
  },
  {
    "url": "categories/technology/_pages/Adb.html",
    "revision": "a5db169997ee6ad600d395f5e6b3ba19"
  },
  {
    "url": "categories/technology/_pages/Git_Server.html",
    "revision": "e242de52be1cc90fb18c9961daab39d1"
  },
  {
    "url": "categories/technology/_pages/Git.html",
    "revision": "64b8f126f6595fdcc16a9c87875e5d45"
  },
  {
    "url": "categories/technology/_pages/Gitbook.html",
    "revision": "4bd072d69463a88068c71a482b719741"
  },
  {
    "url": "categories/technology/_pages/Markdown.html",
    "revision": "cc21bc9045e74b11bd2e45348cf9a4ec"
  },
  {
    "url": "categories/technology/_pages/MongoDB.html",
    "revision": "b498308be5e0f53788c0d177c085de30"
  },
  {
    "url": "categories/technology/_pages/MySQL.html",
    "revision": "8831475bc6e2db6db50d243a29063d5e"
  },
  {
    "url": "categories/technology/_pages/Nginx.html",
    "revision": "96bb770b70a1bdabb74060f84c527aaf"
  },
  {
    "url": "categories/technology/_pages/RabbitMQ.html",
    "revision": "106d43945aa109da68356315154b78f9"
  },
  {
    "url": "categories/technology/_pages/Redis.html",
    "revision": "358d551dae5e8d48d33647fd6d6c4c64"
  },
  {
    "url": "categories/technology/_pages/VirtualMachine.html",
    "revision": "c87bbef4e36ba11bd8305ed459b13737"
  },
  {
    "url": "categories/technology/_pages/Vsftpd.html",
    "revision": "0b4be533a4dc85f383dca970269d1ed2"
  },
  {
    "url": "categories/technology/index.html",
    "revision": "7c16efe95ccd914e0701f8e633d3735c"
  },
  {
    "url": "categories/tips/_pages/Batch_Download_TS.html",
    "revision": "03200718ec72ffd78a3c5b78fd7334f2"
  },
  {
    "url": "categories/tips/_pages/Chrome_Usage.html",
    "revision": "7f48aa9c100224645c74d1a822926ac3"
  },
  {
    "url": "categories/tips/_pages/NDS_Problem.html",
    "revision": "981dc08e25d96e13a1df19b2ecff08fe"
  },
  {
    "url": "categories/tips/_pages/WuliHub.html",
    "revision": "17c49b231cc94c74ca7fc17a31935f1a"
  },
  {
    "url": "categories/tips/index.html",
    "revision": "17bdc65c12d74e81af601f7bf3e9c7eb"
  },
  {
    "url": "categories/weixin/index.html",
    "revision": "72789cefc098861ce08b2f2efd45b572"
  },
  {
    "url": "categories/weixin/miniapp/Cookie.html",
    "revision": "b8d168227646991823140c4e5426ee5b"
  },
  {
    "url": "categories/weixin/miniapp/Login.html",
    "revision": "3560a917a7ca5e1b2e7805bb1bd1994c"
  },
  {
    "url": "categories/weixin/miniapp/Navigate.html",
    "revision": "fb59b3cf03eb5912eaaafbbb288749c8"
  },
  {
    "url": "categories/weixin/miniapp/Picker.html",
    "revision": "4040ec49df9ccd008f5eb80bfb5f108d"
  },
  {
    "url": "categories/weixin/miniapp/Reference.html",
    "revision": "2bf5fdeb2e1d66f07c5e9e292d4c5d7e"
  },
  {
    "url": "categories/weixin/miniapp/Route.html",
    "revision": "d61022ee06f7881cec87499dac3d3dfc"
  },
  {
    "url": "categories/weixin/miniapp/Textarea.html",
    "revision": "017e327b1b431cdcc0a4b814f9f3c55a"
  },
  {
    "url": "favorite/docs/Collection_Tools.html",
    "revision": "5bec3d021194dbd6c405d6ec98ec1400"
  },
  {
    "url": "favorite/docs/Collection/Common.html",
    "revision": "8d78e2198e447e0cd2c7451731fc60ff"
  },
  {
    "url": "favorite/docs/Collection/Cross.html",
    "revision": "2b885609237fccc921e76d8f80361cf1"
  },
  {
    "url": "favorite/docs/Collection/Entertainment.html",
    "revision": "6e67805a6df94641e3eb309f00d2def8"
  },
  {
    "url": "favorite/docs/Collection/Framework.html",
    "revision": "a9044395ac0704ce4ecf4885c90e140c"
  },
  {
    "url": "favorite/docs/Collection/Frontend.html",
    "revision": "f60f7293860010e25805f332243a16be"
  },
  {
    "url": "favorite/docs/Collection/JAVA.html",
    "revision": "b92eaeb66ea5ddc59b22abe53c0e5bf1"
  },
  {
    "url": "favorite/docs/Collection/ReactNative.html",
    "revision": "00683009e19790a39e3d59241e648e62"
  },
  {
    "url": "favorite/docs/Collection/Services.html",
    "revision": "e5722deb747b7b14e44ad79319d29367"
  },
  {
    "url": "favorite/docs/Collection/System.html",
    "revision": "25d9bcd29588a1efbcdc04472a607ecd"
  },
  {
    "url": "favorite/docs/Collection/Vue.html",
    "revision": "a6cf24c0125c98a82c6565d35a7e33d3"
  },
  {
    "url": "favorite/docs/Plugins_Chrome.html",
    "revision": "14bc99c60be71638a7f3bee446c6d000"
  },
  {
    "url": "favorite/docs/Plugins_Greasy_Fork.html",
    "revision": "5a252b41870dd3f58e2f3baaddabc7e1"
  },
  {
    "url": "favorite/docs/Plugins_Markdown_It.html",
    "revision": "88d9d05e3aed5fdb490506e82db75746"
  },
  {
    "url": "favorite/docs/Software_Automation.html",
    "revision": "274a42b02fa94ab3d1c93abc2cbbea23"
  },
  {
    "url": "favorite/docs/Software_Editor.html",
    "revision": "5e3705f29bbf8cb248273ccf2e7e973c"
  },
  {
    "url": "favorite/docs/Software_MacOS.html",
    "revision": "27e0377d5570709682ed05ad669e4760"
  },
  {
    "url": "favorite/docs/Tools/Api_Doc.html",
    "revision": "349cbdd3d50aca51b58c942025310d0e"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Config.html",
    "revision": "3302a0b2c85f5f3f1cd6605648c7f079"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Control.html",
    "revision": "c4b34031b763c148fa97a99a52bf51f6"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Database.html",
    "revision": "02ec05ee97ddafd1bcff65652c5f9ed5"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Plugin.html",
    "revision": "a095dda6619c653b3fd025ec28346dc8"
  },
  {
    "url": "favorite/docs/Tools/Phpstorm/Usage.html",
    "revision": "40b414802319ae437dbb17e03968cbb6"
  },
  {
    "url": "favorite/docs/Tools/Tools_to_Improve_Efficiency.html",
    "revision": "0e7fa5887824ce6333541cd133e9e4b6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Config.html",
    "revision": "bf212900ba796b31173bcf33cdf221e4"
  },
  {
    "url": "favorite/docs/Tools/VSCode/ESLint.html",
    "revision": "12776d3be53c774606fecd5eb2917f6b"
  },
  {
    "url": "favorite/docs/Tools/VSCode/index.html",
    "revision": "4aae60b9323de3950808ef82acbf11d6"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Plugins.html",
    "revision": "f649ab911325e591fc719729fd66e308"
  },
  {
    "url": "favorite/docs/Tools/VSCode/React.html",
    "revision": "10799de0fc65622c1c8ca29900b67d77"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Reference.html",
    "revision": "a66ae9077364aadecf59d80a5294182f"
  },
  {
    "url": "favorite/docs/Tools/VSCode/Usage.html",
    "revision": "6d89e8717251b31079ab9a3c054a3357"
  },
  {
    "url": "favorite/docs/VScode_Settings_Sync.html",
    "revision": "a5e19992b08751e43bdab0c9ecf4326d"
  },
  {
    "url": "favorite/index.html",
    "revision": "024be1a24a22c646dd3b2d9bd2c08069"
  },
  {
    "url": "index.html",
    "revision": "4ef2a81ad51e34efb7f48185b574b2af"
  },
  {
    "url": "logo.png",
    "revision": "495bf2ec45ed3b4afdb9614aec823fcb"
  },
  {
    "url": "note/docs/A_Central_Discipline_Life_Science.html",
    "revision": "ec8e88c6a77f2738f611bbc37eb4dea4"
  },
  {
    "url": "note/docs/Doraemon_Why_JingXiang_Marry_DaXiong.html",
    "revision": "5ab34f44b448112c1062e4285031e4d4"
  },
  {
    "url": "note/docs/Luck_is_the_Universal_Passport.html",
    "revision": "ffd85728c0121cbd44ba3847bf3d99e6"
  },
  {
    "url": "note/docs/Play_with_the_Best.html",
    "revision": "f8fe941f715560d2bbe02282298db16c"
  },
  {
    "url": "note/docs/Predestination.html",
    "revision": "4858f36986ce54ff971dd9064f3b7de7"
  },
  {
    "url": "note/docs/Review_Life_3.0.html",
    "revision": "338c3480e0bd67c35613f8a40035baa6"
  },
  {
    "url": "note/index.html",
    "revision": "a487338fb794bc6ae5143e71c3aede01"
  },
  {
    "url": "share/docs/20180909.html",
    "revision": "9f7eec18b7e1d389f3ef51110f77d291"
  },
  {
    "url": "share/docs/20181027.html",
    "revision": "2af9a3d6ee04f9a36260f83d6a768f9d"
  },
  {
    "url": "share/docs/20181118.html",
    "revision": "bd7481d236546443d8581d183a5dc6e3"
  },
  {
    "url": "share/docs/20190404.html",
    "revision": "1febc46bc4d940ebb4cba9ad85536364"
  },
  {
    "url": "share/index.html",
    "revision": "02eb86b67b5d1d995b8d6500acd7624a"
  },
  {
    "url": "single/about_me.html",
    "revision": "908245ff8c2e1d1e4d049b70b79ba058"
  },
  {
    "url": "single/all_article.html",
    "revision": "ab1be6b1d1f52321c32b873421b42292"
  },
  {
    "url": "single/welcome.html",
    "revision": "c72fb9181fe07ff4c9abab126fd9b86f"
  },
  {
    "url": "test/index.html",
    "revision": "cc6e499d9e9cf8aa7a9161321ce98d25"
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
